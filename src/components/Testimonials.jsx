import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import Beams from "./Beams";
import FAQ from "./FAQ.jsx";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    role: "",
    rating: 5,
    message: "",
  });

  // Fetch reviews from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Fetch Error:", err));
  }, []);

  // Reveal animations
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll(".reveal-card"));

    cards.forEach((card, i) => {
      card.style.transitionDelay = `${i * 120}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [reviews]); // important: replay animation when reviews load

  // Submit review
  const submitReview = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      setReviews([data.review, ...reviews]); // update live
      setModalOpen(false);
      setForm({ name: "", role: "", rating: 5, message: "" });
    }
  };

  return (
    <section className="relative w-full text-white py-20 px-6 md:px-35 overflow-hidden">

      {/* Background Beams */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>

      <div className="absolute inset-0 bg-[#0F0F11]/80 -z-10"></div>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold">
              What Our Customers Say
            </h2>
            <p className="text-gray-300 mt-3 max-w-2xl">
              See why car owners, homeowners, and businesses trust us for premium window tinting.
            </p>
          </div>

          {/* Add Review Button */}
          <button
            onClick={() => setModalOpen(true)}
            className="hidden md:block px-5 py-2 bg-[#c9a24d] text-black font-semibold rounded-lg shadow hover:bg-[#b18e3f] transition"
          >
            Leave a Review
          </button>
        </div>

        {/* Mobile Add Review Button */}
        <button
          onClick={() => setModalOpen(true)}
          className="md:hidden w-full py-3 mb-10 bg-[#c9a24d] text-black font-semibold rounded-lg shadow hover:bg-[#b18e3f] transition"
        >
          Leave a Review
        </button>

        {/* 🔥 Dynamic Grid - Generates your 3-column layout automatically */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* COLUMN 1 */}
          <div className="space-y-6">
            {reviews
              .filter((_, i) => i % 3 === 0)
              .map((review, idx) => (
                <Card key={idx} review={review} tall={idx % 2 === 0} />
              ))}
          </div>

          {/* COLUMN 2 */}
          <div className="space-y-6">
            {reviews
              .filter((_, i) => i % 3 === 1)
              .map((review, idx) => (
                <Card key={idx} review={review} tall={idx % 2 === 0} />
              ))}
          </div>

          {/* COLUMN 3 */}
          <div className="space-y-6">
            {reviews
              .filter((_, i) => i % 3 === 2)
              .map((review, idx) => (
                <Card key={idx} review={review} tall={idx % 2 === 0} />
              ))}
          </div>

        </div>

        {/* FAQ */}
        <div className="mt-20">
          <FAQ />
        </div>
      </div>

      {/* Review Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#1A1A1D] w-full max-w-md p-6 rounded-xl relative border border-white/10">

            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <X size={22} />
            </button>

            <h3 className="text-xl font-semibold mb-4 text-white">Leave a Review</h3>

            <form onSubmit={submitReview} className="space-y-4">

              <Input
                label="Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <Input
                label="Role (optional)"
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
              />

              <div>
                <label className="text-sm text-gray-300">Rating</label>
                <select
                  value={form.rating}
                  onChange={(e) =>
                    setForm({ ...form, rating: Number(e.target.value) })
                  }
                  className="w-full p-2 mt-1 bg-black/30 border border-white/10 rounded text-white"
                >
                  {[5, 4, 3, 2, 1].map((n) => (
                    <option key={n} value={n}>
                      {n} Stars
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-300">Review Message</label>
                <textarea
                  required
                  rows="4"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full p-2 mt-1 bg-black/30 border border-white/10 rounded text-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-[#c9a24d] text-black rounded-lg font-medium hover:bg-[#b18e3f] transition"
              >
                Submit Review
              </button>

            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;

/* ------------------------ */
/* REUSABLE COMPONENTS      */
/* ------------------------ */

const Card = ({ review, tall }) => {
  return (
    <div
      className={`bg-[#1A1A1D] reveal-card opacity-0 translate-y-6 transition-all duration-700 ease-out p-6 rounded-xl shadow-lg border border-white/5 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between ${
        tall ? "h-[260px]" : "h-[180px]"
      }`}
    >
      <div>
        <div className="flex text-yellow-400 mb-3">
          {"★★★★★".slice(0, review.rating)}
        </div>
        <p className="text-gray-300 text-sm">{review.message}</p>
      </div>

      <div className="flex items-center gap-3 mt-4">
        <div className="w-10 h-10 rounded-full bg-gray-500"></div>
        <div>
          <p className="font-semibold text-sm">{review.name}</p>
          <p className="text-xs text-gray-500">{review.role}</p>
        </div>
      </div>
    </div>
  );
};

const Input = ({ label, ...props }) => (
  <div>
    <label className="text-sm text-gray-300">{label}</label>
    <input
      {...props}
      className="w-full p-2 mt-1 bg-black/30 border border-white/10 rounded text-white"
    />
  </div>
);
