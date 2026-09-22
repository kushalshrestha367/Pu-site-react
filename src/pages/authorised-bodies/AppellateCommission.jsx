import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const toNepali = (n) => String(n).replace(/\d/g, (d) => "०१२३४५६७८९"[d]);

const toNepaliOrdinal = (n) => toNepali(n) + ".";

const sections = [
  {
    t: "पूर्वाञ्चल विश्वविद्यालय नियमावली २०५३ खण्ड-क नियम ६० को उप-नियम (१) को खण्ड (क) बमोजिम कानुनमा स्नातक भई कानुन वा न्यायिक क्षेत्रमा कम्तिमा १० वर्षको अनुभव तथा सो क्षेत्रमा ख्याति प्राप्त व्यक्तिहरू मध्येबाट कार्यकारी परिषद्को सिफारिसमा सभाले नियुक्त गरेको एक जना कानुनविद्",
    r: [["वरिष्ठ अधिवक्ता श्री गणेशराज लुइँटेल, मोरङ", "अध्यक्ष", "मनोनीत"]],
  },
  {
    t: "पूर्वाञ्चल विश्वविद्यालय नियमावली २०५३ खण्ड-क को नियम ६० को उप-नियम (१) को खण्ड (ख) बमोजिम व्यवस्थापन तथा जनप्रशासनका क्षेत्रमा कम्तिमा १० वर्षको अनुभव तथा सो क्षेत्रमा ख्याति प्राप्त व्यक्तिहरू मध्ये कार्यकारी परिषद्को सिफारिसमा सभाबाट मनोनीत २ जना",
    r: [
      ["अधिवक्ता श्री देवेन्द्र कोइराला, मोरङ", "सदस्य", "मनोनीत"],
      ["अधिवक्ता श्री जयराम सुन्दास, मोरङ", "सदस्य", "मनोनीत"],
    ],
  },
];

const intro =
  "पूर्वाञ्चल विश्वविद्यालय नियमावली २०५३ खण्ड-क सांगठनिक तथा शैक्षिक नियमावली २०५३ को नियम ६० बमोजिम विश्वविद्यालयमा शिक्षक, कर्मचारीहरूको सेवा, शर्त र सुविधाका सम्बन्धमा उठेका विवादका विषयमा पुनरावेदन सुन्न देहाय बमोजिमको पुनरावेदन आयोग रहनेछः–";

const note =
  "द्रष्टव्यः नियमावलीको व्यवस्था अनुसार पुनरावेदन आयोगका अध्यक्ष तथा सदस्यको पदावधि ३ वर्षको हुनेछ ।";

const EASE = [0.22, 1, 0.36, 1];

