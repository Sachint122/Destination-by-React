import React from 'react'
import Head from './hooks/Head'
import imagehead from '../images/Web_hero.jpg'
import Leftimg from './hooks/Leftimg'
import hacker from '../images/hacker.jpg'
import '../style/Web_Develop.css'
import responsive from '../images/download.png'
import personalisation from '../images/download (1).png'
import mobile2 from '../images/download (2).png'
import seo from '../images/download (3).png'
import Button from './hooks/ModernButton'
import why from '../images/Microsites-bro-1024x1024.png'
import { IoMdArrowDropright } from "react-icons/io";
export default function Web_Development() {
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
            <Head
                headers="Website Development"
                text1="Home"
                text2="Services"
                text3="Web Development"
                image={imagehead}
            />
            <hr />
            <Leftimg
                title="Professional WordPress Website Designing"
                description="At Destination Technologies, we understand the importance of a strong online presence for small and medium businesses. Our website designing services cater specifically to the unique needs of SMBs, helping them establish a professional and impactful online identity. We offer custom website design solutions that are visually appealing, user-friendly, and optimized for performance."
                imageUrl={hacker}
            />
            <hr />
            {/*  */}
            <div className="web-container" style={{height:'90vh'}}>
                <div>
                    <h1 className="web-header">
                        Key Features of Our Website Designing Services
                    </h1>
                </div>
                <div>
                    <div className="web-grid-container">
                        {cards1.slice(0, 4).map((card, index) => (
                            <div key={index} className="web-card">
                                <img src={card.image} alt={card.title} />
                                <h2 className="web-card-title">{card.title}</h2>
                                <p className="web-card-description">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <hr />
            {/*  why chooes us */}
            <div className="web-why-choose-us">
                <div className="web-max-width-wrapper">
                    {/* Left Image Section */}
                    <div className="web-image-section">
                        <img
                            src={why}
                            alt="CMS Design"
                            className="style"
                        />
                        <div className="web-enquiry-btn-container">
                            <a> <Button text="Enquire Now" /></a>
                        </div>
                    </div>

                    {/* Right Content Section */}
                    <div className="web-content-section">
                        <h2>Website Development...</h2>
                        <h1>Why Choose Destination?</h1>
                        <p>At Destination Technologies, we are committed to helping aspiring
                            developers kickstart their careers in the tech industry. Our
                            hands-on training, real-world projects, and expert mentorship
                            ensure that you gain the skills needed to excel in web
                            development, software engineering, and emerging technologies.
                            Whether you're a beginner or looking to enhance your expertise, we
                            provide the perfect platform to learn, grow, and succeed. Join us
                            and take the next step toward a bright future in development!</p>

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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
