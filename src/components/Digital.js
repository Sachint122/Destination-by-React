import React from 'react'
import '../style/Digital/Digital.css'
import EButton from './ExploreButton';
import image from '../images/other/Digital-Marketing-Course.png'
import logo1 from '../images/icon/SEO 1.png'
import logo2 from '../images/logo/Deadline 1.png';
import logo3 from '../images/logo/Certificate 2.png';
import logo4 from '../images/logo/IT Support.png';
import logo5 from '../images/icon/Web Development.png'
import logo6 from '../images/icon/Web Development (1).png'
import logo7 from '../images/icon/Wireframe.png'
import Digital_Card from './Digital_Card';
export default function Digital() {
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
                        <h6>Marketing Courses</h6>
                        <h1>Empower Your Career in Digital Marketing: Unlock Your Potential</h1>
                        <p>At Destination Technologies, our Digital Marketing program is designed to equip you with the skills and knowledge to excel in the field of digital marketing. With a comprehensive curriculum and hands-on training, we prepare you for a successful career by providing career-focused education and placement support. Join us on this transformative learning journey and unleash your potential in the dynamic world of digital marketing.</p>
                        <a> <EButton /></a>
                    </div>
                </div>
            </section>
            <hr />
            <section id='Course-details'>
                <div className='course-main'>
                    <div className='course-sub' >
                        <div>
                            <img src={logo1}></img>
                        </div>
                        <div>
                            <h2>Digital Marketing Course + Internship</h2>
                            <h4>15+ Modules</h4>
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
                            <h2>Get 6+ Certification</h2>
                            <h4>From Google & Destination Technology</h4>
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
                <div className='Full-course-text' style={{width:'80%',textAlign:'center'}}>
                    <h2>Each module provides in-depth knowledge and practical skills to equip you with the expertise needed to excel in the field of digital marketing.</h2>
                </div>
                <Digital_Card/>
                {/* <Full_Stack_Card /> */}
                <div className='Full-bottom'>
                    <h4> <span> & Much More...</span></h4>
                    <a style={{marginTop:'20px'}}> <EButton /></a>
                </div>
            </section>
            <hr />
        </>
    )
}
