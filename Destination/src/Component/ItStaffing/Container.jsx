import React from 'react';

const Container = ({ heading, paragraph }) => {
    return (
        <div className="custom-card">
        <style>
          {`
            /* Custom Card Container */
            .custom-card {
              width: 75%; /* 3/4 width */
              height: 300px;
              background-color:rgb(65, 71, 80); /* bg-gray-600 */
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto;
              padding: 2rem; /* p-8 */
              border-radius: 0.5rem; /* rounded-lg */
              box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1); /* shadow-lg */
            }
  
            /* Inner Content */
            .custom-card .text-center {
              text-align: center;
              max-width: 40rem; /* max-w-2xl */
              padding: 1rem; /* px-4 */
            }
  
            /* Heading Style */
            .custom-card h1 {
              font-size: 2.25rem; /* text-4xl */
              font-weight: 700; /* font-bold */
              margin-bottom: 1rem; /* mb-4 */
              color: #1f2937; /* text-gray-950 */
            }
  
            /* Paragraph Style */
            .custom-card p {
              font-size: 1.125rem; /* text-lg */
              color:rgb(37, 185, 230); /* text-yellow-850 */
              margin-bottom: 1rem; /* mb-4 */
            }
          `}
        </style>
  
        <div className="text-center">
          <h1>{heading}</h1>
          <p>{paragraph}</p>
        </div>
      </div>
    );
};

export default Container;
