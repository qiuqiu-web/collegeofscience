import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./OtherMaterialsLayout.css";

const OtherMaterialsLayout = ({ children }) => {
  const location = useLocation();
  const [isSection223Expanded, setIsSection223Expanded] = useState(false);
  const [isSection225Expanded, setIsSection225Expanded] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isParentActive = (parentPath) => {
    return location.pathname.startsWith(parentPath);
  };

  const toggleSection223 = () => {
    setIsSection223Expanded(!isSection223Expanded);
  };

  const toggleSection225 = () => {
    setIsSection225Expanded(!isSection225Expanded);
  };

  return (
    <div className="page-template">
      <h1 className="page-title">其他材料</h1>

      <div className="other-materials-layout">
        <div className="other-materials-sidebar">
          <div className="sidebar-header">
            <h3>导航</h3>
          </div>
          <nav className="sidebar-nav">
            <ul className="sidebar-menu">
              <li className="sidebar-item">
                <Link
                  to="/other-materials"
                  className={`sidebar-link ${
                    isActive("/other-materials") ? "active" : ""
                  }`}
                >
                  目录
                </Link>
              </li>
              <li className="sidebar-item">
                <div
                  className={`sidebar-link ${
                    isActive("/other-materials-2-2-3") ||
                    isParentActive("/other-materials-2-2-3")
                      ? "active"
                      : ""
                  } expandable`}
                  onClick={toggleSection223}
                >
                  <span>应用案例库（部分）</span>
                  <span
                    className={`expand-icon ${
                      isSection223Expanded ? "expanded" : ""
                    }`}
                  >
                    ▼
                  </span>
                </div>
                {isSection223Expanded && (
                  <ul className="submenu">
                    <li className="sidebar-item">
                      <Link
                        to="/other-materials-2-2-3"
                        className={`sidebar-link submenu-link ${
                          isActive("/other-materials-2-2-3") ? "active" : ""
                        }`}
                      >
                        应用案例库（部分）
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="sidebar-item">
                <div
                  className={`sidebar-link ${
                    isActive("/other-materials-2-2-5") ||
                    isParentActive("/other-materials-2-2-5")
                      ? "active"
                      : ""
                  } expandable`}
                  onClick={toggleSection225}
                >
                  <span>部分教学教改研究项目结题报告6项</span>
                  <span
                    className={`expand-icon ${
                      isSection225Expanded ? "expanded" : ""
                    }`}
                  >
                    ▼
                  </span>
                </div>
                {isSection225Expanded && (
                  <ul className="submenu">
                    <li className="sidebar-item">
                      <Link
                        to="/other-materials-2-2-5"
                        className={`sidebar-link submenu-link ${
                          isActive("/other-materials-2-2-5") ? "active" : ""
                        }`}
                      >
                        部分教学教改研究项目结题报告6项
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </div>

        <div className="other-materials-main">
          <div className="other-materials-content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default OtherMaterialsLayout;
