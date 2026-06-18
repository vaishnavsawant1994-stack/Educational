import React from "react";
import "../../pages/Dashboard/sections/StudyMaterial.css";
const widgets = [
  {
    title: "Bulk Upload",
    desc:
      "Upload multiple study materials at once",
    icon: "📤",
  },

  {
    title: "Folder Management",
    desc:
      "Organize uploaded files",
    icon: "📁",
  },

  {
    title: "Download Reports",
    desc:
      "Export upload activity",
    icon: "📊",
  },

  {
    title: "Storage Usage",
    desc:
      "Monitor available space",
    icon: "💾",
  },

  {
    title: "Important Notice",
    desc:
      "Latest updates and reminders",
    icon: "🔔",
  },
];

const BottomWidgets = () => {
  return (
    <div className="widgets-section">

      {widgets.map(
        (
          item,
          index
        ) => (
          <div
            key={index}
            className="widget-card card"
          >

            <div className="widget-icon">
              {item.icon}
            </div>

            <h3>
              {item.title}
            </h3>

            <p>
              {item.desc}
            </p>

            <button>
              Open
            </button>

          </div>
        )
      )}

    </div>
  );
};

export default BottomWidgets;