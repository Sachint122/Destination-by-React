// import { LiaIndustrySolid } from "react-icons/lia";
// import { LiaLaptopCodeSolid } from "react-icons/lia";
// import { FaFreeCodeCamp } from "react-icons/fa";
// import { GiLifeSupport } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";
import address from '../images/DESTINATION-1024x1001.png';
import Card from './hooks/Card';
import ImageCarousel from './hooks/ImageCarousel';
import CountUpSection from './hooks/CountUpSection';
import Brand from './hooks/Brand';
import EButton from './hooks/ExploreButton';
import Button from './hooks/ModernButton';
import { useScrollAnimation } from './hooks/Animation';
import bg1 from '../images/background (1).png';
import bg2 from '../images/background (2).png';
import bg3 from '../images/background (3).png';
import bg4 from '../images/background (4).png';
export default function Home() {
    useScrollAnimation();
    const featureData = [
        {
            title: "Industry Expertise",
            description:
                "Benefit from our deep industry knowledge and expertise, ensuring you receive the most relevant and up-to-date training.",
            image: require("../images/background (1).png"),
        },
        {
            title: "Practical Approach",
            description:
                "Experience a hands-on, practical learning environment that focuses on real-world applications.",
            image: bg2,
        },
        {
            title: "Diverse Training",
            description:
                "Gain comprehensive training through our carefully designed programs, covering a wide range of in-demand technologies.",
            image: bg3,
        },
        {
            title: "Career Support",
            description:
                "Receive dedicated career support, including job placement assistance and guidance, helping you maximize your potential.",
            image: bg4,
        },
    ];
    return (
        <>
            <section>
                <div className='hero background-7 text-gray'>
                    <div className="hero-content">
                        <h6>Welcome to Destination Technologies</h6>
                        <p>One stop Solution for Consulting, Recruitment & Training</p>
                        <p style={{ fontSize: '1.2rem' }}>
                            With Destination Technologies as your trusted partner, you can unlock endless possibilities in your professional journey. Our aim is to empower individuals and organizations alike by bridging the gap between talent and opportunity. Experience our unparalleled services and witness the transformation firsthand.
                        </p>
                        <div style={{ display: 'flex', width: '400px' }}>
                            <Button text="Our Courses" color="white" height="50px" text_color="white" />
                            {/* shift to course */}
                            <Button text="Know More" color="white" height="50px" text_color="white" />
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
                <CountUpSection text1={3500} text2={27} text3={1285} text4={4} />
            </div>
            <hr />
            {/* address */}
            <section
                className="address-top">
                <div className="address-content" data-animate="address-animation">
                    <i> Our Localfoot prints------</i>
                    <h6 data-animate="address-heading" style={{ color: '#F26B23' }}>
                        Local Footprints that Transcend Boundaries: Nationwide Training & Recruiting Solutions</h6>
                    <p data-animate="address-p">At Destination Technologies, we believe in delivering exceptional services that transcend geographical boundaries. With our PAN India service delivery infrastructure, we have the capability to implement customized solutions across the length and breadth of the nation
                    </p>
                    <ul className='address-point'>
                        <li data-animate="address-li"> <FaArrowRightLong />   Our local footprints extend to over 50+ locations through our extensive network of partners.</li>
                        <li data-animate="address-li"> <FaArrowRightLong />   3 Physical Offices: Building Connections, Creating Impact</li>
                        <li data-animate="address-li"> <FaArrowRightLong />   500+ Company-Owned Manpower: A Strong Team, A Solid Foundation</li>
                    </ul>
                    <EButton />
                </div>
                <div className="address">
                    <img data-animate="address-zoomin" src={address} alt='' />
                </div>
            </section>
            <hr />
            {/* Services */}
            <section id='card'>
                <hr />
                <h2 style={{ color: '#E41F3A' }}>Our Services </h2>
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
                <div className="head-section">
                    <div className="head-left">
                        <div className="background-overlay-head"></div>
                        <h3 className="feature-subtitle">Why Choose Us</h3>
                    </div>
                    <h1 className="feature-title">
                        Empowering Your Success in the{" "}
                        <span className="feature-highlight">Digital World</span>
                    </h1>
                </div>
                <div className="feature-card-container">
                    <div className="feature-container">
                        <div className="outer-div Oangle"></div>
                        <div className="feature-card">
                            <div className="background-image-card url1 " ></div>
                            <div className="Ttext-overlay">
                                <h2 className="feature-card-title"> Industry Expertise</h2>
                                <p className="feature-card-description" >
                                    Benefit from our deep industry knowledge and expertise, ensuring you receive the most relevant and up-to-date training.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="feature-container">
                        <div className="outer-div Oangle"></div>
                        <div className="feature-card">
                            <div className="background-image-card url2 " ></div>
                            <div className="Ttext-overlay">
                                <h2 className="feature-card-title"> Industry Expertise</h2>
                                <p className="feature-card-description" >
                                    Benefit from our deep industry knowledge and expertise, ensuring you receive the most relevant and up-to-date training.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feature-card-container" style={{ marginLeft: '335px' }}>
                    <div className="feature-container">
                        <div className="outer-div OOangle"></div>
                        <div className="feature-card" style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                            <div className="background-image-card url3 " ></div>
                            <div className="Btext-overlay">
                                <h2 className="feature-card-title"  style={{ textAlign: 'right' }}> Industry Expertise</h2>
                                <p className="feature-card-description"  style={{ textAlign: 'right' }}>
                                    Benefit from our deep industry knowledge and expertise, ensuring you receive the most relevant and up-to-date training.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="feature-container">
                        <div className="outer-div OOangle"></div>
                        <div className="feature-card" style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                            <div className="background-image-card url4 " ></div>
                            <div className="Btext-overlay" >
                                <h2 className="feature-card-title"  style={{ textAlign: 'right' }}> Industry Expertise</h2>
                                <p className="feature-card-description"  style={{ textAlign: 'right' }}>
                                    Benefit from our deep industry knowledge and expertise, ensuring you receive the most relevant and up-to-date training.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
