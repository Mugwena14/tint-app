import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
    const stats = [
        {
            num: "1",
            percent: "91%",
            title: "Top-Quality Tinting",
            desc: "We provide exceptional tinting services using premium-grade film designed for durability.",
        },
        {
            num: "2",
            percent: "89%",
            title: "Customer Satisfaction",
            desc: "Most of our clients rate us above expectations thanks to our precision and service quality.",
        },
        {
            num: "3",
            percent: "83%",
            title: "Repeat Clients",
            desc: "A large portion of our customers return for additional vehicles or recommend us to others.",
        },
    ];

    return (
        <section className="w-full -mt-24 py-24 mb-0 bg-white">
            <div className="max-w-7xl grid md:grid-cols-2 gap-0">

                {/* ================= LEFT SIDE ================= */}
                <div className="relative bg-[#0f2629] text-white p-12 flex flex-col justify-center min-h-[650px]">

                    <h2 className="text-6xl md:text-8xl font-bold leading-tight mb-6">
                        Why <br /> Choose <br /> Us?
                    </h2>

                    <p className="text-gray-300 text-[30px] leading-relaxed max-w-sm">
                        The numbers speak for themselves.
                    </p>

                    {/* Circles positioned on right edge of LEFT div */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-16 pr-0">

                        {stats.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div
                                    className="
                                        w-30 h-30 rounded-full
                                        flex items-center justify-center
                                        text-white text-2xl font-bold
                                        shadow-2xl border-4 border-white
                                        self-end translate-x-1/2
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
                <div className="flex flex-col justify-center pl-20 md:pl-28 gap-20">

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
