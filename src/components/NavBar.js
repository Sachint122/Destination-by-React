import React from 'react'
import { Link } from 'react-router-dom';
import '../style/nav.css'
import { useEffect } from 'react';
import destinationLogo from '../images/logo/destination-log.png';
import Button from './hooks/ModernButton';
export default function NavBar() {
    useEffect(() => {
        const handleClickOutside = (event) => {
          const dropdowns = document.querySelectorAll('.dropdown');
          dropdowns.forEach(dropdown => {
            if (dropdown.contains(event.target)) {
              dropdown.classList.toggle('open');
            } else {
              dropdown.classList.remove('open');
            }
          });
        };
    
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, []);
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={destinationLogo} alt="Logo"/>
            </div>
            <ul className="nav-links">
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/about">About</Link></li>
                <li className="dropdown">
                    <Link >List Of Courses</Link>
                    <div className="dropdown-content">
                        <Link to="/courses">Description Of Course</Link>
                        <Link to="/full-stack">Full Stack Development Course</Link>
                        <Link to="/digital">Digital Marketing Course</Link>
                    </div>
                </li>
                <li className="dropdown">
                    <Link >Service</Link>
                    <div className="dropdown-content">
                        <Link to="/Training_Education">Training & Education</Link>
                        <Link to="/Web-Development">Web Development</Link>
                        <Link to="/It_Staff">IT & Staff</Link>
                    </div>
                </li>
                <li className="nav-item"><Link to="/">Placement</Link></li>
                <li className="nav-item"><Link to="/">Contact Us</Link></li>
            </ul>
            <Button text="Login LMS"/>
        </nav>
    )
}
