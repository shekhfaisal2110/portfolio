import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Testimonials from './pages/Testimonials';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Header from './pages/Header';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
