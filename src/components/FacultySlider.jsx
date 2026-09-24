import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { Link } from "react-router-dom";

const faculties = [
  { img: "/assets/img/faculty/laws.jpg", title: "Faculty of Law", no: "01" },
  { img: "/assets/img/faculty/arts.jpg", title: "Faculty of Arts", no: "02" },
  {
    img: "/assets/img/faculty/education.jpg",
    title: "Faculty of Education",
    no: "03",
  },
  {
    img: "/assets/img/faculty/engineer.jpg",
    title: "Faculty of Engineer",
    no: "04",
  },
];

export default function FacultySlider() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const idxRef = useRef(0);
  const isManualScroll = useRef(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [tick, setTick] = useState(0);

  const scrollToIndex = (index, fromButton = false) => {
    idxRef.current = index;
    isManualScroll.current = true;
    setTimeout(() => {
      isManualScroll.current = false;
    }, 700);

    const el = trackRef.current;
    if (el) {
      const card = el.querySelector("[data-card]");
      if (card) {
        const step = card.offsetWidth + 24;
        el.scrollTo({ left: index * step, behavior: "smooth" });
      }
    }

    if (fromButton) setTick((t) => t + 1);
  };

  const handleNext = (fromButton = false) => {
    const nextIndex =
      idxRef.current === faculties.length - 1 ? 0 : idxRef.current + 1;
    scrollToIndex(nextIndex, fromButton);
  };

  const handlePrev = () => {
    const prevIndex =
      idxRef.current === 0 ? faculties.length - 1 : idxRef.current - 1;
    scrollToIndex(prevIndex, true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused || !isInView) return;

    const interval = setInterval(() => {
      const nextIndex =
        idxRef.current === faculties.length - 1 ? 0 : idxRef.current + 1;
      scrollToIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, isInView, tick]);

  const handleScroll = () => {
    if (isManualScroll.current) return;

    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    if (!card) return;

    const step = card.offsetWidth + 24;
    const newIdx = Math.round(el.scrollLeft / step);

    if (newIdx >= 0 && newIdx < faculties.length) {
      idxRef.current = newIdx;
    }
  };

  return (
    <section id="home-faculty" className="section" ref={sectionRef}>
      <div className="container-x mb-8">
        <h2 className="text-4xl font-bold text-heading font-heading mb-3">
          University Faculties
        </h2>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="text-lg text-body/85 max-w-3xl leading-relaxed">
            Faculties are the main academic divisions of Purbanchal University,
            each focusing on a specific field of study and research.
          </p>

          <div className="flex gap-3 md:ml-auto">
            <button
              onClick={handlePrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition-all duration-300 hover:border-gray-800 hover:bg-gray-800 hover:text-white focus:outline-none"
              aria-label="Previous faculty"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => handleNext(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition-all duration-300 hover:border-gray-800 hover:bg-gray-800 hover:text-white focus:outline-none"
              aria-label="Next faculty"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <Reveal className="pl-4 md:pl-[calc((100vw-1320px)/2)] pr-0 overflow-hidden">
        <div
          ref={trackRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4"
        >
          {faculties.map((f, index) => (
            <motion.div
              key={f.no}
              data-card
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative shrink-0 w-[280px] md:w-[380px] snap-start group rounded-2xl overflow-hidden"
            >
              <Link to="#" className="block relative h-full">
                <img
                  src={f.img}
                  alt={f.title}
                  className="w-full h-[22rem] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 flex justify-between items-end text-white">
                  <h4 className="text-2xl font-bold leading-tight max-w-[70%] font-heading transition-transform duration-300 group-hover:-translate-y-1">
                    {f.title}
                  </h4>
                  <span className="text-4xl font-bold leading-none opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
                    {f.no}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
