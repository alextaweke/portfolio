// components/Skills.tsx
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";

interface SkillCategory {
  name: string;
  skills: string[];
  icon: string;
  color: string;
}

interface SkillsProps {
  categories: SkillCategory[];
  variant?: "radar" | "bubbles" | "timeline" | "hexagon";
}

const Skills: React.FC<SkillsProps> = ({ categories, variant = "radar" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Skill levels (percentage)
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

  const getColor = (color: string) => {
    const colors: {
      [key: string]: { bg: string; border: string; text: string };
    } = {
      blue: {
        bg: "from-blue-500/20 to-cyan-500/20",
        border: "border-blue-500/30",
        text: "text-blue-400",
      },
      purple: {
        bg: "from-purple-500/20 to-pink-500/20",
        border: "border-purple-500/30",
        text: "text-purple-400",
      },
      green: {
        bg: "from-green-500/20 to-emerald-500/20",
        border: "border-green-500/30",
        text: "text-green-400",
      },
      yellow: {
        bg: "from-yellow-500/20 to-orange-500/20",
        border: "border-yellow-500/30",
        text: "text-yellow-400",
      },
      red: {
        bg: "from-red-500/20 to-rose-500/20",
        border: "border-red-500/30",
        text: "text-red-400",
      },
    };
    return colors[color] || colors.blue;
  };

  // --- VARIANT 1: RADAR/SPIDER CHART ---
  if (variant === "radar") {
    // Get top 8 skills for radar
    const topSkills = Object.entries(skillLevels)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([name, level]) => ({ name, level }));

    const categoriesForRadar = categories.slice(0, 5);

    return (
      <section
        id="skills"
        ref={ref}
        className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-purple-950"
      >
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          <motion.div
            animate={{
              x: ["-20%", "20%", "-20%"],
              y: ["-20%", "20%", "-20%"],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: ["20%", "-20%", "20%"],
              y: ["20%", "-20%", "20%"],
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
              Technical Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Skills Radar
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Visual representation of my technical expertise across key domains
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Radar Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative aspect-square max-w-[500px] mx-auto"
            >
              <svg viewBox="0 0 500 500" className="w-full h-full">
                {/* Background circles */}
                {[20, 40, 60, 80, 100].map((level, i) => (
                  <circle
                    key={i}
                    cx="250"
                    cy="250"
                    r={200 * (level / 100)}
                    fill="none"
                    stroke={`rgba(255,255,255,${0.05 + i * 0.04})`}
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                ))}

                {/* Axis lines */}
                {topSkills.map((_, i) => {
                  const angle =
                    (i / topSkills.length) * 2 * Math.PI - Math.PI / 2;
                  const x = 250 + 200 * Math.cos(angle);
                  const y = 250 + 200 * Math.sin(angle);
                  return (
                    <line
                      key={i}
                      x1="250"
                      y1="250"
                      x2={x}
                      y2={y}
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="1"
                    />
                  );
                })}

                {/* Data polygon */}
                <motion.polygon
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.3 }}
                  points={topSkills
                    .map((skill, i) => {
                      const angle =
                        (i / topSkills.length) * 2 * Math.PI - Math.PI / 2;
                      const r = 200 * (skill.level / 100);
                      return `${250 + r * Math.cos(angle)},${250 + r * Math.sin(angle)}`;
                    })
                    .join(" ")}
                  fill="url(#gradient)"
                  stroke="#3b82f6"
                  strokeWidth="3"
                />

                {/* Gradient definition */}
                <defs>
                  <radialGradient id="gradient">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
                  </radialGradient>
                </defs>

                {/* Data points & labels */}
                {topSkills.map((skill, i) => {
                  const angle =
                    (i / topSkills.length) * 2 * Math.PI - Math.PI / 2;
                  const r = 200 * (skill.level / 100);
                  const x = 250 + r * Math.cos(angle);
                  const y = 250 + r * Math.sin(angle);
                  const labelX = 250 + 220 * Math.cos(angle);
                  const labelY = 250 + 220 * Math.sin(angle);

                  return (
                    <g key={skill.name}>
                      <motion.circle
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: 0.3 + i * 0.05 }}
                        cx={x}
                        cy={y}
                        r="8"
                        fill="#3b82f6"
                        className="cursor-pointer"
                        whileHover={{ r: 12, fill: "#8b5cf6" }}
                        onClick={() =>
                          setActiveSkill(
                            activeSkill === skill.name ? null : skill.name,
                          )
                        }
                      />
                      <motion.text
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.5 + i * 0.05 }}
                        x={labelX}
                        y={labelY}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-xs font-semibold cursor-pointer"
                        fill={
                          activeSkill === skill.name ? "#8b5cf6" : "#94a3b8"
                        }
                        whileHover={{ fill: "#3b82f6" }}
                        onClick={() =>
                          setActiveSkill(
                            activeSkill === skill.name ? null : skill.name,
                          )
                        }
                      >
                        {skill.name}
                      </motion.text>
                      <motion.text
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.6 + i * 0.05 }}
                        x={x}
                        y={y - 18}
                        textAnchor="middle"
                        className="text-xs font-bold text-blue-400"
                      >
                        {skill.level}%
                      </motion.text>
                    </g>
                  );
                })}
              </svg>
            </motion.div>

            {/* Skills Legend */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Top Skills</h3>
              <div className="space-y-3">
                {topSkills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.05 }}
                    className="group cursor-pointer"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-300 group-hover:text-white transition-colors flex items-center gap-2">
                        <span className="text-lg">
                          {getSkillIcon(skill.name)}
                        </span>
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-blue-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: i * 0.05 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative"
                      >
                        <motion.div
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="pt-6 border-t border-gray-800"
              >
                <p className="text-gray-400 text-sm">
                  ⚡ Hover over any skill to highlight it • Click for details
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // --- VARIANT 2: BUBBLE/CLUSTER CHART ---
  if (variant === "bubbles") {
    const allSkills = categories.flatMap((cat) => cat.skills);
    const bubbleColors = [
      "#3b82f6",
      "#8b5cf6",
      "#06b6d4",
      "#10b981",
      "#f59e0b",
      "#ef4444",
      "#ec4899",
    ];

    return (
      <section
        id="skills"
        ref={ref}
        className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-blue-950"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
              Tech Ecosystem
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Skills Universe
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Interactive bubble map showing my technical expertise - larger
              bubbles = higher proficiency
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                selectedCategory === null
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  : "bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white border border-white/10"
              }`}
            >
              All Skills
            </motion.button>
            {categories.map((cat) => (
              <motion.button
                key={cat.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === cat.name ? null : cat.name,
                  )
                }
                className={`px-6 py-2.5 rounded-full font-medium transition-all flex items-center gap-2 ${
                  selectedCategory === cat.name
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                    : "bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white border border-white/10"
                }`}
              >
                <span>{cat.icon}</span>
                {cat.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Bubble Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {allSkills
              .filter(
                (skill) =>
                  !selectedCategory ||
                  categories
                    .find((c) => c.name === selectedCategory)
                    ?.skills.includes(skill),
              )
              .map((skill, index) => {
                const level = skillLevels[skill] || 80;
                const size = 80 + (level / 100) * 80;
                const color = bubbleColors[index % bubbleColors.length];
                const icon = getSkillIcon(skill);

                return (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: index * 0.03,
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    }}
                    whileHover={{
                      scale: 1.15,
                      y: -10,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="relative flex items-center justify-center cursor-pointer group"
                    style={{ height: `${size + 20}px` }}
                    onMouseEnter={() => setActiveSkill(skill)}
                    onMouseLeave={() => setActiveSkill(null)}
                  >
                    {/* Glow effect */}
                    <motion.div
                      animate={{
                        scale: activeSkill === skill ? 1.2 : 1,
                        opacity: activeSkill === skill ? 0.6 : 0.2,
                      }}
                      className="absolute inset-0 rounded-full blur-xl"
                      style={{ background: color }}
                    />

                    {/* Bubble */}
                    <motion.div
                      className="relative rounded-full flex flex-col items-center justify-center shadow-xl border border-white/10"
                      style={{
                        width: size,
                        height: size,
                        background: `radial-gradient(circle at 30% 30%, ${color}40, ${color}20)`,
                        boxShadow: `0 0 40px ${color}20`,
                      }}
                      whileHover={{
                        boxShadow: `0 0 60px ${color}40`,
                      }}
                    >
                      <span className="text-3xl mb-1">{icon}</span>
                      <span className="text-xs font-medium text-white text-center px-1 leading-tight">
                        {skill.length > 12 ? skill.slice(0, 10) + "…" : skill}
                      </span>

                      {/* Level indicator */}
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gray-900 border-2 border-white/20 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-blue-400">
                          {level}%
                        </span>
                      </div>
                    </motion.div>

                    {/* Tooltip on hover */}
                    <AnimatePresence>
                      {activeSkill === skill && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                          className="absolute -top-16 left-1/2 -translate-x-1/2 bg-gray-900/95 backdrop-blur-xl px-4 py-2 rounded-xl border border-white/10 shadow-2xl whitespace-nowrap z-20"
                        >
                          <div className="text-white font-medium text-sm">
                            {skill}
                          </div>
                          <div className="text-blue-400 text-xs font-bold text-center">
                            {level}%
                          </div>
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900/95 rotate-45 border-r border-b border-white/10" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { label: "Technologies", value: allSkills.length, icon: "🛠️" },
              { label: "Categories", value: categories.length, icon: "📂" },
              { label: "Expert Level", value: "90%", icon: "⭐" },
              { label: "Active Projects", value: "6+", icon: "🚀" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/5"
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

  // --- VARIANT 3: TIMELINE/STACK CHART ---
  if (variant === "timeline") {
    return (
      <section
        id="skills"
        ref={ref}
        className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
              Career Progression
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Skills Timeline
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My technical journey - from foundational skills to current
              expertise
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

              {categories.map((category, catIdx) => (
                <div key={category.name} className="mb-12">
                  {/* Category header */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: catIdx * 0.1 }}
                    className="flex items-center justify-center gap-3 mb-6"
                  >
                    <span className="text-2xl">{category.icon}</span>
                    <span className="text-xl font-bold text-white">
                      {category.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {category.skills.length} skills
                    </span>
                  </motion.div>

                  {/* Skills in this category */}
                  <div className="space-y-4">
                    {category.skills.map((skill, idx) => {
                      const level = skillLevels[skill] || 80;
                      const isEven = idx % 2 === 0;

                      return (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: catIdx * 0.1 + idx * 0.05 }}
                          className={`flex items-center ${isEven ? "flex-row" : "flex-row-reverse"} gap-6`}
                        >
                          {/* Content */}
                          <div
                            className={`w-5/12 ${isEven ? "text-right" : "text-left"}`}
                          >
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/5 hover:border-white/20 transition-all group cursor-pointer">
                              <div className="flex items-center gap-2 justify-between">
                                <span className="text-lg">
                                  {getSkillIcon(skill)}
                                </span>
                                <span className="font-medium text-white group-hover:text-blue-400 transition-colors">
                                  {skill}
                                </span>
                                <span className="text-sm font-bold text-blue-400">
                                  {level}%
                                </span>
                              </div>
                              <div className="w-full h-1.5 bg-gray-800 rounded-full mt-2 overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={
                                    isInView ? { width: `${level}%` } : {}
                                  }
                                  transition={{
                                    duration: 1.5,
                                    delay: catIdx * 0.1 + idx * 0.05,
                                  }}
                                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Timeline dot */}
                          <div className="w-2/12 flex justify-center">
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={isInView ? { scale: 1 } : {}}
                              transition={{ delay: catIdx * 0.1 + idx * 0.05 }}
                              className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-gray-900 shadow-lg shadow-blue-500/20"
                            />
                          </div>

                          {/* Empty spacer */}
                          <div className="w-5/12" />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // --- VARIANT 4: HEXAGON/DIAMOND GRID ---
  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/5 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
            Tech Stack Matrix
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills Matrix
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities
          </p>
        </motion.div>

        {/* Hexagon Grid */}
        <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: catIdx * 0.1 }}
              className="w-full md:w-auto"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 min-w-[200px]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{category.icon}</span>
                  <span className="font-bold text-white text-sm">
                    {category.name}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => {
                    const level = skillLevels[skill] || 80;
                    const colors = [
                      "blue",
                      "purple",
                      "cyan",
                      "green",
                      "yellow",
                      "pink",
                      "indigo",
                    ];
                    const color = colors[idx % colors.length];

                    return (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: catIdx * 0.1 + idx * 0.03 }}
                        whileHover={{
                          scale: 1.1,
                          rotate: [-5, 5, -5],
                          transition: { type: "spring", stiffness: 300 },
                        }}
                        className="relative group"
                      >
                        <div
                          className={`px-3 py-2 bg-${color}-500/10 border border-${color}-500/20 rounded-lg text-center min-w-[60px]`}
                        >
                          <div className="text-lg">{getSkillIcon(skill)}</div>
                          <div className="text-[10px] font-medium text-gray-400 mt-0.5">
                            {skill.length > 8 ? skill.slice(0, 6) + "…" : skill}
                          </div>
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-transparent via-${color}-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                        </div>

                        {/* Tooltip */}
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900/95 backdrop-blur-xl px-3 py-1.5 rounded-lg border border-white/10 shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                          <span className="text-white text-xs font-medium">
                            {skill}
                          </span>
                          <span className="text-${color}-400 text-xs ml-1">
                            {level}%
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
