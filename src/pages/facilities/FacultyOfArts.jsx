import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRightIcon } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

const dean = {
  name: "Prof. Ram Prasad Dhakal",
  role: "Dean",
  email: "info@pufale.edu.np",
  image:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=faces&q=80",
  website: "https://pufale.edu.np",
};

const programs = [
  { sn: 1, name: "Bachelor of Arts (BA)", duration: "4 Years", type: "Yearly" },
  {
    sn: 2,
    name: "Bachelor of Arts (BA Honours)",
    duration: "4 Years",
    type: "Yearly",
  },
  {
    sn: 3,
    name: "Bachelor of Social Work (BSW)",
    duration: "4 Years",
    type: "Semester",
  },
  {
    sn: 4,
    name: "Bachelor of Mass Communication & Journalism (BAMCJ)",
    duration: "4 Years",
    type: "Semester",
  },
  {
    sn: 5,
    name: "Bachelor of Media Technology (BMT)",
    duration: "4 Years",
    type: "Semester",
  },
  {
    sn: 6,
    name: "Bachelor of Liberal Arts & Science (BLAS)",
    duration: "4 Years",
    type: "Semester",
  },
  {
    sn: 7,
    name: "Bachelor of Interior Design (BID)",
    duration: "4 Years",
    type: "Semester",
  },
  {
    sn: 8,
    name: "Master of Journalism & Mass Communication (MAMCJ)",
    duration: "2 Years",
    type: "Semester",
  },
  {
    sn: 9,
    name: "Master of Media Technology (MMT)",
    duration: "2 Years",
    type: "Semester",
  },
  {
    sn: 10,
    name: "Master of Development Studies (MDEVS)",
    duration: "2 Years",
    type: "Semester",
  },
  {
    sn: 11,
    name: "Master of Development Communication (MDC)",
    duration: "2 Years",
    type: "Semester",
  },
  {
    sn: 12,
    name: "Master of Science in Population & Rural Development",
    duration: "2 Years",
    type: "Semester",
  },
  {
    sn: 13,
    name: "Master of Sociology / Anthropology",
    duration: "2 Years",
    type: "Yearly",
  },
  {
    sn: 14,
    name: "Master of Social Work (MSW)",
    duration: "2 Years",
    type: "Semester",
  },
];

const colleges = [
  {
    sn: 1,
    name: "Janta Adarsha Multiple Campus",
    address: "Biratnagar, Morang",
    programs: "BSW-48, PGDPCP-33, MSW-33",
  },
  {
    sn: 2,
    name: "Chakrabarti Hadi Educational Academy",
    address: "Kathmandu",
    programs: "BA (Hon.)-100, MA (Eng.)-100",
  },
  {
    sn: 3,
    name: "College of Journalism & Mass Communication",
    address: "Kathmandu",
    programs: "BAMCJ-25, MAMCJ-25, MDC-25",
  },
  {
    sn: 4,
    name: "Kadambari Memorial College",
    address: "Kathmandu",
    programs: "BSW-48, MSW-33",
  },
  {
    sn: 5,
    name: "Kantipur International College",
    address: "Kathmandu",
    programs: "BID-96",
  },
  {
    sn: 6,
    name: "Kartok Bidy Mandir Multiple Campus",
    address: "Kartok, Ilam",
    programs: "B.A.-40",
  },
  {
    sn: 7,
    name: "Shepherd College",
    address: "Kathmandu",
    programs: "BMT-48, MMT-33",
  },
  {
    sn: 8,
    name: "Himalayan Whitehouse Int'l College",
    address: "Kathmandu",
    programs: "BLAS-25",
  },
  {
    sn: 9,
    name: "Centre of Population and Development",
    address: "Biratnagar, Morang",
    programs: "M. Sc. PRD-33",
  },
  {
    sn: 10,
    name: "Kantipur City College",
    address: "Kathmandu",
    programs: "MAMCJ-33",
  },
  {
    sn: 11,
    name: "Polygon College",
    address: "Kathmandu",
    programs: "MAMCJ-40",
  },
  {
    sn: 12,
    name: "Global College of Social Science & Technology",
    address: "Kathmandu",
    programs: "MDS-33",
  },
  {
    sn: 13,
    name: "Sagarmatha Multiple College",
    address: "Kathmandu",
    programs: "MA (Soc/Anth)-50",
  },
];

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
          <div className="flex flex-col justify-center p-6 sm:p-8 md:col-span-8 lg:col-span-9 lg:p-10">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-6 bg-[#9e1c32]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9e1c32]">
                {dean.role}
              </span>
            </div>

            <h2 className="font-serif text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">
              {dean.name}
            </h2>

            <p className="mt-3 max-w-lg text-[13.5px] leading-relaxed text-slate-600 sm:text-[14.5px]">
              Leading the Faculty of Arts, Law &amp; Education — advancing
              scholarship, creative practice, and social impact across
              Purbanchal University.
            </p>

            <div className="mt-6">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link
                  to={`mailto:${dean.email}`}
                  className="inline-flex items-center gap-2 text-[13.5px] font-medium text-slate-700 transition-colors hover:text-[#252659]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#252659] ring-1 ring-slate-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </span>
                  {dean.email}
                </Link>
              </div>

              <div className="mt-4">
                <Link
                  href={dean.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#252659] px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.14em] text-white shadow-md shadow-[#252659]/20 transition-all hover:-translate-y-0.5 hover:bg-[#1a1c4b] hover:shadow-lg hover:shadow-[#252659]/30"
                >
                  Visit Website
                  <ArrowUpRightIcon className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FacultyOfArts() {
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
            Faculty of Arts, Law &amp; Education
          </h1>

          <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
            Programmes and affiliated colleges under the Faculty of Arts, Law
            &amp; Education at Purbanchal University.
          </p>
        </motion.header>

        <DeanBlock reduce={reduce} />
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
                        ? "bg-accent text-white"
                        : "bg-[#9e1c32] text-white"
                    }`}
                  >
                    {p.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.div {...reveal()} className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
              Affiliated Colleges
            </h2>
            <p className="mt-2 text-[13.5px] text-slate-500">
              {colleges.length} colleges offering Faculty programmes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
            {colleges.map((c, i) => (
              <motion.div
                key={c.sn}
                {...reveal(Math.min(i * 0.03, 0.3))}
                className="group border-t border-slate-200 pt-5"
              >
                <div className="flex items-start gap-3">
                  <span className="font-mono text-[12px] font-medium tabular-nums text-slate-400">
                    {String(c.sn).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[14.5px] font-semibold leading-snug text-slate-800 transition-colors group-hover:text-[#252659]">
                      {c.name}
                    </h3>
                    <p className="mt-1 text-[12.5px] text-slate-500">
                      {c.address}
                    </p>
                    <p className="mt-2 text-[12px] font-medium text-[#9e1c32]">
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
