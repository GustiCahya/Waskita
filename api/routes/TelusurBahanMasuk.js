const express = require("express");
const router = express.Router();
const WorkerDetails = require("../controllers/WorkerDetails");

router.get(
  "/get",
  WorkerDetails.get
);
router.post(
  "/create",
  WorkerDetails.create
);
router.patch(
  "/update",
  WorkerDetails.update
);
router.delete(
  "/remove",
  WorkerDetails.remove
);
router.get("/count", WorkerDetails.count);

module.exports = router;
