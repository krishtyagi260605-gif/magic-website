"use client";

import { motion } from "framer-motion";
import { ownerInfo } from "@/lib/site-data";

export function AboutOwner() {
  return (
    <section id="about" className="relative px-6 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Abstract Avatar / Magic Core */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative flex justify-center lg:justify-start"
          >
            <div className="relative h-64 w-64 md:h-80 md:w-80">
              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-full bg-[var(--gold)] opacity-10 blur-3xl animate-pulse" />
              
              {/* Rotating Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-[var(--gold)] border-dashed opacity-40"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-[var(--aurora-b)] border-dotted opacity-60"
              />
              
              {/* Core shape */}
              <div className="section-shell absolute inset-10 flex items-center justify-center rounded-3xl bg-gradient-to-br from-[var(--background-elevated)] to-[var(--background)] shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--gold-soft),transparent_70%)]" />
                <span className="font-[family-name:var(--font-display)] text-5xl text-[var(--gold)] drop-shadow-[0_0_15px_rgba(231,191,97,0.5)]">
                  KT
                </span>
                
                {/* Micro-floating particles in the core */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -10, 0],
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute h-1 w-1 rounded-full bg-white opacity-40"
                    style={{
                      top: `${20 + i * 15}%`,
                      left: `${30 + (i % 3) * 20}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xs uppercase tracking-[0.32em] text-[var(--gold)]"
              >
                Lead Architect
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="mt-4 font-[family-name:var(--font-display)] text-4xl uppercase tracking-tight md:text-6xl"
              >
                {ownerInfo.name}
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-xl text-lg leading-relaxed text-[var(--muted)]"
            >
              {ownerInfo.summary}
            </motion.p>

            <div className="grid gap-6 md:grid-cols-2">
              {ownerInfo.skills.map((skillGroup, idx) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  viewport={{ once: true }}
                  className="section-shell rounded-2xl p-5"
                >
                  <div className="text-[10px] uppercase tracking-widest text-[var(--gold)] opacity-70">
                    {skillGroup.category}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/5 bg-white/5 px-2.5 py-1 text-xs text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 pt-4"
            >
              <a
                href={`mailto:${ownerInfo.email}`}
                className="group flex items-center gap-2 text-sm text-white transition-colors hover:text-[var(--gold)]"
              >
                <div className="h-px w-8 bg-white/20 transition-all group-hover:w-12 group-hover:bg-[var(--gold)]" />
                {ownerInfo.email}
              </a>
              <a
                href="https://github.com/krishtyagi260605-gif"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest text-[var(--muted)] hover:text-white transition-colors"
              >
                GitHub Profile
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
