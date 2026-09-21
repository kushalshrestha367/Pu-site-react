import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const D = "..................................................";
const toNepali = (n) =>
  String(n).replace(/\d/g, (d) => "०१२३४५६७८९"[d]);

const toNepaliOrdinal = (n) => toNepali(n) + ".";

const ex = (name) => [name, "सदस्य", "पदेन"];
const nom = (name) => [name, "सदस्य", "मनोनीत"];
const vc = (uni) => ex(`${D}, उपकुलपति, ${uni}`);
const dean = (fac) => ex(`${D}, डीन, ${fac}`);
const dir = (kind) => nom(`क्याम्पस प्रमुख (${kind}), ${D},`);
const blank = () => nom(`${D},`);
const vacant = "............................. (हाल रिक्त)";

const sections = [
  {
    t: "पूर्वाञ्चल विश्वविद्यालय ऐन, २०५० को दफा ७ को उपदफा (२) को खण्ड (क) बमोजिम",
    r: [
      [
        <>
          सम्माननीय प्रधानमन्त्री एवम् कुलपति श्री <i>वालेन्द्र शाह</i>
        </>,
        "अध्यक्ष",
        "पदेन",
      ],
    ],
  },
  {
    t: "पूर्वाञ्चल विश्वविद्यालय ऐन, २०५० को दफा ७ को उपदफा (२) को खण्ड (ख) बमोजिम",
    r: [
      [
        "माननीय शिक्षा तथा खेलकुद मन्त्री एवम् सहकुलपति श्री सस्मित पोखरेल",
        "उपाध्यक्ष",
        "पदेन",
      ],
    ],
  },
  {
    t: "पूर्वाञ्चल विश्वविद्यालय ऐन, २०५० को दफा ७ को उपदफा (२) को खण्ड (ग) बमोजिम",
    r: [ex(<i>प्रा.डा. सुजन बाबु मरहट्टा, उपकुलपति</i>)],
  },
  {
    t: "शिक्षा सम्बन्धी केही नेपाल ऐन संसोधन गर्न बनेको ऐन, २०७७ को दफा ७ को उपदफा (२) को खण्ड (क) बमोजिम पूर्वाञ्चल विश्वविद्यालय ऐन, २०५० को दफा (७) को उपदफा २ खण्ड (घ) मा भएको संशोधन अनुसार विश्वविद्यालयको केन्द्रीय कार्यालय रहने निर्वाचन क्षेत्रका पहिलो हुने निर्वाचित हुने निर्वाचन प्रणाली अन्तर्गत निर्वाचित प्रतिनिधि सभा र प्रदेश सभाका सदस्य",
    r: [
      ex("माननीय श्री रुबिना अचार्य, सदस्य, प्रतिनिधि सभा, मोरङ क्षेत्र नं. ६"),
      ex("माननीय श्री गणेश कार्की, सदस्य, प्रतिनिधि सभा, मोरङ क्षेत्र नं. ३"),
      ex("माननीय श्री जिवन आचार्य, सदस्य, कोशी प्रदेश सभा, मोरङ क्षेत्र नं. ६(१)"),
      ex("माननीय श्री ज्ञानेन्द्र सुवेदी, सदस्य, कोशी प्रदेश सभा, मोरङ क्षेत्र नं. ३(२)"),
    ],
  },
  {
    t: "पूर्वाञ्चल विश्वविद्यालय ऐन, २०५० को दफा (७) को उपदफा २ (ङ) बमोजिम अन्य विश्वविद्यालयका उपकुलपतिहरू",
    r: [
      vc("त्रिभूवन विश्वविद्यालय"),
      vc("काठमाडौं विश्वविद्यालय"),
      vc("पोखरा विश्वविद्यालय"),
      vc("नेपाल संस्कृत विश्वविद्यालय"),
      vc("मध्यपश्चिम विश्वविद्यालय"),
      vc("सुदुर पश्चिम विश्वविद्यालय"),
      vc("लुम्बिनी बौद्ध विश्वविद्यालय"),
      vc("कृषि तथा वन विश्वविद्यालय"),
      vc("राजर्षि जनक विश्वविद्यालय"),
    ],
  },
  {
    t: "पूर्वाञ्चल विश्वविद्यालय ऐन, २०५० को दफा (७) को उपदफा २ को खण्ड (च) बमोजिम सदस्य, राष्ट्रिय योजना आयोग (शिक्षा हेर्ने)",
    r: [
      ex("माननीय रेशु आचार्य ढुङ्गाना, सदस्य (शिक्षा), राष्ट्रिय योजना आयोग"),
    ],
  },
  {
    t: "पूर्वाञ्चल विश्वविद्यालय ऐन, २०५० को दफा (७) को उपदफा २ को खण्ड (छ) बमोजिम सचिव, शिक्षा, विज्ञान तथा प्रविधि मन्त्रालय",
    r: [ex("श्री चूडामणि पौडेल, सचिव (शिक्षा), शिक्षा तथा खेलकुद मन्त्रालय")],
  },
  {
    t: "पूर्वाञ्चल विश्वविद्यालयको ऐन २०५० को दफा ७ को उपदफा २ को खण्ड (ज) बमोजिम सचिव (अर्थ), अर्थ मन्त्रालय",
    r: [ex("डा. घनश्याम उपाध्याय, सचिव (अर्थ), अर्थ मन्त्रालय")],
  },
  {
    t: "शिक्षा सम्बन्धी केही नेपाल ऐन संसोधन गर्न बनेको ऐन, २०७७ को दफा ७ को उपदफा (२) को खण्ड (ख) बमोजिम पूर्वाञ्चल विश्वविद्यालय ऐन, २०५० को दफा ७ को उपदफा (२) को खण्ड (झ) मा भएको संशोधन अनुसार लब्ध प्रतिष्ठित विद्धानहरू मध्येबाट समावेशी आधारमा कम्तीमा दुई जना महिला सहित पाँच जना",
    r: [blank(), blank(), blank(), blank(), blank()],
  },
  {
    t: "पूर्वाञ्चल विश्वविद्यालय ऐन, २०५० को दफा ७ को उपदफा (२) को खण्ड (ञ) बमोजिम डीनहरू",
    r: [
      dean("चिकित्साशास्त्र संकाय"),
      dean("व्यवस्थापन संकाय"),
      dean("विज्ञान तथा प्रविधि संकाय"),
      dean("इञ्जिनियरिङ संकाय"),
      dean("कला, कानून तथा शिक्षाशास्त्र संकाय"),
    ],
  },
  {
    t: "शिक्षा सम्बन्धी केही नेपाल ऐन संसोधन गर्न बनेको ऐन, २०७७ को दफा ७ को उपदफा (२) को खण्ड (ग) बमोजिम पूर्वाञ्चल विश्वविद्यालय ऐन, २०५० को दफा ७ को उपदफा (२) को खण्ड (ट) मा भएको संशोधन अनुसार विश्वविद्यालयको केन्द्रीय कार्यालय रहेको नगरपालिकाको प्रमुख र उप-प्रमुख",
    r: [
      ex("श्री केदार प्रसाद गुरागाईं, नगर प्रमुख, सुन्दरहरैंचा नगरपालिका, मोरङ"),
      ex("श्री अकली चौधरी, नगर उप-प्रमुख, सुन्दरहरैंचा नगरपालिका, मोरङ"),
    ],
  },
  {
    t: "पूर्वाञ्चल विश्वविद्यालय ऐन, २०५० को दफा (७) को उपदफा (२) को खण्ड (ठ) बमोजिम क्याम्पस प्रमुखहरू मध्येबाट छ जना",
    r: [
      dir("डाइरेक्टर"),
      dir("डाइरेक्टर"),
      dir("डाइरेक्टर"),
      dir("डाइरेक्टर"),
      dir("डाइरेक्टर"),
      dir("प्रिन्सिपल"),
    ],
  },
  {
    t: "पूर्वाञ्चल विश्वविद्यालय ऐन, २०५० को दफा ७ को उपदफा (२) को खण्ड (ड) बमोजिम विषय समितिका अध्यक्ष मध्येबाट तीन जना",
    r: [
      nom(`${D}, विषय समिति`),
      nom(`${D}, विषय समिति`),
      nom(`${D}, विषय समिति`),
    ],
  },
  {
    t: "शिक्षा सम्बन्धी केही नेपाल ऐन संसोधन गर्न बनेको ऐन, २०७७ को दफा ७ को उपदफा (२) को खण्ड (घ) बमोजिम पूर्वाञ्चल विश्वविद्यालय ऐन, २०५० को दफा ७ को उपदफा (२) को खण्ड (ढ) मा भएको संशोधन अनुसार विश्वविद्यालयका नेपाल प्राध्यापक संघ क्याम्पस इकाई अध्यक्ष र सचिवको निर्वाचक मण्डलले समानुपातिक एकल संक्रमणीय मतका आधारमा समावेशी सिद्धान्त बमोजिम निर्वाचित कम्तीमा दुई जना महिला सहित पाँच जना शिक्षकहरू",
    r: [blank(), blank(), blank(), blank(), blank()],
  },
  {
    t: "पूर्वाञ्चल विश्वविद्यालय ऐन, २०५० को दफा ७ को उपदफा (२) को खण्ड (ढ) (१) बमोजिम नेपाल प्राध्यापक संघको प्रतिनिधि एक जना (केही नेपाल कानून संशोधन गर्ने ऐन, २०६३ द्वारा थप)",
    r: [ex(`${D},`)],
  },
  {
    t: "पूर्वाञ्चल विश्वविद्यालय ऐन, २०५० को दफा ७ को उपदफा (२) को खण्ड (ढ) (२) बमोजिम पूर्वाञ्चल विश्वविद्यालयको प्राध्यापक संघको प्रतिनिधि एक जना (केही नेपाल कानून संशोधन गर्ने ऐन, २०६३ द्वारा थप)",
    r: [blank()],
  },
  {
    t: "पूर्वाञ्चल विश्वविद्यालय ऐन, २०५० को दफा (७) को उपदफा (२) को खण्ड (त) बमोजिम प्रतिनिधि, प्राज्ञिक परिषद् एक जना",
    r: [blank()],
  },
  {
    t: "पूर्वाञ्चल विश्वविद्यालय ऐन, २०५० को दफा (७) को उपदफा (२) को खण्ड (थ) बमोजिम प्रतिनिधि, साधन-स्रोत परिषद",
    r: [blank()],
  },
  {
    t: "शिक्षा सम्बन्धी केही नेपाल ऐन संसोधन गर्न बनेको ऐन, २०७७ को दफा ७ को उपदफा (२) को खण्ड (घ) बमोजिम पूर्वाञ्चल विश्वविद्यालय ऐन, २०५० को दफा ७ को उपदफा (२) को खण्ड (द) मा भएको संशोधन अनुसार शिक्षाप्रेमी तथा समाजसेवी मध्येबाट समावेशी आधारमा कम्तीमा दुई जना महिला सहित चार जना",
    r: [blank(), blank(), blank(), blank()],
  },
  {
    t: "शिक्षा सम्बन्धी केही नेपाल ऐन संसोधन गर्न बनेको ऐन, २०७७ को दफा ७ को उपदफा २ को खण्ड (घ) बमोजिम पूर्वाञ्चल विश्वविद्यालय ऐन, २०५० को दफा (७) को उपदफा (२) को खण्ड (ध) मा भएको संशोधन अनुसार उद्योगपति, व्यापारी तथा कृषकहरू मध्येबाट समावेशी आधारमा कम्तीमा दुई जना महिला सहित छ जना",
    r: [blank(), blank(), blank(), blank(), blank(), blank()],
  },
  {
    t: "शिक्षा सम्बन्धी केही नेपाल ऐन संसोधन गर्न बनेको ऐन, २०७७ को दफा ७ को उपदफा (२) को खण्ड (घ) बमोजिम पूर्वाञ्चल विश्वविद्यालय ऐन, २०५० को दफा ७ को उपदफा (२) को खण्ड (न) मा भएको संशोधन अनुसार चन्दादाताहरू मध्येबाट समावेशी आधारमा कम्तीमा एक जना महिला सहित तीन जना",
    r: [blank(), blank(), blank()],
  },
  {
    t: "पूर्वाञ्चल विश्वविद्यालय ऐन, २०५० को दफा ७ को उपदफा (२) को खण्ड (प) बमोजिम क्याम्पसका स्वतन्त्र विद्यार्थी युनियनका सभापतिहरू मध्येबाट दुई जना",
    r: [nom(vacant), nom(vacant)],
  },
  {
    t: "पूर्वाञ्चल विश्वविद्यालय ऐन, २०५० को दफा ७ को उपदफा (२) को खण्ड (फ) बमोजिम अनुसन्धान केन्द्रका प्रमुखहरू",
    r: [ex(vacant)],
  },
  {
    t: "पूर्वाञ्चल विश्वविद्यालय ऐन, २०५० को दफा ७ को उपदफा (२) को खण्ड (ब) बमोजिम",
    r: [["प्रा.डा. पन्ना थापा, रजिष्ट्रार", "सदस्य-सचिव", "पदेन"]],
  },
];

