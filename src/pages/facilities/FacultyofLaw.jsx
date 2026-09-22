import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

/* ------------------------------------------------------------------
   Data
------------------------------------------------------------------ */
const dean = {
  name: "Prof. Ram Prasad Dhakal",
  role: "Dean",
  email: "info@pufale.edu.np",
  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=faces&q=80",
  website: "https://pufale.edu.np",
};

const programs = [
  { sn: 1, name: "LL. B.", duration: "3 Years", type: "Yearly" },
  { sn: 2, name: "B.A. LL.B.", duration: "5 Years", type: "Yearly" },
  { sn: 3, name: "LL. M. in Business & International Trade Law", duration: "2 Years", type: "Yearly" },
  { sn: 4, name: "LL. M. in Human Rights & Gender Justice", duration: "2 Years", type: "Yearly" },
  { sn: 5, name: "LL. M. in Criminal Law & Justice", duration: "2 Years", type: "Yearly" },
];

const colleges = [
  { sn: 1, name: "P.U. College of Law", address: "Biratnagar, Morang", programs: "LL. B.-120, B.A. LL.B.-60" },
  { sn: 2, name: "Bright Vision Law College", address: "Biratnagar, Morang", programs: "B.A. LL.B.-180, LL. M.-100" },
  { sn: 3, name: "Chakrabarti Habi Education Academy", address: "Kathmandu", programs: "B.A. LL.B.-100, LL. M.-100" },
  { sn: 4, name: "Kathmandu School of Law", address: "Dadhikot, Bhaktapur", programs: "B.A. LL.B.-250, LL. M.-100" },
  { sn: 5, name: "Khwopa College of Law", address: "Dakocha, Bhaktapur", programs: "B.A. LL.B.-60" },
  { sn: 6, name: "Lumbini Integrated Academy", address: "Tilottama, Rupandehi", programs: "B.A. LL.B.-60" },
  { sn: 7, name: "Mega College of Law", address: "Lalitipur", programs: "B.A. LL.B.-60" },
  { sn: 8, name: "Sagarmatha College of Law", address: "Dillibazar, Kathmandu", programs: "B.A. LL.B.-60" },
  { sn: 9, name: "Solukhumbu Law Campus", address: "Salleri, Solukhumbu", programs: "LL.B.-60" },
  { sn: 10, name: "Global School of Law", address: "New Baneshwor, Kathmandu", programs: "B.A. LL.B.-60" },
  { sn: 11, name: "Siddhartha Law Campus", address: "Hetauda, Makawanpur", programs: "B.A. LL.B.-60" },
  { sn: 12, name: "Model College of Law", address: "Janakpurdham, Dhanusha", programs: "B.A. LL.B.-60" },
  { sn: 13, name: "Asian College of Law", address: "Nagarjun, Kathmandu", programs: "B.A. LL.B.-60" },
  { sn: 14, name: "Kantipur International College of Law", address: "New Baneshwor, Kathmandu", programs: "B.A. LL.B.-60" },
  { sn: 15, name: "Himalayan Whitehouse College of Law", address: "Putalisadak, Kathmandu", programs: "B.A. LL.B.-60" },
  { sn: 16, name: "Maharshi Law College", address: "Kupondole, Lalitpur", programs: "B.A. LL.B.-60" },
  { sn: 17, name: "Annapurna Law College", address: "Biratnagar, Morang", programs: "B.A. LL.B.-60" },
  { sn: 18, name: "Imperial Law College", address: "Thapagaun, Kathmandu", programs: "B.A. LL.B.-60" },
  { sn: 19, name: "Shree College of Law", address: "Bharatpur, Chitwan", programs: "B.A. LL.B.-60" },
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
              Leading the Faculty of Law — advancing legal education,
              jurisprudence, and justice studies at Purbanchal University.
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
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   Main Component
------------------------------------------------------------------ */
export default function FacultyofLaw() {
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
            Faculty of Law
          </h1>

          <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
            Legal education programmes and affiliated law colleges across
            Nepal.
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