import { Phone, CalendarCheck, PlayCircle } from 'lucide-react';
import Reveal from './Reveal';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      id="hero"
      className="section relative bg-linear-to-br from-white to-accent/5 bg-cover bg-white/10 bg-center bg-no-repeat "
      style={{ backgroundImage: "url('/assets/img/bg/abstract-bg-3.webp')" }}
    >
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-white/90 z-0" />

      <div className="container-x grid lg:grid-cols-2 gap-10 items-center relative z-10">
        <Reveal variant="right" className="space-y-5">
          <h1 className="text-4xl md:text-5xl font-bold text-heading font-heading">
            Welcome to Purbanchal Universityy
          </h1>
          <p className="text-lg leading-relaxed text-body/80">
            Purbanchal University, established in 1995, is a leading institution of higher education in
            Nepal. With a commitment to academic excellence and innovation, we offer a wide range of
            programs across various disciplines. Our dedicated faculty and state-of-the-art facilities
            provide students with an enriching learning environment. We strive to foster critical
            thinking, creativity, and social responsibility among our students, preparing them for
            successful careers and meaningful contributions to society.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="#" className="bg-accent hover:bg-accent/90 text-white py-3 px-6 rounded-full font-semibold transition">
              Discover More
            </Link>
            <Link to="#" className="border-2 border-accent text-accent hover:bg-accent hover:text-white py-3 px-6 rounded-full font-semibold flex items-center gap-2 transition">
              <PlayCircle size={18} /> Watch Our Story
            </Link>
          </div>
          <div className="flex items-center gap-4 p-4 border border-accent/30 rounded-xl bg-white/60 backdrop-blur">
            <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center">
              <Phone size={20} />
            </div>
            <div>
              <small className="block text-body/60 text-xs">Hotline Call</small>
              <strong className="text-heading font-semibold">+977-01-472-6308</strong>
            </div>
          </div>
        </Reveal>

        <Reveal variant="left" delay={1} className="relative">
          <div className="relative h-[380px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl">
            <img src="/assets/img/carousel-2.jpg" alt="" className="w-full h-full object-cover" />
            <div className="absolute top-5 right-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <CalendarCheck size={22} />
              </div>
              <div>
                <h6 className="text-heading text-sm font-semibold">Established</h6>
                <p className="text-heading text-base font-semibold">in 1994</p>
              </div>
            </div>
          </div>
          <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-accent/10 animate-float1 -z-10" />
          <div className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full bg-accent/10 animate-float2 -z-10" />
          <div className="absolute top-1/2 -left-6 w-24 h-24 rounded-full bg-accent/10 animate-float3 -z-10" />
        </Reveal>
      </div>
    </section>
  );
}