const express = require("express");
const router = express.Router();
const TelusurHasilTest = require("../controllers/TelusurHasilTest");

router.get(
  "/get",
  TelusurHasilTest.get
);
router.get("/count", TelusurHasilTest.count);
router.post(
  "/create",
  TelusurHasilTest.create
);
router.patch(
  "/update",
  TelusurHasilTest.update
);
router.delete(
  "/remove",
  TelusurHasilTest.remove
);

module.exports = router;
