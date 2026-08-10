export default function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <h2>❄ Smart AC</h2>

      <ul>
        <li onClick={() => setPage("dashboard")}>
          Dashboard
        </li>

        <li onClick={() => setPage("analytics")}>
          Analytics
        </li>

        <li onClick={() => setPage("settings")}>
          Settings
        </li>
      </ul>
    </div>
  );
}