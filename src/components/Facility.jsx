// src/components/Facility.jsx

import { motion } from "framer-motion";
import {
  Factory,
  Package,
  ShieldCheck,
  Truck,
  CheckCircle2,
  Settings,
  Warehouse,
  Headphones,
} from "lucide-react";

const Facility = () => {
  // Shortened to 4 key features
  const facilities = [
    {
      icon: <Warehouse className="w-7 h-7" />,
      title: "Industrial Product Supply",
      desc: "Lubrication products for industrial and commercial requirements.",
    },
    {
      icon: <Settings className="w-7 h-7" />,
      title: "Application Support",
      desc: "Product recommendations based on machinery and application needs.",
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "Quality-Focused Products",
      desc: "Reliable industrial lubrication products and sourcing.",
    },
    {
      icon: <Truck className="w-7 h-7" />,
      title: "Order Coordination",
      desc: "Responsive communication and dependable support.",
    },
  ];

  // Shortened capabilities
  const capabilities = [
    "General Lubricants",
    "Metal Working Fluids",
    "Automotive Lubricants",
    "MRO Product Support",
  ];

  return (
    <section
      id="facility"
      className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-700 text-sm font-semibold mb-5">
            <Factory className="w-4 h-4" />
            OUR FACILITY & SUPPORT
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Reliable Industrial Supply
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Quality-focused product sourcing with responsive customer support
            for industrial applications.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {facilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Capability Strip (shortened) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-10 items-center bg-gray-900 rounded-3xl p-8 md:p-10 text-white"
        >
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-amber-300 text-sm font-semibold mb-5">
              <Package className="w-4 h-4" />
              OUR CAPABILITIES
            </div>

            <h3 className="text-3xl font-bold mb-4">
              Solutions for Industrial Requirements
            </h3>

            <p className="text-gray-300 leading-relaxed">
              From machinery lubrication and metal working applications to
              automotive and MRO support, our products are organized around
              real industrial requirements.
            </p>
          </div>

          {/* Right */}
          <div className="grid sm:grid-cols-2 gap-3">
            {capabilities.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/10 border border-white/10"
              >
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom (shortened to 2) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-2 gap-5"
        >
          <div className="p-6 bg-white rounded-2xl border border-gray-100 text-center">
            <Factory className="w-9 h-9 text-amber-600 mx-auto mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">Industrial Focus</h4>
            <p className="text-sm text-gray-500">
              Solutions across multiple industrial sectors.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-gray-100 text-center">
            <Headphones className="w-9 h-9 text-amber-600 mx-auto mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">Responsive Support</h4>
            <p className="text-sm text-gray-500">
              Direct communication for enquiries and quotations.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Facility;