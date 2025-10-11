import React from 'react';
import './PageTemplate.css';

const PolicyDocuments = () => {
  return (
    <div className="page-template">
      <h1 className="page-title">相关政策文件</h1>

      <div className="content-section">
        <h2>国家政策文件</h2>
        <ul className="content-list">
          <li>《国家中长期教育改革和发展规划纲要（2010－2020年）》</li>
          <li>《关于全面加强和改进新时代学校体育工作的意见》</li>
          <li>《关于加强和改进新时代师德师风建设的意见》</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>地方政策文件</h2>
        <ul className="content-list">
          <li>《河北省教育厅关于进一步加强学校德育工作的意见》</li>
          <li>《沧州市教育局关于加强职业院校学生思想政治教育工作的实施意见》</li>
        </ul>
      </div>
    </div>
  );
};

export default PolicyDocuments;
