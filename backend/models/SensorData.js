const mongoose = require("mongoose");

const sensorSchema = new mongoose.Schema({
  temperature: Number,      
  humidity: Number,
  
motion: {
  type: Boolean,
  default: false
},

irStatus: {
  type: String,
  default: "No Obstacle"
},

airQuality: {
  type: Number,
  default: 0
},

acStatus: {
    type: String,
    default: "OFF"
},

acTemperature: {
    type: Number,
    default: 24
},

  swingStatus: {
    type: String,
    default: "OFF"
  },

  fanSpeed: {
  type: String,
  default: "MEDIUM"
},

  powerConsumption: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("SensorData", sensorSchema);