export const ownerInfo = {
  name: "Krish Tyagi",
  role: "Lead Architect & Full Stack Developer",
  location: "Noida, India",
  email: "krishtyagi726@gmail.com",
  phone: "+91 9315060525",
  summary:
    "Full Stack Developer specializing in high-signal AI environments, FastAPI orchestration, and cinematic React frontends. Building end-to-end production systems from vector-ready e-commerce to automated SaaS platforms.",
  skills: [
    {
      category: "Frontend & UI",
      items: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Tailwind CSS v4",
        "Framer Motion",
        "Three.js",
        "GSAP",
        "HTML5/CSS3",
      ],
    },
    {
      category: "Backend & API",
      items: [
        "Python",
        "FastAPI",
        "Uvicorn",
        "Pydantic v2",
        "RESTful APIs",
        "Node.js",
        "Express",
        "SSE Streaming",
      ],
    },
    {
      category: "Agentic & RAG",
      items: [
        "LangGraph",
        "LlamaIndex",
        "LangChain",
        "Vector DBs",
        "Groq AI",
        "Gemini API",
        "OpenAI APIs",
      ],
    },
    {
      category: "Databases",
      items: [
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "SQLAlchemy",
        "Database Optimization",
      ],
    },
    {
      category: "Ops & Cloud",
      items: [
        "Docker",
        "CI/CD Pipelines",
        "AWS",
        "Render",
        "Nginx",
        "GitHub Actions",
      ],
    },
    {
      category: "Enterprise & Automation",
      items: [
        "SAP Integration",
        "IT Automation",
        "ManageEngine",
        "Process Logic",
        "Zapier Custom Integration",
      ],
    },
  ],
};