const note =
  "द्रष्टव्यः ऐनको व्यवस्था अनुसार पदेन सदस्यहरू बाहेक सभाका अन्य सदस्यहरूको मनोयन कार्यकारी परिषद्को सिफारिशमा कुलपतिबाट हुनेछ । मनोनीत सदस्यहरूको पदावधि तीन वर्षको हुनेछ ।";

const EASE = [0.22, 1, 0.36, 1];

/* ---------- Badge ---------- */
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

export default function UniversitySabhaTable() {
  const reduce = useReducedMotion();
  let serial = 0;

  const totalMembers = sections.reduce((sum, s) => sum + s.r.length, 0);
  const nominatedCount = sections.reduce(
    (sum, s) => sum + s.r.filter((r) => r[2] === "मनोनीत").length,
    0
  );
  const exOfficioCount = sections.reduce(
    (sum, s) => sum + s.r.filter((r) => r[2] === "पदेन").length,
    0
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
      label: "धारा / खण्ड",
      value: sections.length,
      accent: "bg-indigo-500",
      text: "text-indigo-700",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-8 sm:py-12 lg:py-16">
      {/* Dot grid background */}
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
        {/* ---------- Hero Header ---------- */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mb-8 sm:mb-10"
        >
          <div className="mb-4 flex items-center gap-3 sm:mb-5">
            <span className="h-[3px] w-8 rounded-full bg-[#252659]" />
            <span className="text-xs font-semibold text-[#252659] sm:text-sm">
              विश्वविद्यालय सभा
            </span>
          </div>

          <h1 className="font-serif text-xl font-bold leading-[1.4] tracking-tight text-slate-900 sm:text-2xl lg:text-3xl xl:text-4xl">
            पूर्वाञ्चल विश्वविद्यालय ऐन, २०५०, केही नेपाल कानून संशोधन गर्ने
            ऐन, २०६३ र शिक्षा सम्बन्धी केही नेपाल ऐन संसोधन गर्न बनेको ऐन,
            २०७७ बमोजिम गठित विश्वविद्यालय सभाको विवरण
          </h1>
        </motion.div>

        {/* ---------- Stat Cards ---------- */}
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

        {/* ============================================================
            DESKTOP / TABLET — Table view (md and up)
        ============================================================ */}
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
                    विश्वविद्यालय सभाका पदाधिकारीहरू
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
                    {/* Section header row */}
                    <tr>
                      <td
                        colSpan={4}
                        className="border-y border-slate-200 bg-slate-50/80 px-4 py-3.5"
                      >
                        <div className="flex items-start gap-3">
                          {/* <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#252659] text-[10px] font-bold text-white">
                            {toNepali(si + 1)}
                          </span> */}
                          <span className="text-[13px] font-semibold leading-relaxed text-slate-800 lg:text-sm">
                            {s.t}
                          </span>
                        </div>
                      </td>
                    </tr>

                    {/* Member rows */}
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

                {/* Note row */}
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
              {/* Section header */}
              <div className="flex items-start gap-2.5 border-b border-slate-100 bg-slate-50/80 px-3.5 py-3">
                {/* <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#252659] text-[10px] font-bold text-white">
                  {toNepali(si + 1)}
                </span> */}
                <p className="text-[12.5px] font-semibold leading-relaxed text-slate-800">
                  {s.t}
                </p>
              </div>

              {/* Members */}
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

          {/* Note card (mobile) */}
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