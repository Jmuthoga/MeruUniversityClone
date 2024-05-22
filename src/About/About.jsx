import React from "react";
import "./About.css";
import about_img from "../assets/about.jpg";
import play_icon from "../assets/play.png";

const About = ({ SetPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            SetPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tommorrow's Leaders Today</h2>
        <p>
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cuttint-edge curriculum is
          designed to empower students with knowledge, skills, and experiences
          needed to excell in the dynamic fields of education.
        </p>
        <p>
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our program prepare aspiring educators to make a meaniful
          impact in classrooms, schools, and communities.
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
      </div>
    </div>
  );
};

export default About;
