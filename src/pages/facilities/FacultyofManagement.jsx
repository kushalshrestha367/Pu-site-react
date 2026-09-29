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
// import API from "../../lib/api";

const EASE = [0.22, 1, 0.36, 1];
const NAVY = "#252659";
const ACCENT = "#252659";

const USE_MOCK = true;

const getMockData = () => ({
  faculty: {
    id: 2,
    slug: "management",
    title: "Faculty of Management",
    short_title: "Faculty of Management",
    description:
      "Business, hospitality, and public administration programmes with affiliated colleges across Nepal.",
  },
  dean: {
    id: 2,
    name: "Prof. Dr. Uttam Kumar Regmi",
    role: "Dean",
    email: "info@pufom.edu.np",
    // alt_email: "deanmgmtpu@gmail.com",
    website: "https://pufom.edu.np",
    image_url:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=faces&q=80",
    bio: "Leading the Faculty of Management — advancing business education, research, and professional development at Purbanchal University.",
  },
  programs: [
    {
      id: 1,
      name: "Bachelor of Business Administration (BBA)",
      level: "Bachelor",
      duration: "4 Years / 8 Semesters",
      system: "Semester",
    },
    {
      id: 2,
      name: "Bachelor of Business Studies (BBS)",
      level: "Bachelor",
      duration: "4 Years",
      system: "Yearly",
    },
    {
      id: 3,
      name: "Bachelor of Fashion Design Management (BFDM)",
      level: "Bachelor",
      duration: "4 Years / 8 Semesters",
      system: "Semester",
    },
    {
      id: 4,
      name: "Bachelor of Hospitality & Catering Management (BHCM)",
      level: "Bachelor",
      duration: "4 Years / 8 Semesters",
      system: "Semester",
    },
    {
      id: 5,
      name: "Bachelor of Travel and Tourism Studies (BTTS)",
      level: "Bachelor",
      duration: "4 Years / 8 Semesters",
      system: "Semester",
    },
    {
      id: 6,
      name: "Bachelor of Hotel Management (BHM)",
      level: "Bachelor",
      duration: "4 Years / 8 Semesters",
      system: "Semester",
    },
    {
      id: 7,
      name: "Executive Master of Business Administration",
      level: "Master",
      duration: "2 Years / 4 Semesters",
      system: "Semester",
    },
    {
      id: 8,
      name: "Master of Business Administration (MBA)",
      level: "Master",
      duration: "2 Years / 4 Semesters",
      system: "Semester",
    },
    {
      id: 9,
      name: "Master of Hotel And Hospitality Management (MHHM)",
      level: "Master",
      duration: "2 Years / 4 Semesters",
      system: "Semester",
    },
    {
      id: 10,
      name: "Master of Public Administration (MPA)",
      level: "Master",
      duration: "2 Years / 4 Semesters",
      system: "Semester",
    },
    {
      id: 11,
      name: "Master of Tourism Studies (MTS)",
      level: "Master",
      duration: "2 Years / 4 Semesters",
      system: "Semester",
    },
    {
      id: 12,
      name: "M.Phil. In Management",
      level: "M.Phil.",
      duration: "1.5 Years / 3 Semesters",
      system: "Semester",
    },
    {
      id: 13,
      name: "Ph.D. In Management",
      level: "PhD",
      duration: "—",
      system: "Research",
    },
  ],
  colleges: [
    {
      sn: 1,
      name: "P. U. School of Management (PUSOM)",
      address: "Biratnagar, Morang",
      contact: "021-456789, 9852000001",
      website: "https://pusom.edu.np",
      chief: "Prof. Dr. Ramesh Shrestha",
      chiefPhone: "9851000001",
      programs: [
        { id: 1, faculty_id: 2, program: "BBA", seat: 105, remark: "-" },
        {
          id: 2,
          faculty_id: 2,
          program: "MBA (Spring/Fall)",
          seat: 33,
          remark: "-",
        },
        { id: 3, faculty_id: 2, program: "M.Phil.", seat: 16, remark: "-" },
        { id: 4, faculty_id: 2, program: "Ph.D.", seat: 0, remark: "Research" },
      ],
    },
    {
      sn: 2,
      name: "Gomendra Multiple College",
      address: "Birtamode, Jhapa",
      contact: "023-545678",
      website: "https://gomendra.edu.np",
      chief: "Mr. Goma Devi Neupane",
      chiefPhone: "9852000003",
      programs: [
        { id: 5, faculty_id: 2, program: "BBA", seat: 96, remark: "-" },
        { id: 6, faculty_id: 2, program: "BBS", seat: 60, remark: "-" },
        { id: 7, faculty_id: 2, program: "MBA (Fall)", seat: 33, remark: "-" },
      ],
    },
    {
      sn: 3,
      name: "South Asian School of Tourism & Hotel Management",
      address: "Biratnagar, Morang",
      contact: "021-533444",
      website: "https://sasthm.edu.np",
      chief: "Mr. Suman Rai",
      chiefPhone: "9852000004",
      programs: [
        { id: 8, faculty_id: 2, program: "BBA", seat: 144, remark: "-" },
        { id: 9, faculty_id: 2, program: "BHM", seat: 144, remark: "-" },
        { id: 10, faculty_id: 2, program: "MBA (Fall)", seat: 33, remark: "-" },
        {
          id: 11,
          faculty_id: 2,
          program: "MHHM (Fall)",
          seat: 33,
          remark: "-",
        },
      ],
    },
    {
      sn: 4,
      name: "Zenith International College",
      address: "Biratnagar, Morang",
      contact: "021-511223",
      website: "https://zenith.edu.np",
      chief: "Dr. Bikash Koirala",
      chiefPhone: "9852000005",
      programs: [
        { id: 12, faculty_id: 2, program: "BBA", seat: 144, remark: "-" },
        {
          id: 13,
          faculty_id: 2,
          program: "MBA (Spring)",
          seat: 33,
          remark: "-",
        },
        { id: 14, faculty_id: 2, program: "MBA (Fall)", seat: 33, remark: "-" },
      ],
    },
    {
      sn: 5,
      name: "Dharan College of Management",
      address: "Dharan, Sunsari",
      contact: "025-520333",
      website: "https://dcm.edu.np",
      chief: "Dr. Sita Sharma",
      chiefPhone: "9852000010",
      programs: [
        { id: 15, faculty_id: 2, program: "BBA", seat: 48, remark: "-" },
        { id: 16, faculty_id: 2, program: "MBA (Fall)", seat: 33, remark: "-" },
      ],
    },
    {
      sn: 6,
      name: "Birgunj Public College",
      address: "Birgunj, Parsa",
      contact: "051-526138, 051-522584",
      website: "https://birgunjpublic.edu.np",
      chief: "Prof. Dr. Rajesh Gupta",
      chiefPhone: "9852000024",
      programs: [
        { id: 17, faculty_id: 2, program: "BBA", seat: 144, remark: "-" },
        {
          id: 18,
          faculty_id: 2,
          program: "MBA (Spring)",
          seat: 33,
          remark: "-",
        },
        { id: 19, faculty_id: 2, program: "MBA (Fall)", seat: 33, remark: "-" },
      ],
    },
    {
      sn: 7,
      name: "Presidency College of Management Sciences",
      address: "Bharatpur, Chitwan",
      contact: "056-530123",
      website: "https://presidency.edu.np",
      chief: "Dr. Prakash Adhikari",
      chiefPhone: "9852000025",
      programs: [
        { id: 20, faculty_id: 2, program: "BBA", seat: 144, remark: "-" },
        {
          id: 21,
          faculty_id: 2,
          program: "MBA (Spring)",
          seat: 33,
          remark: "-",
        },
        { id: 22, faculty_id: 2, program: "MBA (Fall)", seat: 33, remark: "-" },
      ],
    },
    {
      sn: 8,
      name: "Novel Academy",
      address: "Pokhara, Kaski",
      contact: "061-540456",
      website: "https://novelacademy.edu.np",
      chief: "Dr. Sudhir Gurung",
      chiefPhone: "9852000031",
      programs: [
        { id: 23, faculty_id: 2, program: "BBA", seat: 48, remark: "-" },
        {
          id: 24,
          faculty_id: 2,
          program: "MBA (Spring)",
          seat: 33,
          remark: "-",
        },
        { id: 25, faculty_id: 2, program: "MBA (Fall)", seat: 33, remark: "-" },
      ],
    },
    {
      sn: 9,
      name: "Asian College of Management & Technology",
      address: "Kathmandu",
      contact: "01-4790099, 01-4790284",
      website: "https://acmt.edu.np",
      chief: "Dr. Bishnu Prasad Sharma",
      chiefPhone: "9852000033",
      programs: [
        { id: 26, faculty_id: 2, program: "BBA", seat: 96, remark: "-" },
        { id: 27, faculty_id: 2, program: "MBA (Fall)", seat: 33, remark: "-" },
        {
          id: 28,
          faculty_id: 2,
          program: "MBA (Spring)",
          seat: 33,
          remark: "-",
        },
      ],
    },
    {
      sn: 10,
      name: "Kathmandu Don Bosco College",
      address: "Kathmandu",
      contact: "01-5709012",
      website: "https://kdb.edu.np",
      chief: "Dr. Suman Raj Sharma",
      chiefPhone: "9852000039",
      programs: [
        { id: 29, faculty_id: 2, program: "BBA", seat: 144, remark: "-" },
        {
          id: 30,
          faculty_id: 2,
          program: "MBA (Spring)",
          seat: 33,
          remark: "-",
        },
        { id: 31, faculty_id: 2, program: "MBA (Fall)", seat: 33, remark: "-" },
        {
          id: 32,
          faculty_id: 2,
          program: "EMBA (Spring)",
          seat: 30,
          remark: "-",
        },
        {
          id: 33,
          faculty_id: 2,
          program: "EMBA (Fall)",
          seat: 30,
          remark: "-",
        },
      ],
    },
  ],
});
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

