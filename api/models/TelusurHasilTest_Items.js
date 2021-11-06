const mongoose = require("mongoose");

const TelusurHasilTest_Items = new mongoose.Schema(
  {
    _id: { type: String }, // Based on uuid.v4()
    parentId: { type: String },
    idTelusur: { type: String },
    kodeSilinder: { type: String },
    tanggalPembuatan: { type: Date },
    tanggalPengetesan: { type: Date },
    umurHari: { type: String },
    perkiraanDensity: { type: String },
    perkiraanTekan: { type: String },
    hasilDensity: { type: Number },
    hasilTekan: { type: Number },
    _createdDate: { type: Date },
    _updatedDate: { type: Date },
  },
  { collection: "TelusurHasilTest_Items" }
);

const Model = mongoose.model("TelusurHasilTest_Items", TelusurHasilTest_Items);

module.exports = Model;
