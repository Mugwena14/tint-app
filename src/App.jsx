import { useEffect } from "react";
import NavBar from './components/NavBar.jsx';
import HeroSection from './components/HeroSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import Process from './components/Process.jsx';

function App() {
return (
<div className="w-full overflow-hidden">
  <NavBar />
  <HeroSection />
  <ServicesSection />
  <Process />
</div>
);
}

export default App;