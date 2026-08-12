import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Eye, Bell, CheckCircle2, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/device';
import heroGuardFacade from '../assets/hero_guard_facade_pcap.png';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Mohammad Tariq',
      role: 'Project Director, Green Valley Housing Society',
      text: 'Al-Marsoos Security Services has transformed our society security operations. Their guards, trained with military discipline, are alert, extremely professional, and well-organized. Their presence provides genuine peace of mind.',
    },
    {
      name: 'Kamran Alvi',
      role: 'Operations Head, Capital Trade Center',
      text: 'We hired AMS for commercial security and CCTV surveillance setup. Their 24/7 monitoring is impeccable, and their response times are highly reliable. Having an army retired commander running operations shows in their standards.',
    },
    {
      name: 'Dr. Ayesha Malik',
      role: 'Event Organizer, Islamabad Grand Events',
      text: 'For wedding crowd management and VIP escorts, Al-Marsoos is our top recommendation. Their guards manage large crowds smoothly and are highly respectful yet firm. Incredible event execution.',
    }
  ];

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col w-full font-outfit">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-72px)] sm:min-h-[calc(100vh-88px)] flex items-start md:items-center justify-center bg-[#07080a] overflow-hidden">
        {/* ── BACKGROUND: Head office & guard image backdrop ── */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroGuardFacade}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover animate-fade-in"
            style={{ objectPosition: 'center 20%', opacity: 0.20, filter: 'blur(3px) brightness(0.6)' }}
          />
          {/* Full dark overlay so text area is always readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0b0e] via-[#0a0b0e]/95 to-[#0a0b0e]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0e] via-transparent to-transparent" />
        </div>

        {/* ── FOREGROUND GUARD: tall positioned image on right, fused with gradient mask ── */}
        <img
          src={heroGuardFacade}
          alt="Al-Marsoos Security Head Office and Armed Security Officer"
          className="hero-guard absolute bottom-0 right-[2%] h-[92%] w-auto object-contain z-20 animate-fade-in select-none pointer-events-none rounded-lg"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 20%), linear-gradient(to top, transparent 0%, black 10%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%), linear-gradient(to top, transparent 0%, black 10%)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'source-in',
            filter: 'drop-shadow(-8px 0 32px rgba(0,0,0,0.9))'
          }}
        />

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-3 sm:pt-6 pb-12 sm:pb-16 md:py-16">
          <div className="lg:col-span-6 flex flex-col items-start gap-4 sm:gap-6 animate-fade-in">
            {/* Badge — rendered in hero section, safely below fixed navbar */}
            <span className="badge" style={{ width: 'fit-content', maxWidth: '90%', display: 'inline-flex' }}>
              <Shield size={12} />
              Professional Security You Can Trust
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight uppercase font-outfit">
              Your Safety, <br />
              <span className="text-[#d32f2f] text-gradient-red">Our Mission</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-xl font-sans">
              At AMS (Pvt) Ltd, we provide reliable, armed, and highly disciplined security guards with command-level supervision to protect what matters most.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <Link 
                to="/contact" 
                className="btn btn-primary text-sm uppercase tracking-wider rounded-sm flex items-center gap-2"
              >
                Request Consultation
              </Link>
              <Link 
                to="/services" 
                className="btn btn-secondary text-sm uppercase tracking-wider rounded-sm"
              >
                Explore Services
              </Link>
            </div>

            {/* Quick Stats Banner */}
            <div className="grid grid-cols-3 gap-6 mt-12 border-t border-white/5 pt-8 w-full max-w-lg">
              <div>
                <span className="block text-2xl font-extrabold text-[#d32f2f] font-outfit">25+ Yrs</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400">Army Command Experience</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-white font-outfit">24/7/365</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400">Surveillance & Alert support</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-[#d32f2f] font-outfit">100%</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400">Vetted & Licensed Guards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight Section */}
      <section className="bg-[#0a0b0e] section-padding">
        <div className="container flex flex-col items-center">
          <div className="section-header">
            <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-[#d32f2f] font-outfit flex items-center justify-center gap-2 mb-2">
              <span className="red-indicator" /> Elite Capabilities
            </span>
            <h2 className="text-white uppercase">Securing What Matters</h2>
            <p>We provide full-spectrum protective services tailored for industrial, retail, private residential, and event environments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full mt-4">
            {/* Service 1 */}
            <div className="glass-card p-8 flex flex-col gap-5 items-start">
              <div className="p-3 bg-[#d32f2f]/10 border border-[#d32f2f]/30 rounded-lg text-[#d32f2f]">
                <Shield size={26} />
              </div>
              <h3 className="text-lg font-bold text-white font-outfit uppercase">Manned Guarding</h3>
              <p className="text-xs text-slate-400 font-sans">
                Highly trained armed and unarmed officers with military-level standards to provide perimeter security and access control.
              </p>
              <Link to="/services" className="text-xs font-semibold text-[#d32f2f] hover:text-white mt-auto flex items-center gap-1">
                Read More &rarr;
              </Link>
            </div>

            {/* Service 2 */}
            <div className="glass-card p-8 flex flex-col gap-5 items-start">
              <div className="p-3 bg-[#d32f2f]/10 border border-[#d32f2f]/30 rounded-lg text-[#d32f2f]">
                <Eye size={26} />
              </div>
              <h3 className="text-lg font-bold text-white font-outfit uppercase">CCTV & Monitoring</h3>
              <p className="text-xs text-slate-400 font-sans">
                24/7 technical surveillance centers to track movement, control alarms, and alert rapid response teams instantly.
              </p>
              <Link to="/services" className="text-xs font-semibold text-[#d32f2f] hover:text-white mt-auto flex items-center gap-1">
                Read More &rarr;
              </Link>
            </div>

            {/* Service 3 */}
            <div className="glass-card p-8 flex flex-col gap-5 items-start">
              <div className="p-3 bg-[#d32f2f]/10 border border-[#d32f2f]/30 rounded-lg text-[#d32f2f]">
                <Bell size={26} />
              </div>
              <h3 className="text-lg font-bold text-white font-outfit uppercase">Wedding & Event</h3>
              <p className="text-xs text-slate-400 font-sans">
                Elite host guards for large wedding ceremonies, corporate dinners, and banquets. Ensures crowd management and VIP safety.
              </p>
              <Link to="/services" className="text-xs font-semibold text-[#d32f2f] hover:text-white mt-auto flex items-center gap-1">
                Read More &rarr;
              </Link>
            </div>

            {/* Service 4 */}
            <div className="glass-card p-8 flex flex-col gap-5 items-start">
              <div className="p-3 bg-[#d32f2f]/10 border border-[#d32f2f]/30 rounded-lg text-[#d32f2f]">
                <CheckCircle2 size={26} />
              </div>
              <h3 className="text-lg font-bold text-white font-outfit uppercase">Residential & Corp</h3>
              <p className="text-xs text-slate-400 font-sans">
                Comprehensive security gates, access logs, and patrols for housing societies (e.g. Green Valley) and corporate hubs.
              </p>
              <Link to="/services" className="text-xs font-semibold text-[#d32f2f] hover:text-white mt-auto flex items-center gap-1">
                Read More &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="bg-[#11131c] section-padding border-t border-white/5">
        <div className="container flex flex-col items-center">
          <div className="section-header">
            <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-[#d32f2f] font-outfit flex items-center justify-center gap-2 mb-2">
              <span className="red-indicator" /> Reviews & Trust
            </span>
            <h2 className="text-white uppercase">Client Testimonials</h2>
          </div>

          <div className="w-full max-w-3xl glass-card p-10 sm:p-12 relative overflow-hidden">
            <div className="flex flex-col items-center text-center gap-6">
              <span className="text-6xl text-[#d32f2f] font-serif leading-none font-bold select-none h-6">“</span>
              <p className="text-slate-200 text-lg md:text-xl font-sans italic leading-relaxed max-w-2xl">
                {testimonials[currentTestimonial].text}
              </p>
              <div className="flex flex-col items-center gap-1 mt-4">
                <h4 className="text-white font-bold text-base font-outfit">{testimonials[currentTestimonial].name}</h4>
                <p className="text-slate-400 text-xs uppercase tracking-widest">{testimonials[currentTestimonial].role}</p>
              </div>
            </div>

            {/* Slider controls */}
            <div className="flex justify-between items-center w-full absolute top-1/2 left-0 transform -translate-y-1/2 px-4 pointer-events-none">
              <button 
                onClick={handlePrevTestimonial}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#d32f2f] border border-white/10 hover:border-transparent text-white flex items-center justify-center pointer-events-auto transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={handleNextTestimonial}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#d32f2f] border border-white/10 hover:border-transparent text-white flex items-center justify-center pointer-events-auto transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Call To Action Banner */}
      <section className="bg-gradient-to-r from-[#181c28] via-[#0a0b0e] to-[#181c28] border-t border-white/5 py-16">
        <div className="container flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-outfit uppercase">
              Need immediate security coverage in Islamabad?
            </h3>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-sans text-center">
              Connect with Safdar Malik (General Manager Marketing) directly to arrange deployment and draft security contracts.
            </p>
          </div>
          
          {/* Action Buttons: Pure Messaging & Quote Calculator */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2 w-full max-w-md">
            <Link
              to="/contact?calculator=true"
              className="btn btn-primary text-xs uppercase tracking-wider rounded-sm px-6 py-3.5 shadow-lg hover:scale-105 transition-transform duration-200 flex-1 flex items-center justify-center gap-2"
            >
              <Shield size={15} />
              <span>Calculate Cost &amp; Get Quote</span>
            </Link>
            <a
              href={getWhatsAppUrl('923106460024', 'Hello Al-Marsoos Security, I would like to inquire about your security services.')}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-6 rounded-sm bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(37,211,102,0.3)] hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all cursor-pointer flex-1"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Message</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
