import React, { useMemo } from 'react';

const Rain = ({ intensity = 50, speed = 'normal', opacity = 0.6, includeSun = false, includeStars = false }) => {
  const dropCount = intensity;

  const speedMultipliers = {
    slow: 1.5,
    normal: 1,
    fast: 0.6
  };

  const speedMultiplier = speedMultipliers[speed] || 1;

  // Deterministic but natural-looking star field
  const stars = useMemo(() => {
    if (!includeStars) return [];

    const hash = (n) => {
      const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
      return x - Math.floor(x);
    };

    return Array.from({ length: 90 }).map((_, i) => {
      const r1 = hash(i + 1);
      const r2 = hash(i + 17);
      const r3 = hash(i + 41);
      const r4 = hash(i + 73);
      const r5 = hash(i + 99);

      // Prefer upper sky, with a soft falloff toward the horizon
      const topBias = Math.pow(r2, 1.35);
      const sizeRoll = r3;
      let size;
      let layer;

      if (sizeRoll > 0.94) {
        size = 2.6 + r4 * 1.8;
        layer = 'bright';
      } else if (sizeRoll > 0.72) {
        size = 1.4 + r4 * 1.1;
        layer = 'mid';
      } else {
        size = 0.7 + r4 * 0.8;
        layer = 'dust';
      }

      const tones = [
        'rgba(255, 255, 255, 1)',
        'rgba(220, 235, 255, 1)',
        'rgba(200, 220, 255, 1)',
        'rgba(255, 248, 235, 1)',
      ];

      return {
        left: `${r1 * 100}%`,
        top: `${topBias * 58}%`,
        size,
        layer,
        color: tones[Math.floor(r5 * tones.length)],
        opacity: layer === 'bright' ? 0.75 + r1 * 0.25 : 0.25 + r2 * 0.55,
        delay: `${r3 * 8}s`,
        duration: `${3.5 + r4 * 7}s`,
        driftDelay: `${r5 * 12}s`,
        driftDuration: `${28 + r1 * 40}s`,
      };
    });
  }, [includeStars]);

  return (
    <>
      <div className="rain-container absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {includeStars && (
          <div className="starfield-haze" aria-hidden="true" />
        )}

        {includeStars && stars.map((star, i) => (
          <div
            key={`star-${i}`}
            className={`star star-${star.layer}`}
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              opacity: star.opacity,
              animationDelay: `${star.delay}, ${star.driftDelay}`,
              animationDuration: `${star.duration}, ${star.driftDuration}`,
              ['--star-glow']: star.color,
            }}
          />
        ))}

        {includeSun && <div className="sun" />}

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

        .starfield-haze {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0;
          background:
            radial-gradient(ellipse 80% 45% at 50% 0%, rgba(120, 140, 255, 0.12), transparent 70%),
            radial-gradient(ellipse 50% 30% at 20% 18%, rgba(180, 200, 255, 0.08), transparent 65%),
            radial-gradient(ellipse 40% 25% at 78% 12%, rgba(255, 220, 200, 0.06), transparent 60%);
        }

        :global(.dark) .starfield-haze {
          opacity: 1;
        }

        .star {
          position: absolute;
          border-radius: 50%;
          z-index: 0;
          will-change: transform, opacity;
          animation-name: star-twinkle, star-drift;
          animation-timing-function: ease-in-out, ease-in-out;
          animation-iteration-count: infinite, infinite;
          box-shadow: 0 0 4px 1px color-mix(in srgb, var(--star-glow) 45%, transparent);
        }

        .star-dust {
          filter: blur(0.2px);
        }

        .star-mid {
          box-shadow:
            0 0 6px 1px color-mix(in srgb, var(--star-glow) 55%, transparent),
            0 0 12px 2px color-mix(in srgb, var(--star-glow) 20%, transparent);
        }

        .star-bright {
          box-shadow:
            0 0 8px 2px color-mix(in srgb, var(--star-glow) 70%, transparent),
            0 0 18px 4px color-mix(in srgb, var(--star-glow) 30%, transparent);
        }

        .star-bright::before,
        .star-bright::after {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          background: linear-gradient(
            to right,
            transparent,
            color-mix(in srgb, var(--star-glow) 70%, transparent),
            transparent
          );
          opacity: 0.55;
        }

        .star-bright::before {
          width: 900%;
          height: 1px;
        }

        .star-bright::after {
          width: 1px;
          height: 900%;
          background: linear-gradient(
            to bottom,
            transparent,
            color-mix(in srgb, var(--star-glow) 70%, transparent),
            transparent
          );
        }

        :global(html:not(.dark)) .star,
        :global(html:not(.dark)) .star-bright::before,
        :global(html:not(.dark)) .star-bright::after {
          opacity: 0.12 !important;
        }

        @keyframes star-twinkle {
          0%, 100% {
            opacity: 0.25;
            transform: scale(0.85);
          }
          35% {
            opacity: 0.95;
            transform: scale(1);
          }
          55% {
            opacity: 0.45;
            transform: scale(0.92);
          }
          75% {
            opacity: 1;
            transform: scale(1.08);
          }
        }

        @keyframes star-drift {
          0%, 100% {
            translate: 0 0;
          }
          50% {
            translate: 4px -3px;
          }
        }

        .sun {
          position: absolute;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          z-index: 1;
          background: radial-gradient(circle at 30% 30%, #d0d0d0ff, #878787ff);
          box-shadow: 0 0 60px rgba(255, 255, 255, 1);
          animation: sun-move 350s ease-in-out infinite;
        }

        @keyframes sun-move {
          0% {
            left: 50%;
            top: 10%;
            transform: translateX(-50%);
            background-color: #d0d0d0;
            box-shadow: 0 0 80px rgba(255, 255, 255, 0.8);
            opacity: 1;
          }
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
          51% {
            left: -10%;
            top: 70%;
            opacity: 0;
            background-color: #f87171;
          }
          55% {
             opacity: 0;
          }
          60% {
             opacity: 1;
             left: 10%;
             top: 70%;
             background-color: #f87171;
          }
          75% {
             left: 20%;
             top: 30%;
             background-color: #fbbf24;
          }
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
