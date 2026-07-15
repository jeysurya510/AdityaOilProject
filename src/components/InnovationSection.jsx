// NEW FILE: src/components/InnovationSection.jsx
import { motion } from 'framer-motion';
import { Cpu, Database, BarChart, Truck, Shield, Zap, Settings, Globe } from 'lucide-react';
import { COMPANY } from '../data/companyInfo';

const InnovationSection = () => {
  const innovationData = {
    title: 'Tech-Driven Processes & Smart Operations',
    description: 'Leveraging IoT, real-time data, and predictive analytics to enhance operational efficiency, product quality, and customer service across our supply chain.',
    pillars: [
      { icon: <Cpu className="w-8 h-8" />, title: 'IoT & Edge Computing', desc: 'Real-time monitoring and data collection across operations' },
      { icon: <Database className="w-8 h-8" />, title: 'Real-time Data Analytics', desc: 'Instant insights for better decision making' },
      { icon: <BarChart className="w-8 h-8" />, title: 'Predictive Quality Control', desc: 'Anticipating and preventing quality issues' },
      { icon: <Truck className="w-8 h-8" />, title: 'Smart Supply Chain', desc: 'Efficient logistics and inventory management' },
    ],
    stats: [
      { value: '100%', label: 'Quality Checked Products' },
      { value: '24/7', label: 'Real-time Monitoring' },
      { value: '50+', label: 'Quality Parameters' },
      { value: '500+', label: 'Cities Connected' },
    ]
  };

  return (
    <section id="innovation" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full mb-4">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">INNOVATION & TECHNOLOGY</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Building a Resilient Future With <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Tech-Driven Processes</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {innovationData.description}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {innovationData.stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {innovationData.pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg">
                <div className="text-white">
                  {pillar.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
              <p className="text-gray-600">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Digital Transformation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Digital Transformation</h3>
              <p className="text-gray-300 mb-6">
                Our digital transformation spans procurement, health and safety, supply chain, 
                workforce empowerment, cybersecurity, and lean manufacturing, positioning us 
                for sustainable growth and excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-white/10 rounded-full flex items-center gap-2">
                  <Shield className="w-4 h-4 text-amber-400" />
                  <span className="text-sm">Cybersecurity</span>
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full flex items-center gap-2">
                  <Settings className="w-4 h-4 text-amber-400" />
                  <span className="text-sm">Lean Manufacturing</span>
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full flex items-center gap-2">
                  <Globe className="w-4 h-4 text-amber-400" />
                  <span className="text-sm">Supply Chain</span>
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-amber-400">IoT</div>
                <div className="text-sm text-gray-300">Edge Computing</div>
              </div>
              <div className="bg-white/10 p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-amber-400">AI</div>
                <div className="text-sm text-gray-300">Predictive Analytics</div>
              </div>
              <div className="bg-white/10 p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-amber-400">RPA</div>
                <div className="text-sm text-gray-300">Process Automation</div>
              </div>
              <div className="bg-white/10 p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-amber-400">Cloud</div>
                <div className="text-sm text-gray-300">Real-time Data</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InnovationSection;