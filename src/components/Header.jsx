import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, Shield, Phone } from 'lucide-react';

const Header = ({ activePage, setActivePage, setOpenQuoteForm }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-4 bg-[#0a0b0e]/90 backdrop-blur-md border-b border-white/5 shadow-lg'
          : 'py-6 bg-transparent'
      }`}
      style={{
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div className="container flex items-center justify-between">
        {/* Brand Logo and Name */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavClick('home')}
        >
          <Logo size={46} className="transform group-hover:scale-105 transition-transform duration-300" />
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-wider text-white font-outfit uppercase leading-tight">
              Al-Marsoos
            </span>
            <span className="text-[10px] tracking-[0.2em] font-semibold text-[#d32f2f] uppercase leading-none font-outfit">
              Security Services
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`relative text-sm font-semibold tracking-wide transition-all py-1 font-outfit ${
                activePage === link.id
                  ? 'text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.label}
              {activePage === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d32f2f] shadow-[0_0_8px_#d32f2f] rounded-full animate-fade-in" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Button & Contact info */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:03302051221"
            className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
          >
            <Phone size={14} className="text-[#d32f2f] animate-pulse" />
            <span>0330 2051221</span>
          </a>
          <button
            onClick={() => { setOpenQuoteForm(true); handleNavClick('contact'); }}
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
          className="fixed inset-0 top-[60px] bg-[#0a0b0e] z-40 flex flex-col p-6 animate-fade-in md:hidden border-t border-white/5"
          style={{ height: 'calc(100vh - 60px)' }}
        >
          <div className="flex flex-col gap-6 mt-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left text-xl font-bold font-outfit py-2 border-b border-white/5 transition-all ${
                  activePage === link.id
                    ? 'text-[#d32f2f] pl-2 border-l-2 border-l-[#d32f2f]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-4 pb-12">
            <a
              href="tel:03302051221"
              className="flex items-center justify-center gap-2 p-3 bg-white/5 border border-white/10 rounded-sm text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              <Phone size={16} className="text-[#d32f2f]" />
              <span>Call: 0330 2051221</span>
            </a>
            <button
              onClick={() => { setOpenQuoteForm(true); handleNavClick('contact'); }}
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
