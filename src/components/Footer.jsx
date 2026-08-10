import React from 'react';
import Logo from './Logo';
import { Phone, Mail, MapPin, Shield, CheckCircle } from 'lucide-react';

const Footer = ({ setActivePage }) => {
  const handleNavClick = (id) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080a] border-t border-white/5 pt-16 pb-8 text-slate-400 font-outfit">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNavClick('home')}>
            <Logo size={42} />
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-wider text-white uppercase leading-tight">
                Al-Marsoos
              </span>
              <span className="text-[9px] tracking-[0.2em] font-semibold text-[#d32f2f] uppercase leading-none">
                Security Services
              </span>
            </div>
          </div>
          <p className="text-sm text-slate-400 mt-2">
            Providing premium, elite, and military-disciplined protection systems across Pakistan. Led by retired army command expertise.
          </p>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#d32f2f] bg-white/5 border border-white/5 px-3 py-1.5 rounded-sm w-fit mt-2">
            <Shield size={12} />
            <span>Ministry of Interior Licensed</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-base mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-[#d32f2f]">
            Quick Navigation
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <button onClick={() => handleNavClick('home')} className="hover:text-white transition-colors hover:translate-x-1 duration-200 text-left">
                Home Page
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('ceo-message')} className="hover:text-white transition-colors hover:translate-x-1 duration-200 text-left">
                CEO's Message
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('leadership')} className="hover:text-white transition-colors hover:translate-x-1 duration-200 text-left">
                Our Leadership
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('credentials')} className="hover:text-white transition-colors hover:translate-x-1 duration-200 text-left">
                Licenses & Credentials
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('services')} className="hover:text-white transition-colors hover:translate-x-1 duration-200 text-left">
                Our Services
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('careers')} className="hover:text-white transition-colors hover:translate-x-1 duration-200 text-left">
                Careers & Join Us
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('contact')} className="hover:text-white transition-colors hover:translate-x-1 duration-200 text-left">
                Contact & Quote Form
              </button>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="text-white font-bold text-base mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-[#d32f2f]">
            Security Operations
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle size={12} className="text-[#d32f2f]" />
              <span>Manned Guarding (Armed/Unarmed)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={12} className="text-[#d32f2f]" />
              <span>24/7 CCTV & Surveillance Room</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={12} className="text-[#d32f2f]" />
              <span>Wedding & Event Security</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={12} className="text-[#d32f2f]" />
              <span>Residential Gated Societies</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={12} className="text-[#d32f2f]" />
              <span>Commercial Hub Protection</span>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold text-base mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-[#d32f2f]">
            Get In Touch
          </h4>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="text-[#d32f2f] shrink-0 mt-0.5" />
              <a
                href="https://maps.app.goo.gl/qgc9Wy4KhRToyGZa9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex flex-col group text-slate-400"
                title="Open location on Google Maps"
              >
                <span>Office # 1, Gillani Plaza, Motorway Chowk, Peshawar Road, Islamabad, Pakistan.</span>
                <span className="text-[10px] text-[#d32f2f] group-hover:underline font-semibold mt-0.5">
                  View on Google Maps &rarr;
                </span>
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[#d32f2f] shrink-0" />
              <div className="flex flex-col">
                <a href="tel:03302051221" className="hover:text-white">0330 2051221</a>
                <a href="tel:03025772842" className="hover:text-white">0302 5772842</a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[#d32f2f] shrink-0" />
              <a href="mailto:info@almarsoos.com" className="hover:text-white">info@almarsoos.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <span>&copy; {new Date().getFullYear()} Al-Marsoos Security Services (Pvt) Ltd. All Rights Reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Legal Credentials</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
