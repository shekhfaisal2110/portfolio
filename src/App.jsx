// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './pages/Header';
// import Hero from './pages/Hero';
// import About from './pages/About';
// import Services from './pages/Services';
// import Portfolio from './pages/Portfolio';
// import Testimonials from './pages/Testimonials';
// import Resume from './pages/Resume';
// import Contact from './pages/Contact';
// import Footer from './pages/Footer';
// import AdminUpload from './admin/AdminUpload';
// import NotFound from './pages/NotFound'; // ✅ Import 404 component

// const App = () => {
//   return (
//     <Router>
//       <div className="h-screen overflow-y-scroll">
//         <Header />
//         <main className="min-h-screen">
//           <Routes>
//             <Route path="/" element={<Hero />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/portfolio" element={<Portfolio />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/testimonials" element={<Testimonials />} />
//             <Route path="/resume" element={<Resume />} />
//             <Route path="/admin" element={<AdminUpload />} />

//             <Route path="*" element={<NotFound />} /> {/* ✅ Catch-all route */}
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;




import React, { useState } from 'react'; // Added useState import
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Testimonials from './pages/Testimonials';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Welcome from './components/Welcome';
// import AdminUpload from './admin/AdminUpload';

const App = () => {
  const [showMainContent, setShowMainContent] = useState(false);

  const handleWelcomeComplete = () => {
    setShowMainContent(true);
  };

  return (
    <>
      {/* Welcome Screen - Shows over everything */}
      <Welcome onComplete={handleWelcomeComplete} />
      
      {/* Main App - Only visible after welcome completes */}
      <div className={`transition-opacity duration-1000 ${showMainContent ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <Router>
          <div className="h-screen overflow-y-scroll">
            {/* <Header /> */}
            <main className="min-h-screen">
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/resume" element={<Resume />} />
                {/* <Route path="/admin" element={<AdminUpload />} /> */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            {/* <Footer /> */}
          </div>
        </Router>
      </div>
    </>
  );
};

export default App;