// components/Navbar.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Moon,
  Sun,
  FileText,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface NavbarProps {
  name: string;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  github?: string;
  linkedin?: string;
  email?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  name,
  darkMode,
  setDarkMode,
  github = "https://github.com/alextaweke",
  linkedin = "https://linkedin.com/in/alemayehu-taweke-6b6a6331b",
  email = "alextaweke@gmail.com",
}) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: "about", label: "About", icon: "👤" },
    { id: "services", label: "Services", icon: "💼" },
    { id: "skills", label: "Skills", icon: "⚡" },
    { id: "projects", label: "Projects", icon: "🚀" },
    { id: "contact", label: "Contact", icon: "✉️" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id: string) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/20 dark:border-gray-700/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex justify-between items-center">
        {/* Logo with animated gradient */}
        <button
          onClick={() => navigate("/")}
          className="group relative flex items-center gap-2"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
              {name}
            </span>
          </motion.div>
          <span className="absolute -top-1 -right-8 text-[10px] font-mono bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            .dev
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {menuItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll(item.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
                scrolled
                  ? "text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </motion.button>
          ))}

          <div className="w-px h-6 bg-gray-300/30 dark:bg-gray-600/30 mx-2" />

          {/* Social Icons */}
          <div className="flex items-center gap-1">
            {[
              { href: github, icon: Github, label: "GitHub" },
              { href: linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${email}`, icon: Mail, label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-full transition-all ${
                  scrolled
                    ? "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>

          <div className="w-px h-6 bg-gray-300/30 dark:bg-gray-600/30 mx-2" />

          {/* Resume Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            download
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-semibold text-sm transition-all ${
              scrolled
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md hover:shadow-lg"
                : "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
            }`}
          >
            <FileText size={16} />
            Resume
          </motion.a>

          {/* Dark Mode Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-all ${
              scrolled
                ? "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
          >
            {darkMode ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} />
            )}
          </motion.button>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-all ${
              scrolled ? "text-gray-600 dark:text-gray-400" : "text-white/80"
            }`}
          >
            {darkMode ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} />
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded-lg transition-all ${
              scrolled ? "text-gray-700 dark:text-gray-300" : "text-white"
            }`}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/20 dark:border-gray-700/20 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-2">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleScroll(item.id)}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all text-left font-medium"
                >
                  <span className="text-xl">{item.icon}</span>
                  {item.label}
                </motion.button>
              ))}

              <div className="border-t border-gray-200/20 dark:border-gray-700/20 pt-4 mt-2">
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  <FileText size={18} />
                  Download Resume
                </a>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-200/20 dark:border-gray-700/20">
                {[
                  { href: github, icon: Github, label: "GitHub" },
                  { href: linkedin, icon: Linkedin, label: "LinkedIn" },
                  { href: `mailto:${email}`, icon: Mail, label: "Email" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
