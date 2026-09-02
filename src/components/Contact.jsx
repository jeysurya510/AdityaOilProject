import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
  Clock,
  Copy,
  ExternalLink,
  Building2,
  Package,
  Wrench,
} from 'lucide-react';

import { COMPANY } from '../data/companyInfo.js';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    enquiryType: 'Product Enquiry',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [copied, setCopied] = useState('');

  const phone =
    COMPANY.phone ||
    COMPANY.mobile ||
    COMPANY.contact?.phone ||
    COMPANY.contact?.mobile ||
    '';

  const whatsapp =
    COMPANY.whatsapp ||
    COMPANY.social?.whatsapp ||
    '';

  const salesEmail =
    COMPANY.salesEmail ||
    COMPANY.contact?.salesEmail ||
    COMPANY.email ||
    COMPANY.infoEmail ||
    '';

  const infoEmail =
    COMPANY.infoEmail ||
    COMPANY.email ||
    COMPANY.contact?.infoEmail ||
    '';

  const address =
    COMPANY.registeredAddress ||
    COMPANY.address ||
    COMPANY.contact?.address ||
    '';

  const hours = COMPANY.hours || {};

  const enquiryTypes = [
    {
      value: 'Product Enquiry',
      label: 'Product Enquiry',
      icon: Package,
    },
    {
      value: 'Bulk Order',
      label: 'Bulk Order',
      icon: Building2,
    },
    {
      value: 'Technical Support',
      label: 'Technical Support',
      icon: Wrench,
    },
    {
      value: 'MRO Enquiry',
      label: 'MRO Enquiry',
      icon: Wrench,
    },
    {
      value: 'General Enquiry',
      label: 'General Enquiry',
      icon: MessageCircle,
    },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleCopy = async (value, label) => {
    if (!value) return;

    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);

      setTimeout(() => {
        setCopied('');
      }, 1800);
    } catch {
      // Clipboard may be unavailable in some browsers.
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    const subject = `${formData.enquiryType} - ${COMPANY.shortName || 'Aditya Liquidtools'}`;

    const body = [
      `Hello ${COMPANY.shortName || 'Aditya Liquidtools'},`,
      '',
      'I would like to make an enquiry.',
      '',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || '-'}`,
      `Company: ${formData.company || '-'}`,
      `Enquiry Type: ${formData.enquiryType}`,
      '',
      'Message:',
      formData.message || '-',
    ].join('\n');

    const mailtoUrl =
      `mailto:${salesEmail}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        enquiryType: 'Product Enquiry',
        message: '',
      });

      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    }, 500);
  };

  const handleWhatsApp = () => {
    if (!whatsapp) return;

    const message = [
      `Hello ${COMPANY.shortName || 'Aditya Liquidtools'},`,
      '',
      'I am interested in your products.',
      '',
      `Name: ${formData.name || '-'}`,
      `Phone: ${formData.phone || '-'}`,
      `Email: ${formData.email || '-'}`,
      `Company: ${formData.company || '-'}`,
      `Enquiry: ${formData.enquiryType}`,
      `Message: ${formData.message || '-'}`,
    ].join('\n');

    const url = `${whatsapp}${
      whatsapp.includes('?') ? '&' : '?'
    }text=${encodeURIComponent(message)}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 md:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl" />
        <div className="absolute -left-40 bottom-10 h-96 w-96 rounded-full bg-orange-100/30 blur-3xl" />
      </div>

      <div className="relative container mx-auto max-w-7xl px-4">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
            <MessageCircle size={16} />
            GET IN TOUCH
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Contact{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              {COMPANY.shortName || 'Aditya Liquidtools'}
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
            Have a product requirement or industrial lubricant enquiry?
            Get in touch with our team for product and application support.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid gap-8 lg:grid-cols-5">
          {/* CONTACT INFORMATION */}
          <div className="space-y-5 lg:col-span-2">
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-gray-900 p-6 text-white shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500">
                  <Phone size={22} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm text-gray-400">Call Us</p>

                  <a
                    href={phone ? `tel:${phone.replace(/\s/g, '')}` : '#'}
                    className="mt-1 block break-all text-lg font-bold hover:text-amber-400"
                  >
                    {phone || 'Contact number'}
                  </a>

                  <p className="mt-1 text-sm text-gray-400">
                    For product enquiries and support
                  </p>
                </div>

                {phone && (
                  <button
                    type="button"
                    onClick={() => handleCopy(phone, 'phone')}
                    className="rounded-lg p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
                    aria-label="Copy phone number"
                  >
                    <Copy size={17} />
                  </button>
                )}
              </div>

              {copied === 'phone' && (
                <div className="mt-3 text-xs text-green-400">
                  Phone number copied
                </div>
              )}
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <Mail size={22} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm text-gray-500">Sales Email</p>

                  <a
                    href={salesEmail ? `mailto:${salesEmail}` : '#'}
                    className="mt-1 block break-all font-bold text-gray-900 hover:text-amber-600"
                  >
                    {salesEmail || 'sales email'}
                  </a>

                  <p className="mt-1 text-sm text-gray-500">
                    For product and business enquiries
                  </p>
                </div>

                {salesEmail && (
                  <button
                    type="button"
                    onClick={() => handleCopy(salesEmail, 'email')}
                    className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                    aria-label="Copy email"
                  >
                    <Copy size={17} />
                  </button>
                )}
              </div>

              {copied === 'email' && (
                <div className="mt-3 text-xs text-green-600">
                  Email copied
                </div>
              )}
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Registered Office
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-700">
                    {address || 'Registered office address'}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.24 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <Clock size={22} />
                </div>

                <div className="flex-1">
                  <p className="font-bold text-gray-900">
                    Business Hours
                  </p>

                  <div className="mt-3 space-y-2 text-sm text-gray-600">
                    {hours.weekdays && (
                      <div className="flex justify-between gap-4">
                        <span>Monday – Friday</span>
                        <span className="font-medium text-gray-900">
                          {hours.weekdays}
                        </span>
                      </div>
                    )}

                    {hours.saturday && (
                      <div className="flex justify-between gap-4">
                        <span>Saturday</span>
                        <span className="font-medium text-gray-900">
                          {hours.saturday}
                        </span>
                      </div>
                    )}

                    {hours.sunday && (
                      <div className="flex justify-between gap-4">
                        <span>Sunday</span>
                        <span className="font-medium text-gray-900">
                          {hours.sunday}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl md:p-8 lg:col-span-3"
          >
            <div className="mb-7">
              <h3 className="text-2xl font-bold text-gray-900">
                Send an Enquiry
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Fill in your details and send your requirement directly to
                our sales team.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Email */}
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Email *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-100"
                  />
                </div>
              </div>

              {/* Phone + Company */}
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Company
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-100"
                  />
                </div>
              </div>

              {/* Enquiry Type */}
              <div>
                <label
                  htmlFor="enquiryType"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Enquiry Type
                </label>

                <select
                  id="enquiryType"
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-100"
                >
                  {enquiryTypes.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us about your product or application requirement..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-100"
                />
              </div>

              {/* Status */}
              {submitStatus === 'success' && (
                <div className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0" />
                  <span>
                    Your email enquiry has been prepared. Please complete
                    the send action in your email application.
                  </span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                  Please enter your name and valid email address.
                </div>
              )}

              {/* Buttons */}
              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-amber-500/20 transition hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Send size={18} />

                  {isSubmitting
                    ? 'Preparing...'
                    : 'Send Email Enquiry'}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  disabled={!whatsapp}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <MessageCircle size={19} />
                  WhatsApp Enquiry
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* EMAIL DEPARTMENT STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <Mail size={21} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Sales
                </p>

                <a
                  href={salesEmail ? `mailto:${salesEmail}` : '#'}
                  className="font-semibold text-gray-900 hover:text-amber-600"
                >
                  {salesEmail || 'Sales Email'}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Mail size={21} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  General Information
                </p>

                <a
                  href={infoEmail ? `mailto:${infoEmail}` : '#'}
                  className="font-semibold text-gray-900 hover:text-blue-600"
                >
                  {infoEmail || 'Info Email'}
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* QUICK ACTIONS */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {phone && (
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-amber-300 hover:text-amber-600"
            >
              <Phone size={17} />
              Call Now
            </a>
          )}

          {salesEmail && (
            <a
              href={`mailto:${salesEmail}`}
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-amber-300 hover:text-amber-600"
            >
              <Mail size={17} />
              Email Us
            </a>
          )}

          {whatsapp && (
            <a
              href={`${whatsapp}?text=${encodeURIComponent(
                `Hello ${COMPANY.shortName || 'Aditya Liquidtools'}, I would like to make an enquiry.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-green-300 hover:text-green-600"
            >
              <MessageCircle size={17} />
              WhatsApp
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;