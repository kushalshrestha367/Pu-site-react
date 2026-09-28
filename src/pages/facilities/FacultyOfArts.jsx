import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

const EASE = [0.22, 1, 0.36, 1];
const NAVY = "#252659";
const ACCENT = "#252659";


export const dean = {
  name: "Prof. Ram Prasad Dhakal",
  role: "Dean",
  email: "info@pufale.edu.np",
  website: "https://pufale.edu.np",
  image:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=faces&q=80",
  bio: "Prof. Dhakal has led the Faculty since its expansion into media, design, and development studies, steering a curriculum that pairs the humanities with the practical disciplines Nepal's public and creative sectors are asking for.",
};

export const programs = [
  { sn: 1, name: "Bachelor of Arts (BA)", level: "Bachelor", duration: "4 Years", system: "Yearly" },
  { sn: 2, name: "Bachelor of Arts (BA Honours)", level: "Bachelor", duration: "4 Years", system: "Yearly" },
  { sn: 3, name: "Bachelor of Social Work (BSW)", level: "Bachelor", duration: "4 Years", system: "Semester" },
  { sn: 4, name: "Bachelor of Mass Communication & Journalism (BAMCJ)", level: "Bachelor", duration: "4 Years", system: "Semester" },
  { sn: 5, name: "Bachelor of Media Technology (BMT)", level: "Bachelor", duration: "4 Years", system: "Semester" },
  { sn: 6, name: "Bachelor of Liberal Arts & Science (BLAS)", level: "Bachelor", duration: "4 Years", system: "Semester" },
  { sn: 7, name: "Bachelor of Interior Design (BID)", level: "Bachelor", duration: "4 Years", system: "Semester" },
  { sn: 8, name: "Master of Journalism & Mass Communication (MAMCJ)", level: "Master", duration: "2 Years", system: "Semester" },
  { sn: 9, name: "Master of Media Technology (MMT)", level: "Master", duration: "2 Years", system: "Semester" },
  { sn: 10, name: "Master of Development Studies (MDEVS)", level: "Master", duration: "2 Years", system: "Semester" },
  { sn: 11, name: "Master of Development Communication (MDC)", level: "Master", duration: "2 Years", system: "Semester" },
  { sn: 12, name: "Master of Science in Population & Rural Development", level: "Master", duration: "2 Years", system: "Semester" },
  { sn: 13, name: "Master of Sociology / Anthropology", level: "Master", duration: "2 Years", system: "Yearly" },
  { sn: 14, name: "Master of Social Work (MSW)", level: "Master", duration: "2 Years", system: "Semester" },
];

