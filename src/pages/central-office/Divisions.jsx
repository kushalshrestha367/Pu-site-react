import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

const divisions = [
  {
    id: "planning",
    title: "Planning Division",
    shortLabel: "Planning",
    shortLabelLines: ["Planning Division"],
    contact: {
      role: "Chief, Planning Division",
      name: "Mr. Ram Prasad Dhakal",
      centre: "Planning Division",
      poBox: "Post Box No.: 142",
      email: "pd@purbuniv.edu.np",
      phone: "977-21-590832 (Ext. 8005)",
    },
    description: [
      "According to the mandate of the Purbanchal University Act and Regulation, a Planning Division has been established under the Office of the Vice-Chancellor of Purbanchal University to ensure its organized operation and substantial contribution to educational and academic progress. This division is responsible for conducting regular planning and outcome-oriented activities.",
      "The Chief of the Planning Division is appointed by the Executive Council of Purbanchal University and serves a term of four years.",
    ],
  },
  {
    id: "coordination",
    title: "Coordination Division",
    shortLabel: "Coordination",
    shortLabelLines: ["Coordination Division"],
    contact: {
      role: "Chief, Coordination Division",
      centre: "Coordination Division",
      poBox: "Post Box No.: 142",
      email: "cd@purbuniv.edu.np",
      phone: "977-21-590832",
    },
    description: [
      "The Coordination Division (CD) is an integral component of the Vice Chancellor's office at Purbanchal University. It serves as a pivotal link connecting the Vice Chancellor's office with various internal institutions within Purbanchal University, as well as with local, national, and international universities and stakeholders. This division plays a crucial role in facilitating communication and collaboration across these entities, ensuring effective coordination and synergy in the university's operations and engagements with external partners.",
    ],
  },
  {
    id: "academic-admin",
    title: "Academic Administration Division",
    shortLabel: "Academic Admin",
    shortLabelLines: ["Academic Administration Division"],
    contact: {
      role: "Chief, Academic Administration Division",
      centre: "Academic Administration Division",
      poBox: "Post Box No.: 142",
      email: "academic@purbuniv.edu.np",
      phone: "977-21-590832",
    },
    description: [
      "The Academic Administration Division is an essential component within the office of the Vice Chancellor of Purbanchal University. This division plays a critical role in overseeing and managing academic activities, faculty members, and academic programs in an efficient and effective manner. It ensures the smooth administration and coordination of all educational endeavors within the university, aligning with the overall mandate of the Vice Chancellor's office to uphold academic excellence and operational integrity.",
    ],
  },
  {
    id: "financial-admin",
    title: "Financial Administration Division",
    shortLabel: "Financial",
    shortLabelLines: ["Financial Administration", "Division"],
  },
  {
    id: "general-admin",
    title: "General Administration Division",
    shortLabel: "General Admin",
    shortLabelLines: ["General Administration", "Division"],
  },
  {
    id: "hr",
    title: "Human Resource Management Division",
    shortLabel: "HR Management",
    shortLabelLines: ["Human Resource", "Management Division"],
  },
  {
    id: "engineering",
    title: "Engineering Division",
    shortLabel: "Engineering",
    shortLabelLines: ["Engineering Division"],
  },
  {
    id: "it",
    title: "Information Technology Division",
    shortLabel: "IT",
    shortLabelLines: ["Information Technology", "Division"],
  },
  {
    id: "library",
    title: "Library Administration Division",
    shortLabel: "Library",
    shortLabelLines: ["Library Administration", "Division"],
  },
  {
    id: "law",
    title: "Law Division",
    shortLabel: "Law",
    shortLabelLines: ["Law Division"],
  },
  {
    id: "audit",
    title: "Audit Division",
    shortLabel: "Audit",
    shortLabelLines: ["Audit Division"],
  },
];

