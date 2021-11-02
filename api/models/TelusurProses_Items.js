const mongoose = require("mongoose");

const TelusurProses_Items = new mongoose.Schema(
  {
    _id: { type: String }, // Based on uuid.v4()
    parentId: { type: String },
    globalId: { type: String },
    jamMulai: { type: Date },
    jamSelesai: { type: Date },
    jumlahPekerja: { type: String },
    cuaca: { type: String },
    penggetarTipe: { type: String },
    penggetarJumlah: { type: String },
    finishing: { type: String },
    curingSistem: { type: String },
    curingLama: { type: String },
    _createdDate: { type: Date },
    _updatedDate: { type: Date },
  },
  { collection: "TelusurProses_Items" }
);

const Model = mongoose.model("TelusurProses_Items", TelusurProses_Items);

module.exports = Model;
