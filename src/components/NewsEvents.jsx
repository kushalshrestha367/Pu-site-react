import { Calendar, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { Link } from "react-router-dom";
import news from "../data/newsData";

export default function NewsEvents() {
  return (
    <section id="home-news-events" className="section">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-4 mb-8 md:flex-row md:items-center">
          <h2 className="text-4xl font-bold text-heading font-heading">
            Latest News &amp; Events
          </h2>
          <Link
            to="/news-and-event"
            className="inline-flex items-center gap-1 font-medium text-puRed hover:text-puRed/80"
          >
            See More News <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item, i) => (
            <Reveal key={item.slug} delay={i % 3} className="h-full">
              <article className="group relative isolate flex h-full flex-col bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-within:-translate-y-1 focus-within:shadow-lg">
                <Link
                  to={`/news-and-event/${item.slug}`}
                  aria-label={`Read: ${item.title}`}
                  className="absolute inset-0 z-20 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-puRed"
                >
                  <span className="sr-only">{item.title}</span>
                </Link>

                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt=""
                    className="h-[240px] w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="relative z-10 -mt-6 mr-5 flex flex-1 flex-col bg-white p-5">
                  <div className="mb-3 flex items-center gap-2 text-sm text-body/70">
                    <Calendar size={16} aria-hidden />
                    <span>{item.date}</span>
                  </div>

                  <h4 className="mb-4 flex-1 text-lg font-bold leading-snug text-puDark">
                    {item.title}
                  </h4>
                  <span className="pointer-events-none inline-flex items-center gap-1 font-semibold text-puRed">
                    Read More
                    <ArrowRight
                      size={16}
                      aria-hidden
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
