import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Reveal from './Reveal';

export default function VideoTour() {
  const [open, setOpen] = useState(false);
  const src = 'https://www.youtube.com/embed/ClsETom93T4?si=H07MbRMccpLWtPBy';

  return (
    <section className="section !py-0">
      <Reveal>
        <div
          className="relative py-32 flex flex-col items-center justify-center bg-cover bg-center text-center"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4)), url('/assets/img/carousel-1.jpg')",
          }}
        >
          <button
            onClick={() => setOpen(true)}
            className="relative z-10 mb-8 animate-pulseWave group"
            aria-label="Play video"
          >
            <span className="block relative w-20 h-20 rounded-full bg-white/95 flex items-center justify-center transition group-hover:scale-105">
              <span className="w-0 h-0 border-l-[24px] border-y-[16px] border-y-transparent border-l-accent ml-1" />
            </span>
          </button>
          <h1 className="text-white text-3xl md:text-4xl font-bold font-heading px-4 text-shadow">
            Video Tour in Purbanchal University
          </h1>
        </div>
      </Reveal>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[99999] bg-black/80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              className="relative w-full max-w-3xl bg-white rounded"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 py-2 border-b">
                <h5 className="font-semibold">Youtube Video</h5>
                <button onClick={() => setOpen(false)}><X /></button>
              </div>
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={src + '?autoplay=1'}
                  allow="autoplay; fullscreen"
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