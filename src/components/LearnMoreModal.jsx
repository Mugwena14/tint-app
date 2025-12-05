import React from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LearnMoreModal = ({ open, onClose }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl shadow-lg max-w-xl w-full p-6 relative"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 bg-gray-100 rounded-full hover:bg-gray-200 transition"
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-semibold text-[#0390fc] mb-4">
              More About Our Services
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              We provide professional tinting services designed to enhance
              comfort, privacy, and aesthetics. Our team specializes in automotive,
              residential, and commercial tinting—reducing heat, blocking harmful UV
              rays, and improving energy efficiency.
              <br /><br />
              Whether you want cooler car interiors, improved home insulation, or 
              privacy for your office space, we deliver clean, smooth, high-quality
              finishes using durable films that stand the test of time. Our mission
              is to bring comfort and style together, tailored to your needs.
            </p>

            {/* Tint Levels Comparison Grid */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Tint Levels We Offer:
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {/* 05% */}
                <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
                  <h4 className="font-bold text-[#0390fc] text-lg">05%</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Limo dark — maximum privacy.
                  </p>
                </div>

                {/* 20% */}
                <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
                  <h4 className="font-bold text-[#0390fc] text-lg">20%</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Deep tint — stylish with good visibility.
                  </p>
                </div>

                {/* 35% */}
                <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
                  <h4 className="font-bold text-[#0390fc] text-lg">35%</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Factory-style — clean OEM look.
                  </p>
                </div>

                {/* 50% */}
                <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
                  <h4 className="font-bold text-[#0390fc] text-lg">50%</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Light shade — glare reduction.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LearnMoreModal;
