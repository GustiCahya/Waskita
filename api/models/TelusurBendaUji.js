const mongoose = require("mongoose");

const TelusurBendaUji = new mongoose.Schema(
  {
    _id: { type: String }, // Based on uuid.v4()
    globalId: { type: String },
    no: { type: String },
    jumlahBendaUji: { type: Number },
    dimensi: { type: String },
    personil: [
      {
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
