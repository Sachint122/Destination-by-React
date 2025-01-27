import React from 'react'
import '../style/Full_stack.css';
import image from '../images/Destination-Technology-Group.png'
import logo1 from '../images/logo/download.png'
import logo2 from '../images/logo/Deadline 1.png';
import logo3 from '../images/logo/Certificate 2.png';
import logo4 from '../images/logo/IT Support.png';
import logo5 from '../images/icon/Web Development.png'
import logo6 from '../images/icon/Web Development (1).png'
import logo7 from '../images/icon/Wireframe.png'
import image2 from '../images/Courses.png';
import image3 from '../images/Destination-Technologies-Staff.png'
import EButton from './ExploreButton';
import Brand from './Brand';
import CountUpSection from './CountUpSection';
import Language from './Language';
import List from './List';
export default function Full_stack() {
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
                <div className='About-main'>
                    <h2>About Our Full Stack Web Development Program</h2>
                </div>
                <h2>About Our Full Stack Web Development Program</h2>
                <div className='About-content'>
                    <div className='About-left'>
                        <img src={logo5} alt="Image" />
                    </div>
                    <div className='About-right'>
                        <h2>Shape User Experiences with Modern Front-end Technologies</h2>
                        <h4>Dive into the world of front-end development and learn to create captivating user interfaces. Acquire proficiency in HTML, CSS, and JavaScript, along with popular frameworks such as React and Angular. Develop the skills to design and implement visually stunning and user-friendly websites that leave a lasting impression.</h4>
                    </div>
                </div>
                <h2>About Our Full Stack Web Development Program</h2>
                <div className='About-content'>
                    <div className='About-left'>
                        <img src={logo6} alt="Image" />
                    </div>
                    <div className='About-right'>
                        <h2>Shape User Experiences with Modern Front-end Technologies</h2>
                        <h4>Dive into the world of front-end development and learn to create captivating user interfaces. Acquire proficiency in HTML, CSS, and JavaScript, along with popular frameworks such as React and Angular. Develop the skills to design and implement visually stunning and user-friendly websites that leave a lasting impression.</h4>
                    </div>
                </div>
                <h2>About Our Full Stack Web Development Program</h2>
                <div className='About-content'>
                    <div className='About-left'>
                        <img src={logo7} alt="Image" />
                    </div>
                    <div className='About-right'>
                        <h2>Shape User Experiences with Modern Front-end Technologies</h2>
                        <h4>Dive into the world of front-end development and learn to create captivating user interfaces. Acquire proficiency in HTML, CSS, and JavaScript, along with popular frameworks such as React and Angular. Develop the skills to design and implement visually stunning and user-friendly websites that leave a lasting impression.</h4>
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

        </>
    )
}
