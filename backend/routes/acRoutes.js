const express = require("express");
const router = express.Router();
const SensorData = require("../models/SensorData");

// =========================
// LIVE DATA
// =========================
router.get("/data", async (req, res) => {
  try {
    let latest = await SensorData
      .findOne()
      .sort({ createdAt: -1 });

    if (!latest) {
      latest = await SensorData.create({
        temperature: 24,
        humidity: 60,
        acStatus: "ON",
        acTemperature: 24,
        swingStatus: "OFF",
        fanSpeed: "MEDIUM",
        powerConsumption: 1.5
      });
    }
    res.json(latest);

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

// =========================
// HISTORY
// =========================
router.get("/history", async (req, res) => {
  try {

    const history = await SensorData
      .find()
      .sort({ createdAt: -1 })
      .limit(20);

    res.json(history);

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

// =========================
// AC TEMP INCREASE
// =========================
router.put("/temp/increase", async (req, res) => {
  try {
    const latest = await SensorData
      .findOne()
      .sort({ createdAt: -1 });

    if (!latest) {
      return res.status(404).json({
        message: "No data found"
      });
    }

    latest.acTemperature += 1;
    await latest.save();
    res.json(latest);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});


// =========================
// AC TEMP DECREASE
// =========================
router.put("/temp/decrease", async (req, res) => {
  try {

    const latest = await SensorData
      .findOne()
      .sort({ createdAt: -1 });

    if (!latest) {
      return res.status(404).json({
        message: "No data found"
      });
    }

    latest.acTemperature -= 1;

    await latest.save();

    res.json(latest);

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});


// =========================
// SWING TOGGLE
// =========================
router.put("/swing/toggle", async (req, res) => {
  try {

    const latest = await SensorData
      .findOne()
      .sort({ createdAt: -1 });

    if (!latest) {
      return res.status(404).json({
        message: "No data found"
      });
    }

    latest.swingStatus =
      latest.swingStatus === "ON"
        ? "OFF"
        : "ON";

    await latest.save();

    res.json(latest);

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});


// =========================
// FAN SPEED CHANGE
// =========================
router.put("/fan/change", async (req, res) => {
  try {

    const latest = await SensorData
      .findOne()
      .sort({ createdAt: -1 });

    if (!latest) {
      return res.status(404).json({
        message: "No data found"
      });
    }

    if (latest.fanSpeed === "LOW") {
      latest.fanSpeed = "MEDIUM";
    } else if (latest.fanSpeed === "MEDIUM") {
      latest.fanSpeed = "HIGH";
    } else {
      latest.fanSpeed = "LOW";
    }

    await latest.save();

    res.json(latest);

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

// =========================
// ESP32 SENSOR DATA
// =========================
router.post("/sensor-data", async (req, res) => {
  try {
    console.log("BODY:", req.body);
    const { temperature, humidity, motion,  airQuality, obstacle } = req.body;
    console.log("Obstacle =", obstacle);

    const newData = await SensorData.create({
      temperature,
      humidity,
      motion,
      airQuality,
      irStatus: 
      obstacle == 1
      ? "Obstacle Detected"
      : "No Obstacle",
      
      acStatus: "ON",
      acTemperature: 24,
      swingStatus: "OFF",
      fanSpeed: "MEDIUM",
      powerConsumption: 1.5
    });

    res.status(201).json({
      success: true,
      data: newData
    });

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

module.exports = router;