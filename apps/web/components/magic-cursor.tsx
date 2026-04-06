"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function MagicCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 450, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "A" ||
        target.tagName === "BUTTON"
      );
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={cursorRef}
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
      className="pointer-events-none fixed left-0 top-0 z-[100] h-8 w-8 mix-blend-difference hidden md:block"
    >
      <motion.div
        animate={{
          scale: isPointer ? 2.8 : 1,
          backgroundColor: isPointer ? "rgba(231,191,97,0.6)" : "rgba(255,255,255,1)",
          boxShadow: isPointer ? "0 0 20px rgba(231,191,97,0.4)" : "none",
        }}
        transition={{ type: "spring", damping: 12, stiffness: 300 }}
        className="h-full w-full rounded-full border border-white/30"
      />
      
      {/* Follower Core (snappier) */}
      <motion.div
        animate={{
          scale: isPointer ? 0.6 : 0.3,
          opacity: isPointer ? 1 : 0.6,
        }}
        className="absolute inset-2 rounded-full bg-[var(--gold)] blur-[2px]"
      />
    </motion.div>
  );
}
