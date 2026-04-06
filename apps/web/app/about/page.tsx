"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AboutOwner } from "@/components/about-owner";
import { ExperienceLog } from "@/components/experience-log";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen pt-24 overflow-hidden selection:bg-[var(--gold)] selection:text-black">
      {/* Cinematic Background for About Page */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(231,191,97,0.08),_transparent_60%)]" />
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(ellipse_at_top_right,_rgba(20,75,97,0.1),_transparent_60%)]" />

      {/* Floating Particles specific to About page */}
      <div className="pointer-events-none fixed inset-0 -z-5 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -60, 0],
              x: [0, 30, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-[var(--gold)]/5 blur-3xl"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-6 py-12 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-7xl"
        >
          <div className="mb-12 border-b border-white/5 pb-12">
            <h1 className="font-[family-name:var(--font-display)] text-5xl uppercase tracking-tighter md:text-8xl">
              Lead <span className="text-[var(--gold)]">Architect.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[var(--muted)] opacity-80">
              The professional history, tech-stack philosophy, and personal identity driving the Magic Studio.
            </p>
          </div>

          <AboutOwner />
          <div className="mt-24">
             <ExperienceLog />
          </div>
        </motion.div>
      </div>

      <footer className="px-6 py-12 md:px-10 border-t border-white/5 bg-black/20">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm text-[var(--muted)] opacity-60">
            © 2026 Magic Studio. All rights reserved.
          </div>
          <div className="flex gap-6 text-[10px] uppercase font-bold tracking-widest text-[var(--gold)]">
             <Link href="/" className="hover:text-white transition-colors">← Back to Hub</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
