import React from 'react';
import { useScrollToTop } from '../hooks/useScrollToTop';
import './BackToTop.css';

const BackToTop = () => {
  const { isVisible, scrollToTop } = useScrollToTop();

  if (!isVisible) {
    return null;
  }

  return (
    <button
      className="back-to-top"
      onClick={scrollToTop}
      aria-label="返回顶部"
    >
      <span className="back-to-top-icon">↑</span>
    </button>
  );
};

export default BackToTop;
