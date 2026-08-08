import React, { useState } from 'react';
import { Shield, Eye, Bell, CheckCircle2, ChevronLeft, ChevronRight, Award, MapPin } from 'lucide-react';
import heroGuard from '../assets/hero_guard.jpg';
import ceoAvatar from '../assets/ceo_avatar.jpg';

const Home = ({ setActivePage }) => {
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
      <section className="relative min-h-screen flex items-center justify-center bg-[#07080a] pt-24 overflow-hidden">
        {/* Background Image with Dark Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroGuard} 
            alt="AMS Security Officer" 
            className="w-full h-full object-cover object-center opacity-40 scale-105 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0b0e] via-[#0a0b0e]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0e] via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16">
          <div className="lg:col-span-8 flex flex-col items-start gap-6 animate-fade-in">
            <span className="badge">
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
              <button 
                onClick={() => setActivePage('contact')} 
                className="btn btn-primary text-sm uppercase tracking-wider rounded-sm flex items-center gap-2"
              >
                Request Consultation
              </button>
              <button 
                onClick={() => setActivePage('services')} 
                className="btn btn-secondary text-sm uppercase tracking-wider rounded-sm"
              >
                Explore Services
              </button>
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

      {/* CEO Message Section */}
      <section className="bg-[#11131c] section-padding border-t border-b border-white/5">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              {/* Decorative Red Frame Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#d32f2f] to-[#b71c1c] rounded-xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500" />
              <div className="relative bg-[#0a0b0e] p-2.5 rounded-lg border border-white/10 overflow-hidden">
                <img 
                  src={ceoAvatar} 
                  alt="CEO Al-Marsoos Security Services" 
                  className="w-full h-auto object-cover rounded-md aspect-square filter grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="mt-4 text-center">
                  <h4 className="text-white font-bold text-lg font-outfit">Muhammad Malik</h4>
                  <p className="text-[#d32f2f] text-xs font-semibold uppercase tracking-widest mt-1">CEO & Founder</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-6 justify-center">
            <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-[#d32f2f] font-outfit flex items-center gap-2">
              <span className="red-indicator" /> Leadership Message
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit uppercase">
              Founded on Military Discipline
            </h2>
            <div className="text-slate-300 font-sans flex flex-col gap-4">
              <p className="font-semibold text-white text-base">
                "Our CEO is a retired Pakistan Army officer who served the nation with honor for 25 years."
              </p>
              <p>
                Having commanded troop tactical units and managed security systems under rigorous defense conditions, he brings the exact same precision, strategic vetting, and code of conduct to private security operations in Pakistan.
              </p>
              <p>
                At AMS, we do not compromise on training, response readiness, or integrity. Every guard under our deployment is personally vetted, rigorously trained at our training modules, and kept alert through sudden random patrols.
              </p>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
                <Award className="text-[#d32f2f]" size={22} />
              </div>
              <div>
                <h5 className="text-white font-bold text-sm font-outfit">25 Years Military Background</h5>
                <p className="text-xs text-slate-400">Strict standard operational drills for ultimate vigilance.</p>
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
              <button onClick={() => setActivePage('services')} className="text-xs font-semibold text-[#d32f2f] hover:text-white mt-auto flex items-center gap-1">
                Read More &rarr;
              </button>
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
              <button onClick={() => setActivePage('services')} className="text-xs font-semibold text-[#d32f2f] hover:text-white mt-auto flex items-center gap-1">
                Read More &rarr;
              </button>
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
              <button onClick={() => setActivePage('services')} className="text-xs font-semibold text-[#d32f2f] hover:text-white mt-auto flex items-center gap-1">
                Read More &rarr;
              </button>
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
              <button onClick={() => setActivePage('services')} className="text-xs font-semibold text-[#d32f2f] hover:text-white mt-auto flex items-center gap-1">
                Read More &rarr;
              </button>
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
        <div className="container flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-outfit uppercase">
              Need immediate security coverage in Islamabad?
            </h3>
            <p className="text-slate-400 text-sm max-w-xl font-sans">
              Connect with Safdar Malik (General Manager Marketing) directly to arrange deployment and draft security contracts.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <a href="tel:03302051221" className="btn btn-primary text-xs uppercase tracking-wider rounded-sm flex items-center gap-2">
              <Phone size={14} /> Call: 0330 2051221
            </a>
            <button onClick={() => setActivePage('contact')} className="btn btn-secondary text-xs uppercase tracking-wider rounded-sm">
              Calculate Cost
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
