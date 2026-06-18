import React from "react";
import "../../pages/Dashboard/sections/StudyMaterial.css";
const MaterialStats = ({
  total,
  uploads,
  classes,
 subjects,
  downloads,
}) => {
  const cards = [
    {
      title: "Uploaded Materials",
      value: total,
      icon: "📚",
    },

    {
      title: "Recent Uploads",
      value: uploads,
      icon: "⬆️",
    },

    {
      title: "Classes",
      value: classes,
      icon: "🏫",
    },

    {
      title: "Subjects",
      value: subjects,
      icon: "📝",
    },

    {
      title: "Downloads",
      value: downloads,
      icon: "⬇️",
    },
  ];

  return (
    <div className="stats-grid">

      {cards.map((item, index) => (
        <div
          key={index}
          className="stats-card card"
        >
          <div className="stats-icon">
            {item.icon}
          </div>

          <div className="stats-content">

            <p className="stats-title">
              {item.title}
            </p>

            <h2 className="stats-value">
              {item.value}
            </h2>

          </div>
        </div>
      ))}

    </div>
  );
};

export default MaterialStats;