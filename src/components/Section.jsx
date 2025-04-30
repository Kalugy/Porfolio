import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { useRef } from 'react';

export default function Section({ children }) {
  const ref = useRef();
  const isVisible = useIntersectionObserver(ref, { threshold: 0.4 });

  return (
    <div
      ref={ref}
      className={`transition-transform transition-opacity duration-[1200ms] ease-in-out transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-8 scale-95'
      }`}
    >
      {children}
    </div>
  );
}