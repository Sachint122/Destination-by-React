import React from 'react';

const ItstaffingCard3 = ({ image, title, description }) => {
    return (
        <div className="card-container">
        <style>
          {`
            .card-container {
              background-color: #1a202c; /* bg-black-100 */
              border-radius: 0.5rem; /* rounded-lg */
              overflow: hidden;
              text-align: center;
              padding: 1.25rem; /* p-5 */
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* shadow-lg */
              border: 1px solid #d1d5db; /* border-gray-300 */
            }
  
            .card-container img {
              width: 100%;
              height: 10rem; /* h-40 */
              object-fit: cover;
              border-radius: 0.375rem; /* rounded-md */
              margin-bottom: 1rem; /* mb-4 */
            }
  
            .card-container h3 {
              font-size: 1.25rem; /* text-xl */
              font-weight: 600; /* font-semibold */
              color: #d97706; /* text-yellow-700 */
            }
  
            .card-container p {
              color: #e5e7eb; /* text-white-800 */
              margin-top: 0.5rem; /* mt-2 */
            }
          `}
        </style>
        
        <div>
          <img src={image} alt={title} />
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
};

export default ItstaffingCard3;

