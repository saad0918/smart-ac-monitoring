❄️ Smart AC Monitoring System
🌐 Overview

Smart AC Monitoring System is an IoT-based air conditioning monitoring and control application built using ESP32, React.js, Node.js, Express.js, MongoDB, and multiple sensors.

The system collects real-time environmental data such as temperature, humidity, air quality, motion, and obstacle detection using sensors connected to the ESP32.

The collected data is transmitted through Wi-Fi to a Node.js/Express.js backend and stored in MongoDB. A React.js dashboard displays the data and provides AC controls, alerts, analytics, energy monitoring, and AI-based recommendations.

The project demonstrates IoT communication, sensor integration, REST API development, database management, React state management, real-time monitoring, and responsive dashboard development.

✨ Features
🌡️ Environmental Monitoring
Real-time temperature monitoring
Humidity monitoring
Air quality monitoring
Motion detection
Obstacle detection
OLED sensor display
Continuous sensor data transmission
❄️ AC Monitoring & Control
Current AC temperature display
Increase AC temperature
Decrease AC temperature
Fan speed control
Swing control
AC status monitoring
Energy saving mode
🚨 Alert System
High temperature alert
High humidity alert
Motion detection alert
Buzzer notification
Air quality status
Obstacle detection
📊 Analytics
Temperature history
Maximum temperature
Minimum temperature
Average humidity
Energy consumption
Estimated electricity cost
Historical sensor data
🤖 AI Features
AI-based AC recommendations
Temperature-based recommendations
Energy-saving recommendations
Normal and energy-saving AI modes
⚡ IoT Features
ESP32-based sensor system
Wi-Fi communication
HTTP communication
REST API integration
Real-time sensor data transmission
🏗️ Application Flow
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
🔌 IoT Communication Flow
DHT22 ──────────────┐
MQ135 ──────────────┤
PIR ────────────────┤
IR Sensor ──────────┤
                    ▼
                  ESP32
                    │
                    │ Wi-Fi
                    ▼
              HTTP POST Request
                    │
                    ▼
          Node.js + Express Server
                    │
                    ▼
                 MongoDB
                    │
                    ▼
             React Dashboard
                    │
                    ▼
          User Monitoring & Control
🔧 Hardware Components
ESP32 Development Board
DHT22 Temperature & Humidity Sensor
MQ135 Air Quality Sensor
PIR Motion Sensor
IR Obstacle Sensor
OLED Display – SSD1306
Active Buzzer
Breadboard
Jumper Wires
🔬 Sensor Functions
Component	Function
DHT22	Measures temperature and humidity
MQ135	Provides air-quality sensor readings
PIR	Detects human movement
IR Sensor	Detects nearby obstacles
OLED	Displays sensor information locally
Buzzer	Provides an alert when motion is detected
ESP32	Reads sensors and sends data through Wi-Fi
📡 ESP32 Sensor Configuration

The current ESP32 implementation uses the following GPIO configuration:

DHT22          → GPIO 4
PIR Sensor     → GPIO 27
MQ135          → GPIO 33
IR Sensor      → GPIO 23
Buzzer         → GPIO 25

OLED SDA       → GPIO 21
OLED SCL       → GPIO 22
🌡️ ESP32 Sensor Data

The ESP32 reads:

float temperature = dht.readTemperature();
float humidity = dht.readHumidity();

int motion = digitalRead(PIR_PIN);
int airQuality = analogRead(MQ135_PIN);
int obstacle = digitalRead(IR_SENSOR_PIN);

The values are then converted into JSON format.

Example:

{
  "temperature": 27.4,
  "humidity": 80.9,
  "motion": 1,
  "airQuality": 834,
  "obstacle": 1
}
🔔 Buzzer Function

The buzzer is connected to:

#define BUZZER_PIN 25

The current implementation activates the buzzer when the PIR sensor detects motion.

if (motion == HIGH) {
    Serial.println("Motion Detected");
    digitalWrite(BUZZER_PIN, HIGH);
} else {
    Serial.println("No Motion");
    digitalWrite(BUZZER_PIN, LOW);
}

