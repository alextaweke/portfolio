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
