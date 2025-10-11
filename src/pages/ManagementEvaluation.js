import React from 'react';
import './PageTemplate.css';

const ManagementEvaluation = () => {
  return (
    <div className="page-template">
      <h1 className="page-title">教育运行管理与评价</h1>

      <div className="content-section">
        <h2>管理体系</h2>
        <p>
          建立了完善的教育运行管理体系，包括组织架构、管理制度、
          评价机制等，确保教育活动的规范有序开展。
        </p>
      </div>

      <div className="content-section">
        <h2>评价体系</h2>
        <ul className="content-list">
          <li>学生评价指标体系</li>
          <li>教师评价指标体系</li>
          <li>课程评价指标体系</li>
          <li>效果评价指标体系</li>
        </ul>
      </div>
    </div>
  );
};

export default ManagementEvaluation;
