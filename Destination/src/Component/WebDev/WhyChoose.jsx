import React from "react";
import EnquiryBtn from "./EnquiryBtn";

const WhyChooseUs = ({ image, title, subtitle, description, features }) => {
  return (
    <div className="why-choose-us">
      {/* Inline Style Block */}
      <style>
        {`
          /* Full Width Section */
          .why-choose-us {
            width: 100%;
           /* background-color: #2d2d2d;  Gray background */
            padding: 40px 20px;
          }

          /* Container */
          .max-width-wrapper {
            max-width: 1280px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 20px;
            justify-content: center;
            align-items: center;
          }

          /* Left Image Section */
          .image-section {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .image-section img {
            width: 100%;
            max-width: 320px;
            object-fit: cover;
            border-radius: 8px;
          }

          .enquiry-btn-container {
            margin-top: 1rem;
            margin-right: 3rem;
          }

          /* Right Content Section */
          .content-section {
            width: 100%;
            max-width: 50%;
            text-align: center;
            color: #f3f4f6;
            margin-left: 0rem;
          }

          .content-section h2 {
            font-size: 1.25rem;
            color: #e5e7eb; /* Light gray */
          }

          .content-section h1 {
            font-size: 2rem;
            font-weight: bold;
            color: #fbbf24; /* Yellow color */
          }

          .content-section p {
            margin-top: 1rem;
            font-size: 1rem;
            color: #d1d5db; /* Light gray */
            text-align: left;
          }

          /* Features List */
          .features-list {
            margin-top: 1.5rem;
          }

          .feature-item {
            margin-bottom: 1rem;
          }

          .feature-item h1 {
            font-size: 1.25rem;
            font-weight: bold;
            color: #fbbf24;
            margin-left: 2rem;
            text-align: left;
          }

          .feature-item p {
            display: inline-block;
            font-size: 1rem;
            color: #f3f4f6;
            margin-left: 0.5rem;
          }

          /* Responsive Design */
          @media (min-width: 768px) {
            .max-width-wrapper {
              flex-direction: row;
              gap: 40px;
            }

            .content-section {
              width: 50%;
              text-align: left;
            }

            .image-section {
              width: 50%;
              display: flex;
              justify-content: center;
            }
          }
        `}
      </style>

      <div className="max-width-wrapper">
        {/* Left Image Section */}
        <div className="image-section">
          <img
            src={image}
            alt="CMS Design"
            className="style"
          />
          <div className="enquiry-btn-container">
            <EnquiryBtn />
          </div>
        </div>

        {/* Right Content Section */}
        <div className="content-section">
          <h2>{subtitle}</h2>
          <h1>{title}</h1>
          <p>{description}</p>

          {/* Features List */}
          <div className="features-list">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <h1>{feature.heading} -:</h1>
                <p>{feature.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
