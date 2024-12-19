import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignupLogin from "./components/SignupLogin";
import Home from "./components/Home";
import FileUpload from "./components/FileUpload";
import SentimentResults from "./components/SentimentResults";
import About from "./components/About";
import "./App.css";

function App() {
  const location = useLocation(); // Get the current route

  return (
    <div className="App">
      {/* Show Navbar only on specific routes */}
      {location.pathname !== "/signup-login" && <Navbar />}

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} /> {/* Redirect to Home */}
        <Route path="/home" element={<Home />} />
        <Route path="/signup-login" element={<SignupLogin />} />
        <Route path="/upload" element={<FileUpload />} />
        <Route path="/result" element={<SentimentResults />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;