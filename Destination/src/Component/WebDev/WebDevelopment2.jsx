import React from "react";
import "./page1.css";

import EnquiryBtn from "./EnquiryBtn.jsx";
import hero from "./../../assets/hero.jpg";
import hacker from "./../../assets/hacker.jpg";
import responsive from "./../../assets/responsive.jpg";
import personalisation from "./../../assets/personlisation.jpg";
import mobile2 from "./../../assets/mobile2.jpg";
import seo from "./../../assets/seo.jpg";
import img4 from "./../../assets/img4.png";

import HeroSection from "./HeroSection.jsx";
import Leftimg from "./Leftimg.jsx";  
import WhyChooseUs from "./WhyChoose.jsx";
import ContactSection from "./ContactCom.jsx";
import Card from "./Card.jsx";

const WebDevelopment2 = () => {
  const features = [
    {
      heading: "Industry-Relevant Training",
      content:
        "We provide hands-on training with the latest technologies to make you job-ready.",
    },
    {
      heading: "Hands-On Projects",
      content:
        "Learn by doing! Work on real-world projects that simulate industry scenarios. Gain practical experience and build a strong portfolio to showcase your skills.",
    },
    {
      heading: "Expert Mentorship",
      content:
        "Get guidance from experienced professionals who have worked in the industry. Learn best practices, problem-solving techniques, and insider knowledge from tech experts.",
    },
    {
      heading: "Certification Programs",
      content:
        "Earn recognized certifications that validate your skills and improve job prospects. Certifications in Java, SQL, Full-Stack Development, and more help you stand out.",
    },
    {
      heading: "Internship & Placement Assistance",
      content:
        "Get support in securing internships, job referrals, and resume-building tips. We help you connect with recruiters and land job opportunities in top tech firms.",
    },
  ];

  const cards1 = [
    {
      image: responsive, // No curly braces here
      title: "Engaging and Responsive Design:",
      description:
        "We create visually appealing websites that capture the attention of your visitors and provide an intuitive user experience. Our designs are responsive, ensuring seamless functionality across devices.",
    },
    {
      image: personalisation,
      title: "Customization and Personalization",
      description:
        "Every business is unique, and we believe your website should reflect that. We offer customization options to tailor the design, layout, and features of your website to suit your specific needs.",
    },
    {
      image: mobile2,
      title: "Mobile-Friendly Design",
      description:
        "With the increasing use of mobile devices, we ensure that your website is mobile-friendly and delivers a seamless browsing experience to your mobile users.",
    },
    {
      image: seo,
      title: "Search Engine Optimization (SEO):",
      description:
        "We optimize your website for search engines, improving its visibility and organic ranking. Our SEO strategies ensure that your website reaches the right audience and drives relevant traffic.",
    },
  ];
  

  return (
    <>
      <HeroSection
        title="Website Development"
        breadcrumb="Home → Services → Web Development"
        backgroundImage={hero}
      />

      <Leftimg
        title="Professional WordPress Website Designing"
        description="At Destination Technologies, we understand the importance of a strong online presence for small and medium businesses. Our website designing services cater specifically to the unique needs of SMBs, helping them establish a professional and impactful online identity. We offer custom website design solutions that are visually appealing, user-friendly, and optimized for performance."
        imageUrl={hacker}
        button={<EnquiryBtn />}
      />

<div>
      {/* Inline Style Block */}
      <style>
        {`
          /* Full Width Section */
          .container {
            width: 100%;
            padding: 40px 20px;
            
          }

          /* Header */
          .header {
            text-align: center;
            margin-top: 3rem;
            font-size: 2rem;
            font-weight: bold;
            color: #f472b6; /* Pink color */
          }

          /* Grid Layout */
          .grid-container {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.25rem;
            margin-top: 4rem;
            border-bottom: 1px solid #6b7280; /* Border gray */
          }

          @media (min-width: 640px) {
            .grid-container {
              grid-template-columns: 1fr 1fr;
            }
          }

          @media (min-width: 768px) {
            .grid-container {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          @media (min-width: 1024px) {
            .grid-container {
              grid-template-columns: repeat(4, 1fr);
            }
          }

          /* Card Styling */
          .card {
            
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            text-align: center;
            opacity: 1;
            transform: translateY(20px);
            animation: fadeInUp 0.6s forwards;
            gap:10px;
          }

          .card:nth-child(even) {
            animation-delay: 0.3s; /* Delay for even cards */
          }

          .card:nth-child(odd) {
            animation-delay: 0.5s; /* Delay for odd cards */
          }

          /* Card Hover Animation */
          .card:hover {
            transform: translateY(-10px); /* Slight lift */
            box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
            
          }

          .card img {
            max-width: 100%;
            border-radius: 8px;
            transition: transform 0.3s ease;
          }

          .card img:hover {
            transform: scale(1.1); /* Slight zoom effect on hover */
          }

          .card-title {
            font-size: 1.25rem;
            font-weight: bold;
            color: #fbbf24; /* Yellow text color */
            margin-top: 1rem;
          }

          .card-description {
            color: #d1d5db; /* Light gray */
            margin-top: 0.5rem;
          }

          /* Fade-in animation */
          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      {/* JSX Content */}
      <div className="container">
        <div>
          <h1 className="header">
            Key Features of Our Website Designing Services
          </h1>
        </div>
        <div className="mt-2">
          <div className="grid-container">
            {cards1.slice(0, 4).map((card, index) => (
              <div key={index} className="card">
                <img src={card.image} alt={card.title} />
                <h2 className="card-title">{card.title}</h2>
                <p className="card-description">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

     

      <WhyChooseUs
        image={img4}
        title="Why Choose Destination?"
        subtitle="Website Development..."
        description="At Destination Technologies, we are committed to helping aspiring
              developers kickstart their careers in the tech industry. Our
              hands-on training, real-world projects, and expert mentorship
              ensure that you gain the skills needed to excel in web
              development, software engineering, and emerging technologies.
              Whether you're a beginner or looking to enhance your expertise, we
              provide the perfect platform to learn, grow, and succeed. Join us
              and take the next step toward a bright future in development!"
        features={features}
      />
      <ContactSection />
    </>
  );
};

export default WebDevelopment2;
