// components/Projects.tsx
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  link: string;
  github: string;
  image: string;
  category?: string;
  tech?: string[];
  featured?: boolean;
  highlights?: string[];
  problem?: string;
  solution?: string;
  features?: string[];
  challenges?: string[];
  role?: string;
  duration?: string;
  team?: string;
  metrics?: { label: string; value: string }[];
}

interface ProjectsProps {
  completed: Project[];
  ongoing: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ completed, ongoing }) => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const navigate = useNavigate();

  const allProjects = [...completed, ...ongoing].map((p) => ({
    ...p,
    category: p.category || "fullstack",
    tech: p.tech || [],
    highlights: p.highlights || [],
  }));

  const categories = useMemo(() => {
    const cats = allProjects.map((p) => p.category).filter(Boolean) as string[];
    return ["all", ...Array.from(new Set(cats))];
  }, [allProjects]);

  const filteredProjects = useMemo(() => {
    let filtered =
      filter === "all"
        ? allProjects
        : allProjects.filter((p) => p.category === filter);

    if (searchTerm) {
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.tech?.some((t) =>
            t.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
      );
    }

    return filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }, [allProjects, filter, searchTerm]);

  const stats = {
    total: allProjects.length,
    completed: completed.length,
    ongoing: ongoing.length,
    featured: allProjects.filter((p) => p.featured).length,
  };

  const handleCaseStudy = (project: Project) => {
    const slug = project.title.toLowerCase().replace(/\s+/g, "-");
    navigate(`/case-study/${slug}`);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />

      {/* Animated orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Portfolio Showcase
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Transforming ideas into powerful, scalable solutions. Here's a
            selection of my best work.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-8">
            {[
              { label: "Total Projects", value: stats.total, icon: "🚀" },
              { label: "Completed", value: stats.completed, icon: "✅" },
              { label: "In Progress", value: stats.ongoing, icon: "⚡" },
              { label: "Featured", value: stats.featured, icon: "⭐" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-gray-700"
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                    : "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64 px-4 py-2.5 pl-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
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
            <div className="flex gap-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-1 border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-full transition-all ${viewMode === "grid" ? "bg-blue-500 text-white" : "text-gray-600 dark:text-gray-400"}`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-full transition-all ${viewMode === "list" ? "bg-blue-500 text-white" : "text-gray-600 dark:text-gray-400"}`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={filter + searchTerm}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`grid gap-6 ${
                viewMode === "grid"
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1"
              }`}
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                  tech={project.tech || []}
                  highlights={project.highlights || []}
                  index={index}
                  onCaseStudy={() => handleCaseStudy(project)}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                No projects found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal content */}
              <div className="relative h-64 md:h-80">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                  {selectedProject.description}
                </p>

                {/* Project details */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    {selectedProject.problem && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                          <span className="text-red-500">🎯</span> Problem
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {selectedProject.problem}
                        </p>
                      </div>
                    )}
                    {selectedProject.solution && (
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                          <span className="text-green-500">💡</span> Solution
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {selectedProject.solution}
                        </p>
                      </div>
                    )}
                  </div>
                  <div>
                    {selectedProject.tech && (
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium border border-blue-200 dark:border-blue-800"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-center font-semibold rounded-xl hover:shadow-lg transition-all"
                  >
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white text-center font-semibold rounded-xl hover:bg-gray-800 transition-all"
                  >
                    Source Code
                  </a>
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      handleCaseStudy(selectedProject);
                    }}
                    className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all"
                  >
                    Case Study
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
