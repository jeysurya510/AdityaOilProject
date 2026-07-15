const products = [
  {
    id: 1,
    name: "AADIYA TURBO 4T",
    grade: "SAE 20W-50",
    category: "automotive",
    price: "₹480",
    unit: "Litre",
    applications: [
      "Motorcycles & Scooters", 
      "4-Stroke Engines", 
      "High Temperature Conditions",
      "Daily Commute Vehicles",
      "Sports Bikes"
    ],
    packaging: ["1L Can", "5L Can", "210L Drum"],
    specs: {
      "API Grade": "SL/CF",
      "Viscosity Index": "125",
      "Flash Point": "230°C",
      "Pour Point": "-25°C",
      "Sulphated Ash": "1.0%",
      "Base Oil": "Group II+",
      "Shelf Life": "3 Years"
    },
    popularity: 5,
    rating: 4.8,
    isNew: false
  },
  {
    id: 2,
    name: "AADIYA DURATRUCK",
    grade: "SAE 15W-40",
    category: "automotive",
    price: "₹520",
    unit: "Litre",
    applications: [
      "Heavy Duty Trucks", 
      "Buses & Coaches", 
      "Earth Moving Equipment",
      "Construction Vehicles",
      "Transport Fleets"
    ],
    packaging: ["5L Can", "20L Pail", "210L Drum"],
    specs: {
      "API Grade": "CI-4/SL",
      "TBN": "10 mg KOH/g",
      "Viscosity Index": "145",
      "Flash Point": "235°C",
      "Pour Point": "-30°C",
      "Base Oil": "Group II",
      "Shelf Life": "3 Years"
    },
    popularity: 5,
    rating: 4.9,
    isNew: true
  },
  {
    id: 3,
    name: "INDUSTRIAL GEAR OIL",
    grade: "ISO VG 320",
    category: "industrial",
    price: "₹850",
    unit: "Litre",
    applications: [
      "Heavy Industrial Gears", 
      "Steel Plants", 
      "Cement Industry",
      "Mining Equipment",
      "Power Transmission"
    ],
    packaging: ["20L Pail", "210L Drum"],
    specs: {
      "ISO Grade": "VG 320",
      "Rust Protection": "Pass ASTM D665",
      "Foam Control": "Excellent",
      "Oxidation Stability": "High",
      "Load Capacity": "Extreme",
      "Base Oil": "Group I",
      "Shelf Life": "4 Years"
    },
    popularity: 4,
    rating: 4.7,
    isNew: false
  },
  {
    id: 4,
    name: "HYDRAULIC OIL AW",
    grade: "ISO VG 46",
    category: "industrial",
    price: "₹650",
    unit: "Litre",
    applications: [
      "Hydraulic Systems", 
      "CNC Machines", 
      "Industrial Presses",
      "Excavators",
      "Plastic Injection"
    ],
    packaging: ["5L Can", "20L Pail", "210L Drum"],
    specs: {
      "ISO Grade": "VG 46",
      "Anti-Wear": "Zn-free",
      "Water Separation": "Quick",
      "Filterability": "Excellent",
      "Oxidation Life": "3000+ hrs",
      "Base Oil": "Group II",
      "Shelf Life": "3 Years"
    },
    popularity: 4,
    rating: 4.6,
    isNew: false
  },
  {
    id: 5,
    name: "MULTI-PURPOSE GREASE",
    grade: "NLGI 2",
    category: "greases",
    price: "₹320",
    unit: "Kg",
    applications: [
      "Ball & Roller Bearings", 
      "Chassis Lubrication", 
      "General Purpose",
      "Agricultural Equipment",
      "Conveyor Systems"
    ],
    packaging: ["1Kg Cartridge", "15Kg Pail", "50Kg Drum"],
    specs: {
      "NLGI Grade": "2",
      "Dropping Point": "180°C",
      "Water Resistance": "Excellent",
      "Base Oil Viscosity": "150 cSt",
      "Penetration": "265-295",
      "Thickener": "Lithium Complex",
      "Shelf Life": "2 Years"
    },
    popularity: 3,
    rating: 4.5,
    isNew: true
  },
  {
    id: 6,
    name: "FOOD GRADE GREASE",
    grade: "NSF H1",
    category: "specialty",
    price: "₹1,200",
    unit: "Kg",
    applications: [
      "Food Processing", 
      "Pharmaceutical", 
      "Beverage Industry",
      "Packaging Machines",
      "Bakery Equipment"
    ],
    packaging: ["400g Tube", "1Kg Cartridge", "15Kg Pail"],
    specs: {
      "Certification": "NSF H1 Registered",
      "Odor": "Odorless",
      "Taste": "Tasteless",
      "Color": "White",
      "Base Oil": "Food Grade",
      "Thickener": "Aluminum Complex",
      "Shelf Life": "2 Years"
    },
    popularity: 3,
    rating: 4.8,
    isNew: true
  },
  {
    id: 7,
    name: "MARINE ENGINE OIL",
    grade: "SAE 40",
    category: "specialty",
    price: "₹680",
    unit: "Litre",
    applications: [
      "Marine Diesel Engines", 
      "Fishing Boats", 
      "Cargo Vessels",
      "Ferries",
      "Coastal Transport"
    ],
    packaging: ["20L Pail", "210L Drum"],
    specs: {
      "API Grade": "CF-2",
      "BN": "20 mg KOH/g",
      "Viscosity Index": "95",
      "Flash Point": "220°C",
      "Water Separation": "Excellent",
      "Base Oil": "Group I",
      "Shelf Life": "3 Years"
    },
    popularity: 3,
    rating: 4.7,
    isNew: false
  },
  {
    id: 8,
    name: "COMPRESSOR OIL",
    grade: "ISO VG 68",
    category: "industrial",
    price: "₹720",
    unit: "Litre",
    applications: [
      "Air Compressors", 
      "Pneumatic Systems", 
      "Industrial Blowers",
      "HVAC Systems",
      "Dental Equipment"
    ],
    packaging: ["5L Can", "20L Pail", "210L Drum"],
    specs: {
      "ISO Grade": "VG 68",
      "Oxidation Stability": "Excellent",
      "Demulsibility": "Fast",
      "Anti-Foam": "Silicone-free",
      "Carbon Deposit": "Low",
      "Base Oil": "Group II",
      "Shelf Life": "3 Years"
    },
    popularity: 4,
    rating: 4.6,
    isNew: false
  },
  {
    id: 9,
    name: "CNG ENGINE OIL",
    grade: "SAE 15W-40",
    category: "automotive",
    price: "₹550",
    unit: "Litre",
    applications: [
      "CNG Vehicles", 
      "Auto Rickshaws", 
      "City Buses",
      "Taxi Fleets",
      "Gas-powered Engines"
    ],
    packaging: ["5L Can", "20L Pail", "210L Drum"],
    specs: {
      "API Grade": "CG-4/SL",
      "Ash Content": "Low SAPS",
      "Viscosity Index": "140",
      "Flash Point": "230°C",
      "Nitration Control": "Excellent",
      "Base Oil": "Group III",
      "Shelf Life": "3 Years"
    },
    popularity: 4,
    rating: 4.8,
    isNew: true
  }
];

export default products;