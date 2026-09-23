import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import PeopleTable from "../components/PeopleTable";
import { VC_LIST } from "../data/officeData";

const RED = "#9e1c32";
const HEADING = "#112344";
const EASE = [0.22, 1, 0.36, 1];

export default function ViceChancellorList() {
  const reduce = useReducedMotion();

  return (
    <main className="min-h-screen bg-white ">
      <section className="mx-auto max-w-7xl px-3 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
                  className="font-serif text-[10.5px] font-semibold uppercase tracking-[0.22em] sm:text-[11px]"
                  style={{ color: RED }}
                >
                  Office of the Vice-Chancellor
                </span>
              </div>
              <h1
                className="mt-2 font-serif text-2xl font-bold tracking-tight sm:mt-3 sm:text-3xl lg:text-[2rem]"
                style={{ color: HEADING }}
              >
                List of Vice-Chancellor
              </h1>
              <p className="mt-1.5 font-serif text-[12.5px] text-slate-500 sm:mt-2 sm:text-[13.5px]">
                Complete record of Vice-Chancellors who have served Purbanchal
                University.
              </p>
            </div>

            <Link
              to="/central-office/offices/vice-chancellor"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 font-serif text-[12.5px] font-medium text-slate-600 transition-colors hover:border-[#9e1c32] hover:text-[#9e1c32] sm:px-4 sm:text-[13px]"
            >
              <ChevronLeft
                size={14}
                className="transition-transform duration-200 group-hover:-translate-x-0.5"
              />
              Back to profile
            </Link>
          </div>

          <PeopleTable data={VC_LIST} label="Vice-Chancellor" />
        </motion.div>
      </section>
    </main>
  );
}
