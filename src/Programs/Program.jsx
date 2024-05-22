import React from "react";
import "./Program.css";
import Program_1 from "../assets/pro.jpg";
import Program_2 from "../assets/prog.jpg";
import Program_3 from "../assets/program.jpg";
import Program_icon_1 from "../assets/icon1.png";
import Program_icon_2 from "../assets/icon2.jpg";
import Program_icon_3 from "../assets/icon3.png";

const Program = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={Program_1} alt="" />
        <div className="caption">
          <img src={Program_icon_1} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={Program_2} alt="" />
        <div className="caption">
          <img src={Program_icon_2} alt="" />
          <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={Program_3} alt="" />
        <div className="caption">
          <img src={Program_icon_3} alt="" />
          <p>Post graduation</p>
        </div>
      </div>
    </div>
  );
};

export default Program;
