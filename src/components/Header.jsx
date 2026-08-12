import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X, Shield, MessageCircle, ChevronDown } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/device';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', path: '/', label: 'Home' },
    {
      id: 'about',
      label: 'About Us',
      isDropdown: true,
      subLinks: [
        { id: 'leadership', path: '/leadership', label: 'Our Leadership' },
        { id: 'ceo-message', path: '/ceo-message', label: "CEO's Message" },
        { id: 'credentials', path: '/credentials', label: 'Licenses & Credentials' },
      ]
    },
    { id: 'services', path: '/services', label: 'Services' },
    { id: 'careers', path: '/careers', label: 'Careers' },
    { id: 'contact', path: '/contact', label: 'Contact Us' }
  ];

  const isLinkActive = (link) => {
    if (link.isDropdown) {
      return link.subLinks.some(sub => location.pathname === sub.path);
    }
    return location.pathname === link.path;
  };

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
    setIsMobileAboutOpen(false);
  };

  const handleGetQuoteClick = () => {
    setIsMobileMenuOpen(false);
    setIsMobileAboutOpen(false);
    navigate('/contact?calculator=true');
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0b0e]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-transparent border-b border-white/5 py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group focus:outline-none"
          onClick={handleMobileNavClick}
        >
          <Logo size={40} />
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-wider text-white uppercase leading-tight font-outfit">
              Al-Marsoos
            </span>
            <span className="text-[9px] tracking-[0.2em] font-semibold text-[#d32f2f] uppercase leading-none font-outfit">
              Security Services
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            if (link.isDropdown) {
              const isSubActive = isLinkActive(link);
              return (
                <div key={link.id} className="relative group/dropdown py-2">
                  <button
                    className={`flex items-center gap-1 text-sm font-semibold transition-colors uppercase tracking-wider font-outfit ${
                      isSubActive ? 'text-[#d32f2f]' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown size={14} className="group-hover/dropdown:rotate-180 transition-transform duration-200" />
                  </button>

                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 w-56 bg-[#11131c] border border-white/10 rounded-md shadow-2xl py-2 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-200 translate-y-2 group-hover/dropdown:translate-y-0 backdrop-blur-md">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.id}
                        to={sub.path}
                        className={`block px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors dropdown-item ${
                          location.pathname === sub.path
                            ? 'text-white active'
                            : 'text-slate-300'
                        }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            const active = isLinkActive(link);

            return (
              <Link
                key={link.id}
                to={link.path}
                className={`text-sm font-semibold transition-colors uppercase tracking-wider font-outfit relative py-2 group/nav ${
                  active ? 'text-[#d32f2f]' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
                {/* Active underline */}
                {active && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d32f2f] shadow-[0_0_8px_#d32f2f] rounded-full animate-fade-in" />
                )}
                {/* Hover underline */}
                {!active && (
                  <span className="absolute bottom-0 left-0 h-[2px] bg-[#d32f2f]/60 rounded-full w-0 group-hover/nav:w-full transition-all duration-300" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & WhatsApp Messaging */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={getWhatsAppUrl('923106460024', 'Hello Al-Marsoos Security, I would like to inquire about your security services.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-all group px-3.5 py-2 rounded-sm bg-white/5 hover:bg-[#25D366]/15 border border-white/10 hover:border-[#25D366]/40"
          >
            <MessageCircle size={15} className="text-[#25D366] group-hover:scale-110 transition-transform" />
            <span>WhatsApp: 0310 6460024</span>
          </a>
          <button
            onClick={handleGetQuoteClick}
            className="btn btn-primary px-5 py-2 text-xs uppercase tracking-wider rounded-sm flex items-center gap-1.5"
          >
            <Shield size={13} />
            <span>Get a Quote</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="md:hidden p-1.5 text-white hover:text-[#d32f2f] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 top-[70px] bg-[#0a0b0e] z-40 flex flex-col p-6 animate-fade-in md:hidden border-t border-white/5 overflow-y-auto"
        >
          <div className="flex flex-col gap-5 mt-4">
            {navLinks.map((link) => {
              if (link.isDropdown) {
                const isSubActive = isLinkActive(link);
                return (
                  <div key={link.id} className="flex flex-col gap-2">
                    <button
                      onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                      className={`flex items-center justify-between text-left text-xl font-bold font-outfit py-2 border-b border-white/5 w-full ${
                        isSubActive ? 'text-[#d32f2f]' : 'text-slate-300'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown size={20} className={`transform transition-transform duration-300 ${isMobileAboutOpen ? 'rotate-180 text-[#d32f2f]' : 'text-slate-500'}`} />
                    </button>
                    {isMobileAboutOpen && (
                      <div className="flex flex-col gap-3 pl-4 py-2.5 bg-white/5 rounded-md border border-white/5 animate-fade-in">
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.id}
                            to={sub.path}
                            onClick={handleMobileNavClick}
                            className={`text-left text-sm font-semibold font-outfit py-1 transition-colors block ${
                              location.pathname === sub.path ? 'text-[#d32f2f]' : 'text-slate-400 hover:text-white'
                            }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const active = isLinkActive(link);
              return (
                <Link
                  key={link.id}
                  to={link.path}
                  onClick={handleMobileNavClick}
                  className={`text-left text-xl font-bold font-outfit py-2 border-b border-white/5 transition-all block ${
                    active
                      ? 'text-[#d32f2f] pl-2 border-l-2 border-l-[#d32f2f]'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-4 pb-12">
            <a
              href={getWhatsAppUrl('923106460024', 'Hello Al-Marsoos Security, I would like to inquire about your security services.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 bg-[#25D366]/15 border border-[#25D366]/30 rounded-sm text-sm font-semibold text-white hover:bg-[#25D366]/25 transition-colors"
            >
              <MessageCircle size={16} className="text-[#25D366]" />
              <span>WhatsApp: 0310 6460024</span>
            </a>
            <button
              onClick={handleGetQuoteClick}
              className="btn btn-primary w-full p-3 text-sm uppercase tracking-wider rounded-sm flex items-center justify-center gap-2"
            >
              <Shield size={16} />
              <span>Get a Quote</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
