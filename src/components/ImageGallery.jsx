// Enhanced ImageGallery with fade transitions, animated arrows, mobile layout improvements, and swipe support
// Paste-ready component

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const ImageGallery = () => {
  const categories = {
    cars: [
      "https://res.cloudinary.com/dkmzveqce/image/upload/v1763558761/1b27c0bd-0dd3-46ab-b1d6-10e9c725ae23_qehdet.jpg",
      "https://res.cloudinary.com/dkmzveqce/image/upload/v1763558767/6f3ad420-6860-40dd-b18f-e832645e993c_kcana0.jpg",
      "https://res.cloudinary.com/dkmzveqce/image/upload/v1763558757/276121a8-9a94-4574-bbb4-c99fee996cf0_tdlxrt.jpg",
      "https://res.cloudinary.com/dkmzveqce/image/upload/v1763558744/3a452216-eed8-46ed-897a-194579110111_w0mcho.jpg",
      "https://res.cloudinary.com/dkmzveqce/image/upload/v1763558706/6372b7da-8cf3-49a9-b9d1-6fc392ffeed8_iq5wjv.jpg",
      "https://res.cloudinary.com/dkmzveqce/image/upload/v1763558699/c56770d2-cb6e-49a7-bc51-4b3f938c4cd1_vtsbgv.jpg",
      "https://res.cloudinary.com/dkmzveqce/image/upload/v1763558895/7951de7f-39d5-495e-8c51-3d02d62aa29e_q1mrdr.jpg",
      "https://res.cloudinary.com/dkmzveqce/image/upload/v1763558762/2888f523-e7a4-43d5-b1de-ee6024e41c5f_twnldd.jpg"
    ],
    homes: [
      "https://res.cloudinary.com/dkmzveqce/image/upload/v1763563701/0161e555-104b-4715-bbfd-87e2712650d1_ff7odc.jpg",
      "https://res.cloudinary.com/dkmzveqce/image/upload/v1763563656/a2ab6f29-015d-4bd1-a584-51320c16ca4b_hbolxm.jpg",
      "https://res.cloudinary.com/dkmzveqce/image/upload/v1763563671/74bae268-b3e6-4072-803b-bf3968343a53_h2rxbi.jpg",
      "https://res.cloudinary.com/dkmzveqce/image/upload/v1763563661/76e7eb7b-9668-4525-9595-c79bd4a3f5d6_unyp0n.jpg",
      "https://res.cloudinary.com/dkmzveqce/image/upload/v1763563679/59050003-a6b7-4e93-a8f9-e504f1f8ed0b_trbwut.jpg",
      "https://res.cloudinary.com/dkmzveqce/image/upload/v1763563653/c2892d5d-27e4-4c2c-9f8b-c8b7d2de1028_v1imvf.jpg",
      "https://res.cloudinary.com/dkmzveqce/image/upload/v1763563646/98b24657-6833-465b-8c68-c74ff5821b36_qii2fx.jpg",
      "https://res.cloudinary.com/dkmzveqce/image/upload/v1763563653/c2892d5d-27e4-4c2c-9f8b-c8b7d2de1028_v1imvf.jpg"
    ],
    offices: [
      "https://res.cloudinary.com/dkmzveqce/image/upload/v1763562016/99269d91-e1b8-4e39-9868-a4173f394457_t0mb03.jpg",
      "https://res.cloudinary.com/dkmzveqce/image/upload/v1763561994/e538e3a8-1c63-46b7-9c04-2ca476d86629_dzcyyd.jpg",
      "https://res.cloudinary.com/dkmzveqce/image/upload/v1763561988/5cc2e3f0-d630-45fa-82a8-7f7acc1616dc_ak3rgn.jpg",
      "https://res.cloudinary.com/dkmzveqce/image/upload/v1763561981/707f59ab-0bd-45f0-85d8-e849b3e1cf35_csffuv.jpg",
      "https://res.cloudinary.com/dkmzveqce/image/upload/v1763561964/1bb8fc09-4d51-44d6-9792-3c60ad084728_nzxamm.jpg",
      "https://res.cloudinary.com/dkmzveqce/image/upload/v1763561961/d656f1cd-2b7b-4f67-bbfd-37146d24ec46_jtjjsm.jpg",
      "https://res.cloudinary.com/dkmzveqce/image/upload/v1763561960/5e731647-c47e-43e1-8b6d-19ffb0f9a077_z26yev.jpg",
      "https://res.cloudinary.com/dkmzveqce/image/upload/v1763561956/9d11b141-24ef-4a87-a591-b857e438b109_l1wln0.jpg"
    ],
  };

  const [category, setCategory] = useState("cars");
  const images = categories[category];

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef(null);

  // Swipe support
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let startX = 0;
    let endX = 0;

    const touchStart = (e) => (startX = e.touches[0].clientX);
    const touchEnd = (e) => {
      endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      if (diff > 50 && selectedIndex !== null) showNext();
      if (diff < -50 && selectedIndex !== null) showPrev();
    };

    container.addEventListener("touchstart", touchStart);
    container.addEventListener("touchend", touchEnd);

    return () => {
      container.removeEventListener("touchstart", touchStart);
      container.removeEventListener("touchend", touchEnd);
    };
  }, [selectedIndex]);

  const openImage = (index) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);

  const showPrev = () => {
    setSelectedIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const showNext = () => {
    setSelectedIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  const displayedImages = showAll ? images : images.slice(0, 4);

  return (
    <div className="w-full flex justify-center mt-20 mb-10 relative">
      <h2 className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-10 text-[30px] md:text-[70px] font-bold text-gray-200 select-none pointer-events-none tracking-tight">
        Our Work
      </h2>

      <div className="max-w-5xl w-full px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-2xl font-bold text-gray-800 relative inline-block">
            Our Work
            <span className="block h-[3px] w-20 bg-blue-600 mt-1 mx-auto"></span>
          </h2>
        </div>

        {/* Category Tabs */}
        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-center gap-4 mb-8"
          >
            {Object.keys(categories).map((tab) => (
              <button
                key={tab}
                onClick={() => setCategory(tab)}
                className={`px-5 py-2 rounded-full text-md font-medium transition cursor-pointer ${
                  category === tab
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* IMAGE GRID */}
        <motion.div
          key={category + showAll}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-2 place-items-center"
        >
          {displayedImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="aspect-square w-[160px] md:w-[240px] overflow-hidden cursor-pointer rounded-lg"
              onClick={() => openImage(index)}
            >
              <motion.img
                src={img}
                alt=""
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* VIEW MORE */}
        <motion.div
          layout
          transition={{ duration: 0.4 }}
          className="text-center mt-6"
        >
          <motion.button
            layout
            whileTap={{ scale: 0.9 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={() => setShowAll(!showAll)}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer"
          >
            {showAll ? "View Less" : "View More"}
          </motion.button>
        </motion.div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              ref={containerRef}
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
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-6 right-6 text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  closeImage();
                }}
              >
                <X size={32} />
              </motion.button>

              {/* Prev */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="absolute left-6 text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
              >
                <ChevronLeft size={40} />
              </motion.button>

              {/* Next */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
                className="absolute right-6 text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
              >
                <ChevronRight size={40} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ImageGallery;
