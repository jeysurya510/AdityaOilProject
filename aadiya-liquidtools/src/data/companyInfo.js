// src/config/companyConfig.js
export const COMPANY = {
  // Basic Info
  name: 'Aadiya Liquidtools India Private Limited',
  shortName: 'AADIYA LIQUIDTOOLS',
  tagline: 'Manufacturers of Premium Industrial & Automotive Lubricants',
  description: 'Aadiya Liquidtools is a leading manufacturer of high-quality lubricants and oils for automotive and industrial applications. Registered and incorporated in India.',
  
  // Legal Details
  cin: 'U46610TN2025PTC182178',
  entityType: 'Private Limited Company',
  incorporationDate: 'July 08, 2025',
  companyAge: '2 Months',
  roc: 'ROC - Chennai',
  authorizedCapital: '₹10,000',
  paidUpCapital: '₹10,000',
  status: 'Active',
  
  // Contact Details
  contact: {
    registeredAddress: 'P1. No. 15, 6th Street, Sri Devi Nagar, Kattupakkam, Tiruvallur, Poonamallee, Tamil Nadu, India, 600056',
    phone: '+91 98408 95637',
    mobile: '+91 98408 95637',
    whatsapp: '+91 98408 95637',
    email: 'alt@gmail.com',
    primaryEmail: 'alt@gmail.com',
    salesEmail: 'sales@aadiyaliquidtools.com'
  },
  
  // Social Media
  social: {
    whatsapp: 'https://wa.me/919840895637',
    call: 'tel:+919840895637',
    email: 'mailto:alt@gmail.com'
  },
  
  // Business Hours
  hours: {
    weekdays: '9:00 AM - 6:00 PM',
    saturday: '9:00 AM - 2:00 PM',
    sunday: 'Emergency Support Only'
  },
  
  // Brand Colors
  colors: {
    navy: '#0A2463',
    trustBlue: '#1E40AF',
    energyRed: '#DC2626',
    premiumAmber: '#F59E0B',
    safetyGreen: '#059669',
    industrialGray: '#374151'
  },
  
  // Features
  features: [
    'ISO Certified Products',
    'Pan-India Delivery Network',
    'Technical Support Team',
    'Bulk Order Discounts',
    'Custom Formulations',
    'OEM Approvals'
  ],
  
  // Certifications
  certifications: [
    'ISO 9001:2015',
    'BIS Certified',
    'OEM Approved',
    'Quality Assured'
  ]
};

