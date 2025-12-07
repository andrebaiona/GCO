'use client';

import { useEffect, useState } from 'react';

export default function TimelineProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const timelineSection = document.getElementById('timeline-section');
      if (!timelineSection) return;

      const timelineTop = timelineSection.offsetTop;
      const timelineHeight = timelineSection.offsetHeight;
      const timelineBottom = timelineTop + timelineHeight;
      
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const currentPosition = scrollTop + windowHeight / 2;

      if (currentPosition >= timelineTop && currentPosition <= timelineBottom) {
        const progressInSection = (currentPosition - timelineTop) / timelineHeight;
        const progress = Math.min(Math.max(progressInSection * 100, 0), 100);
        setScrollProgress(progress);
      } else if (currentPosition < timelineTop) {
        setScrollProgress(0);
      } else if (currentPosition > timelineBottom) {
        setScrollProgress(100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="absolute left-1/2 transform -translate-x-0.5 top-0 w-1 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-800 transition-all duration-300 ease-out"
      style={{
        height: `${scrollProgress}%`,
        boxShadow: '0 0 10px rgba(59, 130, 246, 0.6)'
      }}
    />
  );
}

