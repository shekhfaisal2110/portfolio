// import React, { useState } from "react";
// import {
//   FaUser,
//   FaEnvelope,
//   FaCommentDots,
//   FaPaperPlane,
//   FaSpinner,
//   FaGithub,
//   FaLinkedin,
//   FaInstagram,
// } from "react-icons/fa";
// import toast, { Toaster } from "react-hot-toast";
// import contactImg from '../assets/icons/contact-information.png'

// const Contact = () => {
//   const [loading, setLoading] = useState(false);

//   const validateForm = (formData) => {
//     const errors = {};
//     if (!formData.name.trim()) errors.name = "Name is required.";
//     if (!formData.email.trim()) {
//       errors.email = "Email is required.";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       errors.email = "Invalid email address.";
//     }
//     if (!formData.message.trim()) errors.message = "Message is required.";
//     return errors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = {
//       name: form.name.value.trim(),
//       email: form.email.value.trim(),
//       message: form.message.value.trim(),
//     };

//     const errors = validateForm(formData);
//     if (Object.keys(errors).length > 0) {
//       Object.values(errors).forEach((err) => toast.error(err));
//       return;
//     }

//     setLoading(true);

//     try {
//       await fetch(
//         "https://script.google.com/macros/s/AKfycbyhLod1X9f422zReZbjbnugWfzB2OWh-FFqB6jvHUQHNLPAUptinwGyTgUC3K4LdUF9JQ/exec",
//         {
//           method: "POST",
//           mode: "no-cors",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );

//       // ✅ Success toast (3 seconds + animated icon)
// toast.custom(
//   (t) => (
//     <div
//       className={`${
//         t.visible ? 'animate-enter' : 'animate-leave'
//       } max-w-md w-full bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3`}
//     >
//       <div className="animate-ping-once w-5 h-5 text-white">
//         ✅
//       </div>
//       <span>Your message has been sent!</span>
//     </div>
//   ),
//   { duration: 3000 }
// );

// // ✅ Clear form
// form.reset();

//     } catch (err) {
//       // ❌ Error toast
// toast.custom(
//   (t) => (
//     <div
//       className={`${
//         t.visible ? 'animate-enter' : 'animate-leave'
//       } max-w-md w-full bg-red-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3`}
//     >
//       <div className="animate-bounce text-white text-lg">❌</div>
//       <span>Failed to send. Try again later.</span>
//     </div>
//   ),
//   { duration: 3000 }
// );

//     }

//     setLoading(false);
//   };

//   return (
//     <section
//       id="contact"
//       className="min-h-screen py-20 bg-gradient-to-br from-gray-950 to-gray-900 text-white"
//     >
//       {/* 🔥 Toast Container */}
//       <Toaster position="top-center" reverseOrder={false} />

//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-4 flex items-center justify-center gap-2">
//           <img src={contactImg} alt="Contact Icon" className="w-8 h-8" />
//           Contact Me
//         </h2>
//         <p className="text-center text-gray-400 mb-12">
//           I'd love to hear from you. Feel free to reach out!
//         </p>

//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Form */}
//           <form
//             onSubmit={handleSubmit}
//             className="bg-[#1f1f1f] p-6 rounded-xl shadow-md contact-form"
//             noValidate
//           >
//             <div className="mb-6">
//               <label
//                 htmlFor="name"
//                 className="text-base font-semibold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent block mb-2"
//               >
//                 <FaUser className="inline mr-2" /> Your Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 placeholder="Enter your name"
//                 className="w-full p-3 rounded-md bg-[#2a2a2a] border border-[#1f1f1f] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow transition-all"
//               />
//             </div>

//             <div className="mb-6">
//               <label
//                 htmlFor="email"
//                 className="text-base font-semibold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent block mb-2"
//               >
//                 <FaEnvelope className="inline mr-2" /> Your Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 className="w-full p-3 rounded-md bg-[#2a2a2a] border border-[#1f1f1f] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow transition-all"
//               />
//             </div>

