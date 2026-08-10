import { useState, useEffect } from "react";

function SettingsPage({ settings, setSettings }) {
  const [localSettings, setLocalSettings] = useState(settings);

  // sync when parent updates
  useEffect(() => {
    setLocalSettings(settings);
  }, [settings]);

  // update handler
  const updateSetting = (key, value) => {
    const updated = {
      ...localSettings,
      [key]: value,
    };

    setLocalSettings(updated);
    setSettings(updated); // send to parent (REAL CONNECTION)
  };

  return (
    <div className="container">
      <h1>⚙ Settings</h1>

      {/* Theme */}
      <div className="card">
        <h2>🌙 Theme</h2>
        <select
          value={localSettings.theme}
          onChange={(e) =>
            updateSetting("theme", e.target.value)
          }
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </div>

      {/* Temperature Unit */}
      <div className="card">
        <h2>🌡 Temperature Unit</h2>
        <select
          value={localSettings.unit}
          onChange={(e) =>
            updateSetting("unit", e.target.value)
          }
        >
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
        </select>
      </div>

      {/* Alert Threshold */}
      <div className="card">
        <h2>🚨 Alert Threshold</h2>
        <input
          type="number"
          value={localSettings.tempAlert}
          onChange={(e) =>
            updateSetting(
              "tempAlert",
              Number(e.target.value)
            )
          }
        />
      </div>

      {/* Energy Mode */}
      <div className="card">
        <h2>⚡ Energy Saving Mode</h2>
        <button
          className="btn"
          onClick={() =>
            updateSetting(
              "energyMode",
              !localSettings.energyMode
            )
          }
        >
          {localSettings.energyMode
            ? "Enabled"
            : "Disabled"}
        </button>
      </div>
      {/* AI Mode */}
<div className="card">
  <h2>🤖 AI Mode</h2>

  <button
    className="btn"
    onClick={() =>
      updateSetting(
        "aiMode",
        localSettings.aiMode === "normal"
          ? "disabled"
          : "normal"
      )
    }
  >
    {localSettings.aiMode === "normal"
      ? "Enabled"
      : "Disabled"}
  </button>
</div>

    </div>
  );
}

export default SettingsPage;