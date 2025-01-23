import { LiaIndustrySolid } from "react-icons/lia";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { FaFreeCodeCamp } from "react-icons/fa";
import { GiLifeSupport } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";
import address from '../images/DESTINATION-1024x1001.png';
import { useScrollAnimation } from './hooks/Animation';
import Card from './Card';
import ImageCarousel from './ImageCarousel';
import CountUpSection from './CountUpSection';
import Brand from './Brand';
import EButton from './ExploreButton';
import Button from './ModernButton';
import Footer from './Footer';
export default function Home() {
    useScrollAnimation();
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
                        <div style={{ display: 'flex' }}>
                            <Button text="Our Courses" />
                            {/* shift to course */}
                            <Button text="Know More" />
                            {/* shift ton about us */}
                        </div>
                    </div>

                    <div className="hero-image">
                        <div className="image-slider"></div>
                    </div>
                </div>
            </section>
            <hr />
            <div className='brand2'>
                <Brand />
                <CountUpSection />
            </div>
            <hr />
            {/* address */}
            <section
                className="address-top" >
                <div className="address-content" data-animate="address-animation">
                    <i> Our Localfoot prints------</i>
                    <h6 data-animate="address-heading">
                        Local Footprints that Transcend Boundaries: Nationwide Training & Recruiting Solutions</h6>
                    <p data-animate="address-p">At Destination Technologies, we believe in delivering exceptional services that transcend geographical boundaries. With our PAN India service delivery infrastructure, we have the capability to implement customized solutions across the length and breadth of the nation
                    </p>
                    <ul className='address-point'>
                        <li data-animate="address-li"> <FaArrowRightLong />   Our local footprints extend to over 50+ locations through our extensive network of partners.</li>
                        <li data-animate="address-li"> <FaArrowRightLong />   3 Physical Offices: Building Connections, Creating Impact</li>
                        <li data-animate="address-li"> <FaArrowRightLong />   500+ Company-Owned Manpower: A Strong Team, A Solid Foundation</li>
                    </ul>
                    {/* <button onClick={() => alert('Explore Now!')}>Learn more</button> */}
                    <EButton text="Explore Now" />
                </div>
                <div className="address">
                    <img data-animate="address-zoomin" src={address} alt='' />
                </div>
            </section>
            <hr />
            {/* Services */}
            <section id='card'>
                <hr />
                <h2>Our Services</h2>
                <hr />
                <h1>Comprehensive Services to Fuel Your Success</h1>
                <Card />
            </section>
            <hr />
            {/* placement */}
            <section id="ImageCarousel">
                <hr />
                <h2>Destination Techs: Empowering Success through Upskilling</h2>
                <hr />
                <h1>Student Placements</h1>
                <ImageCarousel />
            </section >
            <hr />
            {/* why chooses us */}
            <section id='why-chooses-us' data-animate="a-m">
                <div className='upper-why'>
                    <hr />
                    <h2>Why Chooses Us</h2>
                    <hr />
                </div>
                <h1 className='why-content-head' data-animate="ani-head">Empowering Your Success in the Digital World</h1>
                <div className="main-why" data-animate="a-main">
                    <div className="sub-why">
                        <span style={{ fontSize: '4.5em' }}><LiaIndustrySolid /></span>
                        <h1> Industry Expertise </h1>
                        <p data-animate="ani-p">Benefit from our deep industry knowledge and expertise, ensuring you receive the most relevant and up-to-date training</p>
                    </div>
                    <div className="sub-why">
                        <span style={{ fontSize: '4.5em' }}><LiaLaptopCodeSolid /></span>
                        <h1> Diverse Training </h1>
                        <p data-animate="ani-p">Gain comprehensive training through our carefully designed programs, covering a wide range of in-demand technologies</p>
                    </div>
                    <div className="sub-why">
                        <span style={{ fontSize: '4.5em' }}><FaFreeCodeCamp /></span>
                        <h1> Practical Approach </h1>
                        <p data-animate="ani-p">Experience a hands-on, practical learning environment that focuses on real-world applications</p>
                    </div>
                    <div className="sub-why">
                        <span style={{ fontSize: '4.5em' }}><GiLifeSupport /></span>
                        <h1> Career Support </h1>
                        <p data-animate="ani-p">Receive dedicated career support, including job placement assistance and guidance, helping you maximize your potential</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
