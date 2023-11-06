import React from 'react';

const CustomAlert = ({ message1, message2, message3, type, onClose }) => {
  return (
    <div className="custom-alert-container">
      {/* type applies a different custom-alert in css (currently not in use) */}
      <div className={`custom-alert ${type}`}>
        {/* first line of the alert message */}
        <p className={'custom-alert-color'}>{message1}</p>
        {/* second line of the alert message */}
        <h1 className={'custom-alert-color'}>{message2}</h1>
        {/* icon for the alert message */}
        <p className="icon">{message3}</p>
        {/* close button for the alert message */}
        <button onClick={onClose}>Try Again?</button>
      </div>
    </div>
  );
};

export default CustomAlert;