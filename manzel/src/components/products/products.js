import React from "react";
import "./products.css";
import Manzel from "../../assets/manzelverse_intro.mp4";
import ManzelKids from "../../assets/manzel_intro_test2.mp4";
import Spark from "../../assets/spark_intro_test2.mp4";

const Products = () => {
  return (
    <div className="products-container" id="products">
      <div className="products" data-aos="zoom-in-up" data-aos-duration="2000">
        Our Products
      </div>
      <div className="grid-container">
        <div className="grid-item1">
          <video
            src={Manzel}
            alt="Manzel Logo"
            className="manzel-logo"
            autoPlay
            loop
            muted
            data-aos="fade-right"
            data-aos-duration="2000"
          />
          <div
            className="manzel-paragraph1"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            Manzel-Verse
          </div>

          <div
            className="manzel-paragraph2"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            A platform designed specifically for the Metaverse, where gathering
            in virtual reality to meet up with experts, teachers, clients and
            teammates is a reality. Manzel-Verse allows you to play a game that
            helps you draw plans, build them, share them and edit them with the
            help of AI to obtain the most accurate structurally sound design in
            real-life.
          </div>
        </div>
        <div
          className="grid-item2"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <video
            src={Spark}
            alt="Spark Logo"
            className="spark-logo"
            autoPlay
            loop
            muted
          />
          <div
            className="spark-paragraph1"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            Spark
          </div>
          <br />
          <div
            className="spark-paragraph2"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            A platform designed in virtual reality specifically as a game that
            teaches the user how to repair, assemble sockets, panels, strips,
            plugs, chandeliers and even change light bulbs with the help of AI.
          </div>
        </div>
      </div>

      <div
        className="grid-item3"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <video
          src={ManzelKids}
          alt="Spark Logo"
          className="manzel-logo"
          autoPlay
          loop
          muted
        />
        <div
          className="manzel-paragraph1"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          Manzel Kids
        </div>
        <br />
        <div
          className="manzel-paragraph2"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          A platform designed as a Kid-Friendly VR game, where the goal is to
          teach kids how to draw sketches and build them, presented in 3D pixel
          Art aided with Virtual Reality to have the most accurate yet fun
          experience for kids.
        </div>
      </div>
    </div>
  );
};

export default Products;
