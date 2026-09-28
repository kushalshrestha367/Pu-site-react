import React from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { Link } from "react-router-dom";
// import Breadcrumbs from "../../components/Breadcrumbs";

const NAVY = "#252659";
const EASE = [0.22, 1, 0.36, 1];

const justify = {
  hyphens: "auto",
  WebkitHyphens: "auto",
  textWrap: "pretty",
};

const lead =
  "It is a profound honour to assume the role of Registrar. Working in close alignment with the forward-looking vision of our Vice-Chancellor, Prof. Dr. Sujan Babu Marhatta, we are fully committed to translating our shared goals into functional, everyday reality. While the Vice-Chancellor sets the strategic course for the university to make a transformative impact on society, our administrative philosophy will be strictly pragmatic: we will focus on actionable, results-oriented implementation to support that mission.";

const quote =
  "As we continuously move forward to achieve our targeted goals, I echo the Vice-Chancellor's call to unite as one force. The path ahead requires adaptability and collective effort, and I deeply expect and appreciate your support and cooperation as we work together to build a modern, efficient, and academically rigorous Purbanchal University.";

const intro =
  "To ensure that Purbanchal University continues to thrive as a centre of educational innovation, our operations will be guided by the following strategic priorities:";

const sections = [
  {
    heading: "Educational Innovation & Digital Transformation",
    body: "The Vice-Chancellor has rightly highlighted the critical role of rapid technological progress, artificial intelligence, and technology-enabled learning in modern higher education. To support this vision pragmatically, we will be accelerating a resource-conscious digital transformation of the university's core functions—spanning academic services, central administration, the examination system, and library services. Furthermore, to fully leverage these tools, we will be prioritizing the capacity enhancement of our faculty and non-teaching staff. Through targeted training, we will elevate essential IT skills and ensure the ethical and effective use of AI across our administrative and academic ecosystems.",
  },
  {
    heading: "Quality Assurance and Centres of Excellence",
    body: "In our collective mission to develop centres of excellence that address local and global challenges, rigorous academic oversight is essential. We will strengthen our focus on the Quality Assurance and Accreditation (QAA) process for both constituent campuses and our extensive network of affiliated colleges. By ensuring and sustaining quality education, we enable our graduates to embrace humanistic values and indigenous knowledge while remaining globally competitive. Ultimately, quality is a shared responsibility: we expect students to engage actively and ethically in their academic pursuits and use their education to support the socio-economic development of Koshi Province and the nation.",
  },
  {
    heading: "Participatory Leadership & Institutional Dialogue",
    body: 'Navigating the complexities of modern higher education demands what the Vice-Chancellor aptly described as "constructive, open, and informed dialogue." Our efforts will be dedicated to foster this environment through transparency, accountability, and participatory leadership. Rather than relying on theoretical assumptions, we will make rapid, informed decisions inclusively, drawing on the collective expertise of our university community while remaining accountable for the outcomes.',
  },
];

