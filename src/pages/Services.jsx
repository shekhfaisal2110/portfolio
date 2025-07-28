// // // // // import React, { useEffect } from 'react';
// // // // // import { FaCode, FaMobileAlt, FaPaintBrush, FaTools } from 'react-icons/fa';
// // // // // import digitalServicesImg from '../assets/icons/digital-services.png';
// // // // // import requirementsImg from '../assets/icons/requirements.png'

// // // // // const services = [
// // // // //   {
// // // // //     icon: <FaCode className="text-4xl text-cyan-400 mb-4" />,
// // // // //     title: 'Web Development',
// // // // //     description: 'Building responsive and high-performance websites with HTML, CSS, JavaScript, and React.',
// // // // //   },
// // // // //   {
// // // // //     icon: <FaPaintBrush className="text-4xl text-cyan-400 mb-4" />,
// // // // //     title: 'UI/UX Design',
// // // // //     description: 'Designing intuitive interfaces with focus on user experience and visual hierarchy.',
// // // // //   },
// // // // //   {
// // // // //     icon: <FaMobileAlt className="text-4xl text-cyan-400 mb-4" />,
// // // // //     title: 'Responsive Design',
// // // // //     description: 'Ensuring mobile-first design with cross-browser compatibility and modern layouts.',
// // // // //   },
// // // // //   {
// // // // //     icon: <FaTools className="text-4xl text-cyan-400 mb-4" />,
// // // // //     title: 'Debugging & Optimization',
// // // // //     description: 'Improving site performance and fixing issues using best coding practices.',
// // // // //   },
// // // // // ];

// // // // // const Services = () => {
// // // // //   useEffect(() => {
// // // // //     const observer = new IntersectionObserver(
// // // // //       (entries) => {
// // // // //         entries.forEach((entry) => {
// // // // //           if (entry.isIntersecting) {
// // // // //             entry.target.classList.add('opacity-100', 'translate-y-0');
// // // // //           }
// // // // //         });
// // // // //       },
// // // // //       { threshold: 0.2 }
// // // // //     );

// // // // //     document.querySelectorAll('.animate-on-scroll').forEach((el) => {
// // // // //       el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-1000');
// // // // //       observer.observe(el);
// // // // //     });

// // // // //     return () => observer.disconnect();
// // // // //   }, []);

// // // // //   return (
// // // // //     <section
// // // // //       id="services"
// // // // //       className="min-h-screen py-20 flex items-center justify-center bg-gradient-to-br from-gray-950 to-gray-900 text-white"
// // // // //       aria-labelledby="services-title"
// // // // //     >
// // // // //       <div className="max-w-7xl mx-auto px-6">
// // // // //         <h2
// // // // //           id="services-title"
// // // // //           className="text-3xl md:text-4xl font-bold text-center mb-12 flex items-center justify-center gap-4"
// // // // //         >
// // // // //           <img src={digitalServicesImg} alt="Services Icon" className="w-8 h-8" />
// // // // //           Services &amp; Skills
// // // // //           <img src={requirementsImg} alt="Skills Icon" className="w-8 h-8" />
// // // // //         </h2>

// // // // //         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
// // // // //           {services.map((service, i) => (
// // // // //             <div
// // // // //               key={i}
// // // // //               className="bg-[#1f1f1f] text-center rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300 animate-on-scroll"
// // // // //             >
// // // // //               <div className="service-icon">{service.icon}</div>
// // // // //               <h3
// // // // //                 className="text-xl font-semibold mb-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 
// // // // //                 bg-clip-text text-transparent"
// // // // //               >
// // // // //                 {service.title}
// // // // //               </h3>
// // // // //               <p className="text-sm text-gray-300">{service.description}</p>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default Services;




