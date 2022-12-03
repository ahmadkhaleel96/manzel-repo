import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './header/navBar';
import Intro from './intro/intro-video.js';
import Vision from './vision/vision.js';
import About from './about/about.js';
import Products from './products/products.js'
import WhyVR from "./whyVR/whyVR";
import Team from './team/team.js';
import Footer from "./footer/footer.js";

const Main = () => {
    return (
        <div className="main"> 
        <Navbar />
        <Intro />
        <Vision /> 
        <About />
        <Products />
        <WhyVR /> 
        <Team />
        <Footer />
        </div>
    )
};

export default Main