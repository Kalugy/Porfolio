import React from 'react';
import { Outlet } from 'react-router-dom';
import { FaFilm } from 'react-icons/fa';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import { useCinemaMode } from './context/CinemaModeContext';

export default function Layout() {
  const { isCinemaMode, toggleCinemaMode } = useCinemaMode();

  return (
    <div className="text-base md:text-lg">
      <Navbar />

      <div>
        <Outlet />
      </div>

      <Footer />

      {isCinemaMode && (
        <button
          type="button"
          onClick={toggleCinemaMode}
          aria-label="Exit sky view"
          title="Exit sky view (Esc)"
          className="fixed bottom-6 right-6 z-[60] p-3 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md shadow-lg transition-all duration-300"
        >
          <FaFilm className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
