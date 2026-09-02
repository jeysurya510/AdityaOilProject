// src/components/Products.jsx

import { useEffect, useMemo, useState } from 'react';

import {
  Factory,
  Settings,
  Zap,
  Droplets,
  Package,
  Search,
  X,
  ChevronDown,
  ChevronRight,
  MessageCircle,
  FileText,
} from 'lucide-react';

import {
  COMPANY as companyInfo,
  COMPANY_PRODUCTS,
} from '../data/companyInfo.js';

import { PRODUCT_TAXONOMY } from '../data/productTaxonomy.js';


// =====================================================
// CATEGORY MAPPING
// =====================================================

const CATEGORY_MAPPING = {
  // Industrial Lubricants
  hydraulic: 'industrial-lubricants',
  industrial: 'industrial-lubricants',
  refrigeration: 'industrial-lubricants',

  // Specialty Lubricants
  specialty: 'specialty-lubricants',
  greases: 'specialty-lubricants',

  // Metal Working Fluids
  'metal-working': 'metal-working-fluids',
  metal: 'metal-working-fluids',
  metalWorking: 'metal-working-fluids',

  // Specialty Oils
  'specialty-oils': 'specialty-oils',
  specialtyOil: 'specialty-oils',
};


// =====================================================
// FAMILY ICONS
// =====================================================

const CATEGORY_ICONS = {
  'industrial-lubricants': Factory,
  'metal-working-fluids': Settings,
  'specialty-lubricants': Zap,
  'specialty-oils': Droplets,
};


// =====================================================
// MAIN COMPONENT
// =====================================================

