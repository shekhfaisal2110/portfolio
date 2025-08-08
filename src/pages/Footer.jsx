import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaCogs,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCode,
  FaRocket,
  FaHeart,
} from "react-icons/fa";
import { Link } from 'react-router-dom';
import connectImg from '../assets/icons/connect.png';
import Container3DBackground from '../components/Animated3DBackground'; // Import the container 3D background

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById('footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  // Enhanced ParticleTrail component matching Hero style
  const ParticleTrail = () => (
    <div
      className="fixed w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full pointer-events-none z-50 mix-blend-screen transition-all duration-150 ease-out"
      style={{
        left: mousePosition.x - 8,
        top: mousePosition.y - 8,
        boxShadow: '0 0 20px rgba(34, 211, 238, 0.8), 0 0 40px rgba(34, 211, 238, 0.4)',
        filter: 'blur(1px)',
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
        {/* Add 3D Animated Background positioned within footer */}
        <div className="absolute inset-0 z-0">
          <Container3DBackground 
            opacity={0.8}
            particleCount={35}
            lineCount={60}
            animationSpeed={0.7}
            colors={{
              primary: 0x22d3ee,      // Cyan
              secondary: 0x8b5cf6,    // Purple
              accent: 0x3b82f6,       // Blue
              tertiary: 0x06b6d4,     // Light Blue
              quaternary: 0x10b981,   // Green
              quinary: 0xf59e0b       // Orange
            }}
            gradient="transparent"
            mouseInteraction={true}
            className="footer-bg"
          />
        </div>
        
        {/* Enhanced overlay for better content visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 backdrop-blur-sm z-1" />
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-20 z-1">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-pulse" 
               style={{
                 backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(34, 211, 238, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(156, 39, 176, 0.1) 0%, transparent 50%)',
                 animation: 'float 6s ease-in-out infinite'
               }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Enhanced Header matching Hero style */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                  <img 
                    src={connectImg} 
                    alt="Connect Icon" 
                    className="w-8 h-8 animate-spin" 
                    style={{animationDuration: '8s'}}
                  />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 animate-pulse" />
              </div>
              <h2
                id="footer-title"
                className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient"
              >
                Let's Connect
              </h2>
            </div>
            
            <div className="relative backdrop-blur-xl bg-white/10 p-8 rounded-3xl border border-white/30 shadow-2xl max-w-3xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur opacity-30" />
              <p className="relative text-xl lg:text-2xl leading-relaxed text-gray-100">
                Ready to bring your vision to life? Let's collaborate and create something extraordinary together!
              </p>
            </div>
          </div>

          {/* Enhanced Navigation Links */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative group mb-16">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition-all duration-700" />
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl group-hover:border-white/50 group-hover:bg-white/15 transition-all duration-500">
                
                {/* Floating decorative elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:shadow-cyan-400/60 transition-all duration-500">
                  <span className="text-white text-sm">🔗</span>
                </div>
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:shadow-purple-400/60 transition-all duration-500">
                  <FaCode className="text-white text-lg" />
                </div>
                <div className="absolute top-1/2 -right-10 w-8 h-8 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full animate-ping shadow-lg group-hover:shadow-green-400/70 transition-all duration-500" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Quick Navigation
                  </h3>
                  
                  <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {[
                      { href: "/hero", label: "Home", icon: <FaHome />, color: "from-cyan-500 to-blue-600" },
                      { href: "/about", label: "About", icon: <FaUser />, color: "from-purple-500 to-pink-600" },
                      { href: "/portfolio", label: "Portfolio", icon: <FaBriefcase />, color: "from-green-500 to-cyan-600" },
                      { href: "/services", label: "Services", icon: <FaCogs />, color: "from-orange-500 to-red-600" },
                      { href: "/contact", label: "Contact", icon: <FaEnvelope />, color: "from-blue-500 to-indigo-600" },
                    ].map((link, i) => (
                      <li key={i} className="group/nav relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-0 group-hover/nav:opacity-75 transition duration-300" />
                        <a
                          href={link.href}
                          aria-label={`Go to ${link.label}`}
                          className={`relative flex items-center gap-3 px-6 py-4 bg-white/15 backdrop-blur-lg rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 hover:bg-white/25 hover:shadow-lg hover:-translate-y-1`}
                          style={{animationDelay: `${i * 100}ms`}}
                        >
                          <div className={`p-2 rounded-full bg-gradient-to-r ${link.color} shadow-lg transform group-hover/nav:scale-110 transition-transform duration-300`}>
                            <span className="text-white text-sm">{link.icon}</span>
                          </div>
                          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover/nav:text-white transition-all duration-300 font-semibold">
                            {link.label}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Social Icons matching Hero style */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative group mb-16">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-300 via-pink-400 to-cyan-400 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition-all duration-700" />
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl group-hover:border-white/50 group-hover:bg-white/15 transition-all duration-500">
                
                {/* Floating decorative elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:shadow-purple-400/60 transition-all duration-500">
                  <span className="text-white text-sm">💫</span>
                </div>
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:shadow-cyan-400/60 transition-all duration-500">
                  <FaRocket className="text-white text-lg" />
                </div>
                <div className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping shadow-lg group-hover:shadow-yellow-400/70 transition-all duration-500" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">
                    Follow My Journey
                  </h3>
                  
                  <div className="flex justify-center gap-6">
                    {[
                      {
                        href: "https://github.com/shekhfaisal2110",
                        icon: <FaGithub />,
                        color: 'from-gray-700 to-gray-900',
                        hoverColor: 'hover:from-gray-600 hover:to-gray-800',
                        name: 'GitHub'
                      },
                      {
                        href: "https://www.linkedin.com/in/faisal-shaikh-3064582a4",
                        icon: <FaLinkedin />,
                        color: 'from-blue-600 to-blue-800',
                        hoverColor: 'hover:from-blue-500 hover:to-blue-700',
                        name: 'LinkedIn'
                      },
                      {
                        href: "https://www.instagram.com/_shaikh__sahab_19_8",
                        icon: <FaInstagram />,
                        color: 'from-pink-600 to-purple-800',
                        hoverColor: 'hover:from-pink-500 hover:to-purple-700',
                        name: 'Instagram'
                      },
                    ].map(({ href, icon, color, hoverColor, name }, idx) => (
                      <div key={idx} className="group/social relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-0 group-hover/social:opacity-100 transition duration-300" />
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={name}
                          className={`relative w-20 h-20 rounded-full bg-gradient-to-r ${color} ${hoverColor} text-white text-3xl flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-2xl border border-white/20`}
                          title={name}
                        >
                          {icon}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Call to Action Section */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <div className="flex flex-wrap justify-center gap-6">
                <div className="group/cta relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl blur opacity-100 group-hover/cta:opacity-100 transition duration-300 animate-pulse" />
                  <a
                    href="contact"
                    className="relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center gap-3"
                  >
                    <FaEnvelope className="text-xl animate-bounce" />
                    Start a Project
                  </a>
                </div>

                <div className="group/portfolio relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl blur opacity-0 group-hover/portfolio:opacity-100 transition duration-300" />
                  <a
                    href="portfolio"
                    className="relative px-10 py-5 bg-white/15 backdrop-blur-lg border-2 border-white/30 text-white font-bold text-lg rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-white/25 flex items-center gap-3"
                  >
                    <FaRocket className="text-xl animate-pulse" />
                    View Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Copyright & Policy */}
          <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="border-t border-white/20 pt-8">
              <div className="relative backdrop-blur-xl bg-white/10 p-6 rounded-2xl border border-white/30 shadow-lg">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 rounded-2xl blur opacity-50" />
                <div className="relative text-center">
                  <p className="text-lg mb-4 text-gray-200 flex items-center justify-center gap-2">
                    &copy; 2024 Made with <FaHeart className="text-red-500 animate-pulse" /> by{" "}
                    <strong className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient">
                      Shekh Faisal
                    </strong>
                  </p>
                  
                  <div className="flex justify-center gap-8 text-sm">
                    {[
                      { label: "Privacy Policy", href: "#" },
                      { label: "Terms of Use", href: "#" },
                    ].map((item, i) => (
                      <div key={i} className="group/policy relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-0 group-hover/policy:opacity-75 transition duration-300" />
                        <a
                          href={item.href}
                          className="relative px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:text-white transition-all duration-300 hover:scale-105 font-medium"
                        >
                          {item.label}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced bottom gradient bar */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-75 animate-pulse"></div>
        
        {/* Remove floating particles since 3D background provides better effects */}

        {/* Enhanced Animations matching Hero */}
        <style jsx>{`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          
          .animate-gradient {
            background-size: 400% 400%;
            animation: gradient 3s ease infinite;
          }
          
          .backdrop-blur-xl {
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
          }
          
          .backdrop-blur-lg {
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
          }
          
          .backdrop-blur-3xl {
            backdrop-filter: blur(64px);
            -webkit-backdrop-filter: blur(64px);
          }

          /* Professional Light Color Hover Effects Enhanced for 3D */
          .group:hover {
            filter: brightness(1.1);
            transform: translateZ(10px);
          }
          
          .group/nav:hover a,
          .group/social:hover a,
          .group/cta:hover a,
          .group/portfolio:hover a,
          .group/policy:hover a {
            background: rgba(255, 255, 255, 0.2);
            border-color: rgba(255, 255, 255, 0.5);
            box-shadow: 0 12px 30px rgba(34, 211, 238, 0.3);
          }

          /* Enhanced Icon Animations for 3D Environment */
          .group:hover .animate-pulse,
          .group:hover .animate-bounce {
            animation-duration: 0.5s;
            transform: scale(1.1);
          }

          /* 3D Background Canvas Styling for Footer */
          .footer-bg canvas {
            filter: blur(0.5px);
            opacity: 0.8;
          }
        `}</style>
      </footer>
    </>
  );
};

export default Footer;