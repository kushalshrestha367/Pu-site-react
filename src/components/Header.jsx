import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Topbar from "./Topbar";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  {
    label: "About",
    children: [
      { label: "About PU", to: "/about" },
      { label: "Infrastructure plans", to: "/about/infrastructure-plans" },
      { label: "Organization Structure", to: "/about/organization-structure" },
      {
        label: "Message from Vice-Chancellor",
        to: "/about/member/prof.dr.-sujan-babu-marahatta-260704203914/detail",
      },
      {
        label: "Message from Registrar",
        to: "/about/member/prof.-dr.-panna-thapa-260902114213/detail",
      },
    ],
  },
  {
    label: "Authorised Bodies",
    children: [
      { label: "Senate", to: "/authoriesd-bodies/senate" },
      {
        label: "Executive Council",
        to: "/authoriesd-bodies/executive-council",
      },
      { label: "Academic Council", to: "/authoriesd-bodies/academic-council" },
      { label: "Service Commission", to: "https://pusc.edu.np/" },
      { label: "Resource Council", to: "/authoriesd-bodies/resource-council" },
      {
        label: "Appellate Commission",
        to: "/authoriesd-bodies/appellate-commission",
      },
    ],
  },
  {
    label: "Central Office",
    children: [
      {
        label: "Offices",
        children: [
          {
            label: "Office of the Vice-Chancellor",
            to: "/central-office/offices/vice-chancellor",
          },
          {
            label: "Office of the Registrar",
            to: "/central-office/offices/registrar",
          },
        ],
      },
      { label: "Centres", to: "/central-office/centres" },
      { label: "Divisions", to: "/central-office/divisions" },
    ],
  },
  {
    label: "Faculties",
    children: [
      { label: "Faculty of Arts", to: "/facilities/faculty-of-arts" },
      {
        label: "Faculty of Management",
        to: "/facilities/faculty-of-management",
      },
      {
        label: "Faculty of Science & Technology",
        to: "/facilities/faculty-of-science-and-technology",
      },
      { label: "Faculty of Education", to: "/facilities/faculty-of-education" },
      { label: "Faculty of Law", to: "/facilities/faculty-of-law" },
      {
        label: "Faculty of Medical & Allied Sciences",
        to: "/facilities/faculty-of-medical-and-allied-sciences",
      },
      {
        label: "Faculty of Engineering",
        to: "/facilities/faculty-of-engineering",
      },
    ],
  },
  // { label: "News & Event", to: "/news-and-event" },
  {
    label: "Gallery",
    children: [
      { label: "Image", to: "/gallery/image" },
      { label: "Video", to: "/gallery/video" },
    ],
  },
  // { label: "Notice", to: "/notice" },
  // { label: "Download", to: "/download" },
  { label: "Contact", to: "/contact-us" },
];

const isExternal = (to = "") => /^https?:\/\//.test(to);
const ring =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pu-red";

