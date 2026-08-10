require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const acRoutes = require("./routes/acRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/ac", acRoutes);

// home route
app.get("/", (req, res) => {
  res.send("Smart AC Monitoring API Running...");
});

// DB + Server start
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});