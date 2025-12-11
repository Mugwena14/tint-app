import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const faqs = [
    { question: "What types of vehicles can you tint?", answer: "We tint all vehicle types — cars, SUVs, bakkies, vans, and even commercial fleets." },
    { question: "How long does the window tinting process take?", answer: "Most car tint jobs take 1–2 hours. Homes and offices depend on window size and quantity but are usually completed the same day." },
    { question: "Do you offer home and office window tinting?", answer: "Yes! We provide residential and commercial tinting to reduce heat, glare, and improve privacy." },
    { question: "What is the lifespan of your tint?", answer: "Our professional-grade films last 10–15 years depending on exposure, care, and product type." },
    { question: "Does tint reduce heat inside the car or building?", answer: "Absolutely. Our films block up to 99% of UV rays and significantly reduce heat buildup." },
    { question: "Is the tint legal?", answer: "We follow local tinting regulations and offer legal-compliant options for all vehicle windows." }
  ];

  const [open, setOpen] = useState(null);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full text-white py-20 px-6 md:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left */}
        <div>
          <span className="text-xs px-3 py-1 rounded-full bg-white/10">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 mb-6">If you have any other questions, please email us.</p>

          <button
            onClick={scrollToContact}
            className="px-5 py-2 rounded-lg bg-white text-black flex items-center gap-2 w-fit"
          >
            Contact us
          </button>
        </div>

        {/* Right */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1A1A1D] rounded-xl p-3 cursor-pointer border border-white/5 hover:bg-[#232326] transition-all"
              onClick={() => setOpen(open === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <p className="font-medium">{faq.question}</p>
                {open === index ? <Minus size={18} /> : <Plus size={18} />}
              </div>

              {open === index && (
                <p className="text-gray-400 mt-3 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
