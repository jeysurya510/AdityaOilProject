// src/data/companyInfo.js

// ============================================================
// ADITYA LIQUIDTOOLS
// COMPANY INFORMATION
// ============================================================

export const COMPANY = {
  // ----------------------------------------------------------
  // BASIC COMPANY INFORMATION
  // ----------------------------------------------------------

  name: 'Aditya Liquidtools India Private Limited',

  shortName: 'ADITYA LIQUIDTOOLS',

  tagline: 'Authorized Dealer of Industrial Lubricants',

  description:
    'We supply high-quality industrial lubricants from trusted brands, ensuring reliable products, timely delivery, and excellent customer support for industrial and commercial applications.',

  founded: '2025',

  yearsOfExcellence: '2+',

  // ----------------------------------------------------------
  // LEGAL INFORMATION
  // ----------------------------------------------------------

  cin: 'U46610TN2025PTC182178',

  gst: '33ABDCA2811Q1ZO',

  pan: 'ABDCA2811Q',

  entityType: 'Private Limited Company',

  roc: 'ROC - Chennai',

  status: 'Active',

  // ----------------------------------------------------------
  // REGISTERED ADDRESS
  // ----------------------------------------------------------

  registeredAddress:
    'P1. No. 15, 6th Street, Sri Devi Nagar, Kattupakkam, Tiruvallur, Poonamallee, Tamil Nadu, India, 600056',

  address: {
    line1: 'P1. No. 15, 6th Street',
    line2: 'Sri Devi Nagar, Kattupakkam',
    line3: 'Tiruvallur, Poonamallee',
    city: 'Tamil Nadu',
    state: 'Tamil Nadu',
    country: 'India',
    pincode: '600056',
  },

  // ----------------------------------------------------------
  // PHONE / WHATSAPP
  // ----------------------------------------------------------

  phone: '+91 98408 95637',

  mobile: '+91 98408 95637',

  whatsapp: '+91 98408 95637',

  whatsappUrl: 'https://wa.me/919840895637',

  // ----------------------------------------------------------
  // EMAIL ACCOUNTS
  //
  // Confirmed active Hostinger mailboxes:
  // admin@
  // info@
  // md@
  // sales@
  // support@
  // ----------------------------------------------------------

  email: 'info@aadiyaliquidtools.com',

  adminEmail: 'admin@aadiyaliquidtools.com',

  salesEmail: 'sales@aadiyaliquidtools.com',

  infoEmail: 'info@aadiyaliquidtools.com',

  mdEmail: 'md@aadiyaliquidtools.com',

  supportEmail: 'support@aadiyaliquidtools.com',

  emails: {
    admin: 'admin@aadiyaliquidtools.com',
    info: 'info@aadiyaliquidtools.com',
    md: 'md@aadiyaliquidtools.com',
    sales: 'sales@aadiyaliquidtools.com',
    support: 'support@aadiyaliquidtools.com',
  },

  // ----------------------------------------------------------
  // SOCIAL / CONTACT LINKS
  // ----------------------------------------------------------

  social: {
    whatsapp: 'https://wa.me/919840895637',

    call: 'tel:+919840895637',

    email: 'mailto:info@aadiyaliquidtools.com',

    facebook: '#',

    instagram: '#',

    linkedin: '#',

    youtube: '#',

    twitter: '#',
  },

  // ----------------------------------------------------------
  // BUSINESS HOURS
  // ----------------------------------------------------------

  hours: {
    weekdays: '9:00 AM - 6:00 PM',

    saturday: '9:00 AM - 2:00 PM',

    sunday: 'Emergency Support Only',
  },

  // ----------------------------------------------------------
  // PUBLIC CONTACT LABELS
  // ----------------------------------------------------------

  contactDepartments: [
    {
      key: 'sales',
      label: 'Sales Enquiries',
      email: 'sales@aadiyaliquidtools.com',
      phone: '+91 98408 95637',
    },

    {
      key: 'support',
      label: 'Customer Support',
      email: 'support@aadiyaliquidtools.com',
      phone: '+91 98408 95637',
    },

    {
      key: 'admin',
      label: 'Admin Enquiries',
      email: 'admin@aadiyaliquidtools.com',
    },

    {
      key: 'md',
      label: 'Management',
      email: 'md@aadiyaliquidtools.com',
    },

    {
      key: 'info',
      label: 'General Enquiries',
      email: 'info@aadiyaliquidtools.com',
    },
  ],

  // ----------------------------------------------------------
  // CERTIFICATIONS
  //
  // Keep empty until the client provides verified certificates.
  // Do NOT show unverified ISO/BIS/OEM claims on the website.
  // ----------------------------------------------------------

  certifications: [],

  // ----------------------------------------------------------
  // SERVICE AREAS
  // ----------------------------------------------------------

  serviceAreas: [
    'Tamil Nadu',
    'Chennai',
    'Tiruvallur',
    'Poonamallee',
    'Kattupakkam',
  ],
};


