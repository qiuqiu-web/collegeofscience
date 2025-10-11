import React from 'react';
import './PageTemplate.css';

const Questionnaire = () => {
  return (
    <div className="page-template">
      <h1 className="page-title">问卷调查及分析</h1>

      <div className="content-section">
        <h2>调查概况</h2>
        <p>
          为了科学评估生命价值观教育的效果，我们设计并实施了多轮问卷调查，
          收集了大量第一手数据，为教育模式的改进提供了重要依据。
        </p>
      </div>

      <div className="content-section">
        <h2>调查对象</h2>
        <ul className="content-list">
          <li>沧州医学高等专科学校学生（3000人次）</li>
          <li>合作院校学生（2000人次）</li>
          <li>教师群体（200人次）</li>
          <li>学生家长（500人次）</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>调查结果</h2>
        <div className="highlight-boxes">
          <div className="highlight-box">
            <h3>认知水平提升</h3>
            <p>85%的学生表示对生命价值有了更深刻的认识</p>
          </div>
          <div className="highlight-box">
            <h3>行为改善</h3>
            <p>校园危机事件发生率下降60%</p>
          </div>
          <div className="highlight-box">
            <h3>满意度高</h3>
            <p>90%的学生对教育模式表示满意</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
