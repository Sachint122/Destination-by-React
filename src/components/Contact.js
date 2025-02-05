import React from 'react'
import '../style/Contact.css'
import icon from '../images/icon/Location Icons.png'
import Head from './hooks/Head'
import imagehead from '../images/ithead.png'
export default function Contact() {
    return (
        <>
             <Head
                headers="Contact Us"
                text1="Home"
                text2="ContactUs"
                image={imagehead}
            />
            <hr />
            <section id="con-contact">
                <div className="con-contact-wrapper">
                    <div className="con-contact-info">
                        <h2>Let's Connect</h2>
                        <p>We are always here to assist you. Whether you have a question, need support, or just want to say hello, feel free to reach out! Your journey with us matters.</p>
                    </div>
                    <div className="con-contact-container">
                        <h2>Contact Us</h2>
                        <form>
                            <div className="con-form-group">
                                <input type="text" id="name" required placeholder=" " />
                                <label for="name">Full Name</label>
                            </div>
                            <div className="con-form-group">
                                <input type="email" id="email" required placeholder=" " />
                                <label for="email">Email</label>
                            </div>
                            <div className="con-form-group">
                                <textarea id="message" rows="4" required placeholder=" "></textarea>
                                <label for="message">Your Message</label>
                            </div>
                            <button type="submit" className="con-submit-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
            <div className="con-social">
                <div class="con-container">
                    <div class="con-sub-container">
                        <div className='con-sub-img'>
                            <img src={icon} alt="Icon 1" />
                        </div>
                        <div class="col">
                            <p>#951, 16th Main, BTM 2nd Stage, Bengaluru,</p>
                            <p>Karnataka - 560076</p>
                            <p className="email-id"> sachintiwari.751858@gmail.com</p>
                            <h4>+91 9888738888</h4>
                        </div>
                    </div>

                    <div class="con-sub-container">
                        <div className='con-sub-img'>
                        <img src={icon} alt="Icon 1" />
                        </div>
                        <div class="col">
                            <p>Kothwal Madhava Reddy Plaza, Beside Indian Oil Petrol Bunk, JNTUH Metro Station,</p>
                            <p>Nizampet X Roads, Hyderabad - 500072</p>
                            <p className="email-id"> sachintiwari.751858@gmail.com</p>
                            <h4>+91 9888758888</h4>
                        </div>
                    </div>

                    <div class="con-sub-container">
                        <div className='con-sub-img'>
                        <img src={icon} alt="Icon 1" />
                        </div>
                        <div class="col">
                            <p>40-5-19/16, Prasad Naidu Complex, P.B.Siddhartha Busstop, Moghalrajpuram,</p>
                            <p>Vijayawada, Andhra Pradesh 520010</p>
                            <p className="email-id"> sachintiwari.751858@gmail.com</p>
                            <h4>+91 9888748888</h4>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
