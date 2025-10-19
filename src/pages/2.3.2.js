import React from "react";
import "./PageTemplate.css";
import "./Application.css";

// 2.3.2的图片
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

const Section232 = () => {
  return (
    <div className="content-section">
      <h4> 国际合作与跨领域交流</h4>
      <div className="image-container">
        <p>1."一带一路"引领学术盛宴：斯洛文尼亚专家来华共话动力系统学术前沿</p>
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
  );
};
export default Section232;
