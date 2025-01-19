import React from 'react'
import '../style/home.css';
import Brand from './Brand';
import CountUpSection from './CountUpSection';
import address from '../images/DESTINATION-1024x1001.png';
import '../style/address.css';
import { FaArrowRightLong } from "react-icons/fa6";
export default function Home() {
    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <h6>
                        Welcome to Destination Technologies</h6>
                    <p>One stop Solution for Consulting, Recruitment & Training
                    </p>
                    <p style={{ fontSize: '1rem' }}>With Destination Technologies as your trusted partner, you can unlock endless possibilities in your professional journey. Our aim is to empower individuals and organizations alike by bridging the gap between talent and opportunity. Experience our unparalleled services and witness the transformation firsthand.</p>
                    <button onClick={() => alert('Explore Now!')}>Explore Now</button>
                </div>
                <div className="hero-image">
                    <div className="image-slider"></div>
                </div>
            </section>
            <Brand />
            <CountUpSection />
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
            {/* <svg viewBox="0 0 1440 80" className="wave-svg">
                <path fill="#00b4d8" d="M0,60 C360,120 720,0 1080,60 C1440,120 1800,0 2160,60 L2160,80 L0,80 Z"></path>
            </svg> */}
            <svg viewBox="0 0 1440 80" className="wave-svg">
                <path fill="#00b4d8" d="
      M0,40 
      C120,70 240,10 360,40 
      C480,70 600,10 720,40 
      C840,70 960,10 1080,40 
      C1200,70 1320,10 1440,40 
      L1440,80 L0,80 Z">
                </path>
            </svg>
        </>
    )
}