Therefore:

Motion Detected
       ↓
PIR = HIGH
       ↓
Buzzer = ON

The current code does not activate the buzzer directly for temperature, air quality, or obstacle detection.

📺 OLED Display

The OLED display provides local sensor information.

Example:

Temp: 27.4 C
Hum: 80.9%
Air: 834
Motion: YES
Obstacle: YES

This allows sensor readings to be monitored even without opening the web dashboard.

🌐 Backend API

The backend is developed using:

Node.js
Express.js
MongoDB
Mongoose

The ESP32 sends sensor data to:

POST /api/ac/sensor-data

Example request:

{
  "temperature": 27.4,
  "humidity": 80.9,
  "motion": 1,
  "airQuality": 834,
  "obstacle": 1
}
🔄 API Communication Flow
ESP32
  │
  │ HTTP POST
  ▼
/api/ac/sensor-data
  │
  ▼
Express.js
  │
  ▼
Mongoose
  │
  ▼
MongoDB
❄️ AC Control APIs

The React dashboard communicates with the backend using REST APIs.

Get AC Data
GET /api/ac/data
Increase AC Temperature
PUT /api/ac/temp/increase
Decrease AC Temperature
PUT /api/ac/temp/decrease
Toggle Swing
PUT /api/ac/swing/toggle
Change Fan Speed
PUT /api/ac/fan/change
🗄️ Database

The project uses MongoDB for storing sensor and AC-related information.

The stored data includes:

Temperature
Humidity
Air Quality
Motion
Obstacle
AC Status
AC Temperature
Fan Speed
Swing Status
Timestamp

Example document:

{
  "temperature": 27.4,
  "humidity": 80.9,
  "airQuality": 834,
  "motion": 1,
  "obstacle": 1,
  "acTemperature": 24,
  "fanSpeed": "Medium",
  "swing": true,
  "timestamp": "2026-09-24T10:30:00.000Z"
}
⚛️ React Dashboard

The frontend is developed using React.js.

The dashboard displays:

🌡️ Temperature
💧 Humidity
🌫️ Air Quality
❄️ AC Status
🎚️ AC Temperature
🌀 Fan Speed
↕️ Swing Status
🚶 Motion
🚧 Obstacle
🚨 Alerts
📈 History
⚡ Energy Analytics
🤖 AI Recommendations
⚙️ Settings
🧩 Component Architecture
App.jsx
 │
 ├── Sidebar.jsx
 │
 ├── KPICard.jsx
 │
 ├── TempChart.jsx
 │
 ├── AIRecommendation.jsx
 │
 └── SettingsPage.jsx
📦 React State Management

The application uses React's useState() hook for managing dashboard data and settings.

Example:

const [data, setData] = useState(null);

const [history, setHistory] = useState([]);

const [settings, setSettings] = useState({
  theme: "dark",
  unit: "celsius",
  tempAlert: 30,
  refreshRate: 5,
  historySize: 20,
  energyMode: false,
  aiMode: "normal",
});
Data State

Stores the latest sensor and AC information received from the backend.

History State

Stores previously received sensor readings for analytics.

Settings State

Stores dashboard preferences such as:

Theme
Temperature unit
Temperature alert limit
Refresh rate
History size
Energy mode
AI mode
🔄 Real-Time Data Fetching

The React dashboard requests the latest data from the backend.

const fetchData = async () => {
  try {
    const res = await fetch(
      "http://localhost:5000/api/ac/data"
    );

    const result = await res.json();

    setData(result);

    setHistory((prev) =>
      [result, ...prev].slice(0, 10)
    );
  } catch (err) {
    console.log(err);
  }
};

The dashboard refreshes the data every 5 seconds:

useEffect(() => {
  fetchData();

  const interval = setInterval(
    fetchData,
    5000
  );

  return () => clearInterval(interval);
}, []);
🚨 Alert System

