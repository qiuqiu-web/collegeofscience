import React from "react";
import "./Application.css";

const Application = () => {
  return (
    <div className="content-section">
      <h2>
        <b>目录</b>
      </h2>
      <p>
        <b>成果相关获奖证书</b>
      </p>
      <ul className="content-list">
        <li>教学成果类获奖9项</li>
        <li>"数学+"教学科研类获奖7项</li>
        <li>AI辅助教学获奖2项</li>
      </ul>
      <p>
        <b>教学成果及应用证明材料</b>
      </p>
      <ul className="content-list">
        <li>成果鉴定书</li>
        <li>3门优质课程、5部教材</li>
        <li>教学教改研究项目（省级3项校级13项）</li>
        <li>课程资源</li>
        <li>学生科研能力提升</li>
        <li>多维质量评价与跟踪反馈体系</li>
      </ul>
      <p>
        <b>辐射推广效果</b>
      </p>
      <ul className="content-list">
        <li>教学成果推广应用证明</li>
        <li>国际合作</li>
      </ul>
    </div>
  );
};

export default Application;
