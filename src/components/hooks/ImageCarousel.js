import React, { useEffect, useRef, useState } from 'react';
import './Style/ImageCarousel.css';
import image1 from './images/placement/placement (1).jpg';
import image2 from './images/placement/placement (2).jpg';
import image3 from './images/placement/placement (3).jpg';
import image4 from './images/placement/placement (4).jpg';
import image5 from './images/placement/placement (5).jpg';
import image6 from './images/placement/placement (6).jpg';
import image7 from './images/placement/placement (7).jpg';
import image8 from './images/placement/placement (8).jpg';
import image9 from './images/placement/placement (9).jpg';
import image10 from './images/placement/placement (10).jpg';
import image11 from './images/placement/placement (11).jpg';
import image12 from './images/placement/placement (12).jpg';
import image13 from './images/placement/placement (13).jpg';
import image14 from './images/placement/placement (14).jpg';
import image15 from './images/placement/placement (15).jpg';
import image16 from './images/placement/placement (16).jpg';
import image17 from './images/placement/placement (17).jpg';
import image18 from './images/placement/placement (18).jpg';
import image19 from './images/placement/placement (19).jpg';
import image20 from './images/placement/placement (20).jpg';
import image21 from './images/placement/placement (21).jpg';
import image22 from './images/placement/placement (22).jpg';
import image23 from './images/placement/placement (23).jpg';
import image24 from './images/placement/placement (24).jpg';
import image25 from './images/placement/placement (25).jpg';
import image26 from './images/placement/placement (26).jpg';
import image27 from './images/placement/placement (27).jpg';
import image28 from './images/placement/placement (28).jpg';
import image29 from './images/placement/placement (29).jpg';
import image30 from './images/placement/placement (30).jpg';
import image31 from './images/placement/placement (31).jpg';
import image32 from './images/placement/placement (32).jpg';
import image33 from './images/placement/placement (33).jpg';
import image34 from './images/placement/placement (34).jpg';
import image35 from './images/placement/placement (35).jpg';
import image36 from './images/placement/placement (36).jpg';
import image37 from './images/placement/placement (37).jpg';
import image38 from './images/placement/placement (38).jpg';
import image39 from './images/placement/placement (39).jpg';
import image40 from './images/placement/placement (40).jpg';
import image41 from './images/placement/placement (41).jpg';
import image42 from './images/placement/placement (42).jpg';
import image43 from './images/placement/placement (43).jpg';
import image44 from './images/placement/placement (44).jpg';
import image45 from './images/placement/placement (45).jpg';
import image46 from './images/placement/placement (46).jpg';
import image47 from './images/placement/placement (47).jpg';
import image48 from './images/placement/placement (48).jpg';
import image49 from './images/placement/placement (49).jpg';
import image50 from './images/placement/placement (50).jpg';
import image51 from './images/placement/placement (51).jpg';
import image52 from './images/placement/placement (52).jpg';
import image53 from './images/placement/placement (53).jpg';
import image54 from './images/placement/placement (54).jpg';
import image55 from './images/placement/placement (55).jpg';
import image56 from './images/placement/placement (56).jpg';
import image57 from './images/placement/placement (57).jpg';
import image58 from './images/placement/placement (58).jpg';
import image59 from './images/placement/placement (59).jpg';
import image60 from './images/placement/placement (60).jpg';
import image61 from './images/placement/placement (61).jpg';
import image62 from './images/placement/placement (62).jpg';
import image63 from './images/placement/placement (63).jpg';
import image64 from './images/placement/placement (64).jpg';
import image65 from './images/placement/placement (65).jpg';
import image66 from './images/placement/placement (66).jpg';
import image67 from './images/placement/placement (67).jpg';
import image68 from './images/placement/placement (68).jpg';
import image69 from './images/placement/placement (69).jpg';

const allImages = [
  image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
  image11, image12, image13, image14, image15, image16, image17, image18, image19, image20,
  image21, image22, image23, image24, image25, image26, image27, image28, image29, image30,
  image31, image32, image33, image34, image35, image36, image37, image38, image39, image40,
  image41, image42, image43, image44, image45, image46, image47, image48, image49, image50,
  image51, image52, image53, image54, image55, image56, image57, image58, image59, image60,
  image61, image62, image63, image64, image65, image66, image67, image68, image69
];

// Step 2: Function to get 11 random images
const getRandomImages = (arr, num) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random()); // Shuffle the array
  return shuffled.slice(0, num); // Get the first `num` images
};

// Step 3: Select 11 random images
const images = getRandomImages(allImages, 11);

// const images = [
//   image1, image2, image3, image4, image5, image6,
//   image7, image8, image9, image10, image11,
// ];

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
