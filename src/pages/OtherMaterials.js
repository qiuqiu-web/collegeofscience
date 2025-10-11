import React from 'react';
import './PageTemplate.css';

const OtherMaterials = () => {
  return (
    <div className="page-template">
      <h1 className="page-title">其他材料</h1>

      <div className="content-section">
        <h2>补充材料</h2>
        <ul className="content-list">
          <li>项目申报书</li>
          <li>中期检查报告</li>
          <li>结题报告</li>
          <li>成果鉴定书</li>
          <li>推广应用证明</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>附件材料</h2>
        <ul className="content-list">
          <li>相关会议纪要</li>
          <li>合作协议书</li>
          <li>培训证书</li>
          <li>获奖证书复印件</li>
        </ul>
      </div>
    </div>
  );
};

export default OtherMaterials;
