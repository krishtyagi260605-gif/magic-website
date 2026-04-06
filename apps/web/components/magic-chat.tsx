"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function MagicChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: "assistant", content: "Hello. I am Sisi, your Magic Studio architect. How can I assist your build today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentReasoning, setCurrentReasoning] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, currentReasoning]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);
    setCurrentReasoning([]);

    try {
      const response = await fetch("http://localhost:8000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) throw new Error("Failed to send message");

      const data = await response.json();
      
      // Simulate reading through reasoning steps
      if (data.reasoning_steps) {
        for (const step of data.reasoning_steps) {
          setCurrentReasoning((prev) => [...prev, step]);
          await new Promise((r) => setTimeout(r, 600));
        }
      }

      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (error) {
      console.error("Magic Chat Sync Error:", error);
      setMessages((prev) => [...prev, { role: "assistant", content: "I encountered a synchronization error. Please try again." }]);
    } finally {
      setIsTyping(false);
      setCurrentReasoning([]);
    }
  };

  return (
    <>
      {/* Floating Trigger */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[60] flex h-16 w-16 items-center justify-center rounded-full bg-[var(--gold)] shadow-[0_0_30px_rgba(231,191,97,0.4)]"
      >
        <div className="relative">
          <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-emerald-400" 
          />
        </div>
      </motion.button>

      {/* Chat Console Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
          >
            <div className="section-shell relative flex h-[600px] w-full max-w-2xl flex-col rounded-[40px] border-white/10 bg-slate-950/90 shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/5 px-8 py-6">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full border border-[var(--gold)] bg-[var(--gold-soft)] flex items-center justify-center text-xs font-bold text-[var(--gold)]">
                    S
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[var(--gold)]">Magic Sisi</div>
                    <div className="mt-1 text-[10px] text-[var(--muted)]">Active Protocol: Studio Architect</div>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="rounded-full bg-white/5 p-2 text-[var(--muted)] hover:bg-white/10 hover:text-white transition-colors"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Messages Area */}
              <div 
                ref={scrollRef}
                className="flex-1 overflow-y-auto px-8 py-6 space-y-6 scrollbar-hide"
              >
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: msg.role === "user" ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div 
                      className={`max-w-[80%] rounded-[24px] px-6 py-4 text-sm leading-relaxed ${
                        msg.role === "user" 
                        ? "bg-[var(--gold)] text-black font-medium" 
                        : "bg-white/5 text-white/90 border border-white/5"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </motion.div>
                ))}
                
                {/* Reasoning Terminal */}
                {currentReasoning.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start w-full"
                  >
                    <div className="w-full max-w-[90%] rounded-[20px] bg-black/40 border border-[var(--gold)]/20 p-4 font-mono text-[10px] space-y-2">
                       <div className="flex items-center gap-2 text-[var(--gold)]/60 mb-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
                          <span>LOGIC_TRACE :: SISI_PROTOCOL_v4.2</span>
                       </div>
                       {currentReasoning.map((step, i) => (
                         <div key={i} className="flex gap-3 text-white/40">
                            <span className="text-[var(--gold)]/30">{`> `}</span>
                            <span>{step}</span>
                         </div>
                       ))}
                    </div>
                  </motion.div>
                )}

                {isTyping && currentReasoning.length === 0 && (
                  <div className="flex justify-start">
                    <div className="rounded-[24px] bg-white/5 px-6 py-4 flex gap-1 items-center">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ opacity: [0.2, 1, 0.2] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                          className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="border-t border-white/5 p-6 md:p-8">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Describe your vision..."
                    className="w-full rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm text-white placeholder:text-white/20 focus:border-[var(--gold)]/40 focus:outline-none transition-colors"
                  />
                  <button 
                    onClick={handleSendMessage}
                    className="absolute right-2 rounded-full bg-[var(--gold)] p-3 text-black transition-transform hover:scale-105 active:scale-95"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
