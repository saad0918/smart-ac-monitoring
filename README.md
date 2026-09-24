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
      ```
