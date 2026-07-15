// NEW FILE: src/components/SustainabilitySection.jsx
import { motion } from 'framer-motion';
import { Leaf, Recycle, TreePine, Droplet, Wind, Sun, Heart, Shield } from 'lucide-react';

const SustainabilitySection = () => {
  const initiatives = [
    {
      icon: <Recycle className="w-8 h-8" />,
      title: 'Eco-friendly Packaging',
      description: 'Using sustainable and recyclable packaging materials to reduce environmental impact.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Energy Efficient Operations',
      description: 'Implementing energy-saving technologies and practices across all operations.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: <Droplet className="w-8 h-8" />,
      title: 'Waste Reduction Programs',
      description: 'Comprehensive waste management and reduction initiatives throughout our supply chain.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Community Engagement',
      description: 'Actively participating in community development and social welfare programs.',
      color: 'from-red-500 to-rose-500'
    },
  ];

  const goals = [
    { value: '30%', label: 'Carbon Footprint Reduction by 2030' },
    { value: '50%', label: 'Recyclable Packaging by 2026' },
    { value: '100%', label: 'Energy Efficient Facilities' },
    { value: '0', label: 'Waste to Landfill by 2027' },
  ];

  return (
    <section id="sustainability" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full mb-4">
            <Leaf className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-700">SUSTAINABILITY</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Commitment to <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Sustainability</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are committed to sustainable practices that minimize environmental impact 
            while delivering superior products to our customers.
          </p>
        </motion.div>

        {/* Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {goal.value}
              </div>
              <div className="text-gray-600 font-medium mt-2">{goal.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Initiatives */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${initiative.color} flex items-center justify-center mb-6 shadow-lg`}>
                <div className="text-white">
                  {initiative.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{initiative.title}</h3>
              <p className="text-gray-600">{initiative.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Sustainability Promise */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-gradient-to-r from-green-900 to-emerald-900 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <TreePine className="w-8 h-8 text-green-400" />
                <h3 className="text-3xl font-bold">Our Promise</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                We are dedicated to creating a greener, more sustainable future through 
                responsible business practices, environmental stewardship, and community 
                engagement. Every product we supply reflects our commitment to quality 
                and sustainability.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-white/10 rounded-full flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-sm">ISO 14001</span>
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full flex items-center gap-2">
                  <Recycle className="w-4 h-4 text-green-400" />
                  <span className="text-sm">Recyclable Packaging</span>
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full flex items-center gap-2">
                  <Wind className="w-4 h-4 text-green-400" />
                  <span className="text-sm">Carbon Neutral</span>
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-green-400">2025</div>
                <div className="text-sm text-gray-300">Year of Commitment</div>
              </div>
              <div className="bg-white/10 p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-green-400">100%</div>
                <div className="text-sm text-gray-300">Sustainable Packaging Goal</div>
              </div>
              <div className="bg-white/10 p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-green-400">50+</div>
                <div className="text-sm text-gray-300">Green Initiatives</div>
              </div>
              <div className="bg-white/10 p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-green-400">0</div>
                <div className="text-sm text-gray-300">Waste to Landfill Goal</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SustainabilitySection;