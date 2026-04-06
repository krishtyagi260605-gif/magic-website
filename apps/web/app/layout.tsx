import type { Metadata } from "next";
import { Lexend, Orbitron } from "next/font/google";

import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Magic | Agentic AI, Full-Stack Systems, and Automation",
  description:
    "Magic builds cinematic AI systems, real-time SaaS products, and intelligent automation for ambitious teams.",
};

import { Navbar } from "@/components/nav-bar";
import { MagicCursor } from "@/components/magic-cursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${orbitron.variable} ${lexend.variable} bg-[var(--background)] antialiased`}
        suppressHydrationWarning
      >
        {/* Cinematic Grain Overlay */}
        <div className="pointer-events-none fixed inset-0 z-[99] opacity-[0.03] bg-[url('/noise.png')] mix-blend-overlay" />
        
        <MagicCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

