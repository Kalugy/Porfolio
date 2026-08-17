import React, { createContext, useContext, useEffect, useState } from 'react';

const CinemaModeContext = createContext();

export const CinemaModeProvider = ({ children }) => {
  const [isCinemaMode, setIsCinemaMode] = useState(false);

  const toggleCinemaMode = () => {
    setIsCinemaMode((prev) => {
      const next = !prev;
      if (next) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return next;
    });
  };

  const exitCinemaMode = () => setIsCinemaMode(false);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsCinemaMode(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (!isCinemaMode) {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      return;
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isCinemaMode]);

  return (
    <CinemaModeContext.Provider value={{ isCinemaMode, toggleCinemaMode, exitCinemaMode }}>
      {children}
    </CinemaModeContext.Provider>
  );
};

export const useCinemaMode = () => {
  const context = useContext(CinemaModeContext);
  if (!context) {
    throw new Error('useCinemaMode must be used within a CinemaModeProvider');
  }
  return context;
};
