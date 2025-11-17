import React from 'react'
import { motion } from "framer-motion";

const Process = () => {

    const steps = [
        { num: 1, img: "/process1.jpg", text: "Brush, Vacuum, And Clean The Interior." },
        { num: 2, img: "/process2.jpg", text: "Clean Wheels And Tires, Wash Exterior. Tire Dressing." },
        { num: 3, img: "/process3.jpg", text: "Polish Wheels, Clean & Treat Exterior Trim." },
        { num: 4, img: "/process4.jpg", text: "Polish And Then Wax Exterior Paints." },
    ];

    return (
        <section className="w-full py-20 bg-blue-900/90 text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl font-semibold mb-12"
                >
                    Process
                </motion.h2>

                {/* 4x4 square layout */}
                <div className="grid md:grid-cols-4 gap-10 relative place-items-center">
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
                                text-[140px] font-bold text-blue-700/40 select-none z-0">
                                {step.num}
                            </span>

                            {/* SMALLER SQUARE CARD */}
                            <div className="relative z-10 aspect-square w-[220px] overflow-hidden shadow-lg group bg-black/20">

                                <img
                                    src={step.img}
                                    alt={step.text}
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
