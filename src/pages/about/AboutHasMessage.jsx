import React from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

const lead =
  "I am honored and greatly privileged to lead Purbanchal University and move forward with promising vision, mission, goals, objectives and strategies to benefit our community, country and globe at large.";

const quote =
  "As Vice-Chancellor, I am deeply committed to attracting a body of faculty and students dedicated to academic excellence, research, innovation and service to society.";

const paragraphs = [
  "Established in 1993, the University provides high-quality education via academics, research and services to the society. The University, nestled in Eastern Nepal, a land of remarkable natural beauty, cultural diversity and historical significance is a fast-growing young university of the Koshi Province with a state-of-the-art campus. Within the short span of its existence, the university has made a remarkable contribution to the creation, dissemination and translation of knowledge.",

  "Making a transformative impact on students, faculty, industry and society is the aim of the academic programs under the university. There is an acute need for multidisciplinary approaches to address the global problems and ensure sustainable development. The university is committed to generating knowledge and solutions for society, innovating products, and integrating humanistic values, attitudes and behaviors in our graduates, guided by our indigenous knowledge, cultures, histories, and capacity for cooperation.",

  "QUOTE",

  "In our mission to contribute to national development, our University is in the process of developing centres of excellence in different academic arenas. Our endeavor and my personal commitment are to help our students generate innovative ideas, knowledge and skills necessary for the benefit of society.",

  "The COVID-19 outbreak challenged the social, economic and political integrity of the world. Though the scientific community did its best to understand the virus and seek the best ways to mitigate its effects, it has had a long-lasting effect. In the changing context, higher education institutions across the world have moved from physical to virtual modes of teaching, learning, and research. Universities and faculties have redesigned both course content and delivery methods.",

  "Meanwhile, rapid progress in information and communication technology has greatly shaped opportunities in higher education. This is a time for educational innovation. The university is a place that knows more about innovation and invention than any other. Continuous advances in digital technologies, social media, and mobile devices are giving learners better access to knowledge and educational content. More recently, artificial intelligence for teaching and learning, virtual and augmented reality and simulations, and serious games have further widened the opportunities arising from technology-enabled learning. New interactive pedagogies based on e-learning have also proven their effectiveness. Our academics and colleagues continue to support our students by working and delivering instruction via online mode and transforming the teaching and learning methodology using recent advances in information technology.",

  "We are at the most challenging time in human history which demands an enormous amount of rapid decision making, planning, and understanding from all. I anticipate support and cooperation from communities both on campus and beyond campus to transform the university in this difficult moment. Let us all unite as one force to ensure that our university will be promising and continuously move forward to aspire what we have envisioned and achieve our goal.",

  "A constructive, open and informed dialogue across the university community will be critical to offering appropriate solutions to address the current challenges. Through our collective efforts and effective implementation, we can make a difference by creating an environment where we enjoy, respect and benefit from our diverse community.",

  "I expect your support and cooperation to move forward and achieve what we have targeted and make our dream come true.",
];

const NAVY = "#252659";
const EASE = [0.22, 1, 0.36, 1];

const justify = {
  hyphens: "auto",
  WebkitHyphens: "auto",
  textWrap: "pretty",
};

export default function AboutHasMessage() {
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
      className="relative w-full bg-white py-12 selection:bg-[#252659] selection:text-white sm:py-16 lg:py-8"
    >
      {!reduce && (
        <motion.div
          aria-hidden
          style={{ scaleX: progress, backgroundColor: NAVY }}
          className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left"
        />
      )}
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
              Message from the Vice-Chancellor
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
          <figure className="relative isolate mx-auto mb-10 w-full max-w-[280px] md:float-left md:mb-6 md:mr-10 md:w-[260px] lg:mr-10 lg:w-[300px]">
            <motion.div
              aria-hidden
              initial={reduce ? false : { opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: EASE }}
              className="absolute -inset-4 -z-10"
            >
              <motion.div
                animate={reduce ? {} : { opacity: [0.3, 0.55, 0.3] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-full rounded-[24px] blur-xl"
                style={{
                  background: `radial-gradient(circle at 30% 20%, ${NAVY}40, transparent 70%)`,
                }}
              />
            </motion.div>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
              className="relative overflow-hidden rounded-2xl bg-white shadow-[0_20px_40px_-20px_rgba(37,38,89,0.3)] ring-1 ring-accent/10"
            >
              <div className="p-2.5">
                <div className="overflow-hidden rounded-xl">
                  <motion.img
                    src="/assets/img/vice.jpeg"
                    alt="Prof. Dr. Sujan Babu Marahatta, Vice-Chancellor"
                    draggable={false}
                    initial={reduce ? false : { scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.4, delay: 0.2, ease: EASE }}
                    className="aspect-[4/5] w-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="px-5 pb-5 pt-1 text-center md:text-left">
                <motion.div
                  initial={reduce ? false : { scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.9, ease: EASE }}
                  className="mx-auto mb-3 h-[2px] w-10 origin-left md:mx-0"
                  // style={{ backgroundColor: NAVY }}
                />
                <p
                  className="font-serif text-[1.05rem] font-medium leading-["
                  style={{ color: NAVY }}
                >
                  Prof. Dr. Sujan Babu Marahatta
                </p>
                <p className="mt-0.5 text-sm text-slate-600 leading-[1.6rem]">Vice-Chancellor</p>
                <p className="text-xs text-slate-500">
                  PhD in Tropical Medicine
                </p>
              </div>
            </motion.div>
          </figure>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
            style={{ ...justify, color: NAVY }}
            className="text-justify font-serif text-xl font-medium leading-[1.5] sm:text-2xl lg:text-[1.50rem]"
          >
            {lead}
          </motion.p>

          <motion.div
            initial={reduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
            className="my-8 flow-root h-px origin-left"
            style={{
              background: `linear-gradient(to right, ${NAVY}50, ${NAVY}10, transparent)`,
            }}
          />
          <div className="space-y-6 font-serif text-[1.05rem] leading-[1.9] text-slate-700 sm:space-y-7 sm:text-lg sm:leading-[2]">
            {paragraphs.map((text, i) =>
              text === "QUOTE" ? (
                <motion.blockquote
                  key="quote"
                  {...onScroll}
                  className="relative flow-root rounded-r-2xl py-6 pl-6 pr-5 sm:py-8 sm:pl-9 sm:pr-7"
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
                    “
                  </span>

                  <p
                    className="relative text-lg font-medium italic leading-relaxed sm:text-xl lg:text-[1.35rem]"
                    style={{ color: NAVY }}
                  >
                    {quote}
                  </p>
                </motion.blockquote>
              ) : (
                <motion.p
                  key={i}
                  {...onScroll}
                  style={justify}
                  className="text-justify"
                >
                  {text}
                </motion.p>
              ),
            )}
          </div>
          <motion.div {...onScroll} className="clear-both mt-5 sm:mt-5">
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
            <p className="font-serif text-lg font-bold" style={{ color: NAVY }}>
              Prof. Dr. Sujan Babu Marahatta
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Vice-Chancellor, Purbanchal University
            </p>
            <p className="text-sm text-slate-500">Gothgaun, Morang, Nepal</p>
          </motion.div>
        </article>
      </div>
    </section>
  );
}
