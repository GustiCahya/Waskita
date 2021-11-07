const express = require("express");
const router = express.Router();
const TelusurBahanMasuk = require("../controllers/TelusurBahanMasuk");

router.get(
  "/get",
  TelusurBahanMasuk.get
);
router.get("/count", TelusurBahanMasuk.count);
router.post(
  "/create",
  TelusurBahanMasuk.create
);
router.patch(
  "/update",
  TelusurBahanMasuk.update
);
router.delete(
  "/remove",
  TelusurBahanMasuk.remove
);

module.exports = router;
