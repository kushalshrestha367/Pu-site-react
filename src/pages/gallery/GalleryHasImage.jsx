import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { Image as ImageIcon, ArrowUpRight } from "lucide-react";
import { ALBUMS } from "../../data/galleryData";

const NAVY = "#252659";
const HEADING = "#112344";
const EASE = [0.22, 1, 0.36, 1];

const STRIPS = 5;

function useIsTouch() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: none) and (pointer: coarse)");
    setIsTouch(mq.matches);

    const handler = (e) => setIsTouch(e.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  return isTouch;
}

function StackedThumb({ album }) {
  const [a, b] = album.photos;
  const reduce = useReducedMotion();
  const isTouch = useIsTouch();
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.6, once: false });

  const [state, setState] = useState("rest");
  useEffect(() => {
    if (!isTouch || reduce) return;
    setState(inView ? "hover" : "rest");
  }, [inView, isTouch, reduce]);

  const spring = {
    type: "spring",
    stiffness: 240,
    damping: 28,
    mass: 0.7,
  };

  const motionProps = isTouch
    ? { initial: "rest", animate: state }
    : {
        initial: "rest",
        animate: "rest",
        whileHover: reduce ? "rest" : "hover",
      };

  return (
    <motion.div
      ref={ref}
      {...motionProps}
      className="relative aspect-[5/4] w-full overflow-hidden rounded-sm bg-accent"
    >
      <motion.img
        src={b || a}
        alt=""
        loading="lazy"
        draggable={false}
        variants={{
          rest: { scale: 1.15, opacity: 0.4 },
          hover: { scale: 1.02, opacity: 1 },
        }}
        transition={{ ...spring, delay: 0.12 }}
        className="absolute inset-4 h-full w-full object-cover"
      />

      {Array.from({ length: STRIPS }).map((_, i) => {
        const direction = i % 2 === 0 ? "-102%" : "102%";
        const driftX = i % 2 === 0 ? -10 : 10;

        return (
          <motion.div
            key={i}
            variants={{
              rest: { y: "0%", x: 0 },
              hover: { y: direction, x: driftX },
            }}
            transition={{ ...spring, delay: i * 0.04 }}
            className="absolute top-0 h-full will-change-transform"
            style={{
              left: `${(i / STRIPS) * 100}%`,
              width: `${100 / STRIPS}%`,
              backgroundImage: `url(${a})`,
              backgroundSize: `${STRIPS * 100}% 100%`,
              backgroundPosition: `${(i / (STRIPS - 1)) * 100}% 0`,
            }}
          />
        );
      })}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent" />

      <div className="absolute bottom-3.5 left-3.5 z-20 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11.5px] font-semibold text-[#252659] shadow-md backdrop-blur-md">
        <ImageIcon size={12} aria-hidden />
        {album.photos.length}
      </div>

      <motion.div
        variants={{
          rest: { opacity: 0, x: 8 },
          hover: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.3, ease: EASE, delay: 0.15 }}
        className="absolute bottom-3.5 right-3.5 z-20 text-[10.5px] font-bold uppercase tracking-[0.16em] text-white"
      >
        Preview →
      </motion.div>
    </motion.div>
  );
}

export default function GalleryHasImage() {
  const reduce = useReducedMotion();

  const fade = (delay = 0, y = 18) =>
    reduce
      ? { initial: false }
      : {
          initial: { opacity: 0, y },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: { duration: 0.55, delay, ease: EASE },
        };

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-[86rem] px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <motion.div {...fade(0, 12)} className="mb-12">
          <h1
            className="text-[2rem] font-bold tracking-tight sm:text-[2.5rem]"
            style={{ color: HEADING }}
          >
            Photo Gallery
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-500 sm:text-[17px]">
            Moments, events, and milestones from Purbanchal University. Scroll
            or hover to reveal a preview.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 xl:grid-cols-4">
          {ALBUMS.map((album, i) => (
            <motion.div key={album.slug} {...fade((i % 4) * 0.05, 18)}>
              <Link
                to={`/gallery/image/${album.slug}`}
                className="group block overflow-hidden rounded-sm border border-slate-200/80 bg-white p-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-[#252659]/30 hover:shadow-[0_22px_45px_-25px_rgba(37,38,89,0.55)]"
              >
                <StackedThumb album={album} />

                <div className="flex items-start justify-between gap-3 px-1 pb-1 pt-4">
                  <h2
                    className="line-clamp-2 text-[15.5px] font-semibold leading-snug transition-colors group-hover:text-[#252659]"
                    style={{ color: HEADING }}
                  >
                    {album.title}
                  </h2>
                  <ArrowUpRight
                    size={17}
                    aria-hidden
                    className="mt-0.5 shrink-0 text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#252659]"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
