import React, { useState, useEffect } from 'react';
import {
  FaGraduationCap,
  FaBriefcase,
  FaDownload,
  FaEye,
  FaCode,
  FaRocket,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaHeart,
} from 'react-icons/fa';
import ResumePdf from '../pages/Shekh_Faisal(resume).pdf';
import Header from './Header';

import TextScroll from '../ui/text-scroll';

const TimelineItem = ({ title, date, desc, icon, gradient, hoverGradient }) => {
  return (
    <div className="relative pl-16 mb-8 group/timeline max-w-lg mx-auto sm:max-w-none">
      {/* Dot */}
      <div className="absolute left-0 top-2">
        <div className={`absolute -inset-2 bg-gradient-to-r ${hoverGradient} rounded-full blur opacity-20 group-hover:opacity-60 transition duration-500`} />
        <div className={`relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg border border-white/10 bg-gradient-to-r ${gradient} text-white text-2xl transition-transform group-hover:scale-105`}>
          {icon}
        </div>
      </div>

      {/* Line */}
      <div className="absolute left-5 top-14 w-0.5 h-full bg-gradient-to-b from-cyan-500 to-transparent opacity-50" />

      {/* Content */}
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-lg p-6 hover:shadow-cyan-600 transition-shadow duration-300 group hover:border-white/40 hover:bg-white/20">
        <h4 className={`text-xl font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-3`}>
          {title}
        </h4>
        <div className="flex items-center gap-2 mb-4">
          <FaCalendarAlt className="text-cyan-400" />
          <span className="text-cyan-400 font-medium bg-cyan-700/20 px-3 py-1 rounded-full text-sm">{date}</span>
        </div>
        <div className="text-white text-opacity-75 leading-relaxed">{desc}</div>
      </div>
    </div>
  );
};

