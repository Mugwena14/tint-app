import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Instagram, Twitter, Facebook, Menu, X } from "lucide-react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "Services",
    "Process",
    "Reviews",
    "Contact Us",
  ];

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 md:justify-start justify-start">
          <img
            src="https://res.cloudinary.com/dkmzveqce/image/upload/v1763676319/ChatGPT_Image_Nov_20_2025_11_56_56_PM_uffggh.png"
            alt="Tintish Tinting Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700">
          {links.map((link) => (
            <button key={link} className="hover:text-blue-600 text-sm transition">
              {link}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="https://wa.me/27688287061"
          target="_blank"
          rel="noreferrer noopener"
          className="hidden md:block text-sm bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-400 transition"
        >
          Book Service Now
        </a>

        {/* Mobile Menu Icon (toggle) */}
        <button
          className="md:hidden"
          onClick={() => setOpen((s) => !s)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="text-gray-700" /> : <Menu className="text-gray-700" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            {/* Backdrop */}
            <motion.div
              className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-end"
              onClick={() => setOpen(false)}
              aria-hidden={false}
            >
              {/* Panel */}
              <motion.div
                key="panel"
                initial={{ x: 300 }}
                animate={{ x: 0 }}
                exit={{ x: 300 }}
                transition={{ type: 'tween', duration: 0.25 }}
                className="w-64 h-full bg-white shadow-xl p-6 flex flex-col"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold">Menu</h2>
                  <button onClick={() => setOpen(false)} aria-label="Close menu">
                    <X className="text-gray-600" />
                  </button>
                </div>

                <div className="flex flex-col gap-4 text-gray-700">
                  {links.map((link) => (
                    <button
                      key={link}
                      className="text-left text-sm hover:text-blue-600 transition"
                      onClick={() => setOpen(false)}
                    >
                      {link}
                    </button>
                  ))}
                </div>

                <a
                  href="https://wa.me/27688287061"
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={() => setOpen(false)}
                  className="mt-auto text-center text-sm bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Book Service Now
                </a>
                <p>EuropeCar</p>
                <p>Pulse Events</p>
                <p>Salvino del Bene</p>
                <p>Nissan</p>
                <p>AvaCare Health</p>
                https://res.cloudinary.com/dkmzveqce/image/upload/v1764168017/f445b79a-94bc-43f0-9a51-59cf1a0f37a2_1_ds87kz.jpg
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
