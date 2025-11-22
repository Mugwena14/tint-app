import React from "react";
import { motion } from "framer-motion";

const ServicesSection = () => {
    const services = [
        {
            title: "Car Window Tinting",
            image: "/images/car-tint.png",
            description:
                "Enhance your vehicle’s appearance while reducing heat and glare for a cooler, more comfortable drive.",
        },
        {
            title: "Home Window Tinting",
            image: "/images/window-tint.png",
            description:
                "Improve privacy, reduce energy costs, and protect your interior from harmful UV rays.",
        },
        {
            title: "Office Glass Tinting",
            image: "/images/door-tint.png",
            description:
                "Add style, privacy, and UV protection to your office doors with high-quality, long-lasting tint films.",
        },
    ];

    const fixedBg = "/images/car-tint.png";

    return (
        <section className="w-full py-20 relative -mt-10 overflow-hidden">

            {/* FIXED BACKGROUND */}
            <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{ backgroundImage: `url(${fixedBg})` }}
                className="absolute inset-0 bg-cover bg-center"
            />

            {/* DARK OVERLAY */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.55 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-black"
            />

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative">

                <div className="grid md:grid-cols-2 gap-16 relative">

                    {/* LEFT SIDE TEXT */}
                    <div className="relative text-white text-center md:text-left">

                        {/* Background text layer */}
                        <div className="relative flex justify-center md:block">
                            
                            {/* Blue line — hide on mobile */}
                            <div className="absolute left-1/2 md:left-16 top-4 h-[40px] w-[3px] bg-blue-400 hidden md:block -translate-x-1/2 md:translate-x-0"></div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="
                                    absolute 
                                    top-0
                                    text-[50px]
                                    sm:text-[80px]
                                    md:text-[100px]
                                    font-semibold 
                                    text-gray-300/30 
                                    pointer-events-none 
                                    select-none
                                "
                            >
                                Services
                            </motion.h2>

                            <h2 className="absolute top-[24px] text-xl sm:text-2xl font-semibold text-white">
                                Services
                            </h2>
                        </div>

                        <p className="
                            mt-28 
                            text-gray-200 
                            leading-relaxed 
                            text-sm sm:text-base
                            max-w-md 
                            mx-auto 
                            md:mx-0
                        ">
                            High-quality window tinting designed to improve comfort,
                            privacy, and protection for your car or home, while reducing
                            heat and preserving interior materials.
                        </p>

                    </div>

                    {/* RIGHT SIDE — CARDS */}
                    <div className="
                        flex 
                        flex-col 
                        md:flex-row 
                        md:space-x-6 
                        gap-6
                        items-center 
                        md:items-start
                    ">

                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.15, ease: "easeOut" }}
                                className="
                                    bg-white/10
                                    backdrop-blur-2xl
                                    p-6
                                    rounded-xl
                                    border border-white/25
                                    shadow-lg hover:shadow-2xl
                                    cursor-pointer
                                    w-full
                                    md:w-[320px]
                                "
                            >
                                <h3 className="text-lg font-semibold text-center text-white mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-200 text-sm leading-relaxed text-center">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
};

export default ServicesSection;
