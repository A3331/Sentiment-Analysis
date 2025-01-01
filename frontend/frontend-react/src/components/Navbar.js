import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isAuthenticated, onLogout }) => {
  return (
    <nav className="navbar">
      <h2>
        <a href="/home">SentiMeter</a>
      </h2>

      <ul className="nav-links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <button className="logout-button" onClick={onLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/signup-login">Signup/Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;