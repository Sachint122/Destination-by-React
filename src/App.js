import React from "react";
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
export default function App() {
  useScrollAnimation();
  return (
    <>
      <NavBar />
      {/* <Home/> */}
      {/* <About/> */}
      {/* <Courses /> */}
      {/* <Full_stack/> */}
      <Digital/>
      <Footer />
    </>
  );
}
