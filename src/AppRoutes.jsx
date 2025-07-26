// AppRoutes.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './pages/Header';
import Hero from './pages/Hero';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Testimonials from './pages/Testimonials';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Admin from './admin/AdminSidebar';
import NotFound from './pages/NotFound';

const AppRoutes = () => {
  const location = useLocation();
  const isAdminPage = location.pathname === '/admin';

  return (
    <div className="h-screen overflow-y-scroll">
      {!isAdminPage && <Header />}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isAdminPage && <Footer />}
    </div>
  );
};

export default AppRoutes;
