import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Breadcrumbs from "../../components/Breadcrumbs";

const EASE = [0.22, 1, 0.36, 1];

const paragraphs = [
  "Established in 1993, the University provides high-quality education via academics, research and services to the society. The University, nestled in Eastern Nepal, a land of remarkable natural beauty, cultural diversity and historical significance is a fast-growing young university of the Koshi Province with a state-of-the-art campus. Within the short span of its existence, the university has made a remarkable contribution to the creation, dissemination and translation of knowledge.",
  "Making a transformative impact on students, faculty, industry and society is the aim of the academic programs under the university. There is an acute need for multidisciplinary approaches to address the global problems and ensure sustainable development.",
  "QUOTE",
  "In our mission to contribute to national development, our University is in the process of developing centres of excellence in different academic arenas. Our endeavor and my personal commitment are to help our students generate innovative ideas, knowledge and skills necessary for the benefit of society.",
  "The COVID-19 outbreak challenged the social, economic and political integrity of the world. Though the scientific community did its best to understand the virus and seek the best ways to mitigate its effects, it has had a long-lasting effect. In the changing context, higher education institutions across the world have moved from physical to virtual modes of teaching, learning, and research.",
  "Meanwhile, rapid progress in information and communication technology has greatly shaped opportunities in higher education. This is a time for educational innovation. The university is a place that knows more about innovation and invention than any other. Continuous advances in digital technologies, social media, and mobile devices are giving learners better access to knowledge and educational content.",
  "More recently, artificial intelligence for teaching and learning, virtual and augmented reality and simulations, and serious games have further widened the opportunities arising from technology-enabled learning. New interactive pedagogies based on e-learning have also proven their effectiveness.",
  "We are at the most challenging time in human history which demands an enormous amount of rapid decision making, planning, and understanding from all. I anticipate support and cooperation from communities both on campus and beyond campus to transform the university in this difficult moment.",
  "Let us all unite as one force to ensure that our university will be promising and continuously move forward to aspire what we have envisioned and achieve our goal. Through our collective efforts and effective implementation, we can make a difference by creating an environment where we enjoy, respect and benefit from our diverse community.",
];

function AboutHasMessage() {
  const reduce = useReducedMotion();

  // One entrance per block; disabled when the user prefers reduced motion.
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
      {/* <Breadcrumbs/> */}
      {/* Quiet background: one soft dot grid, faded at the edges */}
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
              Message from the Vice-Chancellor
            </span>
          </div>
          <h1 className="font-serif text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            A vision for Purbanchal University
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-500">
            Reflections, commitments, and the road ahead from the office of the
            Vice-Chancellor.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-16">
          {/* ---------- Portrait ---------- */}
          <div className="mx-auto w-full max-w-sm lg:sticky lg:top-28 lg:col-span-4">
            <div className="relative">
              {/* Solid amber arch offset behind the photo */}
              <motion.div
                aria-hidden="true"
                initial={reduce ? false : { opacity: 0, x: -16, y: 16 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: EASE }}
                className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-[12rem] rounded-b-3xl bg-heading"
              />

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: EASE }}
                className="relative overflow-hidden rounded-t-[12rem] rounded-b-3xl bg-slate-100 ring-1 ring-slate-200"
              >
                <img
                  src="/assets/img/vice.jpeg"
                  alt="Prof. Dr. Sujan Babu Marahatta, Vice-Chancellor"
                  className="h-[26rem] w-full object-cover object-top sm:h-[30rem]"
                  draggable={false}
                />
              </motion.div>

              {/* Name card overlapping the photo */}
              <motion.div
                {...reveal(0.5)}
                className="relative mx-auto -mt-10 w-[88%] rounded-2xl border border-slate-200 bg-white px-5 py-4 text-center shadow-lg shadow-slate-200/10"
              >
                <p className="text-sm font-semibold text-accent">
                  Vice-Chancellor
                </p>
                <h2 className="mt-1 font-serif text-lg font-bold leading-tight text-slate-900">
                  Prof. Dr. Sujan Babu Marahatta
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  PhD in Tropical Medicine
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800 ring-1 ring-amber-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-3 w-3"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Gothgaun, Morang
                </div>
              </motion.div>
            </div>
          </div>

          {/* ---------- Message ---------- */}
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
              I am honored and greatly privileged to lead Purbanchal University
              and move forward with promising vision, mission, goals,
              objectives and strategies to benefit our community, country and
              globe at large.
            </motion.p>
            
            <div className="my-10 h-px w-full bg-gradient-to-r from-[#252659] via-slate-500 to-transparent" />

            {/* Body */}
            <div className="space-y-6 font-serif text-[1.05rem] leading-[1.9] text-slate-700 sm:text-lg">
              {paragraphs.map((text, i) =>
                text === "QUOTE" ? (
                  <motion.blockquote
                    key="quote"
                    {...reveal()}
                    className=" my-10 border-l-4 border-[#252659] bg-blue-50/50 py-5 pl-6 pr-5 text-xl font-medium italic leading-relaxed text-slate-900 sm:text-2xl"
                  >
                    As Vice-Chancellor, I am deeply committed to attracting a
                    body of faculty and students dedicated to academic
                    excellence, research, innovation and service to society.
                  </motion.blockquote>
                ) : (
                  <motion.p
                    key={i}
                    {...reveal()}
                    className={
                      i === 0
                        ? "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-6xl first-letter:font-bold first-letter:leading-[0.85] first-letter:text-[#252659]"
                        : ""
                    }
                  >
                    {text}
                  </motion.p>
                )
              )}

              <motion.p
                {...reveal()}
                className="text-xl font-semibold italic text-slate-900"
              >
                I expect your support and cooperation to move forward and
                achieve what we have targeted and make our dream come true.
              </motion.p>
            </div>

            {/* ---------- Sign-off ---------- */}
            <motion.div
              {...reveal()}
              className="mt-14 flex flex-col gap-5 border-t border-slate-200 pt-8 sm:flex-row sm:items-center"
            >
              <img
                src="/assets/img/vice.jpeg"
                alt=""
                className="h-14 w-14 flex-shrink-0 rounded-full object-cover object-top ring-2 ring-[#252659]"
              />
              <div className="flex-1">
                <p className="font-serif text-base font-bold text-slate-900">
                  Prof. Sujan Babu Marahatta, PhD
                </p>
                <p className="text-sm font-medium text-[#161634]">
                  Vice-Chancellor
                </p>
                <p className="text-xs text-slate-500">
                  Purbanchal University, Gothgaun, Morang
                </p>
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

export default AboutHasMessage;