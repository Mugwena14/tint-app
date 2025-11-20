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
        <section className="w-full -mt-24 py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-0">

                {/* ================= LEFT SIDE ================= */}
                <div className="relative bg-[#0f2629] text-white p-12 flex flex-col justify-center min-h-[650px]">

                    <h2 className="text-6xl md:text-8xl font-bold leading-tight mb-6">
                        Why <br /> Choose <br /> Us?
                    </h2>

                    <p className="text-gray-300 text-[30px] leading-relaxed max-w-sm">
                        The numbers speak for themselves.
                    </p>

                    {/* Circles */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-16">

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
                                        w-30 h-30 rounded-full
                                        flex items-center justify-center
                                        text-white text-2xl font-bold
                                        shadow-2xl border-4 border-white
                                        translate-x-1/2
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

                {/* ================= RIGHT SIDE ================= */}
                <div className="flex flex-col justify-center pl-20 md:pl-28 gap-24">

                    {stats.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-semibold text-gray-900">
                                {item.percent} {item.title}
                            </h3>

                            <p className="text-gray-500 mt-1 leading-relaxed max-w-md">
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
