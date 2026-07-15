// src/config/companyConfig.js
export const COMPANY = {
  // Basic Info - Updated to Aditya
  name: 'Aditya Liquidtools India Private Limited',
  shortName: 'ADITYA LIQUIDTOOLS',
  tagline: 'Authorized Dealer of Industrial Lubricants',
  description: 'We supply high-quality industrial lubricants from trusted brands, ensuring reliable products, timely delivery, and excellent customer support for industrial and commercial applications.',
  
  // Company History - NEW (Like APAR's "Founded 1958")
  founded: '2025',
  globalReach: '500+ Cities',
  employees: '50+',
  facilities: '4',
  yearsOfExcellence: '2+',
  
  // Legal Details
  cin: 'U46610TN2025PTC182178',
  gst: '33ABDCA2811Q1ZO',
  pan: 'ABDCA2811Q',
  entityType: 'Private Limited Company',
  roc: 'ROC - Chennai',
  status: 'Active',
  
  // Contact Details - 3 Emails
  contact: {
    registeredAddress: 'P1. No. 15, 6th Street, Sri Devi Nagar, Kattupakkam, Tiruvallur, Poonamallee, Tamil Nadu, India, 600056',
    phone: '+91 98408 95637',
    mobile: '+91 98408 95637',
    whatsapp: '+91 98408 95637',
    adminEmail: 'admin@aadiyaliquidtools.com',
    salesEmail: 'sales@aadiyaliquidtools.com',
    infoEmail: 'info@aadiyaliquidtools.com',
    email: 'info@aadiyaliquidtools.com'
  },
  
  // Social Media
// In companyInfo.js - add these if missing
social: {
  whatsapp: 'https://wa.me/919840895637',
  call: 'tel:+919840895637',
  email: 'mailto:info@aadiyaliquidtools.com',
  facebook: '#',
  instagram: '#',
  linkedin: '#',
  youtube: '#',
  twitter: '#'
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
  
  // Features - Updated for Dealership
  features: [
    'Trusted Products',
    'Pan-India Delivery Network',
    'Technical Support Team',
    'Bulk Order Discounts',
    'Quality Assurance',
    'Timely Delivery'
  ],
  
  // Certifications - ISO Placeholder
  certifications: [
    'ISO Certification: XXXXXXX',
    'BIS Certified',
    'OEM Approved',
    'Quality Assured'
  ],
  
  // Business Details
  businessDetails: {
    cin: 'U46610TN2025PTC182178',
    gst: '33ABDCA2811Q1ZO',
    pan: 'ABDCA2811Q'
  },
  
  // NEW: Innovation & Technology (Like APAR's IoT section)
  innovation: {
    title: 'Tech-Driven Processes & Smart Operations',
    description: 'Leveraging IoT, real-time data, and predictive analytics to enhance operational efficiency, product quality, and customer service across our supply chain.',
    pillars: [
      'IoT & Edge Computing',
      'Real-time Data Analytics',
      'Predictive Quality Control',
      'Smart Supply Chain'
    ]
  },
  
  // NEW: Sustainability (Like APAR's CSR section)
  sustainability: {
    title: 'Commitment to Sustainability',
    description: 'We are committed to sustainable practices that minimize environmental impact while delivering superior products.',
    initiatives: [
      'Eco-friendly Packaging',
      'Energy Efficient Operations',
      'Waste Reduction Programs',
      'Community Engagement'
    ]
  }
};

export const COMPANY_PRODUCTS = [
  // Industrial Oils
  {
    id: 'ind-01',
    name: 'Aditya Hydraulic Oil AW 32',
    category: 'industrial',
    subCategory: 'hydraulic',
    grade: 'ISO VG 32',
    description: 'Premium anti-wear hydraulic oil for industrial machinery',
    price: 720,
    unit: 'Liter',
    specs: {
      'Viscosity Grade': 'ISO VG 32',
      'Flash Point': '210°C',
      'Pour Point': '-18°C',
      'Certification': 'IS 10522-1983',
      'Base Oil': 'Group II'
    },
    applications: ['Hydraulic Systems', 'Pumps', 'Valves'],
    isNew: true,
    featured: true
  },
  {
    id: 'ind-02',
    name: 'Aditya Gear Oil EP 150',
    category: 'industrial',
    subCategory: 'gear',
    grade: 'EP 150',
    description: 'Extreme pressure gear oil for heavy duty applications',
    price: 890,
    unit: 'Liter',
    specs: {
      'Viscosity Grade': 'ISO VG 150',
      'Flash Point': '240°C',
      'Pour Point': '-6°C',
      'Certification': 'IS 5406-1993',
      'EP Rating': 'High'
    },
    applications: ['Gearboxes', 'Industrial Drives', 'Reduction Gears'],
    isNew: true,
    featured: true
  },
  {
    id: 'ind-03',
    name: 'Aditya Compressor Oil 100',
    category: 'industrial',
    subCategory: 'compressor',
    grade: 'ISO VG 100',
    description: 'High performance compressor oil',
    price: 950,
    unit: 'Liter',
    specs: {
      'Viscosity Grade': 'ISO VG 100',
      'Flash Point': '230°C',
      'Pour Point': '-15°C',
      'Foam Resistance': 'Excellent',
      'Oxidation Stability': 'High'
    },
    applications: ['Air Compressors', 'Screw Compressors'],
    isNew: false,
    featured: true
  },

  // Automotive Oils
  {
    id: 'auto-01',
    name: 'Aditya Engine Oil 20W-40',
    category: 'automotive',
    subCategory: 'engine',
    grade: 'API SN 20W-40',
    description: 'Multi-grade engine oil for petrol and diesel vehicles',
    price: 850,
    unit: 'Liter',
    specs: {
      'SAE Grade': '20W-40',
      'API Specification': 'SN',
      'Viscosity Index': 'High',
      'Fuel Economy': 'Improved'
    },
    applications: ['Cars', 'SUVs', 'Light Commercial Vehicles'],
    isNew: false,
    featured: true
  },
  {
    id: 'auto-02',
    name: 'Aditya Diesel Engine Oil 15W-40',
    category: 'automotive',
    subCategory: 'engine',
    grade: 'API CJ-4 15W-40',
    description: 'Heavy duty diesel engine oil',
    price: 820,
    unit: 'Liter',
    specs: {
      'SAE Grade': '15W-40',
      'API Specification': 'CJ-4',
      'Soot Handling': 'Excellent',
      'Extended Drain': 'Yes'
    },
    applications: ['Trucks', 'Buses', 'Commercial Vehicles'],
    isNew: true,
    featured: true
  },
  {
    id: 'auto-03',
    name: 'Aditya Gear Oil EP 90',
    category: 'automotive',
    subCategory: 'gear',
    grade: 'GL-5 EP 90',
    description: 'Extreme pressure gear oil for automotive applications',
    price: 780,
    unit: 'Liter',
    specs: {
      'SAE Grade': '90',
      'API Specification': 'GL-5',
      'EP Additives': 'High',
      'Rust Protection': 'Excellent'
    },
    applications: ['Manual Transmissions', 'Differentials', 'Gearboxes'],
    isNew: false,
    featured: false
  },

  // Greases
  {
    id: 'grease-01',
    name: 'Aditya Multi-Purpose Grease',
    category: 'greases',
    subCategory: 'multipurpose',
    grade: 'NLGI #2',
    description: 'Lithium-based multi-purpose industrial grease',
    price: 420,
    unit: 'Kg',
    specs: {
      'NLGI Grade': '2',
      'Base': 'Lithium Soap',
      'Water Resistance': 'Excellent',
      'Temperature Range': '-20°C to 130°C'
    },
    applications: ['Bearings', 'Chassis', 'General Lubrication'],
    isNew: false,
    featured: true
  },
  {
    id: 'grease-02',
    name: 'Aditya EP Grease',
    category: 'greases',
    subCategory: 'ep',
    grade: 'NLGI #2 EP',
    description: 'Extreme pressure grease for heavy duty applications',
    price: 520,
    unit: 'Kg',
    specs: {
      'NLGI Grade': '2',
      'Type': 'Extreme Pressure',
      'EP Additives': 'Molybdenum Disulphide',
      'Load Capacity': 'High'
    },
    applications: ['Construction Equipment', 'Mining Machinery'],
    isNew: true,
    featured: true
  },
  {
    id: 'grease-03',
    name: 'Aditya Food Grade Grease',
    category: 'greases',
    subCategory: 'food-grade',
    grade: 'NSF H1',
    description: 'Food grade lubricant for food processing equipment',
    price: 1200,
    unit: 'Kg',
    specs: {
      'NLGI Grade': '2',
      'Certification': 'NSF H1 Registered',
      'Color': 'White',
      'Odor': 'None',
      'Taste': 'None'
    },
    applications: ['Food Processing', 'Pharmaceutical', 'Packaging'],
    isNew: true,
    featured: true
  },

  // Specialty Oils
  {
    id: 'spec-01',
    name: 'Aditya Cutting Oil',
    category: 'metal',
    subCategory: 'cutting',
    grade: 'Soluble Type',
    description: 'Soluble cutting oil for metal working',
    price: 880,
    unit: 'Liter',
    specs: {
      'Type': 'Soluble Oil',
      'Concentration': '5-10%',
      'Rust Prevention': 'Excellent',
      'Cooling': 'High'
    },
    applications: ['CNC Machining', 'Milling', 'Turning'],
    isNew: false,
    featured: false
  },
  {
    id: 'spec-02',
    name: 'Aditya Heat Transfer Oil',
    category: 'specialty',
    subCategory: 'heat-transfer',
    grade: 'Thermal 300',
    description: 'High temperature heat transfer fluid',
    price: 1800,
    unit: 'Liter',
    specs: {
      'Max Temperature': '300°C',
      'Thermal Stability': 'Excellent',
      'Oxidation Resistance': 'High',
      'Flash Point': '240°C'
    },
    applications: ['Heat Transfer Systems', 'Thermal Oil Heaters'],
    isNew: true,
    featured: true
  }
];