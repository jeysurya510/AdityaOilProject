// src/components/AboutUs.jsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
  Building2,
  Target,
  Eye,
  ShieldCheck,
  CheckCircle2,
  Factory,
  MapPin,
  Phone,
  Mail,
  Clock,
  FileText,
  ChevronRight,
  MessageCircle,
  Package,
  Settings,
  Droplets,
  Layers3,
} from 'lucide-react';

import { COMPANY, PRODUCT_FAMILIES } from '../data/companyInfo';


// ============================================================
// ABOUT US
// ============================================================

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('overview');


  // ----------------------------------------------------------
  // Tabs
  // ----------------------------------------------------------

  const tabs = [
    {
      id: 'overview',
      label: 'Company Overview',
      icon: <Building2 className="w-4 h-4" />,
    },

    {
      id: 'mission',
      label: 'Mission & Vision',
      icon: <Target className="w-4 h-4" />,
    },

    {
      id: 'solutions',
      label: 'Our Solutions',
      icon: <Layers3 className="w-4 h-4" />,
    },

    {
      id: 'details',
      label: 'Company Details',
      icon: <FileText className="w-4 h-4" />,
    },
  ];


  // ----------------------------------------------------------
  // Values
  // ----------------------------------------------------------

  const values = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Quality Focus',
      description:
        'We focus on supplying reliable lubrication products suited to industrial requirements.',
    },

    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: 'Customer Focus',
      description:
        'We aim to understand customer requirements and provide suitable product support.',
    },

    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Application Driven',
      description:
        'Our product approach is built around equipment, application and industry requirements.',
    },

    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Responsive Support',
      description:
        'We provide direct communication for product enquiries, quotations and support.',
    },
  ];


  // ----------------------------------------------------------
  // Product Families
  // ----------------------------------------------------------

  const productFamilies = PRODUCT_FAMILIES || [
    {
      id: 'industrial-lubricants',
      name: 'Industrial Lubricants',
      description:
        'Lubrication solutions for industrial machinery and equipment.',
    },

    {
      id: 'metal-working-fluids',
      name: 'Metal Working Fluids',
      description:
        'Solutions for metal working and manufacturing applications.',
    },

    {
      id: 'specialty-lubricants',
      name: 'Specialty Lubricants',
      description:
        'Specialized lubrication products for selected applications.',
    },

    {
      id: 'specialty-oils',
      name: 'Specialty Oils',
      description:
        'Specialty oils for electrical and selected industrial applications.',
    },
  ];


  // ----------------------------------------------------------
  // Mission / Vision
  // ----------------------------------------------------------

  const mission =
    'To supply quality-focused lubrication solutions with reliable service, responsive customer support and application-oriented product selection for industrial and commercial requirements.';

  const vision =
    'To build a trusted industrial lubrication business known for dependable products, professional service and long-term customer relationships.';


  // ----------------------------------------------------------
  // Scroll helper
  // ----------------------------------------------------------

  const scrollToContact = () => {
    const element = document.getElementById('contact');

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };


  const scrollToProducts = () => {
    const element = document.getElementById('products');

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };


  // ----------------------------------------------------------
  // Render Tab Content
  // ----------------------------------------------------------

  const renderContent = () => {
    return (
      <AnimatePresence mode="wait">

        {/* ====================================================
            OVERVIEW
        ==================================================== */}

        {activeTab === 'overview' && (
          <motion.div
            key="overview"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.35,
            }}
          >

            <div className="grid lg:grid-cols-2 gap-10 items-center">

              {/* Left */}

              <div>

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-full font-semibold text-sm mb-5">

                  <Building2 className="w-4 h-4" />

                  About {COMPANY.shortName}

                </div>


                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">

                  Reliable Lubrication
                  <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                    Solutions for Industry
                  </span>

                </h3>


                <p className="text-gray-600 text-lg leading-relaxed mb-5">
                  {COMPANY.description}
                </p>


                <p className="text-gray-600 leading-relaxed mb-7">
                  {COMPANY.shortName} focuses on industrial lubrication
                  products and application-oriented solutions across
                  multiple industrial sectors.
                </p>


                {/* Highlights */}

                <div className="grid sm:grid-cols-2 gap-4">

                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">

                    <div className="flex items-center gap-3">

                      <div className="p-3 rounded-lg bg-amber-100">
                        <Factory className="w-5 h-5 text-amber-600" />
                      </div>

                      <div>
                        <p className="font-bold text-gray-900">
                          Industrial Focus
                        </p>

                        <p className="text-sm text-gray-500">
                          Lubrication solutions
                        </p>
                      </div>

                    </div>

                  </div>


                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">

                    <div className="flex items-center gap-3">

                      <div className="p-3 rounded-lg bg-blue-100">
                        <Package className="w-5 h-5 text-blue-600" />
                      </div>

                      <div>
                        <p className="font-bold text-gray-900">
                          Product Range
                        </p>

                        <p className="text-sm text-gray-500">
                          4 major families
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

              </div>


              {/* Right */}

              <div className="relative">

                <div className="absolute -inset-5 bg-gradient-to-r from-amber-100 to-orange-100 rounded-3xl blur-2xl opacity-60" />

                <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-10 text-white shadow-2xl">

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center mb-7">

                    <Droplets className="w-8 h-8 text-white" />

                  </div>


                  <h4 className="text-2xl font-bold mb-4">
                    {COMPANY.tagline}
                  </h4>


                  <p className="text-gray-300 leading-relaxed mb-7">
                    We support industrial and commercial requirements
                    with a focused range of lubrication products and
                    responsive customer service.
                  </p>


                  <div className="space-y-4">

                    <div className="flex items-center gap-3">

                      <CheckCircle2 className="w-5 h-5 text-amber-400" />

                      <span className="text-gray-200">
                        Industrial lubrication products
                      </span>

                    </div>


                    <div className="flex items-center gap-3">

                      <CheckCircle2 className="w-5 h-5 text-amber-400" />

                      <span className="text-gray-200">
                        Application-focused solutions
                      </span>

                    </div>


                    <div className="flex items-center gap-3">

                      <CheckCircle2 className="w-5 h-5 text-amber-400" />

                      <span className="text-gray-200">
                        Direct enquiry and support
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>
        )}


        {/* ====================================================
            MISSION & VISION
        ==================================================== */}

        {activeTab === 'mission' && (
          <motion.div
            key="mission"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.35,
            }}
          >

            <div className="grid md:grid-cols-2 gap-7 mb-10">

              {/* Mission */}

              <div className="p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-100">

                <div className="w-14 h-14 rounded-xl bg-amber-500 flex items-center justify-center mb-5">

                  <Target className="w-7 h-7 text-white" />

                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {mission}
                </p>

              </div>


              {/* Vision */}

              <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">

                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mb-5">

                  <Eye className="w-7 h-7 text-white" />

                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {vision}
                </p>

              </div>

            </div>


            {/* Values */}

            <div>

              <h3 className="text-2xl font-bold text-gray-900 text-center mb-7">
                What We Stand For
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition"
                  >

                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                      {value.icon}
                    </div>

                    <h4 className="font-bold text-gray-900 mb-2">
                      {value.title}
                    </h4>

                    <p className="text-gray-500 text-sm leading-relaxed">
                      {value.description}
                    </p>

                  </motion.div>
                ))}

              </div>

            </div>

          </motion.div>
        )}


        {/* ====================================================
            SOLUTIONS
        ==================================================== */}

        {activeTab === 'solutions' && (
          <motion.div
            key="solutions"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.35,
            }}
          >

            <div className="text-center max-w-3xl mx-auto mb-10">

              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Product Solutions
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Our product portfolio is organized into focused
                product families to make it easier to identify
                suitable lubrication solutions.
              </p>

            </div>


            <div className="grid md:grid-cols-2 gap-6">

              {productFamilies.map((family, index) => (

                <motion.div
                  key={family.id}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group p-7 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all"
                >

                  <div className="flex items-start gap-5">

                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0">

                      {index === 0 && (
                        <Factory className="w-7 h-7 text-white" />
                      )}

                      {index === 1 && (
                        <Settings className="w-7 h-7 text-white" />
                      )}

                      {index === 2 && (
                        <WrenchIcon />
                      )}

                      {index === 3 && (
                        <Droplets className="w-7 h-7 text-white" />
                      )}

                    </div>


                    <div className="flex-1">

                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition">
                        {family.name}
                      </h4>

                      <p className="text-gray-500 leading-relaxed">
                        {family.description}
                      </p>

                    </div>

                  </div>


                  <div className="mt-5 pt-5 border-t border-gray-100">

                    <button
                      onClick={scrollToProducts}
                      className="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm hover:text-orange-600 transition"
                    >
                      Explore Products

                      <ChevronRight className="w-4 h-4" />

                    </button>

                  </div>

                </motion.div>

              ))}

            </div>

          </motion.div>
        )}


        {/* ====================================================
            COMPANY DETAILS
        ==================================================== */}

        {activeTab === 'details' && (
          <motion.div
            key="details"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.35,
            }}
          >

            <div className="grid lg:grid-cols-2 gap-8">

              {/* Legal Details */}

              <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100">

                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">

                  <FileText className="w-6 h-6 text-amber-600" />

                  Company Information

                </h3>


                <div className="space-y-4">

                  <DetailRow
                    label="Company Name"
                    value={COMPANY.name}
                  />

                  <DetailRow
                    label="Entity Type"
                    value={COMPANY.entityType}
                  />

                  <DetailRow
                    label="Year Established"
                    value={COMPANY.founded}
                  />

                  <DetailRow
                    label="CIN"
                    value={COMPANY.cin}
                  />

                  <DetailRow
                    label="GST"
                    value={COMPANY.gst}
                  />

                  <DetailRow
                    label="PAN"
                    value={COMPANY.pan}
                  />

                  <DetailRow
                    label="ROC"
                    value={COMPANY.roc}
                  />

                  <DetailRow
                    label="Status"
                    value={COMPANY.status}
                  />

                </div>

              </div>


              {/* Contact Details */}

              <div className="bg-gray-900 rounded-2xl p-7 text-white">

                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">

                  <MapPin className="w-6 h-6 text-amber-400" />

                  Contact Information

                </h3>


                <div className="space-y-6">

                  {/* Address */}

                  <div className="flex items-start gap-4">

                    <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />

                    <div>

                      <p className="font-semibold mb-1">
                        Registered Office
                      </p>

                      <p className="text-gray-400 text-sm leading-relaxed">
                        {COMPANY.registeredAddress}
                      </p>

                    </div>

                  </div>


                  {/* Phone */}

                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="flex items-center gap-4 group"
                  >

                    <Phone className="w-5 h-5 text-amber-400" />

                    <div>

                      <p className="font-semibold group-hover:text-amber-400 transition">
                        {COMPANY.phone}
                      </p>

                      <p className="text-gray-500 text-sm">
                        Sales & Support
                      </p>

                    </div>

                  </a>


                  {/* Sales */}

                  <a
                    href={`mailto:${COMPANY.salesEmail}`}
                    className="flex items-start gap-4 group"
                  >

                    <Mail className="w-5 h-5 text-amber-400 mt-1" />

                    <div>

                      <p className="font-semibold break-all group-hover:text-amber-400 transition">
                        {COMPANY.salesEmail}
                      </p>

                      <p className="text-gray-500 text-sm">
                        Sales Enquiries
                      </p>

                    </div>

                  </a>


                  {/* Support */}

                  <a
                    href={`mailto:${COMPANY.supportEmail}`}
                    className="flex items-start gap-4 group"
                  >

                    <Mail className="w-5 h-5 text-amber-400 mt-1" />

                    <div>

                      <p className="font-semibold break-all group-hover:text-amber-400 transition">
                        {COMPANY.supportEmail}
                      </p>

                      <p className="text-gray-500 text-sm">
                        Customer Support
                      </p>

                    </div>

                  </a>


                  {/* Working Hours */}

                  <div className="flex items-start gap-4">

                    <Clock className="w-5 h-5 text-amber-400 mt-1" />

                    <div>

                      <p className="font-semibold">
                        Mon - Fri: {COMPANY.hours.weekdays}
                      </p>

                      <p className="font-semibold">
                        Saturday: {COMPANY.hours.saturday}
                      </p>

                      <p className="text-gray-500 text-sm">
                        Sunday: {COMPANY.hours.sunday}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>
        )}

      </AnimatePresence>
    );
  };


  return (
    <section
      id="about"
      className="relative py-20 md:py-28 bg-white overflow-hidden"
    >

      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl" />

        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />

      </div>


      <div className="container mx-auto px-4 relative z-10">

        {/* ====================================================
            SECTION HEADER
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="text-center max-w-3xl mx-auto mb-12"
        >

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-full font-semibold text-sm mb-5">

            <Building2 className="w-4 h-4" />

            WHO WE ARE

          </div>


          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">

            About{' '}

            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              {COMPANY.shortName}
            </span>

          </h2>


          <p className="text-lg text-gray-600 leading-relaxed">
            A focused industrial lubrication partner providing
            product solutions and responsive support for diverse
            industrial requirements.
          </p>

        </motion.div>


        {/* ====================================================
            TABS
        ==================================================== */}

        <div className="flex flex-wrap justify-center gap-2 mb-10">

          {tabs.map((tab) => (

            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2
                px-5 py-3
                rounded-xl
                font-semibold
                text-sm
                transition-all
                ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }
              `}
            >

              {tab.icon}

              {tab.label}

            </button>

          ))}

        </div>


        {/* ====================================================
            TAB CONTENT
        ==================================================== */}

        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-6 md:p-10">

          {renderContent()}

        </div>


        {/* ====================================================
            CTA
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mt-14"
        >

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8 md:p-12">

            <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

              <div>

                <p className="text-amber-400 font-semibold text-sm mb-2">
                  LET'S WORK TOGETHER
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Looking for the right lubrication solution?
                </h3>

                <p className="text-gray-400 max-w-2xl">
                  Contact our team for product enquiries,
                  application requirements and quotations.
                </p>

              </div>


              <div className="flex flex-col sm:flex-row gap-3">

                <motion.button
                  whileHover={{
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={scrollToProducts}
                  className="px-6 py-3 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition flex items-center justify-center gap-2"
                >

                  View Products

                  <ChevronRight className="w-4 h-4" />

                </motion.button>


                <motion.button
                  whileHover={{
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={scrollToContact}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-amber-500/20 transition flex items-center justify-center gap-2"
                >

                  <MessageCircle className="w-4 h-4" />

                  Contact Us

                </motion.button>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};


// ============================================================
// DETAIL ROW
// ============================================================

const DetailRow = ({ label, value }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 pb-3 border-b border-gray-200 last:border-0">

      <span className="text-sm text-gray-500 sm:w-36 flex-shrink-0">
        {label}
      </span>

      <span className="font-semibold text-gray-900 break-words">
        {value}
      </span>

    </div>
  );
};


// ============================================================
// SIMPLE WRENCH ICON
// ============================================================

const WrenchIcon = () => {
  return (
    <Settings className="w-7 h-7 text-white" />
  );
};


export default AboutUs;