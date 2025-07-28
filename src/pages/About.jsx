// // // // import React, { useEffect, useState } from "react";
// // // // import {
// // // //   FaCalendarAlt,
// // // //   FaPhoneAlt,
// // // //   FaMapMarkerAlt,
// // // //   FaGlobe,
// // // //   FaUser,
// // // //   FaGraduationCap,
// // // //   FaEnvelope,
// // // //   FaBriefcase,
// // // // } from "react-icons/fa";
// // // // import myImg from '../assets/portfolio/my_image.jpeg';
// // // // import workingImg from '../assets/icons/working.png'


// // // // const About = () => {
// // // //   const [age, setAge] = useState(null);

// // // //   useEffect(() => {
// // // //     const birthDate = new Date("2005-09-26");
// // // //     const today = new Date();
// // // //     const years = today.getFullYear() - birthDate.getFullYear();
// // // //     const hasBirthdayPassed =
// // // //       today.getMonth() > birthDate.getMonth() ||
// // // //       (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
// // // //     setAge(hasBirthdayPassed ? years : years - 1);
// // // //   }, []);

// // // //   return (
// // // //     <section
// // // //       id="about"
// // // //       aria-labelledby="about-title"
// // // //       className="py-20 min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-white"
// // // //     >
// // // //       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
// // // //         {/* About Image */}
// // // //         <div className="flex justify-center">
// // // // <img
// // // //   src={myImg}
// // // //   alt="Picture of Shekh Faisal"
// // // //   className="rounded-2xl shadow-2xl w-full max-w-sm object-cover animate-fade-in transition-transform duration-300 hover:scale-105"
// // // // />

// // // //         </div>

// // // //         {/* About Content */}
// // // //         <div className="space-y-6 animate-fade-in">
// // // //           <h2 id="about-title" className="text-4xl font-bold flex items-center gap-3">
// // // //             <img src={workingImg} alt="About Me Icon" className="w-8 h-8" />
// // // //             About Me
// // // //           </h2>

// // // //           <p className="text-lg leading-relaxed text-gray-300">
// // // //             Hello! I'm <span className="text-cyan-400 font-semibold">Shekh Faisal</span>, a dedicated and passionate{" "}
// // // //             <span className="text-cyan-400 font-semibold">Web Developer</span> who loves transforming ideas into
// // // //             functional and visually appealing websites. With a strong foundation in modern technologies and a knack for
// // // //             problem-solving, I ensure every project meets user expectations.
// // // //           </p>
// // // //           <p className="text-lg leading-relaxed text-gray-300">
// // // //             What sets me apart? A blend of creativity and technical expertise that enables me to deliver clean,
// // // //             efficient code while maintaining exceptional user experiences.
// // // //           </p>

