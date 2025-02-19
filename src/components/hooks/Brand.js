import React from 'react';
import './Style/Brand.css';
import brand1 from './images/brand/brand (1).png';
import brand2 from './images/brand/brand (2).png';
import brand3 from './images/brand/brand (3).png';
import brand4 from './images/brand/brand (4).png';
import brand5 from './images/brand/brand (5).png';
import brand6 from './images/brand/brand (6).png';
import brand7 from './images/brand/brand (7).png';
import brand8 from './images/brand/brand (8).png';
import brand9 from './images/brand/brand (9).png';
import brand10 from './images/brand/brand (10).png';
import brand11 from './images/brand/brand (11).png';
import brand12 from './images/brand/brand (12).png';
import brand13 from './images/brand/brand (13).png';
import brand14 from './images/brand/brand (14).png';
import brand15 from './images/brand/brand (15).png';
import brand16 from './images/brand/brand (16).png';
import brand17 from './images/brand/brand (17).png';
import brand18 from './images/brand/brand (18).png';
import brand19 from './images/brand/brand (19).png';
import brand20 from './images/brand/brand (20).png';
import brand21 from './images/brand/brand (21).png';
import brand22 from './images/brand/brand (22).png';
import brand23 from './images/brand/brand (23).png';
import brand24 from './images/brand/brand (24).png';
import brand25 from './images/brand/brand (25).png';
import brand26 from './images/brand/brand (26).png';
import brand27 from './images/brand/brand (27).png';
import brand28 from './images/brand/brand (28).png';
import brand29 from './images/brand/brand (29).png';
import brand30 from './images/brand/brand (30).png';
import brand31 from './images/brand/brand (31).png';
import brand32 from './images/brand/brand (32).png';
import brand33 from './images/brand/brand (33).png';
import brand34 from './images/brand/brand (34).png';
import brand35 from './images/brand/brand (35).png';
import brand36 from './images/brand/brand (36).png';
import brand37 from './images/brand/brand (37).png';


const Brand = () => {
  const brands = [
    { image: brand1 },
    { image: brand2 },
    { image: brand3 },
    { image: brand4 },
    { image: brand5 },
    { image: brand6 },
    { image: brand7 },
    { image: brand8 },
    { image: brand9 },
    { image: brand10 },
    { image: brand11 },
    { image: brand12 },
    { image: brand13 },
    { image: brand14 },
    { image: brand15 },
    { image: brand16 },
    { image: brand17 },
    { image: brand18 },
    { image: brand19 },
    { image: brand20 },
    { image: brand21 },
    { image: brand22 },
    { image: brand23 },
    { image: brand24 },
    { image: brand25 },
    { image: brand26 },
    { image: brand27 },
    { image: brand28 },
    { image: brand29 },
    { image: brand30 },
    { image: brand31 },
    { image: brand32 },
    { image: brand33 },
    { image: brand34 },
    { image: brand35 },
    { image: brand36 },
    { image: brand37 },
  ];


  return (
    <div className="carousel-container">
      <h1 className='text-orange'> Our Students Placed in</h1>
      <div className="carousel">
        {brands.concat(brands).map((brand, index) => (
          <div className="brand" key={index}>
            <img src={brand.image} alt={`Brand ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
