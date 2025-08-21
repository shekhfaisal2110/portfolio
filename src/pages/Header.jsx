
import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {Home, User, Briefcase, Settings, Mail, Quote, FileText, Menu, X, ExternalLink,} from "lucide-react";
import logoImg from '../assets/logo/icon.jpg';
import ExpandedTabs from "../ui/ExpandedTabs"; 

// Utility function for class merging
const cn = (...classes) => classes.filter(Boolean).join(" ");

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const sidebarRef = useRef(null);
  const firstLinkRef = useRef(null);

  // Routing
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
    link.type === 'separator'
      ? { type: 'separator' }
      : {
        title: link.label,
        icon: link.icon,
        to: link.to,
        color: link.color,
      }
  );

  // Navigation handler for both desktop and sidebar
  const handleTabSelect = (to) => {
    if (location.pathname !== to) navigate(to);
    setSidebarOpen(false);
  };

  // Effects: Mouse, Sidebar, and Scroll
  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) setSidebarOpen(false);
    };
    const handleEsc = (e) => { if (e.key === 'Escape') setSidebarOpen(false); };

    if (sidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Particle Trail
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
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-all duration-300"
          style={{ backdropFilter: 'blur(4px)' }}
        />
      )}
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500",
          scrolled
            ? 'bg-gray-950/95 border-b border-white/20 shadow-2xl shadow-cyan-400/10'
            : 'bg-gray-950/80 border-b border-white/10'
        )}
        style={{ backdropFilter: scrolled ? 'blur(24px)' : 'blur(16px)' }}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20 relative">
          {/* LOGO */}
          <div className="flex items-center gap-4 group relative z-10 cursor-pointer"
            onClick={() => handleTabSelect('/')}>
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300 animate-pulse" />
              <div className="relative w-14 h-14 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <img
                  src={logoImg}
                  alt="Developer"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce opacity-80" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full animate-pulse opacity-80" />
            </div>
            <div className="relative">
              <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient group-hover:scale-105 transition-transform duration-300">
                Portfolio
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500" />
            </div>
          </div>
          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center">
            <ExpandedTabs
              tabs={tabsForExpandedTabs}
              selectedPath={location.pathname}
              onSelect={handleTabSelect}
              activeColor="text-cyan-400"
              className="border-white/20 bg-white/5 backdrop-blur-lg shadow-xl w-full"
            />
          </div>
          {/* MENU OPEN (mobile only) */}
          {!sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden relative group"
              aria-label="Toggle sidebar"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
              <div className="relative w-12 h-12 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center text-white text-xl transition-all duration-300 hover:scale-110 hover:bg-white/20"
                style={{ backdropFilter: 'blur(16px)' }}>
                <Menu className="animate-pulse" />
              </div>
            </button>
          )}
          {/* MENU CLOSE (shown only when sidebar open on mobile) */}
          {sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(false)}
              className="group relative"
              aria-label="Close sidebar"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-pink-500 rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-300" />
              <div className="relative w-10 h-10 bg-white/10 rounded-lg border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:bg-white/20"
                style={{ backdropFilter: 'blur(16px)' }}>
                <X className="text-lg" />
              </div>
            </button>
          )}
          {/* CTA (desktop only) */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
              <button
                onClick={() => handleTabSelect('/contact')}
                className="relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center gap-2"
              >
                <Mail className="text-sm animate-bounce" />
                Hire Me
              </button>
            </div>
          </div>
        </nav>
      </header>
      {/* SIDEBAR */}
      <div
        ref={sidebarRef}
        className={cn(
          "fixed left-0 top-0 h-full w-80 z-50 bg-gray-950/95 border-r border-white/20 transition-transform duration-300",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
        style={{ boxShadow: sidebarOpen ? "0 2px 32px rgba(34,211,238,0.14)" : "none" }}
        tabIndex={-1}
        aria-label="Sidebar navigation"
      >
        <div className="relative h-full flex flex-col">
          {/* SIDEBAR LINKS */}
          <div className="flex-1 px-6 py-8 overflow-y-auto" style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#06b6d4 rgba(255, 255, 255, 0.1)'
          }}>
            <nav className="space-y-2">
              {navLinks.map((link, idx) => {
                if (link.type === "separator") {
                  return (
                    <div key={`separator-${idx}`} className="flex justify-center py-2">
                      <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                    </div>
                  );
                }
                const Icon = link.icon;
                const isActive = location.pathname === link.to;
                return (
                  <div
                    key={idx}
                    className="group relative"
                  >
                    <div className={cn(
                      "absolute -inset-0.5 rounded-xl blur transition-all duration-500",
                      `bg-gradient-to-r ${link.color}`,
                      isActive ? "opacity-60" : "opacity-0 group-hover:opacity-60"
                    )} />
                    <button
                      ref={idx === 0 ? firstLinkRef : null}
                      onClick={() => handleTabSelect(link.to)}
                      className="relative flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 transform w-full text-left"
                    >
                      <div className={cn(
                        "absolute inset-0 rounded-xl border transition-all duration-300",
                        isActive
                          ? "bg-white/20 border-white/30"
                          : "bg-white/10 border-white/20 group-hover:border-white/30 group-hover:bg-white/15"
                      )} style={{ backdropFilter: 'blur(16px)' }} />
                      <div className="relative flex items-center gap-4 w-full">
                        <div className={cn(
                          "p-3 rounded-full shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6",
                          `bg-gradient-to-r ${link.color}`
                        )}>
                          <Icon className="text-white text-lg" />
                        </div>
                        <div className="flex-1">
                          <span className="text-white font-semibold text-lg group-hover:text-gray-100 transition-colors duration-300">
                            {link.label}
                          </span>
                          <div className={cn(
                            "h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 mt-1",
                            isActive ? "w-full" : "w-0 group-hover:w-full"
                          )} />
                        </div>
                        <ExternalLink className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
                      </div>
                      {isActive && (
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse" />
                      )}
                    </button>
                  </div>
                );
              })}
            </nav>
            {/* CTA SECTION */}
            <div className="mt-8 p-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur" />
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 text-center">
                <h3 className="text-white font-bold text-lg mb-2">Ready to work together?</h3>
                <p className="text-gray-300 text-sm mb-4">Let's create something amazing!</p>
                <button
                  onClick={() => handleTabSelect('/contact')}
                  className="w-full group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                  <div className="relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-lg transform transition-all duration-300 group-hover:scale-105 flex items-center justify-center gap-2">
                    <Mail className="text-sm" />
                    Get In Touch
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
