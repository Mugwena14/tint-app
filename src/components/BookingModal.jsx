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
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ type: "spring", stiffness: 160, damping: 18 }}
          className="w-full max-w-lg bg-white rounded-2xl p-4 shadow-xl border border-[#c9a24d]/20 relative"
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-black hover:text-[#0390fc]"
          >
            <X size={22} />
          </button>

          <h2 className="text-xl font-bold mb-3 text-black">
            Book Tinting Service
          </h2>

          {message && (
            <p className="text-center mb-2 text-[#c9a24d] text-sm">{message}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-2.5">

            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="p-2 border rounded-lg text-sm w-full"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="p-2 border rounded-lg text-sm w-full"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  required
                  className="p-2 border rounded-lg text-sm w-full"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-gray-700">Service Type</label>
                <select
                  name="service"
                  required
                  className="p-2 border rounded-lg text-sm bg-white w-full"
                >
                  <option value="">Select Service</option>
                  <option value="Car Tinting">Car Tinting</option>
                  <option value="Home Tinting">Home Tinting</option>
                  <option value="Office Tinting">Office Tinting</option>
                  <option value="Tint Removal">Tint Removal</option>
                  <option value="Smash & Grab">Smash & Grab</option>
                </select>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-gray-700">Preferred Date</label>
                <input
                  type="date"
                  name="preferredDate"
                  className="p-2 border rounded-lg text-sm w-full"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-gray-700">Preferred Time</label>
                <input
                  type="time"
                  name="preferredTime"
                  className="p-2 border rounded-lg text-sm w-full"
                />
              </div>
            </div>

            {/* Message + Upload */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Message..."
                  required
                  className="p-2 border rounded-lg text-sm resize-none w-full"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-gray-700">
                  Image Upload (optional)
                </label>
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

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white p-2.5 rounded-lg text-sm font-medium hover:bg-[#0390fc] hover:text-black transition"
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
