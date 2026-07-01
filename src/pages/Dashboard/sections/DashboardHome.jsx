import "./DashboardHome.css";
import React, {
  useState,
  useEffect,
} from "react";
import Announcement from "./Announcement";
import CreateClassModal from "../../../Components/CreateClassModal";
import UploadStudyMaterialModal from "./UploadStudyMaterialModal";
import NotificationRequestPopup from "./NotificationRequestPopup";
import teacherImage from "../../../assets/teacher.png";
import {
  FaPlus,
  FaPaperPlane,
  FaUpload,
  FaCalendarAlt,
  FaUsers,
  FaChartLine,
  FaClipboardList,
  FaChevronDown
} from "react-icons/fa";

const DashboardHome = () => {
  const [openAnnouncement, setOpenAnnouncement] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openUpload, setOpenUpload] = useState(false);

  const [selectedMonth, setSelectedMonth] =
    useState("This Month");
const [
showNotifications,
setShowNotifications
]=useState(false);
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Priya Sharma",
      msg: "Requesting a meeting to discuss doubts in Data Structures.",
      time: "Today • 4:30 PM",
      status: "Pending",
    },
    {
      id: 2,
      name: "Aman Verma",
      msg: "Need explanation for recursion topic in Java.",
      time: "Today • 6:00 PM",
      status: "Pending",
    },
    {
      id: 3,
      name: "Neha Gupta",
      msg: "Want to discuss project ideas.",
      time: "Tomorrow • 11:00 AM",
      status: "Pending",
    },
  ]);

  const schedule = [
    {
      id: 1,
      time: "08:30 AM",
      title: "Class 10A — Computer Science",
      action: "Join Class",
    },
    {
      id: 2,
      time: "10:00 AM",
      title: "Class 10B — Data Structures",
      action: "Join Class",
    },
    {
      id: 3,
      time: "12:00 PM",
      title: "Parent Meeting",
      action: "Meeting",
    },
    {
      id: 4,
      time: "02:00 PM",
      title: "Test Review — Class 10A",
      action: "Review",
    },
    {
      id: 5,
      time: "03:30 PM",
      title: "Project Guidance Session",
      action: "Guidance",
    },
  ];

  const updateStatus = (id, status) => {
    setRequests((prev) =>
      prev.map((r) =>
        r.id === id
          ? {
              ...r,
              status,
            }
          : r
      )
    );
  };

  const openSchedule = (item) => {
    alert(`Opening: ${item}`);
  };

  const viewAllNotifications = () => {
setShowNotifications(true);
};

  const viewAllSchedule = () => {
    alert("Opening Schedule");
  };

  const [teacher, setTeacher] = useState(null);

useEffect(() => {
  const currentTeacher = JSON.parse(
    localStorage.getItem("currentTeacher")
  );

  setTeacher(currentTeacher);
}, []);

  return (
    <>
      <div className="teacher-home">

        {/* HERO + REQUEST */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "2fr 520px",
            gap: "20px",
          }}
        >

          <div className="hero">

            <div className="hero-left">

              <div className="welcome-badge">
  👋 Good to see you !
</div>

<p className="welcome">
  Welcome back,
</p>
              <h1>
                {teacher?.fullName} 👋
              </h1>

              <p className="sub">
                Manage your classes and empower students.
              </p>


<div className="hero-stats">

  <div className="mini-card">
    <div className="card-icon blue">
      <FaCalendarAlt />
    </div>

    <span>Today's Classes</span>

    <h2 className="blue-text">5</h2>
  </div>

  <div className="mini-card">
    <div className="card-icon green">
      <FaUsers />
    </div>

    <span>Students</span>

    <h2 className="green-text">248</h2>
  </div>

  <div className="mini-card">
    <div className="card-icon purple">
      <FaChartLine />
    </div>

    <span>Attendance</span>

    <h2 className="purple-text">91%</h2>
  </div>

  <div className="mini-card">
    <div className="card-icon orange">
      <FaClipboardList />
    </div>

    <span>Pending Tasks</span>

    <h2 className="orange-text">12</h2>
  </div>

