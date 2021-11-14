const uuid = require("uuid");
// const Fawn = require("fawn");
const { pagination } = require("../utils/pagination");
const parseJsonQuery = require("../utils/parseJsonQuery");

// model
const TelusurBendaUji = require("../models/TelusurBendaUji");
// crud
const telusurBendaUji = require("../services/crud/mongo")(TelusurBendaUji);
// tasking
// const task = Fawn.Task();

//* parent
const get = async (req, res) => {
  try {
    const jsonQuery = parseJsonQuery(req.query.jsonQuery);
    const page = req.query.page;
    const limit = req.query.limit;
    const sort = req.query.sort;
    const { result, pagesLength } = await pagination(
      TelusurBendaUji,
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
    res.status(500).send(err.message);
  }
};
const count = async (req, res) => {
  try {
    const query = parseJsonQuery(req.query.jsonQuery);
    const count = await TelusurBendaUji.countDocuments(query);
    res.json({
      success: true,
      result: count,
      message: "",
    });
  } catch (err) {
    res.status(500).send(err.message);
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
    const result = await telusurBendaUji.create({
      body: insertMongo,
    });
    res.json({
      success: true,
      result,
      message: "",
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
const update = async (req, res) => {
  try {
    const body = req.body;
    const _id = body._id;
    // send data
    const result = await telusurBendaUji.update({
      body: {
        _id,
        ...body,
      },
    });
    res.json({
      success: true,
      result,
      message: "",
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
const remove = async (req, res) => {
  try {
    const { _id } = req.query;
    const result = await telusurBendaUji.remove({ query: { _id } });
    res.json({
      success: true,
      result,
      message: "",
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  get,
  create,
  update,
  remove,
  count,
};
