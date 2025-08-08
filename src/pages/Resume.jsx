import React, { useState, useEffect } from 'react';
import { FaGraduationCap, FaBriefcase, FaDownload, FaEye, FaCode, FaRocket, FaCalendarAlt, FaExternalLinkAlt, FaHeart, FaStar } from 'react-icons/fa';
import cvImg from '../assets/icons/cv.png';
import ResumePdf from '../pages/Shekh_Faisal(resume).pdf'
import Header from './Header';

const Resume = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    setIsVisible(true);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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

  const education = [
    {
      title: 'Bachelor of Computer Application',
      date: '2023 - Present',
      icon: <FaGraduationCap />,
      gradient: 'from-cyan-500 to-blue-600',
      hoverGradient: 'from-cyan-400 to-blue-500',
      desc: (
        <>
          Pursuing BCA from <span className="text-white font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Sardar Vallabhbhai Global University</span>, specializing in web and software development. Currently holding a{' '}
          <span className="text-white font-semibold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">CGPA of 8.36</span>.
        </>
      ),
    },
    {
      title: '12th Standard (HSC - Commerce, Gujarat Board)',
      date: '2020 - 2022',
      icon: <FaGraduationCap />,
      gradient: 'from-purple-500 to-pink-600',
      hoverGradient: 'from-purple-400 to-pink-500',
      desc: (
        <>
          Studied at <span className="text-white font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Devdi-Geratpur High School</span>, under the Gujarat Board. Achieved{' '}
          <span className="text-white font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">88%</span>. Focused on Accountancy, Economics, and Business Studies, building analytical and financial skills.
        </>
      ),
    },
    {
      title: '10th Standard (SSC - Gujarat Board)',
      date: '2018 - 2019',
      icon: <FaGraduationCap />,
      gradient: 'from-green-500 to-cyan-600',
      hoverGradient: 'from-green-400 to-cyan-500',
      desc: (
        <>
          Completed secondary education from <span className="text-white font-semibold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">Devdi-Geratpur High School</span>, affiliated with the Gujarat Board. Secured{' '}
          <span className="text-white font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">85%</span>, building a strong academic foundation in core subjects.
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
          Delivered two freelance Islamic web apps tailored to client needs:
          <br />
          • <strong className="text-white bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">🎧 Audio Quran</strong> – a responsive Surah-wise Quran audio player.{' '}
          <a
            href="https://audioquranpak.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors duration-300 hover:shadow-cyan-400/50"
          >
            🔗 View Project
          </a>
          <br />
          • <strong className="text-white bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">📿 Tasbeeh Counter</strong> – a digital prayer counter with persistent local storage.{' '}
          <a
            href="https://shekhfaisal2110.github.io/tasbeeh/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors duration-300 hover:shadow-cyan-400/50"
          >
            🔗 View Project
          </a>
          <br />
          Focused on clean UI, mobile optimization, and spiritual usability.
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
          Completed a 1-year college capstone project titled {' '}
          <strong className="text-white bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">🌍 UniversalTravels</strong> – a fully responsive travel website built with HTML, CSS, and JavaScript.
          The project emphasized clean UI/UX, interactive destination sections, and smooth navigation.
          <br />
          <a
            href="https://shekhfaisal2110.github.io/UniversalTravels/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 hover:underline inline-block mt-2 transition-colors duration-300 hover:shadow-cyan-400/50"
          >
            🔗 View Project
          </a>
        </>
      ),
    },
  ];

  const TimelineItem = ({ title, date, desc, icon, gradient, hoverGradient }) => {
    return (
      <div className="relative pl-16 mb-8 group/timeline">
        {/* Enhanced Timeline Dot with Professional Hover */}
        <div className="absolute left-0 top-2 group/dot">
          <div className={`absolute -inset-2 bg-gradient-to-r ${hoverGradient} rounded-full blur opacity-20 group-hover/timeline:opacity-60 transition-all duration-500 animate-pulse`} />
          <div className={`relative w-12 h-12 rounded-full bg-gradient-to-r ${gradient} group-hover/timeline:bg-gradient-to-r group-hover/timeline:${hoverGradient} shadow-lg flex items-center justify-center transform group-hover/timeline:scale-110 group-hover/timeline:shadow-xl transition-all duration-300`}>
            <span className="text-white text-lg group-hover/timeline:scale-110 transition-transform duration-300">{icon}</span>
          </div>
        </div>
        
        {/* Enhanced Timeline Line */}
        <div className="absolute left-6 top-14 w-0.5 h-full bg-gradient-to-b from-cyan-400/50 to-transparent group-hover/timeline:from-cyan-300/70 transition-all duration-300"></div>
        
        {/* Enhanced Card with Professional Hover */}
        <div className="group/card relative">
          <div className={`absolute -inset-1 bg-gradient-to-r ${hoverGradient} rounded-2xl blur opacity-0 group-hover/card:opacity-60 transition-all duration-500`} />
          <div className="relative bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:bg-white/15 hover:shadow-lg hover:shadow-cyan-400/20 hover:scale-[1.02] hover:-translate-y-1">
            
            <div className="relative z-10">
              <h4 className="text-xl font-bold text-white mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover/card:from-cyan-300 group-hover/card:to-purple-300 transition-all duration-300">
                {title}
              </h4>
              
              <div className="flex items-center gap-2 mb-4 group/date">
                <FaCalendarAlt className="text-cyan-400 text-sm group-hover/card:text-cyan-300 group-hover/card:scale-110 transition-all duration-300" />
                <span className="text-sm text-cyan-400 group-hover/card:text-cyan-300 font-medium px-3 py-1 rounded-full bg-cyan-400/20 group-hover/card:bg-cyan-400/30 border border-cyan-400/30 group-hover/card:border-cyan-400/50 transition-all duration-300">
                  {date}
                </span>
              </div>
              
              <p className="text-gray-300 leading-relaxed group-hover/card:text-gray-200 transition-colors duration-300">{desc}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Header/>
      <ParticleTrail />
      <section
        id="resume"
        className="relative min-h-screen py-20 bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950 text-white overflow-hidden"
        aria-labelledby="resume-title"
      >
        {/* Enhanced background effects matching Hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 backdrop-blur-3xl" />
        
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-20">
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
                    src={cvImg} 
                    alt="Resume Icon" 
                    className="w-8 h-8"
                  />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 animate-pulse" />
              </div>
              <h2
                id="resume-title"
                className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient"
              >
                My Resume
              </h2>
            </div>
            
            <div className="relative backdrop-blur-lg bg-white/10 p-8 rounded-3xl border border-white/20 shadow-2xl max-w-3xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur opacity-20" />
              <p className="relative text-xl lg:text-2xl leading-relaxed text-gray-200">
                Explore my educational journey and professional experience. Each milestone represents dedication, growth, and passion for web development.
              </p>
            </div>
          </div>

          {/* Enhanced Resume Buttons with Professional Hover */}
          <div className={`flex justify-center gap-6 mb-16 flex-wrap transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Enhanced Download Button with Professional Hover */}
            <div className="group/download relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 rounded-xl blur opacity-70 group-hover/download:opacity-100 transition-all duration-500 animate-pulse" />
              <a
                href={ResumePdf}
                download="Shekh-Faisal-Resume"
                className="relative flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-lg rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-cyan-400/40"
                aria-label="Download Resume"
              >
                <FaDownload className="text-xl animate-bounce group-hover/download:animate-pulse group-hover/download:scale-110 transition-transform duration-300" />
                Download Resume
              </a>
            </div>

            {/* Enhanced View Button with Professional Hover */}
            <div className="group/view relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-300 to-pink-500 rounded-xl blur opacity-0 group-hover/view:opacity-100 transition-all duration-500" />
              <a
                href={ResumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-lg border-2 border-white/30 hover:border-white/50 text-white font-bold text-lg rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-white/20 hover:shadow-purple-400/30"
                aria-label="View Resume"
              >
                <FaEye className="text-xl animate-pulse group-hover/view:animate-bounce group-hover/view:scale-110 transition-transform duration-300" />
                View Resume
              </a>
            </div>
          </div>

          {/* Enhanced Resume Content */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Education Section with Professional Hover */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative group/education">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 rounded-3xl blur-xl opacity-30 group-hover/education:opacity-60 transition-all duration-700" />
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl group-hover/education:border-white/40 group-hover/education:bg-white/10 transition-all duration-500">
                  
                  {/* Enhanced floating decorative elements */}
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce shadow-lg flex items-center justify-center group-hover/education:scale-110 group-hover/education:shadow-cyan-400/60 transition-all duration-500">
                    <span className="text-white text-sm">🎓</span>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse shadow-lg flex items-center justify-center group-hover/education:scale-110 group-hover/education:shadow-purple-400/60 transition-all duration-500">
                    <FaGraduationCap className="text-white text-lg" />
                  </div>
                  <div className="absolute top-1/2 -right-10 w-8 h-8 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full animate-ping shadow-lg group-hover/education:shadow-green-400/70 transition-all duration-500" />
                  
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent animate-gradient flex items-center gap-4 group-hover/education:from-cyan-300 group-hover/education:to-blue-500 transition-all duration-300">
                      <FaGraduationCap className="text-cyan-400 group-hover/education:text-cyan-300 group-hover/education:scale-110 transition-all duration-300" />
                      Education
                    </h3>
                    <div className="space-y-6">
                      {education.map((item, index) => (
                        <TimelineItem key={index} {...item} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Experience Section with Professional Hover */}
            <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative group/experience">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-300 via-pink-400 to-cyan-400 rounded-3xl blur-xl opacity-30 group-hover/experience:opacity-60 transition-all duration-700" />
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl group-hover/experience:border-white/40 group-hover/experience:bg-white/10 transition-all duration-500">
                  
                  {/* Enhanced floating decorative elements */}
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce shadow-lg flex items-center justify-center group-hover/experience:scale-110 group-hover/experience:shadow-purple-400/60 transition-all duration-500">
                    <span className="text-white text-sm">💼</span>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse shadow-lg flex items-center justify-center group-hover/experience:scale-110 group-hover/experience:shadow-cyan-400/60 transition-all duration-500">
                    <FaRocket className="text-white text-lg" />
                  </div>
                  <div className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping shadow-lg group-hover/experience:shadow-yellow-400/70 transition-all duration-500" />
                  
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient flex items-center gap-4 group-hover/experience:from-purple-300 group-hover/experience:to-pink-400 transition-all duration-300">
                      <FaBriefcase className="text-purple-400 group-hover/experience:text-purple-300 group-hover/experience:scale-110 transition-all duration-300" />
                      Experience
                    </h3>
                    <div className="space-y-6">
                      {experience.map((item, index) => (
                        <TimelineItem key={index} {...item} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Skills Section with Professional Hover */}
          <div className={`mt-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent flex items-center justify-center gap-3">
                <FaStar className="text-green-400 animate-pulse" />
                Core Skills
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { name: 'HTML/CSS', color: 'from-orange-400 to-red-500' },
                  { name: 'JavaScript', color: 'from-yellow-400 to-orange-500' },
                  { name: 'React.js', color: 'from-cyan-400 to-blue-500' },
                  { name: 'Responsive Design', color: 'from-green-400 to-emerald-500' },
                  { name: 'UI/UX Design', color: 'from-purple-400 to-pink-500' },
                  { name: 'Git/GitHub', color: 'from-gray-400 to-gray-600' },
                  { name: 'Problem Solving', color: 'from-indigo-400 to-purple-500' },
                  { name: 'Team Collaboration', color: 'from-pink-400 to-rose-500' }
                ].map((skill, idx) => (
                  <div key={idx} className="group/skill relative">
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-full blur opacity-0 group-hover/skill:opacity-60 transition-all duration-500`} />
                    <span className="relative px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-sm font-semibold border border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:shadow-lg hover:shadow-cyan-400/20 hover:scale-105 hover:-translate-y-1 group-hover/skill:text-gray-100">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced CTA Section with Professional Hover */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="group/cta1 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-300 to-emerald-400 rounded-xl blur opacity-0 group-hover/cta1:opacity-100 transition-all duration-500" />
                <a
                  href="/contact"
                  className="relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-400/40"
                >
                  <FaRocket className="animate-bounce group-hover/cta1:animate-pulse group-hover/cta1:scale-110 transition-transform duration-300" />
                  Let's Work Together
                </a>
              </div>
              
              <div className="group/cta2 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-300 to-red-400 rounded-xl blur opacity-0 group-hover/cta2:opacity-100 transition-all duration-500" />
                <a
                  href="/portfolio"
                  className="relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-400/40"
                >
                  <FaExternalLinkAlt className="animate-pulse group-hover/cta2:animate-bounce group-hover/cta2:scale-110 transition-transform duration-300" />
                  View My Work
                </a>
              </div>

              <div className="group/cta3 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-300 to-purple-400 rounded-xl blur opacity-0 group-hover/cta3:opacity-100 transition-all duration-500" />
                <a
                  href="#testimonials"
                  className="relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-400/40"
                >
                  <FaHeart className="animate-pulse group-hover/cta3:animate-bounce group-hover/cta3:scale-110 transition-transform duration-300" />
                  Client Reviews
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Animations with Professional Effects */}
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

          /* Professional Light Color Hover Effects */
          .group\/timeline:hover .group-hover\/timeline\:opacity-60 {
            opacity: 0.6;
          }
          
          .group\/timeline:hover .group-hover\/timeline\:scale-110 {
            transform: scale(1.1);
          }
          
          .group\/timeline:hover .group-hover\/timeline\:shadow-xl {
            box-shadow: 0 20px 40px rgba(34, 211, 238, 0.4);
          }
          
          .group\/card:hover {
            background: rgba(255, 255, 255, 0.15);
            border-color: rgba(255, 255, 255, 0.4);
            box-shadow: 0 10px 30px rgba(34, 211, 238, 0.2);
          }
          
          .group\/education:hover,
          .group\/experience:hover {
            filter: brightness(1.05);
          }
          
          .group\/download:hover a,
          .group\/view:hover a {
            filter: brightness(1.1);
          }
          
          .group\/skill:hover span {
            background: rgba(255, 255, 255, 0.2);
            border-color: rgba(255, 255, 255, 0.4);
            box-shadow: 0 10px 25px rgba(34, 211, 238, 0.2);
          }
          
          .group\/cta1:hover a,
          .group\/cta2:hover a,
          .group\/cta3:hover a {
            filter: brightness(1.15);
          }

          /* Enhanced Timeline Effects */
          .group\/timeline:hover .absolute.left-6 {
            background: linear-gradient(to bottom, rgba(34, 211, 238, 0.7), transparent);
          }

          /* Professional Link Hover Effects */
          a[href*="audioquranpak"]:hover,
          a[href*="tasbeeh"]:hover,
          a[href*="UniversalTravels"]:hover {
            text-shadow: 0 0 10px rgba(34, 211, 238, 0.5);
            transform: scale(1.05);
          }

          /* Enhanced Icon Animations */
          .group\/download:hover .animate-bounce,
          .group\/view:hover .animate-pulse {
            animation-duration: 0.5s;
          }

          /* Professional Shadow Transitions */
          .group\/education:hover .absolute.-top-6,
          .group\/experience:hover .absolute.-top-6 {
            box-shadow: 0 15px 35px rgba(34, 211, 238, 0.6);
          }

          .group\/education:hover .absolute.-bottom-6,
          .group\/experience:hover .absolute.-bottom-6 {
            box-shadow: 0 15px 35px rgba(196, 181, 253, 0.6);
          }

          .group\/education:hover .absolute.top-1\/2,
          .group\/experience:hover .absolute.top-1\/2 {
            box-shadow: 0 10px 25px rgba(74, 222, 128, 0.7);
          }
        `}</style>
      </section>
    </>
  );
};

export default Resume;