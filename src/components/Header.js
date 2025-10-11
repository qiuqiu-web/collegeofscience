import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">教学成果奖专栏网站</h1>
        <h2 className="header-subtitle">西南石油大学理学院</h2>
        <p className="header-institution">完成单位：西南石油大学</p>
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