// // // //           {/* Personal Details */}
// // // //           <div className="grid sm:grid-cols-2 gap-6 text-sm sm:text-base text-gray-300">
// // // //             <ul className="space-y-2">
// // // //               <li className="flex items-center gap-2">
// // // //                 <FaCalendarAlt className="text-indigo-500" />
// // // //                 <strong className="w-24">Birthday:</strong> <span>26 Sept 2005</span>
// // // //               </li>
// // // //               <li className="flex items-center gap-2">
// // // //                 <FaPhoneAlt className="text-indigo-500" />
// // // //                 <strong className="w-24">Phone:</strong>{" "}
// // // //                 <a href="tel:+919173195287" className="text-cyan-400 hover:underline">+91 9173195287</a>
// // // //               </li>
// // // //               <li className="flex items-center gap-2">
// // // //                 <FaMapMarkerAlt className="text-indigo-500" />
// // // //                 <strong className="w-24">City:</strong> <span>Ahmedabad, India</span>
// // // //               </li>
// // // //               <li className="flex items-center gap-2">
// // // //                 <FaGlobe className="text-indigo-500" />
// // // //                 <strong className="w-24">Website:</strong>
// // // //                 <a
// // // //                   href="https://shekhfaisal2110.github.io/ShekhFaisalTech/"
// // // //                   target="_blank"
// // // //                   rel="noopener noreferrer"
// // // //                   className="text-cyan-400 hover:underline"
// // // //                 >
// // // //                   shekhfaisaltech.github.io
// // // //                 </a>
// // // //               </li>
// // // //             </ul>
// // // //             <ul className="space-y-2">
// // // //               <li className="flex items-center gap-2">
// // // //                 <FaUser className="text-indigo-500" /> <strong className="w-24">Age:</strong>{" "}
// // // //                 <span>{age ?? "Loading..."}</span>
// // // //               </li>
// // // //               <li className="flex items-center gap-2">
// // // //                 <FaGraduationCap className="text-indigo-500" />
// // // //                 <strong className="w-24">Degree:</strong> <span>BCA (Pursuing)</span>
// // // //               </li>
// // // //               <li className="flex items-center gap-2">
// // // //                 <FaEnvelope className="text-indigo-500" />
// // // //                 <strong className="w-24">Email:</strong>
// // // //                 <a
// // // //                   href="mailto:shekhfaisal.2110@gmail.com"
// // // //                   className="text-cyan-400 hover:underline"
// // // //                 >
// // // //                   shekhfaisal.2110@gmail.com
// // // //                 </a>
// // // //               </li>
// // // //               <li className="flex items-center gap-2">
// // // //                 <FaBriefcase className="text-indigo-500" />
// // // //                 <strong className="w-24">Freelance:</strong> <span>Available</span>
// // // //               </li>
// // // //             </ul>
// // // //           </div>

// // // //           {/* Highlights */}
// // // //           <ul className="mt-4 space-y-2 list-disc list-inside text-sm sm:text-base text-gray-300">
// // // //             <li>✅ Proficient in modern web technologies like HTML, CSS, JavaScript, and React.</li>
// // // //             <li>✅ Experienced in building responsive, user-friendly designs.</li>
// // // //             <li>✅ Passionate about solving real-world problems with innovative solutions.</li>
// // // //           </ul>

// // // //           {/* CTA Button */}
// // // //           <a
// // // //             href="/contact"
// // // //             className="inline-block mt-6 bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 transition-all text-white font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg"
// // // //             role="button"
// // // //           >
// // // //             Contact Me
// // // //           </a>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default About;


import React, { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGlobe,
  FaUser,
  FaGraduationCap,
  FaEnvelope,
  FaBriefcase,
  FaCode,
  FaRocket,
} from "react-icons/fa";
import myImg from "../assets/portfolio/my_image.jpeg";
import workingImg from "../assets/icons/working.png";
import Container3DBackground from '../components/Animated3DBackground'; // Import the container 3D background
import Header from "./Header";

