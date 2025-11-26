import React from 'react'
import { motion } from "framer-motion";
import { ArrowRight, Instagram, Twitter, Facebook } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="w-full pt-32 md:pt-32 pb-8 overflow-hidden relative"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dkmzveqce/image/upload/v1763624731/ChatGPT_Image_Nov_20_2025_09_38_31_AM_unlcuw.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Gradient removed on small screens */}
        <div
          className="absolute inset-y-0 right-0 w-2/5 hidden md:block"
          style={{
            background: `linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)`,
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
          }}
        ></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 text-center md:text-left"
        >
          <div className="space-y-4 -mt-2 md:-mt-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white">

              <span className="relative inline-block">
                {/* Blue line hidden on mobile */}
                <span className="absolute hidden md:block left-0 top-0 h-[4px] w-20 bg-[#e68a00ff] rounded-sm -translate-y-8"></span>
                Tintish Window Tinting
              </span>

              <br />

              <span className="text-gray-200 text-lg sm:text-xl md:text-2xl">
                Precision. Privacy. Comfort.
              </span>
            </h1>

            <p className="text-[12px] sm:text-[13px] md:text-[14px] font-medium text-[#e68a00ff] tracking-wide">
              • Seal of Approval — Trusted & Certified Tinting •
            </p>

            <p className="text-gray-300 leading-relaxed text-[14px] sm:text-[15px] md:text-[16px] max-w-md mx-auto md:mx-0">
              Premium tinting crafted for durability, clarity, and heat control.
              Enhance your car, home, or workspace with high-grade films designed
              to block UV rays, increase privacy, and deliver a sleek, modern finish.
            </p>
          </div>

          {/* BUTTON */}
          <button className="group relative inline-flex items-center gap-2 overflow-hidden w-fit mx-auto md:mx-0">
            <span className="absolute inset-0 bg-yellow-600 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            <span className="relative z-10 px-4 py-3 bg-[#e68a00ff] text-white transition-colors duration-300 group-hover:bg-transparent text-sm sm:text-base">
              Explore
            </span>
            <span className="relative -ml-3 sm:-ml-4 z-10 text-[#e68a00ff] group-hover:text-white transition-colors duration-300 text-sm sm:text-base">
              Services
            </span>
            <ArrowRight
              size={18}
              className="relative z-10 text-[#e68a00ff] group-hover:text-white transition-colors duration-300"
            />
          </button>

          {/* ICONS */}
          <div className="flex items-center justify-center md:justify-start gap-4 text-[#e68a00ff] pt-2">
            <Instagram size={20} className="cursor-pointer" />
            <Facebook size={20} className="cursor-pointer" />
            <Twitter size={20} className="cursor-pointer" />
          </div>
        </motion.div>

        {/* RIGHT SIDE – HIDDEN ON SMALL */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative w-full justify-center items-center -mt-16 hidden md:flex"
        >
          <div className="absolute top-[-1rem] bottom-[-3rem] right-6 w-[80%] bg-[#e68a00ff] shadow-lg"></div>

          <img
            src="/images/car.png"
            alt="Tinted Car"
            className="relative z-10 w-[780px] max-w-none drop-shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;




// import React from 'react' import { motion } from "framer-motion"; import { ArrowRight, Instagram, Twitter, Facebook } from "lucide-react"; const HeroSection = () => { return ( <section className="w-full bg-white pt-32 pb-8 overflow-hidden"> <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"> {/* ================= LEFT SIDE (TEXT AREA) ================= */} <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="flex flex-col gap-6 ml-18" > {/* HEADLINE */} <div className="space-y-4 -mt-10"> <h1 className="text-4xl font-semibold leading-[1.1] text-gray-800"> <span className="relative inline-block"> <span className="absolute left-0 top-0 h-[4px] w-20 bg-blue-600 rounded-sm -translate-y-8"></span> Tinting done Right. </span> <br /> For{" "} <span className="text-gray-800"> Your Space. </span> </h1> <p className="text-gray-500 leading-relaxed text-[15px]"> Experience cooler interiors, added privacy, and long-lasting <br /> clarity with professional tinting made for every window <br /> you own, designed to reduce heat, block UV rays,<br /> and add instant privacy and style. </p> </div> {/* BUTTON */} <button className="group relative inline-flex items-center gap-2 overflow-hidden w-fit"> <span className="absolute inset-0 bg-blue-600 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span> <span className="relative z-10 px-4 py-3 bg-blue-600 text-white transition-colors duration-300 group-hover:bg-transparent"> Explore </span> <span className="relative -ml-4 z-10 text-blue-600 group-hover:text-white transition-colors duration-300"> <span className="text-white">S</span>ervices </span> <ArrowRight size={18} className="relative z-10 text-blue-600 group-hover:text-white transition-colors duration-300" /> </button> {/* SOCIALS */} <div className="flex items-center gap-4 text-blue-600 pt-2"> <Instagram size={18} className="-mt-2 cursor-pointer" /> <Facebook size={18} className="-mt-2 cursor-pointer" /> <Twitter size={18} className="-mt-2 cursor-pointer" /> </div> </motion.div> {/* ================= RIGHT SIDE (IMAGE AREA) ================= */} <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative w-full flex justify-center items-center -mt-16" > {/* BLUE ACCENT BOX */} <div className="absolute top-[-1rem] bottom-[-3rem] right-4 w-[75%] bg-blue-600"></div> {/* IMAGE */} <img src="/images/car.png" alt="Car" className="relative z-10 w-[820px] -mt-10 max-w-none drop-shadow-xl" /> </motion.div> </div> </section> ) } export default HeroSection;
