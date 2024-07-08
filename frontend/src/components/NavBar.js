import React from "react";
import '../styles/Navbar.css';

// navbar-l is for logo
// navbar-c is for options
// navbar-r is for log in/log out

const NavBar = () => {
    return(
            <nav className="navbar">
                <div className="navbar-l">
                    <a href="/" className="logo">Carbon24</a>
                </div>
                <div className="navbar-c">
                    <ul className="nav-links">
                        <li>
                            <a href="/dashboard">Dashboard</a>
                        </li>
                        <li>
                            <a href="/upload">Upload</a>
                        </li>
                        <li>
                            <a href="/settings">Settings</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-r">
                    <a href="/logout">Log out</a>
                </div>

            </nav>
    );
}

export default NavBar;


