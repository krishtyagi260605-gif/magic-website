import type { Metadata } from "next";

import "./globals.css";

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
        className="bg-[var(--background)] antialiased"
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
