"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/site-data";

export function PortfolioGrid() {
  return (
    <section id="portfolio" className="relative px-6 py-20 md:px-10 bg-[radial-gradient(ellipse_at_bottom,rgba(231,191,97,0.06),transparent_60%)]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.32em] text-[var(--gold)]"
          >
            Portfolio Glimpse
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 font-[family-name:var(--font-display)] text-3xl uppercase tracking-tight md:text-5xl"
          >
            Proven Labs & <span className="text-[var(--gold)]">Digital Magic.</span>
          </motion.h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.5,
              }}
            >
              <div className="section-shell group h-full rounded-[32px] p-8 hover:border-[var(--gold)]/40 transition-colors duration-500">
                {/* Floating Glow */}
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[var(--gold-soft)] blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700" />
                
                <div className="mb-8">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-wider text-[var(--gold)]">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-semibold text-white group-hover:text-[var(--gold)] transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mt-8 flex flex-wrap gap-2 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-widest text-[#8a98b5]">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex gap-4">
                  {project.links?.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold uppercase tracking-widest text-white hover:text-[var(--gold)] transition-colors"
                    >
                      Visit →
                    </a>
                  )}
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold uppercase tracking-widest text-white hover:text-[var(--gold)] transition-colors"
                    >
                      Code →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
