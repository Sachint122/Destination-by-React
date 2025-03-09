import React from 'react'
import Head from './hooks/Head'
import imagehead from '../images/Our-Courses.png'
import '../style/Training_Education.css'
import Button from './hooks/ModernButton'
import Full_Stack_Card from './hooks/Full_Stack_Card'
import logo1 from '../images/logo/logo (6).png'
import logo2 from '../images/logo/logo (1).png'
import logo3 from '../images/logo/logo (2).png'
import logo4 from '../images/logo/logo (3).png'
import logo5 from '../images/logo/logo (4).png'
import logo6 from '../images/logo/logo (5).png'
import image1 from '../images/Courses.png';
import image2 from '../images/other/Career.png'
import { IoMdArrowDropright } from "react-icons/io";
export default function Training_Education() {
    const card2 = [
        {
            image: logo1,
            title: "Industry Experienced Faculty",
            description: "Learn from seasoned professionals and industry experts who bring real-world insights and expertise to the training programs. Benefit from their wealth of knowledge and gain valuable industry perspectives.",
        },
        {
            image: logo2,
            title: "Practical Hands-on Training",
            description: "Our programs emphasize practical learning, allowing you to apply theoretical concepts to real-world scenarios. Engage in hands-on projects, case studies, and simulations to develop a strong skill set and enhance your problem-solving abilities",
        },
        {
            image: logo3,
            title: "Placement Support",
            description: "We provide dedicated placement support to help you secure rewarding job opportunities in your desired field. Benefit from our strong network of industry connections and personalized career guidance to enhance your chances of success.",
        },
        {
            image: logo4,
            title: "State-of-the-Art Infrastructure",
            description: "Train in a conducive learning environment equipped with modern facilities and resources. Our well-equipped classrooms and labs provide a seamless learning experience.",
        },
        {
            image: logo5,
            title: "Industry Relevant Curriculum",
            description: "Our training programs are designed in collaboration with industry experts to ensure they remain relevant and aligned with the evolving needs of the job market. Stay updated with the latest trends and technologies.",
        },
        {
            image: logo6,
            title: "Industry Recognized Certifications",
            description: "Our training programs offer the opportunity to earn industry-recognized certifications, adding value to your resume and increasing your marketability. Enhance your professional credentials and stand out in the competitive job market.",
        },
    ];
    const features = [
        {
            heading: "Comprehensive Training Approach",
            content:
                "We offer a holistic and comprehensive training approach that goes beyond just theoretical knowledge. Our programs focus on practical skills, industry relevance, and placement support, empowering you for long-term career success.",
        },
        {
            heading: "Experienced Faculty",
            content:
                "Learn from experienced faculty who possess deep industry knowledge and expertise. Benefit from their guidance, mentorship, and real-world insights to enhance your learning experience.",
        },
        {
            heading: "Strong Industry Connections",
            content:
                "We have established strong connections with leading organizations across various industries. Our network and partnerships provide you with access to exciting job opportunities and internships.",
        },
        {
            heading: "Practical Learning Experience",
            content:
                "Our programs emphasize hands-on learning, allowing you to apply your knowledge to real-world scenarios. Engage in projects, case studies, and practical exercises to develop the skills and confidence necessary for your career.",
        },
        {
            heading: "Personalized Career Support",
            content:
                "We provide dedicated career support to help you navigate your job search and make informed career decisions. From resume building to interview preparation, we are here to guide and assist you every step of the way.",
        },
    ];
    return (
        <>
            <Head
                headers="Training & Education"
                text1="Home"
                text2="Services"
                text3="Training & Education"
                image={imagehead}
                pos="center"
            />
            <hr />
            <div>
                {/* JSX Content */}
                <div className="l-container">
                    <div className="max-width-wrapper">
                        {/* Left Content */}
                        <div className="text-section">
                            <h1>Empowering your Career Growth</h1>
                            <p className="description">At Destination Technologies, we take pride in being a leading finishing school for students and a trusted provider of quality training and education. Our comprehensive programs are designed to equip you with the skills, knowledge, and confidence needed to thrive in today's competitive job market. With a strong focus on practical learning and industry relevance, we go beyond theoretical concepts to ensure you are prepared for real-world challenges.</p>
                            <p className="description">With our training programs, you don't just gain knowledge; you also receive dedicated placement support. We understand the importance of securing meaningful employment, and our team is committed to assisting you in finding the right job opportunities that align with your career goals. With our extensive network and industry connections, we strive to connect you with leading organizations and open doors to exciting career prospects.</p>
                            <a> <Button text="Enquire Now" /></a>
                        </div>

                        {/* Right Image */}
                        <div className="image-section">
                            <img src="https://destinationtechs.com/wp-content/uploads/2023/07/Unified-1.svg" alt="Service Image" className="image" />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <section id='Course-details'>
                <div className='Full-course-text'>
                    <h2 style={{ fontSize: '2.5em' }}>Our Offerings in Training & Education</h2>
                    <p className="intro-paragraph">
                        Choose your path to success with our specialized training programs in
                        Full Stack Web Development and Digital Marketing. These in-demand
                        courses are meticulously designed to provide you with the skills and
                        expertise needed to excel in the respective fields.
                    </p>
                </div>
                <Full_Stack_Card />
                <div className='Full-bottom'>
                    <h4> Choose the specialization that aligns with your goals and interests, and embark on a learning journey tailored to your needs. Explore our specialized Full Stack  Development courses and take the next step towards becoming a proficient
                        <span> Full Stack Developer.</span></h4>
                    <a> <Button text="Enroll For Full Stack Course" /></a>
                </div>
            </section>
            <hr />
            <section id="Digital-Benifits">
                <h2>Key Highlights of Destination Technologies</h2>
                <div className='Digital-Benifits-main'>
                    {card2.map((card) => (
                        <div className="tr-first-row">
                            <img src={card.image} />
                            <h3 className='tr-key-head'>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <hr />
            <div className="web-why-choose-us">
                <div className="web-max-width-wrapper">
                    {/* Left Image Section */}
                    <div className="trainig-image-section">
                        <img src={image1} alt="Image 1" data-animate="gro-im" />
                        <img src={image2} alt="Image 2" data-animate="gro-im" />
                    </div>
                    {/* <div class="career-growth-left">

                    </div> */}

                    {/* Right Content Section */}
                    <div className="web-content-section">
                        <h2>Training & Education...</h2>
                        <h1>Why Choose Us?</h1>
                        <p className='content'>At Destination Technologies, we provide hands-on, industry-focused training to help you build real-world skills. Our expert-led courses, practical projects, and personalized mentorship ensure you stay ahead in the tech industry. With cutting-edge curriculum and career guidance, we prepare you for high-growth job opportunities. Join us to transform your learning into a successful career!</p>

                        {/* Features List */}
                        <div className="web-features-list">
                            {features.map((feature, index) => (
                                <div key={index} className='program-list'>
                                    <div>
                                        <IoMdArrowDropright size={40} color='#00d4ff' />
                                    </div>
                                    <div>
                                        <span>{feature.heading}: </span>
                                        <p style={{opacity:'0.6'}}>
                                            {feature.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                            <a> <Button text="Enroll Now" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
