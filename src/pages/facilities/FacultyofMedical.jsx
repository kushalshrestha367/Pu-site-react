import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  MailIcon,
  ArrowUpRightIcon,
  BookIcon,
  BuildingIcon,
  EyeIcon,
  CloseIcon,
  SearchIcon,
} from "../../components/icons/index";

const EASE = [0.22, 1, 0.36, 1];
const NAVY = "#252659";
const ACCENT = "#252659";

const USE_MOCK = true;

const getMockData = () => ({
  faculty: {
    id: 5,
    slug: "medical",
    title: "Faculty of Medical Sciences",
    short_title: "Faculty of Medical Sciences",
    description:
      "Health sciences, nursing, pharmacy, and public health programmes offered through Purbanchal University's affiliated colleges and teaching hospitals across Nepal.",
  },
  dean: {
    id: 5,
    name: "Prof. Dr. Paricha Upadhaya",
    role: "Dean",
    email: "info@pufomas.edu.np",
    alt_email: null,
    website: "https://pufoe.edu.np",
    image_url:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop&crop=faces&q=80",
    bio: "Leading the Faculty of Medical Sciences — advancing healthcare education, clinical training, and health research at Purbanchal University.",
  },
  deputyDean: {
    id: 5,
    name: "Dr. Shyam Kumar Mallik",
    role: "Deputy Dean",
    email: "info@pufomas.edu.np",
    alt_email: null,
    website: "https://pufoe.edu.np",
    image_url:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&crop=faces&q=80",
    bio: "Supporting clinical education, curriculum development, and quality assurance across the Faculty's expanding healthcare programmes.",
  },
  programs: [
    {
      id: 1,
      name: "Post Basic Bachelor of Nursing Science (PBNS)",
      level: "Bachelor",
      duration: "3 Years",
      system: "Yearly",
    },
    {
      id: 2,
      name: "Bachelor in Pharmacy",
      level: "Bachelor",
      duration: "4 Years/8 Semesters",
      system: "Semester",
    },
    {
      id: 3,
      name: "Bachelor of Public Health (BPH)",
      level: "Bachelor",
      duration: "4 Years/8 Semesters",
      system: "Semester",
    },
    {
      id: 4,
      name: "Bachelor of Science in Medical Laboratory Technology (B.Sc. MLT)",
      level: "Bachelor",
      duration: "4 Years/8 Semesters",
      system: "Semester",
    },
    {
      id: 5,
      name: "Bachelor of Science in Nursing",
      level: "Bachelor",
      duration: "4 Years",
      system: "Yearly",
    },
    {
      id: 6,
      name: "Master of Public Health (MPH)",
      level: "Master",
      duration: "2 Years/4 Semesters",
      system: "Semester",
    },
    {
      id: 7,
      name: "Master in Pharmacy (M. Pharm.)",
      level: "Master",
      duration: "2 Years/4 Semesters",
      system: "Semester",
    },
    {
      id: 8,
      name: "Bachelor of Medicine and Bachelor of Surgery (MBBS)",
      level: "Bachelor",
      duration: "5 Years",
      system: "Yearly",
    },
  ],
  colleges: [
    {
      sn: 1,
      name: "Purbanchal University School of Health Sciences",
      address: "Gothgaun, Morang",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        {
          id: 1,
          faculty_id: 5,
          program: "BSc. Nursing",
          seat: "",
          remark: "-",
        },
        { id: 2, faculty_id: 5, program: "PBNS", seat: "", remark: "-" },
        { id: 3, faculty_id: 5, program: "BPH", seat: "", remark: "-" },
        { id: 4, faculty_id: 5, program: "B. Pharm", seat: "", remark: "-" },
        { id: 5, faculty_id: 5, program: "BSc. MLT", seat: "", remark: "-" },
        { id: 6, faculty_id: 5, program: "M.Pharm", seat: "", remark: "-" },
        { id: 7, faculty_id: 5, program: "MPH", seat: "", remark: "-" },
      ],
    },
    {
      sn: 2,
      name: "Alka Hospital Pvt. Ltd.",
      address: "Jawalakhel, Lalitpur",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        { id: 8, faculty_id: 5, program: "PBNS", seat: "", remark: "-" },
      ],
    },
    {
      sn: 3,
      name: "Asian college for Advance Studies Pvt. Ltd.",
      address: "Satdobato, Lalitpur",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        {
          id: 9,
          faculty_id: 5,
          program: "BSc. Nursing",
          seat: "",
          remark: "-",
        },
        { id: 10, faculty_id: 5, program: "PBNS", seat: "", remark: "-" },
        { id: 11, faculty_id: 5, program: "BPH", seat: "", remark: "-" },
        { id: 12, faculty_id: 5, program: "B. Pharm", seat: "", remark: "-" },
      ],
    },
    {
      sn: 4,
      name: "B & B Medical Institute",
      address: "Gwarko, Lalitpur",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        { id: 13, faculty_id: 5, program: "PBNS", seat: "", remark: "-" },
        {
          id: 14,
          faculty_id: 5,
          program: "BSc. Nursing",
          seat: "",
          remark: "-",
        },
      ],
    },
    {
      sn: 5,
      name: "Bheri Nursing College",
      address: "Nepalgunj, Banke",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        { id: 15, faculty_id: 5, program: "PBNS", seat: "", remark: "-" },
        {
          id: 16,
          faculty_id: 5,
          program: "BSc. Nursing",
          seat: "",
          remark: "-",
        },
      ],
    },
    {
      sn: 6,
      name: "Birat Health College",
      address: "Biratnagar, Morang",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        { id: 17, faculty_id: 5, program: "PBNS", seat: "", remark: "-" },
        {
          id: 18,
          faculty_id: 5,
          program: "BSc. Nursing",
          seat: "",
          remark: "-",
        },
        { id: 19, faculty_id: 5, program: "BPH", seat: "", remark: "-" },
      ],
    },
    {
      sn: 7,
      name: "Chakrabarti Habi Education Academy College of Nursing Science",
      address: "Bhaktapur",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        { id: 20, faculty_id: 5, program: "PBNS", seat: "", remark: "-" },
        {
          id: 21,
          faculty_id: 5,
          program: "BSc. Nursing",
          seat: "",
          remark: "-",
        },
        { id: 22, faculty_id: 5, program: "BPH", seat: "", remark: "-" },
      ],
    },
    {
      sn: 8,
      name: "Charak Academy Pvt. Ltd.",
      address: "Pokhara, Kaski",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        { id: 23, faculty_id: 5, program: "PBNS", seat: "", remark: "-" },
        {
          id: 24,
          faculty_id: 5,
          program: "BSc. Nursing",
          seat: "",
          remark: "-",
        },
      ],
    },
    {
      sn: 9,
      name: "Devdaha College of Science & Technology Pvt. Ltd.",
      address: "Butwal, Rupandehi",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        {
          id: 25,
          faculty_id: 5,
          program: "BSc. Nursing",
          seat: "",
          remark: "-",
        },
      ],
    },
    {
      sn: 10,
      name: "Edenburgh International College",
      address: "Biratnagar, Morang",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        { id: 26, faculty_id: 5, program: "BPH", seat: "", remark: "-" },
      ],
    },
    {
      sn: 11,
      name: "Everest College of Nursing",
      address: "Sinamangal, Kathmandu",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        { id: 27, faculty_id: 5, program: "PBNS", seat: "", remark: "-" },
        {
          id: 28,
          faculty_id: 5,
          program: "BSc. Nursing",
          seat: "",
          remark: "-",
        },
      ],
    },
    {
      sn: 12,
      name: "Hamro School of Nursing Pvt. Ltd.",
      address: "Biratnagar, Morang",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        { id: 29, faculty_id: 5, program: "BSN", seat: "", remark: "-" },
      ],
    },
    {
      sn: 13,
      name: "HOPE International College",
      address: "Satdobato, Lalitpur",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        {
          id: 30,
          faculty_id: 5,
          program: "BSc. Nursing",
          seat: "",
          remark: "-",
        },
        { id: 31, faculty_id: 5, program: "PBNS", seat: "", remark: "-" },
        { id: 32, faculty_id: 5, program: "BPH", seat: "", remark: "-" },
        { id: 33, faculty_id: 5, program: "B. Pharm", seat: "", remark: "-" },
      ],
    },
    {
      sn: 14,
      name: "Innovative College of Health Science Pvt. Ltd.",
      address: "Sifal, Kathmandu",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        { id: 34, faculty_id: 5, program: "PBNS", seat: "", remark: "-" },
      ],
    },
    {
      sn: 15,
      name: "Kantipur Academy of Health Science",
      address: "Tinkune, Kathmandu",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        {
          id: 35,
          faculty_id: 5,
          program: "BSc. Nursing",
          seat: "",
          remark: "-",
        },
        { id: 36, faculty_id: 5, program: "PBNS", seat: "", remark: "-" },
        { id: 37, faculty_id: 5, program: "BPH", seat: "", remark: "-" },
        { id: 38, faculty_id: 5, program: "B.Pharm", seat: "", remark: "-" },
      ],
    },
    {
      sn: 16,
      name: "Kathmandu Model Hospital School of Nursing",
      address: "Swoyambhu, Kathmandu",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        { id: 39, faculty_id: 5, program: "PBNS", seat: "", remark: "-" },
        {
          id: 40,
          faculty_id: 5,
          program: "BSc. Nursing",
          seat: "",
          remark: "-",
        },
      ],
    },
    {
      sn: 17,
      name: "Kathmandu Multiple College",
      address: "Gaushala, Kathmandu",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        { id: 41, faculty_id: 5, program: "BPH", seat: "", remark: "-" },
        { id: 42, faculty_id: 5, program: "B. Pharm", seat: "", remark: "-" },
      ],
    },
    {
      sn: 18,
      name: "Koshi Health & Science Campus",
      address: "Biratnagar, Morang",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        { id: 43, faculty_id: 5, program: "BPH", seat: "", remark: "-" },
        { id: 44, faculty_id: 5, program: "PBNS", seat: "", remark: "-" },
      ],
    },
    {
      sn: 19,
      name: "Krishna Medical & Technical Research Centre Pvt. Ltd.",
      address: "Janakpurdham, Dhanusha",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        { id: 45, faculty_id: 5, program: "PBNS", seat: "", remark: "-" },
        {
          id: 46,
          faculty_id: 5,
          program: "BSc. Nursing",
          seat: "",
          remark: "-",
        },
        { id: 47, faculty_id: 5, program: "B. Pharm.", seat: "", remark: "-" },
        { id: 48, faculty_id: 5, program: "BPH", seat: "", remark: "-" },
      ],
    },
    {
      sn: 20,
      name: "Little Buddha College of Health Science",
      address: "Minbhaban, Kathmandu",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        { id: 49, faculty_id: 5, program: "BPH", seat: "", remark: "-" },
        { id: 50, faculty_id: 5, program: "B. Pharm", seat: "", remark: "-" },
      ],
    },
    {
      sn: 21,
      name: "Mayadevi Technical College",
      address: "Butwal, Rupandehi",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        { id: 51, faculty_id: 5, program: "PBNS", seat: "", remark: "-" },
      ],
    },
    {
      sn: 22,
      name: "N.P.I. Narayani Samudayik Hospital Ltd.",
      address: "Chitwan",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        {
          id: 52,
          faculty_id: 5,
          program: "BSc. Nursing",
          seat: "",
          remark: "-",
        },
        { id: 53, faculty_id: 5, program: "PBNS", seat: "", remark: "-" },
      ],
    },
    {
      sn: 23,
      name: "Nagarik College of Health Sciences",
      address: "Kathmandu",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        { id: 54, faculty_id: 5, program: "PBNS", seat: "", remark: "-" },
        {
          id: 55,
          faculty_id: 5,
          program: "BSc. Nursing",
          seat: "",
          remark: "-",
        },
      ],
    },
    {
      sn: 24,
      name: "National Academy for Medical Science",
      address: "Kathmandu",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        {
          id: 56,
          faculty_id: 5,
          program: "BSc. Nursing",
          seat: "",
          remark: "-",
        },
        { id: 57, faculty_id: 5, program: "BPH", seat: "", remark: "-" },
        { id: 58, faculty_id: 5, program: "B.Pharmacy", seat: 20, remark: "-" },
      ],
    },
    {
      sn: 25,
      name: "Nepal Institute of Health Science",
      address: "Kathmandu",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        {
          id: 59,
          faculty_id: 5,
          program: "BSc. Nursing",
          seat: "",
          remark: "-",
        },
        { id: 60, faculty_id: 5, program: "PBNS", seat: "", remark: "-" },
        { id: 61, faculty_id: 5, program: "BPH", seat: "", remark: "-" },
      ],
    },
    {
      sn: 26,
      name: "Nepal Polytechnic Institute",
      address: "Bharatpur, Chitwan",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        { id: 62, faculty_id: 5, program: "PBNS", seat: "", remark: "-" },
      ],
    },
    {
      sn: 27,
      name: "Norvic College of Health Sciences and Technologies",
      address: "Maharajgunj, Kathmandu",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        { id: 63, faculty_id: 5, program: "PBNS", seat: "", remark: "-" },
        {
          id: 64,
          faculty_id: 5,
          program: "BSc. Nursing",
          seat: "",
          remark: "-",
        },
        { id: 65, faculty_id: 5, program: "B. Pharm.", seat: "", remark: "-" },
        { id: 66, faculty_id: 5, program: "BPH", seat: "", remark: "-" },
      ],
    },
    {
      sn: 28,
      name: "Novel Academy",
      address: "Pokhara, Kaski",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        {
          id: 67,
          faculty_id: 5,
          program: "BSc. Nursing",
          seat: "",
          remark: "-",
        },
        { id: 68, faculty_id: 5, program: "B. Pharm", seat: "", remark: "-" },
      ],
    },
    {
      sn: 29,
      name: "Oasis Medical College Teaching Hospital & Research Center (P) Ltd.",
      address: "Bharatpur, Chitwan",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        {
          id: 69,
          faculty_id: 5,
          program: "BSc. Nursing",
          seat: "",
          remark: "-",
        },
        { id: 70, faculty_id: 5, program: "PBNS", seat: "", remark: "-" },
        { id: 71, faculty_id: 5, program: "BPH", seat: "", remark: "-" },
      ],
    },
    {
      sn: 30,
      name: "Om Health Campus Pvt. Ltd.",
      address: "Chabahil, Kathmandu",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        {
          id: 72,
          faculty_id: 5,
          program: "BSc. Nursing",
          seat: "",
          remark: "-",
        },
        { id: 73, faculty_id: 5, program: "PBNS", seat: "", remark: "-" },
        { id: 74, faculty_id: 5, program: "BPH", seat: "", remark: "-" },
      ],
    },
    {
      sn: 31,
      name: "Sanjeevani College of Medical Science",
      address: "Butwal, Rupandehi",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        {
          id: 75,
          faculty_id: 5,
          program: "BSc. Nursing",
          seat: "",
          remark: "-",
        },
        { id: 76, faculty_id: 5, program: "PBNS", seat: "", remark: "-" },
        { id: 77, faculty_id: 5, program: "BPH", seat: "", remark: "-" },
      ],
    },
    {
      sn: 32,
      name: "SANN Institute of Nursing Pvt. Ltd.",
      address: "Kathmandu",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        {
          id: 78,
          faculty_id: 5,
          program: "BSc. Nursing",
          seat: "",
          remark: "-",
        },
      ],
    },
    {
      sn: 33,
      name: "Saptarishi Multiple College",
      address: "Rajbiraj, Saptari",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        { id: 79, faculty_id: 5, program: "BPH", seat: "", remark: "-" },
      ],
    },
    {
      sn: 34,
      name: "Shree Medical & Technical College",
      address: "Chitwan",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        {
          id: 80,
          faculty_id: 5,
          program: "BSc. Nursing",
          seat: "",
          remark: "-",
        },
        { id: 81, faculty_id: 5, program: "PBNS", seat: "", remark: "-" },
        { id: 82, faculty_id: 5, program: "BPH", seat: "", remark: "-" },
        { id: 83, faculty_id: 5, program: "B. Pharm", seat: "", remark: "-" },
        { id: 84, faculty_id: 5, program: "M.Pharm", seat: "", remark: "-" },
        { id: 85, faculty_id: 5, program: "MPH", seat: "", remark: "-" },
      ],
    },
    {
      sn: 35,
      name: "Sinha Health Foundation",
      address: "Janakpurdham, Dhanusha",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        {
          id: 86,
          faculty_id: 5,
          program: "BSc. Nursing",
          seat: "",
          remark: "-",
        },
        { id: 87, faculty_id: 5, program: "PBNS", seat: "", remark: "-" },
        { id: 88, faculty_id: 5, program: "B. Pharm.", seat: "", remark: "-" },
        { id: 89, faculty_id: 5, program: "BPH", seat: "", remark: "-" },
      ],
    },
    {
      sn: 36,
      name: "Susma Koirala Memorial Nursing Campus",
      address: "Sankhu, Kathmandu",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        {
          id: 90,
          faculty_id: 5,
          program: "BSc. Nursing",
          seat: "",
          remark: "-",
        },
      ],
    },
    {
      sn: 37,
      name: "Unique Medical College & Teaching Hospital Pvt. Ltd.",
      address: "Rajbiraj, Saptari",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        { id: 91, faculty_id: 5, program: "PBNS", seat: "", remark: "-" },
        { id: 92, faculty_id: 5, program: "BPH", seat: "", remark: "-" },
      ],
    },
    {
      sn: 38,
      name: "Valley College of Technical Science",
      address: "Kathmandu",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        { id: 93, faculty_id: 5, program: "BPH", seat: "", remark: "-" },
        { id: 94, faculty_id: 5, program: "B. Pharm", seat: "", remark: "-" },
      ],
    },
    {
      sn: 39,
      name: "Yeti Health Science Academy",
      address: "Kathmandu",
      contact: "",
      website: null,
      chief: "",
      chiefPhone: null,
      programs: [
        {
          id: 95,
          faculty_id: 5,
          program: "BSc. Nursing",
          seat: "",
          remark: "-",
        },
        { id: 96, faculty_id: 5, program: "BPH", seat: "", remark: "-" },
        { id: 97, faculty_id: 5, program: "PBNS", seat: "", remark: "-" },
      ],
    },
  ],
});
function Eyebrow({ children, color = ACCENT }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8" style={{ backgroundColor: color }} />
      <span
        className="text-[11px] font-semibold uppercase tracking-[0.2em]"
        style={{ color }}
      >
        {children}
      </span>
    </div>
  );
}

