import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const faculties = [
  { img: '/assets/img/faculty/laws.jpg', title: 'Faculty of Law', no: '01' },
  { img: '/assets/img/faculty/arts.jpg', title: 'Faculty of Arts', no: '02' },
  { img: '/assets/img/faculty/education.jpg', title: 'Faculty of Education', no: '03' },
  { img: '/assets/img/faculty/engineer.jpg', title: 'Faculty of Engineer', no: '04' },
];

export default function FacultySlider() {
  const trackRef = useRef(null);
  const [idx, setIdx] = useState(0);

  const scrollTo = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('[data-card]');
    if (!card) return;
    const step = card.offsetWidth + 24;
    const next = Math.max(0, Math.min(idx + dir, faculties.length - 1));
    setIdx(next);
    el.scrollTo({ left: next * step, behavior: 'smooth' });
  };

  return (
    <section id="home-faculty" className="section">
      <div className="container-x mb-6">
        <h2 className="text-4xl font-bold text-heading font-heading mb-3">University Faculties</h2>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-lg text-body/85 max-w-2xl">
            Faculties are the main academic divisions of Purbanchal University, each focusing on a
            specific field of study and research.
          </p>
          <div className="flex gap-2 md:ml-auto">
            <button
              onClick={() => scrollTo(-1)}
              className="w-10 h-10 rounded-full border border-puRed text-puRed flex items-center justify-center hover:bg-puRed hover:text-white transition"
              aria-label="Prev"
            ><ArrowLeft size={18} /></button>
            <button
              onClick={() => scrollTo(1)}
              className="w-10 h-10 rounded-full border border-puRed text-puRed flex items-center justify-center hover:bg-puRed hover:text-white transition"
              aria-label="Next"
            ><ArrowRight size={18} /></button>
          </div>
        </div>
      </div>

      <Reveal className="pl-4 md:pl-[calc((100vw-1320px)/2)] pr-0 overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {faculties.map((f) => (
            <a
              key={f.no}
              data-card
              href="#"
              className="relative block shrink-0 w-[280px] md:w-[380px] snap-start"
            >
              <img src={f.img} alt={f.title} className="w-full h-[22rem] object-cover" />
              <div className="absolute inset-x-0 bottom-0 top-1/4 p-5 flex justify-between items-end law-card-overlay text-white">
                <h4 className="text-2xl font-bold leading-tight max-w-[70%] font-heading" dangerouslySetInnerHTML={{ __html: f.title.replace(' ', ' <br>') }} />
                <span className="text-4xl font-bold leading-none">{f.no}</span>
              </div>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}