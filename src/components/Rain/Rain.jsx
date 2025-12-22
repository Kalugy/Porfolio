import React, { useMemo } from 'react';

const Rain = ({ intensity = 50, speed = 'normal', opacity = 0.6, includeSun = false, includeStars = false }) => {
  // Adjust number of drops based on intensity prop
  const dropCount = intensity;
  
  // Speed multipliers
  const speedMultipliers = {
    slow: 1.5,
    normal: 1,
    fast: 0.6
  };
  
  const speedMultiplier = speedMultipliers[speed] || 1;

  // Generate stars deterministically
  const stars = useMemo(() => {
    if (!includeStars) return [];
    return Array.from({ length: 40 }).map((_, i) => ({
      left: `${(i * 137) % 100}%`,
      top: `${(i * 293) % 45}%`, // Top 45% of the screen
      animationDelay: `${(i * 0.7) % 4}s`,
      size: (i % 2) + 2 // 2px or 3px
    }));
  }, [includeStars]);

  return (
    <>
      <div className="rain-container absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        
        {/* Stars */}
        {includeStars && stars.map((star, i) => (
          <div
            key={`star-${i}`}
            className="star"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: star.animationDelay
            }}
          />
        ))}

        {/* Sun */}
        {includeSun && <div className="sun" />}

        {/* Rain Drops */}
        {Array.from({ length: dropCount }).map((_, i) => (
          <div
            key={`drop-${i}`}
            className="rain-drop"
            style={{
              left: `${(i * (100 / dropCount)) % 100}%`,
              animationDelay: `${(i * 0.1) % 2}s`,
              animationDuration: `${(0.5 + (i % 3) * 0.3) * speedMultiplier}s`,
              opacity: opacity
            }}
          />
        ))}
      </div>
      <style jsx>{`
        .rain-drop {
          position: absolute;
          width: 2px;
          height: 20px;
          background: linear-gradient(to bottom, 
            rgba(99, 102, 241, 0.8), 
            rgba(99, 102, 241, 0.4)
          );
          border-radius: 2px;
          animation: rain-fall linear infinite;
          top: -20px;
        }

        :global(.dark) .rain-drop {
          background: linear-gradient(to bottom, 
            rgba(129, 140, 248, 0.8), 
            rgba(129, 140, 248, 0.4)
          );
        }

        /* Stars CSS */
        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          opacity: 0.8;
          animation: twinkle 4s ease-in-out infinite;
          z-index: -2;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); box-shadow: 0 0 4px rgba(255, 255, 255, 0.8); }
        }

        /* Sun CSS */
        .sun {
          position: absolute;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          z-index: -1;
          background: radial-gradient(circle at 30% 30%, #d0d0d0ff, #878787ff);
          box-shadow: 0 0 60px rgba(255, 255, 255, 1);
          animation: sun-move 350s ease-in-out infinite;
        }

        @keyframes sun-move {
          /* Start at Noon (Middle) */
          0% {
            left: 50%;
            top: 10%;
            transform: translateX(-50%);
            background-color: #d0d0d0; /* Matches user's noon/moon color preference or bright noon */
            box-shadow: 0 0 80px rgba(255, 255, 255, 0.8);
            opacity: 1;
          }
          /* Move to Sunset (Right) */
          25% {
            left: 80%;
            top: 30%;
            background-color: #f87171;
            opacity: 1;
          }
          45% {
             opacity: 1;
          }
          50% {
            left: 110%;
            top: 70%;
            background-color: #ef4444;
            box-shadow: 0 0 20px rgba(239, 68, 68, 0.5);
            opacity: 0;
          }
          /* Hidden Return to Sunrise (Left) */
          51% {
            left: -10%;
            top: 70%;
            opacity: 0;
            background-color: #f87171;
          }
          /* Wait / Reappear delay if needed, here we just rise */
          55% {
             opacity: 0;
          }
          60% {
             opacity: 1;
             left: 10%;
             top: 70%; 
             background-color: #f87171; /* Rise color */
          }
          75% {
             left: 20%;
             top: 30%;
             background-color: #fbbf24;
          }
          /* Back to Noon (Middle) */
          100% {
            left: 50%;
            top: 10%;
            transform: translateX(-50%);
            background-color: #d0d0d0; 
            box-shadow: 0 0 80px rgba(255, 255, 255, 0.8);
            opacity: 1;
          }
        }

        @keyframes rain-fall {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateY(calc(100vh + 20px)) translateX(10px);
            opacity: 0.3;
          }
        }
      `}</style>
    </>
  );
};

export default Rain;