</div>

              <div className="action-row">

                <button
                  className="action-btn"
                  onClick={() =>
                    setOpenModal(true)
                  }
                >
                  <FaPlus />
                  Create Class
                </button>

                <button
                  className="action-btn"
                  onClick={() =>
                    setOpenAnnouncement(
                      true
                    )
                  }
                >
                  <FaPaperPlane />
                  Announcement
                </button>

                <button
className="action-btn"
onClick={() => setOpenUpload(true)}
>
<FaUpload />
Upload Material
</button>

{openUpload && (
<UploadStudyMaterialModal
onClose={() => setOpenUpload(false)}
/>
)}

              </div>

            </div>
            

            <div className="hero-right">

              <div className="hero-right-img">
  <img
    src={teacher}
    alt="Teacher Hero"
  />
</div>
            </div>

          </div>

          <div className="requests">

            <div className="card-head">
{/*Notificatio and Request */}
              <h3>
                Notifications & Requests
              </h3>

          <button
className="view-btn"
onClick={viewAllNotifications}
>

View All

</button>

            </div>

            {requests.map(
              (item) => (
                <div
                  key={item.id}
                  className="request"
                >

                  <h4>
                    {item.name}
                  </h4>

                  <p>
                    {item.msg}
                  </p>

                  <small>
                    {item.time}
                  </small>

                  <div
                    style={{
                      display:
                        "flex",
                      gap: "10px",
                      marginTop:
                        "14px",
                    }}
                  >

                    <button
                      onClick={() =>
                        updateStatus(
                          item.id,
                          "Accepted"
                        )
                      }
                    >
                      Accept
                    </button>

                    <button
                      onClick={() =>
                        updateStatus(
                          item.id,
                          "Rescheduled"
                        )
                      }
                    >
                      Reschedule
                    </button>

                    <button
                      onClick={() =>
                        updateStatus(
                          item.id,
                          "Declined"
                        )
                      }
                    >
                      Decline
                    </button>

                  </div>

                  <p>
                    Status:
                    {" "}
                    {item.status}
                  </p>

                </div>
              )
            )}

          </div>

        </div>

        {/* SCHEDULE + PERFORMANCE */}

        <div className="dashboard-overview-row">

          <div className="schedule-card">

            <div className="card-head">

              <h3>
                Today's Schedule
              </h3>

              <button
                className="view-btn"
                onClick={
                  viewAllSchedule
                }
              >
                View All
              </button>

            </div>

            <div className="timeline">

              {schedule.map(
                (item) => (
                  <div
                    key={item.id}
                    className="timeline-row"
                  >

                    <div className="time">
                      {item.time}
                    </div>

                    <div className="event">
                      {item.title}
                    </div>

                    <button
                      className="schedule-btn"
                      onClick={() =>
                        openSchedule(
                          item.title
                        )
                      }
                    >
                      {item.action}
                    </button>

                  </div>
                )
              )}

            </div>

          </div>

          <div className="performance-card">

            <div className="card-head">

              <h3>
                Performance Overview
              </h3>

              <button
                className="month-btn"
                onClick={() =>
                  setSelectedMonth(
                    selectedMonth ===
                      "This Month"
                      ? "Last Month"
                      : "This Month"
                  )
                }
              >
                {selectedMonth}

                <FaChevronDown />

              </button>

            </div>

            <div className="performance-content">

              <div className="score-box">

                <p>
                  Average Score
                </p>

                <h1>
                  82%
                </h1>

                <span>
                  ↑ 8%
                </span>

              </div>

              <div className="circle-score">

                <div className="circle-inner">
                  82%
                </div>

              </div>

              <div className="stats">

                <div>
                  Highest
                  <span>
                    98%
                  </span>
                </div>

                <div>
                  Lowest
                  <span>
                    45%
                  </span>
                </div>

                <div>
                  Improvement
                  <span>
                    15%
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
        {/* EXTRA DASHBOARD SECTION */}

