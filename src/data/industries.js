// src/data/industries.js

/*
  INDUSTRY STRUCTURE
  Industry → Application → Product
  
  IMPORTANT:
  - Industry page = application context only.
  - Product full info stays in Products page.
  - NO PRODUCT REPEAT across applications within an industry.
  - Each application maps to UNIQUE products only.
*/

export const INDUSTRIES = [

  // =====================================================
  // 1. AGRICULTURE
  // =====================================================

  {
    id: 'agriculture',
    name: 'Agriculture',
    icon: '🌾',
    description:
      'Lubrication solutions for agricultural equipment, tractors, harvesters and farm machinery.',

    applications: [
      {
        id: 'agri-tractors',
        name: 'Tractors & Harvesters',
        description:
          'Lubrication for tractors, combine harvesters and field equipment.',
        equipment: [
          'Tractors',
          'Combine Harvesters',
          'Potato Harvesters',
        ],
        productIds: ['hyd-01', 'gear-01'],
      },
      {
        id: 'agri-engines',
        name: 'Diesel Engines & Pumps',
        description:
          'Engine and pump lubrication for agricultural machinery.',
        equipment: [
          'Diesel Engines',
          'Water Pumps',
          'Irrigation Pumps',
        ],
        productIds: ['auto-engine-01'],
      },
      {
        id: 'agri-spreaders',
        name: 'Spreaders & Cutters',
        description:
          'Lubrication for spreaders, cutters and farm processing equipment.',
        equipment: [
          'Fertilizer Spreaders',
          'Verge Cutters',
          'Crushers',
        ],
        productIds: ['grease-01'],
      },
    ],
  },


  // =====================================================
  // 2. AUTOMOBILE
  // =====================================================

  {
    id: 'automobile',
    name: 'Automobile',
    icon: '🚗',
    description:
      'Lubrication solutions for automobile manufacturing, workshops and service operations.',

    applications: [
      {
        id: 'auto-engines',
        name: 'Engine & Powertrain',
        description:
          'Engine and powertrain lubrication for automotive applications.',
        equipment: [
          'Engine Assembly',
          'Engine Testing',
          'Powertrain Systems',
        ],
        productIds: ['auto-engine-01'],
      },
      {
        id: 'auto-transmission',
        name: 'Transmission & Gear Systems',
        description:
          'Lubrication for automotive gearboxes and transmission systems.',
        equipment: [
          'Gearboxes',
          'Transmission Systems',
          'Drive Axles',
        ],
        productIds: ['auto-gear-01', 'auto-trans-01'],
      },
      {
        id: 'auto-machining',
        name: 'Metal Machining',
        description:
          'Cutting fluids for automotive component machining.',
        equipment: [
          'CNC Machines',
          'Cutting Operations',
          'Component Machining',
        ],
        productIds: ['neat-01', 'soluble-01'],
      },
    ],
  },


  // =====================================================
  // 3. ENGINEERING
  // =====================================================

  {
    id: 'engineering',
    name: 'Engineering',
    icon: '⚙️',
    description:
      'Lubrication solutions for engineering, metal processing and manufacturing industries.',

    applications: [
      {
        id: 'eng-drawing',
        name: 'Wire & Tube Drawing',
        description:
          'Drawing lubricants for wire, tube and profile drawing operations.',
        equipment: [
          'Wire Drawing Machines',
          'Tube Drawing Machines',
          'Profile Drawing',
        ],
        productIds: ['draw-01'],
      },
      {
        id: 'eng-forging',
        name: 'Forging & Rolling',
        description:
          'Lubricants for forging, rolling and metal forming processes.',
        equipment: [
          'Cold & Warm Forging',
          'Hot & Cold Rolling',
          'Fine Blanking',
        ],
        productIds: ['quench-01'],
      },
      {
        id: 'eng-machining',
        name: 'Machining Operations',
        description:
          'Cutting fluids for machining, threading and finishing operations.',
        equipment: [
          'Nuts & Bolts',
          'Cold Heading',
          'CNC Machines',
        ],
        productIds: ['neat-01', 'soluble-01'],
      },
    ],
  },


  // =====================================================
  // 4. CEMENT
  // =====================================================

  {
    id: 'cement',
    name: 'Cement',
    icon: '🏭',
    description:
      'Lubrication solutions for cement plants, kilns, mills and heavy equipment.',

    applications: [
      {
        id: 'cement-gear',
        name: 'Open Gear & Roller Press',
        description:
          'Lubrication for open gears, roller presses and kiln drives.',
        equipment: [
          'Open Gear Drives',
          'Roller Press Bearings',
          'Kiln Drives',
        ],
        productIds: ['gear-01'],
      },
      {
        id: 'cement-hydraulic',
        name: 'Hydraulic Systems',
        description:
          'Hydraulic lubrication for cement plant machinery.',
        equipment: [
          'Hydraulic Equipment',
          'Plant Machinery',
          'Crushing Systems',
        ],
        productIds: ['hyd-01'],
      },
      {
        id: 'cement-compressor',
        name: 'Compressors & Utilities',
        description:
          'Compressor and utility equipment lubrication.',
        equipment: [
          'Air Compressors',
          'Utility Equipment',
        ],
        productIds: ['comp-01'],
      },
    ],
  },


  // =====================================================
  // 5. TEXTILE
  // =====================================================

  {
    id: 'textile',
    name: 'Textile',
    icon: '🧵',
    description:
      'Specialized lubrication solutions for textile machinery, spinning and weaving operations.',

    applications: [
      {
        id: 'textile-spinning',
        name: 'Spinning & Knitting',
        description:
          'Lubrication for spinning units and knitting machines.',
        equipment: [
          'Spinning Units',
          'Knitting Machines',
        ],
        productIds: ['spindle-01'],
      },
      {
        id: 'textile-weaving',
        name: 'Looms & Weaving',
        description:
          'Lubrication for looms and weaving machinery.',
        equipment: [
          'Looms',
          'Weaving Machines',
        ],
        productIds: ['machine-01'],
      },
      {
        id: 'textile-finishing',
        name: 'Finishing Machines',
        description:
          'Lubrication for textile finishing and processing machines.',
        equipment: [
          'Finishing Machines',
          'Textile Processing',
        ],
        productIds: ['grease-01'],
      },
    ],
  },


  // =====================================================
  // 6. FOOD & PHARMA
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
          'Lubrication for food and pharma processing machinery.',
        equipment: [
          'Processing Equipment',
          'Mixing Machines',
          'Packaging Lines',
        ],
        productIds: ['machine-01'],
      },
      {
        id: 'food-conveyors',
        name: 'Conveyors & Handling',
        description:
          'Lubrication for conveyors and material handling equipment.',
        equipment: [
          'Conveyors',
          'Material Handling',
        ],
        productIds: ['grease-01'],
      },
      {
        id: 'food-heating',
        name: 'Heating Systems',
        description:
          'Thermal fluid solutions for industrial heating systems.',
        equipment: [
          'Industrial Heating',
          'Thermal Systems',
        ],
        productIds: ['thermic-01'],
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
      'Lubrication solutions for steel mills, rolling mills and heavy machinery.',

    applications: [
      {
        id: 'steel-raw',
        name: 'Raw Material Handling',
        description:
          'Lubrication for raw material handling and conveyor systems.',
        equipment: [
          'Material Handling',
          'Conveyors',
          'Cranes',
        ],
        productIds: ['grease-01'],
      },
      {
        id: 'steel-sinter',
        name: 'Sinter & Blast Furnace',
        description:
          'High-temperature lubrication for sinter and blast furnace equipment.',
        equipment: [
          'Sinter Installations',
          'Blast Furnace',
        ],
        productIds: ['gear-01'],
      },
      {
        id: 'steel-rolling',
        name: 'Rolling & Casting',
        description:
          'Lubrication for rolling mills and continuous casting.',
        equipment: [
          'Continuous Roller Casting',
          'Cold Rolling',
        ],
        productIds: ['machine-01'],
      },
    ],
  },


  // =====================================================
  // 8. RUBBER
  // =====================================================

  {
    id: 'rubber',
    name: 'Rubber',
    icon: '⚫',
    description:
      'Lubrication solutions for rubber processing machinery and equipment.',

    applications: [
      {
        id: 'rubber-mixing',
        name: 'Mixing & Processing',
        description:
          'Lubrication for rubber mixing and processing machinery.',
        equipment: [
          'Mixing Machinery',
          'Processing Equipment',
        ],
        productIds: ['machine-01'],
      },
      {
        id: 'rubber-hydraulic',
        name: 'Hydraulic Systems',
        description:
          'Hydraulic lubrication for rubber processing machinery.',
        equipment: [
          'Hydraulic Equipment',
          'Press Machinery',
        ],
        productIds: ['hyd-01'],
      },
      {
        id: 'rubber-heating',
        name: 'Heating Systems',
        description:
          'Thermal fluid solutions for rubber processing systems.',
        equipment: [
          'Heating Systems',
          'Thermal Processing',
        ],
        productIds: ['thermic-01'],
      },
    ],
  },


  // =====================================================
  // 9. CONSTRUCTION
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
          'Lubrication for heavy construction equipment and machinery.',
        equipment: [
          'Heavy Machinery',
          'Construction Equipment',
          'Excavators',
        ],
        productIds: ['grease-01'],
      },
      {
        id: 'construction-hydraulic',
        name: 'Hydraulic Equipment',
        description:
          'Hydraulic oils for construction and mobile equipment.',
        equipment: [
          'Hydraulic Machinery',
          'Mobile Equipment',
        ],
        productIds: ['hyd-01'],
      },
      {
        id: 'construction-bearings',
        name: 'Bearings & General Lubrication',
        description:
          'General lubrication for bearings and construction machinery.',
        equipment: [
          'Bearings',
          'General Lubrication',
        ],
        productIds: ['machine-01'],
      },
    ],
  },

];


// =====================================================
// HELPERS
// =====================================================

export const getIndustryById = (industryId) => {
  return INDUSTRIES.find((industry) => industry.id === industryId);
};

export const getIndustryApplications = (industryId) => {
  const industry = getIndustryById(industryId);
  return industry?.applications || [];
};

export const getApplicationById = (industryId, applicationId) => {
  const industry = getIndustryById(industryId);
  return industry?.applications?.find((a) => a.id === applicationId) || null;
};

export default INDUSTRIES;