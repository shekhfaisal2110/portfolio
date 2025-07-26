import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
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

const TechIconsGrid = () => (
  <div className="w-full max-w-5xl mx-auto px-3 py-6">
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6 sm:gap-8">
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
);

export default TechIconsGrid;
