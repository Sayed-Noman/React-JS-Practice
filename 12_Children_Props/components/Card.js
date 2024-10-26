import React from 'react';
import '../style.css'; // Optional CSS file for styling

const Card = ({ children, title }) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <div className="card-content">
                {children}  {/* This is where the children props are rendered */}
            </div>
        </div>
    );
};

export default Card;
