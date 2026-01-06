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
import { COMPANY } from '../data/companyInfo';

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
      
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0A2463', '#DC2626', '#F59E0B', '#1E40AF']
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        city: '',
        enquiryType: 'product',
        message: ''
      });

      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const handleWhatsApp = () => {
    const message = `Hello ${COMPANY.name},\n\nI'm interested in your products. Please contact me.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nCompany: ${formData.company}\nCity: ${formData.city}`;
    window.open(`${COMPANY.social.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
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
      address: COMPANY.contact.registeredAddress,
      phone: COMPANY.contact.phone,
      email: COMPANY.contact.email,
      manager: 'Factory Manager',
      timing: COMPANY.hours.weekdays,
      services: ['Sales', 'Technical Support', 'Dealer Enquiry', 'Manufacturing']
    },
    {
      id: 'coimbatore',
      city: 'Coimbatore',
      address: 'Industrial Estate, Coimbatore - 641006',
      phone: '+91 98408 95637',
      email: 'coimbatore@aadiyaliquidtools.com',
      manager: 'Regional Manager',
      timing: COMPANY.hours.weekdays,
      services: ['Sales', 'Distribution']
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
    { icon: '📞', label: 'Call Now', action: () => window.open(COMPANY.social.call), color: 'from-green-500 to-emerald-500' },
    { icon: '💬', label: 'WhatsApp', action: handleWhatsApp, color: 'from-green-600 to-green-700' },
    { icon: '📧', label: 'Send Email', action: () => window.open(`mailto:${COMPANY.contact.email}`), color: 'from-blue-500 to-blue-600' },
    { icon: '📍', label: 'Get Directions', action: () => window.open(`https://maps.google.com?q=${encodeURIComponent(COMPANY.contact.registeredAddress)}`), color: 'from-red-500 to-red-600' },
  ];

  const documents = [
    { name: 'Product Catalog PDF', size: '5.2 MB', icon: <FileText className="w-5 h-5" /> },
    { name: 'Dealer Application Form', size: '1.8 MB', icon: <FileText className="w-5 h-5" /> },
    { name: 'MSDS Sheets', size: '3.5 MB', icon: <Shield className="w-5 h-5" /> },
    { name: 'Technical Specifications', size: '4.1 MB', icon: <Award className="w-5 h-5" /> },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full mb-4">
            <MessageCircle className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-semibold text-amber-700">GET IN TOUCH</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">{COMPANY.shortName}</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your lubricant needs? Our team is here to provide 
            expert guidance and customized solutions.
          </p>
        </motion.div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/20 rounded-xl">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Contact Details</h4>
                  <p className="opacity-90">Always available for enquiries</p>
                </div>
              </div>
              <div className="space-y-3">
                <button
                  onClick={() => handleCopy(COMPANY.contact.phone, 'Phone')}
                  className="w-full text-left p-3 bg-white/10 rounded-xl hover:bg-white/20 transition flex items-center justify-between group"
                >
                  <div>
                    <div className="font-bold text-lg">{COMPANY.contact.phone}</div>
                    <div className="text-sm opacity-80">Primary Contact</div>
                  </div>
                  <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100" />
                </button>
                <button
                  onClick={() => handleCopy(COMPANY.contact.email, 'Email')}
                  className="w-full text-left p-3 bg-white/10 rounded-xl hover:bg-white/20 transition flex items-center justify-between group"
                >
                  <div>
                    <div className="font-bold">{COMPANY.contact.email}</div>
                    <div className="text-sm opacity-80">General Enquiries</div>
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
                <div className="p-3 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Registered Office</h4>
                  <p className="text-gray-600">Visit our manufacturing unit</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{COMPANY.contact.registeredAddress}</p>
              <button
                onClick={() => handleCopy(COMPANY.contact.registeredAddress, 'Address')}
                className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition flex items-center justify-center gap-2"
              >
                <Copy className="w-4 h-4" />
                Copy Address
              </button>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 p-6 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-xl">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Business Hours</h4>
                  <p className="text-gray-600">We're here to help</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Saturday</span>
                  <span className="font-bold">{COMPANY.hours.weekdays}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-bold text-red-600">{COMPANY.hours.sunday}</span>
                </div>
              </div>
            </motion.div>

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

          {/* Enquiry Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Quick Enquiry Form</h3>
                <p className="opacity-90">Get expert advice on the right lubricants for your needs</p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="p-8">
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
                            ? 'border-red-600 bg-red-50 text-red-600'
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
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none"
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
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none"
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
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none"
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
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none"
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
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-red-600 focus:ring-2 focus:ring-red-600/20 outline-none"
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
                    className="flex-1 bg-gradient-to-r from-red-600 to-orange-600 text-white py-4 rounded-xl font-bold text-lg disabled:opacity-50 flex items-center justify-center gap-3"
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
              </form>
            </motion.div>

            {/* Quick Actions */}
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

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Need Immediate Assistance?
          </h3>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-xl opacity-90 mb-8">
              Call us directly for urgent enquiries, technical support, or bulk orders.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={COMPANY.social.call}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Call Now: {COMPANY.contact.phone}
              </a>
              <a
                href={COMPANY.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Chat
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;