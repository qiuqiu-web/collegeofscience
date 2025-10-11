import React from 'react';
import './PageTemplate.css';

const HospitalFeedback = () => {
  return (
    <div className="page-template">
      <h1 className="page-title">医院反馈</h1>

      <div className="content-section">
        <h2>合作医院评价</h2>
        <p>
          与沧州市人民医院等多家医疗机构建立了长期合作关系，
          医院对实习学生的表现给予了高度评价。
        </p>
      </div>

      <div className="content-section">
        <h2>反馈内容</h2>
        <ul className="content-list">
          <li>学生职业素养显著提升</li>
          <li>生命价值观教育效果明显</li>
          <li>实习表现优秀，获得医院认可</li>
          <li>建议继续推广该教育模式</li>
        </ul>
      </div>
    </div>
  );
};

export default HospitalFeedback;
