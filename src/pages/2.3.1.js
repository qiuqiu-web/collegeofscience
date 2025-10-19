import React from "react";
import "./PageTemplate.css";
import "./Application.css";

import cg1 from "../images/成果1.png";
import cg2 from "../images/成果2.png";
import cg3 from "../images/成果3.png";
import cg4 from "../images/成果4.png";
import cg5 from "../images/成果5.png";
const Section231 = () => {
  return (
    <div>
      <div>
        {/* <h1 className="page-title">辐射推广效果</h1> */}
        <div className="content-section">
          <h4>教学成果及应用证明材料</h4>
          <div className="image-container">
            <p>1.中国石油大学</p>
            <img src={cg1}></img>
          </div>
          <div className="image-container">
            <p>2.西安石油大学</p>
            <img src={cg2}></img>
          </div>
          <div className="image-container">
            <p>3.西华大学</p>
            <img src={cg3}></img>
          </div>
          <div className="image-container">
            <p>4.轻化工大学</p>
            <img src={cg4}></img>
          </div>
          <div className="image-container">
            <p>5.重庆工商大学</p>
            <img src={cg5}></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section231;
