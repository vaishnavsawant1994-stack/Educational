import React from "react";
import "../../pages/Dashboard/sections/StudyMaterial.css";
const subjectData = [
  {
    subject: "Mathematics",
    total: 214,
  },

  {
    subject: "Science",
    total: 185,
  },

  {
    subject: "English",
    total: 148,
  },

  {
    subject: "Physics",
    total: 116,
  },

  {
    subject: "Chemistry",
    total: 97,
  },
];

const SubjectWisePanel = () => {
  return (
    <div className="subject-panel card">

      <div className="panel-header">

        <h3>
          Subject Wise Materials
        </h3>

        <button>
          View All
        </button>

      </div>

      <div className="subject-list">

        {subjectData.map(
          (
            item,
            index
          ) => (
            <div
              key={index}
              className="subject-item"
            >

              <div>

                <h4>
                  {item.subject}
                </h4>

                <p>
                  Available Material
                </p>

              </div>

              <div className="subject-count">
                {item.total}
              </div>

            </div>
          )
        )}

      </div>

    </div>
  );
};

export default SubjectWisePanel;