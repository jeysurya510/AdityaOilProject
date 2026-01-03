import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { ChevronDown, Sparkles, Zap, Shield, Globe, TrendingUp, Award, Users, Truck } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment, MeshReflectorMaterial } from '@react-three/drei';
import { Suspense } from 'react';
import confetti from 'canvas-confetti';

// 3D Oil Bottle Component
function OilBottle3D() {
  return (
    <Float speed={2} rotationIntensity={0.5}>
      <mesh>
        <cylinderGeometry args={[1.2, 1, 3, 32]} />
        <meshPhysicalMaterial
          color="#0A2463"
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0}
          envMapIntensity={2}
          transmission={0.2}
          opacity={0.9}
        />
      </mesh>
      {/* Bottle Cap */}
      <mesh position={[0, 1.8, 0]}>
        <cylinderGeometry args={[1.3, 1.3, 0.3, 32]} />
        <meshStandardMaterial color="#F59E0B" metalness={1} roughness={0.2} />
      </mesh>
      {/* Label */}
      <mesh position={[0, 0.5, 1.2]}>
        <boxGeometry args={[2, 1.5, 0.05]} />
        <meshStandardMaterial color="#DC2626" />
      </mesh>
      {/* Oil inside - glowing effect */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.1, 1.1, 2.8, 32]} />
        <meshBasicMaterial color="#1E40AF" transparent opacity={0.3} />
      </mesh>
    </Float>
  );
}

const Hero = () => {
  const [counter, setCounter] = useState({ clients: 0, products: 0, cities: 0, liters: 0 });
  const controls = useAnimation();
  
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
      animateCounter(50, (val) => setCounter(prev => ({ ...prev, clients: val }))),
      animateCounter(25, (val) => setCounter(prev => ({ ...prev, products: val }))),
      animateCounter(12, (val) => setCounter(prev => ({ ...prev, cities: val }))),
      animateCounter(200, (val) => setCounter(prev => ({ ...prev, liters: val }))),
    ];

    // Trigger confetti after 1 second
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0A2463', '#DC2626', '#F59E0B', '#1E40AF']
      });
    }, 1000);

    return () => timers.forEach(timer => clearInterval(timer));
  }, []);

  // Scroll indicator animation
  useEffect(() => {
    controls.start({
      y: [0, 10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });
  }, [controls]);

  // Feature cards with icons
  const features = [
    { icon: <Shield />, title: "ISO 9001:2015", desc: "Certified Quality" },
    { icon: <Zap />, title: "Advanced R&D", desc: "Innovative Formulations" },
    { icon: <Globe />, title: "Pan-India", desc: "Supply Network" },
    { icon: <Award />, title: "BIS Certified", desc: "OEM Approved" },
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-navy to-black pt-24 md:pt-32">
      
      {/* Animated Background Layers */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy/20 via-black/40 to-energy-red/10"></div>
        
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
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-premium-amber/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-energy-red/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container-responsive relative z-10">
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
              className="inline-flex items-center gap-2 px-5 py-3 glass-card rounded-2xl mb-8 shadow-xl"
            >
              <Sparkles className="w-5 h-5 text-premium-amber" />
              <span className="font-bold text-lg gradient-text">ESTABLISHED 2025</span>
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
              <span className="gradient-text">AADIYA</span>{' '}
              <span className="block">LIQUIDTOOLS</span>
              <span className="text-2xl sm:text-3xl md:text-4xl block mt-4 text-gray-300">
                INDIA PRIVATE LIMITED
              </span>
            </motion.h1>

            {/* Typing Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl sm:text-2xl md:text-3xl h-28 mb-8"
            >
              <span className="text-gray-300">Manufacturers of </span>
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
                className="font-bold gradient-text"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-lg text-gray-300 mb-10 max-w-2xl"
            >
              <span className="font-semibold text-white">State-of-the-art blending facility</span> producing 
              BIS-standard lubricants for automotive, industrial, and marine applications. 
              Trusted by industries across Tamil Nadu.
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
                className="group px-8 py-4 bg-gradient-to-r from-energy-red to-premium-amber text-white font-bold rounded-xl text-lg shadow-2xl hover:shadow-energy-red/40 transition-all"
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
                href="https://wa.me/919876543210"
                target="_blank"
                className="group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold rounded-xl text-lg shadow-xl hover:shadow-green-500/40 transition-all flex items-center justify-center gap-3"
              >
                💬 WhatsApp Enquiry
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
                  className="glass-card p-4 rounded-xl text-center"
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

          {/* Right Content - 3D Model */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
            className="relative"
          >
            {/* 3D Container */}
            <div className="relative h-[400px] sm:h-[500px] md:h-[600px] rounded-3xl overflow-hidden border-2 border-premium-amber/30 shadow-2xl group">
              <Canvas shadows camera={{ position: [0, 2, 8], fov: 50 }}>
                <Suspense fallback={null}>
                  <Environment preset="studio" />
                  <ambientLight intensity={0.5} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
                  
                  <OilBottle3D />
                  
                  {/* Reflective Floor */}
                  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
                    <planeGeometry args={[10, 10]} />
                    <MeshReflectorMaterial
                      blur={[300, 100]}
                      resolution={1024}
                      mixBlur={1}
                      mixStrength={40}
                      depthScale={1.2}
                      minDepthThreshold={0.4}
                      maxDepthThreshold={1.4}
                      color="#101010"
                      metalness={0.8}
                      roughness={0.2}
                      mirror={0.5}
                    />
                  </mesh>
                  
                  <OrbitControls 
                    enableZoom={true}
                    enablePan={true}
                    autoRotate
                    autoRotateSpeed={1.5}
                    maxPolarAngle={Math.PI / 2}
                  />
                </Suspense>
              </Canvas>

              {/* Interactive Controls Hint */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 glass-card px-4 py-2 rounded-full text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                🖱️ Drag to rotate • Scroll to zoom
              </div>
            </div>

            {/* Floating Labels */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 left-4 glass-card px-4 py-2 rounded-xl"
            >
              <span className="text-white font-bold">3D VIEW</span>
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
              { icon: <Users className="w-6 h-6" />, value: `${counter.clients}+`, label: 'Industries Served', color: 'text-premium-amber' },
              { icon: <TrendingUp className="w-6 h-6" />, value: `${counter.products}+`, label: 'Product Range', color: 'text-energy-red' },
              { icon: <Globe className="w-6 h-6" />, value: `${counter.cities}+`, label: 'Tamil Nadu Cities', color: 'text-green-400' },
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
          animate={controls}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <div className="flex flex-col items-center">
            <span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="text-premium-amber" size={32} />
          </div>
        </motion.div>
      </div>

      {/* Edge Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;