export const rawColleges  = [
  {
    sn: 1,
    name: "Janta Adarsha Multiple Campus",
    address: "Biratnagar, Morang",
    contact: "021-520110, 9852000011",
    chief: "Prof. Dr. Bishnu Prasad Adhikari",
    // chiefPhone: "9851000011",
    // website: "https://jantaadarsha.edu.np",
    programs: [
      { program: "BSW", seat: 48, remark: "-" },
      { program: "PGDPCP", seat: 33, remark: "-" },
      { program: "MSW", seat: 33, remark: "-" },
    ],
  },
  {
    sn: 2,
    name: "Centre of Population and Development",
    address: "Biratnagar, Morang",
    contact: "021-530220, 9852000022",
    chief: "Dr. Suman Raj Sharma",
    // chiefPhone: "9851000022",
    // website: "https://cpd.edu.np",
    programs: [
      { program: "M. Sc. PRD", seat: 33, remark: "-" },
    ],
  },
  {
    sn: 3,
    name: "Kartok Bidy Mandir Multiple Campus",
    address: "Kartok, Ilam",
    contact: "027-540330, 9852000033",
    chief: "Mr. Krishna Prasad Neupane",
    // chiefPhone: "9851000033",
    // website: "https://kartokcampus.edu.np",
    programs: [
      { program: "B.A.", seat: 40, remark: "-" },
    ],
  },
  {
    sn: 4,
    name: "Chakrabarti Hadi Educational Academy",
    address: "Kathmandu",
    contact: "01-4401244, 9852000044",
    chief: "Dr. Rajesh Prasad Gupta",
    // chiefPhone: "9851000044",
    // website: "https://chakrabartihadi.edu.np",
    programs: [
      { program: "BA (Hon.)", seat: 100, remark: "-" },
      { program: "MA (Eng.)", seat: 100, remark: "-" },
    ],
  },
  {
    sn: 5,
    name: "College of Journalism & Mass Communication",
    address: "Kathmandu",
    contact: "01-4501355, 9852000055",
    chief: "Mr. Prakash Adhikari",
    // chiefPhone: "9851000055",
    // website: "https://cjmc.edu.np",
    programs: [
      { program: "BAMCJ", seat: 25, remark: "-" },
      { program: "MAMCJ", seat: 25, remark: "-" },
      { program: "MDC", seat: 25, remark: "-" },
    ],
  },
  {
    sn: 6,
    name: "Kadambari Memorial College",
    address: "Kathmandu",
    contact: "01-4601466, 9852000066",
    chief: "Mrs. Sarita Devi Sharma",
    // chiefPhone: "9851000066",
    // website: "https://kadambari.edu.np",
    programs: [
      { program: "BSW", seat: 48, remark: "-" },
      { program: "MSW", seat: 33, remark: "-" },
    ],
  },
  {
    sn: 7,
    name: "Kantipur International College",
    address: "Kathmandu",
    contact: "01-4701577, 9852000077",
    chief: "Prof. Dr. Sudhir Gurung",
    // chiefPhone: "9851000077",
    // website: "https://kic.edu.np",
    programs: [
      { program: "BID", seat: 96, remark: "-" },
    ],
  },
  {
    sn: 8,
    name: "Shepherd College",
    address: "Kathmandu",
    contact: "01-4801688, 9852000088",
    chief: "Dr. Bishnu Hari Poudel",
    // chiefPhone: "9851000088",
    // website: "https://shepherdcollege.edu.np",
    programs: [
      { program: "BMT", seat: 48, remark: "-" },
      { program: "MMT", seat: 33, remark: "-" },
    ],
  },
  {
    sn: 9,
    name: "Himalayan Whitehouse Int'l College",
    address: "Kathmandu",
    contact: "01-4901799, 9852000099",
    chief: "Mr. Rajan Karmacharya",
    // chiefPhone: "9851000099",
    // website: "https://hwic.edu.np",
    programs: [
      { program: "BLAS", seat: 25, remark: "-" },
    ],
  },
  {
    sn: 10,
    name: "Kantipur City College",
    address: "Kathmandu",
    contact: "01-5001810, 9852000100",
    chief: "Mr. Prithvi Raj Sharma",
    // chiefPhone: "9851000100",
    // website: "https://kcc.edu.np",
    programs: [
      { program: "MAMCJ", seat: 33, remark: "-" },
    ],
  },
  {
    sn: 11,
    name: "Polygon College",
    address: "Kathmandu",
    contact: "01-5101911, 9852000111",
    chief: "Dr. Ramesh Kumar Shrestha",
    // chiefPhone: "9851000111",
    // website: "https://polygon.edu.np",
    programs: [
      { program: "MAMCJ", seat: 40, remark: "-" },
    ],
  },
  {
    sn: 12,
    name: "Global College of Social Science & Technology",
    address: "Kathmandu",
    contact: "01-5202012, 9852000122",
    chief: "Dr. Bishnu Prasad Sharma",
    // chiefPhone: "9851000122",
    // website: "https://globalcollege.edu.np",
    programs: [
      { program: "MDS", seat: 33, remark: "-" },
    ],
  },
  {
    sn: 13,
    name: "Sagarmatha Multiple College",
    address: "Kathmandu",
    contact: "01-5302113, 9852000133",
    chief: "Mr. Bharat Bahadur Karki",
    // chiefPhone: "9851000133",
    // website: "https://sagarmatha.edu.np",
    programs: [
      { program: "MA (Soc/Anth)", seat: 50, remark: "-" },
    ],
  },
];

