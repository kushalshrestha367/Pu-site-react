import { useEffect, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Topbar from './Topbar';   // <-- ADD THIS

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'About us', href: '#about' },
  {
    label: 'Authorised Body', children: [
      { label: 'Senate', href: '#!' },
      { label: 'Excutive Council', href: '#!' },
      { label: 'Service Council', href: '#!' },
      { label: 'Resource Council', href: '#!' },
      { label: 'Appellate Commission', href: '#!' },
    ],
  },
  {
    label: 'Central Office', children: [
      {
        label: 'Offices', children: [
          { label: 'Office of the Vice-Chancellor', href: '#' },
          { label: 'Office of the Registrar', href: '#' },
        ],
      },
      { label: 'Centres', href: '#' },
      { label: 'Divisions', href: '#' },
    ],
  },
  {
    label: 'Faculties', children: [
      { label: 'Faculty of Arts', href: '#!' },
      { label: 'Faculty of Management', href: '#!' },
      { label: 'Faculty of Science & Technology', href: '#!' },
      { label: 'Faculty of Education', href: '#!' },
      { label: 'Faculty of Law', href: '#!' },
      { label: 'Faculty of Medical & Allied Sciences', href: '#!' },
      { label: 'Faculty of Engineering', href: '#!' },
    ],
  },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

function DesktopDropdown({ item }) {
  return (
    <li className="relative group">
      <a href="#" className="flex items-center gap-1 py-2 font-nav font-medium text-body hover:text-accent transition">
        <span>{item.label}</span>
        <ChevronDown size={14} />
      </a>
      <ul className="absolute left-3 top-full min-w-[200px] bg-white shadow-xl rounded py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-full transition-all z-50">
        {item.children.map((c) => (
          <li key={c.label} className="relative group/sub">
            <a
              href={c.href || '#'}
              className="flex items-center justify-between px-5 py-2 text-body hover:text-accent font-nav"
            >
              {c.label}
              {c.children && <ChevronDown size={12} className="-rotate-90" />}
            </a>
            {c.children && (
              <ul className="absolute right-full top-0 min-w-[220px] bg-white shadow-xl rounded py-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition">
                {c.children.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} className="block px-5 py-2 text-body hover:text-accent font-nav">{s.label}</a>
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
  return (
    <div className="fixed inset-0 z-[9000] bg-black/70 xl:hidden">
      <div className="absolute inset-4 top-16 bg-white rounded-md p-4 overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl"
          aria-label="Close"
        ><X /></button>
        <ul className="mt-8 space-y-1">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.children ? (
                <>
                  <button
                    onClick={() => setExpanded((e) => ({ ...e, [item.label]: !e[item.label] }))}
                    className="w-full flex justify-between py-2 font-nav font-medium text-body"
                  >
                    {item.label} <ChevronDown size={16} className={`${expanded[item.label] ? 'rotate-180' : ''} transition`} />
                  </button>
                  {expanded[item.label] && (
                    <ul className="ml-3 border-l border-gray-200 pl-3 py-1 space-y-1">
                      {item.children.map((c) => (
                        <li key={c.label}>
                          <a href={c.href || '#'} className="block py-1.5 text-body hover:text-accent font-nav">{c.label}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a href={item.href} onClick={onClose} className="block py-2 font-nav font-medium text-body hover:text-accent">
                  {item.label}
                </a>
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
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[900] transition-all duration-500 ${scrolled ? 'bg-white shadow-md' : 'bg-white/0'}`}
      >
        <div className={`transition-all duration-500 ${scrolled ? 'h-0 overflow-hidden opacity-0' : 'opacity-100'}`}>
          <Topbar />
        </div>

        <div className="bg-white">
          <div className="container-x flex items-center justify-between py-3">
            <a href="#" className="flex items-center gap-2">
              <img src="assets/img/logo.png" alt="PU Logo" className="max-h-12" />
              <div className="leading-tight">
                <h1 className="text-lg font-semibold text-heading font-heading">Purbanchal University</h1>
                <small className="block font-bold text-heading">पूर्वाञ्चल विश्वविद्यालय</small>
              </div>
            </a>

            <nav className="hidden xl:block">
              <ul className="flex items-center gap-7 font-nav">
                {navItems.map((item) =>
                  item.children ? (
                    <DesktopDropdown key={item.label} item={item} />
                  ) : (
                    <li key={item.label}>
                      <a href={item.href} className="py-2 font-nav font-medium text-body hover:text-accent transition">
                        {item.label}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </nav>

            <button
              className="xl:hidden text-heading"
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