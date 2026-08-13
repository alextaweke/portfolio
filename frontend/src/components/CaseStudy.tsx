// components/CaseStudy.tsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Clock,
  Users,
  Briefcase,
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  link: string;
  github: string;
  image: string;
  category?: string;
  tech?: string[];
  featured?: boolean;
  problem?: string;
  solution?: string;
  features?: string[];
  challenges?: string[];
  outcomes?: string[];
  metrics?: { label: string; value: string }[];
  timeline?: { phase: string; duration: string; description: string }[];
  architecture?: string;
  lessons?: string[];
  role?: string;
  duration?: string;
  team?: string;
  client?: string;
}

interface CaseStudyProps {
  projects: Project[];
}

const CaseStudy: React.FC<CaseStudyProps> = ({ projects }) => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  const project = projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === projectId,
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  useEffect(() => {
    if (!project) {
      navigate("/projects");
    }
    window.scrollTo(0, 0);
  }, [project, navigate]);

  if (!project) return null;

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20"
    >
      {/* Progress Bar */}
      <motion.div
        className="fixed top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        </motion.div>

        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/")}
          className="absolute top-24 left-8 z-20 px-4 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all flex items-center gap-2 border border-white/20"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </motion.button>

        {/* Hero Content */}
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {project.featured && (
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold rounded-full mb-6">
                  ⭐ Featured Project
                </span>
              )}

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                {project.title}
              </h1>

              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
                {project.description}
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-6 text-white">
                {project.duration && (
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Clock size={18} />
                    <span>{project.duration}</span>
                  </div>
                )}
                {project.role && (
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Briefcase size={18} />
                    <span>{project.role}</span>
                  </div>
                )}
                {project.team && (
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Users size={18} />
                    <span>Team: {project.team}</span>
                  </div>
                )}
                {project.client && (
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span>Client: {project.client}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm uppercase tracking-wider">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        {/* Overview Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              The Challenge
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {project.problem}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
            <div className="text-3xl mb-3">💡</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              The Solution
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {project.solution}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech?.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1.5 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-lg border border-blue-200 dark:border-blue-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Problem Section */}
        {project.problem && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-xl">
                🎯
              </span>
              The Problem
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.problem}
              </p>

              {project.challenges && (
                <>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                    Key Challenges
                  </h3>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center text-red-600 dark:text-red-400 text-sm font-bold flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {challenge}
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </motion.section>
        )}

        {/* Solution Section */}
        {project.solution && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white text-xl">
                💡
              </span>
              The Solution
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </motion.section>
        )}

        {/* Features Section */}
        {project.features && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-xl">
                ✨
              </span>
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all flex items-start gap-3"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Metrics Section */}
        {project.metrics && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center text-white text-xl">
                📊
              </span>
              Results & Impact
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.metrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: idx * 0.1, type: "spring" }}
                  className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-center text-white shadow-lg"
                >
                  <div className="text-3xl font-bold mb-2">{metric.value}</div>
                  <div className="text-sm opacity-90">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Lessons Learned */}
        {project.lessons && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center text-white text-xl">
                📚
              </span>
              Lessons Learned
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <ul className="space-y-4">
                {project.lessons.map((lesson, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      {lesson}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        )}

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-12"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Interested in working together?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's bring your next project to life!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-white text-gray-900 font-semibold rounded-xl hover:shadow-xl transition-all flex items-center gap-2"
              >
                <ExternalLink size={18} />
                View Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all flex items-center gap-2"
              >
                <Github size={18} />
                View Source Code
              </a>
              <Link
                to="/#contact"
                className="px-8 py-3.5 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default CaseStudy;
