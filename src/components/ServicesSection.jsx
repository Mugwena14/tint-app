import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight, Instagram, Twitter, Facebook, Menu } from "lucide-react";

const ServicesSection = () => {

    const services = [
        {
        title: "Car Wash",
        description:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
        },
        {
        title: "Chemical Wash",
        description:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
        },
        {
        title: "Steam Wash",
        description:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
        },
    ];

    return (
        <section className="w-full py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-900 mb-10"
                >
                Services
                </motion.h2>


                <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition cursor-pointer"
                >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
                </p>
                </motion.div>
                ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesSection