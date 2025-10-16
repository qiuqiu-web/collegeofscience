import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./ApplicationLayout.css";

const ApplicationLayout = ({ children }) => {
  const location = useLocation();
  const [isSection21Expanded, setIsSection21Expanded] = useState(false);
  const [isSection22Expanded, setIsSection22Expanded] = useState(false);
  const [isSection23Expanded, setIsSection23Expanded] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isParentActive = (parentPath) => {
    return location.pathname.startsWith(parentPath);
  };

  const toggleSection21 = () => {
    setIsSection21Expanded(!isSection21Expanded);
  };

  const toggleSection22 = () => {
    setIsSection22Expanded(!isSection22Expanded);
  };

  const toggleSection23 = () => {
    setIsSection23Expanded(!isSection23Expanded);
  };

  return (
    <div className="page-template">
      <h1 className="page-title">教学成果及应用证明材料</h1>

      <div className="application-layout">
        <div className="application-sidebar">
          <div className="sidebar-header">
            <h3>导航</h3>
          </div>
          <nav className="sidebar-nav">
            <ul className="sidebar-menu">
              <li className="sidebar-item">
                <Link to="/application" className={`sidebar-link ${isActive('/application') ? 'active' : ''}`}>目录</Link>
              </li>
              <li className="sidebar-item">
                <div
                  className={`sidebar-link ${isActive('/section-2-1') || isParentActive('/section-2-1') ? 'active' : ''} expandable`}
                  onClick={toggleSection21}
                >
                  <span>2.1 成果相关获奖证书</span>
                  <span className={`expand-icon ${isSection21Expanded ? 'expanded' : ''}`}>▼</span>
                </div>
                {isSection21Expanded && (
                  <ul className="submenu">
                    <li className="sidebar-item">
                      <Link to="/section-2-1-1" className={`sidebar-link submenu-link ${isActive('/section-2-1-1') ? 'active' : ''}`}>2.1.1 教学成果类获奖9项</Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/section-2-1-2" className={`sidebar-link submenu-link ${isActive('/section-2-1-2') ? 'active' : ''}`}>2.1.2 "数学+"教学科研类获奖7项</Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/section-2-1-3" className={`sidebar-link submenu-link ${isActive('/section-2-1-3') ? 'active' : ''}`}>2.1.3 AI辅助教学获奖2项</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="sidebar-item">
                <div
                  className={`sidebar-link ${isActive('/section-2-2') || isParentActive('/section-2-2') ? 'active' : ''} expandable`}
                  onClick={toggleSection22}
                >
                  <span>2.2 教学成果及应用证明材料</span>
                  <span className={`expand-icon ${isSection22Expanded ? 'expanded' : ''}`}>▼</span>
                </div>
                {isSection22Expanded && (
                  <ul className="submenu">
                    <li className="sidebar-item">
                      <Link to="/section-2-2-1" className={`sidebar-link submenu-link ${isActive('/section-2-2-1') ? 'active' : ''}`}>2.2.1 成果鉴定书</Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/section-2-2-2" className={`sidebar-link submenu-link ${isActive('/section-2-2-2') ? 'active' : ''}`}>2.2.2 3门优质课程、5部教材</Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/section-2-2-4" className={`sidebar-link submenu-link ${isActive('/section-2-2-4') ? 'active' : ''}`}>2.2.4 教学教改研究项目</Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/section-2-2-6" className={`sidebar-link submenu-link ${isActive('/section-2-2-6') ? 'active' : ''}`}>2.2.6 课程资源</Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/section-2-2-7" className={`sidebar-link submenu-link ${isActive('/section-2-2-7') ? 'active' : ''}`}>2.2.7 学生科研能力提升</Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/section-2-2-8" className={`sidebar-link submenu-link ${isActive('/section-2-2-8') ? 'active' : ''}`}>2.2.8 多维质量评价与跟踪反馈体系</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="sidebar-item">
                <div
                  className={`sidebar-link ${isActive('/section-2-3') || isParentActive('/section-2-3') ? 'active' : ''} expandable`}
                  onClick={toggleSection23}
                >
                  <span>2.3 辐射推广效果</span>
                  <span className={`expand-icon ${isSection23Expanded ? 'expanded' : ''}`}>▼</span>
                </div>
                {isSection23Expanded && (
                  <ul className="submenu">
                    <li className="sidebar-item">
                      <Link to="/section-2-3-1" className={`sidebar-link submenu-link ${isActive('/section-2-3-1') ? 'active' : ''}`}>2.3.1 教学成果推广应用证明</Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="/section-2-3-2" className={`sidebar-link submenu-link ${isActive('/section-2-3-2') ? 'active' : ''}`}>2.3.2 国际合作与跨领域交流</Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </div>

        <div className="application-main">
          <div className="application-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationLayout;
