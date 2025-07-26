// // // // // // import React, { useEffect } from 'react';
// // // // // // import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
// // // // // // import { TypeAnimation } from 'react-type-animation';
// import About from './About';
// import Portfolio from './Portfolio';
// import Services from './Services';
// import Contact from './Contact';
// import Resume from './Resume';

// // // // // // import heroImg from '../assets/portfolio/hero1.webp';

// // // // // // const Hero = () => {
// // // // // //   useEffect(() => {
// // // // // //     const observer = new IntersectionObserver(
// // // // // //       (entries) => {
// // // // // //         entries.forEach((entry) => {
// // // // // //           if (entry.isIntersecting) {
// // // // // //             entry.target.classList.add('opacity-100', 'translate-y-0');
// // // // // //           }
// // // // // //         });
// // // // // //       },
// // // // // //       { threshold: 0.3 }
// // // // // //     );

// // // // // //     const elements = document.querySelectorAll('.animate-on-scroll');
// // // // // //     elements.forEach((el) => {
// // // // // //       el.classList.add(
// // // // // //         'opacity-0',
// // // // // //         'translate-y-10',
// // // // // //         'transition-all',
// // // // // //         'duration-1000',
// // // // // //         'ease-in-out'
// // // // // //       );
// // // // // //       observer.observe(el);
// // // // // //     });

// // // // // //     return () => {
// // // // // //       elements.forEach((el) => observer.unobserve(el));
// // // // // //     };
// // // // // //   }, []);

// // // // // //   return (
     
// // // // // //     <>
// // // // // //     <section
// // // // // //       id="hero"
// // // // // //       className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 to-gray-900 text-white"
// // // // // //     >
// // // // // //       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
// // // // // //         {/* Text Block */}
// // // // // //         <div className="md:w-1/2">
// // // // // //           <h1 className="text-4xl md:text-5xl font-bold">
// // // // // //             Hi, I'm{' '}
// // // // // //             <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
// // // // // //               Shekh Faisal
// // // // // //             </span>
// // // // // //           </h1>

// // // // // //           <p className="text-lg md:text-xl text-gray-300 mt-4 leading-relaxed">
// // // // // //             A passionate{' '}
// // // // // //             <TypeAnimation
// // // // // //             sequence={[
// // // // // //               '💻 Web Developer',
// // // // // //               2500,
// // // // // //               '🧑‍💻 Frontend Engineer',
// // // // // //               2500,
// // // // // //               '⚛️ React Developer',
// // // // // //               2500,
// // // // // //             ]}
// // // // // //             wrapper="span"
// // // // // //             speed={40} // Slower typing speed for smoother effect
// // // // // //             repeat={Infinity}
// // // // // //             className="font-semibold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent"
// // // // // //           />

// // // // // //             , specializing in building dynamic and responsive web applications.
// // // // // //             With a keen eye for design and a love for coding, I bring ideas to life
// // // // // //             through clean, efficient code and modern web technologies. Let's work together
// // // // // //             to create something amazing that not only meets your needs but also
// // // // // //             exceeds your expectations.
            
// // // // // //           </p>

// // // // // //           <div className="mt-6 flex gap-5">
// // // // // //             {[
// // // // // //               {
// // // // // //                 href: 'https://github.com/shekhfaisal2110',
// // // // // //                 icon: <FaGithub />,
// // // // // //               },
// // // // // //               {
// // // // // //                 href: 'https://www.linkedin.com/in/faisal-shaikh-3064582a4',
// // // // // //                 icon: <FaLinkedin />,
// // // // // //               },
// // // // // //               {
// // // // // //                 href: 'https://www.instagram.com/_shaikh__sahab_19_8',
// // // // // //                 icon: <FaInstagram />,
// // // // // //               },
// // // // // //             ].map(({ href, icon }, idx) => (
// // // // // //               <a
// // // // // //                 key={idx}
// // // // // //                 href={href}
// // // // // //                 target="_blank"
// // // // // //                 rel="noopener noreferrer"
// // // // // //                 className="w-11 h-11 rounded-full bg-[#1f1f1f] text-white text-xl flex items-center justify-center hover:scale-110 hover:bg-cyan-600 transition-all duration-300 shadow-lg"
// // // // // //               >
// // // // // //                 {icon}
// // // // // //               </a>
// // // // // //             ))}
// // // // // //           </div>

