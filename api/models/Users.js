const mongoose = require("mongoose");

const Users = new mongoose.Schema(
  {
    _id: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    roles: { type: Array, required: true },
    _createdDate: { type: Date },
    _updatedDate: { type: Date },
  },
  { collection: "Users" },
);

Users.set("toJSON", {
  transform: function(doc, ret, options) {
      delete ret.password;
      return ret;
  }
});

const Model = mongoose.model("Users", Users);

module.exports = Model;
