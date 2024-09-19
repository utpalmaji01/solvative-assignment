import React, { useEffect } from 'react';

const Snackbar = ({ message, onClose, type = 'error' }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`snackbar ${type}`}>
      <span>{message}</span>
      <button onClick={onClose}><i className="fas fa-times"></i></button>
    </div>
  );
};

export default Snackbar;