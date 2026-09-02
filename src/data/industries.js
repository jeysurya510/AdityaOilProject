// src/data/industries.js

/*
  ADITYA LIQUIDTOOLS
  PRODUCT BY INDUSTRY

  Flow:
  Industry
      ↓
  Application
      ↓
  Recommended Products

  Industry view should stay lightweight:
  Product Name + Image + Application

  Full technical product details remain in the
  main Products section.
*/

// export const INDUSTRIES = [

//   // =====================================================
//   // 1. AUTOMOTIVE INDUSTRY
//   // =====================================================

//   {
//     id: 'automotive',
//     name: 'Automotive Industry',
//     icon: '🚗',

//     applications: [
//       {
//         id: 'automotive-hydraulic',
//         name: 'Hydraulic Systems',
//         productIds: [
//           'hyd-01',
//           'hyd-02',
//           'hyd-03',
//         ],
//       },

//       {
//         id: 'automotive-machinery',
//         name: 'Workshop & Machinery',
//         productIds: [
//           'ind-03',
//         ],
//       },

//       {
//         id: 'automotive-compressor',
//         name: 'Compressors',
//         productIds: [
//           'ref-02',
//         ],
//       },

//       {
//         id: 'automotive-pneumatic',
//         name: 'Pneumatic Tools',
//         productIds: [
//           'spec-01',
//         ],
//       },

//       {
//         id: 'automotive-bearings',
//         name: 'Bearings & General Lubrication',
//         productIds: [
//           'ind-03',
//           'grease-01',
//         ],
//       },
//     ],
//   },


//   // =====================================================
//   // 2. CEMENT INDUSTRY
//   // =====================================================

//   {
//     id: 'cement',
//     name: 'Cement Industry',
//     icon: '🏭',

//     applications: [
//       {
//         id: 'cement-gearbox',
//         name: 'Industrial Gearboxes',
//         productIds: [
//           'ind-02',
//         ],
//       },

//       {
//         id: 'cement-hydraulic',
//         name: 'Hydraulic Systems',
//         productIds: [
//           'hyd-01',
//           'hyd-02',
//           'hyd-03',
//         ],
//       },

//       {
//         id: 'cement-machinery',
//         name: 'Heavy Machinery',
//         productIds: [
//           'ind-03',
//           'grease-02',
//         ],
//       },

//       {
//         id: 'cement-bearings',
//         name: 'Bearings & Circulating Systems',
//         productIds: [
//           'ind-03',
//           'grease-01',
//           'grease-02',
//         ],
//       },
//     ],
//   },


//   // =====================================================
//   // 3. TEXTILE INDUSTRY
//   // =====================================================

//   {
//     id: 'textile',
//     name: 'Textile Industry',
//     icon: '🧵',

//     applications: [
//       {
//         id: 'textile-spinning',
//         name: 'Spinning Machines',
//         productIds: [
//           'ind-04',
//           'spec-02',
//         ],
//       },

//       {
//         id: 'textile-weaving',
//         name: 'Weaving Equipment',
//         productIds: [
//           'spec-02',
//         ],
//       },

//       {
//         id: 'textile-knitting',
//         name: 'Knitting Machines',
//         productIds: [
//           'spec-02',
//         ],
//       },

//       {
//         id: 'textile-cnc',
//         name: 'Precision Machinery',
//         productIds: [
//           'ind-04',
//           'ind-03',
//         ],
//       },
//     ],
//   },


//   // =====================================================
//   // 4. FOOD & PHARMA INDUSTRY
//   // =====================================================

//   {
//     id: 'food-pharma',
//     name: 'Food & Pharma Industry',
//     icon: '🧪',

//     applications: [
//       {
//         id: 'food-pharma-machinery',
//         name: 'Processing Machinery',
//         productIds: [
//           'ind-03',
//         ],
//       },

