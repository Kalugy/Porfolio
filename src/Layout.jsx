import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import CinematicIntro from './components/Home/CinematicIntro';
import { useCinemaMode } from './context/CinemaModeContext';

export default function Layout() {
  const { isCinemaMode, exitCinemaMode } = useCinemaMode();
  const [showStory, setShowStory] = useState(false);
  const [storySession, setStorySession] = useState(0);

  useEffect(() => {
    if (!isCinemaMode) return;
    setShowStory(true);
    setStorySession((session) => session + 1);
  }, [isCinemaMode]);

  useEffect(() => {
    if (isCinemaMode || !showStory) return undefined;
    const timer = window.setTimeout(() => setShowStory(false), 1000);
    return () => window.clearTimeout(timer);
  }, [isCinemaMode, showStory]);

  return (
    <div className="text-base md:text-lg">
      <Navbar />

      <div>
        <Outlet />
      </div>

      <Footer />

      {showStory && (
        <div
          className={`fixed inset-0 z-[80] transition-opacity duration-1000 ${
            isCinemaMode ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <CinematicIntro key={storySession} active={isCinemaMode} onComplete={exitCinemaMode} />
        </div>
      )}
    </div>
  );
}