function LoadingSkeleton() {
  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-20">
      <div className="mx-auto max-w-6xl animate-pulse px-4 sm:px-6 lg:px-8">
        <div className="mb-6 h-3 w-24 rounded bg-slate-200" />
        <div className="mb-10 h-12 w-2/3 rounded bg-slate-200" />
        <div className="mb-6 h-4 w-1/2 rounded bg-slate-200" />
        <div className="grid gap-4 md:grid-cols-[200px_1fr]">
          <div className="aspect-[4/5] w-full max-w-[200px] rounded-xl bg-slate-200" />
          <div className="space-y-3">
            <div className="h-3 w-24 rounded bg-slate-200" />
            <div className="h-8 w-64 rounded bg-slate-200" />
            <div className="h-4 w-full rounded bg-slate-200" />
            <div className="h-4 w-5/6 rounded bg-slate-200" />
          </div>
        </div>
      </div>
    </section>
  );
}
// function DeanBlock({ dean, reduce }) {
//   if (!dean) return null;
//   const emails = [dean.email, dean.alt_email].filter(Boolean);

//   return (
//     <motion.div
//       initial={reduce ? false : { opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: 0.6, ease: EASE }}
//       className="mb-10 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3.5 sm:mb-12 sm:gap-5 sm:p-5 md:gap-8 md:p-7 lg:p-8"
//     >
//       <div className="w-24 flex-shrink-0 self-center sm:w-28 md:w-40 lg:w-48">
//         <img
//           src={dean.image_url}
//           alt={dean.name}
//           draggable={false}
//           className="aspect-[4/5] w-full rounded-xl object-cover object-top"
//         />
//       </div>

