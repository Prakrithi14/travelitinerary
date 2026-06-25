const Itinerary = require("../models/itinerymodel");
const { extractTextFromPDF } = require("../services/extractservice");
const { generateItinerary } = require("../services/geminiservice");
const uploadDocument = async (req, res) => {
  try {

    const file = req.file;

    if (!file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const extractedText = await extractTextFromPDF(file.path);
    const itinerary = await generateItinerary(extractedText);
    const savedItinerary = await Itinerary.create({
  userId: req.user?.id,
  fileName: file.filename,
  extractedText,
  itinerary,
  shareId: Date.now().toString(),
});
  res.status(200).json({
  success: true,
  message: "File uploaded successfully",
  data: savedItinerary,
});

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getHistory = async (req, res) => {
  try {

    const itineraries = await Itinerary.find({
      userId: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: itineraries,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
const getSharedItinerary = async (req, res) => {
  try {
    const itinerary = await Itinerary.findOne({
      shareId: req.params.shareId,
    });

    if (!itinerary) {
      return res.status(404).json({
        success: false,
        message: "Itinerary not found",
      });
    }

    res.status(200).json({
      success: true,
      data: itinerary,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
module.exports = {
  uploadDocument,getHistory,getSharedItinerary
};