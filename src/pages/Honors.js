import React from 'react';
import './PageTemplate.css';

const Honors = () => {
  return (
    <div className="page-template">
      <h1 className="page-title">荣誉成果</h1>

      <div className="content-section">
        <h2>获奖情况</h2>
        <ul className="content-list">
          <li>省级教学成果奖一等奖</li>
          <li>沧州市教育科研成果特等奖</li>
          <li>全国职业院校德育工作优秀案例</li>
          <li>河北省高校思想政治工作创新案例</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>学术成果</h2>
        <ul className="content-list">
          <li>发表核心期刊论文20余篇</li>
          <li>出版专著2部</li>
          <li>主持省级课题3项</li>
          <li>获得专利2项</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>社会影响</h2>
        <div className="highlight-boxes">
          <div className="highlight-box">
            <h3>媒体报道</h3>
            <p>被多家主流媒体报道，产生广泛社会影响</p>
          </div>
          <div className="highlight-box">
            <h3>专家认可</h3>
            <p>获得教育专家和同行的高度认可</p>
          </div>
          <div className="highlight-box">
            <h3>推广应用</h3>
            <p>在15所院校推广应用，效果显著</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Honors;
