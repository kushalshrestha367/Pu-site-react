import React, { useState, useCallback } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, Maximize2, Image as ImageIcon } from "lucide-react";
import { findAlbum } from "../data/galleryData";
import Lightbox from "../components/Lightbox";

const RED = "#252659";
const HEADING = "#112344";
const EASE = [0.22, 1, 0.36, 1];

export default function GalleryAlbum() {
  const { slug } = useParams();
  const album = findAlbum(slug);
  const reduce = useReducedMotion();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const open = (i) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const prev = useCallback(() => {
    if (!album) return;
    setLightboxIndex(
      (i) => (i - 1 + album.photos.length) % album.photos.length,
    );
  }, [album]);
  const next = useCallback(() => {
    if (!album) return;
    setLightboxIndex((i) => (i + 1) % album.photos.length);
  }, [album]);

  if (!album) {
    return <Navigate to="/gallery/image" replace />;
  }

  const fade = (delay = 0) =>
    reduce
      ? { initial: false }
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: EASE },
        };

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <motion.div {...fade(0)}>
          <Link
            to="/gallery/image"
            className="group inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-heading"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 transition-all duration-200 group-hover:-translate-x-0.5 group-hover:border-[#1a1f3c]/40 group-hover:text-[#1a1f3c]">
              <ChevronLeft size={14} aria-hidden />
            </span>
            Back to Gallery
          </Link>
        </motion.div>

        <motion.div {...fade(0.06)} className="mt-6">
          <div className="flex items-center gap-3">
            <span
              className="h-[3px] w-8 rounded-full"
              style={{ backgroundColor: RED }}
            />
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.24em]"
              style={{ color: RED }}
            >
              {album.titleEn || "Album"}
            </span>
          </div>

          <h1
            className="mt-4 text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-[2rem]"
            style={{ color: HEADING }}
          >
            {album.title}
          </h1>

          <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
            <ImageIcon size={14} aria-hidden />
            <span>
              {album.photos.length}{" "}
              {album.photos.length === 1 ? "photo" : "photos"}
            </span>
          </div>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {album.photos.map((photo, i) => (
            <motion.button
              key={photo}
              type="button"
              onClick={() => open(i)}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: Math.min(i * 0.03, 0.4),
                ease: EASE,
              }}
              className="group relative aspect-square overflow-hidden rounded-sm bg-slate-100"
              aria-label={`Open photo ${i + 1}`}
            >
              <img
                src={photo}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
              />

              <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/35" />
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md">
                  <Maximize2 size={16} aria-hidden />
                </span>
              </span>
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photos={album.photos}
            index={lightboxIndex}
            title={album.title}
            caption={album.title}
            onClose={close}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