export default function AboutHasMessageFromRegistrar() {
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });

  const onScroll = {
    initial: reduce ? false : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.7, ease: EASE },
  };

  const drift = (x, y, duration) =>
    reduce
      ? {}
      : {
          animate: { x, y },
          transition: { duration, repeat: Infinity, ease: "easeInOut" },
        };

  return (
    <section
      lang="en"
      className="relative w-full bg-white py-12 selection:bg-[#252659] selection:text-white sm:py-16 lg:py-10"
    >
      {/* <Breadcrumbs /> */}

      {/* Reading progress bar */}
      {!reduce && (
        <motion.div
          aria-hidden
          style={{ scaleX: progress, backgroundColor: NAVY }}
          className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left"
        />
      )}

      {/* Ambient glows (very faint, slowly drifting) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <motion.div
          {...drift([0, 30, 0], [0, -20, 0], 16)}
          className="absolute -left-24 top-40 h-80 w-80 rounded-full opacity-[0.06] blur-3xl"
          style={{ backgroundColor: NAVY }}
        />
        <motion.div
          {...drift([0, -30, 0], [0, 20, 0], 18)}
          className="absolute -right-24 bottom-40 h-80 w-80 rounded-full opacity-[0.06] blur-3xl"
          style={{ backgroundColor: NAVY }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        {/* ---------- Header ---------- */}
        <motion.header
          initial={reduce ? false : "hidden"}
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="mb-12 sm:mb-16"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: EASE },
              },
            }}
            className="flex items-center gap-3"
          >
            <motion.span
              variants={{
                hidden: { scaleX: 0 },
                visible: {
                  scaleX: 1,
                  transition: { duration: 0.8, delay: 0.2, ease: EASE },
                },
              }}
              className="h-px w-10 origin-left"
              style={{ backgroundColor: NAVY }}
            />
            <p
              className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] sm:text-xs"
              style={{ color: NAVY }}
            >
              Message from the Registrar
            </p>
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.75, ease: EASE },
              },
            }}
            className="mt-4 max-w-3xl font-serif text-3xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl"
            style={{ color: NAVY }}
          >
            A vision for Purbanchal University
          </motion.h1>
        </motion.header>

        <article>
          {/* ---------- Floated portrait ---------- */}
          <figure className="relative isolate mx-auto mb-10 w-full max-w-[280px] md:float-left md:mb-6 md:mr-10 md:w-[260px] lg:mr-14 lg:w-[300px]">
            {/* Soft radial glow behind the photo */}
            <motion.div
              aria-hidden
              initial={reduce ? false : { opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: EASE }}
              className="absolute -inset-4 -z-10"
            >
              <motion.div
                animate={reduce ? {} : { opacity: [0.3, 0.55, 0.3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="h-full w-full rounded-[24px] blur-xl"
                style={{
                  background: `radial-gradient(circle at 30% 20%, ${NAVY}40, transparent 70%)`,
                }}
              />
            </motion.div>

            {/* Portrait card with merged caption */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
              className="relative overflow-hidden rounded-2xl bg-white shadow-[0_20px_40px_-20px_rgba(37,38,89,0.3)] ring-1 ring-[#252659]/10"
            >
              <div className="p-2.5">
                <div className="overflow-hidden rounded-xl">
                  <motion.img
                    src="/assets/img/regis.jpeg"
                    alt="Prof. Dr. Panna Thapa, Registrar"
                    draggable={false}
                    initial={reduce ? false : { scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.4, delay: 0.2, ease: EASE }}
                    className="aspect-[4/5] w-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Merged caption + signature */}
              <div className="px-5 pb-5 pt-1 text-center md:text-left">
                <motion.div
                  initial={reduce ? false : { scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.9, ease: EASE }}
                  className="mx-auto mb-3 h-[2px] w-10 origin-left md:mx-0"
                  // style={{ backgroundColor: NAVY }}
                />

                <p
                  className="font-serif text-[1.05rem] font-semibold leading-snug"
                  style={{ color: NAVY }}
                >
                  Prof. Dr. Panna Thapa
                </p>

                <p className="mt-0.5 text-sm font-medium text-slate-600 leading-[1.5rem]">
                  Registrar
                </p>

                <p className="text-xs text-slate-500">
                  PhD in Pharmaceutical Sciences
                </p>

                <div className="mx-auto my-1 h-px w-12  md:ml-0 md:mr-auto justify-center" />

                {/* <p className="text-[0.78rem] leading-relaxed text-slate-600">
                  Registrar, Purbanchal University
                </p>
                <p className="text-[0.78rem] leading-relaxed text-slate-500">
                  Gothgaun, Morang, Nepal
                </p> */}

                {/* <a
                  href="mailto:registrar@purbuniv.edu.np"
                  className="mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200 transition-colors hover:bg-slate-50"
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
                </a> */}
              </div>
            </motion.div>
          </figure>

          {/* ---------- Lead paragraph ---------- */}
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
            style={{ ...justify, color: NAVY }}
            className="text-justify font-serif text-xl font-medium leading-[1.5] sm:text-2xl lg:text-[1.50rem]"
          >
            {lead}
          </motion.p>

          {/* ---------- Divider ---------- */}
          <motion.div
            initial={reduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
            className="my-8 flow-root h-px origin-left"
            style={{
              background: `linear-gradient(to right, ${NAVY}50, ${NAVY}10, transparent)`,
            }}
          />

          {/* ---------- Intro line ---------- */}
          <motion.p
            {...onScroll}
            style={justify}
            className="text-justify font-serif text-[1.05rem] leading-[1.9] text-slate-700 sm:text-medium sm:leading-[2] "
          >
            {intro}
          </motion.p>

          {/* ---------- Sections ---------- */}
          <div className="mt-10 space-y-10">
            {sections.map((section, i) => (
              <div key={i} className="space-y-5">
                {/* Heading */}
                <motion.h3
                  {...onScroll}
                  className="!mt-12 flex items-center gap-3 font-sans text-xl font-bold leading-tight tracking-tight sm:text-2xl"
                  style={{ color: NAVY }}
                >
                  <span
                    className="h-6 w-1 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: NAVY }}
                  />
                  {section.heading}
                </motion.h3>

                {/* Body */}
                <motion.p
                  {...onScroll}
                  style={justify}
                  className="text-justify font-serif text-[1.05rem] leading-[1.9] text-slate-700 sm:text-lg sm:leading-[2]"
                >
                  {section.body}
                </motion.p>
              </div>
            ))}
          </div>

          {/* ---------- Pull quote ---------- */}
          <motion.blockquote
            {...onScroll}
            className="relative flow-root my-10 rounded-r-2xl py-6 pl-6 pr-5 sm:py-8 sm:pl-9 sm:pr-7"
            style={{ backgroundColor: `${NAVY}0D` }}
          >
            <motion.span
              aria-hidden
              initial={reduce ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
              className="absolute inset-y-0 left-0 w-[3px] origin-top rounded-full"
              style={{ backgroundColor: NAVY }}
            />

            <span
              aria-hidden
              className="pointer-events-none absolute left-3 top-1 select-none font-serif text-6xl leading-none opacity-20 sm:left-4"
              style={{ color: NAVY }}
            >
              "
            </span>

            <p
              className="relative text-lg font-medium italic leading-relaxed sm:text-xl lg:text-[1.35rem]"
              style={{ color: NAVY }}
            >
              {quote}
            </p>
          </motion.blockquote>
            <motion.div {...onScroll} className="clear-both mt-5 sm:mt-5 ">
                      <motion.span
                        aria-hidden
                        initial={reduce ? false : { scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: EASE }}
                        className="mb-6 block h-px w-full origin-left"
                        style={{
                          background: `linear-gradient(to right, ${NAVY}40, ${NAVY}10, transparent)`,
                        }}
                      />
                      <p className="font-serif text-lg font-bold " style={{ color: NAVY }}>
                        Prof. Dr. Panna Thapa
                      </p>
                      <p className="mt-1 text-sm text-slate-600">
                        Registrar, Purbanchal University
                      </p>
                      <p className="text-sm text-slate-500">Gothgaun, Morang, Nepal</p>
                      <Link to="mailto:registrar@purbuniv.edu.np" className="text-sm text-slate-500 hover:text-accent">registrar@purbuniv.edu.np</Link>
                    </motion.div>
        </article>
      </div>
    </section>
  );
}