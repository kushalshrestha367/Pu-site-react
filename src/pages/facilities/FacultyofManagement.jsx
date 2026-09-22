import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

/* ------------------------------------------------------------------
   Data
------------------------------------------------------------------ */
const dean = {
  name: "Prof. Dr. Uttam Kumar Regmi",
  role: "Dean",
  email: "info@pufom.edu.np",
  altEmail: "deanmgmtpu@gmail.com",
  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=faces&q=80",
  website: "https://pufom.edu.np",
};

const deputyDean = {
  role: "Deputy Dean",
  email: "info@pufom.edu.np",
};

const programs = [
  { sn: 1, name: "Bachelor of Business Administration (BBA)", duration: "4 Years / 8 Semesters", type: "Semester" },
  { sn: 2, name: "Bachelor of Business Studies (BBS)", duration: "4 Years", type: "Yearly" },
  { sn: 3, name: "Bachelor of Fashion Design Management (BFDM)", duration: "4 Years / 8 Semesters", type: "Semester" },
  { sn: 4, name: "Bachelor of Hospitality & Catering Management (BHCM)", duration: "4 Years / 8 Semesters", type: "Semester" },
  { sn: 5, name: "Bachelor of Travel and Tourism Studies (BTTS)", duration: "4 Years / 8 Semesters", type: "Semester" },
  { sn: 6, name: "Bachelor of Hotel Management (BHM)", duration: "4 Years / 8 Semesters", type: "Semester" },
  { sn: 7, name: "Executive Master of Business Administration", duration: "2 Years / 4 Semesters", type: "Semester" },
  { sn: 8, name: "Master of Business Administration (MBA)", duration: "2 Years / 4 Semesters", type: "Semester" },
  { sn: 9, name: "Master of Hotel And Hospitality Management (MHHM)", duration: "2 Years / 4 Semesters", type: "Semester" },
  { sn: 10, name: "Master of Public Administration (MPA)", duration: "2 Years / 4 Semesters", type: "Semester" },
  { sn: 11, name: "Master of Tourism Studies (MTS)", duration: "2 Years / 4 Semesters", type: "Semester" },
  { sn: 12, name: "M.Phil. In Management", duration: "1.5 Years / 3 Semesters", type: "Semester" },
  { sn: 13, name: "Ph.D. In Management", duration: "—", type: "Research" },
];

