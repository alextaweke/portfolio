// components/About.tsx
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/motionVariants";

const About: React.FC = () => {
  const highlights = [
    {
      icon: "🎓",
      title: "Education",
      description: "BSc in Computer Science from Ambo University",
      details: ["CGPA: 3.86/4.0", "Exit Exam: 75/100"],
    },
    {
      icon: "💼",
      title: "Experience",
      description: "Full Stack Developer with 3+ years of experience",
      details: ["20+ Projects Completed", "15+ Happy Clients"],
    },
    {
      icon: "🏆",
      title: "Achievements",
      description: "Advanced certifications in Web Development & AI",
      details: ["Ethio Coders Graduate", "Continuous Learner"],
    },
  ];

  const coreCompetencies = [
    "Full Stack Development",
    "System Architecture",
    "Performance Optimization",
    "Clean Code",
    "Problem Solving",
    "Team Collaboration",
  ];

  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
              Get to know me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Image Container */}
            <motion.div
              variants={fadeInUp}
              className="relative group flex-shrink-0"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <motion.img
                src="images/alex.png"
                alt="Alemayehu Taweke - Full Stack Developer"
                className="relative w-80 h-80 object-cover rounded-2xl shadow-2xl border-4 border-white dark:border-gray-800 group-hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full shadow-lg font-semibold text-sm">
                🚀 Available for Work
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={fadeInUp} className="flex-1 space-y-6">
              {/* Introduction */}
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  Hi, I'm{" "}
                  <strong className="text-blue-600 dark:text-blue-400">
                    Alemayehu Taweke
                  </strong>
                  — a backend-focused full-stack developer specializing in
                  Django, Node.js, and scalable web applications. I design and
                  build complete systems, from modern frontends using React and
                  Next.js to reliable backend architectures, REST APIs, and
                  asynchronous processing with Celery and Redis. My experience
                  includes developing transaction monitoring platforms,
                  distributed delivery systems, and enterprise management
                  applications. I focus on performance, clean architecture, and
                  building systems that are reliable, scalable, and ready for
                  real-world use. If you need a full-stack solution with a
                  strong backend foundation, I can help.
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="grid md:grid-cols-3 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
                  >
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="font-bold text-gray-800 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {item.description}
                    </p>
                    <ul className="space-y-1">
                      {item.details.map((detail, i) => (
                        <li
                          key={i}
                          className="text-xs text-gray-500 dark:text-gray-500 flex items-center gap-1"
                        >
                          <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Core Competencies */}
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Core Competencies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {coreCompetencies.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium border border-blue-200 dark:border-blue-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  Let's Work Together
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/resume.pdf"
                  download
                  className="px-6 py-3 border-2 border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
                >
                  Download Resume
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