export const COMPANY_PRODUCTS = [
  // Industrial Oils
  {
    id: 'ind-01',
    name: 'Aadiya Hydraulic Oil AW 32',
    category: 'industrial',
    subCategory: 'hydraulic',
    grade: 'ISO VG 32',
    description: 'Premium anti-wear hydraulic oil for industrial machinery',
    price: '₹720',
    unit: 'Liter',
    specs: {
      'Viscosity Grade': 'ISO VG 32',
      'Flash Point': '210°C',
      'Pour Point': '-18°C',
      'Certification': 'IS 10522-1983',
      'Base Oil': 'Group II'
    },
    applications: ['Hydraulic Systems', 'Pumps', 'Valves'],
    packaging: ['5L', '20L', '210L Drum'],
    isNew: true,
    featured: true
  },
  {
    id: 'ind-02',
    name: 'Aadiya Gear Oil EP 150',
    category: 'industrial',
    subCategory: 'gear',
    grade: 'EP 150',
    description: 'Extreme pressure gear oil for heavy duty applications',
    price: '₹890',
    unit: 'Liter',
    specs: {
      'Viscosity Grade': 'ISO VG 150',
      'Flash Point': '240°C',
      'Pour Point': '-6°C',
      'Certification': 'IS 5406-1993',
      'EP Rating': 'High'
    },
    applications: ['Gearboxes', 'Industrial Drives', 'Reduction Gears'],
    packaging: ['5L', '20L', '210L Drum'],
    isNew: true,
    featured: true
  },
  {
    id: 'ind-03',
    name: 'Aadiya Compressor Oil 100',
    category: 'industrial',
    subCategory: 'compressor',
    grade: 'ISO VG 100',
    description: 'High performance compressor oil',
    price: '₹950',
    unit: 'Liter',
    specs: {
      'Viscosity Grade': 'ISO VG 100',
      'Flash Point': '230°C',
      'Pour Point': '-15°C',
      'Foam Resistance': 'Excellent',
      'Oxidation Stability': 'High'
    },
    applications: ['Air Compressors', 'Screw Compressors'],
    packaging: ['5L', '20L', '210L Drum'],
    isNew: false,
    featured: true
  },

  // Automotive Oils
  {
    id: 'auto-01',
    name: 'Aadiya Engine Oil 20W-40',
    category: 'automotive',
    subCategory: 'engine',
    grade: 'API SN 20W-40',
    description: 'Multi-grade engine oil for petrol and diesel vehicles',
    price: '₹850',
    unit: 'Liter',
    specs: {
      'SAE Grade': '20W-40',
      'API Specification': 'SN',
      'Viscosity Index': 'High',
      'Fuel Economy': 'Improved'
    },
    applications: ['Cars', 'SUVs', 'Light Commercial Vehicles'],
    packaging: ['1L', '5L', '20L'],
    isNew: false,
    featured: true
  },
  {
    id: 'auto-02',
    name: 'Aadiya Diesel Engine Oil 15W-40',
    category: 'automotive',
    subCategory: 'engine',
    grade: 'API CJ-4 15W-40',
    description: 'Heavy duty diesel engine oil',
    price: '₹820',
    unit: 'Liter',
    specs: {
      'SAE Grade': '15W-40',
      'API Specification': 'CJ-4',
      'Soot Handling': 'Excellent',
      'Extended Drain': 'Yes'
    },
    applications: ['Trucks', 'Buses', 'Commercial Vehicles'],
    packaging: ['5L', '20L', '210L Drum'],
    isNew: true,
    featured: true
  },
  {
    id: 'auto-03',
    name: 'Aadiya Gear Oil EP 90',
    category: 'automotive',
    subCategory: 'gear',
    grade: 'GL-5 EP 90',
    description: 'Extreme pressure gear oil for automotive applications',
    price: '₹780',
    unit: 'Liter',
    specs: {
      'SAE Grade': '90',
      'API Specification': 'GL-5',
      'EP Additives': 'High',
      'Rust Protection': 'Excellent'
    },
    applications: ['Manual Transmissions', 'Differentials', 'Gearboxes'],
    packaging: ['1L', '5L', '20L'],
    isNew: false,
    featured: false
  },

  // Greases
  {
    id: 'grease-01',
    name: 'Aadiya Multi-Purpose Grease',
    category: 'greases',
    subCategory: 'multipurpose',
    grade: 'NLGI #2',
    description: 'Lithium-based multi-purpose industrial grease',
    price: '₹420',
    unit: 'Kg',
    specs: {
      'NLGI Grade': '2',
      'Base': 'Lithium Soap',
      'Water Resistance': 'Excellent',
      'Temperature Range': '-20°C to 130°C'
    },
    applications: ['Bearings', 'Chassis', 'General Lubrication'],
    packaging: ['400g Tube', '1Kg Cartridge', '5Kg Pail'],
    isNew: false,
    featured: true
  },
  {
    id: 'grease-02',
    name: 'Aadiya EP Grease',
    category: 'greases',
    subCategory: 'ep',
    grade: 'NLGI #2 EP',
    description: 'Extreme pressure grease for heavy duty applications',
    price: '₹520',
    unit: 'Kg',
    specs: {
      'NLGI Grade': '2',
      'Type': 'Extreme Pressure',
      'EP Additives': 'Molybdenum Disulphide',
      'Load Capacity': 'High'
    },
    applications: ['Construction Equipment', 'Mining Machinery'],
    packaging: ['1Kg Cartridge', '5Kg Pail', '15Kg Pail'],
    isNew: true,
    featured: true
  },
  {
    id: 'grease-03',
    name: 'Aadiya Food Grade Grease',
    category: 'greases',
    subCategory: 'food-grade',
    grade: 'NSF H1',
    description: 'Food grade lubricant for food processing equipment',
    price: '₹1200',
    unit: 'Kg',
    specs: {
      'NLGI Grade': '2',
      'Certification': 'NSF H1 Registered',
      'Color': 'White',
      'Odor': 'None',
      'Taste': 'None'
    },
    applications: ['Food Processing', 'Pharmaceutical', 'Packaging'],
    packaging: ['400g Tube', '1Kg Cartridge'],
    isNew: true,
    featured: true
  },

  // Specialty Oils
  {
    id: 'spec-01',
    name: 'Aadiya Cutting Oil',
    category: 'metal',
    subCategory: 'cutting',
    grade: 'Soluble Type',
    description: 'Soluble cutting oil for metal working',
    price: '₹880',
    unit: 'Liter',
    specs: {
      'Type': 'Soluble Oil',
      'Concentration': '5-10%',
      'Rust Prevention': 'Excellent',
      'Cooling': 'High'
    },
    applications: ['CNC Machining', 'Milling', 'Turning'],
    packaging: ['5L', '20L', '210L Drum'],
    isNew: false,
    featured: false
  },
  {
    id: 'spec-02',
    name: 'Aadiya Heat Transfer Oil',
    category: 'specialty',
    subCategory: 'heat-transfer',
    grade: 'Thermal 300',
    description: 'High temperature heat transfer fluid',
    price: '₹1800',
    unit: 'Liter',
    specs: {
      'Max Temperature': '300°C',
      'Thermal Stability': 'Excellent',
      'Oxidation Resistance': 'High',
      'Flash Point': '240°C'
    },
    applications: ['Heat Transfer Systems', 'Thermal Oil Heaters'],
    packaging: ['20L', '210L Drum'],
    isNew: true,
    featured: true
  }
];
