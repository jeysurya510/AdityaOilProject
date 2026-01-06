import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, Award, Truck, Clock, Users, 
  Globe, CheckCircle, ChevronRight, Factory,
  Zap, Target, BarChart, TrendingUp,
  Star, FileCheck, Gauge, Thermometer,
  Droplet, Settings, Package
} from 'lucide-react';
import { COMPANY } from '../data/companyInfo';

const WhyUs = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [stats, setStats] = useState({
    clients: 0,
    products: 0,
    cities: 0,
    experience: 0
  });

  // Using COMPANY data
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Premium Quality Assurance",
      description: "27+ quality checks with ISO 9001:2015 certification. Every batch tested for viscosity, thermal stability, and oxidation resistance.",
      color: "from-blue-600 to-cyan-500",
      badge: "ISO Certified"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Industry Certifications",
      description: `BIS Certified & OEM approved lubricants meeting ${COMPANY.certifications?.join(', ')} standards for maximum reliability.`,
      color: "from-amber-600 to-orange-500",
      badge: "Certified"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Pan-India Distribution",
      description: "Robust supply chain covering major industrial hubs with dedicated logistics for timely delivery across India.",
      color: "from-green-600 to-emerald-500",
      badge: "500+ Cities"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Technical Support",
      description: "Round-the-clock expert assistance for product selection, troubleshooting, and application-specific guidance.",
      color: "from-purple-600 to-pink-500",
      badge: "Support"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert R&D Team",
      description: "Decades of cumulative experience in lubricant formulation and application-specific solutions for Indian conditions.",
      color: "from-red-600 to-rose-500",
      badge: "Experts"
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Modern Manufacturing",
      description: "State-of-the-art blending facility with automated systems ensuring consistent quality and batch-to-batch uniformity.",
      color: "from-indigo-600 to-violet-500",
      badge: "Modern"
    }
  ];

  const achievements = [
    { label: "Satisfied Clients", value: "500+", suffix: "+", icon: <Users className="w-6 h-6" /> },
    { label: "Product Range", value: "50+", suffix: "+", icon: <Package className="w-6 h-6" /> },
    { label: "Cities Covered", value: "150+", suffix: "+", icon: <Truck className="w-6 h-6" /> },
    { label: "Years Excellence", value: "15+", suffix: "+", icon: <Award className="w-6 h-6" /> }
  ];

  const advantages = [
    "Custom formulations for specific applications",
    "Competitive pricing with bulk order discounts",
    "Comprehensive product documentation & MSDS",
    "Regular technical training for partners",
    "Sustainable and eco-friendly product options",
    "Emergency supply for critical applications"
  ];

  const qualityParameters = [
    { name: "Viscosity Index", value: 98, color: "from-blue-500 to-cyan-400" },
    { name: "Thermal Stability", value: 95, color: "from-green-500 to-emerald-400" },
    { name: "Oxidation Resistance", value: 96, color: "from-amber-500 to-orange-400" },
    { name: "Load Capacity", value: 97, color: "from-red-500 to-rose-400" }
  ];

  // Animate stats counter
  useEffect(() => {
    const targets = { clients: 500, products: 50, cities: 150, experience: 15 };
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
        // Cleanup
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
    <section id="whyus" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '500px 500px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-700 rounded-full text-sm font-semibold border border-amber-200">
              WHY CHOOSE {COMPANY.shortName}
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            The <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Aadiya Advantage</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {COMPANY.tagline} - Combining cutting-edge technology with deep industry expertise 
            to deliver lubricants that outperform in every application.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 mb-4">
                <div className="text-gray-700">
                  {achievement.icon}
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stats[Object.keys(stats)[index]] || 0}{achievement.suffix}
              </div>
              <div className="text-gray-600 font-medium">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 backdrop-blur-sm ${
                  activeFeature === index 
                    ? 'bg-gradient-to-br from-white to-gray-50 shadow-2xl border-2 border-amber-500/30' 
                    : 'bg-white/80 shadow-lg border border-gray-100 hover:shadow-xl'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                {feature.badge && (
                  <span className="absolute -top-2 right-4 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full">
                    {feature.badge}
                  </span>
                )}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                {activeFeature === index && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="mt-4"
                  >
                    <div className="flex items-center text-amber-600 font-semibold">
                      <ChevronRight className="w-4 h-4 mr-1" />
                      Active Feature
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Active Feature Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="sticky top-24"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${features[activeFeature].color} flex items-center justify-center shadow-lg`}>
                    {features[activeFeature].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{features[activeFeature].title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-gray-300 text-sm">Rated 5.0 by Clients</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  {features[activeFeature].description}
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-bold text-xl text-white">Key Benefits:</h4>
                  <ul className="space-y-3">
                    {advantages.map((advantage, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                        <span className="text-gray-200">{advantage}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={COMPANY.social.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl font-semibold hover:opacity-90 transition flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Request Sample
                    </a>
                    <button className="px-6 py-3 bg-white/10 rounded-xl font-semibold hover:bg-white/20 transition flex items-center gap-2">
                      <FileCheck className="w-4 h-4" />
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
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeFeature === index 
                        ? 'bg-amber-500 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to feature ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Quality Commitment Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-red-500/10 rounded-3xl p-8 md:p-12 border border-amber-200/50"
        >
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Quality Commitment</h3>
              </div>
              
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                At {COMPANY.shortName}, we don't just meet standards - we set them. Every batch undergoes 
                rigorous testing using advanced equipment to ensure optimal performance in your specific 
                applications.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {COMPANY.certifications?.map((cert, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="font-bold text-xl mb-6 text-gray-900 flex items-center gap-2">
                <Gauge className="w-5 h-5 text-amber-500" />
                Quality Parameters
              </h4>
              <div className="space-y-6">
                {qualityParameters.map((param, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{param.name}</span>
                      <span className="font-bold text-gray-900">{param.value}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${param.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-full rounded-full bg-gradient-to-r ${param.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Test Parameters */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Thermometer className="w-5 h-5" />, label: "Temperature Range", value: "-40°C to 300°C" },
              { icon: <Droplet className="w-5 h-5" />, label: "Viscosity Range", value: "ISO VG 10-1500" },
              { icon: <Settings className="w-5 h-5" />, label: "Load Capacity", value: "Extreme Pressure" },
              { icon: <Shield className="w-5 h-5" />, label: "Warranty", value: "Performance Guarantee" }
            ].map((item, index) => (
              <div key={index} className="bg-white/80 p-4 rounded-xl border border-gray-200">
                <div className="text-amber-600 mb-2">{item.icon}</div>
                <div className="text-sm text-gray-600">{item.label}</div>
                <div className="font-bold text-gray-900">{item.value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold mb-6 text-gray-900">
            Ready to Experience the {COMPANY.shortName} Difference?
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Join 500+ satisfied clients who trust our products for their critical applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${COMPANY.contact.phone.replace(/\s+/g, '')}`}
              className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-amber-500/30 transition flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now: {COMPANY.contact.phone}
            </a>
            <a
              href={COMPANY.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-green-500/30 transition flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Enquiry
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Missing icons for the component
const MessageCircle = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const Phone = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

export default WhyUs;