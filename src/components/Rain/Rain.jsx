import React from 'react';

const Rain = ({ intensity = 50, speed = 'normal', opacity = 0.6 }) => {
  // Adjust number of drops based on intensity prop
  const dropCount = intensity;
  
  // Speed multipliers
  const speedMultipliers = {
    slow: 1.5,
    normal: 1,
    fast: 0.6
  };
  
  const speedMultiplier = speedMultipliers[speed] || 1;

  return (
    <>
      <div className="rain-container absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {Array.from({ length: dropCount }).map((_, i) => (
          <div
            key={i}
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

