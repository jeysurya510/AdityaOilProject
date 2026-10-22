import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  ShieldCheck,
  Factory,
  MessageCircle,
  Heart,
  ArrowUp,
  Droplets,
} from 'lucide-react';

import { COMPANY, PRODUCT_FAMILIES } from '../data/companyInfo.js';

const Footer = () => {
  const phone = COMPANY.phone || '';
  const whatsapp = COMPANY.social?.whatsapp || COMPANY.whatsapp || '';
  const salesEmail = COMPANY.salesEmail || '';
  const infoEmail = COMPANY.infoEmail || '';
  const address = COMPANY.registeredAddress || '';
  const hours = COMPANY.hours || {};

  // Quick links (shortened)
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Industries', href: '#industries' },
    { label: 'MRO', href: '#mro' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  // Emails (shortened to 2)
  const emailList = [
    { label: 'Sales', email: salesEmail },
    { label: 'General', email: infoEmail },
  ].filter((item) => item.email);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gray-950 text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-orange-500/5 blur-3xl" />
      </div>

      <div className="relative container mx-auto max-w-7xl px-4 pt-16 pb-8">

        {/* MAIN FOOTER */}
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">

          {/* COMPANY */}
          <div>
            <div className="flex items-center gap-3">
              {COMPANY.logo ? (
                <img
                  src={COMPANY.logo}
                  alt={COMPANY.name || 'Company'}
                  className="h-12 w-auto object-contain"
                />
              ) : (
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-600">
                  <Droplets size={24} />
                </div>
              )}

              <div>
                <h2 className="text-xl font-bold tracking-wide">
                  {COMPANY.shortName || 'COMPANY'}
                </h2>
                <p className="text-sm text-gray-400">India Private Limited</p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 text-gray-400">
              {COMPANY.description ||
                'Industrial lubricant solutions focused on quality, application support and reliable customer service.'}
            </p>

            {/* Product Categories (shortened) */}
            <div className="mt-7">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amber-400">
                Product Categories
              </p>

              <div className="space-y-2">
                {(PRODUCT_FAMILIES || []).map((family, index) => (
                  <button
                    key={family.id || family.name || index}
                    type="button"
                    onClick={() => scrollToSection('#products')}
                    className="flex w-full items-center gap-2 text-left text-sm text-gray-400 transition hover:text-white"
                  >
                    <ChevronRight size={14} className="text-amber-500" />
                    {family.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-lg font-bold">
              <ChevronRight className="text-amber-400" size={19} />
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.href)}
                    className="group flex items-center gap-2 text-sm text-gray-400 transition hover:text-amber-400"
                  >
                    <ChevronRight
                      size={13}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* MRO */}
            <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2">
                <Factory size={17} className="text-amber-400" />
                <span className="font-semibold">MRO Support</span>
              </div>
              <p className="mt-2 text-xs leading-5 text-gray-400">
                Maintenance, repair and overhaul product categories.
              </p>
              <button
                type="button"
                onClick={() => scrollToSection('#mro')}
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-amber-400 hover:text-amber-300"
              >
                View MRO
                <ChevronRight size={13} />
              </button>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-lg font-bold">
              <MessageCircle size={19} className="text-amber-400" />
              Contact
            </h3>

            <div className="space-y-5">
              {address && (
                <div className="flex items-start gap-3">
                  <MapPin size={19} className="mt-1 shrink-0 text-amber-400" />
                  <div>
                    <p className="font-medium">Registered Office</p>
                    <p className="mt-1 text-sm leading-6 text-gray-400">
                      {address}
                    </p>
                  </div>
                </div>
              )}

              {phone && (
                <div className="flex items-start gap-3">
                  <Phone size={19} className="mt-1 shrink-0 text-amber-400" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="mt-1 block text-sm text-gray-400 hover:text-amber-400"
                    >
                      {phone}
                    </a>
                  </div>
                </div>
              )}

              {emailList.length > 0 && (
                <div className="flex items-start gap-3">
                  <Mail size={19} className="mt-1 shrink-0 text-amber-400" />
                  <div className="min-w-0">
                    <p className="font-medium">Email</p>
                    <div className="mt-2 space-y-2">
                      {emailList.map((item) => (
                        <div key={item.email}>
                          <a
                            href={`mailto:${item.email}`}
                            className="block break-all text-sm text-gray-400 hover:text-amber-400"
                          >
                            {item.email}
                          </a>
                          <span className="text-xs text-gray-600">
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-3">
                <Clock size={19} className="mt-1 shrink-0 text-amber-400" />
                <div>
                  <p className="font-medium">Business Hours</p>
                  <div className="mt-1 space-y-1 text-sm text-gray-400">
                    {hours.weekdays && <p>{hours.weekdays}</p>}
                    {hours.saturday && <p>{hours.saturday}</p>}
                    {hours.sunday && <p>{hours.sunday}</p>}
                  </div>
                </div>
              </div>
            </div>

            {/* Business Details */}
            {(COMPANY.cin || COMPANY.gst || COMPANY.pan) && (
              <div className="mt-7 rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="mb-3 flex items-center gap-2">
                  <ShieldCheck size={17} className="text-amber-400" />
                  <h4 className="font-semibold">Business Details</h4>
                </div>
                <div className="space-y-1 text-xs text-gray-400">
                  {COMPANY.cin && <p>CIN: {COMPANY.cin}</p>}
                  {COMPANY.gst && <p>GST: {COMPANY.gst}</p>}
                  {COMPANY.pan && <p>PAN: {COMPANY.pan}</p>}
                </div>
              </div>
            )}
          </div>

          {/* CONNECT */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-lg font-bold">
              <Droplets size={19} className="text-amber-400" />
              Connect With Us
            </h3>

            <p className="text-sm leading-6 text-gray-400">
              For product enquiries, industrial requirements and MRO support,
              contact our team directly.
            </p>

            {whatsapp && (
              <a
                href={`${whatsapp}?text=${encodeURIComponent(
                  `Hello, I would like to make an enquiry.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                <MessageCircle size={19} />
                WhatsApp Enquiry
              </a>
            )}

            {salesEmail && (
              <a
                href={`mailto:${salesEmail}`}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-gray-200 transition hover:border-amber-400/40 hover:text-amber-400"
              >
                <Mail size={18} />
                Email Sales
              </a>
            )}

            {/* Support note */}
            <div className="mt-8 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
              <p className="text-sm font-semibold text-amber-400">
                Need product assistance?
              </p>
              <p className="mt-2 text-xs leading-5 text-gray-400">
                Share your equipment or application requirement with us.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col gap-5 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()}{' '}
              {COMPANY.name || 'Company'}. All rights reserved.
            </p>
            <p className="mt-1">
              Made with{' '}
              <Heart
                size={13}
                className="mx-1 inline text-red-500"
                fill="currentColor"
              />
              in India
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-500">
            <span>General Lubricants</span>
            <span>Metal Working Fluids</span>
            <span>Automotive Lubricants</span>
          </div>
        </div>
      </div>

      {/* BACK TO TOP */}
      <motion.button
        type="button"
        onClick={scrollToTop}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-7 right-7 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-amber-500 text-white shadow-xl transition hover:bg-amber-600"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </motion.button>

      {/* FLOATING WHATSAPP */}
      {whatsapp && (
        <motion.a
          href={`${whatsapp}?text=${encodeURIComponent(
            `Hello, I would like to make an enquiry.`
          )}`}
          target="_blank"
          rel="noreferrer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.08 }}
          className="fixed bottom-20 right-7 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl"
          aria-label="WhatsApp Chat"
        >
          <MessageCircle size={27} />
        </motion.a>
      )}
    </footer>
  );
};

export default Footer;