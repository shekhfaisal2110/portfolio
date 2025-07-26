// // // import React, { useState, useEffect, useRef } from 'react';
// // // import { Link, useLocation } from 'react-router-dom';
// // // import {
// // //   FaHome,
// // //   FaUser,
// // //   FaBriefcase,
// // //   FaCogs,
// // //   FaEnvelope,
// // //   FaQuoteRight,
// // //   FaFileAlt,
// // //   FaBars,
// // //   FaTimes,
// // // } from 'react-icons/fa';
// // // import logoImg from '../assets/logo/icon.jpg';

// // // const Header = () => {
// // //   const [menuOpen, setMenuOpen] = useState(false);
// // //   const location = useLocation();
// // //   const menuRef = useRef(null);

// // //   const navLinks = [
// // //     { to: '/', icon: <FaHome />, label: 'Home' },
// // //     { to: '/about', icon: <FaUser />, label: 'About' },
// // //     { to: '/portfolio', icon: <FaBriefcase />, label: 'Portfolio' },
// // //     { to: '/services', icon: <FaCogs />, label: 'Services' },
// // //     { to: '/testimonials', icon: <FaQuoteRight />, label: 'Testimonials' },
// // //     { to: '/resume', icon: <FaFileAlt />, label: 'Resume' },
// // //     { to: '/contact', icon: <FaEnvelope />, label: 'Contact' },
// // //   ];

// // //   // ✅ Close menu when clicked outside
// // //   useEffect(() => {
// // //     const handleClickOutside = (event) => {
// // //       if (menuRef.current && !menuRef.current.contains(event.target)) {
// // //         setMenuOpen(false);
// // //       }
// // //     };

// // //     if (menuOpen) {
// // //       document.addEventListener('mousedown', handleClickOutside);
// // //     } else {
// // //       document.removeEventListener('mousedown', handleClickOutside);
// // //     }

// // //     return () => {
// // //       document.removeEventListener('mousedown', handleClickOutside);
// // //     };
// // //   }, [menuOpen]);

// // //   return (
// // //     <header className="sticky top-0 z-50 bg-[#0f172a] shadow-md backdrop-blur-sm transition duration-300">
// // //       <nav
// // //         ref={menuRef}
// // //         className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 relative"
// // //       >
// // //         {/* Logo */}
// // //         <Link
// // //           to="/Admin"
// // //           className="flex items-center gap-2 group relative"
// // //           aria-label="Go to homepage"
// // //         >
// // //           <img
// // //             src={logoImg}
// // //             alt="Developer"
// // //             className="w-10 h-10 rounded-full border-2 border-cyan-400 shadow-md transition-transform duration-300 group-hover:scale-105"
// // //           />
// // //           <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent group-hover:from-green-400 group-hover:to-cyan-400 transition-all duration-300">
// // //             MyPortfolio
// // //           </span>
// // //         </Link>

// // //         {/* Hamburger */}
// // // <button
// // //   onClick={() => setMenuOpen(!menuOpen)}
// // //   className="lg:hidden text-white text-2xl z-50"
// // //   aria-label="Toggle menu"
// // // >
// // //   {menuOpen ? <FaTimes /> : <FaBars />}
// // // </button>

// // // {/* Nav Links */}
// // // <ul
// // //   className={`flex flex-col lg:flex-row items-center lg:static absolute top-16 left-0 w-full lg:w-auto bg-[#0f172a] lg:bg-transparent transition-all duration-500 ease-in-out lg:translate-y-0 ${
// // //     menuOpen ? 'translate-y-0' : '-translate-y-[150%]'
// // //   } lg:space-x-6 text-white py-6 lg:py-0`}
// // // >
// // //   {navLinks.map((link, idx) => (
// // //     <li key={idx} className="my-2 lg:my-0 w-full lg:w-auto text-center">
// // //       <Link
// // //         to={link.to}
// // //         onClick={() => setMenuOpen(false)}
// // //         className={`flex items-center justify-center lg:justify-start gap-2 px-4 py-2 transition-all duration-300 hover:text-cyan-400 ${
// // //           location.pathname.toLowerCase() === link.to.toLowerCase()
// // //             ? 'text-cyan-400 font-semibold'
// // //             : 'text-white'
// // //         }`}
// // //       >
// // //         <span className="text-lg">{link.icon}</span>
// // //         <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-all duration-300">
// // //           {link.label}
// // //         </span>
// // //       </Link>
// // //     </li>
// // //   ))}
// // // </ul>

