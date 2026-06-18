import "./SignupPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignupPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  const [formData, setFormData] =
    useState({
      fullName: "",
      email: "",
      school: "",
      password: "",
      confirmPassword: "",
    });

  // INPUT CHANGE

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  // REGISTER

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      alert(
        "Passwords do not match"
      );

      return;
    }

    // SAVE TO LOCAL STORAGE

    localStorage.setItem(
      "teacherData",
      JSON.stringify(formData)
    );

    alert(
      "Registration Successful"
    );

    // RESET

    setFormData({
      fullName: "",
      email: "",
      school: "",
      password: "",
      confirmPassword: "",
    });

    // GO TO LOGIN PAGE

    navigate("/login");
  };

  return (
    <section className="signup-page">

      <div className="signup-container">

        <div className="signup-left">

          <div className="signup-badge">
            Teacher Registration
          </div>

          <h1>
            Create Your
            <span> Teacher Account</span>
          </h1>

          <p>
            Manage students,
            assign tasks,
            monitor progress
            and connect with
            your classroom.
          </p>

        </div>

        <div className="signup-right">

          <form
            className="signup-form"
            onSubmit={handleSubmit}
          >

            <h2>
              Register
            </h2>

            {/* NAME */}

            <div className="input-group">

              <label>
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                value={
                  formData.fullName
                }
                onChange={
                  handleChange
                }
                placeholder="Enter your name"
                required
              />

            </div>

            {/* EMAIL */}

            <div className="input-group">

              <label>
                Email
              </label>

              <input
                type="email"
                name="email"
                value={
                  formData.email
                }
                onChange={
                  handleChange
                }
                placeholder="Enter email"
                required
              />

            </div>

            {/* SCHOOL */}

            <div className="input-group">

              <label>
                School / Institution
              </label>

              <input
                type="text"
                name="school"
                value={
                  formData.school
                }
                onChange={
                  handleChange
                }
                placeholder="Enter school name"
                required
              />

            </div>

            {/* PASSWORD */}

            <div className="input-group">

              <label>
                Password
              </label>

              <div className="password-box">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  value={
                    formData.password
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Create password"
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
                  {showPassword
                    ? (
                      <FaEyeSlash />
                    )
                    : (
                      <FaEye />
                    )}
                </button>

              </div>

            </div>

            {/* CONFIRM */}

            <div className="input-group">

              <label>
                Confirm Password
              </label>

              <div className="password-box">

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  name="confirmPassword"
                  value={
                    formData.confirmPassword
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Confirm password"
                  required
                />

                <button
                  type="button"
                  className="eye-btn"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                >
                  {showConfirmPassword
                    ? (
                      <FaEyeSlash />
                    )
                    : (
                      <FaEye />
                    )}
                </button>

              </div>

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="signup-btn"
            >
              Create Account
            </button>

            {/* LOGIN */}

            <p className="login-link">

              Already have an account?{" "}

              <Link to="/login">
                Login
              </Link>

            </p>

          </form>

        </div>

      </div>

    </section>
  );
};

export default SignupPage;