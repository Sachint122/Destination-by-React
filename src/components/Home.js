import React from 'react'
import '../style/home.css';
import Brand from './Brand';
export default function Home() {
    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <h6>
                        Welcome to Destination Technologies</h6>
                    <p>One stop Solution for Consulting, Recruitment & Training
                    </p>
                    <p style={{fontSize:'1rem'}}>With Destination Technologies as your trusted partner, you can unlock endless possibilities in your professional journey. Our aim is to empower individuals and organizations alike by bridging the gap between talent and opportunity. Experience our unparalleled services and witness the transformation firsthand.</p>
                    <button onClick={() => alert('Explore Now!')}>Explore Now</button>
                </div>
                <div className="hero-image">
                    <div className="image-slider"></div>
                </div>
            </section>
            <Brand/>
        </>
    )
}
