"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { servicePillars } from "@/lib/site-data";

type DiagnosticsData = {
  status: string;
  architecture: string;
  latency: string;
  metric: string;
  logs: string[];
};

const diagnosticsMap: Record<string, DiagnosticsData> = {
  "Legend Detailers & Legend Laundry": {
    status: "SYSTEM LIVE (99.98% UPTIME)",
    architecture: "FastAPI / Postgres / Redis Stack",
    latency: "Avg Latency: 42ms",
    metric: "Throughput: 140 bookings/day",
    logs: [
      "[CRM Bridge] Synced customer record #9485",
      "[Checkout] Stripe transaction token validated",
      "[Nginx] SSL Handshake succeeded for custom root",
      "[System] Cache hits optimized for catalog routes"
    ]
  },
  "DishBot Commerce Support": {
    status: "COGNITIVE ACTIVE",
    architecture: "LangGraph Supervisor-Worker",
    latency: "Reasoning Cycle: 1.1s",
    metric: "Memory: Persistent Redis Cluster",
    logs: [
      "[Supervisor] Activated routing node 'package_select'",
      "[RAG] Matched customer context with confidence 0.94",
      "[System] Awaiting human-in-the-loop checkout verify",
      "[Agent] Persistent memory keys saved to cache"
    ]
  },
  "Magic Voice Receptionist": {
    status: "VOICE STREAM ONLINE",
    architecture: "LiveKit & Whisper Hinglish Model",
    latency: "Voice Latency: < 180ms",
    metric: "Concurrency: 100 channels active",
    logs: [
      "[SIP Node] Inbound call accepted from +91 931506****",
      "[Whisper] Transcribed: 'Plan recharge details'",
      "[LiveKit] Speech stream chunk compiled successfully",
      "[System] Automated appointment booked in Calendar"
    ]
  },
  "Magic Legal & Magic Business": {
    status: "DRAFT ENGINE READY",
    architecture: "Groq Llama-3 / ReportLab Engine",
    latency: "Synthesis Speed: 2.4s/doc",
    metric: "IRC 2020 Compliance Checker: ACTIVE",
    logs: [
      "[LLM Engine] Scaffolding Rent Agreement template",
      "[ReportLab] Compiling canvas flow into PDF layout",
      "[System] Passed legal formatting verification",
      "[SaaS] Generated complete business branding kit"
    ]
  }
};

export function BentoGrid() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section className="px-6 py-12 md:px-10 md:py-16 relative">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.32em] text-[var(--gold)]">Service Pillars</div>
            <h2 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-3xl uppercase leading-tight md:text-5xl">
              Serious delivery. <span className="text-[var(--gold)]">No brochure copy.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs text-[var(--muted)] font-mono uppercase tracking-widest opacity-60">
            Interactive Diagnostics Terminal — Click cards to expand
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {servicePillars.map((pillar, index) => {
            const isExpanded = activeCard === index;
            const diagnostics = diagnosticsMap[pillar.title];

            return (
              <motion.div
                key={pillar.title}
                layout
                onClick={() => toggleCard(index)}
                className={`section-shell group relative cursor-pointer rounded-[36px] p-8 border border-white/5 hover:border-[var(--gold)]/30 transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? "md:col-span-2 lg:col-span-3 xl:col-span-4 bg-slate-950/90 border-[var(--gold)]/40 shadow-[0_0_50px_rgba(231,191,97,0.1)]"
                    : "bg-slate-950/30"
                }`}
              >
                {/* 4D Hover Laser Scan Effect */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-y-[280px] transition-transform duration-[2.5s] ease-in-out pointer-events-none" />

                {/* Cyber Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40" />

                {/* Glowing Ambience */}
                <div className="absolute right-6 top-6 h-16 w-16 rounded-full bg-[var(--gold-soft)] blur-3xl opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.24em] text-[var(--gold)]">
                        {pillar.eyebrow}
                      </span>
                      <span className="text-[10px] font-mono text-[var(--muted)] opacity-60 uppercase tracking-widest group-hover:text-white transition-colors">
                        {isExpanded ? "Collapse x" : "Click to view diagnostics //"}
                      </span>
                    </div>

                    <h3 className="mt-5 max-w-sm text-2xl font-bold leading-tight text-white group-hover:text-[var(--gold)] transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
                      {pillar.description}
                    </p>
                  </div>

                  <AnimatePresence>
                    {isExpanded && diagnostics && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="mt-8 pt-8 border-t border-white/10"
                      >
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                          <div className="space-y-1">
                            <div className="text-[9px] font-mono text-[var(--gold)] uppercase tracking-widest">Diagnostic Status</div>
                            <div className="text-sm font-semibold text-emerald-400 flex items-center gap-2">
                              <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full animate-ping" />
                              {diagnostics.status}
                            </div>
                          </div>

                          <div className="space-y-1">
                            <div className="text-[9px] font-mono text-[var(--gold)] uppercase tracking-widest">Architecture Layer</div>
                            <div className="text-sm text-white/90 font-medium">{diagnostics.architecture}</div>
                          </div>

                          <div className="space-y-1">
                            <div className="text-[9px] font-mono text-[var(--gold)] uppercase tracking-widest">Execution Latency</div>
                            <div className="text-sm text-white/90 font-medium">{diagnostics.latency}</div>
                          </div>

                          <div className="space-y-1">
                            <div className="text-[9px] font-mono text-[var(--gold)] uppercase tracking-widest">Metric Telemetry</div>
                            <div className="text-sm text-white/90 font-medium">{diagnostics.metric}</div>
                          </div>
                        </div>

                        <div className="mt-6 rounded-2xl border border-white/5 bg-black/40 p-5">
                          <div className="text-[9px] font-mono text-[var(--muted)] uppercase tracking-widest mb-3">Active System Console Logs</div>
                          <div className="space-y-2 font-mono text-xs text-white/80">
                            {diagnostics.logs.map((log, lIdx) => (
                              <motion.div
                                key={lIdx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: lIdx * 0.1 }}
                                className="flex items-center gap-3"
                              >
                                <span className="text-[var(--gold)]">»</span>
                                {log}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
