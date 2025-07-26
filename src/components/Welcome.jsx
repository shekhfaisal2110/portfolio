import React, { useState, useEffect } from 'react';
import {
  FaRocket, FaCode, FaHeart, FaPalette, FaMobileAlt, FaLightbulb, FaArrowRight,
  FaStar, FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt,
  FaGithub, FaBootstrap, FaCheckCircle, FaAward, FaUsers, FaClock, FaChartLine
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import Animated3DBackground from './Animated3DBackground';
import logoImg from '../assets/logo/logo.png';

// Helper: Generate a unique ID
function generateUID() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11)
    .replace(/[018]/g, c=>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

const Welcome = ({ onComplete, whatsNew = '' }) => {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(0);
  const [particles, setParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [user, setUser] = useState(null);
  const [usernameInput, setUsernameInput] = useState('');
  const [formError, setFormError] = useState('');
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Show the welcome only if not visited before
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    if (!hasVisited) {
      setShow(true);
    } else {
      setShow(false);
      onComplete && onComplete();
    }
    let saved = null;
    try { saved = JSON.parse(localStorage.getItem('siteUser') || 'null'); } catch {}
    setUser(saved);
    const count = isMobile ? 20 : 50;
    setParticles(Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * (isMobile ? 3 : 4) + 1,
      speedX: (Math.random() - 0.5) * (isMobile ? 1 : 2),
      speedY: (Math.random() - 0.5) * (isMobile ? 1 : 2),
      opacity: Math.random() * 0.5 + 0.5,
    })));
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handle = e => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, [isMobile]);

  useEffect(() => {
    if (!show) return;
    const interval = setInterval(() => {
      setParticles(prev =>
        prev.map(p => ({
          ...p,
          x: p.x + p.speedX,
          y: p.y + p.speedY,
          x: p.x > window.innerWidth ? 0 : p.x < 0 ? window.innerWidth : p.x,
          y: p.y > window.innerHeight ? 0 : p.y < 0 ? window.innerHeight : p.y,
        }))
      );
    }, 45);
    return () => clearInterval(interval);
  }, [show]);

  useEffect(() => {
    if (!show || (user ? step >= 5 : step >= 1)) return;
    const timer = setTimeout(() => setStep(prev => prev + 1), isMobile ? 1000 : 700);
    return () => clearTimeout(timer);
  }, [step, show, isMobile, user]);

  function handleNameChange(e) {
    setUsernameInput(e.target.value.replace(/[^a-zA-Z0-9\-_. ]/g, '').slice(0, 24));
    setFormError('');
  }
  function handleNameSubmit(e) {
    e.preventDefault();
    const name = usernameInput.trim();
    if (name.length < 2) {
      setFormError("Name must be at least 2 characters.");
      return;
    }
    const obj = { id: generateUID(), name };
    setUser(obj);
    localStorage.setItem('siteUser', JSON.stringify(obj));
    // Set visited flag to not show welcome again
    localStorage.setItem('hasVisitedBefore', 'true');
    setStep(3);
    setTimeout(() => setStep(4), 600);
    setTimeout(() => setStep(5), 1200);
  }
  function handleGetStarted() {
    setShow(false);
    localStorage.setItem('hasVisitedBefore', 'true');
    onComplete && onComplete();
  }
  function handleSkip() {
    setShow(false);
    localStorage.setItem('hasVisitedBefore', 'true');
    onComplete && onComplete();
  }

  if (!show) return null;

  // Logo component using a high-quality image with a background glow
  const FLogo = () => (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative">
        <img
          src={logoImg}
          alt="F Logo"
          width={110}
          height={110}
          style={{
            display: 'block',
            margin: 'auto',
            borderRadius: '50%',
            boxShadow: '0 0 32px 6px rgba(59,130,246,0.18), 0 2px 16px 1px rgba(139,92,246,0.11)'
          }}
        />
        <div className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 60% 22%, rgba(34,211,238,0.13) 0%, rgba(91,33,182,0.12) 80%, transparent 100%)',
            filter: 'blur(8px)',
            zIndex: 2
          }} />
      </div>
    </div>
  );

  const welcomeFeatures = [
    { icon: <FaCode />, title: "Clean Code", description: "Writing maintainable, scalable, and efficient code", color: "from-cyan-400 to-blue-500" },
    { icon: <FaPalette />, title: "Creative Design", description: "Crafting beautiful and intuitive interfaces", color: "from-purple-400 to-pink-500" },
    { icon: <FaRocket />, title: "Performance", description: "Building lightning-fast web applications", color: "from-green-400 to-emerald-500" },
    { icon: <FaMobileAlt />, title: "Responsive", description: "Perfect on all devices", color: "from-orange-400 to-red-500" },
  ];

  const techStack = [
    { name: 'HTML5', icon: <FaHtml5 />, color: '#f97316', shadow: '0 4px 16px #f9731655' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#3b82f6', shadow: '0 4px 16px #3b82f655' },
    { name: 'JavaScript', icon: <FaJs />, color: '#eab308', shadow: '0 4px 16px #eab30855' },
    { name: 'React.js', icon: <FaReact />, color: '#06b6d4', shadow: '0 4px 16px #06b6d455' },
    { name: 'Git', icon: <FaGitAlt />, color: '#ef4444', shadow: '0 4px 16px #ef444455' },
    { name: 'GitHub', icon: <FaGithub />, color: '#6b7280', shadow: '0 4px 16px #6b728055' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06b6d4', shadow: '0 4px 16px #06b6d455' },
    { name: 'Bootstrap', icon: <FaBootstrap />, color: '#8b5cf6', shadow: '0 4px 16px #8b5cf655' },
  ];

  const achievements = [
    { icon: <FaAward />, value: "50+", label: "Projects Completed" },
    { icon: <FaUsers />, value: "30+", label: "Happy Clients" },
    { icon: <FaClock />, value: "2+", label: "Years Experience" },
    { icon: <FaChartLine />, value: "95%", label: "Success Rate" },
  ];

  const services = [
    "Web Development", "UI/UX Design", "Mobile Apps", "E-commerce Solutions",
    "API Development", "Database Design", "Performance Optimization", "Consulting"
  ];

  return (
    <>
      {/* 3D Animated Background */}
      <Animated3DBackground
        opacity={0.9}
        particleCount={60}
        lineCount={120}
        animationSpeed={1.1}
        colors={{
          primary: 0x22d3ee,
          secondary: 0x3b82f6,
          accent: 0x8b5cf6,
          tertiary: 0x06b6d4,
          quaternary: 0x10b981,
          quinary: 0xf59e0b
        }}
        mouseInteraction={true}
        className="z-0"
      />

      {/* Overlay Welcome Content */}
      {/* Main Overlay Welcome Content */}
      <div className={`fixed inset-0 z-[100] transition-opacity duration-500 bg-black/95`}>
        {/* Additional animated overlays and floating particles */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950">
          <div className="absolute inset-0 opacity-35">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-slide" />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-500/20 to-transparent animate-slide-vertical" />
          </div>
          {particles.map((p) => (
            <div key={p.id}
              className="absolute rounded-full bg-white animate-pulse"
              style={{
                left: `${p.x}px`, top: `${p.y}px`,
                width: `${p.size}px`, height: `${p.size}px`, opacity: p.opacity,
              }}
            />
          ))}
          {!isMobile && (
            <div
              className="absolute w-32 h-32 rounded-full pointer-events-none transition-all duration-300"
              style={{
                left: mousePosition.x - 64,
                top: mousePosition.y - 64,
                background: `radial-gradient(circle, rgba(34, 211, 238, 0.25) 0%, transparent 60%)`,
                filter: 'blur(40px)',
              }}/>
          )}
        </div>
        
        <div className="relative h-full overflow-y-auto overflow-x-hidden">
          <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
            {!!whatsNew && (
              <div className="bg-gradient-to-r from-emerald-400 to-blue-500 text-white text-center py-2 px-4 mb-6 sm:mb-8 rounded-lg shadow-lg text-base sm:text-lg font-bold animate-bounce-slow">
                🚀 What's New: {whatsNew}
              </div>
            )}
            {/* Logo Animated */}
           <div className={`text-center mb-7 transition-all duration-700 ${step > 0 ? 'opacity-100' : 'opacity-40'}`}>
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-2xl opacity-50  pointer-events-none" />
              <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-full flex items-center justify-center shadow-2xl border-2 border-white/10">
                <FLogo />
              </div>
            </div>
          </div>
                    

            {!user && (
              <form onSubmit={handleNameSubmit}
                className={`max-w-md mx-auto bg-white/10 backdrop-blur-lg p-7 rounded-2xl border border-white/20 shadow-lg mt-12 text-center transition-all duration-700 ${step >= 1 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-12'}`}>
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">👋 Welcome!</h1>
                <p className="mb-5 text-gray-300">Please enter your <span className="text-cyan-400">name</span> to personalize your experience:</p>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/20 text-lg focus:outline-none focus:border-cyan-400 transition mb-3 text-gray-900 placeholder-gray-500"
                  placeholder="Your name"
                  value={usernameInput}
                  minLength={2}
                  autoFocus
                  onChange={handleNameChange}
                  style={{boxShadow: '0 2px 20px 0 rgba(0,255,255,0.07)'}}
                />
                {formError && <div className="text-red-400 mb-2">{formError}</div>}
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white hover:scale-105 transition-all duration-300 mt-2"
                >
                  Start Exploring <FaArrowRight className="translate-x-0 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </form>
            )}

            {user && (
              <>
                <div className={`text-center mb-8 sm:mb-10 lg:mb-16 transition-all duration-1000 delay-200 ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8">
                    <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                      Welcome, <span className="font-extrabold">{user.name || "Developer"}</span>
                    </span>
                  </h1>
                  <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4 sm:mb-6">
                    to my creative universe
                  </p>
                  <div className="flex justify-center gap-1 sm:gap-2 mb-6 sm:mb-8">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i}
                        className={`text-yellow-400 text-xl sm:text-2xl lg:text-3xl transition-all duration-500 ${step >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                        style={{ transitionDelay: `${i * 100}ms` }}/>
                    ))}
                  </div>
                </div>

                <div className={`mb-8 sm:mb-10 lg:mb-16 transition-all duration-1000 delay-400 ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-6 sm:mb-8 lg:mb-10">
                    What I Bring to the Table
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {welcomeFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className={`group relative transition-all duration-700 ${
                          step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                        style={{ transitionDelay: `${index * 120}ms` }}
                      >
                        <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500" />
                        <div className="relative bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-2 h-full">
                          <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 mx-auto`}>
                            <span className="text-white text-2xl sm:text-3xl">{feature.icon}</span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 text-center">{feature.title}</h3>
                          <p className="text-gray-300 text-sm sm:text-base mb-2 text-center">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`mb-8 sm:mb-10 lg:mb-16 transition-all duration-1000 delay-500 ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-6 sm:mb-8">
                    Technologies I Work With
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6">
                     {techStack.map(({ name, icon, color, shadow }) => (
        <div
          key={name}
          className="flex flex-col items-center group px-3 py-7 bg-gradient-to-b from-white/10 via-white/20 to-white/5 dark:from-black/10 dark:via-black/20 dark:to-black/5 rounded-2xl shadow-lg transition-all duration-300 border border-white/10 dark:border-black/40 hover:scale-110 hover:border-cyan-400/40 cursor-pointer"
          title={name}
          style={{
            minHeight: 150,
            boxShadow: '0 1.5px 10px #0001',
            backdropFilter: 'blur(7px)',
            WebkitBackdropFilter: 'blur(7px)'
          }}
        >
          <span
            className="text-5xl md:text-6xl mb-3 transition-all duration-200"
            style={{
              color,
              textShadow: shadow,
              filter: 'drop-shadow(0 2px 16px currentColor)'
            }}
            aria-label={name}
          >
            {icon}
          </span>
          <span className="text-sm sm:text-base font-medium text-gray-100 drop-shadow-lg tracking-wide text-center">
            {name}
          </span>
        </div>
      ))}
                  </div>
                </div>

                <div className={`mb-8 sm:mb-10 lg:mb-16 transition-all duration-1000 delay-600 ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-6 sm:mb-8">My Achievements</h3>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {achievements.map((a, i) => (
                      <div key={i}
                        className="text-center group bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
                        style={{ animationDelay: `${i * 120}ms` }}>
                        <div className="relative inline-block mb-4">
                          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-50 transition" />
                          <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-2xl sm:text-3xl">{a.icon}</span>
                          </div>
                        </div>
                        <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{a.value}</div>
                        <div className="text-sm sm:text-base text-gray-400">{a.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`mb-8 sm:mb-10 lg:mb-16 transition-all duration-1000 delay-650 ${step >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-6 sm:mb-8">
                    What I can do for you
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="px-6 py-4 bg-white/10 backdrop-blur-lg rounded-xl text-base sm:text-lg text-white border border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300 text-center"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <FaCheckCircle className="inline mr-2 text-green-400 text-lg sm:text-xl" />
                        {service}
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`text-center pb-20 transition-all duration-1000 delay-800 ${step >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 px-4">
                    I'm <span className="font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Shekh Faisal</span>,
                    a passionate web developer ready to bring your ideas to life
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={handleGetStarted}
                      className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 overflow-hidden rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transition-all duration-300 group-hover:scale-110" />
                      <span className="relative text-white flex items-center gap-3 z-10">
                        Let's Explore
                        <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                      </span>
                    </button>
                    <button onClick={handleSkip}
                      className="px-8 py-4 rounded-xl font-medium text-gray-400 hover:text-white border border-gray-600 hover:border-white/40 transition-all duration-300">
                      Skip Intro
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        {user && (
          <div className="fixed bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 bg-gray-900/70 backdrop-blur-lg px-4 py-2 rounded-full">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={`h-2 rounded-full transition-all duration-500 ${
                step >= i ? 'w-8 bg-gradient-to-r from-cyan-400 to-blue-500' : 'w-2 bg-gray-600'
              }`} />
            ))}
          </div>
        )}

        {/* Floating decoration elements */}
        <div className="fixed top-10 left-10 animate-float pointer-events-none">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 blur-xl" />
        </div>
        <div className="fixed bottom-20 right-10 animate-float-delayed pointer-events-none">
          <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 blur-xl" />
        </div>
        {!isMobile && (
          <>
            <div className="fixed top-1/2 left-10 animate-float pointer-events-none">
              <FaLightbulb className="text-yellow-400 text-4xl opacity-20" />
            </div>
            <div className="fixed top-1/3 right-10 animate-float-delayed pointer-events-none">
              <FaHeart className="text-red-400 text-3xl opacity-20" />
            </div>
          </>
        )}

        <style jsx>{`
          @keyframes gradient { 0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
          @keyframes slide { 0%{transform:translateX(-100%);} 100%{transform:translateX(100%);} }
          @keyframes slide-vertical{0%{transform:translateY(-100%);}100%{transform:translateY(100%);} }
          @keyframes float { 0%,100%{transform:translateY(0px);}50%{transform:translateY(-20px);} }
          @keyframes float-delayed{0%,100%{transform:translateY(0px);}50%{transform:translateY(-30px);} }
          @keyframes spin-slow{from{transform:rotate(0deg);}to{transform:rotate(360deg);} }
          .animate-gradient{background-size:400% 400%;animation:gradient 3s ease infinite;}
          .animate-slide{animation:slide 20s linear infinite;}
          .animate-slide-vertical{animation:slide-vertical 15s linear infinite;}
          .animate-float{animation:float 4s ease-in-out infinite;}
          .animate-float-delayed{animation:float-delayed 4s ease-in-out infinite;animation-delay:2s;}
          .animate-spin-slow{animation:spin-slow 10s linear infinite;}
          .animate-bounce-slow{animation:bounce 2.2s infinite;}
          @keyframes bounce {0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);}}
        `}</style>
      </div>
    </>
  );
};

export default Welcome;
