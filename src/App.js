import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import Footer from './components/Footer';
import './style/home.css';
import './style/address.css';
import './style/Form.css';
import './style/why.css';
import './style/Footer/footer.css'
import { useScrollAnimation } from './components/hooks/Animation';
export default function App() {
  useScrollAnimation();
  return (
    <>
      <NavBar />
      {/* <Home/> */}
      {/* <About/> */}
      <Courses />
      <Footer />
    </>
  );
}