//       {
//         id: 'food-pharma-conveyor',
//         name: 'Conveyors & Material Handling',
//         productIds: [
//           'ind-03',
//           'grease-01',
//         ],
//       },

//       {
//         id: 'food-pharma-heating',
//         name: 'Industrial Heating Systems',
//         productIds: [
//           'spec-03',
//         ],
//       },

//       {
//         id: 'food-pharma-compressor',
//         name: 'Compressors & Utilities',
//         productIds: [
//           'ref-02',
//           'ref-03',
//         ],
//       },
//     ],
//   },


//   // =====================================================
//   // 5. ENGINEERING INDUSTRY
//   // =====================================================

//   {
//     id: 'engineering',
//     name: 'Engineering Industry',
//     icon: '⚙️',

//     applications: [
//       {
//         id: 'engineering-cnc',
//         name: 'CNC Machines',
//         productIds: [
//           'ind-01',
//           'ind-04',
//         ],
//       },

//       {
//         id: 'engineering-machine-tools',
//         name: 'Machine Tools',
//         productIds: [
//           'ind-01',
//           'ind-03',
//         ],
//       },

//       {
//         id: 'engineering-hydraulic',
//         name: 'Hydraulic Systems',
//         productIds: [
//           'hyd-01',
//           'hyd-02',
//           'hyd-03',
//         ],
//       },

//       {
//         id: 'engineering-gearbox',
//         name: 'Industrial Gearboxes',
//         productIds: [
//           'ind-02',
//         ],
//       },

//       {
//         id: 'engineering-bearings',
//         name: 'Bearings & Machinery',
//         productIds: [
//           'ind-03',
//           'grease-01',
//           'grease-02',
//         ],
//       },
//     ],
//   },


//   // =====================================================
//   // 6. CONSTRUCTION INDUSTRY
//   // =====================================================

//   {
//     id: 'construction',
//     name: 'Construction Industry',
//     icon: '🏗️',

//     applications: [
//       {
//         id: 'construction-heavy',
//         name: 'Heavy Equipment',
//         productIds: [
//           'ind-03',
//           'grease-02',
//         ],
//       },

//       {
//         id: 'construction-hydraulic',
//         name: 'Hydraulic Equipment',
//         productIds: [
//           'hyd-01',
//           'hyd-02',
//           'hyd-03',
//         ],
//       },

//       {
//         id: 'construction-mobile',
//         name: 'Mobile Machinery',
//         productIds: [
//           'hyd-03',
//           'grease-01',
//           'grease-02',
//         ],
//       },

//       {
//         id: 'construction-bearings',
//         name: 'Bearings & General Lubrication',
//         productIds: [
//           'ind-03',
//           'grease-01',
//           'grease-02',
//         ],
//       },
//     ],
//   },


//   // =====================================================
//   // 7. STEEL INDUSTRY
//   // =====================================================

//   {
//     id: 'steel',
//     name: 'Steel Industry',
//     icon: '🏭',

//     applications: [
//       {
//         id: 'steel-mills',
//         name: 'Steel Mill Machinery',
//         productIds: [
//           'ind-03',
//           'grease-02',
//         ],
//       },

//       {
//         id: 'steel-gearbox',
//         name: 'Industrial Gearboxes',
//         productIds: [
//           'ind-02',
//         ],
//       },

//       {
//         id: 'steel-hydraulic',
//         name: 'Hydraulic Systems',
//         productIds: [
//           'hyd-01',
//           'hyd-02',
//           'hyd-03',
//         ],
//       },

//       {
//         id: 'steel-bearings',
//         name: 'Bearings & Circulating Systems',
//         productIds: [
//           'ind-03',
//           'grease-01',
//           'grease-02',
//         ],
//       },

//       {
//         id: 'steel-heavy',
//         name: 'Heavy Equipment',
//         productIds: [
//           'ind-03',
//           'grease-02',
//         ],
//       },
//     ],
//   },


//   // =====================================================
//   // 8. AGRICULTURE INDUSTRY
//   // =====================================================

