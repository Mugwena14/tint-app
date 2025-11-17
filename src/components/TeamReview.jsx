import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TeamReview = () => {
    const reviews = [
        {
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            name: "Phoebe Buffay",
            title: "Phoebe Organizations Pvt. Ltd",
            img: "/person1.jpg",
        },
        {
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It has survived not only five centuries.",
            name: "Ross Geller",
            title: "Geller Leather Works",
            img: "/person2.jpg",
        },
        {
            text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            name: "Rachel Green",
            title: "Green Fashion Co.",
            img: "/person3.jpg",
        },
    ];

    return (
        <section className="w-full py-20 bg-white mx-8 relative">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

                {/* LEFT IMAGE */}
                <div>
                    <img
                        src="/images/team.jfif"
                        alt="Team"
                        className="w-[500px] -mt-25 object-cover shadow-lg"
                    />
                </div>

                {/* RIGHT TITLE */}
                <div className="relative -mt-60 -ml-20">

                    {/* BACKGROUND H2 */}
                    <h2 className="absolute -top-10 left-0 text-[90px] font-bold 
                        text-blue-600/10 tracking-wider select-none pointer-events-none 
                        leading-none whitespace-nowrap overflow-visible">
                        TEAM & REVIEW
                    </h2>

                    {/* FOREGROUND TITLE */}
                    <div className="flex items-center gap-3 relative -mt-3 z-10">
                        <span className="w-[4px] h-8 bg-blue-600 -mt-3 rounded-full"></span>

                        <h2 className="text-3xl font-semibold text-gray-800 -ml-1 mb-3">
                            Team & Review
                        </h2>
                    </div>

                    <p className="text-gray-500 max-w-md relative z-10">
                        Behind every project is a team that cares deeply about quality, detail, and 
                        bringing ideas to life in the most impactful way. We take the time to understand 
                        each client’s vision,  and execute with precision to 
                        ensure every outcome not only meets expectations but elevates them. 
                    </p>
                </div>
            </div>

            {/* REVIEW CARD SWIPER */}
            <div
                className="
                    relative 
                    max-w-[600px] 
                    px-6 
                    z-[9999]

                    lg:absolute
                    lg:top-40
                    lg:right-90
                "
            >
                {/* CUSTOM ARROWS */}
                <div className="swiper-button-prev-custom absolute -left-3 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-3 cursor-pointer">
                    <ChevronLeft size={22} className="text-blue-600" />
                </div>

                <div className="swiper-button-next-custom absolute -right-3 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-3 cursor-pointer">
                    <ChevronRight size={22} className="text-blue-600" />
                </div>

                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".swiper-button-prev-custom",
                        nextEl: ".swiper-button-next-custom",
                    }}
                    spaceBetween={20}
                >
                    {reviews.map((r, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-white border border-blue-600/10 rounded-xl shadow-md p-8">

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {r.text}
                                </p>

                                <div className="flex items-center gap-4">
                                    <img
                                        src={r.img}
                                        alt={r.name}
                                        className="w-14 h-14 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{r.name}</h4>
                                        <p className="text-gray-500 text-sm">{r.title}</p>
                                    </div>

                                    <Quote size={34} className="text-blue-600 ml-auto opacity-40" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TeamReview;
