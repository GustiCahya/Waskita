const uuid = require("uuid");
const HTMLtoDOCX = require("html-to-docx/dist/html-to-docx.umd");
// const Fawn = require("fawn");
const { pagination } = require("../utils/pagination");
const parseJsonQuery = require("../utils/parseJsonQuery");

// model
const TelusurBahanMasuk = require("../models/TelusurBahanMasuk");
// crud
const telusurBahanMasuk = require("../services/crud/mongo")(TelusurBahanMasuk);
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
    res.status(500).send(err.message);
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
    const result = await telusurBahanMasuk.create({
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
    const result = await telusurBahanMasuk.update({
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
    const result = await telusurBahanMasuk.remove({ query: { _id } });
    res.json({
      success: true,
      result,
      message: "",
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
const exportDocx = async (req, res) => {
  try {
    const {content, header} = req.body;
    const buffer = await HTMLtoDOCX(content, null, {
      table: { row: { cantSplit: true } },
      footer: true,
      pageNumber: true,
    });
    console.log(buffer);
    res.attachment("Telusur Bahan Masuk.docx");
    res.status(200).send(buffer);
  } catch (err) {
    console.log(err);
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
  exportDocx,
};
