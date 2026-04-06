"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "What are we building?",
    helper: "Choose the primary engagement so the system can shape scope signals.",
  },
  {
    title: "How urgent is the launch?",
    helper: "Delivery speed affects team design, architecture, and rollout strategy.",
  },
  {
    title: "What does success look like?",
    helper: "Describe the business outcome and the AI layer will refine the response.",
  },
];

export function ConciergeForm() {
  const [step, setStep] = useState(0);
  const [projectType, setProjectType] = useState("Agentic AI platform");
  const [timeline, setTimeline] = useState("Launch inside 30 days");
  const [goal, setGoal] = useState("Replace manual ops with visible AI workflows.");

  const aiFeedback =
    step === 0
      ? "This points toward an orchestration-led architecture with a strong proof surface in the UI."
      : step === 1
        ? "A 30-day runway suggests parallel design and backend scaffolding with a focused MVP slice."
        : "That outcome is crisp and measurable. We can map this to automation rate, cycle time, and conversion lift.";

  return (
    <section id="concierge" className="px-6 py-8 pb-16 md:px-10 md:py-10 md:pb-24">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="section-shell rounded-[28px] p-6 md:p-8">
          <div className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">Lead Concierge</div>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl uppercase leading-tight md:text-4xl">
            Qualify the engagement while making the client feel the product vision.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            This is designed as a premium intake loop: multi-step, high-signal, and ready for future AI assistance during submission.
          </p>

          <div className="mt-8 flex gap-3">
            {steps.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setStep(index)}
                className={`h-2 flex-1 rounded-full transition ${
                  index <= step ? "bg-[var(--gold)]" : "bg-white/10"
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="glass-panel rounded-[28px] p-6 md:p-8">
          <div className="grid gap-5 xl:grid-cols-[1fr_0.92fr]">
            <div>
              <div className="text-sm text-[var(--muted)]">Step {step + 1} of {steps.length}</div>
              <h3 className="mt-2 text-2xl font-semibold text-white">{steps[step]?.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{steps[step]?.helper}</p>

              <div className="mt-6 space-y-4">
                <label className="block">
                  <span className="mb-2 block text-sm text-white">Engagement focus</span>
                  <input
                    value={projectType}
                    onChange={(event) => setProjectType(event.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white outline-none transition focus:border-[var(--gold)]"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm text-white">Timeline</span>
                  <input
                    value={timeline}
                    onChange={(event) => setTimeline(event.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white outline-none transition focus:border-[var(--gold)]"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm text-white">Desired result</span>
                  <textarea
                    value={goal}
                    onChange={(event) => setGoal(event.target.value)}
                    rows={5}
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white outline-none transition focus:border-[var(--gold)]"
                  />
                </label>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep((current) => Math.max(current - 1, 0))}
                  className="rounded-full border border-white/15 bg-white/6 px-5 py-3 text-sm uppercase tracking-[0.18em] text-white"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep((current) => Math.min(current + 1, steps.length - 1))}
                  className="rounded-full bg-[var(--gold)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950"
                >
                  Continue
                </button>
              </div>
            </div>

            <motion.div
              key={step}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="rounded-[24px] border border-[var(--gold)]/20 bg-[linear-gradient(180deg,rgba(231,191,97,0.16),rgba(255,255,255,0.03))] p-5"
            >
              <div className="text-xs uppercase tracking-[0.24em] text-[var(--gold)]">AI Feedback</div>
              <p className="mt-4 text-sm leading-7 text-white">{aiFeedback}</p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/45 p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Current brief</div>
                <div className="mt-3 space-y-3 text-sm text-white">
                  <p>{projectType}</p>
                  <p>{timeline}</p>
                  <p>{goal}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
