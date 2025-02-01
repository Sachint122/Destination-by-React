import React from "react";
import Button from "./ModernButton";
import '../hooks/Style/Leftimg.css'
const Leftimg = ({ title, description, imageUrl }) => {
  return (
    <div>
      {/* JSX Content */}
      <div className="l-container">
        <div className="max-width-wrapper">
          {/* Left Content */}
          <div className="text-section">
            <h1>{title}</h1>
            <p className="description">{description}</p>
            <a> <Button text="Enquire Now" /></a>
          </div>

          {/* Right Image */}
          <div className="image-section">
            <img src={imageUrl} alt="Service Image" className="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftimg;
