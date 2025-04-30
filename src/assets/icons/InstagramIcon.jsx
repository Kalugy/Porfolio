// src/components/InstagramIcon.jsx
import React from 'react';

const InstagramIcon = ({ size = 18, color = '#D62976', onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.8}
    stroke={color}
    width={size}
    height={size}
    className="cursor-pointer transition duration-150 ease-in-out"
    onClick={onClick}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 7.5h.008v.008H16.5V7.5z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8.75a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5z"
    />
  </svg>
);

export default InstagramIcon;
