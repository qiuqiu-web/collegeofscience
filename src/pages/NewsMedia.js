import React from 'react';
import './PageTemplate.css';

const NewsMedia = () => {
  return (
    <div className="page-template">
      <h1 className="page-title">新闻媒体报道</h1>

      <div className="content-section">
        <h2>媒体报道</h2>
        <ul className="content-list">
          <li>《中国教育报》专题报道</li>
          <li>《河北日报》新闻报道</li>
          <li>《沧州日报》深度报道</li>
          <li>电视台专题节目</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>社会影响</h2>
        <p>
          通过媒体报道，本成果获得了广泛的社会关注和认可，
          为生命价值观教育的推广普及起到了积极作用。
        </p>
      </div>
    </div>
  );
};

export default NewsMedia;
