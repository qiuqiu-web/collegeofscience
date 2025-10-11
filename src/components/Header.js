import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">教学成果奖专栏网站</h1>
        <h2 className="header-subtitle">
          职业院校"三维构建、三位共育"生命价值观教育模式的探索与实践
        </h2>
        <p className="header-institution">
          完成单位：沧州医学高等专科学校 沧州市红十字会 沧州市人民医院
        </p>
      </div>
      <div className="header-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-circle circle-3"></div>
      </div>
    </header>
  );
};

export default Header;
