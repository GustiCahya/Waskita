const uuid = require("uuid");
const TelusurBahanMasuk = require("../models/TelusurBahanMasuk");
const { pagination } = require("../utils/pagination");
const parseJsonQuery = require("../utils/parseJsonQuery");

// crud
const telusurBahanMasuk = require("../services/crud/mongo")(TelusurBahanMasuk);

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
    res.status(500).send({
      success: false,
      message: err.message,
    });
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
    res.status(500).send({
      success: false,
      message: err.message,
    });
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
    await telusurBahanMasuk.create({
      body: insertMongo,
    });
    res.json({
      success: true,
      result: "",
      message: "",
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};
const update = async (req, res) => {
  try {
    const body = req.body;
    const _id = body._id;
    // send data
    await telusurBahanMasuk.update({
      body: {
        _id,
        ...body,
      },
    });
    res.json({
      success: true,
      result: "",
      message: "",
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};
const remove = async (req, res) => {
  try {
    const { _id } = req.query;
    await telusurBahanMasuk.remove({ query: { _id } });
    res.json({
      success: true,
      result: "",
      message: "",
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  get,
  create,
  update,
  remove,
  count,
};