const colleges = [
  { sn: 1, name: "P. U. School of Management (PUSOM)", address: "Biratnagar, Morang", programs: "BBA-105, MBA (Spring/Fall)-33/33, M.Phil.-16, Ph.D." },
  { sn: 2, name: "Karfok Bidya Mandir Multiple Campus", address: "Suryodaya, Ilam", programs: "BBS-60, BBA-48" },
  { sn: 3, name: "Gomendra Multiple College", address: "Birtamode, Jhapa", programs: "BBA-96, BBS-60, MBA (Fall)-33" },
  { sn: 4, name: "South Asian School of Tourism & Hotel Management", address: "Biratnagar, Morang", programs: "BBA-144, BHM-144, MBA (Fall)-33, MHHM (Fall)-33" },
  { sn: 5, name: "Zenith International College", address: "Biratnagar, Morang", programs: "BBA-144, MBA (Spring/Fall)-33/33" },
  { sn: 6, name: "Edenburgh International College", address: "Biratnagar, Morang", programs: "BBA-96" },
  { sn: 7, name: "Public Campus", address: "Dhanibanigaun, Morang", programs: "BBS-180" },
  { sn: 8, name: "Saraswati Public Campus", address: "Dadarbairiya, Morang", programs: "BBS-60" },
  { sn: 9, name: "Harinagara Multiple College", address: "Harinagar, Sunsari", programs: "BBS-60" },
  { sn: 10, name: "Dharan College of Management", address: "Dharan, Sunsari", programs: "BBA-48, MBA (Fall)-33" },
  { sn: 11, name: "National Multiple College", address: "Dharan, Sunsari", programs: "BBS-60" },
  { sn: 12, name: "Kasturi College", address: "Itahari, Sunsari", programs: "BBA-96" },
  { sn: 13, name: "Kshitiz Educational Foundation", address: "Rajbiraj, Saptari", programs: "BBA-96" },
  { sn: 14, name: "Caliber International College", address: "Rajbiraj, Saptari", programs: "BBA-48" },
  { sn: 15, name: "Saptarishi Multiple College", address: "Rajbiraj, Saptari", programs: "BBA-96, MBA (Fall)-33" },
  { sn: 16, name: "Annapurna Multiple Campus", address: "Kanchanrup, Saptari", programs: "BBS-300" },
  { sn: 17, name: "Sungava Multiple College", address: "Kanchanrup, Saptari", programs: "BBS-120" },
  { sn: 18, name: "Mother Memorial College", address: "Phattepur, Saptari", programs: "BBS-60" },
  { sn: 19, name: "Devaki College of Management & Sciences", address: "Mirchaiya, Siraha", programs: "BBA-96" },
  { sn: 20, name: "Royal Softech College", address: "Lahan, Siraha", programs: "BBS-240" },
  { sn: 21, name: "Janaki College of Management Pvt. Ltd.", address: "Janakpur, Dhanusha", programs: "BBA-144" },
  { sn: 22, name: "Model Purbanchal College", address: "Janakpur, Dhanusha", programs: "BBA-144, MBA (Spring)-33" },
  { sn: 23, name: "Central Management College", address: "Janakpur, Dhanusha", programs: "BBA-96, MBA (Spring)-33" },
  { sn: 24, name: "Birgunj Public College", address: "Birgunj, Parsa", programs: "BBA-144, MBA (Spring/Fall)-33/33" },
  { sn: 25, name: "Presidency College of Management Sciences", address: "Bharatpur, Chitwan", programs: "BBA-144, MBA (Spring/Fall)-33/33" },
  { sn: 26, name: "Balkumari Campus", address: "Narayangarh, Chitwan", programs: "BBA-96" },
  { sn: 27, name: "Lumbini Adarsh Degree College", address: "Kawasoti, Nawalparasi", programs: "BBS-120, BBA-48" },
  { sn: 28, name: "Shreenagar Integrated College", address: "Kapilbastu", programs: "BBA-96" },
  { sn: 29, name: "Mangal Prasad Women's College", address: "Nepalgunj, Banke", programs: "BBS-60" },
  { sn: 30, name: "Tribhuvan Campus", address: "Manechauka, Tanahu", programs: "BBS-60" },
  { sn: 31, name: "Novel Academy", address: "Pokhara, Kaski", programs: "BBA-48, MBA (Spring/Fall)-33" },
  { sn: 32, name: "Aryan College of Management", address: "Kathmandu", programs: "BBA-48" },
  { sn: 33, name: "Asian College of Management & Technology", address: "Kathmandu", programs: "BBA-96, MBA (Fall/Spring)-33/33" },
  { sn: 34, name: "College of Information Technology and Engineering", address: "Kathmandu", programs: "BBA-40" },
  { sn: 35, name: "Gateway College of Professional Studies", address: "Kathmandu", programs: "BHM-96, MHHM-33" },
  { sn: 36, name: "D.A.V. Business School", address: "Kathmandu", programs: "MBA (Spring/Fall)-33/33" },
  { sn: 37, name: "Himalayan Whitehouse Int'l College", address: "Kathmandu", programs: "BBA-144, BHM-144, MBA (Spring/Fall)-33/33, EMBA-30" },
  { sn: 38, name: "Kantipur City College", address: "Kathmandu", programs: "BBA-80" },
  { sn: 39, name: "Kathmandu Don Bosco College", address: "Kathmandu", programs: "BBA-144, MBA (Spring/Fall)-33/33, EMBA (Spring/Fall)-30/30" },
  { sn: 40, name: "Kantipur International College", address: "Kathmandu", programs: "BBA-96, BHM-192, BHCM-192, MHHM-33, MBA (Fall/Spring)-33/33" },
  { sn: 41, name: "Kantipur Valley College", address: "Kumaripati, Lalitpur", programs: "BBA-96, MBA (Fall/Spring)-33/33, EMBA (Fall/Spring)-30/30" },
  { sn: 42, name: "Kasthamandap School of Public Affair Management", address: "Kathmandu", programs: "MPA (Spring/Fall)-30/30" },
  { sn: 43, name: "Kasthamandap College of Management", address: "Kathmandu", programs: "BBA-144, MBA (Fall/Spring)-33/33" },
  { sn: 44, name: "Kathmandu Academy of Tourism and Hospitality", address: "Kathmandu", programs: "BTTS-40, MTS-30" },
  { sn: 45, name: "MAN, Management Development Campus", address: "Kathmandu", programs: "EMBA-30" },
  { sn: 46, name: "Morgan Engineering and Management College", address: "Kathmandu", programs: "BBA-48, BHM-48, MBA (Fall)-33" },
  { sn: 47, name: "Namuna College of Fashion Technology", address: "Kathmandu", programs: "BFDM-96" },
  { sn: 48, name: "SANN International College for Higher Studies", address: "Kathmandu", programs: "BBA-144, MBA (Fall)-33" },
  { sn: 49, name: "Sagarmatha Multiple College", address: "Kathmandu", programs: "BBA-96, MBA (Fall)-33" },
  { sn: 50, name: "Orchid College of Management and Technology", address: "Kathmandu", programs: "BBA-96, MBA (Fall/Spring)-33/33" },
  { sn: 51, name: "Southwestern School of Management and Technology", address: "Kathmandu", programs: "BBA-192, BHM-96, MBA (Fall)-33" },
  { sn: 52, name: "Bageswori College of Management", address: "Kamalbinayak, Bhaktapur", programs: "BBA-48" },
  { sn: 53, name: "Sushma Koirala Memorial Trust", address: "Nepalgunj, Banke", programs: "BBA-48" },
  { sn: 54, name: "Sushma Koirala Memorial Trust", address: "Sankhu, Kathmandu", programs: "BBA-48" },
  { sn: 55, name: "Mega Valley College", address: "Lalitpur", programs: "BBA-48" },
  { sn: 56, name: "Sahid Aakash Memorial Campus", address: "Hetauda, Makawanpur", programs: "BBA-48" },
  { sn: 57, name: "Lamahi Samudayik Bigyantatha Prabidhi Sansthan", address: "Lamahi, Dang", programs: "BBA-48" },
  { sn: 58, name: "Himalayan Kiran Public Campus", address: "Khandabari, Sankhuwasabha", programs: "BBS-60" },
  { sn: 59, name: "Arun Multiple Campus", address: "Arun-3, Bhojpur", programs: "BBS-60" },
  { sn: 60, name: "Amardaha Campus", address: "Sunbarsi-2, Amardaha, Morang", programs: "BBS-60" },
  { sn: 61, name: "St. Paul's College Sunsary Pvt. Ltd.", address: "Duhabi-3, Sunsary", programs: "BBS-60" },
  { sn: 62, name: "Nobel Multiple College Bardibas", address: "Bardibas-14, Mahottari", programs: "BBA-48" },
  { sn: 63, name: "Lions International College Pvt. Ltd.", address: "Hetauda, Makawanpur", programs: "BBA-48" },
  { sn: 64, name: "Sacred Heart Academy", address: "Itahari, Sunsari", programs: "BBA-48" },
  { sn: 65, name: "Libju Community Campus", address: "Manebhanjyang, Okhaldhunga", programs: "BBS-60" },
  { sn: 66, name: "Gyan Deep Academy", address: "Tulsipur, Dang", programs: "BBA-48" },
];

