import React, { useState, useEffect } from 'react';
import testimonials from '../data/testimonials';
import Header from './Header';
import TextScroll from "../ui/text-scroll";
import CardCarousel from '../ui/CardCarousel'; 

const Testimonials = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    setIsVisible(true);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Enhanced ParticleTrail component
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
      <section id="testimonials"
      aria-labelledby="testimonial-title"
      className="relative py-20 min-h-screen text-white overflow-hidden bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950"
      >

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Enhanced Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 animate-pulse" />
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
               <TextScroll
                 className="font-display text-center text-4xl font-semibold tracking-tighter text-black dark:text-white md:text-7xl md:leading-[5rem]"
                 text="💬 ⭐ What Clients Say 💬 📝 👍"
                 default_velocity={5}
               />
              </h2>
            </div>   
          </div>

          <div className="items-center">
            <div>
              <CardCarousel images={testimonials} autoplayDelay={2000} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
