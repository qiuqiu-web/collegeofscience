import React from "react";
import "./PageTemplate.css";

const Achievement = () => {
  return (
    <div className="page-template">
      <h1 className="page-title">成果推荐书</h1>

      <div className="content-section">
        <h2>一、成果简介</h2>
        <p>这是一段成果简介，主要介绍成果的创新点和解决的教学问题。</p>
      </div>

      <div className="content-section">
        <h2>二、主要解决的教学问题</h2>
        <ul className="content-list">
          <li>生命价值观教育内容零散不成体系</li>
          <li>教育载体孤立不相呼应</li>
          <li>缺乏系统科学的理论指导</li>
          <li>教育效果不够显著</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>三、解决教学问题的方法</h2>
        <p>
          通过"三维构建"系统设计教育内容，通过"三位共育"协同实施教育过程，
          构建了完整的生命价值观教育理论体系和实践模式。
        </p>
      </div>

      <div className="content-section">
        <h2>四、成果的创新点</h2>
        <div className="highlight-boxes">
          <div className="highlight-box">
            <h3>理论创新</h3>
            <p>构建了"三维构建"的生命价值观教育内容体系</p>
          </div>
          <div className="highlight-box">
            <h3>实践创新</h3>
            <p>创新了"三位共育"的教育载体和实施路径</p>
          </div>
          <div className="highlight-box">
            <h3>模式创新</h3>
            <p>形成了系统化、科学化的教育模式</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
