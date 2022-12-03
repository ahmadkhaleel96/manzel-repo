import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./vision.css";
import glasses from "../../assets/manzel_intro_test2.mp4";
import AOS from "aos";
import "aos/dist/aos.css";

const Vision = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div className="vision-bg" id="vision">
      <div
        className="vision-container"
        data-aos="zoom-in-up"
        data-aos-duration="2000"
      >
        <div className="vision" data-aos="fade-right" data-aos-duration="2000">
          Our Vision <br /> & Mission
        </div>
        <div
          className="vision-underline"
          data-aos="fade-right"
          data-aos-duration="2000"
        ></div>
        <div
          className="vision-paragraph-short"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Vision.
        </div>
        <div
          className="vision-paragraph-long"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Our Vision is to take education to the next level, traditional
          teaching methods are good and beneficial to a certain point, lacking
          in visualization of information, students (Us included) where shocked
          of the vast difference between written words and the Real-world, so
          Manzel is our solution to this problem that will change education
          forever.
        </div>
        <div
          className="vision-devide-line"
          data-aos="zoom-in-up"
          data-aos-duration="100000"
        ></div>
        <video
          src={glasses}
          alt="stock img"
          className="vision-img"
          data-aos="fade-left"
          data-aos-duration="2000"
          autoPlay
          loop
          muted
        ></video>
        <div
          className="image-underline"
          data-aos="fade-left"
          data-aos-duration="2000"
        ></div>
        <div
          className="vision-second-paragraph"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          Our mission impossible is to change all aspects of education, at all levels, from kids to experts, from zero to hero, at all aspects of life, handing knowledge on a silver glass (not dish because that would be wierd!!). provide better education to everyone, because great education is the core of a great society.
        </div>
      </div>
    </div>
  );
};

export default Vision;
