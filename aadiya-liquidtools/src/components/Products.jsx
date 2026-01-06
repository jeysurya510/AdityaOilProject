// src/components/Products.jsx - WITH CORRECT IMPORTS
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Factory, Car, Settings, Zap, Droplets, Thermometer,
  Gauge, Shield, Package, ShoppingCart, Phone, Mail,
  Filter, ChevronRight, Star, Download, Check,
  Award, Truck, Clock, Users, Search, X
} from 'lucide-react';

// ✅ CORRECT IMPORTS
// Change this import:
import { COMPANY as companyInfo, COMPANY_PRODUCTS } from '../data/companyInfo.js';

// Now you can use companyInfo (lowercase) throughout your code

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSubCategory, setActiveSubCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(COMPANY_PRODUCTS);
  const [searchQuery, setSearchQuery] = useState('');

  // Categories based on products
  const categories = [
    { id: 'all', name: 'All Products', icon: '📦' },
    { id: 'industrial', name: 'Industrial Oils', icon: '🏭' },
    { id: 'automotive', name: 'Automotive Oils', icon: '🚗' },
    { id: 'greases', name: 'Greases', icon: '🛢️' },
    { id: 'metal', name: 'Metal Working Oils', icon: '⚙️' },
    { id: 'specialty', name: 'Specialty Oils', icon: '⚡' }
  ];

  // Filter products
  useEffect(() => {
    let filtered = [...COMPANY_PRODUCTS];
    
    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }
    
    if (activeSubCategory !== 'all') {
      filtered = filtered.filter(p => p.subCategory === activeSubCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.grade.toLowerCase().includes(query) ||
        p.applications.some(app => app.toLowerCase().includes(query))
      );
    }
    
    setFilteredProducts(filtered);
  }, [activeCategory, activeSubCategory, searchQuery]);

  const handleEnquiry = (productName) => {
    const message = `Hello ${companyInfo.name},\n\nI'm interested in ${productName}. Please share technical specifications and pricing.`;
    window.open(`${companyInfo.social.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleQuickView = (product) => {
    setSelectedProduct(product);
  };

  const closeQuickView = () => {
    setSelectedProduct(null);
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'industrial': return <Factory className="w-5 h-5" />;
      case 'automotive': return <Car className="w-5 h-5" />;
      case 'greases': return <Settings className="w-5 h-5" />;
      case 'metal': return <Settings className="w-5 h-5" />;
      case 'specialty': return <Zap className="w-5 h-5" />;
      default: return <Package className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'industrial': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'automotive': return 'bg-green-100 text-green-700 border-green-200';
      case 'greases': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'metal': return 'bg-gray-100 text-gray-700 border-gray-200';
      case 'specialty': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const clearFilters = () => {
    setActiveCategory('all');
    setActiveSubCategory('all');
    setSearchQuery('');
  };

  return (
    <section id="products" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <Zap className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-semibold text-blue-700">PRODUCT CATALOG</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Premium</span> Range
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            High-performance lubricants engineered for maximum equipment protection, 
            efficiency, and longevity across all applications.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <Award className="w-10 h-10 text-blue-600 mb-3" />
            <h4 className="font-bold text-lg mb-2">Quality Certified</h4>
            <p className="text-gray-600 text-sm">Meeting international quality standards</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <Truck className="w-10 h-10 text-green-600 mb-3" />
            <h4 className="font-bold text-lg mb-2">Pan-India Delivery</h4>
            <p className="text-gray-600 text-sm">Timely supply across all states</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <Clock className="w-10 h-10 text-amber-600 mb-3" />
            <h4 className="font-bold text-lg mb-2">Technical Support</h4>
            <p className="text-gray-600 text-sm">Expert assistance available</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <Users className="w-10 h-10 text-purple-600 mb-3" />
            <h4 className="font-bold text-lg mb-2">Bulk Discounts</h4>
            <p className="text-gray-600 text-sm">Special pricing for industries</p>
          </div>
        </div>

        {/* Filters Section */}
        <div className="mb-8 bg-white rounded-2xl shadow-lg p-6">
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Filter className="inline w-4 h-4 mr-2" />
                Product Category
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setActiveSubCategory('all');
                  }}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeCategory === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Products
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setActiveSubCategory('all');
                    }}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                      activeCategory === cat.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat.icon} {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Search */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Search className="inline w-4 h-4 mr-2" />
                Search Products
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name, grade or application..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Active Filters */}
          {(activeCategory !== 'all' || searchQuery) && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-gray-600">Active filters:</span>
                {activeCategory !== 'all' && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm flex items-center gap-1">
                    {categories.find(c => c.id === activeCategory)?.name}
                    <button onClick={() => setActiveCategory('all')} className="ml-1">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {searchQuery && (
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm flex items-center gap-1">
                    Search: "{searchQuery}"
                    <button onClick={() => setSearchQuery('')} className="ml-1">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                <button
                  onClick={clearFilters}
                  className="ml-auto text-sm text-red-600 hover:text-red-700 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Products Count */}
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="text-gray-600">
            Showing <span className="font-bold text-blue-600">{filteredProducts.length}</span> products
            {activeCategory !== 'all' && ` in ${categories.find(c => c.id === activeCategory)?.name}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium"
            >
              <Download className="w-4 h-4" />
              Download Catalog
            </button>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl shadow">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg mb-2">No products found matching your criteria.</p>
            <p className="text-gray-400 mb-6">Try changing your filters or search term</p>
            <button
              onClick={clearFilters}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
            >
              Show All Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
                >
                  {/* Product Header with Color Badge */}
                  <div className={`h-2 ${getCategoryColor(product.category).split(' ')[0]}`}></div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          {getCategoryIcon(product.category)}
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getCategoryColor(product.category)}`}>
                            {product.category.toUpperCase()}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{product.grade}</p>
                      </div>
                      {product.featured && (
                        <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                      )}
                    </div>

                    {product.isNew && (
                      <div className="inline-block mb-3">
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">
                          NEW ARRIVAL
                        </span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

                    {/* Key Specifications */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                        <Gauge className="w-3 h-3" />
                        Key Specifications
                      </h4>
                      <div className="space-y-1">
                        {Object.entries(product.specs).slice(0, 3).map(([key, value]) => (
                          <div key={key} className="flex justify-between text-sm">
                            <span className="text-gray-600 truncate">{key}:</span>
                            <span className="font-medium text-gray-900">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-blue-600">
                        {product.price}
                        <span className="text-sm text-gray-500 font-normal ml-1">/ {product.unit}</span>
                      </div>
                    </div>

                    {/* Packaging */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                        <Package className="w-3 h-3" />
                        Packaging
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {product.packaging.slice(0, 2).map((pkg) => (
                          <span key={pkg} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {pkg}
                          </span>
                        ))}
                        {product.packaging.length > 2 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            +{product.packaging.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="px-6 pb-6 pt-0">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEnquiry(product.name)}
                        className="flex-1 bg-green-600 text-white py-2.5 rounded-lg font-medium hover:bg-green-700 flex items-center justify-center gap-2"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Quick Enquiry
                      </button>
                      <button
                        onClick={() => handleQuickView(product)}
                        className="px-4 py-2.5 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 font-medium"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Bulk Order CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-8 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Industrial Bulk Orders & OEM Supplies
              </h3>
              <p className="text-blue-100 mb-6">
                Special pricing for factories, workshops, and dealerships. We supply 210L drums, 
                custom packaging, and provide technical support for large-scale requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={companyInfo.social.call}
                  className="bg-white text-blue-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call for Bulk Quote
                </a>
                <a
                  href={`mailto:${companyInfo.contact.email}?subject=Bulk Order Enquiry`}
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Email Requirements
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Truck className="w-6 h-6" />, text: 'Pan-India Delivery' },
                { icon: <Shield className="w-6 h-6" />, text: 'Quality Certified' },
                { icon: <Package className="w-6 h-6" />, text: 'Custom Packaging' },
                { icon: <Award className="w-6 h-6" />, text: 'OEM Approvals' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-amber-300 mb-2">{item.icon}</div>
                  <div className="font-medium">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Standards Section */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
            Our Products Meet International Standards
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'IS Standards', 'ISO Standards', 'API Specifications', 
              'JASO Standards', 'MIL Specs', 'NSF H1'
            ].map((standard, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg text-center shadow hover:shadow-md transition-shadow">
                <div className="text-blue-600 font-bold text-lg mb-1">{standard}</div>
                <div className="text-sm text-gray-600">Certified</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                {/* Modal Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {getCategoryIcon(selectedProduct.category)}
                      <span className={`text-sm font-semibold px-3 py-1 rounded-full border ${getCategoryColor(selectedProduct.category)}`}>
                        {selectedProduct.category.toUpperCase()}
                      </span>
                      {selectedProduct.isNew && (
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">
                          NEW
                        </span>
                      )}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{selectedProduct.name}</h3>
                    <p className="text-lg text-gray-600 mt-1">{selectedProduct.grade}</p>
                  </div>
                  <button
                    onClick={closeQuickView}
                    className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    <div className="mb-6">
                      <h4 className="text-xl font-bold mb-3 text-gray-900">Product Description</h4>
                      <p className="text-gray-700">{selectedProduct.description}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-xl font-bold mb-3 text-gray-900">Applications</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.applications.map((app, index) => (
                          <span key={index} className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3 text-gray-900">Packaging Options</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.packaging.map((pkg) => (
                          <span key={pkg} className="px-4 py-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-lg font-medium">
                            {pkg}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <div className="mb-6">
                      <h4 className="text-xl font-bold mb-3 text-gray-900">Specifications</h4>
                      <div className="space-y-3">
                        {Object.entries(selectedProduct.specs).map(([key, value]) => (
                          <div key={key} className="flex justify-between border-b pb-2">
                            <span className="text-gray-600">{key}</span>
                            <span className="font-semibold text-gray-900">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-3xl font-bold text-blue-600">
                            {selectedProduct.price}
                          </div>
                          <div className="text-gray-600">per {selectedProduct.unit}</div>
                        </div>
                        {selectedProduct.featured && (
                          <div className="flex items-center gap-1">
                            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                            <span className="font-semibold">Featured Product</span>
                          </div>
                        )}
                      </div>
                      
                      <button
                        onClick={() => {
                          handleEnquiry(selectedProduct.name);
                          closeQuickView();
                        }}
                        className="w-full bg-green-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-green-700 flex items-center justify-center gap-2"
                      >
                        <ShoppingCart className="w-5 h-5" />
                        Enquire Now for {selectedProduct.name}
                      </button>
                      
                      <div className="mt-4 text-center">
                        <a 
                          href={companyInfo.social.call}
                          className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1"
                        >
                          <Phone className="w-4 h-4" />
                          Call: {companyInfo.contact.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Products;