"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";

const CardCarousel = ({ images, autoplayDelay = 3000, showPagination = true, showNavigation = true }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(null);

  const toggleDetails = (id) => {
    setActiveTestimonial(activeTestimonial === id ? null : id);
  };

  const swiperCss = `
    .swiper {
      width: 100%;
      padding-bottom: 60px;
    }
    .swiper-slide {
      background: transparent !important;
      width: 320px;
      max-width: 100%;
      padding: 1rem;
      box-sizing: border-box;
  }
    .swiper-slide img {
      border-radius: 9999px;
      width: 80px !important;
      height: 80px !important;
      object-fit: cover !important;
      margin-inline: auto !important;
      border: 2px solid #0ea5e9;
      box-shadow: 0 0 12px #0ea5e9aa;
    }
    .swiper-pagination-bullet {
      background: #0ea5e9 !important;
      opacity: 0.5;
      transition: opacity 0.3s ease;
    }
    .swiper-pagination-bullet-active {
      opacity: 1 !important;
    }
  `;

  return (
    <section aria-label="Client testimonials carousel" className="w-full px-2 sm:px-0">
      <style>{swiperCss}</style>
      <div>
        <Swiper
          modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView="auto"
          autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 150, modifier: 2, slideShadows: false }}
          pagination={showPagination}
          navigation={showNavigation}
        >
          {images.map(({ id, name, image, rating, short, full }) => (
            <SwiperSlide key={id} className="cursor-pointer">
              <article className="bg-neutral-800 rounded-3xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-shadow duration-300">
                <img src={image} alt={`Photo of ${name}`} loading="lazy" className="rounded-full w-20 h-20 mb-4 object-cover" draggable={false} />
                <h4 className="text-xl font-semibold text-white mb-2">{name}</h4>
                <div className="flex justify-center gap-1 mb-4" aria-label={`Rating: ${rating} out of 5 stars`}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-700"}>
                      ★
                    </span>
                  ))}
                </div>
                {short && !activeTestimonial && <p className="line-clamp-3 text-gray-300 mb-2">{short}</p>}
                {activeTestimonial === id && full && <p className="text-gray-300 mb-2">{full}</p>}
                <button
                  onClick={() => toggleDetails(id)}
                  className="text-cyan-400 hover:text-cyan-600 focus-visible:outline-2 focus-visible:outline-cyan-400 font-semibold mt-3"
                  aria-expanded={activeTestimonial === id}
                  aria-controls={`testimonial-content-${id}`}
                >
                  {activeTestimonial === id ? "Show Less" : "Show More"}
                </button>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CardCarousel;