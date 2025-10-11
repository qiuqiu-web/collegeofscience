import React from 'react';
import './PageTemplate.css';

const TeachingResources = () => {
  return (
    <div className="page-template">
      <h1 className="page-title">教学资源成果</h1>

      <div className="content-section">
        <h2>教材资源</h2>
        <ul className="content-list">
          <li>《生命价值观教育》教材</li>
          <li>《生命教育实践指导》手册</li>
          <li>多媒体教学课件</li>
          <li>案例教学资源库</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>数字化资源</h2>
        <div className="highlight-boxes">
          <div className="highlight-box">
            <h3>在线课程</h3>
            <p>开发了完整的在线课程体系</p>
          </div>
          <div className="highlight-box">
            <h3>互动平台</h3>
            <p>建立了师生互动交流平台</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachingResources;
