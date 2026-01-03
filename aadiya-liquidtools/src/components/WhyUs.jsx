import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Fixed: Added AnimatePresence
import { 
  Shield, Award, Truck, Clock, Users, 
  Globe, CheckCircle, ChevronRight, Factory,
  Zap, Target, BarChart, TrendingUp
} from 'lucide-react';

const WhyUs = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [stats, setStats] = useState({
    clients: 0,
    products: 0,
    countries: 0,
    years: 0
  });

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Premium Quality Assurance",
      description: "Every product undergoes 27+ quality checks with advanced testing equipment to ensure superior performance and reliability.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Industry Certified",
      description: "ISO 9001:2015, BIS, and OEM approved lubricants meeting international standards for automotive and industrial applications.",
      color: "from-amber-500 to-orange-400"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Pan-India Distribution",
      description: "Robust supply chain network covering 500+ cities with timely delivery and dedicated logistics support.",
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Technical Support",
      description: "Round-the-clock expert assistance for product selection, troubleshooting, and application guidance.",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert R&D Team",
      description: "25+ years of cumulative experience in lubricant formulation and application-specific solutions.",
      color: "from-red-500 to-rose-400"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Standards, Local Expertise",
      description: "Combining international quality benchmarks with deep understanding of Indian operating conditions.",
      color: "from-indigo-500 to-violet-400"
    }
  ];

  const achievements = [
    { label: "Happy Clients", value: "2500+", suffix: "+" },
    { label: "Products Range", value: "50+", suffix: "+" },
    { label: "Cities Served", value: "500+", suffix: "+" },
    { label: "Years Experience", value: "15+", suffix: "+" }
  ];

  const advantages = [
    "Custom formulation for specific applications",
    "Competitive pricing without compromising quality",
    "Regular technical training for partners",
    "Sustainable and eco-friendly options",
    "Comprehensive product documentation",
    "Emergency supply for critical applications"
  ];

  // Animate stats counter
  useEffect(() => {
    const targets = { clients: 2500, products: 50, countries: 500, years: 15 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const counters = {};
    Object.keys(targets).forEach(key => {
      counters[key] = 0;
      const stepValue = targets[key] / steps;
      
      const interval = setInterval(() => {
        counters[key] += stepValue;
        setStats(prev => ({
          ...prev,
          [key]: Math.min(Math.floor(counters[key]), targets[key])
        }));
        
        if (counters[key] >= targets[key]) {
          clearInterval(interval);
        }
      }, stepDuration);
    });

    return () => {
      Object.keys(counters).forEach(key => {
        // Cleanup if needed
      });
    };
  }, []);

  // Auto rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="whyus" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-responsive">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-premium-amber/10 text-premium-amber rounded-full text-sm font-semibold">
              WHY CHOOSE US
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            The <span className="text-premium-amber">Aadiya Advantage</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Combining cutting-edge technology with decades of expertise to deliver 
            lubricants that outperform expectations in every application.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-navy mb-2">
                {stats[Object.keys(stats)[index]] || 0}{achievement.suffix}
              </div>
              <div className="text-gray-600">{achievement.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeFeature === index 
                    ? 'bg-gradient-to-br from-white to-gray-50 shadow-2xl border-2 border-premium-amber/30' 
                    : 'bg-white shadow-lg border border-gray-100 hover:shadow-xl'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                {activeFeature === index && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="mt-4"
                  >
                    <div className="flex items-center text-premium-amber font-semibold">
                      <ChevronRight className="w-4 h-4 mr-1" />
                      Learn more
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Active Feature Detail */}
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="sticky top-24"
          >
            <div className="bg-gradient-to-br from-navy to-gray-900 rounded-3xl p-8 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${features[activeFeature].color} flex items-center justify-center`}>
                  {features[activeFeature].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{features[activeFeature].title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-premium-amber fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-300 text-sm">5.0 Rating</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg mb-8">
                {features[activeFeature].description}
              </p>
              
              <div className="space-y-4">
                <h4 className="font-bold text-xl">Key Benefits:</h4>
                <ul className="space-y-3">
                  {advantages.map((advantage, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-premium-amber flex-shrink-0" />
                      <span>{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-premium-amber to-energy-red rounded-xl font-semibold hover:opacity-90 transition">
                    Request Sample
                  </button>
                  <button className="px-6 py-3 bg-white/10 rounded-xl font-semibold hover:bg-white/20 transition">
                    Technical Data Sheets
                  </button>
                </div>
              </div>
            </div>
            
            {/* Feature Navigation */}
            <div className="flex justify-center mt-6 gap-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    activeFeature === index 
                      ? 'bg-premium-amber' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to feature ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quality Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-premium-amber/10 to-energy-red/10 rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-4">Our Quality Commitment</h3>
              <p className="text-gray-700 text-lg mb-6">
                We don't just meet standards - we set them. Every batch is tested for viscosity, 
                thermal stability, oxidation resistance, and compatibility to ensure optimal 
                performance in your specific application.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>100% Quality Tested</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Batch Traceability</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Performance Guarantee</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="font-bold text-xl mb-4">Quality Parameters</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Viscosity Index</span>
                    <span className="font-bold">98%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Thermal Stability</span>
                    <span className="font-bold">95%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Oxidation Resistance</span>
                    <span className="font-bold">96%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-premium-amber rounded-full" style={{ width: '96%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Star icon component for ratings
const Star = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

export default WhyUs;