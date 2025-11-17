import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full bg-[#0d141f] text-gray-300 py-8">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 relative">

                {/* LOGO + DESCRIPTION */}
                <div>
                    <img src="/images/logo.png" alt="Logo" className="w-20 mb-4" />

                    <p className="text-sm leading-relaxed">
                        We deliver premium tinting and detailing services right at 
                        your <bold>DOORSTEP,</bold> ensuring quality results with a smooth and 
                        professional experience.
                    </p>
                </div>

                {/* OFFICE INFO */}
                <div>
                    <h3 className="text-basic font-semibold text-white mb-4">Located</h3>

                    <p className="flex items-start gap-3 mb-3 text-sm">
                        <MapPin size={16} className="mt-1" />
                        Gauteng • Kempton Park<br />
                    </p>

                    {/* CLICKABLE PHONE */}
                    <p
                        className="flex items-center gap-3 mb-3 text-sm ">
                        <Phone size={16} /> +27 688 287 061
                    </p>

                    {/* CLICKABLE WHATSAPP */}
                    <p 
                        className="flex items-center gap-3 text-sm"
                    >
                        <FaWhatsapp size={18} /> Chat on WhatsApp
                    </p>
                </div>

                {/* SERVICE AREAS */}
                <div>
                    <h3 className="text-basic font-semibold text-white mb-4">Service Areas</h3>

                    <ul className="space-y-2 text-sm">
                        <li>Johannesburg</li>
                        <li>Pretoria</li>
                        <li>& Surrounding <br /> Areas</li>
                    </ul>
                </div>

                {/* CALL TO ACTION */}
                <div className="relative">

                    {/* BACKGROUND H2 */}
                    <h2 className="absolute top-10 -left-10 text-[80px] font-extrabold 
                                   text-blue-500/10 tracking-wider select-none pointer-events-none
                                   leading-none whitespace-nowrap z-0">
                        CONTACTS
                    </h2>

                    <h3 className="text-basic font-semibold text-white mb-4 relative z-10">
                        Book Now
                    </h3>

                    <div className="flex items-center gap-4 relative z-10">

                        {/* PHONE CTA */}
                        <a 
                            href="tel:+27688287061"
                            className="w-10 h-10 rounded-full flex items-center justify-center 
                                       bg-blue-600/20 hover:bg-blue-600/40 transition"
                        >
                            <Phone size={18} />
                        </a>

                        {/* WHATSAPP CTA */}
                        <a 
                            href="https://wa.me/27688287061"
                            target="_blank"
                            className="w-10 h-10 rounded-full flex items-center justify-center 
                                       bg-green-600/20 hover:bg-green-600/40 transition"
                        >
                            <FaWhatsapp size={20} />
                        </a>

                        {/* TIKTOK CTA */}
                        <a 
                            href="https://www.tiktok.com"
                            target="_blank"
                            className="w-10 h-10 rounded-full flex items-center justify-center 
                                       bg-white/10 hover:bg-white/20 transition"
                        >
                            <FaTiktok size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* BOTTOM COPYRIGHT */}
            <div className="text-center text-xs text-gray-500 mt-12 border-t border-white/10 pt-6">
                © 2025 Car Tint service. ALL RIGHTS RESERVED
            </div>
        </footer>
    );
};

export default Footer;
