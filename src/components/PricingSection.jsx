import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const PricingSection = () => {
    const phoneNumber = "27688287061";

    const plans = [
        {
            name: "Car Tinting",
            price: "From R500",
            description:
                "Affordable car tinting with transparent pricing based on vehicle type and tint level.",
        },
        {
            name: "Home Tinting",
            price: "From R500",
            description:
                "Competitive pricing for residential and commercial window tinting, calculated per panel size.",
        },
        {
            name: "Office Tinting",
            price: "From R500",
            description:
                "Cost-effective door tinting with rates depending on glass dimensions and chosen film grade.",
        },
    ];

    const formatMessage = (serviceName) => {
        return encodeURIComponent(`Hi! How much do ${serviceName} prices start at?`);
    };

    return (
        <section className="w-full py-24 bg-white px-6 mx-20 md:px-12">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

                {/* LEFT SIDE — HORIZONTAL CARDS */}
                <div className="flex flex-row gap-6 items-start">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="
                                bg-white 
                                border border-gray-200 
                                rounded-xl 
                                p-6 
                                shadow-sm 
                                hover:shadow-md 
                                transition 
                                cursor-pointer
                                w-[260px]
                                flex flex-col items-start
                            "
                        >
                            {/* Combined name + price */}
                            <div className="flex items-start gap-2 mb-3">
                                <span className="w-1 h-[38px] bg-blue-600 rounded block"></span>

                                <div>
                                    <h3 className="text-[13px] font-semibold text-gray-900">
                                        {plan.name}
                                    </h3>
                                    <p className="text-gray-800 font-bold text-[18px] -mt-1">
                                        {plan.price}
                                    </p>
                                </div>
                            </div>

                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                {plan.description}
                            </p>

                            {/* WHATSAPP BUTTON */}
                            <a
                                href={`https://wa.me/${phoneNumber}?text=${formatMessage(plan.name)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-2 border border-blue-600 text-blue-600 
                                           rounded-lg hover:bg-blue-600 hover:text-white 
                                           transition text-center"
                            >
                                More Info
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* RIGHT SIDE */}
                <div className="relative flex flex-col justify-center">

                    {/* BACKGROUND TITLE */}
                    <span className="absolute left-0 top-3 h-[45px] w-1 bg-blue-600 rounded"></span>

                    <h2
                        className="
                            absolute 
                            top-0 
                            left-0 
                            text-[60px] md:text-[70px]
                            font-extrabold 
                            text-gray-200 
                            leading-none 
                            select-none 
                            pointer-events-none
                            ml-2
                        "
                    >
                        Pricing
                    </h2>

                    <h2 className="relative text-3xl font-semibold text-gray-800 ml-2 mb-6 -mt-12">
                        Pricing
                    </h2>

                    <p className="text-gray-500 leading-relaxed max-w-md mb-10">
                        Our pricing is structured to give you the best value for your vehicle or property,
                        with transparent rates based on size, film type, and service level.
                    </p>

                    <div className="flex items-center gap-6 text-gray-700">
                        <button className="hover:text-blue-600 transition">
                            <ArrowLeft size={22} />
                        </button>
                        <button className="hover:text-blue-600 transition">
                            <ArrowRight size={22} />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PricingSection;
