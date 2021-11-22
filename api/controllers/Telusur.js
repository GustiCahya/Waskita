const uuid = require("uuid");
const Telusur = require("../models/Telusur");
const TelusurBahanMasuk = require("../models/TelusurBahanMasuk");
const TelusurBendaUji = require("../models/TelusurBendaUji");
const TelusurHasilTest = require("../models/TelusurHasilTest");
const TelusurProses = require("../models/TelusurProses");
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
      sort
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
    const count = await Telusur.countDocuments(query);
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
    const result = await telusur.create({
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
    const proyek = body.proyek;
    const isExist = await Telusur.exists({
      proyek: { $regex: `^${proyek}$`, $options: "i" },
      _id: { $ne: _id }
    });
    if(isExist){
      throw new Error("Proyek sudah pernah dibuat");
    }
    // send data
    const result = await telusur.update({
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
    const session = await Telusur.startSession();
    const result = await session.withTransaction(async () => {
      const result = await Telusur.deleteOne({ _id });
      await TelusurBahanMasuk.deleteOne({ idTelusur: _id });
      await TelusurBendaUji.deleteOne({ idTelusur: _id });
      await TelusurHasilTest.deleteOne({ idTelusur: _id });
      await TelusurProses.deleteOne({ idTelusur: _id });
      return result;
    });
    session.endSession();
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
