import React, { useEffect, useState } from "react";
import {FaHome,FaRocket,FaExclamationTriangle,FaSearch,FaArrowLeft} from "react-icons/fa";
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
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownTimer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(countdownTimer);
  }, []);

  // Mouse tracking and particle creation
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const newParticle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        size: 6 + Math.random() * 6,
        color: ['cyan', 'purple', 'pink', 'blue'][Math.floor(Math.random() * 4)],
      };
      setParticles((prev) => [...prev.slice(-50), newParticle]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Particle animation cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            opacity: p.opacity - 0.03,
            y: p.y - 1.5,
            x: p.x + (Math.random() - 0.5) * 1.5,
          }))
          .filter((p) => p.opacity > 0)
      );
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const ParticleTrail = () => (
    <>
      <div
        className="fixed w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-screen transition-all duration-150 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          background: "linear-gradient(45deg, #F87171, #F43F5E)",
          boxShadow: "0 0 25px rgba(248, 113, 113, 0.8), 0 0 50px rgba(244, 63, 94, 0.5)",
          filter: "blur(1.5px)",
        }}
      />
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed rounded-full pointer-events-none z-40"
          style={{
            left: particle.x - particle.size / 2,
            top: particle.y - particle.size / 2,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            background: `radial-gradient(circle, ${
              particle.color === "cyan"
                ? "rgba(34, 211, 238, 0.85)"
                : particle.color === "purple"
                ? "rgba(147, 51, 234, 0.85)"
                : particle.color === "pink"
                ? "rgba(236, 72, 153, 0.85)"
                : "rgba(59, 130, 246, 0.85)"
            }, transparent)`,
            transform: `scale(${particle.opacity})`,
          }}
        />
      ))}
    </>
  );

  return (
    <>
      <ParticleTrail />
      <div className="mt-[5rem]  min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white flex flex-col items-center justify-center relative overflow-hidden px-6 sm:px-12 lg:px-24">
        {/* Background overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-pink-700 to-purple-900 opacity-10 -z-10" />
        <div className="absolute inset-0 opacity-30 -z-10">
          <div
            className="absolute inset-0 bg-gradient-to-r from-red-600 via-pink-700 to-purple-900 animate-pulse"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, rgba(248, 113, 113, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.15) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)",
              animation: "float 8s ease-in-out infinite",
            }}
          />
        </div>

        {/* Header Section */}
        <header
          className={`text-center mb-12 max-w-5xl w-full transition-all duration-[1500ms] ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-90"
          }`}
        >
          <div className="flex items-center justify-center gap-8 sm:gap-12 mb-5">
            <div className="relative group w-28 h-28 rounded-full bg-gradient-to-r from-red-500 to-pink-600 animate-bounce shadow-lg flex items-center justify-center">
              <span role="img" aria-label="Stop Icon" className="text-5xl select-none">
                🚫
              </span>
              <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-red-400 flex items-center justify-center select-none animate-spin">
                <FaExclamationTriangle className="text-white text-lg" />
              </div>
            </div>
            <h1 className="text-8xl sm:text-9xl font-extrabold bg-gradient-to-r from-red-500 via-pink-600 to-purple-700 bg-clip-text text-transparent drop-shadow-lg select-none">
              404
            </h1>
            <div className="relative group w-28 h-28 rounded-full bg-gradient-to-r from-purple-500 to-indigo-700 animate-bounce shadow-lg flex items-center justify-center">
              <FaSearch className="text-5xl text-white animate-pulse select-none" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-indigo-600 animate-ping" />
            </div>
          </div>
        </header>

        {/* Animated GIF Section */}
        <div
          className={`mb-12 max-w-lg w-full transition-all duration-[1500ms] delay-500 ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-90"
          }`}
        >
          <div className="relative group rounded-3xl bg-gradient-to-r from-red-600 via-pink-600 to-purple-700 p-1 shadow-lg overflow-hidden">
            <img
              src={errorGif}
              alt="404 - Page Not Found"
              className="w-full rounded-2xl object-contain shadow-2xl transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl pointer-events-none" />
          </div>
        </div>

        {/* Dynamic Messages */}
        <div
          className={`mb-12 max-w-4xl w-full transition-all duration-[1500ms] delay-700 ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-90"
          }`}
        >
          <TypeAnimation
            sequence={[
              "Maybe it's hiding behind a semicolon? 🤔",
              3000,
              "Don't worry, I'll help you find it! 🔍",
              3000,
              "404: Page not found, but adventure awaits! 🚀",
              3000,
              "Explore something new instead! ✨",
              3000,
              "Let's turn this error into an opportunity! 💡",
              3000,
            ]}
            wrapper="p"
            speed={60}
            repeat={Infinity}
            className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-red-500 via-pink-600 to-purple-700 bg-clip-text text-transparent text-center select-none"
          />
        </div>

        {/* Countdown Section */}
        <div
          className={`mb-12 max-w-xs w-full text-center text-lg font-mono transition-all duration-[1500ms] delay-900 ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-90"
          }`}
        >
          <div className="inline-flex items-center gap-3 justify-center bg-gradient-to-r from-green-400 to-emerald-600 rounded-lg px-6 py-4 shadow-lg relative">
            <div className="w-10 h-10 bg-green-500 rounded-full shadow-lg animate-pulse" />
            <span className="text-green-100">Redirecting in</span>
            <span className="text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent animate-bounce">{countdown}</span>
            <span className="text-green-100">seconds</span>
            <div className="w-10 h-10 bg-green-500 rounded-full shadow-lg animate-ping absolute -left-2 -right-2 top-0 bottom-0 m-auto z-[-1]" style={{ animationDelay: "500ms" }}/>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-3xl w-full mb-10 px-2 sm:px-0">
          <div className="flex-1">
            <Link
              to="/"
              className="relative block w-full bg-gradient-to-r from-red-600 via-pink-600 to-purple-700 text-white font-bold text-xl py-5 rounded-3xl shadow-lg transform transition hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-600 flex items-center justify-center gap-4"
              aria-label="Go to Home"
            >
              <FaArrowLeft className="text-2xl animate-bounce" />
              Go Home
            </Link>
          </div>
          <div className="flex-1">
            <button
              onClick={() => window.history.back()}
              className="relative block w-full bg-black bg-opacity-30 border border-white border-opacity-20 text-white font-bold text-xl py-5 rounded-3xl shadow-lg backdrop-blur-lg hover:border-white hover:bg-opacity-40 transform transition hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-600 flex items-center justify-center gap-4"
              aria-label="Go back"
            >
              <FaHome className="text-2xl animate-pulse" />
              Go Back
            </button>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold text-lg py-4 px-8 rounded-3xl shadow-lg transform transition hover:scale-110 focus:outline-none focus:ring-4 focus:ring-red-600"
            aria-label="Explore Portfolio"
          >
            <FaRocket />
            Explore Portfolio
          </Link>
        </div>

        {/* Footer Created By Section */}
        <div className="border-t border-white border-opacity-20 pt-6 text-center text-sm text-gray-400 select-none mb-6">
          © {new Date().getFullYear()} Created by <span className="font-semibold text-white">Sheikh Faisal</span>. All rights reserved.
        </div>

        {/* Bottom Gradient Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-pink-600 to-purple-700 opacity-70" />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-bounce {
          animation: bounce 1.5s infinite;
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default NotFound;