//   {
//     id: 'agriculture',
//     name: 'Agriculture Industry',
//     icon: '🌾',

//     applications: [
//       {
//         id: 'agriculture-hydraulic',
//         name: 'Hydraulic Equipment',
//         productIds: [
//           'hyd-01',
//           'hyd-02',
//           'hyd-03',
//         ],
//       },

//       {
//         id: 'agriculture-machinery',
//         name: 'Agricultural Machinery',
//         productIds: [
//           'ind-03',
//           'grease-01',
//         ],
//       },

//       {
//         id: 'agriculture-bearings',
//         name: 'Bearings & General Lubrication',
//         productIds: [
//           'ind-03',
//           'grease-01',
//           'grease-02',
//         ],
//       },

//       {
//         id: 'agriculture-pneumatic',
//         name: 'Pneumatic Equipment',
//         productIds: [
//           'spec-01',
//         ],
//       },
//     ],
//   },


//   // =====================================================
//   // 9. RUBBER INDUSTRY
//   // =====================================================

//   {
//     id: 'rubber',
//     name: 'Rubber Industry',
//     icon: '⚫',

//     applications: [
//       {
//         id: 'rubber-machinery',
//         name: 'Rubber Processing Machinery',
//         productIds: [
//           'ind-03',
//         ],
//       },

//       {
//         id: 'rubber-hydraulic',
//         name: 'Hydraulic Systems',
//         productIds: [
//           'hyd-01',
//           'hyd-02',
//           'hyd-03',
//         ],
//       },

//       {
//         id: 'rubber-gearbox',
//         name: 'Industrial Gearboxes',
//         productIds: [
//           'ind-02',
//         ],
//       },

//       {
//         id: 'rubber-bearings',
//         name: 'Bearings & General Machinery',
//         productIds: [
//           'ind-03',
//           'grease-01',
//           'grease-02',
//         ],
//       },

//       {
//         id: 'rubber-compressor',
//         name: 'Compressors',
//         productIds: [
//           'ref-02',
//         ],
//       },
//     ],
//   },

// ];


// // =====================================================
// // HELPERS
// // =====================================================

// export const getIndustryById = (industryId) => {
//   return INDUSTRIES.find(
//     (industry) => industry.id === industryId
//   );
// };


// export const getIndustryApplications = (industryId) => {
//   const industry = getIndustryById(industryId);

//   return industry?.applications || [];
// };


// export const getApplicationById = (
//   industryId,
//   applicationId
// ) => {
//   const industry = getIndustryById(industryId);

//   if (!industry) return null;

//   return industry.applications.find(
//     (application) => application.id === applicationId
//   );
// };


// export const getApplicationProductIds = (
//   industryId,
//   applicationId
// ) => {
//   const application = getApplicationById(
//     industryId,
//     applicationId
//   );

//   return application?.productIds || [];
// };


// export default INDUSTRIES;


// src/data/industries.js

/*
  ADITYA LIQUIDTOOLS
  Industry → Application → Product structure
*/

