import { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import KPICard from "./components/KPICard";
import TempChart from "./components/TempChart";
import AIRecommendation from "./components/AIRecommendation";
import SettingsPage from "./components/SettingsPage";
import { FaTemperatureHigh, FaBolt } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { BsSnow } from "react-icons/bs";

function App() {
  const [settings, setSettings] = useState({
  theme: "dark",
  unit: "celsius",
  tempAlert: 30,
  refreshRate: 5,
  historySize: 20,
  energyMode: false,
  aiMode: "normal",
});

const getAirQualityStatus = (aq) => {
  if (aq === null || aq === undefined) return "--";

  if (aq < 500) return "🟢 Good";
  if (aq < 1500) return "🟡 Moderate";
  return "🔴 Poor";
};
 const formatTemp = (temp) => {
    if (temp === null || temp === undefined) return "--";

    if (settings.unit === "fahrenheit") {
      return `${((temp * 9) / 5 + 32).toFixed(1)}°F`;
    }

    return `${temp}°C`;
  };
  const [data, setData] = useState(null);
  const [history, setHistory] = useState([]);
  const darkMode = settings.theme === "dark";
  const [page, setPage] = useState("dashboard");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const isAlert =
  data && data.temperature > settings.tempAlert;

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/ac/data");
      const result = await res.json();
      console.log("API DATA:", result);
      setData(result);
      setHistory((prev) => [result, ...prev].slice(0, 10));

      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const increaseTemp = async () => {
  if (
    settings.energyMode &&
    data.acTemperature >= 26
  ) {
    alert("⚡ Energy Saving Mode: Max AC Temp is 26°C");
    return;
  }

  if (
    !settings.energyMode &&
    data.acTemperature >= 30
  ) {
    alert("❄ Maximum AC Temp is 30°C");
    return;
  }

  await fetch("http://localhost:5000/api/ac/temp/increase", {
    method: "PUT",
  });

  await fetchData();
};

const decreaseTemp = async () => {
  if (data.acTemperature <= 16) {
    alert("❄ Minimum AC Temp is 16°C");
    return;
  }

  await fetch("http://localhost:5000/api/ac/temp/decrease", {
    method: "PUT",
  });

  await fetchData();
};

  const toggleSwing = async () => {
    await fetch("http://localhost:5000/api/ac/swing/toggle", {
      method: "PUT",
    });
    await fetchData();
  };
  const changeFanSpeed = async () => {
  await fetch(
    "http://localhost:5000/api/ac/fan/change",
    {
      method: "PUT",
    }
  );

  await fetchData();
};

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  const getAlert = () => {
    if (!data) return "";
    if (data.temperature > settings.tempAlert) return "🔥 Overheating Detected!";
    if (data.humidity > 70) return "💧 High Humidity Alert!";
    return "🟢 All Systems Normal";
  };

  if (loading) {
    return (
      <div className={darkMode ? "dark-theme" : "light-theme"}>
        <h2>Loading Dashboard...</h2>
      </div>
    );
  }
const maxTemp =
  history.length > 0
    ? Math.max(...history.map(h => h.temperature))
    : 0;

const minTemp =
  history.length > 0
    ? Math.min(...history.map(h => h.temperature))
    : 0;

const avgHumidity =
  history.length > 0
    ? (
        history.reduce((a, b) => a + b.humidity, 0) /
        history.length
      ).toFixed(1)
    : 0;
const dailyUsage = 6.5;
const weeklyUsage = (dailyUsage * 7).toFixed(1);
const monthlyUsage = (dailyUsage * 30).toFixed(1);
const energyConsumed = (
  monthlyUsage * 1.2
).toFixed(1);

const estimatedCost = (
  energyConsumed * 8
).toFixed(0);

  return (
  <div className={darkMode ? "dark-theme" : "light-theme"}>
    <button
      className="menu-btn"
      onClick={() => setOpen(!open)}
    >
      ☰
    </button>
    {open && <Sidebar setPage={setPage} />}
    <div className={`container main-content ${open ? "shifted" : ""}`}>
      {page === "dashboard" && (
        <>
      <h1>❄ Smart AC IoT Dashboard</h1>
      <button className="btn"onClick={() => setSettings((prev) => ({
      ...prev,
      theme: prev.theme === "dark" ? "light" : "dark",
    }))
  }
>
  Toggle Theme
</button>

      {/* ALERT */}
      <div className="card">
  <h2>🚨 Alert</h2>

  {isAlert ? (
    <p style={{ color: "red" }}>
      🔥 High Temperature Alert!
    </p>
  ) : (
    <p style={{ color: "lightgreen" }}>
      ✅ Temperature Normal
    </p>
  )}
</div>
      {/* KPI CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <KPICard
          title="Room Temp"
          value={formatTemp(data?.temperature)}
          icon={<FaTemperatureHigh />}
          color="#00e5ff"
        />
        <KPICard
          title="Humidity"
          value={`${data?.humidity}%`}
          icon={<WiHumidity />}
          color="#4ade80"
        />
        <KPICard
          title="AC Status"
          value={data?.acStatus}
          icon={<BsSnow />}
          color="#60a5fa"
        />
        <KPICard
          title="Power"
          value={`${data?.powerConsumption} kWh`}
          icon={<FaBolt />}
          color="#facc15"
        />
        <KPICard
        title="Air Quality"
        value={getAirQualityStatus(data?.airQuality)}
        icon={"🌫️"}
        color="#ff6b6b"
        />
      </div>
      <div
      className="card-container"style={{ marginTop: "20px" }}
      >
        <div className="card">
          <h2>🚶 Motion Status</h2>
          <h3>
            {data?.motion
            ? "🟢 Motion Detected"
            : "🔴 No Motion"}
            </h3>
        </div>
        <div className="card">
          <h2>🚧 Obstacle Status</h2>
          <h3>
            {data?.irStatus === "Obstacle Detected"
            ? "🚨 Object Nearby"
            : "✅ Path Clear"}
          </h3>
        </div>
        <div className="card">
          <h2>❄ AC Temp</h2>
          <p>{formatTemp(data.acTemperature)}</p>
        <div
        style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
      }}
    >
      <button className="btn" onClick={increaseTemp}>
        +
      </button>

      <button className="btn" onClick={decreaseTemp}>
        -
      </button>
    </div>
  </div>
  <div className="card">
    <h2>🌀 Swing</h2>
    <p>{data.swingStatus}</p>

    <button className="btn" onClick={toggleSwing}>
      Toggle
    </button>
  </div>
  <div className="card">
    <h2>🌪 Fan Speed</h2>
    <p>{data.fanSpeed}</p>
    <button
      className="btn"
      onClick={changeFanSpeed}
    >
      Change Speed
    </button>
  </div>
</div>
      {/* GRAPH */}
      <div className="card" style={{ marginTop: "20px" }}>
        <TempChart history={history} />
        <small>Last 10 readings</small>
      </div>

      {/* HISTORY */}
      <div className="card" style={{ marginTop: "20px" }}>
        <h2>📊 History</h2>

        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Room Temp</th>
              <th>Humidity</th>
              <th>AC</th>
              <th>AC Temp</th>
              <th>Swing</th>
            </tr>
          </thead>

          <tbody>
            {history.map((h, i) => (
              <tr key={i}>
                <td>{formatTemp(h.temperature)}</td>
                <td>{h.humidity}%</td>
                <td>{h.acStatus}</td>
                <td>{h.acTemperature}°C</td>
                <td>{h.swingStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* AI */}
      <div style={{ marginTop: "20px" }}>
        <AIRecommendation temp={data?.temperature} aiMode={settings.aiMode}/>
        </div>
        </>
      )}

      {page === "analytics" && (
  <div>
    <h1>📈 Analytics</h1>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      <div className="card">
        <h2>📅 Daily Usage</h2>
        <p>{dailyUsage} hrs</p>
      </div>

      <div className="card">
        <h2>📊 Weekly Usage</h2>
        <p>{weeklyUsage} hrs</p>
      </div>

      <div className="card">
        <h2>📈 Monthly Usage</h2>
        <p>{monthlyUsage} hrs</p>
      </div>

      <div className="card">
        <h2>🔥Max Temperature</h2>
        <p>{maxTemp}°C</p>
      </div>

      <div className="card">
        <h2> ❄ Min Temperature</h2>
        <p>{minTemp}°C</p>
      </div>

      <div className="card">
        <h2>💧 Avg Humidity</h2>
        <p>{avgHumidity}%</p>
      </div>

      <div className="card">
        <h2>⚡ Energy Consumed</h2>
        <p>{energyConsumed} kWh</p>
      </div>

      <div className="card">
        <h2>💰 Estimated Cost</h2>
        <p>₹{estimatedCost}</p>
        </div>
    </div>
  </div>
)}

{page === "settings" && (
  <SettingsPage
  settings={settings}
  setSettings={setSettings}
  />
)}
    </div>
  </div>
); 
}

export default App;