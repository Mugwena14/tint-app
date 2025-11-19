import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const ImageGallery = () => {
  // ------------------------------
  // CATEGORY IMAGES
  // ------------------------------
  const categories = {
    cars: [
      "/images/apply.png",
      "/images/background.jpeg",
      "/images/apply.png",
      "/images/background.jpeg",
      "/images/apply.png",
      "/images/apply.png",
    ],
    homes: [
      "/images/background.jpeg",
      "/images/apply.png",
      "/images/background.jpeg",
      "/images/apply.png",
    ],
    offices: [
      "/images/apply.png",
      "/images/apply.png",
      "/images/background.jpeg",
    ],
  };

  const [category, setCategory] = useState("cars");
  const images = categories[category];

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const openImage = (index) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  // ✨ DISABLE SCROLL WHEN MODAL IS OPEN
  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [selectedIndex]);

  const displayedImages = showAll ? images : images.slice(0, 4);

  return (
    <div className="w-full flex justify-center mt-20 mb-10 relative">

      {/* BACKGROUND TITLE */}
      <h2 className="absolute -top-12 left-1/2 -translate-x-1/2 -translate-y-10 
                     text-[70px] md:text-[120px] font-bold text-gray-200 
                     select-none pointer-events-none tracking-tight">
        Our Work
      </h2>

      <div className="max-w-5xl w-full px-6 relative z-10">

        {/* SECTION TITLE */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
            Our Work
            <span className="block h-[3px] w-20 bg-blue-600 mt-1 mx-auto"></span>
          </h2>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex justify-center gap-4 mb-8">
          {["cars", "homes", "offices"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setCategory(tab);
                setShowAll(false); // reset view state
              }}
              className={`px-5 py-2 rounded-full text-md font-medium transition 
                ${
                  category === tab
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 place-items-center">
          {displayedImages.map((img, index) => (
            <div
              key={index}
              className="aspect-square w-[180px] md:w-[250px] overflow-hidden cursor-pointer"
              onClick={() => openImage(index)}
            >
              <motion.img
                src={img}
                alt=""
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          ))}
        </div>

        {/* ALWAYS SHOW VIEW MORE/LESS */}
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>

        {/* FULLSCREEN MODAL */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]"
              onClick={closeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.img
                key={images[selectedIndex]}
                src={images[selectedIndex]}
                className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              />

              {/* Close */}
              <button
                className="absolute top-6 right-6 text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  closeImage();
                }}
              >
                <X size={32} />
              </button>

              {/* Prev */}
              <button className="absolute left-6 text-white" onClick={showPrev}>
                <ChevronLeft size={40} />
              </button>

              {/* Next */}
              <button className="absolute right-6 text-white" onClick={showNext}>
                <ChevronRight size={40} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default ImageGallery;
