// src/components/Skills.tsx
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

export interface SkillCategory {
  name: string;
  skills: string[];
  icon?: string;
  color?: string;
}

export interface SkillsProps {
  categories?: SkillCategory[];
  variant?: "default" | "minimal" | "cards" | "progress" | "radar" | "bubbles";
  className?: string;
  showIcons?: boolean;
  showLevel?: boolean;
}

// Advanced Skill Item with 3D tilt effect
const SkillItem: React.FC<{
  skill: string;
  level?: number;
  color?: string;
  variant: SkillsProps["variant"];
  index: number;
}> = ({ skill, level, color = "yellow", variant, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [10, -10]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-10, 10]),
    springConfig,
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    x.set(mouseX / (rect.width / 2));
    y.set(mouseY / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const colorClasses = {
    yellow: {
      gradient: "from-yellow-400 to-orange-400",
      glow: "rgba(250, 204, 21, 0.3)",
    },
    blue: {
      gradient: "from-blue-400 to-cyan-400",
      glow: "rgba(59, 130, 246, 0.3)",
    },
    green: {
      gradient: "from-green-400 to-emerald-400",
      glow: "rgba(34, 197, 94, 0.3)",
    },
    purple: {
      gradient: "from-purple-400 to-pink-400",
      glow: "rgba(168, 85, 247, 0.3)",
    },
    red: {
      gradient: "from-red-400 to-pink-400",
      glow: "rgba(239, 68, 68, 0.3)",
    },
  };

  const selectedColor = colorClasses[color as keyof typeof colorClasses];

  if (variant === "progress" && level) {
    return (
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          transformPerspective: 1000,
        }}
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
        className="relative bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden group"
      >
        {/* Animated background gradient */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${x.get() * 50 + 50}% ${y.get() * 50 + 50}%, ${selectedColor.glow}, transparent 70%)`,
          }}
        />

        <div className="relative z-10">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <motion.span
                animate={isHovered ? { rotate: 360 } : {}}
                transition={{ duration: 0.6 }}
                className="text-2xl"
              >
                {getSkillIcon(skill)}
              </motion.span>
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                {skill}
              </span>
            </div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={
                isHovered ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }
              }
              className="text-sm font-bold bg-gradient-to-r bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                // @ts-ignore
                "--tw-gradient-from": selectedColor.gradient.split(" ")[1],
                "--tw-gradient-to": selectedColor.gradient.split(" ")[3],
              }}
            >
              {level}%
            </motion.span>
          </div>

          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${level}%` }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
                delay: index * 0.05,
              }}
              className={`h-full rounded-full bg-gradient-to-r ${selectedColor.gradient} relative`}
            >
              {/* Animated shine effect */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
            </motion.div>
          </div>

          {/* Floating particles on hover */}
          {isHovered && (
            <>
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [1, 0],
                    opacity: [0.5, 0],
                    y: -20 - i * 5,
                    x: (i - 2) * 10,
                  }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                  className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${selectedColor.gradient}`}
                  style={{ bottom: "20%", left: `${20 + i * 15}%` }}
                />
              ))}
            </>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.03 }}
      className="relative"
    >
      <motion.span
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className={`
          px-5 py-3 rounded-xl font-semibold transition-all duration-300 
          cursor-pointer text-center flex items-center gap-2
          hover:shadow-2xl transform-gpu border-2
          ${
            variant === "minimal"
              ? "bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:border-current backdrop-blur-sm"
              : variant === "cards"
                ? "bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200 shadow-lg border-gray-200 dark:border-gray-700"
                : `bg-gradient-to-r ${selectedColor.gradient} text-white shadow-xl border-transparent`
          }
        `}
      >
        <motion.span
          animate={isHovered ? { rotate: [0, -10, 10, -10, 0] } : {}}
          transition={{ duration: 0.5 }}
        >
          {getSkillIcon(skill)}
        </motion.span>
        <span>{skill}</span>

        {/* Glow effect */}
        {isHovered && (
          <motion.div
            layoutId="glow"
            className="absolute inset-0 rounded-xl"
            style={{
              boxShadow: `0 0 30px ${selectedColor.glow}`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </motion.span>
    </motion.div>
  );
};

// Helper function to get skill icons
const getSkillIcon = (skill: string): string => {
  const icons: { [key: string]: string } = {
    JavaScript: "📜",
    TypeScript: "🔷",
    Python: "🐍",
    Java: "☕",
    "C++": "⚡",
    Go: "🐹",
    React: "⚛️",
    "Next.js": "▲",
    HTML5: "🌐",
    CSS3: "🎨",
    "Tailwind CSS": "🌊",
    Bootstrap: "🅱️",
    "Node.js": "💚",
    Express: "🚂",
    NestJS: "🐱",
    Django: "🎸",
    "REST APIs": "🔌",
    GraphQL: "📊",
    PostgreSQL: "🐘",
    MongoDB: "🍃",
    MySQL: "🐬",
    Redis: "🔴",
    SQLite: "💾",
    Firebase: "🔥",
    Git: "📦",
    Docker: "🐳",
    AWS: "☁️",
    "CI/CD": "🔄",
    Kubernetes: "☸️",
    Vercel: "▲",
    Testing: "🧪",
    "System Design": "🏗️",
  };
  return icons[skill] || "💻";
};

// Advanced Skill Categories with animations
const defaultCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Go"],
    icon: "💻",
    color: "blue",
  },
  {
    name: "Frontend Technologies",
    skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    icon: "🎨",
    color: "purple",
  },
  {
    name: "Backend Technologies",
    skills: ["Node.js", "Express", "NestJS", "Django", "REST APIs", "GraphQL"],
    icon: "⚙️",
    color: "green",
  },
  {
    name: "Databases & Tools",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Git", "Docker"],
    icon: "🗄️",
    color: "yellow",
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "CI/CD", "Kubernetes", "Firebase", "Vercel", "Netlify"],
    icon: "☁️",
    color: "red",
  },
];

// Skill levels
const skillLevels: { [key: string]: number } = {
  JavaScript: 92,
  TypeScript: 88,
  Python: 85,
  Java: 78,
  "C++": 72,
  Go: 68,
  React: 90,
  "Next.js": 85,
  HTML5: 95,
  CSS3: 90,
  "Tailwind CSS": 88,
  Bootstrap: 82,
  "Node.js": 88,
  Express: 85,
  NestJS: 80,
  Django: 78,
  "REST APIs": 90,
  GraphQL: 75,
  PostgreSQL: 88,
  MongoDB: 85,
  MySQL: 82,
  Redis: 78,
  Git: 92,
  Docker: 85,
  AWS: 80,
  "CI/CD": 82,
  Kubernetes: 75,
  Firebase: 78,
  Vercel: 85,
  "Agile/Scrum": 85,
  "Problem Solving": 90,
  "System Design": 78,
  Testing: 82,
};

const Skills: React.FC<SkillsProps> = ({
  categories = defaultCategories,
  variant = "cards",
  className = "",
  showIcons = true,
  showLevel = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const categoriesToRender =
    categories.length > 0 ? categories : defaultCategories;

  // Filter skills based on search
  const filteredCategories = searchTerm
    ? categoriesToRender
        .map((cat) => ({
          ...cat,
          skills: cat.skills.filter((skill) =>
            skill.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
        }))
        .filter((cat) => cat.skills.length > 0)
    : categoriesToRender;

  return (
    <section
      id="skills"
      className={`py-20 relative overflow-hidden ${className}`}
      ref={ref}
    >
      {/* Advanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      </div>

      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: ["-20%", "20%", "-20%"],
            y: ["-20%", "20%", "-20%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: ["20%", "-20%", "20%"],
            y: ["20%", "-20%", "20%"],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute right-0 w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-400/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider backdrop-blur-sm border border-blue-500/20">
              Technical Expertise
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Cutting-edge technologies and tools I leverage to build exceptional
            digital experiences
          </p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-8 max-w-md mx-auto"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
              <svg
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(null)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeCategory === null
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                : "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700"
            }`}
          >
            All Skills
          </motion.button>
          {categoriesToRender.map((cat) => (
            <motion.button
              key={cat.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === cat.name
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  : "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills display */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {filteredCategories
            .filter((cat) => !activeCategory || cat.name === activeCategory)
            .map((category) => (
              <motion.div
                key={category.name}
                //variants={itemVariants}
                className="mb-12"
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 dark:border-gray-700/50">
                  {/* Category Header */}
                  <div className="flex items-center mb-8">
                    {showIcons && (
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                      >
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />
                        <span className="relative text-4xl mr-4">
                          {category.icon}
                        </span>
                      </motion.div>
                    )}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
                        {category.name}
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                          ({category.skills.length} skills)
                        </span>
                      </h3>
                      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2" />
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div
                    className={`
                      grid gap-4
                      ${
                        variant === "progress"
                          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                          : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
                      }
                    `}
                  >
                    {category.skills.map((skill, index) => (
                      <SkillItem
                        key={skill}
                        skill={skill}
                        level={showLevel ? skillLevels[skill] : undefined}
                        color={category.color}
                        variant={variant}
                        index={index}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Technologies", value: "30+", icon: "🛠️" },
            { label: "Projects", value: "20+", icon: "🚀" },
            { label: "Experience", value: "3+ Years", icon: "⏰" },
            { label: "Certifications", value: "5+", icon: "📜" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20 dark:border-gray-700/50"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <span>Let's Build Something Amazing</span>
            <motion.svg
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
