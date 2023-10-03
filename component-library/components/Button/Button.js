// Button.js
import React from 'react';
import './Button.css';

const Button = ({ label, onClick, className }) => (
  <button className={`button ${className}`} onClick={onClick}>
    {label}
  </button>
);

export default Button;