//             <div className="mb-6">
//               <label
//                 htmlFor="message"
//                 className="text-base font-semibold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent block mb-2"
//               >
//                 <FaCommentDots className="inline mr-2" /> Your Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows="5"
//                 placeholder="Type your message here..."
//                 className="w-full p-3 rounded-md bg-[#2a2a2a] border border-[#1f1f1f] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow transition-all resize-none"
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 transition-all text-white font-medium py-2 rounded-lg shadow-md hover:shadow-lg flex items-center justify-center ${
//                 loading ? "opacity-70 cursor-not-allowed" : ""
//               }`}
//             >
//               {loading ? (
//                 <>
//                   <FaSpinner className="animate-spin mr-2" /> Sending...
//                 </>
//               ) : (
//                 <>
//                   <FaPaperPlane className="mr-2" /> Send Message
//                 </>
//               )}
//             </button>
//           </form>

//           {/* Contact Info */}
//           <div className="bg-[#1f1f1f] p-6 rounded-xl shadow-md">
//             <h3 className="text-2xl font-bold text-cyan-400 border-l-4 border-blue-600 pl-4 mb-6">
//               Get In Touch
//             </h3>
//             <p className="text-gray-300 mb-2">
//               Email:{" "}
//               <a
//                 href="mailto:shekhfaisal.2110@gmail.com"
//                 className="text-cyan-400 hover:text-blue-500 border-b border-transparent hover:border-blue-500 transition"
//               >
//                 shekhfaisal.2110@gmail.com
//               </a>
//             </p>
//             <p className="text-gray-300 mb-2">
//               Phone:{" "}
//               <a
//                 href="tel:+919173195287"
//                 className="text-cyan-400 hover:text-blue-500 border-b border-transparent hover:border-blue-500 transition"
//               >
//                 +91 917 319 5287
//               </a>
//             </p>
//             <p className="text-gray-300 mb-6">Location: Ahmedabad, India</p>

//             <div className="flex gap-6 text-2xl">
//               <a
//                 href="https://github.com/shekhfaisal2110"
//                 className="text-cyan-400 hover:text-blue-500 hover:scale-110 transition-transform"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaGithub />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/faisal-shaikh-3064582a4"
//                 className="text-cyan-400 hover:text-blue-500 hover:scale-110 transition-transform"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaLinkedin />
//               </a>
//               <a
//                 href="https://www.instagram.com/_shaikh__sahab_19_8"
//                 className="text-cyan-400 hover:text-blue-500 hover:scale-110 transition-transform"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaInstagram />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };



// // // // export default Contact;

import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaPaperPlane,
  FaSpinner,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaGlobe,
  FaCode,
  FaRocket,
  FaHeart,
} from "react-icons/fa";
import Header from "./Header";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    setIsVisible(true);
    return () => window.removeEventListener("mousemove", handleMouseMove);
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

  const showToast = (message, type = "success") => {
    const toast = document.createElement("div");
    toast.className = `fixed top-4 right-4 z-50 p-4 rounded-xl shadow-2xl backdrop-blur-xl border transform transition-all duration-300 ${
      type === "success"
        ? "bg-green-500/20 border-green-500/40 text-green-100"
        : "bg-red-500/20 border-red-500/40 text-red-100"
    } animate-slideIn`;
    toast.innerHTML = `
      <div class="flex items-center gap-3">
        <div class="text-xl animate-bounce">${type === "success" ? "✅" : "❌"}</div>
        <span class="font-medium">${message}</span>
      </div>`;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.transform = "translateX(100%)";
      setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
  };

  const validateForm = (formData) => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email address.";
    }
    if (!formData.message.trim()) errors.message = "Message is required.";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    };

    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach((err) => showToast(err, "error"));
      return;
    }

    setLoading(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyhLod1X9f422zReZbjbnugWfzB2OWh-FFqB6jvHUQHNLPAUptinwGyTgUC3K4LdUF9JQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      showToast("Your message has been sent successfully!", "success");
      form.reset();
    } catch (err) {
      showToast("Failed to send message. Please try again.", "error");
    }

    setLoading(false);
  };

  return (
    <>
      <Header/>
      <ParticleTrail />
      <section
        id="contact"
        className="relative py-20 min-h-screen text-white overflow-hidden bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950"
      >
        {/* Enhanced background effects matching Hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 backdrop-blur-sm z-1" />
        
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-pulse" 
               style={{
                 backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(34, 211, 238, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(156, 39, 176, 0.1) 0%, transparent 50%)',
                 animation: 'float 6s ease-in-out infinite'
               }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Enhanced Header matching Hero style */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                  <span className="text-3xl">📧</span>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 animate-pulse" />
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                Contact Me
              </h2>
            </div>
            
            <div className="relative backdrop-blur-lg bg-white/10 p-8 rounded-3xl border border-white/20 shadow-2xl max-w-3xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur opacity-20" />
              <p className="relative text-xl lg:text-2xl leading-relaxed text-gray-200">
                I'd love to hear from you. Let's create something amazing together!
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Enhanced Form Section with Professional Hover Effects */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative group">
                {/* Enhanced glow effect on hover */}
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-all duration-700 animate-pulse" />
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl group-hover:border-white/40 group-hover:bg-white/10 transition-all duration-500">
                  
                  {/* Enhanced floating decorative elements */}
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:shadow-cyan-400/50 transition-all duration-500">
                    <span className="text-white text-sm">✉️</span>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:shadow-purple-400/50 transition-all duration-500">
                    <FaCode className="text-white text-lg" />
                  </div>
                  <div className="absolute top-1/2 -right-10 w-8 h-8 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full animate-ping shadow-lg group-hover:shadow-green-400/60 transition-all duration-500" />
                  
                  <form onSubmit={handleSubmit} className="relative z-10" noValidate>
                    <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                      Send Message
                    </h3>

                    {/* Enhanced Name Field with Professional Hover */}
                    <div className="mb-6 group/field relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 rounded-xl blur opacity-0 group-hover/field:opacity-60 transition-all duration-500" />
                      <div className="relative">
                        <label htmlFor="name" className="flex items-center text-lg font-semibold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-3 group-hover/field:from-cyan-300 group-hover/field:to-blue-500 transition-all duration-300">
                          <div className="p-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 mr-3 group-hover/field:scale-110 group-hover/field:shadow-lg group-hover/field:shadow-cyan-400/50 transition-all duration-300">
                            <FaUser className="text-white text-sm" />
                          </div>
                          Your Name
                        </label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          placeholder="Enter your name" 
                          className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 focus:bg-white/15 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Enhanced Email Field with Professional Hover */}
                    <div className="mb-6 group/field relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-300 via-purple-400 to-pink-400 rounded-xl blur opacity-0 group-hover/field:opacity-60 transition-all duration-500" />
                      <div className="relative">
                        <label htmlFor="email" className="flex items-center text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-3 group-hover/field:from-purple-300 group-hover/field:to-pink-400 transition-all duration-300">
                          <div className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 mr-3 group-hover/field:scale-110 group-hover/field:shadow-lg group-hover/field:shadow-purple-400/50 transition-all duration-300">
                            <FaEnvelope className="text-white text-sm" />
                          </div>
                          Your Email
                        </label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          placeholder="Enter your email" 
                          className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 focus:bg-white/15 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-purple-400/20 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Enhanced Message Field with Professional Hover */}
                    <div className="mb-8 group/field relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-green-300 via-emerald-400 to-cyan-400 rounded-xl blur opacity-0 group-hover/field:opacity-60 transition-all duration-500" />
                      <div className="relative">
                        <label htmlFor="message" className="flex items-center text-lg font-semibold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent mb-3 group-hover/field:from-green-300 group-hover/field:to-cyan-400 transition-all duration-300">
                          <div className="p-2 rounded-full bg-gradient-to-r from-green-500 to-cyan-600 mr-3 group-hover/field:scale-110 group-hover/field:shadow-lg group-hover/field:shadow-green-400/50 transition-all duration-300">
                            <FaCommentDots className="text-white text-sm" />
                          </div>
                          Your Message
                        </label>
                        <textarea 
                          id="message" 
                          name="message" 
                          rows="6" 
                          placeholder="Type your message here..." 
                          className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 focus:bg-white/15 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 resize-none"
                        />
                      </div>
                    </div>

                    {/* Enhanced Submit Button with Professional Hover */}
                    <div className="group/button relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 rounded-xl blur opacity-70 group-hover/button:opacity-100 transition-all duration-500 animate-pulse" />
                      <button
                        type="submit"
                        disabled={loading}
                        className={`relative w-full px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-lg rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-cyan-400/40 flex items-center justify-center gap-3 ${
                          loading ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                      >
                        {loading ? (
                          <>
                            <FaSpinner className="text-xl animate-spin" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane className="text-xl animate-bounce group-hover/button:animate-pulse" />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Enhanced Contact Info Section with Professional Hover Effects */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative group">
                {/* Enhanced glow effect on hover */}
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-all duration-700 animate-pulse" />
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl group-hover:border-white/40 group-hover:bg-white/10 transition-all duration-500">
                  
                  {/* Enhanced floating decorative elements */}
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:shadow-purple-400/50 transition-all duration-500">
                    <span className="text-white text-sm">📞</span>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:shadow-cyan-400/50 transition-all duration-500">
                    <FaRocket className="text-white text-lg" />
                  </div>
                  <div className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping shadow-lg group-hover:shadow-yellow-400/60 transition-all duration-500" />
                  
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                      Get In Touch
                    </h3>
                    
                    {/* Enhanced Contact Info Cards with Professional Hover */}
                    <div className="space-y-4 mb-8">
                      {[
                        {
                          icon: FaEnvelope,
                          label: "Email",
                          value: "shekhfaisal.2110@gmail.com",
                          color: "from-blue-500 to-purple-600",
                          hoverColor: "from-blue-400 to-purple-500",
                          href: "mailto:shekhfaisal.2110@gmail.com",
                        },
                        {
                          icon: FaPhoneAlt,
                          label: "Phone",
                          value: "+91 9173195287",
                          color: "from-green-500 to-cyan-600",
                          hoverColor: "from-green-400 to-cyan-500",
                          href: "tel:+919173195287",
                        },
                        {
                          icon: FaMapMarkerAlt,
                          label: "Location",
                          value: "Ahmedabad, India",
                          color: "from-red-500 to-orange-600",
                          hoverColor: "from-red-400 to-orange-500",
                        },
                        {
                          icon: FaCalendarAlt,
                          label: "Birthday",
                          value: "26 Sept 2005",
                          color: "from-pink-500 to-purple-600",
                          hoverColor: "from-pink-400 to-purple-500",
                        },
                        {
                          icon: FaGlobe,
                          label: "Website",
                          value: "shekhfaisaltech.github.io",
                          color: "from-blue-500 to-indigo-600",
                          hoverColor: "from-blue-400 to-indigo-500",
                          href: "https://shekhfaisal2110.github.io/ShekhFaisalTech/",
                        },
                      ].map((item, index) => (
                        <div key={index} className="group/card relative">
                          <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.hoverColor} rounded-lg blur opacity-0 group-hover/card:opacity-60 transition-all duration-500`} />
                          <div className="relative bg-white/10 backdrop-blur-lg p-4 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1">
                            <div className="flex items-center gap-3 min-w-0">
                              <div className={`p-2 flex-shrink-0 rounded-full bg-gradient-to-r ${item.color} group-hover/card:bg-gradient-to-r group-hover/card:${item.hoverColor} shadow-lg transform group-hover/card:scale-110 group-hover/card:shadow-xl transition-all duration-300`}>
                                <item.icon className="text-white text-sm" />
                              </div>
                              <div className="min-w-0">
                                <strong className="text-white whitespace-nowrap group-hover/card:text-gray-100 transition-colors duration-300">{item.label}:</strong>
                                {item.href ? (
                                  <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-2 text-cyan-400 hover:text-cyan-300 hover:underline break-words inline-block max-w-full transition-all duration-300 group-hover/card:text-cyan-300"
                                  >
                                    {item.value}
                                  </a>
                                ) : (
                                  <span className="ml-2 break-words inline-block max-w-full group-hover/card:text-gray-200 transition-colors duration-300">{item.value}</span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Enhanced Social Media Links with Professional Hover */}
                    <div className="border-t border-white/20 pt-8">
                      <h4 className="text-xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        Follow Me
                      </h4>
                      <div className="flex justify-center gap-6">
                        {[
                          {
                            href: 'https://github.com/shekhfaisal2110',
                            icon: <FaGithub />,
                            color: 'from-gray-700 to-gray-900',
                            hoverColor: 'from-gray-600 to-gray-800',
                            glowColor: 'shadow-gray-400/50',
                            name: 'GitHub'
                          },
                          {
                            href: 'https://www.linkedin.com/in/faisal-shaikh-3064582a4',
                            icon: <FaLinkedin />,
                            color: 'from-blue-600 to-blue-800',
                            hoverColor: 'from-blue-500 to-blue-700',
                            glowColor: 'shadow-blue-400/50',
                            name: 'LinkedIn'
                          },
                          {
                            href: 'https://www.instagram.com/_shaikh__sahab_19_8',
                            icon: <FaInstagram />,
                            color: 'from-pink-600 to-purple-800',
                            hoverColor: 'from-pink-500 to-purple-700',
                            glowColor: 'shadow-pink-400/50',
                            name: 'Instagram'
                          },
                        ].map(({ href, icon, color, hoverColor, glowColor, name }, idx) => (
                          <div key={idx} className="group/social relative">
                            <div className={`absolute -inset-1 bg-gradient-to-r ${hoverColor} rounded-full blur opacity-0 group-hover/social:opacity-70 transition-all duration-500`} />
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`relative w-16 h-16 rounded-full bg-gradient-to-r ${color} hover:bg-gradient-to-r hover:${hoverColor} text-white text-2xl flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-2xl hover:${glowColor} border border-white/20 group-hover/social:border-white/40`}
                              title={name}
                            >
                              {icon}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="group/cta relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-300 via-emerald-400 to-cyan-400 rounded-xl blur opacity-0 group-hover/cta:opacity-100 transition-all duration-500" />
                <a
                  href="portfolio"
                  className="relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-400/40"
                >
                  <FaRocket className="animate-bounce group-hover/cta:animate-pulse" />
                  View My Work
                </a>
              </div>
              
              <div className="group/cta relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-300 via-red-400 to-pink-400 rounded-xl blur opacity-0 group-hover/cta:opacity-100 transition-all duration-500" />
                <a
                  href="about"
                  className="relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-400/40"
                >
                  <FaHeart className="animate-pulse group-hover/cta:animate-bounce" />
                  Learn About Me
                </a>
              </div>
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
          
          @keyframes slideIn {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          
          .animate-gradient {
            background-size: 400% 400%;
            animation: gradient 3s ease infinite;
          }
          
          .animate-slideIn {
            animation: slideIn 0.3s ease-out;
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

          /* Enhanced Professional Hover Effects */
          .group:hover .group-hover\:scale-110 {
            transform: scale(1.1);
          }
          
          .group:hover .group-hover\:shadow-cyan-400\/50 {
            box-shadow: 0 10px 30px rgba(34, 211, 238, 0.5);
          }
          
          .group:hover .group-hover\:shadow-purple-400\/50 {
            box-shadow: 0 10px 30px rgba(196, 181, 253, 0.5);
          }
          
          .group:hover .group-hover\:shadow-green-400\/60 {
            box-shadow: 0 10px 30px rgba(74, 222, 128, 0.6);
          }
          
          .group:hover .group-hover\:shadow-yellow-400\/60 {
            box-shadow: 0 10px 30px rgba(250, 204, 21, 0.6);
          }

          /* Professional Light Color Effects */
          .group\/field:hover input,
          .group\/field:hover textarea {
            background: rgba(255, 255, 255, 0.15);
            border-color: rgba(255, 255, 255, 0.4);
            box-shadow: 0 8px 25px rgba(34, 211, 238, 0.2);
          }

          .group\/card:hover {
            background: rgba(255, 255, 255, 0.15);
            border-color: rgba(255, 255, 255, 0.4);
            box-shadow: 0 10px 30px rgba(34, 211, 238, 0.25);
          }

          .group\/social:hover {
            filter: brightness(1.2);
          }

          .group\/button:hover button:not(:disabled) {
            background: linear-gradient(to right, rgb(34, 211, 238), rgb(59, 130, 246));
            box-shadow: 0 15px 35px rgba(34, 211, 238, 0.4);
          }

          .group\/cta:hover a {
            filter: brightness(1.1);
            box-shadow: 0 15px 35px rgba(74, 222, 128, 0.4);
          }
        `}</style>
      </section>
    </>
  );
};

export default Contact;