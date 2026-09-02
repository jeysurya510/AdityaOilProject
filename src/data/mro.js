// src/data/mro.js

/*
  ADITYA LIQUIDTOOLS
  MRO — Maintenance, Repair & Overhaul

  Structure:
  Parent
    ↓
  Child
    ↓
  List

  MRO is intentionally kept simple.
  Detailed product specifications are handled
  separately in the main Products section.
*/

export const MRO_CATALOG = [
  // =====================================================
  // 1. WELDING & FABRICATION
  // =====================================================

  {
    id: 'welding-fabrication',
    name: 'Welding & Fabrication Maintenance',

    children: [
      {
        id: 'anti-spatter',
        name: 'Anti-Spatter',
      },
      {
        id: 'welding-cleaner',
        name: 'Welding Area Cleaner',
      },
    ],
  },

  // =====================================================
  // 2. CLEANING & DEGREASING
  // =====================================================

  {
    id: 'cleaning-degreasing',
    name: 'Cleaning & Degreasing',

    children: [
      {
        id: 'industrial-cleaner',
        name: 'Industrial Cleaner',
      },
      {
        id: 'degreaser',
        name: 'Degreaser',
      },
      {
        id: 'contact-cleaner',
        name: 'Electrical Contact Cleaner',
      },
    ],
  },

  // =====================================================
  // 3. RUST & CORROSION PROTECTION
  // =====================================================

  {
    id: 'rust-corrosion',
    name: 'Rust & Corrosion Protection',

    children: [
      {
        id: 'rust-preventive',
        name: 'Rust Preventive',
      },
      {
        id: 'penetrating-lubricant',
        name: 'Penetrating / Release Lubricant',
      },
      {
        id: 'corrosion-protection',
        name: 'Corrosion Protection',
      },
    ],
  },

  // =====================================================
  // 4. GENERAL MAINTENANCE
  // =====================================================

  {
    id: 'general-maintenance',
    name: 'General Maintenance',

    children: [
      {
        id: 'multi-purpose-spray',
        name: 'Multi-Purpose Maintenance Spray',
      },
      {
        id: 'silicone-spray',
        name: 'Silicone Spray',
      },
      {
        id: 'leak-detector',
        name: 'Leak Detector',
      },
    ],
  },

  // =====================================================
  // 5. MOULD RELEASE
  // =====================================================

  {
    id: 'mould-release',
    name: 'Mould Release',

    children: [
      {
        id: 'mould-release-agent',
        name: 'Mould Release Agent',
      },
    ],
  },
];

// =====================================================
// HELPERS
// =====================================================

export const getMROParent = (parentId) => {
  return MRO_CATALOG.find(
    (parent) => parent.id === parentId
  );
};

export const getMROChildren = (parentId) => {
  const parent = getMROParent(parentId);

  return parent?.children || [];
};

export const getMROChild = (parentId, childId) => {
  const parent = getMROParent(parentId);

  return (
    parent?.children?.find(
      (child) => child.id === childId
    ) || null
  );
};

export default MRO_CATALOG;