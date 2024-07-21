//import css here

import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./components/HomePage";
import Login from "./components/LoginPage";
import Register from "./components/RegisterPage";
import NavBar from "./components/Nav";
import Dashboard from "./components/DashboardPage";
import Settings from "./components/SettingsPage";
import Upload from "./components/UploadPage";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
