"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import { servicePillars } from "@/lib/site-data";

export function BentoGrid() {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      },
    );
  }, []);

  return (
    <section className="px-6 py-8 md:px-10 md:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <div className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">Service Pillars</div>
          <h2 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-3xl uppercase leading-tight md:text-5xl">
            A bento grid shaped for serious delivery, not brochure copy.
          </h2>
        </div>

        <div className="grid auto-rows-[minmax(220px,1fr)] gap-5 md:grid-cols-2 xl:grid-cols-4">
          {servicePillars.map((pillar, index) => (
            <div
              key={pillar.title}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              className={`section-shell rounded-[28px] p-6 ${
                index === 0 ? "xl:col-span-2" : ""
              } ${index === 3 ? "md:col-span-2 xl:col-span-1" : ""}`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-60" />
              <div className="absolute right-5 top-5 h-20 w-20 rounded-full bg-[var(--gold-soft)] blur-3xl" />
              <div className="text-xs uppercase tracking-[0.24em] text-[var(--gold)]">{pillar.eyebrow}</div>
              <h3 className="mt-4 max-w-sm text-2xl font-semibold leading-tight text-white">{pillar.title}</h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-[var(--muted)]">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
