import React from "react";
import HeroSection from "../WebDev/HeroSection";
import hero from "./../../assets/hero.jpg";
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

function TraningSec() {
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

      <div className="w-full py-10 px-4 md:px-20 text-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-pink-300 mb-5 mt-5">
          Our Offerings in Training & Education
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-yellow-500 my-3 text-center"></div>
          </div>
        </h1>

        {/* Intro Paragraph */}
        <p className="text-gray-300 text-lg  md:text-lg mb-8">
          Choose your path to success with our specialized training programs in
          Full Stack Web Development and Digital Marketing. These in-demand
          courses are meticulously designed to provide you with the skills and
          expertise needed to excel in the respective fields.
        </p>

        {/* Cards Section */}

        <div
          className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12 px-1 border-b border-gray-500 mt-16`}
        >
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
        <p className="text-gray-300 text-lg md:text-lg mt-8">
          Choose the specialization that aligns with your goals and interests,
          and embark on a learning journey tailored to your needs. Explore our
          specialized Full Stack Development courses and take the next step
          towards becoming a proficient Full Stack Developer.
        </p>

        {/* Button */}

        <a href="#">
          <button className="mt-10 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 ">
            Enroll for Fullstack course
          </button>
        </a>
      </div>

      <div className="w-full py-10 px-4 md:px-20 bg-gray-850 ">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-pink-400 text-center mt-12">
            Key Features of Our Website Designing Services
          </h1>
        </div>
        <div className="mt-2">
          <div
            className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-1 border-b border-gray-500 mt-16`}
          >
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

export default TraningSec;
