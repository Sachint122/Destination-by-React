import React from 'react';
import './Style/ModernButton.css';

const Button = ({ text, color = "#FD7939", height, text_color = "white" }) => {
  const isWhite = color.toLowerCase() === "white" && text_color.toLowerCase() === "white";

  return (
    <button
      className={`animated-button cardb ${isWhite ? "white-hover" : ""}`}
      style={{
        "--btn-color": color,
        "--btn-height": height,
        "--text-c": text_color
      }}
    >
      <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>
      <span className="text">{text}</span>
      <span className="circle"></span>
      <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>
    </button>
  );
};

export default Button;
