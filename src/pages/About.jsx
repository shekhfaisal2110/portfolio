import React, { useEffect, useState } from "react";
import {FaCalendarAlt,FaPhoneAlt,FaMapMarkerAlt,FaGlobe,FaUser,FaGraduationCap,FaEnvelope,FaBriefcase,FaCode,FaRocket,} from "react-icons/fa";
import myImg from "../assets/portfolio/my_image.jpeg";
import Header from "./Header";
import TextScroll from "../ui/text-scroll";
import MaskedDiv from "../ui/MaskedDiv";

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

  // ParticleTrail component
  const ParticleTrail = () => (
    <div
      className="fixed w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full pointer-events-none z-50 mix-blend-screen transition-all duration-150 ease-out"
      style={{
        left: mousePosition.x - 8,
        top: mousePosition.y - 8,
        boxShadow: "0 0 20px rgba(34, 211, 238, 0.8), 0 0 40px rgba(34, 211, 238, 0.4)",
        filter: "blur(1px)",
      }}
    />
  );

  return (
    <>
      <Header />
      <ParticleTrail />
      <section
        id="about"
        aria-labelledby="about-title"
       className="relative min-h-screen py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white overflow-hidden"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 backdrop-blur-sm z-1" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Image Section */}
          <div
            className={`flex justify-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative group max-w-xs sm:max-w-sm">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-1000 animate-pulse" />
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/30 shadow-2xl">
  
              <MaskedDiv maskType="type-1" size={0.45} className="my-4">
                <img
                  src={myImg} 
                  alt="Masked content"
                  className="cursor-pointer transition-all duration-300 hover:scale-105 rounded"
                  loading="lazy"
                />
              </MaskedDiv>


                {/* Floating decor */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce shadow-lg flex items-center justify-center">
                  <span className="text-white text-sm select-none">💼</span>
                </div>
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse shadow-lg flex items-center justify-center">
                  <FaCode className="text-white text-lg" />
                </div>
                <div className="absolute top-1/2 -right-10 w-8 h-8 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full animate-ping shadow-lg" />
                <div className="absolute bottom-1/4 -left-8 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce shadow-lg flex items-center justify-center">
                  <span className="text-white text-sm select-none">✨</span>
                </div>

                {/* Hire badge */}
                <div className="absolute -top-4 -right-4 group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300" />
                  <div className="relative bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce flex items-center gap-2 select-none">
                    <span className="animate-pulse">🟢</span>
                    Available for Hire!
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Section */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Title */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 animate-pulse" />
              </div>
              <h2
                id="about-title"
                className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient"
              >
                <TextScroll
                  className="font-display text-center text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight"
                  text="💼 🧑‍💼 About Me 🧑‍💼 💼"
                  default_velocity={5}
                />
              </h2>
            </div>

            {/* Description Cards */}
            <div className="relative backdrop-blur-xl bg-white/10 p-6 rounded-3xl border border-white/30 shadow-2xl mb-6 sm:mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur opacity-30" />
              <p className="relative text-base sm:text-lg leading-relaxed text-gray-100">
                Hello! I'm{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold animate-gradient">
                  Shekh Faisal
                </span>
                , a dedicated and passionate{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold animate-gradient">
                  Web Developer
                </span>{" "}
                who loves transforming ideas into functional and visually appealing websites.
              </p>
            </div>

            <div className="relative backdrop-blur-xl bg-white/10 p-6 rounded-3xl border border-white/30 shadow-2xl mb-6 sm:mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 rounded-3xl blur opacity-30" />
              <p className="relative text-base sm:text-lg leading-relaxed text-gray-100">
                What sets me apart? A blend of creativity and technical expertise that enables me to deliver clean, efficient code while maintaining exceptional user experiences.
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base text-gray-300">
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
                        <div
                          className={`p-2 flex-shrink-0 rounded-full bg-gradient-to-r ${item.color} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                        >
                          <item.icon className="text-white text-sm" />
                        </div>
                        <div className="min-w-0">
                          <strong className="text-white whitespace-nowrap">{item.label}:</strong>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="ml-2 text-cyan-400 hover:text-cyan-300 hover:underline break-words inline-block max-w-full transition-colors duration-300"
                              target="_blank"
                              rel="noopener noreferrer"
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
                        <div
                          className={`p-2 flex-shrink-0 rounded-full bg-gradient-to-r ${item.color} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                        >
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

            {/* Highlights */}
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
                        <span className="text-white text-sm select-none">✓</span>
                      </div>
                      <span className="text-gray-200">{highlight}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6 mt-8 sm:mt-10 justify-center sm:justify-start">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl blur opacity-100 group-hover:opacity-100 transition duration-300 animate-pulse" />
                <a
                  href="/contact"
                  className="relative px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center gap-3 select-none"
                  aria-label="Contact me to work together"
                >
                  <FaEnvelope className="text-xl animate-bounce" />
                  Let's Work Together
                </a>
              </div>

              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                <a
                  href="/portfolio"
                  className="relative px-8 sm:px-10 py-4 sm:py-5 bg-white/15 backdrop-blur-lg border-2 border-white/30 text-white font-bold text-lg rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-white/25 flex items-center gap-3 select-none"
                  aria-label="View my portfolio work"
                >
                  <FaRocket className="text-xl animate-pulse" />
                  View My Work
                </a>
              </div>
            </div>

            {/* Skills Pills */}
            <div className="flex flex-wrap gap-3 mt-6 sm:mt-8 justify-center sm:justify-start">
              {["Problem Solving", "Creative Design", "Clean Code", "User Experience"].map((skill, idx) => (
                <div key={idx} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300" />
                  <span className="relative px-6 py-3 bg-white/15 backdrop-blur-lg rounded-full text-sm font-semibold border border-white/30 transition-all duration-300 hover:bg-white/25 hover:shadow-lg hover:scale-105 select-none">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce pointer-events-none select-none">
          <div className="relative">
            <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center">
              <div className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mt-2 animate-pulse" />
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 animate-pulse" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
