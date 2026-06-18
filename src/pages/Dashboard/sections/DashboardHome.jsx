import "./DashboardHome.css";

import { useState } from "react";

import Announcement from "./Announcement";
import UploadStudyMaterialModal from "./UploadStudyMaterialModal";

import CreateClassModal from "../../../Components/CreateClassModal";

import {
  FaPlus,
  FaPaperPlane,
  FaUpload,
  FaCheckCircle,
  FaUsers,
  FaClipboardList,
  FaBookOpen,
  FaStar,
} from "react-icons/fa";

const DashboardHome = () => {

  const [openAnnouncement, setOpenAnnouncement] =
    useState(false);

  const [openModal, setOpenModal] =
    useState(false);

  const [openUpload, setOpenUpload] =
    useState(false);

  return (
    <>

      <div className="teacher-home">

        <div className="hero">

          <div className="hero-left">

            <p className="welcome">
              Welcome back,
            </p>

            <h1>
              Priyanka 👋
            </h1>

            <p className="sub">
              Manage your classes and empower students.
            </p>

            <div className="hero-stats">

              <div className="mini-card">
                <span>Today's Classes</span>
                <h2>5</h2>
              </div>

              <div className="mini-card">
                <span>Students</span>
                <h2>248</h2>
              </div>

              <div className="mini-card">
                <span>Attendance</span>
                <h2>91%</h2>
              </div>

              <div className="mini-card">
                <span>Pending Tasks</span>
                <h2>12</h2>
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
                  setOpenAnnouncement(true)
                }
              >
                <FaPaperPlane />
                Announcement
              </button>

              <button
                className="action-btn"
                onClick={() =>
                  setOpenUpload(true)
                }
              >
                <FaUpload />
                Upload Material
              </button>

            </div>

          </div>

          <div className="hero-right">

            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350"
              alt=""
            />

          </div>

        </div>

        <div className="dashboard-row">

          <div className="schedule">

            <h3>
              Today's Schedule
            </h3>

            <div className="item">
              08:30 AM • Class 10A
            </div>

            <div className="item">
              10:00 AM • Data Structures
            </div>

            <div className="item">
              02:00 PM • Test Review
            </div>

            <div className="item">
              03:30 PM • Guidance
            </div>

          </div>

          <div className="performance">

            <h3>
              Performance Overview
            </h3>

            <div className="score">
              82%
            </div>

            <p>
              Average Performance
            </p>

          </div>

        </div>

        <div className="info-grid">

          <div className="info">
            <FaBookOpen />
            <h3>43</h3>
            <p>Assignments</p>
          </div>

          <div className="info">
            <FaClipboardList />
            <h3>28</h3>
            <p>Tests</p>
          </div>

          <div className="info">
            <FaUsers />
            <h3>248</h3>
            <p>Students</p>
          </div>

          <div className="info">
            <FaCheckCircle />
            <h3>91%</h3>
            <p>Attendance</p>
          </div>

          <div className="info">
            <FaStar />
            <h3>4.8</h3>
            <p>Teacher Rating</p>
          </div>

        </div>

      </div>

      {/* CREATE CLASS */}

      <CreateClassModal
        open={openModal}
        onClose={() =>
          setOpenModal(false)
        }
      />

      {/* ANNOUNCEMENT */}

      {
        openAnnouncement && (

          <div className="popup-overlay">

            <div className="popup-window">

              <button
                className="close-popup"
                onClick={() =>
                  setOpenAnnouncement(false)
                }
              >
                ✕
              </button>

              <Announcement />

            </div>

          </div>

        )
      }

      {/* UPLOAD MATERIAL */}

      {
        openUpload && (

          <div className="popup-overlay">

            <div className="popup-window">

              <UploadStudyMaterialModal
                onClose={() =>
                  setOpenUpload(false)
                }
              />

            </div>

          </div>

        )
      }

    </>
  );
};

export default DashboardHome;