// const path = require('path');
// const crypto = require('crypto');
const mongoose = require("mongoose");
// const multer = require('multer');

// init mongoose
const mongoURI = process.env.MONGODB;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;

// Declare gfs
connection.on("error", console.error.bind(console, "connection error:"));
connection.once("open", function() {
  console.log("open");
});

module.exports = connection;
