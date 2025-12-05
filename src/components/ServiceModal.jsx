import React from "react";
import { X } from "lucide-react";

const ServiceModal = ({ open, onClose, title, description, benefits }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-white max-w-2xl w-full p-8 rounded-xl shadow-lg relative text-center border-t-4 border-[#0390fc]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-600 hover:text-black transition"
        >
          <X size={22} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-[#0390fc] mb-4">{title}</h2>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed mb-6">
          {description}
        </p>

        {/* Benefits List */}
        <div className="text-left mx-auto max-w-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Benefits:</h3>
          <ul className="space-y-2">
            {benefits.map((item, i) => (
              <li key={i} className="text-gray-700 text-sm">
                • {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <button
          onClick={onClose}
          className="mt-8 px-6 py-2 rounded-md bg-[#0390fc] text-white font-medium hover:bg-[#0378d1] transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ServiceModal;
