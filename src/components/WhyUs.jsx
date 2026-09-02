// src/components/WhyUs.jsx

import React from 'react';
import { motion } from 'framer-motion';

import {
  ShieldCheck,
  Headphones,
  Settings,
  PackageCheck,
  Factory,
  Layers3,
  MessageCircle,
  Phone,
  ArrowRight,
  CheckCircle2,
  Droplets,
  Target,
  Truck,
} from 'lucide-react';

import {
  COMPANY,
  PRODUCT_FAMILIES,
} from '../data/companyInfo';


// ============================================================
// WHY CHOOSE US
// ============================================================

const WhyUs = () => {

  // ----------------------------------------------------------
  // Why Choose Us Features
  // ----------------------------------------------------------

  const features = [
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: 'Quality-Focused Products',
      description:
        'We focus on reliable lubrication products selected for industrial and commercial applications.',
    },

    {
      icon: <Settings className="w-7 h-7" />,
      title: 'Application-Oriented',
      description:
        'Products are organized around equipment, applications and industry requirements for easier selection.',
    },

    {
      icon: <PackageCheck className="w-7 h-7" />,
      title: 'Focused Product Portfolio',
      description:
        'Our portfolio covers industrial lubricants, metal working fluids, specialty lubricants and specialty oils.',
    },

    {
      icon: <Headphones className="w-7 h-7" />,
      title: 'Direct Customer Support',
      description:
        'Our team is available for product enquiries, application discussions, quotations and support.',
    },

    {
      icon: <Truck className="w-7 h-7" />,
      title: 'Supply Support',
      description:
        'We work to support customer requirements with dependable communication and order coordination.',
    },

    {
      icon: <Target className="w-7 h-7" />,
      title: 'Customer-Focused Approach',
      description:
        'We aim to build long-term relationships through responsive service and practical product support.',
    },
  ];


  // ----------------------------------------------------------
  // Product Family Data
  // ----------------------------------------------------------

  const families = PRODUCT_FAMILIES || [
    {
      id: 'industrial-lubricants',
      name: 'Industrial Lubricants',
      description:
        'Lubricants for industrial machinery and equipment.',
    },
    {
      id: 'metal-working-fluids',
      name: 'Metal Working Fluids',
      description:
        'Fluids for metal removal, forming, protection and treatment.',
    },
    {
      id: 'specialty-lubricants',
      name: 'Specialty Lubricants',
      description:
        'Specialized lubrication solutions for selected applications.',
    },
    {
      id: 'specialty-oils',
      name: 'Specialty Oils',
      description:
        'Specialty oils for electrical and industrial applications.',
    },
  ];


  // ----------------------------------------------------------
  // Contact helpers
  // ----------------------------------------------------------

  const phoneNumber = String(
    COMPANY.phone || COMPANY.contact?.phone || ''
  ).replace(/\s+/g, '');


  const whatsappLink =
    COMPANY.social?.whatsapp ||
    `https://wa.me/${phoneNumber.replace(/\D/g, '')}`;


  const scrollToContact = () => {
    const section = document.getElementById('contact');

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };


  const scrollToProducts = () => {
    const section = document.getElementById('products');

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };


  return (
    <section
      id="whyus"
      className="relative py-20 md:py-28 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
    >

      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-amber-100/40 blur-3xl" />

        <div className="absolute bottom-0 -left-32 w-96 h-96 rounded-full bg-orange-100/30 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #111 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

      </div>


      <div className="container mx-auto px-4 relative z-10">

        {/* ====================================================
            HEADER
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
          transition={{
            duration: 0.5,
          }}
          className="text-center max-w-3xl mx-auto mb-14"
        >

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-700 text-sm font-semibold mb-5">

            <ShieldCheck className="w-4 h-4" />

            WHY CHOOSE US

          </div>


          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">

            Why Choose{' '}

            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              {COMPANY.shortName}
            </span>

            ?

          </h2>


          <p className="text-lg text-gray-600 leading-relaxed">
            We combine a focused product portfolio with
            application-oriented support to make industrial
            lubrication selection simpler and more reliable.
          </p>

        </motion.div>


        {/* ====================================================
            FEATURE GRID
        ==================================================== */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((feature, index) => (

            <motion.div
              key={feature.title}
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
              transition={{
                duration: 0.4,
                delay: index * 0.07,
              }}
              whileHover={{
                y: -7,
              }}
              className="group bg-white rounded-2xl border border-gray-100 p-7 shadow-sm hover:shadow-xl transition-all duration-300"
            >

              {/* Icon */}

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 text-amber-600 flex items-center justify-center mb-6 group-hover:from-amber-500 group-hover:to-orange-600 group-hover:text-white transition-all duration-300">

                {feature.icon}

              </div>


              {/* Title */}

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition">

                {feature.title}

              </h3>


              {/* Description */}

              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>


              {/* Bottom line */}

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-amber-600">

                <span>
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="h-px flex-1 bg-gray-100 group-hover:bg-amber-200 transition" />

              </div>

            </motion.div>

          ))}

        </div>


        {/* ====================================================
            PRODUCT FAMILIES
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
          className="mt-20"
        >

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left */}

            <div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold mb-5">

                <Layers3 className="w-4 h-4" />

                OUR PRODUCT APPROACH

              </div>


              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">

                A Focused Range for
                <span className="block text-amber-600">
                  Industrial Requirements
                </span>

              </h3>


              <p className="text-gray-600 leading-relaxed mb-7">
                Our product structure makes it easier to navigate
                from broad product families to specific products
                and applications.
              </p>


              <div className="space-y-4">

                {[
                  'Industrial machinery lubrication',
                  'Metal working applications',
                  'Specialized lubrication requirements',
                  'Specialty oil applications',
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />

                    <span className="text-gray-700">
                      {item}
                    </span>

                  </div>

                ))}

              </div>


              <button
                onClick={scrollToProducts}
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition"
              >

                Explore Product Range

                <ArrowRight className="w-4 h-4" />

              </button>

            </div>


            {/* Right */}

            <div className="grid sm:grid-cols-2 gap-4">

              {families.map((family, index) => (

                <motion.div
                  key={family.id}
                  whileHover={{
                    scale: 1.02,
                  }}
                  className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition"
                >

                  <div className="flex items-center justify-between mb-5">

                    <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">

                      {index === 0 && (
                        <Factory className="w-5 h-5" />
                      )}

                      {index === 1 && (
                        <Settings className="w-5 h-5" />
                      )}

                      {index === 2 && (
                        <Droplets className="w-5 h-5" />
                      )}

                      {index === 3 && (
                        <Layers3 className="w-5 h-5" />
                      )}

                    </div>


                    <span className="text-xs font-bold text-gray-300">
                      0{index + 1}
                    </span>

                  </div>


                  <h4 className="font-bold text-gray-900 mb-2">
                    {family.name}
                  </h4>


                  <p className="text-sm text-gray-500 leading-relaxed">
                    {family.description}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </motion.div>


        {/* ====================================================
            SERVICE STRIP
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
          className="mt-20"
        >

          <div className="rounded-3xl bg-gray-900 p-7 md:p-10">

            <div className="grid md:grid-cols-3 gap-8">

              {/* Item 1 */}

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center flex-shrink-0">

                  <PackageCheck className="w-6 h-6" />

                </div>


                <div>

                  <h4 className="font-bold text-white mb-1">
                    Product Enquiries
                  </h4>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    Get information about products, grades and applications.
                  </p>

                </div>

              </div>


              {/* Item 2 */}

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center flex-shrink-0">

                  <Settings className="w-6 h-6" />

                </div>


                <div>

                  <h4 className="font-bold text-white mb-1">
                    Application Support
                  </h4>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    Discuss your equipment and lubrication requirements with our team.
                  </p>

                </div>

              </div>


              {/* Item 3 */}

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center flex-shrink-0">

                  <Headphones className="w-6 h-6" />

                </div>


                <div>

                  <h4 className="font-bold text-white mb-1">
                    Customer Support
                  </h4>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    Reach us directly for quotations and order-related support.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </motion.div>


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
          className="mt-16 text-center"
        >

          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Need Help Choosing the Right Product?
          </h3>


          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Share your application or equipment requirement
            with our team and we can help you with your product enquiry.
          </p>


          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href={`tel:${phoneNumber}`}
              className="px-7 py-3.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-amber-500/20 transition flex items-center justify-center gap-2"
            >

              <Phone className="w-5 h-5" />

              Call Us

            </a>


            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition flex items-center justify-center gap-2"
            >

              <MessageCircle className="w-5 h-5" />

              WhatsApp Enquiry

            </a>


            <button
              onClick={scrollToContact}
              className="px-7 py-3.5 bg-white text-gray-800 rounded-xl font-bold border-2 border-gray-200 hover:border-amber-500 transition flex items-center justify-center gap-2"
            >

              Contact Team

              <ArrowRight className="w-5 h-5" />

            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
};


export default WhyUs;