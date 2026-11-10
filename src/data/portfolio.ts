export interface Project {
  id: string;
  questCode: string; // e.g. "QUEST_01"
  difficulty: "S-CLASS" | "A-CLASS" | "RAID";
  expReward: string;
  lootDrops: string[];
  title: string;
  subtitle: string;
  category: "ai" | "web" | "systems" | "creative";
  categoryLabel: string;
  year: string;
  techStack: string[];
  techChip: string;
  description: string;
  longDescription: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl: string;
  image: string;
  aspectRatio?: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0-100
  rank: "S" | "A" | "B";
  tag: string;
  manaCost?: string;
}

export interface SkillCategory {
  title: string;
  number: string;
  description: string;
  skills: SkillItem[];
}

export interface Milestone {
  period: string;
  role: string;
  organization: string;
  description: string;
  location: string;
  questStatus: "COMPLETED" | "ACTIVE IN PROGRESS";
}

export interface PlayerStats {
  level: number;
  classTitle: string;
  guild: string;
  rank: string;
  hp: { current: number; max: number };
  mp: { current: number; max: number };
  exp: { current: number; max: number };
  server: string;
  stats: {
    intelligence: number;
    systemsCraft: number;
    architecturalVision: number;
    agility: number;
  };
  passives: {
    title: string;
    effect: string;
    icon: string;
  }[];
}

export interface PortfolioData {
  player: PlayerStats;
  profile: {
    name: string;
    shortName: string;
    monogram: string;
    title: string;
    status: string;
    availableFor: string;
    eyebrow: string;
    headline: string;
    bio: string[];
    location: {
      city: string;
      state: string;
      country: string;
      timezone: string;
      college: string;
    };
    contact: {
      email: string;
      github: string;
      linkedin: string;
      instagram: string;
      twitter?: string;
    };
  };
  stats: { label: string; value: string; detail: string }[];
  projects: Project[];
  skills: SkillCategory[];
  marqueeSkills: string[];
  milestones: Milestone[];
  philosophy: {
    quote: string;
    quoteAuthor: string;
    paragraphs: string[];
  };
}

