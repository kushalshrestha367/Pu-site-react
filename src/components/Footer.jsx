import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import {
  Briefcase, Phone, Mail, MapPin, Clock,
} from 'lucide-react';

const Facebook = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z"/>
  </svg>
);

const Instagram = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const Youtube = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z"/>
  </svg>
);

const TwitterX = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/>
  </svg>
);

const Linkedin = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.43v6.31ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer id="footer" className="bg-footerbg text-white pt-24">
      <div className="container-x">
        <Reveal className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex gap-3 items-start mb-6">
              <img src="assets/img/logo.png" alt="" className="max-h-[90px]" />
              <h2 className="text-2xl md:text-3xl font-bold leading-snug font-heading">
                Discover Your Potential at <br />Purbanchal University
              </h2>
            </div>
            <div>
              <p className="text-white/60 text-xs uppercase tracking-wider font-semibold mb-3">Follow us</p>
              <div className="flex gap-2">
                {[Facebook, Instagram, Youtube, TwitterX, Linkedin].map((Icon, i) => (
                  <Link
                    key={i}
                    to="#"
                    className="w-9 h-9 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-footerbg transition"
                  >
                    <Icon size={16} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <img
              src="/assets/img/it.png"
              alt="Janak Mani Timsina"
              className="w-[140px] h-[160px] object-cover border-2 border-white/20 mx-auto sm:mx-0"
            />
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-bold">Janak Mani Timsina</h4>
              <p className="text-white/60 text-sm flex items-center justify-center sm:justify-start gap-2 mt-1">
                <Briefcase size={14} /> Information &amp; Liaison Officer
              </p>
              <div className="mt-3 space-y-2 text-sm text-white/70">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <Phone size={14} className="text-white/80" />
                  <span>977-21-590832 (Ext. 8009), 9852020325</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <Mail size={14} className="text-white/80" />
                  <Link to="mailto:info@purbuniv.edu.np" className="hover:underline">info@purbuniv.edu.np</Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <hr className="border-white/20 mt-10" />
      </div>

      <div className="container-x border-b border-white/15">
        <Reveal delay={1} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          <div>
            <h6 className="font-heading font-semibold text-footeraccent mb-5">Contact Info</h6>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48498.45587957811!2d87.28015042167969!3d26.681418799999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef68cc0bb8220b%3A0xa6d5c5bec3773ef4!2z4KSq4KWC4KSw4KWN4KS14KS-4KSe4KWN4KSa4KSyIOCkteCkv-CktuCljeCkteCkteCkv-CkpuCljeCkr-CkvuCksuCkryDgpJXgpLLgpYfgpJwg4KSF4KSrIOCkruClh-CkoeCkv-CkleCksiDgpI_gpK3gpY3gpKHgpI8g4KSH4KSy4KS-4KSH4KShIOCkuOCkvuCkiOCkqOCljeCkuA!5e1!3m2!1sen!2snp!4v1779283119841!5m2!1sen!2snp"
              width="100%" height="136" style={{ border: 0 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="mt-3 space-y-2 text-sm text-white/75">
              <div className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> Sundarharaincha, Gothgaun, Morang, Nepal</div>
              <div className="flex items-start gap-2"><Clock size={16} className="mt-0.5 shrink-0" /> Sun-Fri (10:00 AM - 05:00 PM)</div>
              <div className="flex items-start gap-2"><Phone size={16} className="mt-0.5 shrink-0" /> 977-21-590832 (Ext. 8009)</div>
              <div className="flex items-start gap-2"><Mail size={16} className="mt-0.5 shrink-0" /> info@purbuniv.edu.np</div>
            </div>
          </div>

          <FooterCol title="Purbanchal University" items={[
            'About Us', 'Authorized Bodies', 'Academic Programs', 'Research', 'Downloads', 'Contact Us',
          ]} />
          <FooterCol title="Faculties" items={[
            'Faculty of Arts', 'Faculty of Education', 'Faculty of Engineering',
            'Faculty of Law', 'Faculty of Management',
            'Faculty of Medical & Allied Sciences', 'Faculty of Sciences & Technology',
          ]} />
          <FooterCol title="Quick Links" items={[
            'Office of The Prime Minister & Council of Ministers',
            'Ministry of Education Science & Technologies',
            'University Grants Commission Nepal',
            'Office of The Examination Management (PU Exams)',
          ]} />
        </Reveal>
      </div>

      <div className="py-8">
        <div className="container-x flex flex-col lg:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>Copyright © 2024-2026. <span className="text-white/80">Purbanchal University</span>. All Rights Reserved</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="#!" className="hover:text-white">Privacy Policy</Link>
            <Link to="#!" className="hover:text-white">Terms of Service</Link>
            <span className="text-xs">
              Developed By <Link to="https://saffron.info.np/" target="_blank" rel="noreferrer" className="text-yellow-500">Saffron Infosys</Link>.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <h6 className="font-heading font-semibold text-footeraccent mb-5">{title}</h6>
      <nav className="flex flex-col gap-3">
        {items.map((i) => (
          <Link key={i} to="#!" className="text-white/70 hover:text-white hover:translate-x-1 transition text-sm">
            {i}
          </Link>
        ))}
      </nav>
    </div>
  );
}