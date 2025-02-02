import React from "react";
import HeroSection from "../WebDev/HeroSection";
import hero2 from "./../../assets/hero2.jpg";
import java from "./../../assets/java.png";
import python from "./../../assets/python.png";
import pjava from "./../../assets/pjava.png";
import unif1 from "./../../assets/unif1.png";
import unif2 from "./../../assets/unif2.png";
import unif3 from "./../../assets/unif3.png";

import Leftimg from "../WebDev/Leftimg";
import EnquiryBtn from "../WebDev/EnquiryBtn";
import FeatureSection from "../WebDev/FeatureSec";
import Cardinfo from "./CardInfo";
import WhyChooseUs from "../WebDev/WhyChoose";
import ContactSection from "../WebDev/ContactCom";
import Card from "../WebDev/Card";

function TraningSec2() {
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
        "Get guidance from experienced professionals who have worked in the industry. Learn best practices, problem-solving techniques,and insider knowledge from tech experts.",
    },
    {
      heading: "Certification Programs",
      content:
        "Earn recognized certifications that validate your skills and improve job prospects. Certifications in Java, SQLFull-Stack Development, and more help you stand out.",
    },
    {
      heading: "Internship & Placement Assistance",
      content:
        "Get support in securing internships, job referrals, and resume-building tips. We help you connect with recruiters and land job opportunities in top tech firms.",
    },
  ];

  const cards1 = [
    {
      image: java,
      title: "Engaging and Responsive Design:",
      description:
        "We create visually appealing websites that capture the attention of your visitors and provide an intuitive user experience. Our designs are responsive, ensuring seamless functionality across devices.",
    },
    {
      image: python,
      title: "Customization and Personalization",
      description:
        "Every business is unique, and we believe your website should reflect that. We offer customization options to tailor the design, layout, and features of your website to suit your specific needs.",
    },
    {
      image: pjava,
      title: "Mobile-Friendly Design",
      description:
        "With the increasing use of mobile devices, we ensure that your website is mobile-friendly and delivers a seamless browsing experience to your mobile users.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-uHnAgUmJPQlmo56w7GGptreDLbh79tMuMg&s",
      title: "Search Engine Optimization (SEO):",
      description:
        "We optimize your website for search engines, improving its visibility and organic ranking. Our SEO strategies ensure that your website reaches the right audience and drives relevant traffic.",
    },
    {
      image:
        "https://destinationtechs.com/wp-content/uploads/2023/07/Unified-3-300x300.png",
      title: "Engaging and Responsive Design:",
      description:
        "We create visually appealing websites that capture the attention of your visitors and provide an intuitive user experience. Our designs are responsive, ensuring seamless functionality across devices.",
    },
    {
      image:
        "https://destinationtechs.com/wp-content/uploads/2023/07/Java-Full-stack-%E2%80%93-1-300x300.png",
      title: "Customization and Personalization",
      description:
        "Every business is unique, and we believe your website should reflect that. We offer customization options to tailor the design, layout, and features of your website to suit your specific needs.",
    },
  ];

  const card2 = [
    {
      image: java,
      title: "Java Full-Stack",
      description:
        "We create visually appealing websites that capture the attention of your visitors and provide an intuitive user experience. Our designs are responsive, ensuring seamless functionality across devices.",
    },
    {
      image: python,
      title: "Python Full-Stack",
      description:
        "Every business is unique, and we believe your website should reflect that. We offer customization options to tailor the design, layout, and features of your website to suit your specific needs.",
    },
    {
      image: pjava,
      title: "Java + Python Full Stack",
      description:
        "With the increasing use of mobile devices, we ensure that your website is mobile-friendly and delivers a seamless browsing experience to your mobile users.",
    },
    {
      image: unif1,
      title: "Unified Course 1",
      description:
        "We optimize your website for search engines, improving its visibility and organic ranking. Our SEO strategies ensure that your website reaches the right audience and drives relevant traffic.",
    },
    {
      image: unif2,
      title: "Unified Course 2",
      description:
        "We create visually appealing websites that capture the attention of your visitors and provide an intuitive user experience. Our designs are responsive, ensuring seamless functionality across devices.",
    },
    {
      image: unif3,
      title: "Unified Course 3",
      description:
        "Every business is unique, and we believe your website should reflect that. We offer customization options to tailor the design, layout, and features of your website to suit your specific needs.",
    },
    {
      image:
        "https://destinationtechs.com/wp-content/uploads/2023/07/One-time-300x300.png",
      title: "Mobile-Friendly Design",
      description:
        "With the increasing use of mobile devices, we ensure that your website is mobile-friendly and delivers a seamless browsing experience to your mobile users.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zEotKdu8rEvTmQDr5k9rShpo7hQ0wu-Sww&s",
      title: "Search Engine Optimization (SEO):",
      description:
        "We optimize your website for search engines, improving its visibility and organic ranking. Our SEO strategies ensure that your website reaches the right audience and drives relevant traffic.",
    },
  ];
  return (
    <>
      <HeroSection
        title="Training & Education"
        breadcrumb="Home → Services → Training & Education"
        backgroundImage={hero2}
      />
      <Leftimg
        title="Empowering your Career Growth"
        description="At Destination Technologies, we take pride in being a leading finishing school for students and a trusted provider of quality training and education. Our comprehensive programs are designed to equip you with the skills, knowledge, and confidence needed to thrive in today's competitive job market. With a strong focus on practical learning and industry relevance, we go beyond theoretical concepts to ensure you are prepared for real-world challenges."
        imageUrl="https://destinationtechs.com/wp-content/uploads/2023/07/Unified-1.svg"
        button={<EnquiryBtn />}
      />


      {/* traning and education cards */}

      <div className="training-offerings">
        {/* Inline Style Block */}
        <style>
          {`
          /* Full Width Container */
          .training-offerings {
            width: 100%;
            padding: 40px 20px;
            text-align: center;
          }

          /* Heading */
          .training-offerings h1 {
            font-size: 2rem;
            font-weight: bold;
            color: #fbbf24; /* Yellow color */
            margin-bottom: 1rem;
            margin-top: 1rem;
          }

          .training-offerings h1 .underline {
            width: 6rem;
            height: 4px;
            background-color: #fbbf24;
            margin: 1rem auto;
          }

          /* Intro Paragraph */
          .intro-paragraph {
            color: #d1d5db; /* Light gray */
            font-size: 1.125rem;
            margin-bottom: 2rem;
          }

          /* Cards Section */
          .cards-section {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
            padding: 0 1rem;
            margin-top: 4rem;
          }

          /* Closing Paragraph */
          .closing-paragraph {
            color: #d1d5db; /* Light gray */
            font-size: 1.125rem;
            margin-top: 2rem;
          }

          /* Button */
          .enroll-btn {
            margin-top: 2.5rem;
            padding: 0.75rem 1.5rem;
            background-color: #2563eb;
            color: white;
            font-size: 1.125rem;
            font-weight: 600;
            border-radius: 0.375rem;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            transition: background-color 0.3s;
          }

          .enroll-btn:hover {
            background-color: #1d4ed8; /* Darker blue on hover */
          }

          /* Media Query for Larger Screens */
          @media (min-width: 768px) {
            .cards-section {
              grid-template-columns: repeat(3, 1fr);
            }

            .training-offerings h1 {
              font-size: 2.25rem;
            }

            .intro-paragraph {
              font-size: 1.25rem;
            }

            .closing-paragraph {
              font-size: 1.25rem;
            }

            .enroll-btn {
              font-size: 1.25rem;
            }
          }
        `}
        </style>

        {/* Heading */}
        <h1>
          Our Offerings in Training & Education
          <div className="underline"></div>
        </h1>

        {/* Intro Paragraph */}
        <p className="intro-paragraph">
          Choose your path to success with our specialized training programs in
          Full Stack Web Development and Digital Marketing. These in-demand
          courses are meticulously designed to provide you with the skills and
          expertise needed to excel in the respective fields.
        </p>

        {/* Cards Section */}
        <div className="cards-section">
          {card2.slice(0, 6).map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        {/* Closing Paragraph */}
        <p className="closing-paragraph">
          Choose the specialization that aligns with your goals and interests,
          and embark on a learning journey tailored to your needs. Explore our
          specialized Full Stack Development courses and take the next step
          towards becoming a proficient Full Stack Developer.
        </p>

        {/* Button */}
        <a href="#">
          <button className="enroll-btn">Enroll for Fullstack course</button>
        </a>
      </div>

      {/* Key Highlights of Destination Technologies */}

      <div className="key-features">
        {/* Inline Style Block */}
        <style>
          {`
          /* Full Width Container */
          .key-features {
            width: 100%;
            padding: 40px 20px;
            background-color:rgb(45, 54, 133); /* Gray background */
          }

          /* Heading */
          .key-features h1 {
            font-size: 2rem;
            font-weight: bold;
            color: #ec4899; /* Pink color */
            text-align: center;
            margin-top: 3rem;
          }

          /* Cards Section */
          .cards2-section {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.25rem;
            padding: 0 1rem;
            margin-top: 4rem;
            border-bottom: 1px solid #6b7280; /* Border color */
          }

          /* Media Query for Larger Screens */
          @media (min-width: 768px) {
            .cards-section {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          @media (min-width: 1024px) {
            .cards2-section {
              grid-template-columns: repeat(4, 1fr);
            }
          }
        `}
        </style>

        {/* Heading */}
        <h1>Key Features of Our Website Designing Services</h1>

        {/* Cards Section */}
        <div className="cards2-section">
          {cards1.slice(0, 4).map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>

      <WhyChooseUs
        image="https://destinationtechs.com/wp-content/uploads/2023/07/Microsites-bro-1024x1024.png"
        title="Why choose us ?"
        subtitle="Training & Education..."
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
}

export default TraningSec2;
