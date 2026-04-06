"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { MagicLogo } from "@/components/magic-logo";

const navLinks = [
  { name: "The Hub", href: "/" },
  { name: "The Architect", href: "/#architect" },
  { name: "Our Ecosystem", href: "/#ecosystem" },
  { name: "Architecture", href: "/architecture" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 pt-6 md:px-10 md:pt-8 pointer-events-none">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-7xl"
      >
        <div 
          className={`flex items-center justify-between rounded-full border border-white/10 px-5 py-3 backdrop-blur-2xl pointer-events-auto transition-all duration-500 shadow-2xl ${
            scrolled ? "bg-black/40 scale-95" : "bg-white/5"
          }`}
        >
          <Link href="/" className="group flex items-center gap-3">
             <div className="rounded-full border border-white/10 bg-white/5 p-1.5 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                <MagicLogo className="h-8 w-8" glow={false} />
             </div>
             <span className="font-[family-name:var(--font-display)] text-lg uppercase tracking-[0.4em] text-white">Magic</span>
          </Link>

          <nav className="hidden gap-6 text-[10px] font-bold uppercase tracking-widest text-[var(--muted)] lg:flex xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative transition-colors hover:text-[var(--gold)] ${
                    isActive ? "text-[var(--gold)]" : "text-[var(--muted)]"
                  }`}
                >
                  {link.name}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 h-px w-full bg-[var(--gold)]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </AnimatePresence>
                </Link>
              );
            })}
          </nav>
          
          <div className="flex gap-4">
             <Link
               href="/#concierge"
               className="hidden rounded-full border border-[var(--gold)] px-4 py-2 text-[8px] font-bold uppercase tracking-widest text-[var(--gold)] transition-colors hover:bg-[var(--gold)] hover:text-black lg:block"
             >
               Build Studio
             </Link>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