function TypeBadge({ type }) {
  const isAlt = type === "Yearly" || type === "Research";
  const c = isAlt ? ACCENT : NAVY;
  return (
    <span
      className="inline-flex flex-shrink-0 items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
      style={{ color: c, backgroundColor: `${c}10` }}
    >
      {type}
    </span>
  );
}
// function PersonCard({ person, reduce, delay = 0 }) {
//   if (!person) return null;
//   const emails = [person.email, person.alt_email].filter(Boolean);

//   return (
//     <motion.div
//       initial={reduce ? false : { opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: 0.6, delay, ease: EASE }}
//       className="flex h-full items-start gap-3 rounded-2xl border border-slate-200 bg-white p-3.5 sm:items-center sm:gap-5 sm:p-5"
//     >
//       {/* Photo — always left, top-aligned on mobile */}
//       <div className="w-[88px] flex-shrink-0 self-start sm:w-24 sm:self-center md:w-28 lg:w-32">
//         <img
//           src={person.image_url}
//           alt={person.name}
//           draggable={false}
//           className="aspect-[4/5] w-full rounded-xl object-cover object-top"
//         />
//       </div>
//       <div className="min-w-0 flex-1 text-left">
//         <div className="flex justify-start">
//           <Eyebrow>{person.role}</Eyebrow>
//         </div>

