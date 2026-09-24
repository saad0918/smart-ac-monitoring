# ❄️ Smart AC Monitoring System

<h3 align="center">IoT-Based Smart Air Conditioning Monitoring & Control System</h3>

<p align="center">
  Monitor • Control • Analyze • Optimize
</p>

<p align="center">
  <img src="https://img.shields.io/badge/ESP32-IoT-blue?style=for-the-badge&logo=espressif" alt="ESP32">
  <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React">
  <img src="https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge&logo=node.js" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-REST_API-black?style=for-the-badge&logo=express" alt="Express.js">
  <img src="https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge&logo=mongodb" alt="MongoDB">
  <img src="https://img.shields.io/badge/IoT-WiFi-orange?style=for-the-badge" alt="IoT">
</p>

---

# 🌐 Overview

**Smart AC Monitoring System** is an IoT-based air conditioning monitoring and control application built using **ESP32, React.js, Node.js, Express.js, MongoDB, and multiple sensors**.

The system collects real-time environmental data such as **temperature, humidity, air quality, motion, and obstacle detection** using sensors connected to the ESP32.

The collected data is transmitted through Wi-Fi to a Node.js/Express.js backend and stored in MongoDB. A React.js dashboard displays the sensor data and provides **AC controls, alerts, analytics, energy monitoring, and AI-based recommendations**.

The project demonstrates **IoT communication, sensor integration, REST API development, database management, React state management, real-time monitoring, and dashboard development**.

---

# ✨ Features

## 🌡️ Environmental Monitoring

* Real-time temperature monitoring
* Humidity monitoring
* Air quality monitoring
* Motion detection
* Obstacle detection
* OLED sensor display
* Continuous sensor data transmission

## ❄️ AC Monitoring & Control

* Current AC temperature display
* Increase AC temperature
* Decrease AC temperature
* Fan speed control
* Swing control
* AC status monitoring
* Energy saving mode

## 🚨 Alert System

* High temperature alert
* High humidity alert
* Motion detection alert
* Buzzer notification
* Air quality status
* Obstacle detection

## 📊 Analytics

* Temperature history
* Maximum temperature
* Minimum temperature
* Average humidity
* Energy consumption
* Estimated electricity cost
* Historical sensor data

## 🤖 AI Features

* AI-based AC recommendations
* Temperature-based recommendations
* Energy-saving recommendations
* Normal and energy-saving AI modes

## ⚡ IoT Features

* ESP32-based sensor system
* Wi-Fi communication
* HTTP communication
* REST API integration
* Real-time sensor data transmission

---

# 🏗️ Application Flow

```text
                         Sensors
                            │
             ┌──────────────┼──────────────┐
             ▼              ▼              ▼
           DHT22          MQ135          PIR
        Temperature      Air Quality     Motion
             │              │              │
             └──────────────┼──────────────┘
                            ▼
                          ESP32
                            │
                          Wi-Fi
                            │
                            ▼
                    Node.js + Express
                            │
                            ▼
                         MongoDB
                            │
                            ▼
                     React Dashboard
                            │
          ┌─────────────────┼─────────────────┐
          ▼                 ▼                 ▼
      Monitoring         Analytics       AC Controls
          │                 │                 │
          ▼                 ▼                 ▼
      Temperature       Energy Data       Temperature
      Humidity          History            Fan Speed
      Air Quality       Alerts             Swing
      Motion            AI Insights
      Obstacle
      🧠 Key Learning

Through this project, I worked with:

IoT architecture
ESP32 programming
Sensor integration
DHT22 temperature and humidity sensing
MQ135 air-quality sensing
PIR motion detection
IR obstacle detection
OLED display integration
Wi-Fi communication
HTTP communication
REST API development
Node.js
Express.js
MongoDB
Mongoose
React.js
React Hooks
Props
Conditional rendering
API integration
Dashboard development
Data visualization
Energy monitoring
AI-based recommendations
🔮 Future Improvements
🤖 Automatic AC control based on environmental conditions
📱 Dedicated mobile application
🎙️ Voice control using smart assistants
📊 Advanced analytics
🧠 Machine learning-based energy prediction
🔧 Predictive AC maintenance
☁️ Cloud-based IoT monitoring
📍 Multi-room monitoring
🌐 Remote monitoring through the internet
🔐 Advanced authentication and authorization
📈 Long-term energy consumption analysis
🌱 Smart building integration
👨‍💻 Author
Md Saad Ali

CSE Graduate | Full-Stack Developer | AI/ML Enthusiast

<p> <a href="https://github.com/saad0918"> <img src="https://img.shields.io/badge/GitHub-saad0918-181717?style=for-the-badge&logo=github" /> </a> </p>
<p align="center"> ⭐ If you like this project, consider giving it a star! </p> <p align="center"> <b>❄️ Monitor. Control. Optimize. 🚀</b> </p> ```

This is the same style as your Weather App README: badges → overview → features → flow → API → components → tech stack → structure → setup → learning → future → author.
