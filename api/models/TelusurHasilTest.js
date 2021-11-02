const mongoose = require("mongoose");

const TelusurHasilTest = new mongoose.Schema(
  {
    _id: { type: String }, // Based on uuid.v4()
    globalId: { type: String },
    no: { type: String },
    hasilTest: [
      {
        judul: { type: String },
        ref: { type: String }, // path to file or image
      }
    ],
    laboratorium: [
      {
        nama: { type: String },
        alamat: { type: String },
      }
    ],
    saksiWaskita: [
      {
        nama: { type: String },
        ttd: { type: String }, // image
      }
    ],
    saksiPemberiKerja: [
      {
        nama: { type: String },
        ttd: { type: String }, // image
      }
    ],
    _createdDate: { type: Date },
    _updatedDate: { type: Date },
  },
  { collection: "TelusurHasilTest" }
);

const Model = mongoose.model("TelusurHasilTest", TelusurHasilTest);

module.exports = Model;
