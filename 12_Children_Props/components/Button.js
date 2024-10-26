import React from 'react';
import '../style.css';

const Button = ({ children, onClick, type = 'button' }) => {
    return (
        <button className="custom-button" onClick={onClick} type={type}>
            {children}  {/* Render children here */}
        </button>
    );
};

export default Button;
