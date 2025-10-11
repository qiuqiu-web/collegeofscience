import React from 'react';
import { useVideoPlayer } from '../hooks/useVideoPlayer';
import './VideoSection.css';

const VideoSection = () => {
  const { isVideoOpen, openVideo, closeVideo } = useVideoPlayer();

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeVideo();
    }
  };

  return (
    <>
      <section className="video-section">
        <h3 className="section-title">视频展示</h3>
        <div className="video-container">
          <div className="video-placeholder" onClick={openVideo}>
            <img
              src="/images/video-thumbnail.jpg"
              alt="点击播放视频"
              className="video-thumbnail"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjMzNyIgdmlld0JveD0iMCAwIDYwMCAzMzciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iMzM3IiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0yNTAgMTQwTDM1MCAyMDBMMjUwIDI2MFYxNDBaIiBmaWxsPSIjMzQ5OERCQiIvPgo8dGV4dCB4PSIzMDAiIHk9IjE4MCIgZmlsbD0iIzM0OThEQkIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCI+VmlkZW8gVGh1bWJuYWlsPC90ZXh0Pgo8L3N2Zz4K';
              }}
            />
            <div className="play-button">
              <span className="play-icon">▶</span>
            </div>
          </div>
        </div>
      </section>

      {/* 视频模态框 */}
      {isVideoOpen && (
        <div className="video-modal" onClick={handleBackdropClick}>
          <div className="modal-content">
            <button className="close-button" onClick={closeVideo}>
              ×
            </button>
            <video
              className="video-player"
              controls
              autoPlay
              onError={(e) => {
                console.error('视频加载失败:', e);
                alert('视频文件不存在，请检查视频文件路径');
              }}
            >
              <source src="/videos/achievement-demo.mp4" type="video/mp4" />
              您的浏览器不支持视频播放。
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoSection;
