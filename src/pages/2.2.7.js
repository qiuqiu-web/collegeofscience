import React from "react";
import "./PageTemplate.css";
import "./Application.css";

import y13 from "../images/y13.png";
import y14 from "../images/y14.png";
import y15 from "../images/y15.png";
const Section227 = () => {
  return (
    <div>
      <h3>2.2.7 学生科研能力提升</h3>
      <p>
        我校研究生在全国石油工程设计大赛(即石油行业的“奥林匹克”竞赛)、全国研究生数学建模竞赛和“泰迪杯”数据挖据挑战赛中的获奖励情况：
      </p>
      <div className="image-container">
        <img src={y13}></img>
      </div>
      <p>2016年-2025年我校研究生发表论文情况：</p>
      <div className="image-container">
        <img src={y14}></img>
        <img src={y15}></img>
      </div>
    </div>
  );
};
export default Section227;