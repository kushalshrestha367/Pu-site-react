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
      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-puDark text-white shadow-[0_12px_30px_-10px_rgba(0,0,0,0.5)] transition-all duration-200 hover:-translate-y-1 hover:bg-puRed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-puRed md:bottom-8 md:right-8"
    >
      <ChevronUp size={18} aria-hidden />
    </motion.button>
  );
}

function ImageLightbox({ src, alt, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Full image viewer"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 md:right-6 md:top-6"
      >
        <X size={18} aria-hidden />
      </button>

      <div
        className="max-h-[90vh] max-w-[92vw] overflow-auto overscroll-contain rounded-xl [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/30"
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
        className="pointer-events-none absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/15 bg-black/60 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-sm"
      >
        <Move size={12} />
        Drag or scroll to explore · ESC to close
      </div>
    </motion.div>
  );
}

function PannableImage({ src, alt }) {
  const [lightbox, setLightbox] = useState(false);

  return (
    <>
      <div className="relative">
        <span
          aria-hidden
          className="pointer-events-none absolute -left-2 -top-2 hidden h-12 w-12 rounded-tl-2xl border-l-2 border-t-2 border-puRed/40 sm:block md:-left-3 md:-top-3 md:h-16 md:w-16"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-2 -right-2 hidden h-12 w-12 rounded-br-2xl border-b-2 border-r-2 border-puRed/40 sm:block md:-bottom-3 md:-right-3 md:h-16 md:w-16"
        />

        <div className="relative overflow-hidden rounded-xl border border-heading/10 bg-[#fafaf7] shadow-[0_20px_50px_-40px_rgba(0,0,0,0.4)] sm:rounded-2xl md:shadow-[0_24px_60px_-40px_rgba(0,0,0,0.4)]">
          <div className="h-[320px] w-full overflow-auto overscroll-contain sm:h-[420px] md:h-[500px] lg:h-[580px] xl:h-[620px] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-heading/25 [&::-webkit-scrollbar-track]:bg-heading/5">
            <img
              src={src}
              alt={alt}
              draggable={false}
              className="min-h-full min-w-full max-w-none cursor-grab select-none object-cover active:cursor-grabbing"
              style={{ width: "auto", height: "auto" }}
            />
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/55 to-transparent md:h-24"
          />

          <div
            aria-hidden
            className="pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/20 bg-black/55 px-3 py-1.5 text-[10px] font-medium text-white backdrop-blur-sm md:bottom-4 md:text-[11px]"
          >
            <Move size={11} aria-hidden />
            <span className="hidden sm:inline">
              Drag or scroll to view full image
            </span>
            <span className="sm:hidden">Drag to explore</span>
          </div>

          <button
            type="button"
            onClick={() => setLightbox(true)}
            aria-label="Open full image"
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/40 text-white backdrop-blur-md transition-all duration-200 hover:bg-puRed hover:border-puRed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:right-4 md:top-4"
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
  if (!item) {
    return (
      <section className="section">
        <div className="container-x max-w-xl py-20 text-center md:py-28">
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
  const words = String(item.content || "")
    .trim()
    .split(/\s+/).length;
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
    <section className="section">
      <ReadingProgress />
      <BackToTop />

      <div className="container-x">
        <motion.div {...fade(0, 10)}>
          <Link
            to="/news-and-event"
            className="group inline-flex items-center gap-2 text-sm font-medium text-body/60 transition-colors hover:text-puRed"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-heading/12 transition-all duration-200 group-hover:-translate-x-0.5 group-hover:border-puRed/40 group-hover:text-puRed">
              <ArrowLeft size={14} aria-hidden />
            </span>
            Back to news & events
          </Link>
        </motion.div>

        <motion.header {...fade(0.06)} className="mt-8 max-w-3xl md:mt-10">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-puRed">
              {item.category || "News & Events"}
            </span>
            <span aria-hidden className="h-px flex-1 bg-heading/12" />
          </div>

          <h1 className="mt-5 text-[1.75rem] font-bold leading-[1.15] tracking-tight text-puDark font-heading sm:text-3xl md:text-[2.75rem] lg:text-[3rem]">
            {item.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-body/60 md:mt-6">
            <span className="inline-flex items-center gap-2">
              <Calendar size={14} className="text-puRed" aria-hidden />
              <time>{item.date}</time>
            </span>
            <span
              aria-hidden
              className="hidden h-3 w-px bg-heading/15 sm:block"
            />
            <span className="inline-flex items-center gap-2">
              <Clock size={14} className="text-puRed" aria-hidden />
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
        <motion.div
          {...fade(0.12)}
          className="mt-10 grid gap-10 md:mt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14 xl:gap-16"
        >
          <article
            ref={articleRef}
            className="mx-auto w-full max-w-[42rem] lg:mx-0"
          >
            <span
              aria-hidden
              className="mb-6 block h-1 w-12 rounded-full bg-puRed"
            />

            <div className="space-y-5 text-[15.5px] leading-[1.85] text-body/90 sm:space-y-6 sm:text-[16px] sm:leading-[1.9] md:text-[17px]">
              {String(item.content)
                .split("\n")
                .filter(Boolean)
                .map((para, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "text-[17px] font-medium leading-[1.7] text-heading sm:text-lg md:text-xl md:leading-[1.7]"
                        : ""
                    }
                  >
                    {para}
                  </p>
                ))}
            </div>
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

          <figure className="mx-auto w-full max-w-[42rem] lg:mx-0 lg:sticky lg:top-24 lg:max-w-none lg:self-start">
            <PannableImage
              src={item.img}
              alt={item.caption || "Purbanchal University, Gothgaun, Morang."}
            />

            <figcaption className="mt-3 flex items-start gap-3 text-xs text-body/55 md:mt-4">
              <span aria-hidden className="mt-2 h-px w-6 shrink-0 bg-puRed" />
              <span>
                {item.caption || "Purbanchal University, Gothgaun, Morang."}
              </span>
            </figcaption>
          </figure>
        </motion.div>
      </div>

      {related.length > 0 && (
        <div className="container-x mt-20 md:mt-24 lg:mt-28">
          <motion.div {...fade(0.2)} className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-puRed">
                Keep reading
              </span>
              <span aria-hidden className="h-px flex-1 bg-heading/12" />
            </div>
            <h2 className="mt-4 text-xl font-bold tracking-tight text-puDark font-heading sm:text-2xl md:text-3xl">
              More stories from PU
            </h2>
          </motion.div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-10 lg:grid-cols-3">
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

                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-xs font-medium text-body/55">
                      {r.date}
                    </span>
                    <h3 className="mt-2 line-clamp-2 font-semibold leading-snug text-heading transition-colors group-hover:text-puRed">
                      {r.title}
                    </h3>

                    <span className="mt-auto flex items-center gap-1.5 pt-5 text-xs font-semibold text-puRed">
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
