// src/components/Products.jsx

import { useEffect, useMemo, useState } from 'react';
import {
  Factory,
  Settings,
  Zap,
  Droplets,
  Package,
  Search,
  X,
  MessageCircle,
  FileText,
  ChevronRight,
} from 'lucide-react';

import { COMPANY, COMPANY_PRODUCTS } from '../data/companyInfo.js';
import { PRODUCT_TAXONOMY } from '../data/productTaxonomy.js';


// =====================================================
// CATEGORY ICONS
// =====================================================

const CATEGORY_ICONS = {
  'general-lubricants': Factory,
  'metal-working-fluids': Settings,
  'automotive-lubricants': Zap,
};


// =====================================================
// MAIN COMPONENT
// =====================================================

function Products() {
  const [activeFamily, setActiveFamily] = useState('all');
  const [activeSubCategory, setActiveSubCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // ===================================================
  // NAVIGATION PRODUCT FAMILY EVENT
  // ===================================================

  useEffect(() => {
    const handleProductFamilySelect = (event) => {
      const familyId = event.detail?.familyId;
      if (!familyId) return;
      setActiveFamily(familyId);
      setActiveSubCategory('all');
      setSearchQuery('');
    };

    window.addEventListener('selectProductFamily', handleProductFamilySelect);
    return () => {
      window.removeEventListener('selectProductFamily', handleProductFamilySelect);
    };
  }, []);

  // ===================================================
  // ACTIVE FAMILY DATA
  // ===================================================

  const activeFamilyData = PRODUCT_TAXONOMY.find(
    (family) => family.id === activeFamily
  );

  const subCategories = activeFamilyData?.children || [];

  // ===================================================
  // FILTER PRODUCTS
  // ===================================================

  const filteredProducts = useMemo(() => {
    let products = [...COMPANY_PRODUCTS];

    if (activeFamily !== 'all') {
      products = products.filter((p) => p.family === activeFamily);
    }

    if (activeSubCategory !== 'all' && activeSubCategory !== '') {
      products = products.filter((p) => p.subCategory === activeSubCategory);
    }

    const query = searchQuery.trim().toLowerCase();
    if (query) {
      products = products.filter((p) => {
        const name = p.name?.toLowerCase() || '';
        const description = p.description?.toLowerCase() || '';
        const grade = p.grade?.toLowerCase() || '';
        const subCategory = p.subCategory?.toLowerCase() || '';
        const applications = p.applications || [];
        const applicationMatch = applications.some((a) =>
          a.toLowerCase().includes(query)
        );

        return (
          name.includes(query) ||
          description.includes(query) ||
          grade.includes(query) ||
          subCategory.includes(query) ||
          applicationMatch
        );
      });
    }

    return products;
  }, [activeFamily, activeSubCategory, searchQuery]);

  // ===================================================
  // HELPERS
  // ===================================================

  const clearFilters = () => {
    setActiveFamily('all');
    setActiveSubCategory('all');
    setSearchQuery('');
  };

  const handleFamilyChange = (familyId) => {
    setActiveFamily(familyId);
    setActiveSubCategory('all');
  };

  const handleEnquiry = (productName) => {
    const whatsapp = COMPANY.social?.whatsapp || COMPANY.whatsapp || '';
    if (!whatsapp) return;

    const message =
      `Hello, I'm interested in ${productName}.\n\n` +
      `Please share technical specifications, availability and pricing.`;

    window.open(
      `${whatsapp}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

const getProductImage = (product) => {
  if (product?.image) return product.image;
  return null;
};

  const getFamilyName = () => {
    if (activeFamily === 'all') return 'All Products';
    return activeFamilyData?.name || 'Products';
  };

  // ===================================================
  // RENDER
  // ===================================================

  return (
    <section
      id="products"
      className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-28"
    >
      <div className="container mx-auto max-w-7xl px-4">

        {/* HEADER */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-100 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
            <Droplets size={16} />
            PRODUCT CATALOGUE
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Lubrication Solutions
          </h2>

          <p className="mt-5 leading-relaxed text-gray-600">
            Explore our product range by category and application.
          </p>
        </div>

        {/* SEARCH */}
        <div className="mx-auto mb-10 max-w-3xl">
          <div className="relative rounded-2xl border border-gray-200 bg-white shadow-sm">
            <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, grades, applications..."
              className="w-full rounded-2xl bg-transparent py-4 pl-14 pr-12 text-sm text-gray-800 outline-none placeholder:text-gray-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                aria-label="Clear search"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        {/* FAMILY TABS */}
        <div className="mb-8">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {/* ALL */}
            <button
              type="button"
              onClick={() => handleFamilyChange('all')}
              className={`flex items-center gap-3 rounded-2xl border px-4 py-4 text-left transition-all ${
                activeFamily === 'all'
                  ? 'border-gray-900 bg-gray-900 text-white shadow-lg'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-amber-300 hover:bg-amber-50'
              }`}
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                  activeFamily === 'all' ? 'bg-white/15' : 'bg-gray-100'
                }`}
              >
                <Package size={19} />
              </div>
              <div>
                <p className="text-sm font-bold">All Products</p>
                <p
                  className={`mt-0.5 text-xs ${
                    activeFamily === 'all' ? 'text-gray-300' : 'text-gray-400'
                  }`}
                >
                  Complete catalogue
                </p>
              </div>
            </button>

            {/* CATEGORIES */}
            {PRODUCT_TAXONOMY.map((family) => {
              const Icon = CATEGORY_ICONS[family.id] || Package;
              const isActive = activeFamily === family.id;

              return (
                <button
                  key={family.id}
                  type="button"
                  onClick={() => handleFamilyChange(family.id)}
                  className={`flex items-center gap-3 rounded-2xl border px-4 py-4 text-left transition-all ${
                    isActive
                      ? 'border-amber-500 bg-amber-500 text-white shadow-lg'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-amber-300 hover:bg-amber-50'
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                      isActive ? 'bg-white/15' : 'bg-gray-100'
                    }`}
                  >
                    <Icon size={19} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold">{family.name}</p>
                    <p
                      className={`mt-0.5 text-xs ${
                        isActive ? 'text-amber-100' : 'text-gray-400'
                      }`}
                    >
                      {family.children?.length || 0} categories
                    </p>
                  </div>
                </button>
              );
            })}

          </div>
        </div>

        {/* SUB CATEGORY FILTER */}
        {activeFamily !== 'all' && subCategories.length > 0 && (
          <div className="mb-10">
            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Categories
                  </p>
                  <p className="mt-1 font-semibold text-gray-800">
                    {getFamilyName()}
                  </p>
                </div>
                {activeSubCategory !== 'all' && (
                  <button
                    type="button"
                    onClick={() => setActiveSubCategory('all')}
                    className="text-xs font-semibold text-amber-600 hover:text-amber-700"
                  >
                    Clear
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setActiveSubCategory('all')}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    activeSubCategory === 'all'
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  All
                </button>

                {subCategories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveSubCategory(cat.name)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      activeSubCategory === cat.name
                        ? 'bg-amber-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-amber-50 hover:text-amber-700'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* RESULT HEADER */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            Showing
            <span className="mx-1 font-bold text-gray-900">
              {filteredProducts.length}
            </span>
            product{filteredProducts.length === 1 ? '' : 's'}
          </p>

          {(activeFamily !== 'all' || activeSubCategory !== 'all' || searchQuery) && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center gap-2 self-start rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-600 transition hover:border-gray-300 hover:bg-gray-50"
            >
              <X size={15} />
              Clear Filters
            </button>
          )}
        </div>

        {/* EMPTY STATE */}
        {filteredProducts.length === 0 && (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 text-gray-400">
              <Package size={28} />
            </div>
            <h3 className="mt-5 text-xl font-bold text-gray-900">
              No products found
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-gray-500">
              Try another category or clear the filters.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              View All Products
            </button>
          </div>
        )}

        {/* PRODUCT GRID */}
        {filteredProducts.length > 0 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* IMAGE */}
                <div className="flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  {getProductImage(product) ? (
                    <img
                      src={getProductImage(product)}
                      alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <Package size={64} className="text-gray-300" />
                  )}
                </div>

                {/* INFO */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                      {product.subCategory || product.category}
                    </span>
                    {product.grade && (
                      <span className="shrink-0 text-xs font-medium text-gray-400">
                        {product.grade}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-2 text-xl font-bold leading-snug text-gray-900">
                    {product.name}
                  </h3>

                  {product.description && (
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600">
                      {product.description}
                    </p>
                  )}

                  {product.applications?.length > 0 && (
                    <div className="mt-4">
                      <p className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-400">
                        Applications
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.slice(0, 4).map((app) => (
                          <span
                            key={app}
                            className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-600"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ACTIONS */}
                  <div className="mt-6 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(product)}
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
                    >
                      <FileText size={16} />
                      View Details
                    </button>
                    <button
                      type="button"
                      onClick={() => handleEnquiry(product.name)}
                      className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
                    >
                      <MessageCircle size={16} />
                      Enquire
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>

      {/* ===========================================
          PRODUCT DETAIL MODAL (APAR-style)
      =========================================== */}

      {selectedProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-md transition hover:bg-gray-100"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">

              {/* PRODUCT IMAGE */}
              {/* PRODUCT IMAGE */}
                {/* PRODUCT IMAGE */}
              <div className="relative flex min-h-[300px] items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 p-8 md:min-h-[520px]">
                {getProductImage(selectedProduct) ? (
                  <img
                    src={getProductImage(selectedProduct)}
                    alt={selectedProduct.name}
                    className="h-full w-full object-cover rounded-xl"// Shadow konjam perusaakiten
                  />
                ) : (
                  <Package size={96} className="text-gray-300" />
                )}
              </div>

              {/* PRODUCT DETAILS */}
              <div className="p-7 md:p-10">

                <span className="inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
                  {selectedProduct.subCategory || selectedProduct.category}
                </span>

                <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900">
                  {selectedProduct.name}
                </h2>

                {selectedProduct.grade && (
                  <p className="mt-3 text-sm font-medium text-gray-500">
                    Grade: <span className="text-gray-800">{selectedProduct.grade}</span>
                  </p>
                )}

                {(selectedProduct.fullDescription || selectedProduct.description) && (
                  <p className="mt-6 text-sm leading-7 text-gray-600">
                    {selectedProduct.fullDescription || selectedProduct.description}
                  </p>
                )}

                {/* SPECIFICATIONS */}
                {selectedProduct.specifications &&
                  Object.keys(selectedProduct.specifications).length > 0 && (
                    <div className="mt-7">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">
                        Specifications
                      </h3>
                      <div className="mt-3 overflow-hidden rounded-2xl border border-gray-200">
                        {Object.entries(selectedProduct.specifications).map(
                          ([key, value]) => (
                            <div
                              key={key}
                              className="grid grid-cols-2 gap-4 border-b border-gray-100 px-4 py-3 last:border-b-0"
                            >
                              <span className="text-xs font-semibold capitalize text-gray-400">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </span>
                              <span className="text-right text-xs font-medium text-gray-700">
                                {String(value)}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}

                {/* APPLICATIONS */}
                {selectedProduct.applications?.length > 0 && (
                  <div className="mt-7">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">
                      Applications
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedProduct.applications.map((app) => (
                        <span
                          key={app}
                          className="rounded-full bg-gray-100 px-3 py-1.5 text-xs text-gray-600"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* PDS / SDS */}
                {(selectedProduct.pds || selectedProduct.sds) && (
                  <div className="mt-7 grid grid-cols-2 gap-3">
                    {selectedProduct.pds && (
                      <a
                        href={selectedProduct.pds}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition hover:border-amber-300 hover:text-amber-600"
                      >
                        <FileText size={16} />
                        Product Data Sheet
                      </a>
                    )}
                    {selectedProduct.sds && (
                      <a
                        href={selectedProduct.sds}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition hover:border-amber-300 hover:text-amber-600"
                      >
                        <FileText size={16} />
                        Safety Data Sheet
                      </a>
                    )}
                  </div>
                )}

                {/* ACTIONS */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => handleEnquiry(selectedProduct.name)}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-700"
                  >
                    <MessageCircle size={17} />
                    WhatsApp Enquiry
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(null)}
                    className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                  >
                    Close
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Products;