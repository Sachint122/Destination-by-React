import React from 'react'
import Head from './Head.js'
import imagehead from '../images/Destination-Technology-Group.png'
import image from '../images/WhatsApp-Image-2023-07-10-at-8.54.00-PM-4-1024x768.jpeg'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useScrollAnimation } from './hooks/Animation';
export default function About() {
    useScrollAnimation();
    return (
        <>
            <Head
                headers="About Destination Technologies"
                text1="Home"
                text2="About Us"
                image={imagehead}
            />
            <hr />
            <div className="content-section">
                <div className='right-side'>
                    <img src={image} alt="Image"/>
                </div>
                <div className="left-side"style={{ flex: 1, padding: '20px' }}>
                    <hr />
                    <h2>Destination Technologies </h2>
                    <hr style={{marginTop:'-10px'}}/>
                    <p data-animate='ani-p'>Welcome to Destination Technologies, your premier destination for cutting-edge software training and professional development. Our mission is to equip individuals with the latest technologies and skills demanded by the employment market. With a focus on staying current and offering top-notch training, we provide a platform for new students and professionals to thrive in the IT industry.</p>
                    <ul style={{ listStyle: 'none', paddingLeft: '0px' }}>
                        <li data-animate='ani-li'><IoIosCheckmarkCircle size={24} color='#00d4ff'/> Website Development</li>
                        <li data-animate='ani-li'><IoIosCheckmarkCircle size={24} color='#00d4ff'/> Training and Education</li>
                        <li data-animate='ani-li'><IoIosCheckmarkCircle size={24} color='#00d4ff'/> IT Staffing</li>
                    </ul>
                </div>
            </div>
            <hr />
            <section id='card1' data-animate="a-m">
                <div className="card1-main" data-animate="a-main">
                    <div className="card1-sub">
                        <span style={{ fontSize: '4.5em' }}></span>
                        <h1> Stay Ahead With Online Training </h1>
                        <p data-animate="ani-p">We understand the challenges of geographic dispersion, which is why we offer online training programs. Our comprehensive online courses ensure that regardless of your location, you can access high-quality instruction from seasoned software developers working for top organizations. Our online training breaks down barriers and gives you the flexibility to learn at your own pace, empowering you to stay ahead in today's competitive market</p>
                    </div>
                    <div className="card1-sub">
                        <span style={{ fontSize: '4.5em' }}></span>
                        <h1> Customized Corporate Training For Business Success</h1>
                        <p  data-animate="ani-p"> At Destination Technologies, we recognize that every organization has unique training needs. Our expertise lies in developing client-specific, specialized training programs tailored to your business objectives. Through our corporate training solutions, we enhance the skills and productivity of your workforce, driving your organization towards success. Partner with us to unlock the full potential of your team. </p>
                    </div>
                    <div className="card1-sub">
                        <span style={{ fontSize: '4.5em' }}></span>
                        <h1> IT Staffing: Connecting You With Top Talent For Business Success </h1>
                        <p  data-animate="ani-p">Our IT staffing services at Destination Technologies are designed to address your organization's talent needs and drive business success.
                        We understand that finding the right professionals with the right skills is crucial for your organization's growth and competitiveness. Partner with Destination Technologies for your IT staffing needs and let us connect you with top talent.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