//         <h2
//           className="mt-1.5 font-serif text-[15px] font-bold leading-tight tracking-tight sm:mt-2 sm:text-base md:text-lg lg:text-xl"
//           style={{ color: NAVY }}
//         >
//           {person.name}
//         </h2>

//         {person.bio && (
//           <p className="mt-1.5 text-[11px] leading-relaxed text-slate-600 sm:mt-2 sm:text-[12px] md:text-[12.5px]">
//             {person.bio}
//           </p>
//         )}

//         <div className="mt-2.5 flex flex-col items-start gap-1 sm:mt-3">
//           {emails.map((mail) => (
//             <a
//               key={mail}
//               href={`mailto:${mail}`}
//               className="inline-flex max-w-full items-center gap-1.5 text-[11px] font-medium text-slate-700 transition-colors hover:text-[#9e1c32] sm:gap-2 sm:text-[12px]"
//             >
//               <span
//                 className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full sm:h-6 sm:w-6"
//                 style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}
//               >
//                 <MailIcon className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
//               </span>
//               <span className="truncate">{mail}</span>
//             </a>
//           ))}
//         </div>

//         {person.website && (
//           <a
//             href={person.website}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90 sm:px-3.5 sm:py-2 sm:text-[10.5px]"
//             style={{ backgroundColor: NAVY }}
//           >
//             Visit Website
//             <ArrowUpRightIcon className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
//           </a>
//         )}
//       </div>
//     </motion.div>
//   );
// }
function PersonCard({ person, reduce, delay = 0 }) {
  const emails = [person.email, person.altEmail].filter(Boolean);
  const hasContact = emails.length > 0 || person.website;

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-3.5 sm:p-5"
    >
      {/* Top: photo (left) + text block (right) */}
      <div className="flex gap-3 sm:gap-5">
        <div className="w-24 flex-shrink-0 self-center sm:w-28 md:w-32">
          <img
            src={person.image_url}
            alt={person.name}
            draggable={false}
            className="aspect-[4/5] w-full rounded-xl object-cover object-top"
          />
        </div>

        <div className="min-w-0 flex-1 text-left">
          <div className="flex justify-start">
            <Eyebrow>{person.role}</Eyebrow>
          </div>

          <h2
            className="mt-2 font-serif text-base font-bold leading-tight tracking-tight sm:text-lg md:text-xl"
            style={{ color: NAVY }}
          >
            {person.name}
          </h2>

          {person.bio && (
            <p className="mt-2 text-[12px] leading-relaxed text-slate-600 sm:text-[12.5px] md:text-[13px]">
              {person.bio}
            </p>
          )}

          {/* DESKTOP / TABLET — email + button STACKED vertically */}
          {hasContact && (
            <div className="mt-3 hidden flex-col items-start gap-2 md:flex">
              {emails.map((mail) => (
                <a
                  key={mail}
                  href={`mailto:${mail}`}
                  className="inline-flex max-w-full items-center gap-2 text-[12px] font-medium text-slate-700 transition-colors hover:text-[#9e1c32] sm:text-[12.5px]"
                >
                  <span
                    className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}
                  >
                    <MailIcon className="h-3 w-3" />
                  </span>
                  <span className="truncate">{mail}</span>
                </a>
              ))}

              {person.website && (
                <a
                  href={person.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[10.5px] font-bold uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90 sm:px-4 sm:text-[11px]"
                  style={{ backgroundColor: NAVY }}
                >
                  Visit Website
                  <ArrowUpRightIcon className="h-3 w-3" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* MOBILE ONLY — email + button SIDE BY SIDE at the bottom */}
      {hasContact && (
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-100 pt-4 md:hidden">
          {emails.map((mail) => (
            <a
              key={mail}
              href={`mailto:${mail}`}
              className="inline-flex max-w-full items-center gap-2 text-[11.5px] font-medium text-slate-700 transition-colors hover:text-[#9e1c32]"
            >
              <span
                className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: `${ACCENT}12`, color: ACCENT }}
              >
                <MailIcon className="h-3 w-3" />
              </span>
              <span className="truncate">{mail}</span>
            </a>
          ))}

          {person.website && (
            <a
              href={person.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-[10.5px] font-bold uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: NAVY }}
            >
              Visit Website
              <ArrowUpRightIcon className="h-3 w-3" />
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}


function LeadershipBlock({ dean, deputyDean, reduce }) {
  return (
    <div className="mb-8 grid gap-3 sm:mb-12 sm:gap-5 lg:grid-cols-2">
      <PersonCard person={dean} reduce={reduce} delay={0} />
      {deputyDean && (
        <PersonCard person={deputyDean} reduce={reduce} delay={0.08} />
      )}
    </div>
  );
}
function TabSwitcher({ active, onChange, programCount, collegeCount }) {
  const TABS = [
    {
      id: "programs",
      label: "Programs",
      fullLabel: "Programs Offered",
      count: programCount,
      Icon: BookIcon,
    },
    {
      id: "colleges",
      label: "Colleges",
      fullLabel: "Affiliated Colleges",
      count: collegeCount,
      Icon: BuildingIcon,
    },
  ];
  return (
    <div className="mb-6 flex justify-center sm:mb-8">
      <div className="relative inline-flex w-full max-w-md rounded-full border border-slate-200 bg-slate-50 p-1">
        {TABS.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`relative z-10 flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-2.5 text-[12.5px] font-semibold transition-colors sm:px-6 sm:text-[13.5px] ${isActive ? "text-white" : "text-slate-600 hover:text-slate-900"}`}
            >
              {isActive && (
                <motion.span
                  layoutId="tabPill"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className="absolute inset-0 -z-10 rounded-full"
                  style={{ backgroundColor: NAVY }}
                />
              )}
              <span className="sm:hidden">{tab.label}</span>
              <span className="hidden sm:inline">{tab.fullLabel}</span>
              <span
                className={`inline-flex h-5 min-w-[1.4rem] items-center justify-center rounded-full px-1.5 text-[10.5px] font-bold ${isActive ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"}`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
function ProgramsPanel({ programs, reduce }) {
  return (
    <ul className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      {programs.map((p, i) => (
        <motion.li
          key={p.id}
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.35,
            delay: Math.min(i * 0.02, 0.25),
            ease: EASE,
          }}
          className="flex flex-col gap-2 border-b border-slate-100 px-4 py-4 last:border-b-0 hover:bg-slate-50 sm:flex-row sm:items-center sm:gap-6 sm:px-6"
        >
          <div className="flex flex-1 items-start gap-2.5 sm:items-center sm:gap-0">
            <span className="mt-0.5 flex-shrink-0 font-mono text-[12.5px] font-medium tabular-nums text-slate-400 sm:mt-0 sm:w-8">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="flex-1 text-[13.5px] font-medium leading-snug text-slate-800 sm:text-[15px]">
              {p.name}
            </h3>
          </div>
          <div className="flex items-center justify-between gap-3 pl-7 sm:justify-end sm:pl-0 sm:flex-shrink-0">
            <span className="text-[12px] text-slate-500 sm:text-[12.5px]">
              {p.duration}
            </span>
            <TypeBadge type={p.system || p.type} />
          </div>
        </motion.li>
      ))}
    </ul>
  );
}
function SearchBar({ value, onChange, shown, total }) {
  return (
    <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative w-full sm:max-w-sm">
        <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search college, address or programme"
          className="w-full rounded-full border border-slate-200 bg-white py-2.5 pl-11 pr-10 text-[13.5px] text-slate-800 placeholder:text-slate-400 focus:border-[#252659] focus:outline-none focus:ring-4 focus:ring-[#252659]/10"
        />
        {value && (
          <button
            onClick={() => onChange("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700"
          >
            <CloseIcon className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
      <p className="text-[12px] text-slate-500 sm:text-[12.5px]">
        Showing <span className="font-semibold text-slate-700">{shown}</span> of{" "}
        {total} colleges
      </p>
    </div>
  );
}

function SeatChips({ items }) {
  const list = Array.isArray(items) ? items : [];
  return (
    <div className="flex flex-wrap gap-1.5">
      {list.map((p, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] text-slate-700 sm:text-[11.5px]"
        >
          {p.program}
          {p.seat !== "" && p.seat != null && (
            <span className="font-bold tabular-nums" style={{ color: ACCENT }}>
              {p.seat}
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
function CollegesPanel({ reduce, list, onView, query, onClear }) {
  if (list.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 px-6 py-14 text-center">
        <p className="font-serif text-lg font-bold" style={{ color: NAVY }}>
          No colleges found
        </p>
        <p className="mt-1 text-sm text-slate-500">
          Nothing matches “{query}”.
        </p>
        <button
          onClick={onClear}
          className="mt-5 rounded-full px-5 py-2 text-[12px] font-bold uppercase tracking-wider text-white"
          style={{ backgroundColor: NAVY }}
        >
          Clear search
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2 lg:hidden">
        {list.map((c, i) => (
          <motion.button
            key={c.sn}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              delay: Math.min(i * 0.01, 0.2),
              ease: EASE,
            }}
            onClick={() => onView(c)}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-3.5 text-left transition-colors hover:border-slate-300 hover:bg-slate-50 sm:p-5"
          >
            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 flex-shrink-0 text-[11px] font-semibold tabular-nums text-slate-400">
                {String(c.sn).padStart(2, "0")}
              </span>
              <h3
                className="flex-1 font-serif text-[14.5px] font-bold leading-snug sm:text-[1.05rem]"
                style={{ color: NAVY }}
              >
                {c.name}
              </h3>
            </div>
            <p className="mt-1.5 text-[11.5px] text-slate-500 sm:text-[12.5px]">
              {c.address}
            </p>
            <div className="mt-2.5 sm:mt-3">
              <SeatChips items={c.programs} />
            </div>
            <span
              className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider sm:mt-4 sm:text-[11.5px]"
              style={{ color: ACCENT }}
            >
              View details{" "}
              <ArrowUpRightIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            </span>
          </motion.button>
        ))}
      </div>
      <div className="hidden overflow-hidden rounded-2xl border border-slate-200 lg:block">
        <table className="w-full border-collapse">
          <thead>
            <tr style={{ backgroundColor: NAVY }} className="text-white">
              {[
                "SN",
                "College",
                "Address",
                "Contact",
                "Approved Programs / Quotas",
              ].map((h) => (
                <th
                  key={h}
                  className="px-4 py-3.5 text-left text-[11.5px] font-bold uppercase tracking-wider"
                >
                  {h}
                </th>
              ))}
              <th className="w-16 px-4 py-3.5 text-center text-[11.5px] font-bold uppercase tracking-wider">
                Detail
              </th>
            </tr>
          </thead>
          <tbody>
            {list.map((c) => (
              <tr
                key={c.sn}
                onClick={() => onView(c)}
                className="cursor-pointer border-b border-slate-100 bg-white transition-colors last:border-b-0 hover:bg-slate-50"
              >
                <td className="px-4 py-4 align-top text-[12.5px] font-medium tabular-nums text-slate-400">
                  {String(c.sn).padStart(2, "0")}
                </td>
                <td className="px-4 py-4 align-top">
                  <span
                    className="text-[13.5px] font-semibold leading-snug"
                    style={{ color: NAVY }}
                  >
                    {c.name}
                  </span>
                </td>
                <td className="px-4 py-4 align-top text-[12.5px] leading-relaxed text-slate-600">
                  {c.address}
                </td>
                <td className="px-4 py-4 align-top text-[12.5px] leading-relaxed text-slate-600">
                  {c.contact || "—"}
                </td>
                <td className="px-4 py-4 align-top">
                  <SeatChips items={c.programs} />
                </td>
                <td className="px-4 py-4 text-center align-top">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onView(c);
                    }}
                    aria-label={`View details of ${c.name}`}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-[#9e1c32]/10"
                    style={{ color: ACCENT }}
                  >
                    <EyeIcon className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
function DetailRow({ label, value }) {
  return (
    <div className="flex flex-col gap-0.5 py-3 sm:flex-row sm:items-baseline sm:gap-6">
      <span className="w-32 flex-shrink-0 text-[11px] font-bold uppercase tracking-wider text-slate-400">
        {label}
      </span>
      <div className="flex-1 text-[13px] text-slate-700 sm:text-[13.5px]">
        {value}
      </div>
    </div>
  );
}

function CollegeDetailModal({ college, onClose, reduce }) {
  useEffect(() => {
    if (!college) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [college, onClose]);

  return (
    <AnimatePresence>
      {college && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-900/60 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[92vh] w-full overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:my-6 sm:max-h-[88vh] sm:max-w-2xl sm:rounded-3xl"
          >
            <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-slate-300 sm:hidden" />
            <div className="flex items-start justify-between gap-3 px-4 pb-3 pt-4 sm:gap-4 sm:px-8 sm:pb-5 sm:pt-7">
              <div>
                <Eyebrow>College</Eyebrow>
                <h3
                  className="mt-2.5 font-serif text-base font-bold leading-tight sm:mt-3 sm:text-2xl"
                  style={{ color: NAVY }}
                >
                  {college.name}
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 sm:h-9 sm:w-9"
              >
                <CloseIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>

            <div className="px-4 pb-6 sm:px-8 sm:pb-8">
              <div className="divide-y divide-slate-100 border-y border-slate-100">
                {college.website && (
                  <DetailRow
                    label="Official site"
                    value={
                      <a
                        href={college.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium break-all hover:underline"
                        style={{ color: ACCENT }}
                      >
                        {college.website.replace(/^https?:\/\//, "")}
                      </a>
                    }
                  />
                )}
                {college.contact && (
                  <DetailRow label="Contact" value={college.contact} />
                )}
                {college.chief && (
                  <DetailRow
                    label="Campus chief"
                    value={
                      <>
                        {college.chief}
                        {college.chiefPhone && (
                          <span className="text-slate-500">
                            , {college.chiefPhone}
                          </span>
                        )}
                      </>
                    }
                  />
                )}
                <DetailRow label="Address" value={college.address} />
              </div>

              <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 sm:mt-6">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr
                      style={{ backgroundColor: NAVY }}
                      className="text-white"
                    >
                      <th className="px-3 py-2 text-[10.5px] font-bold uppercase tracking-wider sm:px-4 sm:py-2.5 sm:text-[11.5px]">
                        Program
                      </th>
                      <th className="px-3 py-2 text-center text-[10.5px] font-bold uppercase tracking-wider sm:px-4 sm:py-2.5 sm:text-[11.5px]">
                        Seats
                      </th>
                      <th className="hidden px-3 py-2 text-center text-[10.5px] font-bold uppercase tracking-wider sm:table-cell sm:px-4 sm:py-2.5 sm:text-[11.5px]">
                        Remark
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {college.programs.map((p, i) => (
                      <tr
                        key={i}
                        className="border-b border-slate-100 last:border-b-0"
                      >
                        <td className="px-3 py-2 text-[12px] font-medium text-slate-800 sm:px-4 sm:py-2.5 sm:text-[13px]">
                          {p.program}
                        </td>
                        <td
                          className="px-3 py-2 text-center text-[12px] font-semibold tabular-nums sm:px-4 sm:py-2.5 sm:text-[13px]"
                          style={{ color: ACCENT }}
                        >
                          {p.seat || "—"}
                        </td>
                        <td className="hidden px-3 py-2 text-center text-[12px] text-slate-500 sm:table-cell sm:px-4 sm:py-2.5 sm:text-[13px]">
                          {p.remark || "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default function FacultyOfMedical() {
  const reduce = useReducedMotion();
  const [activeTab, setActiveTab] = useState("programs");
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [query, setQuery] = useState("");

  const data = USE_MOCK ? getMockData() : null;

  const closeModal = useCallback(() => setSelectedCollege(null), []);

  const faculty = data?.faculty;
  const dean = data?.dean;
  const deputyDean = data?.deputyDean;
  const programs = data?.programs ?? [];
  const colleges = data?.colleges ?? [];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return colleges;
    return colleges.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.address.toLowerCase().includes(q) ||
        c.programs.some((p) => p.program.toLowerCase().includes(q)),
    );
  }, [query, colleges]);

  if (!faculty) return null;

  return (
    <section className="w-full bg-white py-10 selection:bg-[#252659] selection:text-white sm:py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-8 sm:mb-14"
        >
          <Eyebrow>Faculty</Eyebrow>
          <h1
            className="mt-3 font-serif text-[1.75rem] font-bold leading-[1.1] tracking-tight sm:mt-4 sm:text-5xl lg:text-6xl"
            style={{ color: NAVY }}
          >
            {faculty.title}
          </h1>
          <p className="mt-3 max-w-2xl text-[13.5px] leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
            {faculty.description}
          </p>
        </motion.header>

        <LeadershipBlock dean={dean} deputyDean={deputyDean} reduce={reduce} />

        <TabSwitcher
          active={activeTab}
          onChange={(id) => {
            setActiveTab(id);
            setQuery("");
            setSelectedCollege(null);
          }}
          programCount={programs.length}
          collegeCount={colleges.length}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            {activeTab === "programs" ? (
              <ProgramsPanel programs={programs} reduce={reduce} />
            ) : (
              <>
                <SearchBar
                  value={query}
                  onChange={setQuery}
                  shown={filtered.length}
                  total={colleges.length}
                />
                <CollegesPanel
                  reduce={reduce}
                  list={filtered}
                  onView={setSelectedCollege}
                  query={query}
                  onClear={() => setQuery("")}
                />
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <CollegeDetailModal
        college={selectedCollege}
        onClose={closeModal}
        reduce={reduce}
      />
    </section>
  );
}
