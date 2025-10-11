import React from 'react';
import './PageTemplate.css';

const EducationClassroom = () => {
  return (
    <div className="page-template">
      <h1 className="page-title">教育课堂</h1>

      <div className="content-section">
        <h2>课堂教学体系</h2>
        <p>
          构建了系统完整的生命价值观教育课堂教学体系，包括理论教学、案例教学、
          情景教学等多种形式，形成了丰富的教学资源库。
        </p>
      </div>

      <div className="content-section">
        <h2>教学资源</h2>
        <ul className="content-list">
          <li>生命价值观教育教材</li>
          <li>多媒体教学课件</li>
          <li>案例教学视频</li>
          <li>互动教学软件</li>
          <li>在线学习平台</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>教学方法</h2>
        <div className="highlight-boxes">
          <div className="highlight-box">
            <h3>理论讲授</h3>
            <p>系统讲解生命价值观的基本理论和知识</p>
          </div>
          <div className="highlight-box">
            <h3>案例教学</h3>
            <p>通过真实案例引导学生思考和讨论</p>
          </div>
          <div className="highlight-box">
            <h3>情景模拟</h3>
            <p>创设情景让学生体验和感悟生命价值</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationClassroom;
