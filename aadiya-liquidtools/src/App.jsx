// src/App.jsx
import { useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
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
  // Handle initial hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    // Run on initial load
    handleHashChange();
    
    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <Router>
      <div className="font-sans">
        <FloatingParticles />
        <Navigation />
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <AboutUs />
          </section>
          <section id="products">
            <Products />
          </section>
          <section id="whyus">
            <WhyUs />
          </section>
          <section id="facility">
            <Facility />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;