import React from 'react';
import styles from './SpecialButton.module.css';

const SpecialButton = ({ label }) => {
  return <button className={styles.specialButton}>{label}</button>;
};

export default SpecialButton;
