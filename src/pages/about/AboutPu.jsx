import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const GATE =
  "https://purbanchaluniversity.edu.np/images/about/6f10d5ff48dc8ba065691da6baf4ec02.jpg";

const TOC = [
  { id: "overview", label: "Who we are", num: "01" },
  { id: "partnerships", label: "Among Nepal’s universities", num: "02" },
  { id: "vision", label: "Vision", num: "03" },
  { id: "objectives", label: "Objectives", num: "04" },
  { id: "campus", label: "The campus", num: "05" },
];

const MOUS = [
  [
    "Jamia Millia Islamia University",
    "India",
    "https://jmi.ac.in/upload/mou/mou_jmi_purbanchal_university_nepal_2017february8.pdf",
  ],
  [
    "Banaras Hindu University",
    "India",
    "https://bhu.ac.in/SiteAttachments/Academic%20Collaboration%20MOU2020314142950600.pdf",
  ],
];

const OBJECTIVES = [
  [
    "Career-oriented education",
    "Run professional and technical institutions, with study, research and teaching across disciplines, that develop the abilities and personalities of students, teachers and scholars.",
  ],
  [
    "A competitive environment",
    "Raise the level of competition in higher education by spreading knowledge and encouraging its efficient, effective use.",
  ],
  [
    "Resources that improve quality",
    "Draw on local, national and international resources to make academic programs better and more responsive to Nepal’s changing socio-economic needs.",
  ],
  [
    "A model institution",
    "Become a model of higher learning by correcting the academic weaknesses of both public and private institutions.",
  ],
];

const FOCUS = [
  "Industry–Technology",
  "Agriculture–Forestry",
  "Environment, Rural & Cultural Subsistence",
  "Sustainable Development",
];

const LAND = [
  {
    key: "forest",
    label: "Productive forest",
    pct: "50%",
    ha: "272.5 ha",
    cells: 32,
    color: "#2f6b3f",
    note: "Conservation and sustainable development",
  },
  {
    key: "farm",
    label: "High-income farming",
    pct: "12.5%",
    ha: "68 ha",
    cells: 8,
    color: "#c39a2b",
    note: "Medicinal herbs and similar crops",
  },
  {
    key: "agro",
    label: "Agro-forestry",
    pct: "12.5%",
    ha: "68 ha",
    cells: 8,
    color: "#8db56a",
    note: "Ecosystem management approach",
  },
  {
    key: "infra",
    label: "Buildings and facilities",
    pct: "25%",
    ha: "136 ha",
    cells: 16,
    color: "#1a1f3c",
    note: "Academic, residential and support",
  },
];
const CELLS = LAND.flatMap((l) => Array.from({ length: l.cells }, () => l.key));

const PHASE_ONE = [
  "Administrative Building",
  "Central Campus",
  "Central Library",
  "Staff quarters, A and B type",
  "Boys’ and girls’ hostels",
  "Continuing Education Centre",
];

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pu-red";
const body = "text-[15px] leading-[1.8] text-body md:text-base";
const h3 = "text-xl font-bold tracking-tight text-heading font-heading";

const EASE = [0.22, 1, 0.36, 1];

const sectionMotion = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.7, ease: EASE },
};

const blockMotion = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, delay, ease: EASE },
});

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const OFFSET = 88; // ~sticky chip nav height + breathing room
  const top = el.getBoundingClientRect().top + window.scrollY - OFFSET;
  window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
  // Update hash without triggering a native jump
  if (window.history?.replaceState) {
    window.history.replaceState(null, "", `#${id}`);
  }
}

function useActive(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((e) => e.isIntersecting);
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [ids]);
  return active;
}

