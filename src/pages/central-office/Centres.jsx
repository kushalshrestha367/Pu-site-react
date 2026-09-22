import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

const centres = [
  {
    id: "research",
    title: "Research Centre",
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
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
      className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="h-1 w-full bg-[#252659]" />

      <div className="p-6 sm:p-7 font-serif">
        {directorName && (
          <div className="mb-5 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-[#252659]/10" />
              {directorImage && !imgFailed ? (
                <img
                  src={directorImage}
                  alt={directorName}
                  onError={() => setImgFailed(true)}
                  className="relative h-32 w-32 rounded-2xl object-cover object-top ring-1 ring-slate-200 sm:h-40 sm:w-40 md:h-36 md:w-36 lg:h-44 lg:w-44"
                  draggable={false}
                />
              ) : (
                <InitialsAvatar
                  name={directorName}
                  className="relative h-32 w-32 rounded-2xl ring-1 ring-slate-200 sm:h-40 sm:w-40 md:h-36 md:w-36 lg:h-44 lg:w-44"
                />
              )}
            </div>
          </div>
        )}

        {directorName && (
          <h3 className="text-center font-serif text-lg font-bold text-slate-900">
            {directorName}
          </h3>
        )}

        <p className="mt-1 text-center text-sm font-semibold text-accent">
          {contact.role}
        </p>

        {contact.centre && (
          <p className="mt-1 text-center text-sm text-slate-600">
            {contact.centre}
          </p>
        )}

        <div className="my-5 h-px w-full bg-slate-100" />

        <ul className="space-y-3 text-sm">
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
          className="mb-8 sm:mb-10"
        >
          <div className="mb-4 flex items-center gap-3 sm:mb-5">
            <span className="h-[3px] w-8 rounded-full bg-[#252659]" />
            <span className="text-xs font-semibold text-[#252659] sm:text-sm">
              केन्द्रहरू
            </span>
          </div>
          <h1 className="font-serif text-xl font-bold leading-[1.4] tracking-tight text-slate-900 sm:text-2xl md:text-[28px] lg:text-3xl xl:text-4xl">
            केन्द्रहरूको विवरण
          </h1>
          <p className="mt-4 max-w-3xl text-[13.5px] leading-relaxed text-slate-600 sm:mt-5 sm:text-sm lg:text-[15px] xl:text-base">
            Purbanchal University's research, curriculum, and monitoring centres
            dedicated to academic excellence and institutional development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          <div
            className="lg:col-span-4"
            role="tablist"
            aria-label="University centres"
          >
            <div className="hidden lg:block">
              <div className="space-y-2.5">
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
                      transition={{
                        duration: 0.5,
                        delay: i * 0.08,
                        ease: EASE,
                      }}
                      whileHover={reduce ? {} : { x: 4 }}
                      className={`group relative flex w-full min-h-[64px] items-center gap-3 rounded-xl border px-5 py-4 text-left transition-all duration-300 ${
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
                        <CentreIcon id={c.id} className="h-4 w-4" />
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
            <div className="flex flex-col gap-2.5 lg:hidden">
              {centres.map((c) => {
                const isActive = c.id === activeId;
                return (
                  <button
                    key={c.id}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`centre-panel-${c.id}`}
                    onClick={() => setActiveId(c.id)}
                    className={`w-full min-h-14 rounded-xl border px-5 py-4 text-left text-[13px] font-bold uppercase tracking-wide shadow-sm transition-colors sm:text-sm ${
                      isActive
                        ? "border-[#252659] bg-[#252659] text-white shadow-md shadow-[#252659]/20"
                        : "border-slate-200 bg-white text-slate-800 active:bg-slate-50"
                    }`}
                  >
                    <span className="block break-words leading-snug">
                      {c.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

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
                <div className="border-b border-slate-100 bg-slate-50/60 px-6 py-5 sm:px-8 sm:py-6">
                  <h2 className="break-words font-serif text-lg font-bold leading-tight text-slate-900 sm:text-xl lg:text-2xl xl:text-[28px]">
                    {active.title}
                  </h2>
                </div>

                <div className="px-6 py-6 sm:px-8 sm:py-8">
                  {!active.description && (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
                      <div className="md:col-span-6 lg:col-span-7">
                        <ContactCard contact={active.contact} />
                      </div>
                      <div className="md:col-span-6 lg:col-span-5">
                        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 p-6 text-center">
                          <p className="text-sm leading-relaxed text-slate-500">
                            For inquiries regarding this centre, please reach
                            out using the contact details provided.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {active.description && (
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-12 text-justify">
                      <div className="md:col-span-5">
                        <ContactCard
                          contact={active.contact}
                          directorName={active.directorName}
                          directorImage={active.directorImage}
                        />
                      </div>

                      <div className="min-w-0 space-y-4 md:col-span-7">
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
                            className="max-w-[65ch] text-[14px] leading-[1.85] text-slate-700 sm:text-[15px] xl:text-base"
                          >
                            {p}
                          </motion.p>
                        ))}
                      </div>
                    </div>
                  )}

                  {active.note && (
                    <motion.div
                      initial={reduce ? false : { opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
                      className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/50 p-5 sm:p-6 text-justify"
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
                        <p className="text-[13.5px] leading-relaxed text-slate-700 sm:text-sm">
                          <span className="font-semibold text-slate-800">
                            Note:{" "}
                          </span>
                          {active.note}
                        </p>
                      </div>
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
