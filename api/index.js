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
const TelusurBendaUji = require("./routes/TelusurBendaUji");
const TelusurHasilTest = require("./routes/TelusurHasilTest");
const TelusurProses = require("./routes/TelusurProses");
const Uploads = require("./routes/Uploads");

// Use API Routes
app.use("/Telusur", Telusur);
app.use("/TelusurBahanMasuk", TelusurBahanMasuk);
app.use("/TelusurBendaUji", TelusurBendaUji);
app.use("/TelusurHasilTest", TelusurHasilTest);
app.use("/TelusurProses", TelusurProses);
app.use("/Uploads", Uploads);

// Export the server middleware
module.exports = {
  path: "/api",
  handler: app,
};