/* Normalize college.programs from "BSW-48, MSW-33" → [{program, seat}] */
function parsePrograms(input) {
  if (Array.isArray(input)) return input;
  if (typeof input !== "string" || !input.trim()) return [];
  return input.split(",").map((chunk) => {
    const trimmed = chunk.trim();
    const lastDash = trimmed.lastIndexOf("-");
    if (lastDash === -1) return { program: trimmed, seat: "" };
    return {
      program: trimmed.slice(0, lastDash).trim(),
      seat: trimmed.slice(lastDash + 1).trim(),
      remark: "-",
    };
  });
}

/* Normalize colleges: add `sn` and parsed `programs` array */
export const colleges = rawColleges.map((c, i) => ({
  sn: i + 1,
  name: c.name,
  address: c.address,
  contact: c.contact || "",
  website: c.website || "",
  chief: c.chief || "",
  chiefPhone: c.chiefPhone || "",
  programs: parsePrograms(c.programs),
}));

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */
const MailIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);
const ArrowUpRightIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
  </svg>
);
const BookIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
  </svg>
);
const BuildingIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M4 16.5v-13h-.25a.75.75 0 010-1.5h12.5a.75.75 0 010 1.5H16v13h.25a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75v-2.5a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75v2.5a.75.75 0 01-.75.75h-3.5a.75.75 0 010-1.5H4z" clipRule="evenodd" />
  </svg>
);
const EyeIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
    <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
  </svg>
);
const CloseIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
  </svg>
);
const SearchIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */
function Eyebrow({ children, color = ACCENT }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8" style={{ backgroundColor: color }} />
      <span className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color }}>
        {children}
      </span>
    </div>
  );
}

