import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import Beams from "./Beams";
import FAQ from "./FAQ.jsx";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [sending, setSending] = useState(false);

  const [form, setForm] = useState({
    name: "",
    role: "",
    rating: 5,
    message: "",
  });

  // ---------------------------------------------------
  // FETCH ALL REVIEWS
  // ---------------------------------------------------
  const fetchReviews = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/reviews");
      const data = await res.json();
      setReviews(data.reviews || data);
    } catch (err) {
      console.error("Fetch Error:", err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // ---------------------------------------------------
  // SUBMIT REVIEW → CLOSE FORM → UPDATE UI
  // ---------------------------------------------------
  const submitReview = async (e) => {
  e.preventDefault();
  setSending(true);

  try {
    const res = await fetch("http://localhost:5000/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setSending(false);

    if (!res.ok) {
      console.error("Review failed:", data);
      return;
    }

    // ----------- FORCE CLOSE MODAL -----------
    setModalOpen(false);

    // Reset form
    setForm({ name: "", role: "", rating: 5, message: "" });

    // ----------- AUTO UPDATE REVIEWS -----------
    // CASE 1: backend returns { review: {...} }
    if (data.review) {
      setReviews((prev) => [data.review, ...prev]);
      return;
    }

    // CASE 2: backend returns { newReview: {...} }
    if (data.newReview) {
      setReviews((prev) => [data.newReview, ...prev]);
      return;
    }

    // CASE 3: backend returns full list { reviews: [...] }
    if (data.reviews) {
      setReviews(data.reviews);
      return;
    }

    // CASE 4: backend returns raw review object
    if (typeof data === "object" && !Array.isArray(data)) {
      setReviews((prev) => [data, ...prev]);
      return;
    }

    // CASE 5: fallback → re-fetch from backend
    fetchReviews();
  } catch (err) {
    console.error("Submit Error:", err);
    setSending(false);
  }
};


  return (
    <section className="relative w-full -mt-11 text-white py-20 px-6 md:px-35 overflow-hidden">
      {/* Background */}
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
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              What Our Customers Say
            </h2>
            <p className="text-gray-300 mt-3 max-w-2xl">
              See why car owners, homeowners, and businesses trust us.
            </p>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="hidden md:block px-5 py-2 bg-[#c9a24d] text-black font-semibold rounded-lg shadow hover:bg-[#b18e3f] transition"
          >
            Leave a Review
          </button>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setModalOpen(true)}
          className="md:hidden w-full py-3 mb-10 bg-[#c9a24d] text-black font-semibold rounded-lg shadow hover:bg-[#b18e3f] transition"
        >
          Leave a Review
        </button>

        {/* Review Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ReviewColumn reviews={reviews} column={0} />
          <ReviewColumn reviews={reviews} column={1} />
          <ReviewColumn reviews={reviews} column={2} />
        </div>

        <div className="mt-20">
          <FAQ />
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#1A1A1D] w-full max-w-md p-6 rounded-xl relative border border-white/10">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <X size={22} />
            </button>

            <h3 className="text-xl font-semibold mb-4 text-white">
              Leave a Review
            </h3>

            <form onSubmit={submitReview} className="space-y-4">
              <Input
                label="Name"
                placeholder="Enter your name..."
                required
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <Input
                label="Role (optional)"
                placeholder="Eg. Homeowner, Business Owner"
                value={form.role}
                onChange={(e) =>
                  setForm({ ...form, role: e.target.value })
                }
              />

              <div>
                <label className="text-sm text-gray-300">Rating</label>
                <select
                  value={form.rating}
                  onChange={(e) =>
                    setForm({ ...form, rating: Number(e.target.value) })
                  }
                  className="w-full p-2 mt-1 bg-black/30 border-2 border-[#c9a24d]/40 focus:border-[#c9a24d] rounded text-white outline-none"
                >
                  {[5, 4, 3, 2, 1].map((n) => (
                    <option key={n} value={n}>
                      {n} Stars
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-300">
                  Review Message
                </label>
                <textarea
                  required
                  placeholder="Write your experience..."
                  rows="4"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full p-2 mt-1 bg-black/30 border-2 border-[#c9a24d]/40 focus:border-[#c9a24d] rounded text-white outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full py-2 bg-[#c9a24d] text-black rounded-lg font-medium hover:bg-[#b18e3f] transition"
              >
                {sending ? (
                  <span className="flex items-center justify-center gap-2">
                    Submitting Review
                    <span className="animate-pulse">•••</span>
                  </span>
                ) : (
                  "Submit Review"
                )}
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
/* COMPONENTS               */
/* ------------------------ */

const ReviewColumn = ({ reviews, column }) => (
  <div className="space-y-6">
    {reviews
      .filter((_, i) => i % 3 === column)
      .map((r, i) => (
        <Card key={r._id || i} review={r} tall={i % 2 === 0} />
      ))}
  </div>
);

const Card = ({ review, tall }) => (
  <div
    className={`bg-[#1A1A1D] transition-all duration-700 ease-out p-6 rounded-xl shadow-lg border border-white/5 flex flex-col justify-between
      ${tall ? "h-[260px]" : "h-[180px]"}`}
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

const Input = ({ label, ...props }) => (
  <div>
    <label className="text-sm text-gray-300">{label}</label>
    <input
      {...props}
      className="w-full p-2 mt-1 bg-black/30 border-2 border-[#c9a24d]/40 focus:border-[#c9a24d] rounded text-white outline-none placeholder-gray-400"
    />
  </div>
);
