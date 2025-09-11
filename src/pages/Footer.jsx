import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {Home, User, Briefcase, Settings, Mail, Quote, FileText} from "lucide-react";
import {FaCode, FaRocket, FaGithub, FaLinkedin, FaInstagram, FaEnvelope} from "react-icons/fa";
import ExpandedTabs from "../ui/ExpandedTabs";
// If you have this, else use an animated header of your choice
import TextScroll from "../ui/text-scroll";

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { to: '/', icon: Home, label: 'Home', color: 'from-cyan-500 to-blue-600' },
    { to: '/about', icon: User, label: 'About', color: 'from-purple-500 to-pink-600' },
    { to: '/portfolio', icon: Briefcase, label: 'Portfolio', color: 'from-green-500 to-cyan-600' },
    { to: '/services', icon: Settings, label: 'Services', color: 'from-orange-500 to-red-600' },
    { type: 'separator' },
    { to: '/testimonials', icon: Quote, label: 'Testimonials', color: 'from-indigo-500 to-purple-600' },
    { to: '/resume', icon: FileText, label: 'Resume', color: 'from-yellow-500 to-orange-600' },
    { to: '/contact', icon: Mail, label: 'Contact', color: 'from-blue-500 to-indigo-600' },
  ];
  const tabsForExpandedTabs = navLinks.map(link =>
    link.type === 'separator' ? { type: 'separator' }
      : { title: link.label, icon: link.icon, to: link.to, color: link.color }
  );

  const handleTabSelect = (to) => {
    if (location.pathname !== to) navigate(to);
  };

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const footerElement = document.getElementById("footer");
    if (footerElement) observer.observe(footerElement);

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
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

  return (
    <>
      <ParticleTrail />
      <footer
        id="footer"
        className="relative text-white py-20 overflow-hidden bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950"
        aria-labelledby="footer-title"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
          {/* Animated header */}
          <div
            className={`text-center mb-16 transition-all duration-[1000ms] ease-in-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 animate-pulse" />
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                <TextScroll
                  className="font-display text-center text-4xl font-semibold tracking-tighter text-black dark:text-white md:text-7xl md:leading-[5rem]"
                  text="💼 🤝 Let's Connect 🤝 💼"
                  default_velocity={5}
                />
              </h2>
            </div>
            <div className="relative max-w-3xl mx-auto p-8 rounded-3xl border border-white/30 shadow-2xl bg-white/10 backdrop-blur">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur opacity-30" />
              <p className="relative text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-100">
                Ready to bring your vision to life? Let's collaborate and create something extraordinary together!
              </p>
            </div>
          </div>

          {/* Navigation links */}
          <div
            className={`mb-16 transition-all duration-[1000ms] delay-[300ms] ease-in-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative group overflow-hidden rounded-3xl border border-white/30 bg-white/10 backdrop-blur-xl p-8 shadow-2xl group-hover:border-white/50 group-hover:bg-white/15 transition duration-500">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:shadow-cyan-400/60 transition duration-500 z-0">
                <span className="text-white text-sm select-none pointer-events-none">🔗</span>
              </div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:shadow-purple-400/60 transition duration-500 z-0">
                <FaCode className="text-white text-lg pointer-events-none" />
              </div>
              <div className="absolute top-1/2 -right-10 w-8 h-8 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full animate-ping shadow-lg group-hover:shadow-green-400/70 transition duration-500 z-0" />

              {/* Navigation Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent select-none">
                  Quick Navigation
                </h3>
                <div className="w-full flex justify-center items-center">
                  <div className="lg:flex items-center">
                    <ExpandedTabs
                      tabs={tabsForExpandedTabs}
                      selectedPath={location.pathname}
                      onSelect={handleTabSelect}
                      activeColor="text-cyan-400"
                      className="border-white/20 bg-white/5 backdrop-blur-lg shadow-xl w-full overflow-x-auto flex-nowrap"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div
            className={`transition-all duration-[1000ms] delay-[600ms] ease-in-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative group overflow-hidden rounded-3xl border border-white/30 bg-white/10 backdrop-blur-xl p-8 shadow-2xl group-hover:border-white/50 group-hover:bg-white/15 transition duration-500">
              {/* Social Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:shadow-purple-400/60 transition duration-500 z-0">
                <span className="text-white text-sm select-none pointer-events-none">💫</span>
              </div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:shadow-cyan-400/60 transition duration-500 z-0">
                <FaRocket className="text-white text-lg pointer-events-none" />
              </div>
              <div className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping shadow-lg group-hover:shadow-yellow-400/70 transition duration-500 z-0" />
              {/* Content */}
              <div className="relative z-10 mb-2">
                <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent select-none">
                  Follow My Journey
                </h3>
                <div className="flex justify-center gap-6 items-center">
                  {[
                    {
                      href: "https://github.com/shekhfaisal2110",
                      icon: <FaGithub />,
                    },
                    {
                      href: "https://www.linkedin.com/in/mohammad-faisal-shekh",
                      icon: <FaLinkedin />,
                    },
                    {
                      href: "https://www.instagram.com/_shaikh__sahab_19_8/?igsh=N3M5a3FvZGxpN290#",
                      icon: <FaInstagram />,
                    },
                  ].map(({ href, icon }, i) => (
                    <a
                      key={i}
                      href={href}
                      aria-label="Social Link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={"relative w-12 h-12 rounded-full bg-gradient-to-r from-gray-700 via-indigo-700 to-gray-900 text-white shadow-lg flex items-center justify-center transform transition duration-300 ease-in-out hover:scale-110 hover:-translate-y-1 hover:shadow-2xl border border-white/20"}
                      title="Social"
                    >
                      {icon}
                      <span className="sr-only">Social</span>
                      <span className="absolute inset-0 rounded-full opacity-0 hover:opacity-30 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-xl blur transition duration-300"></span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div
            className={`max-w-4xl mx-auto mb-16 py-8 px-4 flex flex-col sm:flex-row  items-center text-center flex-wrap justify-center gap-6 transition-all duration-[1000ms] delay-[900ms] ease-in-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <a
              href="/contact"
              className="relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-2xl transform transition duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <FaEnvelope className="animate-bounce" />
              Start a Project
            </a>
            <a
              href="/portfolio"
              className="relative inline-flex items-center gap-3 px-10 py-4 bg-white/15 backdrop-blur-lg border-2 border-white/20 text-white font-bold rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-white/25"
            >
              <FaRocket className="animate-pulse" />
              View Portfolio
            </a>
          </div>

          {/* Bottom Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-70 animate-pulse" />
          <div className="border-t border-white/20 pt-6 mt-6 text-center text-sm text-gray-400 select-none ">
            © 2025 Created by <span className="font-semibold text-white ">Shekh Faisal</span>. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

