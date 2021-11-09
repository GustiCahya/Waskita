const express = require("express");
require("./db");

// Create express instnace
const app = express();

// Init body-parser options (inbuilt with express)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Require & Import API routes
const Telusur = require("./routes/Telusur");
const TelusurBahanMasuk = require("./routes/TelusurBahanMasuk");
const Uploads = require("./routes/Uploads");

// Use API Routes
app.use("/Telusur", Telusur);
app.use("/TelusurBahanMasuk", TelusurBahanMasuk);
app.use("/Uploads", Uploads);

// Export the server middleware
module.exports = {
  path: "/api",
  handler: app,
};
