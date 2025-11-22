import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
    const stats = [
        {
            num: "1",
            percent: "94%",
            title: "Trusted by Leading Brands",
            desc: "From car dealerships to corporate fleets, top businesses rely on us for consistent, high-standard tinting work they can trust.",
        },
        {
            num: "2",
            percent: "92%",
            title: "Exceptional Customer Satisfaction",
            desc: "Clients consistently rate our service highly for workmanship, professionalism, and attention to detail.",
        },
        {
            num: "3",
            percent: "87%",
            title: "High Return & Referral Rate",
            desc: "Most of our customers return with new vehicles and recommend us to friends, family, and colleagues.",
        },
    ];

    return (
        <section className="w-full -mt-20 py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2">

                {/* ================ LEFT SIDE ================ */}
                <div className="relative bg-[#0f2629] text-white p-10 sm:p-12 flex flex-col justify-center min-h-[500px]">

                    <h2 className="
                        text-4xl sm:text-5xl md:text-7xl 
                        font-bold leading-tight mb-6 text-center md:text-left
                    ">
                        Why <br className="hidden sm:block"/> Choose <br className="hidden sm:block"/> Us?
                    </h2>

                    <p className="text-gray-300 text-lg sm:text-xl leading-relaxed text-center md:text-left">
                        The numbers speak for themselves.
                    </p>

                    {/* Circles — move below text on mobile */}
                    <div className="
                        flex md:flex-col gap-10
                        justify-center md:justify-start
                        mt-12 md:mt-0
                        md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2
                    ">
                        {stats.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <div
                                    className="
                                        w-20 h-20 sm:w-24 sm:h-24 rounded-full
                                        flex items-center justify-center
                                        text-white text-xl sm:text-2xl font-bold
                                        shadow-2xl border-4 border-white
                                    "
                                    style={{
                                        background:
                                            i === 0
                                                ? "#0f4f8d"
                                                : i === 1
                                                ? "#2d4b56"
                                                : "#b58b00",
                                    }}
                                >
                                    {item.num}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ================ RIGHT SIDE ================ */}
                <div className="
                    flex flex-col justify-center 
                    px-4 sm:px-10 md:px-20 
                    gap-16 mt-16 md:mt-0
                    text-center md:text-left
                ">
                    {stats.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                                {item.percent} {item.title}
                            </h3>

                            <p className="text-gray-500 mt-1 leading-relaxed max-w-md mx-auto md:mx-0">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;
