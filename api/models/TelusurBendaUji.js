const mongoose = require("mongoose");

const TelusurBendaUji = new mongoose.Schema(
  {
    _id: { type: String }, // nomor identitas
    idTelusur: { type: String },
    mainForm: { type: String },
    no: { type: String },
    jumlahBendaUji: { type: String },
    dimensi: [
      {
        _id: { type: String },
        value: { type: String }
      }
    ],
    personil: [
      {
        _id: { type: String },
        nama: { type: String },
        ttd: { type: String }, // image
      }
    ],
    tanggalPembuatan: { type: Date },
    items: [
      {
        _id: { type: String },
        noKendaraan: { type: String },
        jamPembuatan: { type: String },
        kodeSilinder: { type: String },
      }
    ],
    lampiran: [
      {
        _id: { type: String },
        judul: { type: String },
        gambar: { type: String },
      }
    ],
    dibuatOleh: Object,
    _createdDate: { type: Date },
    _updatedDate: { type: Date },
  },
  { collection: "TelusurBendaUji" }
);

const Model = mongoose.model("TelusurBendaUji", TelusurBendaUji);

module.exports = Model;
