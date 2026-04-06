"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { toolStatuses } from "@/lib/site-data";

export function AgentShowcase() {
  const [liveThoughts, setLiveThoughts] = useState<string[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);

  useEffect(() => {
    let eventSource: EventSource;

    const startStreaming = () => {
      setIsStreaming(true);
      setLiveThoughts([]);
      
      // Points to the FastAPI backend
      eventSource = new EventSource("http://localhost:8000/api/magic-thoughts");
      
      eventSource.onmessage = (event) => {
        setLiveThoughts((prev) => [...prev, event.data].slice(-6));
      };

      eventSource.onerror = () => {
        eventSource.close();
        setIsStreaming(false);
        // Retry after a delay to keep the 'magic' going
        setTimeout(startStreaming, 5000);
      };
    };

    startStreaming();

    return () => {
      if (eventSource) eventSource.close();
    };
  }, []);

  return (
    <section id="agents" className="px-6 py-20 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="section-shell rounded-[40px] p-8 md:p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <div className="h-32 w-32 rounded-full border-4 border-dashed border-[var(--gold)] animate-spin-slow" />
          </div>
          
          <div className="text-xs uppercase tracking-[0.32em] text-[var(--gold)]">Agent Reasoning</div>
          <h2 className="mt-6 font-[family-name:var(--font-display)] text-3xl uppercase leading-tight md:text-5xl">
            Watch the <span className="text-[var(--gold)]">Magic</span> happen in real-time.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
            Our agentic backend streams every thought, retrieval, and tool execution directly to the UI. Total transparency, cinematic delivery.
          </p>
          
          <div className="mt-10 flex gap-4">
             <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-[var(--background)] bg-[var(--gold-soft)]" />
                ))}
             </div>
             <div className="text-xs text-[var(--muted)] flex items-center">
                Trusted by 50+ enterprise operators
             </div>
          </div>
        </div>

        <div className="glass-panel rounded-[40px] p-2 md:p-4 shadow-2xl">
          <div className="grid gap-4 h-full xl:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[32px] border border-white/10 bg-slate-950/60 p-6 md:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]">Live Logic Stream</div>
                  <div className="mt-1 text-sm font-medium text-white/60">v1.4.2 Engine</div>
                </div>
                {isStreaming && (
                  <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    Streaming
                  </div>
                )}
              </div>

              <div className="space-y-3">
                {liveThoughts.length > 0 ? (
                  liveThoughts.map((thought, index) => (
                    <motion.div
                      key={thought + index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="rounded-2xl border border-white/5 bg-white/5 px-5 py-4 text-sm text-white/90 font-mono italic"
                    >
                      <span className="mr-4 text-[var(--gold)] opacity-40">→</span>
                      {thought}
                    </motion.div>
                  ))
                ) : (
                  <div className="py-20 text-center text-sm text-[var(--muted)] italic opacity-40">
                    Warming up engine...
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-[32px] border border-white/10 bg-slate-950/60 p-6 flex-1">
                <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]">Tool Telemetry</div>
                <div className="mt-6 space-y-4">
                  {toolStatuses.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3"
                    >
                      <span className="text-xs font-medium text-white/80">{tool.name}</span>
                      <span className="text-[10px] uppercase tracking-widest text-[var(--muted)]">{tool.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-[var(--gold)]/20 bg-gradient-to-br from-[var(--gold-soft)] to-transparent p-6">
                <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]">Orchestrator Fit</div>
                <p className="mt-4 text-xs leading-relaxed text-white/70">
                  FastAPI streams LangGraph events via SSE. This integration allows for real-time human-in-the-loop validation and tool monitoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
