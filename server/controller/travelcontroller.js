const { extractTextFromPDF } = require("../services/extractservice");

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

    res.status(200).json({
      success: true,
      message: "File uploaded successfully",
      extractedText,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  uploadDocument,
};