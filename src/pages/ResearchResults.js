import React from 'react';
import './PageTemplate.css';

const ResearchResults = () => {
  return (
    <div className="page-template">
      <h1 className="page-title">科研成果</h1>

      <div className="content-section">
        <h2>发表论文</h2>
        <ul className="content-list">
          <li>核心期刊论文20余篇</li>
          <li>国际会议论文5篇</li>
          <li>省级期刊论文15篇</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>出版著作</h2>
        <ul className="content-list">
          <li>《生命价值观教育理论与实践》专著</li>
          <li>《职业院校生命教育模式研究》专著</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>科研项目</h2>
        <ul className="content-list">
          <li>省级科研项目3项</li>
          <li>市级科研项目5项</li>
          <li>校级科研项目8项</li>
        </ul>
      </div>
    </div>
  );
};

export default ResearchResults;
