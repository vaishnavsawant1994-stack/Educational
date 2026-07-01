import "./AssignStudentsModal.css";
import { useMemo, useState } from "react";

import {
  FaTimes,
  FaSearch,
  FaFilter,
  FaUsers,
  FaUserGraduate,
} from "react-icons/fa";

const initialStudents = [
  {
    id: 1,
    name: "Rahul Sharma",
    roll: "S23101",
    currentClass: "Class 9",
    batch: "Batch B",
    avatar:
      "https://randomuser.me/api/portraits/men/11.jpg",
  },

  {
    id: 2,
    name: "Neha Verma",
    roll: "S23102",
    currentClass: "Class 9",
    batch: "Batch B",
    avatar:
      "https://randomuser.me/api/portraits/women/14.jpg",
  },

  {
    id: 3,
    name: "Aman Kumar",
    roll: "S23103",
    currentClass: "Class 10",
    batch: "Batch A",
    avatar:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },

  {
    id: 4,
    name: "Priya Singh",
    roll: "S23104",
    currentClass: "Class 9",
    batch: "Batch C",
    avatar:
      "https://randomuser.me/api/portraits/women/31.jpg",
  },

  {
    id: 5,
    name: "Rohan Patel",
    roll: "S23105",
    currentClass: "Class 10",
    batch: "Batch A",
    avatar:
      "https://randomuser.me/api/portraits/men/42.jpg",
  },

  {
    id: 6,
    name: "Sneha Gupta",
    roll: "S23106",
    currentClass: "Class 9",
    batch: "Batch C",
    avatar:
      "https://randomuser.me/api/portraits/women/65.jpg",
  },

  {
    id: 7,
    name: "Yash Gupta",
    roll: "S23107",
    currentClass: "Class 10",
    batch: "Batch B",
    avatar:
      "https://randomuser.me/api/portraits/men/55.jpg",
  },

  {
    id: 8,
    name: "Kavya Joshi",
    roll: "S23108",
    currentClass: "Class 9",
    batch: "Batch A",
    avatar:
      "https://randomuser.me/api/portraits/women/72.jpg",
  },
];

export default function AssignStudentsModal({
  open,
  onClose,
}) {
  const [search, setSearch] =
    useState("");

  const [
    selected,
    setSelected,
  ] = useState([]);

  const [
    assignClass,
    setAssignClass,
  ] =
    useState("Class 10");

  const [
    assignBatch,
    setAssignBatch,
  ] =
    useState("Batch A");

  const filtered =
    useMemo(() => {
      return initialStudents.filter(
        (s) =>
          s.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          s.roll
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );
    }, [search]);

  const toggleStudent =
    (student) => {
      const exists =
        selected.find(
          (i) =>
            i.id ===
            student.id
        );

      if (exists) {
        setSelected(
          selected.filter(
            (i) =>
              i.id !==
              student.id
          )
        );
      } else {
        setSelected([
          ...selected,
          student,
        ]);
      }
    };

  const removeStudent =
    (id) => {
      setSelected(
        selected.filter(
          (s) =>
            s.id !== id
        )
      );
    };

  const assignStudents =
    () => {
      const existing =
        JSON.parse(
          localStorage.getItem(
            "assignedStudents"
          )
        ) || [];

      const payload =
        selected.map(
          (s) => ({
            ...s,
            assignClass,
            assignBatch,
          })
        );

      localStorage.setItem(
        "assignedStudents",
        JSON.stringify([
          ...existing,
          ...payload,
        ])
      );

      alert(
        `${selected.length} students assigned`
      );

      onClose();

      setSelected([]);
    };

  if (!open)
    return null;

  return (
    <div className="assign-overlay">

      <div className="assign-modal">

        <button
          className="assign-close"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        <div className="assign-top">

          <div>

            <h1>
              Assign Students
            </h1>

            <p>
              Allocate
              students
              into
              classes
              and
              batches
            </p>

          </div>

        </div>

        <div className="assign-body">

          <div className="assign-left">

            <div className="assign-search">

              <div>

                <FaSearch />

                <input
                  placeholder="Search students"
                  value={search}
                  onChange={(
                    e
                  ) =>
                    setSearch(
                      e
                        .target
                        .value
                    )
                  }
                />

              </div>

              <button>

                <FaFilter />

                Filters

              </button>

            </div>

            <div className="assign-table">

              {filtered.map(
                (
                  student
                ) => {

                  const active =
                    selected.find(
                      (
                        x
                      ) =>
                        x.id ===
                        student.id
                    );

                  return (
                    <div
                      key={
                        student.id
                      }
                      className={`student-row ${active ? "selected" : ""}`}
                      onClick={() =>
                        toggleStudent(
                          student
                        )
                      }
                    >

                      <input
                        type="checkbox"
                        checked={!!active}
                        readOnly
                      />

                      <img
                        src={
                          student.avatar
                        }
                        alt=""
                      />

                      <span>
                        {
                          student.name
                        }
                      </span>

                      <span>
                        {
                          student.roll
                        }
                      </span>

                      <span>
                        {
                          student.currentClass
                        }
                      </span>

                      <span>
                        {
                          student.batch
                        }
                      </span>

                    </div>
                  );
                }
              )}

            </div>

          </div>

          <div className="assign-right">

            <h2>
              Assignment
              Details
            </h2>

            <select
              value={
                assignClass
              }
              onChange={(
                e
              ) =>
                setAssignClass(
                  e
                    .target
                    .value
                )
              }
            >

              <option>
                Class
                10
              </option>

              <option>
                Class
                11
              </option>

              <option>
                Class
                12
              </option>

            </select>

            <select
              value={
                assignBatch
              }
              onChange={(
                e
              ) =>
                setAssignBatch(
                  e
                    .target
                    .value
                )
              }
            >

              <option>
                Batch
                A
              </option>

              <option>
                Batch
                B
              </option>

              <option>
                Batch
                C
              </option>

            </select>

            <div className="selected-box">

              <FaUsers />

              <div>

                <p>
                  Students
                </p>

                <h1>
                  {
                    selected.length
                  }
                </h1>

              </div>

            </div>

            <div className="selected-list">

              {selected.map(
                (
                  s
                ) => (
                  <div
                    key={
                      s.id
                    }
                  >

                    <img
                      src={
                        s.avatar
                      }
                    />

                    <span>
                      {
                        s.name
                      }
                    </span>

                    <button
                      onClick={() =>
                        removeStudent(
                          s.id
                        )
                      }
                    >
                      ×
                    </button>

                  </div>
                )
              )}

            </div>

            <div className="assign-actions">

              <button
                onClick={
                  onClose
                }
              >
                Cancel
              </button>

              <button
                onClick={
                  assignStudents
                }
              >

                <FaUserGraduate />

                Assign
                Students

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}