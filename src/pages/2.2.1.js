import React from "react";
import "./PageTemplate.css";
import "./Application.css";

//2.2.1的图片
import c1 from "../images/成果鉴定1.png";
import c2 from "../images/成果鉴定2.png";
const Section211 = () => {
  return (
    <div>
      <div className="content-section">
        <div>
          <h4>成果鉴定书</h4>
          <div className="image-container">
            <img src={c1} alt="成果鉴定书"></img>
            <img src={c2} alt="成果鉴定书"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section211;