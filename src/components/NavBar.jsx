import React from 'react'
import { ArrowRight, Instagram, Twitter, Facebook, Menu } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src="https://res.cloudinary.com/dkmzveqce/image/upload/v1763676319/ChatGPT_Image_Nov_20_2025_11_56_56_PM_uffggh.png" 
            alt="Tintish Logo" 
            className="h-10 ml-25 my-2 w-auto object-contain"
          />
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700">
          {[
            "Home",
            "Services",
            "Process",
            "Pricing",
            "Testimonials",
            "Contact Us",
          ].map((link) => (
            <button key={link} className="hover:text-blue-600 text-sm transition">
              {link}
            </button>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://wa.me/27688287061"
          target="_blank"
          className="hidden md:block text-sm bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Book Service Now
        </a>

        {/* Mobile Menu Icon */}
        <Menu className="md:hidden text-gray-700" />
      </div>
    </nav>
  );
};

export default NavBar;
