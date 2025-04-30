// src/components/YouTubeIcon.jsx
import React from 'react';

const YouTubeIcon = ({ size = 24, color = '#FF0000', onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className="cursor-pointer transition duration-150 ease-in-out"
    onClick={onClick}
  >
    <path
      fill={color}
      d="M23.498 6.186a2.86 2.86 0 00-2.012-2.027C19.878 3.615 12 3.615 12 3.615s-7.878 0-9.486.544A2.86 2.86 0 00.502 6.186 29.247 29.247 0 000 12c.016 1.956.183 3.902.502 5.814a2.86 2.86 0 002.012 2.027c1.592.542 9.486.542 9.486.542s7.878 0 9.486-.542a2.86 2.86 0 002.012-2.027c.319-1.912.486-3.858.502-5.814a29.243 29.243 0 00-.502-5.814zm-13.94 9.602V8.212l6.35 3.788-6.35 3.788z"
    />
  </svg>
);

export default YouTubeIcon;
