// components/Footer.tsx
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

interface FooterProps {
  data: {
    name: string;
    github: string;
    linkedin: string;
    email: string;
    phone?: string;
    location?: string;
  };
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "API Integration",
    "Technical Consultation",
    "System Architecture",
  ];

  const technologies = [
    "React",
    "Next.js",
    "Django",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "Docker",
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white py-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat" />
        <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
              {data.name}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building modern web applications with cutting-edge technologies.
              Specializing in full-stack development, system architecture, and
              performance optimization.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {[
                { href: data.github, icon: Github, label: "GitHub" },
                { href: data.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${data.email}`, icon: Mail, label: "Email" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all border border-white/10 hover:border-white/20 group"
                  aria-label={social.label}
                >
                  <social.icon
                    size={20}
                    className="text-gray-400 group-hover:text-white transition-colors"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:scale-150 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-purple-500 rounded-full flex-shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Tech */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <Mail size={16} className="text-blue-400 flex-shrink-0" />
                  <a href={`mailto:${data.email}`} className="text-sm">
                    {data.email}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <Phone size={16} className="text-green-400 flex-shrink-0" />
                  <span className="text-sm">
                    {data.phone || "+251 979 257 541"}
                  </span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <MapPin size={16} className="text-purple-400 flex-shrink-0" />
                  <span className="text-sm">
                    {data.location || "Addis Ababa, Ethiopia"}
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3 text-gray-300">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-white/5 rounded-lg text-xs text-gray-400 hover:bg-white/10 hover:text-white transition-all border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} {data.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <div className="w-px h-4 bg-gray-700" />
            <a
              href="#"
              className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
            >
              Terms of Service
            </a>
            <div className="w-px h-4 bg-gray-700" />
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              <Send size={14} />
              Hire Me
            </motion.a>
          </div>
        </motion.div>

        {/* Floating "Back to Top" */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 z-50"
          aria-label="Back to top"
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
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
