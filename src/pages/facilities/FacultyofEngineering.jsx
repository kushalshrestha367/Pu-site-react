import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

/* ------------------------------------------------------------------
   Data
------------------------------------------------------------------ */
const dean = {
  name: "Er. Dev Lal Yadav",
  role: "Dean",
  email: "dean@pufoe.edu.np",
  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=faces&q=80",
  website: "https://pufoe.edu.np",
};

const deputyDean = {
  role: "Deputy Dean",
  email: "dep.dean@pufoe.edu.np",
};

const programs = [
  { sn: 1, name: "Bachelor in Biomedical Engineering", duration: "4 Years / 8 Semesters", type: "Semester" },
  { sn: 2, name: "Bachelor in Civil Engineering", duration: "4 Years / 8 Semesters", type: "Semester" },
  { sn: 3, name: "Bachelor in Computer Engineering", duration: "4 Years / 8 Semesters", type: "Semester" },
  { sn: 4, name: "Bachelor in Electrical Engineering", duration: "4 Years / 8 Semesters", type: "Semester" },
  { sn: 5, name: "Bachelor in Electronics Communication & Automation Engineering", duration: "4 Years / 8 Semesters", type: "Semester" },
  { sn: 6, name: "Bachelor in Architecture (B. Arch.)", duration: "5 Years / 10 Semesters", type: "Semester" },
  { sn: 7, name: "Bachelor in Geomatic Engineering", duration: "4 Years / 8 Semesters", type: "Semester" },
  { sn: 8, name: "Master of Engineering in Earthquake", duration: "2 Years / 4 Semesters", type: "Semester" },
  { sn: 9, name: "Master of Science in Engineering Management", duration: "2 Years / 4 Semesters", type: "Semester" },
  { sn: 10, name: "Master of Science in Information System Engineering", duration: "2 Years / 4 Semesters", type: "Semester" },
  { sn: 11, name: "Master of Science in Urban Design & Conservation", duration: "2 Years / 4 Semesters", type: "Semester" },
  { sn: 12, name: "Master of Science in Construction Management", duration: "2 Years / 4 Semesters", type: "Semester" },
  { sn: 13, name: "Master of Science in Electrical Power Engineering", duration: "2 Years / 4 Semesters", type: "Semester" },
];

