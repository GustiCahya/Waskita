const mongoose = require("mongoose");

const TelusurProses = new mongoose.Schema(
  {
    _id: { type: String }, // nomor identitas
    idTelusur: { type: String },
    mainForm: { type: String },
    no: { type: String },
    tanggalPengecoran: { type: Date },
    noDetail: { type: String },
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
        jamMulai: { type: String },
        jamSelesai: { type: String },
        jumlahPekerja: { type: String },
        cuaca: { type: String },
        penggetarTipe: { type: String },
        penggetarJumlah: { type: String },
        finishing: { type: String },
        curingSistem: { type: String },
        curingLama: { type: String },
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
  { collection: "TelusurProses" }
);

const Model = mongoose.model("TelusurProses", TelusurProses);

module.exports = Model;
