import React from 'react'
import Head from './Head.js'
import imagehead from '../images/Destination-Technology-Group.png'
import image from '../images/WhatsApp-Image-2023-07-10-at-8.54.00-PM-4-1024x768.jpeg'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useScrollAnimation } from './hooks/Animation';
import icon1 from '../images/icon/online-learning-2.png'
import icon2 from '../images/icon/recruitment.png'
import icon3 from '../images/icon/training-1.png'
import icon5 from '../images/icon/target-4.png'
import icon4 from '../images/icon/opportunity.png'
import image2 from '../images/Destination-Technologies-Staff.png'
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
                    <img src={image} alt="Image" />
                </div>
                <div className="left-side" style={{ flex: 1, padding: '20px' }}>
                    <hr />
                    <h2>Destination Technologies </h2>
                    <hr style={{ marginTop: '-10px' }} />
                    <p data-animate='ani-p'>Welcome to Destination Technologies, your premier destination for cutting-edge software training and professional development. Our mission is to equip individuals with the latest technologies and skills demanded by the employment market. With a focus on staying current and offering top-notch training, we provide a platform for new students and professionals to thrive in the IT industry.</p>
                    <ul style={{ listStyle: 'none', paddingLeft: '0px' }}>
                        <li data-animate='ani-li'><IoIosCheckmarkCircle size={24} color='#00d4ff' /> Website Development</li>
                        <li data-animate='ani-li'><IoIosCheckmarkCircle size={24} color='#00d4ff' /> Training and Education</li>
                        <li data-animate='ani-li'><IoIosCheckmarkCircle size={24} color='#00d4ff' /> IT Staffing</li>
                    </ul>
                </div>
            </div>
            <hr />
            <section id='card1' data-animate="a-m">
                <div className="card1-main" data-animate="a-main">
                    <div className="card1-sub">
                        <img src={icon1} alt="" />
                        <span style={{ fontSize: '4.5em' }}></span>
                        <h1> Stay Ahead With Online Training </h1>
                        <p data-animate="ani-p">We understand the challenges of geographic dispersion, which is why we offer online training programs. Our comprehensive online courses ensure that regardless of your location, you can access high-quality instruction from seasoned software developers working for top organizations. Our online training breaks down barriers and gives you the flexibility to learn at your own pace, empowering you to stay ahead in today's competitive market</p>
                    </div>
                    <div className="card1-sub">
                        <img src={icon3} alt="" />
                        <span style={{ fontSize: '4.5em' }}></span>
                        <h1> Customized Corporate Training For Business Success</h1>
                        <p data-animate="ani-p"> At Destination Technologies, we recognize that every organization has unique training needs. Our expertise lies in developing client-specific, specialized training programs tailored to your business objectives. Through our corporate training solutions, we enhance the skills and productivity of your workforce, driving your organization towards success. Partner with us to unlock the full potential of your team. </p>
                    </div>
                    <div className="card1-sub">
                        <img src={icon2} alt="" />
                        <span style={{ fontSize: '4.5em' }}></span>
                        <h1> IT Staffing: Connecting You With Top Talent For Business Success </h1>
                        <p data-animate="ani-p">Our IT staffing services at Destination Technologies are designed to address your organization's talent needs and drive business success.
                            We understand that finding the right professionals with the right skills is crucial for your organization's growth and competitiveness. Partner with Destination Technologies for your IT staffing needs and let us connect you with top talent.</p>
                    </div>
                </div>
            </section>
            <hr />
            <section>
                <div className="mission" style={{ position: 'relative', overflow: 'hidden' }}>
                    <div
                        className="background-overlay"
                        style={{
                            backgroundImage: `url(${image2})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'brightness(10%)', // Adjusts visibility
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: -1
                        }}
                    ></div>
                    <div class="vission">
                        <div class="vission-content">
                            <div>
                                <img src={icon4} alt="Logo" class="logo" />
                            </div>
                            <div>
                                <h2 class="vission-heading">Vision</h2>
                                <p class="vission-p">
                                    Our vision at Destination Technologies is to be the leading provider of comprehensive software training and professional development solutions, empowering individuals to excel in the ever-evolving IT industry. We strive to bridge the gap between talent and opportunity, equipping our clients with the skills and expertise needed to thrive in the digital world.
                                </p>
                            </div>
                        </div>
                        <div class="vission-content">
                            <div>
                                <img src={icon5} alt="Logo" class="logo" />
                            </div>
                            <div>
                                <h2 class="vission-heading">Mission</h2>
                                <p class="vission-p">
                                    Our mission is to offer cutting-edge software training using the newest technologies, ensuring that our clients stay current with the employment market. We are dedicated to providing a wide range of services, including online training, corporate training, and classroom training, tailored to the specific needs of our diverse client base. We aim to foster a culture of continuous learning, enabling individuals and organizations to unlock their full potential and achieve their goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <section>
                <div class="team">
                    <div>
                        {/* <hr /> */}
                        <h4>Brains behind Destination Technologies</h4>
                        {/* <hr /> */}
                    </div>
                    <h2>Leadership Team</h2>
                </div>
                <div class="unique-container">
                    <div class="left-content">
                        <h2>Mr. Subramanya Raj</h2>
                        <p>Designation</p>
                        <img src="" alt="Placeholder Image" />
                    </div>
                    <div class="right-content">
                        <h2>Mr. Subramanya Raj: Experienced Leader and Academic Voice</h2>
                        <p>
                            Mr. Subramanya Raj brings over 5+ years of industry experience, leading engineering teams for Mresult Services Pvt Ltd. With an additional 9+ years of teaching experience, he has become a prominent academic voice in the field of software engineering..
                        </p>
                        <p>
                            Starting his career as a Technical Lead, Mr. Raj realized the importance of team influence and achieving results through others. Driven by his passion for teaching, he transitioned to become a leading academic voice, spending over ten and a half years training students in various software engineering disciplines.
                        </p>
                        <p>
                            With extensive experience training over 12,000+ students, Mr. Raj has also contributed significantly to the editorial process, including copy editing, proofreading, content entry, and quality assurance. He is well-versed in Java, SQL, Data Structures, Manual Testing, Automation Testing (Selenium), HTML, CSS, and Software Engineering.
                        </p>
                        <p>
                            Mr. Raj's relentless pursuit of knowledge and desire to learn from new experiences have played a key role in his career success. He remains a responsible, collaborative, and results-driven leader, continually striving for excellence.
                        </p>
                        <p>
                            Despite his accomplishments, Mr. Subramanya Raj maintains a humble approach, emphasizing the importance of perspective and vision. His warmth and passion make him an invaluable resource and a driving force within the company and among his peers.
                        </p>
                        <p></p>
                    </div>
                </div>
                <div class="unique-container">
                    <div class="left-content">
                        <h2>Mr. Sreedhar Kommuru</h2>
                        <p>Designation</p>
                        <img src="" alt="Placeholder Image" />
                    </div>
                    <div class="right-content">
                        <h2>Mr. Sreedhar Kommuru: Leading Educationist and Dedicated Mentor</h2>
                        <p>
                            Mr. Sreedhar Kommuru is a renowned educationist in the competitive world, with a professional journey that began as a Lecturer of Economics in Gannavaram in 1991. After a brief stint at A.N.R. College, Gudivada, he chose to follow his true passion for teaching and pursued a career as an LIC Development Officer. However, driven by his deep commitment to his profession, he resigned and established Sreedhar's CCE.

                        </p>
                        <p>
                            With a focus on guiding aspirants, especially from rural areas, Mr. Sreedhar Kommuru has helped over 400,000 students excel in competitive exams such as IBPS, LIC, SSC, RRB, with approximately 150,000 students securing positions in various government and private organizations. Additionally, he conducts educational seminars to empower rural students to thrive in the competitive world.
                        </p>
                        <p>
                            Mr. Sreedhar Kommuru's dedication as a mentor and his unwavering commitment to education have made a significant impact on countless individuals, providing them with the guidance and support they need to achieve their goals.
                        </p>
                    </div>
                </div>
                <div class="unique-container">
                    <div class="left-content">
                        <h2>Mr. Sudheer Chakravarthy</h2>
                        <p>Designation</p>
                        <img src="" alt="Placeholder Image" />
                    </div>
                    <div class="right-content">
                        <h2>Mr. Sudheer Chakravarthy Chaganti: Passionate Educator and Tech Expert</h2>
                        <p>
                            Mr. Sudheer Chakravarthy Chaganti, an alumnus of the National Institute of Technology Warangal, discovered his passion for teaching in 2005 while working as a part-time faculty. After completing his post-graduation in 2008, he joined IVY Comptech Pvt Ltd as a Software Engineer but continued to pursue his teaching endeavors.
                        </p>
                        <p>
                            In 2008, Mr. Chaganti founded Sreedhar's CCE in Hyderabad, juggling his software job alongside managing the institution. In 2012, fueled by his strong interest in teaching, he took a leap of faith and resigned from his software job to become a full-time teacher. Mr. Chaganti firmly believes in the transformative power of education, particularly for students from rural backgrounds, and aims to help them achieve their dreams.

                        </p>
                        <p>
                            With branches in Hyderabad, VIZAG, and Kurnool, Mr. Chaganti has expanded his reach to empower more students. He specializes in teaching Quantitative Aptitude, using real-life examples to simplify solutions for students. His strong technical knowledge allows him to effectively integrate technology into the field of education.
                        </p>
                        <p>
                            Mr. Chaganti is recognized as an official knowledge partner for renowned platforms such as EENADU News paper, EENADU Pratibha pages, and ETV2 Lakshyam program. Alongside his teaching expertise, he excels in crisis management and optimizing human resources. Notably, he teaches Quantitative Aptitude without relying on formulas, showcasing his innovative approach to education.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
