import React from "react";
import "./PageTemplate.css";
import "./Application.css";

import a1 from "../images/ai辅助1.png";
import a2 from "../images/ai辅助2.png";
const Section213 = () => {
  return (
    <div>
      <div>
        <h4>AI辅助教学获奖2项</h4>
        <div className="image-container">
          <h5>
            1.
            AI助教"西小理"-AI教育智能体设计与创新应用人工智能应用能力大赛二等奖
          </h5>
          <img src={a1}></img>
          <h5>
            2.
            优化建模问答系统-AI教育智能体设计与创新应用人工智能应用能力大赛二等奖
          </h5>
          <img src={a2}></img>
        </div>
      </div>
    </div>
  );
};
export default Section213;