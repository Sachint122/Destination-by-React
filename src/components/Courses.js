import React from 'react'
import imagehead from '../images/Our-Courses.png';
import image1 from '../images/Courses.png';
import image2 from '../images/other/Career.png'
import full_Stack from '../images/other/Full-stack-course.png'
import digital from '../images/other/Digital-Marketing-Course.png'
import logo1 from '../images/logo/01_Home_01-1.png'
import logo2 from '../images/logo/01_Home_01-2.png'
import logo3 from '../images/logo/01_Home_01-3.png'
import '../style/courses/courses.css';
import Head from './hooks/Head'
import EButton from './hooks/ExploreButton';
import Button from './hooks/ModernButton'
import CountUpSection from './hooks/CountUpSection';
import Brand from './hooks/Brand';
import ImageCarousel from './hooks/ImageCarousel';
import { IoMdArrowDropright } from "react-icons/io";
import { useScrollAnimation } from './hooks/Animation';
export default function Courses() {
  useScrollAnimation();
  return (
    <>
      <Head
        headers="Destination Technlogies Courses"
        text1="Home"
        text2="List Of Courses"
        text3='Description Of Course'
        image={imagehead}
        pos="center"
      />
      <hr />
      <section id="course">
        <div>
          <hr />
          <h2>Our Courses</h2>
          <hr />
        </div>
        <div class="course-content">
          <div class="course-text" data-animate="cou-text">
            <h6>Empowering You for Success</h6>
            <p>
              At Destination Technologies, we are committed to providing unparalleled software training and professional development opportunities. Through our vision and mission, we strive to empower individuals and organizations, bridging the gap between talent and opportunity in the dynamic IT industry. Choose us as your trusted partner on your journey to success.
            </p>
            <div class="couses-a">
              <a href="#" >
                <EButton />
              </a>
            </div>
          </div>
          <div class="course-image" data-animate="cou-image">
            <img src={image1} alt="Placeholder Image" />
          </div>
        </div>
      </section>
      <hr />
      <section id='offers' style={{height:'180vh'}}>
        <div className='offers-text' data-animate="of-te">
          <hr />
          <h2>Our Course Offerings</h2>
          <hr />
          <h3>Shape Your Future: Propel Your Career with our Job-Focused Courses</h3>
        </div>
        <div class="course-offerings"  data-animate="cour-off">
          <div class="offering" style={{height:'95%'}} data-animate="offering">
            <img src={full_Stack} alt='image' />
            <h4>Full Stack Web Development (Java & Python): Empower Your Journey to a Lucrative Tech Career</h4>
            <p>Embark on a rewarding career in the ever-evolving field of technology with our Full Stack Web Development courses in Java and Python. Gain the essential skills to build dynamic and responsive web applications, utilizing both front-end and back-end technologies. Our industry-seasoned instructors will guide you through hands-on projects, equipping you with the practical expertise and problem-solving abilities that employers seek. Prepare yourself for a thriving career as a sought-after Full Stack Web Developer, where limitless opportunities await.</p>
            <div>
              <a href="#" >
                <Button text='Explore' />
              </a>
            </div>
          </div>
          <div class="offering" style={{height:'95%'}} data-animate="offering">
            <img src={digital} alt='image' />
            <h4>Digital Marketing: Unleash Your Potential in the Digital Job Market</h4>
            <p>Enter the thriving realm of digital marketing and open doors to exciting career opportunities with our specialized Digital Marketing course. Explore the diverse landscape of online marketing strategies, including SEO, social media marketing, content creation, and more. Acquire the knowledge and practical skills to devise effective marketing campaigns, drive brand awareness, and achieve measurable results in the digital sphere. Equip yourself with the expertise sought by employers across various industries and carve your path to success in the dynamic world of digital marketing.</p>
            <div>
              <a href="#" >
                <Button text='Explore' />
              </a>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <div className='brand2'>
        <Brand />
        <CountUpSection text1={1184} text2={10} text3={853} text4={5} />
      </div>
      <hr />
      <section id="ImageCarousel">
        <hr />
        <h2>Destination Techs: Empowering Success through Upskilling</h2>
        <hr />
        <h1>Student Placements</h1>
        <ImageCarousel />
      </section >
      <section id='growth'>
        <div className='growth-text'>
          <hr />
          <h2>Career Growth</h2>
          <hr />
        </div>
        <div class="career-growth">
          <div class="career-growth-left">
            <img src={image1} alt="Image 1"  data-animate="gro-im"/>
            <img src={image2} alt="Image 2" data-animate="gro-im"/>
          </div>
          <div class="career-growth-right" data-animate="gro-ri">
            <h2>Accelerate Your Career Growth: Choose Us for Your Path to Success...</h2>
            <p>At Destination Technologies, we are dedicated to fueling your career growth and success. With our comprehensive upskilling programs, we empower you with the knowledge, skills, and industry-relevant expertise needed to thrive in the competitive job market. Here's why you should choose us as your trusted partner for career upskilling:</p>

            <ul>
              <div className='list'>
                <div>
                  <IoMdArrowDropright size={40} color='#00d4ff' />
                </div>
                <div>
                  <span> Unparalleled Expertise: </span> Benefit from our experienced instructors and industry professionals who bring a wealth of knowledge and practical insights to the classroom. Learn from the best to become the best.
                </div>
              </div>
              <div className='list'>
                <div>
                  <IoMdArrowDropright size={40} color='#00d4ff' />
                </div>
                <div>
                  <span>  Job-Relevant Curriculum:  </span> Our courses are designed in collaboration with industry experts, ensuring that you acquire the most up-to-date and in-demand skills that employers are seeking.
                </div>
              </div>
              <div className='list'>
                <div>
                  <IoMdArrowDropright size={40} color='#00d4ff' />
                </div>
                <div>
                  <span> Hands-on Learning:   </span>
                  Gain practical experience through real-world projects, case studies, and interactive exercises. Apply your knowledge to solve real challenges and build a strong foundation for your future career.
                </div>
              </div>
              <div className='list'>
                <div>
                  <IoMdArrowDropright size={40} color='#00d4ff' />
                </div>
                <div>
                  <span>  Personalized Guidance:  </span>
                  Receive personalized attention and guidance from our dedicated instructors and support team. We are committed to your success and provide individualized support to help you overcome any obstacles along your learning journey.
                </div>
              </div>
              <div className='list'>
                <div>
                  <IoMdArrowDropright size={40} color='#00d4ff' />
                </div>
                <div>
                  <span> Career Assistance: </span>
                  Access our comprehensive career support services, including resume building, interview preparation, and job placement assistance. We are here to help you showcase your skills and land your dream job.
                </div>
              </div>
            </ul>
            <a href="#" >
              <Button text='View All' />
            </a>
          </div>
        </div>
      </section>
      <hr />
      {/* learning */}
      <section id='learning' >
        <div class="learning-container" style={{height:'110vh'}}>
          <div className='learning-text' data-animate="lea-te">
            <h1>Training for Every Need: Discover Our Flexible Learning Options</h1>
          </div>
          <div className='learning-card-main'>
            <div class="learning-card" style={{height:'100%'}} data-animate="lea-ca">
            <img src={logo1} alt="Logo 1" />
              <h2>Online Training: Accessible Learning for New Students and Professionals</h2>
              <p>Our primary goal is to offer IT training to new students and professionals dispersed across a large geographic area. Through our online training programs, you can access high-quality instruction from the convenience of your location. Benefit from the expertise of our instructors, who are experienced software developers themselves.</p>
            </div>
            <div class="learning-card" style={{height:'100%'}} data-animate="lea-ca">
            <img src={logo2} alt="Logo 2" />
              <h2>Classroom Training: Engaging Learning in a Collaborative Environment</h2>
              <p>At Destination, we offer classroom training facilitated by IT instructors with training experience. Join our classroom sessions to benefit from face-to-face interactions, hands-on exercises, and real-time feedback. Learn alongside fellow students in a collaborative environment, fostering a comprehensive learning experience.</p>
            </div>
            <div class="learning-card"  style={{height:'100%'}} data-animate="lea-ca">
              <img src={logo3} alt="Logo 3" />
              <h2>Corporate Training: Customized Solutions & Tailored Course for Business Success</h2>
              <p>Destination has developed substantial expertise in building client-specific and specialized training programs. Our corporate training offerings are tailored to address the unique needs of businesses. We work closely with our corporate clients to develop customized training programs that align with their objectives, ensuring maximum impact and skill development.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
