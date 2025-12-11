import { useEffect } from "react";
import NavBar from './components/NavBar.jsx';
import HeroSection from './components/HeroSection.jsx';
import About from './components/About.jsx';
import Loop from './components/Loop.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import ImageGallery from './components/ImageGallery.jsx';
import Process from './components/Process.jsx';
import PricingSection from './components/PricingSection.jsx';
import WhyChooseUs from './components/WhyChoose.jsx';
import TeamReview from './components/TeamReview.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="w-full overflow-hidden">
      <NavBar />
      <HeroSection />
      <Loop />
      <About />
      <ServicesSection />
      <ImageGallery />
      <Process />
      <Loop />
      {/* <PricingSection /> */}
      {/* <WhyChooseUs /> */}
      <Testimonials />
      {/* <TeamReview /> */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/27688287061"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg flex items-center gap-2"
      >
        <span>💬</span> WhatsApp Us
      </a>
    </div>
  );
}

export default App;
