// src/components/Hero.jsx

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import {
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Factory,
  Droplets,
  Layers3,
  MessageCircle,
  Phone,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Settings,
  Wrench,
} from 'lucide-react';

import { COMPANY } from '../data/companyInfo';
import { PRODUCT_FAMILIES } from '../data/companyInfo';
import { INDUSTRIES } from '../data/industries';
import { COMPANY_PRODUCTS } from '../data/companyInfo';


// ============================================================
// HERO
// ============================================================

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ----------------------------------------------------------
  // Product Family Slides
  // ----------------------------------------------------------

  const slides = [
    {
      id: 'industrial-lubricants',
      title: 'Industrial Lubricants',
      description:
        'Reliable lubrication solutions for hydraulic systems, machinery, gears, compressors, turbines and industrial equipment.',
      icon: <Factory className="w-20 h-20" />,
      color: 'from-blue-600 to-cyan-500',
      badge: 'INDUSTRIAL PERFORMANCE',
    },

    {
      id: 'metal-working-fluids',
      title: 'Metal Working Fluids',
      description:
        'Solutions for metal removal, forming, protecting and treatment applications across modern manufacturing operations.',
      icon: <Settings className="w-20 h-20" />,
      color: 'from-slate-700 to-blue-600',
      badge: 'METAL WORKING SOLUTIONS',
    },

    {
      id: 'specialty-lubricants',
      title: 'Specialty Lubricants',
      description:
        'Specialized lubrication solutions for pneumatic tools, textile machinery and heat transfer applications.',
      icon: <Wrench className="w-20 h-20" />,
      color: 'from-amber-500 to-orange-600',
      badge: 'SPECIALIZED APPLICATIONS',
    },

    {
      id: 'specialty-oils',
      title: 'Specialty Oils',
      description:
        'Specialty oil solutions including transformer oils, white mineral oils and petroleum jelly applications.',
      icon: <Droplets className="w-20 h-20" />,
      color: 'from-purple-700 to-indigo-600',
      badge: 'SPECIALTY OIL SOLUTIONS',
    },
  ];

  // ----------------------------------------------------------
  // Auto Slide
  // ----------------------------------------------------------

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [slides.length]);

  // ----------------------------------------------------------
  // Navigation
  // ----------------------------------------------------------

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  // ----------------------------------------------------------
  // Scroll
  // ----------------------------------------------------------

  const scrollToProducts = () => {
    const element = document.getElementById('products');

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // ----------------------------------------------------------
  // Derived Counts
  // ----------------------------------------------------------

  const familyCount = PRODUCT_FAMILIES?.length || 4;

  const industryCount = INDUSTRIES?.length || 0;

  const productCount = COMPANY_PRODUCTS?.length || 0;

  // ----------------------------------------------------------
  // Feature Cards
  // ----------------------------------------------------------

  const features = [
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: 'Quality Focused',
      desc: 'Reliable product sourcing',
    },

    {
      icon: <Layers3 className="w-7 h-7" />,
      title: `${familyCount} Product Families`,
      desc: 'Industrial & specialty solutions',
    },

    {
      icon: <Factory className="w-7 h-7" />,
      title: `${industryCount || 9} Industries`,
      desc: 'Application-focused solutions',
    },

    {
      icon: <MessageCircle className="w-7 h-7" />,
      title: 'Direct Support',
      desc: 'Sales & enquiry assistance',
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 pt-24 md:pt-32"
    >

      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-black/50 to-amber-950/20" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.035]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #ffffff 1px, transparent 1px),
                linear-gradient(to bottom, #ffffff 1px, transparent 1px)
              `,
              backgroundSize: '55px 55px',
            }}
          />
        </div>

        {/* Glow 1 */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
        />

        {/* Glow 2 */}
        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
        />

      </div>


      {/* ======================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="container mx-auto px-4 relative z-10">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">


          {/* ==================================================
              LEFT CONTENT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-white text-center lg:text-left"
          >

            {/* ------------------------------------------------
                Established Badge
            ------------------------------------------------ */}

            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl mb-7"
            >
              <Sparkles className="w-5 h-5 text-amber-400" />

              <span className="font-semibold text-sm sm:text-base text-gray-200">
                ESTABLISHED {COMPANY.founded}
              </span>

              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </motion.div>


            {/* ------------------------------------------------
                Main Heading
            ------------------------------------------------ */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
              }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >

              <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400 bg-clip-text text-transparent">
                {COMPANY.shortName}
              </span>

              <span className="block text-xl sm:text-2xl md:text-3xl mt-4 text-gray-300 font-medium">
                {COMPANY.name}
              </span>

            </motion.h1>


            {/* ------------------------------------------------
                Typewriter
            ------------------------------------------------ */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.5,
              }}
              className="text-xl sm:text-2xl md:text-3xl min-h-[90px] mb-7"
            >

              <span className="text-gray-300 block">
                {COMPANY.tagline}
              </span>

              <Typewriter
                words={[
                  'Industrial Lubricants',
                  'Metal Working Fluids',
                  'Specialty Lubricants',
                  'Specialty Oils',
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={65}
                deleteSpeed={45}
                delaySpeed={1300}
                className="font-bold bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent"
              />

            </motion.div>


            {/* ------------------------------------------------
                Description
            ------------------------------------------------ */}

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.7,
              }}
              className="text-base sm:text-lg text-gray-300 leading-relaxed mb-9 max-w-2xl mx-auto lg:mx-0"
            >
              {COMPANY.description}
            </motion.p>


            {/* ------------------------------------------------
                CTA Buttons
            ------------------------------------------------ */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.9,
              }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >

              {/* Products */}
              <motion.button
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={scrollToProducts}
                className="px-7 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl text-base sm:text-lg shadow-xl hover:shadow-orange-500/30 transition-all"
              >
                <span className="flex items-center justify-center gap-3">
                  EXPLORE PRODUCTS

                  <ArrowRight className="w-5 h-5" />
                </span>
              </motion.button>


              {/* WhatsApp */}
              <motion.a
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                href={COMPANY.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold rounded-xl text-base sm:text-lg shadow-xl hover:shadow-green-500/30 transition-all"
              >
                <span className="flex items-center justify-center gap-3">
                  <MessageCircle className="w-5 h-5" />

                  WhatsApp Enquiry
                </span>
              </motion.a>

            </motion.div>


            {/* ------------------------------------------------
                Feature Cards
            ------------------------------------------------ */}

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">

              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{
                    opacity: 0,
                    scale: 0.85,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: 1 + index * 0.1,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl text-center"
                >

                  <div className="inline-flex p-3 rounded-xl bg-white/10 mb-2">
                    <span className="text-amber-400">
                      {feature.icon}
                    </span>
                  </div>

                  <h3 className="font-bold text-white text-xs sm:text-sm">
                    {feature.title}
                  </h3>

                  <p className="text-[10px] sm:text-xs text-gray-400 mt-1">
                    {feature.desc}
                  </p>

                </motion.div>
              ))}

            </div>

          </motion.div>


          {/* ==================================================
              RIGHT PRODUCT FAMILY SHOWCASE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.4,
            }}
            className="relative"
          >

            {/* ------------------------------------------------
                Carousel
            ------------------------------------------------ */}

            <div className="relative h-[430px] sm:h-[520px] md:h-[580px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">

              <AnimatePresence mode="wait">

                <motion.div
                  key={slides[currentSlide].id}
                  initial={{
                    opacity: 0,
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.04,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].color} flex items-center justify-center`}
                >

                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle, white 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                      }}
                    />
                  </div>


                  {/* Content */}
                  <div className="relative z-10 text-center px-7 sm:px-10 max-w-xl">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-md border border-white/20 mb-8">

                      <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />

                      <span className="text-xs sm:text-sm font-semibold tracking-wide">
                        {slides[currentSlide].badge}
                      </span>

                    </div>


                    {/* Icon */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 2, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="flex justify-center mb-8"
                    >
                      <div className="p-7 rounded-3xl bg-white/15 backdrop-blur-md border border-white/20 shadow-2xl">
                        {slides[currentSlide].icon}
                      </div>
                    </motion.div>


                    {/* Title */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
                      {slides[currentSlide].title}
                    </h2>


                    {/* Description */}
                    <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-8">
                      {slides[currentSlide].description}
                    </p>


                    {/* Explore Button */}
                    <button
                      onClick={scrollToProducts}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/15 hover:bg-white/25 border border-white/20 rounded-xl font-semibold transition"
                    >
                      Explore Product Range

                      <ArrowRight className="w-4 h-4" />
                    </button>

                  </div>

                </motion.div>

              </AnimatePresence>


              {/* ------------------------------------------------
                  Previous Button
              ------------------------------------------------ */}

              <button
                onClick={prevSlide}
                aria-label="Previous product family"
                className="absolute left-5 top-1/2 -translate-y-1/2 p-3 bg-black/20 hover:bg-black/40 backdrop-blur-md border border-white/20 rounded-full transition z-20"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>


              {/* ------------------------------------------------
                  Next Button
              ------------------------------------------------ */}

              <button
                onClick={nextSlide}
                aria-label="Next product family"
                className="absolute right-5 top-1/2 -translate-y-1/2 p-3 bg-black/20 hover:bg-black/40 backdrop-blur-md border border-white/20 rounded-full transition z-20"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>


              {/* ------------------------------------------------
                  Indicators
              ------------------------------------------------ */}

              <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">

                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to ${slide.title}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? 'w-9 bg-white'
                        : 'w-2.5 bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}

              </div>


              {/* Auto Slide Label */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">

                <div className="flex items-center gap-2 px-4 py-2 bg-black/25 backdrop-blur-md rounded-full border border-white/10">

                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />

                  <span className="text-xs text-white">
                    Product Showcase
                  </span>

                </div>

              </div>

            </div>


            {/* Floating Label */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-4 left-5 px-5 py-3 bg-white/10 backdrop-blur-xl border border-white/15 rounded-xl shadow-xl"
            >
              <span className="text-white text-sm font-bold">
                PRODUCT FAMILIES
              </span>
            </motion.div>

          </motion.div>

        </div>


        {/* ======================================================
            BOTTOM INFO STRIP
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.3,
          }}
          className="mt-14 md:mt-20 bg-white/5 backdrop-blur-xl rounded-2xl p-5 md:p-7 border border-white/10"
        >

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            {/* Product Families */}
            <div className="text-center">

              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {familyCount}
              </div>

              <div className="text-sm text-gray-400">
                Product Families
              </div>

            </div>


            {/* Industries */}
            <div className="text-center">

              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {industryCount || 9}+
              </div>

              <div className="text-sm text-gray-400">
                Industry Solutions
              </div>

            </div>


            {/* Product Listings */}
            <div className="text-center">

              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {productCount}+
              </div>

              <div className="text-sm text-gray-400">
                Product Listings
              </div>

            </div>


            {/* Support */}
            <div className="text-center">

              <div className="flex justify-center mb-1">
                <Phone className="w-8 h-8 text-amber-400" />
              </div>

              <div className="text-sm text-gray-400">
                Sales & Support
              </div>

            </div>

          </div>

        </motion.div>


        {/* ======================================================
            SCROLL INDICATOR
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.8,
          }}
          className="flex justify-center mt-8 pb-10"
        >

          <button
            onClick={scrollToProducts}
            className="flex flex-col items-center group"
          >

            <span className="text-gray-500 text-xs sm:text-sm mb-2 group-hover:text-gray-300 transition">
              Scroll to explore
            </span>

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <ChevronDown
                className="text-amber-400"
                size={28}
              />
            </motion.div>

          </button>

        </motion.div>

      </div>


      {/* ======================================================
          BOTTOM EDGE
      ====================================================== */}

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />

    </section>
  );
};

export default Hero;