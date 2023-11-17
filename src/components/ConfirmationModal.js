import React from 'react';
import "../assets/css/Components/ConfirmationModal.css";

const ConfirmationModal = ({ isOpen, onClose, onConfirm, message }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <p>{message}</p>
          <button className="modal-button confirm" onClick={onConfirm}>Confirm</button>
          <button className="modal-button cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    );
  };
  
  export default ConfirmationModal;