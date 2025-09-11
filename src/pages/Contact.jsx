import React, { useState, useEffect } from "react";
import {FaUser,FaEnvelope,FaCommentDots,FaPaperPlane,FaSpinner,FaRocket,FaHeart,FaExternalLinkAlt,FaCalendarAlt,FaMapMarkerAlt,FaPhoneAlt,FaGithub,FaLinkedin,FaInstagram,FaGlobe,} from "react-icons/fa";
import Header from "./Header";
import TextScroll from "../ui/text-scroll";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    setIsVisible(true);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const ParticleTrail = () => (
    <div
      className="fixed w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full pointer-events-none z-50 mix-blend-screen transition-all duration-150 ease-out"
      style={{
        left: mousePosition.x - 8,
        top: mousePosition.y - 8,
        boxShadow: "0 0 20px rgba(34, 211, 238, 0.8), 0 0 40px rgba(34, 211, 238, 0.4)",
        filter: "blur(1px)",
      }}
    />
  );

  const showToast = (message, type = "success") => {
    const toast = document.createElement("div");
    toast.className = `fixed top-4 right-4 z-50 p-4 rounded-xl shadow-2xl backdrop-blur-lg border ${
      type === "success"
        ? "bg-green-600/20 border-green-600/50 text-green-100"
        : "bg-red-600/20 border-red-600/50 text-red-100"
    } animate-fade-in`;
    toast.innerHTML = `
      <div class="flex items-center gap-3">
        <div class="text-2xl">${type === "success" ? "✅" : "❌"}</div>
        <span class="font-semibold">${message}</span>
      </div>`;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => document.body.removeChild(toast), 500);
    }, 3000);
  };

  const validateForm = (formData) => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email address.";
    }
    if (!formData.message.trim()) errors.message = "Message is required.";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    };
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach((err) => showToast(err, "error"));
      return;
    }
    setLoading(true);
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxCVGVy1kfOYw3AgbUZi9fUA4eU0WhZXF5Oah4ur_6qCfBGby4tVo0fFnVV2BcjQ3AT5w/exec", 
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      showToast("Your message has been sent successfully!", "success");
      form.reset();
    } catch {
      showToast("Failed to send message. Please try again.", "error");
    }
    setLoading(false);
  };

  return (
    <>
      <Header />
      <ParticleTrail />
      <section
        id="contact"
        className="relative min-h-screen py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white overflow-hidden"
        aria-labelledby="contact-title"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-700/10 via-transparent to-purple-700/20 backdrop-blur-sm pointer-events-none" />
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-600/20 to-transparent animate-pulse"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 25%, rgba(34, 211, 238, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(156, 39, 176, 0.1) 0%, transparent 50%)",
              animation: "float 6s ease-in-out infinite",
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className={`text-center mb-16 max-w-3xl mx-auto ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-700`}>
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur-xl opacity-30 animate-pulse" />
              </div>
               <h2
                id="about-title"
                className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient"
              >
                <TextScroll
                  className="font-display text-center text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight"
                  text="💼 📧 Contact Me 📧 💼"
                  default_velocity={5}
                />
              </h2>
            </div>
            <div className="relative backdrop-blur-lg bg-white/10 p-8 rounded-3xl border border-white/20 shadow-2xl max-w-3xl mx-auto">
               <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur opacity-20" /> 
              <p className="relative text-xl lg:text-2xl leading-relaxed text-gray-200">
                I'd love to hear from you. Let's create something amazing together!
              </p>
            </div>
          </div>

          {/* Form and Contact Info */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-16">
            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-lg p-8 max-w-xl mx-900px"
              noValidate
            >
              <div className="mb-6">
                <label className="text-lg font-semibold flex items-center gap-2 text-cyan-400 mb-2" htmlFor="name">
                  <FaUser /> Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="text-lg font-semibold flex items-center gap-2 text-indigo-400 mb-2" htmlFor="email">
                  <FaEnvelope /> Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="text-lg font-semibold flex items-center gap-2 text-green-400 mb-2" htmlFor="message">
                  <FaCommentDots /> Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:border-green-400 focus:ring-2 focus:ring-green-400 focus:outline-none transition resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex justify-center items-center gap-3 p-4 rounded-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400 ${
                  loading ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                {loading ? <FaSpinner className="animate-spin text-xl" /> : <FaPaperPlane className="text-xl" />}
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>

            {/* Contact Info */}
            <address className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-lg p-8 max-w-xl mx-900px not-italic">
              <h3 className="text-3xl font-extrabold mb-8 text-gradient-cyan-purple">Get In Touch</h3>
              <ul className="space-y-6 text-white text-lg">
                <li className="flex items-center gap-4">
                  <FaEnvelope className="text-cyan-400" />
                  <a href="mailto:shekhfaisal.2110@gmail.com" className="hover:underline hover:text-cyan-300">
                    shekhfaisal.2110@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <FaPhoneAlt className="text-green-400" />
                  <a href="tel:+919173195287" className="hover:underline hover:text-green-300">
                    +91 9173195287
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-red-400" />
                  <span>Ahmedabad, India</span>
                </li>
                <li className="flex items-center gap-4">
                  <FaCalendarAlt className="text-yellow-400" />
                  <span>26 Sept 2005</span>
                </li>
                <li className="flex items-center gap-4">
                  <FaGlobe className="text-blue-400" />
                  <a href="https://shekhfaisal.tech" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-300">
                    shekhfaisal.tech
                  </a>
                </li>
              </ul>
              <div className="flex justify-center mt-[3rem] md:mt-[5rem] space-x-6 items-center ">
                <SocialIcon href="https://github.com/shekhfaisal2110" icon={<FaGithub />} label="GitHub" />
                <SocialIcon href="https://www.linkedin.com/in/mohammad-faisal-shekh" icon={<FaLinkedin />} label="LinkedIn" />
                <SocialIcon href="https://www.instagram.com/_shaikh__sahab_19_8/?igsh=N3M5a3FvZGxpN290#" icon={<FaInstagram />} label="Instagram" />
              </div>
            </address>
          </div>

          {/* Call to Action */}
          <div className={`max-w-4xl mx-auto text-center mb-6 py-8 px-4 flex flex-col sm:flex-row justify-center items-center gap-6  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-700`}>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-cyan-500 to-emerald-600 text-white font-bold rounded-xl shadow-lg transform transition hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-cyan-400"
            >
              <FaRocket className="animate-bounce" />
              Let's Work Together
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-xl shadow-lg transform transition hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-orange-400"
            >
              <FaExternalLinkAlt className="animate-pulse" />
              View My Work
            </a>
            <a
              href="/testimonials"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl shadow-lg transform transition hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-pink-400"
            >
              <FaHeart className="animate-pulse" />
              Client Reviews
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="relative">
              <div className="w-8 h-12 border-2 border-white/30 rounded-full mx-auto flex justify-center">
                <span className="block w-1 h-4 mt-2 bg-gradient-to-b from-cyan-400 to-blue-500 rounded animate-pulse" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const SocialIcon = ({ href, icon, label }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative rounded-full p-3 bg-gradient-to-r from-gray-700 via-gray-900 to-black shadow-lg text-white hover:shadow-cyan-400 hover:text-cyan-400 transition"
  >
    <span className="sr-only">{label}</span>
    <div className="text-2xl">{icon}</div>
    <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-xl blur" />
  </a>
);

export default Contact;
