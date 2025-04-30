// src/components/SocialIcon.jsx
import React from 'react';

const SocialIcon = ({ path, size = 18, color = 'black', onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke={color}
    strokeWidth={1.8}
    width={size}
    height={size}
    className="cursor-pointer transition duration-150 ease-in-out"
    onClick={onClick}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

export default SocialIcon;
