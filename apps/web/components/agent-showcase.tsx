"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { toolStatuses } from "@/lib/site-data";

function AgentMindVisualizer() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Set up Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Create 3D Nodes
    const nodeGeometry = new THREE.SphereGeometry(0.12, 16, 16);
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: "#f4d18a" });

    // Define 5 logical nodes in 3D
    const nodesData = [
      { name: "Router", pos: new THREE.Vector3(-2.2, 1, 0) },
      { name: "FastAPI Hub", pos: new THREE.Vector3(0, 1.4, 1) },
      { name: "RAG DB", pos: new THREE.Vector3(2.2, 0.8, -0.5) },
      { name: "Tools Executor", pos: new THREE.Vector3(-1.2, -1, 0.5) },
      { name: "Guardrails", pos: new THREE.Vector3(1.2, -1.2, 0.2) }
    ];

    const meshes: THREE.Mesh[] = [];
    nodesData.forEach((node) => {
      const mesh = new THREE.Mesh(nodeGeometry, nodeMaterial);
      mesh.position.copy(node.pos);
      scene.add(mesh);
      meshes.push(mesh);
    });

    // Connect nodes in a web
    const linePositions: number[] = [];
    for (let i = 0; i < nodesData.length; i++) {
      for (let j = i + 1; j < nodesData.length; j++) {
        linePositions.push(nodesData[i].pos.x, nodesData[i].pos.y, nodesData[i].pos.z);
        linePositions.push(nodesData[j].pos.x, nodesData[j].pos.y, nodesData[j].pos.z);
      }
    }

    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    const linesMaterial = new THREE.LineBasicMaterial({
      color: "#f4d18a",
      transparent: true,
      opacity: 0.15
    });
    const lines = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(lines);

    // Create moving particles along lines
    const particlesCount = 20;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particlesCount * 3);
    const particleData: { origin: THREE.Vector3; target: THREE.Vector3; progress: number; speed: number }[] = [];

    for (let i = 0; i < particlesCount; i++) {
      const nodeA = nodesData[Math.floor(Math.random() * nodesData.length)];
      let nodeB = nodesData[Math.floor(Math.random() * nodesData.length)];
      while (nodeB === nodeA) {
        nodeB = nodesData[Math.floor(Math.random() * nodesData.length)];
      }

      particlePositions[i * 3] = nodeA.pos.x;
      particlePositions[i * 3 + 1] = nodeA.pos.y;
      particlePositions[i * 3 + 2] = nodeA.pos.z;

      particleData.push({
        origin: nodeA.pos,
        target: nodeB.pos,
        progress: Math.random(),
        speed: 0.004 + Math.random() * 0.006
      });
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      color: "#60a5fa",
      size: 0.08,
      transparent: true,
      opacity: 0.8
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambient);

    const clock = new THREE.Clock();
    let frameId = 0;

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Rotate scene slowly
      scene.rotation.y = elapsed * 0.08;
      scene.rotation.x = Math.sin(elapsed * 0.04) * 0.1;

      // Update particle positions along lines
      const positionsAttr = particlesGeometry.getAttribute("position") as THREE.BufferAttribute;
      for (let i = 0; i < particlesCount; i++) {
        const p = particleData[i];
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.progress = 0;
          const nodeA = nodesData[Math.floor(Math.random() * nodesData.length)];
          let nodeB = nodesData[Math.floor(Math.random() * nodesData.length)];
          while (nodeB === nodeA) {
            nodeB = nodesData[Math.floor(Math.random() * nodesData.length)];
          }
          p.origin = nodeA.pos;
          p.target = nodeB.pos;
          p.speed = 0.004 + Math.random() * 0.006;
        }

        const currentPos = new THREE.Vector3().lerpVectors(p.origin, p.target, p.progress);
        positionsAttr.setXYZ(i, currentPos.x, currentPos.y, currentPos.z);
      }
      positionsAttr.needsUpdate = true;

      // Pulse nodes slightly
      meshes.forEach((mesh, idx) => {
        mesh.scale.setScalar(1 + Math.sin(elapsed * 2 + idx) * 0.15);
      });

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frameId);
      renderer.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[200px] rounded-3xl border border-white/10 bg-slate-950/60 overflow-hidden mb-4 shadow-inner">
      <div ref={containerRef} className="w-full h-full animate-pulse-slow" />
      <div className="absolute top-4 left-4 text-[9px] font-mono tracking-widest text-[var(--gold)]/80 uppercase">
        Logic Flow Topology
      </div>
      <div className="absolute bottom-4 right-4 text-[9px] font-mono text-white/40 uppercase">
        7D Node Mesh Active
      </div>
    </div>
  );
}

export function AgentShowcase() {
  const [liveThoughts, setLiveThoughts] = useState<string[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);

  useEffect(() => {
    let eventSource: EventSource;
    let fallbackInterval: NodeJS.Timeout;

    const mockThoughtsList = [
      "[Supervisor] Active query parsed: 'Load client dashboard for magicecosystem.online'",
      "[Router] Analyzing context parameters... Match confidence = 98.4%",
      "[FastAPI] GET /api/v1/analytics - Status 200 (Duration: 42ms)",
      "[RAG] Querying vector db for relevant portfolio modules...",
      "[RAG] Vector similarity search returned 3 chunks from 'site-data.ts'",
      "[Supervisor] Routing decision: invoke Tool 'CRM Sync' for real-time status",
      "[Tool: CRM Sync] Dispatching payload to active pipeline...",
      "[Tool: CRM Sync] Received status: LIVE. Synchronizing state keys...",
      "[Guardrails] Scanning input parameters for execution security...",
      "[Guardrails] Input verified. Response compiler online.",
      "[System] Initiating Server-Sent Events stream for logic update...",
      "[System] UI state synchronized. Active node standby."
    ];

    const startStreaming = () => {
      setIsStreaming(true);
      setLiveThoughts([]);
      
      // Points to the FastAPI backend
      eventSource = new EventSource("http://localhost:8000/api/magic-thoughts");
      
      eventSource.onmessage = (event) => {
        setLiveThoughts((prev) => [...prev, event.data].slice(-5));
      };

      eventSource.onerror = () => {
        eventSource.close();
        // Fallback to high-signal simulation if local backend is not running
        let index = 0;
        fallbackInterval = setInterval(() => {
          setLiveThoughts((prev) => [...prev, mockThoughtsList[index % mockThoughtsList.length]].slice(-5));
          index++;
        }, 2500);
      };
    };

    startStreaming();

    return () => {
      if (eventSource) eventSource.close();
      if (fallbackInterval) clearInterval(fallbackInterval);
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
                Trusted across TechChefz & Magic Ecosystem platforms
             </div>
          </div>
        </div>

        <div className="glass-panel rounded-[40px] p-2 md:p-4 shadow-2xl">
          <div className="grid gap-4 h-full xl:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[32px] border border-white/10 bg-slate-950/60 p-6 md:p-8 flex flex-col justify-between">
              <div>
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

                <div className="space-y-3 min-h-[220px]">
                  {liveThoughts.length > 0 ? (
                    liveThoughts.map((thought, index) => (
                      <motion.div
                        key={thought + index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="rounded-2xl border border-white/5 bg-white/5 px-5 py-4 text-xs text-white/90 font-mono"
                      >
                        <span className="mr-3 text-[var(--gold)] opacity-40">→</span>
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

              {/* 3D Visualizer added at the bottom of the column */}
              <AgentMindVisualizer />
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
