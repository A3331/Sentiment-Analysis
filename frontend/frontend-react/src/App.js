import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignupLogin from "./components/SignupLogin";
import Home from "./components/Home";
import FileUpload from "./components/FileUpload";
import SentimentResults from "./components/SentimentResults";
import About from "./components/About";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication status
  const location = useLocation(); // Get the current route

  // Check if the user is authenticated on initial render
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      // Optionally verify token with backend
      setIsAuthenticated(true);
    }
  }, []);

  // Function to handle login success
  const handleLoginSuccess = (token) => {
    localStorage.setItem("authToken", token); // Save token to localStorage
    setIsAuthenticated(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove token from localStorage
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      {/* Show Navbar only on specific routes */}
      {location.pathname !== "/signup-login" && (
        <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      )}

      <Routes>
        {/* Redirect unauthenticated users to login */}
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/signup-login" />
          }
        />
        <Route
          path="/home"
          element={
            isAuthenticated ? <Home /> : <Navigate to="/signup-login" />
          }
        />
        <Route
          path="/signup-login"
          element={
            isAuthenticated ? (
              <Navigate to="/home" />
            ) : (
              <SignupLogin onLoginSuccess={handleLoginSuccess} />
            )
          }
        />
        <Route
          path="/upload"
          element={
            isAuthenticated ? <FileUpload /> : <Navigate to="/signup-login" />
          }
        />
        <Route
          path="/result"
          element={
            isAuthenticated ? <SentimentResults /> : <Navigate to="/signup-login" />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;