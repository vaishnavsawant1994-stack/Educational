import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignupPage from "../pages/SignupPage/SignupPage";
import LoginPage from "../pages/Login/LoginPage";
import TeacherDashboard from "../pages/Dashboard/TeacherDashboard";const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Routes>

        {/* First page */}
        <Route
          path="/"
          element={<SignupPage />}
        />

        <Route
          path="/login"
          element={<LoginPage />}
       />
       <Route
          path="Dashboard"
          element={<TeacherDashboard />}
/>

        

        

      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;