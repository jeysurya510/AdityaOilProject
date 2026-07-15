// src/components/Hero.jsx - WITH CAROUSEL INSTEAD OF 3D
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { ChevronDown, Sparkles, Shield, Award, Truck, Clock, Users, Globe, TrendingUp, MessageCircle, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY } from '../data/companyInfo';

const Hero = () => {
  const [counter, setCounter] = useState({ clients: 0, products: 0, cities: 0, liters: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  
  // Carousel slides
  const slides = [
    {
      id: 1,
      title: "Premium Industrial Lubricants",
      description: "Manufacturers of high-performance lubricants for automotive and industrial applications.",
      image: "🏭",
      color: "from-blue-500 to-cyan-500",
      stats: "50+ Industrial Grades"
    },
    {
      id: 2,
      title: "Automotive Engine Oils",
      description: "Advanced engine oils for cars, trucks, and commercial vehicles with enhanced protection.",
      image: "🚗",
      color: "from-green-500 to-emerald-500",
      stats: "12 Automotive Variants"
    },
    {
      id: 3,
      title: "Specialty Greases & Oils",
      description: "Custom formulations for extreme conditions and specialized applications.",
      image: "🛢️",
      color: "from-amber-500 to-orange-500",
      stats: "Custom Solutions"
    },
    {
      id: 4,
      title: "BIS & ISO Certified",
      description: "Quality certified products meeting international standards and OEM approvals.",
      image: "🏆",
      color: "from-purple-500 to-pink-500",
      stats: "Certified Quality"
    }
  ];

  // Auto slide transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  // Animated counter effect
  useEffect(() => {
    const animateCounter = (endValue, setter, duration = 2000) => {
      let start = 0;
      const increment = endValue / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          setter(endValue);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
      return timer;
    };

    const timers = [
      animateCounter(500, (val) => setCounter(prev => ({ ...prev, clients: val }))),
      animateCounter(50, (val) => setCounter(prev => ({ ...prev, products: val }))),
      animateCounter(150, (val) => setCounter(prev => ({ ...prev, cities: val }))),
      animateCounter(1000, (val) => setCounter(prev => ({ ...prev, liters: val })), 3000),
    ];

    // Trigger confetti after 1 second
    setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#0A2463', '#DC2626', '#F59E0B', '#1E40AF']
      });
    }, 1000);

    return () => timers.forEach(timer => clearInterval(timer));
  }, []);

  // Feature cards with icons
  const features = [
    { icon: <Shield className="w-8 h-8" />, title: "ISO 9001:2015", desc: "Certified Quality" },
    { icon: <Award className="w-8 h-8" />, title: "BIS Certified", desc: "OEM Approved" },
    { icon: <Globe className="w-8 h-8" />, title: "Pan-India", desc: "Supply Network" },
    { icon: <Clock className="w-8 h-8" />, title: "24/7 Support", desc: "Technical Assistance" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-24 md:pt-32">
      
      {/* Animated Background Layers */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 via-black/40 to-amber-500/10"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                             linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}></div>
        </div>

        {/* Floating Glows */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content - Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-center lg:text-left"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-2xl mb-8 shadow-xl"
            >
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span className="font-bold text-lg bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
                ESTABLISHED 2025
              </span>
              <motion.div 
                className="ml-2 w-2 h-2 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">{COMPANY.shortName}</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl mt-4 text-gray-300">
                {COMPANY.name.split('Private Limited')[0]}
              </span>
            </motion.h1>

            {/* Typing Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl sm:text-2xl md:text-3xl h-28 mb-8"
            >
              <span className="text-gray-300">{COMPANY.tagline}</span>
              <Typewriter
                words={[
                  'Premium Lubricants', 
                  'Automotive Engine Oils', 
                  'Industrial Greases', 
                  'Specialty Fluids',
                  'High-Performance Oils'
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
                className="font-bold bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent block mt-2"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-lg text-gray-300 mb-10 max-w-2xl"
            >
              {COMPANY.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl text-lg shadow-2xl hover:shadow-orange-500/40 transition-all"
              >
                <span className="flex items-center justify-center gap-3">
                  GET QUOTE NOW
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={COMPANY.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold rounded-xl text-lg shadow-xl hover:shadow-green-500/40 transition-all flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Enquiry
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ↗
                </motion.span>
              </motion.a>
            </motion.div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + (index * 0.1) }}
                  whileHover={{ y: -5 }}
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center"
                >
                  <div className="inline-block p-3 rounded-lg bg-gradient-to-br from-white/10 to-transparent mb-2">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-white text-sm">{feature.title}</h3>
                  <p className="text-xs text-gray-300">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
            className="relative"
          >
            {/* Carousel Container */}
            <div className="relative h-[400px] sm:h-[500px] md:h-[600px] rounded-3xl overflow-hidden border-2 border-amber-500/30 shadow-2xl">
              <div ref={carouselRef} className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-to-br ${slides[currentSlide].color} text-white`}
                  >
                    {/* Content */}
                    <div className="text-center max-w-lg">
                      <div className="text-8xl mb-6 animate-bounce">
                        {slides[currentSlide].image}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {slides[currentSlide].title}
                      </h2>
                      <p className="text-lg opacity-90 mb-6">
                        {slides[currentSlide].description}
                      </p>
                      <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-lg font-bold">
                        {slides[currentSlide].stats}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Carousel Controls */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevSlide}
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </motion.button>
                
                {/* Slide Indicators */}
                <div className="flex items-center gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        currentSlide === index
                          ? 'bg-white w-8'
                          : 'bg-white/40 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSlide}
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </motion.button>
              </div>

              {/* Auto Slide Indicator */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full">
                  <motion.div
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-sm text-white">Auto Slide</span>
                </div>
              </div>
            </div>

            {/* Floating Labels */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 left-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20"
            >
              <span className="text-white font-bold">PRODUCT SHOWCASE</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-16 md:mt-24 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Users className="w-6 h-6" />, value: `${counter.clients}+`, label: 'Industries Served', color: 'text-amber-400' },
              { icon: <TrendingUp className="w-6 h-6" />, value: `${counter.products}+`, label: 'Product Range', color: 'text-orange-400' },
              { icon: <Globe className="w-6 h-6" />, value: `${counter.cities}+`, label: 'Cities Covered', color: 'text-green-400' },
              { icon: <Truck className="w-6 h-6" />, value: `${counter.liters}K+`, label: 'Litres Blended', color: 'text-blue-400' },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-white/10 to-transparent mb-4 group-hover:scale-110 transition-transform">
                  <span className={stat.color}>{stat.icon}</span>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <div className="flex flex-col items-center">
            <span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="text-amber-400" size={32} />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Edge Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

// Add missing AnimatePresence import
import { AnimatePresence } from 'framer-motion';

export default Hero;