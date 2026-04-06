"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/site-data";

export function ExperienceLog() {
  return (
    <section id="experience" className="relative px-6 py-24 md:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.32em] text-[var(--gold)]"
          >
            Professional Log
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 font-[family-name:var(--font-display)] text-3xl uppercase tracking-tight md:text-5xl"
          >
            Career <span className="text-[var(--gold)]">Milestones.</span>
          </motion.h2>
        </div>

        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-[15px] top-4 h-full w-px bg-gradient-to-b from-[var(--gold)]/40 via-[var(--gold)]/10 to-transparent md:left-1/2" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company + idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Dot */}
              <div className="absolute left-[11px] top-6 h-2 w-2 rounded-full bg-[var(--gold)] shadow-[0_0_15px_rgba(231,191,97,0.8)] md:left-1/2 md:-ml-[4px]" />

              {/* Content Card */}
              <div className="md:w-1/2">
                <div className="section-shell group rounded-[28px] p-8 hover:bg-white/5 transition-all duration-500">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--gold)]">
                      {exp.period}
                    </span>
                    <div className="h-2 w-2 rounded-full bg-[var(--aurora-b)] opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <h3 className="mt-4 text-2xl font-semibold text-white transition-colors group-hover:text-[var(--gold)]">
                    {exp.role}
                  </h3>
                  <div className="mt-2 text-sm font-medium text-[var(--muted)] opacity-80 uppercase tracking-wider">
                    {exp.company}
                  </div>
                  
                  <ul className="mt-6 space-y-3">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed text-[var(--muted)]">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--gold)] opacity-40" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
