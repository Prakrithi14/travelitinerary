const express = require("express");
const upload = require("../middleware/uploadmiddleware");

const {
  uploadDocument,
} = require("../controller/travelcontroller");

const router = express.Router();

router.post(
  "/upload",
  upload.single("document"),
  uploadDocument
);

module.exports = router;