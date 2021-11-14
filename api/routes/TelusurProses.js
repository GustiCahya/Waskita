const express = require("express");
const router = express.Router();
const TelusurProses = require("../controllers/TelusurProses");

router.get(
  "/get",
  TelusurProses.get
);
router.get("/count", TelusurProses.count);
router.post(
  "/create",
  TelusurProses.create
);
router.patch(
  "/update",
  TelusurProses.update
);
router.delete(
  "/remove",
  TelusurProses.remove
);

module.exports = router;
