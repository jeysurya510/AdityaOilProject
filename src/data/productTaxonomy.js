// src/data/productTaxonomy.js

/*
  ADITYA LIQUIDTOOLS
  PRODUCT NAVIGATION STRUCTURE

  Public Product Families:

  1. Industrial Lubricants
  2. Metal Working Fluids
  3. Specialty Lubricants
  4. Specialty Oils

  IMPORTANT:
  Base Oils and Process Oils are intentionally
  excluded from public navigation.
*/

export const PRODUCT_TAXONOMY = [

  // =====================================================
  // 1. INDUSTRIAL LUBRICANTS
  // =====================================================

  {
    id: 'industrial-lubricants',
    name: 'Industrial Lubricants',

    description:
      'Lubrication solutions for industrial machinery, equipment and plant operations.',

    icon: '🏭',

    children: [

      {
        id: 'hydraulic-oils',
        name: 'Hydraulic Oils',
      },

      {
        id: 'slideway-lubricants',
        name: 'Slideway Lubricants',
      },

      {
        id: 'industrial-gear-lubricants',
        name: 'Industrial Gear Lubricants',
      },

      {
        id: 'machinery-lubricants',
        name: 'Machinery Lubricants',
      },

      {
        id: 'spindle-lubricants',
        name: 'Spindle Lubricants',
      },

      {
        id: 'turbine-lubricants',
        name: 'Turbine Lubricants',
      },

      {
        id: 'refrigeration-compressor-lubricants',
        name: 'Refrigeration Compressor Lubricants',
      },

      {
        id: 'compressor-lubricants',
        name: 'Compressor Lubricants',
      },

      {
        id: 'vacuum-pump-oils',
        name: 'Vacuum Pump Oils',
      },

    ],
  },


  // =====================================================
  // 2. METAL WORKING FLUIDS
  // =====================================================

  {
    id: 'metal-working-fluids',
    name: 'Metal Working Fluids',

    description:
      'Specialized fluids for metal machining, forming, protection and treatment.',

    icon: '⚙️',

    children: [

      {
        id: 'metal-removal-fluids',
        name: 'Metal Removal Fluids',

        children: [
          {
            id: 'neat-cutting-fluids',
            name: 'Neat Cutting Fluids',
          },

          {
            id: 'water-soluble-fluids',
            name: 'Water Soluble Fluids',
          },

          {
            id: 'semi-synthetic-fluids',
            name: 'Semi-Synthetic Fluids',
          },

          {
            id: 'synthetic-fluids',
            name: 'Synthetic Fluids',
          },
        ],
      },

      {
        id: 'metal-forming-lubricants',
        name: 'Metal Forming Lubricants',

        children: [
          {
            id: 'neat-forming-lubricants',
            name: 'Neat Forming Lubricants',
          },

          {
            id: 'water-soluble-forming',
            name: 'Water Soluble Forming Lubricants',
          },

          {
            id: 'vanishing-stamping',
            name: 'Vanishing / Stamping Lubricants',
          },
        ],
      },

      {
        id: 'metal-protecting-fluids',
        name: 'Metal Protecting Fluids',

        children: [
          {
            id: 'solvent-rust-preventives',
            name: 'Solvent Rust Preventives',
          },

          {
            id: 'oil-rust-preventives',
            name: 'Oil Rust Preventives',
          },

          {
            id: 'water-soluble-rust-preventives',
            name: 'Water Soluble Rust Preventives',
          },
        ],
      },

      {
        id: 'metal-treatment-fluids',
        name: 'Metal Treatment Fluids',

        children: [
          {
            id: 'quenching-fluids',
            name: 'Quenching Fluids',
          },

          {
            id: 'tempering-fluids',
            name: 'Tempering Fluids',
          },
        ],
      },

    ],
  },


  // =====================================================
  // 3. SPECIALTY LUBRICANTS
  // =====================================================

  {
    id: 'specialty-lubricants',
    name: 'Specialty Lubricants',

    description:
      'Application-specific lubrication solutions for specialized industrial requirements.',

    icon: '⚡',

    children: [

      {
        id: 'pneumatic-tool-lubricants',
        name: 'Pneumatic Tool Lubricants',
      },

      {
        id: 'textile-lubricants',
        name: 'Textile Lubricants',
      },

      {
        id: 'heat-transfer-oils',
        name: 'Heat Transfer Oils',
      },

    ],
  },


  // =====================================================
  // 4. SPECIALTY OILS
  // =====================================================

  {
    id: 'specialty-oils',
    name: 'Specialty Oils',

    description:
      'Specialty oil solutions for selected industrial, technical and application-specific requirements.',

    icon: '🛢️',

    children: [

      {
        id: 'transformer-oils',
        name: 'Transformer Oils',
      },

      {
        id: 'white-mineral-oils',
        name: 'White Mineral Oils',
      },

      {
        id: 'petroleum-jelly',
        name: 'Petroleum Jelly',
      },

    ],
  },

];


// =====================================================
// HELPERS
// =====================================================

export const PRODUCT_CATEGORY_IDS =
  PRODUCT_TAXONOMY.map(
    (category) => category.id
  );


export const getProductCategory = (categoryId) => {
  return PRODUCT_TAXONOMY.find(
    (category) => category.id === categoryId
  );
};


export const getProductSubCategories = (categoryId) => {
  const category = getProductCategory(categoryId);

  return category?.children || [];
};


export const getProductSubCategory = (
  categoryId,
  subCategoryId
) => {
  const category = getProductCategory(categoryId);

  if (!category) return null;

  return category.children?.find(
    (child) => child.id === subCategoryId
  );
};


export const getNestedSubCategories = (
  categoryId,
  subCategoryId
) => {
  const subCategory = getProductSubCategory(
    categoryId,
    subCategoryId
  );

  return subCategory?.children || [];
};


export default PRODUCT_TAXONOMY;