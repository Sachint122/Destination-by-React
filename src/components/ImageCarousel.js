import React, { useEffect, useRef, useState } from 'react';
import '../style/ImageCarousel.css';
import image1 from '../images/placement/placement (1).png';
import image2 from '../images/placement/placement (2).png';
import image3 from '../images/placement/placement (3).png';
import image4 from '../images/placement/placement (4).png';
import image5 from '../images/placement/placement (5).png';
import image6 from '../images/placement/placement (6).png';
import image7 from '../images/placement/placement (7).png';
import image8 from '../images/placement/placement (8).png';
import image9 from '../images/placement/placement (9).png';
import image10 from '../images/placement/placement (10).png';
import image11 from '../images/placement/placement (11).png';
import image12 from '../images/placement/placement (12).png';


const images = [
  image1, image2, image3, image4, image5, image6,
  image7, image8, image9, image10, image11, image12
];

const ImageCarousel = () => {
  const sliderRef = useRef(null);
  const [fullViewImage, setFullViewImage] = useState(null);
  const [isFullViewActive, setIsFullViewActive] = useState(false);

  useEffect(() => {
    const handleImageClick = (e) => {
      const imgSrc = e.target.src;
      if (imgSrc) {
        setFullViewImage(imgSrc);
        setIsFullViewActive(true);
        if (sliderRef.current) {
          sliderRef.current.style.animationPlayState = 'paused';
        }
      }
    };

    const items = sliderRef.current.querySelectorAll('.item img');
    items.forEach(item => item.addEventListener('click', handleImageClick));

    return () => {
      items.forEach(item => item.removeEventListener('click', handleImageClick));
    };
  }, []);

  const closeFullView = () => {
    setIsFullViewActive(false);
    setTimeout(() => {
      setFullViewImage(null);
      if (sliderRef.current) {
        sliderRef.current.style.animationPlayState = 'running';
      }
    }, 500);
  };

  return (
    <div className="banner">
      <div
        className="slider"
        ref={sliderRef}
        style={{ '--quantity': images.length }}
      >
        {images.map((src, index) => (
          <div key={index + 1} className="item" style={{ '--position': index + 1 }}>
            <img src={src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      {fullViewImage && (
        <div
          className={`full-view ${isFullViewActive ? 'active' : ''}`}
          onClick={closeFullView}
        >
          <img
            src={fullViewImage}
            alt="Full View"
            className={isFullViewActive ? 'active' : ''}
          />
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