function StatusBadge({ status }) {
  const isExOfficio = status === "पदेन";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 sm:text-xs ${
        isExOfficio
          ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
          : "bg-amber-50 text-amber-700 ring-amber-200"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          isExOfficio ? "bg-emerald-500" : "bg-amber-500"
        }`}
      />
      {status}
    </span>
  );
}

export default function AppellateCommission() {
  const reduce = useReducedMotion();
  let serial = 0;

  const totalMembers = sections.reduce((sum, s) => sum + s.r.length, 0);
  const nominatedCount = sections.reduce(
    (sum, s) => sum + s.r.filter((r) => r[2] === "मनोनीत").length,
    0,
  );
  const exOfficioCount = sections.reduce(
    (sum, s) => sum + s.r.filter((r) => r[2] === "पदेन").length,
    0,
  );

  const reveal = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.1 },
          transition: { duration: 0.7, delay, ease: EASE },
        };

  const stats = [
    {
      label: "कुल सदस्य",
      value: totalMembers,
      accent: "bg-[#252659]",
      text: "text-[#252659]",
    },
    {
      label: "पदेन सदस्य",
      value: exOfficioCount,
      accent: "bg-emerald-500",
      text: "text-emerald-700",
    },
    {
      label: "मनोनीत सदस्य",
      value: nominatedCount,
      accent: "bg-amber-500",
      text: "text-amber-700",
    },
    {
      label: "नियम / खण्ड",
      value: sections.length,
      accent: "bg-indigo-500",
      text: "text-indigo-700",
    },
  ];

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

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mb-8 sm:mb-10"
        >
          <div className="mb-4 flex items-center gap-3 sm:mb-5">
            <span className="h-[3px] w-8 rounded-full bg-[#252659]" />
            <span className="text-xs font-semibold text-[#252659] sm:text-sm">
              पुनरावेदन आयोग
            </span>
          </div>

          <h1 className="font-serif text-xl font-bold leading-[1.4] tracking-tight text-slate-900 sm:text-2xl lg:text-3xl xl:text-4xl">
            पुनरावेदन आयोगको विवरण
          </h1>

          <p className="mt-4 max-w-3xl text-[13.5px] leading-relaxed text-slate-600 sm:mt-5 sm:text-sm lg:text-[15px]">
            {intro}
          </p>
        </motion.div>

        <div className="mb-8 grid grid-cols-2 gap-2.5 sm:mb-10 sm:grid-cols-4 sm:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.15 + i * 0.08,
                ease: EASE,
              }}
              whileHover={reduce ? {} : { y: -4 }}
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm transition-shadow hover:shadow-md sm:rounded-2xl sm:p-5"
            >
              <span
                className={`absolute left-0 top-0 h-full w-1 ${s.accent}`}
              />
              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 sm:text-[11px]">
                {s.label}
              </p>
              <p
                className={`mt-1 font-serif text-xl font-bold sm:text-3xl ${s.text}`}
              >
                {toNepali(s.value)}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...reveal(0.2)}
          className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50 md:block"
        >
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-[14px] text-slate-800 lg:text-[15px]">
              <thead className="sticky top-0 z-20">
                <tr className="bg-[#252659] text-left text-white">
                  <th className="w-20 px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider lg:text-sm">
                    क्र.सं.
                  </th>
                  <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wider lg:text-sm">
                    पुनरावेदन आयोगका पदाधिकारीहरू
                  </th>
                  <th className="w-48 px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider lg:w-56 lg:text-sm">
                    पद
                  </th>
                  <th className="w-40 px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider lg:w-44 lg:text-sm">
                    पदेन / मनोनीत
                  </th>
                </tr>
              </thead>

              <tbody>
                {sections.map((s, si) => (
                  <React.Fragment key={si}>
                    <tr>
                      <td
                        colSpan={4}
                        className="border-y border-slate-200 bg-slate-50/80 px-4 py-3.5"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-[13px] font-semibold leading-relaxed text-slate-800 lg:text-sm">
                            {s.t}
                          </span>
                        </div>
                      </td>
                    </tr>

                    {s.r.map(([name, post, status], ri) => (
                      <motion.tr
                        key={ri}
                        initial={reduce ? false : { opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{
                          duration: 0.5,
                          delay: Math.min(ri * 0.04, 0.25),
                          ease: EASE,
                        }}
                        className="group border-b border-slate-100 transition-colors hover:bg-amber-50/50"
                      >
                        <td className="px-4 py-3.5 text-center text-sm font-semibold text-slate-500 group-hover:text-[#252659]">
                          {toNepaliOrdinal(++serial)}
                        </td>
                        <td className="px-4 py-3.5 text-sm leading-relaxed text-slate-700">
                          {name}
                        </td>
                        <td className="px-4 py-3.5 text-center text-sm font-medium text-slate-600">
                          {post}
                        </td>
                        <td className="px-4 py-3.5 text-center">
                          <StatusBadge status={status} />
                        </td>
                      </motion.tr>
                    ))}
                  </React.Fragment>
                ))}

                <tr>
                  <td
                    colSpan={4}
                    className="bg-slate-50 px-4 py-5 text-sm leading-relaxed text-slate-600"
                  >
                    <div className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#252659]"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{note}</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
        <div className="space-y-4 md:hidden">
          {sections.map((s, si) => (
            <motion.div
              key={si}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, ease: EASE }}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="border-b border-slate-100 bg-slate-50/80 px-3.5 py-3">
                <p className="text-[12.5px] font-semibold leading-relaxed text-slate-800">
                  {s.t}
                </p>
              </div>

              <ul className="divide-y divide-slate-100">
                {s.r.map(([name, post, status], ri) => (
                  <li
                    key={ri}
                    className="flex flex-col gap-2 px-3.5 py-3 transition-colors active:bg-amber-50/50"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-600">
                        {toNepali(++serial)}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-[13.5px] font-medium leading-relaxed text-slate-800">
                          {name}
                        </p>
                        <div className="mt-2 flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700">
                            {post}
                          </span>
                          <StatusBadge status={status} />
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          <motion.div
            {...reveal()}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
          >
            <div className="flex items-start gap-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#252659]"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-[13px] leading-relaxed text-slate-600">
                {note}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
