import React, { useState, useMemo, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight, ChevronLeft, ArrowUpDown } from "lucide-react";

const RED = "#9e1c32";
const NAVY = "#252659";
const HEADING = "#112344";
const EASE = [0.22, 1, 0.36, 1];

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
        className={`flex flex-shrink-0 items-center justify-center rounded-lg font-sans font-bold text-white ${className}`}
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
      className={`flex-shrink-0 rounded-lg object-cover ${className}`}
      style={{ boxShadow: "0 4px 14px -8px rgba(0,0,0,0.35)" }}
    />
  );
}

function MobileCard({ row, index, reduce }) {
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
      <div className="flex gap-4 p-4">
        <Portrait
          name={row.name}
          img={row.img}
          className="h-[110px] w-[90px]"
        />

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-center gap-2">
            <span
              className="flex h-6 min-w-6 items-center justify-center rounded-full px-2 font-sans text-[11px] font-bold text-white"
              style={{ backgroundColor: NAVY }}
            >
              {row.sn}
            </span>
          </div>

          <h3
            className="mt-2 font-sans text-[15px] font-bold leading-snug"
            style={{ color: HEADING }}
          >
            {row.name}
          </h3>

          <div className="mt-auto space-y-1.5 pt-3">
            <div className="flex items-baseline gap-1.5 text-[12px]">
              <span className="font-sans font-semibold uppercase tracking-wider text-slate-400">
                From
              </span>
              <span className="font-sans font-semibold text-slate-800">
                {row.from}
              </span>
            </div>
            {row.fromEn && (
              <div className="font-sans text-[11px] text-slate-500">
                ({row.fromEn})
              </div>
            )}
            <div className="flex items-baseline gap-1.5 text-[12px]">
              <span className="font-sans font-semibold uppercase tracking-wider text-slate-400">
                To
              </span>
              <span className="font-sans font-semibold text-slate-800">
                {row.to}
              </span>
            </div>
            {row.toEn && (
              <div className="font-sans text-[11px] text-slate-500">
                ({row.toEn})
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.li>
  );
}

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
      className="grid grid-cols-[60px_140px_1fr_220px_220px] items-center gap-5 px-8 py-5 font-sans transition-colors hover:bg-[#9e1c32]/[0.025]"
    >
      <div className="text-center font-sans text-[15px] font-semibold text-slate-700">
        {row.sn}
      </div>

      <Portrait name={row.name} img={row.img} className="h-[140px] w-[120px]" />

      <div className="min-w-0">
        <p
          className="font-sans text-[17px] font-semibold leading-snug"
          style={{ color: HEADING }}
        >
          {row.name}
        </p>
        <p
          className="mt-1 font-sans text-[11px] font-semibold uppercase tracking-wider"
          style={{ color: RED }}
        >
          {label}
        </p>
      </div>

      <div>
        <div className="font-sans text-[14px] font-semibold text-slate-800">
          {row.from}
        </div>
        {row.fromEn && (
          <div className="font-sans text-[12.5px] font-semibold text-slate-700">
            ({row.fromEn})
          </div>
        )}
      </div>

      <div>
        <div className="font-sans text-[14px] font-semibold text-slate-800">
          {row.to}
        </div>
        {row.toEn && (
          <div className="font-sans text-[12.5px] font-semibold text-slate-700">
            ({row.toEn})
          </div>
        )}
      </div>
    </motion.li>
  );
}

export default function PeopleTable({ data = [], label = "Vice-Chancellor" }) {
  const reduce = useReducedMotion();
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const tableRef = useRef(null);

  const safeData = Array.isArray(data) ? data : [];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return safeData;
    return safeData.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.from.toLowerCase().includes(q) ||
        r.to.toLowerCase().includes(q),
    );
  }, [safeData, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const current = Math.min(page, totalPages);
  const start = (current - 1) * pageSize;
  const visible = filtered.slice(start, start + pageSize);
  useEffect(() => {
    const el = tableRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({
      top,
      behavior: reduce ? "auto" : "smooth",
    });
  }, [current, reduce]);

  const goTo = (p) => setPage(Math.min(Math.max(1, p), totalPages));

  return (
    <div
      ref={tableRef}
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_50px_-40px_rgba(0,0,0,0.3)]"
    >
      <div className="flex flex-col gap-4 border-b border-slate-100 px-4 py-5 font-sans sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-6">
        <div className="flex items-center gap-2.5 text-[14px] text-slate-600">
          <span className="font-sans">Show</span>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setPage(1);
            }}
            className="h-10 min-w-[70px] rounded-md border-2 border-slate-300 bg-slate-100 px-3 font-sans text-[14px] font-medium text-slate-800 shadow-sm transition-colors focus:border-[#252659] focus:bg-white focus:outline-none"
          >
            {[5, 10, 25, 50, 100].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          <span className="font-sans">entries</span>
        </div>

        <div className="relative w-full sm:max-w-xs">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-sans text-[13.5px] text-slate-500">
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
            className="h-10 w-full rounded-md border-2 border-slate-300 bg-white pl-[68px] pr-3 font-sans text-[14px] text-slate-700 placeholder:text-slate-400 transition-colors focus:border-[#252659] focus:outline-none"
          />
        </div>
      </div>
      <div
        className="hidden grid-cols-[60px_140px_1fr_220px_220px] items-center gap-5 px-8 py-4 font-sans text-[12px] font-bold uppercase tracking-wider text-white lg:grid"
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
      <div
        className="hidden grid-cols-[60px_140px_1fr] items-center gap-5 px-6 py-4 font-sans text-[12px] font-bold uppercase tracking-wider text-white sm:grid lg:hidden"
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
      <ul className="space-y-3 p-4 sm:hidden">
        {visible.map((row, i) => (
          <MobileCard
            key={`${row.sn}-${i}`}
            row={row}
            index={i}
            reduce={reduce}
          />
        ))}
        {visible.length === 0 && (
          <li className="rounded-2xl border border-dashed border-slate-300 bg-slate-50/50 p-10 text-center font-sans text-sm text-slate-400">
            No matching entries found.
          </li>
        )}
      </ul>

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
            className="grid grid-cols-[60px_140px_1fr] items-start gap-5 px-6 py-5 font-sans transition-colors hover:bg-[#9e1c32]/[0.025]"
          >
            <div className="pt-2 text-center font-sans text-[15px] font-semibold text-slate-700">
              {row.sn}
            </div>

            <Portrait
              name={row.name}
              img={row.img}
              className="h-[140px] w-[120px]"
            />

            <div className="min-w-0">
              <p
                className="font-sans text-[16px] font-semibold leading-snug"
                style={{ color: HEADING }}
              >
                {row.name}
              </p>
              <p
                className="mt-1 font-sans text-[11px] font-semibold uppercase tracking-wider"
                style={{ color: RED }}
              >
                {label}
              </p>
              <div className="mt-3 grid grid-cols-2 gap-4">
                <div>
                  <div className="font-sans text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    From
                  </div>
                  <div className="font-sans text-[13px] font-semibold text-slate-800">
                    {row.from}
                  </div>
                  {row.fromEn && (
                    <div className="font-sans text-[12px] text-slate-500">
                      ({row.fromEn})
                    </div>
                  )}
                </div>
                <div>
                  <div className="font-sans text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    To
                  </div>
                  <div className="font-sans text-[13px] font-semibold text-slate-800">
                    {row.to}
                  </div>
                  {row.toEn && (
                    <div className="font-sans text-[12px] text-slate-500">
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
            <p className="font-sans text-sm text-slate-400">
              No matching entries found.
            </p>
          </li>
        )}
      </ul>
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
            <p className="font-sans text-sm text-slate-400">
              No matching entries found.
            </p>
          </li>
        )}
      </ul>
      <div className="flex flex-col items-center gap-4 border-t border-slate-100 bg-slate-50/50 px-4 py-5 font-sans sm:flex-row sm:justify-between sm:px-7">
        <span className="text-center font-sans text-[12.5px] text-slate-600 sm:text-left sm:text-[13px]">
          Showing{" "}
          <strong className="font-sans font-semibold text-slate-800">
            {filtered.length === 0 ? 0 : start + 1}–
            {Math.min(start + pageSize, filtered.length)}
          </strong>{" "}
          of{" "}
          <strong className="font-sans font-semibold text-slate-800">
            {filtered.length}
          </strong>{" "}
          entries
        </span>

        <div className="flex flex-wrap items-center justify-center gap-1">
          <button
            type="button"
            onClick={() => goTo(1)}
            disabled={current === 1}
            className="hidden h-9 items-center gap-1 rounded-md border border-slate-300 bg-white px-3 font-sans text-[12.5px] font-medium text-slate-600 transition-colors hover:border-[#252659] hover:text-[#252659] disabled:opacity-40 sm:flex"
          >
            First
          </button>
          <button
            type="button"
            onClick={() => goTo(current - 1)}
            disabled={current === 1}
            className="flex h-9 items-center gap-1 rounded-md border border-slate-300 bg-white px-3 font-sans text-[12.5px] font-medium text-slate-600 transition-colors hover:border-[#252659] hover:text-[#252659] disabled:opacity-40"
          >
            <ChevronLeft size={13} /> Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => goTo(p)}
              className="flex h-9 min-w-9 items-center justify-center rounded-md px-3 font-sans text-[13px] font-semibold transition-colors"
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
          ))}

          <button
            type="button"
            onClick={() => goTo(current + 1)}
            disabled={current === totalPages}
            className="flex h-9 items-center gap-1 rounded-md border border-slate-300 bg-white px-3 font-sans text-[12.5px] font-medium text-slate-600 transition-colors hover:border-[#252659] hover:text-[#252659] disabled:opacity-40"
          >
            Next <ChevronRight size={13} />
          </button>
          <button
            type="button"
            onClick={() => goTo(totalPages)}
            disabled={current === totalPages}
            className="hidden h-9 items-center gap-1 rounded-md border border-slate-300 bg-white px-3 font-sans text-[12.5px] font-medium text-slate-600 transition-colors hover:border-[#252659] hover:text-[#252659] disabled:opacity-40 sm:flex"
          >
            Last
          </button>
        </div>
      </div>
    </div>
  );
}
