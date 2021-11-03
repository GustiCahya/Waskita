const express = require("express");
const router = express.Router();
const TelusurBahanMasuk = require("../controllers/TelusurBahanMasuk");

//* Parent
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

//* Items
router.get(
  "/getItems",
  TelusurBahanMasuk.getItems
);
router.get("/count", TelusurBahanMasuk.count);
router.post(
  "/bulkSaveItems",
  TelusurBahanMasuk.bulkSaveItems
);
router.patch(
  "/updateItem",
  TelusurBahanMasuk.updateItem
);
router.delete(
  "/removeItem",
  TelusurBahanMasuk.removeItem
);

module.exports = router;
