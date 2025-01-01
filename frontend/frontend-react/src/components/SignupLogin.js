import React, { useState } from "react";
import "./SignupLogin.css";

const SignupLogin = ({ onLoginSuccess }) => {
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
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          emailOrUsername: formData.emailOrUsername,
          password: formData.password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Login successful:", data);
        onLoginSuccess(data.token); // Notify parent with the token
      } else {
        alert(`Login failed: ${data.message}`);
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("An error occurred during login.");
    }
  };

  // Handle Signup form submission
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.signupEmail,
          username: formData.signupUsername,
          password: formData.signupPassword,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Signup successful:", data);
        alert("Account created successfully. Please log in.");
        setIsFlipped(false); // Flip back to login
      } else {
        alert(`Signup failed: ${data.message}`);
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("An error occurred during signup.");
    }
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