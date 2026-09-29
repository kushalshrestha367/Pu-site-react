import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  MailIcon,
  ArrowUpRightIcon,
  BookIcon,
  BuildingIcon,
  EyeIcon,
  CloseIcon,
  SearchIcon,
} from "../../components/icons/index";

const EASE = [0.22, 1, 0.36, 1];
const NAVY = "#252659";
const ACCENT = "#252659";
export const dean = {
  name: "Prof. Ajay Kumar Shah",
  role: "Dean",
  email: "info@pufost.edu.np",
  website: "https://pufost.edu.np",
  image:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=faces&q=80",
  bio: "Leading the Faculty of Science and Technology — advancing engineering, agriculture, computing, and applied sciences at Purbanchal University.",
};

export const deputyDean = {
  name: "Mr. Nabin Bhattarai",
  role: "Deputy Dean",
  email: "info@pufost.edu.np",
  website: "https://pufost.edu.np",
  image:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=faces&q=80",
  bio: "Supporting academic operations, curriculum development, and quality assurance across the Faculty's expanding programmes.",
};

export const programs = [
  {
    sn: 1,
    name: "Bachelor of Computer Application (BCA)",
    duration: "4 Years/8 Semesters",
    system: "Semester",
  },
  {
    sn: 2,
    name: "Bachelor of Dairy Technology",
    duration: "4 Years/8 Semesters",
    system: "Semester",
  },
  {
    sn: 3,
    name: "Bachelor of Food Technology",
    duration: "4 Years/8 Semesters",
    system: "Semester",
  },
  {
    sn: 4,
    name: "Bachelor of Information Technology (BIT)",
    duration: "4 Years/8 Semesters",
    system: "Semester",
  },
  {
    sn: 5,
    name: "Bachelor of Science (Honours) in Agriculture",
    duration: "4 Years/8 Semesters",
    system: "Semester",
  },
  {
    sn: 6,
    name: "Bachelor of Science in Biotechnology",
    duration: "4 Years/8 Semesters",
    system: "Semester",
  },
  {
    sn: 7,
    name: "Bachelor of Science in Forestry",
    duration: "4 Years/8 Semesters",
    system: "Semester",
  },
  {
    sn: 8,
    name: "Bachelor of Technology in Biotechnology",
    duration: "4 Years/8 Semesters",
    system: "Semester",
  },
  {
    sn: 9,
    name: "Bachelor of Veterinary Science & Animal Husbandry",
    duration: "5 Years/10 Semesters",
    system: "Semester",
  },
  {
    sn: 10,
    name: "Post Graduate Diploma in Computer Application (PGDCA)",
    duration: "1 Year/2 Semesters",
    system: "Semester",
  },
  {
    sn: 11,
    name: "Master of Science in Nutrition and Dietetics",
    duration: "2 Years/4 Semesters",
    system: "Semester",
  },
  {
    sn: 12,
    name: "Master of Computer Application (M.C.A.)",
    duration: "2 Years/4 Semesters",
    system: "Semester",
  },
  {
    sn: 13,
    name: "Master of Science in Agriculture (Agri-Business Management)",
    duration: "2 Years/4 Semesters",
    system: "Semester",
  },
  {
    sn: 14,
    name: "Master of Science in Meat Technology",
    duration: "2 Years/4 Semesters",
    system: "Semester",
  },
  {
    sn: 15,
    name: "Bachelor of Science in Food, Nutrition & Dietetics",
    duration: "4 Years/8 Semesters",
    system: "Semester",
  },
];

