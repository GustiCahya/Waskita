const express = require("express");
const router = express.Router();
const TelusurBendaUji = require("../controllers/TelusurBendaUji");

router.get(
  "/get",
  TelusurBendaUji.get
);
router.get("/count", TelusurBendaUji.count);
router.post(
  "/create",
  TelusurBendaUji.create
);
router.patch(
  "/update",
  TelusurBendaUji.update
);
router.delete(
  "/remove",
  TelusurBendaUji.remove
);

module.exports = router;
