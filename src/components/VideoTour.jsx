import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import Reveal from "./Reveal";

export default function VideoTour() {
  const [open, setOpen] = useState(false);
  const baseSrc =
    "https://www.youtube.com/embed/ClsETom93T4?si=H07MbRMccpLWtPBy";
  const src = `${baseSrc}&autoplay=1`;
  const titleWords = "Video Tour in Purbanchal University".split(" ");

  return (
    <section className="section !py-0 overflow-hidden h-[500px]">
      <Reveal>
        <div className="relative flex flex-col items-center justify-center py-32 text-center overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)), url('/assets/img/carousel-1.jpg')",
            }}
          />
          <div className="relative z-10 mb-8 group">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-2 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,rgba(255,255,255,0.8)_360deg)]"
            />
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-white/30"
            />
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen(true)}
              className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-white to-gray-200 shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-shadow duration-500 hover:shadow-[0_0_70px_rgba(255,255,255,0.7)] md:h-24 md:w-24"
              aria-label="Play video"
            >
              <motion.span
                animate={{ x: ["-150%", "200%"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 0.5,
                }}
                className="absolute inset-0 z-20 w-full -skew-x-12 bg-gradient-to-r from-transparent via-white/80 to-transparent"
              />
              <Play
                size={32}
                className="relative z-30 ml-1 fill-accent text-accent transition-colors duration-300 group-hover:fill-blue-600 group-hover:text-blue-600 md:size-40"
              />
            </motion.button>
          </div>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.3 },
              },
            }}
            className="relative z-10 px-4 text-3xl font-bold tracking-tight text-white md:text-5xl font-heading drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
          >
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="inline-block mr-2 md:mr-3"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </div>
      </Reveal>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateX: 10 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateX: 10 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-gray-900 border border-white/20 shadow-[0_0_80px_rgba(255,255,255,0.15)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                <h5 className="font-semibold text-gray-200">Youtube Video</h5>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setOpen(false)}
                  className="rounded-full p-1 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Close video"
                >
                  <X size={20} />
                </motion.button>
              </div>
              <div className="aspect-video bg-black">
                <iframe
                  className="h-full w-full"
                  src={src}
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                  title="Video Tour"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
