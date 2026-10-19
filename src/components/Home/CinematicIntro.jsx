import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const SCENE_MS = 4000;
const CHAPTER_COUNT = 4;

const sceneIds = ['welcome', 'beginning', 'explorer', 'creator', 'continues'];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return reduced;
}

function Stars() {
  const stars = useMemo(
    () =>
      Array.from({ length: 42 }, (_, i) => ({
        left: `${(i * 137) % 100}%`,
        top: `${(i * 53) % 62}%`,
        size: (i % 3) + 1,
        delay: `${(i % 6) * 0.45}s`,
        opacity: 0.35 + (i % 5) * 0.12,
      })),
    []
  );

  return stars.map((star, i) => (
    <span
      key={i}
      className="cine-star"
      style={{
        left: star.left,
        top: star.top,
        width: star.size,
        height: star.size,
        animationDelay: star.delay,
        opacity: star.opacity,
      }}
    />
  ));
}

function RainStreaks() {
  return Array.from({ length: 28 }, (_, i) => (
    <span
      key={i}
      className="cine-rain"
      style={{
        left: `${(i * 37) % 100}%`,
        animationDelay: `${(i % 8) * 0.18}s`,
        animationDuration: `${1 + (i % 4) * 0.22}s`,
      }}
    />
  ));
}

function Moon() {
  return <div className="cine-moon" aria-hidden="true" />;
}

function Mountains({ className = '' }) {
  return (
    <svg className={`absolute inset-x-0 bottom-0 h-[42%] w-full ${className}`} viewBox="0 0 1440 420" preserveAspectRatio="none" aria-hidden="true">
      <path fill="currentColor" d="M0 420 L0 250 L180 180 L340 260 L520 120 L700 230 L860 90 L1040 210 L1220 140 L1440 240 L1440 420 Z" opacity="0.55" />
      <path fill="currentColor" d="M0 420 L0 300 L220 230 L420 310 L640 190 L860 300 L1080 170 L1280 280 L1440 220 L1440 420 Z" />
    </svg>
  );
}

function Forest() {
  return (
    <svg className="absolute inset-x-0 bottom-0 h-[58%] w-full text-[#07110c]" viewBox="0 0 1440 500" preserveAspectRatio="none" aria-hidden="true">
      <path fill="currentColor" opacity="0.55" d="M0 500 L0 280 L40 280 L70 160 L100 280 L160 280 L190 120 L230 280 L300 280 L330 180 L370 280 L440 280 L480 90 L530 280 L620 280 L660 150 L710 280 L800 280 L840 110 L890 280 L980 280 L1020 170 L1070 280 L1160 280 L1210 80 L1270 280 L1360 280 L1400 190 L1440 280 L1440 500 Z" />
      <path fill="currentColor" d="M0 500 L0 360 L90 360 L130 220 L180 360 L280 360 L330 180 L390 360 L500 360 L560 140 L630 360 L760 360 L820 200 L890 360 L1020 360 L1080 160 L1160 360 L1280 360 L1340 210 L1440 360 L1440 500 Z" />
    </svg>
  );
}

function LightRays() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <span className="cine-ray left-[18%]" />
      <span className="cine-ray left-[42%] opacity-70" />
      <span className="cine-ray left-[67%]" />
    </div>
  );
}

function Particles() {
  const dots = useMemo(
    () =>
      Array.from({ length: 48 }, (_, i) => ({
        left: `${4 + ((i * 29) % 92)}%`,
        top: `${6 + ((i * 19) % 78)}%`,
        delay: `${(i % 10) * 0.22}s`,
        size: (i % 4) + 1,
        duration: `${3.2 + (i % 5) * 0.6}s`,
      })),
    []
  );

  return dots.map((dot, i) => (
    <span
      key={i}
      className="cine-particle"
      style={{
        left: dot.left,
        top: dot.top,
        width: dot.size,
        height: dot.size,
        animationDelay: dot.delay,
        animationDuration: dot.duration,
      }}
    />
  ));
}

