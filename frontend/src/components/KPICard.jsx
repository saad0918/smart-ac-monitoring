export default function KPICard({
  title,
  value,
  icon,
  color
}) {
  return (
    <div className="kpi-card">
      <div className="kpi-icon">{icon}</div>

      <h3>{title}</h3>

      <h2 style={{ color }}>{value}</h2>
    </div>
  );
}