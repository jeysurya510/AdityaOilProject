// src/components/MRO.jsx

import { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Wrench,
  ShieldCheck,
  SprayCan,
  Droplets,
  Factory,
} from 'lucide-react';

import { MRO_CATALOG } from '../data/mro.js';

const iconMap = {
  'welding-fabrication': Wrench,
  'cleaning-degreasing': SprayCan,
  'rust-corrosion': ShieldCheck,
  'general-maintenance': Droplets,
  'mould-release': Factory,
};

function MRO() {
  const [openParent, setOpenParent] = useState(null);

  const toggleParent = (parentId) => {
    setOpenParent((current) =>
      current === parentId ? null : parentId
    );
  };

  return (
    <section
      id="mro"
      className="relative py-20 md:py-28 bg-gray-50 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative container mx-auto px-4 max-w-6xl">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-semibold tracking-wide">
            <Wrench size={16} />
            MRO SOLUTIONS
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Maintenance, Repair & Overhaul
          </h2>

          <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed">
            Explore our maintenance and industrial support solutions
            through a simple category-wise list.
          </p>

          <div className="mt-4 text-sm text-amber-600 font-semibold">
            Category → Product
          </div>
        </div>

        {/* MRO LIST */}
        <div className="max-w-4xl mx-auto space-y-4">

          {MRO_CATALOG.map((parent) => {
            const isOpen = openParent === parent.id;
            const Icon = iconMap[parent.id] || Wrench;

            return (
              <div
                key={parent.id}
                className={`
                  bg-white
                  border
                  rounded-2xl
                  overflow-hidden
                  transition-all duration-300
                  ${
                    isOpen
                      ? 'border-amber-200 shadow-lg shadow-amber-100/50'
                      : 'border-gray-200 shadow-sm hover:border-amber-200'
                  }
                `}
              >

                {/* PARENT */}
                <button
                  type="button"
                  onClick={() => toggleParent(parent.id)}
                  aria-expanded={isOpen}
                  className="
                    w-full
                    px-5 md:px-6
                    py-5
                    flex
                    items-center
                    justify-between
                    text-left
                    hover:bg-amber-50/40
                    transition-colors
                  "
                >

                  <div className="flex items-center gap-4">

                    {/* ICON */}
                    <div
                      className={`
                        w-11 h-11
                        rounded-xl
                        flex
                        items-center
                        justify-center
                        shrink-0
                        transition-colors
                        ${
                          isOpen
                            ? 'bg-amber-500 text-white'
                            : 'bg-amber-50 text-amber-600'
                        }
                      `}
                    >
                      <Icon size={19} />
                    </div>

                    {/* TITLE */}
                    <div>
                      <h3 className="font-bold text-gray-900">
                        {parent.name}
                      </h3>

                      <p className="text-xs text-gray-500 mt-1">
                        {parent.children?.length || 0}{' '}
                        {parent.children?.length === 1
                          ? 'Product'
                          : 'Products'}
                      </p>
                    </div>

                  </div>

                  {/* ARROW */}
                  <div
                    className={`
                      w-9 h-9
                      rounded-full
                      flex
                      items-center
                      justify-center
                      transition-all
                      ${
                        isOpen
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-gray-100 text-gray-500'
                      }
                    `}
                  >
                    <ChevronDown
                      size={19}
                      className={`
                        transition-transform duration-300
                        ${isOpen ? 'rotate-180' : ''}
                      `}
                    />
                  </div>

                </button>

                {/* CHILDREN */}
                {isOpen && (
                  <div className="border-t border-gray-100">

                    <div className="p-4 md:p-5">

                      {parent.children?.length > 0 ? (
                        <div className="grid sm:grid-cols-2 gap-3">

                          {parent.children.map((child) => (
                            <div
                              key={child.id}
                              className="
                                group
                                flex
                                items-center
                                gap-3
                                px-4
                                py-4
                                rounded-xl
                                bg-gray-50
                                border
                                border-gray-100
                                hover:bg-amber-50
                                hover:border-amber-200
                                transition-all duration-200
                              "
                            >

                              {/* BULLET */}
                              <div
                                className="
                                  w-9 h-9
                                  rounded-lg
                                  bg-white
                                  border
                                  border-gray-200
                                  flex
                                  items-center
                                  justify-center
                                  shrink-0
                                  group-hover:border-amber-200
                                "
                              >
                                <Droplets
                                  size={16}
                                  className="text-amber-600"
                                />
                              </div>

                              {/* PRODUCT NAME */}
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-semibold text-gray-800">
                                  {child.name}
                                </p>

                                <p className="text-xs text-gray-400 mt-1">
                                  MRO Maintenance Product
                                </p>
                              </div>

                              <ChevronRight
                                size={17}
                                className="
                                  text-gray-400
                                  group-hover:text-amber-600
                                  group-hover:translate-x-0.5
                                  transition-all
                                  shrink-0
                                "
                              />

                            </div>
                          ))}

                        </div>
                      ) : (
                        <div className="py-8 text-center">
                          <p className="text-sm text-gray-500">
                            Products will be updated from the approved
                            MRO catalogue.
                          </p>
                        </div>
                      )}

                    </div>

                  </div>
                )}

              </div>
            );
          })}

        </div>

        {/* FOOTER NOTE */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-200">

            <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
              <Wrench size={16} className="text-amber-600" />
            </div>

            <p className="text-sm text-gray-500 leading-relaxed">
              MRO products are presented as a simple category-wise
              catalogue for quick identification and maintenance
              requirements.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}

export default MRO;