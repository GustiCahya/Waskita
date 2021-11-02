const mongoose = require("mongoose");

const Telusur = new mongoose.Schema(
  {
    _id: { type: String }, // Based on uuid.v4()
    tbmId: { type: String }, // reference to Telusur Bahan Masuk
    tbuId: { type: String }, // reference to Telusur Benda Uji
    thtId: { type: String }, // reference to Telusur Hasil Tes
    tpId: { type: String }, // reference to Telusur Proses
    _createdDate: { type: Date },
    _updatedDate: { type: Date },
  },
  { collection: "Telusur" }
);

const Model = mongoose.model("Telusur", Telusur);

module.exports = Model;
