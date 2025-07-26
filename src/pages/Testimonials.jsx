// // // import React, { useState, useEffect } from 'react';
// // // import { FaStar } from 'react-icons/fa';
// // // import { ToastContainer, toast } from 'react-toastify';
// // // import 'react-toastify/dist/ReactToastify.css';
// // // import customerreviewImg from '../assets/icons/customer-review (1).png';
// // // import testimonials from '../data/testimonials'; // Each should have: id, name, image, rating, short, full, category

// // // const Testimonials = () => {
// // //   const [currentIndex, setCurrentIndex] = useState(0);
// // //   const [buttonClicked, setButtonClicked] = useState(false);
// // //   const [activeModal, setActiveModal] = useState(null);
// // //   const [selectedCategory, setSelectedCategory] = useState('All');
// // //   const [isLoading, setIsLoading] = useState(false);

// // //   const filteredTestimonials =
// // //     selectedCategory === 'All'
// // //       ? testimonials
// // //       : testimonials.filter((t) => t.category === selectedCategory);

// // //   useEffect(() => {
// // //     const autoSlide = setInterval(() => {
// // //       setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
// // //     }, 5000);
// // //     return () => clearInterval(autoSlide);
// // //   }, [filteredTestimonials]);

// // //   const renderStars = (rating) =>
// // //     [...Array(5)].map((_, i) => (
// // //       <FaStar
// // //         key={i}
// // //         className={`text-xl transition ${i < rating ? 'text-yellow-400' : 'text-gray-500'}`}
// // //       />
// // //     ));

// // //   const handleReviewClick = () => {
// // //     setButtonClicked(true);
// // //     setIsLoading(true);
// // //     toast.success('Redirecting to review form...', {
// // //       position: 'top-center',
// // //       autoClose: 3000,
// // //     });

// // //     setTimeout(() => {
// // //       setButtonClicked(false);
// // //       setIsLoading(false);
// // //       window.open(
// // //         'https://docs.google.com/forms/d/e/1FAIpQLSdbwPtO3eUf3p-isnPOM1gLc5JTF8aoq99GRN_NGTG3gKhNkA/viewform',
// // //         '_blank',
// // //         'noopener,noreferrer'
// // //       );
// // //     }, 800);
// // //   };

// // //   return (
// // //     <section
// // //       id="testimonials"
// // //       className="min-h-screen py-20 bg-gradient-to-br from-gray-950 to-gray-900 text-white flex items-center justify-center"
// // //     >
// // //       <ToastContainer />
// // //       <div className="max-w-6xl w-full px-6 grid lg:grid-cols-2 gap-10">
// // //         {/* Left: Testimonials Carousel */}
// // //         <div>
// // //           <h2 className="text-4xl font-bold text-center lg:text-left mb-3 lg:ml-20 flex justify-center lg:justify-start items-center gap-3">
// // //             <img src={customerreviewImg} alt="Testimonial Icon" className="w-9 h-9" />
// // //             What Clients Say
// // //           </h2>
// // //           <p className="text-center lg:text-left text-gray-400 mb-6 text-lg lg:ml-20">
// // //             Real stories from real clients who trusted my work.
// // //           </p>

// // //           {/* Carousel */}
// // //           <div className="relative w-full h-[420px] sm:h-[400px] ">
// // //             {filteredTestimonials.map((testimonial, index) => (
// // //               <div
// // //                 key={testimonial.id}
// // //                 className={`absolute transition-opacity duration-1000 ease-in-out w-full   ${
// // //                   index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
// // //                 }`}
// // //               >
// // //                 <div className="bg-[#1f1f1f] p-8 rounded-2xl text-center shadow-xl max-w-xl mx-auto mt-10 border border-cyan-700 rounded-2xl p-4 shadow-lg">
// // //                   <div className="relative w-24 h-24 mx-auto -mt-20 mb-4">
// // //                     <img
// // //                       src={testimonial.image}
// // //                       alt={testimonial.name}
// // //                       className="w-full h-full rounded-full object-cover border-4 border-cyan-400 shadow-md"
// // //                     />
// // //                     <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-pulse"></div>
// // //                   </div>
// // //                   <h3 className="text-xl font-bold text-cyan-400 mb-2">{testimonial.name}</h3>
// // //                   <div className="flex justify-center mb-3">{renderStars(testimonial.rating)}</div>
// // //                   <p className="italic text-gray-300 mb-4 px-2">“{testimonial.short}”</p>
// // //                   <button
// // //                     onClick={() => setActiveModal(testimonial)}
// // //                     className="mt-2 px-6 py-2.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-white rounded-full font-semibold shadow hover:brightness-110 transition"
// // //                     aria-label={`Read full review by ${testimonial.name}`}
// // //                   >
// // //                     Read Full Review
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           {/* Modal with animation */}
// // //           {activeModal && (
// // //   <div
// // //     className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
// // //     role="dialog"
// // //     aria-modal="true"
// // //     aria-labelledby={`modal-title-${activeModal.id}`}
// // //   >
// // //     {/* Gradient Border Wrapper */}
// // //     <div className="p-[3px] rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-2xl animate-fadeIn">
// // //       <div className="bg-[#1f1f1f] text-white p-6 sm:p-8 rounded-[15px] w-[90vw] max-w-lg relative animate-slideUp">
// // //         {/* Close Button */}
// // //         <button
// // //           onClick={() => setActiveModal(null)}
// // //           className="absolute top-3 right-4 text-2xl text-white hover:text-red-500 transition"
// // //           aria-label="Close testimonial modal"
// // //         >
// // //           &times;
// // //         </button>

