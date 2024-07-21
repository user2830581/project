import React from "react";
import "../styles/Nav.css";
import { IoLeaf } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";


// navbar-l is for logo
// navbar-c is for options
// navbar-r is for log in/log out button

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-l">
        <Link to="/" className="logo-name">
          <IoLeaf className="logo-icon" /> Carbon24
        </Link>
      </div>
      <div className="navbar-c">
        <ul className="nav-links">
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/upload">Upload</NavLink>
          </li>
          <li>
            <NavLink to="/settings">Settings</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-r">
        <a href="/logout">Log out</a>
      </div>
    </nav>
  );
};

export default NavBar;
