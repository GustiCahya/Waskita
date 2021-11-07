const mongoose = require("mongoose");

const TelusurBahanMasuk_Items = new mongoose.Schema(
  {
    _id: { type: String }, // Based on uuid.v4()
    parentId: { type: String },
    idTelusur: { type: String },
    _createdDate: { type: Date },
    _updatedDate: { type: Date },
  },
  { collection: "TelusurBahanMasuk_Items" }
);

const Model = mongoose.model("TelusurBahanMasuk_Items", TelusurBahanMasuk_Items);

module.exports = Model;
