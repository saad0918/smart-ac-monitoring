import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function TempChart({ history }) {

  const chartData = history.map((item, index) => ({
    name: index + 1,
    temp: item.temperature
  }));

  return (
    <div className="card">
      <h2>📈 Temperature Trend</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <XAxis dataKey="name" 
          tick={{ fill: "#ffffff" }}
          />
          <YAxis 
          tick={{ fill: "#ffffff" }}/>
          <Tooltip 
          />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#00e5ff"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}