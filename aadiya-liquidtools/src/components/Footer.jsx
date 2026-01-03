import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Clock, ChevronRight, 
  Shield, Award, Globe, ArrowUp, CheckCircle,
  Facebook, Instagram, Linkedin, Youtube, Twitter,
  FileText, Users, Truck, Factory, MessageCircle,
  Heart, ExternalLink, Download
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Quick links
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Applications', href: '#applications' },
    { label: 'Why Choose Us', href: '#whyus' },
    { label: 'Our Facility', href: '#facility' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const productCategories = [
    { label: 'Automotive Oils', count: '6 Products' },
    { label: 'Industrial Lubricants', count: '8 Products' },
    { label: 'Specialty Greases', count: '4 Products' },
    { label: 'Food Grade Oils', count: '3 Products' },
    { label: 'Marine Lubricants', count: '2 Products' },
    { label: 'Compressor Oils', count: '3 Products' },
  ];

  const certifications = [
    { name: 'ISO 9001:2015', icon: '🏆' },
    { name: 'BIS Certified', icon: '📜' },
    { name: 'OEM Approved', icon: '⚙️' },
    { name: 'ISO 14001', icon: '🌱' },
    { name: 'NSF H1', icon: '🍎' },
    { name: 'FSSAI', icon: '✅' },
  ];

  const socialLinks = [
    { platform: 'Facebook', icon: <Facebook className="w-5 h-5" />, url: '#', color: 'hover:bg-blue-600' },
    { platform: 'Instagram', icon: <Instagram className="w-5 h-5" />, url: '#', color: 'hover:bg-pink-600' },
    { platform: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: '#', color: 'hover:bg-blue-700' },
    { platform: 'YouTube', icon: <Youtube className="w-5 h-5" />, url: '#', color: 'hover:bg-red-600' },
    { platform: 'Twitter', icon: <Twitter className="w-5 h-5" />, url: '#', color: 'hover:bg-blue-400' },
  ];

  const paymentMethods = ['💳', '🏦', '📱', '💵', '🏧', '📲'];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-navy text-white">
      {/* Main Footer Content */}
      <div className="container-responsive pt-16 pb-8">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-premium-amber to-energy-red flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">A</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">AADIYA LIQUIDTOOLS</h2>
                  <p className="text-gray-300 text-sm">INDIA PRIVATE LIMITED</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">
                Manufacturers of premium automotive and industrial lubricants with 
                state-of-the-art blending technology and uncompromising quality standards.
              </p>
              
              {/* Certifications */}
              <div className="mb-6">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-premium-amber" />
                  Certifications
                </h4>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert) => (
                    <div 
                      key={cert.name} 
                      className="px-3 py-1.5 bg-white/10 rounded-lg text-sm flex items-center gap-2"
                    >
                      <span>{cert.icon}</span>
                      <span>{cert.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <ChevronRight className="w-5 h-5 text-premium-amber" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-premium-amber transition flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Product Categories */}
            <div className="mt-8">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Factory className="w-4 h-4 text-premium-amber" />
                Product Categories
              </h4>
              <div className="space-y-2">
                {productCategories.map((category) => (
                  <div key={category.label} className="flex justify-between items-center text-gray-300 hover:text-white transition">
                    <span>{category.label}</span>
                    <span className="text-xs bg-white/10 px-2 py-1 rounded">{category.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-premium-amber" />
              Contact Info
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-premium-amber flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Registered Office</p>
                  <p className="text-gray-300 text-sm">
                    P1. No. 15, 6th Street, Sri Devi Nagar,<br />
                    Kattupakkam, Tiruvallur,<br />
                    Tamil Nadu, India - 600056
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-premium-amber flex-shrink-0" />
                <div>
                  <p className="font-medium">+91 98765 43210</p>
                  <p className="text-gray-300 text-sm">Sales & Support</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-premium-amber flex-shrink-0" />
                <div>
                  <p className="font-medium">sales@aadiyaliquidtools.com</p>
                  <p className="text-gray-300 text-sm">General Enquiries</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-premium-amber flex-shrink-0" />
                <div>
                  <p className="font-medium">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-300 text-sm">Sunday: Emergency Support</p>
                </div>
              </div>
            </div>

            {/* Business Info */}
            <div className="mt-8 p-4 bg-white/5 rounded-xl">
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4 text-premium-amber" />
                Business Details
              </h4>
              <div className="text-sm space-y-1">
                <p>CIN: U46610TN2025PTC182178</p>
                <p>GST: 33AAAAA0000A1Z5</p>
                <p>PAN: AAAAA1234A</p>
              </div>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Mail className="w-5 h-5 text-premium-amber" />
              Newsletter
            </h3>
            
            <div className="mb-8">
              <p className="text-gray-300 mb-4">
                Subscribe to get updates on new products, industry insights, and special offers.
              </p>
              
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 pr-12 text-white placeholder-gray-400 focus:outline-none focus:border-premium-amber"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gradient-to-r from-premium-amber to-energy-red rounded-lg hover:opacity-90 transition"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                
                {subscribed && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm">Subscribed successfully!</span>
                  </motion.div>
                )}
              </form>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    whileHover={{ scale: 1.1 }}
                    className={`p-3 bg-white/10 rounded-xl ${social.color} transition`}
                    aria-label={social.platform}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* App Download */}
            <div className="mt-8 p-4 bg-white/5 rounded-xl">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Download className="w-4 h-4 text-premium-amber" />
                Download Brochure
              </h4>
              <button className="w-full bg-gradient-to-r from-premium-amber to-energy-red text-white py-3 rounded-xl font-medium hover:opacity-90 transition flex items-center justify-center gap-2">
                <FileText className="w-4 h-4" />
                Product Catalog (PDF)
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-gray-300 text-sm">
            <p>© {new Date().getFullYear()} Aadiya Liquidtools India Private Limited. All rights reserved.</p>
            <p className="mt-1">Made with <Heart className="w-3 h-3 inline text-energy-red" /> in India</p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="text-gray-300 hover:text-white transition hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition hover:underline">
              Terms of Service
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition hover:underline">
              Disclaimer
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition hover:underline">
              Sitemap
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition hover:underline">
              Careers
            </a>
          </div>

          {/* Payment Methods */}
          <div className="flex items-center gap-2">
            <span className="text-gray-300 text-sm mr-2">Accepted Payments:</span>
            <div className="flex gap-1">
              {paymentMethods.map((method, index) => (
                <span key={index} className="text-lg">{method}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-premium-amber to-energy-red rounded-full flex items-center justify-center shadow-2xl z-40"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </motion.button>
      </div>

      {/* Floating WhatsApp */}
      <motion.a
        href="https://wa.me/919876543210"
        target="_blank"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-24 right-8 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl z-40"
        aria-label="WhatsApp Chat"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <motion.span 
          className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          💬
        </motion.span>
      </motion.a>
    </footer>
  );
};

export default Footer;