const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables FIRST
dotenv.config();

const dbconnection = require("./db");
const userRoute = require("./routes/userroute");
const travelRoute = require("./routes/travelroute");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
dbconnection();

// Routes
app.use("/user", userRoute);
app.use("/travel", travelRoute);

// Test Route
app.get("/apitest", (req, res) => {
  res.send("Travel Itinerary AI API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});