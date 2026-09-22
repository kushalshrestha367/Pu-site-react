import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  Calendar,
  ArrowLeft,
  ArrowUpRight,
  Download,
  ExternalLink,
} from "lucide-react";
import noticeData from "../data/noticeData";

const EASE = [0.22, 1, 0.36, 1];

export default function NoticeDetail() {
  const { slug } = useParams();
  const item = noticeData.find((n) => n.slug === slug);
  const reduce = useReducedMotion();

  const fade = (delay = 0) =>
    reduce
      ? { initial: false }
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: EASE },
        };
  if (!item) {
    return (
      <section className="section">
        <div className="container-x mx-auto max-w-2xl py-24 text-center">
          <motion.div {...fade()}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-puRed">
              404
            </p>
            <h1 className="mt-3 text-2xl font-bold tracking-tight text-heading font-heading">
              Notice not found
            </h1>
            <p className="mt-2 text-sm text-body/60">
              The link may be broken, or the notice has been removed.
            </p>
            <Link
              to="/notice"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-puRed transition-colors hover:text-puDark"
            >
              <ArrowLeft
                size={15}
                aria-hidden
                className="transition-transform duration-200 group-hover:-translate-x-0.5"
              />
              Back to all notices
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

  const related = noticeData.filter((n) => n.slug !== item.slug).slice(0, 4);

  return (
    <section className="section">
      <div className="container-x">
        <motion.div {...fade()}>
          <Link
            to="/notice"
            className="group inline-flex items-center gap-2 text-sm font-medium text-body/60 transition-colors hover:text-puRed"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-heading/12 transition-all duration-200 group-hover:-translate-x-0.5 group-hover:border-puRed/40 group-hover:text-puRed">
              <ArrowLeft size={14} aria-hidden />
            </span>
            Back to notices
          </Link>
        </motion.div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-14">
          <motion.div {...fade(0.05)} className="lg:pt-2">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-puRed">
                Notice
              </span>
              <span
                aria-hidden
                className="h-px flex-1 bg-heading/12 lg:max-w-[60px]"
              />
            </div>

            <h1 className="mt-5 text-2xl font-bold leading-[1.3] tracking-tight text-heading font-heading md:text-[1.75rem] lg:text-[1.9rem]">
              {item.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-body/60">
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={14} className="text-puRed" aria-hidden />
                <time>{item.date}</time>
              </span>
            </div>

            {item.type === "pdf" && item.pdf && (
              <a
                href={item.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-puDark px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-puRed"
              >
                <Download size={15} aria-hidden />
                Download PDF
                <ExternalLink size={13} aria-hidden className="opacity-70" />
              </a>
            )}
          </motion.div>

          <motion.div {...fade(0.12)}>
            {item.type === "image" && item.img && (
              <figure className="overflow-hidden rounded-2xl border border-heading/10 bg-white shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-auto w-full object-contain"
                  loading="eager"
                />
              </figure>
            )}

            {item.type === "pdf" && item.pdf && (
              <div className="overflow-hidden rounded-2xl border border-heading/10 bg-white shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)]">
                <iframe
                  src={item.pdf}
                  title={item.title}
                  className="h-[80vh] min-h-[500px] w-full"
                />
              </div>
            )}

            {item.type === "text" && (
              <article className="rounded-2xl border border-heading/10 bg-white p-8 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)]">
                <div className="space-y-4 text-[15px] leading-[1.85] text-body/90 md:text-base">
                  {String(item.content || "")
                    .split("\n")
                    .filter(Boolean)
                    .map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                </div>
              </article>
            )}
          </motion.div>
        </div>
        {related.length > 0 && (
          <motion.div
            {...fade(0.2)}
            className="mx-auto mt-20 max-w-4xl border-t border-heading/10 pt-10"
          >
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-puRed">
                More notices
              </span>
              <span aria-hidden className="h-px flex-1 bg-heading/12" />
            </div>

            <ul className="mt-6 divide-y divide-heading/10">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    to={`/notice/${r.slug}`}
                    className="group flex items-start justify-between gap-6 py-5 transition-colors"
                  >
                    <div className="min-w-0 flex-1">
                      <span className="block text-xs text-body/55">
                        {r.date}
                      </span>
                      <h3 className="mt-1.5 text-[15px] font-semibold leading-snug text-heading transition-colors duration-200 group-hover:text-puRed md:text-base">
                        {r.title}
                      </h3>
                    </div>

                    <ArrowUpRight
                      size={18}
                      aria-hidden
                      className="mt-1 shrink-0 text-body/30 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-puRed"
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <Link
                to="/notice"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-puRed transition-colors hover:text-puDark"
              >
                View all notices
                <ArrowUpRight
                  size={15}
                  aria-hidden
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
