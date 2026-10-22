// src/App.jsx

import { useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';

import Navigation from './components/Navigation';
import FloatingParticles from './components/Animations/FloatingParticles';

import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import IndustrySolutions from './components/IndustrySolutions';
import MRO from './components/MRO';

import WhyUs from './components/WhyUs';
import Facility from './components/Facility';
import InnovationSection from './components/InnovationSection';
import SustainabilitySection from './components/SustainabilitySection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (!hash) return;

      const element = document.querySelector(hash);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 100);
      }
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <Router>
      <div className="font-sans min-h-screen">

        {/* Background */}
        <FloatingParticles />

        {/* Navigation */}
        <Navigation />

        <main>

          {/* =========================
              HOME
          ========================== */}
          <section id="home">
            <Hero />
          </section>


          {/* =========================
              ABOUT US
          ========================== */}
          <section id="about">
            <AboutUs />
          </section>


          {/* =========================
              PRODUCTS
          ========================== */}
          <section id="products">
            <Products />
          </section>


          {/* =========================
              PRODUCT BY INDUSTRY
          ========================== */}
          <section id="industries">
            <IndustrySolutions />
          </section>


          {/* =========================
              MRO
          ========================== */}
          <section id="mro">
            <MRO />
          </section>


          {/* =========================
              WHY US
          ========================== */}
          <section id="whyus">
            <WhyUs />
          </section>


          {/* =========================
              FACILITY / SUPPLY
          ========================== */}
          <section id="facility">
            <Facility />
          </section>


          {/* =========================
              INNOVATION
          ========================== */}
          <section id="innovation">
            <InnovationSection />
          </section>


          {/* =========================
              SUSTAINABILITY
          ========================== */}
          <section id="sustainability">
            <SustainabilitySection />
          </section>


          {/* =========================
              CONTACT
          ========================== */}
          <section id="contact">
            <Contact />
          </section>

        </main>


        {/* Footer */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;