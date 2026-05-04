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
  },
];

const Services: React.FC = () => (
  <section
    id="services"
    className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5"></div>

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
            What I Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent">
            Professional Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tailored solutions to bring your ideas to life and scale your
            business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              custom={index}
              whileHover={{ y: -8 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Gradient Border Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
              ></div>

              <div className="relative">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-3xl mb-6 shadow-lg`}
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </p>

                <div className="mb-6">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {service.price}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">
                    starting price
                  </span>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
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
                    </li>
                  ))}
                </ul>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  className={`inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <span>Get Started</span>
                  <svg
                    className="w-5 h-5 ml-2"
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
      </motion.div>
    </div>
  </section>
);

export default Services;
