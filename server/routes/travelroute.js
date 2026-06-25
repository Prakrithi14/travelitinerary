const express = require("express");
const upload = require("../middleware/uploadmiddleware");
const authMiddleware = require("../middleware/authmiddleware");
const {
  uploadDocument,getHistory,getSharedItinerary
} = require("../controller/travelcontroller");

const router = express.Router();

router.post(
  "/upload",
  authMiddleware,
  upload.single("document"),
  uploadDocument
);
router.get(
  "/history",
  authMiddleware,
  getHistory
);
router.get(
  "/share/:shareId",
  getSharedItinerary
);

module.exports = router;