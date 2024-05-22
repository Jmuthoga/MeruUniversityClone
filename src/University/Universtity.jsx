import React from "react";
import "./Universiity.css";
import galley_1 from "../assets/galley1.jpg";
import galley_2 from "../assets/galley2.jpg";
import galley_3 from "../assets/galley3.jpg";
import galley_4 from "../assets/galley4.jpg";
import white_arrow from "../assets/white-arrow.png";

const Universtity = () => {
  return (
    <div className="campus">
      <div className="galley">
        <img src={galley_1} alt="" />
        <img src={galley_2} alt="" />
        <img src={galley_3} alt="" />
        <img src={galley_4} alt="" />
      </div>
      <button className="btn dark-btn">
        See More Here <img src={white_arrow} alt="" />
      </button>
    </div>
  );
};

export default Universtity;