// // //       </nav>
// // //     </header>
// // //   );
// // // };

// // // export default Header;

import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaCogs,
  FaEnvelope,
  FaQuoteRight,
  FaFileAlt,
  FaBars,
  FaTimes,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import logoImg from '../assets/logo/icon.jpg';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const location = useLocation();
  const sidebarRef = useRef(null);
  const firstLinkRef = useRef(null);

  const navLinks = [
    { to: '/', icon: <FaHome />, label: 'Home', color: 'from-cyan-500 to-blue-600' },
    { to: 'about', icon: <FaUser />, label: 'About', color: 'from-purple-500 to-pink-600' },
    { to: 'portfolio', icon: <FaBriefcase />, label: 'Portfolio', color: 'from-green-500 to-cyan-600' },
    { to: 'services', icon: <FaCogs />, label: 'Services', color: 'from-orange-500 to-red-600' },
    { to: 'testimonials', icon: <FaQuoteRight />, label: 'Testimonials', color: 'from-indigo-500 to-purple-600' },
    { to: 'resume', icon: <FaFileAlt />, label: 'Resume', color: 'from-yellow-500 to-orange-600' },
    { to: 'contact', icon: <FaEnvelope />, label: 'Contact', color: 'from-blue-500 to-indigo-600' },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setSidebarOpen(false);
      }
    };
    
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSidebarOpen(false);
    };

    if (sidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
      setTimeout(() => firstLinkRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = 'unset';
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.style.overflow = 'unset';
    };
  }, [sidebarOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced ParticleTrail component matching Hero style
  const ParticleTrail = () => (
    <div
      className="fixed w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full pointer-events-none z-40 mix-blend-screen transition-all duration-150 ease-out"
      style={{
        left: mousePosition.x - 6,
        top: mousePosition.y - 6,
        boxShadow: '0 0 15px rgba(34, 211, 238, 0.6), 0 0 30px rgba(34, 211, 238, 0.3)',
        filter: 'blur(0.5px)',
      }}
    />
  );

  return (
    <>
      <ParticleTrail />
      
      {/* Enhanced Animated Background matching Hero */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 backdrop-blur-3xl" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-pulse" 
               style={{
                 backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(34, 211, 238, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(156, 39, 176, 0.05) 0%, transparent 50%)',
                 animation: 'float 6s ease-in-out infinite'
               }} />
        </div>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300" />
      )}

      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gray-950/95 backdrop-blur-xl border-b border-white/20 shadow-2xl shadow-cyan-400/10' 
          : 'bg-gray-950/80 backdrop-blur-lg border-b border-white/10'
      }`}>
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20 relative">

          {/* Enhanced Logo matching Hero style */}
          <Link to="/Admin" className="flex items-center gap-4 group relative z-10" aria-label="Go to homepage">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300 animate-pulse" />
              <div className="relative w-14 h-14 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <img
                  src={logoImg}
                  alt="Developer"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              {/* Floating decorative elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce opacity-80" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full animate-pulse opacity-80" />
            </div>
            
            <div className="relative">
              <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient group-hover:scale-105 transition-transform duration-300">
                Portfolio
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500" />
            </div>
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <ul className="hidden lg:flex items-center space-x-2 text-white">
            {navLinks.map((link, idx) => (
              <li key={idx} className="relative">
                <a
                  href={link.to}
                  className="group relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 transform"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Hover background effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-300" />
                  
                  {/* Card background */}
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 group-hover:border-white/30 transition-all duration-300 group-hover:bg-white/20" />
                  
                  {/* Content */}
                  <div className="relative flex items-center gap-2">
                    <div className={`p-1.5 rounded-full bg-gradient-to-r ${link.color} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white text-xs">{link.icon}</span>
                    </div>
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:text-white transition-all duration-300 font-semibold text-sm">
                      {link.label}
                    </span>
                  </div>
                  
                  {/* Active indicator */}
                  {location.hash === link.to && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse" />
                  )}
                </a>
              </li>
            ))}
          </ul>

           {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden relative group"
          aria-label="Toggle sidebar"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
          <div className="relative w-12 h-12 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 flex items-center justify-center text-white text-xl transition-all duration-300 hover:scale-110 hover:bg-white/20">
            <FaBars className="animate-pulse" />
          </div>
        </button>
      )}

      {/* Close Sidebar Button (Visible only when sidebar is open) */}
      {sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(false)}
          className="group relative"
          aria-label="Close sidebar"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-pink-500 rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-300" />
          <div className="relative w-10 h-10 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:bg-white/20">
            <FaTimes className="text-lg" />
          </div>
        </button>
      )}

          {/* Enhanced CTA Button for desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
              <a
                href="contact"
                className="relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center gap-2"
              >
                <FaEnvelope className="text-sm animate-bounce" />
                Hire Me
              </a>
            </div>
          </div>

          {/* Enhanced Floating Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-2 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '0s' }} />
            <div className="absolute top-4 right-1/3 w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping opacity-60" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-2 left-1/2 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-4 left-1/3 w-1 h-1 bg-green-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1.5s' }} />
          </div>
        </nav>

        {/* Enhanced bottom gradient line */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-50" />
      </header>

      {/* Enhanced Professional Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed left-0 top-0 h-full w-80 z-50 transform transition-all duration-500 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Background with Glass Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/95 via-indigo-950/95 to-purple-950/95 backdrop-blur-xl border-r border-white/20 shadow-2xl">
          {/* Enhanced background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-pulse" 
                 style={{
                   backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(34, 211, 238, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(156, 39, 176, 0.1) 0%, transparent 50%)',
                   animation: 'float 6s ease-in-out infinite'
                 }} />
          </div>
        </div>

        <div className="relative h-full flex flex-col">
          {/* Enhanced Sidebar Header */}
          <div className="relative p-8 border-b border-white/20">
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce shadow-lg opacity-80" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse shadow-lg opacity-80" />
            
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-50 animate-pulse" />
                  <div className="relative w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <img
                      src={logoImg}
                      alt="Portfolio"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                    Portfolio
                  </h2>
                  <p className="text-gray-300 text-sm">Shekh Faisal</p>
                </div>
              </div>
              
              
            </div>
          </div>

          {/* Enhanced Navigation Links */}
          <div className="flex-1 px-6 py-8 overflow-y-auto">
            <nav className="space-y-2">
              {navLinks.map((link, idx) => (
                <div key={idx} className="group relative">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${link.color} rounded-xl blur opacity-0 group-hover:opacity-60 transition-all duration-500`} />
                  <a
                    ref={idx === 0 ? firstLinkRef : null}
                    href={link.to}
                    onClick={() => setSidebarOpen(false)}
                    className="relative flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 transform"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    {/* Card background */}
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 group-hover:border-white/30 transition-all duration-300 group-hover:bg-white/15" />
                    
                    {/* Content */}
                    <div className="relative flex items-center gap-4 w-full">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${link.color} shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <span className="text-white text-lg">{link.icon}</span>
                      </div>
                      <div className="flex-1">
                        <span className="text-white font-semibold text-lg group-hover:text-gray-100 transition-colors duration-300">
                          {link.label}
                        </span>
                        <div className="w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500 mt-1" />
                      </div>
                      <FaExternalLinkAlt className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
                    </div>
                    
                    {/* Active indicator */}
                    {location.hash === link.to && (
                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse" />
                    )}
                  </a>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </aside>

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
            transform: translateY(-10px);
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

        /* Custom scrollbar for sidebar */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #3b82f6);
          border-radius: 3px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #2563eb);
        }
      `}</style>
    </>
  );
};

export default Header;