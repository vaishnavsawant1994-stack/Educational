import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaLock,
  FaGraduationCap,
} from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [loginData, setLoginData] =
    useState({
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const teacher =
      JSON.parse(
        localStorage.getItem(
          "teacherData"
        )
      );

    if (
      !loginData.email ||
      !loginData.password
    ) {
      alert(
        "Please fill all fields"
      );
      return;
    }

if (
  teacher &&
  teacher.email === loginData.email &&
  teacher.password === loginData.password
) {
  alert("Login Successful");

  localStorage.setItem(
    "isLoggedIn",
    "true"
  );

  // Save current logged-in teacher
  localStorage.setItem(
    "currentTeacher",
    JSON.stringify(teacher)
  );

  navigate("/dashboard");
}else {
      alert(
        "Invalid Email or Password"
      );
    }
  };

  return (
    <section className="login-page">

      <div className="login-container">

        {/* TOP BADGE */}

        <div className="login-left">

          <div className="login-badge">

            <FaGraduationCap />

            <span>
              Teacher Login
            </span>

          </div>

        </div>

        {/* FORM */}

        <form
          className="login-form"
          onSubmit={
            handleSubmit
          }
        >

          <h2>
            Login
          </h2>

          {/* EMAIL */}

          <div className="input-group">

            <label>
              Email
            </label>

            <div className="input-icon">

              <FaEnvelope />

              <input
                type="email"
                name="email"
                value={
                  loginData.email
                }
                onChange={
                  handleChange
                }
                placeholder="Enter email"
                required
              />

            </div>

          </div>

          {/* PASSWORD */}

          <div className="input-group">

            <label>
              Password
            </label>

            <div className="password-box">

              <FaLock
                className="left-icon"
              />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                value={
                  loginData.password
                }
                onChange={
                  handleChange
                }
                placeholder="Enter password"
                required
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
              >
                {
                  showPassword
                    ? <FaEyeSlash />
                    : <FaEye />
                }
              </button>

            </div>

          </div>

          {/* LOGIN */}

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

          {/* REGISTER */}

          <p
            className="register-link"
          >

            Don't have an account?

            <Link to="/">
              Register
            </Link>

          </p>

        </form>

      </div>

    </section>
  );
};

export default Login;