function Products() {
  const [activeFamily, setActiveFamily] =
    useState('all');

  const [activeSubCategory, setActiveSubCategory] =
    useState('all');

  const [searchQuery, setSearchQuery] =
    useState('');

  const [selectedProduct, setSelectedProduct] =
    useState(null);


  // ===================================================
  // NAVIGATION PRODUCT FAMILY EVENT
  // ===================================================

  useEffect(() => {
    const handleProductFamilySelect = (event) => {
      const familyId = event.detail?.familyId;

      if (!familyId) return;

      setActiveFamily(familyId);
      setActiveSubCategory('all');
      setSearchQuery('');
    };

    window.addEventListener(
      'selectProductFamily',
      handleProductFamilySelect
    );

    return () => {
      window.removeEventListener(
        'selectProductFamily',
        handleProductFamilySelect
      );
    };
  }, []);


  // ===================================================
  // GET ACTIVE FAMILY DATA
  // ===================================================

  const activeFamilyData =
    PRODUCT_TAXONOMY.find(
      (family) => family.id === activeFamily
    );

  const subCategories =
    activeFamilyData?.children || [];


  // ===================================================
  // FILTER PRODUCTS
  // ===================================================

  const filteredProducts = useMemo(() => {
    let products = [...COMPANY_PRODUCTS];


    // -----------------------------------------------
    // FAMILY FILTER
    // -----------------------------------------------

    if (activeFamily !== 'all') {
      products = products.filter((product) => {
        const mappedFamily =
          CATEGORY_MAPPING[product.category];

        return mappedFamily === activeFamily;
      });
    }


    // -----------------------------------------------
    // SUB CATEGORY FILTER
    // -----------------------------------------------

    if (
      activeSubCategory !== 'all' &&
      activeSubCategory !== ''
    ) {
      products = products.filter((product) => {
        return (
          product.subCategory ===
          activeSubCategory
        );
      });
    }


    // -----------------------------------------------
    // SEARCH
    // -----------------------------------------------

    const query =
      searchQuery.trim().toLowerCase();

    if (query) {
      products = products.filter((product) => {
        const name =
          product.name?.toLowerCase() || '';

        const description =
          product.description?.toLowerCase() || '';

        const fullDescription =
          product.fullDescription?.toLowerCase() || '';

        const grade =
          product.grade?.toLowerCase() || '';

        const subCategory =
          product.subCategory?.toLowerCase() || '';

        const applications =
          product.applications || [];

        const applicationMatch =
          applications.some((application) =>
            application
              .toLowerCase()
              .includes(query)
          );

        return (
          name.includes(query) ||
          description.includes(query) ||
          fullDescription.includes(query) ||
          grade.includes(query) ||
          subCategory.includes(query) ||
          applicationMatch
        );
      });
    }

    return products;
  }, [
    activeFamily,
    activeSubCategory,
    searchQuery,
  ]);


  // ===================================================
  // RESET FILTERS
  // ===================================================

  const clearFilters = () => {
    setActiveFamily('all');
    setActiveSubCategory('all');
    setSearchQuery('');
  };


  // ===================================================
  // FAMILY SELECTION
  // ===================================================

  const handleFamilyChange = (familyId) => {
    setActiveFamily(familyId);
    setActiveSubCategory('all');
  };


  // ===================================================
  // WHATSAPP ENQUIRY
  // ===================================================

  const handleEnquiry = (productName) => {
    const whatsapp =
      companyInfo.social?.whatsapp ||
      companyInfo.whatsapp ||
      '';

    if (!whatsapp) return;

    const message =
      `Hello ${companyInfo.name || 'Aditya Liquidtools'},\n\n` +
      `I'm interested in ${productName}.\n\n` +
      `Please share technical specifications, ` +
      `availability and pricing.`;

    const whatsappUrl =
      `${whatsapp}?text=${encodeURIComponent(message)}`;

    window.open(
      whatsappUrl,
      '_blank',
      'noopener,noreferrer'
    );
  };


  // ===================================================
  // PRODUCT IMAGE
  // ===================================================

  const getProductImage = (product) => {
    if (product?.image) {
      return product.image;
    }

    return '🛢️';
  };


  // ===================================================
  // FAMILY ICON
  // ===================================================

  const getFamilyIcon = (familyId) => {
    const Icon =
      CATEGORY_ICONS[familyId] || Package;

    return (
      <Icon className="h-5 w-5" />
    );
  };


  // ===================================================
  // FAMILY NAME
  // ===================================================

  const getFamilyName = () => {
    if (activeFamily === 'all') {
      return 'All Products';
    }

    return (
      activeFamilyData?.name ||
      'Products'
    );
  };


  // ===================================================
  // RENDER
  // =====================================================

  return (
    <section
      id="products"
      className="
        bg-gradient-to-b
        from-gray-50
        to-white
        py-20
        md:py-28
      "
    >
      <div
        className="
          container
          mx-auto
          max-w-7xl
          px-4
        "
      >

        {/* =========================================
            HEADER
        ========================================= */}

        <div
          className="
            mx-auto
            mb-12
            max-w-3xl
            text-center
          "
        >
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-amber-100
              bg-amber-50
              px-4
              py-2
              text-sm
              font-semibold
              text-amber-700
            "
          >
            <Droplets size={16} />

            PRODUCT CATALOGUE
          </span>


          <h2
            className="
              mt-5
              text-4xl
              font-bold
              text-gray-900
              md:text-5xl
            "
          >
            Lubrication Solutions
          </h2>


          <p
            className="
              mt-5
              leading-relaxed
              text-gray-600
            "
          >
            Explore our product range by
            product family, category and
            application.
          </p>
        </div>


        {/* =========================================
            SEARCH
        ========================================= */}

        <div
          className="
            mx-auto
            mb-10
            max-w-3xl
          "
        >
          <div
            className="
              relative
              rounded-2xl
              border
              border-gray-200
              bg-white
              shadow-sm
            "
          >
            <Search
              className="
                absolute
                left-5
                top-1/2
                h-5
                w-5
                -translate-y-1/2
                text-gray-400
              "
            />

            <input
              type="text"
              value={searchQuery}
              onChange={(event) =>
                setSearchQuery(event.target.value)
              }
              placeholder="
                Search products, grades,
                applications...
              "
              className="
                w-full
                rounded-2xl
                bg-transparent
                py-4
                pl-14
                pr-12
                text-sm
                text-gray-800
                outline-none
                placeholder:text-gray-400
              "
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() =>
                  setSearchQuery('')
                }
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  rounded-full
                  p-1
                  text-gray-400
                  transition
                  hover:bg-gray-100
                  hover:text-gray-700
                "
                aria-label="Clear search"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>


        {/* =========================================
            PRODUCT FAMILY TABS
        ========================================= */}

        <div className="mb-8">
          <div
            className="
              grid
              grid-cols-1
              gap-3
              sm:grid-cols-2
              lg:grid-cols-5
            "
          >

            {/* ALL */}
            <button
              type="button"
              onClick={() =>
                handleFamilyChange('all')
              }
              className={`
                flex
                items-center
                gap-3
                rounded-2xl
                border
                px-4
                py-4
                text-left
                transition-all
                ${
                  activeFamily === 'all'
                    ? 'border-gray-900 bg-gray-900 text-white shadow-lg'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-amber-300 hover:bg-amber-50'
                }
              `}
            >
              <div
                className={`
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  ${
                    activeFamily === 'all'
                      ? 'bg-white/15'
                      : 'bg-gray-100'
                  }
                `}
              >
                <Package size={19} />
              </div>

              <div>
                <p className="text-sm font-bold">
                  All Products
                </p>

                <p
                  className={`
                    mt-0.5
                    text-xs
                    ${
                      activeFamily === 'all'
                        ? 'text-gray-300'
                        : 'text-gray-400'
                    }
                  `}
                >
                  Complete catalogue
                </p>
              </div>
            </button>


            {/* PRODUCT FAMILIES */}
            {PRODUCT_TAXONOMY.map((family) => {
              const Icon =
                CATEGORY_ICONS[family.id] ||
                Package;

              const isActive =
                activeFamily === family.id;

              return (
                <button
                  key={family.id}
                  type="button"
                  onClick={() =>
                    handleFamilyChange(family.id)
                  }
                  className={`
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    px-4
                    py-4
                    text-left
                    transition-all
                    ${
                      isActive
                        ? 'border-amber-500 bg-amber-500 text-white shadow-lg'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-amber-300 hover:bg-amber-50'
                    }
                  `}
                >
                  <div
                    className={`
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      ${
                        isActive
                          ? 'bg-white/15'
                          : 'bg-gray-100'
                      }
                    `}
                  >
                    <Icon size={19} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-bold">
                      {family.name}
                    </p>

                    <p
                      className={`
                        mt-0.5
                        text-xs
                        ${
                          isActive
                            ? 'text-amber-100'
                            : 'text-gray-400'
                        }
                      `}
                    >
                      {family.children?.length || 0}{' '}
                      categories
                    </p>
                  </div>
                </button>
              );
            })}

          </div>
        </div>


        {/* =========================================
            SUB CATEGORY FILTER
        ========================================= */}

        {activeFamily !== 'all' &&
          subCategories.length > 0 && (
            <div className="mb-10">
              <div
                className="
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  p-4
                  shadow-sm
                "
              >
                <div
                  className="
                    mb-3
                    flex
                    items-center
                    justify-between
                  "
                >
                  <div>
                    <p
                      className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-wider
                        text-gray-400
                      "
                    >
                      Categories
                    </p>

                    <p className="mt-1 font-semibold text-gray-800">
                      {getFamilyName()}
                    </p>
                  </div>

                  {activeSubCategory !== 'all' && (
                    <button
                      type="button"
                      onClick={() =>
                        setActiveSubCategory('all')
                      }
                      className="
                        text-xs
                        font-semibold
                        text-amber-600
                        hover:text-amber-700
                      "
                    >
                      Clear
                    </button>
                  )}
                </div>


                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveSubCategory('all')
                    }
                    className={`
                      rounded-full
                      px-4
                      py-2
                      text-sm
                      font-medium
                      transition
                      ${
                        activeSubCategory === 'all'
                          ? 'bg-gray-900 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }
                    `}
                  >
                    All
                  </button>


                  {subCategories.map((category) => {
                    const categoryId =
                      category.id ||
                      category.name;

                    const categoryName =
                      category.name ||
                      category;

                    return (
                      <button
                        key={categoryId}
                        type="button"
                        onClick={() =>
                          setActiveSubCategory(
                            categoryName
                          )
                        }
                        className={`
                          rounded-full
                          px-4
                          py-2
                          text-sm
                          font-medium
                          transition
                          ${
                            activeSubCategory ===
                            categoryName
                              ? 'bg-amber-500 text-white'
                              : 'bg-gray-100 text-gray-600 hover:bg-amber-50 hover:text-amber-700'
                          }
                        `}
                      >
                        {categoryName}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}


        {/* =========================================
            RESULT HEADER
        ========================================= */}

        <div
          className="
            mb-6
            flex
            flex-col
            gap-3
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div>
            <p className="text-sm text-gray-500">
              Showing
              <span className="mx-1 font-bold text-gray-900">
                {filteredProducts.length}
              </span>
              product
              {filteredProducts.length === 1
                ? ''
                : 's'}
            </p>
          </div>


          {(activeFamily !== 'all' ||
            activeSubCategory !== 'all' ||
            searchQuery) && (
            <button
              type="button"
              onClick={clearFilters}
              className="
                inline-flex
                items-center
                gap-2
                self-start
                rounded-lg
                border
                border-gray-200
                bg-white
                px-3
                py-2
                text-sm
                font-medium
                text-gray-600
                transition
                hover:border-gray-300
                hover:bg-gray-50
              "
            >
              <X size={15} />
              Clear Filters
            </button>
          )}
        </div>


        {/* =========================================
            EMPTY STATE
        ========================================= */}

        {filteredProducts.length === 0 && (
          <div
            className="
              rounded-3xl
              border
              border-dashed
              border-gray-300
              bg-white
              px-6
              py-16
              text-center
            "
          >
            <div
              className="
                mx-auto
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-gray-100
                text-gray-400
              "
            >
              <Package size={28} />
            </div>

            <h3
              className="
                mt-5
                text-xl
                font-bold
                text-gray-900
              "
            >
              No products found
            </h3>

            <p
              className="
                mx-auto
                mt-2
                max-w-md
                text-sm
                leading-relaxed
                text-gray-500
              "
            >
              No product is currently available
              for the selected family or search.
              Try another category or clear the
              filters.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="
                mt-6
                rounded-xl
                bg-gray-900
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-gray-800
              "
            >
              View All Products
            </button>
          </div>
        )}


        {/* =========================================
            PRODUCT GRID
        ========================================= */}

        {filteredProducts.length > 0 && (
          <div
            className="
              grid
              grid-cols-1
              gap-6
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {filteredProducts.map((product) => (
              <article
                key={
                  product.id ||
                  product.name
                }
                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  border
                  border-gray-200
                  bg-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >

                {/* PRODUCT IMAGE */}
                <div
                  className="
                    flex
                    h-56
                    items-center
                    justify-center
                    overflow-hidden
                    bg-gradient-to-br
                    from-gray-50
                    to-gray-100
                  "
                >
                  {product.image &&
                  typeof product.image ===
                    'string' &&
                  product.image.startsWith(
                    'http'
                  ) ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="
                        max-h-44
                        max-w-[82%]
                        object-contain
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  ) : (
                    <span
                      className="
                        text-7xl
                        transition-transform
                        duration-500
                        group-hover:scale-110
                      "
                    >
                      {getProductImage(product)}
                    </span>
                  )}
                </div>


                {/* PRODUCT INFO */}
                <div className="p-6">

                  {/* CATEGORY + GRADE */}
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-3
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-wider
                        text-amber-600
                      "
                    >
                      {product.subCategory ||
                        product.category ||
                        'Lubricant'}
                    </span>

                    {product.grade && (
                      <span
                        className="
                          shrink-0
                          text-xs
                          font-medium
                          text-gray-400
                        "
                      >
                        {product.grade}
                      </span>
                    )}
                  </div>


                  {/* NAME */}
                  <h3
                    className="
                      mt-2
                      text-xl
                      font-bold
                      leading-snug
                      text-gray-900
                    "
                  >
                    {product.name}
                  </h3>


                  {/* DESCRIPTION */}
                  {product.description && (
                    <p
                      className="
                        mt-3
                        line-clamp-3
                        text-sm
                        leading-relaxed
                        text-gray-600
                      "
                    >
                      {product.description}
                    </p>
                  )}


                  {/* APPLICATIONS */}
                  {product.applications?.length >
                    0 && (
                    <div className="mt-4">
                      <p
                        className="
                          mb-2
                          text-xs
                          font-bold
                          uppercase
                          tracking-wide
                          text-gray-400
                        "
                      >
                        Applications
                      </p>

                      <div
                        className="
                          flex
                          flex-wrap
                          gap-2
                        "
                      >
                        {product.applications
                          .slice(0, 4)
                          .map((application) => (
                            <span
                              key={application}
                              className="
                                rounded-full
                                bg-gray-100
                                px-2.5
                                py-1
                                text-xs
                                text-gray-600
                              "
                            >
                              {application}
                            </span>
                          ))}
                      </div>
                    </div>
                  )}


                  {/* ACTIONS */}
                  <div
                    className="
                      mt-6
                      flex
                      gap-3
                    "
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedProduct(
                          product
                        )
                      }
                      className="
                        flex
                        flex-1
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        border
                        border-gray-200
                        bg-white
                        px-4
                        py-3
                        text-sm
                        font-semibold
                        text-gray-700
                        transition
                        hover:border-gray-300
                        hover:bg-gray-50
                      "
                    >
                      <FileText size={16} />
                      View Details
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        handleEnquiry(
                          product.name
                        )
                      }
                      className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-green-600
                        px-4
                        py-3
                        text-sm
                        font-semibold
                        text-white
                        transition
                        hover:bg-green-700
                      "
                    >
                      <MessageCircle
                        size={16}
                      />
                      Enquire
                    </button>
                  </div>

                </div>
              </article>
            ))}
          </div>
        )}


        {/* =========================================
            PRODUCT COUNT
        ========================================= */}

        {filteredProducts.length > 0 && (
          <div
            className="
              mt-10
              text-center
            "
          >
            <p className="text-sm text-gray-400">
              {getFamilyName()} •{' '}
              {filteredProducts.length}{' '}
              product
              {filteredProducts.length === 1
                ? ''
                : 's'}
            </p>
          </div>
        )}

      </div>


      {/* ===========================================
          PRODUCT DETAILS MODAL
      =========================================== */}

      {selectedProduct && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/60
            p-4
            backdrop-blur-sm
          "
          onClick={() =>
            setSelectedProduct(null)
          }
        >
          <div
            className="
              relative
              max-h-[90vh]
              w-full
              max-w-4xl
              overflow-y-auto
              rounded-3xl
              bg-white
              shadow-2xl
            "
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* CLOSE */}
            <button
              type="button"
              onClick={() =>
                setSelectedProduct(null)
              }
              className="
                absolute
                right-4
                top-4
                z-10
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-white
                text-gray-600
                shadow-md
                transition
                hover:bg-gray-100
              "
              aria-label="Close product details"
            >
              <X size={20} />
            </button>


            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
              "
            >

              {/* MODAL IMAGE */}
              <div
                className="
                  flex
                  min-h-[300px]
                  items-center
                  justify-center
                  bg-gradient-to-br
                  from-gray-50
                  to-gray-100
                  p-8
                  md:min-h-[520px]
                "
              >
                {selectedProduct.image &&
                typeof selectedProduct.image ===
                  'string' &&
                selectedProduct.image.startsWith(
                  'http'
                ) ? (
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="
                      max-h-[400px]
                      max-w-full
                      object-contain
                    "
                  />
                ) : (
                  <span className="text-9xl">
                    {getProductImage(
                      selectedProduct
                    )}
                  </span>
                )}
              </div>


              {/* MODAL DETAILS */}
              <div className="p-7 md:p-10">

                <span
                  className="
                    inline-flex
                    rounded-full
                    bg-amber-50
                    px-3
                    py-1
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    text-amber-700
                  "
                >
                  {selectedProduct.subCategory ||
                    selectedProduct.category ||
                    'Lubricant'}
                </span>


                <h2
                  className="
                    mt-4
                    text-3xl
                    font-bold
                    leading-tight
                    text-gray-900
                  "
                >
                  {selectedProduct.name}
                </h2>


                {selectedProduct.grade && (
                  <p
                    className="
                      mt-3
                      text-sm
                      font-medium
                      text-gray-500
                    "
                  >
                    Grade:{' '}
                    <span className="text-gray-800">
                      {selectedProduct.grade}
                    </span>
                  </p>
                )}


                {selectedProduct.fullDescription ||
                selectedProduct.description ? (
                  <p
                    className="
                      mt-6
                      text-sm
                      leading-7
                      text-gray-600
                    "
                  >
                    {selectedProduct.fullDescription ||
                      selectedProduct.description}
                  </p>
                ) : null}


                {/* SPECIFICATIONS */}
                {selectedProduct.specs &&
                  Object.keys(
                    selectedProduct.specs
                  ).length > 0 && (
                    <div className="mt-7">
                      <h3
                        className="
                          text-sm
                          font-bold
                          uppercase
                          tracking-wider
                          text-gray-900
                        "
                      >
                        Specifications
                      </h3>

                      <div
                        className="
                          mt-3
                          overflow-hidden
                          rounded-2xl
                          border
                          border-gray-200
                        "
                      >
                        {Object.entries(
                          selectedProduct.specs
                        ).map(
                          ([key, value]) => (
                            <div
                              key={key}
                              className="
                                grid
                                grid-cols-2
                                gap-4
                                border-b
                                border-gray-100
                                px-4
                                py-3
                                last:border-b-0
                              "
                            >
                              <span
                                className="
                                  text-xs
                                  font-semibold
                                  capitalize
                                  text-gray-400
                                "
                              >
                                {key
                                  .replace(
                                    /([A-Z])/g,
                                    ' $1'
                                  )
                                  .trim()}
                              </span>

                              <span
                                className="
                                  text-right
                                  text-xs
                                  font-medium
                                  text-gray-700
                                "
                              >
                                {String(value)}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}


                {/* APPLICATIONS */}
                {selectedProduct.applications
                  ?.length > 0 && (
                  <div className="mt-7">
                    <h3
                      className="
                        text-sm
                        font-bold
                        uppercase
                        tracking-wider
                        text-gray-900
                      "
                    >
                      Applications
                    </h3>

                    <div
                      className="
                        mt-3
                        flex
                        flex-wrap
                        gap-2
                      "
                    >
                      {selectedProduct.applications.map(
                        (application) => (
                          <span
                            key={application}
                            className="
                              rounded-full
                              bg-gray-100
                              px-3
                              py-1.5
                              text-xs
                              text-gray-600
                            "
                          >
                            {application}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                )}


                {/* MODAL ACTIONS */}
                <div
                  className="
                    mt-8
                    flex
                    flex-col
                    gap-3
                    sm:flex-row
                  "
                >
                  <button
                    type="button"
                    onClick={() =>
                      handleEnquiry(
                        selectedProduct.name
                      )
                    }
                    className="
                      flex
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-green-600
                      px-5
                      py-3
                      text-sm
                      font-bold
                      text-white
                      transition
                      hover:bg-green-700
                    "
                  >
                    <MessageCircle size={17} />
                    WhatsApp Enquiry
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedProduct(null)
                    }
                    className="
                      rounded-xl
                      border
                      border-gray-200
                      bg-white
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-gray-700
                      transition
                      hover:bg-gray-50
                    "
                  >
                    Close
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

export default Products;