const rawColleges = [
  {
    sn: 1,
    name: "P.U. School of Science and Technology (PUSAT)",
    address: "Biratnagar, Morang",
    programs: "BCA-60, BIT-60, B. Tech. in AI-48, PGDCA-20, MCA-33, MIT-33",
  },
  {
    sn: 2,
    name: "G.P. Koirala College of Agriculture & Research Centre (GPCAR)",
    address: "Gothgaun, Morang",
    programs: "B. Sc. (Hons.) Ag.-96, B. Sc. Food, Nutrition & Dietetics-33",
  },
  {
    sn: 3,
    name: "P.U. College of Environment and Forestry",
    address: "Gothgaun, Morang",
    programs: "B. Sc. Forestry-48",
  },
  {
    sn: 4,
    name: "Nepal Polytechnic Institute",
    address: "Bharatpur, Chitwan",
    programs: "B. Sc. (Hons.) Ag.-96, B.V.Sc. & A.H.-48",
  },
  {
    sn: 5,
    name: "Gomendra Multiple College",
    address: "Birtamode, Jhapa",
    programs: "BCA-96, M.C.A-33, B. Tech. in AI-48",
  },
  {
    sn: 6,
    name: "Himalayan Whitehouse Int'l College",
    address: "Kathmandu",
    programs: "BIT-96, B. Tech. (Biotech.)-48",
  },
  {
    sn: 7,
    name: "College of Information Technology and Engineering",
    address: "Kathmandu",
    programs: "BCA-80, BIT-40, MIT-33",
  },
  {
    sn: 8,
    name: "Aryan School of Engineering and Management",
    address: "Kathmandu",
    programs: "BCA-48, BIT-96, B. Tech. in AI-48",
  },
  {
    sn: 9,
    name: "Kantipur City College",
    address: "Kathmandu",
    programs: "BCA-80, BIT-48, MCA-40, PGDCA-30, B. Tech. in AI-48",
  },
  {
    sn: 10,
    name: "College of Applied Food & Dairy Technology (CAFODAT)",
    address: "Lalitpur",
    programs:
      "B. Tech. (Food)-48, B. Tech. (Dairy)-33, M. Sc. in Nutrition & Dietetics-33, BIT-48",
  },
  {
    sn: 11,
    name: "Kist College of Information Technology",
    address: "Kathmandu",
    programs: "BIT-48, MIT-33",
  },
  {
    sn: 12,
    name: "Himalayan College of Agricultural Sciences and Technology",
    address: "Kathmandu",
    programs:
      "B. Sc. (Hons.) Ag.-96, B.V.Sc. & A.H.-48, M. Sc. (Meat/Dairy)-20/20, M.Sc. in Agri-Business Mgmt.-30",
  },
  {
    sn: 13,
    name: "SANN International College for Higher Studies",
    address: "Kathmandu",
    programs: "B. Sc. (Biotech.)-40",
  },
  {
    sn: 14,
    name: "Kantipur Valley College",
    address: "Lalitpur",
    programs: "B. Tech. (Biotech.)-48, BIT-48",
  },
  {
    sn: 15,
    name: "Durga Devi Community Development Center",
    address: "Kamal, Jhapa",
    programs: "B. Sc. Forestry-48",
  },
  {
    sn: 16,
    name: "Janakpur Community College",
    address: "Janakpur, Dhanusha",
    programs: "BIT-48, B.Sc.(Hons.) Ag.-48",
  },
  {
    sn: 17,
    name: "Ilam Community Agriculture Campus",
    address: "Ilam",
    programs: "B. Sc. (Hons.) Ag.-48",
  },
  {
    sn: 18,
    name: "Lumbini Adarsha Degree College",
    address: "Kawasoti, Nawalparasi",
    programs: "BIT-48",
  },
  {
    sn: 19,
    name: "Madan Bhandari Memorial Academy",
    address: "Urlabari, Morang",
    programs: "B. Sc. (Hons.) Ag., BIT",
  },
  {
    sn: 20,
    name: "Sushma Koirala Memorial Trust",
    address: "Nepalgunj, Banke",
    programs: "BIT-48",
  },
  {
    sn: 21,
    name: "Lamahi Community Institute of Science & Technology",
    address: "Gadhawa, Dang",
    programs: "BIT-48",
  },
  {
    sn: 22,
    name: "Kuleshwor Awas Campus",
    address: "Kathmandu",
    programs: "BIT-48",
  },
  {
    sn: 23,
    name: "Mangal Prasad Women's College",
    address: "Nepalgunj, Banke",
    programs: "BCA-48",
  },
  {
    sn: 24,
    name: "Lumbini Integrated Academy",
    address: "Tilottama, Rupandehi",
    programs: "B.Sc. Forestry-48",
  },
  {
    sn: 25,
    name: "Sahid Aakash Memorial Campus (SAMC)",
    address: "Hetauda, Makawanpur",
    programs: "BIT-48",
  },
  {
    sn: 26,
    name: "Global College of Social Science and Technology",
    address: "Baneshwor, Kathmandu",
    programs: "B. Tech. in AI-48",
  },
  {
    sn: 27,
    name: "National Institute of Engineering and Technology",
    address: "Kupondole, Lalitpur",
    programs: "B. Tech. in AI-48",
  },
  {
    sn: 28,
    name: "Gateway College of Professional Studies",
    address: "Basundhara, Kathmandu",
    programs: "B. Tech. in AI-48",
  },
  {
    sn: 29,
    name: "Orchid College of Management and Technology",
    address: "Gaushala, Kathmandu",
    programs: "B. Tech. in AI-48, BIT-48",
  },
  {
    sn: 30,
    name: "Central Engineering College",
    address: "Janakpurdham, Dhanusha",
    programs: "BIT-48",
  },
  {
    sn: 31,
    name: "Saraswati Public Campus",
    address: "Dadarbairiya, Morang",
    programs: "BCA-48",
  },
  {
    sn: 32,
    name: "Kasturi College",
    address: "Itahari, Sunsari",
    programs: "BIT-48",
  },
  {
    sn: 33,
    name: "Hetauda Janapriya Campus",
    address: "Hetauda, Makawanpur",
    programs: "B.Sc. (Hons.) Ag.-48",
  },
  {
    sn: 34,
    name: "Kathmandu Don Bosco College",
    address: "Kathmandu",
    programs: "BIT-48",
  },
  {
    sn: 35,
    name: "Acme Engineering College",
    address: "Kathmandu",
    programs: "BIT-48",
  },
  {
    sn: 36,
    name: "Model Purbanchal College",
    address: "Janakpur, Dhanusha",
    programs: "BIT-48",
  },
  {
    sn: 37,
    name: "Kantipur International College",
    address: "Kathmandu",
    programs: "B. Tech. in AI-48",
  },
  {
    sn: 38,
    name: "Khwopa Engineering College",
    address: "Bhaktapur",
    programs: "BIT-48, BCA-48",
  },
  {
    sn: 39,
    name: "Southwestern School of Management and Technology",
    address: "Basundhara, Kathmandu",
    programs: "BIT-48",
  },
  {
    sn: 40,
    name: "Devaki College of Management & Sciences",
    address: "Mirchaiya, Siraha",
    programs: "BCA IT-48",
  },
  {
    sn: 41,
    name: "Birgunj Public College",
    address: "Birgunj, Parsa",
    programs: "BIT-48",
  },
  {
    sn: 42,
    name: "Kathmandu Academy of Tourism and Hospitality",
    address: "Kathmandu",
    programs: "BIT-48",
  },
  {
    sn: 43,
    name: "Asian College of Management & Technology",
    address: "Kathmandu",
    programs: "BIT-48",
  },
  {
    sn: 44,
    name: "Hillside College of Engineering",
    address: "Kathmandu",
    programs: "BIT-48",
  },
  {
    sn: 45,
    name: "Shepherd College",
    address: "Kathmandu",
    programs: "BIT-48",
  },
  {
    sn: 46,
    name: "Kasthamandap College of Management",
    address: "Kalanki, Kathmandu",
    programs: "BIT-48",
  },
];

