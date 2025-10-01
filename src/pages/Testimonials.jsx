import React, { useState, useEffect } from 'react';
import testimonials from '../data/testimonials';
import Header from './Header';
import TextScroll from "../ui/text-scroll";
import CardCarousel from '../ui/CardCarousel'; 

const Testimonials = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isLoadingPage, setIsLoadingPage] = useState(true); // <-- New page loader

  // Simulate page load for 2.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingPage(false);
    }, 1500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

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

  // Skeleton Loader UI
  const SkeletonLoader = () => (
    <section
      id="testimonials"
      className="relative py-20 min-h-screen text-white overflow-hidden bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Skeleton */}
        <div className="text-center mb-16">
          <div className="h-14 w-96 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded animate-pulse mx-auto mb-8"></div>
        </div>

        {/* Carousel Placeholder Skeleton */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl h-80 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 animate-pulse flex items-center justify-center">
            <div className="text-gray-400">Loading testimonials...</div>
          </div>
        </div>
      </div>
    </section>
  );

  if (isLoadingPage) {
    return (
      <>
        <Header />
        <SkeletonLoader />
      </>
    );
  }

  return (
    <>
      <Header />
      <ParticleTrail />
      <section
        id="testimonials"
        aria-labelledby="testimonial-title"
        className="relative py-20 min-h-screen text-white overflow-hidden bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Enhanced Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 animate-pulse" />
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                <TextScroll
                  className="font-display text-center text-4xl font-semibold tracking-tighter text-white md:text-7xl md:leading-[5rem]"
                  text="💬 ⭐ What Clients Say 💬 📝 👍"
                  default_velocity={5}
                />
              </h2>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <CardCarousel images={testimonials} autoplayDelay={2000} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
