import { React, useState } from 'react'
import '../style/Full_stack/Full_stack.css';
import image from './hooks/images/Destination-Technology-Group.png'
import logo1 from './hooks/images/logo/download.png'
import logo2 from './hooks/images/logo/Deadline 1.png';
import logo3 from './hooks/images/logo/Certificate 2.png';
import logo4 from './hooks/images/logo/IT Support.png';
import logo5 from './hooks/images/icon/Web Development.png'
import logo6 from './hooks/images/icon/Web Development (1).png'
import logo7 from './hooks/images/icon/Wireframe.png'
import image2 from './hooks/images/Courses.png';
import image3 from './hooks/images/Destination-Technologies-Staff.png'
import image4 from './hooks/images/Destination-Technologies-Unlock.png'
import EButton from './hooks/ExploreButton';
import Button from './hooks/ModernButton';
import Brand from './hooks/Brand';
import CountUpSection from './hooks/CountUpSection';
import Language from './hooks/Language';
import List from './hooks/List';
import Full_Stack_Card from './hooks/Full_Stack_Card';
import Accordion from './hooks/Accordian';
import ImageCarousel from './hooks/ImageCarousel';
export default function Full_stack() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const sections = [
        { title: "Why We Provide BestIT Services?", content: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue;" },
        { title: "Describe Our Company History?", content: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue;" },
        { title: "Do You  Provide Any Job", content: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue;" },
        { title: "Payment Method?", content: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue;" },
    ];
    const questions = [
        {
            title: "What Is The Duration Of The Full Stack Web Development Course?",
            content: "The duration of the course varies based on the specific program you choose. Generally, our Full Stack Web Development courses range from 3 to 6 months, depending on the depth and breadth of the curriculum."
        },
        {
            title: "Are There Any Prerequisites For Enrolling In The Full Stack Web Development Courses?",
            content: "No, there are no specific prerequisites for enrolling in our Full Stack Web Development program. However, a basic understanding of programming concepts and familiarity with HTML, CSS, and JavaScript can be beneficial."
        },
        {
            title: "What Types Of Full Stack Web Development Courses Do You Offer?",
            content: "At Destination Technologies, we offer specialized courses in Java Full Stack, Python Full Stack, and Java + Python Full Stack. Each course is designed to provide comprehensive training in the respective technologies."
        },
        {
            title: "How  Can I Enroll In A Full Stack Web Development Course?",
            content: "To enroll in our Full Stack Web Development course, simply visit our website and navigate to the course page. Click on the Enroll Now button and follow the instructions to complete the enrollment process."
        },
        {
            title: "How Can I Contact Destination Technologies For More Information?",
            content: "You can reach out to us through the following contact details:Location: BTM Layout, Bengaluru, Karnataka, Hyderabad, Telangana, Vijayawada, Andhra Pradesh Phone: 9888748888"
        },
    ]
    return (
        <>
            <section id='Full-head'>
                <div className="head-main" style={{ position: 'relative', overflow: 'hidden', height: '75vh' }}>
                    <div
                        className="background-overlay"
                        style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'brightness(30%)', // Adjusts visibility
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: -1
                        }}
                    ></div>
                    <div className='Full-content'>
                        <h6>Software Development Courses</h6>
                        <h1>Master the Art of Full Stack Web Development: Empower Your Digital Journey</h1>
                        <p>At Destination Technologies, our Full Stack Web Development program equips you with the skills and knowledge to become a proficient web developer. With a comprehensive curriculum and hands-on training, we prepare you to build dynamic and responsive web applications. Join us on this transformative learning journey and unlock a world of opportunities in the ever-evolving field of web development.</p>
                        <a> <EButton /></a>
                    </div>
                </div>
            </section>
            <hr />
            <section id='Course-details'>
                <div className='course-main'>
                    <div className='course-sub'>
                        <div>
                            <img src={logo1}></img>
                        </div>
                        <div>
                            <h2>Full Stack Development</h2>
                            <h4>Specialization</h4>
                        </div>
                    </div>
                    <div className='course-sub'>
                        <div>
                            <img src={logo2}></img>
                        </div>
                        <div>
                            <h2>Duration</h2>
                            <h4>3 Months</h4>
                        </div>
                    </div>
                    <div className='course-sub'>
                        <div>
                            <img src={logo3}></img>
                        </div>
                        <div>
                            <h2>Certification Course</h2>
                            <h4>by Destination Technology</h4>
                        </div>
                    </div>
                    <div className='course-sub'>
                        <div>
                            <img src={logo4}></img>
                        </div>
                        <div>
                            <h2>Placement Support</h2>
                            <h4>From our Recruitment Partner</h4>
                        </div>
                    </div>
                </div>
                <div className='Full-course-text'>
                    <h2>Choose Your Path in Full Stack Web Development: Explore Our Specialized Courses</h2>
                    <h4>Tailor Your Learning Journey with Specialized Full Stack Web Development Courses</h4>
                </div>
                <Full_Stack_Card />
                <div className='Full-bottom'>
                    <h4> Choose the specialization that aligns with your goals and interests, and embark on a learning journey tailored to your needs. Explore our specialized Full Stack  Development courses and take the next step towards becoming a proficient
                        <span> Full Stack Developer.</span></h4>
                    <a> <EButton /></a>
                </div>
            </section>
            <hr />
            <div className='brand2'>
                <Brand />
                <CountUpSection text1={1184} text2={10} text3={853} text4={5} />
                <div className='language'>
                    <h2>Programming Languages & Tools</h2>
                    <Language />
                </div>
            </div>
            <hr />
            <section id='About-Program'>
                <div className='About-main' data-animate="abou-m">
                    <h2>About Our Full Stack Web Development Program</h2>
                </div>
                <h2>Front-end Development: Crafting Engaging User Interfaces</h2>
                <div className='About-content' data-animate="abo-c">
                    <div className='About-left'>
                        <img src={logo5} alt="Image" />
                    </div>
                    <div className='About-right' data-animate="abo-r">
                        <h2>Shape User Experiences with Modern Front-end Technologies</h2>
                        <h4>Dive into the world of front-end development and learn to create captivating user interfaces. Acquire proficiency in HTML, CSS, and JavaScript, along with popular frameworks such as React and Angular. Develop the skills to design and implement visually stunning and user-friendly websites that leave a lasting impression.</h4>
                    </div>
                </div>
                <h2>Back-end Development: Powering Web Applications with Efficiency</h2>
                <div className='About-content' data-animate="abo-c">
                    <div className='About-left'>
                        <img src={logo6} alt="Image" />
                    </div>
                    <div className='About-right' data-animate="abo-r">
                        <h2>Build Scalable and Secure Back-end Systems</h2>
                        <h4>Gain expertise in back-end development and learn to build robust server-side applications. Explore server-side programming languages like Node.js and frameworks like Express. Discover database management and integration, RESTful API development, and security best practices. Acquire the skills to create efficient and scalable back-end systems that support dynamic web applications.</h4>
                    </div>
                </div>
                <h2>Full Stack Integration: Seamlessly Connect the Pieces</h2>
                <div className='About-content' data-animate="abo-c">
                    <div className='About-left'>
                        <img src={logo7} alt="Image" />
                    </div>
                    <div className='About-right' data-animate="abo-r">
                        <h2>Master Full Stack Integration for Seamless Web Development</h2>
                        <h4>Learn to bridge the gap between front-end and back-end development with comprehensive full stack integration skills. Understand the concepts of client-server communication, data flow, and API integration. Get hands-on experience in integrating various technologies to create end-to-end web solutions. Develop the ability to work across the entire web development stack with confidence.</h4>
                    </div>
                </div>
                <div>
                    <a> <EButton /></a>
                </div>
            </section>
            <hr />
            <section id="Programm-overview">
                <div className='programm-text'>
                    <h2>Program Overview</h2>
                </div>
                <div class="program-container">
                    <div class="program-left">
                        <ul>
                            <List className="program-list" head="Comprehensive Curriculum" text=" Gain a deep understanding of front-end and back-end development, mastering HTML, CSS, JavaScript, React, Node.js, and more." />
                            <List className="program-list" head="Placement Support" text="Benefit from our dedicated placement services, leveraging industry connections and personalized career guidance." />
                            <List className="program-list" head="
                               Expert Instructors" text="Learn from experienced professionals who bring real-world insights and guide you throughout your learning journey." />
                            <List className="program-list" head="Practical Hands-on Learning" text=" Acquire practical experience through hands-on projects, building real-world web applications using cutting-edge technologies." />
                            <List className="program-list" head="Industry-Relevant Skills" text="Develop skills aligned with industry demands, including proficiency in modern front-end and back-end technologies." />
                            <List className="program-list" head="Responsive Web Design" text="Learn to create responsive and mobile-friendly websites, ensuring optimal user experiences across devices." />
                            <List className="program-list" head="Project Management" text="Develop project management skills, enabling you to effectively plan, organize, and deliver web development projects." />
                            <List className="program-list" head="Continuous Learning" text="Cultivate a mindset of continuous learning, staying updated with emerging trends and technologies in the ever-evolving field of web development." />
                            <List className="program-list" head="Communication and Presentation Skills" text="Enhance your communication and presentation skills, enabling you to articulate your ideas, projects, and technical concepts with confidence." />
                            <List className="program-list" head="Interview Preparation" text="Receive comprehensive interview preparation resources, including mock interviews, technical interview practice, and guidance on showcasing your skills and experience effectively to potential employers." />
                            <List className="program-list" head="Technical Interview Skills" text="Develop essential technical interview skills, such as problem-solving, algorithmic thinking, and whiteboarding, to excel in technical interviews." />
                            <List className="program-list" head="Resume and Portfolio Review" text=" Receive personalized feedback on your resume and portfolio, ensuring they effectively highlight your skills, experiences, and achievements." />
                        </ul>
                    </div>
                    <div class="program-right">
                        <img src={image2} alt="Image 1" />
                        <img src={image3} alt="Image 2" />
                        <div>
                            <a> <EButton /></a>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <section id="Syllabus-f">
                <div className='Syllabus-main'>
                    <div className='Syllabus-sub-h'>
                        <h2>Download Full Stack Web Development Syllabus Unveil Your Learning Journey</h2>
                        <p style={{ fontSize: '1.5em',textAlign:'left'}}>Get a comprehensive overview of our Full Stack Web Development program by downloading the detailed syllabus.</p>
                    </div>
                    <div className='Syllabus-sub'>
                        <a href='#'><Button text="Download The Syllabus" /></a>
                    </div>
                </div>
            </section>
            <hr />
            <section id="Syllabus-de">
                <div className='Syllabus-de-main'>
                    <div>
                        <h2>Syllabus</h2>
                        <p>Get a comprehensive overview of our Full Stack Web Development program by downloading the detailed syllabus.</p>
                    </div>
                    <div className="Syllabus-de-sub">
                        {sections.map((section, index) => (
                            <Accordion
                                key={index}
                                title={section.title}
                                content={section.content}
                                isOpen={openIndex === index}
                                onClick={() => toggleAccordion(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <hr />
            <section id="ImageCarousel">
                <hr />
                <h2>Destination Techs: Empowering Success through Upskilling</h2>
                <hr />
                <h1>Student Placements</h1>
                <ImageCarousel />
            </section >
            <hr />
            <section id="Full-Benefits">
                <div className="Full-Benefits-left">
                    <div>
                        <h1>Unlock the Benefits of Learning with Destination Technologies</h1>
                    </div>
                    <div className="Full-Benefits-left-list">
                        <ul>
                            <List className="Benefits-list" head="Strong Hand-Holding"
                                text=" Experience dedicated support and guidance throughout your learning journey. Our team is committed to providing you with the assistance you need to succeed in the program." />

                            <List className="Benefits-list" head="Learning Support"
                                text="Access comprehensive learning resources, including recorded lectures, live sessions, quizzes, assignments, and interactive learning materials. Stay engaged and make the most of your learning experience." />

                            <List className="Benefits-list" head="Career Assistance"
                                text="Benefit from our career assistance services, which include resume building, interview preparation, and job placement support. We strive to equip you with the skills and resources needed to excel in your career as a Full Stack Web Developer." />

                            <List className="Benefits-list" head="Job Opportunities"
                                text="Destination Technologies opens doors to a wide range of job opportunities in the field of Full Stack Web Development. Our program equips you with the skills and knowledge sought after by employers, empowering you to secure rewarding positions in the industry." />

                            <List className="Benefits-list" head="Networking"
                                text="Connect with a diverse community of learners, instructors, industry professionals, and alumni. Take advantage of networking opportunities, collaborate on projects, and build valuable connections that can accelerate your career growth in the field of Full Stack Web Development." />
                        </ul>
                    </div>
                </div>
                <div className="Full-Benefits-right">
                    <img src={image4} alt="Image 1" />
                    <a> <EButton /></a>
                </div>
            </section>
            <hr />
            <section id="Question">
                <div className='Question-main'>
                    <div>
                        <h2>Do you have any questions about our Full Stack Web Development program?</h2>
                    </div>
                    <div className="Question-sub">
                        {questions.map((section, index) => (
                            <Accordion
                                key={index}
                                title={section.title}
                                content={section.content}
                                isOpen={openIndex === index}
                                onClick={() => toggleAccordion(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
