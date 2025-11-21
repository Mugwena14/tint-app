import React, { useEffect } from "react";

const Testimonials = () => {
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
  }, []);

  return (
    <section className="w-full bg-[#0F0F11] text-white py-20 px-6 md:px-35">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What Our Customers Say
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          See why car owners, homeowners, and businesses trust us for premium window tinting.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="space-y-6">
            <div className="bg-[#1A1A1D] reveal-card opacity-0 translate-y-6 transition-all duration-700 ease-out p-6 rounded-xl h-[260px] flex flex-col justify-between shadow-lg border border-white/5 hover:-translate-y-2 hover:shadow-2xl">
              <div>
                <div className="flex text-yellow-400 mb-3">★★★★★</div>
                <p className="text-gray-300 text-sm">
                  Outstanding service! My car stays so much cooler now, and the tint looks
                  factory-installed. No bubbles, no flaws — just clean work.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                <div>
                  <p className="font-semibold text-sm">Thabo Mokoena</p>
                  <p className="text-xs text-gray-500">Car Owner</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1D] reveal-card opacity-0 translate-y-6 transition-all duration-700 ease-out p-6 rounded-xl h-[180px] shadow-lg border border-white/5 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex text-yellow-400 mb-3">★★★★★</div>
              <p className="text-gray-300 text-sm mb-4">
                The team tinted our entire home. Huge difference in heat and privacy — and the
                house looks amazing from the outside.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                <div>
                  <p className="font-semibold text-sm">Lerato Mashaba</p>
                  <p className="text-xs text-gray-500">Homeowner</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1D] reveal-card opacity-0 translate-y-6 transition-all duration-700 ease-out p-6 rounded-xl h-[180px] shadow-lg border border-white/5 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex text-yellow-400 mb-3">★★★★★</div>
              <p className="text-gray-300 text-sm mb-4">
                Professional and fast! My office meeting rooms have much better privacy now
                without losing natural light.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                <div>
                  <p className="font-semibold text-sm">Jason Smith</p>
                  <p className="text-xs text-gray-500">Business Owner</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <div className="bg-[#1A1A1D] reveal-card opacity-0 translate-y-6 transition-all duration-700 ease-out p-6 rounded-xl h-[180px] shadow-lg border border-white/5 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex text-yellow-400 mb-3">★★★★★</div>
              <p className="text-gray-300 text-sm mb-4">
                My SUV tint was done in under 2 hours. Great customer service and great pricing.
                The tint blocks insane heat!
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                <div>
                  <p className="font-semibold text-sm">Nkosinathi Phiri</p>
                  <p className="text-xs text-gray-500">SUV Owner</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1D] reveal-card opacity-0 translate-y-6 transition-all duration-700 ease-out p-6 rounded-xl h-[260px] flex flex-col justify-between shadow-lg border border-white/5 hover:-translate-y-2 hover:shadow-2xl">
              <div>
                <div className="flex text-yellow-400 mb-3">★★★★★</div>
                <p className="text-gray-300 text-sm">
                  Heat reduction in our office is insane. Employees literally stopped complaining
                  about the sun glare on monitors. Worth every cent.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                <div>
                  <p className="font-semibold text-sm">Emily Jacobs</p>
                  <p className="text-xs text-gray-500">Operations Manager</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1D] reveal-card opacity-0 translate-y-6 transition-all duration-700 ease-out p-6 rounded-xl h-[180px] shadow-lg border border-white/5 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex text-yellow-400 mb-3">★★★★★</div>
              <p className="text-gray-300 text-sm mb-4">
                Quality film, friendly staff, and clean installation. Definitely recommending
                them to friends and family.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                <div>
                  <p className="font-semibold text-sm">Sarah Daniels</p>
                  <p className="text-xs text-gray-500">Sedan Owner</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            <div className="bg-[#1A1A1D] reveal-card opacity-0 translate-y-6 transition-all duration-700 ease-out p-6 rounded-xl h-[260px] flex flex-col justify-between shadow-lg border border-white/5 hover:-translate-y-2 hover:shadow-2xl">
              <div>
                <div className="flex text-yellow-400 mb-3">★★★★★</div>
                <p className="text-gray-300 text-sm">
                  Perfect for privacy! Our storefront looks premium now, and customers love the
                  cooler temperature inside.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                <div>
                  <p className="font-semibold text-sm">Sipho Nkuna</p>
                  <p className="text-xs text-gray-500">Store Manager</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1D] reveal-card opacity-0 translate-y-6 transition-all duration-700 ease-out p-6 rounded-xl h-[180px] shadow-lg border border-white/5 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex text-yellow-400 mb-3">★★★★★</div>
              <p className="text-gray-300 text-sm mb-4">
                These guys know their stuff. They helped me choose the perfect shade for my
                bakkie. Looks tough!
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                <div>
                  <p className="font-semibold text-sm">Johan du Toit</p>
                  <p className="text-xs text-gray-500">Bakkie Owner</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1D] reveal-card opacity-0 translate-y-6 transition-all duration-700 ease-out p-6 rounded-xl h-[180px] shadow-lg border border-white/5 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex text-yellow-400 mb-3">★★★★★</div>
              <p className="text-gray-300 text-sm mb-4">
                Tint quality is amazing. No peeling, no fading — even months later. Highly
                recommend their work.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                <div>
                  <p className="font-semibold text-sm">Renee Adams</p>
                  <p className="text-xs text-gray-500">Homeowner</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
