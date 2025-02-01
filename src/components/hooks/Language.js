import React, { useState, useEffect } from "react";
import logo1 from "./images/logo/HTML__1646042410155.png";
import logo2 from "./images/logo/css.png";
import logo3 from "./images/logo/js.png";
import logo4 from "./images/logo/java.png";
import logo5 from "./images/logo/spring.png";
import logo6 from "./images/logo/MySQL__1646042297436.png";
import "./Style/Language.css";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Language = () => {
  const originalLogos = [logo1, logo2, logo3, logo4, logo5, logo6];

  // Add cloned slides for seamless infinite scroll
  const logos = [
    ...originalLogos.slice(-4), // Last 4 cloned logos
    ...originalLogos,
    ...originalLogos.slice(0, 4), // First 4 cloned logos
  ];

  const visibleCount = 4; // Number of visible logos
  const [currentIndex, setCurrentIndex] = useState(4); // Start at the first real slide
  const [isTransitioning, setIsTransitioning] = useState(false); // To control smooth transitions

  // Move slider left
  const moveLeft = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Move slider right
  const moveRight = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Handle infinite scroll behavior
  useEffect(() => {
    if (currentIndex === 0) {
      // Jump from the first clone to the last real slide
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(logos.length - visibleCount - 4); // Last real slide index
      }, 300); // Match the transition duration
    } else if (currentIndex === logos.length - visibleCount) {
      // Jump from the last clone to the first real slide
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(4); // First real slide index
      }, 300);
    } else {
      // Normal transition
      setTimeout(() => setIsTransitioning(false), 300);
    }
  }, [currentIndex, logos.length, visibleCount]);

  return (
    <div className="slider-container">
      <button className="nav-button left" onClick={moveLeft}>
      <FaArrowAltCircleLeft size={40} color="00d4ff"/>
      </button>
      <div className="sliderl">
        <div
          className="slide-track"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`,
            transition: isTransitioning ? "transform 0.3s ease-in-out" : "none",
          }}
        >
          {logos.map((logo, index) => (
            <div className="slide" key={index}>
              <img src={logo} alt={`Logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <button className="nav-button right" onClick={moveRight}>
      <FaArrowAltCircleRight size={40} color="00d4ff"/>
      </button>
    </div>
  );
};

export default Language;