function CodePanels() {
  const panels = [
    { left: '8%', top: '18%', width: '18%', delay: '0s' },
    { left: '72%', top: '22%', width: '16%', delay: '0.6s' },
    { left: '14%', top: '62%', width: '14%', delay: '1.1s' },
    { left: '76%', top: '64%', width: '15%', delay: '0.3s' },
  ];

  return panels.map((panel) => (
    <div
      key={panel.left}
      className="cine-panel"
      style={{ left: panel.left, top: panel.top, width: panel.width, animationDelay: panel.delay }}
    >
      <span />
      <span />
      <span />
      <span />
    </div>
  ));
}

function CreatorScene() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#05060c] cine-drift">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(99,102,241,0.22),transparent_36%)]" />
      <div className="cine-grid" />
      <Particles />
      <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path d="M18 28 L50 46 L82 24" fill="none" stroke="rgba(165,180,252,0.35)" strokeWidth="0.15" />
        <path d="M22 70 L50 54 L78 72" fill="none" stroke="rgba(165,180,252,0.28)" strokeWidth="0.15" />
        <path d="M50 18 L50 78" fill="none" stroke="rgba(129,140,248,0.2)" strokeWidth="0.12" />
      </svg>
      <CodePanels />
      <div className="absolute left-1/2 top-[42%] w-[min(46vw,280px)] -translate-x-1/2 -translate-y-1/2">
        <div className="cine-block mx-auto h-10 w-16 border border-indigo-200/40 bg-indigo-400/10 shadow-[0_0_40px_rgba(129,140,248,0.35)]" />
        <div className="cine-block mx-auto mt-2 h-14 w-28 border border-indigo-200/30 bg-indigo-500/10" />
        <div className="cine-block mx-auto mt-2 h-8 w-40 border border-indigo-100/25 bg-white/5" />
        <div className="mx-auto mt-3 h-24 w-24 rounded-full border border-indigo-200/20 shadow-[0_0_70px_rgba(99,102,241,0.28)]" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#05060c] via-[#05060c]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.65)]" />
    </div>
  );
}

function SunriseScene() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#1b2436]">
      <div className="cine-sunrise absolute inset-0" />
      <div className="absolute inset-x-0 top-0 h-1/3 bg-[radial-gradient(circle_at_50%_0%,rgba(255,220,170,0.18),transparent_60%)]" />
      <svg className="absolute inset-x-0 top-[8%] h-40 w-full text-white/25" viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden="true">
        <ellipse cx="280" cy="90" rx="180" ry="28" fill="currentColor" />
        <ellipse cx="420" cy="80" rx="120" ry="20" fill="currentColor" opacity="0.7" />
        <ellipse cx="1080" cy="70" rx="210" ry="30" fill="currentColor" />
        <ellipse cx="1240" cy="96" rx="140" ry="18" fill="currentColor" opacity="0.65" />
      </svg>
      <div className="cine-sun-glow" />
      <div className="cine-sun" />
      <div className="cine-mist cine-mist-far" />
      <svg className="absolute inset-x-0 bottom-[18%] h-[34%] w-full text-[#c47a62]" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" opacity="0.55" d="M0 320 L0 180 L200 120 L380 190 L560 80 L760 170 L960 60 L1160 150 L1440 90 L1440 320 Z" />
      </svg>
      <div className="cine-mist cine-mist-mid" />
      <svg className="absolute inset-x-0 bottom-0 h-[46%] w-full text-[#7a3d32]" viewBox="0 0 1440 380" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0 380 L0 210 L160 150 L340 230 L520 90 L720 200 L900 70 L1100 190 L1280 120 L1440 200 L1440 380 Z" />
      </svg>
      <svg className="absolute inset-x-0 bottom-0 h-[28%] w-full text-[#2a160f]" viewBox="0 0 1440 260" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0 260 L0 150 L180 110 L320 170 L520 60 L700 150 L880 40 L1080 140 L1260 90 L1440 160 L1440 260 Z" />
      </svg>
      <div className="cine-mist cine-mist-near" />
    </div>
  );
}

