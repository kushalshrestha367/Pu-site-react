import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];
const dean = {
  name: "Mr. Nabin Bhattarai",
  role: "Dean",
  email: "info@pufost.edu.np",
  image:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=faces&q=80",
  website: "https://pufost.edu.np",
};

const deputyDean = {
  role: "Deputy Dean",
  email: "info@pufost.edu.np",
};

const programs = [
  {
    sn: 1,
    name: "Bachelor of Computer Application (BCA)",
    duration: "4 Years / 8 Semesters",
    type: "Semester",
  },
  {
    sn: 2,
    name: "Bachelor of Dairy Technology",
    duration: "4 Years / 8 Semesters",
    type: "Semester",
  },
  {
    sn: 3,
    name: "Bachelor of Food Technology",
    duration: "4 Years / 8 Semesters",
    type: "Semester",
  },
  {
    sn: 4,
    name: "Bachelor of Information Technology (BIT)",
    duration: "4 Years / 8 Semesters",
    type: "Semester",
  },
  {
    sn: 5,
    name: "Bachelor of Science (Honours) in Agriculture",
    duration: "4 Years / 8 Semesters",
    type: "Semester",
  },
  {
    sn: 6,
    name: "Bachelor of Science in Biotechnology",
    duration: "4 Years / 8 Semesters",
    type: "Semester",
  },
  {
    sn: 7,
    name: "Bachelor of Science in Forestry",
    duration: "4 Years / 8 Semesters",
    type: "Semester",
  },
  {
    sn: 8,
    name: "Bachelor of Technology in Biotechnology",
    duration: "4 Years / 8 Semesters",
    type: "Semester",
  },
  {
    sn: 9,
    name: "Bachelor of Veterinary Science & Animal Husbandry",
    duration: "5 Years / 10 Semesters",
    type: "Semester",
  },
  {
    sn: 10,
    name: "Post Graduate Diploma in Computer Application (PGDCA)",
    duration: "1 Year / 2 Semesters",
    type: "Semester",
  },
  {
    sn: 11,
    name: "Master of Science in Nutrition and Dietetics",
    duration: "2 Years / 4 Semesters",
    type: "Semester",
  },
  {
    sn: 12,
    name: "Master of Computer Application (M.C.A.)",
    duration: "2 Years / 4 Semesters",
    type: "Semester",
  },
  {
    sn: 13,
    name: "Master of Science in Agriculture (Agri-Business Management)",
    duration: "2 Years / 4 Semesters",
    type: "Semester",
  },
  {
    sn: 14,
    name: "Master of Science in Meat Technology",
    duration: "2 Years / 4 Semesters",
    type: "Semester",
  },
  {
    sn: 15,
    name: "Bachelor of Science in Food, Nutrition & Dietetics",
    duration: "4 Years / 8 Semesters",
    type: "Semester",
  },
];

