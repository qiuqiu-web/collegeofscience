import React from 'react';
import './PageTemplate.css';

const SocialService = () => {
  return (
    <div className="page-template">
      <h1 className="page-title">社会服务</h1>

      <div className="content-section">
        <h2>服务内容</h2>
        <ul className="content-list">
          <li>社区生命教育讲座</li>
          <li>学校生命教育指导</li>
          <li>企业员工培训</li>
          <li>社会公益活动</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>服务效果</h2>
        <p>
          通过开展社会服务活动，扩大了生命价值观教育的社会影响，
          为构建和谐社会做出了积极贡献。
        </p>
      </div>
    </div>
  );
};

export default SocialService;
