import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, Shield, Phone, ChevronDown } from 'lucide-react';

const Header = ({ activePage, setActivePage, setOpenQuoteForm }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);

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
    {
      id: 'about',
      label: 'About Us',
      isDropdown: true,
      subLinks: [
        { id: 'ceo-message', label: "CEO's Message" },
        { id: 'leadership', label: 'Our Leadership' },
        { id: 'credentials', label: 'Licenses & Credentials' }
      ]
    },
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
          ? 'py-2.5 sm:py-4 bg-[#0a0b0e]/95 backdrop-blur-md border-b border-white/5 shadow-lg'
          : 'py-3.5 sm:py-6 bg-transparent'
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
            <span className="hidden sm:block text-[10px] tracking-[0.2em] font-semibold text-[#d32f2f] uppercase leading-none font-outfit">
              Security Services
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            if (link.isDropdown) {
              const isSubActive = link.subLinks.some(sub => activePage === sub.id);
              return (
                <div key={link.id} className="relative group py-2">
                  <button
                    type="button"
                    className={`relative flex items-center gap-1 text-sm font-semibold tracking-wide py-1 font-outfit transition-all duration-200 cursor-pointer group/dropdown ${
                      isSubActive ? 'text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform duration-300" />
                    {/* Hover underline — only when no sub-page active */}
                    {!isSubActive && (
                      <span className="absolute bottom-0 left-0 h-[2px] bg-[#d32f2f]/60 rounded-full w-0 group-hover/dropdown:w-full transition-all duration-300" />
                    )}
                    {/* Active underline when a sub-page is active */}
                    {isSubActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d32f2f] shadow-[0_0_8px_#d32f2f] rounded-full" />
                    )}
                  </button>
                  {/* Dropdown Menu Wrapper (Continuous hover target without gap) */}
                  <div className="absolute top-full left-0 pt-1.5 w-64 hidden group-hover:block animate-fade-in z-50">
                    <div className="bg-[#11131c] border border-white/10 rounded-md shadow-2xl py-2">
                      {link.subLinks.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => handleNavClick(sub.id)}
                          className={`dropdown-item w-full text-left px-4 py-3 text-xs font-medium font-outfit transition-all duration-200 block ${
                            activePage === sub.id ? 'active text-white' : 'text-slate-400'
                          }`}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
                <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative text-sm font-semibold tracking-wide transition-all duration-200 py-1 font-outfit group/nav ${
                  activePage === link.id
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label}
                {/* Active underline */}
                {activePage === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d32f2f] shadow-[0_0_8px_#d32f2f] rounded-full animate-fade-in" />
                )}
                {/* Hover underline — only when not active */}
                {activePage !== link.id && (
                  <span className="absolute bottom-0 left-0 h-[2px] bg-[#d32f2f]/60 rounded-full w-0 group-hover/nav:w-full transition-all duration-300" />
                )}
              </button>
            );
          })}
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
          className="fixed inset-0 top-[60px] bg-[#0a0b0e] z-40 flex flex-col p-6 animate-fade-in md:hidden border-t border-white/5 overflow-y-auto"
          style={{ height: 'calc(100vh - 60px)' }}
        >
          <div className="flex flex-col gap-5 mt-4">
            {navLinks.map((link) => {
              if (link.isDropdown) {
                const isSubActive = link.subLinks.some(sub => activePage === sub.id);
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
                          <button
                            key={sub.id}
                            onClick={() => handleNavClick(sub.id)}
                            className={`text-left text-sm font-semibold font-outfit py-1 transition-colors block ${
                              activePage === sub.id ? 'text-[#d32f2f]' : 'text-slate-400 hover:text-white'
                            }`}
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
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
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-4 pb-12">
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
