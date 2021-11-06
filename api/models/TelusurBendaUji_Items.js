const mongoose = require("mongoose");

const TelusurBendaUji_Items = new mongoose.Schema(
  {
    _id: { type: String }, // Based on uuid.v4()
    parentId: { type: String },
    idTelusur: { type: String },
    noKendaraan: { type: String },
    tanggalPembuatan: { type: Date },
    jamPembuatan: { type: Date },
    kodeSilinder: { type: String },
    _createdDate: { type: Date },
    _updatedDate: { type: Date },
  },
  { collection: "TelusurBendaUji_Items" }
);

const Model = mongoose.model("TelusurBendaUji_Items", TelusurBendaUji_Items);

module.exports = Model;
