import React, { useState } from "react";
import VideoSection from "../components/VideoSection";
import "./Home.css";

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const highlights = [
    {
      title: "三维构建",
      description: "从abc三个维度系统构建教育内容体系",
      icon: "🎯",
    },
    {
      title: "三位共育",
      description: "通过课堂教学、实践体验、环境熏陶三个载体协同实施教育",
      icon: "🤝",
    },
    {
      title: "系统科学",
      description: "形成系统化、科学化的生命价值观教育理论体系",
      icon: "📚",
    },
    {
      title: "广泛推广",
      description: "在多家职业院校推广应用，效果显著",
      icon: "🌟",
    },
  ];

  return (
    <div className="home-page">
      <VideoSection />

      <section className="achievement-intro">
        <h3 className="section-title">成果简介</h3>
        <div className="intro-content">
          <p>（一段话。。。）</p>

          <p>（再一段话。。。）</p>

          <p>
            该模式以"生命认知、生命情感、生命行为"三个维度构建教育内容体系，
            通过"课堂教学、实践体验、环境熏陶"三个载体实施教育，形成了系统化、科学化的生命价值观教育体系。
          </p>

          <div className="expand-section">
            <button
              className={`expand-btn ${isExpanded ? "expanded" : ""}`}
              onClick={toggleExpand}
            >
              <span className="expand-text">
                {isExpanded ? "收起" : "更多"}
              </span>
              <span className="expand-icon">{isExpanded ? "▲" : "▼"}</span>
            </button>

            <div className={`expanded-content ${isExpanded ? "show" : ""}`}>
              <p>研究成果 得到了教育部门、医疗机构和社会各界的广泛认可。</p>

              <p>
                该成果荣获省级教学成果奖一等奖，相关论文在核心期刊发表，
                研究成果具有重要的理论价值和实践意义，为职业院校生命价值观教育提供了可复制、可推广的经验模式。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="highlights">
        <h3 className="section-title">成果特色与亮点</h3>
        <div className="highlight-grid">
          {highlights.map((highlight, index) => (
            <div key={index} className="highlight-item">
              <div className="highlight-icon">{highlight.icon}</div>
              <h4 className="highlight-title">{highlight.title}</h4>
              <p className="highlight-description">{highlight.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="achievement-stats">
        <h3 className="section-title">成果数据</h3>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">8+</div>
            <div className="stat-label">年研究历程</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">所推广应用院校</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10000+</div>
            <div className="stat-label">受益学生人数</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">20+</div>
            <div className="stat-label">发表论文数量</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