// // // // // //           <div className="mt-8 flex flex-wrap gap-4">
// // // // // //             <a
// // // // // //               href="/portfolio"
// // // // // //               className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow hover:scale-105 transition-transform duration-300"
// // // // // //             >
// // // // // //               View Portfolio
// // // // // //             </a>
// // // // // //             <a
// // // // // //               href="#contact"
// // // // // //               className="px-6 py-3 rounded-lg border border-cyan-400 text-white font-semibold hover:bg-cyan-800 transition duration-300"
// // // // // //             >
// // // // // //               Contact Me
// // // // // //             </a>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Hero Image */}
// // // // // //         <div className="md:w-1/2">
// // // // // //           <img
// // // // // //             src={heroImg}
// // // // // //             alt="Web Developer Illustration"
// // // // // //             className="rounded-2xl shadow-2xl w-full max-w-sm md:max-w-md transform transition-transform duration-1000 hover:scale-105"
// // // // // //           />
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //     <About/>
// // // // // //     <Portfolio/>
// // // // // //     <Services/>
// // // // // //     <Resume/>
// // // // // //     <Contact/>
// // // // // //    </>
// // // // // //   );
// // // // // // };

// // // // // // export default Hero;



import React, { useState, useEffect } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaRocket,
  FaCode,
  FaDesktop,
} from 'react-icons/fa';
import heroImg from '../assets/portfolio/hero1.webp';
import About from './About';
import Portfolio from './Portfolio';
import Services from './Services';
import Contact from './Contact';
import Resume from './Resume';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Header from './Header';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Enhanced TypeAnimation component
  const TypeAnimation = ({ sequence, wrapper, speed, repeat, className }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      const textSequence = sequence.filter((item, index) => index % 2 === 0);
      const delays = sequence.filter((item, index) => index % 2 === 1);
      
      let timeout;
      const currentFullText = textSequence[currentIndex] || '';
      
      if (isTyping && !isDeleting) {
        if (currentText.length < currentFullText.length) {
          timeout = setTimeout(() => {
            setCurrentText(currentFullText.slice(0, currentText.length + 1));
          }, speed);
        } else {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, delays[currentIndex] || 2000);
        }
      } else if (isDeleting) {
        if (currentText.length > 0) {
          timeout = setTimeout(() => {
            setCurrentText(currentText.slice(0, -1));
          }, speed / 2);
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % textSequence.length);
        }
      }

      return () => clearTimeout(timeout);
    }, [currentText, currentIndex, isTyping, isDeleting, sequence, speed]);

    return React.createElement(wrapper, { className }, currentText);
  };

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

  return (
    <>
      <Header/>
      <ParticleTrail />
      <section
        id="hero"
        className=" mt-[5rem] relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950 text-white overflow-hidden"
      >
        {/* Enhanced background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 backdrop-blur-3xl" />
        
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-pulse" 
               style={{
                 backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(34, 211, 238, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(156, 39, 176, 0.1) 0%, transparent 50%)',
                 animation: 'float 6s ease-in-out infinite'
               }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left: Enhanced Text Section */}
          <div
            className={`lg:w-1/2 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                  <span className="text-3xl">👋</span>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 animate-pulse" />
              </div>
              <div>
                <span className="text-3xl font-bold text-gray-300 block">Hello there!</span>
                <span className="text-lg text-gray-400">I'm</span>
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                Shekh Faisal
              </span>
            </h1>

            <div className="text-xl lg:text-3xl text-gray-300 mb-10 leading-relaxed">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-gray-400">A passionate</span>
                <div className="relative">
                  <TypeAnimation
                    sequence={[
                      '💻 Web Developer',
                      2500,
                      '🚀 Frontend Engineer',
                      2500,
                      '⚛️ React Specialist',
                      2500,
                      '🎨 UI/UX Designer',
                      2500,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                  />
                  <span className="animate-pulse ml-2 text-cyan-400 text-2xl">|</span>
                </div>
              </div>
              
              <div className="relative backdrop-blur-lg bg-white/10 p-8 rounded-3xl border border-white/20 shadow-2xl">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur opacity-20" />
                <p className="relative text-lg lg:text-xl leading-relaxed text-gray-200">
                  Crafting exceptional digital experiences through innovative web solutions.
                  I specialize in modern technologies and clean, efficient code that brings 
                  your vision to life. Let's collaborate to build something extraordinary 
                  that exceeds expectations and delivers real value.
                </p>
              </div>
            </div>

            {/* Enhanced Social Icons */}
            <div className="flex gap-6 mb-10">
              {[
                {
                  href: 'https://github.com/shekhfaisal2110',
                  icon: <FaGithub />,
                  color: 'from-gray-700 to-gray-900',
                  hoverColor: 'hover:from-gray-600 hover:to-gray-800',
                  name: 'GitHub'
                },
                {
                  href: 'https://www.linkedin.com/in/faisal-shaikh-3064582a4',
                  icon: <FaLinkedin />,
                  color: 'from-blue-600 to-blue-800',
                  hoverColor: 'hover:from-blue-500 hover:to-blue-700',
                  name: 'LinkedIn'
                },
                {
                  href: 'https://www.instagram.com/_shaikh__sahab_19_8',
                  icon: <FaInstagram />,
                  color: 'from-pink-600 to-purple-800',
                  hoverColor: 'hover:from-pink-500 hover:to-purple-700',
                  name: 'Instagram'
                },
              ].map(({ href, icon, color, hoverColor, name }, idx) => (
                <div key={idx} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300" />
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative w-16 h-16 rounded-full bg-gradient-to-r ${color} ${hoverColor} text-white text-2xl flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-2xl border border-white/20`}
                    title={name}
                  >
                    {icon}
                  </a>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-wrap gap-6">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl blur opacity-100 group-hover:opacity-100 transition duration-300 animate-pulse" />
                <button className="relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center gap-3">
                  <FaRocket className="text-xl animate-bounce" />
                  View Portfolio
                </button>
              </div>

              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                <button className="relative px-10 py-5 bg-white/10 backdrop-blur-lg border-2 border-white/30 text-white font-bold text-lg rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-white/20 flex items-center gap-3">
                  <FaDesktop className="text-xl animate-pulse" />
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Enhanced Skills Pills */}
            <div className="flex flex-wrap gap-3">
              {[ 'HTML/CSS' ,'JavaScript','React'].map((skill, idx) => (
                <div key={idx} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300" />
                  <span className="relative px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-sm font-semibold border border-white/20 transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:scale-105">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hero Image Section */}
          <div
            className={`lg:w-1/2 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-1000 animate-pulse" />
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/50 to-indigo-900/50 flex items-center justify-center">
                  {/* Placeholder for hero image - replace with your actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/10 to-transparent animate-pulse" />
                    <div className="text-center z-10">
                      
                      {/* <p className="text-2xl font-bold text-white mb-4">Your Hero Image</p>
                      <p className="text-lg text-gray-300">Replace this with your hero1.webp</p> */}
                      <img src={heroImg} alt="" />
                     
                    </div>
                    
                    {/* Animated background elements */}
                    <div className="absolute top-10 left-10 w-6 h-6 bg-cyan-400 rounded-full animate-ping opacity-60" />
                    <div className="absolute bottom-10 right-10 w-8 h-8 bg-purple-400 rounded-full animate-pulse opacity-60" />
                    <div className="absolute top-1/2 left-6 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-60" />
                    <div className="absolute bottom-1/4 left-1/4 w-5 h-5 bg-pink-400 rounded-full animate-pulse opacity-60" />
                  </div>
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce shadow-lg flex items-center justify-center">
                  <span className="text-white text-sm">⚡</span>
                </div>
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse shadow-lg flex items-center justify-center">
                  <FaCode className="text-white text-lg" />
                </div>
                <div className="absolute top-1/2 -right-10 w-8 h-8 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full animate-ping shadow-lg" />
                <div className="absolute bottom-1/4 -left-8 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce shadow-lg flex items-center justify-center">
                  <span className="text-white text-sm">🚀</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="relative">
            <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center">
              <div className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mt-2 animate-pulse" />
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 animate-pulse" />
          </div>
        </div>
      </section>

      <About />
      <Portfolio />
      <Services />
      <Resume />
      <Testimonials/>
      <Contact />
      <Footer/>

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
      `}</style>
    </>
  );
};

export default Hero;