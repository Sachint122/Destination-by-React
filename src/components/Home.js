import React from 'react'
import '../style/home.css';
// import '../style/CountUpSection.css';
import Brand from './Brand';
import CountUpSection from './CountUpSection';
import address from '../images/DESTINATION-1024x1001.png';
import '../style/address.css';
import { FaArrowRightLong } from "react-icons/fa6";
import Card from './Card';
import ImageCarousel from './ImageCarousel';
import { LiaIndustrySolid } from "react-icons/lia";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { FaFreeCodeCamp } from "react-icons/fa";
import { GiLifeSupport } from "react-icons/gi";
import '../style/why.css';

export default function Home() {
    return (
        <>
            <section>
                <div className='hero'>
                    <div className="hero-content">
                        <h6>Welcome to Destination Technologies</h6>
                        <p>One stop Solution for Consulting, Recruitment & Training</p>
                        <p style={{ fontSize: '1rem' }}>
                            With Destination Technologies as your trusted partner, you can unlock endless possibilities in your professional journey. Our aim is to empower individuals and organizations alike by bridging the gap between talent and opportunity. Experience our unparalleled services and witness the transformation firsthand.
                        </p>
                        <button onClick={() => alert('Explore Now!')}>Explore Now</button>
                    </div>

                    <div className="hero-image">
                        <div className="image-slider"></div>
                    </div>
                </div>
            </section>
            <div className='brand2'>
                <Brand />
                <CountUpSection />
            </div>
            {/* address */}
            <section
                className="address-top" >
                <div className="address-content">
                    <i> Our Localfoot prints------</i>
                    <h6>
                        Local Footprints that Transcend Boundaries: Nationwide Training & Recruiting Solutions</h6>
                    <p>At Destination Technologies, we believe in delivering exceptional services that transcend geographical boundaries. With our PAN India service delivery infrastructure, we have the capability to implement customized solutions across the length and breadth of the nation
                    </p>
                    <ul className='address-point'>
                        <li> <FaArrowRightLong />   Our local footprints extend to over 50+ locations through our extensive network of partners.</li>
                        <li> <FaArrowRightLong />   3 Physical Offices: Building Connections, Creating Impact</li>
                        <li> <FaArrowRightLong />   500+ Company-Owned Manpower: A Strong Team, A Solid Foundation</li>
                    </ul>
                    <button onClick={() => alert('Explore Now!')}>Learn more</button>
                </div>
                <div className="address">
                    <img src={address} />
                </div>
            </section>
            {/* Cards */}
            <section id='card'>
                <hr />
                <h2>Our Services</h2>
                <hr />
                <h1>Comprehensive Services to Fuel Your Success</h1>
                <Card />
            </section>
            <section id="ImageCarousel">
                <hr />
                <h2>Destination Techs: Empowering Success through Upskilling</h2>
                <hr />
                <h1>Student Placements</h1>
                <ImageCarousel />
            </section >
            {/* why chooses us */}
            <section id='why-chooses-us'>
                <div className='upper-why'>
                    <hr />
                    <h2>Destination Techs: Empowering Success through Upskilling</h2>
                    <hr />
                </div>
                <h1 className='why-content-head'>Student Placements</h1>
                <div className="main-why">
                    <div className="sub-why">
                        <span style={{ fontSize: '4.5em' }}><LiaIndustrySolid /></span>
                        <h1> Industry Expertise </h1>
                        <p>Benefit from our deep industry knowledge and expertise, ensuring you receive the most relevant and up-to-date training</p>
                    </div>
                    <div className="sub-why">
                        <span style={{ fontSize: '4.5em' }}><LiaLaptopCodeSolid /></span>
                        <h1> Diverse Training </h1>
                        <p>Gain comprehensive training through our carefully designed programs, covering a wide range of in-demand technologies</p>
                    </div>
                    <div className="sub-why">
                        <span style={{ fontSize: '4.5em' }}><FaFreeCodeCamp /></span>
                        <h1> Practical Approach </h1>
                        <p>Experience a hands-on, practical learning environment that focuses on real-world applications</p>
                    </div>
                    <div className="sub-why">
                        <span style={{ fontSize: '4.5em' }}><GiLifeSupport /></span>
                        <h1> Career Support </h1>
                        <p>Receive dedicated career support, including job placement assistance and guidance, helping you maximize your potential</p>
                    </div>
                </div>
            </section>
            {/* querry */}
            <section id="querry" className="querry-section">
                <div className="left-content">
                    <h2>Explore Our Services</h2>
                    <p>We provide top-notch services tailored to your needs. Explore the benefits and features we offer to make your experience extraordinary.</p>
                </div>
                <div className="right-content">
                    <h2>Join Us Today</h2>
                    <p>Ready to get started? Reach out and be a part of our growing community. We’re here to support you every step of the way.</p>
                    <a href="#contact" className="right-anchor">Contact Us</a>
                </div>
            </section>
        </>
    )
}