function DesktopDropdown({ item }) {

  const [closed, setClosed] = useState(false);
  const closeMenu = () => {
    setClosed(true);
    document.activeElement?.blur?.(); // otherwise :focus-within keeps it open
  };

  const panel =
    "absolute z-50 rounded-b border-t-2 border-pu-red bg-white py-2 shadow-xl transition-all";
  const hidden = "invisible opacity-0 pointer-events-none";
  const showOnHover =
    "invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100";
  const subShowOnHover =
    "invisible opacity-0 group-hover/sub:visible group-hover/sub:opacity-100 group-focus-within/sub:visible group-focus-within/sub:opacity-100";

  const itemClass = `flex items-center justify-between whitespace-nowrap px-5 py-2.5 font-nav text-[15px] text-body transition-colors hover:bg-pu-red/[0.06] hover:text-pu-red ${ring}`;

  return (
    <li
      className="relative group"
      onMouseLeave={() => setClosed(false)}
      onFocus={() => setClosed(false)}
      onKeyDown={(e) => e.key === "Escape" && closeMenu()}
    >
      <button
        type="button"
        aria-haspopup="true"
        className={`flex items-center gap-1 py-2 font-nav font-medium text-body transition hover:text-accent ${ring}`}
      >
        <span>{item.label}</span>
        <ChevronDown
          size={14}
          className={`transition-transform ${closed ? "" : "group-hover:rotate-180 group-focus-within:rotate-180"}`}
        />
      </button>

      <ul
        className={`${panel} left-0 top-full min-w-[270px] ${closed ? hidden : showOnHover}`}
      >
        {item.children.map((c) => (
          <li key={c.label} className="relative group/sub">
            {isExternal(c.to) ? (
              <Link
                to={c.to}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className={itemClass}
              >
                {c.label}
              </Link>
            ) : (
              <Link to={c.to || "#"} onClick={closeMenu} className={itemClass}>
                {c.label}
                {c.children && <ChevronDown size={12} className="-rotate-90" />}
              </Link>
            )}

            {c.children && (
              <ul
                className={`${panel} left-full top-0 min-w-[240px] rounded ${closed ? hidden : subShowOnHover}`}
              >
                {c.children.map((sub) => (
                  <li key={sub.label}>
                    <Link to={sub.to} onClick={closeMenu} className={itemClass}>
                      {sub.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </li>
  );
}

function MobileNav({ open, onClose }) {
  const [expanded, setExpanded] = useState({});
  if (!open) return null;

  const link = "block py-1.5 font-nav text-body hover:text-accent";

  return (
    <div className="fixed inset-0 z-[9000] bg-black/70 xl:hidden">
      <div className="absolute inset-4 top-16 overflow-y-auto rounded-md bg-white p-4">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl"
          aria-label="Close menu"
        >
          <X />
        </button>
        <ul className="mt-8 space-y-1">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.children ? (
                <>
                  <button
                    onClick={() =>
                      setExpanded((e) => ({
                        ...e,
                        [item.label]: !e[item.label],
                      }))
                    }
                    aria-expanded={!!expanded[item.label]}
                    className="flex w-full justify-between py-2 font-nav font-medium text-body"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition ${expanded[item.label] ? "rotate-180" : ""}`}
                    />
                  </button>
                  {expanded[item.label] && (
                    <ul className="ml-3 space-y-1 border-l border-gray-200 py-1 pl-3">
                      {item.children.map((c) => (
                        <li key={c.label}>
                          {c.children ? (
                            <>
                              <p className="py-1.5 font-nav font-medium text-heading">
                                {c.label}
                              </p>
                              <ul className="ml-3 border-l border-gray-200 pl-3">
                                {c.children.map((s) => (
                                  <li key={s.label}>
                                    <Link
                                      to={s.to}
                                      onClick={onClose}
                                      className={link}
                                    >
                                      {s.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </>
                          ) : isExternal(c.to) ? (
                            <Link
                              to={c.to}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={link}
                            >
                              {c.label}
                            </Link>
                          ) : (
                            <Link
                              to={c.to || "#"}
                              onClick={onClose}
                              className={link}
                            >
                              {c.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={item.to}
                  onClick={onClose}
                  className="block py-2 font-nav font-medium text-body hover:text-accent"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-[900] transition-all duration-500 ${scrolled ? "bg-white shadow-md" : "bg-white/0"}`}
      >
        <div
          className={`transition-all duration-500 ${scrolled ? "h-0 overflow-hidden opacity-0" : "opacity-100"}`}
        >
          <Topbar />
        </div>

        <div className="bg-white">
          <div className="container-x flex items-center justify-between py-3">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/assets/img/logo.png"
                alt="Purbanchal University logo"
                className="max-h-12"
              />
              <div className="leading-tight">
                {/* a <p>, not <h1>, so each page keeps a single h1 */}
                <p className="font-heading text-lg font-semibold text-heading">
                  Purbanchal University
                </p>
                <small className="block font-bold text-heading">
                  पूर्वाञ्चल विश्वविद्यालय
                </small>
              </div>
            </Link>

            <nav aria-label="Main" className="hidden xl:block">
              <ul className="flex items-center gap-7 font-nav">
                {navItems.map((item) =>
                  item.children ? (
                    <DesktopDropdown key={item.label} item={item} />
                  ) : (
                    <li key={item.label}>
                      <Link
                        to={item.to}
                        className={`py-2 font-nav font-medium text-body transition hover:text-accent ${ring}`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </nav>

            <button
              className="text-heading xl:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={open} onClose={() => setOpen(false)} />
    </>
  );
}
