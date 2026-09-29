import React, { useState, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronRight,
  ChevronLeft,
  Mail,
  Phone,
  ArrowUpDown,
} from "lucide-react";
import { REGISTRAR_LIST, VC_LIST, P } from "../../../data/officeData";

const RED = "#9e1c32";
const NAVY = "#252659";
const HEADING = "#112344";
const EASE = [0.22, 1, 0.36, 1];

/* ------------------------------------------------------------------ */
/*  Portrait — initials fallback + responsive sizing                    */
/* ------------------------------------------------------------------ */
function Portrait({ name, img, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed || !img) {
    const initials = name
      .replace(/^(Prof\.|Dr\.|Mr\.|Mrs\.|Ms\.)\s*/gi, "")
      .split(/\s+/)
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();
    return (
      <div
        className={`flex flex-shrink-0 items-center justify-center rounded-xl font-bold text-white ${className}`}
        style={{
          background: `linear-gradient(135deg, ${NAVY} 0%, #3a3c7a 100%)`,
        }}
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={img}
      alt={name}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`flex-shrink-0 rounded-xl object-cover ${className}`}
      style={{ boxShadow: "0 8px 20px -10px rgba(0,0,0,0.35)" }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile Card                                                        */
/* ------------------------------------------------------------------ */
function MobileCard({ row, label, index, reduce }) {
  return (
    <motion.li
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: Math.min(index * 0.05, 0.3),
        ease: EASE,
      }}
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_-20px_rgba(0,0,0,0.25)]"
    >
      <div className="relative">
        <Portrait
          name={row.name}
          img={row.img}
          className="h-[240px] w-full rounded-none xs:h-[260px] sm:h-[280px]"
        />
        <span
          className="absolute left-3 top-3 flex h-7 min-w-7 items-center justify-center rounded-full px-2 text-[12px] font-bold text-white shadow-md xs:h-8 xs:min-w-8 xs:px-2.5 xs:text-[13px]"
          style={{ backgroundColor: NAVY }}
        >
          {row.sn}
        </span>
        <span
          className="absolute right-3 top-3 rounded-full px-2.5 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.14em] text-white shadow-md xs:px-3 xs:py-1 xs:text-[10px]"
          style={{ backgroundColor: RED }}
        >
          {label}
        </span>
      </div>

      <div className="p-4">
        <h3
          className="text-[16px] font-bold leading-snug xs:text-[17px]"
          style={{ color: HEADING }}
        >
          {row.name}
        </h3>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="min-w-0">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              From
            </div>
            <div className="truncate text-[12.5px] font-semibold text-slate-800">
              {row.from}
            </div>
            {row.fromEn && (
              <div className="truncate text-[11.5px] text-slate-500">
                ({row.fromEn})
              </div>
            )}
          </div>
          <div className="min-w-0">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              To
            </div>
            <div className="truncate text-[12.5px] font-semibold text-slate-800">
              {row.to}
            </div>
            {row.toEn && (
              <div className="truncate text-[11.5px] text-slate-500">
                ({row.toEn})
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.li>
  );
}

/* ------------------------------------------------------------------ */
/*  Desktop Row                                                        */
/* ------------------------------------------------------------------ */
function DesktopRow({ row, label, index, reduce }) {
  return (
    <motion.li
      initial={reduce ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: Math.min(index * 0.04, 0.3),
        ease: EASE,
      }}
      className="grid grid-cols-[60px_200px_1fr_180px_180px] items-center gap-4 px-6 py-5 transition-colors hover:bg-[#9e1c32]/[0.025] xl:grid-cols-[70px_240px_1fr_200px_200px] xl:gap-5 xl:px-8 xl:py-6"
    >
      <div className="text-center text-[14px] font-semibold text-slate-700 xl:text-[15px]">
        {row.sn}
      </div>
      <Portrait
        name={row.name}
        img={row.img}
        className="h-[180px] w-[160px] xl:h-[210px] xl:w-[190px]"
      />
      <div className="min-w-0">
        <p
          className="text-[16px] font-semibold leading-snug xl:text-[17px]"
          style={{ color: HEADING }}
        >
          {row.name}
        </p>
        <p
          className="mt-1 text-[10.5px] font-semibold uppercase tracking-wider xl:text-[11px]"
          style={{ color: RED }}
        >
          {label}
        </p>
      </div>
      <div className="min-w-0">
        <div className="truncate text-[13px] font-semibold text-slate-800 xl:text-[13.5px]">
          {row.from}
        </div>
        {row.fromEn && (
          <div className="truncate text-[11.5px] font-semibold text-slate-700 xl:text-[12px]">
            ({row.fromEn})
          </div>
        )}
      </div>
      <div className="min-w-0">
        <div className="truncate text-[13px] font-semibold text-slate-800 xl:text-[13.5px]">
          {row.to}
        </div>
        {row.toEn && (
          <div className="truncate text-[11.5px] font-semibold text-slate-700 xl:text-[12px]">
            ({row.toEn})
          </div>
        )}
      </div>
    </motion.li>
  );
}

/* ------------------------------------------------------------------ */
/*  Pagination helper — show limited page numbers with ellipsis       */
/* ------------------------------------------------------------------ */
function getPageNumbers(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = [1];
  if (current > 3) pages.push("...");
  for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
    pages.push(i);
  }
  if (current < total - 2) pages.push("...");
  pages.push(total);
  return pages;
}

