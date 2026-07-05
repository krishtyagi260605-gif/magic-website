"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    title: "Define Focus Area",
    helper: "Select the primary automation or intelligence pillar for your project.",
  },
  {
    title: "Launch Velocity",
    helper: "Select your desired timeline. Speed affects backend scaffolding and model choices.",
  },
  {
    title: "Define Core Objective",
    helper: "Briefly explain the target outcome. Our compiler will recommend the optimal stack.",
  },
];

const projectTypes = [
  {
    id: "Multi-Agent Systems",
    eyebrow: "Orchestration",
    title: "Multi-Agent Core",
    desc: "LangGraph supervisor-worker nodes, persistent state, parallel tool routing."
  },
  {
    id: "Conversational AI",
    eyebrow: "Support Consoles",
    title: "Conversational RAG",
    desc: "Cinematic frontends, semantic vector indexing, automated checkout loops."
  },
  {
    id: "Voice Infrastructure",
    eyebrow: "Voice Receptionist",
    title: "Voice AI Agent",
    desc: "SIP integrations, low-latency Hinglish Whisper models, custom LiveKit channels."
  },
  {
    id: "AI Automation SaaS",
    eyebrow: "Workflow Automation",
    title: "Workflow SaaS",
    desc: "Dynamic legal drafting, Compliance checker, custom RPA adapters."
  }
];

const timelines = [
  {
    id: "Hyper-Sprint (< 30 days)",
    eyebrow: "Sprint Cycle",
    title: "Under 30 Days",
    desc: "Rapid scaffolding of core API and focused React MVP interface."
  },
  {
    id: "Strategic Build (2-3 months)",
    eyebrow: "Scale & Hardening",
    title: "60 - 90 Days",
    desc: "Full production-grade deployment, robust vector RAG, Postgres indexing."
  },
  {
    id: "Enterprise Partnership",
    eyebrow: "Continuous R&D",
    title: "Strategic Partner",
    desc: "Dedicated orchestration architecture, security audits, customized LLM fine-tuning."
  }
];

export function ConciergeForm() {
  const [step, setStep] = useState(0); // 0, 1, 2, 3 (submitting), 4 (completed)
  const [projectType, setProjectType] = useState("Multi-Agent Systems");
  const [timeline, setTimeline] = useState("Hyper-Sprint (< 30 days)");
  const [goal, setGoal] = useState("Automate internal database operations and generate client business reports.");
  
  const [compilationProgress, setCompilationProgress] = useState(0);
  const [compilationLogs, setCompilationLogs] = useState<string[]>([]);
  const [estimateSignature, setEstimateSignature] = useState("");

  const mockLogs = [
    "[Terminal] Establishing handshake with Agent Core...",
    "[Router] Classifying project requirements and security protocols...",
    "[RAG Engine] Retrieving semantic code templates for selected category...",
    "[Compiler] Estimating sprint cycles, resource allocations, and dependencies...",
    "[Guardrails] Validating system parameters against compliance standard IRC 2020...",
    "[System] Packaging project brief and signature block... Done."
  ];

  useEffect(() => {
    if (step === 3) {
      setCompilationProgress(0);
      setCompilationLogs([]);
      
      let progressVal = 0;
      let logIndex = 0;

      const progressInterval = setInterval(() => {
        progressVal += 4;
        setCompilationProgress(progressVal);

        if (progressVal % 20 === 0 && logIndex < mockLogs.length) {
          setCompilationLogs((prev) => [...prev, mockLogs[logIndex]]);
          logIndex++;
        }

        if (progressVal >= 100) {
          clearInterval(progressInterval);
          // Generate a cool hexadecimal signature for the brief
          const hexSig = "SIG-" + Math.random().toString(16).substring(2, 10).toUpperCase();
          setEstimateSignature(hexSig);
          setTimeout(() => setStep(4), 500);
        }
      }, 100);

      return () => clearInterval(progressInterval);
    }
  }, [step]);

  const getRecommendedStack = () => {
    switch (projectType) {
      case "Multi-Agent Systems":
        return "LangGraph Supervisor / Redis State / FastAPI Hub / Groq Llama-3";
      case "Conversational AI":
        return "Next.js 15 / Tailwind v4 / PostgreSQL Vector / Gemini Flash API";
      case "Voice Infrastructure":
        return "LiveKit WebSocket Channel / Whisper Hinglish / Custom TTS / Python";
      default:
        return "FastAPI / ReportLab PDF Engine / Zapier Custom Hub / LlamaIndex";
    }
  };

  const getAIFeedback = () => {
    if (step === 0) {
      return `Targeting ${projectType} suggests a multi-layered automation core. Our model recommends a robust event-driven FastAPI backend to manage these state changes.`;
    }
    if (step === 1) {
      return `A timeline of ${timeline} requires a ${timeline.includes("< 30") ? "focused MVP slice with rapid API mockups" : "staged deployment plan including load testing and security audits"}.`;
    }
    return "Click Compile below to synthesize your objectives and check the estimated development blueprint.";
  };

  return (
    <section id="concierge" className="px-6 py-16 md:px-10 md:py-20 relative">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        
        {/* Left Informational Shell */}
        <div className="section-shell rounded-[40px] p-8 md:p-12 flex flex-col justify-between overflow-hidden relative border border-white/5 bg-slate-950/20">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <div className="h-32 w-32 rounded-full border-4 border-dashed border-[var(--gold)] animate-spin-slow" />
          </div>
          
          <div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">Agent Core Online</span>
            </div>
            <div className="text-xs uppercase tracking-[0.28em] text-[var(--gold)] mt-6">Lead Concierge</div>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl uppercase leading-tight md:text-5xl">
              Qualify the project. <span className="text-[var(--gold)]">Feel the vision.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
              This interactive diagnostic intake system translates your goals into technical blueprints, recommended tech stacks, and estimated sprint scopes.
            </p>
          </div>

          <div className="mt-12">
            <div className="text-[9px] font-mono text-[var(--gold)] uppercase tracking-widest mb-3">Intake Progress</div>
            <div className="flex gap-2">
              {[0, 1, 2].map((idx) => (
                <div
                  key={idx}
                  onClick={() => step < 3 && setStep(idx)}
                  className={`h-1.5 flex-1 rounded-full cursor-pointer transition-colors duration-300 ${
                    idx === step
                      ? "bg-[var(--gold)]"
                      : idx < step
                      ? "bg-[var(--gold)]/40"
                      : "bg-white/10"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Interactive Form Area */}
        <div className="glass-panel rounded-[40px] p-6 md:p-10 shadow-2xl relative border border-white/10 bg-slate-950/60 overflow-hidden min-h-[520px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            
            {/* Step 1: Focus Area */}
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <span className="text-xs font-mono text-[var(--muted)]">Step 1 of 3</span>
                  <h3 className="text-2xl font-bold text-white mt-1">{steps[0].title}</h3>
                  <p className="text-sm text-[var(--muted)]">{steps[0].helper}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {projectTypes.map((type) => {
                    const isSelected = projectType === type.id;
                    return (
                      <div
                        key={type.id}
                        onClick={() => setProjectType(type.id)}
                        className={`p-5 rounded-3xl border transition-all duration-300 cursor-pointer relative ${
                          isSelected
                            ? "border-[var(--gold)] bg-[var(--gold-soft)]/20 shadow-[0_0_20px_rgba(231,191,97,0.15)]"
                            : "border-white/5 bg-white/5 hover:border-white/20"
                        }`}
                      >
                        <div className="text-[10px] font-mono text-[var(--gold)] uppercase tracking-wider">{type.eyebrow}</div>
                        <h4 className="text-lg font-bold text-white mt-2">{type.title}</h4>
                        <p className="text-xs text-[var(--muted)] mt-2 leading-relaxed">{type.desc}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    onClick={() => setStep(1)}
                    className="rounded-full bg-[var(--gold)] px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-slate-950 hover:bg-white hover:scale-105 transition-all duration-300"
                  >
                    Continue →
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Timeline */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <span className="text-xs font-mono text-[var(--muted)]">Step 2 of 3</span>
                  <h3 className="text-2xl font-bold text-white mt-1">{steps[1].title}</h3>
                  <p className="text-sm text-[var(--muted)]">{steps[1].helper}</p>
                </div>

                <div className="space-y-4">
                  {timelines.map((time) => {
                    const isSelected = timeline === time.id;
                    return (
                      <div
                        key={time.id}
                        onClick={() => setTimeline(time.id)}
                        className={`p-5 rounded-3xl border transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? "border-[var(--gold)] bg-[var(--gold-soft)]/20 shadow-[0_0_20px_rgba(231,191,97,0.15)]"
                            : "border-white/5 bg-white/5 hover:border-white/20"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-bold text-white">{time.title}</h4>
                          <span className="text-[10px] font-mono text-[var(--gold)] uppercase tracking-wider">{time.eyebrow}</span>
                        </div>
                        <p className="text-xs text-[var(--muted)] mt-2 leading-relaxed">{time.desc}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    onClick={() => setStep(0)}
                    className="rounded-full border border-white/20 px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-white/5 transition-all duration-300"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={() => setStep(2)}
                    className="rounded-full bg-[var(--gold)] px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-slate-950 hover:bg-white hover:scale-105 transition-all duration-300"
                  >
                    Continue →
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Objective */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <span className="text-xs font-mono text-[var(--muted)]">Step 3 of 3</span>
                  <h3 className="text-2xl font-bold text-white mt-1">{steps[2].title}</h3>
                  <p className="text-sm text-[var(--muted)]">{steps[2].helper}</p>
                </div>

                <div className="space-y-4">
                  <label className="block">
                    <span className="mb-2 block text-xs font-mono uppercase tracking-wider text-white">Project Brief / Core Goal</span>
                    <textarea
                      value={goal}
                      onChange={(event) => setGoal(event.target.value)}
                      rows={6}
                      className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-5 py-4 text-sm text-white outline-none transition focus:border-[var(--gold)]/50 focus:bg-slate-950/80 leading-relaxed font-sans"
                      placeholder="e.g. Automate client onboarding reports and sync with Salesforce CRM pipeline..."
                    />
                  </label>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    onClick={() => setStep(1)}
                    className="rounded-full border border-white/20 px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-white/5 transition-all duration-300"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="rounded-full bg-emerald-500 px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-slate-950 hover:bg-white hover:scale-105 transition-all duration-300"
                  >
                    Compile Brief ⚙
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Submission Processing */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="h-full flex flex-col justify-center py-8 space-y-6"
              >
                <div className="text-center space-y-2">
                  <div className="text-xs font-mono text-[var(--gold)] uppercase tracking-[0.2em] animate-pulse">Running compilation sequence</div>
                  <h3 className="text-2xl font-bold text-white">Synthesizing Project Brief...</h3>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-emerald-400 rounded-full transition-all duration-100 ease-out shadow-[0_0_15px_rgba(52,211,153,0.5)]"
                    style={{ width: `${compilationProgress}%` }}
                  />
                  <div className="absolute right-4 -top-6 text-[10px] font-mono text-emerald-400">{compilationProgress}%</div>
                </div>

                {/* Simulated console logs */}
                <div className="rounded-2xl border border-white/5 bg-black/60 p-5 font-mono text-xs text-white/80 space-y-2 min-h-[160px] overflow-hidden">
                  {compilationLogs.map((log, lIdx) => (
                    <motion.div
                      key={lIdx}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-emerald-400">»</span>
                      {log}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 5: Summary Estimate Dashboard */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[10px] font-mono text-[var(--gold)] uppercase tracking-wider">Estimate Brief Ready</span>
                    <h3 className="text-2xl font-bold text-emerald-400">Synthesis Complete</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] font-mono text-[var(--muted)] uppercase block">Signature Hash</span>
                    <span className="text-xs font-mono text-white/90 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">{estimateSignature}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl border border-white/5 bg-white/5">
                      <span className="text-[9px] font-mono text-[var(--gold)] uppercase block">Focus Category</span>
                      <span className="text-sm font-semibold text-white mt-1 block">{projectType}</span>
                    </div>
                    <div className="p-4 rounded-2xl border border-white/5 bg-white/5">
                      <span className="text-[9px] font-mono text-[var(--gold)] uppercase block">Launch SLA</span>
                      <span className="text-sm font-semibold text-white mt-1 block">{timeline}</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl border border-white/5 bg-white/5">
                    <span className="text-[9px] font-mono text-[var(--gold)] uppercase block">Recommended Tech Stack</span>
                    <span className="text-xs font-mono text-emerald-400 mt-1.5 block">{getRecommendedStack()}</span>
                  </div>

                  <div className="p-4 rounded-2xl border border-white/5 bg-white/5">
                    <span className="text-[9px] font-mono text-[var(--gold)] uppercase block">Target Objective</span>
                    <p className="text-xs text-white/80 leading-relaxed mt-1.5">{goal}</p>
                  </div>
                </div>

                <div className="flex justify-between pt-2">
                  <button
                    onClick={() => {
                      setStep(0);
                      setGoal("Automate internal database operations and generate client business reports.");
                    }}
                    className="rounded-full border border-white/20 px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-white/5 transition-all duration-300"
                  >
                    Reset Terminal
                  </button>
                  <a
                    href="mailto:krishtyagi726@gmail.com"
                    className="rounded-full bg-[var(--gold)] px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-slate-950 hover:bg-white hover:scale-105 transition-all duration-300 text-center flex items-center justify-center"
                  >
                    Send to Lead Architect →
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