export const portfolioData: PortfolioData = {
  player: {
    level: 22,
    classTitle: "Neural Architect & Systems Developer",
    guild: "Thejus Engg College // CS (AI) Inaugural Batch",
    rank: "S-CLASS CADET",
    hp: { current: 100, max: 100 },
    mp: { current: 92, max: 100 },
    exp: { current: 2026, max: 2026 },
    server: "ASIA-SOUTH // THRISSUR_GRID",
    stats: {
      intelligence: 96,
      systemsCraft: 92,
      architecturalVision: 94,
      agility: 88,
    },
    passives: [
      {
        title: "Deep Focus (Passive)",
        effect: "+50% flow-state endurance during complex compiler & tensor debugging.",
        icon: "🧠",
      },
      {
        title: "Algorithmic Precision",
        effect: "+40% efficiency in memory allocation and vector retrieval pipelines.",
        icon: "⚡",
      },
      {
        title: "Noir & Lumen Aura",
        effect: "-80% cognitive interface friction via clean, distraction-free typography.",
        icon: "⚔️",
      },
    ],
  },

  profile: {
    name: "Muzain Shehzade V M",
    shortName: "Muzain",
    monogram: "MS",
    title: "AI Engineer & Systems Developer",
    status: "SEEKING SUMMER / FALL '25 GUILD QUESTS",
    availableFor: "Open for high-impact AI research contracts, distributed systems roles & engineering builds",
    eyebrow: "PLAYER: MUZAIN // CLASS: AI SPECIALIST • THEJUS '26 • LVL 22",
    headline: "Engineering intelligent worlds, with game-engine precision.",
    bio: [
      "Player 1: First-batch Computer Science & Artificial Intelligence undergraduate at Thejus Engineering College, Thrissur, Kerala.",
      "Specializing in deep learning models, low-level C system architectures, and responsive 60fps web interfaces. I treat every codebase like a game-engine loop: zero dropped frames, predictable memory usage, and immaculate visual aesthetics.",
      "Currently tackling multi-agent neural coordination, local vector retrieval dungeons, and sub-second speech synthesis pipelines."
    ],
    location: {
      city: "Thrissur",
      state: "Kerala",
      country: "India",
      timezone: "Asia/Kolkata",
      college: "Thejus Engineering College",
    },
    contact: {
      email: "muzainshehzade@gmail.com",
      github: "https://github.com/muzainshehzade",
      linkedin: "https://linkedin.com/in/muzainshehzade",
      instagram: "https://instagram.com/muzainshehzade",
      twitter: "https://x.com/muzainshehzade",
    },
  },

  stats: [
    { label: "COHORT", value: "2022–26", detail: "Inaugural CS (AI) Batch" },
    { label: "MAIN WEAPON", value: "PyTorch & C", detail: "Neural & Systems Core" },
    { label: "FRONTEND DECK", value: "Next.js / TS", detail: "60 FPS Web UI" },
    { label: "SERVER NODE", value: "Kerala, IN", detail: "IST UTC+5:30 Grid" },
  ],

  projects: [
    {
      id: "neuro-scribe",
      questCode: "QUEST_01",
      difficulty: "S-CLASS",
      expReward: "+4,500 EXP",
      lootDrops: ["4-Bit Quantized Weights", "FastAPI Inference Demon", "ROC-AUC 0.94 Certificate"],
      title: "NeuroScribe — Clinical Diagnostic Synthesizer",
      subtitle: "Domain-adapted multimodal vision-language model for automated radiology synthesis",
      category: "ai",
      categoryLabel: "Artificial Intelligence",
      year: "2025",
      techStack: ["Python", "PyTorch", "HuggingFace", "FastAPI", "Docker"],
      techChip: "PYTHON • PYTORCH • TRANSFORMERS",
      description: "An automated clinical report synthesizer utilizing quantized medical vision transformers to generate structured clinical impressions from diagnostic imaging.",
      longDescription: "Mission Briefing: Developed to eliminate physician diagnostic latency. Fine-tuned a vision-language backbone on radiography scans paired with deterministic validation, achieving 94.2% diagnostic concordance while cutting report generation time by 68%.",
      highlights: [
        "94.2% semantic agreement against gold-standard radiologist ground truth",
        "Sub-1.2s inference on consumer GPUs via 4-bit AWQ quantization",
        "Deterministic guardrail pipeline mitigating anatomical hallucinations"
      ],
      metrics: [
        { label: "Accuracy", value: "94.2%" },
        { label: "Inference Latency", value: "1.18s" },
        { label: "Model VRAM", value: "3.8 GB" }
      ],
      liveUrl: "https://github.com/muzainshehzade",
      githubUrl: "https://github.com/muzainshehzade/neuro-scribe",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      aspectRatio: "aspect-[16/10]"
    },
    {
      id: "cortex-search",
      questCode: "QUEST_02",
      difficulty: "A-CLASS",
      expReward: "+3,200 EXP",
      lootDrops: ["AST Tree Parser", "Hybrid Dense Index", "Sub-15ms Query Engine"],
      title: "CortexSearch — Neural Hybrid Code Retrieval",
      subtitle: "Dense semantic vector indexing & AST parsing for instant codebase navigation",
      category: "ai",
      categoryLabel: "Information Retrieval",
      year: "2024",
      techStack: ["Python", "TypeScript", "Qdrant", "Tree-sitter", "Next.js"],
      techChip: "PYTHON • VECTOR DB • TREE-SITTER",
      description: "Zero-latency hybrid code search engine combining dense AST vector embeddings with BM25 sparse lexical tokens for intuitive natural language codebase traversal.",
      longDescription: "Mission Briefing: Eliminates developer search friction. Parses codebases into syntax trees with Tree-sitter, computes contextual token embeddings, and blends sparse and dense retrieval metrics using reciprocal rank fusion.",
      highlights: [
        "Cross-language support for C, Python, TypeScript, and Go repositories",
        "Sub-15ms query execution over 250,000+ line codebases",
        "Local-first airgapped operation with zero cloud telemetry leak"
      ],
      metrics: [
        { label: "Query Speed", value: "< 15ms" },
        { label: "Recall @ 5", value: "91.8%" },
        { label: "Compression", value: "4.2x" }
      ],
      liveUrl: "https://github.com/muzainshehzade",
      githubUrl: "https://github.com/muzainshehzade/cortex-search",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      aspectRatio: "aspect-[16/10]"
    },
    {
      id: "lumen-synth",
      questCode: "QUEST_03",
      difficulty: "A-CLASS",
      expReward: "+2,800 EXP",
      lootDrops: ["60 FPS Fragment Shader", "Signed Distance Fields", "WebAudio FFT Analyzer"],
      title: "LumenVis — Architectural Audio-Visual Synthesizer",
      subtitle: "Real-time WebAudio frequency decomposition with raymarched geometry",
      category: "creative",
      categoryLabel: "Creative Computing",
      year: "2025",
      techStack: ["TypeScript", "WebGL", "GLSL", "WebAudio API", "Tailwind CSS"],
      techChip: "TYPESCRIPT • GLSL • WEBAUDIO",
      description: "An editorial, monochromatic audio-reactive synthesizer translating polyphonic spectral frequencies into procedural ray-marched architectural surfaces.",
      longDescription: "Mission Briefing: Raymarches brutalist obsidian architecture dynamically reactive to audio frequencies. FFT buffers drive signed distance field (SDF) shaders running smoothly at 60 FPS on mobile hardware.",
      highlights: [
        "Locked 60 FPS rendering pipeline in pure fragment shaders",
        "Sub-band frequency smoothing with custom temporal exponential decay",
        "Tactile cyber HUD displaying live spectral harmonics"
      ],
      metrics: [
        { label: "Frame Rate", value: "60 FPS" },
        { label: "FFT Buffer", value: "2048 Bands" },
        { label: "Bundle Size", value: "< 42 KB" }
      ],
      liveUrl: "https://github.com/muzainshehzade",
      githubUrl: "https://github.com/muzainshehzade/lumen-synth",
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
      aspectRatio: "aspect-[16/10]"
    },
    {
      id: "synapse-mesh",
      questCode: "QUEST_04",
      difficulty: "S-CLASS",
      expReward: "+5,000 EXP",
      lootDrops: ["gRPC Daemon Binary", "Laplace Noise Injector", "Edge Cluster Config"],
      title: "SynapseMesh — Edge Distributed Federated Learning",
      subtitle: "Differential privacy client for decentralized model aggregation",
      category: "systems",
      categoryLabel: "Distributed Systems",
      year: "2024",
      techStack: ["C++", "Python", "gRPC", "Protobuf", "ONNX Runtime"],
      techChip: "C++ • GRPC • FEDERATED AI",
      description: "A lightweight decentralized federated learning protocol designed for resource-constrained edge devices with Renyi differential privacy guarantees.",
      longDescription: "Mission Briefing: Enables multi-node model aggregation across heterogeneous edge clients without transferring sensitive raw data. Engineered in modern C++ with gRPC and dynamic gradient compression.",
      highlights: [
        "76% network bandwidth savings via Top-K gradient sparsification",
        "Formal differential privacy guarantee with calibrated Laplace noise",
        "Demonstrated on multi-node edge Raspberry Pi clusters"
      ],
      metrics: [
        { label: "Bandwidth Saved", value: "76%" },
        { label: "Dropout Shield", value: "40%" },
        { label: "Binary Footprint", value: "4.1 MB" }
      ],
      liveUrl: "https://github.com/muzainshehzade",
      githubUrl: "https://github.com/muzainshehzade/synapse-mesh",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      aspectRatio: "aspect-[16/10]"
    },
    {
      id: "chronicle-vault",
      questCode: "QUEST_05",
      difficulty: "A-CLASS",
      expReward: "+3,000 EXP",
      lootDrops: ["SQLite-Wasm Engine", "Force-Directed Graph", "OPFS Local Vault"],
      title: "Chronicle — Minimal Obsidian Knowledge Vault",
      subtitle: "Bi-directional Markdown workspace with local-first vector indexing",
      category: "web",
      categoryLabel: "Web & Systems",
      year: "2024",
      techStack: ["React", "TypeScript", "Tailwind CSS", "SQLite-Wasm", "IndexedDB"],
      techChip: "REACT • TYPESCRIPT • SQLITE",
      description: "A serene, local-first markdown workspace featuring bi-directional wiki linking, graph-based thought visualization, and sub-10ms full-text SQLite indexing.",
      longDescription: "Mission Briefing: Provides an offline-first knowledge vault with zero latency and zero cloud tracking. Harnesses Origin Private File System (OPFS) and in-browser SQLite-Wasm for immediate query responses.",
      highlights: [
        "100% offline capability with OPFS persistent storage",
        "Interactive 2D canvas knowledge galaxy with force physics",
        "Dark visual aesthetic with zero typing distraction"
      ],
      metrics: [
        { label: "Write Latency", value: "0ms local" },
        { label: "Index Query", value: "< 8ms" },
        { label: "Memory Footprint", value: "18 MB" }
      ],
      liveUrl: "https://github.com/muzainshehzade",
      githubUrl: "https://github.com/muzainshehzade/chronicle-vault",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      aspectRatio: "aspect-[16/10]"
    },
    {
      id: "sentience-voice",
      questCode: "QUEST_06",
      difficulty: "S-CLASS",
      expReward: "+4,800 EXP",
      lootDrops: ["WebRTC Gateway", "Acoustic VAD Filter", "Speculative Decoder"],
      title: "Sentience — Low-Latency Voice Companion",
      subtitle: "Sub-300ms duplex conversational agent with emotional timbre adaptation",
      category: "ai",
      categoryLabel: "Artificial Intelligence",
      year: "2025",
      techStack: ["Python", "WebRTC", "Whisper", "VITS", "FastAPI"],
      techChip: "PYTHON • WEBRTC • WHISPER",
      description: "An end-to-end full-duplex conversational voice agent featuring speculative token generation and acoustic interruption detection.",
      longDescription: "Mission Briefing: Built for natural human-machine verbal cadence. Streams audio through WebRTC, performs speculative streaming decoding, and halts speech synthesis within 40ms upon human interruption.",
      highlights: [
        "280ms average end-of-speech to synthesized acoustic response",
        "Hardware-level barge-in detection preventing awkward voice collisions",
        "Streaming neural vocoder tuned for crisp, intelligible speech"
      ],
      metrics: [
        { label: "Roundtrip", value: "280ms" },
        { label: "Barge-in Cutoff", value: "< 40ms" },
        { label: "WER (Clear)", value: "3.4%" }
      ],
      liveUrl: "https://github.com/muzainshehzade",
      githubUrl: "https://github.com/muzainshehzade/sentience-voice",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
      aspectRatio: "aspect-[16/10]"
    }
  ],

  skills: [
    {
      title: "Neural Core & Deep Learning",
      number: "TIER 01",
      description: "Model architectures, mathematical optimization, and inference acceleration.",
      skills: [
        { name: "PyTorch & TorchVision", level: 96, rank: "S", tag: "MAIN SKILL", manaCost: "15 MP" },
        { name: "Transformers (HuggingFace)", level: 92, rank: "S", tag: "NLP / VISION", manaCost: "25 MP" },
        { name: "TensorFlow & Keras", level: 85, rank: "A", tag: "MODELS", manaCost: "20 MP" },
        { name: "Vector Embeddings & RAG", level: 90, rank: "S", tag: "RETRIEVAL", manaCost: "10 MP" },
        { name: "OpenCV & Vision Filters", level: 86, rank: "A", tag: "IMAGING", manaCost: "15 MP" },
        { name: "Scikit-Learn & Math", level: 94, rank: "S", tag: "FOUNDATION", manaCost: "5 MP" },
      ]
    },
    {
      title: "Systems, Memory & Low-Level Craft",
      number: "TIER 02",
      description: "Memory discipline, algorithms, and computational efficiency.",
      skills: [
        { name: "Python Core", level: 98, rank: "S", tag: "PRIMARY WEAPON", manaCost: "5 MP" },
        { name: "C & Systems Programming", level: 92, rank: "S", tag: "RAW HARDWARE", manaCost: "30 MP" },
        { name: "TypeScript & JavaScript", level: 94, rank: "S", tag: "FULL STACK", manaCost: "10 MP" },
        { name: "C++ (Algorithms & DSA)", level: 88, rank: "A", tag: "COMPETITIVE", manaCost: "25 MP" },
        { name: "SQL & Query Engine", level: 89, rank: "A", tag: "DATA BASE", manaCost: "10 MP" },
        { name: "Linux & Bash Automation", level: 92, rank: "S", tag: "TERMINAL OS", manaCost: "5 MP" },
      ]
    },
    {
      title: "Tactile Web & 60fps UI Engines",
      number: "TIER 03",
      description: "Interactive UI/UX craft, component systems, and fluid physics.",
      skills: [
        { name: "Next.js (App Router)", level: 95, rank: "S", tag: "ENGINE CORE", manaCost: "10 MP" },
        { name: "React 18 / 19", level: 94, rank: "S", tag: "REACTIVE UI", manaCost: "10 MP" },
        { name: "Tailwind CSS & Design Tokens", level: 96, rank: "S", tag: "AESTHETICS", manaCost: "5 MP" },
        { name: "Framer Motion & Spring Physics", level: 92, rank: "S", tag: "ANIMATION", manaCost: "15 MP" },
        { name: "WebGL & Shader Shaders", level: 78, rank: "B", tag: "GRAPHICS", manaCost: "35 MP" },
        { name: "WebAudio API", level: 84, rank: "A", tag: "SYNTHESIS", manaCost: "10 MP" },
      ]
    },
    {
      title: "DevOps, Containers & Guild Tooling",
      number: "TIER 04",
      description: "Reproducible runtimes, deployment pipelines, and version control.",
      skills: [
        { name: "Git & Collaborative GitHub", level: 95, rank: "S", tag: "VERSION SHIELD", manaCost: "0 MP" },
        { name: "Docker & Containerization", level: 88, rank: "A", tag: "SANDBOX", manaCost: "15 MP" },
        { name: "FastAPI Async Backends", level: 94, rank: "S", tag: "REST API", manaCost: "10 MP" },
        { name: "Vercel & Edge Deployment", level: 93, rank: "S", tag: "WARP HOST", manaCost: "5 MP" },
        { name: "Neovim & VS Code Setup", level: 96, rank: "S", tag: "TACTICAL IDE", manaCost: "0 MP" },
        { name: "CI/CD & Testing", level: 85, rank: "A", tag: "AUTOMATION", manaCost: "10 MP" },
      ]
    }
  ],

  marqueeSkills: [
    "PYTORCH [LVL 96]",
    "C SYSTEMS [LVL 92]",
    "NEXT.JS [LVL 95]",
    "TRANSFORMERS [LVL 92]",
    "TYPESCRIPT [LVL 94]",
    "FASTAPI [LVL 94]",
    "DOCKER [LVL 88]",
    "VECTOR EMBEDDINGS [LVL 90]",
    "WEBAUDIO SYNTH [LVL 84]",
    "FRAMER MOTION [LVL 92]",
    "LINUX KERNEL [LVL 92]",
    "SQLITE [LVL 89]"
  ],

  milestones: [
    {
      period: "2022 — Present (Target 2026)",
      role: "Class: B.Tech CS (AI) Cadet",
      organization: "Thejus Engineering College, Thrissur, Kerala",
      location: "Thrissur Grid",
      description: "First-batch cohort. Grinding fundamental skill nodes: discrete mathematics, operating systems, data structures, linear algebra, and deep learning architectures.",
      questStatus: "ACTIVE IN PROGRESS"
    },
    {
      period: "2024 — Present",
      role: "Lead Officer & Guild Contributor",
      organization: "AI & Systems Syndicate",
      location: "Kerala Node",
      description: "Conducting technical raid workshops on applied deep learning, neural search vectors, and modern web engines for collegiate engineering cadets.",
      questStatus: "ACTIVE IN PROGRESS"
    },
    {
      period: "2023 — 2024",
      role: "Hackathon Raid Winner & Challenger",
      organization: "State & Collegiate Tech Summits",
      location: "Kerala",
      description: "Constructed rapid prototypes under 36-hour sprint constraints; awarded honors for multimodal clinical assistants.",
      questStatus: "COMPLETED"
    }
  ],

  philosophy: {
    quote: "Simplicity is the prerequisite for reliability.",
    quoteAuthor: "Edsger W. Dijkstra",
    paragraphs: [
      "In game architecture as in intelligent systems, peak performance stems from rigorous economy. Every unnecessary allocation is a latency penalty; every decorative clutter is cognitive drag.",
      "As an Artificial Intelligence undergraduate in the inaugural batch at Thejus Engineering College in Thrissur, my campaign is grounded in mathematical discipline and hardware empathy. Whether tuning loss curves in PyTorch, managing pointers in C, or locking browser frames at 60 FPS, the philosophy never wavers: zero bloat, ruthless optimization, and absolute stability.",
      "I believe the greatest software does not overwhelm the player with noise, but empowers them with silent, effortless mastery."
    ]
  }
};
