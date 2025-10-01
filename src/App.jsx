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
// import NotFound from './pages/NotFound'; 

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
//             <Route path="/Footer" element={<Footer />} />
//             <Route path="*" element={<NotFound />} /> 
//           </Routes>
//         </main>
//       </div>
       
//     </Router>
    
//   );
// };

// export default App;





import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import NotFound from './pages/NotFound';
// import Loading from './components/Loading'; // Import the Loading component

// Lazy-load page components for real loading states (optional but recommended)
const Hero = React.lazy(() => import('./pages/Hero'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const Testimonials = React.lazy(() => import('./pages/Testimonials'));
const Resume = React.lazy(() => import('./pages/Resume'));
const Contact = React.lazy(() => import('./pages/Contact'));

const App = () => {
  return (
    <Router>
      <div className="h-screen overflow-y-scroll flex flex-col">
        <Header />
        <main className="flex-grow">
          
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/resume" element={<Resume />} />
              {/* Remove /Footer route — Footer is not a page */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          
        </main>
        {/* <Footer />  */}
      </div>
    </Router>
  );
};

export default App;