// // //         {/* Image */}
// // //         <img
// // //           src={activeModal.image}
// // //           alt={activeModal.name}
// // //           className="w-24 h-24 mx-auto -mt-16 mb-4 rounded-full border-4 border-cyan-400 shadow-lg"
// // //         />

// // //         {/* Centered Name */}
// // //         <h3
// // //           id={`modal-title-${activeModal.id}`}
// // //           className="text-2xl font-bold text-cyan-400 text-center mb-4"
// // //         >
// // //           {activeModal.name}
// // //         </h3>
// // //         <div className="flex justify-center mb-3">{activeModal && renderStars(activeModal.rating)}</div>
// // //         {/* Full Review Text */}
// // //         <p className="text-gray-300 text-center">{activeModal.full}</p>
// // //       </div>
// // //     </div>
// // //   </div>
// // // )}


// // //           {/* Dots */}
// // //           <div className="mt-6 flex justify-center space-x-3">
// // //             {filteredTestimonials.map((_, i) => (
// // //               <button
// // //                 key={i}
// // //                 onClick={() => setCurrentIndex(i)}
// // //                 aria-label={`View testimonial ${i + 1}`}
// // //                 className={`w-3 h-3 rounded-full ${
// // //                   i === currentIndex ? 'bg-cyan-500 scale-125' : 'bg-gray-600'
// // //                 } transition transform duration-300`}
// // //               ></button>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Right: Submit Button with Spinner */}
// // //         <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-cyan-700 rounded-2xl p-8 shadow-2xl flex flex-col justify-center items-center text-center transition hover:scale-[1.02] duration-300">
// // //           <div className="relative w-20 h-20 mb-4">
// // //             <div className="absolute inset-0 bg-cyan-400 opacity-30 rounded-full blur-xl animate-ping"></div>
// // //             <div className="relative z-10 w-full h-full flex items-center justify-center bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500 text-white text-3xl rounded-full shadow-lg">
// // //               💬
// // //             </div>
// // //           </div>
// // //           <h3 className="text-3xl font-extrabold text-cyan-400 mb-3">Share Your Review</h3>
// // //           <p className="text-gray-400 mb-6 leading-relaxed max-w-xs">
// // //             Let us and others know about your experience. We’d love to hear your thoughts!
// // //           </p>

// // //           <button
// // //             onClick={handleReviewClick}
// // //             disabled={isLoading}
// // //             className={`inline-flex items-center justify-center gap-2 px-7 py-3 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:brightness-110 active:scale-95 transition-all duration-300 ${
// // //               buttonClicked ? 'animate-pingOnce' : ''
// // //             }`}
// // //           >
// // //             {isLoading ? (
// // //               <>
// // //                 <svg
// // //                   className="animate-spin h-5 w-5 text-white"
// // //                   xmlns="http://www.w3.org/2000/svg"
// // //                   fill="none"
// // //                   viewBox="0 0 24 24"
// // //                 >
// // //                   <circle
// // //                     className="opacity-25"
// // //                     cx="12"
// // //                     cy="12"
// // //                     r="10"
// // //                     stroke="currentColor"
// // //                     strokeWidth="4"
// // //                   ></circle>
// // //                   <path
// // //                     className="opacity-75"
// // //                     fill="currentColor"
// // //                     d="M4 12a8 8 0 018-8v8z"
// // //                   ></path>
// // //                 </svg>
// // //                 Redirecting...
// // //               </>
// // //             ) : (
// // //               'Submit Your Review'
// // //             )}
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Testimonials;