export const INDUSTRIES = [

  // =====================================================
  // 1. AUTOMOTIVE
  // =====================================================

  {
    id: 'automotive',
    name: 'Automotive',
    icon: '🚗',
    description:
      'Lubrication solutions for automotive workshops, equipment and related industrial applications.',

    applications: [

      {
        id: 'engine-powertrain',
        name: 'Engine & Powertrain',
        description:
          'Lubrication support for automotive powertrain-related equipment.',
        productIds: [
          'ind-03',
          'grease-01',
        ],
      },

      {
        id: 'transmission-gear',
        name: 'Transmission & Gear Systems',
        description:
          'Lubrication for transmission and gear-related systems.',
        productIds: [
          'ind-02',
        ],
      },

      {
        id: 'automotive-workshop',
        name: 'Automotive Workshop',
        description:
          'Maintenance lubrication for workshop tools and equipment.',
        productIds: [
          'spec-01',
        ],
      },

      {
        id: 'automotive-bearings',
        name: 'Bearings & General Lubrication',
        description:
          'General lubrication for bearings and workshop equipment.',
        productIds: [
          'grease-01',
          'ind-03',
        ],
      },

      {
        id: 'heavy-vehicle',
        name: 'Heavy Vehicle & Equipment',
        description:
          'Lubrication support for heavy-duty equipment and machinery.',
        productIds: [
          'hyd-03',
          'grease-02',
        ],
      },

    ],
  },


  // =====================================================
  // 2. CEMENT
  // =====================================================

  {
    id: 'cement',
    name: 'Cement',
    icon: '🏭',
    description:
      'Lubrication solutions for cement plants, heavy equipment and plant machinery.',

    applications: [

      {
        id: 'cement-hydraulic',
        name: 'Hydraulic Systems',
        description:
          'Hydraulic lubrication for cement plant equipment.',
        productIds: [
          'hyd-01',
          'hyd-02',
          'hyd-03',
        ],
      },

      {
        id: 'cement-gearboxes',
        name: 'Industrial Gearboxes',
        description:
          'EP lubrication for industrial gearboxes and drive systems.',
        productIds: [
          'ind-02',
        ],
      },

      {
        id: 'cement-bearings',
        name: 'Bearings & Circulating Systems',
        description:
          'Lubrication for bearings and circulating oil systems.',
        productIds: [
          'ind-03',
          'hyd-01',
        ],
      },

      {
        id: 'cement-heavy-equipment',
        name: 'Heavy Equipment',
        description:
          'Heavy-duty lubrication for plant equipment.',
        productIds: [
          'hyd-03',
          'grease-02',
        ],
      },

      {
        id: 'cement-plant-machinery',
        name: 'Plant Machinery',
        description:
          'General machinery lubrication for cement plants.',
        productIds: [
          'ind-03',
          'hyd-01',
        ],
      },

    ],
  },


  // =====================================================
  // 3. TEXTILE
  // =====================================================

  {
    id: 'textile',
    name: 'Textile',
    icon: '🧵',
    description:
      'Specialized lubrication solutions for textile machinery and high-speed equipment.',

    applications: [

      {
        id: 'textile-spinning',
        name: 'Spinning Machinery',
        description:
          'Lubrication solutions for spinning machinery.',
        productIds: [
          'spec-02',
          'ind-04',
        ],
      },

      {
        id: 'textile-weaving',
        name: 'Weaving Machinery',
        description:
          'Lubrication support for weaving equipment.',
        productIds: [
          'spec-02',
        ],
      },

      {
        id: 'textile-knitting',
        name: 'Knitting Machinery',
        description:
          'Lubrication solutions for knitting machinery.',
        productIds: [
          'spec-02',
        ],
      },

      {
        id: 'textile-spindles',
        name: 'High-Speed Spindles',
        description:
          'High-speed spindle lubrication for precision textile machinery.',
        productIds: [
          'ind-04',
        ],
      },

      {
        id: 'textile-general',
        name: 'General Textile Machinery',
        description:
          'General lubrication for textile machinery.',
        productIds: [
          'spec-02',
          'ind-03',
        ],
      },

    ],
  },


  // =====================================================
  // 4. FOOD & PHARMA
  // =====================================================

  {
    id: 'food-pharma',
    name: 'Food & Pharma',
    icon: '🧪',
    description:
      'Lubrication and thermal solutions for food, pharmaceutical and processing environments.',

    applications: [

      {
        id: 'food-processing',
        name: 'Processing Machinery',
        description:
          'Lubrication support for processing machinery.',
        productIds: [
          'ind-03',
        ],
      },

      {
        id: 'food-conveyors',
        name: 'Conveyors & Material Handling',
        description:
          'Lubrication for conveyors and material handling equipment.',
        productIds: [
          'grease-01',
          'ind-03',
        ],
      },

      {
        id: 'food-heating',
        name: 'Industrial Heating Systems',
        description:
          'Thermal fluid solutions for industrial heating systems.',
        productIds: [
          'spec-03',
        ],
      },

      {
        id: 'food-compressors',
        name: 'Compressors & Utilities',
        description:
          'Lubrication solutions for compressors and utility equipment.',
        productIds: [
          'ref-02',
          'ref-03',
        ],
      },

    ],
  },


  // =====================================================
  // 5. ENGINEERING
  // =====================================================

  {
    id: 'engineering',
    name: 'Engineering',
    icon: '⚙️',
    description:
      'Industrial lubrication solutions for machine tools, CNC equipment and engineering machinery.',

    applications: [

      {
        id: 'engineering-cnc',
        name: 'CNC Machines',
        description:
          'Lubrication solutions for CNC and precision equipment.',
        productIds: [
          'ind-01',
          'ind-04',
        ],
      },

      {
        id: 'engineering-machine-tools',
        name: 'Machine Tools',
        description:
          'Slideway and machinery lubrication for machine tools.',
        productIds: [
          'ind-01',
        ],
      },

      {
        id: 'engineering-hydraulic',
        name: 'Hydraulic Systems',
        description:
          'Hydraulic oils for engineering equipment.',
        productIds: [
          'hyd-01',
          'hyd-02',
          'hyd-03',
        ],
      },

      {
        id: 'engineering-gearboxes',
        name: 'Industrial Gearboxes',
        description:
          'Industrial gear lubrication for drive systems.',
        productIds: [
          'ind-02',
        ],
      },

      {
        id: 'engineering-bearings',
        name: 'Bearings & Machinery',
        description:
          'General machinery and bearing lubrication.',
        productIds: [
          'ind-03',
          'grease-01',
        ],
      },

    ],
  },


  // =====================================================
  // 6. CONSTRUCTION
  // =====================================================

  {
    id: 'construction',
    name: 'Construction',
    icon: '🏗️',
    description:
      'Heavy-duty lubrication solutions for construction equipment and mobile machinery.',

    applications: [

      {
        id: 'construction-heavy',
        name: 'Heavy Equipment',
        description:
          'Lubrication for heavy-duty construction equipment.',
        productIds: [
          'hyd-03',
          'grease-02',
        ],
      },

      {
        id: 'construction-hydraulic',
        name: 'Hydraulic Equipment',
        description:
          'Hydraulic lubrication for construction machinery.',
        productIds: [
          'hyd-02',
          'hyd-03',
        ],
      },

      {
        id: 'construction-mobile',
        name: 'Mobile Machinery',
        description:
          'Lubrication for mobile construction machinery.',
        productIds: [
          'hyd-03',
          'grease-02',
        ],
      },

      {
        id: 'construction-bearings',
        name: 'Bearings & General Lubrication',
        description:
          'General lubrication for bearings and equipment.',
        productIds: [
          'grease-01',
          'ind-03',
        ],
      },

    ],
  },


  // =====================================================
  // 7. STEEL
  // =====================================================

  {
    id: 'steel',
    name: 'Steel',
    icon: '🔩',
    description:
      'Industrial lubrication solutions for steel mills, heavy machinery and production equipment.',

    applications: [

      {
        id: 'steel-mill',
        name: 'Steel Mill Machinery',
        description:
          'Lubrication for steel mill machinery and production equipment.',
        productIds: [
          'ind-02',
          'ind-03',
          'grease-02',
        ],
      },

      {
        id: 'steel-gearboxes',
        name: 'Industrial Gearboxes',
        description:
          'EP gear lubrication for steel plant drive systems.',
        productIds: [
          'ind-02',
        ],
      },

      {
        id: 'steel-hydraulic',
        name: 'Hydraulic Systems',
        description:
          'Hydraulic oils for steel plant equipment.',
        productIds: [
          'hyd-02',
          'hyd-03',
        ],
      },

      {
        id: 'steel-bearings',
        name: 'Bearings & Circulating Systems',
        description:
          'Lubrication for bearings and circulating systems.',
        productIds: [
          'ind-03',
          'hyd-01',
        ],
      },

      {
        id: 'steel-heavy',
        name: 'Heavy Equipment',
        description:
          'Heavy-duty lubrication for steel plant equipment.',
        productIds: [
          'grease-02',
          'hyd-03',
        ],
      },

    ],
  },


  // =====================================================
  // 8. AGRICULTURE
  // =====================================================

  {
    id: 'agriculture',
    name: 'Agriculture',
    icon: '🌾',
    description:
      'Lubrication solutions for agricultural machinery, hydraulic systems and equipment.',

    applications: [

      {
        id: 'agriculture-tractors',
        name: 'Tractors & Agricultural Equipment',
        description:
          'Lubrication support for agricultural equipment.',
        productIds: [
          'hyd-03',
          'grease-02',
        ],
      },

      {
        id: 'agriculture-hydraulic',
        name: 'Hydraulic Systems',
        description:
          'Hydraulic lubrication for agricultural machinery.',
        productIds: [
          'hyd-01',
          'hyd-03',
        ],
      },

      {
        id: 'agriculture-bearings',
        name: 'Bearings & General Lubrication',
        description:
          'General lubrication for bearings and agricultural equipment.',
        productIds: [
          'grease-01',
          'ind-03',
        ],
      },

      {
        id: 'agriculture-pumps',
        name: 'Pumps & Implements',
        description:
          'Lubrication support for pumps and agricultural implements.',
        productIds: [
          'hyd-01',
          'ind-03',
        ],
      },

      {
        id: 'agriculture-machinery',
        name: 'General Machinery',
        description:
          'General machinery lubrication for agricultural operations.',
        productIds: [
          'ind-03',
          'grease-01',
        ],
      },

    ],
  },


  // =====================================================
  // 9. RUBBER
  // =====================================================

  {
    id: 'rubber',
    name: 'Rubber',
    icon: '⚫',
    description:
      'Lubrication solutions for rubber processing machinery and industrial equipment.',

    applications: [

      {
        id: 'rubber-processing',
        name: 'Mixing & Processing Machinery',
        description:
          'Machinery lubrication for rubber processing equipment.',
        productIds: [
          'ind-03',
        ],
      },

      {
        id: 'rubber-hydraulic',
        name: 'Hydraulic Systems',
        description:
          'Hydraulic lubrication for rubber processing machinery.',
        productIds: [
          'hyd-02',
          'hyd-03',
        ],
      },

      {
        id: 'rubber-gearboxes',
        name: 'Industrial Gearboxes',
        description:
          'Gear lubrication for rubber processing equipment.',
        productIds: [
          'ind-02',
        ],
      },

      {
        id: 'rubber-bearings',
        name: 'Bearings & General Lubrication',
        description:
          'General lubrication for bearings and machinery.',
        productIds: [
          'grease-01',
          'ind-03',
        ],
      },

      {
        id: 'rubber-heating',
        name: 'Heating Systems',
        description:
          'Heat transfer solutions for rubber processing systems.',
        productIds: [
          'spec-03',
        ],
      },

    ],
  },

];


// =====================================================
// HELPERS
// =====================================================

export const getIndustryById = (industryId) => {
  return INDUSTRIES.find(
    (industry) => industry.id === industryId
  );
};


export const getIndustryApplications = (industryId) => {
  const industry =
    getIndustryById(industryId);

  return industry?.applications || [];
};


export const getApplicationById = (
  industryId,
  applicationId
) => {
  const industry =
    getIndustryById(industryId);

  return (
    industry?.applications?.find(
      (application) =>
        application.id === applicationId
    ) || null
  );
};


export default INDUSTRIES;