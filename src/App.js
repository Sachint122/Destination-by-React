import React from "react";
import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import Full_stack from "./components/Full_stack";
import Digital from "./components/Digital";
import Footer from './components/Footer';
import './style/Home/home.css';
import './style/Home/address.css';
import './style/Home/why.css';
import './style/Footer/footer.css'
import './index.css';
import { useScrollAnimation } from './components/hooks/Animation';
import ScrollToTop from './components/hooks/ScrollToTop'
import Web_Development from "./components/Web_Development";
import Training_Education from "./components/Training_Education";
import It_Staff from "./components/It_Staff";
import Placement from "./components/Placement";
import Contact from "./components/Contact";
import  SplashCursor from './components/hooks/Cursor'
export default function App() {
  useScrollAnimation();
  return (
    <>
      <SplashCursor/>
      <NavBar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/full-stack" element={<Full_stack />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/Training_Education" element={<Training_Education />} />
        <Route path="/Web-Development" element={<Web_Development />} />
        <Route path="/It_Staff" element={<It_Staff />} />
        <Route path="/Placement" element={<Placement />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
