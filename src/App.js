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
import { useScrollAnimation } from './components/hooks/Animation';
import ScrollToTop from './components/hooks/ScrollToTop'
export default function App() {
  useScrollAnimation();
  return (
    <>
      <NavBar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/full-stack" element={<Full_stack />} />
        <Route path="/digital" element={<Digital />} />
      </Routes>
      <Footer />
    </>
  );
}
