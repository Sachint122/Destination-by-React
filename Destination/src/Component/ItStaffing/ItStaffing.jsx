import React from "react";
import HeroSection from "../WebDev/HeroSection";
import Leftimg from "../WebDev/Leftimg";
import hacker from "./../../assets/hacker.jpg";
import onetime from "./../../assets/onetime.png";
import contact1 from "./../../assets/contact1.png";
import contact2 from "./../../assets/contact2.png";
import contact3 from "./../../assets/contact3.png";
import contact4 from "./../../assets/contact4.png";
import contact5 from "./../../assets/contact5.png";
import staf7 from "./../../assets/staf7.jpg";
import staf9 from "./../../assets/staf9.jpg";
import staf8 from "./../../assets/staf8.jpg";
import staf10 from "./../../assets/staf10.jpg";
import staf2 from "./../../assets/staf2.jpg";
import staf6 from "./../../assets/staf6.jpg";

import EnquiryBtn from "../WebDev/EnquiryBtn";
import FeatureSection from "../WebDev/FeatureSec";
import Container from "./Container";
import ItStaffingCard2 from "./ItstaffingCard2";
import ItstaffingCard3 from "./ItStafCard3";
import WhyChooseUs from "../WebDev/WhyChoose";
import ContactSection from "../WebDev/ContactCom";
import Card from "../WebDev/Card";

