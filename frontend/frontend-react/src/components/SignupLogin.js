import React, { useState } from "react";
import "./SignupLogin.css";

const SignupLogin = () => {
  const [isFlipped, setIsFlipped] = useState(false); // State for flipping form
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
    signupEmail: "",
    signupUsername: "",
    signupPassword: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Login form submission
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", {
      emailOrUsername: formData.emailOrUsername,
      password: formData.password,
    });
    // Add login logic here
  };

  // Handle Signup form submission
  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Creating account with:", {
      email: formData.signupEmail,
      username: formData.signupUsername,
      password: formData.signupPassword,
    });
    // After signup, flip back to login
    setIsFlipped(false);
    // Clear the signup fields
    setFormData({
      ...formData,
      signupEmail: "",
      signupUsername: "",
      signupPassword: "",
    });
  };

  return (
    <div className="auth-container">
      <div className={`auth-card ${isFlipped ? "flipped" : ""}`}>
        {/* Login Form */}
        <div className="auth-side front">
          <h2>Login</h2>
          <form onSubmit={handleLogin} className="auth-form">
            <input
              type="text"
              placeholder="Email or Username"
              name="emailOrUsername"
              value={formData.emailOrUsername}
              onChange={handleChange}
              className="auth-input"
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="auth-input"
              required
            />
            <button type="submit" className="auth-button">
              Login
            </button>
          </form>
          <p>
            Don't have an account?{" "}
            <button
              type="button"
              className="toggle-button"
              onClick={() => setIsFlipped(true)}
            >
              Signup
            </button>
          </p>
        </div>

        {/* Signup Form */}
        <div className="auth-side back">
          <h2>Signup</h2>
          <form onSubmit={handleSignup} className="auth-form">
            <input
              type="email"
              placeholder="Email"
              name="signupEmail"
              value={formData.signupEmail}
              onChange={handleChange}
              className="auth-input"
              required
            />
            <input
              type="text"
              placeholder="Username"
              name="signupUsername"
              value={formData.signupUsername}
              onChange={handleChange}
              className="auth-input"
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="signupPassword"
              value={formData.signupPassword}
              onChange={handleChange}
              className="auth-input"
              required
            />
            <button type="submit" className="auth-button">
              Signup
            </button>
          </form>
          <p>
            Already have an account?{" "}
            <button
              type="button"
              className="toggle-button"
              onClick={() => setIsFlipped(false)}
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupLogin;