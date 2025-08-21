import React, { useState } from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaBootstrap,
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

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

const TechIconsGrid = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="w-full max-w-5xl mx-auto px-3 py-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6 sm:gap-8">
        {techStack.map(({ name, icon, color, shadow }, idx) => (
          <div
            key={name}
            className={`relative flex flex-col items-center group px-3 py-7 bg-gradient-to-b from-white/10 via-white/20 to-white/5 dark:from-black/10 dark:via-black/20 dark:to-black/5 rounded-2xl shadow-lg transition-all duration-300 border border-white/10 dark:border-black/40 hover:scale-110 hover:border-cyan-400/40 cursor-pointer
              ${activeIndex === idx ? '' : ''}
            `}
            title={name}
            tabIndex={0}
            role="button"
            onClick={() => setActiveIndex(idx === activeIndex ? null : idx)}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') setActiveIndex(idx === activeIndex ? null : idx);
            }}
            style={{
              minHeight: 150,
              boxShadow: '0 1.5px 10px #0001',
              backdropFilter: 'blur(7px)',
              WebkitBackdropFilter: 'blur(7px)'
            }}
            aria-label={`Show skill details for ${name}`}
          >

            {/* ANIMATION if ACTIVE */}
            {activeIndex === idx && (
              <>
                {/* Floating Label */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="px-4 py-1 bg-black rounded-full text-white text-sm shadow-lg border border-white/10 font-semibold tracking-wide animate-fade-in">
                    {name}
                  </span>
                </div>
                {/* Glowing vertical line */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-9 w-1 z-10 pointer-events-none">
                  <div className="w-full h-full bg-cyan-400 animate-glow rounded-lg" />
                </div>
                {/* Ripple/outer ring */}
                <span className="absolute top-1/2 left-1/2 z-0 w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-cyan-400/30 animate-skill-ripple pointer-events-none"></span>
              </>
            )}

            {/* Icon */}
            <span
              className={`inline-block  mt-3 text-5xl md:text-6xl mb-2 relative z-10 transition-transform duration-200 ${
                activeIndex === idx ? 'animate-pop shadow-lg border border-cyan-400/30' : ''
              }`}
              style={{
                color,
                textShadow: shadow,
                filter: 'drop-shadow(0 2px 16px currentColor)',
                transform: activeIndex === idx ? 'translateY(10px)' : 'translateY(0)',
              }}
              aria-label={name}
            >
              {icon}
            </span>
          </div>
        ))}
      </div>
      {/* Tailwind custom keyframes */}
      <style>
        {`
          @keyframes skill-pop {
            0% { transform: scale(0.8);}
            60% { transform: scale(1.18);}
            100% { transform: scale(1);}
          }
          .animate-skill-pop { animation: skill-pop 0.5s ease; }

          @keyframes fade-in {
            from { opacity: 0; transform: translateY(-14px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in { animation: fade-in 0.8s ease; }

          @keyframes glow {
            0%,100% { opacity: 0.8;}
            50% { opacity: 1;}
          }
          .animate-glow { animation: glow 1.2s infinite alternate;}
          
          @keyframes skill-ripple {
            0% { box-shadow: 0 0 0 0 rgba(34,211,238,0.3);}
            60% { box-shadow: 0 0 0 12px rgba(34,211,238,0.12);}
            100% { box-shadow: 0 0 0 0 rgba(34,211,238,0.3);}
          }
          .animate-skill-ripple { animation: skill-ripple 1.8s infinite;}
        `}
      </style>
    </div>
  );
};

export default TechIconsGrid;
