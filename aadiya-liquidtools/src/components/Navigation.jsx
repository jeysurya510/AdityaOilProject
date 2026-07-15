// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  MessageCircle,
  Factory,
  Car,
  Settings,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY } from '../data/companyInfo.js';
import logo from '../public/images/logoFin1.png';

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
        { name: 'View All Products', href: '#products', highlight: true },
      ],
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
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleNavClick = (item, e) => {
    if (item.href) {
      e.preventDefault();
      if (item.href.startsWith('#')) {
        scrollToSection(item.href);
      } else {
        window.location.href = item.href;
      }
    }
  };

  return (
    <>
      {/* TOP CONTACT BAR */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY.contact.phone}`}
              className="flex items-center gap-2 hover:text-amber-300"
            >
              <Phone size={14} />
              {COMPANY.contact.phone}
            </a>
            <span className="hidden sm:inline">|</span>
            <a
              href={`mailto:${COMPANY.contact.email}`}
              className="hover:text-amber-300"
            >
              📧 {COMPANY.contact.email}
            </a>
          </div>
          <div className="text-xs">
            <span className="text-amber-400 font-medium">
              CIN: {COMPANY.cin}
            </span>
            <span className="mx-2">•</span>
            <span>Incorporated: {COMPANY.incorporationDate}</span>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 w-full transition-all ${
          scrolled
            ? 'bg-white/95 backdrop-blur shadow-xl py-3'
            : 'bg-white py-4 border-b'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">

            {/* ✅ IMAGE LOGO (TEXT REMOVED, STRUCTURE SAME) */}
            {/* LOGO + COMPANY NAME */}
            <motion.a
              href="/"
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-3"
            >
              {/* Logo Image */}
              <img
                src={logo}
                alt="Aadiya Liquidtools Logo"
                className="h-16 sm:h-20 w-auto object-contain"
              />

              {/* Company Name */}
              <div className="leading-tight">
                <div className="text-lg sm:text-xl font-bold text-gray-900 tracking-wide">
                  AADIYA LIQUIDTOOLS
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  India Private Limited
                </div>
              </div>
            </motion.a>


            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <>
                      <button
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                        className={`px-4 py-2 flex items-center gap-1 font-medium ${
                          isActivePath(item)
                            ? 'text-amber-600'
                            : 'text-gray-700 hover:text-amber-600'
                        }`}
                      >
                        {item.name}
                        <ChevronDown size={16} />
                      </button>

                      {activeDropdown === item.name && (
                        <div
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                          className="absolute left-0 top-full mt-2 w-64 bg-white rounded-xl shadow-xl border z-50"
                        >
                          {item.dropdown.map((sub) => (
                            <a
                              key={sub.name}
                              href={sub.href}
                              onClick={(e) => handleNavClick(sub, e)}
                              className={`flex items-center gap-3 px-5 py-3 hover:bg-gray-50 ${
                                sub.highlight
                                  ? 'bg-amber-50 text-amber-600 font-semibold'
                                  : 'text-gray-700'
                              }`}
                            >
                              {sub.icon && <span>{sub.icon}</span>}
                              {sub.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : item.href ? (
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(item, e)}
                      className={`px-4 py-2 font-medium ${
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
                      className={`px-4 py-2 font-medium ${
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

              {/* CTA BUTTONS */}
              <div className="flex items-center gap-3 ml-6">
                <a
                  href={COMPANY.social.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-600 text-white px-5 py-2 rounded-full flex items-center gap-2"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>

                <a
                  href={COMPANY.social.call}
                  className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-full flex items-center gap-2 font-bold"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t shadow-lg"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div className="space-y-2">
                        <div className="font-medium text-gray-700 px-2 py-1">
                          {item.name}
                        </div>
                        <div className="ml-4 space-y-2">
                          {item.dropdown.map((sub) => (
                            <a
                              key={sub.name}
                              href={sub.href}
                              onClick={(e) => {
                                handleNavClick(sub, e);
                                setIsOpen(false);
                              }}
                              className={`block px-3 py-2 rounded-lg ${
                                sub.highlight
                                  ? 'bg-amber-50 text-amber-600 font-semibold'
                                  : 'text-gray-600 hover:bg-gray-100'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                {sub.icon && <span>{sub.icon}</span>}
                                {sub.name}
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        onClick={(e) => {
                          handleNavClick(item, e);
                          setIsOpen(false);
                        }}
                        className={`block px-3 py-2 rounded-lg font-medium ${
                          isActivePath(item)
                            ? 'bg-amber-50 text-amber-600'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navigation;