const colleges = [
  { sn: 1, name: "P. U. School of Engineering (PUSOE)", address: "Biratnagar, Morang", programs: "BE Civil-96, BE Computer-96, BE Elx., Comm. & Automation-60, BE Electrical-48, M.Sc. EM-30, M.Sc. ISE-30, M.Sc. CM-20, M.Sc. EPE-20, M.E. in Earthquake-20" },
  { sn: 2, name: "Acme Engineering College", address: "Kathmandu", programs: "BE Civil-144, BE Computer-60, B. Arch.-48, M.Sc. ISE-30, M.Sc. EM-30" },
  { sn: 3, name: "Aryan School of Engineering and Management", address: "Kathmandu", programs: "BE Civil-96, B.E. (Computer)-48" },
  { sn: 4, name: "Central Engineering College", address: "Janakpurdham, Dhanusha", programs: "BE Civil-48, BE Electrical-48" },
  { sn: 5, name: "College of Information Technology and Engineering", address: "Kathmandu", programs: "BE Computer-40" },
  { sn: 6, name: "Eastern College of Engineering", address: "Biratnagar, Morang", programs: "BE Civil-96, BE Computer-48, BE EC & Automation-30" },
  { sn: 7, name: "Hillside College of Engineering", address: "Kathmandu", programs: "BE Civil-96, BE Electrical-48, M.Sc. CM-20, M.Sc. EPE-20, BE Computer-48" },
  { sn: 8, name: "Himalayan College of Geomatic Engineering and Land Resources Management", address: "Kathmandu", programs: "BE Geomatic-48" },
  { sn: 9, name: "Himalayan Institute of Science & Technology", address: "Kathmandu", programs: "BE Civil-60, M.Sc. ISE-30, M.Sc. EM-40, BE Computer-48" },
  { sn: 10, name: "Himalayan Whitehouse Int'l College", address: "Kathmandu", programs: "BE Civil-144, BE Computer-48" },
  { sn: 11, name: "Kantipur International College", address: "Kathmandu", programs: "BE Civil-96, B. Arch.-96, M.Sc. CM-20, M.E. in Earthquake-20" },
  { sn: 12, name: "Kantipur City College", address: "Kathmandu", programs: "BE Civil-144, BE Computer-40" },
  { sn: 13, name: "Khwopa Engineering College", address: "Bhaktapur", programs: "BE Civil-96, BE Computer-60, BE EC & Automation-80, B. Arch.-60, M.E. in Earthquake-20, M. Sc. UDC-20" },
  { sn: 14, name: "Morgan Engineering and Management College", address: "Kathmandu", programs: "BE Civil-48" },
  { sn: 15, name: "Nepal Polytechnic Institute", address: "Bharatpur, Chitwan", programs: "BE Civil-96, BE Electrical-48, BE Computer-48" },
  { sn: 16, name: "Pathivara Center for Advance Studies", address: "Birtamode, Jhapa", programs: "BE Civil-48, BE Computer-48" },
  { sn: 17, name: "Dhulabari Campus", address: "Mechinagar, Jhapa", programs: "BE Civil-48" },
  { sn: 18, name: "National Institute of Engineering and Technology", address: "Kupondole, Lalitpur", programs: "BE Biomedical-144, BE (Computer)-48" },
  { sn: 19, name: "Mega College of Engineering", address: "Lalitpur", programs: "BE (Computer)-48" },
  { sn: 20, name: "Mansarobar Institute of Science and Technology", address: "Damak, Jhapa", programs: "BE Civil-48" },
  { sn: 21, name: "S.R. Engineering College", address: "Biratnagar, Morang", programs: "BE Computer-48" },
];

/* ------------------------------------------------------------------
   Icons
------------------------------------------------------------------ */
function MailIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  );
}

function ArrowUpRightIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
    </svg>
  );
}

