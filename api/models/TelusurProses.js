const mongoose = require("mongoose");

const TelusurProses = new mongoose.Schema(
  {
    _id: { type: String }, // nomor identitas
    globalId: { type: String },
    no: { type: String },
    tanggalPengecoran: { type: Date },
    noDetail: { type: String },
    personil: [
      {
        nama: { type: String },
        ttd: { type: String }, // image
      }
    ],
    jumlahPekerja: { type: Number },
    cuaca: { type: String },
    _createdDate: { type: Date },
    _updatedDate: { type: Date },
  },
  { collection: "TelusurProses" }
);

const Model = mongoose.model("TelusurProses", TelusurProses);

module.exports = Model;
