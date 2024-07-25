import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./components/HomePage";
import Nav from "./components/Nav";
import Dashboard from "./components/DashboardPage";
import Settings from "./components/SettingsPage";
import Upload from "./components/UploadPage";
import Modal from "./components/Modal";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import useModal from "./hooks/useModal";

const App = () => {
  
  // Initialise useModal hook
  const {
    isRegisterModalOpen,
    isLoginModalOpen,
    openRegisterModal,
    openLoginModal,
    closeModal
  } = useModal();

  return (
    <div className="App">
      <Nav onLoginClick={openLoginModal} />
      <Routes>
        <Route path="" element={<Home onRegisterClick={openRegisterModal} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>

      {/* Log in and Register Modals */}
      <Modal isOpen={isRegisterModalOpen} onClose={closeModal}>
        <RegisterForm onLoginClick={openLoginModal} />
      </Modal>

      <Modal isOpen={isLoginModalOpen} onClose={closeModal}>
        <LoginForm onSignupClick={openRegisterModal} />
      </Modal>
    </div>
  );
}

export default App;