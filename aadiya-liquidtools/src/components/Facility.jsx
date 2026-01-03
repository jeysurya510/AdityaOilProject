import { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { 
  Factory, Zap, Gauge, Thermometer, Droplets, 
  Shield, CheckCircle, Play, Pause, Maximize2,
  ChevronLeft, ChevronRight, Clock, Users,
  BarChart, Settings, Award, Cpu, Filter,
  Truck, Package, TestTube, Microscope
} from 'lucide-react';

const Facility = () => {
  const [activeSection, setActiveSection] = useState('blending');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const carouselRef = useRef(null);
  
  const progress = useMotionValue(0);
  const scale = useTransform(progress, [0, 100], [0.8, 1]);

  // Facility sections
  const sections = [
    {
      id: 'blending',
      title: 'Automated Blending',
      icon: <Settings className="w-6 h-6" />,
      description: 'State-of-the-art computer-controlled blending systems',
      features: [
        'Computerized Viscosity Control',
        'Precision Additive Dosing',
        'Temperature-controlled Blending',
        'Batch-to-Batch Consistency',
        '5000L Blending Capacity',
        'Automated Quality Checks'
      ],
      capacity: '50,000 Litres/Month',
      images: ['🏭', '⚙️', '🎛️']
    },
    {
      id: 'quality',
      title: 'Quality Control Lab',
      icon: <Microscope className="w-6 h-6" />,
      description: 'Advanced testing laboratory with international standards',
      features: [
        'Viscosity Testing (ASTM D445)',
        'Flash Point Analysis (ASTM D92)',
        'Spectroscopic Analysis',
        'Oxidation Stability Tests',
        'Water Separation Testing',
        'Foam Characteristics'
      ],
      capacity: '12-Point Quality Check',
      images: ['🔬', '📊', '🧪']
    },
    {
      id: 'packaging',
      title: 'Packaging Line',
      icon: <Package className="w-6 h-6" />,
      description: 'Fully automated filling and packaging systems',
      features: [
        'Automatic Filling Machines',
        'Leak Detection Systems',
        'Weight Verification',
        'Batch Number Printing',
        'Tamper-evident Seals',
        'Pallettized Storage'
      ],
      capacity: '10,000 Units/Day',
      images: ['📦', '🏷️', '📈']
    },
    {
      id: 'storage',
      title: 'Storage & Logistics',
      icon: <Truck className="w-6 h-6" />,
      description: 'Climate-controlled warehouse with logistics network',
      features: [
        'Climate-controlled Storage',
        'Fire Safety Systems',
        'Inventory Management',
        'Fleet of Delivery Vehicles',
        'Real-time Tracking',
        'Pan-India Network'
      ],
      capacity: '200,000 Litre Storage',
      images: ['🚚', '🏪', '📍']
    }
  ];

  const activeSectionData = sections.find(s => s.id === activeSection);

  // Equipment showcase
  const equipment = [
    { name: 'Blending Reactor', capacity: '5000L', desc: 'Computer-controlled mixing', icon: '⚗️' },
    { name: 'Viscometer', capacity: 'Precision', desc: 'Viscosity measurement', icon: '📏' },
    { name: 'Flash Point Tester', capacity: 'Safety', desc: 'Flash point analysis', icon: '🔥' },
    { name: 'Filling Machine', capacity: 'Auto', desc: 'Automatic bottle filling', icon: '🏺' },
    { name: 'Spectrometer', capacity: 'Analysis', desc: 'Chemical composition', icon: '🌈' },
    { name: 'Storage Tanks', capacity: '200KL', desc: 'Base oil storage', icon: '🛢️' },
  ];

  // Process steps
  const processSteps = [
    { step: 1, title: 'Raw Material Inspection', desc: 'Base oils & additives checked', duration: '2 hrs', icon: '🔍' },
    { step: 2, title: 'Computer Blending', desc: 'Precision mixing at controlled temp', duration: '4 hrs', icon: '💻' },
    { step: 3, title: 'Quality Testing', desc: '12-parameter lab analysis', duration: '3 hrs', icon: '🧪' },
    { step: 4, title: 'Filling & Packaging', desc: 'Automated filling with QC', duration: '2 hrs', icon: '🏷️' },
    { step: 5, title: 'Final Inspection', desc: 'Batch approval & documentation', duration: '1 hr', icon: '✅' },
    { step: 6, title: 'Dispatch', desc: 'Warehousing & logistics', duration: 'Flexible', icon: '🚚' },
  ];

  // Gallery images
  const galleryImages = [
    { id: 1, title: 'Main Blending Plant', desc: 'Computer-controlled blending tanks', category: 'blending' },
    { id: 2, title: 'Quality Lab', desc: 'Advanced testing equipment', category: 'quality' },
    { id: 3, title: 'Packaging Line', desc: 'Automatic filling machines', category: 'packaging' },
    { id: 4, title: 'Storage Facility', desc: 'Climate-controlled warehouse', category: 'storage' },
    { id: 5, title: 'R&D Department', desc: 'Product development lab', category: 'quality' },
    { id: 6, title: 'Loading Dock', desc: 'Dispatch area with trucks', category: 'storage' },
  ];

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handlePlayTour = () => {
    setIsPlaying(true);
    animate(progress, 100, {
      duration: 30,
      onComplete: () => {
        setIsPlaying(false);
        progress.set(0);
      }
    });
  };

  const handlePauseTour = () => {
    setIsPlaying(false);
    progress.stop();
  };

  return (
    <section id="facility" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-responsive">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-premium-amber/10 to-energy-red/10 rounded-full mb-4">
            <Factory className="w-4 h-4 text-premium-amber" />
            <span className="text-sm font-semibold gradient-text">OUR FACILITY</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
            <span className="gradient-text">State-of-the-Art</span> Manufacturing
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            ISO 9001:2015 certified facility with advanced technology for precision blending, 
            rigorous quality control, and efficient production.
          </p>
        </motion.div>

        {/* Main Facility Showcase */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Section Tabs */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-4">
                {sections.map((section) => (
                  <motion.button
                    key={section.id}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full p-6 rounded-2xl text-left transition-all ${
                      activeSection === section.id
                        ? 'bg-gradient-to-r from-navy to-trust-blue text-white shadow-2xl'
                        : 'bg-white border border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`p-3 rounded-xl ${
                        activeSection === section.id 
                          ? 'bg-white/20' 
                          : 'bg-gradient-to-r from-gray-100 to-gray-50'
                      }`}>
                        {section.icon}
                      </div>
                      <h3 className="text-xl font-bold">{section.title}</h3>
                    </div>
                    <p className={`text-sm mb-4 ${
                      activeSection === section.id ? 'opacity-90' : 'text-gray-600'
                    }`}>
                      {section.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        activeSection === section.id
                          ? 'bg-white/20'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        Capacity: {section.capacity}
                      </div>
                      <div className="flex gap-1">
                        {section.images.map((icon, idx) => (
                          <span key={idx} className="text-lg">{icon}</span>
                        ))}
                      </div>
                    </div>
                  </motion.button>
                ))}

                {/* Virtual Tour Controls */}
                <div className="bg-gradient-to-r from-navy/5 to-trust-blue/5 p-6 rounded-2xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-4">Virtual Facility Tour</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          style={{ width: progress, scale }}
                          className="h-full bg-gradient-to-r from-premium-amber to-energy-red"
                        />
                      </div>
                      <span className="text-sm text-gray-600">{progress.get().toFixed(0)}%</span>
                    </div>
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={isPlaying ? handlePauseTour : handlePlayTour}
                        className="flex-1 bg-gradient-to-r from-premium-amber to-energy-red text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2"
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        {isPlaying ? 'Pause Tour' : 'Start 360° Tour'}
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 border border-gray-300 rounded-xl hover:bg-gray-50"
                      >
                        <Maximize2 className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Section Details */}
            <div className="lg:col-span-2">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
              >
                {/* Section Header */}
                <div className="bg-gradient-to-r from-navy to-trust-blue p-8 text-white">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{activeSectionData?.title}</h3>
                      <p className="opacity-90">{activeSectionData?.description}</p>
                    </div>
                    <div className="text-5xl">{activeSectionData?.images[0]}</div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                      <div className="text-2xl font-bold">{activeSectionData?.capacity.split('/')[0]}</div>
                      <div className="text-sm opacity-80">Capacity</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                      <div className="text-2xl font-bold">ISO 9001</div>
                      <div className="text-sm opacity-80">Certified</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-sm opacity-80">Monitoring</div>
                    </div>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {activeSectionData?.features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition"
                      >
                        <div className="p-2 bg-gradient-to-r from-premium-amber to-energy-red rounded-lg">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Live Metrics */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl">
                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <BarChart className="w-5 h-5 text-premium-amber" />
                      Live Production Metrics
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold gradient-text">98.5%</div>
                        <div className="text-sm text-gray-600">Efficiency</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold gradient-text">0.2%</div>
                        <div className="text-sm text-gray-600">Waste</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold gradient-text">99.9%</div>
                        <div className="text-sm text-gray-600">Accuracy</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold gradient-text">24℃</div>
                        <div className="text-sm text-gray-600">Temp Control</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Equipment Showcase */}
              <div className="mt-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Advanced Equipment</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {equipment.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center"
                    >
                      <div className="text-4xl mb-3">{item.icon}</div>
                      <h5 className="font-bold text-gray-900 mb-1">{item.name}</h5>
                      <div className="text-sm text-energy-red font-medium mb-2">{item.capacity}</div>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Production Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-10">
            Our <span className="gradient-text">Production Process</span>
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-premium-amber to-energy-red hidden md:block"></div>
            
            {/* Process Steps */}
            <div className="space-y-8 md:space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative md:flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Step Circle */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 md:relative md:left-0 md:transform-none w-16 h-16 rounded-full bg-gradient-to-r from-navy to-trust-blue flex items-center justify-center text-white font-bold text-xl z-10 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    {step.step}
                  </div>
                  
                  {/* Content Card */}
                  <div className={`md:w-1/2 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{step.icon}</span>
                      <h4 className="text-xl font-bold text-gray-900">{step.title}</h4>
                    </div>
                    <p className="text-gray-600 mb-3">{step.desc}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      Duration: {step.duration}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-3xl font-bold">Facility <span className="gradient-text">Gallery</span></h3>
              <p className="text-gray-600">Virtual tour of our manufacturing facility</p>
            </div>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrevImage}
                className="p-3 border border-gray-300 rounded-xl hover:bg-gray-50"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNextImage}
                className="p-3 border border-gray-300 rounded-xl hover:bg-gray-50"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Gallery Carousel */}
          <div ref={carouselRef} className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: index === activeImageIndex ? 1 : 0.7,
                    scale: index === activeImageIndex ? 1 : 0.95
                  }}
                  className={`bg-gradient-to-br from-gray-900 to-navy rounded-2xl overflow-hidden aspect-video flex items-center justify-center ${
                    index === activeImageIndex ? 'ring-4 ring-premium-amber' : ''
                  }`}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <div className="text-white text-center p-8">
                    <div className="text-6xl mb-4">{image.category === 'blending' ? '🏭' : 
                                                  image.category === 'quality' ? '🔬' :
                                                  image.category === 'packaging' ? '📦' : '🚚'}</div>
                    <h4 className="text-xl font-bold mb-2">{image.title}</h4>
                    <p className="text-gray-300">{image.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Gallery Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeImageIndex
                      ? 'bg-gradient-to-r from-premium-amber to-energy-red w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Capacity & Capabilities */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-navy to-trust-blue rounded-3xl p-8 md:p-12 text-white overflow-hidden"
        >
          <div className="relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Production <span className="text-premium-amber">Capacity</span>
                </h3>
                
                <div className="space-y-6">
                  {[
                    { label: 'Monthly Production', value: '50,000 Litres', icon: '⚙️' },
                    { label: 'Storage Capacity', value: '200,000 Litres', icon: '🏪' },
                    { label: 'Daily Packaging', value: '10,000 Units', icon: '📦' },
                    { label: 'Quality Tests', value: '12 Parameters', icon: '✅' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="text-2xl">{item.icon}</div>
                      <div className="flex-1">
                        <div className="text-xl font-bold">{item.value}</div>
                        <div className="text-gray-300">{item.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h4 className="text-2xl font-bold mb-6">Ready to Scale</h4>
                <p className="mb-6">
                  Our facility is equipped to handle bulk orders and custom formulations 
                  for industries across India. We can scale production based on your needs.
                </p>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-premium-amber to-energy-red text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl"
                >
                  Request Factory Visit
                  <ChevronRight className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>
          
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-premium-amber/20 to-energy-red/20 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-white/5 to-transparent rounded-full -translate-x-64 translate-y-64"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Facility;