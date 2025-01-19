import React from 'react'
import '../style/home.css';
import Brand from './Brand';
import CountUpSection from './CountUpSection';
import address from '../images/DESTINATION-1024x1001.png';
import '../style/address.css';
import { FaArrowRightLong } from "react-icons/fa6";
import Card from './Card';

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
        </>
    )
}
