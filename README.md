❄️ Smart AC Monitoring System

🌐 Overview

Smart AC Monitoring System is an IoT-based application built using ESP32, React.js, Node.js, Express.js, MongoDB, and multiple sensors.

The system collects real-time temperature, humidity, air quality, motion, and obstacle data through ESP32 and displays it on a React dashboard with AC controls, alerts, analytics, energy monitoring, and AI recommendations.

✨ Features

🌡️ Real-time temperature & humidity monitoring

🌫️ Air quality monitoring

🚶 Motion detection

🚧 Obstacle detection

📺 OLED sensor display

❄️ AC temperature control

🌀 Fan speed & swing control

🚨 Alerts and buzzer notification

📊 Temperature history & analytics

⚡ Energy-saving mode

🤖 AI-based recommendations

📡 Wi-Fi and REST API communication

🏗️ System Flow

Sensors
   ↓
ESP32
   ↓ Wi-Fi
Node.js + Express
   ↓
MongoDB
   ↓
React Dashboard
   ↓
Monitoring • Analytics • AC Control

🔌 Hardware

Component

Function

ESP32

Sensor processing & Wi-Fi communication

DHT22

Temperature & humidity

MQ135

Air-quality readings

PIR Sensor

Motion detection

IR Sensor

Obstacle detection

OLED SSD1306

Local sensor display

Active Buzzer

Motion alert

📡 ESP32 Pin Configuration

DHT22      → GPIO 4
PIR        → GPIO 27
MQ135      → GPIO 33
IR Sensor  → GPIO 23
Buzzer     → GPIO 25
OLED SDA   → GPIO 21
OLED SCL   → GPIO 22

🌡️ Sensor Data

Example JSON sent by ESP32:

{
  "temperature": 27.4,
  "humidity": 80.9,
  "motion": 1,
  "airQuality": 834,
  "obstacle": 1
}

🌐 Backend API

Sensor Data

POST /api/ac/sensor-data

AC Controls

GET  /api/ac/data
PUT  /api/ac/temp/increase
PUT  /api/ac/temp/decrease
PUT  /api/ac/swing/toggle
PUT  /api/ac/fan/change

🗄️ Database

MongoDB stores sensor and AC-related information such as:

Temperature

Humidity

Air Quality

Motion

Obstacle

AC Temperature

Fan Speed

Swing Status

Timestamp

⚛️ React Dashboard

The dashboard provides:

🌡️ Temperature

💧 Humidity

🌫️ Air Quality

❄️ AC Status

🌀 Fan Speed

↕️ Swing Status

🚨 Alerts

📈 History

⚡ Energy Analytics

🤖 AI Recommendations

⚙️ Settings

🧩 Component Structure

App.jsx
├── Sidebar.jsx
├── KPICard.jsx
├── TempChart.jsx
├── AIRecommendation.jsx
└── SettingsPage.jsx

🔄 Real-Time Monitoring

The React dashboard fetches backend data and refreshes it every 5 seconds.

ESP32 → Backend → MongoDB → React Dashboard

🚨 Alert System

High temperature alert

High humidity alert

Motion detection alert

Buzzer notification

Air quality status

Obstacle detection

The current buzzer implementation is triggered directly by PIR motion detection.

⚡ Energy Saving Mode

When enabled, the current application limits the maximum AC temperature to 26°C.

Normal mode allows the AC temperature up to 30°C.

📊 Analytics

The dashboard calculates:

Maximum temperature

Minimum temperature

Average humidity

Temperature history

Energy consumption

Estimated electricity cost

🤖 AI Recommendation

The dashboard includes an AI recommendation component that provides suggestions based on the current temperature and selected AI mode.

🛠️ Tech Stack

IoT: ESP32, DHT22, MQ135, PIR, IR Sensor, OLED SSD1306, Buzzer

Frontend: React.js, JavaScript, HTML5, CSS3, React Icons

Backend: Node.js, Express.js, REST API, Mongoose

Database: MongoDB

Communication: Wi-Fi, HTTP, JSON

Tools: Arduino IDE, VS Code, Git, GitHub, Postman

📂 Project Structure

smart-ac-monitoring/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   └── package.json
│
├── esp32/
│   └── smart_ac_monitoring.ino
│
└── README.md

🚀 Getting Started

1. Clone Repository

git clone YOUR_GITHUB_REPOSITORY_URL
cd smart-ac-monitoring

2. Frontend

cd frontend
npm install
npm run dev

3. Backend

cd backend
npm install
npm start

Backend:

http://localhost:5000

4. MongoDB

Make sure MongoDB is running and configure:

MONGO_URI=mongodb://127.0.0.1:27017/smart_ac
PORT=5000

5. ESP32

Open:

esp32/smart_ac_monitoring.ino

Install the required Arduino libraries, update Wi-Fi credentials and replace the backend URL with your computer's LAN IP:

const char* serverName =
"http://YOUR_PC_IP:5000/api/ac/sensor-data";

The ESP32 and backend computer must be connected to the same network.

🧪 Testing

ESP32 Serial Monitor

Temperature: 27.40
Humidity: 80.90
Air Quality: 834
Motion Detected
Obstacle Detected

Postman

Test the available REST APIs using Postman.

Dashboard

Verify:

Sensor values

Alerts

AC controls

History

Analytics

Energy mode

AI recommendations

🔐 Security

The current project is designed primarily as a local IoT prototype.

For production deployment, recommended improvements include:

HTTPS

Authentication & authorization

Environment variables

Input validation

Secure MongoDB configuration

API access control

Encrypted communication

🧠 Key Learning

IoT architecture

ESP32 programming

Sensor integration

Wi-Fi & HTTP communication

REST API development

Node.js & Express.js

MongoDB & Mongoose

React.js

React Hooks

API integration

Dashboard development

Data visualization

Energy monitoring

AI-based recommendations

🔮 Future Improvements

🤖 Automatic AC control

📱 Mobile application

🎙️ Voice control

📊 Advanced analytics

🧠 ML-based energy prediction

🔧 Predictive maintenance

☁️ Cloud IoT monitoring

📍 Multi-room monitoring

🌐 Remote internet monitoring

🔐 Advanced authentication

🌱 Smart building integration

👨‍💻 Author

Md Saad Ali

CSE Graduate | Full-Stack Developer | AI/ML Enthusiast
