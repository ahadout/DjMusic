// PopupModal.js
import React from 'react';
import '../assets/css/Components/PopupModal.css'; 

function PopupModal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="popup-modal-backdrop">
      <div className="popup-modal">
        <h2>{title}</h2>
        {children}
        <button onClick={onClose} className="popup-modal-close-btn">Close</button>
      </div>
    </div>
  );
}

export default PopupModal;
