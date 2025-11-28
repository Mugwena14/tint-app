import React, { useEffect, useState } from "react";
import Beams from "./Beams";
import FAQ from "./FAQ.jsx";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  // ------------------------------
  // Fetch reviews from backend
  // ------------------------------
  useEffect(() => {
    const getReviews = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/reviews");
        const data = await res.json();
        setReviews(data);
      } catch (err) {
        console.log("Reviews fetch error:", err);
      }
    };

    getReviews();
  }, []);

  // ------------------------------
  // Reveal animation for cards
  // ------------------------------
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
  }, [reviews]); // run AFTER reviews load

  return (
    <section className="relative w-full text-white py-20 px-6 md:px-35 overflow-hidden">
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

      <div className="absolute inset-0 bg-[#0F0F11]/80 -z-10" />

      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What Our Customers Say
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          See why car owners, homeowners, and businesses trust us for premium window tinting.
        </p>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-[#1A1A1D] reveal-card opacity-0 translate-y-6 transition-all duration-700 ease-out p-6 rounded-xl shadow-lg border border-white/5 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between h-[220px]"
            >
              <div>
                {/* Stars */}
                <div className="flex text-yellow-400 mb-3">
                  {"★★★★★".slice(0, review.rating)}
                </div>

                {/* Review message */}
                <p className="text-gray-300 text-sm mb-4">{review.message}</p>
              </div>

              {/* Bottom name + role */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-500" />
                <div>
                  <p className="font-semibold text-sm">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <FAQ />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