function DivisionIcon({ id, className }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };

  if (id === "planning")
    return (
      <svg {...common}>
        <path
          d="M9 4h6a1 1 0 011 1v1h2a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1V7a1 1 0 011-1h2V5a1 1 0 011-1z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  if (id === "coordination")
    return (
      <svg {...common}>
        <circle
          cx="12"
          cy="6"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle
          cx="6"
          cy="18"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle
          cx="18"
          cy="18"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M12 8.5v4M7.5 16l3-3.5M16.5 16l-3-3.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  if (id === "academic-admin")
    return (
      <svg {...common}>
        <path
          d="M12 4l9 4-9 4-9-4 9-4z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M7 10v5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  if (id === "financial-admin")
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M12 7v10M9.5 9.5h4a1.5 1.5 0 010 3h-4a1.5 1.5 0 000 3h4.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  if (id === "general-admin")
    return (
      <svg {...common}>
        <path
          d="M4 20V9l8-5 8 5v11"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M9 20v-6h6v6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    );
  if (id === "hr")
    return (
      <svg {...common}>
        <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.6" />
        <circle
          cx="17"
          cy="10"
          r="2.2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M3 19c0-3 2.7-5 6-5s6 2 6 5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M15 19c0-2 1.8-3.5 4-3.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  if (id === "engineering")
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  if (id === "it")
    return (
      <svg {...common}>
        <rect
          x="3"
          y="4"
          width="18"
          height="12"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M9 20h6M12 16v4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  if (id === "library")
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
  if (id === "law")
    return (
      <svg {...common}>
        <path
          d="M12 4v16M7 20h10"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M5 8h14M5 8l-2.5 5a3 3 0 005 0L5 8zM19 8l-2.5 5a3 3 0 005 0L19 8z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    );
  return (
    <svg {...common}>
      <path
        d="M12 3l7 3v6c0 4.4-3 7.7-7 9-4-1.3-7-4.6-7-9V6l7-3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ContactCard({ contact }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
      className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="h-1 w-full bg-[#252659]" />

      <div className="p-5 sm:p-6 lg:p-7 font-serif">
        {contact.name && (
          <h3 className="mb-2 text-center font-serif text-base font-bold leading-snug text-slate-900 sm:text-lg">
            {contact.name}
          </h3>
        )}

        <p className="text-center text-[13px] font-semibold text-accent sm:text-sm">
          {contact.role}
        </p>

        {contact.centre && (
          <p className="mt-1 text-center text-[12.5px] text-slate-600 sm:text-sm">
            {contact.centre}
          </p>
        )}

        <div className="my-4 h-px w-full bg-slate-100 sm:my-5" />

        <ul className="space-y-2.5 text-[13px] sm:space-y-3 sm:text-sm">
          <li className="flex items-start gap-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#252659]"
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
          {contact.phone && (
            <li className="flex items-start gap-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#252659]"
                aria-hidden="true"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="text-slate-700">{contact.phone}</span>
            </li>
          )}
          <li className="flex items-start gap-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#252659]"
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
    </motion.div>
  );
}

function MobileTabs({ divisions, activeId, onSelect, reduce }) {
  const scrollRef = useRef(null);

  return (
    <div className="sticky top-0 z-30 -mx-4 mb-5 border-b border-slate-200 bg-white/85 backdrop-blur-lg lg:hidden">
      {/* Top label strip */}
      <div className="flex items-center gap-2 px-4 pt-3 pb-1">
        <span className="h-[2px] w-5 rounded-full bg-[#252659]" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#252659]">
          {divisions.length} Divisions
        </span>
      </div>

      {/* Horizontal scroll chips */}
      <div className="relative">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-6 bg-gradient-to-r from-white to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-6 bg-gradient-to-l from-white to-transparent" />

        <div
          ref={scrollRef}
          role="tablist"
          aria-label="University divisions"
          className="flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 py-3"
          style={{ scrollbarWidth: "none" }}
        >
          {divisions.map((c) => {
            const isActive = c.id === activeId;
            return (
              <button
                key={c.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`division-panel-${c.id}`}
                onClick={() => {
                  onSelect(c.id);
                  // scroll active chip into view
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
                  className={`flex h-5 w-5 flex-shrink-0 items-center justify-center ${
                    isActive ? "text-amber-300" : "text-slate-500"
                  }`}
                >
                  <DivisionIcon id={c.id} className="h-3.5 w-3.5" />
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

export default function Divisions() {
  const [activeId, setActiveId] = useState(divisions[0].id);
  const reduce = useReducedMotion();

  const active = divisions.find((c) => c.id === activeId);
  const hasContent = Boolean(active.description);

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
              महाशाखाहरू
            </span>
          </div>
          <h1 className="font-serif text-[22px] font-bold leading-[1.3] tracking-tight text-slate-900 sm:text-2xl md:text-[28px] lg:text-3xl xl:text-4xl">
            महाशाखाहरूको विवरण
          </h1>
          <p className="mt-3 max-w-3xl text-[13px] leading-relaxed text-slate-600 sm:mt-4 sm:text-sm lg:text-[15px] xl:text-base">
            Administrative divisions under the Office of the Vice-Chancellor,
            Purbanchal University.
          </p>
        </motion.div>
        <MobileTabs
          divisions={divisions}
          activeId={activeId}
          onSelect={setActiveId}
          reduce={reduce}
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          <div
            className="hidden lg:col-span-4 lg:block"
            role="tablist"
            aria-label="University divisions"
          >
            <div className="space-y-2.5 lg:sticky lg:top-24">
              {divisions.map((c, i) => {
                const isActive = c.id === activeId;
                return (
                  <motion.button
                    key={c.id}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`division-panel-${c.id}`}
                    id={`division-tab-${c.id}`}
                    onClick={() => setActiveId(c.id)}
                    initial={reduce ? false : { opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.04,
                      ease: EASE,
                    }}
                    whileHover={reduce ? {} : { x: 4 }}
                    className={`group relative flex w-full min-h-[60px] items-center gap-3 rounded-xl border px-5 py-4 text-left transition-all duration-300 ${
                      isActive
                        ? "border-[#252659] bg-[#252659] shadow-lg shadow-[#252659]/20"
                        : "border-slate-200 bg-white hover:border-[#252659]/40 hover:shadow-md"
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-colors ${
                        isActive
                          ? "bg-white/15 text-white"
                          : "bg-slate-100 text-slate-600 group-hover:bg-[#252659]/10 group-hover:text-[#252659]"
                      }`}
                    >
                      <DivisionIcon id={c.id} className="h-4 w-4" />
                    </span>
                    <span
                      className={`min-w-0 flex-1 text-[13.5px] font-semibold leading-snug transition-colors ${
                        isActive ? "text-white" : "text-slate-700"
                      }`}
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
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                id={`division-panel-${active.id}`}
                role="tabpanel"
                aria-labelledby={`division-tab-${active.id}`}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? {} : { opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50"
              >
                <div className="border-b border-slate-100 bg-slate-50/60 px-5 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6">
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#252659]/5 text-[#252659] lg:hidden">
                      <DivisionIcon id={active.id} className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#252659] lg:hidden">
                        Division
                      </p>
                      <h2 className="break-words font-serif text-[17px] font-bold leading-tight text-slate-900 sm:text-xl lg:text-2xl xl:text-[28px]">
                        {active.title}
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="px-5 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
                  {hasContent ? (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
                      <div className="md:col-span-5 lg:col-span-5">
                        <ContactCard contact={active.contact} />
                      </div>

                      <div className="min-w-0 space-y-4 md:col-span-7 lg:col-span-7">
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
                            className="max-w-[65ch] text-justify text-[13.5px] leading-[1.85] text-slate-700 sm:text-[14.5px] lg:text-[15px] xl:text-base"
                          >
                            {p}
                          </motion.p>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <motion.div
                      initial={reduce ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: EASE }}
                      className="flex min-h-[200px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/40 px-5 py-10 text-center sm:min-h-[240px] sm:px-6 sm:py-12"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#252659]/5 sm:mb-5 sm:h-14 sm:w-14">
                        <DivisionIcon
                          id={active.id}
                          className="h-5 w-5 text-[#252659] sm:h-6 sm:w-6"
                        />
                      </div>
                      <p className="text-[13.5px] font-semibold text-slate-700 sm:text-[15px]">
                        {active.title}
                      </p>
                      <p className="mt-2 max-w-sm text-[12.5px] leading-relaxed text-slate-500 sm:text-[13.5px]">
                        Details for this division will be available soon.
                      </p>
                      <p className="mt-3 max-w-sm text-[11.5px] leading-relaxed text-slate-400">
                        For more information, please contact the Central Office
                        of Purbanchal University.
                      </p>
                    </motion.div>
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
