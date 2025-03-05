import React from 'react'
import { useModal } from './hooks/FormOpenClose';
import Form from './hooks/Form';
import EButton from './hooks/ExploreButton';
import destinationLogo from '../images/logo/destination-log.png';
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import { FaFacebook, FaCircleArrowRight } from "react-icons/fa6";
import { TiSocialYoutubeCircular, TiSocialLinkedinCircular, TiSocialInstagramCircular } from "react-icons/ti";
import { ImMail4 } from "react-icons/im";
import { useScrollAnimation } from './hooks/Animation';
export default function Footer() {
    useScrollAnimation();
    const { isModalOpen, openModal } = useModal();
    return (
        <>
            {/* querry */}
            <hr />
            <section id="querry">
                <div className="querry-section">
                    <div className="left-content" data-animate="ani-left">
                        <h3>Explore Our Services</h3>
                        <p>We provide top-notch services tailored to your needs. Explore the benefits and features we offer to make your experience extraordinary.</p>
                    </div>
                    <div className="right-content" data-animate="ani-right">
                        <h3>Join Us Today</h3>
                        <p>Ready to get started? Reach out and be a part of our growing community. We’re here to support you every step of the way.</p>
                        <div className='right-button'>
                            <EButton openModel={openModal}>Open from</EButton>
                        </div>
                    </div>
                </div>
                <hr  className='Bar-line'/>
            </section>
            {/* <hr /> */}
            <Form open={isModalOpen} />
            <footer>
                <div className="row">
                    <div className="col">
                        <img src={destinationLogo} className="logo" alt="" />
                        <p>Innovation begins here. At Destination Technology, we turn ideas into solutions.Your gateway to future-ready technology. Let's build the impossible together.</p>
                        <p className="copyright">&copy;JARVISHIGHTECH. All rights reserved.</p>
                    </div>
                    <div className="col">
                        <h3>LOCATION  <div className="underline"> <span></span></div>
                            <FaMagnifyingGlassLocation color='#ffc400f' />
                        </h3>
                        <p>
                            #951, 16th Main, BTM 2nd Stage,</p>
                        <p>Bengaluru, Karnataka - 560076.</p>
                        <p className="email-id"> sachintiwari.751858@gmail.com</p>
                        <h4>+91 9888738888</h4>
                        <h4>+91 9036879152</h4>

                    </div>
                    <div className="col">
                        <div>
                            <h3> lINK<div className="underline"> <span></span></div></h3>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">service</a>
                                </li>
                                <li>
                                    <a href="#">featue</a>
                                </li>
                                <li>
                                    <a href="#">contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <h3>SUBSCRIBE TO NEWS LETTER <div className="underline"> <span></span></div>
                        </h3>
                        <form className='footer-form'>
                            <ImMail4 size={42} color='#F26936' />
                            <input type="email" placeholder="Enter your Email" required />
                            <button type="submit"><FaCircleArrowRight size={35} color='#F26936' /></button>
                        </form>
                        <div className="socail">
                            <a href="#"><FaFacebook size={42} color='#F26936' /></a>
                            <a href="#"><TiSocialYoutubeCircular size={60} color='#F26936' /></a>
                            <a href="#"> < TiSocialInstagramCircular size={60} color='#F26936' /></a>
                            <a href="#">< TiSocialLinkedinCircular size={60} color='#F26936' /></a>
                        </div>
                    </div>
                </div>
            </footer >
        </>
    )
}
