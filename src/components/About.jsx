import { GraduationCap, Users, School } from 'lucide-react';
import Reveal from './Reveal';
import Counter from './Counter';

const stats = [
  { icon: <GraduationCap size={28} />, end: 250, label: 'Programs', suffix: '+' },
  { icon: <Users size={28} />, end: 25800, label: 'Enrolled Students', suffix: '+' },
  { icon: <School size={28} />, end: 129, label: 'Affiliated Colleges', suffix: '' },
  { icon: <Users size={28} />, end: 1534, label: 'Staffs', suffix: '' },
];

export default function About() {
  return (
    <section id="home-about" className="section">
      <div className="container-x grid lg:grid-cols-2 gap-10 items-center">
        <Reveal variant="right">
          <h2 className="text-4xl md:text-5xl font-bold text-heading font-heading mb-6">
            Why Choose Purbanchal University?
          </h2>
          <p className="text-lg md:text-xl font-light text-body/85 leading-relaxed mb-6">
            Accessible, affordable, and diverse. PU offers 250+ programs, 25,800+ students, and a strong
            alumni network, driving regional growth and sustainable education.
          </p>
          <a
            href="#"
            className="inline-block bg-accent hover:bg-accent/90 text-white py-3 px-8 rounded-md transition"
          >
            Learn More
          </a>
        </Reveal>

        <Reveal variant="left" delay={1} className="grid grid-cols-2 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent">
                {s.icon}
              </div>
              <div className="text-4xl md:text-5xl font-light text-accent leading-none">
                <Counter end={s.end} suffix={s.suffix} />
              </div>
              <div className="text-body/70">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}