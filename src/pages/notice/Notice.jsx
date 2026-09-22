import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  Image as ImageIcon,
  FileText,
  Bell,
  Search,
  ChevronLeft,
  ChevronRight,
  Inbox,
} from "lucide-react";
import noticeData from "../../data/noticeData";

const PER_PAGE = 10;
const EASE = [0.22, 1, 0.36, 1];

const TYPE_META = {
  pdf: { icon: FileText, label: "PDF" },
  image: { icon: ImageIcon, label: "Image" },
  default: { icon: Bell, label: "Notice" },
};

export default function Notice() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const reduce = useReducedMotion();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return noticeData;
    return noticeData.filter(
      (n) =>
        n.title.toLowerCase().includes(q) || n.date.toLowerCase().includes(q),
    );
  }, [query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [totalPages, page]);

  const currentPage = Math.min(page, totalPages);
  const visible = filtered.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE,
  );

  const goTo = (p) => {
    const next = Math.min(Math.max(1, p), totalPages);
    setPage(next);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const pageItems = useMemo(() => {
    const items = [];
    const windowSize = 1;
    const add = (v) => items.push(v);
    for (let p = 1; p <= totalPages; p++) {
      const isEdge = p === 1 || p === totalPages;
      const isNearCurrent = Math.abs(p - currentPage) <= windowSize;
      if (isEdge || isNearCurrent) add(p);
      else if (items[items.length - 1] !== "…") add("…");
    }
    return items;
  }, [totalPages, currentPage]);

  const fade = (delay = 0) =>
    reduce
      ? { initial: false }
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.45, delay, ease: EASE },
        };

  return (
    <section className="section">
      <div className="container-x mx-auto max-w-3xl">
        <motion.header {...fade()} className="mb-10">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-puRed">
              Notice Board
            </span>
            <span aria-hidden className="h-px flex-1 bg-heading/12" />
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-heading font-heading md:text-[2.25rem]">
            Notices &amp; Announcements
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-body/65 md:text-[15px]">
            Official notices, exam schedules, and administrative circulars from
            Purbanchal University.
          </p>

          <div className="relative mt-6 max-w-md">
            <Search
              size={15}
              aria-hidden
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-body/40"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Search notices…"
              className="w-full rounded-full border border-heading/15 bg-white py-2.5 pl-11 pr-4 text-sm placeholder:text-body/40 transition-shadow focus:border-puRed focus:outline-none focus:ring-4 focus:ring-puRed/10"
            />
          </div>

          {query && (
            <p className="mt-3 text-xs text-body/50">
              {filtered.length} {filtered.length === 1 ? "result" : "results"}{" "}
              for “{query}”
            </p>
          )}
        </motion.header>
        {visible.length === 0 ? (
          <motion.div
            {...fade(0.05)}
            className="rounded-2xl border border-dashed border-heading/15 py-20 text-center"
          >
            <Inbox
              size={22}
              className="mx-auto mb-3 text-body/30"
              aria-hidden
            />
            <p className="text-sm text-body/60">
              No notices match your search.
            </p>
          </motion.div>
        ) : (
          <ul className="relative">
            <span
              aria-hidden
              className="absolute bottom-6 left-[7px] top-6 w-px bg-gradient-to-b from-heading/8 via-heading/20 to-heading/8"
            />

            {visible.map((n, i) => {
              const meta = TYPE_META[n.type] || TYPE_META.default;
              const Icon = meta.icon;

              return (
                <motion.li
                  key={n.slug}
                  {...fade(0.03 * Math.min(i, 6))}
                  className="relative"
                >
                  <Link
                    to={`/notice/${n.slug}`}
                    className="group relative block py-5 pl-8 transition-colors duration-200"
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-[30px] z-10 flex h-4 w-4 items-center justify-center"
                    >
                      <span className="absolute h-4 w-4 rounded-full border-2 border-white bg-heading/15 transition-all duration-300 group-hover:scale-110 group-hover:bg-puRed/25" />
                      <span className="relative h-2 w-2 rounded-full bg-heading/40 transition-colors duration-300 group-hover:bg-puRed" />
                    </span>

                    <div className="flex items-start gap-3">
                      <div className="min-w-0 flex-1">
                        <h2 className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[15.5px] font-bold leading-snug text-heading transition-colors duration-200 group-hover:text-puRed md:text-[17px]">
                          <span>{n.title}</span>
                          <Icon
                            size={15}
                            aria-hidden
                            className="shrink-0 text-heading/40 transition-colors duration-200 group-hover:text-puRed"
                          />
                        </h2>
                        <div className="mt-2 flex items-center gap-2 text-xs text-body/55">
                          <time>{n.date}</time>
                          <span aria-hidden className="text-body/25">
                            •
                          </span>
                          <span className="font-medium uppercase tracking-wider">
                            {meta.label}
                          </span>
                        </div>
                      </div>

                      <ChevronRight
                        size={16}
                        aria-hidden
                        className="mt-1 shrink-0 -translate-x-1 text-body/0 transition-all duration-200 group-hover:translate-x-0 group-hover:text-puRed"
                      />
                    </div>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        )}
        {totalPages > 1 && (
          <motion.nav
            {...fade(0.1)}
            aria-label="Notice pagination"
            className="mt-12 flex flex-col items-center gap-3"
          >
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => goTo(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-heading/15 text-body/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-puRed hover:text-puRed disabled:translate-y-0 disabled:opacity-40 disabled:hover:border-heading/15 disabled:hover:text-body/70"
              >
                <ChevronLeft size={15} aria-hidden />
              </button>

              {pageItems.map((item, i) =>
                item === "…" ? (
                  <span
                    key={`ellipsis-${i}`}
                    className="flex h-8 w-6 shrink-0 items-center justify-center text-sm font-medium text-body/40"
                    aria-hidden
                  >
                    …
                  </span>
                ) : (
                  <button
                    key={item}
                    type="button"
                    onClick={() => goTo(item)}
                    aria-current={item === currentPage ? "page" : undefined}
                    className={`flex h-8 min-w-8 shrink-0 items-center justify-center rounded-full px-3 text-sm font-medium transition-all duration-200 ${
                      item === currentPage
                        ? "bg-puRed text-white shadow-[0_8px_20px_-8px_rgba(237,28,36,0.5)]"
                        : "text-body/70 hover:-translate-y-0.5 hover:bg-heading/[0.05] hover:text-heading"
                    }`}
                  >
                    {item}
                  </button>
                ),
              )}

              <button
                type="button"
                onClick={() => goTo(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-heading/15 text-body/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-puRed hover:text-puRed disabled:translate-y-0 disabled:opacity-40 disabled:hover:border-heading/15 disabled:hover:text-body/70"
              >
                <ChevronRight size={15} aria-hidden />
              </button>
            </div>

            <p className="text-xs text-body/45">
              Page {currentPage} of {totalPages}
            </p>
          </motion.nav>
        )}
      </div>
    </section>
  );
}
