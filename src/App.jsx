import { useEffect } from "react";
import { NavBar } from './components/NavBar.jsx';
import { HeroSection } from './components/HeroSection.jsx';
import { ServicesSection } from './components/ServicesSection.jsx';

function App() {
return (
<div className="w-full overflow-hidden">
  <NavBar />
  <HeroSection />
  <ServicesSection />
</div>
);
}

export default App;