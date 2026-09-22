import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

/* ------------------------------------------------------------------
   Data
------------------------------------------------------------------ */
const contact = {
  address: "Sundarharaincha, Gothgaun, Morang, Nepal",
  phone: "977-21-590832",
  extension: "Ext. 8009",
  email: "info@purbuniv.edu.np",
  hours: "Mon – Fri · 9:00 AM – 5:00 PM",
  mapEmbed:
    "https://www.google.com/maps?cid=15968035868052512402&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en&gl=NP&source=embed&output=embed",
  noticeLink:
    "https://purbanchaluniversity.edu.np/notice/detail/-important-notice-regarding-the-examination-related-information-250730122334",
};

/* ------------------------------------------------------------------
   Icons
------------------------------------------------------------------ */
function LocationIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
    </svg>
  );
}

function PhoneIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}

function MailIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  );
}

function ClockIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" />
    </svg>
  );
}

function ArrowIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
    </svg>
  );
}

/* ------------------------------------------------------------------
   Main Component
------------------------------------------------------------------ */
export default function ContactUs() {
  const reduce = useReducedMotion();

  const reveal = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: { duration: 0.7, delay, ease: EASE },
        };

  const items = [
    { icon: LocationIcon, label: "Address", value: contact.address, href: null },
    { icon: PhoneIcon, label: "Phone", value: contact.phone, sub: contact.extension, href: `tel:+${contact.phone.replace(/[^0-9]/g, "")}` },
    { icon: MailIcon, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: ClockIcon, label: "Office Hours", value: contact.hours, href: null },
  ];

  return (
    <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20">
      {/* Dot-grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(15,23,42,0.08) 1px, transparent 1.5px)",
          backgroundSize: "26px 26px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black 10%, transparent 75%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black 10%, transparent 75%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        {/* ============================================================
            HEADER
        ============================================================ */}
        <motion.header
          {...reveal()}
          className="mb-12 max-w-3xl sm:mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#252659]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#252659]">
              Contact Us
            </span>
          </div>

          <h1 className="font-serif text-3xl font-bold leading-[1.2] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            If You Have Any Query,
            <br />
            Please <span className="italic text-accent">Contact Us</span>
          </h1>

          <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
            Reach out to Purbanchal University's Central Office — we're here
            to help with admissions, academics, and administrative queries.
          </p>
        </motion.header>

        {/* ============================================================
            INFO + MAP
        ============================================================ */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* ---------- Contact List ---------- */}
          <motion.div {...reveal(0.1)} className="lg:col-span-5">
            <ul className="divide-y divide-slate-200 border-y border-slate-200">
              {items.map((item, i) => {
                const Icon = item.icon;
                const Wrapper = item.href ? motion.a : motion.div;
                const wrapperProps = item.href
                  ? {
                      href: item.href,
                      ...(item.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {}),
                    }
                  : {};

                return (
                  <Wrapper
                    key={item.label}
                    {...wrapperProps}
                    className={`group flex items-start gap-4 py-5 ${
                      item.href
                        ? "transition-colors hover:bg-slate-50/60"
                        : ""
                    }`}
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#252659]/5 text-[#252659] transition-colors group-hover:bg-[#252659] group-hover:text-amber-300">
                      <Icon className="h-4.5 w-4.5" />
                    </span>

                    <div className="min-w-0 flex-1 pt-1">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-1 break-words text-[14.5px] font-medium leading-snug text-slate-800">
                        {item.value}
                      </p>
                      {item.sub && (
                        <p className="mt-0.5 text-[12.5px] text-slate-500">
                          {item.sub}
                        </p>
                      )}
                    </div>

                    {item.href && (
                      <span className="mt-2 text-slate-300 transition-colors group-hover:text-[#252659]">
                        <ArrowIcon className="h-4 w-4" />
                      </span>
                    )}
                  </Wrapper>
                );
              })}
            </ul>
          </motion.div>

          {/* ---------- Map ---------- */}
          <motion.div {...reveal(0.2)} className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50">
              <iframe
                title="Purbanchal University Central Office Location"
                src={contact.mapEmbed}
                className="h-[320px] w-full border-0 sm:h-[400px] lg:h-[460px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>

        {/* ============================================================
            NOTICE
        ============================================================ */}
        <motion.div
          {...reveal(0.3)}
          className="mt-12 overflow-hidden rounded-2xl border border-blue-200 bg-blue-50/60 sm:mt-16"
        >
          <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent  text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-700">
                  Important Notice
                </p>
                <p className="mt-1.5 text-[14.5px] font-semibold leading-snug text-slate-900 sm:text-[15px]">
                  Regarding academic certificates, verifications, and all
                  other examination-related information
                </p>
              </div>
            </div>

            <a
              href={contact.noticeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-full bg-[#252659] px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.14em] text-white transition-all hover:-translate-y-0.5 hover:bg-[#1a1c4b] hover:shadow-lg hover:shadow-[#252659]/30"
            >
              View Notice
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}