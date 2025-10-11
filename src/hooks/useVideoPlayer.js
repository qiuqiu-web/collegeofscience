import { useState, useCallback, useEffect } from 'react';

export const useVideoPlayer = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const openVideo = useCallback(() => {
    setIsVideoOpen(true);
    setIsPlaying(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeVideo = useCallback(() => {
    setIsVideoOpen(false);
    setIsPlaying(false);
    document.body.style.overflow = 'auto';
  }, []);

  const toggleVideo = useCallback(() => {
    if (isVideoOpen) {
      closeVideo();
    } else {
      openVideo();
    }
  }, [isVideoOpen, openVideo, closeVideo]);

  // 键盘事件处理
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isVideoOpen) {
        closeVideo();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isVideoOpen, closeVideo]);

  return {
    isVideoOpen,
    isPlaying,
    openVideo,
    closeVideo,
    toggleVideo
  };
};
