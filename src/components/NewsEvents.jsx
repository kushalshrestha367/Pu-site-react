import { Calendar, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import { Link } from 'react-router-dom';

const news = [
  { img: '/assets/img/notice/1.jpeg', date: '13 Apr, 2026', title: 'पूर्वाञ्चल विश्वविद्यालयकी बरिष्ठ अधिकृत रिना हाडाको विदाई...' },
  { img: '/assets/img/notice/2.jpeg', date: '01 Apr, 2026', title: 'नवनियुक्त शिक्षा, विज्ञान तथा प्रविधि मन्त्रीज्यूलाई शुभकामना व्यक्त !...' },
  { img: '/assets/img/notice/3.jpeg', date: '14 Feb, 2026', title: 'पूर्वाञ्चल विश्वविद्यालयद्धारा आयोजित अन्तर्राष्ट्रिय सम्मलेन सम्पन्न !...' },
  { img: '/assets/img/notice/5.jpeg', date: '25 Jan, 2026', title: 'पूवि सेवा आयोगमा नयाँ अध्यक्ष र सदस्यको पदस्थापन !...' },
  { img: '/assets/img/notice/6.jpeg', date: '03 Jan, 2026', title: 'पूर्वाञ्चल विश्वविद्यालयको ३२ औं वार्षिक उत्सव भव्यताका साथ सम्पन्न !...' },
  { img: '/assets/img/carousel-1.jpg', date: '01 Apr, 2026', title: 'PU School of Medicine sets the historic initiati...' },
];

export default function NewsEvents() {
  return (
    <section id="home-news-events" className="section">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <h2 className="text-4xl font-bold text-heading font-heading">Latest News &amp; Events</h2>
          <a to="#" className="text-puRed hover:text-puRed/80 inline-flex items-center gap-1 font-medium">
            See More News <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <Reveal key={i} delay={i % 3} className="h-full">
              <article className="group bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-[240px] object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 -mt-6 bg-white relative z-10 mr-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-body/70 text-sm mb-3">
                    <Calendar size={16} />
                    <span>{item.date}</span>
                  </div>
                  <h4 className="text-puDark text-lg font-bold leading-snug mb-4 flex-1">{item.title}</h4>
                  <Link to="#" className="text-puRed font-semibold inline-flex items-center gap-1 group/link">
                    Read More
                    <ArrowRight size={16} className="transition group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}