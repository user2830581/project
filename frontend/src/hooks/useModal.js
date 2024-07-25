import { useState } from "react";

/*
  Custom React hook to manage login and register modal visbility
*/

const useModal() {
  // Track which modal is currently active, initally no modal is open
  const [currentModal, setCurrentModal] = useState(false);

  // Open a specified modal ('register' or 'login')
  const openModal = (modal) => setCurrentModal(modal);

  // Close the current modal
  const closeModal = () => setCurrentModal(false);

  return {
    // Boolean check if current modal is set to 'register' or 'login'
    isRegisterModalOpen: currentModal === "register",
    isLoginModalOpen: currentModal === "login",

    // Function calls to manage modals visibility
    openRegisterModal: () => openModal("register"),
    openLoginModal: () => openModal("login"),
    closeModal,
  };
}

export default useModal;