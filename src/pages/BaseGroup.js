import React from 'react';
import './PageTemplate.css';

const BaseGroup = () => {
  return (
    <div className="page-template">
      <h1 className="page-title">基地群</h1>

      <div className="content-section">
        <h2>实践基地</h2>
        <p>
          建立了完善的实践教育基地群，包括医院、社区、学校等多个实践平台，
          为学生提供了丰富的实践体验机会。
        </p>
      </div>

      <div className="content-section">
        <h2>基地类型</h2>
        <ul className="content-list">
          <li>医疗机构实践基地</li>
          <li>社区服务实践基地</li>
          <li>学校合作实践基地</li>
          <li>企业实习实践基地</li>
        </ul>
      </div>
    </div>
  );
};

export default BaseGroup;
