// src/data/productTaxonomy.js

/*
  PRODUCT NAVIGATION STRUCTURE
  APAR-style 3 main categories
*/

export const PRODUCT_TAXONOMY = [

  // =====================================================
  // 1. GENERAL LUBRICANTS
  // =====================================================

  {
    id: 'general-lubricants',
    name: 'General Lubricants',
    description:
      'Industrial lubricants for machinery, equipment and plant operations.',
    icon: '🏭',
    children: [
      { id: 'hydraulic-oil', name: 'Hydraulic Oil' },
      { id: 'gear-oil', name: 'Gear Oil' },
      { id: 'grease', name: 'Grease' },
      { id: 'thermic-oil', name: 'Thermic Oil' },
      { id: 'turbine-oil', name: 'Turbine Oil' },
      { id: 'refrigeration-oil', name: 'Refrigeration Oil' },
      { id: 'compressor-oil', name: 'Compressor Oil' },
      { id: 'machine-oil', name: 'Machine Oil' },
      { id: 'way-lube-oil', name: 'Way Lube Oil' },
      { id: 'spindle-oil', name: 'Spindle Oil' },
    ],
  },


  // =====================================================
  // 2. METAL WORKING FLUIDS
  // =====================================================

  {
    id: 'metal-working-fluids',
    name: 'Metal Working Fluids',
    description:
      'Fluids for metal machining, forming, protection and treatment.',
    icon: '⚙️',
    children: [
      { id: 'neat-cutting-oil', name: 'Neat Cutting Oil' },
      { id: 'water-soluble-cutting-oil', name: 'Water Soluble Cutting Oil' },
      { id: 'quenching-oil', name: 'Quenching Oil' },
      { id: 'rust-protection-oil', name: 'Rust Protection Oil' },
      { id: 'drawing-forming-oil', name: 'Drawing & Forming Oil' },
    ],
  },


  // =====================================================
  // 3. AUTOMOTIVE LUBRICANTS
  // =====================================================

  {
    id: 'automotive-lubricants',
    name: 'Automotive Lubricants',
    description:
      'Lubricants for automotive engines, gear systems and transmission.',
    icon: '🚗',
    children: [
      { id: 'automotive-engine-oils', name: 'Automotive Engine Oils' },
      { id: 'automotive-gear-oil', name: 'Automotive Gear Oil' },
      { id: 'transmission-fluid', name: 'Transmission Fluid' },
    ],
  },

];


// =====================================================
// HELPERS
// =====================================================

export const getProductCategory = (categoryId) => {
  return PRODUCT_TAXONOMY.find((category) => category.id === categoryId);
};

export const getProductSubCategories = (categoryId) => {
  const category = getProductCategory(categoryId);
  return category?.children || [];
};

export default PRODUCT_TAXONOMY;