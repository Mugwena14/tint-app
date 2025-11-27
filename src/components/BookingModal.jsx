import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const BookingModal = ({ open, onClose }) => {
  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  if (!open) return null;

  // Handle file uploads
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files).slice(0, 3);
    setImages(files);

    const previews = files.map((file) => URL.createObjectURL(file));
    setPreview(previews);
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.target);
    images.forEach((img) => formData.append("images", img));

    try {
      const res = await fetch("http://localhost:5000/api/book", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Booking sent successfully! We’ll contact you shortly.");
        e.target.reset();
        setImages([]);
        setPreview([]);
      } else {
        setMessage("Failed to send booking.");
      }
    } catch (err) {
      setMessage("Server error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <AnimatePresence>
      {/* BACKDROP */}
      <motion.div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-center items-center p-4"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* MODAL */}
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 50, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="w-full max-w-2xl bg-white rounded-2xl p-8 shadow-2xl border border-[#c9a24d]/20 relative"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-black hover:text-[#c9a24d] transition"
          >
            <X size={26} />
          </button>

          {/* Title */}
          <h2 className="text-3xl font-bold mb-6 text-black">
            Book Your Tinting Service
          </h2>

          {/* Response message */}
          {message && (
            <p className="mb-4 text-center font-medium text-[#c9a24d]">
              {message}
            </p>
          )}

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block mb-1 font-medium text-black">Full Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#c9a24d]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium text-black">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#c9a24d]"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block mb-1 font-medium text-black">Location</label>
              <input
                type="text"
                name="location"
                required
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#c9a24d]"
              />
            </div>

            {/* Services */}
            <div>
              <label className="block mb-1 font-medium text-black">Service Type</label>
              <select
                name="service"
                required
                className="w-full p-3 border rounded-xl bg-white focus:ring-2 focus:ring-[#c9a24d]"
              >
                <option value="">Select a service</option>
                <option value="Car Tinting">Car Tinting</option>
                <option value="Home Tinting">Home Tinting</option>
                <option value="Office Tinting">Office Tinting</option>
                <option value="Tint Removal">Tint Removal</option>
                <option value="Smash & Grab">Smash & Grab</option>
              </select>
            </div>

            {/* Date Time */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium text-black">Preferred Date</label>
                <input
                  type="date"
                  name="preferredDate"
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#c9a24d]"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-black">Preferred Time</label>
                <input
                  type="time"
                  name="preferredTime"
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#c9a24d]"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 font-medium text-black">Additional Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#c9a24d] placeholder-gray-500"
                placeholder="Explain what you need..."
              ></textarea>
            </div>

            {/* Uploads */}
            <div>
              <label className="block mb-2 font-medium text-black">Upload Images (optional, max 3)</label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="w-full p-2 border rounded-xl focus:ring-2 focus:ring-[#c9a24d]"
              />
            </div>

            {/* Preview */}
            {preview.length > 0 && (
              <div className="flex gap-4 mt-3">
                {preview.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    className="w-20 h-20 object-cover rounded-xl border border-[#c9a24d]/40"
                  />
                ))}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white p-3 rounded-xl text-lg font-medium hover:bg-[#c9a24d] hover:text-black transition-all duration-300"
            >
              {loading ? "Sending..." : "Submit Booking"}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookingModal;
