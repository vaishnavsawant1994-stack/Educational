import "../Classes.css";

import {
  FaGraduationCap,
  FaBookOpen,
  FaAward,
  FaUsers,
  FaHashtag,
  FaDoorOpen,
  FaUserGraduate,
  FaChartLine,
  FaCalendarAlt,
  FaRegFileAlt,
} from "react-icons/fa";

// Update this path according to your project structure
import classDetailsImage from "../../../../assets/classDetails.png";
export default function ClassDetails({ selected }) {
  return (
    <div className="detail-card">

      {/* Header */}
      <div className="detail-header">

        <div className="detail-heading">

          <h2>Class Details</h2>

          <p className="detail-subtitle">
            Overview of the selected class
          </p>

          <div className="detail-line"></div>

        </div>

        <div className="detail-header-image">

          <img
            src={classDetailsImage}
            alt="Class Details"
          />

        </div>

      </div>

      {selected ? (
        <>

          {/* Class */}

          <div className="detail-row">

            <div className="detail-left">

              <div className="detail-icon purple">
                <FaGraduationCap />
              </div>

              <span>Class</span>

            </div>

            <div className="detail-value">
              {selected.className || "Not Added"}
            </div>

          </div>

          {/* Subject */}

          <div className="detail-row">

            <div className="detail-left">

              <div className="detail-icon blue">
                <FaBookOpen />
              </div>

              <span>Subject</span>

            </div>

            <div className="detail-value subject">
              {selected.subject || "Not Added"}
            </div>

          </div>

          {/* Grade */}

          <div className="detail-row">

            <div className="detail-left">

              <div className="detail-icon green">
                <FaAward />
              </div>

              <span>Grade</span>

            </div>

            <div className="detail-value grade">
              {selected.grade || "Not Added"}
            </div>

          </div>

          {/* Section */}

          <div className="detail-row">

            <div className="detail-left">

              <div className="detail-icon orange">
                <FaUsers />
              </div>

              <span>Section</span>

            </div>

            <div className="detail-value section">
              {selected.section || "Not Added"}
            </div>

          </div>

          {/* Class Code */}

          <div className="detail-row">

            <div className="detail-left">

              <div className="detail-icon pink">
                <FaHashtag />
              </div>

              <span>Class Code</span>

            </div>

            <div className="detail-value code">
              {selected.classCode || "Not Generated"}
            </div>

          </div>

          {/* Room */}

          <div className="detail-row">

            <div className="detail-left">

              <div className="detail-icon violet">
                <FaDoorOpen />
              </div>

              <span>Room / Batch</span>

            </div>

            <div className="detail-value room">
              {selected.room || "Not Assigned"}
            </div>

          </div>

          {/* Students */}

          <div className="detail-row">

            <div className="detail-left">

              <div className="detail-icon blue">
                <FaUserGraduate />
              </div>

              <span>Students</span>

            </div>

            <div className="detail-value students">
              {selected.students ||
                selected.totalStudents ||
                0}
            </div>

          </div>

          {/* Attendance */}

          <div className="detail-row">

            <div className="detail-left">

              <div className="detail-icon green">
                <FaChartLine />
              </div>

              <span>Attendance</span>

            </div>

            <div className="detail-value attendance">
              {selected.attendance || "0%"}
            </div>

          </div>

          {/* Timetable */}

          <div className="detail-row">

            <div className="detail-left">

              <div className="detail-icon yellow">
                <FaCalendarAlt />
              </div>

              <span>Timetable</span>

            </div>

            <div className="detail-value timetable">
              {selected.timetable || "Not Available"}
            </div>

          </div>

          {/* Description */}

          <div className="detail-row">

            <div className="detail-left">

              <div className="detail-icon purple">
                <FaRegFileAlt />
              </div>

              <span>Description</span>

            </div>

            <div className="detail-value description">
              {selected.description || "No Description"}
            </div>

          </div>

        </>
      ) : (
        <div className="empty-class">

          <FaGraduationCap
            style={{
              fontSize: "60px",
              color: "#7B5CFA",
              marginBottom: "20px",
            }}
          />

          <h3>No Class Selected</h3>

          <p>
            Please select a class from the left panel
            to view its complete details.
          </p>

        </div>
      )}
    </div>
  );
}