/* ------------------------------------------------------------------
   Dean Block
------------------------------------------------------------------ */
function DeanBlock({ reduce }) {
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="mb-16 sm:mb-20"
    >
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/50">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Photo */}
          <div className="relative md:col-span-4 lg:col-span-3">
            <div className="relative aspect-square h-full w-full md:aspect-auto md:h-full">
              <img
                src={dean.image}
                alt={dean.name}
                className="h-full w-full object-cover object-top"
                draggable={false}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.classList.add("bg-[#252659]");
                }}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-50/50 to-transparent md:hidden" />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center p-6 sm:p-8 md:col-span-8 lg:col-span-9 lg:p-10">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-6 bg-amber-500" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-700">
                {dean.role}
              </span>
            </div>

            <h2 className="font-serif text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">
              {dean.name}
            </h2>

            <p className="mt-3 max-w-lg text-[13.5px] leading-relaxed text-slate-600 sm:text-[14.5px]">
              Leading the Faculty of Engineering — advancing technical
              education, applied research, and engineering innovation at
              Purbanchal University.
            </p>

            {/* Contact links */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={`mailto:${dean.email}`}
                className="inline-flex items-center gap-2 text-[13.5px] font-medium text-slate-700 transition-colors hover:text-[#252659]"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#252659] ring-1 ring-slate-200">
                  <MailIcon className="h-3.5 w-3.5" />
                </span>
                {dean.email}
              </a>
            </div>

            {/* Visit Website Button */}
            <div className="mt-6">
              <a
                href={dean.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#252659] px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.14em] text-white shadow-md shadow-[#252659]/20 transition-all hover:-translate-y-0.5 hover:bg-[#1a1c4b] hover:shadow-lg hover:shadow-[#252659]/30"
              >
                Visit Website
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Deputy Dean */}
      <div className="mt-4 flex flex-col items-start gap-3 rounded-2xl border border-dashed border-slate-200 bg-slate-50/40 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex items-center gap-3">
          <span className="h-px w-6 bg-amber-500" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-700">
            {deputyDean.role}
          </span>
        </div>
        <a
          href={`mailto:${deputyDean.email}`}
          className="inline-flex items-center gap-2 text-[13.5px] font-medium text-slate-700 transition-colors hover:text-[#252659]"
        >
          <MailIcon className="h-3.5 w-3.5 text-[#252659]" />
          {deputyDean.email}
        </a>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   Main Component
------------------------------------------------------------------ */
export default function FacultyofEngineering() {
  const reduce = useReducedMotion();

  const reveal = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.1 },
          transition: { duration: 0.7, delay, ease: EASE },
        };

  return (
    <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* HERO */}
        <motion.header
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-12 sm:mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#252659]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#252659]">
              Faculty
            </span>
          </div>

          <h1 className="font-serif text-3xl font-bold leading-[1.2] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Faculty of Engineering
          </h1>

          <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
            Engineering programmes and affiliated colleges across Nepal —
            shaping the next generation of engineers and technologists.
          </p>
        </motion.header>

        {/* DEAN BLOCK */}
        <DeanBlock reduce={reduce} />

        {/* PROGRAMS */}
        <div className="mb-16 sm:mb-20">
          <motion.div {...reveal()} className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
              Programs Offered
            </h2>
            <p className="mt-2 text-[13.5px] text-slate-500">
              {programs.length} programmes across undergraduate and graduate
              levels
            </p>
          </motion.div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {programs.map((p, i) => (
              <motion.div
                key={p.sn}
                {...reveal(Math.min(i * 0.03, 0.3))}
                className="group flex flex-col gap-2 py-4 transition-colors hover:bg-slate-50/60 sm:flex-row sm:items-center sm:gap-6 sm:py-5"
              >
                <span className="font-mono text-[12px] font-medium tabular-nums text-slate-400 sm:w-10 sm:flex-shrink-0">
                  {String(p.sn).padStart(2, "0")}
                </span>

                <h3 className="flex-1 text-[14.5px] font-medium leading-snug text-slate-800 transition-colors group-hover:text-[#252659] sm:text-[15px]">
                  {p.name}
                </h3>

                <div className="flex items-center gap-3 sm:flex-shrink-0">
                  <span className="text-[12.5px] text-slate-500">
                    {p.duration}
                  </span>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10.5px] font-semibold ${
                      p.type === "Yearly"
                        ? "bg-emerald-50 text-emerald-700"
                        : p.type === "Research"
                        ? "bg-purple-50 text-purple-700"
                        : "bg-blue-50 text-blue-700"
                    }`}
                  >
                    {p.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* COLLEGES */}
        <div>
          <motion.div {...reveal()} className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
              Affiliated Colleges
            </h2>
            <p className="mt-2 text-[13.5px] text-slate-500">
              {colleges.length} colleges offering Faculty programmes across
              Nepal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
            {colleges.map((c, i) => (
              <motion.div
                key={c.sn}
                {...reveal(Math.min(i * 0.015, 0.4))}
                className="group border-t border-slate-200 py-5"
              >
                <div className="flex items-start gap-3">
                  <span className="font-mono text-[11px] font-medium tabular-nums text-slate-400">
                    {String(c.sn).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[13.5px] font-semibold leading-snug text-slate-800 transition-colors group-hover:text-[#252659]">
                      {c.name}
                    </h3>
                    <p className="mt-1 text-[12px] text-slate-500">
                      {c.address}
                    </p>
                    <p className="mt-1.5 text-[11.5px] font-medium leading-relaxed text-amber-700">
                      {c.programs}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}