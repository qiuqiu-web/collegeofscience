import React from 'react';
import './PageTemplate.css';

const Application = () => {
  return (
    <div className="page-template">
      <h1 className="page-title">成果应用和证明材料</h1>

      <div className="content-section">
        <h2>一、应用概况</h2>
        <p>
          本成果自2017年形成以来，在沧州医学高等专科学校及多所职业院校得到广泛应用，
          形成了良好的示范效应和推广价值。
        </p>
      </div>

      <div className="content-section">
        <h2>二、应用效果</h2>
        <div className="highlight-boxes">
          <div className="highlight-box">
            <h3>学生层面</h3>
            <p>生命价值观认知水平显著提升，校园危机事件大幅减少</p>
          </div>
          <div className="highlight-box">
            <h3>学校层面</h3>
            <p>教育体系更加完善，办学特色更加鲜明</p>
          </div>
          <div className="highlight-box">
            <h3>社会层面</h3>
            <p>为职业教育生命价值观教育提供了可复制的经验模式</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>三、证明材料</h2>
        <ul className="content-list">
          <li>专家评价意见书</li>
          <li>校外推广应用证明</li>
          <li>效果评估报告</li>
          <li>媒体报道材料</li>
          <li>获奖证书</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>四、持续改进</h2>
        <p>
          根据应用过程中发现的问题和反馈意见，不断完善和优化教育模式，
          确保成果的先进性和实用性。
        </p>
      </div>
    </div>
  );
};

export default Application;
