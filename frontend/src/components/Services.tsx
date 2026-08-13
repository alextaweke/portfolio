// components/Services.tsx
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/motionVariants";

const services = [
  {
    icon: "🌐",
    title: "Full-Stack Web Development",
    description:
      "Build complete web applications from frontend to backend using modern technologies.",
    price: "$10 - $60/hr",
    features: [
      "React / Next.js Frontend",
      "Django / Node.js Backend",
      "REST API Development",
      "PostgreSQL / MongoDB",
    ],
    color: "from-blue-500 to-cyan-500",
    badge: "⭐ Popular",
  },
  {
    icon: "🎨",
    title: "Frontend Development (React & Next.js)",
    description:
      "Create fast, responsive, and modern user interfaces using React, Next.js, and Tailwind CSS.",
    price: "$20 - $50/hr",
    features: [
      "Responsive UI Design",
      "Next.js Applications",
      "Tailwind CSS Styling",
      "Performance Optimization",
    ],
    color: "from-purple-500 to-pink-500",
    badge: "🔥 Trending",
  },
  {
    icon: "⚙️",
    title: "Backend Development (Django & Node.js)",
    description:
      "Develop scalable backend systems, APIs, and business logic for real-world applications.",
    price: "$15 - $60/hr",
    features: [
      "Django REST Framework",
      "Node.js / Express APIs",
      "Authentication & Security",
      "Database Design",
    ],
    color: "from-green-500 to-emerald-500",
    badge: "🚀 High Demand",
  },
  {
    icon: "🔌",
    title: "API Integration & System Design",
    description:
      "Integrate third-party services and design reliable backend systems.",
    price: "$15 - $65/hr",
    features: [
      "External API Integration",
      "Webhook Systems",
      "Error Handling & Logging",
      "System Architecture",
    ],
    color: "from-orange-500 to-red-500",
    badge: "💡 Expert",
  },
  {
    icon: "🤖",
    title: "AI & Automation Solutions",
    description:
      "Build AI-powered applications and automation workflows using cutting-edge technologies.",
    price: "$25 - $75/hr",
    features: [
      "AI Integration (Groq, Gemini)",
      "Web Scraping & Automation",
      "Chatbot Development",
      "Task Scheduling (Celery/Redis)",
    ],
    color: "from-indigo-500 to-purple-500",
    badge: "✨ Latest",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description:
      "Build cross-platform mobile applications using React Native and modern frameworks.",
    price: "$20 - $60/hr",
    features: [
      "React Native Development",
      "Cross-platform Apps",
      "API Integration",
      "App Store Deployment",
    ],
    color: "from-pink-500 to-rose-500",
    badge: "📲 Mobile Expert",
  },
];

const Services: React.FC = () => (
  <section
    id="services"
    className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/50 to-purple-50/50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20"
  >
    {/* Background decorations */}
    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
      transition={{ duration: 10, repeat: Infinity }}
      className="absolute top-20 left-20 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl"
    />
    <motion.div
      animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
      transition={{ duration: 12, repeat: Infinity, delay: 2 }}
      className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-3xl"
    />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full inline-block">
            What I Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent">
            Professional Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tailored solutions to bring your ideas to life and scale your
            business
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              custom={index}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              {/* Animated background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Badge */}
              <span className="absolute top-4 right-4 text-xs font-semibold px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full shadow-lg">
                {service.badge}
              </span>

              <div className="relative">
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Price */}
                <div className="mb-6 p-4 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700/50 dark:to-blue-900/20 rounded-xl">
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                    {service.price}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">
                    starting rate
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm"
                    >
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="#contact"
                  className={`inline-flex items-center justify-center w-full px-6 py-3.5 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 gap-2 group`}
                >
                  <span>Get Started</span>
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div variants={fadeInUp} className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-xl">★★★★★</span>
              <span className="text-sm font-medium">Top Rated</span>
            </div>
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-700" />
            <div className="flex items-center gap-2">
              <span className="text-green-400 text-xl">✓</span>
              <span className="text-sm font-medium">100% Job Success</span>
            </div>
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-700" />
            <div className="flex items-center gap-2">
              <span className="text-blue-400 text-xl">⚡</span>
              <span className="text-sm font-medium">Fast Delivery</span>
            </div>
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-700" />
            <div className="flex items-center gap-2">
              <span className="text-purple-400 text-xl">🔒</span>
              <span className="text-sm font-medium">NDA Protected</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Services;
