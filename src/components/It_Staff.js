import React from 'react'
import { motion } from 'framer-motion';
import Head from './hooks/Head'
import imagehead from '../images/IT-Staffings.png'
import Leftimg from './hooks/Leftimg'
import hacker from '../images/ithead.png'
import '../style/It_Staff.css'
import onetime from '../images/card/One-time.png'
import contact1 from '../images/card/contract-–-1.png'
import contact2 from '../images/card/contract-–-2.png'
import contact3 from '../images/card/contract-–-3.png'
import contact4 from '../images/card/contract-–-4.png'
import contact5 from '../images/card/contract.png'
import staf2 from "../images/staff/staf2.jpg";
import staf8 from "../images/staff/staf8.jpg";
import staf9 from "../images/staff/staf9.jpg";
import staf6 from "../images/staff/staf6.jpg";
import unfiled from '../images/Unified.png'
import Container from './hooks/Container';
import { IoMdArrowDropright } from "react-icons/io";
import Button from './hooks/ModernButton';
export default function It_Staff() {
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
            image: staf2,
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
    const features = [
        {
            heading: "Extensive Network",
            content:
                "Access to a vast pool of talented professionals with diverse specialties and skill sets.",
        },
        {
            heading: "Personalized Approach:",
            content:
                "We understand your unique requirements and provide customized solutions tailored to your business needs.",
        },
        {
            heading: "Rigorous Screening",
            content:
                "Our thorough screening process ensures that you are presented with top-quality candidates who meet your criteria.",
        },
        {
            heading: "Proven Expertise",
            content:
                "With years of experience in the industry, we have the expertise to identify and recruit the right talent for your organization",
        },
        {
            heading: "Seamless Process:",
            content:
                "Our streamlined processes and dedicated team make the hiring experience efficient and hassle-free.",
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
    return (
        <>
            <Head
                headers="Training & Education"
                text1="Home"
                text2="Services"
                text3="IT & Staff"
                image={imagehead}
            />
            <hr />
            <Leftimg
                title="Transforming Your Workforce: IT Staffing Solutions for Success"
                description="At Destination Technologies, we understand the importance of a strong online presence for small and medium businesses. Our website designing services cater specifically to the unique needs of SMBs, helping them establish a professional and impactful online identity. We offer custom website design solutions that are visually appealing, user-friendly, and optimized for performance."
                imageUrl={hacker}
            />
            <hr />
            <section id='Course-details'>
                <div className='Full-course-text'>
                    <h2 style={{ fontSize: '2.5em' }}>Our IT Staffing Offerings</h2>
                    <p style={{ fontSize: '2.5em' }} className="intro-paragraph">
                        IT Staffing: Your Strategic Workforce Solution
                    </p>
                </div>
                <div className="custom-container">
                    <div className="custom-grid">
                        {cards1.slice(0, 6).map((card) => (
                            <motion.div
                                className="custom-card"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px  rgba(3, 45, 251, 0.781)" }}
                            >
                                <img src={card.image} alt={card.title} className="custom-card-image" />
                                <h3 className="custom-card-title">{card.title}</h3>
                                <p className="custom-card-description">{card.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <hr />
            <div className="destination-staffing">
                {/* Heading */}
                <h1>
                    Destination Staffing Solutions
                    <div className="flex justify-center">
                        <div className="w-24 h-1 bg-yellow-500 my-3 text-center"></div>
                    </div>
                </h1>

                {/* Intro Paragraph */}
                <p>
                    Choose your path to success with our specialized training programs in Full Stack Web Development and Digital Marketing. These in-demand courses are meticulously designed to provide you with the skills and expertise needed to excel in the respective fields.
                </p>

                {/* Cards Section */}
                <div className="card-section">
                    {staffing.slice(0, 4).map((card) => (
                        <motion.div
                            className="custom-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px  rgba(3, 45, 251, 0.781)" }}
                        >
                            <img src={card.image} alt={card.title} className="custom-card-image" />
                            <h3 className="custom-card-title">{card.title}</h3>
                            <p className="custom-card-description">{card.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
            <hr />
            <Container
                heading="What we Bring to the Table..."
                paragraph="With a stronger emphasis on evolution of Talent Acquisition (TA) as a business function, we take pride in offering our TA solutions as an ‘Engagement and experience led’ than just ‘Fulfilment led’"
            />
            {/* company fact */}
            <div className="company-facts-container">
                <h1 className="text-3xl font-bold text-center mb-6">Company Facts</h1>
                <div className="fac-grid-container">
                    {cardData.map((card, index) => (
                        <div key={index} className="fac-card">
                            <img src={card.image} alt={card.title} />
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <hr />
            <div className="web-why-choose-us">
                <div className="web-max-width-wrapper">
                    {/* Left Image Section */}
                    <div className="trainig-image-section">
                        <img src={unfiled} alt="Image 1" data-animate="gro-im" />
                    </div>
                    {/* <div class="career-growth-left">

                    </div> */}

                    {/* Right Content Section */}
                    <div className="web-content-section">
                        <h2>IT Staffing...</h2>
                        <h1>Why choose us for IT Staffing?</h1>
                        <p>With Destination Technologies as your IT staffing partner, unlock the power of exceptional talent and drive your organization's success to new heights</p>

                        {/* Features List */}
                        <div className="web-features-list">
                            {features.map((feature, index) => (
                                <div key={index} className='program-list'>
                                    <div>
                                        <IoMdArrowDropright size={40} color='#00d4ff' />
                                    </div>
                                    <div>
                                        <span>{feature.heading}: </span>
                                        {feature.content}
                                    </div>
                                </div>
                            ))}
                            <a> <Button text="Enroll Now" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="recruitment-process-container">
                <h1 className="pro-heading">Our Recruitment Process</h1>
                <div className="pro-grid-container">
                    {cardData2.map((card, index) => (
                        <div key={index} className="pro-card">
                            <img src={card.image} alt={card.title} className="pro-card-image" />
                            <h3 className="pro-card-title">{card.title}</h3>
                            <p className="pro-card-description">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