<div className="dashboard-extra-grid">

  {/* Attendance */}

  <div className="extra-card">

    <div className="extra-head">
      <h3>Attendance Overview</h3>
      <button>View All</button>
    </div>

    <table className="attendance-table">

      <thead>
        <tr>
          <th>Class</th>
          <th>Present</th>
          <th>Absent</th>
          <th>Percentage</th>
        </tr>
      </thead>

      <tbody>

        {[
          ["Class 10A",45,3,"93%"],
          ["Class 10B",41,6,"87%"],
          ["Class 11A",38,7,"84%"],
          ["Class 11B",36,4,"90%"],
        ].map((r)=>(

          <tr key={r[0]}>

            <td>{r[0]}</td>

            <td>{r[1]}</td>

            <td>{r[2]}</td>

            <td>
              {r[3]}
              <div className="progress">
                <span />
              </div>
            </td>

          </tr>

        ))}

      </tbody>

    </table>

    <button className="full-btn">
      Mark Attendance
    </button>

  </div>


  {/* Assignment */}

  <div className="extra-card">

    <div className="extra-head">
      <h3>Assignment Center</h3>
      <button>View All</button>
    </div>

    <div className="list">

      <div><span>📘 Homework Assigned</span><b>28</b></div>
      <div><span>🟢 Submitted</span><b>15</b></div>
      <div><span>🟡 Pending Review</span><b>43</b></div>
      <div><span>🔴 Late Submission</span><b>8</b></div>

    </div>

    <button className="full-btn">
      Create Assignment
    </button>

  </div>


  {/* Tests */}

  <div className="extra-card">

    <div className="extra-head">
      <h3>Tests & MCQ</h3>
      <button>View All</button>
    </div>

    <div className="list">

      <div><span>📝 Tests Created</span><b>28</b></div>
      <div><span>📅 Upcoming Tests</span><b>6</b></div>
      <div><span>📄 Draft Tests</span><b>4</b></div>
      <div><span>📊 Published Results</span><b>18</b></div>

    </div>

    <button className="full-btn">
      Create Test
    </button>

  </div>


  {/* Study */}

  <div className="extra-card">

    <div className="extra-head">
      <h3>Study Material</h3>
      <button>View All</button>
    </div>

    <div className="list">

      <div><span>📄 Documents</span><b>56</b></div>
      <div><span>▶ Videos</span><b>23</b></div>
      <div><span>📘 Presentations</span><b>12</b></div>
      <div><span>📦 Other Files</span><b>8</b></div>

    </div>

    <button className="full-btn">
      Upload Material
    </button>

  </div>


  {/* Student */}

  <div className="extra-card">

    <div className="extra-head">
      <h3>Student Performance</h3>
      <button>View All</button>
    </div>

    <div className="student-bars">

      <div><span>Excellent</span><progress value="68" max="100"/></div>
      <div><span>Good</span><progress value="50" max="100"/></div>
      <div><span>Average</span><progress value="25" max="100"/></div>
      <div><span>Needs Improvement</span><progress value="18" max="100"/></div>

    </div>

  </div>


  {/* Quick */}

  <div className="extra-card">

    <div className="extra-head">
      <h3>Quick Actions</h3>
    </div>

    <div className="quick-grid">

      <button>Add Student</button>
      <button>Create Class</button>
      <button>Upload Material</button>
      <button>Create Test</button>
      <button>Generate MCQ</button>
      <button>View Reports</button>

    </div>

  </div>

</div>

      </div>

      <CreateClassModal
        open={openModal}
        onClose={() =>
          setOpenModal(false)
        }
      />

      

      {openAnnouncement && (

        <div className="popup-overlay">

          <div className="popup-window">

            <button
              className="close-popup"
              onClick={() =>
                setOpenAnnouncement(
                  false
                )
              }
            >
              ✕

            </button>

            <Announcement />

          </div>

        </div>

      )}

      {
showNotifications && (

<NotificationRequestPopup

requests={
requests
}

onClose={()=>
setShowNotifications(
false
)
}

/>

)
}

    </>
  );
};

export default DashboardHome;