function ChipNav({ active }) {
  const chips = { current: {} };
  const scrollerRef = { current: null };

  useEffect(() => {
    const el = scrollerRef.current;
    const chip = chips.current[active];
    if (!el || !chip) return;
    el.scrollTo({
      left: chip.offsetLeft - el.clientWidth / 2 + chip.offsetWidth / 2,
      behavior: "smooth",
    });
  }, [active]);

  return (
    <div className="sticky top-0 z-40 border-b border-heading/10 bg-white/90 backdrop-blur-md lg:hidden">
      <div
        ref={(el) => (scrollerRef.current = el)}
        className="flex gap-2 overflow-x-auto px-4 py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {TOC.map((t) => {
          const on = active === t.id;
          return (
            <Link
              key={t.id}
              to={`#${t.id}`}
              ref={(el) => (chips.current[t.id] = el)}
              onClick={(e) => {
                e.preventDefault();
                scrollToId(t.id);
              }}
              aria-current={on ? "true" : undefined}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-sm whitespace-nowrap transition-colors duration-200 ${focus} ${
                on
                  ? "bg-pu-dark text-white"
                  : "bg-heading/[0.04] text-body/70 hover:text-heading"
              }`}
            >
              {t.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function SectionHeader({ num, title }) {
  return (
    <motion.div {...blockMotion()} className="mb-10">
      <div className="flex items-center gap-4">
        <span className="text-[11px] font-semibold tracking-[0.22em] text-pu-red tabular-nums">
          {num}
        </span>
        <span className="h-px flex-1 bg-heading/10" />
      </div>
      <h2 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-heading font-heading md:text-[2.25rem]">
        {title}
      </h2>
    </motion.div>
  );
}

function LandGrid({ reduce }) {
  const [hot, setHot] = useState(null);
  const colorOf = (k) => LAND.find((l) => l.key === k).color;

  return (
    <motion.div
      {...sectionMotion}
      className="mt-12 grid items-start gap-10 md:grid-cols-[minmax(0,320px)_1fr] md:gap-14"
    >
      <motion.div
        role="img"
        aria-label="545 hectares split into 50% productive forest, 12.5% high-income farming, 12.5% agro-forestry and 25% infrastructure"
        className="grid aspect-square w-full max-w-[320px] grid-cols-8 gap-1"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ staggerChildren: reduce ? 0 : 0.012 }}
      >
        {CELLS.map((k, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, scale: 0.6 },
              show: { opacity: 1, scale: 1 },
            }}
            style={{ backgroundColor: colorOf(k) }}
            className={`rounded-[2px] transition-opacity duration-200 ${hot && hot !== k ? "!opacity-20" : ""}`}
          />
        ))}
      </motion.div>

      <ul className="divide-y divide-heading/10 border-y border-heading/10">
        {LAND.map((l, i) => (
          <motion.li
            key={l.key}
            {...blockMotion(i * 0.06)}
            tabIndex={0}
            onMouseEnter={() => setHot(l.key)}
            onMouseLeave={() => setHot(null)}
            onFocus={() => setHot(l.key)}
            onBlur={() => setHot(null)}
            className={`flex items-start gap-4 py-4 ${focus}`}
          >
            <span
              aria-hidden
              className="mt-1.5 h-4 w-4 shrink-0 rounded-[3px]"
              style={{ backgroundColor: l.color }}
            />
            <div className="flex-1">
              <p className="font-semibold text-heading">{l.label}</p>
              <p className="text-sm text-body/70">{l.note}</p>
            </div>
            <p className="text-right">
              <span className="block text-xl font-bold tabular-nums text-heading font-heading">
                {l.pct}
              </span>
              <span className="text-xs text-body/60">{l.ha}</span>
            </p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
export default function AboutPu() {
  const reduce = useReducedMotion();
  const active = useActive(TOC.map((t) => t.id));

  const S = reduce
    ? { initial: false, animate: { opacity: 1, y: 0 } }
    : sectionMotion;
  const B = (delay = 0) => (reduce ? { initial: false } : blockMotion(delay));

  return (
    <main className="bg-white">
      <ChipNav active={active} />
      <div className="container-x grid gap-16 py-16 md:py-20 lg:grid-cols-[200px_1fr] lg:gap-20">
        <aside className="hidden lg:block">
          <nav aria-label="On this page" className="sticky top-28">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-body/50">
              On this page
            </p>
            <ul className="mt-5 border-l border-heading/12">
              {TOC.map((t) => (
                <li key={t.id}>
                  <Link
                    to={`#${t.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId(t.id);
                    }}
                    aria-current={active === t.id ? "true" : undefined}
                    className={`-ml-px flex items-center gap-3 border-l-2 py-2 pl-5 text-sm transition-all duration-200 ${focus} ${
                      active === t.id
                        ? "border-pu-red font-semibold text-heading"
                        : "border-transparent text-body/60 hover:border-heading/25 hover:text-heading"
                    }`}
                  >
                    <span
                      className={`text-[10px] tabular-nums ${active === t.id ? "text-pu-red" : "text-body/35"}`}
                    >
                      {t.num}
                    </span>
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="max-w-[46rem] space-y-24 md:space-y-28">
          <motion.section id="overview" className="scroll-mt-28" {...S}>
            <SectionHeader num="01" title="Higher education, closer to home" />

            <motion.p
              {...B(0.05)}
              className="text-xl leading-[1.6] text-heading font-light md:text-[1.375rem]"
            >
              PU was created to decentralise higher education and open it to
              regions of Nepal that had few options.
            </motion.p>

            <motion.figure {...B(0.12)} className="mt-10">
              <div className="overflow-hidden rounded-sm">
                <img
                  src={GATE}
                  alt="The brick entrance gate at Purbanchal University's Gothgaun campus"
                  className="aspect-[16/9] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 flex items-center gap-2 text-xs text-body/55">
                <span aria-hidden className="h-px w-6 bg-pu-red" />
                The entrance gate at the Gothgaun campus, Morang.
              </figcaption>
            </motion.figure>

            <motion.div {...B(0.18)} className={`mt-8 space-y-5 ${body}`}>
              <p>
                For urban and rural families alike, it has become a place to
                earn a degree without leaving the country. Fees are kept
                affordable, and the campus, spread over 545 hectares in rural
                Koshi Province, gives students room to learn and grow.
              </p>
              <p>
                As a fully autonomous public university, PU sets its own
                policies and programs around the needs of the communities it
                serves. It works to preserve knowledge, protect free enquiry,
                and support development that reaches rural communities.
              </p>
            </motion.div>
            <motion.div
              {...B(0.24)}
              className="mt-12 border border-heading/12 bg-[#fafaf7] p-6 md:p-8"
            >
              <h3 className={h3}>MBBS, taught at Koshi Hospital</h3>
              <p className={`mt-3 ${body}`}>
                PU is authorised to run the MBBS program. A three-way agreement
                lets students train at Koshi Hospital in Biratnagar, gaining
                clinical experience alongside their studies.
              </p>
              <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-stretch">
                <ul className="flex-1 space-y-2">
                  {[
                    "Ministry of Health and Population",
                    "Ministry of Education, Science and Technology",
                    "Purbanchal University",
                  ].map((p) => (
                    <li
                      key={p}
                      className="border-l-2 border-pu-red bg-white px-4 py-2.5 text-sm font-medium text-heading"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
                <ArrowRight
                  aria-hidden
                  className="hidden shrink-0 self-center text-pu-red md:block"
                />
                <p className="flex flex-1 items-center bg-pu-dark px-5 py-4 text-sm font-semibold text-white">
                  Koshi Hospital, Biratnagar — teaching hospital for the MBBS
                  program
                </p>
              </div>
            </motion.div>
          </motion.section>

          <motion.section id="partnerships" className="scroll-mt-28" {...S}>
            <SectionHeader
              num="02"
              title="Where PU sits among Nepal’s universities"
            />

            <motion.div {...B(0.05)} className={`space-y-5 ${body}`}>
              <p>
                Nepal has 19 universities: 11 established by the government,
                nine provincial, and autonomous academies such as the B.P.
                Koirala Institute of Health Sciences (BPKIHS).
              </p>
              <p>
                PU is governed by the Purbanchal University Act, so its
                structure differs from that of Tribhuvan University and Nepal
                Sanskrit University. It relies mostly on income it generates
                itself, chiefly student and affiliation fees, with minimal
                government support. Paying for its operations is a constant
                challenge, which is why PU looks to partnerships with
                universities, institutions and research centres, at home and
                abroad.
              </p>
            </motion.div>

            <motion.h3 {...B(0.1)} className={`mt-10 ${h3}`}>
              More than 20 MoUs, including:
            </motion.h3>

            <ul className="mt-4 divide-y divide-heading/10 border-y border-heading/10">
              {MOUS.map(([name, country, to], i) => (
                <motion.li key={name} {...B(0.14 + i * 0.07)}>
                  <Link
                    to={to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-between gap-4 py-5 ${focus}`}
                  >
                    <span>
                      <span className="block font-semibold text-heading transition-colors group-hover:text-pu-red">
                        {name}
                      </span>
                      <span className="mt-0.5 block text-sm text-body/65">
                        {country} · Read the MoU (PDF)
                      </span>
                    </span>
                    <ExternalLink
                      size={18}
                      aria-hidden
                      className="shrink-0 text-body/35 transition-colors group-hover:text-pu-red"
                    />
                    <span className="sr-only">(opens in a new tab)</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.section>
          <motion.section id="vision" className="scroll-mt-28" {...S}>
            <div className="bg-pu-dark p-8 text-white md:p-12">
              <motion.div {...B(0.05)} className="flex items-center gap-4">
                <span className="text-[11px] font-semibold tracking-[0.22em] text-pu-red tabular-nums">
                  03
                </span>
                <span className="h-px flex-1 bg-white/15" />
              </motion.div>

              <motion.h2
                {...B(0.1)}
                className="mt-5 text-3xl font-bold tracking-tight font-heading md:text-[2.25rem]"
              >
                Vision
              </motion.h2>

              <motion.blockquote
                {...B(0.16)}
                className="mt-9 border-l-2 border-pu-red pl-6 text-xl font-semibold leading-[1.5] font-heading md:text-2xl"
              >
                “To develop this university as the model in fulfilling the
                national objectives of education.”
              </motion.blockquote>

              <motion.div
                {...B(0.22)}
                className="mt-8 space-y-5 text-[15px] leading-[1.8] text-white/80 md:text-base"
              >
                <p>
                  The aim is to help with Nepal’s pressing problems: falling
                  productivity in industry and agriculture, population growth
                  and unemployment, unsustainable development, the loss of
                  natural resources, and environmental decline.
                </p>
                <p>
                  Although a public university, PU sees itself as a bridge
                  between public and private institutions, offering affordable,
                  worthwhile education while staying self-sustaining and well
                  governed. Nearly free public universities on one side and very
                  high private fees on the other have opened gaps in the system.
                  PU’s central challenge is to close them.
                </p>
              </motion.div>

              <motion.h3
                {...B(0.28)}
                className="mt-10 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55"
              >
                Areas of academic excellence
              </motion.h3>

              <motion.ul
                {...B(0.32)}
                className="mt-4 grid gap-px overflow-hidden bg-white/15 sm:grid-cols-2"
              >
                {FOCUS.map((f) => (
                  <li
                    key={f}
                    className="bg-pu-dark px-5 py-4 text-sm font-medium"
                  >
                    {f}
                  </li>
                ))}
              </motion.ul>
            </div>
          </motion.section>

          <motion.section id="objectives" className="scroll-mt-28" {...S}>
            <SectionHeader num="04" title="Objectives" />

            <dl className="divide-y divide-heading/10 border-y border-heading/10">
              {OBJECTIVES.map(([t, d], i) => (
                <motion.div
                  key={t}
                  {...B(i * 0.08)}
                  className="grid gap-3 py-6 md:grid-cols-[14rem_1fr] md:gap-10"
                >
                  <dt className="text-lg font-bold leading-snug text-heading font-heading">
                    {t}
                  </dt>
                  <dd className={body}>{d}</dd>
                </motion.div>
              ))}
            </dl>
          </motion.section>

          <motion.section id="campus" className="scroll-mt-28" {...S}>
            <SectionHeader num="05" title="A campus that is part forest" />

            <motion.div {...B(0.05)} className={`space-y-5 ${body}`}>
              <p>
                The Government of Nepal gave PU 545 hectares of degraded forest
                land in Gothgaun, Morang, about 30 kilometres from Biratnagar
                and close to the East–West Highway. Under the Master Plan, PU
                has built a central academic building for the medical college, a
                central library, and a building for the proposed Peace Research
                Centre.
              </p>
              <p>
                Because the land was degraded, most of it is set aside to
                recover and earn. Each square below is about 8.5 hectares. Hover
                a row to find it on the grid.
              </p>
            </motion.div>

            <LandGrid reduce={reduce} />

            <motion.h3 {...B(0.05)} className={`mt-16 ${h3}`}>
              Building it in two phases
            </motion.h3>
            <motion.p {...B(0.1)} className={`mt-3 ${body}`}>
              PU is developing its facilities with limited resources, in two
              planned phases.
            </motion.p>

            <ol className="mt-8 space-y-10 border-l border-heading/15 pl-8">
              <motion.li {...B(0.15)} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[37px] top-1 h-3.5 w-3.5 rounded-full border-[3px] border-white bg-pu-red"
                />
                <p className="text-xs font-semibold uppercase tracking-wider text-pu-red">
                  1999 – 2004
                </p>
                <h4 className="mt-1 text-lg font-bold text-heading font-heading">
                  Phase I
                </h4>
                <p className={`mt-2 ${body}`}>
                  About Rs. 240 million was invested in construction at
                  Gothgaun. Built in this phase:
                </p>
                <ul className="mt-4 grid gap-x-8 gap-y-2 text-[15px] text-body sm:grid-cols-2">
                  {PHASE_ONE.map((f) => (
                    <li key={f} className="border-b border-heading/10 pb-2">
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.li>

              <motion.li {...B(0.2)} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[37px] top-1 h-3.5 w-3.5 rounded-full border-[3px] border-white bg-heading/30"
                />
                <p className="text-xs font-semibold uppercase tracking-wider text-body/55">
                  2005 – 2009
                </p>
                <h4 className="mt-1 text-lg font-bold text-heading font-heading">
                  Phase II
                </h4>
                <p className={`mt-2 ${body}`}>
                  The second stage of the overall construction plan. See{" "}
                  <Link
                    to="https://purbanchaluniversity.edu.np/infrastructure-plans"
                    className={`font-semibold text-pu-red underline decoration-pu-red/30 underline-offset-4 transition-colors hover:decoration-pu-red ${focus}`}
                  >
                    Infrastructure plans
                  </Link>{" "}
                  for current work.
                </p>
              </motion.li>
            </ol>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