// ============================================================
// PUBLIC PRODUCT FAMILIES
// ============================================================

export const PRODUCT_FAMILIES = [
  {
    id: 'industrial-lubricants',
    name: 'Industrial Lubricants',
    shortName: 'Industrial Lubricants',
    description:
      'Lubrication solutions for hydraulic systems, machinery, gears, compressors, turbines and industrial equipment.',
  },

  {
    id: 'metal-working-fluids',
    name: 'Metal Working Fluids',
    shortName: 'Metal Working Fluids',
    description:
      'Solutions for metal removal, metal forming, metal protection and metal treatment applications.',
  },

  {
    id: 'specialty-lubricants',
    name: 'Specialty Lubricants',
    shortName: 'Specialty Lubricants',
    description:
      'Specialized lubrication solutions for pneumatic tools, textile machinery and heat transfer applications.',
  },

  {
    id: 'specialty-oils',
    name: 'Specialty Oils',
    shortName: 'Specialty Oils',
    description:
      'Specialty oil solutions including transformer oils, white mineral oils and petroleum jelly applications.',
  },
];


// ============================================================
// COMPANY PRODUCTS
// ============================================================

export const COMPANY_PRODUCTS = [

  // ----------------------------------------------------------
  // INDUSTRIAL LUBRICANTS
  // ----------------------------------------------------------

  {
    id: 'hyd-01',
    name: 'Hydraulic Oil HL Series',
    category: 'hydraulic',
    subCategory: 'Hydraulic Oils',
    family: 'industrial-lubricants',

    grade: 'HL 10 to HL 460',

    image: '💧',

    description:
      'Hydraulic oil for industrial hydraulic and circulating systems.',

    fullDescription:
      'VENLUB HYDROL HL Series hydraulic oils are designed for reliable lubrication and protection in hydraulic and circulating systems.',

    specifications: {
      Type: 'HL Series',
      Grades: 'HL 10, HL 22, HL 32, HL 46, HL 68, HL 100, HL 150, HL 220, HL 320, HL 460',
      Application: 'Hydraulic Systems',
      'Base Oil': 'Hydrotreated Paraffinic',
      'Viscosity Index': 'High',
      'Flash Point': '>200°C',
    },

    applications: [
      'Hydraulic Systems',
      'Circulating Systems',
      'Industrial Machinery',
      'Pumps',
      'Valves',
    ],

    isNew: true,
    featured: true,
  },


  {
    id: 'hyd-02',
    name: 'Hydraulic Oil HLP Series',
    category: 'hydraulic',
    subCategory: 'Hydraulic Oils',
    family: 'industrial-lubricants',

    grade: 'HLP 10 to HLP 320',

    image: '⚙️',

    description:
      'High-performance hydraulic oil for demanding hydraulic systems.',

    fullDescription:
      'VENLUB HYDROL HLP Series hydraulic oils are designed for high-pressure hydraulic systems and industrial equipment.',

    specifications: {
      Type: 'HLP',
      Grades: 'HLP 10, HLP 22, HLP 32, HLP 46, HLP 68, HLP 100, HLP 150, HLP 220, HLP 320',
      Application: 'High Pressure Systems',
      'Base Oil': 'Narrow Hydrocarbon',
      'Anti-Wear': 'Zinc-free',
      'Water Separation': 'Excellent',
    },

    applications: [
      'High Pressure Hydraulic Systems',
      'Industrial Equipment',
      'Heavy Machinery',
      'Hydraulic Presses',
    ],

    isNew: true,
    featured: true,
  },


  {
    id: 'hyd-03',
    name: 'Hydraulic Oil AW Series',
    category: 'hydraulic',
    subCategory: 'Hydraulic Oils',
    family: 'industrial-lubricants',

    grade: 'AW 32 to AW 460',

    image: '🛢️',

    description:
      'Anti-wear hydraulic oil for high-pressure and thermally demanding applications.',

    fullDescription:
      'VENLUB HYDROL AW Series hydraulic oils provide enhanced anti-wear protection and thermal stability.',

    specifications: {
      Type: 'AW',
      Grades: 'AW 32, AW 46, AW 68, AW 100, AW 150, AW 220, AW 320, AW 460',
      Application: 'High Pressure Systems',
      'Base Oil': 'Highly Refined',
      'Anti-Wear': 'Enhanced',
      'Thermal Stability': 'Excellent',
    },

    applications: [
      'High Pressure Hydraulic Systems',
      'Thermal Loading Applications',
      'Industrial Machinery',
      'Mobile Equipment',
    ],

    isNew: false,
    featured: true,
  },


  {
    id: 'ind-01',
    name: 'Slideway Lubricants',
    category: 'industrial',
    subCategory: 'Slideway Lubricants',
    family: 'industrial-lubricants',

    grade: 'ISO VG 68, 220',

    image: '🔧',

    description:
      'High-performance lubricants for machine tool slideways.',

    specifications: {
      'Viscosity Grade': 'ISO VG 68, 220',
      Application: 'Machine Tools',
      Type: 'Slideway Oil',
      'Anti-Stick-Slip': 'Excellent',
      'Oxidation Stability': 'High',
    },

    applications: [
      'CNC Machines',
      'Machine Tools',
      'Precision Equipment',
      'Industrial Slides',
    ],

    isNew: false,
    featured: false,
  },


  {
    id: 'ind-02',
    name: 'Industrial Gear Lubricants',
    category: 'industrial',
    subCategory: 'Industrial Gear Lubricants',
    family: 'industrial-lubricants',

    grade: 'EP 150, 220, 320',

    image: '⚙️',

    description:
      'EP gear oils for industrial gearboxes and heavy machinery.',

    specifications: {
      'Viscosity Grade': 'ISO VG 150, 220, 320',
      Application: 'Industrial Gearboxes',
      Type: 'EP Gear Oil',
      'Load Capacity': 'High',
      'Foam Control': 'Excellent',
    },

    applications: [
      'Industrial Gearboxes',
      'Reduction Gears',
      'Heavy Machinery',
      'Steel Mills',
    ],

    isNew: false,
    featured: false,
  },


  {
    id: 'ind-03',
    name: 'Machinery Lubricants',
    category: 'industrial',
    subCategory: 'Machinery Lubricants',
    family: 'industrial-lubricants',

    grade: 'ISO VG 32, 46, 68',

    image: '🏭',

    description:
      'General-purpose machinery oils for industrial equipment.',

    specifications: {
      'Viscosity Grade': 'ISO VG 32, 46, 68',
      Application: 'General Machinery',
      Type: 'Machinery Oil',
      'Rust Protection': 'Excellent',
      'Oxidation Stability': 'Good',
    },

    applications: [
      'General Machinery',
      'Bearings',
      'Industrial Equipment',
      'Circulating Systems',
    ],

    isNew: false,
    featured: false,
  },


  {
    id: 'ind-04',
    name: 'Spindle Lubricants',
    category: 'industrial',
    subCategory: 'Spindle Lubricants',
    family: 'industrial-lubricants',

    grade: 'ISO VG 10, 15, 22',

    image: '🔩',

    description:
      'Low-viscosity lubricants for high-speed spindle applications.',

    specifications: {
      'Viscosity Grade': 'ISO VG 10, 15, 22',
      Application: 'High-Speed Spindles',
      Type: 'Spindle Oil',
      Cooling: 'Excellent',
      'Oxidation Stability': 'High',
    },

    applications: [
      'High-Speed Spindles',
      'Precision Machinery',
      'CNC Equipment',
      'Grinding Machines',
    ],

    isNew: false,
    featured: false,
  },


  {
    id: 'ind-05',
    name: 'Turbine Lubricants',
    category: 'industrial',
    subCategory: 'Turbine Lubricants',
    family: 'industrial-lubricants',

    grade: 'ISO VG 32, 46, 68',

    image: '⚡',

    description:
      'Industrial turbine oils designed for reliable turbine lubrication.',

    specifications: {
      'Viscosity Grade': 'ISO VG 32, 46, 68',
      Application: 'Steam & Gas Turbines',
      Type: 'Turbine Oil',
      'Oxidation Stability': 'Excellent',
      'Water Separation': 'Excellent',
    },

    applications: [
      'Steam Turbines',
      'Gas Turbines',
      'Power Generation',
      'Industrial Turbines',
    ],

    isNew: false,
    featured: false,
  },


  {
    id: 'ref-01',
    name: 'Refrigeration Compressor Lubricants',
    category: 'refrigeration',
    subCategory: 'Refrigeration Compressor Lubricants',
    family: 'industrial-lubricants',

    grade: 'ISO VG 32, 46, 68',

    image: '❄️',

    description:
      'Lubricants for refrigeration compressors and industrial cooling systems.',

    specifications: {
      'Viscosity Grade': 'ISO VG 32, 46, 68',
      Application: 'Refrigeration Systems',
      Type: 'Refrigeration Oil',
      'Refrigerant Compatibility': 'Excellent',
      'Oxidation Stability': 'High',
    },

    applications: [
      'Refrigeration Systems',
      'Air Conditioning',
      'Industrial Cooling',
      'Cold Storage',
    ],

    isNew: false,
    featured: false,
  },


  {
    id: 'ref-02',
    name: 'Compressor Lubricants',
    category: 'refrigeration',
    subCategory: 'Compressor Lubricants',
    family: 'industrial-lubricants',

    grade: 'ISO VG 68, 100, 150',

    image: '🔄',

    description:
      'Specialized oils for air and industrial compressor systems.',

    specifications: {
      'Viscosity Grade': 'ISO VG 68, 100, 150',
      Application: 'Air Compressors',
      Type: 'Compressor Oil',
      'Carbon Deposit Control': 'Excellent',
      'Oxidation Stability': 'Good',
    },

    applications: [
      'Air Compressors',
      'Pneumatic Systems',
      'Industrial Equipment',
      'Gas Compressors',
    ],

    isNew: false,
    featured: false,
  },


  {
    id: 'ref-03',
    name: 'Vacuum Pump Oils',
    category: 'refrigeration',
    subCategory: 'Vacuum Pump Oils',
    family: 'industrial-lubricants',

    grade: 'ISO VG 46, 68, 100',

    image: '🫧',

    description:
      'Vacuum pump oils for industrial vacuum equipment.',

    specifications: {
      'Viscosity Grade': 'ISO VG 46, 68, 100',
      Application: 'Vacuum Pumps',
      Type: 'Vacuum Pump Oil',
      'Vapor Pressure': 'Low',
      'Oxidation Stability': 'Excellent',
    },

    applications: [
      'Vacuum Pumps',
      'Industrial Vacuum Systems',
      'Laboratory Equipment',
      'Packaging Machinery',
    ],

    isNew: false,
    featured: false,
  },


  // ----------------------------------------------------------
  // SPECIALTY LUBRICANTS
  // ----------------------------------------------------------

  {
    id: 'spec-01',
    name: 'Pneumatic Tool Lubricants',
    category: 'specialty',
    subCategory: 'Pneumatic Tool Lubricants',
    family: 'specialty-lubricants',

    grade: 'ISO VG 32, 46',

    image: '🔧',

    description:
      'Specialized lubricants for pneumatic tools and air-operated equipment.',

    specifications: {
      'Viscosity Grade': 'ISO VG 32, 46',
      Application: 'Pneumatic Tools',
      Type: 'Pneumatic Oil',
      'Rust Protection': 'Excellent',
      'Oxidation Stability': 'Good',
    },

    applications: [
      'Pneumatic Tools',
      'Air Equipment',
      'Industrial Tools',
      'Automotive Workshops',
    ],

    isNew: false,
    featured: false,
  },


  {
    id: 'spec-02',
    name: 'Textile Lubricants',
    category: 'specialty',
    subCategory: 'Textile Lubricants',
    family: 'specialty-lubricants',

    grade: 'ISO VG 22, 32, 46',

    image: '🧵',

    description:
      'Specialized lubricants for textile machinery and equipment.',

    specifications: {
      'Viscosity Grade': 'ISO VG 22, 32, 46',
      Application: 'Textile Machinery',
      Type: 'Textile Oil',
      'Machine Compatibility': 'Excellent',
      'Oxidation Stability': 'Good',
    },

    applications: [
      'Textile Machinery',
      'Spinning Machines',
      'Weaving Equipment',
      'Knitting Machines',
    ],

    isNew: false,
    featured: false,
  },


  {
    id: 'spec-03',
    name: 'Heat Transfer Oils',
    category: 'specialty',
    subCategory: 'Heat Transfer Oils',
    family: 'specialty-lubricants',

    grade: 'Mineral & Synthetic',

    image: '🔥',

    description:
      'Heat transfer fluids for industrial heating and thermal systems.',

    specifications: {
      Type: 'Mineral & Synthetic',
      Application: 'Heat Transfer Systems',
      'Temperature Range': 'Up to 300°C',
      'Thermal Stability': 'Excellent',
      'Heat Transfer Efficiency': 'High',
    },

    applications: [
      'Heat Transfer Systems',
      'Thermal Oil Heaters',
      'Industrial Heating',
      'Chemical Processing',
    ],

    isNew: false,
    featured: false,
  },


  // ----------------------------------------------------------
  // SPECIALTY OILS
  // ----------------------------------------------------------

  {
    id: 'oil-01',
    name: 'Transformer Oils',
    category: 'specialty-oils',
    subCategory: 'Transformer Oils',
    family: 'specialty-oils',

    grade: 'As per requirement',

    image: '⚡',

    description:
      'Specialty insulating oils for transformer and electrical applications.',

    specifications: {
      Type: 'Transformer Oil',
      Application: 'Electrical & Transformer Systems',
    },

    applications: [
      'Power Transformers',
      'Distribution Transformers',
      'Electrical Equipment',
    ],

    isNew: false,
    featured: false,
  },


  {
    id: 'oil-02',
    name: 'White Mineral Oils',
    category: 'specialty-oils',
    subCategory: 'White Mineral Oils',
    family: 'specialty-oils',

    grade: 'Various Grades',

    image: '🧴',

    description:
      'Highly refined white mineral oils for selected industrial and specialty applications.',

    specifications: {
      Type: 'White Mineral Oil',
      Application: 'Food, Pharma & Specialty Applications',
    },

    applications: [
      'Food & Pharma',
      'Cosmetics',
      'Personal Care',
      'Food Packaging',
      'Plastics',
      'Textile & Rubber',
    ],

    isNew: false,
    featured: true,
  },


  {
    id: 'oil-03',
    name: 'Petroleum Jelly',
    category: 'specialty-oils',
    subCategory: 'Petroleum Jelly',
    family: 'specialty-oils',

    grade: 'Various Grades',

    image: '🫙',

    description:
      'Refined petroleum jelly for selected industrial and specialty applications.',

    specifications: {
      Type: 'Petroleum Jelly',
      Application: 'Specialty Applications',
    },

    applications: [
      'Personal Care',
      'Cosmetics',
      'Pharma',
      'Petroleum Jelly Manufacturing',
    ],

    isNew: false,
    featured: false,
  },


  // ----------------------------------------------------------
  // LEGACY GREASE PRODUCTS
  // ----------------------------------------------------------

  {
    id: 'grease-01',
    name: 'Multi-Purpose Grease',
    category: 'greases',
    subCategory: 'Multi-Purpose Greases',
    family: 'specialty-lubricants',

    grade: 'NLGI #2',

    image: '🟡',

    description:
      'Lithium-based multi-purpose industrial grease.',

    specifications: {
      'NLGI Grade': '2',
      Type: 'Lithium Soap',
      'Temperature Range': '-20°C to 130°C',
      'Water Resistance': 'Excellent',
      'Mechanical Stability': 'Good',
    },

    applications: [
      'Bearings',
      'Chassis',
      'General Lubrication',
      'Agricultural Equipment',
    ],

    isNew: false,
    featured: false,
  },


  {
    id: 'grease-02',
    name: 'EP Grease',
    category: 'greases',
    subCategory: 'EP Greases',
    family: 'specialty-lubricants',

    grade: 'NLGI #2 EP',

    image: '🟠',

    description:
      'Extreme pressure grease for heavy-duty industrial applications.',

    specifications: {
      'NLGI Grade': '2 EP',
      Type: 'Extreme Pressure',
      Additive: 'Molybdenum Disulphide',
      'Load Capacity': 'High',
      'Water Resistance': 'Excellent',
    },

    applications: [
      'Construction Equipment',
      'Mining Machinery',
      'Heavy Equipment',
      'Steel Mills',
    ],

    isNew: false,
    featured: false,
  },
];


// ============================================================
// HELPERS
// ============================================================

export const getCompanyEmail = (type = 'info') => {
  return COMPANY.emails?.[type] || COMPANY.email;
};


export const getCompanyPhone = () => {
  return COMPANY.phone;
};


export const getWhatsAppUrl = () => {
  return COMPANY.whatsappUrl;
};


export const getCompanyAddress = () => {
  return COMPANY.registeredAddress;
};


export const getProductsByFamily = (familyId) => {
  return COMPANY_PRODUCTS.filter(
    (product) => product.family === familyId
  );
};


export const getProductById = (productId) => {
  return COMPANY_PRODUCTS.find(
    (product) => product.id === productId
  );
};


export const getFeaturedProducts = () => {
  return COMPANY_PRODUCTS.filter(
    (product) => product.featured
  );
};


// ============================================================
// DEFAULT EXPORT
// ============================================================

export default COMPANY;