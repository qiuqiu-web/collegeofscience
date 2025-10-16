import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./Layout.css";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="section-layout">
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
      {sidebarOpen && <div className="sidebar-overlay show" onClick={toggleSidebar}></div>}

      <div className="section-main">
        <button
          className="sidebar-toggle"
          onClick={toggleSidebar}
          aria-label="切换侧边栏"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="section-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
