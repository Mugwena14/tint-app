import React from 'react'
import { ArrowRight, Instagram, Twitter, Facebook, Menu } from "lucide-react";

const NavBar = () => {
return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
            <div className="flex items-center gap-2 text-blue-600 font-bold text-xl">
                Trintish Tints
            </div>


            <div className="hidden md:flex items-center gap-8 text-gray-700">
                {[
                "Home",
                "Services",
                "Process",
                "Pricing",
                "Blog",
                "Testimonials",
                "Contact Us",
                ].map((link) => (
                <button key={link} className="hover:text-blue-600 text-sm transition">
                {link}
                </button>
                ))}
            </div>


            <a 
                href="https://wa.me/27688287061"
                target="_blank"
                className="hidden md:block text-sm bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                Book Service Now
            </a>


            <Menu className="md:hidden text-gray-700" />
        </div>
    </nav>
);
}

export default NavBar

