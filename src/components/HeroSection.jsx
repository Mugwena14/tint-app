import React from 'react'
import { motion } from "framer-motion";
import { ArrowRight, Instagram, Twitter, Facebook, Menu } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="w-full bg-white pt-32 pb-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Text */}
                <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                >
                <h1 className="text-5xl font-bold leading-tight text-gray-900 mb-6">
                    Buffer free car <br /> is our <span className="text-black">Pride</span>
                </h1>


                <p className="text-gray-500 leading-relaxed mb-6">
                    Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
                    Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
                </p>


                <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-md flex items-center gap-2">
                    Explore Services <ArrowRight size={18} />
                </button>


                {/* Socials */}
                <div className="flex items-center gap-4 mt-6 text-blue-600">
                <Instagram className="cursor-pointer" />
                <Facebook className="cursor-pointer" />
                <Twitter className="cursor-pointer" />
                </div>
                </motion.div>


                {/* Car Image */}
                <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="relative w-full flex justify-center"
                >
                <div className="absolute inset-y-0 right-0 w-2/3 bg-blue-600 rounded-l-2xl"></div>
                <img
                src="/car.png"
                alt="Car"
                className="relative z-10 w-[90%] drop-shadow-xl"
                />
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection;