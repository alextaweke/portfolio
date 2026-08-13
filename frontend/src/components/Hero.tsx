// components/Hero.tsx
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { fadeInUp } from "../utils/motionVariants";

interface HeroProps {
  data: {
    name: string;
    title: string;
    description: string;
    github: string;
    linkedin: string;
    email: string;
  };
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const stats = [
    {
      value: "3+",
      label: "Years Experience",
      icon: "💼",
      sub: "Full-stack dev",
    },
    {
      value: "20+",
      label: "Projects Delivered",
      icon: "🚀",
      sub: "From startups to enterprises",
    },
    { value: "15+", label: "Happy Clients", icon: "😊", sub: "5-star reviews" },
    {
      value: "100%",
      label: "Job Success",
      icon: "⭐",
      sub: "Top Rated on Upwork",
    },
  ];

  const techStack = [
    "React",
    "Next.js",
    "Django",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Tailwind",
    "Docker",
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950">
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />

        {/* Animated gradient orbs with mouse tracking */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 30,
            y: mousePosition.y * 30,
          }}
          transition={{ type: "spring", damping: 30, mass: 0.8 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -40,
            y: mousePosition.y * -40,
          }}
          transition={{ type: "spring", damping: 30, mass: 0.8 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 20,
            y: mousePosition.y * -20,
          }}
          transition={{ type: "spring", damping: 30, mass: 0.8 }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 2 + 0.5,
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ opacity, scale, y }}
        className="container mx-auto px-6 relative z-10 py-20"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left space-y-6"
          >
            {/* AVAILABILITY BADGE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-md px-6 py-3 rounded-full border border-green-500/30 hover:border-green-500/50 transition-all duration-300 group cursor-pointer"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-white/90 group-hover:text-green-300 transition-colors">
                ✅ Available for Freelance & Full-time
              </span>
              <span className="text-xs bg-green-500/20 px-2.5 py-1 rounded-full text-green-300 font-semibold">
                Top Rated
              </span>
            </motion.div>

            {/* NAME */}
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
                {data.name}
              </span>
            </motion.h1>

            {/* ANIMATED TITLE */}
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold h-20 sm:h-24">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer ⚛️",
                  2000,
                  "React & Next.js Specialist 🚀",
                  2000,
                  "Django & Node.js Expert 🎸",
                  2000,
                  "System Architect 🏗️",
                  2000,
                  "AI/ML Enthusiast 🤖",
                  2000,
                  "Available for Hire 💼",
                  2000,
                ]}
                wrapper="span"
                speed={45}
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"
                repeat={Infinity}
              />
            </div>

            {/* DESCRIPTION */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {data.description}
            </motion.p>

            {/* TECH STACK PILLS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              {techStack.map((tech, idx) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + idx * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-xs font-medium text-gray-300 hover:text-white hover:border-white/30 transition-all"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-center p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 group"
                >
                  <div className="text-2xl sm:text-3xl mb-1 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 font-medium">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-gray-500 mt-0.5 hidden sm:block">
                    {stat.sub}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              {/* Primary CTA */}
              <motion.a
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2"
              >
                <span>View My Work</span>
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.a>

              {/* Secondary CTA */}
              <motion.a
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-2"
              >
                <span>Hire Me</span>
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </motion.a>

              {/* Resume Download */}
              <motion.a
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center gap-2"
              >
                <span>📄 Resume</span>
              </motion.a>
            </motion.div>

            {/* SOCIAL LINKS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-4 justify-center lg:justify-start pt-2"
            >
              <span className="text-sm text-gray-500">Connect with me:</span>
              {[
                { href: data.github, icon: "🐙", label: "GitHub" },
                { href: data.linkedin, icon: "🔗", label: "LinkedIn" },
                { href: `mailto:${data.email}`, icon: "✉️", label: "Email" },
                {
                  href: "https://www.upwork.com/freelancers/alextaweke",
                  icon: "💼",
                  label: "Upwork",
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="group relative p-2.5 bg-white/10 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:bg-white/20"
                  aria-label={social.label}
                >
                  <span className="text-xl">{social.icon}</span>
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>

            {/* UPWORK TRUST BADGES */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex flex-wrap items-center gap-4 text-xs text-gray-400 justify-center lg:justify-start pt-2"
            >
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-sm">★★★★★</span>
                <span>Top Rated</span>
              </div>
              <div className="w-px h-4 bg-white/10" />
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>100% Job Success</span>
              </div>
              <div className="w-px h-4 bg-white/10" />
              <div className="flex items-center gap-2">
                <span className="text-blue-400">⚡</span>
                <span>Fast Response</span>
              </div>
              <div className="w-px h-4 bg-white/10" />
              <div className="flex items-center gap-2">
                <span className="text-purple-400">🔒</span>
                <span>NDA Protected</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT - PROFILE IMAGE */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex-1 flex justify-center lg:justify-end relative"
          >
            <div className="relative group perspective-1000">
              {/* Glow rings */}
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 animate-pulse" />
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-3xl blur-3xl opacity-20 group-hover:opacity-50 transition-opacity duration-700" />

              {/* Image container with 3D tilt */}
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 group-hover:border-white/40 transition-all duration-500"
                whileHover={{
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.02,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src="images/aleximage.png"
                  alt={`${data.name} - Full Stack Developer`}
                  className="w-80 sm:w-96 h-[28rem] sm:h-[32rem] lg:w-[28rem] lg:h-[36rem] xl:w-[32rem] xl:h-[40rem] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Floating tech tags */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2.5 rounded-2xl shadow-xl font-semibold text-sm border border-white/20 backdrop-blur-sm"
              >
                ⚛️ React 18
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-cyan-500 text-white px-4 py-2.5 rounded-2xl shadow-xl font-semibold text-sm border border-white/20 backdrop-blur-sm"
              >
                🚀 Next.js 14
              </motion.div>

              <motion.div
                animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: 1,
                  ease: "easeInOut",
                }}
                className="absolute top-1/3 -left-8 bg-gradient-to-r from-orange-400 to-red-400 text-white px-3 py-2 rounded-xl shadow-xl font-semibold text-xs border border-white/20 backdrop-blur-sm"
              >
                🎸 Django 5
              </motion.div>

              <motion.div
                animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  delay: 1.5,
                  ease: "easeInOut",
                }}
                className="absolute bottom-1/3 -right-8 bg-gradient-to-r from-pink-400 to-rose-400 text-white px-3 py-2 rounded-xl shadow-xl font-semibold text-xs border border-white/20 backdrop-blur-sm"
              >
                💚 Node.js
              </motion.div>

              {/* Upwork availability badge */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.5, type: "spring" }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md text-gray-900 px-6 py-3 rounded-full shadow-2xl border border-white font-semibold text-sm flex items-center gap-3 whitespace-nowrap"
              >
                <span className="text-yellow-500 text-lg">⭐</span>
                <span>Available for Work</span>
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-white/40 uppercase tracking-wider font-medium">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ height: ["30%", "60%", "30%"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
