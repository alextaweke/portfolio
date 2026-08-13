// components/About.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/motionVariants";

interface AboutProps {
  data?: {
    name: string;
    title: string;
    description: string;
  };
}

const About: React.FC<AboutProps> = ({ data }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const highlights = [
    {
      icon: "🎓",
      title: "Education",
      description: "BSc in Computer Science from Ambo University",
      details: [
        "CGPA: 3.86/4.0",
        "Exit Exam: 75/100",
        "Graduated with Distinction",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "💼",
      title: "Experience",
      description: "Full Stack Developer with 3+ years of experience",
      details: [
        "20+ Projects Completed",
        "15+ Happy Clients",
        "5-Star Reviews",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "🏆",
      title: "Achievements",
      description: "Advanced certifications in Web Development & AI",
      details: [
        "Ethio Coders Graduate",
        "Continuous Learner",
        "Top Rated on Upwork",
      ],
      color: "from-purple-500 to-pink-500",
    },
  ];

  const expertiseAreas = [
    { name: "Full Stack Development", icon: "🌐", level: 95 },
    { name: "System Architecture", icon: "🏗️", level: 88 },
    { name: "Performance Optimization", icon: "⚡", level: 90 },
    { name: "Clean Code", icon: "✨", level: 92 },
    { name: "Problem Solving", icon: "🧩", level: 94 },
    { name: "Team Collaboration", icon: "🤝", level: 90 },
  ];

  const achievements = [
    { number: "3+", label: "Years Experience", icon: "⏰" },
    { number: "20+", label: "Projects Completed", icon: "📦" },
    { number: "15+", label: "Satisfied Clients", icon: "😊" },
    { number: "98%", label: "On-time Delivery", icon: "📅" },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <motion.div
          style={{ scale }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ scale }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full inline-block">
              Get to know me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-6">
              I'm a full-stack developer who turns complex problems into
              elegant, scalable solutions
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Image Container with 3D effect */}
            <motion.div
              variants={fadeInUp}
              className="relative group flex-shrink-0"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="absolute -inset-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-3xl blur-2xl opacity-10 group-hover:opacity-30 transition-opacity duration-700" />
              <motion.img
                src="images/alex.png"
                alt="Alemayehu Taweke - Full Stack Developer"
                className="relative w-80 h-80 object-cover rounded-2xl shadow-2xl border-4 border-white dark:border-gray-800 group-hover:scale-105 transition-transform duration-500"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full shadow-xl font-semibold text-sm flex items-center gap-2"
              >
                🚀 Available for Work
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div variants={fadeInUp} className="flex-1 space-y-6">
              {/* Introduction */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-2xl shadow-lg flex-shrink-0">
                    👋
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                      Hi, I'm{" "}
                      <strong className="text-blue-600 dark:text-blue-400">
                        Alemayehu Taweke
                      </strong>
                      — a backend-focused full-stack developer specializing in
                      Django, Node.js, and scalable web applications. I design
                      and build complete systems, from modern frontends using
                      React and Next.js to reliable backend architectures, REST
                      APIs, and asynchronous processing with Celery and Redis.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                        Django Expert
                      </span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                        React Developer
                      </span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                        Node.js Pro
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Highlights Grid with 3D hover */}
              <div className="grid md:grid-cols-3 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300"
                  >
                    <div
                      className={`text-3xl mb-3 bg-gradient-to-r ${item.color} w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-gray-800 dark:text-white mb-2 text-lg">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {item.description}
                    </p>
                    <ul className="space-y-1">
                      {item.details.map((detail, i) => (
                        <li
                          key={i}
                          className="text-xs text-gray-500 dark:text-gray-500 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Expertise Areas with progress bars */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full" />
                  Core Expertise
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {expertiseAreas.map((area, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: idx * 0.05 }}
                      className="space-y-1.5"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                          <span className="text-lg">{area.icon}</span>
                          {area.name}
                        </span>
                        <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                          {area.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${area.level}%` } : {}}
                          transition={{
                            duration: 1.5,
                            ease: "easeOut",
                            delay: idx * 0.05,
                          }}
                          className={`h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 relative`}
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
              </div>

              {/* Achievement Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {achievements.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg border border-gray-100 dark:border-gray-700"
                  >
                    <div className="text-2xl mb-1">{stat.icon}</div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA with animated arrow */}
              <div className="flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center flex items-center justify-center gap-2 group min-w-[200px]"
                >
                  Let's Work Together
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                  </svg>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/resume.pdf"
                  download
                  className="px-6 py-4 border-2 border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 flex items-center gap-2"
                >
                  📄 Download Resume
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.upwork.com/freelancers/alextaweke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 bg-[#14a800] text-white font-semibold rounded-xl hover:bg-[#0d8c00] transition-all duration-300 flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.1 0c-4.1 0-7.5 3.4-7.5 7.5 0 1.6.5 3.1 1.4 4.3-.9 1.4-1.4 3-1.4 4.7 0 1.8.6 3.4 1.5 4.8-.9 1.1-1.5 2.5-1.5 4 0 3.5 2.8 6.3 6.3 6.3s6.3-2.8 6.3-6.3c0-1.3-.4-2.5-1-3.6.6-1.1 1-2.3 1-3.6 0-4.1-3.4-7.5-7.5-7.5zm0 20.5c-2.4 0-4.4-2-4.4-4.4 0-2.4 2-4.4 4.4-4.4 2.4 0 4.4 2 4.4 4.4 0 2.4-2 4.4-4.4 4.4zm0-12.1c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8 3.8 1.7 3.8 3.8-1.7 3.8-3.8 3.8z" />
                  </svg>
                  Upwork Profile
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
