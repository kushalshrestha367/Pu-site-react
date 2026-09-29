import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

const centres = [
  {
    id: "research",
    title: "Research Centre",
    shortLabel: "Research",
    shortLabelLines: ["Research Centre"],
    contact: {
      role: "Executive Director",
      centre: "Research Centre",
      poBox: "Post Box No.: 142",
      email: "rc@purbuniv.edu.np",
      phone: "977-21-590832 (Ext. 8003)",
    },
  },
  {
    id: "curriculum",
    title: "Curriculum Research & Development Centre",
    shortLabel: "Curriculum",
    shortLabelLines: ["Curriculum Research &", "Development Centre"],
    contact: {
      role: "Executive Director",
      centre: "Curriculum Research & Development Centre",
      poBox: "Post Box No.: 142",
      email: "crdc@purbuniv.edu.np",
      phone: "977-21-590832 (Ext. 8016)",
    },
  },
  {
    id: "monitoring",
    title: "Monitoring & Evaluation Centre",
    shortLabel: "Monitoring",
    shortLabelLines: ["Monitoring & Evaluation Centre"],
    contact: {
      role: "Executive Director",
      centre: "Monitoring & Evaluation Centre",
      poBox: "Post Box No.: 142",
      email: "mec@purbuniv.edu.np",
      phone: "977-21-590832 (Ext. 8004)",
    },
    directorName: "Dr. Uttam Kumar Regmi",
    directorImage: "/assets/img/dr-uttam.jpg",
    description: [
      "According to Chapter 14(Ka) of the Regulation of Purbanchal University 2053 (thirty-fifth amendment), a Monitoring and Evaluation Centre will be established at the Central Office to ensure high-quality, practical, and effective study and teaching at the university. This center will regularly monitor, provide guidance, and streamline communication and relationships among the university's bodies, affiliated and constituent schools, and campuses. It will ensure that educational, administrative, and financial activities are conducted according to university regulations, maintaining educational standards, student learning, and the operation of educational institutions.",
      "The center will be headed by an Executive Director appointed by the Executive Council from among professors or associate professors with high academic distinction. The term of the Executive Director will be four years, and their service conditions, facilities, functions, duties, and powers will be determined by the Executive Council.",
      "The activities, recent notices and programs are available below:",
    ],
    note: "Dr. Uttam Kumar Regmi (Associate Professor) holds a Doctor of Philosophy degree from Norway and currently serves as the Executive Director of the Monitoring and Evaluation Center at Purbanchal University. With 25 years of dedicated service at the university, Dr. Regmi has held significant roles including M. Phil. and Ph.D. Program Director, Director of the Purbanchal University School of Management, and membership in the Examination Direction Committee. His contributions extend beyond administrative roles, encompassing substantial academic engagements such as publishing papers and presenting at national and international forums. Dr. Regmi's professional journey has been enriched by visits to countries including India, Thailand, and Norway, fostering valuable international collaborations and enhancing the university's academic and administrative frameworks.",
  },
];