const colleges = [
  {
    sn: 1,
    name: "P.U. School of Science and Technology (PUSAT)",
    address: "Biratnagar, Morang",
    programs: "BCA-60, BIT-60, B. Tech. in AI-48, PGDCA-20, MCA-33, MIT-33",
  },
  {
    sn: 2,
    name: "G.P. Koirala College of Agriculture & Research Centre (GPCAR)",
    address: "Gothgaun, Morang",
    programs: "B. Sc. (Hons.) Ag.-96, B. Sc. Food, Nutrition & Dietetics-33",
  },
  {
    sn: 3,
    name: "P.U. College of Environment and Forestry",
    address: "Gothgaun, Morang",
    programs: "B. Sc. Forestry-48",
  },
  {
    sn: 4,
    name: "Nepal Polytechnic Institute",
    address: "Bharatpur, Chitwan",
    programs: "B. Sc. (Hons.) Ag.-96, B.V.Sc. & A.H.-48",
  },
  {
    sn: 5,
    name: "Gomendra Multiple College",
    address: "Birtamode, Jhapa",
    programs: "BCA-96, M.C.A-33, B. Tech. in AI-48",
  },
  {
    sn: 6,
    name: "Himalayan Whitehouse Int'l College",
    address: "Kathmandu",
    programs: "BIT-96, B. Tech. (Biotech.)-48",
  },
  {
    sn: 7,
    name: "College of Information Technology and Engineering",
    address: "Kathmandu",
    programs: "BCA-80, BIT-40, MIT-33",
  },
  {
    sn: 8,
    name: "Aryan School of Engineering and Management",
    address: "Kathmandu",
    programs: "BCA-48, BIT-96, B. Tech. in AI-48",
  },
  {
    sn: 9,
    name: "Kantipur City College",
    address: "Kathmandu",
    programs: "BCA-80, BIT-48, MCA-40, PGDCA-30, B. Tech. in AI-48",
  },
  {
    sn: 10,
    name: "College of Applied Food & Dairy Technology (CAFODAT)",
    address: "Lalitpur",
    programs:
      "B. Tech. (Food)-48, B. Tech. (Dairy)-33, M. Sc. in Nutrition & Dietetics-33, BIT-48",
  },
  {
    sn: 11,
    name: "Kist College of Information Technology",
    address: "Kathmandu",
    programs: "BIT-48, MIT-33",
  },
  {
    sn: 12,
    name: "Himalayan College of Agricultural Sciences and Technology",
    address: "Kathmandu",
    programs:
      "B. Sc. (Hons.) Ag.-96, B.V.Sc. & A.H.-48, M. Sc. (Meat/Dairy)-20/20, M.Sc. in Agri-Business Mgmt.-30",
  },
  {
    sn: 13,
    name: "SANN International College for Higher Studies",
    address: "Kathmandu",
    programs: "B. Sc. (Biotech.)-40",
  },
  {
    sn: 14,
    name: "Kantipur Valley College",
    address: "Lalitpur",
    programs: "B. Tech. (Biotech.)-48, BIT-48",
  },
  {
    sn: 15,
    name: "Durga Devi Community Development Center",
    address: "Kamal, Jhapa",
    programs: "B. Sc. Forestry-48",
  },
  {
    sn: 16,
    name: "Janakpur Community College",
    address: "Janakpur, Dhanusha",
    programs: "BIT-48, B.Sc.(Hons.) Ag.-48",
  },
  {
    sn: 17,
    name: "Ilam Community Agriculture Campus",
    address: "Ilam",
    programs: "B. Sc. (Hons.) Ag.-48",
  },
  {
    sn: 18,
    name: "Lumbini Adarsha Degree College",
    address: "Kawasoti, Nawalparasi",
    programs: "BIT-48",
  },
  {
    sn: 19,
    name: "Madan Bhandari Memorial Academy",
    address: "Urlabari, Morang",
    programs: "B. Sc. (Hons.) Ag., BIT",
  },
  {
    sn: 20,
    name: "Sushma Koirala Memorial Trust",
    address: "Nepalgunj, Banke",
    programs: "BIT-48",
  },
  {
    sn: 21,
    name: "Lamahi Community Institute of Science & Technology",
    address: "Gadhawa, Dang",
    programs: "BIT-48",
  },
  {
    sn: 22,
    name: "Kuleshwor Awas Campus",
    address: "Kathmandu",
    programs: "BIT-48",
  },
  {
    sn: 23,
    name: "Mangal Prasad Women's College",
    address: "Nepalgunj, Banke",
    programs: "BCA-48",
  },
  {
    sn: 24,
    name: "Lumbini Integrated Academy",
    address: "Tilottama, Rupandehi",
    programs: "B.Sc. Forestry-48",
  },
  {
    sn: 25,
    name: "Sahid Aakash Memorial Campus (SAMC)",
    address: "Hetauda, Makawanpur",
    programs: "BIT-48",
  },
  {
    sn: 26,
    name: "Global College of Social Science and Technology",
    address: "Baneshwor, Kathmandu",
    programs: "B. Tech. in AI-48",
  },
  {
    sn: 27,
    name: "National Institute of Engineering and Technology",
    address: "Kupondole, Lalitpur",
    programs: "B. Tech. in AI-48",
  },
  {
    sn: 28,
    name: "Gateway College of Professional Studies",
    address: "Basundhara, Kathmandu",
    programs: "B. Tech. in AI-48",
  },
  {
    sn: 29,
    name: "Orchid College of Management and Technology",
    address: "Gaushala, Kathmandu",
    programs: "B. Tech. in AI-48, BIT-48",
  },
  {
    sn: 30,
    name: "Central Engineering College",
    address: "Janakpurdham, Dhanusha",
    programs: "BIT-48",
  },
  {
    sn: 31,
    name: "Saraswati Public Campus",
    address: "Dadarbairiya, Morang",
    programs: "BCA-48",
  },
  {
    sn: 32,
    name: "Kasturi College",
    address: "Itahari, Sunsari",
    programs: "BIT-48",
  },
  {
    sn: 33,
    name: "Hetauda Janapriya Campus",
    address: "Hetauda, Makawanpur",
    programs: "B.Sc. (Hons.) Ag.-48",
  },
  {
    sn: 34,
    name: "Kathmandu Don Bosco College",
    address: "Kathmandu",
    programs: "BIT-48",
  },
  {
    sn: 35,
    name: "Acme Engineering College",
    address: "Kathmandu",
    programs: "BIT-48",
  },
  {
    sn: 36,
    name: "Model Purbanchal College",
    address: "Janakpur, Dhanusha",
    programs: "BIT-48",
  },
  {
    sn: 37,
    name: "Kantipur International College",
    address: "Kathmandu",
    programs: "B. Tech. in AI-48",
  },
  {
    sn: 38,
    name: "Khwopa Engineering College",
    address: "Bhaktapur",
    programs: "BIT-48, BCA-48",
  },
  {
    sn: 39,
    name: "Southwestern School of Management and Technology",
    address: "Basundhara, Kathmandu",
    programs: "BIT-48",
  },
  {
    sn: 40,
    name: "Devaki College of Management & Sciences",
    address: "Mirchaiya, Siraha",
    programs: "BCA IT-48",
  },
  {
    sn: 41,
    name: "Birgunj Public College",
    address: "Birgunj, Parsa",
    programs: "BIT-48",
  },
  {
    sn: 42,
    name: "Kathmandu Academy of Tourism and Hospitality",
    address: "Kathmandu",
    programs: "BIT-48",
  },
  {
    sn: 43,
    name: "Asian College of Management & Technology",
    address: "Kathmandu",
    programs: "BIT-48",
  },
  {
    sn: 44,
    name: "Hillside College of Engineering",
    address: "Kathmandu",
    programs: "BIT-48",
  },
  {
    sn: 45,
    name: "Shepherd College",
    address: "Kathmandu",
    programs: "BIT-48",
  },
  {
    sn: 46,
    name: "Kasthamandap College of Management",
    address: "Kalanki, Kathmandu",
    programs: "BIT-48",
  },
];
function MailIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  );
}

function ArrowUpRightIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
    </svg>
  );
}
function DeanBlock({ reduce }) {
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="mb-16 sm:mb-20"
    >
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/50">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="relative md:col-span-4 lg:col-span-3">
            <div className="relative aspect-square h-full w-full md:aspect-auto md:h-full">
              <img
                src={dean.image}
                alt={dean.name}
                className="h-full w-full object-cover object-top"
                draggable={false}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.classList.add("bg-[#252659]");
                }}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-50/50 to-transparent md:hidden" />
            </div>
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-8 md:col-span-8 lg:col-span-9 lg:p-10">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-6 bg-amber-500" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-700">
                {dean.role}
              </span>
            </div>

            <h2 className="font-serif text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">
              {dean.name}
            </h2>

            <p className="mt-3 max-w-lg text-[13.5px] leading-relaxed text-slate-600 sm:text-[14.5px]">
              Leading the Faculty of Science and Technology — advancing
              engineering, agriculture, information technology, and applied
              sciences at Purbanchal University.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={`mailto:${dean.email}`}
                className="inline-flex items-center gap-2 text-[13.5px] font-medium text-slate-700 transition-colors hover:text-[#252659]"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#252659] ring-1 ring-slate-200">
                  <MailIcon className="h-3.5 w-3.5" />
                </span>
                {dean.email}
              </a>
            </div>

            <div className="mt-6">
              <a
                href={dean.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#252659] px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.14em] text-white shadow-md shadow-[#252659]/20 transition-all hover:-translate-y-0.5 hover:bg-[#1a1c4b] hover:shadow-lg hover:shadow-[#252659]/30"
              >
                Visit Website
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col items-start gap-3 rounded-2xl border border-dashed border-slate-200 bg-slate-50/40 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex items-center gap-3">
          <span className="h-px w-6 bg-amber-500" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-700">
            {deputyDean.role}
          </span>
        </div>
        <a
          href={`mailto:${deputyDean.email}`}
          className="inline-flex items-center gap-2 text-[13.5px] font-medium text-slate-700 transition-colors hover:text-[#252659]"
        >
          <MailIcon className="h-3.5 w-3.5 text-[#252659]" />
          {deputyDean.email}
        </a>
      </div>
    </motion.div>
  );
}
export default function FacultyofScienceAndTechnology() {
  const reduce = useReducedMotion();

  const reveal = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.1 },
          transition: { duration: 0.7, delay, ease: EASE },
        };

  return (
    <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.header
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-12 sm:mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#252659]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#252659]">
              Faculty
            </span>
          </div>

          <h1 className="font-serif text-3xl font-bold leading-[1.2] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Faculty of Science &amp; Technology
          </h1>

          <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
            Engineering, agriculture, information technology, and applied
            science programmes with affiliated colleges across Nepal.
          </p>
        </motion.header>

        <DeanBlock reduce={reduce} />
        <div className="mb-16 sm:mb-20">
          <motion.div {...reveal()} className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
              Programs Offered
            </h2>
            <p className="mt-2 text-[13.5px] text-slate-500">
              {programs.length} programmes across undergraduate, graduate, and
              postgraduate levels
            </p>
          </motion.div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {programs.map((p, i) => (
              <motion.div
                key={p.sn}
                {...reveal(Math.min(i * 0.03, 0.3))}
                className="group flex flex-col gap-2 py-4 transition-colors hover:bg-slate-50/60 sm:flex-row sm:items-center sm:gap-6 sm:py-5"
              >
                <span className="font-mono text-[12px] font-medium tabular-nums text-slate-400 sm:w-10 sm:flex-shrink-0">
                  {String(p.sn).padStart(2, "0")}
                </span>

                <h3 className="flex-1 text-[14.5px] font-medium leading-snug text-slate-800 transition-colors group-hover:text-[#252659] sm:text-[15px]">
                  {p.name}
                </h3>

                <div className="flex items-center gap-3 sm:flex-shrink-0">
                  <span className="text-[12.5px] text-slate-500">
                    {p.duration}
                  </span>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10.5px] font-semibold ${
                      p.type === "Yearly"
                        ? "bg-emerald-50 text-emerald-700"
                        : p.type === "Research"
                          ? "bg-purple-50 text-purple-700"
                          : "bg-blue-50 text-blue-700"
                    }`}
                  >
                    {p.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.div {...reveal()} className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
              Affiliated Colleges
            </h2>
            <p className="mt-2 text-[13.5px] text-slate-500">
              {colleges.length} colleges offering Faculty programmes across
              Nepal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
            {colleges.map((c, i) => (
              <motion.div
                key={c.sn}
                {...reveal(Math.min(i * 0.015, 0.4))}
                className="group border-t border-slate-200 py-5"
              >
                <div className="flex items-start gap-3">
                  <span className="font-mono text-[11px] font-medium tabular-nums text-slate-400">
                    {String(c.sn).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[13.5px] font-semibold leading-snug text-slate-800 transition-colors group-hover:text-[#252659]">
                      {c.name}
                    </h3>
                    <p className="mt-1 text-[12px] text-slate-500">
                      {c.address}
                    </p>
                    <p className="mt-1.5 text-[11.5px] font-medium leading-relaxed text-amber-700">
                      {c.programs}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
