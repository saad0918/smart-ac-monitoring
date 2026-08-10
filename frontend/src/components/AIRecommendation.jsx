export default function AIRecommendation({
  temp,
  aiMode,
}) {

  let message = "";

  if (aiMode === "disabled") {
    message = "🤖 AI Mode Disabled";
  }

  else if (aiMode === "aggressive") {
    message =
      temp > 26
        ? "❄ Aggressive Cooling Recommended. Set AC to 20°C."
        : "✅ Cooling is already optimal.";
  }

  else if (aiMode === "power") {
    message =
      temp > 30
        ? "⚡ Use 26°C for better energy savings."
        : "⚡ Power Saving Mode Active.";
  }

  else {
    message =
      temp > 28
        ? "❄ Reduce AC setpoint to 24°C. Estimated saving 12%."
        : "✅ Environment is stable and energy efficient.";
  }

  return (
    <div className="card">
      <h2>🧠 AI Recommendation</h2>

      <p>{message}</p>
    </div>
  );
}