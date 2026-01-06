// src/components/Navbar.jsx - CORRECTED VERSION
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown, MessageCircle, Factory, Car, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY } from '../data/companyInfo.js';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items for Aadiya Liquidtools
  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Products', 
      path: '/products',
      dropdown: [
        { name: 'Industrial Oils', icon: <Factory size={16} />, href: '#industrial' },
        { name: 'Automotive Oils', icon: <Car size={16} />, href: '#automotive' },
        { name: 'Greases & Lubricants', icon: <Settings size={16} />, href: '#greases' },
        { name: 'Specialty Oils', icon: '⚡', href: '#specialty' },
        { name: 'View All Products', href: '#products', highlight: true }
      ]
    },
    { name: 'Why Us', href: '#whyus' },
    { name: 'Facility', href: '#facility' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const isActivePath = (item) => {
    if (item.href && location.hash === item.href) return true;
    if (item.path && location.pathname === item.path) return true;
    return false;
  };

  const scrollToSection = (hash) => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-2 px-4">
        <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
          <div className="flex items-center gap-4">
            <a href={`tel:${COMPANY.contact.phone}`} className="flex items-center gap-2 hover:text-amber-300">
              <Phone className="w-4 h-4" />
              {COMPANY.contact.phone}
            </a>
            <span className="hidden sm:inline">|</span>
            <a href={`mailto:${COMPANY.contact.email}`} className="flex items-center gap-2 hover:text-amber-300">
              📧 {COMPANY.contact.email}
            </a>
          </div>
          <div className="text-xs sm:text-sm">
            <span className="text-amber-400 font-medium">CIN: {COMPANY.cin}</span>
            <span className="mx-2">•</span>
            <span>Incorporated: {COMPANY.incorporationDate}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl py-3' 
            : 'bg-white py-4 border-b border-gray-200'
        }`}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between">
            
            {/* Logo - Aadiya Liquidtools */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <a href="/" className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">AL</span>
                    <motion.div 
                      className="absolute inset-0 rounded-xl border-2 border-white/30"
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
                  <h1 className="text-xl font-bold text-gray-900 leading-tight">
                    {COMPANY.shortName}
                  </h1>
                  <p className="text-xs text-gray-600">INDIA PRIVATE LIMITED</p>
                </div>
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className={`px-4 py-2 font-medium flex items-center gap-1 transition-colors ${
                          isActivePath(item)
                            ? 'text-amber-600'
                            : 'text-gray-700 hover:text-amber-600'
                        }`}
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.name}
                        <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
                      </motion.button>

                      {/* Dropdown Menu */}
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(subItem.href);
                                setActiveDropdown(null);
                              }}
                              className={`flex items-center gap-3 px-6 py-4 hover:bg-gray-50 transition-all ${
                                subItem.highlight ? 'bg-gradient-to-r from-amber-50 to-orange-50' : ''
                              }`}
                            >
                              {subItem.icon && (
                                <span className={`p-2 rounded-lg ${
                                  subItem.highlight ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-600'
                                }`}>
                                  {subItem.icon}
                                </span>
                              )}
                              <span className={`font-medium ${
                                subItem.highlight ? 'text-amber-600' : 'text-gray-700'
                              }`}>
                                {subItem.name}
                              </span>
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </>
                  ) : item.href ? (
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                      className={`px-4 py-2 font-medium transition-colors ${
                        isActivePath(item)
                          ? 'text-amber-600 border-b-2 border-amber-600'
                          : 'text-gray-700 hover:text-amber-600'
                      }`}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-4 py-2 font-medium transition-colors ${
                        isActivePath(item)
                          ? 'text-amber-600 border-b-2 border-amber-600'
                          : 'text-gray-700 hover:text-amber-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* CTA Buttons */}
              <div className="flex items-center gap-3 ml-6">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={COMPANY.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-green-700 transition shadow-lg hover:shadow-xl"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={COMPANY.social.call}
                  className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2.5 rounded-full font-bold hover:shadow-xl transition-all shadow-lg"
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
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-500 to-orange-600"
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
            className="lg:hidden fixed top-[120px] left-0 right-0 bg-white shadow-2xl z-40 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.href);
                          setIsOpen(false);
                        }}
                        className={`flex items-center justify-between py-4 px-4 rounded-xl transition ${
                          isActivePath(item)
                            ? 'bg-amber-50 text-amber-600'
                            : 'text-gray-700 hover:text-amber-600 hover:bg-gray-50'
                        }`}
                      >
                        <span className="font-medium">{item.name}</span>
                        {item.dropdown && <ChevronDown size={16} />}
                      </a>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between py-4 px-4 rounded-xl transition ${
                          isActivePath(item)
                            ? 'bg-amber-50 text-amber-600'
                            : 'text-gray-700 hover:text-amber-600 hover:bg-gray-50'
                        }`}
                      >
                        <span className="font-medium">{item.name}</span>
                        {item.dropdown && <ChevronDown size={16} />}
                      </Link>
                    )}
                    
                    {/* Mobile Dropdown */}
                    {item.dropdown && (
                      <div className="ml-6 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToSection(subItem.href);
                              setIsOpen(false);
                            }}
                            className="flex items-center gap-3 py-3 px-4 text-gray-600 hover:text-amber-600 hover:bg-gray-50 rounded-lg"
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
                  href={COMPANY.social.call}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg"
                >
                  <Phone size={20} />
                  Call: {COMPANY.contact.phone}
                </a>
                
                <a
                  href={COMPANY.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
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
                <div className="text-center text-sm text-gray-500 space-y-1">
                  <p>🏢 {COMPANY.contact.registeredAddress}</p>
                  <p>📧 {COMPANY.contact.email}</p>
                  <p>CIN: {COMPANY.cin}</p>
                  <p>Status: <span className="text-green-600 font-medium">{COMPANY.status}</span></p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Button */}
      <motion.a
        href={COMPANY.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
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