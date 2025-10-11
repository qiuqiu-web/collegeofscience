import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p>Copyright © {currentYear} 沧州医学高等专科学校</p>
          <p>教学成果奖专栏网站</p>
        </div>
        <div className="footer-links">
          <a href="#privacy" className="footer-link">隐私政策</a>
          <span className="separator">|</span>
          <a href="#terms" className="footer-link">使用条款</a>
          <span className="separator">|</span>
          <a href="#contact" className="footer-link">联系我们</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