function TypeBadge({ type }) {
  const isAlt = type === "Yearly" || type === "Research";
  const c = isAlt ? ACCENT : NAVY;
  return (
    <span
      className="inline-flex flex-shrink-0 items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
      style={{ color: c, backgroundColor: `${c}10` }}
    >
      {type}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Dean                                                               */
/* ------------------------------------------------------------------ */
function DeanBlock({ reduce }) {
  const emails = [dean.email, dean.altEmail].filter(Boolean);
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="mb-10 grid items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 sm:mb-12 sm:gap-8 sm:p-7 md:grid-cols-[200px_1fr] lg:gap-10 lg:p-8"
    >
      <img
        src={dean.image}
        alt={dean.name}
        draggable={false}
        className="mx-auto aspect-[4/5] w-full max-w-[140px] rounded-xl object-cover object-top sm:max-w-[180px] md:mx-0 md:max-w-none"
      />

      <div className=" md:text-left">
        <div className="flex md:justify-start">
          <Eyebrow>{dean.role}</Eyebrow>
        </div>

        <h2
          className="mt-2 font-serif text-xl font-bold leading-tight tracking-tight sm:mt-3 sm:text-3xl"
          style={{ color: NAVY }}
        >
          {dean.name}
        </h2>

        <p className="mt-2 text-[12.5px] leading-relaxed text-slate-600 sm:mt-3 sm:text-[14.5px]">
          {dean.bio ||
            "Leading the Faculty of Arts, Law & Education — advancing humanities education, research, and professional development at Purbanchal University."}
        </p>

        <div className="mt-4 flex flex-col items-start gap-2 sm:mt-5 sm:flex-row sm:flex-wrap sm:gap-x-6 md:items-start">
          {emails.map((mail) => (
            <a
              key={mail}
              href={`mailto:${mail}`}
              className="inline-flex items-center gap-2 text-[12.5px] font-medium text-slate-700 transition-colors hover:text-[#9e1c32] sm:text-[13.5px]"
            >
              <span
                className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full sm:h-7 sm:w-7"
                style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}
              >
                <MailIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </span>
              <span className="break-all">{mail}</span>
            </a>
          ))}
        </div>

        <a
          href={dean.website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90 sm:mt-6 sm:px-5 sm:py-2.5 sm:text-[12px]"
          style={{ backgroundColor: NAVY }}
        >
          Visit Website
          <ArrowUpRightIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
        </a>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Tabs                                                               */
/* ------------------------------------------------------------------ */
const TABS = [
  { id: "programs", label: "Programs", fullLabel: "Programs Offered", count: programs.length, Icon: BookIcon },
  { id: "colleges", label: "Colleges", fullLabel: "Affiliated Colleges", count: colleges.length, Icon: BuildingIcon },
];

function TabSwitcher({ active, onChange }) {
  return (
    <div className="mb-6 flex justify-center sm:mb-8">
      <div className="relative inline-flex w-full max-w-md rounded-full border border-slate-200 bg-slate-50 p-1">
        {TABS.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`relative z-10 flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-2.5 text-[12.5px] font-semibold transition-colors sm:px-6 sm:text-[13.5px] ${
                isActive ? "text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="tabPill"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className="absolute inset-0 -z-10 rounded-full"
                  style={{ backgroundColor: NAVY }}
                />
              )}
              <span className="sm:hidden">{tab.label}</span>
              <span className="hidden sm:inline">{tab.fullLabel}</span>
              <span
                className={`inline-flex h-5 min-w-[1.4rem] items-center justify-center rounded-full px-1.5 text-[10.5px] font-bold ${
                  isActive ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Programs Panel                                                     */
/* ------------------------------------------------------------------ */
function ProgramsPanel({ reduce }) {
  return (
    <ul className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      {programs.map((p, i) => (
        <motion.li
          key={p.sn}
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: Math.min(i * 0.02, 0.25), ease: EASE }}
          className="flex flex-col gap-2 border-b border-slate-100 px-4 py-4 last:border-b-0 hover:bg-slate-50 sm:flex-row sm:items-center sm:gap-6 sm:px-6"
        >
          <div className="flex flex-1 items-start gap-2.5 sm:items-center sm:gap-0">
            <span className="mt-0.5 flex-shrink-0 font-mono text-[12.5px] font-medium tabular-nums text-slate-400 sm:mt-0 sm:w-8">
              {String(p.sn).padStart(2, "0")}
            </span>
            <h3 className="flex-1 text-[14px] font-medium leading-snug text-slate-800 sm:text-[15px]">
              {p.name}
            </h3>
          </div>

          <div className="flex items-center justify-between gap-3 pl-7 sm:justify-end sm:pl-0 sm:flex-shrink-0">
            <span className="text-[12.5px] text-slate-500">{p.duration}</span>
            <TypeBadge type={p.system || p.type} />
          </div>
        </motion.li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/*  Search Bar                                                         */
/* ------------------------------------------------------------------ */
function SearchBar({ value, onChange, shown }) {
  return (
    <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative w-full sm:max-w-sm">
        <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search college, address or programme"
          className="w-full rounded-full border border-slate-200 bg-white py-2.5 pl-11 pr-10 text-[13.5px] text-slate-800 placeholder:text-slate-400 focus:border-[#252659] focus:outline-none focus:ring-4 focus:ring-[#252659]/10"
        />
        {value && (
          <button
            onClick={() => onChange("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700"
          >
            <CloseIcon className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
      <p className="text-[12.5px] text-slate-500">
        Showing <span className="font-semibold text-slate-700">{shown}</span> of {colleges.length} colleges
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Seat Chips                                                         */
/* ------------------------------------------------------------------ */
function SeatChips({ items }) {
  const list = Array.isArray(items) ? items : [];
  return (
    <div className="flex flex-wrap gap-1.5">
      {list.map((p, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-[11.5px] text-slate-700"
        >
          {p.program}
          {p.seat !== "" && p.seat != null && (
            <span className="font-bold tabular-nums" style={{ color: ACCENT }}>
              {p.seat}
            </span>
          )}
        </span>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Colleges Panel                                                     */
/* ------------------------------------------------------------------ */
function CollegesPanel({ reduce, list, onView, query, onClear }) {
  if (list.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 px-6 py-14 text-center">
        <p className="font-serif text-lg font-bold" style={{ color: NAVY }}>
          No colleges found
        </p>
        <p className="mt-1 text-sm text-slate-500">Nothing matches “{query}”.</p>
        <button
          onClick={onClear}
          className="mt-5 rounded-full px-5 py-2 text-[12px] font-bold uppercase tracking-wider text-white"
          style={{ backgroundColor: NAVY }}
        >
          Clear search
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Mobile cards */}
      <div className="grid gap-3 sm:grid-cols-2 lg:hidden">
        {list.map((c, i) => (
          <motion.button
            key={c.sn}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: Math.min(i * 0.015, 0.2), ease: EASE }}
            onClick={() => onView(c)}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 text-left transition-colors hover:border-slate-300 hover:bg-slate-50 sm:p-5"
          >
            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 flex-shrink-0 text-[11px] font-semibold tabular-nums text-slate-400">
                {String(c.sn).padStart(2, "0")}
              </span>
              <h3 className="flex-1 font-serif text-[15px] font-bold leading-snug sm:text-[1.05rem]" style={{ color: NAVY }}>
                {c.name}
              </h3>
            </div>

            <p className="mt-2 text-[12px] text-slate-500 sm:text-[12.5px]">{c.address}</p>

            <div className="mt-3">
              <SeatChips items={c.programs} />
            </div>

            <span className="mt-4 inline-flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-wider" style={{ color: ACCENT }}>
              View details
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </span>
          </motion.button>
        ))}
      </div>

      {/* Desktop table */}
      <div className="hidden overflow-hidden rounded-2xl border border-slate-200 lg:block">
        <table className="w-full border-collapse">
          <thead>
            <tr style={{ backgroundColor: NAVY }} className="text-white">
              {["SN", "College", "Address", "Contact", "Approved Programs / Quotas"].map((h) => (
                <th key={h} className="px-4 py-3.5 text-left text-[11.5px] font-bold uppercase tracking-wider">
                  {h}
                </th>
              ))}
              <th className="w-16 px-4 py-3.5 text-center text-[11.5px] font-bold uppercase tracking-wider">
                Detail
              </th>
            </tr>
          </thead>
          <tbody>
            {list.map((c) => (
              <tr
                key={c.sn}
                onClick={() => onView(c)}
                className="cursor-pointer border-b border-slate-100 bg-white transition-colors last:border-b-0 hover:bg-slate-50"
              >
                <td className="px-4 py-4 align-top text-[12.5px] font-medium tabular-nums text-slate-400">
                  {String(c.sn).padStart(2, "0")}
                </td>
                <td className="px-4 py-4 align-top">
                  <span className="text-[13.5px] font-semibold leading-snug" style={{ color: NAVY }}>
                    {c.name}
                  </span>
                </td>
                <td className="px-4 py-4 align-top text-[12.5px] leading-relaxed text-slate-600">
                  {c.address}
                </td>
                <td className="px-4 py-4 align-top text-[12.5px] leading-relaxed text-slate-600">
                  {c.contact || "—"}
                </td>
                <td className="px-4 py-4 align-top">
                  <SeatChips items={c.programs} />
                </td>
                <td className="px-4 py-4 text-center align-top">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onView(c);
                    }}
                    aria-label={`View details of ${c.name}`}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-[#9e1c32]/10"
                    style={{ color: ACCENT }}
                  >
                    <EyeIcon className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Modal                                                              */
/* ------------------------------------------------------------------ */
function DetailRow({ label, value }) {
  return (
    <div className="flex flex-col gap-0.5 py-3 sm:flex-row sm:items-baseline sm:gap-6">
      <span className="w-32 flex-shrink-0 text-[11px] font-bold uppercase tracking-wider text-slate-400">
        {label}
      </span>
      <div className="flex-1 text-[13.5px] text-slate-700">{value}</div>
    </div>
  );
}

function CollegeDetailModal({ college, onClose, reduce }) {
  useEffect(() => {
    if (!college) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [college, onClose]);

  return (
    <AnimatePresence>
      {college && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-900/60 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[92vh] w-full overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:my-6 sm:max-h-[88vh] sm:max-w-2xl sm:rounded-3xl"
          >
            <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-slate-300 sm:hidden" />

            <div className="flex items-start justify-between gap-4 px-5 pb-4 pt-5 sm:px-8 sm:pb-5 sm:pt-7">
              <div>
                <Eyebrow>College</Eyebrow>
                <h3 className="mt-3 font-serif text-lg font-bold leading-tight sm:text-2xl" style={{ color: NAVY }}>
                  {college.name}
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="px-5 pb-7 sm:px-8 sm:pb-8">
              <div className="divide-y divide-slate-100 border-y border-slate-100">
                {college.website && (
                  <DetailRow
                    label="Official site"
                    value={
                      <a
                        href={college.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium break-all hover:underline"
                        style={{ color: ACCENT }}
                      >
                        {college.website.replace(/^https?:\/\//, "")}
                      </a>
                    }
                  />
                )}
                {college.contact && <DetailRow label="Contact" value={college.contact} />}
                {college.chief && (
                  <DetailRow
                    label="Campus chief"
                    value={
                      <>
                        {college.chief}
                        {college.chiefPhone && (
                          <span className="text-slate-500">, {college.chiefPhone}</span>
                        )}
                      </>
                    }
                  />
                )}
                <DetailRow label="Address" value={college.address} />
              </div>

              <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr style={{ backgroundColor: NAVY }} className="text-white">
                      <th className="px-3 py-2.5 text-[11px] font-bold uppercase tracking-wider sm:px-4 sm:text-[11.5px]">
                        Program
                      </th>
                      <th className="px-3 py-2.5 text-center text-[11px] font-bold uppercase tracking-wider sm:px-4 sm:text-[11.5px]">
                        Seat
                      </th>
                      <th className="hidden px-3 py-2.5 text-center text-[11px] font-bold uppercase tracking-wider sm:table-cell sm:px-4 sm:text-[11.5px]">
                        Remark
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {college.programs.map((p, i) => (
                      <tr key={i} className="border-b border-slate-100 last:border-b-0">
                        <td className="px-3 py-2.5 text-[12.5px] font-medium text-slate-800 sm:px-4 sm:text-[13px]">
                          {p.program}
                        </td>
                        <td
                          className="px-3 py-2.5 text-center text-[12.5px] font-semibold tabular-nums sm:px-4 sm:text-[13px]"
                          style={{ color: ACCENT }}
                        >
                          {p.seat}
                        </td>
                        <td className="hidden px-3 py-2.5 text-center text-[12.5px] text-slate-500 sm:table-cell sm:px-4 sm:text-[13px]">
                          {p.remark || "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ */
/*  Main                                                               */
/* ------------------------------------------------------------------ */
export default function FacultyOfArts() {
  const reduce = useReducedMotion();
  const [activeTab, setActiveTab] = useState("programs");
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [query, setQuery] = useState("");

  const closeModal = useCallback(() => setSelectedCollege(null), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return colleges;
    return colleges.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.address.toLowerCase().includes(q) ||
        c.programs.some((p) => p.program.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <section className="w-full bg-white py-10 selection:bg-[#252659] selection:text-white sm:py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.header
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-10 sm:mb-14"
        >
          <Eyebrow>Faculty</Eyebrow>
          <h1 className="mt-4 font-serif text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl" style={{ color: NAVY }}>
            Faculty of Arts
          </h1>
          <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-slate-600 sm:text-base">
            Programmes and affiliated colleges under Purbanchal University's
            oldest and broadest faculty, spanning the humanities, social work,
            media, design, and development studies.
          </p>
        </motion.header>

        <DeanBlock reduce={reduce} />

        <TabSwitcher
          active={activeTab}
          onChange={(id) => {
            setActiveTab(id);
            setQuery("");
            setSelectedCollege(null);
          }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            {activeTab === "programs" ? (
              <ProgramsPanel reduce={reduce} />
            ) : (
              <>
                <SearchBar value={query} onChange={setQuery} shown={filtered.length} />
                <CollegesPanel
                  reduce={reduce}
                  list={filtered}
                  onView={setSelectedCollege}
                  query={query}
                  onClear={() => setQuery("")}
                />
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <CollegeDetailModal college={selectedCollege} onClose={closeModal} reduce={reduce} />
    </section>
  );
}