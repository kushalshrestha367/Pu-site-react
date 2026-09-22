import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, Download as DownloadIcon, ExternalLink } from "lucide-react";
import downloadData from "../../data/downloadData";

const PER_PAGE = 10;

export default function Download() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return downloadData;
    return downloadData.filter(
      (n) =>
        n.title.toLowerCase().includes(q) || n.date.toLowerCase().includes(q),
    );
  }, [query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const visible = filtered.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE,
  );

  const goTo = (p) => {
    setPage(Math.min(Math.max(1, p), totalPages));
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="section">
        <div className="container-x max-w-5xl">
          <header className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-heading font-heading md:text-4xl">
              Downloads
            </h1>
            <p className="mt-2 text-sm text-body/60">
              Official documents, forms, regulations, and policies from
              Purbanchal University.
            </p>

            <div className="relative mt-5 max-w-sm">
              <Search
                size={15}
                aria-hidden
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-body/40"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(1);
                }}
                placeholder="Search downloads…"
                className="w-full rounded-full border border-heading/15 bg-white py-2 pl-10 pr-4 text-sm placeholder:text-body/40 focus:border-puRed focus:outline-none focus:ring-2 focus:ring-puRed/15"
              />
            </div>
          </header>

          {visible.length === 0 ? (
            <p className="py-16 text-center text-sm text-body/60">
              No downloads match your search.
            </p>
          ) : (
            <ul className="relative">
              <span
                aria-hidden
                className="absolute bottom-6 left-[5px] top-6 w-px bg-heading/15"
              />

              {visible.map((n) => {
                const isPdf = n.type === "pdf";
                const directHref = isPdf ? n.pdf : n.link;

                return (
                  <li key={n.slug} className="relative">
                    <div className="relative flex flex-col gap-4 py-7 pl-7 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
                      {/* Dot */}
                      <span
                        aria-hidden
                        className="absolute left-0 top-[30px] h-[11px] w-[11px] rounded-full border-2 border-white bg-heading/25 lg:top-1/2 lg:-translate-y-1/2"
                      />
                      <Link
                        to={`/download/${n.slug}`}
                        className="group min-w-0 flex-1"
                      >
                        <h2 className="text-[17px] font-bold leading-snug text-heading transition-colors duration-200 group-hover:text-puRed md:text-[19px]">
                          {n.title}
                        </h2>

                        <time className="mt-1.5 block text-xs text-body/55">
                          {n.date}
                        </time>

                        <p className="mt-1.5 text-sm leading-relaxed text-body/70">
                          {n.subtitle}
                        </p>
                      </Link>

                      {directHref && (
                        <div className="shrink-0 lg:self-center">
                          <a
                            href={directHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-[#1a2332] px-6 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-puRed"
                          >
                            {isPdf ? (
                              <>
                                <DownloadIcon size={14} aria-hidden />
                                Download
                              </>
                            ) : (
                              <>
                                <ExternalLink size={14} aria-hidden />
                                Links
                              </>
                            )}
                          </a>
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
          {totalPages > 1 && (
            <nav
              aria-label="Download pagination"
              className="mt-10 flex items-center justify-center gap-1.5"
            >
              <button
                type="button"
                onClick={() => goTo(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-heading/15 text-body/70 transition-colors hover:border-puRed hover:text-puRed disabled:opacity-40"
              >
                ‹
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => goTo(p)}
                  aria-current={p === currentPage ? "page" : undefined}
                  className={`h-8 min-w-8 rounded-full px-3 text-sm font-medium transition-colors ${
                    p === currentPage
                      ? "bg-puDark text-white"
                      : "text-body/70 hover:bg-heading/[0.05] hover:text-heading"
                  }`}
                >
                  {p}
                </button>
              ))}

              <button
                type="button"
                onClick={() => goTo(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-heading/15 text-body/70 transition-colors hover:border-puRed hover:text-puRed disabled:opacity-40"
              >
                ›
              </button>
            </nav>
          )}
        </div>
      </section>
    </main>
  );
}