const Resume = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    setIsVisible(true);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

  const education = [
    {
      title: 'Bachelor of Computer Application',
      date: '2023 - Present',
      icon: <FaGraduationCap />,
      gradient: 'from-cyan-500 to-blue-600',
      hoverGradient: 'from-cyan-400 to-blue-500',
      desc: (
        <>
          Pursuing BCA from{' '}
          <span className="font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Sardar Vallabhai Global University
          </span>
          , specializing in web and software development, current CGPA{' '}
          <span className="font-semibold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">8.36</span>.
        </>
      ),
    },
    {
      title: '12th Standard (HSC - Commerce)',
      date: '2021 - 2023',
      icon: <FaGraduationCap />,
      gradient: 'from-purple-500 to-pink-600',
      hoverGradient: 'from-purple-400 to-pink-500',
      desc: (
        <>
          Completed schooling at{' '}
          <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Devdi-Geratpur High School
          </span>{' '}
          with 75.29%  Focus on Accountancy and Economics.
        </>
      ),
    },
    {
      title: '10th Standard (SSC)',
      date: '2019 - 2021',
      icon: <FaGraduationCap />,
      gradient: 'from-green-500 to-cyan-600',
      hoverGradient: 'from-green-400 to-cyan-500',
      desc: (
        <>
          Completed SSC at{' '}
          <span className="font-semibold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
            Devdi-Geratpur High School
          </span>{' '}
          with 87.33%.
        </>
      ),
    },
  ];

  const experience = [
    {
      title: 'Freelance Web Developer',
      date: '2024-2025',
      icon: <FaBriefcase />,
      gradient: 'from-blue-500 to-indigo-600',
      hoverGradient: 'from-blue-400 to-indigo-500',
      desc: (
        <>
          Developed 2 Islamic applications:<br/>
          <strong className="font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Audio Quran</strong> - Responsive audio player;{' '}
          <a href="https://audioquranpak.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            View Project
          </a>
          <br />
          <strong className="font-semibold bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">Tasbeeh Counter</strong> - Persistent counter;{' '}
          <a href="https://shekhfaisal2110.github.io/tasbeeh/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
            View Project
          </a>
          <br />
          Focus on usability and responsiveness.
        </>
      ),
    },
    {
  title: 'Personal Project Developer',
  date: '2023 - 2024',
  icon: <FaCode />,
  gradient: 'from-orange-500 to-red-600',
  hoverGradient: 'from-orange-400 to-red-500',
  desc: (
    <>
      Built <strong className="font-semibold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
        UniversalTravels
      </strong>, a desktop-focused travel website created as part of my first-year project. 
      Designed with semantic HTML and styled using CSS for a clean, modern look 
      (optimized primarily for desktop screens).
      <br />
      <a 
        href="https://shekhfaisal2110.github.io/UniversalTravels/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-cyan-400 hover:underline"
      >
        View Project
      </a>
    </>
  ),
},

  ];

  const TimelineItem = ({ title, date, desc, icon, gradient, hoverGradient }) => {
    return (
      <div className="relative pl-16 mb-8 group">
        {/* Dot */}
        <div className="absolute left-0 top-2">
          <div className={`absolute -inset-2 bg-gradient-to-r ${hoverGradient} rounded-full blur opacity-20 group-hover:opacity-60 transition duration-500`}></div>
          <div className={`relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg border border-white/10 bg-gradient-to-r ${gradient} text-white text-2xl transition-transform group-hover:scale-105`}>
            {icon}
          </div>
        </div>
        {/* Line */}
        <div className="absolute left-5 top-14 w-0.5 h-full bg-gradient-to-b from-cyan-500 to-transparent opacity-50"></div>
        {/* Content */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-lg p-6 hover:shadow-cyan-600 transition-shadow duration-300 group-hover:border-white/40 group-hover:bg-white/20">
          <h4 className={`text-xl font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-3`}>{title}</h4>
          <div className="flex items-center gap-2 mb-4">
            <FaCalendarAlt className="text-cyan-400" />
            <span className="text-cyan-400 font-medium bg-cyan-700/20 px-3 py-1 rounded-full text-sm">{date}</span>
          </div>
          <div className="text-white text-opacity-75 leading-relaxed">{desc}</div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />
      <ParticleTrail />
      <section
        id="resume"
        className="relative min-h-screen py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white overflow-hidden"
        aria-labelledby="resume-title"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-radial-gradient animate-float-move" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 animate-pulse" />
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                 <TextScroll
                   className="font-display text-center text-4xl font-semibold tracking-tighter text-black dark:text-white md:text-7xl md:leading-[5rem]"
                   text="💼 📄 My Resume 📄 💼"
                   default_velocity={5}
                 />
               </h2>
            </div>
            <div className="relative backdrop-blur-lg bg-white/10 p-8 rounded-3xl border border-white/20 shadow-2xl max-w-3xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur opacity-20" />
              <p className="relative text-xl lg:text-2xl leading-relaxed text-gray-200">
                Explore my educational journey and professional experience. Each milestone represents dedication, growth, and passion for web development.
              </p>
            </div>
          </div>

          {/* Download/View Buttons */}
          <div className="flex flex-wrap justify-center gap-10 mb-16">
            <a
              href={ResumePdf}
              download="Shekh_Faisal_Resume.pdf"
              className="group relative flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-4 font-bold text-white shadow-lg transition hover:scale-105 hover:shadow-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
              aria-label="Download Resume"
            >
              <FaDownload className="animate-bounce" />
              Download Resume
            </a>
            <a
              href={ResumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-10 py-4 font-bold text-white shadow-lg transition hover:scale-105 hover:shadow-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-pink-400"
              aria-label="View Resume"
            >
              <FaEye className="animate-pulse" />
              View Resume
            </a>
          </div>

          {/* Timeline Sections */}
          <div className="grid md:grid-cols-2 gap-16 mb-32">
            <section aria-labelledby="education-title">
              <TimelineSection
                title="Education"
                items={education}
                icon={<FaGraduationCap />}
              />
            </section>
            <section aria-labelledby="experience-title">
              <TimelineSection
                title="Experience"
                items={experience}
                icon={<FaBriefcase />}
              />
            </section>
          </div>

          {/* Core Skills */}
          <div className="max-w-4xl mx-auto mb-32 text-center" aria-label="Core Skills">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent mb-8 flex items-center justify-center gap-3">
              <FaGraduationCap className="animate-pulse text-green-400" />
              Core Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'HTML/CSS', 'JavaScript', 'React.js', 'Responsive Design',
                'UI/UX Design', 'Git/GitHub', 'Problem Solving', 'Team Collaboration'
              ].map((skill, idx) => (
                <SkillBadge key={idx} skill={skill} />
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto text-center mb-16 py-8 px-4 flex flex-col sm:flex-row justify-center items-center gap-6">
  <CTAButton href="/contact" icon={FaRocket} colorStart="cyan-500" colorEnd="emerald-600" text="Let's Work Together" />
  <CTAButton href="/portfolio" icon={FaExternalLinkAlt} colorStart="orange-500" colorEnd="red-600" text="View My Work" />
  <CTAButton href="/testimonials" icon={FaHeart} colorStart="pink-500" colorEnd="purple-600" text="Client Reviews" />
</div>

        </div>
      </section>
    </>
  );
};

const TimelineSection = ({ title, items, icon }) => (
  <>
    <h2
      id={`${title.toLowerCase()}-title`}
      className="text-4xl font-extrabold mb-10 flex items-center gap-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
    >
      {icon}
      {title}
    </h2>
    <div>
      {items.map((item, idx) => (
        <TimelineItem key={idx} {...item} />
      ))}
    </div>
  </>
);

const SkillBadge = ({ skill }) => {
  const gradients = {
    'HTML/CSS': 'from-orange-400 to-red-500',
    'JavaScript': 'from-yellow-400 to-orange-500',
    'React.js': 'from-cyan-400 to-blue-500',
    'Responsive Design': 'from-green-400 to-emerald-500',
    'UI/UX Design': 'from-purple-400 to-pink-500',
    'Git/GitHub': 'from-gray-400 to-gray-600',
    'Problem Solving': 'from-indigo-400 to-purple-500',
    'Team Collaboration': 'from-pink-400 to-rose-500',
  };

  return (
    <span
      className={`relative cursor-default select-none rounded-full px-6 py-2 text-sm font-semibold text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-cyan-400`}
      style={{
        backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
        ['--tw-gradient-from']: `var(--tw-gradient-from-${gradients[skill].split(' ')[0]})`,
        ['--tw-gradient-to']: `var(--tw-gradient-to-${gradients[skill].split(' ')[1]})`,
      }}
    >
      {skill}
    </span>
  );
};

const CTAButton = ({ href, icon: Icon, colorStart, colorEnd, text }) => (
  <a
    href={href}
    className={`inline-flex items-center gap-3 px-10 py-4 rounded-xl font-bold text-white shadow-lg bg-gradient-to-r from-${colorStart} to-${colorEnd} transition-transform duration-300 hover:scale-105 hover:shadow-${colorStart} focus-visible:outline focus-visible:outline-2 focus-visible:outline-${colorStart}`}
  >
    <Icon className="animate-bounce text-lg" />
    {text}
  </a>
);

export default Resume;
