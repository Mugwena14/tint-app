import React from "react";
import { ArrowRight } from "lucide-react";

const About = () => {
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
    <section className="w-full bg-white -mt-20 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <div>
          <h2 className="text-2xl font-semibold text-[#c9a24d] mb-4 tracking-wide">ABOUT US</h2>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
                We specialize in professional window tinting for cars, homes, 
                and offices — enhancing privacy, reducing heat, and improving comfort with 
                clean, high‑quality finishes. Whether you're looking for cooler drives, 
                energy-efficient spaces, or added UV protection, we deliver reliable tinting 
                solutions tailored to your needs.
            </p>

          <div className="flex gap-4">
            <button className="bg-[#c9a24d] text-white px-6 py-3 rounded shadow-md hover:bg-[#c9a24d]/90 transition">
              LEARN MORE
            </button>
            <button className="border border-[#c9a24d] text-[#c9a24d] px-6 py-3 rounded flex items-center gap-2 hover:bg-[#c9a24d] hover:text-white transition">
              Watch Video <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Right Stats Grid */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 shadow-sm rounded-md border-[#c9a24d] text-center"
            >
              <h3 className="text-xl font-semibold mb-1">{item.value}</h3>
              <p className="text-gray-500 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tint Percentages Section */}
      <div className="max-w-7xl mx-auto mt-20">
        <p className="text-gray-700 mb-6 text-lg font-semibold">
          We provide different car window tint percentages to suit your needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tintCards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-lg p-4 border-[#c9a24d] hover:shadow-lg transition cursor-pointer"
            >
              <img
                src={card.img}
                alt={card.label}
                className="w-full h-40 object-cover rounded"
              />
              <p className="text-center mt-3 font-medium text-gray-700">
                {card.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
