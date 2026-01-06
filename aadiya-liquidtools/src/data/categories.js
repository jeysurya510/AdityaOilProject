export const categories = [
  {
    id: 'industrial',
    name: 'Industrial Oils',
    description: 'High-performance oils for industrial machinery and equipment',
    icon: '🏭',
    color: 'blue',
    subCategories: [
      { id: 'hydraulic', name: 'Hydraulic & Circulating Oils' },
      { id: 'gear', name: 'Industrial Gear Oils' },
      { id: 'machine', name: 'General Purpose Machine Oil' },
      { id: 'spindle', name: 'Spindle Oil' },
      { id: 'refrigeration', name: 'Refrigeration Compressor Oil' },
      { id: 'turbine', name: 'Turbine Oil' },
      { id: 'compressor', name: 'Compressor Oil' },
      { id: 'toolway', name: 'Machine Toolway Oils' }
    ]
  },
  {
    id: 'specialty',
    name: 'Industrial Specialty Oils',
    description: 'Specialized oils for specific industrial applications',
    icon: '⚡',
    color: 'purple',
    subCategories: [
      { id: 'quenching', name: 'Quenching Oil' },
      { id: 'heat-transfer', name: 'Heat Transfer Fluids' }
    ]
  },
  {
    id: 'metal',
    name: 'Metal Working Oils',
    description: 'Cutting, grinding and machining oils for metal fabrication',
    icon: '⚙️',
    color: 'gray',
    subCategories: [
      { id: 'soluble', name: 'Soluble Cutting Oil' },
      { id: 'neat', name: 'Neat Cutting Oil' },
      { id: 'honing', name: 'Honing Oil' },
      { id: 'broaching', name: 'Broaching Oil' },
      { id: 'draw', name: 'Draw Oil' }
    ]
  },
  {
    id: 'process',
    name: 'Process Oils',
    description: 'Oils for rubber, plastic and chemical processing industries',
    icon: '🧪',
    color: 'cyan',
    subCategories: [
      { id: 'rubber', name: 'Rubber Process Oil' },
      { id: 'plasticizer', name: 'Plasticizers' }
    ]
  },
  {
    id: 'automotive',
    name: 'Automotive Oils',
    description: 'Lubricants for all types of vehicles and automotive applications',
    icon: '🚗',
    color: 'green',
    subCategories: [
      { id: 'engine', name: 'Engine Oils' },
      { id: 'two-stroke', name: 'Two Stroke Engine Oil' },
      { id: 'transmission', name: 'Transmission Fluid' },
      { id: 'suspension', name: 'Suspension Oils' },
      { id: 'auto-gear', name: 'Auto Gear Oils' },
      { id: 'synthetic', name: 'Synthetic Lubricants' },
      { id: 'marine', name: 'Marine Lubricants' }
    ]
  },
  {
    id: 'greases',
    name: 'Greases',
    description: 'High-performance greases for industrial and automotive applications',
    icon: '🛢️',
    color: 'amber',
    subCategories: [
      { id: 'multipurpose', name: 'Multi-Purpose Greases' },
      { id: 'ep', name: 'EP Greases' },
      { id: 'chassis', name: 'Chassis Greases' },
      { id: 'food-grade', name: 'Food Grade Greases' }
    ]
  }
];

export const standards = [
  'IS 10522-1983', 'IS 11656-1986', 'IS 5406-1993', 'IS 493(Part I)-1981',
  'IS 493(Part II)-1981', 'IS 4578-1989', 'IS 1012-2002', 'ISO DIS-6521',
  'IS 2664-1980', 'IS 14745-1999', 'IS 1115-1986', 'IS 3065-1985',
  'IS 15078-2001', 'IS 9591:1996', 'IS 13656:2002', 'IS 1118:1992',
  'API SL/CJ4/GL-4/GL-5', 'JASO FC', 'MIL-L-2105D/E', 'NSF H1'
];