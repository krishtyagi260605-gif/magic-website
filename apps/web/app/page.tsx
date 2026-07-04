"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagicLogo } from "@/components/magic-logo";
import { Hero } from "@/components/hero";
import { BentoGrid } from "@/components/bento-grid";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { ProjectShowcase } from "@/components/project-showcase";
import { AgentShowcase } from "@/components/agent-showcase";
import { ConciergeForm } from "@/components/concierge-form";
import { EcosystemHub } from "@/components/ecosystem-hub";
import { AboutOwner } from "@/components/about-owner";
import { ExperienceLog } from "@/components/experience-log";
import { MagicChat } from "@/components/magic-chat";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative overflow-hidden selection:bg-[var(--gold)] selection:text-black">
      <motion.div
        style={{ y: backgroundY }}
        className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,_rgba(20,75,97,0.15),_transparent_50%)]"
      />

      <div className="pointer-events-none fixed inset-0 -z-5 overflow-hidden">
        {mounted &&
          [...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -100, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 12 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute rounded-full bg-[var(--gold)]/10 blur-2xl"
              style={{
                width: `${150 + i * 40}px`,
                height: `${150 + i * 40}px`,
                top: `${(i * 17) % 100}%`,
                left: `${(i * 29) % 100}%`,
              }}
            />
          ))}
      </div>

      <div className="relative pt-12">
        <Hero />
        <EcosystemHub />
        <BentoGrid />
        <PortfolioGrid />
        <ProjectShowcase />
        <AgentShowcase />

        <div id="architect" className="mt-20 border-t border-white/5 pt-20">
          <AboutOwner />
        </div>

        <ExperienceLog />
        <ConciergeForm />
      </div>

      <MagicChat />

      <footer className="border-t border-white/5 bg-black/20 px-6 py-12 text-center md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 flex items-center justify-center gap-3">
            <MagicLogo className="h-10 w-10" glow={false} />
            <div className="font-[family-name:var(--font-display)] text-lg uppercase tracking-[0.22em] text-white">
              Magic
            </div>
          </div>
          <div className="text-sm text-[var(--muted)] opacity-60">
            © 2026 Magic Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
