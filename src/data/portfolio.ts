export interface Project {
  id: string;
  questCode: string;
  difficulty: "NOVICE" | "INTERMEDIATE" | "CHALLENGE";
  expReward: string;
  lootDrops: string[];
  title: string;
  subtitle: string;
  category: "ai" | "web" | "systems" | "games";
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
  level: number;
  rank: "S" | "A" | "LEARNING";
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
  questStatus: "COMPLETED" | "CURRENTLY GRINDING";
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
    curiosity: number;
    pythonMastery: number;
    cFoundations: number;
    webCraft: number;
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
    level: 1,
    classTitle: "First-Year Computer Science (AI) Cadet",
    guild: "Thejus Engineering College // Inaugural CS (AI) Batch",
    rank: "ROOKIE INITIATE [LVL 01]",
    hp: { current: 100, max: 100 },
    mp: { current: 100, max: 100 },
    exp: { current: 350, max: 1000 },
    server: "THRISSUR_GRID // KERALA_NODE",
    stats: {
      curiosity: 99,
      pythonMastery: 82,
      cFoundations: 80,
      webCraft: 78,
    },
    passives: [
      {
        title: "First-Year Curiosity",
        effect: "+100% learning velocity when exploring algorithms, neural concepts & web frameworks.",
        icon: "🌱",
      },
      {
        title: "C Language Discipline",
        effect: "+60% understanding of raw memory pointers, stack logic & hardware foundations.",
        icon: "⚡",
      },
      {
        title: "Late Night Build Sessions",
        effect: "+40% problem-solving grit while debugging code and crafting projects from scratch.",
        icon: "☕",
      },
    ],
  },

  profile: {
    name: "Muzain Shehzade V M",
    shortName: "Muzain",
    monogram: "MS",
    title: "1st Year B.Tech Computer Science (AI) Student",
    status: "FIRST-YEAR STUDENT // OPEN FOR HACKATHONS & COLLABS",
    availableFor: "Open for beginner-friendly open-source builds, student hackathons, and study collaborations",
    eyebrow: "1ST YEAR B.TECH CS (AI) • THEJUS ENGINEERING COLLEGE • THRISSUR, KERALA",
    headline: "Starting my journey into Artificial Intelligence, from the fundamentals up.",
    bio: [
      "Hey! I am Muzain Shehzade, a first-year Computer Science and Engineering (Artificial Intelligence) student at Thejus Engineering College, Thrissur, Kerala — proud to be part of our college's very first CS (AI) batch.",
      "As a first-year undergraduate, I am laying solid foundations: mastering C programming, building practical tools with Python, understanding data structures, and exploring the basics of machine learning and modern web development.",
      "I love building things hands-on. From command-line tools and pathfinding visualizers to interactive web interfaces, I believe the best way to master computer science is by writing code every single day."
    ],
    location: {
      city: "Thrissur",
      state: "Kerala",
      country: "India",
      timezone: "Asia/Kolkata",
      college: "Thejus Engineering College, Thrissur",
    },
    contact: {
      email: "muzainshehzade@gmail.com",
      github: "https://github.com/muzaain",
      linkedin: "https://linkedin.com/in/muzainshehzade",
      instagram: "https://instagram.com/muzainshehzade",
      twitter: "https://x.com/muzainshehzade",
    },
  },

  stats: [
    { label: "ACADEMIC YEAR", value: "1st Year", detail: "B.Tech CS (AI) 2024–28" },
    { label: "FOUNDATION", value: "C & Python", detail: "Core Logic & Scripting" },
    { label: "EXPLORING", value: "AI & ML", detail: "Computer Vision & LLMs" },
    { label: "CAMPUS", value: "Thejus", detail: "Thrissur, Kerala" },
  ],

  projects: [
    {
      id: "pathfinding-visualizer",
      questCode: "QUEST_01",
      difficulty: "INTERMEDIATE",
      expReward: "+450 EXP",
      lootDrops: ["A* Algorithm Script", "Pygame Grid Engine", "Breadth-First Search Node"],
      title: "Pathfinder — Algorithm Visualizer in Python",
      subtitle: "Interactive 2D grid visualizer demonstrating BFS, DFS, and A* pathfinding search logic",
      category: "ai",
      categoryLabel: "Algorithms & AI Basics",
      year: "2024",
      techStack: ["Python", "Pygame", "Graph Theory", "Algorithms"],
      techChip: "PYTHON • PYGAME • ALGORITHMS",
      description: "An interactive visual tool that allows users to place obstacles, choose start and end nodes, and watch classic pathfinding algorithms find the shortest route in real time.",
      longDescription: "Built to truly understand graph traversal and heuristics. Users can draw dynamic walls, set weighted nodes, and visually compare how Dijkstra, Breadth-First Search (BFS), and A* navigate obstacles step-by-step with real-time speed controls.",
      highlights: [
        "Visual step-by-step frontier exploration displaying visited nodes in color",
        "Custom wall drawing, maze generation, and heuristic distance toggles",
        "Zero external framework dependencies other than Pygame for rendering"
      ],
      metrics: [
        { label: "Algorithms", value: "3 Modes" },
        { label: "Grid Size", value: "50x50" },
        { label: "Frame Rate", value: "60 FPS" }
      ],
      liveUrl: "https://github.com/muzaain",
      githubUrl: "https://github.com/muzaain/muzain-shehzade-v-m",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      aspectRatio: "aspect-[16/10]"
    },
    {
      id: "gesture-counter",
      questCode: "QUEST_02",
      difficulty: "INTERMEDIATE",
      expReward: "+500 EXP",
      lootDrops: ["MediaPipe Landmark Pipe", "OpenCV Video Loop", "Hand Landmark Map"],
      title: "VisionCount — Hand Landmark & Gesture Tracker",
      subtitle: "Real-time webcam computer vision tool detecting finger counts & hand gestures",
      category: "ai",
      categoryLabel: "Computer Vision",
      year: "2024",
      techStack: ["Python", "OpenCV", "MediaPipe", "NumPy"],
      techChip: "PYTHON • OPENCV • MEDIAPIPE",
      description: "A computer vision project running on live webcam feeds that tracks 21 hand landmarks, counts active fingers, and triggers custom on-screen gesture commands.",
      longDescription: "Developed while diving into practical computer vision in my first year. Utilizes Google MediaPipe's lightweight hand tracking framework alongside OpenCV to compute Euclidean distances between fingertip coordinates, enabling real-time finger counting and volume adjustments.",
      highlights: [
        "Tracks 21 3D hand landmarks in real time with high accuracy",
        "Custom heuristic classifying extended fingers vs closed fist",
        "Includes a fun system volume control gesture mode"
      ],
      metrics: [
        { label: "Tracking FPS", value: "~30 FPS" },
        { label: "Hand Points", value: "21 Nodes" },
        { label: "Latency", value: "< 35ms" }
      ],
      liveUrl: "https://github.com/muzaain",
      githubUrl: "https://github.com/muzaain/muzain-shehzade-v-m",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
      aspectRatio: "aspect-[16/10]"
    },
    {
      id: "cli-voice-assistant",
      questCode: "QUEST_03",
      difficulty: "NOVICE",
      expReward: "+350 EXP",
      lootDrops: ["Audio Speech Recognizer", "Offline TTS Voice Engine", "Wikipedia Search Scraper"],
      title: "JarvisLite — Python Desktop Voice Assistant",
      subtitle: "Hands-free desktop assistant executing voice commands, searches, and task automation",
      category: "ai",
      categoryLabel: "Voice Automation",
      year: "2024",
      techStack: ["Python", "pyttsx3", "SpeechRecognition", "Requests"],
      techChip: "PYTHON • SPEECH • AUTOMATION",
      description: "A friendly desktop voice companion that listens to microphone input, performs Google/Wikipedia queries, opens applications, and tells the time and weather.",
      longDescription: "One of my very first full Python projects! JarvisLite takes spoken voice commands, parses user intent with keyword matching and regex, and speaks back responses offline via pyttsx3, with fallbacks for online queries.",
      highlights: [
        "Completely offline voice feedback synthesis requiring no paid API keys",
        "Can launch apps, open favorite study websites, and search Wikipedia summaries",
        "Minimal CLI HUD displaying recognized speech and execution time"
      ],
      metrics: [
        { label: "Commands", value: "15+ Types" },
        { label: "Voice Mode", value: "Offline TTS" },
        { label: "Response", value: "< 1.5s" }
      ],
      liveUrl: "https://github.com/muzaain",
      githubUrl: "https://github.com/muzaain/muzain-shehzade-v-m",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      aspectRatio: "aspect-[16/10]"
    },
    {
      id: "thejus-cgpa-calculator",
      questCode: "QUEST_04",
      difficulty: "NOVICE",
      expReward: "+300 EXP",
      lootDrops: ["KTU Credit Scheme Matrix", "LocalStorage Sync", "SGPA Calculator"],
      title: "GradeSync — KTU / Thejus SGPA & CGPA Tracker",
      subtitle: "Clean web calculator tailored for KTU syllabus credit points & semester grade tracking",
      category: "web",
      categoryLabel: "Student Web Tool",
      year: "2024",
      techStack: ["JavaScript", "HTML5", "Tailwind CSS", "LocalStorage"],
      techChip: "JAVASCRIPT • HTML5 • TAILWIND",
      description: "A fast, distraction-free web tool built for fellow engineering classmates to calculate semester SGPA, forecast cumulative CGPA, and save grade sheets locally.",
      longDescription: "Created to solve a real pain point for first-year peers navigating KTU engineering grade credits. Features pre-filled subject credits for CS(AI) semesters, grade dropdowns (O, A+, A, B+, B...), and instant local storage saving.",
      highlights: [
        "Pre-configured for KTU B.Tech credit weighting schemes",
        "Instant calculation with 0 reload and offline LocalStorage persistence",
        "Minimal dark mode interface designed for quick mobile use"
      ],
      metrics: [
        { label: "Semesters", value: "S1 — S8" },
        { label: "Save Mode", value: "100% Local" },
        { label: "Page Load", value: "< 0.3s" }
      ],
      liveUrl: "https://github.com/muzaain",
      githubUrl: "https://github.com/muzaain/muzain-shehzade-v-m",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      aspectRatio: "aspect-[16/10]"
    },
    {
      id: "c-terminal-dungeon",
      questCode: "QUEST_05",
      difficulty: "INTERMEDIATE",
      expReward: "+400 EXP",
      lootDrops: ["Pointers & Struct Array", "File IO Save System", "ASCII Map Generator"],
      title: "DungeonCrawler — Text RPG in Pure C",
      subtitle: "Classic turn-based terminal RPG exploring pointer arithmetic, structs & file saving",
      category: "games",
      categoryLabel: "C Systems & Games",
      year: "2024",
      techStack: ["C", "GCC", "Data Structures", "File I/O"],
      techChip: "C • GCC • STRUCTS • FILE I/O",
      description: "A retro text-based dungeon crawler game written in pure C demonstrating memory allocation, custom structs, turn-based combat math, and persistent save states.",
      longDescription: "Built alongside my first-year C programming coursework. The game puts you in an ASCII dungeon with enemy encounters, inventory equipment management using dynamic arrays, and binary file save/load routines.",
      highlights: [
        "100% standard C without bloated third-party dependencies",
        "Clean structure separating game loop, inventory pointers, and combat math",
        "Custom high-score and player save file system using standard file I/O"
      ],
      metrics: [
        { label: "Language", value: "Pure C99" },
        { label: "Memory Leak", value: "0 bytes" },
        { label: "Binary Size", value: "< 45 KB" }
      ],
      liveUrl: "https://github.com/muzaain",
      githubUrl: "https://github.com/muzaain/muzain-shehzade-v-m",
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
      aspectRatio: "aspect-[16/10]"
    },
    {
      id: "student-study-timer",
      questCode: "QUEST_06",
      difficulty: "NOVICE",
      expReward: "+300 EXP",
      lootDrops: ["Pomodoro Interval Logic", "Daily Streak Counter", "WebAudio Bell"],
      title: "FocusArc — Minimalist Study Session Timer",
      subtitle: "Serene study companion with customizable intervals, subject logging, and audio chimes",
      category: "web",
      categoryLabel: "Frontend Craft",
      year: "2024",
      techStack: ["React", "TypeScript", "Tailwind CSS", "WebAudio"],
      techChip: "REACT • TYPESCRIPT • TAILWIND",
      description: "A minimalist, aesthetic study companion designed to prevent burnout during exam season with Pomodoro technique cycles and daily study logs.",
      longDescription: "Inspired by the 'Noir & Lumen' aesthetic, FocusArc helps students maintain deep focus while studying engineering mathematics and C programming. Built with React and TypeScript.",
      highlights: [
        "Clean monochromatic timer with smooth circular SVG progress",
        "Synthesized focus and rest bells using pure Web Audio API",
        "Study history and subject tags saved in browser memory"
      ],
      metrics: [
        { label: "Bundle Size", value: "24 KB" },
        { label: "Distraction", value: "0 ads" },
        { label: "Theme", value: "Noir & Gold" }
      ],
      liveUrl: "https://github.com/muzaain",
      githubUrl: "https://github.com/muzaain/muzain-shehzade-v-m",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      aspectRatio: "aspect-[16/10]"
    }
  ],

  skills: [
    {
      title: "Core Programming & Foundations",
      number: "TIER 01",
      description: "Fundamental languages, memory management, and algorithmic thinking.",
      skills: [
        { name: "C Programming", level: 85, rank: "A", tag: "CAMPUS CORE", manaCost: "10 MP" },
        { name: "Python", level: 88, rank: "S", tag: "PRIMARY LANGUAGE", manaCost: "5 MP" },
        { name: "Data Structures Basics", level: 78, rank: "A", tag: "LOGIC", manaCost: "15 MP" },
        { name: "Algorithms (Sorting & Search)", level: 80, rank: "A", tag: "DSA", manaCost: "15 MP" },
        { name: "Object-Oriented Concepts", level: 82, rank: "A", tag: "OOP", manaCost: "10 MP" },
        { name: "C++ Basics", level: 72, rank: "LEARNING", tag: "IN PROGRESS", manaCost: "10 MP" },
      ]
    },
    {
      title: "Artificial Intelligence & Data (Learning)",
      number: "TIER 02",
      description: "First-year exploration into machine learning foundations, math, and data libraries.",
      skills: [
        { name: "NumPy & Scientific Python", level: 82, rank: "A", tag: "ARRAYS", manaCost: "10 MP" },
        { name: "Pandas Data Exploration", level: 78, rank: "A", tag: "DATASETS", manaCost: "10 MP" },
        { name: "OpenCV Computer Vision Basics", level: 80, rank: "A", tag: "IMAGE LOGIC", manaCost: "15 MP" },
        { name: "Matplotlib & Visualization", level: 84, rank: "A", tag: "PLOTS", manaCost: "5 MP" },
        { name: "Machine Learning Foundations", level: 75, rank: "LEARNING", tag: "MATH & THEORY", manaCost: "20 MP" },
        { name: "Prompting & LLM APIs", level: 88, rank: "S", tag: "MODERN AI", manaCost: "5 MP" },
      ]
    },
    {
      title: "Web Engineering & Frontend Craft",
      number: "TIER 03",
      description: "Building responsive, modern, and accessible web experiences.",
      skills: [
        { name: "HTML5 & Semantic Structure", level: 92, rank: "S", tag: "WEB CORE", manaCost: "5 MP" },
        { name: "CSS3 & Modern Styling", level: 90, rank: "S", tag: "LAYOUTS", manaCost: "5 MP" },
        { name: "Tailwind CSS", level: 92, rank: "S", tag: "UTILITY FIRST", manaCost: "5 MP" },
        { name: "JavaScript (ES6+)", level: 82, rank: "A", tag: "SCRIPTING", manaCost: "10 MP" },
        { name: "React Basics", level: 78, rank: "A", tag: "COMPONENTS", manaCost: "15 MP" },
        { name: "Next.js Basics", level: 76, rank: "LEARNING", tag: "FRAMEWORK", manaCost: "15 MP" },
      ]
    },
    {
      title: "Tools, Terminal & Student Workflow",
      number: "TIER 04",
      description: "Developer environment, version control, and collegiate workflow tools.",
      skills: [
        { name: "Git & GitHub", level: 88, rank: "S", tag: "VERSION CONTROL", manaCost: "5 MP" },
        { name: "Linux & Bash Terminal", level: 80, rank: "A", tag: "COMMAND LINE", manaCost: "10 MP" },
        { name: "VS Code Setup", level: 95, rank: "S", tag: "PRIMARY IDE", manaCost: "0 MP" },
        { name: "GCC / Clang Compiler", level: 84, rank: "A", tag: "C BUILDS", manaCost: "10 MP" },
        { name: "Jupyter Notebooks", level: 86, rank: "A", tag: "EXPLORATION", manaCost: "5 MP" },
        { name: "Markdown Documentation", level: 94, rank: "S", tag: "NOTES & SPECS", manaCost: "0 MP" },
      ]
    }
  ],

  marqueeSkills: [
    "1ST YEAR CS (AI)",
    "THEJUS ENGG COLLEGE",
    "C PROGRAMMING",
    "PYTHON",
    "DATA STRUCTURES",
    "OPENCV BASICS",
    "NUMPY",
    "PANDAS",
    "TAILWIND CSS",
    "JAVASCRIPT",
    "REACT BASICS",
    "GIT & GITHUB",
    "LINUX CLI",
    "ALGORITHMS",
    "MATHEMATICS FOR AI"
  ],

  milestones: [
    {
      period: "2024 — Present (Batch 2024–2028)",
      role: "B.Tech in Computer Science & Engineering (Artificial Intelligence)",
      organization: "Thejus Engineering College, Thrissur, Kerala",
      location: "Thrissur, India",
      description: "First-batch cohort! Immersed in foundational semesters: C programming, engineering mathematics, problem solving, discrete structures, and introduction to artificial intelligence.",
      questStatus: "CURRENTLY GRINDING"
    },
    {
      period: "2024",
      role: "Hands-on Project Prototyping",
      organization: "Personal & Academic Builds",
      location: "Kerala, India",
      description: "Building daily code experiments: algorithm visualizers in Python, computer vision gesture detectors with OpenCV, and student utility tools.",
      questStatus: "CURRENTLY GRINDING"
    },
    {
      period: "2024",
      role: "Higher Secondary Completion (Computer Science Stream)",
      organization: "Kerala State Board",
      location: "Kerala, India",
      description: "Completed higher secondary education with a strong focus on mathematics and computer science fundamentals, sparking the ambition to pursue AI engineering.",
      questStatus: "COMPLETED"
    }
  ],

  philosophy: {
    quote: "The only way to learn a new programming language is by writing programs in it.",
    quoteAuthor: "Dennis Ritchie (Creator of C)",
    paragraphs: [
      "As a first-year student in the inaugural Computer Science and Artificial Intelligence batch at Thejus Engineering College, Thrissur, my goal is simple: build strong, unshakeable fundamentals. I believe you cannot build great artificial intelligence without first understanding how memory, data structures, and algorithms operate at the hardware level.",
      "That is why I spend time writing C code, tracing pointer logic, and implementing sorting and graph traversal algorithms by hand before jumping into high-level abstractions. At the same time, Python and modern web tools allow me to bring ideas to life quickly—from computer vision experiments to student utilities.",
      "I am excited for the road ahead: diving deeper into linear algebra, calculus for machine learning, neural networks, and open-source collaboration. Every single day is an opportunity to learn, build, and level up."
    ]
  }
};
