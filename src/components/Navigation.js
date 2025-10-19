import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "首页" },
    { path: "/achievement", label: "教学成果申报书" },
    { path: "/summary", label: "教学成果总结报告" },
    {
      path: "/application",
      label: "教学成果及应用证明材料",
      children: [
        { path: "/section-2-1", label: "成果相关获奖证书" },
        { path: "/section-2-2", label: "教学成果及应用证明材料" },
        { path: "/section-2-3", label: "辐射推广效果" },
      ],
    },
    {
      path: "/materials",
      label: "成果支撑材料",
      children: [
        { path: "/policy-documents", label: "政策文件" },
        { path: "/questionnaire", label: "相关获奖文件" },
        { path: "/questionnaire", label: "问卷调查及分析" },
        { path: "/education-classroom", label: "教育课堂" },
        { path: "/base-group", label: "基地群" },
        { path: "/theme-activities", label: "主题教育活动" },
        { path: "/management-evaluation", label: "管理评价与评价" },
        { path: "/honors", label: "平台成果" },
        { path: "/teaching-resources", label: "教学资源成果" },
        { path: "/hospital-feedback", label: "医院反馈" },
        { path: "/social-service", label: "社会服务" },
        { path: "/news-media", label: "新闻媒体" },
        { path: "/research-results", label: "科研成果" },
      ],
    },
    {
      path: "/other-materials",
      label: "其他材料",
      children: [
        { path: "/other-materials-2-2-3", label: "应用案例库（部分）" },
        { path: "/other-materials-2-2-5", label: "部分教学教改研究项目结题报告6项" },
      ],
    },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const hasActiveChild = (children) => {
    if (!children) return false;
    return children.some((child) => location.pathname === child.path);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="切换菜单"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${mobileMenuOpen ? "mobile-open" : ""}`}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`nav-item ${item.children ? "has-dropdown" : ""}`}
            >
              <Link
                to={item.path}
                className={`nav-link ${isActive(item.path) || hasActiveChild(item.children)
                  ? "active"
                  : ""
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <ul className="dropdown-menu">
                  {item.children.map((child, childIndex) => (
                    <li key={childIndex} className="dropdown-item">
                      <Link
                        to={child.path}
                        className={`dropdown-link ${isActive(child.path) ? "active" : ""
                          }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
