import React from "react";

const ServicesSection = () => {
  return (
    <section
      className="w-full -mt-14 bg-cover bg-center py-20"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dkmzveqce/image/upload/v1764173400/23a97958-44ba-4261-9108-98955e5142a5_ilmmhg.jpg')",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.4)]">
        <p className="text-sm font-semibold tracking-wide uppercase mb-2">Our Service</p>
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
          We’re providing quality Tinting <br /> & Fixing Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
  {/* Car Tinting */}
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-6 text-gray-900">
    <img
      src="https://res.cloudinary.com/dkmzveqce/image/upload/v1764190433/7bf4c51c-5229-47c6-844e-981d90c3f14d_h1wesz.jpg"
      alt="car tinting"
      className="w-full h-48 object-cover rounded-xl"
    />
    <h3 className="font-bold text-xl mt-6">Car Tinting</h3>
    <p className="text-gray-600 mt-2 text-sm">
      Improve your car’s look and comfort with high-quality window tinting that blocks heat, reduces glare, and adds privacy.
    </p>
    <button className="mt-4 text-blue-600 font-semibold hover:underline">Read More</button>
  </div>

  {/* Home Tinting */}
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-6 text-gray-900">
    <img
      src="https://res.cloudinary.com/dkmzveqce/image/upload/v1764190423/0161e555-104b-4715-bbfd-87e2712650d1_1_urcp6z.jpg"
      alt="home tinting"
      className="w-full h-48 object-cover rounded-xl"
    />
    <h3 className="font-bold text-xl mt-6">Home Tinting</h3>
    <p className="text-gray-600 mt-2 text-sm">
      Keep your home cooler and protected with premium residential tinting that cuts UV rays and enhances energy efficiency.
    </p>
    <button className="mt-4 text-blue-600 font-semibold hover:underline">Read More</button>
  </div>

  {/* Office Tinting */}
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-6 text-gray-900">
    <img
      src="https://res.cloudinary.com/dkmzveqce/image/upload/v1764191189/d656f1cd-2b7b-4f67-bbfd-37146d24ec46_1_duuztv.jpg"
      alt="office tinting"
      className="w-full h-48 object-cover rounded-xl"
    />
    <h3 className="font-bold text-xl mt-6">Office Tinting</h3>
    <p className="text-gray-600 mt-2 text-sm">
      Create a more productive workspace with commercial-grade tinting that reduces heat, boosts privacy, and protects interiors.
    </p>
    <button className="mt-4 text-blue-600 font-semibold hover:underline">Read More</button>
  </div>
</div>

      </div>
    </section>
  );
};

export default ServicesSection;
