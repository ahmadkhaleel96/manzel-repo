import "./about.css";
import React from "react";
import AboutUs from "../../assets/varjo-2.webp";

const About = () => {
  return (
    <div className="about-container" id="aboutUs">
      <img src={AboutUs} alt="logo" />
      <div className="about-us" data-aos="zoom-in" data-aos-duration="3000">
        About Us.
      </div>
      <div
        className="about-us-left-line"
        data-aos="fade-right"
        data-aos-duration="2000"
      ></div>
      <div
        className="about-us-paragraph"
        data-aos="fade-right"
        data-aos-duration="3000"
      >
         Manzel is the passion product of Three of the most creative, weird,
        wacky and ambitious dreams in the world. Our goal is to take Education
        to the next level, with the help of Virtual Reality and Artificial
        intelligence, the first step is enhancing education for Architect
        students and Electrical Engineering students, because GOD HELP THEM!
        they really need help, but our good deed will not stop here, all
        education in all levels will be pumped up a notch.
      </div>
    </div>
  );
};

export default About;
