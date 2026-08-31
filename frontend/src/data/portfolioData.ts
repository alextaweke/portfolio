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
      title: "Social Media Manager - Multi-Platform Content Publisher",

      description:
        "Comprehensive social media management platform that enables users to create, schedule, and publish content across multiple platforms including Facebook, Telegram, LinkedIn, Instagram, and Twitter from a single dashboard.",

      link: "https://social-media-manager-iota-pearl.vercel.app/",
      github: "https://github.com/alextaweke/social-media-manager",
      image: "images/social-media-manager-demo.png",

      category: "social media management",

      tech: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
        "Facebook Graph API",
        "Telegram Bot API",
        "LinkedIn API",
        "Twitter API",
        "Tailwind CSS",
        "Google OAuth",
        "Vercel",
      ],

      problem:
        "Managing multiple social media accounts requires switching between platforms, creating duplicate content, and manually publishing posts. Small businesses and content creators need a centralized solution to streamline content management, scheduling, and publishing workflows.",

      solution:
        "Built a centralized social media management platform that allows users to connect multiple social accounts, create content once, and publish or schedule it across different platforms simultaneously. The system includes authentication, media management, scheduling, analytics-ready architecture, and platform integrations.",

      features: [
        "One-click publishing to multiple social media platforms",
        "Facebook Page integration using Graph API",
        "Telegram channel and group publishing",
        "LinkedIn content publishing",
        "Twitter/X posting support",
        "Instagram publishing integration",
        "Google OAuth authentication",
        "Content scheduling and queue management",
        "Media upload and attachment support",
        "Post history and publishing status tracking",
        "Responsive dashboard for desktop and mobile",
        "Secure token storage and account management",
      ],

      challenges: [
        "Integrating multiple social media APIs with different authentication flows",
        "Handling Facebook Page Access Tokens and permissions",
        "Managing Telegram Bot API restrictions and channel permissions",
        "Implementing secure OAuth authentication workflows",
        "Supporting different media formats across platforms",
        "Handling API rate limits and publishing failures",
        "Managing scheduled publishing jobs reliably",
        "Deploying and configuring environment variables securely",
      ],

      featured: true,
    },
    {
      title: "AI Customer Support SaaS",
      description:
        "AI-powered customer support platform that enables businesses to manage customer conversations, build organization-specific knowledge bases, and provide intelligent real-time support using Retrieval-Augmented Generation (RAG).",

      link: "YOUR_LIVE_DEMO_URL",
      github: "YOUR_GITHUB_REPOSITORY_URL",
      image: "images/ai-customer-support.png",

      category: "ai saas",

      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Django",
        "Django REST Framework",
        "PostgreSQL",
        "Redis",
        "Celery",
        "Django Channels",
        "WebSockets",
        "Sentence Transformers",
        "RAG",
      ],

      problem:
        "Customer support teams spend significant time answering repetitive questions, searching through company documentation, and managing conversations manually. Businesses need a centralized platform that can provide fast, consistent answers while allowing support teams to monitor and manage customer conversations.",

      solution:
        "Built a multi-tenant AI customer support SaaS that combines conversational AI with organization-specific knowledge bases. The platform allows businesses to manage organizations, upload documents, retrieve relevant information using semantic search, and provide AI-powered responses through real-time conversations.",

      features: [
        "AI-powered customer support conversations",
        "Retrieval-Augmented Generation (RAG)",
        "Organization-specific knowledge bases",
        "Document upload and processing",
        "Semantic document search using embeddings",
        "Real-time conversations using WebSockets",
        "Real-time notification system",
        "Multi-tenant organization architecture",
        "JWT authentication and authorization",
        "Conversation and message management",
        "Background processing with Celery",
        "Redis-powered asynchronous processing",
        "Django REST Framework APIs",
        "Responsive Next.js SaaS dashboard",
        "Conversation monitoring and management",
      ],

      challenges: [
        "Designing a secure multi-tenant architecture that isolates organization data.",
        "Connecting AI responses to organization-specific documents using RAG.",
        "Implementing semantic search using document embeddings.",
        "Building real-time communication using Django Channels and WebSockets.",
        "Processing document and AI workloads asynchronously using Celery and Redis.",
        "Managing JWT authentication across REST APIs and WebSocket connections.",
        "Keeping conversations and notifications synchronized in real time.",
      ],

      featured: true,
    },

    {
      title: "AI Job Matcher - Upwork Freelancer Automation",
      description:
        "Intelligent AI-powered platform that automatically finds, matches, and generates personalized proposals for Upwork jobs based on user skills.",

      link: "https://your-domain.com", // Replace with your deployed URL
      github: "https://github.com/alextaweke/ai-upwork-matcher", // Replace with your GitHub URL
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
      title: "AI Translator App - Afaan Oromo, English & Amharic",

      description:
        "AI-powered translation platform specializing in Ethiopian languages (Afaan Oromo, Amharic, English) with real-time translation, user authentication, translation history, and text-to-speech functionality.",

      link: "https://ai-translator-ten-murex.vercel.app/",
      github: "https://github.com/alextaweke/ai-translator",
      image: "images/ai-translator-demo.png",

      category: "ai translation",

      tech: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "Google Gemini AI",
        "PostgreSQL",
        "Tailwind CSS",
        "Web Speech API",
        "Google OAuth",
      ],

      problem:
        "Existing translation tools poorly support Ethiopian languages like Afaan Oromo and Amharic. Google Translate has limited accuracy for these languages, and no integrated solution combines AI-powered translation with user history management, favorites, and text-to-speech functionality.",

      solution:
        "Built a complete AI translation platform using Google Gemini API that accurately translates between Afaan Oromo, English, and Amharic. Features include user authentication, translation history with search and favorites, text-to-speech for all languages, auto-detection, and export functionality with a modern responsive UI.",

      features: [
        "AI-powered translation with 90%+ accuracy for Ethiopian languages",
        "Support for Afaan Oromo (Qubee), Amharic (Ge'ez), and English",
        "User authentication with Google OAuth",
        "Translation history with search and favorites filtering",
        "Text-to-speech for all three languages",
        "Language auto-detection (identifies Amharic, Oromo, English)",
        "Export translations as JSON files",
        "Copy both source and translation",
        "Word and character counter with reading time",
        "Keyboard shortcuts for power users",
        "Real-time translation progress indicator",
        "Responsive modern UI with Tailwind CSS",
      ],

      challenges: [
        "Working with limited support for Ethiopian languages in AI models",
        "Implementing text-to-speech for Amharic and Afaan Oromo",
        "Managing real-time translation history updates with Supabase",
        "Handling OAuth authentication and redirect URIs correctly",
        "Detecting Oromo vs English text (both use Latin alphabet)",
        "Deploying with proper environment variables on Vercel",
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
