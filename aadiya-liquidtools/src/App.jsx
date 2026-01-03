import Navigation from './components/Navigation';
import FloatingParticles from './components/Animations/FloatingParticles';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import Facility from './components/Facility';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <FloatingParticles />
       
      <Navigation />
      <Hero />
      <AboutUs />
      <Products />
      <WhyUs />
      <Facility />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;