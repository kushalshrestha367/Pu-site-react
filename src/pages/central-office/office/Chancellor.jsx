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
        className={`flex flex-shrink-0 items-center justify-center rounded-xl  font-bold text-white ${className}`}
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

/* ============================ MOBILE CARD ============================ */
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
          className="h-[280px] w-full rounded-none"
        />
        <span
          className="absolute left-3 top-3 flex h-8 min-w-8 items-center justify-center rounded-full px-2.5  text-[13px] font-bold text-white shadow-md"
          style={{ backgroundColor: NAVY }}
        >
          {row.sn}
        </span>
        <span
          className="absolute right-3 top-3 rounded-full px-3 py-1  text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-md"
          style={{ backgroundColor: RED }}
        >
          {label}
        </span>
      </div>

      <div className="p-4">
        <h3
          className=" text-[17px] font-bold leading-snug"
          style={{ color: HEADING }}
        >
          {row.name}
        </h3>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div>
            <div className=" text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              From
            </div>
            <div className=" text-[12.5px] font-semibold text-slate-800">
              {row.from}
            </div>
            {row.fromEn && (
              <div className=" text-[11.5px] text-slate-500">
                ({row.fromEn})
              </div>
            )}
          </div>
          <div>
            <div className=" text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              To
            </div>
            <div className=" text-[12.5px] font-semibold text-slate-800">
              {row.to}
            </div>
            {row.toEn && (
              <div className=" text-[11.5px] text-slate-500">({row.toEn})</div>
            )}
          </div>
        </div>
      </div>
    </motion.li>
  );
}

/* ============================ DESKTOP ROW ============================ */
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
      className="grid grid-cols-[70px_260px_1fr_220px_220px] items-center gap-5 px-8 py-6  transition-colors hover:bg-[#9e1c32]/[0.025]"
    >
      <div className="text-center  text-[15px] font-semibold text-slate-700">
        {row.sn}
      </div>
      <Portrait name={row.name} img={row.img} className="h-[230px] w-[200px]" />
      <div className="min-w-0">
        <p
          className=" text-[18px] font-semibold leading-snug"
          style={{ color: HEADING }}
        >
          {row.name}
        </p>
        <p
          className="mt-1  text-[11px] font-semibold uppercase tracking-wider"
          style={{ color: RED }}
        >
          {label}
        </p>
      </div>
      <div>
        <div className=" text-[14px] font-semibold text-slate-800">
          {row.from}
        </div>
        {row.fromEn && (
          <div className=" text-[12.5px] font-semibold text-slate-700">
            ({row.fromEn})
          </div>
        )}
      </div>
      <div>
        <div className=" text-[14px] font-semibold text-slate-800">
          {row.to}
        </div>
        {row.toEn && (
          <div className=" text-[12.5px] font-semibold text-slate-700">
            ({row.toEn})
          </div>
        )}
      </div>
    </motion.li>
  );
}