import React, { useState, useEffect } from 'react';
import { FaStar, FaQuoteLeft, FaRocket, FaHeart, FaCode, FaTimes, FaCamera, FaUser, FaCheck } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import customerreviewImg from '../assets/icons/customer-review (1).png';
import testimonials from '../data/testimonials';
import Container3DBackground  from "../components/Animated3DBackground"
import Header from './Header';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [imagePreview, setImagePreview] = useState(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    image: null,
    rating: 0,
    shortTestimonial: '',
    longTestimonial: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const filteredTestimonials =
    selectedCategory === 'All'
      ? testimonials
      : testimonials.filter((t) => t.category === selectedCategory);

  const totalReviews = filteredTestimonials.length;
  const averageRating =
    filteredTestimonials.reduce((acc, t) => acc + t.rating, 0) /
    (totalReviews || 1);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
    }, 5000);
    return () => clearInterval(autoSlide);
  }, [filteredTestimonials]);

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

  const renderStars = (rating) =>
    [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={`text-xl transition-all duration-300 transform hover:scale-110 ${
          i < rating ? 'text-yellow-400 drop-shadow-lg animate-pulse' : 'text-gray-500'
        }`}
      />
    ));

  const handleReviewClick = () => {
    setButtonClicked(true);
    setShowForm(true);
    setFormStep(1);
    // Reset form data
    setFormData({
      name: '',
      email: '',
      image: null,
      rating: 0,
      shortTestimonial: '',
      longTestimonial: ''
    });
    setImagePreview(null);
    setFormErrors({});
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5000000) { // 5MB limit
        toast.error('Image size should be less than 5MB');
        return;
      }
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateStep = (step) => {
    const errors = {};
    
    if (step === 1) {
      if (!formData.name.trim()) {
        errors.name = 'Name is required';
      }
      if (!formData.email.trim()) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Email is invalid';
      }
    } else if (step === 2) {
      if (formData.rating === 0) {
        errors.rating = 'Please select a rating';
      }
    } else if (step === 3) {
      if (!formData.shortTestimonial.trim()) {
        errors.shortTestimonial = 'Short testimonial is required';
      } else if (formData.shortTestimonial.length < 20) {
        errors.shortTestimonial = 'Minimum 20 characters required';
      }
      if (!formData.longTestimonial.trim()) {
        errors.longTestimonial = 'Detailed testimonial is required';
      } else if (formData.longTestimonial.length < 50) {
        errors.longTestimonial = 'Minimum 50 characters required';
      }
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(formStep)) {
      setFormStep(formStep + 1);
    }
  };

  const handlePrevStep = () => {
    setFormStep(formStep - 1);
  };

  const handleSubmitForm = async () => {
    if (validateStep(3)) {
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        toast.success('Thank you for your review! We appreciate your feedback.', {
          position: 'top-center',
          autoClose: 3000,
        });
        setIsLoading(false);
        setShowForm(false);
        setButtonClicked(false);
        
        // Here you would typically send the data to your backend
        console.log('Form submitted:', formData);
      }, 2000);
    }
  };

  const renderRatingStars = () => (
    <div className="flex justify-center gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => setFormData({ ...formData, rating: star })}
          className="group relative"
        >
          <FaStar
            className={`text-4xl transition-all duration-300 transform hover:scale-125 cursor-pointer ${
              star <= formData.rating 
                ? 'text-yellow-400 drop-shadow-lg' 
                : 'text-gray-500 hover:text-yellow-300'
            }`}
          />
          {star <= formData.rating && (
            <div className="absolute inset-0 animate-ping">
              <FaStar className="text-4xl text-yellow-400 opacity-30" />
            </div>
          )}
        </button>
      ))}
    </div>
  );

  return (
    <>
      <Header/>
      <ParticleTrail />
      <section id="testimonials"
      aria-labelledby="testimonial-title"
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

        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-pulse" 
               style={{
                 backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(34, 211, 238, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(156, 39, 176, 0.1) 0%, transparent 50%)',
                 animation: 'float 6s ease-in-out infinite'
               }} />
        </div>

        <ToastContainer />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Enhanced Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                  <img 
                    src={customerreviewImg} 
                    alt="Testimonial Icon" 
                    className="w-8 h-8"
                  />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 animate-pulse" />
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                What Clients Say
              </h2>
            </div>
            
            <div className="relative backdrop-blur-lg bg-white/10 p-8 rounded-3xl border border-white/20 shadow-2xl max-w-3xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur opacity-20" />
              <p className="relative text-xl lg:text-2xl leading-relaxed text-gray-200 mb-4">
                Real stories from real clients who trusted my work and achieved amazing results.
              </p>
              
              {/* Enhanced Stats */}
              <div className="flex justify-center gap-8 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {totalReviews}
                  </div>
                  <div className="text-sm text-gray-400">Total Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    {averageRating.toFixed(1)}★
                  </div>
                  <div className="text-sm text-gray-400">Average Rating</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Section - Testimonial Carousel */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000" />
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                  
                  {/* Floating decorative elements */}
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce shadow-lg flex items-center justify-center">
                    <FaQuoteLeft className="text-white text-sm" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse shadow-lg flex items-center justify-center">
                    <FaCode className="text-white text-lg" />
                  </div>
                  <div className="absolute top-1/2 -right-10 w-8 h-8 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full animate-ping shadow-lg" />
                  
                  {/* Carousel */}
                  <div className="relative w-full h-[400px]">
                    {filteredTestimonials.map((testimonial, index) => (
                      <div
                        key={testimonial.id}
                        className={`absolute transition-all duration-1000 ease-in-out w-full transform ${
                          index === currentIndex
                            ? 'opacity-100 z-10 translate-y-0 scale-100'
                            : 'opacity-0 z-0 translate-y-8 scale-95'
                        }`}
                      >
                        <div className="text-center">
                          {/* Profile Image */}
                          <div className="relative w-24 h-24 mx-auto mb-6 group">
                            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300 animate-pulse" />
                            <div className="relative w-full h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-full h-full rounded-full object-cover"
                              />
                            </div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">✓</span>
                            </div>
                          </div>

                          {/* Content */}
                          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3">
                            {testimonial.name}
                          </h3>
                          
                          <div className="flex justify-center mb-4 gap-1">
                            {renderStars(testimonial.rating)}
                          </div>
                          
                          <div className="relative backdrop-blur-lg bg-white/10 p-6 rounded-2xl border border-white/20 shadow-lg mb-6">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 rounded-2xl blur opacity-50" />
                            <p className="relative italic text-gray-200 font-light text-lg leading-relaxed">
                              "{testimonial.short}"
                            </p>
                          </div>
                          
                          <div className="group relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                            <button
                              onClick={() => setActiveModal(testimonial)}
                              className="relative px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                              aria-label={`Read full review by ${testimonial.name}`}
                            >
                              Read Full Review
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Dots Navigation */}
                  <div className="flex justify-center space-x-3 mt-8">
                    {filteredTestimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        aria-label={`View testimonial ${i + 1}`}
                        className={`relative w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                          i === currentIndex
                            ? 'bg-gradient-to-r from-cyan-400 to-blue-500 scale-125 shadow-lg shadow-cyan-500/50'
                            : 'bg-gray-600 hover:bg-gray-500'
                        }`}
                      >
                        {i === currentIndex && (
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse opacity-50 blur-sm"></div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Submit Review */}
            <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000" />
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl text-center">
                  
                  {/* Floating decorative elements */}
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce shadow-lg flex items-center justify-center">
                    <span className="text-white text-sm">💬</span>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse shadow-lg flex items-center justify-center">
                    <FaRocket className="text-white text-lg" />
                  </div>
                  <div className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping shadow-lg" />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="relative w-24 h-24 mx-auto mb-8">
                      <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur opacity-50 animate-pulse" />
                      <div className="relative w-full h-full bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 rounded-full flex items-center justify-center shadow-2xl">
                        <span className="text-4xl">✨</span>
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent mb-6">
                      Share Your Review
                    </h3>
                    
                    <div className="relative backdrop-blur-lg bg-white/10 p-6 rounded-2xl border border-white/20 shadow-lg mb-8">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 via-pink-500/20 to-cyan-400/20 rounded-2xl blur opacity-50" />
                      <p className="relative text-gray-200 leading-relaxed font-light text-lg">
                        Let us and others know about your experience. We'd love to hear your thoughts and help others discover quality work!
                      </p>
                    </div>

                    {/* Submit Button */}
                    <div className="group relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-300 animate-pulse" />
                      <button
                        onClick={handleReviewClick}
                        disabled={isLoading}
                        className={`relative w-full px-8 py-5 bg-gradient-to-r from-green-500 via-blue-600 to-purple-700 text-white font-bold text-lg rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-3 ${
                          buttonClicked ? 'animate-pingOnce' : ''
                        }`}
                      >
                        <FaHeart className="text-xl animate-pulse" />
                        Submit Your Review
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Modal */}
        {activeModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`modal-title-${activeModal.id}`}
          >
            <div className="relative bg-gray-950/95 backdrop-blur-xl border border-white/20 rounded-3xl max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur opacity-50" />
              
              <div className="relative p-8">
                <button
                  onClick={() => setActiveModal(null)}
                  className="absolute top-6 right-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:text-red-400 transition-all duration-300 hover:scale-110 hover:rotate-90"
                  aria-label="Close testimonial modal"
                >
                  <FaTimes />
                </button>
                
                <div className="text-center">
                  {/* Modal Profile */}
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-50 animate-pulse" />
                    <div className="relative w-full h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1">
                      <img
                        src={activeModal.image}
                        alt={activeModal.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>

                  <h3
                    id={`modal-title-${activeModal.id}`}
                    className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4"
                  >
                    {activeModal.name}
                  </h3>
                  
                  <div className="flex justify-center mb-6 gap-1">
                    {renderStars(activeModal.rating)}
                  </div>
                  
                  <div className="relative backdrop-blur-lg bg-white/10 p-6 rounded-2xl border border-white/20 shadow-lg">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 rounded-2xl blur opacity-50" />
                    <p className="relative text-gray-200 leading-relaxed font-light text-lg">
                      "{activeModal.full}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Professional Review Form Modal */}
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
            <div className="relative bg-gray-950/95 backdrop-blur-xl border border-white/20 rounded-3xl max-w-3xl w-full shadow-2xl max-h-[90vh] overflow-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur opacity-50" />
              
              <div className="relative p-8">
                {/* Close Button */}
                <button
                  onClick={() => {
                    setShowForm(false);
                    setButtonClicked(false);
                  }}
                  className="absolute top-6 right-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:text-red-400 transition-all duration-300 hover:scale-110 hover:rotate-90 z-10"
                  aria-label="Close form"
                >
                  <FaTimes />
                </button>

                {/* Form Header */}
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                    Share Your Experience
                  </h3>
                  <p className="text-gray-300">Step {formStep} of 3</p>
                  
                  {/* Progress Bar */}
                  <div className="mt-4 flex justify-center gap-2">
                    {[1, 2, 3].map((step) => (
                      <div
                        key={step}
                        className={`h-2 w-20 rounded-full transition-all duration-300 ${
                          step <= formStep
                            ? 'bg-gradient-to-r from-cyan-400 to-blue-500'
                            : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Form Steps */}
                <form className="space-y-6">
                  {/* Step 1: Basic Info */}
                  {formStep === 1 && (
                    <div className="space-y-6 animate-fadeIn">
                      <div className="text-center mb-8">
                        <div className="relative w-32 h-32 mx-auto mb-4">
                          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-50 animate-pulse" />
                          <div className="relative w-full h-full rounded-full bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center overflow-hidden">
                            {imagePreview ? (
                              <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-full" />
                            ) : (
                              <FaCamera className="text-gray-500 text-3xl" />
                            )}
                          </div>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                            id="image-upload"
                          />
                          <label
                            htmlFor="image-upload"
                            className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 shadow-lg"
                          >
                            <FaCamera className="text-white text-sm" />
                          </label>
                        </div>
                        <p className="text-sm text-gray-400">Upload your photo (optional)</p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Your Name *
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                              <FaUser className="text-gray-400" />
                            </div>
                            <input
                              type="text"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className={`w-full pl-12 pr-4 py-3 bg-white/10 border ${
                                formErrors.name ? 'border-red-500' : 'border-white/30'
                              } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300`}
                              placeholder="John Doe"
                            />
                          </div>
                          {formErrors.name && (
                            <p className="mt-2 text-sm text-red-400">{formErrors.name}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Your Email *
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                              {/* <FaEnvelope className="text-gray-400" /> */}
                            </div>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className={`w-full pl-12 pr-4 py-3 bg-white/10 border ${
                                formErrors.email ? 'border-red-500' : 'border-white/30'
                              } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300`}
                              placeholder="john@example.com"
                            />
                          </div>
                          {formErrors.email && (
                            <p className="mt-2 text-sm text-red-400">{formErrors.email}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Rating */}
                  {formStep === 2 && (
                    <div className="space-y-6 animate-fadeIn">
                      <div className="text-center">
                        <h4 className="text-2xl font-semibold text-white mb-6">
                          How would you rate your experience?
                        </h4>
                        
                        <div className="mb-8">
                          {renderRatingStars()}
                        </div>
                        
                        {formErrors.rating && (
                          <p className="text-sm text-red-400 mb-4">{formErrors.rating}</p>
                        )}
                        
                        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
                          <p className="text-gray-300 text-lg">
                            {formData.rating === 0 && 'Click on the stars to rate'}
                            {formData.rating === 1 && 'Poor - Not satisfied'}
                            {formData.rating === 2 && 'Fair - Could be better'}
                            {formData.rating === 3 && 'Good - Met expectations'}
                            {formData.rating === 4 && 'Very Good - Exceeded expectations'}
                            {formData.rating === 5 && 'Excellent - Outstanding experience!'}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Testimonials */}
                  {formStep === 3 && (
                    <div className="space-y-6 animate-fadeIn">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Short Testimonial * (min 20 characters)
                        </label>
                        <textarea
                          value={formData.shortTestimonial}
                          onChange={(e) => setFormData({ ...formData, shortTestimonial: e.target.value })}
                          rows={3}
                          className={`w-full px-4 py-3 bg-white/10 border ${
                            formErrors.shortTestimonial ? 'border-red-500' : 'border-white/30'
                          } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 resize-none`}
                          placeholder="A brief summary of your experience..."
                        />
                        <div className="mt-1 text-right">
                          <span className={`text-sm ${formData.shortTestimonial.length < 20 ? 'text-red-400' : 'text-gray-400'}`}>
                            {formData.shortTestimonial.length}/20
                          </span>
                        </div>
                        {formErrors.shortTestimonial && (
                          <p className="mt-2 text-sm text-red-400">{formErrors.shortTestimonial}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Detailed Testimonial * (min 50 characters)
                        </label>
                        <textarea
                          value={formData.longTestimonial}
                          onChange={(e) => setFormData({ ...formData, longTestimonial: e.target.value })}
                          rows={6}
                          className={`w-full px-4 py-3 bg-white/10 border ${
                            formErrors.longTestimonial ? 'border-red-500' : 'border-white/30'
                          } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 resize-none`}
                          placeholder="Share more details about your experience..."
                        />
                        <div className="mt-1 text-right">
                          <span className={`text-sm ${formData.longTestimonial.length < 50 ? 'text-red-400' : 'text-gray-400'}`}>
                            {formData.longTestimonial.length}/50
                          </span>
                        </div>
                        {formErrors.longTestimonial && (
                          <p className="mt-2 text-sm text-red-400">{formErrors.longTestimonial}</p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Form Navigation */}
                  <div className="flex justify-between gap-4 pt-6">
                    {formStep > 1 && (
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="px-6 py-3 bg-white/10 border border-white/30 rounded-xl text-white font-medium hover:bg-white/20 transition-all duration-300"
                      >
                        Previous
                      </button>
                    )}
                    
                    {formStep < 3 ? (
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className={`${formStep === 1 ? 'w-full' : 'flex-1'} px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-medium hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105`}
                      >
                        Next
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleSubmitForm}
                        disabled={isLoading}
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white font-medium hover:from-green-400 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                      >
                        {isLoading ? (
                          <>
                            <svg
                              className="animate-spin h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                            </svg>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <FaCheck />
                            Submit Review
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Animations */}
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
          
          @keyframes pingOnce {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-gradient {
            background-size: 400% 400%;
            animation: gradient 3s ease infinite;
          }
          
          .animate-pingOnce {
            animation: pingOnce 0.6s ease-out;
          }
          
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out;
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
          
          /* Custom scrollbar for form modal */
          .max-h-\\[90vh\\]::-webkit-scrollbar {
            width: 6px;
          }
          
          .max-h-\\[90vh\\]::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 3px;
          }
          
          .max-h-\\[90vh\\]::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #06b6d4, #3b82f6);
            border-radius: 3px;
          }
          
          .max-h-\\[90vh\\]::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #0891b2, #2563eb);
          }
        `}</style>
      </section>
    </>
  );
};

export default Testimonials;