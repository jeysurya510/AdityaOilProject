import { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { 
  Factory, Zap, Gauge, Thermometer, Droplets, 
  Shield, CheckCircle, Play, Pause, Maximize2,
  ChevronLeft, ChevronRight, Clock, Users,
  BarChart, Settings, Award, Cpu, Filter,
  Truck, Package, TestTube, Microscope,
  Phone, MapPin, MessageCircle
} from 'lucide-react';
import { COMPANY } from '../data/companyInfo';

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
    <section id="facility" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full mb-4">
            <Factory className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-semibold text-amber-700">OUR FACILITY</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            State-of-the-Art <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Manufacturing</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ISO 9001:2015 certified facility producing premium lubricants for automotive, 
            industrial, and marine applications across India.
          </p>
        </motion.div>

        {/* Facility Showcase */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-4 gap-4 mb-8">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                whileHover={{ y: -5 }}
                onClick={() => setActiveSection(section.id)}
                className={`p-6 rounded-2xl text-left transition-all ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-2xl'
                    : 'bg-white border border-gray-200 hover:border-gray-300 text-gray-700'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-3 rounded-xl ${
                    activeSection === section.id 
                      ? 'bg-white/20' 
                      : 'bg-gradient-to-r from-gray-100 to-gray-50'
                  }`}>
                    {section.icon}
                  </div>
                  <h3 className="text-lg font-bold">{section.title}</h3>
                </div>
                <p className="text-sm opacity-90 mb-3">{section.description}</p>
                <div className="text-sm font-medium">{section.capacity}</div>
              </motion.button>
            ))}
          </div>

          {/* Active Section Details */}
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 text-white">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">{activeSectionData?.title}</h3>
                  <p className="opacity-90">{activeSectionData?.description}</p>
                </div>
                <div className="text-5xl">{activeSectionData?.images[0]}</div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {activeSectionData?.features.map((feature, index) => (
                  <div key={feature} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-200">
                <h4 className="text-xl font-bold mb-4">Schedule a Factory Visit</h4>
                <p className="text-gray-700 mb-4">
                  Interested in seeing our facility? Contact us to arrange a visit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${COMPANY.contact.phone.replace(/\s+/g, '')}`}
                    className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl font-bold hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call: {COMPANY.contact.phone}
                  </a>
                  <a
                    href={COMPANY.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Enquiry
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Facility Address */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 text-white mb-16">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-4">Visit Our Manufacturing Unit</h3>
              <p className="text-gray-300 mb-6">
                Located in Tamil Nadu with easy access to major industrial hubs across South India.
              </p>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span className="text-lg">{COMPANY.contact.registeredAddress}</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🏭</div>
              <div className="font-bold">Manufacturing Unit</div>
              <div className="text-sm text-gray-300">Tamil Nadu, India</div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-8">Certifications & Approvals</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {COMPANY.certifications?.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-3">🏆</div>
                <div className="font-bold">{cert}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Partner with Us?</h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Contact our sales team for bulk orders, dealership opportunities, or custom formulations.
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
              href={`mailto:${COMPANY.contact.email}`}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 transition flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email: {COMPANY.contact.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add missing Mail icon
const Mail = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default Facility;