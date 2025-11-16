import React from 'react';
import { motion } from "framer-motion";

const ServicesSection = () => {

    const services = [
        {
            title: "Car Window Tinting",
            description:
            "Enhance your vehicle’s appearance while reducing heat and glare for a cooler, more comfortable drive.",
        },
        {
            title: "Home Window Tinting",
            description:
            "Improve privacy, reduce energy costs, and protect your interior from harmful UV rays.",
        },
        {
            title: "Home Glass Tinting",
            description:
            "Add style, privacy, and UV protection to your home or office doors with high-quality, long-lasting tint films.",
        },
    ];

    return (
        <section className="w-full py-20 relative">
            <div className="max-w-7xl mx-auto px-6 relative ">

                {/* MAIN 2-COLUMN LAYOUT */}
                <div className="grid md:grid-cols-2 gap-16 relative">

                    {/* LEFT SIDE */}
                    <div className="relative">

                    {/* BACKGROUND LARGE TEXT */}
                    <div className="relative">
                        {/* SMALL VERTICAL LINE */}
                        <div className="absolute left-18 top-4 h-[40px] w-[3px] bg-blue-800"></div>

                        {/* BACKGROUND H2 */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="absolute ml-20 top-0 text-7xl font-semibold text-gray-200 pointer-events-none select-none"
                        >
                            Services
                        </motion.h2>

                        {/* FOREGROUND SMALL H2 */}
                        <h2 className="absolute ml-20 left-0 top-[21px] ml-6 text-[23px] font-semibold text-gray-800">
                            Services
                        </h2>
                    </div>

                    {/* PARAGRAPH */}
                    <div className="mt-[80px]">
                        <p className="text-gray-600 ml-18 leading-relaxed">
                            High-quality window tinting designed to improve comfort, <br /> 
                            privacy, and protection for your car or home, while <br />
                            reducing heat and preserving interior materials..
                        </p>
                    </div>
                    </div>

                    {/* RIGHT SIDE — Horizontal Divs */}
                    <div className="flex items-start space-x-6 -ml-32">

                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition cursor-pointer w-[600px]"
                            >
                                <h3 className="text-base font-semibold text-center text-gray-900 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
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
