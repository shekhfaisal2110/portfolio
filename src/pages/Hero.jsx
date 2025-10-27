import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaRocket,
  FaDesktop,
} from "react-icons/fa";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import heroImg from "../assets/portfolio/hero1.webp";
import About from "./About";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Contact from "./Contact";
import Resume from "./Resume";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Header from "./Header";
import SEOHelmet from '../components/SEOHelmet';
import LogoImg from '../assets/logo/icon.jpg'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // <-- New loading state

  // Simulate loading for 2.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  // Enhanced TypeAnimation component
  const TypeAnimation = ({ sequence, wrapper, speed, repeat, className }) => {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      const textSequence = sequence.filter((item, index) => index % 2 === 0);
      const delays = sequence.filter((item, index) => index % 2 === 1);

      let timeout;
      const currentFullText = textSequence[currentIndex] || "";

      if (!isDeleting) {
        if (currentText.length < currentFullText.length) {
          timeout = setTimeout(() => {
            setCurrentText(currentFullText.slice(0, currentText.length + 1));
          }, speed);
        } else {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, delays[currentIndex] || 2000);
        }
      } else {
        if (currentText.length > 0) {
          timeout = setTimeout(() => {
            setCurrentText(currentText.slice(0, -1));
          }, speed / 2);
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % textSequence.length);
        }
      }

      return () => clearTimeout(timeout);
    }, [currentText, currentIndex, isDeleting, sequence, speed]);

    return React.createElement(wrapper, { className }, currentText);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    setIsVisible(true);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
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

  // Skeleton Loader Component
  const SkeletonLoader = () => (
    <section className="mt-[5rem] min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16 w-full">
        {/* Left Skeleton */}
        <div className="lg:w-1/2 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-700 animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-8 w-32 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-5 w-16 bg-gray-700 rounded animate-pulse"></div>
            </div>
          </div>
          <div className="h-12 w-64 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded animate-pulse"></div>
          <div className="space-y-4">
            <div className="h-6 w-full bg-gray-700 rounded animate-pulse"></div>
            <div className="h-6 w-5/6 bg-gray-700 rounded animate-pulse"></div>
          </div>
          <div className="h-32 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 animate-pulse"></div>
          <div className="flex gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-16 h-16 rounded-full bg-gray-700 animate-pulse"></div>
            ))}
          </div>
          <div className="flex gap-4">
            <div className="w-40 h-12 rounded-xl bg-gradient-to-r from-cyan-500/30 to-blue-600/30 animate-pulse"></div>
            <div className="w-40 h-12 rounded-xl bg-white/5 border border-white/10 animate-pulse"></div>
          </div>
          <div className="flex flex-wrap gap-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="px-6 py-3 bg-white/5 rounded-full animate-pulse w-24"></div>
            ))}
          </div>
        </div>

        {/* Right Skeleton */}
        <div className="lg:w-1/2 w-full max-w-xl mx-auto relative">
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 flex gap-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-8 h-8 bg-gray-700 rounded-full animate-pulse"></div>
            ))}
          </div>
          <div className="w-full aspect-[4/5] bg-gray-800 rounded-3xl animate-pulse"></div>
        </div>
      </div>
    </section>
  );

  if (isLoading) {
    return (
      <>
        <Header />
        <SkeletonLoader />
        {/* Keep other sections hidden during loading */}
      </>
    );
  }

  return (
    <>
    <SEOHelmet
        title="Web Developer & Frontend Engineer"
        description="Shekh Faisal - BCA student and Web Developer Intern at SkillCraft Technology. Specializing in React.js, and Frontend development. View my portfolio of innovative web applications."
        keywords="Shekh Faisal, Web Developer, React.js,  Frontend Developer, Portfolio, SkillCraft Technology, BCA Student"
        url="/"
        image={LogoImg}
      />

      <Header />
      <ParticleTrail />
      <section
        id="hero"
        className="mt-[5rem] relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950 text-white overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left: Enhanced Text Section */}
          <div
            className={`lg:w-1/2 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                  <span className="text-3xl">👋</span>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 animate-pulse" />
              </div>
              <div>
                <span className="text-3xl font-bold text-gray-300 block">Hello there!</span>
                <span className="text-lg text-gray-400">I'm</span>
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                Shekh Faisal
              </span>
            </h1>

            <div className="text-xl lg:text-3xl text-gray-300 mb-10 leading-relaxed">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-gray-400">A passionate</span>
                <div className="relative">
                  <TypeAnimation
                    sequence={[
                      "💻 Web Developer",
                      2500,
                      "🚀 Frontend Engineer",
                      2500,
                      "⚛️ React Developer",
                      2500,
                      "🎨 UI/UX Designer",
                      2500,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                  />
                  <span className="animate-pulse ml-2 text-cyan-400 text-2xl">|</span>
                </div>
              </div>

              <div className="relative backdrop-blur-lg bg-white/10 p-8 rounded-3xl border border-white/20 shadow-2xl">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur opacity-20" />
                <p className="relative text-lg lg:text-xl leading-relaxed text-gray-200">
                  Crafting exceptional digital experiences through innovative web solutions. I specialize in modern technologies and clean, efficient code that brings your vision to life. Let's collaborate to build something extraordinary that exceeds expectations and delivers real value.
                </p>
              </div>
            </div>

            {/* Enhanced Social Icons */}
            <div className="flex gap-6 mb-10">
             {[
                {
                  href: "https://github.com/shekhfaisal2110",
                  icon: <FaGithub />,
                  color: "from-gray-700 to-gray-900",
                  hoverColor: "hover:from-gray-600 hover:to-gray-800",
                  name: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/faisal-shaikh-3064582a4",
                  icon: <FaLinkedin />,
                  color: "from-blue-600 to-blue-800",
                  hoverColor: "hover:from-blue-500 hover:to-blue-700",
                  name: "LinkedIn",
                },
                {
                  href: "https://www.instagram.com/_shaikh__sahab_19_8",
                  icon: <FaInstagram />,
                  color: "from-pink-600 to-purple-800",
                  hoverColor: "hover:from-pink-500 hover:to-purple-700",
                  name: "Instagram",
                },
              ].map(({ href, icon, color, hoverColor, name }, idx) => (
                <div key={idx} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300" />
                  <a
                    href={href.trim()} // Trim whitespace in URLs
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative w-16 h-16 rounded-full bg-gradient-to-r ${color} ${hoverColor} text-white text-2xl flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-2xl border border-white/20`}
                    title={name}
                  >
                    {icon}
                  </a>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-wrap gap-6">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl blur opacity-100 group-hover:opacity-100 transition duration-300 animate-pulse" />
                <a
                  href="/portfolio"
                  className="relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center gap-3"
                >
                  <FaRocket className="text-xl animate-bounce" /> View Portfolio
                </a>
              </div>

              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                <a
                  href="/contact"
                  className="relative px-10 py-5 bg-white/10 backdrop-blur-lg border-2 border-white/30 text-white font-bold text-lg rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-white/20 flex items-center gap-3"
                >
                  <FaDesktop className="text-xl animate-pulse" /> Get In Touch
                </a>
              </div>
            </div>

            {/* Enhanced Skills Pills */}
            <div className="flex flex-wrap gap-3 mt-6">
              {["HTML/CSS", "JavaScript", "React"].map((skill, idx) => (
                <div key={idx} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300" />
                  <span className="relative px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-sm font-semibold border border-white/20 transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:scale-105">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hero Image Section */}
          <div
            className={`lg:w-1/2 relative w-full max-w-xl mx-auto transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl transform rounded-3xl border border-white/20 shadow-xl overflow-hidden ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Skill Icons Bar */}
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 flex gap-6 bg-black bg-opacity-30 backdrop-blur-md rounded-full px-6 py-2 shadow-lg">
              {[FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="text-white text-3xl animate-bounce hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
                    style={{ animationDelay: `${index * 150}ms` }}
                    title={
                      {
                        0: "HTML5",
                        1: "CSS3",
                        2: "JavaScript",
                        3: "React",
                        4: "Node.js",
                        5: "Git",
                      }[index]
                    }
                  >
                    <Icon />
                  </div>
                )
              )}
            </div>

            <img
              src={heroImg}
              alt="Hero"
              className="w-full h-auto rounded-3xl"
              loading="lazy"
              draggable={false}
              style={{ userSelect: "none" }}
            />
            <div className="absolute top-10 left-10 w-6 h-6 bg-cyan-400 rounded-full animate-ping opacity-60 sm:top-10 sm:left-10 xs:top-6 xs:left-6" />
            <div className="absolute bottom-10 right-10 w-8 h-8 bg-purple-400 rounded-full animate-pulse opacity-60 sm:bottom-10 sm:right-10 xs:bottom-6 xs:right-6" />
            <div className="absolute top-1/2 left-6 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-60 sm:top-1/2 sm:left-6 xs:top-1/3 xs:left-4" />
            <div className="absolute bottom-1/4 left-1/4 w-5 h-5 bg-pink-400 rounded-full animate-pulse opacity-60 sm:bottom-1/4 sm:left-1/4 xs:bottom-1/3 xs:left-1/5" />
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="relative">
            <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center">
              <div className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mt-2 animate-pulse" />
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 animate-pulse" />
          </div>
        </div>
      </section>

      <About />
      <Portfolio />
      <Services />
      <Resume />
      <Testimonials />
      <Contact />
      {/* <Footer /> */}
    </>
  );
};

export default Hero;