import "./TeacherDashboard.css";
import { useState } from "react";
import {
useNavigate
}
from "react-router-dom";
import CreateClassModal from "../../Components/CreateClassModal";

import {
  FaBars,
  FaGraduationCap,
  FaHome,
  FaUser,
  FaUsers,
  FaBookOpen,
  FaQuestionCircle,
  FaClipboardList,
  FaChartBar,
  FaFileAlt,
  FaCalendarAlt,
  FaComments,
  FaBell,
  FaCog,
  FaSignOutAlt,
  FaSearch,
  FaPlus,
  FaPaperPlane, // ← ADD THIS
} from "react-icons/fa";

import DashboardHome from "./sections/DashboardHome";
import MyProfile from "./sections/MyProfile";
import Students from "./sections/Students";
import Classes from "./sections/Classes";
import StudyMaterial from "./sections/StudyMaterial";
import McqQuestions from "./sections/McqQuestions";
import Tests from "./sections/Tests";
import Results from "./sections/Results";
import StudentReports from "./sections/StudentReports";
import Messages from "./sections/Messages";
import Notifications from "./sections/Notifications";
import Announc from "./sections/Announc";

import Settings from "./sections/Settings";
import Announcements from "./sections/Announcement";

const TeacherDashboard = () => {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [activeTab, setActiveTab] =
    useState("dashboard");

  const [openModal, setOpenModal] =
    useState(false);

  const navigate =
    useNavigate();  

  const menu = [
    { key:"dashboard",icon:<FaHome/>,label:"Dashboard"},
    { key:"profile",icon:<FaUser/>,label:"My Profile"},
    { key:"students",icon:<FaUsers/>,label:"Students"},
    { key:"classes",icon:<FaGraduationCap/>,label:"Classes"},
    { key:"materials",icon:<FaBookOpen/>,label:"Study Materials"}, 
    { key:"mcq",icon:<FaQuestionCircle/>,label:"MCQ Questions"},
    { key:"tests",icon:<FaClipboardList/>,label:"Tests"},
    { key:"results",icon:<FaChartBar/>,label:"Results"},
    { key:"reports",icon:<FaFileAlt/>,label:"Student Reports"},
    { key:"calendar",icon:<FaCalendarAlt/>,label:"Calendar"},
    { key:"messages",icon:<FaComments/>,label:"Messages"},
    { key:"announc",icon:<FaPaperPlane/>,label:"Announc"},
    { key:"notifications",icon:<FaBell/>,label:"Notifi's & Requst"},
    { key:"settings",icon:<FaCog/>,label:"Settings"},
    
  ];

  const renderPage = () => {
    switch (activeTab) {

      case "profile":
        return <MyProfile />;

      case "students":
        return <Students />;

      case "classes":
        return <Classes />;

      case "materials":
        return <StudyMaterial />;

      case "mcq":
        return <McqQuestions />;

      case "tests":
        return <Tests />;

      case "results":
        return <Results />;

      case "reports":
        return <StudentReports />;

      

      case "announc":
        return <Announc />;

      case "notifications":
        return <Notifications />;

      case "settings":
        return <Settings />;

      default:
        return (
          <DashboardHome
            onCreateClass={() =>
              setOpenModal(true)
            }
          />
        );
    }
  };

  return (
    <>
      <div className="dashboard">

        <aside
          className={`sidebar ${
            sidebarOpen
              ? "open"
              : ""
          }`}
        >

          <div className="brand">

            <div className="brand-icon">
              <FaGraduationCap/>
            </div>

            <div>

              <h2>
                Teacher SaaS
              </h2>

              <p>
                Smart Teaching
              </p>

            </div>

          </div>

          <nav>

            {menu.map((item)=>(

              <button
                key={item.key}
                className={
                  activeTab===item.key
                  ? "active"
                  : ""
                }
                onClick={()=>{
                  setActiveTab(
                    item.key
                  );

                  setSidebarOpen(
                    false
                  );
                }}
              >

                {item.icon}

                {item.label}

              </button>

            ))}

          </nav>

          <button
className="logout"

onClick={() => {

localStorage.clear();

sessionStorage.clear();

navigate(
"/login"
);

}}

>

<FaSignOutAlt/>

Logout

</button>

        </aside>

        <section className="main">

          <header className="topbar">

            <button
              className="mobile-btn"
              onClick={() =>
                setSidebarOpen(
                  !sidebarOpen
                )
              }
            >

              <FaBars/>

            </button>

            <div className="search">

              <FaSearch/>

              <input
                placeholder="Search..."
              />

            </div>

            <button
          type="button"
          className="create"
          onClick={(e) => {
          e.preventDefault();

          setOpenModal(true);
          }}
          >

          <FaPlus />

           Create

          </button>

          </header>

          <div className="dashboard-content">

            {renderPage()}

          </div>

        </section>

      </div>

      <CreateClassModal
        open={openModal}
        onClose={() =>
          setOpenModal(
            false
          )
        }
      />

    </>
  );
};

export default TeacherDashboard;