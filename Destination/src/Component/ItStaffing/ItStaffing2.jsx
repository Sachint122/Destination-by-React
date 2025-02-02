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

function ItStaffing2() {
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


{/* Our IT Staffing Offerings */}

<div className="it-staffing">
      {/* Inline Style Block */}
      <style>
        {`
          /* Full Width Container */
          .it-staffing {
            width: 100%;
            padding: 40px 20px;
            background-color: #2d2d2d; /* Gray background */
          }

          /* Heading */
          .it-staffing h1 {
            font-size: 2rem;
            font-weight: bold;
            color: #ec4899; /* Pink color */
            text-align: center;
            margin-top: 3rem;
          }

          /* Cards Section */
          .cards-section {
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
            .cards-section {
              grid-template-columns: repeat(3, 1fr);
            }
          }
        `}
      </style>

      {/* Heading */}
      <h1>IT Staffing: Your Strategic Workforce Solution</h1>

      {/* Cards Section */}
      <div className="cards-section">
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

    {/* Destination Staffing Solutions */}

    <div className="destination-staffing">
      <style>
        {`
          /* Full Width Container */
          .destination-staffing {
            width: 100%;
            padding: 40px 20px;
            text-align: center;
          }

          /* Heading */
          .destination-staffing h1 {
            font-size: 1.875rem; /* 3xl on small screens */
            font-weight: bold;
            color: #d1d5db; /* gray-300 */
            margin-bottom: 1.25rem;
            margin-top: 1.25rem;
          }

          .destination-staffing h1 .flex {
            display: flex;
            justify-content: center;
          }

          .destination-staffing h1 .flex .w-24 {
            width: 6rem; /* 24 */
            height: 0.25rem;
            background-color: #fbbf24; /* yellow-500 */
            margin: 0.75rem auto;
            text-align: center;
          }

          /* Intro Paragraph */
          .destination-staffing p {
            color: #9ca3af; /* gray-400 */
            font-size: 1.125rem; /* text-lg */
            margin-bottom: 2rem;
          }

          /* Cards Section */
          .destination-staffing .card-section {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 1.25rem; /* 5 */
            padding: 0 0.25rem;
            border-bottom: 1px solid #6b7280; /* gray-500 */
            margin-top: 4rem;
          }

          /* Responsive */
          @media (min-width: 640px) {
            .destination-staffing .card-section {
              grid-template-columns: repeat(1, 1fr);
            }
          }

          @media (min-width: 768px) {
            .destination-staffing .card-section {
              grid-template-columns: repeat(3, 1fr); /* md:grid-cols-3 */
            }
          }

          @media (min-width: 1024px) {
            .destination-staffing .card-section {
              grid-template-columns: repeat(4, 1fr); /* lg:grid-cols-4 */
            }
          }
        `}
      </style>

      {/* Heading */}
      <h1>
        Destination Staffing Solutions
        <div className="flex justify-center">
          <div className="w-24 h-1 bg-yellow-500 my-3 text-center"></div>
        </div>
      </h1>

      {/* Intro Paragraph */}
      <p>
        "Choose your path to success with our specialized training programs in Full Stack Web Development and Digital Marketing. These in-demand courses are meticulously designed to provide you with the skills and expertise needed to excel in the respective fields."
      </p>

      {/* Cards Section */}
      <div className="card-section">
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

<div className="company-facts-container">
      <style>
        {`
          .company-facts-container {
            background-color: #0A192F;
            color: white;
            padding: 2.5rem 1.25rem;
            margin-top: 3.5rem;
          }

          .company-facts-container h1 {
            font-size: 1.875rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 1.5rem;
          }

          .grid-container {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
            margin-top: 3.5rem;
            padding-left: 2rem;
            padding-right: 2rem;
          }

          .grid-container .card {
            background-color: #1A2537;
            padding: 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            color: #fff;
          }

          @media (min-width: 640px) {
            .grid-container {
              grid-template-columns: repeat(2, 1fr);
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
        `}
      </style>

      <h1 className="text-3xl font-bold text-center mb-6">Company Facts</h1>
      <div className="grid-container">
        {cardData.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt={card.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-yellow-700">{card.title}</h3>
            <p className="text-white-800 mt-2">{card.description}</p>
          </div>
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

{/* Our Recruitment Process */}


<div className="recruitment-process-container">
      <h1 className="heading">Our Recruitment Process</h1>
      <div className="grid-container">
        {cardData2.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt={card.title} className="card-image" />
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .recruitment-process-container {
          background-color: #000;
          color: white;
          padding: 2.5rem 1.25rem;
          margin-top: 4.5rem;
          padding-bottom: 4rem;
          margin-bottom: 1.5rem;
        }

        .heading {
          font-size: 1.875rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 1.5rem;
          color: #d3d3d3;
        }

        .grid-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-top: 3.5rem;
          padding-left: 2rem;
          padding-right: 2rem;
          background-color: #000;
        }

        .card {
          background-color: #1a2537;
          padding: 1.5rem;
          border-radius: 0.5rem;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.7);
          text-align: center;
          color: #fff;
          margin-top:0.5rem;
        }

        .card-image {
          width: 100%;
          height: 10rem;
          object-fit: cover;
          border-radius: 0.5rem;
          margin-bottom: 1rem;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #f4d03f; /* Yellow color */
        }

        .card-description {
          font-size: 1rem;
          color: #d3d3d3;
          margin-top: 0.5rem;
        }

        @media (min-width: 640px) {
          .grid-container {
            grid-template-columns: repeat(2, 1fr);
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
      `}</style>
    </div>
    
      <ContactSection />
    </>
  );
}

export default ItStaffing2;
