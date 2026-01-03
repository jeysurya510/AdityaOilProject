import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Filter, Check, Download, ShoppingCart, Zap, Factory, 
  Car, Settings, Thermometer, Droplets, Gauge, BarChart,
  ChevronRight, Star, Clock, Shield
} from 'lucide-react';
import products from '../data/products';
import confetti from 'canvas-confetti';

const Products = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', label: 'All Products', icon: <Filter size={18} />, count: products.length },
    { id: 'automotive', label: 'Automotive', icon: <Car size={18} />, count: products.filter(p => p.category === 'automotive').length },
    { id: 'industrial', label: 'Industrial', icon: <Factory size={18} />, count: products.filter(p => p.category === 'industrial').length },
    { id: 'greases', label: 'Greases', icon: <Settings size={18} />, count: products.filter(p => p.category === 'greases').length },
    { id: 'specialty', label: 'Specialty', icon: <Zap size={18} />, count: products.filter(p => p.category === 'specialty').length },
  ];

  // Sort products
  useEffect(() => {
    let sorted = [...products];
    
    if (activeTab !== 'all') {
      sorted = sorted.filter(p => p.category === activeTab);
    }

    switch(sortBy) {
      case 'price-low':
        sorted.sort((a, b) => parseFloat(a.price.replace('₹', '')) - parseFloat(b.price.replace('₹', '')));
        break;
      case 'price-high':
        sorted.sort((a, b) => parseFloat(b.price.replace('₹', '')) - parseFloat(a.price.replace('₹', '')));
        break;
      case 'popular':
        sorted.sort((a, b) => b.popularity - a.popularity);
        break;
      default:
        // Featured - already sorted
        break;
    }

    setFilteredProducts(sorted);
  }, [activeTab, sortBy]);

  const handleEnquiry = (productName) => {
    // WhatsApp pre-filled message
    const message = `Hello Aadiya Liquidtools,\n\nI'm interested in ${productName}. Please share more details and pricing.`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
    
    // Confetti effect
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const closeQuickView = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'unset';
  };

  // Specifications icons
  const specIcons = {
    'Viscosity': <Droplets className="w-4 h-4" />,
    'Flash Point': <Thermometer className="w-4 h-4" />,
    'API Grade': <Gauge className="w-4 h-4" />,
    'Base Oil': <BarChart className="w-4 h-4" />,
    'Shelf Life': <Clock className="w-4 h-4" />,
    'Certification': <Shield className="w-4 h-4" />
  };

  return (
    <section id="products" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-responsive">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-navy/10 to-trust-blue/10 rounded-full mb-4">
            <Zap className="w-4 h-4 text-premium-amber" />
            <span className="text-sm font-semibold gradient-text">PRODUCT CATALOG</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
            Our <span className="gradient-text">Premium</span> Range
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            High-performance lubricants engineered for maximum equipment protection, 
            efficiency, and longevity across all applications.
          </p>
        </motion.div>

        {/* Category Tabs & Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="sticky top-24 z-30 bg-white/80 backdrop-blur-lg rounded-2xl p-4 mb-8 shadow-xl border border-gray-200"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${
                    activeTab === cat.id
                      ? 'bg-gradient-to-r from-navy to-trust-blue text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.icon}
                  {cat.label}
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    activeTab === cat.id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-300 text-gray-700'
                  }`}>
                    {cat.count}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-4">
              <span className="text-gray-600 hidden sm:block">Sort by:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white border-2 border-gray-300 rounded-xl focus:border-energy-red focus:ring-2 focus:ring-energy-red/20 outline-none"
              >
                <option value="featured">Featured</option>
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                  
                  {/* Product Header with Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-navy/90 to-trust-blue/90 flex items-center justify-center">
                      <div className="text-6xl font-bold text-white/20">{product.grade.split(' ')[0]}</div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className={`px-3 py-1.5 rounded-full text-xs font-bold text-white ${
                        product.category === 'automotive' ? 'bg-energy-red' :
                        product.category === 'industrial' ? 'bg-trust-blue' :
                        product.category === 'greases' ? 'bg-premium-amber' :
                        'bg-green-500'
                      }`}>
                        {product.category.toUpperCase()}
                      </div>
                    </div>

                    {/* Popularity Badge */}
                    {product.popularity > 4 && (
                      <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-white font-bold">{product.rating}</span>
                      </div>
                    )}
                  </div>

                  {/* Product Body */}
                  <div className="p-6 flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="px-3 py-1 bg-blue-100 text-trust-blue rounded-full text-sm font-medium">
                            {product.grade}
                          </span>
                          {product.isNew && (
                            <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs">
                              NEW
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold gradient-text">{product.price}</div>
                        <div className="text-sm text-gray-500">per {product.unit}</div>
                      </div>
                    </div>

                    {/* Key Specs */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-premium-amber" />
                        Key Specifications
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {Object.entries(product.specs).slice(0, 4).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between border-b border-gray-100 pb-2">
                            <span className="text-sm text-gray-600 flex items-center gap-1">
                              {specIcons[key] || <BarChart className="w-3 h-3" />}
                              {key}:
                            </span>
                            <span className="text-sm font-semibold">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Applications */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-700 mb-2">Applications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.slice(0, 2).map((app, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm">
                            {app}
                          </span>
                        ))}
                        {product.applications.length > 2 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm">
                            +{product.applications.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Packaging Options */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-700 mb-2">Available In:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.packaging.map((pkg) => (
                          <motion.span 
                            key={pkg}
                            whileHover={{ scale: 1.1 }}
                            className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200 rounded-lg text-sm font-medium"
                          >
                            {pkg}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="p-6 pt-0 border-t border-gray-100">
                    <div className="flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleEnquiry(product.name)}
                        className="flex-1 bg-gradient-to-r from-energy-red to-premium-amber text-white py-3 rounded-xl font-bold text-center hover:shadow-lg transition-all group/btn"
                      >
                        <span className="flex items-center justify-center gap-2">
                          <ShoppingCart className="w-5 h-5" />
                          Enquire Now
                          <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleQuickView(product)}
                        className="px-4 bg-gradient-to-r from-navy to-trust-blue text-white rounded-xl hover:shadow-lg"
                      >
                        <span className="flex items-center">
                          <span className="hidden sm:inline mr-2">Quick</span>
                          View
                        </span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bulk Order CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 md:p-12 bg-gradient-to-r from-navy to-trust-blue rounded-3xl text-white overflow-hidden"
        >
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Need Bulk Quantities for Industries?
                </h3>
                <p className="text-xl opacity-90 mb-6">
                  We supply 210L drums directly to factories, workshops, and dealers across India. 
                  Special pricing for bulk orders.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="tel:+919876543210"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-3 bg-white text-navy px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100"
                  >
                    📞 Call for Bulk Quote
                  </motion.a>
                  <motion.a
                    href="mailto:sales@aadiyaliquidtools.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-3 border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/10"
                  >
                    ✉️ Email Requirements
                  </motion.a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['210L Drums', 'Custom Packaging', 'Private Label', 'Pan-India Delivery'].map((item) => (
                  <div key={item} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <div className="text-2xl font-bold text-premium-amber mb-2">✓</div>
                    <div className="font-medium">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-premium-amber/20 to-energy-red/20 rounded-full -translate-y-32 translate-x-32"></div>
        </motion.div>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={closeQuickView}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-3xl font-bold text-navy">{selectedProduct.name}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="px-3 py-1 bg-blue-100 text-trust-blue rounded-full">
                        {selectedProduct.grade}
                      </span>
                      <span className="px-3 py-1 bg-amber-100 text-premium-amber rounded-full">
                        {selectedProduct.category.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={closeQuickView}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold mb-4">Full Specifications</h4>
                    <div className="space-y-3">
                      {Object.entries(selectedProduct.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between border-b pb-2">
                          <span className="text-gray-600">{key}</span>
                          <span className="font-semibold">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-4">Applications</h4>
                    <ul className="space-y-2">
                      {selectedProduct.applications.map((app, i) => (
                        <li key={i} className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-2" />
                          {app}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6">
                      <h4 className="text-xl font-bold mb-4">Packaging Options</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.packaging.map((pkg) => (
                          <span key={pkg} className="px-4 py-2 bg-gray-100 rounded-lg">
                            {pkg}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="text-4xl font-bold gradient-text mb-4">{selectedProduct.price}</div>
                      <button
                        onClick={() => handleEnquiry(selectedProduct.name)}
                        className="w-full bg-gradient-to-r from-energy-red to-premium-amber text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg"
                      >
                        Request Quote for {selectedProduct.name}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Products;