import { React, useEffect } from "react";
import "./intro-video.css";
import videoBg from "../../assets/manzel_intro_test.mp4";
import AOS from "aos";
import "aos/dist/aos.css";

const Intro = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="intro-container" id='intro'>
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />

      <div className="App-Name">
        <h1 data-aos="fade-up" data-aos-duration="2000">
          منزل
          <br/>
          Manzel
        </h1>
        <div
          className="title-underline"
          data-aos="zoom-out-up"
          data-aos-duration="2000"
        ></div>
        <h2>Architecural World with <br/>Arabic Identity</h2>
      </div>
    </div>
  );
};

export default Intro;