/* Parse "BCA-60, BIT-60" → [{program, seat, remark}] */
function parsePrograms(input) {
  if (Array.isArray(input)) return input;
  if (typeof input !== "string" || !input.trim()) return [];
  return input.split(",").map((chunk) => {
    const trimmed = chunk.trim();
    const lastDash = trimmed.lastIndexOf("-");
    if (lastDash === -1) return { program: trimmed, seat: "", remark: "-" };
    return {
      program: trimmed.slice(0, lastDash).trim(),
      seat: trimmed.slice(lastDash + 1).trim(),
      remark: "-",
    };
  });
}

export const colleges = rawColleges.map((c) => ({
  sn: c.sn,
  name: c.name,
  address: c.address,
  contact: c.contact || "",
  website: c.website || "",
  chief: c.chief || "",
  chiefPhone: c.chiefPhone || "",
  programs: parsePrograms(c.programs),
}));
function Eyebrow({ children, color = ACCENT }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8" style={{ backgroundColor: color }} />
      <span
        className="text-[11px] font-semibold uppercase tracking-[0.2em]"
        style={{ color }}
      >
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
function PersonCard({ person, reduce, delay = 0 }) {
  const emails = [person.email, person.altEmail].filter(Boolean);
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className="flex h-full gap-3 rounded-2xl border border-slate-200 bg-white p-3.5 sm:gap-5 sm:p-5"
    >
      {/* Photo — always left */}
      <div className="w-24 flex-shrink-0 sm:w-28 md:w-32 mt-12">
        <img
          src={person.image}
          alt={person.name}
          draggable={false}
          className="aspect-[4/5] w-full rounded-xl object-cover object-top"
        />
      </div>
      <div className="min-w-0 flex-1 text-left">
        <div className="flex justify-start">
          <Eyebrow>{person.role}</Eyebrow>
        </div>

        <h2
          className="mt-2 font-serif text-base font-bold leading-tight tracking-tight sm:text-lg md:text-xl"
          style={{ color: NAVY }}
        >
          {person.name}
        </h2>

        {person.bio && (
          <p className="mt-2 text-[12px] leading-relaxed text-slate-600 sm:text-[12.5px] md:text-[13px]">
            {person.bio}
          </p>
        )}

        <div className="mt-3 flex flex-col items-start gap-1.5">
          {emails.map((mail) => (
            <a
              key={mail}
              href={`mailto:${mail}`}
              className="inline-flex max-w-full items-center gap-2 text-[12px] font-medium text-slate-700 transition-colors hover:text-[#9e1c32] sm:text-[12.5px]"
            >
              <span
                className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}
              >
                <MailIcon className="h-3 w-3" />
              </span>
              <span className="truncate">{mail}</span>
            </a>
          ))}
        </div>

        {person.website && (
          <a
            href={person.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[10.5px] font-bold uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90 sm:px-4 sm:text-[11px]"
            style={{ backgroundColor: NAVY }}
          >
            Visit Website
            <ArrowUpRightIcon className="h-3 w-3" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

function LeadershipBlock({ reduce }) {
  return (
    <div className="mb-10 grid gap-4 sm:mb-12 sm:gap-5 lg:grid-cols-2">
      <PersonCard person={dean} reduce={reduce} delay={0} />
      <PersonCard person={deputyDean} reduce={reduce} delay={0.08} />
    </div>
  );
}
const TABS = [
  {
    id: "programs",
    label: "Programs",
    fullLabel: "Programs Offered",
    count: programs.length,
    Icon: BookIcon,
  },
  {
    id: "colleges",
    label: "Colleges",
    fullLabel: "Affiliated Colleges",
    count: colleges.length,
    Icon: BuildingIcon,
  },
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
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-slate-200 text-slate-600"
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
function ProgramsPanel({ reduce }) {
  return (
    <ul className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      {programs.map((p, i) => (
        <motion.li
          key={p.sn}
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.35,
            delay: Math.min(i * 0.02, 0.25),
            ease: EASE,
          }}
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
        Showing <span className="font-semibold text-slate-700">{shown}</span> of{" "}
        {colleges.length} colleges
      </p>
    </div>
  );
}
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
function CollegesPanel({ reduce, list, onView, query, onClear }) {
  if (list.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 px-6 py-14 text-center">
        <p className="font-serif text-lg font-bold" style={{ color: NAVY }}>
          No colleges found
        </p>
        <p className="mt-1 text-sm text-slate-500">
          Nothing matches “{query}”.
        </p>
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
      <div className="grid gap-3 sm:grid-cols-2 lg:hidden">
        {list.map((c, i) => (
          <motion.button
            key={c.sn}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              delay: Math.min(i * 0.01, 0.2),
              ease: EASE,
            }}
            onClick={() => onView(c)}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 text-left transition-colors hover:border-slate-300 hover:bg-slate-50 sm:p-5"
          >
            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 flex-shrink-0 text-[11px] font-semibold tabular-nums text-slate-400">
                {String(c.sn).padStart(2, "0")}
              </span>
              <h3
                className="flex-1 font-serif text-[15px] font-bold leading-snug sm:text-[1.05rem]"
                style={{ color: NAVY }}
              >
                {c.name}
              </h3>
            </div>

            <p className="mt-2 text-[12px] text-slate-500 sm:text-[12.5px]">
              {c.address}
            </p>

            <div className="mt-3">
              <SeatChips items={c.programs} />
            </div>

            <span
              className="mt-4 inline-flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-wider"
              style={{ color: ACCENT }}
            >
              View details
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </span>
          </motion.button>
        ))}
      </div>
      <div className="hidden overflow-hidden rounded-2xl border border-slate-200 lg:block">
        <table className="w-full border-collapse">
          <thead>
            <tr style={{ backgroundColor: NAVY }} className="text-white">
              {[
                "SN",
                "College",
                "Address",
                "Contact",
                "Approved Programs / Quotas",
              ].map((h) => (
                <th
                  key={h}
                  className="px-4 py-3.5 text-left text-[11.5px] font-bold uppercase tracking-wider"
                >
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
                  <span
                    className="text-[13.5px] font-semibold leading-snug"
                    style={{ color: NAVY }}
                  >
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

// modal
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
                <h3
                  className="mt-3 font-serif text-lg font-bold leading-tight sm:text-2xl"
                  style={{ color: NAVY }}
                >
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
                {college.contact && (
                  <DetailRow label="Contact" value={college.contact} />
                )}
                {college.chief && (
                  <DetailRow
                    label="Campus chief"
                    value={
                      <>
                        {college.chief}
                        {college.chiefPhone && (
                          <span className="text-slate-500">
                            , {college.chiefPhone}
                          </span>
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
                    <tr
                      style={{ backgroundColor: NAVY }}
                      className="text-white"
                    >
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
                      <tr
                        key={i}
                        className="border-b border-slate-100 last:border-b-0"
                      >
                        <td className="px-3 py-2.5 text-[12.5px] font-medium text-slate-800 sm:px-4 sm:text-[13px]">
                          {p.program}
                        </td>
                        <td
                          className="px-3 py-2.5 text-center text-[12.5px] font-semibold tabular-nums sm:px-4 sm:text-[13px]"
                          style={{ color: ACCENT }}
                        >
                          {p.seat || "—"}
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
export default function FacultyOfScienceAndTechnology() {
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
        c.programs.some((p) => p.program.toLowerCase().includes(q)),
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
          <h1
            className="mt-4 font-serif text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
            style={{ color: NAVY }}
          >
            Faculty of Science &amp; Technology
          </h1>
          <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-slate-600 sm:text-base">
            Engineering, agriculture, computing, and applied science programmes
            offered through Purbanchal University's affiliated colleges across
            Nepal.
          </p>
        </motion.header>

        <LeadershipBlock reduce={reduce} />

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
                <SearchBar
                  value={query}
                  onChange={setQuery}
                  shown={filtered.length}
                />
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

      <CollegeDetailModal
        college={selectedCollege}
        onClose={closeModal}
        reduce={reduce}
      />
    </section>
  );
}
