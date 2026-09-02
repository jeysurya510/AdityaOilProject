import { motion } from 'framer-motion';
import {
  Lightbulb,
  Settings,
  ShieldCheck,
  Target,
  Layers3,
  Headphones,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

import { PRODUCT_FAMILIES } from '../data/companyInfo.js';

const innovationPoints = [
  {
    icon: Target,
    title: 'Application-Focused Solutions',
    description:
      'Products are presented around practical industrial applications so customers can identify the right lubrication solution more easily.',
  },
  {
    icon: Settings,
    title: 'Product Selection Support',
    description:
      'Support customers in selecting suitable lubricant categories, grades and applications based on their equipment requirements.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality-Focused Supply',
    description:
      'A focused product portfolio helps maintain consistency in product sourcing, handling and customer support.',
  },
  {
    icon: Layers3,
    title: 'Industry-Specific Approach',
    description:
      'Product recommendations can be organized according to industries, applications and operating requirements.',
  },
  {
    icon: Headphones,
    title: 'Direct Customer Support',
    description:
      'Customers can connect directly with the Aditya Liquidtools team for product enquiries and application-related requirements.',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Improvement',
    description:
      'We continuously improve how products, applications and customer information are presented to make selection simpler.',
  },
];

const InnovationSection = () => {
  return (
    <section
      id="innovation"
      className="relative overflow-hidden bg-slate-950 py-20 md:py-28"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold mb-5">
            <Lightbulb className="w-4 h-4" />
            Innovation & Application Support
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Smarter Lubrication
            <span className="block text-amber-400">
              Through Better Product Selection
            </span>
          </h2>

          <p className="mt-5 text-gray-400 text-base md:text-lg leading-relaxed">
            Our approach focuses on making industrial lubricant selection
            simple, application-oriented and customer-friendly — from product
            discovery to enquiry and support.
          </p>
        </motion.div>

        {/* Main feature panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 md:p-10 mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left */}
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-amber-400" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Practical Solutions for Industrial Requirements
              </h3>

              <p className="text-gray-400 leading-relaxed mb-7">
                Aditya Liquidtools focuses on connecting customers with
                suitable lubricant products for their industrial requirements.
                Our product and industry structure makes it easier to move
                from an industry requirement to an application and then to
                the relevant product.
              </p>

              <div className="space-y-4">
                {[
                  'Industry → Application → Product approach',
                  'Focused industrial lubricant portfolio',
                  'Product information and application guidance',
                  'Direct enquiry and customer support',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="grid sm:grid-cols-2 gap-4">
              {innovationPoints.slice(0, 4).map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 hover:border-amber-500/30 transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-amber-400" />
                    </div>

                    <h4 className="text-white font-semibold mb-2">
                      {item.title}
                    </h4>

                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Product family innovation approach */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Our Product Approach
            </h3>

            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Four focused product families help customers navigate the
              portfolio according to their lubrication requirements.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRODUCT_FAMILIES.map((family, index) => (
              <motion.div
                key={family.id || family.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 hover:bg-white/[0.06] hover:border-amber-500/30 transition-all"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center">
                    <Layers3 className="w-5 h-5 text-amber-400" />
                  </div>

                  <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                </div>

                <h4 className="text-white font-semibold text-lg">
                  {family.name}
                </h4>

                {family.description && (
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    {family.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Support cards */}
        <div className="grid md:grid-cols-2 gap-5">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <Settings className="w-6 h-6 text-amber-400" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-white">
                  Application Support
                </h4>
                <p className="text-gray-500 text-sm">
                  Find the right product direction
                </p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Tell us about your industry, equipment or application and our
              team can help identify the relevant product category and
              available solution.
            </p>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.06] p-6 md:p-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <Headphones className="w-6 h-6 text-amber-400" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-white">
                  Customer Support
                </h4>
                <p className="text-gray-500 text-sm">
                  Direct assistance for enquiries
                </p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed">
              For product enquiries, bulk requirements, MRO needs or
              application-related questions, customers can contact our team
              directly.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default InnovationSection;