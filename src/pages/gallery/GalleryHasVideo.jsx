import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const EASE = [0.22, 1, 0.36, 1];

export default function GalleryHasVideo() {
  const reduce = useReducedMotion();
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-[70vh] w-full items-center bg-white py-16 sm:py-20">
      {/* Dot-grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(15,23,42,0.08) 1px, transparent 1.5px)",
          backgroundSize: "26px 26px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 30% 50%, black 10%, transparent 75%)",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 30% 50%, black 10%, transparent 75%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
        {/* Eyebrow */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-5 flex items-center gap-3"
        >
          <span className="h-[3px] w-10 rounded-full bg-[#252659]" />
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#252659]">
            Video Gallery
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="font-serif text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
        >
          Update
          <br />
          <span className="text-accent">Coming Soon</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          className="mt-6 max-w-md text-[14.5px] leading-[1.8] text-slate-600 sm:text-[15px]"
        >
          We're preparing a collection of videos highlighting Purbanchal
          University. Please check back soon.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: EASE }}
          className="mt-8"
        >
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center rounded-md bg-[#252659] px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#1a1c4b]"
          >
            Go Back to Home
          </button>
        </motion.div>
      </div>
    </section>
  );
}