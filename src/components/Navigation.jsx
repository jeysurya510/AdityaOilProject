import { useEffect, useState } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Factory,
  Settings,
  Zap,
  Droplets,
  Wrench,
  Building2,
  Lightbulb,
  Leaf,
  Phone,
  MessageCircle,
} from 'lucide-react';

import { COMPANY } from '../data/companyInfo.js';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setProductsOpen(false);
  };

  const scrollToSection = (id) => {
    closeMenu();

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  /*
   * Sends a custom event to Products.jsx.
   * Products component can listen for this event and activate
   * the selected product family.
   */
  const selectProductFamily = (familyId) => {
    closeMenu();

    const productsSection = document.getElementById('products');

    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    window.setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent('selectProductFamily', {
          detail: {
            familyId,
          },
        })
      );
    }, 450);
  };

  const productItems = [
    {
      id: 'industrial-lubricants',
      name: 'Industrial Lubricants',
      icon: Factory,
      description: 'Industrial oils and machinery lubrication',
    },
    {
      id: 'metal-working-fluids',
      name: 'Metal Working Fluids',
      icon: Settings,
      description: 'Metal removal, forming and treatment fluids',
    },
    {
      id: 'specialty-lubricants',
      name: 'Specialty Lubricants',
      icon: Zap,
      description: 'Specialised lubrication solutions',
    },
    {
      id: 'specialty-oils',
      name: 'Specialty Oils',
      icon: Droplets,
      description: 'Transformer oils, white oils and petroleum jelly',
    },
  ];

  const navItems = [
    {
      name: 'Home',
      id: 'home',
    },
    {
      name: 'Industries',
      id: 'industries',
      icon: Building2,
    },
    {
      name: 'MRO',
      id: 'mro',
      icon: Wrench,
    },
    {
      name: 'About Us',
      id: 'about',
    },
    {
      name: 'Innovation',
      id: 'innovation',
      icon: Lightbulb,
    },
    {
      name: 'Sustainability',
      id: 'sustainability',
      icon: Leaf,
    },
    {
      name: 'Contact',
      id: 'contact',
    },
  ];

  const phone =
    COMPANY.phone ||
    COMPANY.mobile ||
    COMPANY.contact?.phone ||
    '';

  const whatsapp =
    COMPANY.whatsapp ||
    COMPANY.social?.whatsapp ||
    '';

  return (
    <>
      <header
        className={`
          fixed
          left-0
          right-0
          top-0
          z-50
          border-b
          transition-all
          duration-300
          ${
            scrolled
              ? 'border-gray-200 bg-white/95 shadow-lg backdrop-blur-md'
              : 'border-gray-100 bg-white/90 backdrop-blur-sm'
          }
        `}
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex h-20 items-center justify-between">
            {/* LOGO */}
            <button
              type="button"
              onClick={() => scrollToSection('home')}
              className="flex shrink-0 items-center gap-3 text-left"
            >
              {COMPANY.logo ? (
                <img
                  src={COMPANY.logo}
                  alt={COMPANY.name || 'Aditya Liquidtools'}
                  className="h-11 w-auto object-contain"
                />
              ) : (
                <>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-600">
                    <Droplets size={22} className="text-white" />
                  </div>

                  <div className="leading-tight">
                    <div className="font-bold text-gray-900">
                      ADITYA LIQUIDTOOLS
                    </div>

                    <div className="text-xs text-gray-500">
                      India Private Limited
                    </div>
                  </div>
                </>
              )}
            </button>

            {/* DESKTOP NAV */}
            <nav className="hidden items-center gap-1 lg:flex">
              {/* HOME */}
              <button
                type="button"
                onClick={() => scrollToSection('home')}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-amber-50 hover:text-amber-600"
              >
                Home
              </button>

              {/* PRODUCTS DROPDOWN */}
              <div
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setProductsOpen((value) => !value)}
                  className={`
                    flex items-center gap-1.5 rounded-lg
                    px-3 py-2.5 text-sm font-medium
                    transition
                    ${
                      productsOpen
                        ? 'bg-amber-50 text-amber-600'
                        : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'
                    }
                  `}
                >
                  Products

                  <ChevronDown
                    size={15}
                    className={`transition-transform ${
                      productsOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {productsOpen && (
                  <div className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3">
                    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-3 shadow-2xl">
                      <div className="px-3 pb-3 pt-2">
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                          Product Families
                        </p>
                      </div>

                      {productItems.map((product) => {
                        const Icon = product.icon;

                        return (
                          <button
                            key={product.id}
                            type="button"
                            onClick={() =>
                              selectProductFamily(product.id)
                            }
                            className="group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-amber-50"
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition group-hover:bg-amber-100 group-hover:text-amber-600">
                              <Icon size={18} />
                            </div>

                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-gray-800 group-hover:text-amber-700">
                                {product.name}
                              </p>

                              <p className="mt-0.5 text-xs leading-5 text-gray-400">
                                {product.description}
                              </p>
                            </div>
                          </button>
                        );
                      })}

                      <div className="mt-2 border-t border-gray-100 pt-2">
                        <button
                          type="button"
                          onClick={() =>
                            scrollToSection('products')
                          }
                          className="w-full rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
                        >
                          View All Products
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* OTHER NAV ITEMS */}
              {navItems
                .filter((item) => item.name !== 'Home')
                .map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-amber-50 hover:text-amber-600"
                    >
                      {Icon && <Icon size={15} />}
                      {item.name}
                    </button>
                  );
                })}
            </nav>

            {/* DESKTOP CTA */}
            <div className="hidden items-center gap-2 lg:flex">
              {whatsapp && (
                <a
                  href={`${whatsapp}?text=${encodeURIComponent(
                    `Hello ${
                      COMPANY.shortName || 'Aditya Liquidtools'
                    }, I would like to make an enquiry.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
                >
                  <MessageCircleIcon />
                  WhatsApp
                </a>
              )}

              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-amber-500/20 transition hover:bg-amber-600"
              >
                <Phone size={16} />
                Get in Touch
              </button>
            </div>

            {/* MOBILE BUTTON */}
            <button
              type="button"
              onClick={() => {
                setIsOpen((value) => !value);

                if (isOpen) {
                  setProductsOpen(false);
                }
              }}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-gray-700 lg:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="border-t border-gray-100 bg-white shadow-xl lg:hidden">
            <div className="container mx-auto max-w-7xl px-4 py-4">
              <div className="space-y-1">
                {/* HOME */}
                <button
                  type="button"
                  onClick={() => scrollToSection('home')}
                  className="w-full rounded-xl px-4 py-3 text-left text-gray-700 transition hover:bg-amber-50 hover:text-amber-700"
                >
                  Home
                </button>

                {/* PRODUCTS */}
                <div>
                  <button
                    type="button"
                    onClick={() =>
                      setProductsOpen((value) => !value)
                    }
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-gray-700 transition hover:bg-amber-50 hover:text-amber-700"
                  >
                    <span>Products</span>

                    <ChevronDown
                      size={17}
                      className={`transition-transform ${
                        productsOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {productsOpen && (
                    <div className="ml-3 mt-1 space-y-1 rounded-xl bg-gray-50 p-2">
                      {productItems.map((product) => {
                        const Icon = product.icon;

                        return (
                          <button
                            key={product.id}
                            type="button"
                            onClick={() =>
                              selectProductFamily(product.id)
                            }
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm text-gray-600 transition hover:bg-white hover:text-amber-700"
                          >
                            <Icon size={17} />
                            <span>{product.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* OTHER ITEMS */}
                {navItems
                  .filter((item) => item.name !== 'Home')
                  .map((item) => {
                    const Icon = item.icon;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() =>
                          scrollToSection(item.id)
                        }
                        className="flex w-full items-center gap-2 rounded-xl px-4 py-3 text-left text-gray-700 transition hover:bg-amber-50 hover:text-amber-700"
                      >
                        {Icon && <Icon size={17} />}
                        {item.name}
                      </button>
                    );
                  })}

                {/* MOBILE CTA */}
                <div className="grid gap-2 pt-3">
                  {whatsapp && (
                    <a
                      href={`${whatsapp}?text=${encodeURIComponent(
                        `Hello ${
                          COMPANY.shortName ||
                          'Aditya Liquidtools'
                        }, I would like to make an enquiry.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                      className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 font-bold text-white"
                    >
                      <MessageCircleIcon />
                      WhatsApp Enquiry
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => scrollToSection('contact')}
                    className="flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-3 font-bold text-white"
                  >
                    <Phone size={17} />
                    Get in Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Header spacer */}
      <div className="h-20" />
    </>
  );
};

/*
 * Small helper so we don't need another dependency.
 */
const MessageCircleIcon = () => (
  <MessageCircle size={17} />
);

export default Navigation;