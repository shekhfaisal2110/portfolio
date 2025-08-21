"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function HoverExpand({
  images,
  imageDetails,
  initialSelectedIndex = 0,
  thumbnailHeight = 200,
  modalImageSize = 400,
  maxThumbnails = 11,
}) {
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  return (
    <div className="relative">
      {/* Thumbnails Row */}
      <div className="mx-auto flex w-fit gap-1 rounded-md pb-20 pt-10 md:gap-2">
  {images.slice(0, maxThumbnails).map((image, i) => (
    <div
      key={`image-container-${i}`}
      className={`group relative h-52 overflow-hidden rounded-2xl transition-all duration-300 ${
        selectedIndex === i ? "w-64" : "w-4 sm:w-5 md:w-8 xl:w-12"
      }`}
      onMouseEnter={() => setSelectedIndex(i)}
      onMouseLeave={() => setSelectedIndex(i)}
      onClick={() => {
        setSelectedIndex(i);
        setIsModalOpen(true);
      }}
    >
      <motion.div
        layoutId={`image-${i}`}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src={image.src} // Use `image.src` directly for each thumbnail
          alt={image.alt}  // Use `image.alt` for accessibility
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </motion.div>
    </div>
  ))}
</div>


      {/* Modal for Enlarged Image & Details */}
<AnimatePresence>
  {isModalOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 grid place-content-center bg-black/60 backdrop-blur-sm"
      onClick={() => setIsModalOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="cursor-pointer overflow-hidden rounded-xl bg-white shadow-xl p-6 md:p-8 flex flex-col sm:flex-row"
      >
        <motion.div
          layoutId={`image-${selectedIndex}`}
          className="relative w-full sm:w-[50%] h-96 flex justify-center items-center"
        >
          <img
            src={images[selectedIndex].src} // Updated to use the `src` property
            alt={images[selectedIndex].alt} // Updated to use the `alt` property
            className="w-full h-full object-cover rounded-xl"
            style={{ maxHeight: modalImageSize }}
          />
        </motion.div>

        {/* Image Details */}
        <div className="flex-1 mt-6 sm:mt-0 sm:ml-8 text-gray-700 dark:text-gray-400">
          <h2 className="text-3xl font-semibold">{imageDetails[selectedIndex].title}</h2>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {imageDetails[selectedIndex].description}
          </p>
          <a
            href={imageDetails[selectedIndex].link}
            className="mt-6 inline-block text-blue-500 font-medium hover:text-blue-700 hover:underline"
          >
            Learn More
          </a>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
}

export default HoverExpand;