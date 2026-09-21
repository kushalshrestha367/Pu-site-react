import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  '/assets/img/carousel-1.jpg',
  '/assets/img/carousel-2.jpg',
];

export default function HeroCarousel() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % slides.length);
  const prev = () => setI((p) => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[calc(100vh-160px)] overflow-hidden ">
      <AnimatePresence initial={false}>
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img src={slides[i]} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="container-x w-full">
              <div className="max-w-3xl text-white">
                <motion.h5
                  initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                  className="uppercase mb-3 tracking-wide"
                >
                  Central
                </motion.h5>
                <motion.h1
                  initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                  className="text-4xl md:text-6xl font-bold mb-4 font-heading"
                >
                  Purbanchal University
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                  className="text-lg font-medium mb-6 max-w-xl"
                >
                  Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum
                  et diam justo clita et kasd rebum sea elitr.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
                  className="flex flex-wrap gap-3"
                >
                  <Link to="#" className="bg-accent hover:bg-accent/90 text-white py-3 px-6 rounded transition">
                    Explore Programs &amp; Enroll
                  </Link>
                  <Link to="#" className="bg-white/20 hover:bg-white/30 text-white py-3 px-6 rounded transition">
                    Know Us
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prev}
        className="absolute top-1/2 right-[10%] -translate-y-1/2 text-white w-11 h-11 rounded-full border border-white flex items-center justify-center hover:bg-accent hover:border-accent transition hidden md:flex"
        aria-label="Previous"
      ><ChevronLeft /></button>
      <button
        onClick={next}
        className="absolute top-[calc(50%+50px)] right-[10%] -translate-y-1/2 text-white w-11 h-11 rounded-full border border-white flex items-center justify-center hover:bg-accent hover:border-accent transition hidden md:flex"
        aria-label="Next"
      ><ChevronRight /></button>
    </div>
  );
}