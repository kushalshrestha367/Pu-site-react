import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <div className="bg-accent text-white text-sm h-10 flex items-center">
      <div className="container-x w-full flex justify-center md:justify-between">
        <div className="flex items-center gap-4">
          <Link to="mailto:info@purbuniv.edu.np" className="flex items-center gap-1 hover:underline">
            <Mail size={14} /> <span>info@purbuniv.edu.np</span>
          </Link>
          <span className="hidden md:flex items-center gap-1">
            <Phone size={14} /> <span>977-21-590832 (Ext. 8009)</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-5 text-white/70">
          <Link to="/news-and-event" className="hover:text-white">News &amp; Update</Link>
          <Link to="/download" className="hover:text-white">Downloads</Link>
          <Link to="/notice" className="hover:text-white">Notice</Link>
        </div>
      </div>
    </div>
  );
}