import React from "react";
import { motion, useReducedMotion } from "framer-motion";
// import Breadcrumbs from "../../components/Breadcrumbs";

const EASE = [0.22, 1, 0.36, 1];

/* ------------------------------------------------------------------
   Content blocks — rendered in order.
   type: "p" | "h" | "quote"
------------------------------------------------------------------ */
const content = [
  // ---- Intro paragraph ----
  {
    type: "p",
    text: "It is a profound honour to assume the role of Registrar. Working in close alignment with the forward-looking vision of our Vice-Chancellor, Prof. Dr. Sujan Babu Marhatta, we are fully committed to translating our shared goals into functional, everyday reality. While the Vice-Chancellor sets the strategic course for the university to make a transformative impact on society, our administrative philosophy will be strictly pragmatic: we will focus on actionable, results-oriented implementation to support that mission.",
  },
  // ---- Lead-in ----
  {
    type: "p",
    text: "To ensure that Purbanchal University continues to thrive as a centre of educational innovation, our operations will be guided by the following strategic priorities:",
  },
  // ---- Section 1 ----
  {
    type: "h",
    text: "Educational Innovation & Digital Transformation",
  },
  {
    type: "p",
    text: "The Vice-Chancellor has rightly highlighted the critical role of rapid technological progress, artificial intelligence, and technology-enabled learning in modern higher education. To support this vision pragmatically, we will be accelerating a resource-conscious digital transformation of the university's core functions—spanning academic services, central administration, the examination system, and library services. Furthermore, to fully leverage these tools, we will be prioritizing the capacity enhancement of our faculty and non-teaching staff. Through targeted training, we will elevate essential IT skills and ensure the ethical and effective use of AI across our administrative and academic ecosystems.",
  },
  // ---- Section 2 ----
  {
    type: "h",
    text: "Quality Assurance and Centres of Excellence",
  },
  {
    type: "p",
    text: "In our collective mission to develop centres of excellence that address local and global challenges, rigorous academic oversight is essential. We will strengthen our focus on the Quality Assurance and Accreditation (QAA) process for both constituent campuses and our extensive network of affiliated colleges. By ensuring and sustaining quality education, we enable our graduates to embrace humanistic values and indigenous knowledge while remaining globally competitive. Ultimately, quality is a shared responsibility: we expect students to engage actively and ethically in their academic pursuits and use their education to support the socio-economic development of Koshi Province and the nation.",
  },
  // ---- Section 3 ----
  {
    type: "h",
    text: "Participatory Leadership & Institutional Dialogue",
  },
  {
    type: "p",
    text: "Navigating the complexities of modern higher education demands what the Vice-Chancellor aptly described as \"constructive, open, and informed dialogue.\" Our efforts will be dedicated to foster this environment through transparency, accountability, and participatory leadership. Rather than relying on theoretical assumptions, we will make rapid, informed decisions inclusively, drawing on the collective expertise of our university community while remaining accountable for the outcomes.",
  },
  // ---- Closing quote ----
  {
    type: "quote",
    text: "As we continuously move forward to achieve our targeted goals, I echo the Vice-Chancellor's call to unite as one force. The path ahead requires adaptability and collective effort, and I deeply expect and appreciate your support and cooperation as we work together to build a modern, efficient, and academically rigorous Purbanchal University.",
  },
];

