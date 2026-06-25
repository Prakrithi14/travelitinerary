const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

const generateItinerary = async (travelDetails) => {
  try {
    const prompt = `
You are an AI Travel Planner.

Using the travel booking details below, generate a well-structured travel itinerary.

Include:

- Passenger Name
- Travel Date
- Departure
- Destination
- Flight/Train/Bus Details
- Hotel Details (if available)
- Daily Schedule
- Travel Tips
- Important Notes

Travel Details:

${travelDetails}
`;

    const result = await model.generateContent(prompt);

    return result.response.text();

  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  generateItinerary,
};