The dashboard checks sensor values and generates alerts.

Temperature Alert
if (data.temperature > settings.tempAlert) {
  return "🔥 Overheating Detected!";
}
Humidity Alert
if (data.humidity > 70) {
  return "💧 High Humidity Alert!";
}
Normal Condition
🟢 All Systems Normal
🌫️ Air Quality Status

The application categorizes the MQ135 sensor reading using project-defined thresholds:

const getAirQualityStatus = (aq) => {
  if (aq === null || aq === undefined)
    return "--";

  if (aq < 500)
    return "🟢 Good";

  if (aq < 1500)
    return "🟡 Moderate";

  return "🔴 Poor";
};

These are application-level sensor-value categories rather than official AQI measurements.

⚡ Energy Saving Mode

The dashboard includes an energy-saving mode.

When energy mode is enabled, the maximum AC temperature is limited to 26°C in the current implementation.

if (
  settings.energyMode &&
  data.acTemperature >= 26
) {
  alert(
    "⚡ Energy Saving Mode: Max AC Temp is 26°C"
  );
  return;
}

In normal mode, the current application allows the AC temperature up to 30°C.

📈 Analytics

The dashboard calculates basic analytics from collected history.

Maximum Temperature
const maxTemp =
  history.length > 0
    ? Math.max(
        ...history.map(h => h.temperature)
      )
    : 0;
Minimum Temperature
const minTemp =
  history.length > 0
    ? Math.min(
        ...history.map(h => h.temperature)
      )
    : 0;
Average Humidity
const avgHumidity =
  history.length > 0
    ? (
        history.reduce(
          (a, b) => a + b.humidity,
          0
        ) / history.length
      ).toFixed(1)
    : 0;
🤖 AI Recommendation

The dashboard contains an AI recommendation component.

<AIRecommendation
  temp={data?.temperature}
  aiMode={settings.aiMode}
/>

The component can provide recommendations based on current temperature and selected AI mode.

Example:

Temperature is high.
Consider increasing the AC cooling level
or enabling energy-saving recommendations.
🌀 AC Controls

The dashboard provides controls for AC parameters.

Increase Temperature
const increaseTemp = async () => {
  await fetch(
    "http://localhost:5000/api/ac/temp/increase",
    {
      method: "PUT",
    }
  );

  await fetchData();
};
Decrease Temperature
const decreaseTemp = async () => {
  await fetch(
    "http://localhost:5000/api/ac/temp/decrease",
    {
      method: "PUT",
    }
  );

  await fetchData();
};
Swing Control
const toggleSwing = async () => {
  await fetch(
    "http://localhost:5000/api/ac/swing/toggle",
    {
      method: "PUT",
    }
  );

  await fetchData();
};
Fan Speed
const changeFanSpeed = async () => {
  await fetch(
    "http://localhost:5000/api/ac/fan/change",
    {
      method: "PUT",
    }
  );

  await fetchData();
};
🧩 Reusable Components
Sidebar

Responsible for:

Dashboard navigation
Analytics navigation
Settings navigation
Page switching
KPICard

Displays important values such as:

Temperature
Humidity
Air Quality
AC Status
TempChart

Displays historical temperature information.

AIRecommendation

Displays AI-based recommendations.

SettingsPage

Manages:

