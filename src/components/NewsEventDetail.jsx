import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import {
  Calendar,
  ArrowLeft,
  ArrowUpRight,
  Move,
  Clock,
  Share2,
  Maximize2,
  X,
  ChevronUp,
} from "lucide-react";
import news from "../data/newsData";

const EASE = [0.22, 1, 0.36, 1];

/* =============================== PROGRESS =============================== */
function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-puRed"
    />
  );
}

/* ============================== BACK TO TOP ============================== */
function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0 }}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "auto"
            : "smooth",
        })
      }
      aria-label="Back to top"
      className="fixed bottom-4 right-4 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-puDark text-white shadow-[0_12px_30px_-10px_rgba(0,0,0,0.5)] transition-all duration-200 hover:-translate-y-1 hover:bg-puRed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-puRed sm:bottom-6 sm:right-6 sm:h-11 sm:w-11 md:bottom-8 md:right-8"
      style={{
        marginBottom: "env(safe-area-inset-bottom)",
        marginRight: "env(safe-area-inset-right)",
      }}
    >
      <ChevronUp size={18} aria-hidden />
    </motion.button>
  );
}

/* ============================ IMAGE LIGHTBOX ============================ */
function ImageLightbox({ src, alt, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-2 backdrop-blur-sm sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Full image viewer"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:right-4 sm:top-4 md:right-6 md:top-6"
        style={{ marginTop: "env(safe-area-inset-top)" }}
      >
        <X size={18} aria-hidden />
      </button>

      <div
        className="max-h-[88vh] max-w-full overflow-auto overscroll-contain rounded-lg sm:max-h-[90vh] sm:max-w-[92vw] sm:rounded-xl [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/30"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="block h-auto w-auto max-w-none cursor-grab select-none active:cursor-grabbing"
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/15 bg-black/60 px-3 py-1.5 text-[10px] font-medium text-white backdrop-blur-sm sm:bottom-6 sm:text-[11px]"
        style={{ marginBottom: "env(safe-area-inset-bottom)" }}
      >
        <Move size={12} />
        <span className="hidden sm:inline">
          Drag or scroll to explore · ESC to close
        </span>
        <span className="sm:hidden">Drag to explore · Tap X to close</span>
      </div>
    </motion.div>
  );
}

