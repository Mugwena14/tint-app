import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Instagram, Twitter, Facebook, Menu, X } from "lucide-react";
import BookingModal from "./BookingModal.jsx";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  const links = [
    "Home",
    "Services",
    "Process",
    "Reviews",
    "Contact Us",
  ];

  return (
    <>
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
              <button
                key={link}
                className="hover:text-[#c9a24d] text-sm transition"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={() => setBookingOpen(true)}
            className="hidden md:block text-sm bg-black text-white px-4 py-2 rounded-md hover:bg-[#c9a24d] hover:text-black transition"
          >
            Book Service Now
          </button>

          {/* Mobile Menu Icon */}
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
                        className="text-left text-sm hover:text-[#c9a24d] transition"
                        onClick={() => setOpen(false)}
                      >
                        {link}
                      </button>
                    ))}
                  </div>

                  {/* Mobile CTA */}
                  <button
                    onClick={() => {
                      setOpen(false);
                      setBookingOpen(true);
                    }}
                    className="mt-auto text-center text-sm bg-black text-white px-4 py-2 rounded-md hover:bg-[#c9a24d] hover:text-black transition"
                  >
                    Book Service Now
                  </button>

                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Booking Modal */}
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
};

export default NavBar;
