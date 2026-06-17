import { useState } from "react";
import "./App.css";
import MyProfile from "./pages/MyProfile";

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  const menuItems = [
    "Dashboard",
    "My Profile",
    "Students",
    "Classes",
    "Study Material",
    "MCQ Questions",
    "Tests",
    "Results",
    "Student Reports",
    "Calendar",
    "Messages",
    "Notifications",
    "Settings",
    "Logout",
  ];

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <h1 className="brand">Teacher SaaS</h1>

        <nav className="menu">
          {menuItems.map((item) => (
            <button
              key={item}
              className={`menu-item ${activePage === item ? "active" : ""}`}
              onClick={() => setActivePage(item)}
            >
              <span className="menu-icon">{getIcon(item)}</span>
              <span>{item}</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="main-content">
        {activePage === "My Profile" ? (
          <MyProfile />
        ) : (
          <DashboardHome title={activePage} />
        )}
      </main>
    </div>
  );
}

function DashboardHome({ title }) {
  return (
    <div className="page-wrap">
      <h2 className="page-title">Teacher Dashboard</h2>

      <div className="stats-grid">
        <StatCard label="Students" value="128" />
        <StatCard label="Classes" value="8" />
        <StatCard label="Tests" value="14" />
      </div>

      <div className="activity-card">
        <h3 className="section-title">Recent Activity</h3>
        <div className="activity-list">
          <div className="activity-item">Uploaded Notes</div>
          <div className="activity-item">Created Test</div>
          <div className="activity-item">Added Student</div>
        </div>
      </div>

      <p className="muted-note">Selected: {title}</p>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="stat-card">
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
    </div>
  );
}

function getIcon(item) {
  const icons = {
    Dashboard: "▣",
    "My Profile": "☺",
    Students: "👥",
    Classes: "🏫",
    "Study Material": "📘",
    "MCQ Questions": "❓",
    Tests: "📝",
    Results: "📊",
    "Student Reports": "📄",
    Calendar: "📅",
    Messages: "💬",
    Notifications: "🔔",
    Settings: "⚙",
    Logout: "↩",
  };

  return icons[item] || "•";
}

export default App;