const uuid = require("uuid");
const Telusur = require("../models/Telusur");
const { pagination } = require("../utils/pagination");
const parseJsonQuery = require("../utils/parseJsonQuery");

// crud
const telusur = require("../services/crud/mongo")(Telusur);

const get = async (req, res) => {
  try {
    const jsonQuery = parseJsonQuery(req.query.jsonQuery);
    const page = req.query.page;
    const limit = req.query.limit;
    const sort = req.query.sort;
    const { result, pagesLength } = await pagination(
      Telusur,
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
    const count = await Telusur.countDocuments(query);
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
    await telusur.create({
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
    await telusur.update({
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
    await telusur.remove({ query: { _id } });
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
