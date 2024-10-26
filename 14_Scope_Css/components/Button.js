import React from 'react';
import styles from '../style.module.css';

const Button = ({ label, className }) => {
  return <button className={`${styles.button} ${className}`}>{label}</button>;
};

export default Button;