/* ------------------------------------------------------------------ */
/*  People List                                                        */
/* ------------------------------------------------------------------ */
function PeopleList({ data, category }) {
  const reduce = useReducedMotion();
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return data;
    return data.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.from.toLowerCase().includes(q) ||
        r.to.toLowerCase().includes(q),
    );
  }, [data, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const current = Math.min(page, totalPages);
  const start = (current - 1) * pageSize;
  const visible = filtered.slice(start, start + pageSize);
  const goTo = (p) => setPage(Math.min(Math.max(1, p), totalPages));

  const label = category === "vc" ? "Vice-Chancellor" : "Registrar";
  const pageNumbers = getPageNumbers(current, totalPages);

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_50px_-40px_rgba(0,0,0,0.3)]"
    >
      {/* Top controls: page size + search */}
      <div className="flex flex-col gap-3 border-b border-slate-100 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 sm:py-5 lg:px-7 lg:py-6">
        <div className="flex items-center gap-2 text-[13px] text-slate-600 sm:text-[14px]">
          <span>Show</span>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setPage(1);
            }}
            className="h-9 min-w-[65px] rounded-md border-2 border-slate-300 bg-slate-100 px-2.5 text-[13px] font-medium text-slate-800 shadow-sm transition-colors focus:border-[#252659] focus:bg-white focus:outline-none sm:h-10 sm:min-w-[70px] sm:px-3 sm:text-[14px]"
          >
            {[5, 10, 25, 50, 100].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          <span>entries</span>
        </div>

        <div className="relative w-full sm:max-w-xs">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[13px] text-slate-500 sm:left-3.5 sm:text-[13.5px]">
            Search:
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Search here"
            className="h-9 w-full rounded-md border-2 border-slate-300 bg-white pl-[62px] pr-3 text-[13px] text-slate-700 placeholder:text-slate-400 transition-colors focus:border-[#252659] focus:outline-none sm:h-10 sm:pl-[68px] sm:text-[14px] [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden"
          />
        </div>
      </div>

      {/* Desktop header */}
      <div
        className="hidden grid-cols-[60px_200px_1fr_180px_180px] items-center gap-4 px-6 py-3.5 text-[11.5px] font-bold uppercase tracking-wider text-white lg:grid xl:grid-cols-[70px_240px_1fr_200px_200px] xl:gap-5 xl:px-8 xl:py-4 xl:text-[12px]"
        style={{ backgroundColor: NAVY }}
      >
        <div className="flex items-center justify-center gap-1">
          S.N <ArrowUpDown size={11} className="opacity-60" />
        </div>
        <div className="flex items-center gap-1">
          Photo <ArrowUpDown size={11} className="opacity-60" />
        </div>
        <div className="flex items-center gap-1">
          Name <ArrowUpDown size={11} className="opacity-60" />
        </div>
        <div className="flex items-center gap-1">
          From <ArrowUpDown size={11} className="opacity-60" />
        </div>
        <div className="flex items-center gap-1">
          To <ArrowUpDown size={11} className="opacity-60" />
        </div>
      </div>

      {/* Tablet header */}
      <div
        className="hidden grid-cols-[50px_180px_1fr] items-center gap-4 px-5 py-3.5 text-[11.5px] font-bold uppercase tracking-wider text-white sm:grid lg:hidden"
        style={{ backgroundColor: NAVY }}
      >
        <div className="flex items-center justify-center">S.N</div>
        <div className="flex items-center gap-1">
          Photo <ArrowUpDown size={11} className="opacity-60" />
        </div>
        <div className="flex items-center gap-1">
          Name &amp; Tenure <ArrowUpDown size={11} className="opacity-60" />
        </div>
      </div>

      {/* Mobile cards */}
      <ul className="space-y-4 p-4 sm:hidden">
        {visible.map((row, i) => (
          <MobileCard
            key={`${row.sn}-${i}`}
            row={row}
            label={label}
            index={i}
            reduce={reduce}
          />
        ))}
        {visible.length === 0 && (
          <li className="rounded-2xl border border-dashed border-slate-300 bg-slate-50/50 p-10 text-center text-sm text-slate-400">
            No matching entries found.
          </li>
        )}
      </ul>

      {/* Tablet rows */}
      <ul className="hidden divide-y divide-slate-100 sm:block lg:hidden">
        {visible.map((row, i) => (
          <motion.li
            key={`${row.sn}-${i}`}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: Math.min(i * 0.04, 0.3),
              ease: EASE,
            }}
            className="grid grid-cols-[50px_180px_1fr] items-start gap-4 px-5 py-5 transition-colors hover:bg-[#9e1c32]/[0.025]"
          >
            <div className="pt-2 text-center text-[14px] font-semibold text-slate-700">
              {row.sn}
            </div>
            <Portrait
              name={row.name}
              img={row.img}
              className="h-[180px] w-[150px]"
            />
            <div className="min-w-0">
              <p
                className="text-[16px] font-semibold leading-snug"
                style={{ color: HEADING }}
              >
                {row.name}
              </p>
              <p
                className="mt-1 text-[10.5px] font-semibold uppercase tracking-wider"
                style={{ color: RED }}
              >
                {label}
              </p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="min-w-0">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    From
                  </div>
                  <div className="truncate text-[12.5px] font-semibold text-slate-800">
                    {row.from}
                  </div>
                  {row.fromEn && (
                    <div className="truncate text-[11.5px] text-slate-500">
                      ({row.fromEn})
                    </div>
                  )}
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    To
                  </div>
                  <div className="truncate text-[12.5px] font-semibold text-slate-800">
                    {row.to}
                  </div>
                  {row.toEn && (
                    <div className="truncate text-[11.5px] text-slate-500">
                      ({row.toEn})
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.li>
        ))}
        {visible.length === 0 && (
          <li className="p-16 text-center">
            <p className="text-sm text-slate-400">No matching entries found.</p>
          </li>
        )}
      </ul>

      {/* Desktop rows */}
      <ul className="hidden divide-y divide-slate-100 lg:block">
        {visible.map((row, i) => (
          <DesktopRow
            key={`${row.sn}-${i}`}
            row={row}
            label={label}
            index={i}
            reduce={reduce}
          />
        ))}
        {visible.length === 0 && (
          <li className="p-16 text-center">
            <p className="text-sm text-slate-400">No matching entries found.</p>
          </li>
        )}
      </ul>

      {/* Pagination */}
      <div className="flex flex-col items-center gap-3 border-t border-slate-100 bg-slate-50/50 px-4 py-4 sm:flex-row sm:justify-between sm:gap-4 sm:px-6 sm:py-5 lg:px-7">
        <span className="text-center text-[12.5px] text-slate-600 sm:text-left sm:text-[13px]">
          Showing{" "}
          <strong className="font-semibold text-slate-800">
            {filtered.length === 0 ? 0 : start + 1}–
            {Math.min(start + pageSize, filtered.length)}
          </strong>{" "}
          of{" "}
          <strong className="font-semibold text-slate-800">
            {filtered.length}
          </strong>{" "}
          entries
        </span>

        <div className="flex flex-wrap items-center justify-center gap-1">
          {/* First (hidden on small) */}
          <button
            type="button"
            onClick={() => goTo(1)}
            disabled={current === 1}
            className="hidden h-9 items-center gap-1 rounded-md border border-slate-300 bg-white px-3 text-[12.5px] font-medium text-slate-600 transition-colors hover:border-[#252659] hover:text-[#252659] disabled:opacity-40 sm:flex"
          >
            First
          </button>

          {/* Prev */}
          <button
            type="button"
            onClick={() => goTo(current - 1)}
            disabled={current === 1}
            className="flex h-9 items-center gap-1 rounded-md border border-slate-300 bg-white px-3 text-[12.5px] font-medium text-slate-600 transition-colors hover:border-[#252659] hover:text-[#252659] disabled:opacity-40"
          >
            <ChevronLeft size={13} />
            <span className="hidden xs:inline">Prev</span>
          </button>

          {/* Page numbers with ellipsis */}
          {pageNumbers.map((p, i) =>
            p === "..." ? (
              <span
                key={`ellipsis-${i}`}
                className="flex h-9 items-center justify-center px-1.5 text-[13px] font-semibold text-slate-400"
              >
                …
              </span>
            ) : (
              <button
                key={p}
                type="button"
                onClick={() => goTo(p)}
                className="flex h-9 min-w-9 items-center justify-center rounded-md px-2.5 text-[13px] font-semibold transition-colors sm:px-3"
                style={
                  p === current
                    ? { backgroundColor: NAVY, color: "#fff" }
                    : {
                        color: "#64748b",
                        backgroundColor: "#fff",
                        border: "1px solid #cbd5e1",
                      }
                }
              >
                {p}
              </button>
            ),
          )}

          {/* Next */}
          <button
            type="button"
            onClick={() => goTo(current + 1)}
            disabled={current === totalPages}
            className="flex h-9 items-center gap-1 rounded-md border border-slate-300 bg-white px-3 text-[12.5px] font-medium text-slate-600 transition-colors hover:border-[#252659] hover:text-[#252659] disabled:opacity-40"
          >
            <span className="hidden xs:inline">Next</span>
            <ChevronRight size={13} />
          </button>

          {/* Last (hidden on small) */}
          <button
            type="button"
            onClick={() => goTo(totalPages)}
            disabled={current === totalPages}
            className="hidden h-9 items-center gap-1 rounded-md border border-slate-300 bg-white px-3 text-[12.5px] font-medium text-slate-600 transition-colors hover:border-[#252659] hover:text-[#252659] disabled:opacity-40 sm:flex"
          >
            Last
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main                                                               */
/* ------------------------------------------------------------------ */
export default function Registrar() {
  const reduce = useReducedMotion();
  const { pathname } = useLocation();
  const isList = pathname.endsWith("/list");
  const isRegistrar = pathname.includes("/registrar");

  const basePath = isRegistrar
    ? "/central-office/offices/registrar"
    : "/central-office/offices/vice-chancellor";

  const label = isRegistrar ? "Registrar" : "Vice-Chancellor";
  const data = isRegistrar ? REGISTRAR_LIST : VC_LIST;
  const category = isRegistrar ? "registrar" : "vc";

  return (
    <main className="min-h-screen bg-white font-heading">
      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
        <AnimatePresence mode="wait">
          {!isList ? (
            /* ---------------- Profile view ---------------- */
            <motion.div
              key={`profile-${category}`}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="grid gap-6 sm:gap-8 md:grid-cols-[260px_1fr] md:gap-10 lg:grid-cols-[320px_1fr] lg:gap-14 xl:gap-16"
            >
              {/* Portrait + info */}
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="relative w-full max-w-[300px] sm:max-w-[340px] md:max-w-none">
                  <img
                    src={P(15)}
                    alt="Prof. Dr. Panna Thapa"
                    className="h-auto w-full rounded-2xl object-cover"
                    style={{
                      aspectRatio: "3 / 4",
                      boxShadow: "0 24px 50px -30px rgba(0,0,0,0.45)",
                    }}
                  />
                </div>

                <h1
                  className="mt-5 text-lg font-bold leading-tight sm:text-xl md:mt-6 lg:text-2xl xl:text-[1.4rem]"
                  style={{ color: HEADING }}
                >
                  Prof. Dr. Panna Thapa
                </h1>

                <p
                  className="mt-1.5 text-[13px] font-semibold sm:text-sm md:text-base"
                  style={{ color: RED }}
                >
                  Registrar
                </p>

                <div className="mt-4 flex w-full flex-col items-center gap-2 md:items-start sm:mt-5">
                  <a
                    href="mailto:registrar@purbuniv.edu.np"
                    className="inline-flex max-w-full items-center gap-2 text-[12.5px] text-slate-600 transition-colors hover:text-[#9e1c32] sm:text-[13.5px]"
                  >
                    <Mail size={14} className="shrink-0" />
                    <span className="truncate">registrar@purbuniv.edu.np</span>
                  </a>

                  <div className="flex max-w-full items-start gap-2 text-[12.5px] leading-relaxed text-slate-600 sm:text-[13.5px]">
                    <Phone size={14} className="mt-0.5 shrink-0" />
                    <span className="break-words text-left md:text-left">
                      977-21-590832 (Ext. 8002), Secretariat: 977-21-590832
                      (Ext. 802)
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick links */}
              <div className="flex flex-col justify-center gap-3 sm:gap-4">
                <Link
                  to="/central-office/offices/vice-chancellor/list"
                  className="group flex items-center justify-between gap-3 rounded-2xl border-2 border-accent bg-white px-4 py-4 text-left text-[14px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-25px_rgba(37,38,89,0.5)] sm:px-6 sm:py-5 sm:text-[15px] lg:text-base"
                >
                  <div className="min-w-0">
                    <span className="block">List of Vice-Chancellor</span>
                    <span className="mt-0.5 block text-[11.5px] font-heading font-normal text-slate-600 sm:text-[12px]">
                      All Vice-Chancellors since 1996
                    </span>
                  </div>
                  <ChevronRight
                    size={20}
                    className="shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/central-office/offices/registrar/list"
                  className="group flex items-center justify-between gap-3 rounded-2xl border-2 border-accent bg-white px-4 py-4 text-left text-[14px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-25px_rgba(37,38,89,0.5)] sm:px-6 sm:py-5 sm:text-[15px] lg:text-base"
                >
                  <div className="min-w-0">
                    <span className="block">List of Registrar</span>
                    <span className="mt-0.5 block text-[11.5px] font-normal text-slate-600 sm:text-[12px]">
                      All Registrars since 1996
                    </span>
                  </div>
                  <ChevronRight
                    size={20}
                    className="shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </motion.div>
          ) : (
            /* ---------------- List view ---------------- */
            <motion.div
              key={`list-${category}`}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <div className="mb-6 flex flex-wrap items-end justify-between gap-3 sm:mb-8 sm:gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <span
                      className="h-[3px] w-8 rounded-full"
                      style={{ backgroundColor: RED }}
                    />
                    <span
                      className="text-[10.5px] font-semibold uppercase tracking-[0.22em] sm:text-[11px]"
                      style={{ color: RED }}
                    >
                      Office of the {label}
                    </span>
                  </div>
                  <h2
                    className="mt-2 text-2xl font-bold tracking-tight sm:mt-3 sm:text-3xl lg:text-[2rem]"
                    style={{ color: HEADING }}
                  >
                    List of {label}
                  </h2>
                  <p className="mt-1.5 text-[12.5px] text-slate-500 sm:mt-2 sm:text-[13.5px]">
                    Complete record of{" "}
                    {isRegistrar ? "Registrars" : "Vice-Chancellors"} serving
                    Purbanchal University.
                  </p>
                </div>

                <Link
                  to={basePath}
                  className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-[12.5px] font-medium text-slate-600 transition-colors hover:border-[#9e1c32] hover:text-[#9e1c32] sm:px-4 sm:text-[13px]"
                >
                  <ChevronLeft
                    size={14}
                    className="transition-transform duration-200 group-hover:-translate-x-0.5"
                  />
                  Back to profile
                </Link>
              </div>

              <PeopleList data={data} category={category} />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}