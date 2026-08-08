import React from 'react';

const Logo = ({ className = '', size = 50 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.45))' }}
    >
      {/* Outer Circle Ring */}
      <circle cx="50" cy="50" r="46" fill="#11131c" stroke="#d32f2f" strokeWidth="2.5" />
      
      {/* Red Accent Ring */}
      <circle cx="50" cy="50" r="41" stroke="#d32f2f" strokeWidth="1" strokeDasharray="3 3" />

      {/* Path for text alignment (Hidden) */}
      <path
        id="textPathTop"
        d="M 16 50 A 34 34 0 0 1 84 50"
        fill="none"
      />
      <path
        id="textPathBottom"
        d="M 84 50 A 34 34 0 0 1 16 50"
        fill="none"
      />

      {/* Circular Text */}
      <text fill="#ffffff" fontSize="6.2" fontWeight="700" fontFamily="'Outfit', sans-serif" letterSpacing="0.5">
        <textPath href="#textPathTop" startOffset="50%" textAnchor="middle">
          AL-MARSOOS SECURITY
        </textPath>
      </text>
      
      <text fill="#d32f2f" fontSize="5.8" fontWeight="600" fontFamily="'Outfit', sans-serif" letterSpacing="0.5">
        <textPath href="#textPathBottom" startOffset="50%" textAnchor="middle">
          SERVICES (PVT) LTD.
        </textPath>
      </text>

      {/* Inner circular background */}
      <circle cx="50" cy="50" r="26" fill="#0a0b0e" stroke="#2d3748" strokeWidth="1" />

      {/* High-Fidelity Eagle Silhouette (representing the AMS emblem) */}
      <g transform="translate(32, 33) scale(0.7)">
        {/* Left Wing */}
        <path
          d="M 2 12 C 0 8, 4 3, 10 1 C 12 6, 9 9, 14 11 C 18 10, 16 6, 21 4 C 23 8, 20 12, 23 15 C 26 13, 27 10, 31 10 C 31 14, 27 19, 23 23 C 18 25, 14 22, 10 24 C 6 26, 4 28, 1 30 C 2 24, 3 18, 2 12 Z"
          fill="#ffffff"
        />
        {/* Right Wing */}
        <path
          d="M 49 12 C 51 8, 47 3, 41 1 C 39 6, 42 9, 37 11 C 33 10, 35 6, 30 4 C 28 8, 31 12, 28 15 C 25 13, 24 10, 20 10 C 20 14, 24 19, 28 23 C 33 25, 37 22, 41 24 C 45 26, 47 28, 50 30 C 49 24, 48 18, 49 12 Z"
          fill="#ffffff"
        />
        {/* Head / Beak */}
        <path
          d="M 23 18 C 23 15, 25 10, 28 10 C 29 10, 30 11, 29 12 C 28 13, 27 14, 28 15 C 29 16, 29 15, 30 14 C 31 13, 33 14, 31 17 C 29 19, 27 20, 25 21 C 24 21, 23 20, 23 18 Z"
          fill="#ffffff"
        />
        {/* Eagle Body & Tail */}
        <path
          d="M 22 22 L 20 33 L 25 36 L 31 36 L 36 33 L 34 22 C 32 24, 29 25, 27 25 C 25 25, 23 24, 22 22 Z"
          fill="#d32f2f"
        />
        {/* Feet / Talons */}
        <path
          d="M 21 34 L 18 37 M 23 35 L 21 39 M 30 35 L 32 39 M 32 34 L 35 37"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>

      {/* Bold "AMS" Branding in Center Bottom */}
      <rect x="36" y="67" width="28" height="9" rx="2.5" fill="#d32f2f" />
      <text x="50" y="74" fill="#ffffff" fontSize="7.2" fontWeight="800" fontFamily="'Outfit', sans-serif" textAnchor="middle">
        AMS
      </text>
    </svg>
  );
};

export default Logo;
