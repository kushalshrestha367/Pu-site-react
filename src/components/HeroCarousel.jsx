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
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(next, 6000); 
    return () => clearInterval(t);
  }, [reduce, i]);

  return (
    <div className="relative flex min-h-[500px] w-full items-center overflow-hidden bg-puDark sm:min-h-[600px] md:h-[calc(100vh-160px)] md:min-h-0">
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="absolute inset-0"
        >
          <img
            src={slides[i]}
            alt={`Slide ${i + 1}`}
            className="h-full w-full object-cover"
          />

          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/10"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 w-full py-16 md:py-0">
        <div className="container-x w-full px-4 sm:px-6">
          <div className="max-w-3xl text-white">
            <motion.h5
              key={`eyebrow-${i}-${mounted}`}
              initial={reduce ? false : { opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
              className="text-xs font-semibold uppercase tracking-[0.28em] text-white/90 sm:text-sm md:text-base"
            >
              Central
            </motion.h5>

            {/* Title */}
            <motion.h1
              key={`title-${i}-${mounted}`}
              initial={reduce ? false : { opacity: 0, y: 40, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
              className="mt-4 text-2xl font-bold leading-[1.1] tracking-tight font-heading sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Purbanchal University
            </motion.h1>

            <motion.p
              key={`text-${i}-${mounted}`}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
              className="mt-4 max-w-xl text-sm font-medium leading-relaxed text-white/85 sm:mt-5 sm:text-base md:text-lg"
            >
              Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
              Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
            </motion.p>
            <motion.div
              key={`cta-${i}-${mounted}`}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.72, ease: EASE }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <Link
                to="#"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white  transition-all duration-300 hover:-translate-y-0.5 hover:bg-puRed/90 sm:w-auto sm:text-base"
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
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/20 sm:w-auto sm:text-base"
              >
                Know Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-4 sm:right-6 sm:flex lg:right-12">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white backdrop-blur-md transition-all duration-300 hover:border-puRed hover:bg-puRed sm:h-12 sm:w-12"
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
          className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white backdrop-blur-md transition-all duration-300 hover:border-puRed hover:bg-puRed sm:h-12 sm:w-12"
        >
          <ChevronRight
            size={20}
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </button>
      </div>
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 sm:bottom-6 md:bottom-8">
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
                  : 'w-3 bg-white/20 hover:bg-white/50'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}