import { motion } from 'framer-motion';
import {
  Leaf,
  Recycle,
  Droplet,
  ShieldCheck,
  PackageCheck,
  Factory,
  CheckCircle2,
} from 'lucide-react';

import { COMPANY, PRODUCT_FAMILIES } from '../data/companyInfo.js';

const SustainabilitySection = () => {
  // Shortened to 3 key areas
  const sustainabilityAreas = [
    {
      icon: Recycle,
      title: 'Responsible Packaging',
      description:
        'Responsible handling and packaging practices across product supply.',
    },
    {
      icon: Droplet,
      title: 'Efficient Product Usage',
      description:
        'Application-oriented product selection for suitable lubricant solutions.',
    },
    {
      icon: ShieldCheck,
      title: 'Quality-Focused Supply',
      description:
        'Attention to product requirements, handling and customer support.',
    },
  ];

  // Shortened to 4 commitments
  const commitments = [
    'Application-oriented product selection',
    'Responsible product handling',
    'Efficient industrial lubricant usage',
    'Customer-focused service',
  ];

  return (
    <section
      id="sustainability"
      className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 md:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-green-100/50 blur-3xl" />
        <div className="absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-emerald-100/40 blur-3xl" />
      </div>

      <div className="relative container mx-auto max-w-7xl px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
            <Leaf size={16} />
            SUSTAINABILITY
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Responsible Approach to
            <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Industrial Solutions
            </span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            {COMPANY.shortName} aims to support responsible industrial product
            usage through suitable product selection and customer-focused service.
          </p>
        </motion.div>

        {/* SUSTAINABILITY AREAS (3) */}
        <div className="grid gap-6 md:grid-cols-3">
          {sustainabilityAreas.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-green-200 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                  <Icon size={24} />
                </div>

                <h3 className="mb-3 text-lg font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* MAIN COMMITMENT BLOCK (shortened) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 overflow-hidden rounded-3xl bg-gray-900"
        >
          <div className="grid lg:grid-cols-2">
            {/* LEFT */}
            <div className="p-8 md:p-12">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green-500 text-white">
                <Leaf size={25} />
              </div>

              <h3 className="text-3xl font-bold text-white md:text-4xl">
                Our Sustainability Approach
              </h3>

              <p className="mt-5 max-w-xl leading-7 text-gray-300">
                Sustainability is approached through practical product
                selection, responsible handling and efficient application.
              </p>

              <div className="mt-8 space-y-3">
                {commitments.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-white/5 px-4 py-3"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-green-400"
                    />
                    <span className="text-sm text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="border-t border-white/10 bg-white/5 p-8 md:p-12 lg:border-l lg:border-t-0">
              <p className="text-sm font-semibold uppercase tracking-wider text-green-400">
                Product Categories
              </p>

              <h4 className="mt-3 text-2xl font-bold text-white">
                Focused Product Categories
              </h4>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Our portfolio is structured to make industrial product
                selection simpler.
              </p>

              <div className="mt-7 space-y-4">
                {(PRODUCT_FAMILIES || []).map((family, index) => (
                  <motion.div
                    key={family.id || family.name || index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition-all hover:border-green-400/40 hover:bg-white/10"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                      <Droplet size={19} />
                    </div>

                    <span className="font-semibold text-white">
                      {family.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* RESPONSIBLE SUPPLY STRIP (2 cards) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 grid gap-4 md:grid-cols-2"
        >
          <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
              <PackageCheck size={22} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Responsible Supply</h4>
              <p className="mt-1 text-sm text-gray-500">
                Focused on customer requirements
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
              <Factory size={22} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Industrial Solutions</h4>
              <p className="mt-1 text-sm text-gray-500">
                Supporting diverse applications
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SustainabilitySection;