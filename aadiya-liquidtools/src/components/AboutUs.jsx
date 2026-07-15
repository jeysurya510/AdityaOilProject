import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building, Target, TrendingUp, Users, Shield, 
  Award, Globe, Clock, MapPin, FileText,
  ChevronRight, CheckCircle, Star, Truck, Factory,
  Mail, Phone, Calendar, Sparkles, Zap,
  Package, Droplets, Thermometer, Gauge
} from 'lucide-react';
import { COMPANY } from '../data/companyInfo';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Using COMPANY data from companyInfo.js
  const companyInfo = {
    name: COMPANY.name,
    shortName: COMPANY.shortName,
    cin: COMPANY.cin,
    status: COMPANY.status,
    type: COMPANY.entityType,
    incorporationDate: COMPANY.incorporationDate,
    age: COMPANY.companyAge,
    roc: COMPANY.roc,
    authorizedCapital: COMPANY.authorizedCapital,
    paidUpCapital: COMPANY.paidUpCapital,
    address: COMPANY.contact.registeredAddress,
    email: COMPANY.contact.email,
    phone: COMPANY.contact.phone
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
    { year: "2025", event: "Company Incorporation & Launch", icon: "🚀", description: `${COMPANY.shortName} officially registered as ${COMPANY.entityType}` },
    { year: "2025", event: "ISO 9001:2015 Certification", icon: "🏆", description: "Achieved international quality certification" },
    { year: "2025 Q4", event: "Product Portfolio Expansion", icon: "📈", description: "Launched 50+ lubricant variants" },
    { year: "2026", event: "Pan-India Distribution Network", icon: "🚚", description: "Established supply chain across 500+ cities" },
    { year: "2026", event: "Export Market Entry", icon: "🌍", description: "Started international exports" },
    { year: "2027", event: "Advanced R&D Center", icon: "🔬", description: "Opened state-of-the-art research facility" }
  ];

  const team = [
    { name: "Rahul Sharma", role: "Managing Director", exp: "25+ years", expertise: "Lubricant Technology", icon: "👨‍💼" },
    { name: "Priya Patel", role: "Technical Director", exp: "20+ years", expertise: "R&D & Formulation", icon: "👩‍🔬" },
    { name: "Arjun Mehta", role: "Operations Head", exp: "15+ years", expertise: "Manufacturing & QC", icon: "👨‍🏭" },
    { name: "Sanjay Kumar", role: "Sales Director", exp: "18+ years", expertise: "Market Development", icon: "👨‍💼" }
  ];

  const facilities = [
    { name: "Modern Blending Plant", capacity: "50,000 L/month", location: "Chennai", icon: <Factory className="w-6 h-6" /> },
    { name: "Quality Control Lab", equipment: "27+ Testing Machines", certification: "ISO Certified", icon: <Thermometer className="w-6 h-6" /> },
    { name: "R&D Center", focus: "New Formulations", patents: "5+ in Progress", icon: <Zap className="w-6 h-6" /> },
    { name: "Warehouse Facility", area: "10,000 sq.ft.", capacity: "1,000+ SKUs", icon: <Package className="w-6 h-6" /> }
  ];

  const tabs = [
    { id: 'overview', label: 'Company Overview', icon: <Building className="w-4 h-4" /> },
    { id: 'mission', label: 'Mission & Vision', icon: <Target className="w-4 h-4" /> },
    { id: 'team', label: 'Leadership Team', icon: <Users className="w-4 h-4" /> },
    { id: 'facilities', label: 'Our Facilities', icon: <Factory className="w-4 h-4" /> },
    { id: 'milestones', label: 'Milestones', icon: <TrendingUp className="w-4 h-4" /> }
  ];

  const stats = [
    { label: "Product Range", value: "50+", description: "Lubricant Variants", color: "from-blue-500 to-cyan-400" },
    { label: "Cities Covered", value: "500+", description: "Across India", color: "from-green-500 to-emerald-400" },
    { label: "Quality Checks", value: "27+", description: "Parameters Tested", color: "from-amber-500 to-orange-400" },
    { label: "Certifications", value: "4+", description: "International Standards", color: "from-purple-500 to-pink-400" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
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
              ABOUT {COMPANY.shortName}
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Pioneering Excellence in <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Lubricant Solutions</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto"
          >
            {COMPANY.tagline} - Combining cutting-edge technology with decades of industry 
            expertise to deliver superior lubricant solutions.
          </motion.p>
        </div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all"
            >
              <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="font-bold text-gray-900 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 rounded-xl font-medium flex items-center gap-2 transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/20'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md border border-gray-200'
              }`}
            >
              {tab.icon}
              {tab.label}
            </motion.button>
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
                  <h3 className="text-3xl font-bold mb-6 text-gray-900">Company Profile</h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Incorporated on {companyInfo.incorporationDate}, {COMPANY.shortName} 
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
                    <div className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition">
                      <div className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                        {companyInfo.authorizedCapital}
                      </div>
                      <div className="text-gray-600 text-sm">Authorized Capital</div>
                    </div>
                    <div className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition">
                      <div className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                        {companyInfo.paidUpCapital}
                      </div>
                      <div className="text-gray-600 text-sm">Paid Up Capital</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
                  <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Building className="w-6 h-6 text-amber-400" />
                    Corporate Information
                  </h4>
                  
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold">CIN</div>
                        <div className="text-gray-300 text-sm">{companyInfo.cin}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-amber-400" />
                      <div>
                        <div className="font-semibold">Status</div>
                        <div className="text-green-400 font-medium">{companyInfo.status}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-amber-400" />
                      <div>
                        <div className="font-semibold">Incorporation Date</div>
                        <div className="text-gray-300">{companyInfo.incorporationDate}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-amber-400" />
                      <div>
                        <div className="font-semibold">Registered Office</div>
                        <div className="text-gray-300 text-sm">{companyInfo.address}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-amber-400" />
                      <div>
                        <div className="font-semibold">ROC</div>
                        <div className="text-gray-300">{companyInfo.roc}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/10">
                    <h5 className="font-bold mb-4 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Contact Information
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <a href={`tel:${companyInfo.phone}`} className="hover:text-amber-300 transition">
                          {companyInfo.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <a href={`mailto:${companyInfo.email}`} className="hover:text-amber-300 transition">
                          {companyInfo.email}
                        </a>
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
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-100">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-6 shadow-lg">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
                    <p className="text-gray-700 leading-relaxed">{missionVision.mission}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-100">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-6 shadow-lg">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
                    <p className="text-gray-700 leading-relaxed">{missionVision.vision}</p>
                  </div>
                </div>

                {/* Core Values */}
                <div>
                  <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">Our Core Values</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {missionVision.values.map((value, index) => (
                      <motion.div
                        key={value}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 flex items-center justify-center">
                            <CheckCircle className="w-6 h-6 text-amber-500" />
                          </div>
                          <div className="font-bold text-gray-900 text-lg">{value}</div>
                        </div>
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
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">Leadership Team</h3>
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
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all group"
                    >
                      <div className="p-6">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto group-hover:scale-110 transition-transform">
                          {member.icon}
                        </div>
                        <h4 className="text-xl font-bold text-center mb-2 text-gray-900">{member.name}</h4>
                        <div className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent font-semibold text-center mb-3">
                          {member.role}
                        </div>
                        <div className="text-gray-600 space-y-2 text-sm">
                          <div className="flex items-center justify-center gap-2">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span>{member.exp} Experience</span>
                          </div>
                          <div className="text-center font-medium">{member.expertise}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="mt-12 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-3xl p-8 text-center border border-amber-200/50"
                >
                  <h4 className="text-2xl font-bold mb-4 text-gray-900">Cumulative Experience: 78+ Years</h4>
                  <p className="text-gray-700 max-w-3xl mx-auto">
                    Our leadership team brings together extensive expertise across lubricant formulation, 
                    manufacturing, quality control, and market development to drive innovation and excellence.
                  </p>
                </motion.div>
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
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">State-of-the-Art Facilities</h3>
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
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                    >
                      <div className="flex items-start gap-5">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                          <div className="text-white">
                            {facility.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-3 text-gray-900">{facility.name}</h4>
                          <div className="space-y-2 text-gray-600">
                            <div className="flex items-center gap-2">
                              <Truck className="w-4 h-4 text-gray-400" />
                              <span>Capacity: {facility.capacity}</span>
                            </div>
                            {facility.equipment && (
                              <div className="flex items-center gap-2">
                                <Gauge className="w-4 h-4 text-gray-400" />
                                <span>{facility.equipment}</span>
                              </div>
                            )}
                            {facility.location && (
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-gray-400" />
                                <span>Location: {facility.location}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="mt-12 grid md:grid-cols-4 gap-6"
                >
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
                    <div className="text-3xl font-bold text-blue-600 mb-2">27+</div>
                    <div className="font-semibold text-gray-900">Quality Testing Machines</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
                    <div className="text-3xl font-bold text-green-600 mb-2">10K</div>
                    <div className="font-semibold text-gray-900">Square Feet Warehouse</div>
                  </div>
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-2xl border border-amber-200">
                    <div className="text-3xl font-bold text-amber-600 mb-2">ISO</div>
                    <div className="font-semibold text-gray-900">Certified Facilities</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200">
                    <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                    <div className="font-semibold text-gray-900">Product Variants</div>
                  </div>
                </motion.div>
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
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">Our Journey & Future Roadmap</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    From inception to becoming a trusted name in lubricant solutions, 
                    our journey is marked by continuous growth and innovation.
                  </p>
                </div>
                
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-500 to-orange-600 hidden md:block"></div>
                  
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={milestone.year}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className={`flex flex-col md:flex-row items-center mb-12 ${
                        index % 2 === 0 ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="text-4xl">{milestone.icon}</div>
                            <div>
                              <div className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                                {milestone.year}
                              </div>
                              <div className="text-gray-900 font-semibold text-lg">{milestone.event}</div>
                              <div className="text-gray-600 text-sm mt-1">{milestone.description}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Timeline dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white rounded-full border-4 border-amber-500 hidden md:flex items-center justify-center shadow-lg">
                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
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
          <div className="bg-gradient-to-r from-amber-500/10 to-orange-600/10 rounded-3xl p-12 border border-amber-200/50">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">Ready to Experience the {COMPANY.shortName} Difference?</h3>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Partner with us for superior lubricant solutions that enhance performance, 
              reduce maintenance costs, and extend equipment life.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href={COMPANY.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-amber-500/30 transition"
              >
                Request Product Samples
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-gray-800 font-bold rounded-xl border-2 border-gray-300 hover:border-amber-500 hover:shadow-lg transition"
              >
                Download Company Profile
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;