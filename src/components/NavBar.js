import React from 'react'
import '../style/nav.css'
import { useEffect } from 'react';
import destinationLogo from '../images/logo/destination-log.png';
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
                <li className="nav-item"><a href="/">Home</a></li>
                <li className="nav-item"><a href="/">About</a></li>
                <li className="dropdown">
                    <a >Our Courses</a>
                    <div className="dropdown-content">
                        <a href="/">Two Seater</a>
                        <a href="/">Four Seater</a>
                    </div>
                </li>
                <li className="dropdown">
                    <a >Service</a>
                    <div className="dropdown-content">
                        <a href="/">Two Seater</a>
                        <a href="/">Four Seater</a>
                        <a href="/">Seven Seater</a>
                    </div>
                </li>
                <li className="nav-item"><a href="/">Placement</a></li>
                <li className="nav-item"><a href="/">Contact Us</a></li>
            </ul>
            <button className="loginLms" type="submit">Login LMS</button>
        </nav>
    )
}
