import { useEffect } from "react";
import NavBar from './components/NavBar.jsx';
import HeroSection from './components/HeroSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import ImageGallery from './components/ImageGallery.jsx';
import Process from './components/Process.jsx';
import PricingSection from './components/PricingSection.jsx';
import WhyChooseUs from './components/WhyChoose.jsx';
import TeamReview from './components/TeamReview.jsx';
import Footer from './components/Footer.jsx';

function App() {
return (
<div className="w-full overflow-hidden">
    <NavBar />
    <HeroSection />
    <ServicesSection />
    <ImageGallery />
    <Process />
    <PricingSection />
    <WhyChooseUs />
    <TeamReview />
    <Footer />
</div>
);
}

export default App;