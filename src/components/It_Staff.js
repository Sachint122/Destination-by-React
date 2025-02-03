import React from 'react'
import Head from './hooks/Head'
import imagehead from '../images/IT-Staffings.png'
import Leftimg from './hooks/Leftimg'
import hacker from '../images/ithead.png'
import '../style/It_Staff.css'
import FCard from './hooks/FCard'
import onetime from '../images/card/One-time.png'
import contact1 from '../images/card/contract-–-1.png'
import contact2 from '../images/card/contract-–-2.png'
import contact3 from '../images/card/contract-–-3.png'
import contact4 from '../images/card/contract-–-4.png'
import contact5 from '../images/card/contract.png'
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
                        {cards1.slice(0, 6).map((card, index) => (
                            <FCard
                                key={index}
                                image={card.image}
                                title={card.title}
                                description={card.description}
                                list={card.list}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
