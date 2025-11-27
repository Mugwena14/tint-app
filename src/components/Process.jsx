import React from 'react'
import { motion } from "framer-motion";

const Process = () => {

    const steps = [
        { num: 1, img: "/images/spray.jpeg", text: "Spray and loosen surface dirt." },
        { num: 2, img: "/images/wash.jpeg", text: "Wash exterior thoroughly." },
        { num: 3, img: "/images/apply.png", text: "Apply treatments and polish trim." },
        { num: 4, img: "/images/final-result.png", text: "Final shine and protective finish." },
    ];

    return (
        <section 
            className="w-full py-20 text-white relative overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/images/background.jpeg')" }}
        >

            {/* BLUR THE BACKGROUND IMAGE */}
            <div className="absolute inset-0 backdrop-blur-sm"></div>

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

                {/* BLUE LINE ABOVE HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="w-14 h-[3px] bg-[#c9a24d]/90 mx-auto mb-3"
                ></motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-2xl font-semibold mb-10 -mt-12"
                >
                    Process
                </motion.h2>

                {/* 4x4 square layout */}
                <div className="grid md:grid-cols-4 gap-5 relative place-items-center">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative flex justify-center"
                        >

                            {/* FLOATING NUMBER */}
                            <span className="absolute -left-1 -translate-x-1/2 -translate-y-7 -top-10
                                text-[140px] font-bold text-[#c9a24d]/90 select-none z-0">
                                {step.num}
                            </span>

                            {/* SMALLER SQUARE CARD */}
                            <div className="relative z-10 aspect-square w-[200px] overflow-hidden shadow-lg group bg-black/20">

                                <img
                                    src={step.img}
                                    alt={step.num}
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                />

                                <div className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur-sm p-3 text-xs">
                                    {step.text}
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Process;
