const express = require("express");
const router = express.Router();
const Telusur = require("../controllers/Telusur");

router.get(
  "/get",
  Telusur.get
);
router.post(
  "/create",
  Telusur.create
);
router.patch(
  "/update",
  Telusur.update
);
router.delete(
  "/remove",
  Telusur.remove
);
router.get("/count", Telusur.count);

module.exports = router;
