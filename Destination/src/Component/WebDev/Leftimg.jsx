import React from "react";

const Leftimg = ({ title, description, imageUrl, button }) => {
  return (
    <div>
      {/* Inline Style Block */}
      <style>
        {`
          /* Container Styling */
          .container {
            width: 100%;
            padding: 40px 20px;
            /* Gray background */
          }

          /* Max Width Wrapper */
          .max-width-wrapper {
            max-width: 1280px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 20px;
            justify-content: center;
          }

          /* Left Content (Text) */
          .text-section {
            text-align: center;
            color: white;
          }

          .text-section h1 {
            font-size: 2rem;
            font-weight: bold;
            color: #f1f1f1;
          }

          .divider {
            width: 4rem;
            height: 4px;
            background-color: #fbbf24; /* Yellow color */
            margin: 1rem auto;
          }

          .description {
            margin-top: 1rem;
            font-size: 1rem;
            color: #b3b3b3; /* Light gray */
          }

          .button-container {
            margin-top: 1rem;
          }

          .btn {
            background-color: #fbbf24;
            color: white;
            padding: 10px 20px;
            font-size: 1rem;
            border: none;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.3s;
          }

          .btn:hover {
            background-color: #f59e0b;
          }

          /* Right Image */
          .image-section {
            display: flex;
            justify-content: center;
          }

          .image {
            width: 100%;
            max-width: 320px;
            object-fit: cover;
            border-radius: 10px;
          }

          /* Responsive Design (Medium and Up) */
          @media (min-width: 768px) {
            .max-width-wrapper {
              flex-direction: row;
              gap: 40px;
            }

            .text-section {
              text-align: left;
              width: 50%;
            }

            .image-section {
              width: 50%;
              display: flex;
              justify-content: center;
            }

            .image {
              max-width: 500px;
            }
          }
        `}
      </style>

      {/* JSX Content */}
      <div className="container">
        <div className="max-width-wrapper">
          {/* Left Content */}
          <div className="text-section">
            <h1>{title}</h1>
            <div className="divider"></div>
            <p className="description">{description}</p>
            {/* Button (If Passed as Prop) */}
            {button && <div className="button-container">{button}</div>}
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