Theme
Temperature unit
Alert threshold
Refresh preferences
Energy mode
AI mode
🛠️ Tech Stack
IoT / Hardware
ESP32
DHT22
MQ135
PIR Sensor
IR Obstacle Sensor
OLED SSD1306
Active Buzzer
Frontend
React.js
JavaScript ES6+
HTML5
CSS3
React Icons
Backend
Node.js
Express.js
REST API
Mongoose
Database
MongoDB
Communication
Wi-Fi
HTTP
REST API
JSON
Development Tools
Arduino IDE
VS Code
Git
GitHub
Postman
MongoDB
📂 Project Structure
smart-ac-monitoring/
│
├── frontend/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── KPICard.jsx
│   │   │   ├── TempChart.jsx
│   │   │   ├── AIRecommendation.jsx
│   │   │   └── SettingsPage.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   └── package.json
│
├── backend/
│   │
│   ├── models/
│   │
│   ├── routes/
│   │
│   ├── controllers/
│   │
│   ├── server.js
│   └── package.json
│
├── esp32/
│   │
│   └── smart_ac_monitoring.ino
│
└── README.md
🔄 Complete System Architecture
                    ┌─────────────────┐
                    │     DHT22       │
                    │ Temp + Humidity │
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │      MQ135      │
                    │   Air Quality   │
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │      PIR        │
                    │ Motion Sensor   │
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │   IR Sensor     │
                    │    Obstacle     │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │      ESP32      │
                    │ Sensor Reading  │
                    └────────┬────────┘
                             │
                           Wi-Fi
                             │
                             ▼
                    ┌─────────────────┐
                    │ Node.js Server  │
                    │   Express.js    │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │     MongoDB     │
                    │ Sensor Database │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │   React.js      │
                    │   Dashboard     │
                    └────────┬────────┘
                             │
          ┌──────────────────┼──────────────────┐
          ▼                  ▼                  ▼
     Monitoring          Analytics          AC Control
          │                  │                  │
          ▼                  ▼                  ▼
      Sensor Data       Energy Data       Temperature
      Alerts            History            Fan Speed
      Status            AI Insights        Swing Control
🚀 Getting Started
1. Clone the Repository
git clone YOUR_GITHUB_REPOSITORY_URL
cd smart-ac-monitoring
2. Frontend Setup
cd frontend
npm install
npm run dev

The React application will start using the Vite development server.

3. Backend Setup

Open another terminal:

cd backend
npm install
npm start

The backend runs on:

http://localhost:5000
4. MongoDB Setup

Make sure MongoDB is running.

Configure the MongoDB connection in the backend environment/configuration.

Example:

MONGO_URI=mongodb://127.0.0.1:27017/smart_ac
PORT=5000
5. ESP32 Setup

Open the Arduino project:

esp32/smart_ac_monitoring.ino

Install the required Arduino libraries:

WiFi
HTTPClient
DHT
Adafruit GFX
Adafruit SSD1306
Wire

Update the Wi-Fi credentials:

const char* ssid = "YOUR_WIFI_NAME";
const char* password = "YOUR_WIFI_PASSWORD";

Update the backend IP address:

const char* serverName =
"http://YOUR_PC_IP:5000/api/ac/sensor-data";

Then select the correct ESP32 board and COM port in Arduino IDE and upload the program.

🔐 Network Configuration

The ESP32 and backend computer must be connected to the same network for local communication.

Example:

ESP32
  │
  │ Wi-Fi
  ▼
Same Network
  │
  ▼
PC
  │
  ▼
Node.js : 5000

For the ESP32, use the computer's LAN IP instead of:

localhost

For example:

http://172.20.10.4:5000/api/ac/sensor-data

localhost refers to the device on which the request is being made, so it should not be used by the ESP32 to access the PC backend.

🧪 Testing

The project can be tested using:

ESP32 Serial Monitor
Temperature: 27.40
Humidity: 80.90
Air Quality: 834
Motion Detected
Obstacle Detected
API Testing

Postman can be used to test:

GET    /api/ac/data
POST   /api/ac/sensor-data
PUT    /api/ac/temp/increase
PUT    /api/ac/temp/decrease
PUT    /api/ac/swing/toggle
PUT    /api/ac/fan/change
Dashboard Testing

Verify:

Sensor values
Alerts
Temperature controls
Fan controls
Swing controls
History
Analytics
Energy mode
AI recommendations
🔐 Security Considerations

The current project is primarily designed as a local IoT prototype.

For production deployment, the system can be improved with:

HTTPS
Authentication
Authorization
Secure API endpoints
Environment variables
Password hashing
Input validation
Secure MongoDB configuration
Encrypted communication
API access control
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
useState
useEffect
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
