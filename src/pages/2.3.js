import React from "react";
import "./PageTemplate.css";
import "./Application.css";
//最后十五张图片
import cg1 from "../images/成果1.png";
import cg2 from "../images/成果2.png";
import cg3 from "../images/成果3.png";
import cg4 from "../images/成果4.png";
import cg5 from "../images/成果5.png";
import cg6 from "../images/成果6.png";
import cg7 from "../images/成果7.png";
import cg8 from "../images/成果8.png";
import cg9 from "../images/成果9.png";
import cg10 from "../images/成果10.png";
import cg11 from "../images/成果11.png";
import cg12 from "../images/成果12.png";
import cg13 from "../images/成果13.png";
import cg14 from "../images/成果14.png";
import cg15 from "../images/成果15.png";

const Section23 = () => {
  return (
    <div>
      <h1 className="page-title">辐射推广效果</h1>
      <div className="content-section">
        <h3>教学成果及应用证明材料</h3>
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
        <h3>国际合作与跨领域交流</h3>
        <div className="image-container">
          <p>
            1."一带一路"引领学术盛宴：斯洛文尼亚专家来华共话动力系统学术前沿
          </p>
          <img src={cg6}></img>
          <img src={cg7}></img>
          <img src={cg8}></img>
          <img src={cg9}></img>
          <p>2.理学院成功举办"动力系统与生物数学"专题学术报告会</p>
          <img src={cg10}></img>
          <p>3.我院成功获批2025年度国际杰出青年科学家计划</p>
          <img src={cg11}></img>
          <p>4.拓展数学教育合作新路径：波兰专家讲授短期优化课程</p>
          <img src={cg12}></img>
          <p>5. 跨学科科研交流，跨学科团队能力提升</p>
          <img src={cg13}></img>
          <img src={cg14}></img>
          <img src={cg15}></img>
        </div>
      </div>
    </div>
  );
};
export default Section23;