import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown, MessageCircle, Factory, Car, Settings } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items with dropdowns
  const navItems = [
    { name: 'Home', href: '#home' },
    { 
      name: 'Products', 
      href: '#products',
      dropdown: [
        { name: 'Automotive Oils', icon: <Car size={16} />, href: '#automotive' },
        { name: 'Industrial Lubricants', icon: <Factory size={16} />, href: '#industrial' },
        { name: 'Specialty Greases', icon: <Settings size={16} />, href: '#greases' },
        { name: 'View All Products', href: '#products', highlight: true }
      ]
    },
    { name: 'Applications', href: '#applications' },
    { name: 'Why Us', href: '#whyus' },
    { name: 'Facility', href: '#facility' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl py-3' 
            : 'bg-gradient-to-b from-white/95 to-white/80 backdrop-blur-md py-4'
        }`}
      >
        <div className="container-responsive">
          <div className="flex items-center justify-between">
            
            {/* Logo - Animated */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy to-trust-blue flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">A</span>
                  <motion.div 
                    className="absolute inset-0 rounded-xl border-2 border-premium-amber"
                    animate={{ 
                      boxShadow: [
                        '0 0 0px rgba(245, 158, 11, 0.5)',
                        '0 0 20px rgba(245, 158, 11, 0.8)',
                        '0 0 0px rgba(245, 158, 11, 0.5)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </div>
              <div>
                <motion.h1 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-xl font-bold text-navy leading-tight"
                >
                  AADIYA LIQUIDTOOLS
                </motion.h1>
                <p className="text-xs text-gray-600">INDIA PRIVATE LIMITED</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <motion.a
                    href={item.href}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 text-gray-700 hover:text-energy-red font-medium flex items-center gap-1 transition-colors"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />}
                  </motion.a>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className={`flex items-center gap-3 px-6 py-4 hover:bg-gray-50 transition-all ${
                            subItem.highlight ? 'bg-gradient-to-r from-navy/5 to-trust-blue/5' : ''
                          }`}
                        >
                          {subItem.icon && (
                            <span className={`p-2 rounded-lg ${
                              subItem.highlight ? 'bg-energy-red text-white' : 'bg-gray-100 text-gray-600'
                            }`}>
                              {subItem.icon}
                            </span>
                          )}
                          <span className={`font-medium ${
                            subItem.highlight ? 'text-energy-red' : 'text-gray-700'
                          }`}>
                            {subItem.name}
                          </span>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}

              {/* CTA Buttons */}
              <div className="flex items-center gap-3 ml-6">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/916383271397"
                  target="_blank"
                  className="flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-green-700 transition shadow-lg hover:shadow-xl"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:+919876543210"
                  className="flex items-center gap-2 bg-gradient-to-r from-energy-red to-premium-amber text-white px-6 py-2.5 rounded-full font-bold hover:shadow-xl transition-all shadow-lg"
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </motion.a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Scrolling Progress Bar */}
        <motion.div 
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-premium-amber to-energy-red"
          style={{ 
            width: `${Math.min((window.scrollY / 1000) * 100, 100)}%` 
          }}
        />
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed top-20 left-0 right-0 bg-white shadow-2xl z-40 overflow-hidden"
          >
            <div className="container-responsive py-6">
              <div className="space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between py-4 px-4 text-gray-700 hover:text-energy-red hover:bg-gray-50 rounded-xl transition"
                    >
                      <span className="font-medium">{item.name}</span>
                      {item.dropdown && <ChevronDown size={16} />}
                    </a>
                    
                    {/* Mobile Dropdown */}
                    {item.dropdown && (
                      <div className="ml-6 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 py-3 px-4 text-gray-600 hover:text-energy-red hover:bg-gray-50 rounded-lg"
                          >
                            {subItem.icon}
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Mobile CTA Buttons */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-8 space-y-4"
              >
                <a
                  href="tel:+916383271397"
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-energy-red to-premium-amber text-white py-4 rounded-xl font-bold text-lg shadow-lg"
                >
                  <Phone size={20} />
                  Call: +91 6383271397
                </a>
                
                <a
                  href="https://wa.me/916383271397"
                  target="_blank"
                  className="flex items-center justify-center gap-3 bg-green-600 text-white py-4 rounded-xl font-medium shadow-lg"
                >
                  <MessageCircle size={20} />
                  WhatsApp Enquiry
                </a>
              </motion.div>

              {/* Company Info */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 pt-6 border-t border-gray-200"
              >
                <div className="text-center text-sm text-gray-500">
                  <p>🏢 Registered Office: P1. No. 15, 6th Street, Sri Devi Nagar</p>
                  <p className="mt-1">Kattupakkam, Tiruvallur, Tamil Nadu 600056</p>
                  <p className="mt-1">📧 sales@aadiyaliquidtools.com</p>
                  <p className="mt-1">CIN: U46610TN2025PTC182178</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/919876543210"
        target="_blank"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, type: 'spring' }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30"
      >
        <MessageCircle size={28} className="text-white" />
        <motion.span 
          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🔥
        </motion.span>
      </motion.a>
    </>
  );
};

export default Navigation;