//       <div className="min-w-0 flex-1 text-left">
//         <div className="flex justify-start">
//           <Eyebrow>{dean.role}</Eyebrow>
//         </div>

//         <h2
//           className="mt-2 font-serif text-base font-bold leading-tight tracking-tight sm:text-lg md:text-2xl lg:text-3xl"
//           style={{ color: NAVY }}
//         >
//           {dean.name}
//         </h2>

//         {dean.bio && (
//           <p className="mt-2 text-[11.5px] leading-relaxed text-slate-600 sm:text-[12.5px] md:text-[14px]">
//             {dean.bio}
//           </p>
//         )}

//         <div className="mt-3 flex flex-col items-start gap-1.5 sm:mt-4">
//           {emails.map((mail) => (
//             <a
//               key={mail}
//               href={`mailto:${mail}`}
//               className="inline-flex max-w-full items-center gap-2 text-[11.5px] font-medium text-slate-700 transition-colors hover:text-[#9e1c32] sm:text-[12.5px] md:text-[13.5px]"
//             >
//               <span
//                 className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full sm:h-7 sm:w-7"
//                 style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}
//               >
//                 <MailIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
//               </span>
//               <span className="truncate">{mail}</span>
//             </a>
//           ))}
//         </div>

//         {dean.website && (
//           <a
//             href={dean.website}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mt-3 inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[10.5px] font-bold uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90 sm:mt-4 sm:px-4 sm:text-[11px] md:px-5 md:py-2.5 md:text-[12px]"
//             style={{ backgroundColor: NAVY }}
//           >
//             Visit Website
//             <ArrowUpRightIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
//           </a>
//         )}
//       </div>
//     </motion.div>
//   );
// }
function DeanBlock({ dean, reduce }) {
  if (!dean) return null;
  const emails = [dean.email, dean.alt_email].filter(Boolean);
  const hasContact = emails.length > 0 || dean.website;

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="mb-10 rounded-2xl border border-slate-200 bg-white p-3.5 sm:mb-12 sm:p-5 md:p-7 lg:p-8"
    >
      {/* Top: image + text block */}
      <div className="flex items-center gap-3 sm:gap-5 md:gap-8">
        <div className="w-24 flex-shrink-0 self-center sm:w-28 md:w-40 lg:w-48">
          <img
            src={dean.image_url}
            alt={dean.name}
            draggable={false}
            className="aspect-[4/5] w-full rounded-xl object-cover object-top"
          />
        </div>

        <div className="min-w-0 flex-1 text-left">
          <div className="flex justify-start">
            <Eyebrow>{dean.role}</Eyebrow>
          </div>

          <h2
            className="mt-2 font-serif text-base font-bold leading-tight tracking-tight sm:text-lg md:text-2xl lg:text-3xl"
            style={{ color: NAVY }}
          >
            {dean.name}
          </h2>

          {dean.bio && (
            <p className="mt-2 text-[11.5px] leading-relaxed text-slate-600 sm:text-[12.5px] md:text-[14px]">
              {dean.bio}
            </p>
          )}

          {/* DESKTOP / TABLET — email and button STACKED vertically */}
          {hasContact && (
            <div className="mt-4 hidden flex-col items-start gap-2.5 md:flex">
              {emails.map((mail) => (
                <a
                  key={mail}
                  href={`mailto:${mail}`}
                  className="inline-flex max-w-full items-center gap-2 text-[12.5px] font-medium text-slate-700 transition-colors hover:text-[#9e1c32] md:text-[13.5px]"
                >
                  <span
                    className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}
                  >
                    <MailIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="truncate">{mail}</span>
                </a>
              ))}

              {dean.website && (
                <a
                  href={dean.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-shrink-0 items-center gap-1.5 mt-1 rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90 md:px-5 md:py-2.5 md:text-[12px]"
                  style={{ backgroundColor: NAVY }}
                >
                  Visit Website
                  <ArrowUpRightIcon className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* MOBILE ONLY — email and button SIDE BY SIDE at the bottom */}
      {hasContact && (
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-100 pt-4 md:hidden">
          {emails.map((mail) => (
            <a
              key={mail}
              href={`mailto:${mail}`}
              className="inline-flex max-w-full items-center gap-2 text-[11.5px] font-medium text-slate-700 transition-colors hover:text-[#9e1c32]"
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

          {dean.website && (
            <a
              href={dean.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-[10.5px] font-bold uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: NAVY }}
            >
              Visit Website
              <ArrowUpRightIcon className="h-3 w-3" />
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}

function TabSwitcher({ active, onChange, programCount, collegeCount }) {
  const TABS = [
    {
      id: "programs",
      label: "Programs",
      fullLabel: "Programs Offered",
      count: programCount,
      Icon: BookIcon,
    },
    {
      id: "colleges",
      label: "Colleges",
      fullLabel: "Affiliated Colleges",
      count: collegeCount,
      Icon: BuildingIcon,
    },
  ];
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
function ProgramsPanel({ programs, reduce }) {
  return (
    <ul className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      {programs.map((p, i) => (
        <motion.li
          key={p.id}
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
              {String(i + 1).padStart(2, "0")}
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
function SearchBar({ value, onChange, shown, total }) {
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
        {total} colleges
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
              delay: Math.min(i * 0.015, 0.2),
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
                        Seats
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
export default function FacultyofManagement() {
  const reduce = useReducedMotion();
  const [activeTab, setActiveTab] = useState("programs");
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [query, setQuery] = useState("");

  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(!USE_MOCK);
  const [error, setError] = useState(null);
  const data = USE_MOCK ? getMockData() : apiData;
  useEffect(() => {
    if (USE_MOCK) return;

    let cancelled = false;

    const loadFaculty = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await API.get(`/faculty/management`);
        if (!cancelled) setApiData(response.data);
      } catch (err) {
        if (!cancelled) {
          setError(
            err.response?.data?.message ||
              err.message ||
              "Unable to load faculty data",
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    loadFaculty();

    return () => {
      cancelled = true;
    };
  }, []);

  const closeModal = useCallback(() => setSelectedCollege(null), []);

  const faculty = data?.faculty;
  const dean = data?.dean;
  const programs = data?.programs ?? [];
  const colleges = data?.colleges ?? [];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return colleges;
    return colleges.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.address.toLowerCase().includes(q) ||
        c.programs.some((p) => p.program.toLowerCase().includes(q)),
    );
  }, [query, colleges]);

  if (loading) return <LoadingSkeleton />;

  if (error) {
    return (
      <section className="w-full bg-white py-20">
        <div className="mx-auto max-w-xl px-6 text-center">
          <p className="font-serif text-xl font-bold" style={{ color: NAVY }}>
            Unable to load faculty data
          </p>
          <p className="mt-2 text-sm text-slate-500">{error}</p>
        </div>
      </section>
    );
  }

  if (!faculty) return null;

  return (
    <section className="w-full bg-white py-10 selection:bg-[#252659] selection:text-white sm:py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
            {faculty.title}
          </h1>
          <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-slate-600 sm:text-base">
            {faculty.description}
          </p>
        </motion.header>

        <DeanBlock dean={dean} reduce={reduce} />

        <TabSwitcher
          active={activeTab}
          onChange={(id) => {
            setActiveTab(id);
            setQuery("");
            setSelectedCollege(null);
          }}
          programCount={programs.length}
          collegeCount={colleges.length}
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
              <ProgramsPanel programs={programs} reduce={reduce} />
            ) : (
              <>
                <SearchBar
                  value={query}
                  onChange={setQuery}
                  shown={filtered.length}
                  total={colleges.length}
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
