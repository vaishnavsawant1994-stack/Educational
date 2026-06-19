import {
BrowserRouter,
Routes,
Route,
} from "react-router-dom";

import SignupPage from "../pages/SignupPage/SignupPage";
import LoginPage from "../pages/Login/LoginPage";
import TeacherDashboard from "../pages/Dashboard/TeacherDashboard";

const AppRoutes = () => {

return (

<BrowserRouter>

<Routes>

{/* Signup */}

<Route
path="/"
element={
<SignupPage/>
}
/>


{/* Login */}

<Route
path="/login"
element={
<LoginPage/>
}
/>


{/* Dashboard */}

<Route
path="/dashboard"
element={
<TeacherDashboard/>
}
/>

</Routes>

</BrowserRouter>

);

};

export default AppRoutes;