// TextInput.js
import React from 'react';
import './TextInput.css';

const TextInput = ({ value, onChange, placeholder, className }) => (
  <input
    type="text"
    className={`text-input ${className}`}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export default TextInput;