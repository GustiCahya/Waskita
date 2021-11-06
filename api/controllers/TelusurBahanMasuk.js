const uuid = require("uuid");
const Fawn = require("fawn");
const { pagination } = require("../utils/pagination");
const parseJsonQuery = require("../utils/parseJsonQuery");

// model
const TelusurBahanMasuk = require("../models/TelusurBahanMasuk");
const TelusurBahanMasuk_Items = require("../models/TelusurBahanMasuk_Items");
// crud
const telusurBahanMasuk = require("../services/crud/mongo")(TelusurBahanMasuk);
const tbmItems = require("../services/crud/mongo")(TelusurBahanMasuk_Items);
// tasking
const task = Fawn.Task();

//* parent
const get = async (req, res) => {
  try {
    const jsonQuery = parseJsonQuery(req.query.jsonQuery);
    const page = req.query.page;
    const limit = req.query.limit;
    const sort = req.query.sort;
    const { result, pagesLength } = await pagination(
      TelusurBahanMasuk,
      jsonQuery,
      page,
      limit,
      sort,
    );
    res.json({
      success: true,
      result,
      pagesLength,
      message: "",
    });
  } catch (err) {
    res.status(500).send(new Error(err.message));
  }
};
const count = async (req, res) => {
  try {
    const query = parseJsonQuery(req.query.jsonQuery);
    const count = await TelusurBahanMasuk.countDocuments(query);
    res.json({
      success: true,
      result: count,
      message: "",
    });
  } catch (err) {
    res.status(500).send(new Error(err.message));
  }
};
const create = async (req, res) => {
  try {
    const body = req.body;
    const _id = uuid.v4();
    const insertMongo = {
      _id,
      ...body,
    };
    const data = await telusurBahanMasuk.create({
      body: insertMongo,
    });
    res.json({
      success: true,
      result: data.result,
      message: "",
    });
  } catch (err) {
    res.status(500).send(new Error(err.message));
  }
};
const update = async (req, res) => {
  try {
    const body = req.body;
    const _id = body._id;
    // send data
    const data = await telusurBahanMasuk.update({
      body: {
        _id,
        ...body,
      },
    });
    res.json({
      success: true,
      result: data.result,
      message: "",
    });
  } catch (err) {
    res.status(500).send(new Error(err.message));
  }
};
const remove = async (req, res) => {
  try {
    const { _id } = req.query;
    const data = await telusurBahanMasuk.remove({ query: { _id } });
    res.json({
      success: true,
      result: data.result,
      message: "",
    });
  } catch (err) {
    res.status(500).send(new Error(err.message));
  }
};

//* items
const getItems = async (req, res) => {
  try {
    const jsonQuery = parseJsonQuery(req.query.jsonQuery);
    const page = req.query.page;
    const limit = req.query.limit;
    const sort = req.query.sort;
    const { result, pagesLength } = await pagination(
      TelusurBahanMasuk_Items,
      jsonQuery,
      page,
      limit,
      sort,
    );
    res.json({
      success: true,
      result,
      pagesLength,
      message: "",
    });
  } catch (err) {
    res.status(500).send(new Error(err.message));
  }
};
const countItems = async (req, res) => {
  try {
    const query = parseJsonQuery(req.query.jsonQuery);
    const count = await TelusurBahanMasuk_Items.countDocuments(query);
    res.json({
      success: true,
      result: count,
      message: "",
    });
  } catch (err) {
    res.status(500).send(new Error(err.message));
  }
};
const bulkSaveItems = async (req, res) => {
  try {
    const body = req.body;
    const data = await tbmItems.bulkUpsert({
      body,
    });
    res.json({
      success: true,
      result: data.result,
      message: "",
    });
  } catch (err) {
    res.status(500).send(new Error(err.message));
  }
};
const updateItem = async (req, res) => {
  try {
    const body = req.body;
    const _id = body._id;
    const data = await tbmItems.update({
      body: {
        _id,
        ...body,
      },
    });
    res.json({
      success: true,
      result: data.result,
      message: "",
    });
  } catch (err) {
    res.status(500).send(new Error(err.message));
  }
};
const removeItem = async (req, res) => {
  try {
    const { _id } = req.query;
    const data = await tbmItems.remove({ query: { _id } });
    res.json({
      success: true,
      result: data.result,
      message: "",
    });
  } catch (err) {
    res.status(500).send(new Error(err.message));
  }
};

module.exports = {
  get,
  create,
  update,
  remove,
  count,
  getItems,
  countItems,
  bulkSaveItems,
  updateItem,
  removeItem,
};
