"use client";

import { motion } from "framer-motion";
import { magicEcosystem } from "@/lib/site-data";

export function EcosystemHub() {
  return (
    <section id="ecosystem" className="relative px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold)]"
          >
            The Core Architecture
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 font-[family-name:var(--font-display)] text-4xl uppercase tracking-tighter md:text-6xl"
          >
            The Magic <span className="text-[var(--gold)]">Ecosystem.</span>
          </motion.h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--muted)] opacity-80">
            A unified suite of agentic modules, automation bridges, and development labs designed for absolute scale and precision.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {magicEcosystem.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              onMouseMove={(e) => {
                 const rect = e.currentTarget.getBoundingClientRect();
                 const x = e.clientX - rect.left;
                 const y = e.clientY - rect.top;
                 e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                 e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
              }}
              className="spotlight-card section-shell group flex flex-col justify-between rounded-[32px] p-8 hover:bg-white/[0.04] transition-all duration-500 hover:border-[var(--gold)]/30"
            >
              <div className="relative z-20">
                 <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--gold)]/60">
                       {item.tagline}
                    </span>
                    <div className="h-2 w-2 rounded-full bg-[var(--gold)] opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity" />
                 </div>
                 
                 <h3 className="mt-4 text-2xl font-semibold text-white group-hover:text-[var(--gold)] transition-colors">
                    {item.title}
                 </h3>
                 
                 <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] line-clamp-4">
                    {item.description}
                 </p>
              </div>

              <div className="relative z-20 mt-8 flex flex-wrap gap-2 pt-6 border-t border-white/5">
                 {item.tech.map((t) => (
                    <span key={t} className="text-[9px] uppercase tracking-widest text-white/40">
                       {t}
                    </span>
                 ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
