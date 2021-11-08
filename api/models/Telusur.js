const mongoose = require("mongoose");

const Telusur = new mongoose.Schema(
  {
    _id: { type: String }, // Based on uuid.v4()
    businessUnit: { type: String },
    proyek: { type: String },
    form: { type: String },
    rev: { type: Date },
    idTbm: { type: String }, // reference to Telusur Bahan Masuk
    idTbu: { type: String }, // reference to Telusur Benda Uji
    idTht: { type: String }, // reference to Telusur Hasil Tes
    idTp: { type: String }, // reference to Telusur Proses
    _createdDate: { type: Date },
    _updatedDate: { type: Date },
  },
  { collection: "Telusur" }
);

const Model = mongoose.model("Telusur", Telusur);

module.exports = Model;
