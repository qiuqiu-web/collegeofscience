import React from 'react';
import './PageTemplate.css';

const Summary = () => {
  return (
    <div className="page-template">
      <h1 className="page-title">成果总结报告</h1>

      <div className="content-section">
        <h2>一、研究背景</h2>
        <p>
          随着经济社会的快速发展，职业院校学生面临着前所未有的压力和挑战。
          部分学生存在对生命价值认识不清、漠视生命等现象，急需系统科学的生命价值观教育。
        </p>
      </div>

      <div className="content-section">
        <h2>二、研究目标</h2>
        <ul className="content-list">
          <li>构建系统完整的生命价值观教育内容体系</li>
          <li>创新教育载体和实施路径</li>
          <li>提升学生生命价值观认知水平</li>
          <li>减少校园危机事件的发生</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>三、研究成果</h2>
        <p>
          经过8年的深入研究和实践，形成了"'三维构建、三位共育'生命价值观教育模式"。
          该模式以理论创新为基础，以实践创新为支撑，以模式创新为特色，
          为职业院校生命价值观教育提供了系统科学的解决方案。
        </p>
      </div>

      <div className="content-section">
        <h2>四、推广应用</h2>
        <p>
          研究成果在沧州医学高等专科学校及多所职业院校得到推广应用，
          覆盖学生10000余人，取得了显著的教育效果和社会效益。
        </p>
      </div>
    </div>
  );
};

export default Summary;
