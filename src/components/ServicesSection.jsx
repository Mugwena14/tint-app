import React, { useState } from "react";
import ServiceModal from "./ServiceModal";

const ServicesSection = () => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    description: "",
    benefits: [],
  });

  const handleOpen = (title, description, benefits) => {
    setModalData({ title, description, benefits });
    setOpen(true);
  };

  return (
    <section
      className="w-full -mt-14 bg-cover bg-center py-20"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dkmzveqce/image/upload/v1764173400/23a97958-44ba-4261-9108-98955e5142a5_ilmmhg.jpg')",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.4)]">
        <p className="text-sm text-gray-700 font-semibold tracking-wide uppercase mb-2">Our Services</p>
        <h2 className="text-2xl md:text-4xl text-gray-700 font-extrabold leading-tight">
          We’re providing quality Tinting <br /> & Fixing Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          
          {/* ------ Car Tinting ------ */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-6 text-gray-900">
            <img
              src="https://res.cloudinary.com/dkmzveqce/image/upload/v1764190433/7bf4c51c-5229-47c6-844e-981d90c3f14d_h1wesz.jpg"
              alt="car tinting"
              className="w-full h-48 object-cover rounded-sm"
            />
            <h3 className="font-bold text-xl mt-6">Car Tinting</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Improve your car’s look and comfort with high-quality tinting.
            </p>

            <button
              onClick={() =>
                handleOpen(
                  "Car Tinting",
                  "Our professional car tinting enhances comfort, privacy, and heat control while giving your vehicle a sleek modern appearance.",
                  [
                    "Reduces heat inside the car",
                    "Improves privacy & security",
                    "Protects interior from UV fading",
                    "Reduces glare for safer driving",
                    "Enhances overall appearance"
                  ]
                )
              }
              className="mt-4 text-[#c9a24d] font-semibold hover:underline"
            >
              Read More
            </button>
          </div>

          {/* ------ Home Tinting ------ */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-6 text-gray-900">
            <img
              src="https://res.cloudinary.com/dkmzveqce/image/upload/v1764190423/0161e555-104b-4715-bbfd-87e2712650d1_1_urcp6z.jpg"
              alt="home tinting"
              className="w-full h-48 object-cover rounded-sm"
            />
            <h3 className="font-bold text-xl mt-6">Home Tinting</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Keep your home cooler and protected with quality tinting.
            </p>

            <button
              onClick={() =>
                handleOpen(
                  "Home Tinting",
                  "Our residential tinting solutions provide comfort, energy savings, and long-term UV protection for your home.",
                  [
                    "Blocks harmful UV rays",
                    "Keeps rooms cooler",
                    "Reduces electricity bills",
                    "Protects furniture from fading",
                    "Enhances privacy without losing natural light"
                  ]
                )
              }
              className="mt-4 text-[#c9a24d] font-semibold hover:underline"
            >
              Read More
            </button>
          </div>

          {/* ------ Office Tinting ------ */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-6 text-gray-900">
            <img
              src="https://res.cloudinary.com/dkmzveqce/image/upload/v1764191189/d656f1cd-2b7b-4f67-bbfd-37146d24ec46_1_duuztv.jpg"
              alt="office tinting"
              className="w-full h-48 object-cover rounded-sm"
            />
            <h3 className="font-bold text-xl mt-6">Office Tinting</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Improve comfort and productivity in your workspace.
            </p>

            <button
              onClick={() =>
                handleOpen(
                  "Office Tinting",
                  "Our commercial tinting enhances productivity, energy efficiency, and interior protection for business spaces.",
                  [
                    "Reduces heat for a more comfortable workspace",
                    "Increases privacy for meetings & offices",
                    "Minimizes screen glare",
                    "Protects office furniture & equipment",
                    "Improves building energy efficiency"
                  ]
                )
              }
              className="mt-4 text-[#c9a24d] font-semibold hover:underline"
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Modal render */}
      <ServiceModal
        open={open}
        onClose={() => setOpen(false)}
        title={modalData.title}
        description={modalData.description}
        benefits={modalData.benefits}
      />
    </section>
  );
};

export default ServicesSection;
