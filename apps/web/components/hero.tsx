"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MagicLogo } from "@/components/magic-logo";
import { OrbScene } from "@/components/orb-scene";

const orbitSignals = [
  "Multi-agent reasoning",
  "Cross-domain retrieval",
  "Autonomous tool synthesis",
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} className="relative px-6 pb-16 pt-8 md:px-10 md:pb-24 md:pt-10 overflow-hidden">
      {/* Background Floating Elements */}
      <motion.div style={{ y: y1, opacity }} className="pointer-events-none absolute left-[-10%] top-[20%] h-[600px] w-[600px] rounded-full bg-[var(--gold)] opacity-[0.03] blur-[120px]" />
      <motion.div style={{ y: y2, opacity }} className="pointer-events-none absolute right-[-5%] top-[40%] h-[700px] w-[700px] rounded-full bg-[var(--aurora-b)] opacity-[0.05] blur-[150px]" />

      <div className="mx-auto max-w-7xl">
        <div className="glass-panel relative overflow-hidden rounded-[48px] border-white/10 px-6 py-12 md:px-16 md:py-24 shadow-[0_0_100px_rgba(0,0,0,0.4)]">
          {/* Animated border glow */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-40" />
          
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center xl:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 py-1.5 pl-1.5 pr-5 text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]"
              >
                <MagicLogo className="h-8 w-8" shimmer={true} />
                <span className="shimmer-text">Engineered for High-Signal Output</span>
              </motion.div>

              <h1 className="font-[family-name:var(--font-display)] text-5xl uppercase leading-[0.85] tracking-[-0.04em] text-white md:text-[5.5rem] lg:text-[7rem]">
                Intelligence <br />
                <span className="text-[var(--gold)] text-glow-gold">Orchestrated.</span>
              </h1>

              <p className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-[var(--muted)] md:text-xl opacity-90">
                Magic builds living systems for teams that demand leverage. Cinematic frontends, agentic backends, and infrastructure that feels like magic.
              </p>

              <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center">
                <a
                  href="#portfolio"
                  className="group relative overflow-hidden rounded-full bg-[var(--gold)] px-10 py-5 text-sm font-bold uppercase tracking-[0.25em] text-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(231,191,97,0.3)]"
                >
                  <span className="relative z-10">Explore Lab →</span>
                  <div className="absolute inset-0 -translate-x-full bg-white opacity-20 transition-transform duration-500 group-hover:translate-x-0" />
                </a>
                <motion.a
                  whileHover={{ x: 5 }}
                  href="#about"
                  className="text-xs uppercase tracking-[0.3em] text-white/60 transition-colors hover:text-white flex items-center gap-2"
                >
                  Meet the Architect
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              onMouseMove={(e) => {
                 const rect = e.currentTarget.getBoundingClientRect();
                 const x = e.clientX - rect.left;
                 const y = e.clientY - rect.top;
                 e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                 e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
              }}
              className="spotlight-card relative h-full min-h-[580px] rounded-[48px] border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-1 shadow-[0_0_100px_rgba(231,191,97,0.1)] lg:min-h-[640px]"
            >
              <div className="absolute inset-0 rounded-[48px] bg-[radial-gradient(circle_at_center,rgba(231,191,97,0.1),transparent_70%)]" />
              <OrbScene />
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-6 left-6 right-6 rounded-[32px] border border-white/15 bg-black/60 p-6 backdrop-blur-3xl shadow-2xl md:bottom-8 md:left-8 md:right-8 md:p-8"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 animate-pulse rounded-full bg-[var(--gold)] shadow-[0_0_12px_var(--gold)]" />
                      <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-[var(--gold)]">
                        Active Node
                      </span>
                    </div>
                    <span className="text-[9px] uppercase tracking-widest text-white/30">v4.2.0 Core</span>
                  </div>

                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-3xl uppercase leading-none text-white lg:text-4xl">
                      Magic Studio <span className="text-[var(--gold)]">Core</span>
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-[var(--muted)] opacity-80 lg:text-base">
                      Simulating agentic reasoning, cross-domain retrieval, and autonomous tool synthesis through a refined orchestration layer.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {orbitSignals.map((signal, index) => (
                      <motion.div
                        key={signal}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 + index * 0.1 }}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] shadow-[0_0_8px_rgba(231,191,97,0.5)]" />
                        <span className="text-[10px] uppercase tracking-[0.14em] text-white/70">
                          {signal}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
