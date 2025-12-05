import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import LearnMoreModal from "./LearnMoreModal";

const About = () => {
  const [open, setOpen] = useState(false);

  const stats = [
    { value: "500+", label: "Completed Projects" },
    { value: "50+", label: "On Going Projects" },
    { value: "200+", label: "Happy Clients" },
    { value: "25+", label: "Offices throughout GLOB" },
  ];

  const tintCards = [
    { img: "https://res.cloudinary.com/dkmzveqce/image/upload/v1764205095/97ef7b95-5b21-484a-a6d6-98eafa64a4ac_s7pngg.jpg", label: "5% Tint" },
    { img: "https://res.cloudinary.com/dkmzveqce/image/upload/v1764205095/02c7819c-959f-44e5-8bc6-2693a48ee615_vnieei.jpg", label: "20% Tint" },
    { img: "https://res.cloudinary.com/dkmzveqce/image/upload/v1764205095/5c7e4a70-e604-4cc8-8eb1-f244ec5467a3_tpqyof.jpg", label: "35% Tint" },
    { img: "https://res.cloudinary.com/dkmzveqce/image/upload/v1764205095/0a5d75b3-8d39-47be-84ef-75b10bf6159e_ouhfjc.jpg", label: "50% Tint" },
  ];

  return (
    <>
      <section id="about" className="w-full bg-white -mt-20 py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-[#0390fc] mb-4 tracking-wide">
              ABOUT US
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
              We specialize in professional window tinting for cars, homes, 
              and offices — enhancing privacy, reducing heat, and improving comfort with 
              clean, high-quality finishes. Whether you're looking for cooler drives, 
              energy-efficient spaces, or added UV protection, we deliver reliable tinting 
              solutions tailored to your needs.
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => setOpen(true)}
                className="bg-[#0390fc] text-white px-6 py-3 rounded shadow-md hover:bg-[#0390fc]/90 transition"
              >
                LEARN MORE
              </button>

              <a href="https://www.tiktok.com/@tint.ish" className="border border-[#0390fc] text-[#0390fc] px-6 py-3 rounded flex items-center gap-2 hover:bg-[#0390fc] hover:text-white transition">
                Watch Videos <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="hidden md:grid grid-cols-2 gap-6">
            {stats.map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 shadow-sm rounded-md border-[#0390fc] text-center"
              >
                <h3 className="text-xl font-semibold mb-1">{item.value}</h3>
                <p className="text-gray-500 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

          <div className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
            <p className="text-gray-700 mb-8 text-lg sm:text-xl font-semibold text-center md:text-left">
              We provide different car window tint percentages to suit your needs.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {tintCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white shadow-sm rounded-lg p-4 border-[#0390fc] hover:shadow-lg transition cursor-pointer flex flex-col"
                >
                  <div className="w-full h-48 sm:h-52 md:h-56 lg:h-60 rounded overflow-hidden">
                    <img
                      src={card.img}
                      alt={card.label}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-center mt-3 font-medium text-gray-700 text-sm sm:text-base">
                    {card.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

      </section>

      <LearnMoreModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default About;
