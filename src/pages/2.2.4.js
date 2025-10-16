import React from "react";
import "./PageTemplate.css";
import "./Application.css";
// //2.2.4 no picture
import h1 from "../images/h1.png";
import h2 from "../images/h2.png";
import h3 from "../images/h3.png";
import h4 from "../images/h4.png";
import h5 from "../images/h5.png";
import h6 from "../images/h6.png";
import h7 from "../images/h7.png";
import h8 from "../images/h8.png";
import h9 from "../images/h9.png";
import h10 from "../images/h10.png";

const Section224 = () => {
  return (
    <div>
      <h3>1.省级教改项目3项</h3>
      <p>
        （1）2024-2026年省级高等教育人才培养质量和教学教改项目——《数值分析》课程教学质量提升与教学方法改革研究课程建设
      </p>
      <p>
        （2）2024-2026年省级高等教育人才培养质量和教学教改项目——数智赋能的公共数学课程群教学改革探索与实践
      </p>
      <p>
        （3）2021-2023年省级高等教育人才培养质量和教学教改项目——“一流专业”建设背景下地方院校基础学科数学类专业人才培养模式研究
      </p>
      <div className="image-container">
        <img src={h1}></img>
        <img src={h2}></img>
        <img src={h3}></img>
        <img src={h4}></img>
      </div>
      <h3>2.校级教改项目10项</h3>
      <div className="image-container">
        <p>
          <b>（1）校级研究生优质课程建设项目3项</b>
        </p>
        <img src={h5}></img>
        <p>
          <b>（2）校级研究生教研教改项目7项</b>
        </p>
        <img src={h6}></img>
        <img src={h7}></img>
        <img src={h8}></img>
        <p>
          <b>3.校级教材建设项目3项</b>
        </p>
        <img src={h9}></img>
        <img src={h10}></img>
      </div>
    </div>
  );
};
export default Section224;
