import { useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

export default function Lightbox({
  photos,
  index,
  title,
  caption,
  onClose,
  onPrev,
  onNext,
}) {
  const reduce = useReducedMotion();

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, onPrev, onNext]);

  const photo = photos[index];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/95 mt-18"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
    >
      {photos.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 z-[90] flex h-14 w-14 -translate-y-1/2 items-center justify-center bg-black/30 text-white/90 transition-colors hover:bg-black/50 hover:text-white sm:left-6"
        >
          <ChevronLeft size={30} strokeWidth={1.5} aria-hidden />
        </button>
      )}

      {photos.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 z-[90] flex h-14 w-14 -translate-y-1/2 items-center justify-center bg-black/30 text-white/90 transition-colors hover:bg-black/50 hover:text-white sm:right-6"
        >
          <ChevronRight size={30} strokeWidth={1.5} aria-hidden />
        </button>
      )}
      <div
        className="flex w-full max-w-275 flex-col bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between bg-[#111] px-4 py-2 sm:px-5">
          <span className="text-[13px] tabular-nums text-white/70">
            {photos.length > 1 ? `${index + 1} / ${photos.length}` : ""}
          </span>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <X size={24} strokeWidth={2} aria-hidden />
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.img
            key={photo}
            src={photo}
            alt=""
            draggable={false}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="block max-h-[75vh] w-full select-none object-contain"
            style={{ background: "#111" }}
          />
        </AnimatePresence>

        {(title || caption) && (
          <div className="border-t border-slate-200 bg-white px-4 py-3 sm:px-6 sm:py-4">
            <p
              className="text-center text-[13.5px] font-medium leading-relaxed text-[#1e3a8a] sm:text-[15px]"
              style={{
                fontFamily: "'Noto Sans Devanagari', system-ui, sans-serif",
              }}
            >
              {caption || title}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
