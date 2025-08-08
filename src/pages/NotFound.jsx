import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaHome, FaExclamationTriangle, FaCode, FaRocket, FaSearch, FaMagic, FaStar, FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import errorGif from "../../src/assets/error/error.gif"; 
import { TypeAnimation } from "react-type-animation";

const NotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(15);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 15000);
    setIsVisible(true);
    return () => clearTimeout(timer);
  }, [navigate]);

  // Countdown timer
  useEffect(() => {
    const countdownTimer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countdownTimer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdownTimer);
  }, []);

  // Enhanced mouse tracking for particle effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create trailing particles
      const newParticle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        size: Math.random() * 4 + 2,
        color: ['cyan', 'purple', 'pink', 'blue'][Math.floor(Math.random() * 4)]
      };
      
      setParticles(prev => [...prev.slice(-20), newParticle]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          opacity: particle.opacity - 0.05,
          y: particle.y - 2,
          x: particle.x + (Math.random() - 0.5) * 2
        })).filter(particle => particle.opacity > 0)
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Enhanced ParticleTrail component
  const ParticleTrail = () => (
    <>
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-red-400 to-pink-500 rounded-full pointer-events-none z-50 mix-blend-screen transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          boxShadow: '0 0 25px rgba(239, 68, 68, 0.8), 0 0 50px rgba(239, 68, 68, 0.4)',
          filter: 'blur(1px)',
        }}
      />
      {particles.map(particle => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-40"
          style={{
            left: particle.x - particle.size/2,
            top: particle.y - particle.size/2,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            background: `radial-gradient(circle, ${
              particle.color === 'cyan' ? 'rgba(34, 211, 238, 0.8)' :
              particle.color === 'purple' ? 'rgba(147, 51, 234, 0.8)' :
              particle.color === 'pink' ? 'rgba(236, 72, 153, 0.8)' :
              'rgba(59, 130, 246, 0.8)'
            }, transparent)`,
            borderRadius: '50%',
            transform: `scale(${particle.opacity})`,
          }}
        />
      ))}
    </>
  );

  return (
    <>
      <ParticleTrail />
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950 text-white flex flex-col items-center justify-center relative overflow-hidden">
        
        {/* Enhanced background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-purple-500/10 backdrop-blur-3xl" />
        
        {/* Dynamic animated background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent animate-pulse" 
               style={{
                 backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(239, 68, 68, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.15) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
                 animation: 'float 8s ease-in-out infinite'
               }} />
        </div>

        {/* Floating background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({length: 15}).map((_, i) => (
            <div
              key={i}
              className="absolute animate-float-slow opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 6}s`
              }}
            >
              <div className={`w-${Math.floor(Math.random() * 4) + 2} h-${Math.floor(Math.random() * 4) + 2} bg-gradient-to-r ${
                i % 4 === 0 ? 'from-red-400 to-pink-500' :
                i % 4 === 1 ? 'from-purple-400 to-indigo-500' :
                i % 4 === 2 ? 'from-cyan-400 to-blue-500' :
                'from-pink-400 to-rose-500'
              } rounded-full blur-sm`} />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-30 max-w-6xl w-full px-6 flex flex-col items-center">
          
          {/* Enhanced Header with perfect styling */}
          <div className={`text-center mb-16 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
            <div className="flex items-center justify-center gap-6 mb-10">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full blur-lg opacity-60 group-hover:opacity-80 animate-pulse" />
                <div className="relative w-24 h-24 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                  <span className="text-5xl animate-spin-slow">🚫</span>
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce flex items-center justify-center">
                  <span className="text-sm">⚠️</span>
                </div>
              </div>
              
              <h1 className="text-8xl lg:text-9xl font-black bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradient drop-shadow-2xl">
                404
              </h1>
              
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full blur-lg opacity-60 group-hover:opacity-80 animate-pulse" />
                <div className="relative w-24 h-24 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                  <FaSearch className="text-4xl text-white animate-pulse" />
                </div>
                <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping flex items-center justify-center">
                  <span className="text-sm">🔍</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Error GIF Section with perfect animations */}
          <div className={`relative mb-16 transition-all duration-1500 delay-500 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition duration-1000 animate-pulse" />
              <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl p-10 border border-white/30 shadow-2xl">
                
                {/* Enhanced floating decorative elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-full animate-bounce shadow-2xl flex items-center justify-center">
                  <span className="text-white text-2xl animate-spin-slow">❌</span>
                </div>
                <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full animate-float shadow-2xl flex items-center justify-center">
                  <FaCode className="text-white text-2xl animate-pulse" />
                </div>
                <div className="absolute top-1/2 -right-12 w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-ping shadow-xl flex items-center justify-center">
                  <FaRocket className="text-white text-lg" />
                </div>
                <div className="absolute bottom-1/4 -left-12 w-14 h-14 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce shadow-xl flex items-center justify-center">
                  <span className="text-white text-xl animate-spin-slow">⚠️</span>
                </div>
                <div className="absolute top-1/4 -left-10 w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse shadow-lg flex items-center justify-center">
                  <FaSearch className="text-white text-sm" />
                </div>
                <div className="absolute top-3/4 -right-10 w-10 h-10 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full animate-bounce shadow-lg flex items-center justify-center">
                  <FaExclamationTriangle className="text-white text-sm" />
                </div>
                
                <div className="relative">
                  <img
                    src={errorGif}
                    alt="404 Error"
                    className="w-full max-w-lg h-auto object-contain rounded-2xl transition-all duration-700 group-hover:scale-110 shadow-2xl border border-white/20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced TypeAnimation with perfect styling */}
          <div className={`mb-16 transition-all duration-1500 delay-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
            <div className="relative group max-w-3xl mx-auto">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition duration-500 animate-pulse" />
              <div className="relative backdrop-blur-2xl bg-white/10 p-8 rounded-2xl border border-white/30 shadow-xl">
                <TypeAnimation
                  sequence={[
                    "Maybe it's hiding behind a semicolon? 🤔",
                    2500,
                    "Don't worry, I'll help you find your way! 🗺️",
                    2500,
                    "404: Page not found, but adventure awaits! 🚀",
                    2500,
                    "Time to explore something amazing instead! ✨",
                    2500,
                    "Let's turn this error into an opportunity! 💡",
                    2500,
                  ]}
                  wrapper="p"
                  speed={60}
                  repeat={Infinity}
                  className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient text-center"
                />
              </div>
            </div>
          </div>

          {/* Enhanced Countdown with perfect animations */}
          <div className={`mb-16 transition-all duration-1500 delay-900 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur-lg opacity-70 group-hover:opacity-90 transition duration-500 animate-pulse" />
              <div className="relative bg-white/10 backdrop-blur-2xl rounded-2xl px-10 py-8 border border-white/30 hover:border-white/50 transition-all duration-500 hover:bg-white/20 shadow-xl">
                <div className="flex items-center justify-center gap-6 text-2xl">
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-lg"></div>
                    <div className="absolute inset-0 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-ping opacity-75"></div>
                    <div className="absolute -inset-2 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-ping opacity-30"></div>
                  </div>
                  <span className="text-gray-200 font-semibold">
                    Auto-redirect in{" "}
                    <span className="relative inline-block">
                      <span className="font-black text-transparent bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-4xl animate-bounce">
                        {countdown}
                      </span>
                      <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg blur opacity-30 animate-pulse" />
                    </span>
                    {" "}seconds
                  </span>
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-lg"></div>
                    <div className="absolute inset-0 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-ping opacity-75 animation-delay-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Navigation Buttons with perfect styling */}
          <div className={`flex flex-col sm:flex-row gap-8 w-full max-w-2xl mb-12 transition-all duration-1500 delay-1100 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
            <div className="group relative flex-1">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl blur-lg opacity-100 group-hover:opacity-100 transition duration-500 animate-pulse" />
              <Link
                to="/"
                className="relative w-full px-10 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xl rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-110 hover:-translate-y-2 flex items-center justify-center gap-4 hover:shadow-cyan-400/50"
              >
                <FaArrowLeft className="text-2xl animate-bounce group-hover:animate-pulse" />
                Go Home
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>

            <div className="group relative flex-1">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />
              <button
                onClick={() => window.history.back()}
                className="relative w-full px-10 py-6 bg-white/10 backdrop-blur-2xl border-2 border-white/30 hover:border-white/50 text-white font-bold text-xl rounded-xl shadow-xl transform transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:bg-white/20 flex items-center justify-center gap-4 hover:shadow-purple-400/50"
              >
                <FaHome className="text-2xl animate-pulse group-hover:animate-bounce" />
                Go Back
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>

          {/* Enhanced Additional CTA with perfect animations */}
          <div className={`mb-12 transition-all duration-1500 delay-1300 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />
              <Link
                to="portfolio"
                className="relative px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-bold text-lg rounded-xl shadow-lg transform transition-all duration-500 hover:scale-110 hover:-translate-y-2 flex items-center gap-3 hover:shadow-orange-400/50"
              >
                <FaRocket className="text-lg animate-bounce group-hover:animate-spin" />
                Explore My Work Instead
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>
          </div>

          {/* Enhanced Error Details with perfect styling */}
          <div className={`text-center transition-all duration-1500 delay-1500 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-lg text-gray-300 mb-4 flex items-center justify-center gap-3">
                  <span className="text-2xl animate-bounce">🏖️</span>
                  "The page you're looking for has gone on vacation"
                  <span className="text-2xl animate-bounce animation-delay-500">🌴</span>
                </p>
                <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
                  Error Code: 
                  <span className="font-mono text-red-400 bg-red-400/20 px-3 py-1 rounded-lg border border-red-400/30 animate-pulse">
                    PAGE_NOT_FOUND
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Perfect Enhanced Animations */}
        <style jsx>{`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-20px) rotate(90deg); }
            50% { transform: translateY(-10px) rotate(180deg); }
            75% { transform: translateY(-15px) rotate(270deg); }
          }
          
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
            25% { transform: translateY(-30px) rotate(60deg) scale(1.1); }
            50% { transform: translateY(-20px) rotate(120deg) scale(0.9); }
            75% { transform: translateY(-25px) rotate(180deg) scale(1.05); }
          }
          
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          .animate-gradient {
            background-size: 400% 400%;
            animation: gradient 4s ease infinite;
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-float-slow {
            animation: float-slow 12s ease-in-out infinite;
          }
          
          .animate-spin-slow {
            animation: spin-slow 4s linear infinite;
          }
          
          .animation-delay-500 {
            animation-delay: 0.5s;
          }
          
          .backdrop-blur-2xl {
            backdrop-filter: blur(40px);
            -webkit-backdrop-filter: blur(40px);
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
        `}</style>
      </div>
    </>
  );
};

export default NotFound;