/* ------------------------------------------------------------------
   Small icon helpers
------------------------------------------------------------------ */
function MailIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  );
}

function ArrowUpRightIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
    </svg>
  );
}

/* ------------------------------------------------------------------
   Dean Block
------------------------------------------------------------------ */
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
          {/* Photo */}
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

          {/* Info */}
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
              Leading the Faculty of Management — advancing business
              education, research, and professional development at Purbanchal
              University.
            </p>

            {/* Contact links */}
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

              <a
                href={`mailto:${dean.altEmail}`}
                className="inline-flex items-center gap-2 text-[13.5px] font-medium text-slate-700 transition-colors hover:text-[#252659]"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#252659] ring-1 ring-slate-200">
                  <MailIcon className="h-3.5 w-3.5" />
                </span>
                {dean.altEmail}
              </a>
            </div>

            {/* Visit Website Button */}
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

      {/* Deputy Dean — inline card */}
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

/* ------------------------------------------------------------------
   Main Component
------------------------------------------------------------------ */
export default function FacultyofManagement() {
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
        {/* HERO */}
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
            Faculty of Management
          </h1>

          <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
            Business, hospitality, and public administration programmes with
            affiliated colleges across Nepal.
          </p>
        </motion.header>

        {/* DEAN BLOCK */}
        <DeanBlock reduce={reduce} />

        {/* PROGRAMS */}
        <div className="mb-16 sm:mb-20">
          <motion.div {...reveal()} className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-slate-900 sm:text-3xl">
              Programs Offered
            </h2>
            <p className="mt-2 text-[13.5px] text-slate-500">
              {programs.length} programmes across undergraduate, graduate, and
              research levels
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

        {/* COLLEGES */}
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