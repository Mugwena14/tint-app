import React from 'react'
import { motion } from "framer-motion";
import { ArrowRight, Instagram, Twitter, Facebook } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="w-full bg-white pt-32 pb-8 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* ================= LEFT SIDE (TEXT AREA) ================= */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col gap-6 ml-18" 
                >
                    {/* HEADLINE */}
                    <div className="space-y-4 -mt-10">
                        <h1 className="text-4xl font-semibold leading-[1.1] text-gray-800">
                            <span className="relative inline-block">
                                <span className="absolute left-0 top-0 h-[4px] w-20 bg-blue-600 rounded-sm -translate-y-8"></span>
                                Tinting done Right.
                            </span>

                            <br />
                            For{" "}
                            <span className="text-gray-800">
                                Your Space.
                            </span>
                        </h1>

                        <p className="text-gray-500 leading-relaxed text-[15px]">
                            Experience cooler interiors, added privacy, and long-lasting <br />
                            clarity with professional tinting made for every window <br />
                            you own, designed to reduce heat, block UV rays,<br /> 
                            and add instant privacy and style.
                        </p>
                    </div>

                    {/* BUTTON */}
                    <button className="group relative inline-flex items-center gap-2 overflow-hidden w-fit">
                        <span className="absolute inset-0 bg-blue-600 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>

                        <span className="relative z-10 px-4 py-3 bg-blue-600 text-white transition-colors duration-300 group-hover:bg-transparent">
                            Explore
                        </span>

                        <span className="relative -ml-4 z-10 text-blue-600 group-hover:text-white transition-colors duration-300">
                            <span className="text-white">S</span>ervices
                        </span>

                        <ArrowRight
                            size={18}
                            className="relative z-10 text-blue-600 group-hover:text-white transition-colors duration-300"
                        />
                    </button>

                    {/* SOCIALS */}
                    <div className="flex items-center gap-4 text-blue-600 pt-2">
                        <Instagram size={18} className="-mt-2 cursor-pointer" />
                        <Facebook size={18} className="-mt-2 cursor-pointer" />
                        <Twitter size={18} className="-mt-2 cursor-pointer" />
                    </div>
                </motion.div>



                {/* ================= RIGHT SIDE (IMAGE AREA) ================= */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="relative w-full flex justify-center items-center -mt-16"
                >
                    {/* BLUE ACCENT BOX */}
                    <div className="absolute top-[-1rem] bottom-[-3rem] right-4 w-[75%] bg-blue-600"></div>
                    {/* IMAGE */}
                    <img
                    src="/images/car.png"
                    alt="Car"
                    className="relative z-10 w-[820px] -mt-10 max-w-none drop-shadow-xl"
                    />
                </motion.div>

            </div>
        </section>
    )
}

export default HeroSection;