function ItStaffing() {
  const cardData = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zEotKdu8rEvTmQDr5k9rShpo7hQ0wu-Sww&s",
      title: "Candidate Database",
      description:
        "70,000+ extensive candidate databases across various specialties, domains and levels",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC1OmTiBphvsA5jkQWCJoOHiBLcopOzq8_Pw&s",
      title: "RPO/ Turnkey Engagements",
      description: "Proficient Team to manage end to end hiring",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR6wYfI04e_aLtxNfkMyDFPBFTfK3etQiCgg&s",
      title: "CXO’s Hiring Engagements",
      description: "Connect and Access to the decision makers",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHAh3TajXYQavSOYIo0HDLAmc5BwsnNsfyug&s",
      title: "Assessments",
      description: "Administer over 50,000+ assessments annually Pan- India",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN5HY2EVX_04O944YAlK4EUa1fjQXthlxtmQ&s",
      title: "Team",
      description:
        "50+ Destinizens with 15 recruiters 3+ years of continued success",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv_GoJbFJllT6pmbDm_vmtvLTCJC2-UagZUg&s",
      title: "Clientele",
      description:
        "100+ enterprise customers and 10+ Fortune 500 customers across domains",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfRFV-KMEZbQYCBzG8IaSW_z0NlB1cNxAyWQ&s",
      title: "Campus Network",
      description:
        "1000+ Institutions (Technology, & Management) across 100+ locations, Pan India",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR79UqBRmodGRaiNAjHS_k4s7je_Nx2BFYcQw&s",
      title: "Digitalized Experiences",
      description:
        "Over 1 Lakh+ Transactions digitalized across processes like Campus, Assessments and Coordination",
    },
  ];

  const cardData2 = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW_RVjDSODJuMqZ0gVweazYjfD0-ecWQ81Yg&s",
      title: "Consult",
      description:
        "Industry Benchmarking Market MappingOrganization DesignBudgeting JD Workshops",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-sfsAtrbRDwqAB7tSmK0z8ujbe8n9qXrghg&s",
      title: "Access",
      description:
        "Talent Landscape Requirement Plan Search Strategy & Brand Sourcing & Head- hunting Channel Management",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Pjj2AXugy2G74qEXYlpV82mpujI9xhbUhw&s",
      title: "Assess",
      description:
        "Assessment Development Assessment Platform Multi-skill Content Library Interview Services Scoring & Qualification",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDU2LxkYI5C8nsO-qqmiz1CnGKWCr0IVC-eQ&s",
      title: "Select",
      description:
        "Application management Stakeholder Management Funnelling & Selection Decisioning & Negotiation Reference Checks",
    },
  ];

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
      image: onetime,
      title: "One-time Placement",
      description:
        "Our One-Time Placement Assistance ensures you receive the support needed to land your first job in tech, with personalized resume building, interview preparation, and job referrals. We connect you with top companies, helping you start your career with confidence.",
    },
    {
      image: contact1,
      title: "Contract to Hire",
      description:
        "Our Contract to Hire program offers a unique opportunity to gain valuable work experience with top companies, with the potential for full-time employment after the contract period. This allows you to showcase your skills while building long-term career prospects.",
    },
    {
      image: contact2,
      title: "RPO (Recruitment Process Outsourcing)",
      description:
        "Our RPO (Recruitment Process Outsourcing) service streamlines your hiring process by managing recruitment end-to-end, from sourcing candidates to onboarding. We help businesses find the right talent quickly and efficiently.",
    },
    {
      image: contact3,
      title: "Leadership Hiring",
      description:
        "Our Leadership Hiring service specializes in identifying and recruiting top-tier executive talent for your organization. We focus on finding experienced leaders who align with your company’s vision, culture, and strategic goals, ensuring long-term success and growth.",
    },
    {
      image: contact4,
      title: "Campus and Off-Campus Hiring (Trained Freshers)",
      description:
        "Our Campus and Off-Campus Hiring (Trained Freshers) program connects companies with skilled, job-ready graduates. We provide businesses with fresh talent who have received specialized training, ensuring they are prepared to contribute effectively from day one.",
    },
    {
      image: contact5,
      title: "Assessment Support",
      description:
        "Our Assessment Support service helps businesses evaluate candidates through tailored assessments, ensuring you select the best fit for your organization. We provide customized tests to assess skills, knowledge, and problem-solving abilities, streamlining the hiring process.",
    },
  ];

  const staffing = [
    {
      image:
        staf2,
      title: "Expert IT Staffing",
      description:
        "We connect businesses with highly skilled IT professionals tailored to your needs. Our staffing solutions ensure the right talent for each project. Whether for short-term or long-term roles, we deliver the expertise you require.",
    },
    {
      image:
        staf8,
      title: "Top Tech Talent",
      description:
        "Access a network of top-tier tech professionals ready to innovate. We match companies with the best candidates to drive growth. Our approach ensures you get the right fit for your business.",
    },
    {
      image:
        staf9,
      title: "Future-Ready Teams",
      description:
        "Build teams with skills for the future of technology. We ensure your workforce is equipped to tackle tomorrow’s challenges today. Our solutions help you stay ahead in a rapidly changing landscape.",
    },
    {
      image:
        staf6,
      title: "Tech Expertise, Delivered",
      description:
        "Access skilled tech professionals who bring immediate value to your projects. We deliver the expertise you need to drive success. From dev. to innovation, we provide the right talent for every task.",
    },
  ];
  return (
    <>
      <HeroSection
        title="Website Development"
        breadcrumb="Home → Services → IT staffing"
        backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg6tF6hlSbm-Up64yXkF1pMp4IdpZepI4kjg&s"
      />

      <Leftimg
        title="Transforming Your Workforce: IT Staffing Solutions for Success"
        description="At Destination Technology, we help people learn real, practical skills that are needed in the tech industry. From full-stack development to certifications, we make sure you’re ready to start your career from day one. Our training includes hands-on projects and guidance from experienced mentors to help you apply what you learn. Whether you’re just starting or improving your skills, we’re here to support you every step of the way."
        imageUrl={hacker}
        button={<EnquiryBtn />}
      />

      <div className="w-full py-10 px-4 md:px-20 bg-gray-850 ">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-pink-400 text-center mt-12">
            IT Staffing: Your Strategic Workforce Solution
          </h1>
        </div>
        <div className="mt-2">
          <div
            className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 px-1 border-b border-gray-500 mt-16`}
          >
            {cards1.slice(0, 6).map((card, index) => (
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

      <div className="w-full py-10 px-4 md:px-20 text-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-300 mb-5 mt-5">
          Destination Staffing Solutions
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-yellow-500 my-3 text-center"></div>
          </div>
        </h1>

        {/* Intro Paragraph */}
        <p className="text-gray-400 text-lg  md:text-lg mb-8">
          "Choose your path to success with our specialized training programs in
          Full Stack Web Development and Digital Marketing. These in-demand
          courses are meticulously designed to provide you with the skills and
          expertise needed to excel in the respective fields.
        </p>

        {/* Cards Section */}

        <div
          className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-1 border-b border-gray-500`}
        >
          {staffing.slice(0, 4).map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>

      <Container
        heading="What we Bring to the Table..."
        paragraph="With a stronger emphasis on evolution of Talent Acquisition (TA) as a business function, we take pride in offering our TA solutions as an ‘Engagement and experience led’ than just ‘Fulfilment led’"
      />

      <div className="bg-[#0A192F] text-white py-10 px-5 mt-14">
        <h1 className="text-3xl font-bold text-center mb-6">Company Facts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14 px-8 l">
          {cardData.map((card, index) => (
            <ItstaffingCard3
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
        title="Why choose us for IT Staffing?"
        subtitle="IT Staffing..."
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
      <div className="bg-black text-white py-10 px-5 mt-18 pb-16 mb-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-300">
          Our Recruitment Process
        </h1>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14 px-8 bg-black">
          {cardData2.map((card, index) => (
            <ItstaffingCard3
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
      <ContactSection />
    </>
  );
}

export default ItStaffing;
