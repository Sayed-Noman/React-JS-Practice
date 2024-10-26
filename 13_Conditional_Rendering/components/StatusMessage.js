// src/components/StatusMessage.js
import React from 'react';

const StatusMessage = ({ status }) => {
  switch (status) {
    case 'loading':
      return <p>Loading...</p>;
    case 'error':
      return <p>Error occurred!</p>;
    case 'success':
      return <p>Data loaded successfully!</p>;
    default:
      return <p>Unknown status.</p>;
  }
};

export default StatusMessage;
