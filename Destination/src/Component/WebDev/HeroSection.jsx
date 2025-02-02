import React from 'react';

const HeroSection = ({ title, breadcrumb, backgroundImage }) => {
  // CSS in JS
  const heroSectionStyle = {
    width: '100vw', // Ensure it takes full width
    height: '300px', // Fixed height
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', // Ensures the image covers the entire section
    backgroundPosition: 'center', // Centers the image
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  };
  

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'black',
    opacity: 0.5, // Dark overlay for text visibility
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    padding: '0 16px',
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
  };

  const breadcrumbStyle = {
    marginTop: '8px',
    fontSize: '1.125rem',
    color: '#ff6347',
    fontWeight: 'bold',
    textShadow: '0 0 10px rgba(255, 99, 71, 0.8)',
  };

  return (
    <div className="hero-container">
      <div className="hero-section" style={heroSectionStyle}>
        <div className="hero-overlay" style={overlayStyle}></div>
        <div className="hero-content" style={contentStyle}>
          <h1 className="hero-title" style={titleStyle}>{title}</h1>
          <p className="hero-breadcrumb" style={breadcrumbStyle}>{breadcrumb}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
