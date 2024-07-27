import React from "react";
import "../styles/Nav.css";
import { IoLeaf } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const Nav = ({ onLoginClick }) => {

  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="left-nav">
        <Link to="/" className="logo">
          <IoLeaf className="logo-icon" />
          <span className="logo-name">Carbon24</span>
        </Link>
      </div>
      <div className="center-nav">
        <button onClick={toggleDropdown} className={`dropdown-toggle ${isDropdownOpen ? "active" : ""}`}>
          Menu
        </button>
        <ul className={`nav-links ${isDropdownOpen ? "dropdown" : ""}`}>
          <li>
            <NavLink to="/dashboard" onClick={closeDropdown}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/upload" onClick={closeDropdown}>Upload</NavLink>
          </li>
          <li>
            <NavLink to="/settings" onClick={closeDropdown}>Settings</NavLink>
          </li>
        </ul>
      </div>
      <div className="right-nav">
        <button onClick={onLoginClick}>Log in</button>
      </div>
    </nav>
  );
};

export default Nav;
