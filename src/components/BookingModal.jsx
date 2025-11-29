import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const BookingModal = ({ open, onClose }) => {
  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  if (!open) return null;

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files).slice(0, 3);
    setImages(files);
    setPreview(files.map((f) => URL.createObjectURL(f)));
  };

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
        setMessage("Booking sent! Check your email.");
        e.target.reset();
        setImages([]);
        setPreview([]);
      } else {
        setMessage("Failed to send booking.");
      }
    } catch {
      setMessage("Server error. Try again.");
    }

    setLoading(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-center items-center p-3"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* MODAL */}
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ type: "spring", stiffness: 160, damping: 18 }}
          className="w-full max-w-lg bg-white rounded-2xl p-4 shadow-xl border border-[#c9a24d]/20 relative"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-black hover:text-[#c9a24d]"
          >
            <X size={22} />
          </button>

          {/* Title */}
          <h2 className="text-xl font-bold mb-3 text-black">
            Book Tinting Service
          </h2>

          {/* Message */}
          {message && (
            <p className="text-center mb-2 text-[#c9a24d] text-sm">
              {message}
            </p>
          )}

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-2.5">
            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="p-2 border rounded-lg text-sm"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="p-2 border rounded-lg text-sm"
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="location"
                placeholder="Location"
                required
                className="p-2 border rounded-lg text-sm"
              />
              <select
                name="service"
                required
                className="p-2 border rounded-lg text-sm bg-white"
              >
                <option value="">Service Type</option>
                <option value="Car Tinting">Car Tinting</option>
                <option value="Home Tinting">Home Tinting</option>
                <option value="Office Tinting">Office Tinting</option>
                <option value="Tint Removal">Tint Removal</option>
                <option value="Smash & Grab">Smash & Grab</option>
              </select>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-2 gap-3">
              <input
                type="date"
                name="preferredDate"
                className="p-2 border rounded-lg text-sm"
              />
              <input
                type="time"
                name="preferredTime"
                className="p-2 border rounded-lg text-sm"
              />
            </div>

            {/* Message + Upload in 2 columns */}
            <div className="grid grid-cols-2 gap-3">
              <textarea
                name="message"
                rows="3"
                placeholder="Message..."
                required
                className="p-2 border rounded-lg text-sm resize-none"
              />
              <div>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="p-2 border rounded-lg w-full text-sm"
                />
                {preview.length > 0 && (
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {preview.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        className="w-14 h-14 object-cover rounded-lg border border-[#c9a24d]/30"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white p-2.5 rounded-lg text-sm font-medium hover:bg-[#c9a24d] hover:text-black transition"
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
