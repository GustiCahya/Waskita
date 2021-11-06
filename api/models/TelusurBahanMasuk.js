const mongoose = require("mongoose");

const TelusurBahanMasuk = new mongoose.Schema(
  {
    _id: { type: String }, // nomor identitas
    idTelusur: { type: String },
    noIzin: { type: String },
    tanggalMasuk: { type: Date },
    pemasok: [
      {
        nama: { type: String },
        alamat: { type: String }
      }
    ],
    lokasiPengecoran: { type: String },
    mutuBeton: [
      { type: String }
    ],
    personil: [
      {
        nama: { type: String },
        ttd: { type: String }, // image
      }
    ],
    _createdDate: { type: Date },
    _updatedDate: { type: Date },
  },
  { collection: "TelusurBahanMasuk" }
);

const Model = mongoose.model("TelusurBahanMasuk", TelusurBahanMasuk);

module.exports = Model;