const About = () => {
  const [age, setAge] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const birthDate = new Date("2005-09-26");
    const today = new Date();
    const years = today.getFullYear() - birthDate.getFullYear();
    const hasBirthdayPassed =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
    setAge(hasBirthdayPassed ? years : years - 1);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    setIsVisible(true);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
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

  return (
    <>
      <Header/>
      <ParticleTrail />
      <section
        id="about"
        aria-labelledby="about-title"
        className="relative py-20 min-h-screen text-white overflow-hidden bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950"
      >
        {/* Add 3D Animated Background positioned within about section */}
        <div className="absolute inset-0 z-0">
          <Container3DBackground 
            opacity={0.7}
            particleCount={30}
            lineCount={50}
            animationSpeed={0.6}
            colors={{
              primary: 0x22d3ee,      // Cyan
              secondary: 0x8b5cf6,    // Purple
              accent: 0x3b82f6,       // Blue
              tertiary: 0x06b6d4,     // Light Blue
              quaternary: 0x10b981,   // Green
              quinary: 0xf59e0b       // Orange
            }}
            gradient="transparent"
            mouseInteraction={true}
            className="about-bg"
          />
        </div>

        {/* Enhanced overlay for better content visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 backdrop-blur-sm z-1" />
        
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-20 z-1">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-pulse" 
               style={{
                 backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(34, 211, 238, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(156, 39, 176, 0.1) 0%, transparent 50%)',
                 animation: 'float 6s ease-in-out infinite'
               }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image Section - Enhanced with Hero-style effects */}
          <div className={`flex justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-1000 animate-pulse" />
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={myImg}
                    alt="Picture of Shekh Faisal"
                    className="rounded-xl shadow-2xl w-full max-w-sm object-cover transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
                  />
                  
                  {/* Animated background elements */}
                  <div className="absolute top-4 left-4 w-6 h-6 bg-cyan-400 rounded-full animate-ping opacity-60" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-purple-400 rounded-full animate-pulse opacity-60" />
                  <div className="absolute top-1/2 left-2 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-60" />
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce shadow-lg flex items-center justify-center">
                  <span className="text-white text-sm">💼</span>
                </div>
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse shadow-lg flex items-center justify-center">
                  <FaCode className="text-white text-lg" />
                </div>
                <div className="absolute top-1/2 -right-10 w-8 h-8 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full animate-ping shadow-lg" />
                <div className="absolute bottom-1/4 -left-8 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce shadow-lg flex items-center justify-center">
                  <span className="text-white text-sm">✨</span>
                </div>
                
                {/* Available for Hire Badge - Enhanced */}
                <div className="absolute -top-4 -right-4 group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300" />
                  <div className="relative bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce flex items-center gap-2">
                    <span className="animate-pulse">🟢</span>
                    Available for Hire!
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Section - Enhanced */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Enhanced Title */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                  <img src={workingImg} alt="About Icon" className="w-8 h-8" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 animate-pulse" />
              </div>
              <h2 id="about-title" className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                About Me
              </h2>
            </div>

            {/* Enhanced Description Cards */}
            <div className="relative backdrop-blur-xl bg-white/10 p-8 rounded-3xl border border-white/30 shadow-2xl mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur opacity-30" />
              <p className="relative text-lg lg:text-xl leading-relaxed text-gray-100">
                Hello! I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold animate-gradient">Shekh Faisal</span>, a dedicated and passionate <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold animate-gradient">Web Developer</span> who loves transforming ideas into functional and visually appealing websites.
              </p>
            </div>

            <div className="relative backdrop-blur-xl bg-white/10 p-8 rounded-3xl border border-white/30 shadow-2xl mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 rounded-3xl blur opacity-30" />
              <p className="relative text-lg lg:text-xl leading-relaxed text-gray-100">
                What sets me apart? A blend of creativity and technical expertise that enables me to deliver clean, efficient code while maintaining exceptional user experiences.
              </p>
            </div>

            {/* Enhanced Info Grid */}
            <div className="grid sm:grid-cols-2 gap-6 text-sm sm:text-base text-gray-300">
              <div className="space-y-4">
                {[
                  { icon: FaCalendarAlt, label: "Birthday", value: "26 Sept 2005", color: "from-pink-500 to-purple-600" },
                  { icon: FaPhoneAlt, label: "Phone", value: "+91 9173195287", color: "from-green-500 to-cyan-600", href: "tel:+919173195287" },
                  { icon: FaMapMarkerAlt, label: "City", value: "Ahmedabad, India", color: "from-red-500 to-orange-600" },
                  { icon: FaGlobe, label: "Website", value: "shekhfaisaltech.github.io", color: "from-blue-500 to-indigo-600", href: "https://shekhfaisal2110.github.io/ShekhFaisalTech/" },
                ].map((item, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300" />
                    <div className="relative bg-white/15 backdrop-blur-lg p-4 rounded-lg border border-white/30 hover:border-white/50 transition-all duration-300 hover:bg-white/25 hover:shadow-lg hover:scale-105">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`p-2 flex-shrink-0 rounded-full bg-gradient-to-r ${item.color} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                          <item.icon className="text-white text-sm" />
                        </div>
                        <div className="min-w-0">
                          <strong className="text-white whitespace-nowrap">{item.label}:</strong>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="ml-2 text-cyan-400 hover:text-cyan-300 hover:underline break-words inline-block max-w-full transition-colors duration-300"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <span className="ml-2 break-words inline-block max-w-full">{item.value}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                {[
                  { icon: FaUser, label: "Age", value: age ?? "Loading...", color: "from-cyan-500 to-blue-600" },
                  { icon: FaGraduationCap, label: "Degree", value: "BCA (Pursuing)", color: "from-purple-500 to-pink-600" },
                  { icon: FaEnvelope, label: "Email", value: "shekhfaisal.2110@gmail.com", color: "from-yellow-500 to-orange-600", href: "mailto:shekhfaisal.2110@gmail.com" },
                  { icon: FaBriefcase, label: "Freelance", value: "Available", color: "from-green-500 to-teal-600" },
                ].map((item, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300" />
                    <div className="relative bg-white/15 backdrop-blur-lg p-4 rounded-lg border border-white/30 hover:border-white/50 transition-all duration-300 hover:bg-white/25 hover:shadow-lg hover:scale-105">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`p-2 flex-shrink-0 rounded-full bg-gradient-to-r ${item.color} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                          <item.icon className="text-white text-sm" />
                        </div>
                        <div className="min-w-0">
                          <strong className="text-white whitespace-nowrap">{item.label}:</strong>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="ml-2 text-cyan-400 hover:text-cyan-300 hover:underline break-words inline-block max-w-full transition-colors duration-300"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <span className="ml-2 break-words inline-block max-w-full">{item.value}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Highlights */}
            <div className="space-y-4">
              {[
                "Proficient in modern web technologies like HTML, CSS, JavaScript, and React.",
                "Experienced in building responsive, user-friendly designs.",
                "Passionate about solving real-world problems with innovative solutions.",
              ].map((highlight, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-50 transition duration-300 rounded-lg blur" />
                  <div className="relative bg-white/15 backdrop-blur-lg p-4 rounded-lg border border-white/30 hover:border-white/50 transition-all duration-300 hover:bg-white/25 hover:shadow-lg hover:scale-105">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-gray-200">{highlight}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Button matching Hero style */}
            <div className="flex flex-wrap gap-6 mt-10">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl blur opacity-100 group-hover:opacity-100 transition duration-300 animate-pulse" />
                <a
                  href="#contact"
                  className="relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center gap-3"
                >
                  <FaEnvelope className="text-xl animate-bounce" />
                  Let's Work Together
                </a>
              </div>

              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                <a
                  href="#portfolio"
                  className="relative px-10 py-5 bg-white/15 backdrop-blur-lg border-2 border-white/30 text-white font-bold text-lg rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-white/25 flex items-center gap-3"
                >
                  <FaRocket className="text-xl animate-pulse" />
                  View My Work
                </a>
              </div>
            </div>

            {/* Enhanced Skills Pills matching Hero style */}
            <div className="flex flex-wrap gap-3 mt-8">
              {['Problem Solving', 'Creative Design', 'Clean Code', 'User Experience'].map((skill, idx) => (
                <div key={idx} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300" />
                  <span className="relative px-6 py-3 bg-white/15 backdrop-blur-lg rounded-full text-sm font-semibold border border-white/30 transition-all duration-300 hover:bg-white/25 hover:shadow-lg hover:scale-105">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator matching Hero */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="relative">
            <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center">
              <div className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mt-2 animate-pulse" />
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 animate-pulse" />
          </div>
        </div>

        {/* Enhanced Animations matching Hero */}
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
          
          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
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

          /* Professional Light Color Hover Effects Enhanced for 3D */
          .group:hover {
            filter: brightness(1.1);
            transform: translateZ(10px);
          }
          
          .group:hover .relative.bg-white\/15,
          .group:hover .relative.bg-white\/10 {
            background: rgba(255, 255, 255, 0.25);
            border-color: rgba(255, 255, 255, 0.5);
            box-shadow: 0 12px 30px rgba(34, 211, 238, 0.3);
          }

          /* Enhanced Icon Animations for 3D Environment */
          .group:hover .animate-pulse,
          .group:hover .animate-bounce {
            animation-duration: 0.5s;
            transform: scale(1.1);
          }

          /* 3D Background Canvas Styling for About */
          .about-bg canvas {
            filter: blur(0.5px);
            opacity: 0.7;
          }
        `}</style>
      </section>
    </>
  );
};

export default About;