function SceneBackground({ id }) {
  if (id === 'welcome') {
    return (
      <div className="absolute inset-0 bg-[#070b14] cine-drift">
        <Stars />
        <Moon />
        <RainStreaks />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
    );
  }

  if (id === 'beginning') {
    return (
      <div className="absolute inset-0 bg-[#0a1020] text-[#10182b] cine-drift">
        <Stars />
        <Moon />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(80,100,160,0.25),transparent_42%)]" />
        <Mountains />
      </div>
    );
  }

  if (id === 'explorer') {
    return (
      <div className="absolute inset-0 bg-[#07140f] cine-drift">
        <LightRays />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(180,220,170,0.16),transparent_46%)]" />
        <Forest />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050a08] via-[#050a08]/40 to-transparent" />
      </div>
    );
  }

  if (id === 'creator') {
    return <CreatorScene />;
  }

  return <SunriseScene />;
}

export default function CinematicIntro({ active = true, onComplete }) {
  const { t } = useLanguage();
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const finished = useRef(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const chapters = t('home.story.chapters');
  const chapterTexts = Array.isArray(chapters) ? chapters : [];
  const sceneId = sceneIds[Math.min(index, sceneIds.length - 1)];
  const isWelcome = sceneId === 'welcome';
  const chapterNumber = isWelcome ? 0 : index;

  const finish = () => {
    if (finished.current) return;
    finished.current = true;
    onCompleteRef.current();
  };

  useEffect(() => {
    if (!active || finished.current) return undefined;
    const delay = reduced ? 2800 : SCENE_MS;
    const timer = window.setTimeout(() => {
      if (index >= sceneIds.length - 1) {
        finish();
        return;
      }
      setIndex((current) => current + 1);
    }, delay);
    return () => window.clearTimeout(timer);
  }, [index, active, reduced]);

  const title = isWelcome ? t('home.story.welcomeTitle') : chapterTexts[chapterNumber - 1];
  const progress = t('home.story.progress')
    .replace('{current}', String(chapterNumber))
    .replace('{total}', String(CHAPTER_COUNT));

  return (
    <div className="relative h-full w-full overflow-hidden bg-black text-white">
      {sceneIds.map((id) => (
        <div
          key={id}
          className={`absolute inset-0 transition-opacity duration-1000 ${id === sceneId ? 'opacity-100' : 'opacity-0'}`}
        >
          <SceneBackground id={id} />
        </div>
      ))}

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={sceneId}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: reduced ? 0.2 : 0.8 }}
            className="max-w-3xl text-center"
          >
            {!isWelcome && (
              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-white/60">
                {String(chapterNumber).padStart(2, '0')}
              </p>
            )}
            <h2 className="text-3xl font-light leading-snug tracking-wide sm:text-4xl md:text-5xl">
              {title}
            </h2>
            {isWelcome && (
              <p className="mx-auto mt-5 max-w-xl text-base text-white/75 sm:text-lg">
                {t('home.story.welcomeSubtitle')}
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between px-5 py-5 sm:px-8">
        <p className="text-xs tracking-wide text-white/60 sm:text-sm">
          {isWelcome ? '' : progress}
        </p>
        <button
          type="button"
          onClick={finish}
          className="rounded-full border border-white/25 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/80 transition hover:bg-white/10 sm:text-sm"
        >
          {t('home.story.skip')}
        </button>
      </div>

      <style>{`
        .cine-star {
          position: absolute;
          border-radius: 9999px;
          background: white;
          animation: cine-twinkle 3.6s ease-in-out infinite;
        }
        .cine-moon {
          position: absolute;
          right: 16%;
          top: 12%;
          width: 4.5rem;
          height: 4.5rem;
          border-radius: 9999px;
          background: #f6f1e4;
          box-shadow: 0 0 70px 16px rgba(246, 241, 228, 0.35);
        }
        .cine-rain {
          position: absolute;
          top: -12%;
          width: 1px;
          height: 18px;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.55));
          animation: cine-fall linear infinite;
        }
        .cine-ray {
          position: absolute;
          top: -10%;
          width: 70px;
          height: 80%;
          background: linear-gradient(to bottom, rgba(255,255,255,0.16), transparent);
          transform: rotate(12deg);
          filter: blur(2px);
          animation: cine-ray 8s ease-in-out infinite;
        }
        .cine-particle {
          position: absolute;
          border-radius: 9999px;
          background: rgba(224, 231, 255, 0.9);
          box-shadow: 0 0 10px rgba(165, 180, 252, 0.9);
          animation: cine-gather 4s ease-in-out infinite;
        }
        .cine-grid {
          position: absolute;
          left: -20%;
          right: -20%;
          bottom: -8%;
          height: 52%;
          background-image:
            linear-gradient(rgba(129, 140, 248, 0.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(129, 140, 248, 0.18) 1px, transparent 1px);
          background-size: 48px 48px;
          transform: perspective(280px) rotateX(62deg);
          transform-origin: center top;
          mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
        }
        .cine-panel {
          position: absolute;
          padding: 10px 12px;
          border: 1px solid rgba(199, 210, 254, 0.28);
          border-radius: 8px;
          background: rgba(15, 18, 35, 0.55);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.35);
          animation: cine-float 6s ease-in-out infinite;
        }
        .cine-panel span {
          display: block;
          height: 3px;
          margin-top: 6px;
          border-radius: 99px;
          background: rgba(199, 210, 254, 0.45);
        }
        .cine-panel span:nth-child(1) { width: 70%; margin-top: 0; }
        .cine-panel span:nth-child(2) { width: 92%; }
        .cine-panel span:nth-child(3) { width: 54%; }
        .cine-panel span:nth-child(4) { width: 78%; }
        .cine-block { animation: cine-float 5.5s ease-in-out infinite; }
        .cine-sunrise {
          background:
            linear-gradient(to top, #ffb067 0%, #f08a4b 16%, #d65a58 34%, #8a3d62 52%, #3d3a66 74%, #1b2436 100%);
        }
        .cine-sun-glow {
          position: absolute;
          left: 50%;
          bottom: 24%;
          width: 18rem;
          height: 18rem;
          transform: translateX(-50%);
          border-radius: 9999px;
          background: radial-gradient(circle, rgba(255, 214, 150, 0.55), rgba(255, 140, 70, 0.15) 46%, transparent 70%);
        }
        .cine-sun {
          position: absolute;
          left: 50%;
          bottom: 30%;
          width: 6.5rem;
          height: 6.5rem;
          border-radius: 9999px;
          transform: translateX(-50%);
          background: radial-gradient(circle at 40% 40%, #fff6df, #ffd27a 55%, #f0a04a);
          box-shadow: 0 0 40px 8px rgba(255, 210, 140, 0.7);
        }
        .cine-mist {
          position: absolute;
          left: -10%;
          width: 120%;
          height: 70px;
          border-radius: 9999px;
          background: rgba(255, 228, 200, 0.16);
          filter: blur(10px);
        }
        .cine-mist-far { bottom: 38%; opacity: 0.45; }
        .cine-mist-mid { bottom: 24%; opacity: 0.35; height: 54px; }
        .cine-mist-near { bottom: 8%; opacity: 0.28; height: 80px; }
        .cine-drift {
          animation: cine-drift 20s ease-in-out infinite alternate;
        }
        @keyframes cine-twinkle {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 1; }
        }
        @keyframes cine-fall {
          from { transform: translateY(0); }
          to { transform: translateY(110vh); }
        }
        @keyframes cine-ray {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.55; }
        }
        @keyframes cine-gather {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(12px, -10px); }
        }
        @keyframes cine-drift {
          from { transform: scale(1); }
          to { transform: scale(1.06); }
        }
        @keyframes cine-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .cine-star, .cine-rain, .cine-ray, .cine-particle, .cine-drift, .cine-panel, .cine-block {
            animation: none !important;
          }
        }
        @media (min-width: 640px) {
          .cine-moon { width: 6rem; height: 6rem; }
        }
      `}</style>
    </div>
  );
}
