import React from 'react';
import './PageTemplate.css';

const ThemeActivities = () => {
  return (
    <div className="page-template">
      <h1 className="page-title">主题教育活动</h1>

      <div className="content-section">
        <h2>活动类型</h2>
        <div className="highlight-boxes">
          <div className="highlight-box">
            <h3>生命教育讲座</h3>
            <p>邀请专家开展生命教育专题讲座</p>
          </div>
          <div className="highlight-box">
            <h3>主题班会</h3>
            <p>定期开展生命价值观主题班会</p>
          </div>
          <div className="highlight-box">
            <h3>实践活动</h3>
            <p>组织学生参与各类实践活动</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>活动成效</h2>
        <p>
          通过丰富多彩的主题教育活动，有效提升了学生的生命价值观认知水平，
          营造了良好的校园文化氛围。
        </p>
      </div>
    </div>
  );
};

export default ThemeActivities;
