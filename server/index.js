const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoute = require("./routes/userroute");
const travelRoute = require("./routes/travelroute");
const dbconnection = require("./db");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Database Connection
dbconnection();

// Test Route
app.get("/apitest", (req, res) => {
  res.send("Travel Itinerary AI API Running");
});

const PORT = process.env.PORT || 5000;
app.use("/user", userRoute);
app.use("/travel", travelRoute);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});