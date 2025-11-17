import React, { useState } from "react";
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

    const [bgImage, setBgImage] = useState(services[0].image);

    return (
        <section className="w-full py-20 relative overflow-hidden">

            {/* BACKGROUND IMAGE */}
            <motion.div
                key={bgImage}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                style={{
                    backgroundImage: `url(${bgImage})`,
                }}
                className="absolute inset-0 bg-cover bg-center"
            />

            {/* DARK OVERLAY */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.55 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-black"
            />

            <div className="max-w-7xl mx-auto px-6 relative">

                <div className="grid md:grid-cols-2 gap-16 relative">

                    {/* LEFT SIDE TEXT */}
                    <div className="relative text-white">

                        {/* BACKGROUND TEXT LAYER */}
                        <div className="relative">
                            <div className="absolute left-18 top-4 h-[40px] w-[3px] bg-blue-400"></div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="absolute ml-20 top-0 text-7xl font-semibold text-gray-300/30 pointer-events-none select-none"
                            >
                                Services
                            </motion.h2>

                            <h2 className="absolute ml-20 left-0 top-[21px] ml-6 text-[23px] font-semibold text-white">
                                Services
                            </h2>
                        </div>

                        <div className="mt-[80px]">
                            <p className="text-gray-200 ml-18 leading-relaxed">
                                High-quality window tinting designed to improve comfort, <br />
                                privacy, and protection for your car or home, while <br />
                                reducing heat and preserving interior materials.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT SIDE — GLASS CARDS */}
                    <div className="flex items-start space-x-6 -ml-32">

                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                onMouseEnter={() => setBgImage(service.image)}
                                onMouseLeave={() => setBgImage(services[0].image)}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                
                                className="
                                    bg-transparent
                                    backdrop-blur-2xl
                                    p-6
                                    rounded-xl
                                    border border-white/25
                                    shadow-lg hover:shadow-2xl
                                    transition
                                    cursor-pointer
                                    w-[600px]
                                "
                                whileHover={{ scale: 1.03 }}
                            >
                                <h3 className="text-base font-semibold text-center text-white mb-3">
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
