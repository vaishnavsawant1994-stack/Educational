import "../Classes.css";

import {
  FaUsers,
  FaBookOpen,
  FaGraduationCap,
  FaEye,
  FaTrashAlt,
  FaAtom,
  FaChevronRight,
} from "react-icons/fa";

export default function ClassCard({
  item,
  deleteClass,
  selectClass,
}) {
  return (
    <div className="class-card">

      {/* Left Color Line */}
      <div
        className="class-color"
        style={{
          background: item.color,
        }}
      />

      {/* Decorative Circle */}
      <div className="card-bg-circle"></div>

      {/* Left Icon */}
      <div className="card-icon-box">
        <FaAtom />
      </div>

      {/* Main Content */}
      <div className="content">

        <h2>{item.className}</h2>

        <p>{item.subject}</p>

        <div className="grade-pill">
          <FaGraduationCap />
          <span>{item.grade}</span>
        </div>

        <div className="meta">

          <div className="meta-box">

            <div className="meta-icon">
              <FaBookOpen />
            </div>

            <div>
              <h4>{item.classCode}</h4>
              <p>Class Code</p>
            </div>

          </div>

          <div className="meta-divider"></div>

          <div className="meta-box">

            <div className="meta-icon">
              <FaUsers />
            </div>

            <div>
              <h4>48 Students</h4>
              <p>Total Students</p>
            </div>

          </div>

        </div>

      </div>

      {/* Buttons */}
      <div className="card-buttons">

        <button
          className="view-btn"
          onClick={() => selectClass(item)}
        >
          <FaEye />
          <span>View</span>
          <FaChevronRight />
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteClass(item.id)}
        >
          <FaTrashAlt />
          <span>Delete</span>
          <FaChevronRight />
        </button>

      </div>

    </div>
  );
}