"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/site-data";

const showcaseProjects = projects.filter((p) => p.video);

export function ProjectShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const active = showcaseProjects[activeIdx];

  const handleSelect = (idx: number) => {
    setActiveIdx(idx);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <section
      id="showcase"
      className="relative px-6 py-24 md:px-10 bg-[radial-gradient(ellipse_at_top,rgba(231,191,97,0.07),transparent_55%)]"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.32em] text-[var(--gold)]"
          >
            Live Deployments
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 font-[family-name:var(--font-display)] text-3xl uppercase tracking-tight md:text-5xl"
          >
            Watch the{" "}
            <span className="text-[var(--gold)]">Magic in Action.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--muted)]"
          >
            Every project below is live, deployed, and production-ready. Click a
            project to watch a recording — then visit the live site.
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/40 backdrop-blur-md"
            style={{ aspectRatio: "16/9" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active?.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                {active?.video ? (
                  <video
                    ref={videoRef}
                    src={active.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-[var(--muted)]">
                    No recording available
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Overlay badge */}
            <div className="pointer-events-none absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border border-[var(--gold)]/40 bg-black/60 px-4 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--gold)]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--gold)]">
                {active?.title}
              </span>
            </div>

            {/* Visit link overlay */}
            {active?.links?.live && (
              <div className="pointer-events-auto absolute bottom-4 right-4 z-10">
                <a
                  href={active.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-[var(--gold)] bg-black/70 px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-[var(--gold)] backdrop-blur-md transition-all hover:bg-[var(--gold)] hover:text-black"
                >
                  Visit Live →
                </a>
              </div>
            )}
          </motion.div>

          {/* Project Selector */}
          <div className="flex flex-col gap-3">
            {showcaseProjects.map((project, idx) => (
              <motion.button
                key={project.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true }}
                onClick={() => handleSelect(idx)}
                className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-500 ${
                  activeIdx === idx
                    ? "border-[var(--gold)]/60 bg-[var(--gold)]/5"
                    : "border-white/8 bg-white/3 hover:border-white/20 hover:bg-white/5"
                }`}
              >
                {/* Active glow */}
                {activeIdx === idx && (
                  <div className="absolute -right-3 -top-3 h-20 w-20 rounded-full bg-[var(--gold)] opacity-10 blur-2xl" />
                )}

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="mb-1 text-[9px] uppercase tracking-widest text-[var(--gold)] opacity-80">
                      {project.category}
                    </div>
                    <div
                      className={`text-sm font-semibold transition-colors duration-300 ${
                        activeIdx === idx
                          ? "text-[var(--gold)]"
                          : "text-white group-hover:text-[var(--gold)]"
                      }`}
                    >
                      {project.title}
                    </div>
                    <p className="mt-1.5 line-clamp-2 text-[11px] leading-relaxed text-[var(--muted)]">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <span
                      className={`inline-block rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider transition-all duration-300 ${
                        activeIdx === idx
                          ? "bg-[var(--gold)] text-black"
                          : "border border-white/20 text-[var(--muted)]"
                      }`}
                    >
                      {project.badge ?? "Demo"}
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] uppercase tracking-wider text-[#8a98b5]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Progress bar for active */}
                {activeIdx === idx && (
                  <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-[var(--gold)]/0 via-[var(--gold)] to-[var(--gold)]/0" />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
