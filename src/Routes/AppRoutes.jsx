import { Routes, Route } from "react-router-dom";

import SignupPage from "../pages/SignupPage/SignupPage";
import LoginPage from "../pages/Login/LoginPage";
import TeacherDashboard from "../pages/Dashboard/TeacherDashboard";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Signup */}
      <Route path="/" element={<SignupPage />} />

      {/* Login */}
      <Route path="/login" element={<LoginPage />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<TeacherDashboard />} />
    </Routes>
  );
};

export default AppRoutes;