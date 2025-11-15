import React from 'react'
import { ArrowRight, Instagram, Twitter, Facebook, Menu } from "lucide-react";

const NavBar = () => {
return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-2 text-blue-600 font-bold text-xl">
            <span className="text-3xl">🚘</span> Trintish Tints
            </div>


            <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
                {[
                "Home",
                "Services",
                "Process",
                "Pricing",
                "Blog",
                "Testimonials",
                "Contact",
                ].map((link) => (
                <button key={link} className="hover:text-blue-600 transition">
                {link}
                </button>
                ))}
            </div>


            <button className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                Book Service Now
            </button>


            <Menu className="md:hidden text-gray-700" />
        </div>
    </nav>
);
}

export default NavBar

