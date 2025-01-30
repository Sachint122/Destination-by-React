import React from 'react'
import '../style/Home/card.css';
import card1 from '../images/card/card (1).svg';
import card2 from '../images/card/card (2).svg';
import card3 from '../images/card/card (3).svg';
import Button from './ModernButton';
export default function Card() {
  return (
    <div className="card-section">
      <div className="card">
        <img src={card1} alt="Card 1" />
        <h2>Training & Education: Empowering You for the Future</h2>
        <p>Full Stack Web Development: Master the art of dynamic web app creation. Gain proficiency in front-end and back-end technologies to become a sought-after full stack developer.</p>
        {/* <button>Learn More</button> */}
        <div className='cardb'>
          <Button text="Learn More" />
        </div>
      </div>

      <div className="card">
        <img src={card2} alt="Card 2" />
        <h2>Web Development: Crafting Engaging and User-Centric Websites
        </h2>
        <p>UI/UX Websites: Our expert team of designers and developers creates visually stunning and user-friendly websites that leave a lasting impression. We prioritize user experience and ensure seamless navigation, captivating visuals, and intuitive interfaces.</p>
        <div className='cardb'>
          <Button text="Learn More" />
        </div>
      </div>

      <div className="card">
        <img src={card3} alt="Card 3" />
        <h2>IT Staffing: Unlocking Top Talent for Your Organization</h2>
        <p>Finding the right talent is crucial for the success of any organization. With our IT staffing services, we help you identify and recruit skilled professionals who align with your specific requirements. Our extensive network and rigorous screening process ensure you have access to the best-fit candidates.</p>
        <div className='cardb'>
          <Button text="Learn More" />
        </div>
      </div>
    </div>
  )
}