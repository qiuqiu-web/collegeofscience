import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isOpen, onToggle }) => {
  const location = useLocation();

  const sidebarItems = [
    { path: "/section-2-1", label: "2.1 成果相关获奖证书" },
    { path: "/section-2-2", label: "2.2 教学成果及应用证明材料" },
    { path: "/section-2-3", label: "2.3 辐射推广效果" },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        onToggle(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [onToggle]);

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h3>教学成果及应用证明材料</h3>
      </div>
      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          {sidebarItems.map((item, index) => (
            <li key={index} className="sidebar-item">
              <Link
                to={item.path}
                className={`sidebar-link ${isActive(item.path) ? "active" : ""}`}
                onClick={() => {
                  if (window.innerWidth <= 768) {
                    onToggle(false);
                  }
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
