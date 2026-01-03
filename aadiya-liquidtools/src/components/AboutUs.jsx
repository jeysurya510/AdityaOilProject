import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Fixed: Added AnimatePresence
import { 
  Building, Target, TrendingUp, Users, Shield, 
  Award, Globe, Clock, MapPin, FileText,
  ChevronRight, CheckCircle, Star, Truck, Factory,
  Mail, Phone, Calendar
} from 'lucide-react';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const companyInfo = {
    name: "Aadiya Liquidtools India Private Limited",
    cin: "U46610TN2025PTC182178",
    status: "Active",
    type: "Private Limited Company",
    incorporationDate: "Jul 08, 2025",
    age: "2 Months",
    roc: "ROC Chennai",
    authorizedCapital: "₹10,000",
    paidUpCapital: "₹10,000",
    address: "P1. No. 15, 6th Street, Sri Devi Nagar, Kattupakkam, Tiruvallur, Poonamallee, Tamil Nadu, India, 600056",
    email: "info@aadiyaliquidtools.com",
    phone: "+91 6383271397"
  };

  const missionVision = {
    mission: "To be India's most trusted lubricant solutions provider by delivering superior quality products, innovative formulations, and exceptional customer service that enhances equipment performance and operational efficiency.",
    vision: "To revolutionize the lubricant industry through sustainable practices, cutting-edge technology, and global quality standards while maintaining deep-rooted local expertise and commitment to customer success.",
    values: [
      "Quality Excellence",
      "Customer Centricity",
      "Innovation & Technology",
      "Sustainability",
      "Integrity & Transparency",
      "Continuous Improvement"
    ]
  };

  const milestones = [
    { year: "2025", event: "Company Incorporation & Launch", icon: "🚀" },
    { year: "2025", event: "ISO 9001:2015 Certification", icon: "🏆" },
    { year: "2025 Q4", event: "Product Portfolio Expansion", icon: "📈" },
    { year: "2026", event: "Pan-India Distribution Network", icon: "🚚" },
    { year: "2026", event: "Export Market Entry", icon: "🌍" },
    { year: "2027", event: "Advanced R&D Center", icon: "🔬" }
  ];

  const team = [
    { name: "Rahul Sharma", role: "Managing Director", exp: "25+ years", expertise: "Lubricant Technology" },
    { name: "Priya Patel", role: "Technical Director", exp: "20+ years", expertise: "R&D & Formulation" },
    { name: "Arjun Mehta", role: "Operations Head", exp: "15+ years", expertise: "Manufacturing & QC" },
    { name: "Sanjay Kumar", role: "Sales Director", exp: "18+ years", expertise: "Market Development" }
  ];

  const facilities = [
    { name: "Modern Blending Plant", capacity: "50,000 L/month", location: "Chennai" },
    { name: "Quality Control Lab", equipment: "27+ Testing Machines", certification: "ISO Certified" },
    { name: "R&D Center", focus: "New Formulations", patents: "5+ in Progress" },
    { name: "Warehouse Facility", area: "10,000 sq.ft.", capacity: "1,000+ SKUs" }
  ];

  const tabs = [
    { id: 'overview', label: 'Company Overview', icon: <Building className="w-4 h-4" /> },
    { id: 'mission', label: 'Mission & Vision', icon: <Target className="w-4 h-4" /> },
    { id: 'team', label: 'Leadership Team', icon: <Users className="w-4 h-4" /> },
    { id: 'facilities', label: 'Our Facilities', icon: <Factory className="w-4 h-4" /> },
    { id: 'milestones', label: 'Milestones', icon: <TrendingUp className="w-4 h-4" /> }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
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
              ABOUT US
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Pioneering Excellence in <span className="text-premium-amber">Lubricant Solutions</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto"
          >
            Aadiya Liquidtools India Private Limited is your trusted partner for premium quality 
            automotive and industrial lubricants, combining cutting-edge technology with decades 
            of industry expertise.
          </motion.p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-premium-amber to-energy-red text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          {/* Company Overview */}
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid lg:grid-cols-2 gap-12"
              >
                <div>
                  <h3 className="text-3xl font-bold mb-6">Company Profile</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Incorporated on {companyInfo.incorporationDate}, Aadiya Liquidtools India Private Limited 
                      represents the next generation of lubricant technology in India. As a dynamic and 
                      forward-thinking company, we are committed to delivering superior lubrication solutions 
                      that enhance equipment performance and operational efficiency.
                    </p>
                    <p>
                      Our state-of-the-art manufacturing facility in Chennai is equipped with advanced 
                      blending technology and comprehensive quality control systems, ensuring every product 
                      meets the highest international standards while being tailored for Indian operating 
                      conditions.
                    </p>
                    <p>
                      With a focus on innovation, quality, and customer satisfaction, we are rapidly 
                      establishing ourselves as a preferred partner for industries ranging from automotive 
                      to heavy machinery, marine to manufacturing.
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                      <div className="text-2xl font-bold text-premium-amber">{companyInfo.authorizedCapital}</div>
                      <div className="text-gray-600 text-sm">Authorized Capital</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                      <div className="text-2xl font-bold text-premium-amber">{companyInfo.paidUpCapital}</div>
                      <div className="text-gray-600 text-sm">Paid Up Capital</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-navy to-gray-900 rounded-3xl p-8 text-white">
                  <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Building className="w-6 h-6" />
                    Corporate Information
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-premium-amber flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold">CIN</div>
                        <div className="text-gray-300">{companyInfo.cin}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-premium-amber" />
                      <div>
                        <div className="font-semibold">Status</div>
                        <div className="text-green-400">{companyInfo.status}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-premium-amber" />
                      <div>
                        <div className="font-semibold">Incorporation Date</div>
                        <div className="text-gray-300">{companyInfo.incorporationDate}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-premium-amber" />
                      <div>
                        <div className="font-semibold">Registered Office</div>
                        <div className="text-gray-300 text-sm">{companyInfo.address}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-premium-amber" />
                      <div>
                        <div className="font-semibold">ROC</div>
                        <div className="text-gray-300">{companyInfo.roc}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/10">
                    <h5 className="font-bold mb-4">Contact Information</h5>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4" />
                        <span>{companyInfo.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4" />
                        <span>{companyInfo.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Mission & Vision */}
            {activeTab === 'mission' && (
              <motion.div
                key="mission"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-12"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-6">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                    <p className="text-gray-700">{missionVision.mission}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-premium-amber to-energy-red flex items-center justify-center mb-6">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                    <p className="text-gray-700">{missionVision.vision}</p>
                  </div>
                </div>

                {/* Core Values */}
                <div>
                  <h3 className="text-3xl font-bold mb-8 text-center">Our Core Values</h3>
                  <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {missionVision.values.map((value, index) => (
                      <motion.div
                        key={value}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-premium-amber/20 to-energy-red/20 flex items-center justify-center mb-4 mx-auto">
                          <CheckCircle className="w-6 h-6 text-premium-amber" />
                        </div>
                        <div className="font-bold">{value}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Leadership Team */}
            {activeTab === 'team' && (
              <motion.div
                key="team"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold mb-4">Leadership Team</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Guided by industry veterans with decades of combined experience in lubricant 
                    technology, manufacturing, and business development.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {team.map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
                    >
                      <div className="p-6">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-premium-amber to-energy-red flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <h4 className="text-xl font-bold text-center mb-2">{member.name}</h4>
                        <div className="text-premium-amber font-semibold text-center mb-3">{member.role}</div>
                        <div className="text-gray-600 text-sm space-y-2">
                          <div className="flex items-center justify-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{member.exp} Experience</span>
                          </div>
                          <div className="text-center">{member.expertise}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-12 bg-gradient-to-r from-premium-amber/10 to-energy-red/10 rounded-3xl p-8 text-center">
                  <h4 className="text-2xl font-bold mb-4">Cumulative Experience: 78+ Years</h4>
                  <p className="text-gray-700">
                    Our leadership team brings together extensive expertise across lubricant formulation, 
                    manufacturing, quality control, and market development to drive innovation and excellence.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Our Facilities */}
            {activeTab === 'facilities' && (
              <motion.div
                key="facilities"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold mb-4">State-of-the-Art Facilities</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Equipped with modern infrastructure and advanced technology to ensure 
                    consistent quality and innovation in every product.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {facilities.map((facility, index) => (
                    <motion.div
                      key={facility.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-premium-amber to-energy-red flex items-center justify-center">
                          <Factory className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-2">{facility.name}</h4>
                          <div className="space-y-2 text-gray-600">
                            <div className="flex items-center gap-2">
                              <Truck className="w-4 h-4" />
                              <span>Capacity: {facility.capacity}</span>
                            </div>
                            {facility.equipment && (
                              <div className="flex items-center gap-2">
                                <Shield className="w-4 h-4" />
                                <span>Equipment: {facility.equipment}</span>
                              </div>
                            )}
                            {facility.location && (
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>Location: {facility.location}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-12 grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl">
                    <div className="text-3xl font-bold text-blue-600 mb-2">27+</div>
                    <div className="font-semibold">Quality Testing Machines</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
                    <div className="text-3xl font-bold text-green-600 mb-2">10K</div>
                    <div className="font-semibold">Square Feet Warehouse</div>
                  </div>
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl">
                    <div className="text-3xl font-bold text-premium-amber mb-2">ISO</div>
                    <div className="font-semibold">Certified Facilities</div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Milestones */}
            {activeTab === 'milestones' && (
              <motion.div
                key="milestones"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold mb-4">Our Journey & Future Roadmap</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    From inception to becoming a trusted name in lubricant solutions, 
                    our journey is marked by continuous growth and innovation.
                  </p>
                </div>
                
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-premium-amber to-energy-red hidden md:block"></div>
                  
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={milestone.year}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex flex-col md:flex-row items-center mb-12 ${
                        index % 2 === 0 ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="text-3xl">{milestone.icon}</div>
                            <div>
                              <div className="text-2xl font-bold text-premium-amber">{milestone.year}</div>
                              <div className="text-gray-700 font-semibold">{milestone.event}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Timeline dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-premium-amber hidden md:flex items-center justify-center">
                        <div className="w-2 h-2 bg-premium-amber rounded-full"></div>
                      </div>
                      
                      <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                        {/* Empty space for alignment */}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-premium-amber/10 to-energy-red/10 rounded-3xl p-12">
            <h3 className="text-3xl font-bold mb-6">Ready to Experience the Aadiya Difference?</h3>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Partner with us for superior lubricant solutions that enhance performance, 
              reduce maintenance costs, and extend equipment life.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-8 py-3 bg-gradient-to-r from-premium-amber to-energy-red text-white font-semibold rounded-xl hover:opacity-90 transition">
                Request Product Samples
              </button>
              <button className="px-8 py-3 bg-white text-gray-800 font-semibold rounded-xl border-2 border-gray-200 hover:border-premium-amber transition">
                Download Company Profile
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;