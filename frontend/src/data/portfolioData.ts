export const portfolioData = {
  // keep your existing profile info...
  name: "Alemayehu Taweke",
  title: "Full-Stack Engineer (React, Next.js, Django, Node.js)",
  description:
    "I help businesses design and build scalable full-stack applications, combining modern React/Next.js frontends with robust Django and Node.js backends. My focus is on performance, API reliability, and clean, maintainable architecture.",
  github: "https://github.com/alextaweke",
  linkedin: "https://linkedin.com/in/alemayehu-taweke-6b6a6331b",
  email: "alextaweke@gmail.com",

  skills: [
    {
      name: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Go"],
      icon: "💻",
      color: "blue",
    },
    {
      name: "Frontend Technologies",
      skills: [
        "React",
        "Next.js",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
      ],
      icon: "🎨",
      color: "purple",
    },
    {
      name: "Backend Technologies",
      skills: [
        "Node.js",
        "Express",
        "NestJS",
        "Django",
        "REST APIs",
        "GraphQL",
      ],
      icon: "⚙️",
      color: "green",
    },
    {
      name: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "SQLite", "Firebase"],
      icon: "🗄️",
      color: "yellow",
    },
    {
      name: "Tools & Platforms",
      skills: ["Git", "Docker", "AWS", "CI/CD", "Kubernetes", "Vercel"],
      icon: "🛠️",
      color: "red",
    },
    {
      name: "Other Skills",
      skills: [
        "Agile/Scrum",
        "Problem Solving",
        "Team Leadership",
        "Code Review",
        "System Design",
        "Testing",
      ],
      icon: "🚀",
      color: "purple",
    },
  ],
  completedProjects: [
    {
      title: "Distributed Drone Delivery System",
      description:
        "Scalable delivery platform with real-time tracking and asynchronous task processing.",

      link: "https://drone-taxi-iqv4.vercel.app/",
      github: "https://github.com/alextaweke/Drone_Taxi/",
      image: "images/drone.jpg",

      category: "distributed systems",
      tech: ["Django", "Celery", "Redis", "PostgreSQL", "React"],

      problem:
        "Traditional delivery systems cannot efficiently handle dynamic user requests or real-time coordination, especially in congested environments.",

      solution:
        "Designed a distributed backend using Django and Celery to process delivery tasks asynchronously, enabling dynamic assignment and real-time tracking.",

      features: [
        "Real-time drone tracking with live updates",
        "Asynchronous task processing using Celery",
        "Bidirectional delivery (send & receive)",
        "Retry logic for failed tasks",
      ],

      challenges: [
        "Handling concurrent delivery requests",
        "Ensuring reliability of background jobs",
        "Synchronizing real-time updates with frontend",
      ],

      featured: true,
    },
    {
      title: "AI Job Matcher - Upwork Freelancer Automation",
      description:
        "Intelligent AI-powered platform that automatically finds, matches, and generates personalized proposals for Upwork jobs based on user skills.",

      link: "https://your-domain.com", // Replace with your deployed URL
      github: "https://github.com/alextaweke/ai-job-matcher", // Replace with your GitHub URL
      image: "images/ai-job-matcher-dashboard.webp",

      category: "ai automation",
      tech: [
        "Django",
        "Next.js",
        "Groq AI",
        "Celery",
        "Redis",
        "PostgreSQL",
        "TailwindCSS",
        "WebSocket",
      ],

      problem:
        "Freelancers waste hours daily searching for relevant jobs on Upwork, manually writing proposals, and missing opportunities due to slow response times. The platform's RSS feeds are deprecated, making job discovery even harder.",

      solution:
        "Built an end-to-end AI-powered platform that scrapes Upwork jobs via Apify, uses Groq LLM (Llama 3.3 70B) to calculate match scores, generates personalized proposals, and sends real-time WebSocket notifications - all tailored to each user's skills.",

      features: [
        "AI-powered job matching with 95% accuracy",
        "Real-time proposal generation with typing effect",
        "WebSocket notifications for instant job alerts",
        "Skill-based personalized job recommendations",
        "Auto-scan every 30 minutes (Celery/Redis)",
        "Beautiful analytics dashboard with Recharts",
        "Dark theme DeepSeek-style UI",
        "Bulk proposal generation for high-match jobs",
      ],

      challenges: [
        "Upwork deprecated RSS feeds (410 error) - switched to Apify API",
        "Rate limiting with Groq (30 req/min) - implemented queuing system",
        "Real-time notifications without costly services - built WebSocket with Django Channels",
        "Personalized match scoring - developed custom algorithm",
        "Duplicate job detection across multiple users",
      ],

      featured: true,
    },
    {
      title: "SaaS Task Automation MVP",

      description:
        "Modern SaaS platform for workspace collaboration, task automation, and team management with scalable architecture and real-time workflow organization.",

      link: "https://your-live-demo.vercel.app/",
      github: "https://github.com/alextaweke/Workflow-Automation-SaaS",
      image: "images/SaaS.jfif",

      category: "saas platform",

      tech: [
        "Next.js",
        "TypeScript",
        "Django",
        "Django REST Framework",
        "PostgreSQL",
        "Zustand",
        "Tailwind CSS",
        "JWT",
      ],

      problem:
        "Teams often struggle with scattered task management, inefficient collaboration, and lack of centralized workflow automation across departments and companies.",

      solution:
        "Built a scalable SaaS platform using Django REST Framework and Next.js that enables companies to manage workspaces, departments, tasks, and team collaboration in a centralized system.",

      features: [
        "Workspace and company management",
        "Department-based task organization",
        "Role-based access control",
        "Workspace member invitations",
        "Task tracking and analytics dashboard",
        "JWT authentication system",
        "RESTful API architecture",
        "Responsive modern UI",
      ],

      challenges: [
        "Managing complex relational data between workspaces and departments",
        "Handling authentication and role permissions securely",
        "Synchronizing frontend state with backend APIs",
        "Designing scalable SaaS architecture",
      ],

      featured: true,
    },
    {
      title: "AI Translator App - Ethiopian Language Translation Platform",
      description:
        "Production-ready AI translation web application supporting Afaan Oromo, English, and Amharic with 90%+ accuracy using Google Gemini AI, complete with user management and translation history.",

      link: "https://ai-translator-ten-murex.vercel.app/",
      github: "https://github.com/alextaweke/ai-translator",
      image: "images/ai-translator-demo.png",

      category: "ai translation",
      tech: [
        "Next.js 14",
        "TypeScript",
        "Supabase",
        "Google Gemini AI",
        "TailwindCSS",
        "PostgreSQL",
        "Web Speech API",
        "Google OAuth",
        "Vercel",
      ],

      metrics: {
        translationSpeed: "1-2 seconds",
        accuracy: "90%+ for common phrases",
        supportedLanguages: 3,
        databaseTables: 1,
        apiEndpoints: 4,
        monthlyCost: "$0 (free tier)",
        deploymentTime: "5 minutes",
      },

      problem:
        "Ethiopian languages lack robust translation tools. Google Translate has limited support for Afaan Oromo (errors in 40%+ of translations) and poor handling of Ge'ez script for Amharic. No existing solution combines AI translation with user history management and text-to-speech for all three languages.",

      solution:
        "Engineered a complete translation ecosystem using Google Gemini's advanced LLM. The system achieves 90%+ accuracy for Ethiopian languages by using specialized prompts and context preservation. Features include user authentication, persistent translation history with search and favorites, multilingual text-to-speech, and intelligent language auto-detection.",

      features: [
        "AI-powered translation (Afaan Oromo ↔ English ↔ Amharic)",
        "90%+ accuracy with context preservation",
        "Language auto-detection (Amharic/Oromo/English)",
        "User authentication with Google OAuth",
        "Translation history (50+ items with search)",
        "Favorites system with filtering",
        "Text-to-speech for all languages",
        "JSON export functionality",
        "Copy source/translation/both",
        "Word/character counter with reading time",
        "Keyboard shortcuts (4 shortcuts)",
        "Real-time progress indicator",
        "Responsive design (mobile/tablet/desktop)",
        "Dark mode ready",
      ],

      challenges: [
        "Gemini model availability: v1beta/gemini-2.0-flash returned 404 - resolved by using correct endpoint structure",
        "Build-time environment variables: Supabase client failed during prerendering - implemented conditional client initialization",
        "OAuth configuration: redirect_uri_mismatch error - added proper URLs in Google Cloud Console and Supabase",
        "Language detection: Oromo shares Latin alphabet with English - developed specialized regex for Oromo-specific patterns",
        "Amharic TTS: Web Speech API limited Amharic support - implemented language mapping to am-ET locale",
        "Real-time updates: Needed live history refresh - implemented Supabase WebSocket subscriptions",
      ],

      architecture: {
        frontend: "Next.js 14 App Router with TypeScript",
        backend: "Next.js API routes + Supabase",
        database: "PostgreSQL (Supabase) with RLS policies",
        auth: "Supabase Auth + Google OAuth",
        ai: "Google Gemini API (gemini-2.0-flash)",
        deployment: "Vercel (automatic preview/production)",
      },

      useCases: [
        "NGOs working in Ethiopia",
        "Educational institutions teaching Ethiopian languages",
        "Ethiopian diaspora communities",
        "Healthcare providers with Ethiopian patients",
        "Tourism industry in Ethiopia",
        "Government services for citizens",
        "Language learning platforms",
      ],

      futureEnhancements: [
        "Document translation (PDF, Word, Excel)",
        "Voice input for all languages",
        "Offline mode with PWA",
        "Chrome extension for in-page translation",
        "Team collaboration features",
        "API access for third-party integration",
        "Real-time chat translation",
        "Mobile app (React Native)",
      ],

      featured: true,
    },

    {
      title: "Bank Transaction Monitoring System",
      description:
        "Backend system for processing and monitoring financial transactions with external API integration.",

      link: "#",
      github: "#",
      image: "images/projects/bank.jpg",

      category: "api integration",
      tech: ["Node.js", "Express.js", "PostgreSQL", "React Typescript"],

      problem:
        "Financial systems require reliable processing of transactions from external APIs while handling failures and ensuring data consistency.",

      solution:
        "Implemented a backend system that integrates with external APIs, processes transactions asynchronously, and ensures consistency using validation and retry mechanisms.",

      features: [
        "External API integration",
        "Transaction validation and consistency checks",
        "Background processing with Celery",
        "Failure handling and retry logic",
      ],

      challenges: [
        "Handling unreliable external APIs",
        "Ensuring data consistency across systems",
        "Processing large volumes of transactions",
      ],
    },

    {
      title: "Urban Land Management System",
      description:
        "Enterprise system for managing land records, ownership, and payments.",

      link: "https://land-management-system-flame.vercel.app/",
      github: "https://github.com/alextaweke/land-management-system",
      image: "images/projects/land.jpg",

      category: "backend systems",
      tech: ["Django", "PostgreSQL", "React typescript", "Tailwind CSS"],

      problem:
        "Managing land ownership data requires secure role-based access and efficient handling of large datasets.",

      solution:
        "Built a backend system with structured data models and role-based access control to manage land records and transactions.",

      features: [
        "Role-based access control",
        "Efficient data management",
        "Payment tracking system",
        "Administrative dashboard",
      ],

      challenges: [
        "Designing scalable data models",
        "Handling large datasets efficiently",
        "Ensuring secure access control",
      ],
    },

    {
      title: "Pension Management System",
      description:
        "System for managing pension contributions, beneficiaries, and payments.",

      link: "#",
      github: "https://github.com/alextaweke/pensition-MERN",
      image: "images/projects/pension.jpg",

      category: "backend systems",
      tech: ["NestJS", "PostgreSQL", "React typescript", "Tailwind CSS"],

      problem:
        "Pension systems require accurate tracking of contributions and secure handling of beneficiary data.",

      solution:
        "Developed a backend system that tracks contributions, calculates benefits, and manages user data securely.",

      features: [
        "Contribution tracking",
        "Beneficiary management",
        "Secure data handling",
        "Reporting system",
      ],

      challenges: [
        "Maintaining data accuracy",
        "Handling sensitive information securely",
        "Designing financial logic",
      ],
    },

    {
      title: "Student Management System",
      description:
        "System for managing student data, attendance, and academic performance.",

      link: "#",
      github: "https://github.com/alextaweke/Student-MERN",
      image: "images/projects/student.jfif",

      category: "backend systems",
      tech: ["Node.js", "MongoDB", "React"],

      problem:
        "Educational institutions need efficient systems to manage student records and performance tracking.",

      solution:
        "Built a full-stack application to manage student data, attendance, and academic records.",

      features: [
        "Student record management",
        "Attendance tracking",
        "Performance monitoring",
        "Admin dashboard",
      ],

      challenges: [
        "Designing scalable data structure",
        "Handling multiple user roles",
      ],
    },
  ],

  ongoingProjects: [
    {
      title: "Advanced Delivery Optimization System",
      description:
        "Next-generation delivery system focusing on optimization and scalability.",

      link: "#",
      github: "#",
      image: "images/projects/drone.jpg",

      category: "distributed systems",
      tech: ["Django", "Celery", "Redis"],

      problem:
        "Optimizing delivery routes and handling large-scale requests efficiently.",

      solution:
        "Enhancing the existing system with improved task scheduling and optimization strategies.",

      features: [
        "Improved task scheduling",
        "Scalable architecture",
        "Enhanced performance",
      ],
    },
  ],
};
