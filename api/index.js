const express = require("express");
require("./db");

// Create express instnace
const app = express();

// Init body-parser options (inbuilt with express)
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

// Require & Import API routes
const Telusur = require("./routes/Telusur");
const TelusurBahanMasuk = require("./routes/TelusurBahanMasuk");
const TelusurBendaUji = require("./routes/TelusurBendaUji");
const TelusurHasilTest = require("./routes/TelusurHasilTest");
const TelusurProses = require("./routes/TelusurProses");
const Users = require("./routes/Users");
const Uploads = require("./routes/Uploads");

// Use API Routes
app.use("/Telusur", Telusur);
app.use("/TelusurBahanMasuk", TelusurBahanMasuk);
app.use("/TelusurBendaUji", TelusurBendaUji);
app.use("/TelusurHasilTest", TelusurHasilTest);
app.use("/TelusurProses", TelusurProses);
app.use("/Users", Users);
app.use("/Uploads", Uploads);

// Export the server middleware
module.exports = {
  path: "/api",
  handler: app,
};
