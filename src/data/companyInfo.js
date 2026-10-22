// src/data/companyInfo.js

// ============================================================
// IMAGE IMPORTS (from src/assets)
// ============================================================
import hydraulicOilImg from '../assets/hydraulic-oil.jpg';
import gearOilImg from '../assets/gear-oil.png';
import greaseImg from '../assets/greased-oil.png';
import thermicOilImg from '../assets/thermic-oil.png';
import turbineOilImg from '../assets/turbine-oil.png';
import refrigerationOilImg from '../assets/refrigeration-oil.png';
import compressorOilImg from '../assets/compressor-oil.png';
import machineOilImg from '../assets/machine-oil.png';
import wayLubeOilImg from '../assets/way-lube-oil.png';
import spindleOilImg from '../assets/spindle-oil.png';
import neatCuttingOilImg from '../assets/neat-cutting-oil.png';
import waterSolubleCuttingOilImg from '../assets/water-soluble-cutting-oil.png';
import quenchOilImg from '../assets/quenching-oil.png';
import rustProtectionOilImg from '../assets/rust-protection-oil.png';
import drawingFormingOilImg from '../assets/drawing-and-forming-oil.png';
import automotiveEngineOilImg from '../assets/automotive-engine-oils.png';
import automotiveGearOilImg from '../assets/automotive-gear-oil.png';
import transmissionFluidImg from '../assets/transmission-fluid.png';

// ============================================================
// COMPANY INFORMATION
// ============================================================

export const COMPANY = {
  name: 'Aditya Liquidtools India Private Limited',
  shortName: 'ADITYA LIQUIDTOOLS',
  tagline: 'Leading Industrial Lubricant Supplier',
  description:
    'We supply high-quality industrial lubricants for industrial and commercial applications, ensuring reliable products, timely delivery and excellent customer support.',
  founded: '2025',
  cin: 'U46610TN2025PTC182178',
  gst: '33ABDCA2811Q1ZO',
  pan: 'ABDCA2811Q',
  entityType: 'Private Limited Company',
  roc: 'ROC - Chennai',
  status: 'Active',
  registeredAddress:
    'P1. No. 15, 6th Street, Sri Devi Nagar, Kattupakkam, Tiruvallur, Poonamallee, Tamil Nadu, India, 600056',
  phone: '+91 98408 95637',
  whatsapp: '+91 98408 95637',
  whatsappUrl: 'https://wa.me/919840895637',
  email: 'info@aadiyaliquidtools.com',
  adminEmail: 'admin@aadiyaliquidtools.com',
  salesEmail: 'sales@aadiyaliquidtools.com',
  infoEmail: 'info@aadiyaliquidtools.com',
  mdEmail: 'md@aadiyaliquidtools.com',
  supportEmail: 'support@aadiyaliquidtools.com',
  social: {
    whatsapp: 'https://wa.me/919840895637',
    call: 'tel:+919840895637',
    email: 'mailto:info@aadiyaliquidtools.com',
  },
  hours: {
    weekdays: '9:00 AM - 6:00 PM',
    saturday: '9:00 AM - 2:00 PM',
    sunday: 'Emergency Support Only',
  },
};

// ============================================================
// PRODUCT FAMILIES
// ============================================================

export const PRODUCT_FAMILIES = [
  {
    id: 'general-lubricants',
    name: 'General Lubricants',
    image: hydraulicOilImg,
    description:
      'Industrial lubricants for machinery, equipment and plant operations.',
  },
  {
    id: 'metal-working-fluids',
    name: 'Metal Working Fluids',
    image: neatCuttingOilImg,
    description:
      'Fluids for metal machining, forming, protection and treatment.',
  },
  {
    id: 'automotive-lubricants',
    name: 'Automotive Lubricants',
    image: automotiveEngineOilImg,
    description:
      'Lubricants for automotive engines, gear systems and transmission.',
  },
];

// ============================================================
// COMPANY PRODUCTS
// ============================================================

export const COMPANY_PRODUCTS = [
  {
    id: 'hyd-01',
    name: 'Hydraulic Oil',
    category: 'general-lubricants',
    subCategory: 'Hydraulic Oil',
    family: 'general-lubricants',
    grade: 'HL, HLP, AW Series',
    image: hydraulicOilImg,
    description: 'Hydraulic oil for industrial hydraulic and circulating systems.',
    fullDescription: 'Hydraulic oils designed for reliable lubrication and protection in hydraulic and circulating systems.',
    specifications: { Type: 'HL, HLP, AW', Grades: 'ISO VG 10 to 460', Application: 'Hydraulic Systems' },
    applications: ['Hydraulic Systems', 'Circulating Systems', 'Industrial Machinery'],
    pds: '', sds: '',
  },
  {
    id: 'gear-01',
    name: 'Gear Oil',
    category: 'general-lubricants',
    subCategory: 'Gear Oil',
    family: 'general-lubricants',
    grade: 'EP Series',
    image: gearOilImg,
    description: 'EP gear oils for industrial gearboxes and heavy machinery.',
    fullDescription: 'Industrial gear oils designed for reliable lubrication of gearboxes and drive systems.',
    specifications: { Type: 'EP Gear Oil', Grades: 'ISO VG 68 to 1000', Application: 'Industrial Gearboxes' },
    applications: ['Industrial Gearboxes', 'Reduction Gears', 'Heavy Machinery'],
    pds: '', sds: '',
  },
  {
    id: 'grease-01',
    name: 'Grease',
    category: 'general-lubricants',
    subCategory: 'Grease',
    family: 'general-lubricants',
    grade: 'NLGI #2',
    image: greaseImg,
    description: 'Multi-purpose industrial grease for bearings and general lubrication.',
    fullDescription: 'Lithium-based multi-purpose industrial grease for bearings and general applications.',
    specifications: { 'NLGI Grade': '2', Type: 'Lithium Soap', 'Temperature Range': '-20°C to 130°C' },
    applications: ['Bearings', 'Chassis', 'General Lubrication'],
    pds: '', sds: '',
  },
  {
    id: 'thermic-01',
    name: 'Thermic Oil',
    category: 'general-lubricants',
    subCategory: 'Thermic Oil',
    family: 'general-lubricants',
    grade: 'Mineral & Synthetic',
    image: thermicOilImg,
    description: 'Heat transfer fluids for industrial heating and thermal systems.',
    fullDescription: 'Heat transfer oils designed for industrial heating and thermal systems.',
    specifications: { Type: 'Mineral & Synthetic', Application: 'Heat Transfer Systems', 'Temperature Range': 'Up to 300°C' },
    applications: ['Heat Transfer Systems', 'Thermal Oil Heaters', 'Industrial Heating'],
    pds: '', sds: '',
  },
  {
    id: 'turbine-01',
    name: 'Turbine Oil',
    category: 'general-lubricants',
    subCategory: 'Turbine Oil',
    family: 'general-lubricants',
    grade: 'ISO VG 32, 46, 68',
    image: turbineOilImg,
    description: 'Industrial turbine oils for reliable turbine lubrication.',
    fullDescription: 'Turbine oils designed for reliable lubrication of steam and gas turbines.',
    specifications: { 'Viscosity Grade': 'ISO VG 32, 46, 68', Application: 'Steam & Gas Turbines' },
    applications: ['Steam Turbines', 'Gas Turbines', 'Power Generation'],
    pds: '', sds: '',
  },
  {
    id: 'ref-01',
    name: 'Refrigeration Oil',
    category: 'general-lubricants',
    subCategory: 'Refrigeration Oil',
    family: 'general-lubricants',
    grade: 'ISO VG 32, 46, 68',
    image: refrigerationOilImg,
    description: 'Lubricants for refrigeration compressors and cooling systems.',
    fullDescription: 'Refrigeration oils for compressors and industrial cooling systems.',
    specifications: { 'Viscosity Grade': 'ISO VG 32, 46, 68', Application: 'Refrigeration Systems' },
    applications: ['Refrigeration Systems', 'Air Conditioning', 'Cold Storage'],
    pds: '', sds: '',
  },
  {
    id: 'comp-01',
    name: 'Compressor Oil',
    category: 'general-lubricants',
    subCategory: 'Compressor Oil',
    family: 'general-lubricants',
    grade: 'ISO VG 68, 100, 150',
    image: compressorOilImg,
    description: 'Specialized oils for air and industrial compressor systems.',
    fullDescription: 'Compressor oils for air and industrial compressor systems.',
    specifications: { 'Viscosity Grade': 'ISO VG 68, 100, 150', Application: 'Air Compressors' },
    applications: ['Air Compressors', 'Pneumatic Systems', 'Industrial Equipment'],
    pds: '', sds: '',
  },
  {
    id: 'machine-01',
    name: 'Machine Oil',
    category: 'general-lubricants',
    subCategory: 'Machine Oil',
    family: 'general-lubricants',
    grade: 'ISO VG 32, 46, 68',
    image: machineOilImg,
    description: 'General-purpose machinery oils for industrial equipment.',
    fullDescription: 'General-purpose machinery oils for industrial equipment.',
    specifications: { 'Viscosity Grade': 'ISO VG 32, 46, 68', Application: 'General Machinery' },
    applications: ['General Machinery', 'Bearings', 'Industrial Equipment'],
    pds: '', sds: '',
  },
  {
    id: 'way-01',
    name: 'Way Lube Oil',
    category: 'general-lubricants',
    subCategory: 'Way Lube Oil',
    family: 'general-lubricants',
    grade: 'ISO VG 68, 220',
    image: wayLubeOilImg,
    description: 'High-performance lubricants for machine tool slideways.',
    fullDescription: 'Slideway lubricants for machine tool slideways.',
    specifications: { 'Viscosity Grade': 'ISO VG 68, 220', Application: 'Machine Tools' },
    applications: ['CNC Machines', 'Machine Tools', 'Precision Equipment'],
    pds: '', sds: '',
  },
  {
    id: 'spindle-01',
    name: 'Spindle Oil',
    category: 'general-lubricants',
    subCategory: 'Spindle Oil',
    family: 'general-lubricants',
    grade: 'ISO VG 10, 15, 22',
    image: spindleOilImg,
    description: 'Low-viscosity lubricants for high-speed spindle applications.',
    fullDescription: 'Spindle oils for high-speed spindle applications.',
    specifications: { 'Viscosity Grade': 'ISO VG 10, 15, 22', Application: 'High-Speed Spindles' },
    applications: ['High-Speed Spindles', 'Precision Machinery', 'CNC Equipment'],
    pds: '', sds: '',
  },
  {
    id: 'neat-01',
    name: 'Neat Cutting Oil',
    category: 'metal-working-fluids',
    subCategory: 'Neat Cutting Oil',
    family: 'metal-working-fluids',
    grade: 'Various Grades',
    image: neatCuttingOilImg,
    description: 'Neat cutting oils for metal machining operations.',
    fullDescription: 'Neat cutting oils for metal machining operations.',
    specifications: { Type: 'Neat Cutting Oil', Application: 'Metal Machining' },
    applications: ['Metal Machining', 'CNC Operations', 'Industrial Cutting'],
    pds: '', sds: '',
  },
  {
    id: 'soluble-01',
    name: 'Water Soluble Cutting Oil',
    category: 'metal-working-fluids',
    subCategory: 'Water Soluble Cutting Oil',
    family: 'metal-working-fluids',
    grade: 'Various Grades',
    image: waterSolubleCuttingOilImg,
    description: 'Water-soluble cutting fluids for metal machining.',
    fullDescription: 'Water-soluble cutting fluids for metal machining.',
    specifications: { Type: 'Water Soluble', Application: 'Metal Machining' },
    applications: ['Metal Machining', 'CNC Operations', 'Industrial Cutting'],
    pds: '', sds: '',
  },
  {
    id: 'quench-01',
    name: 'Quenching Oil',
    category: 'metal-working-fluids',
    subCategory: 'Quenching Oil',
    family: 'metal-working-fluids',
    grade: 'Various Grades',
    image: quenchOilImg,
    description: 'Quenching oils for metal heat treatment processes.',
    fullDescription: 'Quenching oils for metal heat treatment processes.',
    specifications: { Type: 'Quenching Oil', Application: 'Heat Treatment' },
    applications: ['Heat Treatment', 'Metal Hardening', 'Industrial Processing'],
    pds: '', sds: '',
  },
  {
    id: 'rust-01',
    name: 'Rust Protection Oil',
    category: 'metal-working-fluids',
    subCategory: 'Rust Protection Oil',
    family: 'metal-working-fluids',
    grade: 'Various Grades',
    image: rustProtectionOilImg,
    description: 'Rust preventive oils for metal protection.',
    fullDescription: 'Rust preventive oils for metal protection.',
    specifications: { Type: 'Rust Preventive', Application: 'Metal Protection' },
    applications: ['Metal Protection', 'Storage', 'Industrial Applications'],
    pds: '', sds: '',
  },
  {
    id: 'draw-01',
    name: 'Drawing & Forming Oil',
    category: 'metal-working-fluids',
    subCategory: 'Drawing & Forming Oil',
    family: 'metal-working-fluids',
    grade: 'Various Grades',
    image: drawingFormingOilImg,
    description: 'Drawing and forming oils for metal forming operations.',
    fullDescription: 'Drawing and forming oils for metal forming operations.',
    specifications: { Type: 'Drawing & Forming', Application: 'Metal Forming' },
    applications: ['Wire Drawing', 'Tube Drawing', 'Metal Forming'],
    pds: '', sds: '',
  },
  {
    id: 'auto-engine-01',
    name: 'Automotive Engine Oils',
    category: 'automotive-lubricants',
    subCategory: 'Automotive Engine Oils',
    family: 'automotive-lubricants',
    grade: 'SAE 20W-50, 15W-40',
    image: automotiveEngineOilImg,
    description: 'Engine oils for automotive engines.',
    fullDescription: 'Engine oils for automotive engines.',
    specifications: { 'API Grade': 'SL/CF, CI-4', Application: 'Automotive Engines' },
    applications: ['Motorcycles', 'Cars', 'Commercial Vehicles'],
    pds: '', sds: '',
  },
  {
    id: 'auto-gear-01',
    name: 'Automotive Gear Oil',
    category: 'automotive-lubricants',
    subCategory: 'Automotive Gear Oil',
    family: 'automotive-lubricants',
    grade: 'EP Series',
    image: automotiveGearOilImg,
    description: 'Gear oils for automotive gear systems.',
    fullDescription: 'Gear oils for automotive gear systems.',
    specifications: { Type: 'EP Gear Oil', Application: 'Automotive Gearboxes' },
    applications: ['Automotive Gearboxes', 'Transmission Systems', 'Drive Systems'],
    pds: '', sds: '',
  },
  {
    id: 'auto-trans-01',
    name: 'Transmission Fluid',
    category: 'automotive-lubricants',
    subCategory: 'Transmission Fluid',
    family: 'automotive-lubricants',
    grade: 'ATF',
    image: transmissionFluidImg,
    description: 'Transmission fluids for automotive transmission systems.',
    fullDescription: 'Transmission fluids for automotive transmission systems.',
    specifications: { Type: 'ATF', Application: 'Automotive Transmissions' },
    applications: ['Automatic Transmissions', 'Manual Transmissions', 'Automotive Systems'],
    pds: '', sds: '',
  },
];