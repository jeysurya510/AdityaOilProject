import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, MapPin, MessageCircle, Send, CheckCircle,
  Clock, User, Building, Truck, Download, FileText,
  ChevronRight, X, Copy, ExternalLink, Instagram,
  Facebook, Linkedin, Youtube, Globe, AlertCircle,
  Calendar, Shield, Award, Star, Headphones
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    city: '',
    enquiryType: 'product',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeTab, setActiveTab] = useState('enquiry');
  const [selectedBranch, setSelectedBranch] = useState('chennai');
  const [copiedText, setCopiedText] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY"); // You'll need to get this from emailjs.com
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Confetti celebration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0A2463', '#DC2626', '#F59E0B', '#1E40AF']
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        city: '',
        enquiryType: 'product',
        message: ''
      });

      // Auto-hide success message
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);

    // Real EmailJS integration (uncomment when you have API keys)
    /*
    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      setSubmitStatus('success');
      confetti({ particleCount: 100, spread: 70 });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
    */
  };

  const handleWhatsApp = () => {
    const message = `Hello Aadiya Liquidtools,\n\nI'm interested in your products. Please contact me.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nCompany: ${formData.company}\nCity: ${formData.city}`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2000);
  };

  const enquiryTypes = [
    { id: 'product', label: 'Product Enquiry', icon: '🛢️' },
    { id: 'dealer', label: 'Dealership', icon: '🏪' },
    { id: 'bulk', label: 'Bulk Order', icon: '🚚' },
    { id: 'technical', label: 'Technical Support', icon: '🔧' },
    { id: 'custom', label: 'Custom Formulation', icon: '⚗️' },
    { id: 'other', label: 'Other', icon: '📋' },
  ];

  const branches = [
    {
      id: 'chennai',
      city: 'Chennai HQ',
      address: 'P1. No. 15, 6th Street, Sri Devi Nagar, Kattupakkam, Tiruvallur',
      phone: '+91 98765 43210',
      email: 'chennai@aadiyaliquidtools.com',
      manager: 'Mr. Rajesh Kumar',
      timing: '9:00 AM - 6:00 PM (Mon-Sat)',
      services: ['Sales', 'Technical Support', 'Dealer Enquiry']
    },
    {
      id: 'coimbatore',
      city: 'Coimbatore',
      address: '123, Industrial Estate, Ganapathy, Coimbatore - 641006',
      phone: '+91 98765 43211',
      email: 'coimbatore@aadiyaliquidtools.com',
      manager: 'Mr. Senthil Kumar',
      timing: '9:00 AM - 6:00 PM (Mon-Sat)',
      services: ['Sales', 'Distribution']
    },
    {
      id: 'bangalore',
      city: 'Bangalore',
      address: '456, Peenya Industrial Area, Bangalore - 560058',
      phone: '+91 98765 43212',
      email: 'bangalore@aadiyaliquidtools.com',
      manager: 'Ms. Priya Sharma',
      timing: '9:00 AM - 6:00 PM (Mon-Sat)',
      services: ['Sales', 'Export']
    },
    {
      id: 'hyderabad',
      city: 'Hyderabad',
      address: '789, IDA Nacharam, Hyderabad - 500076',
      phone: '+91 98765 43213',
      email: 'hyderabad@aadiyaliquidtools.com',
      manager: 'Mr. Arjun Reddy',
      timing: '9:00 AM - 6:00 PM (Mon-Sat)',
      services: ['Sales', 'Technical Support']
    }
  ];

  const dealerBenefits = [
    'Attractive Margins & Discounts',
    'Technical Training & Support',
    'Marketing Materials Provided',
    'Priority Delivery',
    'Exclusive Territory Rights',
    'No Minimum Stock Requirement'
  ];

  const quickActions = [
    { icon: '📞', label: 'Call Now', action: () => window.open('tel:+919876543210'), color: 'from-green-500 to-emerald-500' },
    { icon: '💬', label: 'WhatsApp', action: handleWhatsApp, color: 'from-green-600 to-green-700' },
    { icon: '📧', label: 'Send Email', action: () => window.open('mailto:sales@aadiyaliquidtools.com'), color: 'from-blue-500 to-blue-600' },
    { icon: '📍', label: 'Get Directions', action: () => window.open('https://maps.google.com?q=Aadiya+Liquidtools+Tiruvallur'), color: 'from-red-500 to-red-600' },
  ];

  const documents = [
    { name: 'Product Catalog PDF', size: '5.2 MB', icon: <FileText className="w-5 h-5" /> },
    { name: 'Dealer Application Form', size: '1.8 MB', icon: <FileText className="w-5 h-5" /> },
    { name: 'MSDS Sheets', size: '3.5 MB', icon: <Shield className="w-5 h-5" /> },
    { name: 'Technical Specifications', size: '4.1 MB', icon: <Award className="w-5 h-5" /> },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-responsive">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-premium-amber/10 to-energy-red/10 rounded-full mb-4">
            <MessageCircle className="w-4 h-4 text-premium-amber" />
            <span className="text-sm font-semibold gradient-text">GET IN TOUCH</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
            Contact <span className="gradient-text">Aadiya Liquidtools</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your lubricant needs? Our team is here to provide 
            expert guidance and customized solutions.
          </p>
        </motion.div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Tabs */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              {/* Contact Mode Tabs */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setActiveTab('enquiry')}
                    className={`p-4 rounded-xl text-center transition-all ${
                      activeTab === 'enquiry'
                        ? 'bg-gradient-to-r from-navy to-trust-blue text-white shadow-lg'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <MessageCircle className="w-6 h-6 mx-auto mb-2" />
                    <span className="font-medium">Quick Enquiry</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('dealer')}
                    className={`p-4 rounded-xl text-center transition-all ${
                      activeTab === 'dealer'
                        ? 'bg-gradient-to-r from-premium-amber to-energy-red text-white shadow-lg'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <Building className="w-6 h-6 mx-auto mb-2" />
                    <span className="font-medium">Dealer Program</span>
                  </button>
                </div>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-r from-navy to-trust-blue text-white p-6 rounded-2xl"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/20 rounded-xl">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">24/7 Helpline</h4>
                      <p className="opacity-90">Always available for urgent enquiries</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <button
                      onClick={() => handleCopy('+919876543210', 'Phone')}
                      className="w-full text-left p-3 bg-white/10 rounded-xl hover:bg-white/20 transition flex items-center justify-between group"
                    >
                      <div>
                        <div className="font-bold text-lg">+91 98765 43210</div>
                        <div className="text-sm opacity-80">Primary Contact</div>
                      </div>
                      <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100" />
                    </button>
                    <button
                      onClick={() => handleCopy('+919876543211', 'Emergency')}
                      className="w-full text-left p-3 bg-white/10 rounded-xl hover:bg-white/20 transition flex items-center justify-between group"
                    >
                      <div>
                        <div className="font-bold">+91 98765 43211</div>
                        <div className="text-sm opacity-80">Emergency Support</div>
                      </div>
                      <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100" />
                    </button>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white border border-gray-200 p-6 rounded-2xl"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-navy/10 to-trust-blue/10 rounded-xl">
                      <Mail className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Email Us</h4>
                      <p className="text-gray-600">We respond within 2 hours</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <button
                      onClick={() => handleCopy('sales@aadiyaliquidtools.com', 'Sales Email')}
                      className="w-full text-left p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition flex items-center justify-between group"
                    >
                      <div>
                        <div className="font-bold">sales@aadiyaliquidtools.com</div>
                        <div className="text-sm text-gray-600">For Sales Enquiries</div>
                      </div>
                      <Copy className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                    </button>
                    <button
                      onClick={() => handleCopy('support@aadiyaliquidtools.com', 'Support Email')}
                      className="w-full text-left p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition flex items-center justify-between group"
                    >
                      <div>
                        <div className="font-bold">support@aadiyaliquidtools.com</div>
                        <div className="text-sm text-gray-600">Technical Support</div>
                      </div>
                      <Copy className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                    </button>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white border border-gray-200 p-6 rounded-2xl"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-premium-amber/10 to-energy-red/10 rounded-xl">
                      <Clock className="w-6 h-6 text-premium-amber" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Business Hours</h4>
                      <p className="text-gray-600">We're here to help</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Saturday</span>
                      <span className="font-bold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-bold text-energy-red">Emergency Only</span>
                    </div>
                    <div className="pt-3 border-t border-gray-200">
                      <div className="text-sm text-gray-500">Technical support available 24/7</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Copied Notification */}
              <AnimatePresence>
                {copiedText && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl shadow-xl z-50 flex items-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5" />
                    {copiedText} copied to clipboard!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {/* Enquiry Form */}
              {activeTab === 'enquiry' && (
                <motion.div
                  key="enquiry"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-navy to-trust-blue p-8 text-white">
                    <h3 className="text-3xl font-bold mb-2">Quick Enquiry Form</h3>
                    <p className="opacity-90">Get expert advice on the right lubricants for your needs</p>
                  </div>

                  <form ref={formRef} onSubmit={handleSubmit} className="p-8">
                    {/* Success/Error Messages */}
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl"
                      >
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-8 h-8 text-green-500" />
                          <div>
                            <h4 className="text-xl font-bold text-gray-900">Enquiry Sent Successfully!</h4>
                            <p className="text-gray-600">Our team will contact you within 30 minutes.</p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="mb-6 p-6 bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-2xl">
                        <div className="flex items-center gap-3">
                          <AlertCircle className="w-8 h-8 text-red-500" />
                          <div>
                            <h4 className="text-xl font-bold text-gray-900">Something went wrong</h4>
                            <p className="text-gray-600">Please try again or contact us directly.</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Enquiry Type */}
                    <div className="mb-8">
                      <label className="block text-lg font-bold text-gray-900 mb-4">
                        What are you looking for?
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {enquiryTypes.map((type) => (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => setFormData({...formData, enquiryType: type.id})}
                            className={`p-4 rounded-xl border-2 text-center transition-all ${
                              formData.enquiryType === type.id
                                ? 'border-energy-red bg-red-50 text-energy-red'
                                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            <div className="text-2xl mb-2">{type.icon}</div>
                            <div className="font-medium">{type.label}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Form Fields */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-energy-red focus:ring-2 focus:ring-energy-red/20 outline-none"
                            placeholder="Enter your name"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Mobile Number *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-energy-red focus:ring-2 focus:ring-energy-red/20 outline-none"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-energy-red focus:ring-2 focus:ring-energy-red/20 outline-none"
                            placeholder="you@company.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <div className="relative">
                          <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-energy-red focus:ring-2 focus:ring-energy-red/20 outline-none"
                            placeholder="Your company"
                          />
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="4"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-energy-red focus:ring-2 focus:ring-energy-red/20 outline-none"
                          placeholder="Tell us about your requirements..."
                        />
                      </div>
                    </div>

                    {/* Form Actions */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 bg-gradient-to-r from-energy-red to-premium-amber text-white py-4 rounded-xl font-bold text-lg disabled:opacity-50 flex items-center justify-center gap-3"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Enquiry
                          </>
                        )}
                      </motion.button>

                      <motion.button
                        type="button"
                        onClick={handleWhatsApp}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3"
                      >
                        <MessageCircle className="w-5 h-5" />
                        WhatsApp
                      </motion.button>
                    </div>

                    <div className="mt-6 text-center text-sm text-gray-500">
                      <p>We respect your privacy. Your information will not be shared.</p>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* Dealer Program */}
              {activeTab === 'dealer' && (
                <motion.div
                  key="dealer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-premium-amber to-energy-red p-8 text-white">
                    <h3 className="text-3xl font-bold mb-2">Dealer Partnership Program</h3>
                    <p className="opacity-90">Join India's fastest growing lubricant brand</p>
                  </div>

                  <div className="p-8">
                    {/* Dealer Benefits */}
                    <div className="mb-8">
                      <h4 className="text-2xl font-bold text-gray-900 mb-6">
                        Why Become an Aadiya Dealer?
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {dealerBenefits.map((benefit, index) => (
                          <motion.div
                            key={benefit}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl"
                          >
                            <Star className="w-5 h-5 text-premium-amber flex-shrink-0" />
                            <span className="font-medium">{benefit}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Investment Details */}
                    <div className="bg-gradient-to-r from-navy/5 to-trust-blue/5 p-6 rounded-2xl mb-8">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Investment Details</h4>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="text-4xl font-bold gradient-text mb-2">₹50K</div>
                          <div className="text-gray-600">Minimum Investment</div>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl font-bold gradient-text mb-2">25%</div>
                          <div className="text-gray-600">Average Margin</div>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl font-bold gradient-text mb-2">0</div>
                          <div className="text-gray-600">Hidden Charges</div>
                        </div>
                      </div>
                    </div>

                    {/* Dealer Form */}
                    <div className="bg-gray-50 p-6 rounded-2xl">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Apply for Dealership</h4>
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-energy-red"
                        />
                        <input
                          type="tel"
                          placeholder="Mobile Number"
                          className="px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-energy-red"
                        />
                        <input
                          type="text"
                          placeholder="City"
                          className="px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-energy-red"
                        />
                        <input
                          type="text"
                          placeholder="Current Business"
                          className="px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-energy-red"
                        />
                      </div>
                      <button className="w-full bg-gradient-to-r from-navy to-trust-blue text-white py-4 rounded-xl font-bold">
                        Apply Now for Dealership
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Quick Action Buttons */}
            <div className="mt-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickActions.map((action, index) => (
                  <motion.button
                    key={action.label}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={action.action}
                    className={`bg-gradient-to-r ${action.color} text-white p-6 rounded-2xl text-center`}
                  >
                    <div className="text-3xl mb-3">{action.icon}</div>
                    <div className="font-bold">{action.label}</div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Branches & Locations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-3xl font-bold">Our <span className="gradient-text">Branches</span></h3>
              <p className="text-gray-600">Visit us at any of our locations</p>
            </div>
            <div className="flex gap-2">
              {branches.map((branch) => (
                <button
                  key={branch.id}
                  onClick={() => setSelectedBranch(branch.id)}
                  className={`px-4 py-2 rounded-xl font-medium ${
                    selectedBranch === branch.id
                      ? 'bg-gradient-to-r from-navy to-trust-blue text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {branch.city}
                </button>
              ))}
            </div>
          </div>

          {/* Branch Details */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="grid md:grid-cols-3">
              {/* Branch Info */}
              <div className="md:col-span-2 p-8">
                {branches.map((branch) => (
                  branch.id === selectedBranch && (
                    <motion.div
                      key={branch.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-gradient-to-r from-navy/10 to-trust-blue/10 rounded-xl">
                          <MapPin className="w-6 h-6 text-navy" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900">{branch.city}</h4>
                          <p className="text-gray-600">Head Office & Manufacturing Unit</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-bold text-gray-900 mb-3">Contact Details</h5>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <Phone className="w-5 h-5 text-gray-400" />
                              <span className="font-medium">{branch.phone}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Mail className="w-5 h-5 text-gray-400" />
                              <span className="font-medium">{branch.email}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <User className="w-5 h-5 text-gray-400" />
                              <span className="font-medium">{branch.manager}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Clock className="w-5 h-5 text-gray-400" />
                              <span className="font-medium">{branch.timing}</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h5 className="font-bold text-gray-900 mb-3">Services Offered</h5>
                          <div className="space-y-2">
                            {branch.services.map((service) => (
                              <div key={service} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span>{service}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
                        <p className="text-gray-700 mb-4">{branch.address}</p>
                        <button className="text-energy-red font-medium flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Open in Google Maps
                        </button>
                      </div>
                    </motion.div>
                  )
                ))}
              </div>

              {/* Map Preview */}
              <div className="bg-gradient-to-br from-gray-900 to-navy p-8 text-white flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📍</div>
                  <h4 className="text-xl font-bold mb-2">Interactive Map</h4>
                  <p className="opacity-90 mb-6">View our location on Google Maps</p>
                  <button className="bg-white text-navy px-6 py-3 rounded-xl font-bold hover:bg-gray-100">
                    Open Map
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Documents Download */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-10">
            Download <span className="gradient-text">Documents</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documents.map((doc, index) => (
              <motion.div
                key={doc.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-navy/10 to-trust-blue/10 rounded-xl">
                    {doc.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">{doc.name}</h5>
                    <div className="text-sm text-gray-500">{doc.size}</div>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Media & Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-navy to-trust-blue rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Connect With Us On Social Media
          </h3>
          
          <div className="flex justify-center gap-6 mb-8">
            {[
              { icon: <Facebook className="w-6 h-6" />, label: 'Facebook' },
              { icon: <Instagram className="w-6 h-6" />, label: 'Instagram' },
              { icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn' },
              { icon: <Youtube className="w-6 h-6" />, label: 'YouTube' },
              { icon: <Globe className="w-6 h-6" />, label: 'Website' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href="#"
                whileHover={{ scale: 1.1 }}
                className="p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-xl opacity-90 mb-8">
              Follow us for industry insights, product updates, and exclusive offers.
              Join our community of 10,000+ industry professionals.
            </p>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-premium-amber to-energy-red text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl"
            >
              <Headphones className="w-5 h-5" />
              Talk to Our Sales Team Now
              <ChevronRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;