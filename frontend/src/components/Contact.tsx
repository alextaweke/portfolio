// components/Contact.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { fadeInUp, staggerContainer } from "../utils/motionVariants";

interface ContactProps {
  email: string;
  phone?: string;
  location?: string;
}

const Contact: React.FC<ContactProps> = ({
  email,
  phone = "+251 979 257 541",
  location = "Addis Ababa, Ethiopia",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    budget: "",
    timeline: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Simulate API call - Replace with your actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Send to your backend or email service
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          budget: "",
          timeline: "",
        });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: email,
      link: `mailto:${email}`,
      color: "from-blue-500 to-cyan-500",
      description: "I'll respond within 24 hours",
    },
    {
      icon: "📱",
      label: "Phone",
      value: phone,
      link: `tel:${phone}`,
      color: "from-green-500 to-emerald-500",
      description: "Available 9 AM - 6 PM EAT",
    },
    {
      icon: "📍",
      label: "Location",
      value: location,
      color: "from-purple-500 to-pink-500",
      description: "Remote & On-site available",
    },
    {
      icon: "⏰",
      label: "Response Time",
      value: "Within 24 hours",
      color: "from-orange-500 to-red-500",
      description: "Usually faster",
    },
  ];

  const availabilityOptions = [
    "Full-time Positions",
    "Freelance Projects",
    "Contract Work",
    "Technical Consulting",
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

      {/* Animated Orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-20 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-3xl"
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
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how I can help bring your
              ideas to life
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <motion.div variants={fadeInUp} className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center text-2xl shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                        {info.label}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-lg font-semibold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold text-gray-800 dark:text-white">
                          {info.value}
                        </p>
                      )}
                      {info.description && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {info.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Availability Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-6 shadow-xl text-white"
              >
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  💼 Available For
                </h3>
                <ul className="space-y-2.5">
                  {availabilityOptions.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-white/90"
                    >
                      <svg
                        className="w-5 h-5 text-green-300 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-white/80">
                      Available for immediate work
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
                <AnimatePresence mode="wait">
                  {submitStatus === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      className="text-center py-16"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
                      >
                        <svg
                          className="w-12 h-12 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </motion.div>
                      <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">
                        Message Sent! 🎉
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                        Thank you for reaching out! I'll get back to you within
                        24 hours.
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSubmitStatus("idle")}
                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                      >
                        Send Another Message
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      ref={formRef}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className={`w-full px-4 py-3 rounded-xl border-2 transition-all ${
                              errors.name
                                ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                                : "border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 focus:border-blue-500"
                            } text-gray-800 dark:text-white focus:ring-4 focus:ring-blue-500/20 focus:outline-none`}
                            placeholder="alex taweke"
                          />
                          {errors.name && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-1 text-sm text-red-500"
                            >
                              {errors.name}
                            </motion.p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            className={`w-full px-4 py-3 rounded-xl border-2 transition-all ${
                              errors.email
                                ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                                : "border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 focus:border-blue-500"
                            } text-gray-800 dark:text-white focus:ring-4 focus:ring-blue-500/20 focus:outline-none`}
                            placeholder="alextaweke@gmail.com"
                          />
                          {errors.email && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-1 text-sm text-red-500"
                            >
                              {errors.email}
                            </motion.p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              subject: e.target.value,
                            })
                          }
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-all ${
                            errors.subject
                              ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                              : "border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 focus:border-blue-500"
                          } text-gray-800 dark:text-white focus:ring-4 focus:ring-blue-500/20 focus:outline-none`}
                          placeholder="Project Discussion"
                        />
                        {errors.subject && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-1 text-sm text-red-500"
                          >
                            {errors.subject}
                          </motion.p>
                        )}
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Budget Range (Optional)
                          </label>
                          <select
                            value={formData.budget}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                budget: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-gray-800 dark:text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:outline-none transition-all"
                          >
                            <option value="">Select budget range</option>
                            <option value="< $1,000">Less than $1,000</option>
                            <option value="$1,000 - $5,000">
                              $1,000 - $5,000
                            </option>
                            <option value="$5,000 - $10,000">
                              $5,000 - $10,000
                            </option>
                            <option value="$10,000 - $25,000">
                              $10,000 - $25,000
                            </option>
                            <option value="> $25,000">More than $25,000</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Timeline (Optional)
                          </label>
                          <select
                            value={formData.timeline}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                timeline: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-gray-800 dark:text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:outline-none transition-all"
                          >
                            <option value="">Select timeline</option>
                            <option value="ASAP">ASAP</option>
                            <option value="1-2 weeks">1-2 weeks</option>
                            <option value="1 month">1 month</option>
                            <option value="1-3 months">1-3 months</option>
                            <option value="3+ months">3+ months</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Message *
                        </label>
                        <textarea
                          rows={6}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-all ${
                            errors.message
                              ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                              : "border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 focus:border-blue-500"
                          } text-gray-800 dark:text-white focus:ring-4 focus:ring-blue-500/20 focus:outline-none resize-none`}
                          placeholder="Tell me about your project, goals, and requirements..."
                        />
                        {errors.message && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-1 text-sm text-red-500"
                          >
                            {errors.message}
                          </motion.p>
                        )}
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin h-5 w-5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
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
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                              />
                            </svg>
                          </>
                        )}
                      </motion.button>

                      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                        I'll respond within 24 hours. No spam, guaranteed.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