export const servicePillars = [
  {
    eyebrow: "E-Commerce & Retail",
    title: "Legend Detailers & Legend Laundry",
    description:
      "High-performance digital storefronts and premium booking platforms tuned for active service business operations.",
  },
  {
    eyebrow: "AI Chatbots & Agents",
    title: "DishBot Commerce Support",
    description:
      "LangGraph-powered AI support consoles with multi-agent orchestration, persistent memory, and automated checkouts.",
  },
  {
    eyebrow: "Voice Infrastructure",
    title: "Magic Voice Receptionist",
    description:
      "Hinglish-speaking AI receptionist built with LiveKit and Whisper to automate inbound calls, bookings, and customer FAQs.",
  },
  {
    eyebrow: "AI Automation SaaS",
    title: "Magic Legal & Magic Business",
    description:
      "Automated business generation suites, branding kit engines, and AI-powered legal document drafting platforms.",
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  links?: { live?: string; github?: string };
  video?: string;
  badge?: string;
};

export const projects: Project[] = [
  {
    title: "TilesKart",
    category: "E-Commerce",
    description:
      "A complete multi-seller marketplace for tiles and ceramics. Features custom dashboards for sellers, detailed product catalogs, shopping cart, and secure checkout workflows.",
    tech: ["Node.js", "Express", "Swagger", "JavaScript"],
    links: { live: "https://tileskart-1.onrender.com/" },
    badge: "Live",
  },
  {
    title: "Legend Detailers",
    category: "E-Commerce",
    description:
      "Premium car detailing service platform with product catalog, booking system, and a full-featured storefront built for real-world operations.",
    tech: ["FastAPI", "Python", "Render", "REST API"],
    links: { live: "https://thelegenddetailers-web.onrender.com/" },
    video: "/recordings/legend-detailers.mp4",
    badge: "Live",
  },
  {
    title: "Magic Legal",
    category: "AI SaaS",
    description:
      "AI-powered legal document generator with templates for Rent Agreements, NDAs, Service Agreements, Employment Letters, and Partnership Deeds.",
    tech: ["FastAPI", "Groq AI", "Gemini", "ReportLab"],
    links: { live: "https://magic-legal.onrender.com/" },
    video: "/recordings/recording-jun28.mov",
    badge: "Live",
  },
  {
    title: "Magic Business",
    category: "AI Platform",
    description:
      "All-in-one business automation platform with AI-driven workflows, client management, and enterprise-grade intelligence for modern teams.",
    tech: ["FastAPI", "Next.js", "Python", "Render"],
    links: { live: "https://magic-business.onrender.com/" },
    video: "/recordings/recording-jun23.mov",
    badge: "Live",
  },
  {
    title: "DishBot",
    category: "AI Chatbot",
    description:
      "AI-powered commerce and support console for DishTV. Browse products, compare packages, recharge accounts and get human-approved checkout — all through one intelligent chat interface powered by LangGraph supervisor-worker architecture with persistent memory.",
    tech: ["FastAPI", "LLM", "Python", "Render"],
    links: { live: "https://dishbot.onrender.com/" },
    video: "/recordings/recording-may28.mov",
    badge: "Live",
  },
  {
    title: "Astrology Portal",
    category: "SaaS Platform",
    description:
      "Professional business platform with appointment booking, payment tracking, and full admin dashboard for astrology services.",
    tech: ["Docker", "FastAPI", "Next.js", "Swagger"],
    links: { live: "https://abhishek-astrologer.onrender.com/" },
    badge: "Live",
  },
  {
    title: "Magic Studio Model",
    category: "AI/ML",
    description:
      "Orchestration engine experiment for agentic workflows and synthetic data generating pipelines.",
    tech: ["TypeScript", "LangChain", "Vector Space"],
    links: { github: "https://github.com/krishtyagi260605-gif/magic-studio-demo-model-" },
  },
];

export const experiences = [
  {
    role: "Founder & Lead Architect",
    company: "Magic Ecosystem",
    period: "May 2025 – Present",
    details: [
      "Building and orchestrating the Magic Ecosystem of agentic AI services and SaaS solutions.",
      "Designing motion-first cinematic React frontends and robust FastAPI backends.",
      "Deploying autonomous agents for legal drafting, business intelligence, voice reception, and client management.",
    ],
  },
  {
    role: "Python & FastAPI Backend Trainee",
    company: "TechChefz Digital",
    period: "Jan 2026 – May 2026",
    details: [
      "Developing scalable RESTful APIs with FastAPI and LangGraph.",
      "Building AI-powered search pipelines using vector databases.",
      "Managing production deployments with Docker and CI/CD.",
    ],
  },
  {
    role: "Developing and Testing Intern",
    company: "Honda Cars India",
    period: "Aug 2025 – Oct 2025",
    details: [
      "Optimized AI-based chatbot systems for customer conversation analysis.",
      "Implemented automated accuracy testing for NLP responses.",
    ],
  },
  {
    role: "IT Department Intern",
    company: "Somany Ceramics",
    period: "May 2024 – Jul 2024",
    details: [
      "Integrated SAP modules for inventory and payroll operations.",
      "Managed IT monitoring systems using ManageEngine.",
    ],
  },
];

export type EcosystemProduct = {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  live?: string;
};

export const magicEcosystem: EcosystemProduct[] = [
  {
    title: "TilesKart",
    tagline: "CERAMICS MARKETPLACE",
    description:
      "A complete multi-seller marketplace for tiles and ceramics. Features custom dashboards for sellers, detailed product catalogs, shopping cart, and secure checkout workflows.",
    tech: ["Node.js", "Express", "Swagger"],
    live: "https://tileskart-1.onrender.com/",
  },
  {
    title: "Magic Code",
    tagline: "Autonomous Synthesis",
    description:
      "Refactoring and generating production-grade code via deep LLM context indexing. It doesn't just suggest; it builds according to your specific architectural patterns.",
    tech: ["Python AST", "Tree-Sitter", "LlamaIndex"],
  },
  {
    title: "Magic Agentic AI",
    tagline: "Strategic Orchestration",
    description:
      "Multi-agent systems using LangGraph to manage complex state transitions and recursive task planning without human intervention.",
    tech: ["LangGraph", "State Machines", "Tool Routing"],
  },
  {
    title: "Magic Chatbot",
    tagline: "Conversational Logic",
    description:
      "The frontend for your intelligence. Featuring Sisi, an AI persona capable of deep reasoning and real-time architectural synthesis.",
    tech: ["SSE Streaming", "Persona Logic", "Next.js"],
  },
  {
    title: "Magic Studio",
    tagline: "Unified Development Lab",
    description:
      "The command center for all Magic products. A high-performance dashboard for monitoring agent health and system performance.",
    tech: ["React Server Components", "FastAPI Hub", "Vercel"],
  },
  {
    title: "Magic Excel",
    tagline: "Data Bridge Mastery",
    description:
      "Automating the 'Spreadsheet Layer' of enterprise operations. Python-to-Excel pipelines that handle millions of cells with BI-ready output.",
    tech: ["OpenPyXL", "Pandas", "BI Integration"],
  },
  {
    title: "Magic Automations",
    tagline: "Workflow Infrastructure",
    description:
      "RPA reimagined. Connecting legacy systems to modern agentic backends via secure, high-speed automation protocols.",
    tech: ["Zapier Custom", "API Hubs", "Process Logic"],
  },
  {
    title: "Magic Business",
    tagline: "BUSINESS INTELLIGENCE",
    description:
      "Complete business branding kit generated instantly. Business card, letterhead, logo, PPT, invoice, social media kit, quotation template and digital visiting card — all from one form entry.",
    tech: ["AI Generation", "PDF Engine", "Brand Kit"],
  },
  {
    title: "Magic Legal",
    tagline: "LEGAL INTELLIGENCE",
    description:
      "AI-powered legal document drafting. Labour contracts, NDAs, rental agreements, partnership deeds, grievance documents and court-ready templates generated in minutes.",
    tech: ["LLM Drafting", "Indian Law", "PDF Output"],
  },
  {
    title: "Magic Voice",
    tagline: "VOICE INFRASTRUCTURE",
    description:
      "AI receptionist that never misses a call. Speaks Hinglish, handles appointments, answers FAQs and routes queries — 24/7 without human intervention.",
    tech: ["LiveKit", "Whisper", "Voice Agents"],
  },
  {
    title: "SpamShield 3D",
    tagline: "CYBERSECURITY LAYER",
    description:
      "Advanced email threat detection using ensemble ML models. Detects spam, phishing and fake emails with confidence scoring and explainable AI.",
    tech: ["Naive Bayes", "TFIDF", "Threat Detection"],
  },
  {
    title: "Magic GRC",
    tagline: "HR COMPLIANCE",
    description:
      "Digital Grievance Redressal Committee system compliant with Industrial Relations Code 2020. Manage worker complaints, track resolutions and generate legal reports.",
    tech: ["IRC 2020", "Compliance", "FastAPI"],
  },
  {
    title: "Magic CRM",
    tagline: "CLIENT MANAGEMENT",
    description:
      "Lightweight CRM for small businesses. Track leads, deals, follow-ups and revenue — with AI that summarizes every client interaction automatically.",
    tech: ["Pipeline", "AI Summary", "FastAPI"],
  },
  {
    title: "DishBot",
    tagline: "COMMERCE INTELLIGENCE",
    description:
      "AI-powered commerce and support console for DishTV. Browse products, compare packages, recharge accounts and get human-approved checkout — all through one intelligent chat interface powered by LangGraph supervisor-worker architecture with persistent memory.",
    tech: ["LangGraph", "HITL", "Commerce", "FastAPI"],
    live: "https://dishbot.onrender.com/",
  },
];

export const reasoningTokens = [
  "Intent mapped",
  "Domain classified",
  "Retrieval route selected",
  "Tool chain warming",
  "Execution guardrails applied",
  "Response stream online",
  "Magic Studio operational.",
];

export const toolStatuses = [
  { name: "CRM Sync", status: "Live" },
  { name: "Vector Search", status: "Querying" },
  { name: "Excel Bridge", status: "Ready" },
  { name: "BI Export", status: "Queued" },
];
