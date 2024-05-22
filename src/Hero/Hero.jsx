import React from "react";
import "./Hero.css";
import dark_arrow from "../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="Hero container">
      <div className="hero-text">
        <h1>We ensure better education for a better world</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with
          knowledge, skills, and experiences needed to excell in the dynamic
          field of education.
          <button className="btn">
            Explore More <img src={dark_arrow} alt="" />
          </button>
        </p>
      </div>
    </div>
  );
};

export default Hero;