function AboutHasMessageFromRegistrar() {
  const reduce = useReducedMotion();

  const reveal = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.8, delay, ease: EASE },
        };

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-24">
      {/* <Breadcrumbs /> */}

      {/* Soft dot-grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(15,23,42,0.10) 1px, transparent 1.5px)",
          backgroundSize: "26px 26px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 10%, transparent 75%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 10%, transparent 75%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        {/* ---------- Heading ---------- */}
        <motion.header {...reveal()} className="mb-14 max-w-3xl sm:mb-20">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[3px] w-8 rounded-full bg-[#252659]" />
            <span className="text-sm font-semibold text-[#252659]">
              Message from Registrar
            </span>
          </div>
          <h1 className="font-serif text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            A vision for Purbanchal University
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-500">
            Strategic priorities and administrative commitments from the office
            of the Registrar.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-16">
          {/* ---------- Portrait ---------- */}
          <div className="mx-auto w-full max-w-sm lg:sticky lg:top-28 lg:col-span-4">
            <div className="relative">
              {/* Navy arch offset */}
              <motion.div
                aria-hidden="true"
                initial={reduce ? false : { opacity: 0, x: -16, y: 16 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: EASE }}
                className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-[12rem] rounded-b-3xl bg-[#252659]"
              />

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: EASE }}
                className="relative overflow-hidden rounded-t-[12rem] rounded-b-3xl bg-slate-100 ring-1 ring-slate-200"
              >
                <img
                  src="/assets/img/regis.jpeg"
                  alt="Prof. Dr. Panna Thapa, Registrar"
                  className="h-[26rem] w-full object-cover object-top sm:h-[30rem]"
                  draggable={false}
                />
              </motion.div>
              <motion.div
                {...reveal(0.5)}
                className="relative mx-auto -mt-10 w-[88%] rounded-2xl border border-slate-200 bg-white px-5 py-4 text-center shadow-lg shadow-slate-200/10"
              >
                <p className="text-sm font-semibold text-amber-700">Registrar</p>
                <h2 className="mt-1 font-serif text-lg font-bold leading-tight text-slate-900">
                  Prof. Dr. Panna Thapa
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  PhD in Pharmaceutical Sciences
                </p>

                <a
                  href="mailto:registrar@purbuniv.edu.np"
                  className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800 ring-1 ring-amber-200 transition-colors hover:bg-amber-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-3 w-3"
                    aria-hidden="true"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  registrar@purbuniv.edu.np
                </a>
              </motion.div>
            </div>
          </div>
          <div className="lg:col-span-8">
            {/* Lead statement */}
            <motion.p
              {...reveal()}
              className="relative font-serif text-2xl font-medium leading-[1.55] text-slate-900 sm:text-[1.7rem]"
            >
              <span
                aria-hidden="true"
                className="absolute -left-1 -top-8 select-none font-serif text-8xl leading-none text-[#252659] sm:-left-6"
              >
                “
              </span>
              It is a profound honour to assume the role of Registrar. Working
              in close alignment with the forward-looking vision of our
              Vice-Chancellor, we are fully committed to translating our shared
              goals into functional, everyday reality.
            </motion.p>

            <div className="my-10 h-px w-full bg-gradient-to-r from-[#252659] via-slate-500 to-transparent" />
            <div className="space-y-6 font-serif text-[1.05rem] leading-[1.9] text-slate-700 sm:text-lg">
              {content.slice(1).map((block, i) => {
                if (block.type === "h") {
                  return (
                    <motion.h3
                      key={i}
                      {...reveal()}
                      className="!mt-12 flex items-center gap-3 font-sans text-xl font-bold leading-tight tracking-tight text-[#252659] sm:text-2xl"
                    >
                      <span className="h-6 w-1 rounded-full bg-[#252659]" />
                      {block.text}
                    </motion.h3>
                  );
                }

                if (block.type === "quote") {
                  return (
                    <motion.blockquote
                      key={i}
                      {...reveal()}
                      className="my-10 border-l-4 border-[#252659] bg-blue-50/50 py-5 pl-6 pr-5 text-xl font-medium italic leading-relaxed text-slate-900 sm:text-2xl"
                    >
                      {block.text}
                    </motion.blockquote>
                  );
                }

                return (
                  <motion.p key={i} {...reveal()}>
                    {block.text}
                  </motion.p>
                );
              })}
            </div>
            <motion.div
              {...reveal()}
              className="mt-14 flex flex-col gap-5 border-t border-slate-200 pt-8 sm:flex-row sm:items-center"
            >
              <img
                src="/assets/img/regis.jpeg"
                alt=""
                className="h-14 w-14 flex-shrink-0 rounded-full object-cover object-top ring-2 ring-[#252659]"
              />
              <div className="flex-1">
                <p className="font-serif text-base font-bold text-slate-900">
                  Professor Panna Thapa, PhD
                </p>
                <p className="text-sm font-medium text-[#161634]">Registrar</p>
                <p className="text-xs text-slate-500">
                  Purbanchal University, Gothgaun, Morang
                </p>
                <a
                  href="mailto:registrar@purbuniv.edu.np"
                  className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-amber-700 hover:text-amber-800 hover:underline"
                >
                  registrar@purbuniv.edu.np
                </a>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 120 40"
                className="hidden h-10 w-28 text-[#161634] sm:block"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <motion.path
                  initial={reduce ? false : { pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.4, ease: "easeInOut" }}
                  d="M5 30 C 20 5, 30 5, 40 25 S 60 35, 70 15 S 90 5, 100 25 S 112 28, 118 18"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHasMessageFromRegistrar;