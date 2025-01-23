import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import './style/home.css';
import './style/address.css';
import './style/Form.css';
import './style/why.css';
export default function App() {
  return (
   <>
    <NavBar />
    {/* <About/> */}
    <Home/>
   </>
  );
}
