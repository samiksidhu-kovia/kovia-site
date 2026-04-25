import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Features', href: '/#functional-website' },
  { label: 'Pricing', href: '/pricing#top' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'FAQs', href: '/#faq' },
];

export default function Navbar({ activePage }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="flex items-center justify-between sm-tablet:justify-start gap-7 px-6 sm-tablet:px-7 md:px-[15%] py-3.5 bg-kovia-dark/90 backdrop-blur-xl border border-white/[0.06] sm-tablet:border-b sm-tablet:border-t-0 sm-tablet:border-x-0 whitespace-nowrap sm-tablet:mx-0">
        <a href="/">
          <img src="https://media.base44.com/images/public/69c6cd82ca7fe2a38b372ad0/365c878d4_base44kovianavlogo1.png" alt="KOVIA" style={{ height: '55px', width: 'auto', objectFit: 'contain' }} />
        </a>

        {/* Desktop links */}
        <div className="hidden sm-tablet:flex items-center gap-[1.438rem] ml-auto">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[0.863rem] transition-colors ${activePage === link.label ? 'text-kovia-gold font-semibold' : 'text-white/90 hover:text-white'}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className="ml-[0.288rem] px-[1.438rem] py-[0.719rem] rounded-full bg-kovia-gold text-white text-[0.863rem] font-bold hover:brightness-110 transition"
          >
            Book A Call
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="sm-tablet:hidden text-white ml-auto"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="sm-tablet:hidden mt-2 rounded-2xl bg-kovia-dark/90 backdrop-blur-xl border border-white/[0.06] p-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-kovia-text-gray hover:text-white transition-colors py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className="mt-1 px-5 py-2.5 rounded-full bg-kovia-gold text-kovia-dark text-sm font-medium text-center"
            onClick={() => setMobileOpen(false)}
          >
            Book A Call
          </a>
        </div>
      )}
    </nav>
  );
}