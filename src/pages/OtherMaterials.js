import React from 'react';
import './PageTemplate.css';
import './Application.css';

const OtherMaterials = () => {
  return (
    <div className="content-section">
      <h2>
        <b>目录</b>
      </h2>
      <p>
        <b>2.2.3 应用案例库（部分）</b>
      </p>
      <ul className="content-list">
        <li>2.2.3.1 油藏数值模拟的线性求解算法</li>
        <li>2.2.3.2 压裂液滤失系数模型</li>
        <li>2.2.3.3 单相渗流的连续性方程</li>
        <li>2.2.3.4 钻具故障概率分析</li>
        <li>2.2.3.5 勘探甜点区分析的概率问题</li>
        <li>2.2.3.6 钻头选择方法</li>
        <li>2.2.3.7 储层参数确定建模</li>
        <li>2.2.3.8 多层叠置煤层压裂裂缝纵向扩展模型与数值模拟</li>
      </ul>
      <p>
        <b>2.2.5 部分教学教改研究项目结题报告6项</b>
      </p>
      <ul className="content-list">
        <li>课程研究报告1：《模糊数学》改革建设报告（2020）</li>
        <li>课程研究报告2：《数值分析》优质课程建设报告（2020）</li>
      </ul>
    </div>
  );
};

export default OtherMaterials;
