import React, { useEffect } from "react";

const Testimonials = () => {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll('.reveal-card'));

    // set a staggered transitionDelay on each card based on its index
    cards.forEach((card, i) => {
      card.style.transitionDelay = `${i * 120}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Our Customers Say</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Hear from our incredible customers who are building at lightning speed.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="space-y-6">
            <div className="bg-[#1A1A1D] reveal-card opacity-0 translate-y-6 transform transition-all duration-700 ease-out p-6 rounded-xl h-[260px] flex flex-col justify-between shadow-lg border border-white/5 hover:-translate-y-2 hover:shadow-2xl">
              <div>
                <div className="flex text-yellow-400 mb-3">★★★★★</div>
                <p className="text-gray-300 text-sm">
                  UI Blox has revolutionized my design process. Its intuitive interface and
                  robust features save me so much time, allowing me to focus on creativity.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                <div>
                  <p className="font-semibold text-sm">Jillie Bernard</p>
                  <p className="text-xs text-gray-500">Founder & CEO</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1D] reveal-card opacity-0 translate-y-6 transform transition-all duration-700 ease-out p-6 rounded-xl h-[180px] shadow-lg border border-white/5 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex text-yellow-400 mb-3">★★★★★</div>
              <p className="text-gray-300 text-sm mb-4">
                The best UI kit I've used. UI Blox is a game‑changer for designers.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                <div>
                  <p className="font-semibold text-sm">David Miller</p>
                  <p className="text-xs text-gray-500">Lead Software Engineer</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1D] reveal-card opacity-0 translate-y-6 transform transition-all duration-700 ease-out p-6 rounded-xl h-[180px] shadow-lg border border-white/5 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex text-yellow-400 mb-3">★★★★★</div>
              <p className="text-gray-300 text-sm mb-4">
                Absolutely love UI Blox! Clean design and ease of use are unmatched.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                <div>
                  <p className="font-semibold text-sm">Jillie Bernard</p>
                  <p className="text-xs text-gray-500">Director of Sales</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <div className="bg-[#1A1A1D] reveal-card opacity-0 translate-y-6 transform transition-all duration-700 ease-out p-6 rounded-xl h-[180px] shadow-lg border border-white/5 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex text-yellow-400 mb-3">★★★★★</div>
              <p className="text-gray-300 text-sm mb-4">
                UI Blox has revolutionized my design process. It's intuitive and fast!
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                <div>
                  <p className="font-semibold text-sm">Jillie Bernard</p>
                  <p className="text-xs text-gray-500">Founder & CEO</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1D] reveal-card opacity-0 translate-y-6 transform transition-all duration-700 ease-out p-6 rounded-xl h-[260px] flex flex-col justify-between shadow-lg border border-white/5 hover:-translate-y-2 hover:shadow-2xl">
              <div>
                <div className="flex text-yellow-400 mb-3">★★★★★</div>
                <p className="text-gray-300 text-sm">
                  UI Blox’s intuitive interface and powerful features drastically improved my
                  workflow, letting me focus more on creativity and less on tedious tasks.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                <div>
                  <p className="font-semibold text-sm">David Miller</p>
                  <p className="text-xs text-gray-500">Lead Software Engineer</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1D] reveal-card opacity-0 translate-y-6 transform transition-all duration-700 ease-out p-6 rounded-xl h-[180px] shadow-lg border border-white/5 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex text-yellow-400 mb-3">★★★★★</div>
              <p className="text-gray-300 text-sm mb-4">
                Absolutely love UI Blox! Clean design and ease of use are unmatched.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                <div>
                  <p className="font-semibold text-sm">Jillie Bernard</p>
                  <p className="text-xs text-gray-500">Director of Sales</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            <div className="bg-[#1A1A1D] reveal-card opacity-0 translate-y-6 transform transition-all duration-700 ease-out p-6 rounded-xl h-[260px] flex flex-col justify-between shadow-lg border border-white/5 hover:-translate-y-2 hover:shadow-2xl">
              <div>
                <div className="flex text-yellow-400 mb-3">★★★★★</div>
                <p className="text-gray-300 text-sm">
                  Absolutely love UI Blox! Intuitive interface, clean design — perfect for
                  beginners and pros. A game‑changer!
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                <div>
                  <p className="font-semibold text-sm">Jillie Bernard</p>
                  <p className="text-xs text-gray-500">Founder & CEO</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1D] reveal-card opacity-0 translate-y-6 transform transition-all duration-700 ease-out p-6 rounded-xl h-[180px] shadow-lg border border-white/5 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex text-yellow-400 mb-3">★★★★★</div>
              <p className="text-gray-300 text-sm mb-4">
                The best UI kit I've used. UI Blox is a game‑changer for designers.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                <div>
                  <p className="font-semibold text-sm">David Miller</p>
                  <p className="text-xs text-gray-500">Lead Software Engineer</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1D] reveal-card opacity-0 translate-y-6 transform transition-all duration-700 ease-out p-6 rounded-xl h-[180px] shadow-lg border border-white/5 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex text-yellow-400 mb-3">★★★★★</div>
              <p className="text-gray-300 text-sm mb-4">
                Absolutely love UI Blox! Clean design and ease of use are unmatched.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-500"></div>
                <div>
                  <p className="font-semibold text-sm">Jillie Bernard</p>
                  <p className="text-xs text-gray-500">Director of Sales</p>
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
