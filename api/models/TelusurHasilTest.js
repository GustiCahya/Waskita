const mongoose = require("mongoose");

const TelusurHasilTest = new mongoose.Schema(
  {
    _id: { type: String }, // nomor identitas
    idTelusur: { type: String },
    no: { type: String },
    hasilTest: [
      {
        _id: { type: String },
        judul: { type: String },
        gambar: { type: String },
      }
    ],
    laboratorium: [
      {
        _id: { type: String },
        nama: { type: String },
        alamat: { type: String },
      }
    ],
    saksiWaskita: [
      {
        _id: { type: String },
        nama: { type: String },
        ttd: { type: String }, // image
      }
    ],
    saksiPemberiKerja: [
      {
        _id: { type: String },
        nama: { type: String },
        ttd: { type: String }, // image
      }
    ],
    items: [
      {
        _id: { type: String },
        kodeSilinder: { type: String },
        tanggalPembuatan: { type: Date },
        tanggalPengetesan: { type: Date },
        umurHari: { type: String },
        perkiraanDensity: { type: String },
        perkiraanTekan: { type: String },
        hasilDensity: { type: String },
        hasilTekan: { type: String },
      }
    ],
    dibuatOleh: Object,
    _createdDate: { type: Date },
    _updatedDate: { type: Date },
  },
  { collection: "TelusurHasilTest" }
);

const Model = mongoose.model("TelusurHasilTest", TelusurHasilTest);

module.exports = Model;