import React, { useEffect, useState, useRef } from 'react';
import { 
  FaCode, 
  FaMobileAlt, 
  FaPaintBrush, 
  FaTools,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaRocket,
  FaHeart,
  FaStar,
  FaCrown,
  FaMedal
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import Header from './Header';
import TechIconsGrid from '../components/TechIconsGrid';

const Services = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [skillsInView, setSkillsInView] = useState(new Set());
  const containerRef = useRef(null);
  const skillsRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.classList.contains('skill-card')) {
            const skillIndex = parseInt(entry.target.dataset.skillIndex);
            setSkillsInView(prev => new Set([...prev, skillIndex]));
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('.skill-card').forEach((el) => {
      observer.observe(el);
    });

    window.addEventListener('mousemove', handleMouseMove);
    setIsVisible(true);

    return () => {
      observer.disconnect();
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

  const services = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Building responsive and high-performance websites with modern technologies and best practices.',
      gradient: 'from-cyan-500 to-blue-600',
      bgGradient: 'from-cyan-500/10 to-blue-600/10'
    },
    {
      icon: <FaPaintBrush />,
      title: 'UI/UX Design',
      description: 'Designing intuitive interfaces with focus on user experience and visual hierarchy.',
      gradient: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-500/10 to-pink-600/10'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Responsive Design',
      description: 'Ensuring mobile-first design with cross-browser compatibility and modern layouts.',
      gradient: 'from-green-500 to-cyan-600',
      bgGradient: 'from-green-500/10 to-cyan-600/10'
    },
    {
      icon: <FaTools />,
      title: 'Debugging & Optimization',
      description: 'Improving site performance and fixing issues using best coding practices.',
      gradient: 'from-orange-500 to-red-600',
      bgGradient: 'from-orange-500/10 to-red-600/10'
    },
  ];

 

  const getLevelIcon = (level) => {
    switch(level) {
      case 'Expert':
        return <FaCrown className="text-yellow-400" />;
      case 'Advanced':
        return <FaMedal className="text-blue-400" />;
      case 'Intermediate':
        return <FaStar className="text-green-400" />;
      default:
        return <FaStar className="text-gray-400" />;
    }
  };

  return (
    <>
      <Header/>
      <ParticleTrail />
      <section
        id="services"
        ref={containerRef}
        className="relative min-h-screen py-20 bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950 text-white overflow-hidden"
        aria-labelledby="services-title"
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
                  <span className="text-3xl">⚡</span>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 animate-pulse" />
              </div>
              <h2
                id="services-title"
                className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient"
              >
                Services & Expertise
              </h2>
            </div>
            
            <div className="relative backdrop-blur-lg bg-white/10 p-8 rounded-3xl border border-white/20 shadow-2xl max-w-3xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur opacity-20" />
              <p className="relative text-xl lg:text-2xl leading-relaxed text-gray-200">
                Delivering exceptional web solutions with cutting-edge technologies and innovative design approaches.
              </p>
            </div>
          </div>

          {/* Enhanced Service Cards Grid with Perfect Professional Styling */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {services.map((service, i) => (
              <div
                key={i}
                className={`group relative transition-all duration-1000 delay-${(i + 3) * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className={`absolute -inset-2 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-all duration-700 animate-pulse`} />
                <div className="relative bg-white/5 backdrop-blur-xl text-center rounded-3xl p-8 border border-white/20 hover:border-white/40 transform hover:-translate-y-6 hover:scale-[1.02] transition-all duration-700 shadow-2xl hover:shadow-cyan-400/20 overflow-hidden hover:bg-white/10">
                  
                  {/* Enhanced floating decorative elements */}
                  <div className={`absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-full animate-bounce shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                    <span className="text-white text-sm">✨</span>
                  </div>
                  <div className={`absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r ${service.gradient} rounded-full animate-pulse shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                    <span className="text-white text-xs">⚡</span>
                  </div>
                  <div className={`absolute top-1/2 -right-8 w-6 h-6 bg-gradient-to-r ${service.gradient} rounded-full animate-ping shadow-lg opacity-60`} />
                  <div className={`absolute bottom-1/4 -left-6 w-8 h-8 bg-gradient-to-r ${service.gradient} rounded-full animate-bounce shadow-lg opacity-60`} />
                  
                  <div className="relative z-10">
                    <div className="service-icon mb-8 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500">
                      <div className="relative inline-block">
                        <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center mx-auto shadow-2xl border-2 border-white/20`}>
                          {React.cloneElement(service.icon, {
                            className: `text-3xl text-white drop-shadow-lg`
                          })}
                        </div>
                        <div className={`absolute -inset-3 bg-gradient-to-r ${service.gradient} rounded-full blur-lg opacity-40 group-hover:opacity-70 transition-all duration-500`} />
                      </div>
                    </div>

                    <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                      {service.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300 text-lg">
                      {service.description}
                    </p>

                    <div className={`w-0 h-1 bg-gradient-to-r ${service.gradient} mx-auto mt-6 group-hover:w-20 transition-all duration-700 rounded-full shadow-lg`}></div>
                  </div>

                  {/* Professional hover overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl pointer-events-none`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Technical Skills Section */}
          <div className={`text-center mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                  <span className="text-3xl">🚀</span>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full blur opacity-30 animate-pulse" />
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient">
                Technical Skills
              </h2>
            </div>
            
            <div className="relative backdrop-blur-lg bg-white/10 p-6 rounded-2xl border border-white/20 shadow-lg max-w-2xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400/20 via-cyan-400/20 to-blue-500/20 rounded-2xl blur opacity-50" />
              <p className="relative text-lg text-gray-200">
                Professional expertise in modern web technologies and development tools
              </p>
            </div>
          </div>

          {/* Enhanced Professional Technical Skills Grid */}
         <div className="py-12">
  <TechIconsGrid />
</div>



          {/* Enhanced CTA Section */}
          <div className={`text-center transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-300 animate-pulse" />
                <a
                  href="#contact"
                  className="relative flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-lg rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-cyan-400/40"
                >
                  <FaRocket className="text-xl animate-bounce group-hover:animate-pulse" />
                  Start Your Project
                </a>
              </div>

              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                <a
                  href="#portfolio"
                  className="relative flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-lg border-2 border-white/30 hover:border-white/50 text-white font-bold text-lg rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-white/20 hover:shadow-purple-400/30"
                >
                  <FaHeart className="text-xl animate-pulse group-hover:animate-bounce" />
                  View My Work
                </a>
              </div>
            </div>

            {/* Enhanced Additional Info */}
            <div className="mt-12 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500" />
              <div className="relative backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/20 shadow-lg max-w-3xl mx-auto transition-all duration-300 hover:bg-white/10">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce shadow-lg flex items-center justify-center">
                  <span className="text-sm">💡</span>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Ready to transform your ideas into reality? Let's collaborate and build something amazing together! With expertise spanning frontend development to modern frameworks, I deliver solutions that exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Professional Animations */}
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
          
          @keyframes skillGlow {
            0%, 100% { 
              box-shadow: 0 0 30px rgba(34, 211, 238, 0.2);
            }
            50% { 
              box-shadow: 0 0 60px rgba(34, 211, 238, 0.4);
            }
          }

          @keyframes iconFloat {
            0%, 100% { 
              transform: translateY(0px) rotate(0deg) scale(1.1); 
            }
            33% { 
              transform: translateY(-12px) rotate(8deg) scale(1.15); 
            }
            66% { 
              transform: translateY(-6px) rotate(-5deg) scale(1.12); 
            }
          }

          @keyframes levelBadgeGlow {
            0%, 100% { 
              box-shadow: 0 0 15px rgba(34, 211, 238, 0.3);
            }
            50% { 
              box-shadow: 0 0 25px rgba(34, 211, 238, 0.6);
            }
          }
          
          .animate-gradient {
            background-size: 400% 400%;
            animation: gradient 3s ease infinite;
          }

          .skill-card:hover {
            animation: skillGlow 4s ease-in-out infinite;
          }

          .skill-card:hover .skill-icon {
            animation: iconFloat 5s ease-in-out infinite;
          }

          .skill-card:hover [class*="level-badge"] {
            animation: levelBadgeGlow 3s ease-in-out infinite;
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
      </section>
    </>
  );
};

export default Services;