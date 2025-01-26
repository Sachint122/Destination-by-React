import React from 'react'
import '../style/Full_stack.css';
import image from '../images/Destination-Technology-Group.png'
import logo1 from '../images/logo/download.png'
import logo2 from '../images/logo/Deadline 1.png';
import logo3 from '../images/logo/Certificate 2.png';
import logo4 from '../images/logo/IT Support.png';
import EButton from './ExploreButton';
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
            </section>
        </>
    )
}
