# Magic

Magic is a motion-first monorepo foundation for an elite IT and agentic AI studio. The stack pairs a cinematic Next.js 15 frontend with a FastAPI plus LangGraph backend and a dedicated `agents` workspace for orchestration experiments, evaluators, and future RAG pipelines.

## Monorepo Layout

```text
.
├── apps/
│   └── web/          # Next.js 15, React 19, Tailwind CSS v4, Framer Motion, Three.js, GSAP
├── backend/          # FastAPI, Pydantic v2, LangGraph example graph
├── agents/           # Agent workflows and future evaluators
└── docs/             # Architecture notes and diagrams
```

## Frontend Highlights

- Reactive WebGL hero orb built with Three.js
- Glassmorphism evolution with gold-accented dark surfaces
- Scroll-friendly bento sections for services and trust signals
- Agent reasoning panel that visualizes streaming tokens and tool states
- Concierge lead form with real-time guidance cues

## Backend Highlights

- FastAPI entry point with versioned API layout
- Pydantic v2 request and response schemas
- LangGraph workflow that simulates plan, retrieve, and synthesize stages
- LlamaIndex-ready retrieval contract documented in `docs/architecture.md`

## Quick Start

### Frontend

```bash
pnpm install
pnpm dev:web
```

### Backend

```bash
cd backend
python3.12 -m venv .venv
source .venv/bin/activate
pip install -e .
uvicorn app.main:app --reload
```

## Design Direction

The visual system uses Orbitron for display typography, Lexend for body copy, a midnight-to-obsidian atmosphere, aurora gradients, refracted glass cards, and deliberate motion that turns the homepage into a living lab instead of a generic corporate brochure.

