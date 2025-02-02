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

const Development = () => {
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

export default Development;
