const mongoose = require("mongoose");

const TelusurBendaUji = new mongoose.Schema(
  {
    _id: { type: String }, // nomor identitas
    idTelusur: { type: String },
    jumlahBendaUji: { type: Number },
    dimensi: { type: String },
    personil: [
      {
        _id: { type: String },
        nama: { type: String },
        ttd: { type: String }, // image
      }
    ],
    _createdDate: { type: Date },
    _updatedDate: { type: Date },
  },
  { collection: "TelusurBendaUji" }
);

const Model = mongoose.model("TelusurBendaUji", TelusurBendaUji);

module.exports = Model;
