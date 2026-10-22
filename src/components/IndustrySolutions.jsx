// src/components/IndustrySolutions.jsx

import { useState } from 'react';
import {
  ChevronRight,
  Factory,
  Car,
  Shirt,
  FlaskConical,
  Settings,
  HardHat,
  Layers,
  Wheat,
  CircleDot,
  Package,
} from 'lucide-react';

import { INDUSTRIES } from '../data/industries.js';
import { COMPANY_PRODUCTS } from '../data/companyInfo.js';


// =====================================================
// ICON MAP
// =====================================================

const iconMap = {
  agriculture: Wheat,
  automobile: Car,
  engineering: Settings,
  cement: Factory,
  textile: Shirt,
  'food-pharma': FlaskConical,
  steel: Layers,
  rubber: CircleDot,
  construction: HardHat,
};


// =====================================================
// HELPERS
// =====================================================

function getProductsByIds(productIds = []) {
  return productIds
    .map((id) => COMPANY_PRODUCTS.find((product) => product.id === id))
    .filter(Boolean);
}


// =====================================================
// MAIN COMPONENT
// =====================================================

function IndustrySolutions() {
  const [selectedIndustry, setSelectedIndustry] = useState(
    INDUSTRIES[0]?.id || ''
  );

  const currentIndustry = INDUSTRIES.find(
    (industry) => industry.id === selectedIndustry
  );

  // ===================================================
  // PRODUCT CLICK → SCROLL TO PRODUCTS
  // ===================================================

  const goToProduct = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section
      id="industries"
      className="relative bg-gray-950 py-20 md:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 max-w-7xl">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold tracking-wide">
            PRODUCT BY INDUSTRY
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white">
            Solutions for Every Industry
          </h2>

          <p className="mt-5 text-gray-400 text-base md:text-lg leading-relaxed">
            Explore our lubrication solutions by industry and application.
          </p>

          <div className="mt-4 text-sm text-amber-400 font-medium">
            Industry → Application → Product
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-[300px_1fr] gap-8">

          {/* INDUSTRY LIST */}
          <div className="space-y-2">
            {INDUSTRIES.map((industry) => {
              const Icon = iconMap[industry.id] || Factory;
              const isActive = selectedIndustry === industry.id;

              return (
                <button
                  key={industry.id}
                  type="button"
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`
                    w-full flex items-center justify-between
                    gap-3 px-4 py-4 rounded-xl
                    text-left transition-all duration-300 border
                    ${
                      isActive
                        ? 'bg-amber-500 border-amber-500 text-white shadow-lg shadow-amber-500/20'
                        : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`
                        w-10 h-10 rounded-lg flex items-center justify-center
                        ${isActive ? 'bg-white/20' : 'bg-white/5'}
                      `}
                    >
                      <Icon size={19} />
                    </div>
                    <span className="font-medium">{industry.name}</span>
                  </div>
                  <ChevronRight
                    size={18}
                    className={`transition-transform ${isActive ? 'translate-x-1' : ''}`}
                  />
                </button>
              );
            })}
          </div>

          {/* APPLICATION AREA */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">

            {/* INDUSTRY HEADER */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <p className="text-sm text-amber-400 font-semibold uppercase tracking-wider">
                  Selected Industry
                </p>
                <h3 className="mt-2 text-2xl md:text-3xl font-bold text-white">
                  {currentIndustry?.name || 'Industry'}
                </h3>
                {currentIndustry?.description && (
                  <p className="mt-2 text-sm text-gray-400 max-w-2xl">
                    {currentIndustry.description}
                  </p>
                )}
              </div>

              <div className="px-4 py-2 rounded-full bg-white/10 text-gray-300 text-sm shrink-0">
                {currentIndustry?.applications?.length || 0} Applications
              </div>
            </div>

            {/* APPLICATIONS */}
            {currentIndustry?.applications?.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-5">
                {currentIndustry.applications.map((application) => {
                  const products = getProductsByIds(application.productIds);

                  return (
                    <div
                      key={application.id}
                      className="group bg-white rounded-2xl p-5 hover:shadow-xl transition-all duration-300"
                    >
                      {/* APPLICATION HEADER */}
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                            Application
                          </p>
                          <h4 className="mt-1 text-lg font-bold text-gray-900">
                            {application.name}
                          </h4>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                          <Settings size={18} className="text-amber-600" />
                        </div>
                      </div>

                      {/* DESCRIPTION */}
                      {application.description && (
                        <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                          {application.description}
                        </p>
                      )}

                      {/* EQUIPMENT / PROCESS */}
                      {application.equipment?.length > 0 && (
                        <div className="mt-4">
                          <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">
                            Equipment / Process
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {application.equipment.map((eq) => (
                              <span
                                key={eq}
                                className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-600"
                              >
                                {eq}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* PRODUCTS — NAME ONLY */}
                      <div className="mt-5 pt-4 border-t border-gray-100">
                        <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">
                          Recommended Products
                        </p>

                        {products.length > 0 ? (
                          <div className="space-y-2">
                            {products.map((product) => (
                              <button
                                key={product.id}
                                type="button"
                                onClick={goToProduct}
                                className="flex w-full items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-amber-200 hover:bg-amber-50 transition-colors text-left group/item"
                              >
                                {/* ICON ONLY — no image */}
                                <div className="w-9 h-9 rounded-lg bg-white border border-gray-100 flex items-center justify-center shrink-0">
                                  <Package size={17} className="text-amber-600" />
                                </div>

                                {/* NAME ONLY — no grade, no description */}
                                <div className="min-w-0 flex-1">
                                  <h5 className="text-sm font-semibold text-gray-900 leading-snug">
                                    {product.name}
                                  </h5>
                                </div>

                                <ChevronRight
                                  size={16}
                                  className="text-gray-400 group-hover/item:text-amber-600 group-hover/item:translate-x-0.5 transition-all shrink-0"
                                />
                              </button>
                            ))}
                          </div>
                        ) : (
                          <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-dashed border-gray-200">
                            <Package size={20} className="text-gray-400 shrink-0" />
                            <p className="text-sm text-gray-500">
                              Product details will be updated.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="min-h-[260px] flex flex-col items-center justify-center text-center border border-dashed border-white/10 rounded-2xl px-6">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-5">
                  <Factory size={28} className="text-gray-500" />
                </div>
                <h4 className="text-lg font-semibold text-gray-300">
                  Applications Coming Next
                </h4>
                <p className="mt-2 max-w-md text-sm text-gray-500 leading-relaxed">
                  Application and product relationships will be populated.
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustrySolutions;