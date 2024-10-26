import React from 'react';
import '../style.css';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; // Do not render if modal is closed

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>✖</button>
                {children} {/* Render the passed component here */}
            </div>
        </div>
    );
};

export default Modal;
