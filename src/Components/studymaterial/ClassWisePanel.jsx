import React from "react";
import "../../pages/Dashboard/sections/StudyMaterial.css";
const classData = [
  {
    class: "Class 1",
    count: 84,
  },

  {
    class: "Class 2",
    count: 91,
  },

  {
    class: "Class 5",
    count: 102,
  },

  {
    class: "Class 8",
    count: 146,
  },

  {
    class: "Class 10",
    count: 208,
  },
];

const ClassWisePanel = () => {
  return (
    <div className="class-panel card">

      <div className="panel-header">

        <h3>
          Class Wise Materials
        </h3>

        <button>
          View All
        </button>

      </div>

      <div className="class-list">

        {classData.map(
          (
            item,
            index
          ) => (
            <div
              key={index}
              className="class-item"
            >

              <div>

                <h4>
                  {
                    item.class
                  }
                </h4>

                <p>
                  Study Material
                </p>

              </div>

              <span>
                {
                  item.count
                }
              </span>

            </div>
          )
        )}

      </div>

    </div>
  );
};

export default ClassWisePanel;