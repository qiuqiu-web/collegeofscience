import React from 'react';
import './PageTemplate.css';

const Materials = () => {
  return (
    <div className="page-template">
      <h1 className="page-title">成果支撑材料</h1>

      <div className="content-section">
        <h2>支撑材料目录</h2>
        <ul className="content-list">
          <li>相关政策文件</li>
          <li>问卷调查及分析</li>
          <li>教育课堂</li>
          <li>基地群</li>
          <li>主题教育活动</li>
          <li>教育运行管理与评价</li>
          <li>荣誉成果</li>
          <li>教学资源成果</li>
          <li>医院反馈</li>
          <li>社会服务</li>
          <li>新闻媒体报道</li>
          <li>科研成果</li>
        </ul>
      </div>
    </div>
  );
};

export default Materials;
