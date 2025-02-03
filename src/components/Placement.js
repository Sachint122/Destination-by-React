import React from 'react'
import '../style/Placement.css'
import Head from './hooks/Head'
import imagehead from '../images/Destination-Technologies-Staff.png'
import imageleft from '../images/left.png'
import List from './hooks/List'
import Container from './hooks/Container'
import ImageCarousel from './hooks/ImageCarousel'
export default function Placement() {
    const features = [
        {
            heading: "1184 Successful Placements",
            content:
                "Our track record speaks for itself, with 1184 students placed in reputable organizations, setting them on the path to success.",
        },
        {
            heading: "Highest Salary Package of 10 LPA",
            content:
                "We take pride in facilitating lucrative opportunities, with our students securing the highest salary packages in their fields.",
        },
        {
            heading: "1073 Total Drives",
            content:
                "Through our strong industry connections, we organize a wide range of placement drives, providing ample opportunities for our students.",
        },
    ];
    return (
        <>
            <Head
                headers="Training & Education"
                text1="Home"
                text2="Placement"
                image={imagehead}
            />
            <hr />
            <section id="transferming">
                <div className='tra-main'>
                    <div className='tra-left'>
                        <div>
                            <h2>Transforming Careers: Empowering Success through Upskilling and Placements</h2>
                            <p>At Destination Technologies, we go beyond providing comprehensive upskilling programs. We are committed to supporting our students in securing rewarding job placements, ensuring a seamless transition into their desired careers.</p>
                            {features.map((feature) => (
                                <div className='tra-feature'>
                                    <List className="program-list" head={feature.heading} text={feature.content} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='tra-right'>
                        <img src={imageleft} alt="Image" />
                    </div>
                </div>
            </section>
            <hr />
            <section id="tra-some-data">
                <div className="tra-data-left">
                    <h1>Average Salary Package of 3 - 5 LPA: Our commitment to student success is further reflected in the average salary packages our graduates receive, ranging from 3 to 5 LPA. We strive to ensure that our students not only gain knowledge and skills but also secure rewarding positions that align with their aspirations.</h1>
                </div>
                <div className="tra-data-left">
                    <h1>At Destination Technologies, we prioritize your career growth. From upskilling to placement support, we provide comprehensive solutions that empower you to achieve your professional goals. Join us and experience the transformative journey towards a successful and fulfilling career.</h1>
                </div>
            </section>
            <hr />
            <section id="ImageCarousel">
                <hr />
                <h2>Destination Techs: Empowering Success through Upskilling</h2>
                <hr />
                <h1>Student Placements</h1>
                <ImageCarousel />
            </section >
            <hr />
            
        </>
    )
}
