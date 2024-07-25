import React from "react";
import "../styles/Modal.css";

/**
 * Modal component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} props.isOpen - Boolean to determine if the modal visibility.
 * @param {function} props.onClose - A function to close the modal.
 * @param {React.ReactNode} props.children - The modal content.
 * @returns {React.ReactElement | null} The modal element, null if isOpen is false.
 */

const Modal = ({ isOpen, onClose, children }) => {
  // Render nothing if isOpen is false
  if (!isOpen) return null;
  
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-modal" onClick={onClose} aria-label="Close">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
