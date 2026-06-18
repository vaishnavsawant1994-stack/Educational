import "./Classes.css";
import {
  useEffect,
  useState,
} from "react";

import {
  FaUsers,
  FaBookOpen,
} from "react-icons/fa";

const Classes = () => {
  const [classes, setClasses] =
    useState([]);

  useEffect(() => {
    const data =
      JSON.parse(
        localStorage.getItem(
          "createdClasses"
        )
      ) || [];

    setClasses(data);
  }, []);

  const deleteClass = (
    id
  ) => {
    const updated =
      classes.filter(
        (item) =>
          item.id !== id
      );

    localStorage.setItem(
      "createdClasses",
      JSON.stringify(
        updated
      )
    );

    setClasses(
      updated
    );
  };

  return (
    <div className="classes-page">

      <h1>
        My Classes
      </h1>

      {classes.length === 0 ? (

        <div className="empty">

          No Classes Created

        </div>

      ) : (

        <div className="class-list">

          {classes.map(
            (item) => (

              <div
                key={
                  item.id
                }
                className="class-card"
              >

                <div
                  className="class-color"
                  style={{
                    background:
                      item.color,
                  }}
                />

                <div className="content">

                  <h2>

                    {
                      item.className
                    }

                  </h2>

                  <p>

                    {
                      item.subject
                    }

                  </p>

                  <span>

                    {
                      item.grade
                    }

                  </span>

                  <div className="meta">

                    <span>

                      <FaBookOpen />

                      {" "}

                      {
                        item.classCode
                      }

                    </span>

                    <span>

                      <FaUsers />

                      0 Students

                    </span>

                  </div>

                </div>

                <button
                  className="delete"
                  onClick={() =>
                    deleteClass(
                      item.id
                    )
                  }
                >

                  Delete

                </button>

              </div>

            )
          )}

        </div>

      )}

    </div>
  );
};

export default Classes;