const mongoose = require("mongoose");

const TelusurBahanMasuk = new mongoose.Schema(
  {
    _id: { type: String },
    idTelusur: { type: String },
    no: { type: String },
    noIzin: { type: String },
    tanggalMasuk: { type: Date },
    pemasok: [
      {
        _id: { type: String },
        nama: { type: String },
        alamat: { type: String }
      }
    ],
    lokasiPengecoran: { type: String },
    mutuBeton: [
      {
        _id: { type: String },
        value: { type: String },
      }
    ],
    personil: [
      {
        _id: { type: String },
        nama: { type: String },
        ttd: { type: String }, // image
      }
    ],
    items: [
      {
        _id: { type: String },
        noKendaraan: { type: String },
        noDocket: { type: String },
        jamKeluar: { type: String },
        jamDituang: { type: String },
        volAktual: { type: String },
        volKumulatif: { type: String },
        tempMasuk: { type: String },
        slumpBeton: { type: String },
        syaratSlump: { type: String },
      }
    ],
    mengetahui: Object,
    dibuatOleh: Object,
    _createdDate: { type: Date },
    _updatedDate: { type: Date },
  },
  { collection: "TelusurBahanMasuk" }
);

const Model = mongoose.model("TelusurBahanMasuk", TelusurBahanMasuk);

module.exports = Model;
