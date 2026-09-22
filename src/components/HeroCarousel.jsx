import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EASE = [0.22, 1, 0.36, 1];

const slides = [
  '/assets/img/carousel-1.jpg',
  '/assets/img/carousel-2.jpg',
];

export default function HeroCarousel() {
  const [i, setI] = useState(0);
  const [mounted, setMounted] = useState(false);
  const reduce = useReducedMotion();

  const next = () => setI((p) => (p + 1) % slides.length);
  const prev = () => setI((p) => (p - 1 + slides.length) % slides.length);

  /* Trigger mount animations once on page load */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* Autoplay */
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [reduce, i]);

  return (
    <div className="relative h-[500px] w-full overflow-hidden bg-puDark md:h-[calc(100vh-160px)]">
      {/* ===================== SLIDES ===================== */}
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="absolute inset-0"
        >
          <img
            src={slides[i]}
            alt=""
            className="h-full w-full object-cover"
          />

          {/* Layered gradient for depth */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/15"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"
          />
        </motion.div>
      </AnimatePresence>

      {/* ===================== CONTENT ===================== */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container-x w-full">
          <div className="max-w-3xl text-white">
            {/* Eyebrow — slides in from left */}
            <motion.h5
              key={`eyebrow-${i}-${mounted}`}
              initial={reduce ? false : { opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
              className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-white/90 md:text-base"
            >
              <motion.span
                aria-hidden
                initial={reduce ? false : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
                className="h-px w-10 origin-left bg-puRed"
              />
              Central
            </motion.h5>

            {/* Title — rises from below with a soft blur */}
            <motion.h1
              key={`title-${i}-${mounted}`}
              initial={reduce ? false : { opacity: 0, y: 40, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
              className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight font-heading md:text-6xl"
            >
              Purbanchal University
            </motion.h1>

            {/* Subtitle — fades up */}
            <motion.p
              key={`text-${i}-${mounted}`}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
              className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-white/85"
            >
              Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
              Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
            </motion.p>

            {/* Buttons — fade up last */}
            <motion.div
              key={`cta-${i}-${mounted}`}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.72, ease: EASE }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                to="#"
                className="group inline-flex items-center gap-2 rounded-full bg-puRed px-6 py-3 text-base font-semibold text-white shadow-[0_12px_30px_-12px_rgba(237,28,36,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-puRed/90"
              >
                Explore Programs &amp; Enroll
                <ArrowRight
                  size={16}
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/20"
              >
                Know Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ===================== ARROWS ===================== */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="group absolute right-[10%] top-1/2 hidden h-12 w-12 -translate-y-[calc(50%+38px)] items-center justify-center rounded-full border border-white/40 text-white backdrop-blur-md transition-all duration-300 hover:border-puRed hover:bg-puRed md:flex"
      >
        <ChevronLeft
          size={20}
          aria-hidden
          className="transition-transform duration-300 group-hover:-translate-x-0.5"
        />
      </button>

      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="group absolute right-[10%] top-1/2 hidden h-12 w-12 -translate-y-[calc(50%-38px)] items-center justify-center rounded-full border border-white/40 text-white backdrop-blur-md transition-all duration-300 hover:border-puRed hover:bg-puRed md:flex"
      >
        <ChevronRight
          size={20}
          aria-hidden
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </button>

      {/* ===================== PROGRESS DOTS ===================== */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {slides.map((_, idx) => {
          const active = idx === i;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setI(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={active ? 'true' : undefined}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                active
                  ? 'w-8 bg-puRed'
                  : 'w-3 bg-white/40 hover:bg-white/70'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}