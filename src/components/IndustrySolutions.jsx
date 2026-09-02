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

const iconMap = {
  automotive: Car,
  cement: Factory,
  textile: Shirt,
  'food-pharma': FlaskConical,
  engineering: Settings,
  construction: HardHat,
  steel: Layers,
  agriculture: Wheat,
  rubber: CircleDot,
};

function getProductsByIds(productIds = []) {
  return productIds
    .map((id) => COMPANY_PRODUCTS.find((product) => product.id === id))
    .filter(Boolean);
}

function IndustrySolutions() {
  const [selectedIndustry, setSelectedIndustry] = useState(
    INDUSTRIES[0]?.id || ''
  );

  const currentIndustry = INDUSTRIES.find(
    (industry) => industry.id === selectedIndustry
  );

  return (
    <section
      id="industries"
      className="relative py-20 md:py-28 bg-gray-950 overflow-hidden"
    >
      {/* Background decoration */}
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
            Explore our lubrication solutions by industry, application and
            product.
          </p>

          <div className="mt-4 text-sm text-amber-400 font-medium">
            Industry → Application → Product
          </div>
        </div>

        {/* MAIN CONTENT */}
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
                    text-left transition-all duration-300
                    border
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
                        w-10 h-10 rounded-lg
                        flex items-center justify-center
                        ${
                          isActive
                            ? 'bg-white/20'
                            : 'bg-white/5'
                        }
                      `}
                    >
                      <Icon size={19} />
                    </div>

                    <span className="font-medium">
                      {industry.name}
                    </span>
                  </div>

                  <ChevronRight
                    size={18}
                    className={`
                      transition-transform
                      ${isActive ? 'translate-x-1' : ''}
                    `}
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
              </div>

              <div className="px-4 py-2 rounded-full bg-white/10 text-gray-300 text-sm">
                {currentIndustry?.applications?.length || 0} Applications
              </div>
            </div>

            {/* APPLICATIONS */}
            {currentIndustry?.applications?.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-5">

                {currentIndustry.applications.map((application) => {
                  const products = getProductsByIds(
                    application.productIds
                  );

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
                          <Settings
                            size={18}
                            className="text-amber-600"
                          />
                        </div>
                      </div>

                      {/* PRODUCTS */}
                      <div className="mt-5 pt-4 border-t border-gray-100">

                        <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">
                          Recommended Products
                        </p>

                        {products.length > 0 ? (
                          <div className="space-y-3">

                            {products.map((product) => (
                              <div
                                key={product.id}
                                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-amber-200 transition-colors"
                              >

                                {/* PRODUCT IMAGE / ICON */}
                                <div className="w-12 h-12 rounded-lg bg-white border border-gray-100 flex items-center justify-center shrink-0 overflow-hidden">

                                  {product.image &&
                                  typeof product.image === 'string' &&
                                  (product.image.startsWith('/') ||
                                    product.image.startsWith('http') ||
                                    product.image.startsWith('./')) ? (
                                    <img
                                      src={product.image}
                                      alt={product.name}
                                      className="w-full h-full object-contain"
                                      loading="lazy"
                                    />
                                  ) : (
                                    <Package
                                      size={20}
                                      className="text-amber-600"
                                    />
                                  )}

                                </div>

                                {/* PRODUCT INFO */}
                                <div className="min-w-0 flex-1">
                                  <h5 className="text-sm font-semibold text-gray-900 leading-snug">
                                    {product.name}
                                  </h5>

                                  <p className="mt-1 text-xs text-gray-500">
                                    {product.subCategory ||
                                      product.category ||
                                      'Industrial Lubricant'}
                                  </p>

                                  {product.grade && (
                                    <p className="mt-1 text-xs text-amber-600 font-medium">
                                      Grade: {product.grade}
                                    </p>
                                  )}
                                </div>

                              </div>
                            ))}

                          </div>
                        ) : (
                          <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-dashed border-gray-200">
                            <Package
                              size={20}
                              className="text-gray-400 shrink-0"
                            />

                            <p className="text-sm text-gray-500">
                              Product details will be updated from the
                              approved catalogue.
                            </p>
                          </div>
                        )}

                      </div>
                    </div>
                  );
                })}

              </div>
            ) : (
              /* EMPTY STATE */
              <div className="min-h-[260px] flex flex-col items-center justify-center text-center border border-dashed border-white/10 rounded-2xl px-6">

                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-5">
                  <Factory
                    size={28}
                    className="text-gray-500"
                  />
                </div>

                <h4 className="text-lg font-semibold text-gray-300">
                  Applications Coming Next
                </h4>

                <p className="mt-2 max-w-md text-sm text-gray-500 leading-relaxed">
                  Application and product relationships will be
                  populated using the approved product catalogue.
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