/* ============================ LIST ============================ */
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

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_50px_-40px_rgba(0,0,0,0.3)]"
    >
      {/* TOOLBAR */}
      <div className="flex flex-col gap-4 border-b border-slate-100 px-4 py-5  sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-6">
        <div className="flex items-center gap-2.5 text-[14px] text-slate-600">
          <span className="">Show</span>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setPage(1);
            }}
            className="h-10 min-w-[70px] rounded-md border-2 border-slate-300 bg-slate-100 px-3  text-[14px] font-medium text-slate-800 shadow-sm transition-colors focus:border-[#252659] focus:bg-white focus:outline-none"
          >
            {[5, 10, 25, 50, 100].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          <span className="">entries</span>
        </div>

        <div className="relative w-full sm:max-w-xs">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2  text-[13.5px] text-slate-500">
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
            className="h-10 w-full rounded-md border-2 border-slate-300 bg-white pl-[68px] pr-3  text-[14px] text-slate-700 placeholder:text-slate-400 transition-colors focus:border-[#252659] focus:outline-none"
          />
        </div>
      </div>

      {/* DESKTOP HEADER */}
      <div
        className="hidden grid-cols-[70px_260px_1fr_220px_220px] items-center gap-5 px-8 py-4  text-[12px] font-bold uppercase tracking-wider text-white lg:grid"
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

      {/* TABLET HEADER */}
      <div
        className="hidden grid-cols-[60px_220px_1fr] items-center gap-5 px-6 py-4  text-[12px] font-bold uppercase tracking-wider text-white sm:grid lg:hidden"
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

      {/* MOBILE */}
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
          <li className="rounded-2xl border border-dashed border-slate-300 bg-slate-50/50 p-10 text-center  text-sm text-slate-400">
            No matching entries found.
          </li>
        )}
      </ul>

      {/* TABLET */}
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
            className="grid grid-cols-[60px_220px_1fr] items-start gap-5 px-6 py-6  transition-colors hover:bg-[#9e1c32]/[0.025]"
          >
            <div className="pt-2 text-center  text-[15px] font-semibold text-slate-700">
              {row.sn}
            </div>
            <Portrait
              name={row.name}
              img={row.img}
              className="h-[210px] w-[180px]"
            />
            <div className="min-w-0">
              <p
                className=" text-[17px] font-semibold leading-snug"
                style={{ color: HEADING }}
              >
                {row.name}
              </p>
              <p
                className="mt-1  text-[11px] font-semibold uppercase tracking-wider"
                style={{ color: RED }}
              >
                {label}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <div className=" text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    From
                  </div>
                  <div className=" text-[13px] font-semibold text-slate-800">
                    {row.from}
                  </div>
                  {row.fromEn && (
                    <div className=" text-[12px] text-slate-500">
                      ({row.fromEn})
                    </div>
                  )}
                </div>
                <div>
                  <div className=" text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    To
                  </div>
                  <div className=" text-[13px] font-semibold text-slate-800">
                    {row.to}
                  </div>
                  {row.toEn && (
                    <div className=" text-[12px] text-slate-500">
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
            <p className=" text-sm text-slate-400">
              No matching entries found.
            </p>
          </li>
        )}
      </ul>

      {/* DESKTOP */}
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
            <p className=" text-sm text-slate-400">
              No matching entries found.
            </p>
          </li>
        )}
      </ul>

      {/* PAGINATION */}
      <div className="flex flex-col items-center gap-4 border-t border-slate-100 bg-slate-50/50 px-4 py-5  sm:flex-row sm:justify-between sm:px-7">
        <span className="text-center  text-[12.5px] text-slate-600 sm:text-left sm:text-[13px]">
          Showing{" "}
          <strong className=" font-semibold text-slate-800">
            {filtered.length === 0 ? 0 : start + 1}–
            {Math.min(start + pageSize, filtered.length)}
          </strong>{" "}
          of{" "}
          <strong className=" font-semibold text-slate-800">
            {filtered.length}
          </strong>{" "}
          entries
        </span>

        <div className="flex flex-wrap items-center justify-center gap-1">
          <button
            type="button"
            onClick={() => goTo(1)}
            disabled={current === 1}
            className="hidden h-9 items-center gap-1 rounded-md border border-slate-300 bg-white px-3  text-[12.5px] font-medium text-slate-600 transition-colors hover:border-[#252659] hover:text-[#252659] disabled:opacity-40 sm:flex"
          >
            First
          </button>
          <button
            type="button"
            onClick={() => goTo(current - 1)}
            disabled={current === 1}
            className="flex h-9 items-center gap-1 rounded-md border border-slate-300 bg-white px-3  text-[12.5px] font-medium text-slate-600 transition-colors hover:border-[#252659] hover:text-[#252659] disabled:opacity-40"
          >
            <ChevronLeft size={13} /> Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => goTo(p)}
              className="flex h-9 min-w-9 items-center justify-center rounded-md px-3  text-[13px] font-semibold transition-colors"
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
            className="flex h-9 items-center gap-1 rounded-md border border-slate-300 bg-white px-3  text-[12.5px] font-medium text-slate-600 transition-colors hover:border-[#252659] hover:text-[#252659] disabled:opacity-40"
          >
            Next <ChevronRight size={13} />
          </button>
          <button
            type="button"
            onClick={() => goTo(totalPages)}
            disabled={current === totalPages}
            className="hidden h-9 items-center gap-1 rounded-md border border-slate-300 bg-white px-3  text-[12.5px] font-medium text-slate-600 transition-colors hover:border-[#252659] hover:text-[#252659] disabled:opacity-40 sm:flex"
          >
            Last
          </button>
        </div>
      </div>
    </motion.div>
  );
}
export default function ViceChancellor() {
  const reduce = useReducedMotion();
  const { pathname } = useLocation();
  const isList = pathname.endsWith("/list");
  const isRegistrar = pathname.includes("/registrar");

  const basePath = isRegistrar
    ? "/central-office/offices/registrar"
    : "/central-office/offices/vice-chancellor";
  const listPath = `${basePath}/list`;

  const label = isRegistrar ? "Registrar" : "Vice-Chancellor";
  const data = isRegistrar ? REGISTRAR_LIST : VC_LIST;
  const category = isRegistrar ? "registrar" : "vc";

  return (
    <main className="min-h-screen bg-white font-heading">
      <section className="mx-auto max-w-6xl px-3 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <AnimatePresence mode="wait">
          {!isList ? (
            <motion.div
              key={`profile-${category}`}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="grid gap-8 sm:gap-10 md:grid-cols-[300px_1fr] md:gap-14 lg:grid-cols-[340px_1fr] lg:gap-16"
            >
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="relative">
                  <img
                    src={P(15)}
                    alt="Prof. Dr. Sujan Babu Marahatta"
                    className="h-[380px] w-[300px] rounded-2xl object-cover sm:h-[420px] sm:w-[340px]"
                    style={{ boxShadow: "0 24px 50px -30px rgba(0,0,0,0.45)" }}
                  />
                  <span
                    aria-hidden
                    // className="absolute inset-x-0 bottom-0 h-1.5 rounded-b-2xl bg-accent"
                    // style={{ backgroundColor: RED }}
                  />
                </div>

                <h1
                  className="mt-5  text-xl font-bold leading-tight sm:mt-6 sm:text-2xl lg:text-[1.4rem]"
                  style={{ color: HEADING }}
                >
                  Prof. Dr. Sujan Babu Marahatta
                </h1>

                <p
                  className="mt-1.5    text-sm font-semibold sm:text-base"
                  style={{ color: RED }}
                >
                  Vice-Chancellor
                </p>

                <div className="mt-4 flex flex-col gap-2 sm:mt-5">
                  <a
                    href="mailto:vice-chancellor@purbuniv.edu.np"
                    className="inline-flex items-center gap-2  text-[13px] text-slate-600 transition-colors hover:text-[#9e1c32] sm:text-sm"
                  >
                    <Mail size={14} />
                    vice-chancellor@purbuniv.edu.np
                  </a>
                  <p className="inline-flex items-center gap-2  text-[13px] text-slate-600 sm:text-sm">
                    <Phone size={14} />
                    977-21-590832 (Ext. 801)
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-3 sm:gap-4">
                <Link
                  to="/central-office/offices/vice-chancellor/list"
                  className="group flex items-center justify-between border-accent rounded-2xl border-2 bg-white px-5 py-4 text-left  text-[15px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-25px_rgba(37, 38, 89, 0.5)] sm:px-6 sm:py-5 sm:text-base"
                  //   style={{ borderColor: RED, color: NAVY }}
                >
                  <div>
                    <span className="block ">List of Vice-Chancellor</span>
                    <span className="mt-0.5 block  text-[11.5px] font-normal text-slate-600 sm:text-[12px]">
                      All Vice-Chancellors since 1996
                    </span>
                  </div>
                  <ChevronRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1 border-accent"
                    // style={{ color: RED }}
                  />
                </Link>

                <Link
                  to="/central-office/offices/registrar/list"
                  className="group flex items-center justify-between rounded-2xl border-2 border-accent bg-white px-5 py-4 text-left  text-[15px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-25px_rgba(37, 38, 89, 0.5)] sm:px-6 sm:py-5 sm:text-base"
                  //   style={{ borderColor: RED, color: NAVY }}
                >
                  <div>
                    <span className="block ">List of Registrar</span>
                    <span className="mt-0.5 block  text-[11.5px] font-normal text-slate-600 sm:text-[12px]">
                      All Registrars since 1996
                    </span>
                  </div>
                  <ChevronRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1 border-accent"
                    // style={{ color: RED }}
                  />
                </Link>

                {/* <div className="mt-2 rounded-2xl border border-slate-200 bg-slate-50/60 p-4 sm:mt-3 sm:p-5">
                  <p
                    className=" text-[11px] font-semibold uppercase tracking-[0.18em] text-accent"
                    // style={{ color: RED }}
                  >
                    About
                  </p>
                  <p className="mt-2  text-[13px] leading-relaxed text-slate-600 sm:text-[13.5px]">
                    The Vice-Chancellor is the principal academic and executive
                    officer of Purbanchal University, responsible for the
                    university's academic leadership and administration.
                  </p>
                </div> */}
              </div>
            </motion.div>
          ) : (
            /* ============================ LIST ============================ */
            <motion.div
              key={`list-${category}`}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <div className="mb-6 flex flex-wrap items-end justify-between gap-3 sm:mb-8 sm:gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span
                      className="h-[3px] w-8 rounded-full"
                      style={{ backgroundColor: RED }}
                    />
                    <span
                      className=" text-[10.5px] font-semibold uppercase tracking-[0.22em] sm:text-[11px]"
                      style={{ color: RED }}
                    >
                      Office of the {label}
                    </span>
                  </div>
                  <h2
                    className="mt-2  text-2xl font-bold tracking-tight sm:mt-3 sm:text-3xl lg:text-[2rem]"
                    style={{ color: HEADING }}
                  >
                    List of {label}
                  </h2>
                  <p className="mt-1.5  text-[12.5px] text-slate-500 sm:mt-2 sm:text-[13.5px]">
                    Complete record of{" "}
                    {isRegistrar ? "Registrars" : "Vice-Chancellors"} serving
                    Purbanchal University.
                  </p>
                </div>

                <Link
                  to={basePath}
                  className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2  text-[12.5px] font-medium text-slate-600 transition-colors hover:border-[#9e1c32] hover:text-[#9e1c32] sm:px-4 sm:text-[13px]"
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