function CentreIcon({ id, className }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };
  if (id === "research")
    return (
      <svg {...common}>
        <path
          d="M12 3l8 4-8 4-8-4 8-4z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M6 10.5V15c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  if (id === "curriculum")
    return (
      <svg {...common}>
        <path
          d="M4 5.5A1.5 1.5 0 015.5 4H11v16H5.5A1.5 1.5 0 014 18.5v-13z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M20 5.5A1.5 1.5 0 0018.5 4H13v16h5.5a1.5 1.5 0 001.5-1.5v-13z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    );
  return (
    <svg {...common}>
      <path
        d="M3 12a9 9 0 1015.5-6.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M3 5.5V10h4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8v4.5l3 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InitialsAvatar({ name, className }) {
  const initials = name
    .split(" ")
    .filter((w) => w[0] === w[0]?.toUpperCase() && /[A-Za-z]/.test(w[0]))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <div
      className={`flex items-center justify-center bg-[#252659] font-serif text-3xl font-bold text-white ${className}`}
    >
      {initials || name[0]}
    </div>
  );
}
function ContactCard({ contact, directorName, directorImage }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="h-1 w-full bg-[#252659]" />

      <div className="p-4 font-serif sm:p-5">
        {directorName && (
          <div className="mb-3 flex justify-center">
            <div className="relative w-full max-w-[180px]">
              <div className="absolute -inset-1 rounded-2xl bg-[#252659]/10" />
              {directorImage && !imgFailed ? (
                <img
                  src={directorImage}
                  alt={directorName}
                  onError={() => setImgFailed(true)}
                  className="relative aspect-[4/5] w-full rounded-2xl object-cover object-top ring-1 ring-slate-200"
                  draggable={false}
                />
              ) : (
                <InitialsAvatar
                  name={directorName}
                  className="relative aspect-[4/5] w-full rounded-2xl ring-1 ring-slate-200"
                />
              )}
            </div>
          </div>
        )}

        {directorName && (
          <h3 className="text-center font-serif text-[15px] font-bold leading-snug text-slate-900 sm:text-base">
            {directorName}
          </h3>
        )}

        {/* Role */}
        <p className="mt-1 text-center text-[12.5px] font-semibold text-accent sm:text-[13px]">
          {contact.role}
        </p>

        {/* Centre name */}
        {contact.centre && (
          <p className="mt-0.5 text-center text-[11.5px] leading-snug text-slate-600 sm:text-[12px]">
            {contact.centre}
          </p>
        )}

        <div className="my-3 h-px w-full bg-slate-100" />

        <ul className="space-y-2 text-[12px] sm:text-[12.5px]">
          <li className="flex items-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#252659]"
              aria-hidden="true"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <a
              href={`mailto:${contact.email}`}
              className="break-all text-slate-700 transition-colors hover:text-[#252659] hover:underline"
            >
              {contact.email}
            </a>
          </li>
          <li className="flex items-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#252659]"
              aria-hidden="true"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="text-slate-700">{contact.phone}</span>
          </li>
          <li className="flex items-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#252659]"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-slate-700">{contact.poBox}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
function MobileTabs({ centres, activeId, onSelect, reduce }) {
  const scrollRef = useRef(null);

  return (
    <div className="sticky top-0 z-30 -mx-4 mb-5 border-b border-slate-200 bg-white/85 backdrop-blur-lg lg:hidden">
      <div className="flex items-center gap-2 px-4 pt-3 pb-1">
        <span className="h-[2px] w-5 rounded-full bg-[#252659]" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#252659]">
          {centres.length} Centres
        </span>
      </div>

      <div className="relative">
        {/* <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-6 bg-gradient-to-r from-white to-transparent" /> */}
        {/* <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-6 bg-gradient-to-l from-white to-transparent" /> */}

        <div
          ref={scrollRef}
          role="tablist"
          aria-label="University centres"
          className="flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 py-3 ml-1"
          style={{ scrollbarWidth: "none" }}
        >
          {centres.map((c) => {
            const isActive = c.id === activeId;
            return (
              <button
                key={c.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`centre-panel-${c.id}`}
                onClick={() => {
                  onSelect(c.id);
                  const el = scrollRef.current?.querySelector(
                    `[data-chip="${c.id}"]`,
                  );
                  el?.scrollIntoView({
                    behavior: "smooth",
                    inline: "center",
                    block: "nearest",
                  });
                }}
                data-chip={c.id}
                className={`flex flex-shrink-0 snap-start items-center gap-2 rounded-full border px-3.5 py-2 text-[12.5px] font-semibold whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? "border-[#252659] bg-[#252659] text-white shadow-md shadow-[#252659]/25"
                    : "border-slate-200 bg-white text-slate-700 active:bg-slate-50"
                }`}
              >
                <span
                  className={`flex h-5 w-5 flex-shrink-0 items-center justify-center ${isActive ? "text-amber-300" : "text-slate-500"}`}
                >
                  <CentreIcon id={c.id} className="h-3.5 w-3.5" />
                </span>
                {c.shortLabel}
              </button>
            );
          })}
          <span className="w-2 flex-shrink-0" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

export default function Centres() {
  const [activeId, setActiveId] = useState(centres[0].id);
  const reduce = useReducedMotion();

  const active = centres.find((c) => c.id === activeId);

  return (
    <section className="relative w-full overflow-hidden bg-white py-8 sm:py-12 lg:py-16">
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

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mb-6 sm:mb-8 lg:mb-10"
        >
          <div className="mb-3 flex items-center gap-3 sm:mb-4 lg:mb-5">
            <span className="h-[3px] w-6 rounded-full bg-[#252659] sm:w-8" />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#252659] sm:text-xs lg:text-sm">
              केन्द्रहरू
            </span>
          </div>
          <h1 className="font-serif text-[22px] font-bold leading-[1.3] tracking-tight text-slate-900 sm:text-2xl md:text-[28px] lg:text-3xl xl:text-4xl">
            केन्द्रहरूको विवरण
          </h1>
          <p className="mt-3 max-w-3xl text-[13px] leading-relaxed text-slate-600 sm:mt-4 sm:text-sm lg:text-[15px] xl:text-base">
            Purbanchal University's research, curriculum, and monitoring centres
            dedicated to academic excellence and institutional development.
          </p>
        </motion.div>

        <MobileTabs
          centres={centres}
          activeId={activeId}
          onSelect={setActiveId}
          reduce={reduce}
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Desktop sidebar tabs */}
          <div
            className="hidden lg:col-span-4 lg:block"
            role="tablist"
            aria-label="University centres"
          >
            <div className="space-y-2.5 lg:sticky lg:top-24">
              {centres.map((c, i) => {
                const isActive = c.id === activeId;
                return (
                  <motion.button
                    key={c.id}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`centre-panel-${c.id}`}
                    id={`centre-tab-${c.id}`}
                    onClick={() => setActiveId(c.id)}
                    initial={reduce ? false : { opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                    whileHover={reduce ? {} : { x: 4 }}
                    className={`group relative flex w-full min-h-[64px] items-center gap-3 rounded-xl border px-5 py-4 text-left transition-all duration-300 ${
                      isActive
                        ? "border-[#252659] bg-[#252659] shadow-lg shadow-[#252659]/20"
                        : "border-slate-200 bg-white hover:border-[#252659]/40 hover:shadow-md"
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-colors ${isActive ? "bg-white/15 text-white" : "bg-slate-100 text-slate-600 group-hover:bg-[#252659]/10 group-hover:text-[#252659]"}`}
                    >
                      <CentreIcon id={c.id} className="h-4 w-4" />
                    </span>

                    <span
                      className={`min-w-0 flex-1 text-[13.5px] font-semibold leading-snug transition-colors ${isActive ? "text-white" : "text-slate-700"}`}
                    >
                      {c.shortLabelLines.map((line, li) => (
                        <React.Fragment key={li}>
                          {line}
                          {li < c.shortLabelLines.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Panel */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                id={`centre-panel-${active.id}`}
                role="tabpanel"
                aria-labelledby={`centre-tab-${active.id}`}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? {} : { opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50"
              >
                <div className="border-b border-slate-100 bg-slate-50/60 px-5 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6">
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#252659]/5 text-[#252659] lg:hidden">
                      <CentreIcon id={active.id} className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#252659] lg:hidden">
                        Centre
                      </p>
                      <h2 className="break-words font-serif text-[17px] font-bold leading-tight text-slate-900 sm:text-xl lg:text-2xl xl:text-[28px]">
                        {active.title}
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="px-5 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
                  {!active.description ? (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
                      <div className="md:col-span-6 lg:col-span-7">
                        <ContactCard contact={active.contact} />
                      </div>
                      <div className="md:col-span-6 lg:col-span-5">
                        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 p-5 text-center sm:p-6">
                          <p className="text-[13px] leading-relaxed text-slate-500 sm:text-sm">
                            For inquiries regarding this centre, please reach
                            out using the contact details provided.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flow-root">
                      {/* Floated card — on mobile it's centered above the text */}
                      <div className="mx-auto mb-5 w-full max-w-[260px] md:float-left md:mb-4 md:mr-7 md:w-[240px] lg:mr-8 lg:w-[260px]">
                        <ContactCard
                          contact={active.contact}
                          directorName={active.directorName}
                          directorImage={active.directorImage}
                        />
                      </div>
                      <div className="space-y-4">
                        {active.description.map((p, i) => (
                          <motion.p
                            key={i}
                            initial={reduce ? false : { opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: 0.15 + i * 0.08,
                              ease: EASE,
                            }}
                            className="text-justify text-[13.5px] leading-[1.85] text-slate-700 sm:text-[14.5px] lg:text-[15px] xl:text-base"
                          >
                            {p}
                          </motion.p>
                        ))}
                      </div>
                      {active.note && (
                        <motion.div
                          initial={reduce ? false : { opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
                          className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/50 p-4 text-justify sm:mt-8 sm:p-5 lg:p-6"
                        >
                          <div className="flex items-start gap-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <p className="text-[12.5px] leading-relaxed text-slate-700 sm:text-[13.5px] lg:text-sm">
                              <span className="font-semibold text-slate-800">
                                Note:{" "}
                              </span>
                              {active.note}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