/* ============================ PANNABLE IMAGE ============================ */
function PannableImage({ src, alt }) {
  const [lightbox, setLightbox] = useState(false);

  return (
    <>
      <div className="relative">
        {/* Corner accents — hidden on very small screens */}
        <span
          aria-hidden
          className="pointer-events-none absolute -left-2 -top-2 hidden h-12 w-12 rounded-tl-2xl border-l-2 border-t-2 border-puRed/40 sm:block md:-left-3 md:-top-3 md:h-16 md:w-16"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-2 -right-2 hidden h-12 w-12 rounded-br-2xl border-b-2 border-r-2 border-puRed/40 sm:block md:-bottom-3 md:-right-3 md:h-16 md:w-16"
        />

        <div className="relative overflow-hidden rounded-xl border border-heading/10 bg-[#fafaf7] shadow-[0_20px_50px_-40px_rgba(0,0,0,0.4)] sm:rounded-2xl md:shadow-[0_24px_60px_-40px_rgba(0,0,0,0.4)]">
          {/* Scrollable viewport — responsive heights */}
          <div className="h-[280px] w-full overflow-auto overscroll-contain xs:h-[340px] sm:h-[420px] md:h-[500px] lg:h-[580px] xl:h-[620px] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-heading/25 [&::-webkit-scrollbar-track]:bg-heading/5">
            <img
              src={src}
              alt={alt}
              draggable={false}
              className="min-h-full min-w-full max-w-none cursor-grab select-none object-cover active:cursor-grabbing"
              style={{ width: "auto", height: "auto" }}
            />
          </div>

          {/* Bottom scrim */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/55 to-transparent sm:h-20 md:h-24"
          />

          {/* Drag hint */}
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-2.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/20 bg-black/55 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm sm:bottom-3 sm:px-3 sm:py-1.5 md:bottom-4 md:text-[11px]"
          >
            <Move size={11} aria-hidden />
            <span className="hidden sm:inline">
              Drag or scroll to view full image
            </span>
            <span className="sm:hidden">Drag to explore</span>
          </div>

          {/* Expand button */}
          <button
            type="button"
            onClick={() => setLightbox(true)}
            aria-label="Open full image"
            className="absolute right-2.5 top-2.5 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/40 text-white backdrop-blur-md transition-all duration-200 hover:border-puRed hover:bg-puRed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-3 sm:top-3 md:right-4 md:top-4"
          >
            <Maximize2 size={15} aria-hidden />
          </button>
        </div>
      </div>

      {lightbox && (
        <ImageLightbox src={src} alt={alt} onClose={() => setLightbox(false)} />
      )}
    </>
  );
}

/* ================================ PAGE ================================ */
export default function NewsEventDetail() {
  const { slug } = useParams();
  const item = news.find((n) => n.slug === slug);
  const reduce = useReducedMotion();
  const articleRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const fade = (delay = 0, y = 14) =>
    reduce
      ? { initial: false }
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: EASE },
        };

  /* ----------------------------- NOT FOUND ----------------------------- */
  if (!item) {
    return (
      <section className="section">
        <div className="container-x mx-auto max-w-xl px-4 py-20 text-center md:py-28">
          <motion.div {...fade()}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-puRed">
              404
            </p>
            <h1 className="mt-4 text-2xl font-bold tracking-tight text-puDark font-heading md:text-3xl">
              We couldn’t find that story
            </h1>
            <p className="mt-3 text-sm text-body/70">
              The link may be broken, or the item has been moved.
            </p>
            <Link
              to="/news-and-event"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-puRed transition-colors hover:text-puDark"
            >
              <ArrowLeft
                size={16}
                aria-hidden
                className="transition-transform duration-200 group-hover:-translate-x-0.5"
              />
              Back to news & events
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

  const related = news.filter((n) => n.slug !== item.slug).slice(0, 3);
  const words = String(item.content || "").trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({ title: item.title, url }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      });
    }
  };

  return (
    <section className="section overflow-x-clip">
      <ReadingProgress />
      <BackToTop />

      <div className="container-x px-4 sm:px-6 lg:px-8">
        {/* --------------------------- BACK LINK --------------------------- */}
        <motion.div {...fade(0, 10)}>
          <Link
            to="/news-and-event"
            className="group inline-flex items-center gap-2 text-sm font-medium text-body/60 transition-colors hover:text-puRed"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-heading/12 transition-all duration-200 group-hover:-translate-x-0.5 group-hover:border-puRed/40 group-hover:text-puRed">
              <ArrowLeft size={14} aria-hidden />
            </span>
            <span className="truncate">Back to news &amp; events</span>
          </Link>
        </motion.div>

        {/* ---------------------------- HEADER ---------------------------- */}
        <motion.header
          {...fade(0.06)}
          className="mt-6 max-w-3xl sm:mt-8 md:mt-10"
        >
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-puRed">
              {item.category || "News & Events"}
            </span>
            <span aria-hidden className="h-px flex-1 bg-heading/12" />
          </div>

          <h1 className="mt-4 break-words text-[1.5rem] font-bold leading-[1.25] tracking-tight text-puDark font-heading xs:text-[1.65rem] sm:text-3xl sm:leading-[1.2] md:text-[2.5rem] lg:text-[3rem] [overflow-wrap:anywhere]">
            {item.title}
          </h1>

          {/* Meta row */}
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-body/60 sm:mt-5 sm:gap-x-5 sm:text-sm md:mt-6">
            <span className="inline-flex items-center gap-1.5 sm:gap-2">
              <Calendar
                size={14}
                className="shrink-0 text-puRed"
                aria-hidden
              />
              <time>{item.date}</time>
            </span>
            <span
              aria-hidden
              className="hidden h-3 w-px bg-heading/15 sm:block"
            />
            <span className="inline-flex items-center gap-1.5 sm:gap-2">
              <Clock size={14} className="shrink-0 text-puRed" aria-hidden />
              {minutes} min read
            </span>

            <button
              type="button"
              onClick={handleShare}
              className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-heading/15 px-3 py-1 text-xs font-medium text-heading transition-all duration-200 hover:border-puRed hover:text-puRed lg:hidden"
            >
              <Share2 size={12} aria-hidden />
              {copied ? "Copied" : "Share"}
            </button>
          </div>
        </motion.header>

        {/* --------------------------- SPLIT LAYOUT --------------------------- */}
        <motion.div
          {...fade(0.12)}
          className="mt-8 grid gap-8 sm:mt-10 md:mt-12 md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14 xl:gap-16"
        >
          {/* ---------- Article ---------- */}
          <article
            ref={articleRef}
            className="mx-auto w-full min-w-0 max-w-[42rem] lg:mx-0"
          >
            <span
              aria-hidden
              className="mb-5 block h-1 w-12 rounded-full bg-puRed sm:mb-6"
            />

            <div className="space-y-4 text-[15px] leading-[1.85] text-body/90 sm:space-y-5 sm:text-[16px] sm:leading-[1.9] md:text-[17px] md:leading-[1.95]">
              {String(item.content)
                .split("\n")
                .filter(Boolean)
                .map((para, i) => (
                  <p
                    key={i}
                    className={[
                      // Critical: ensure long words / Devanagari clusters wrap
                      "break-words [overflow-wrap:anywhere] [word-break:break-word]",
                      i === 0
                        ? "text-[16px] font-medium leading-[1.75] text-heading sm:text-[17px] md:text-lg lg:text-xl"
                        : "",
                    ].join(" ")}
                  >
                    {para}
                  </p>
                ))}
            </div>

            {/* Desktop share row */}
            <div className="mt-10 hidden items-center gap-4 border-t border-heading/10 pt-6 lg:flex">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-body/45">
                Share
              </span>
              <span aria-hidden className="h-px w-8 bg-heading/15" />
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 rounded-full border border-heading/15 px-3.5 py-1.5 text-xs font-medium text-heading transition-all duration-200 hover:-translate-y-0.5 hover:border-puRed hover:text-puRed"
              >
                {copied ? "Link copied" : "Copy link"}
                <ArrowUpRight size={12} aria-hidden />
              </button>
            </div>
          </article>

          {/* ---------- Image ---------- */}
          <figure className="mx-auto w-full min-w-0 max-w-[42rem] lg:mx-0 lg:sticky lg:top-24 lg:max-w-none lg:self-start">
            <PannableImage
              src={item.img}
              alt={item.caption || "Purbanchal University, Gothgaun, Morang."}
            />

            <figcaption className="mt-3 flex items-start gap-3 text-[11px] text-body/55 sm:text-xs md:mt-4">
              <span aria-hidden className="mt-2 h-px w-6 shrink-0 bg-puRed" />
              <span className="break-words [overflow-wrap:anywhere]">
                {item.caption || "Purbanchal University, Gothgaun, Morang."}
              </span>
            </figcaption>
          </figure>
        </motion.div>
      </div>

      {/* --------------------------- RELATED --------------------------- */}
      {related.length > 0 && (
        <div className="container-x mt-16 px-4 sm:mt-20 sm:px-6 md:mt-24 lg:mt-28 lg:px-8">
          <motion.div {...fade(0.2)} className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-puRed">
                Keep reading
              </span>
              <span aria-hidden className="h-px flex-1 bg-heading/12" />
            </div>
            <h2 className="mt-3 text-lg font-bold tracking-tight text-puDark font-heading xs:text-xl sm:mt-4 sm:text-2xl md:text-3xl">
              More stories from PU
            </h2>
          </motion.div>

          <div className="mt-6 grid gap-5 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:mt-10 lg:grid-cols-3">
            {related.map((r, i) => (
              <motion.div
                key={r.slug}
                {...fade(0.26 + i * 0.06, 20)}
                className="group"
              >
                <Link
                  to={`/news-and-event/${r.slug}`}
                  className="flex h-full flex-col overflow-hidden rounded-2xl border border-heading/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-puRed/30 hover:shadow-[0_24px_50px_-30px_rgba(0,0,0,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-puRed"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-heading/5">
                    <img
                      src={r.img}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <span className="text-[11px] font-medium text-body/55 sm:text-xs">
                      {r.date}
                    </span>
                    <h3 className="mt-1.5 line-clamp-2 break-words text-[15px] font-semibold leading-snug text-heading transition-colors group-hover:text-puRed sm:mt-2 sm:text-base [overflow-wrap:anywhere]">
                      {r.title}
                    </h3>

                    <span className="mt-auto flex items-center gap-1.5 pt-4 text-xs font-semibold text-puRed sm:pt-5">
                      Read story
                      <ArrowUpRight
                        size={14}
                        aria-hidden
                        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}