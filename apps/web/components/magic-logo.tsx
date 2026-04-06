"use client";

import { motion } from "framer-motion";

type MagicLogoProps = {
  className?: string;
  glow?: boolean;
  shimmer?: boolean;
};

export function MagicLogo({ className = "h-10 w-10", glow = true, shimmer = true }: MagicLogoProps) {
  return (
    <div className={`relative ${className}`}>
      {glow ? (
        <motion.div 
          animate={shimmer ? { opacity: [0.15, 0.35, 0.15], scale: [0.95, 1.05, 0.95] } : {}}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-[15%] rounded-full bg-[var(--gold)]/20 blur-xl" 
        />
      ) : null}
      <svg
        viewBox="0 0 120 120"
        className={`relative h-full w-full drop-shadow-[0_0_20px_rgba(173,222,255,0.28)] ${shimmer ? "animate-pulse-slow" : ""}`}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="magic-stroke" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#f9f7ff" />
            <stop offset="45%" stopColor="#d7f1ff" />
            <stop offset="100%" stopColor="#d7bfff" />
          </linearGradient>
          <linearGradient id="magic-fill-a" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#b8f0ff" />
            <stop offset="100%" stopColor="#d6c5ff" />
          </linearGradient>
          <linearGradient id="magic-fill-b" x1="100%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#9fd8ff" />
            <stop offset="100%" stopColor="#edf4ff" />
          </linearGradient>
          <filter id="magic-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#fef3c7" floodOpacity="0.38" />
          </filter>
        </defs>

        <motion.g 
          filter="url(#magic-glow)"
          animate={shimmer ? { rotate: [0, 3, -3, 0] } : {}}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <polygon
            points="60,4 73,27 101,19 92,46 116,60 92,74 101,101 73,93 60,116 47,93 19,101 28,74 4,60 28,46 19,19 47,27"
            fill="url(#magic-fill-a)"
            stroke="url(#magic-stroke)"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <polygon
            points="60,15 69,35 88,29 82,48 100,60 82,72 88,91 69,85 60,105 51,85 32,91 38,72 20,60 38,48 32,29 51,35"
            fill="url(#magic-fill-b)"
            opacity="0.7"
          />
          <path d="M60 15 L60 105" stroke="#ffffff" strokeOpacity="0.45" strokeWidth="1.5" />
          <path d="M20 60 L100 60" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.5" />
          <path d="M32 29 L88 91" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="1.2" />
          <path d="M88 29 L32 91" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="1.2" />
        </motion.g>
      </svg>
    </div>
  );
}
