import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  ChevronDown,
  MapPin,
  Heart,
  GraduationCap,
  ShoppingBag,
  Factory,
  Home,
  Building2,
  MessageCircle,
  Users,
} from 'lucide-react';
import { getWhatsAppUrl } from '../utils/device';

const clientCategories = [
  {
    id: 'healthcare',
    label: 'Healthcare',
    icon: Heart,
    clients: [
      { name: 'Nisar Hosp / Nisar Nursing Home', location: 'Pesh Road, Rawalpindi' },
      { name: 'Dr Naheed Gul Hospital', location: 'Range Road' },
      { name: 'Valley Clinic (Pvt) Ltd', location: 'Islamabad' },
      { name: 'Life Care Hospital', location: 'G-10, Islamabad' },
      { name: 'Farooq Hospital', location: 'Morree Motorway' },
    ],
  },
  {
    id: 'education',
    label: 'Education',
    icon: GraduationCap,
    clients: [
      { name: 'Spirit School', location: 'Jhangi Syedian' },
      { name: 'Scienta Vision School', location: 'G-13, G-10/4 (2 each), G-10/2' },
      { name: 'Till Law College', location: 'G-11/4, Islamabad' },
      { name: 'Prime College', location: 'Islamabad' },
      { name: 'The Alma School', location: 'DHA, Lahore' },
      { name: 'Siraj Munir International School', location: 'F-15, Islamabad' },
    ],
  },
  {
    id: 'commercial',
    label: 'Commercial & Retail',
    icon: ShoppingBag,
    clients: [
      { name: 'Shalimar Pump', location: 'Tarnol' },
      { name: 'Al-Sadaat Marketing', location: 'Blue Area' },
      { name: 'Bonanza Shop', location: 'F-10 Markaz' },
      { name: 'Punjab Cash & Carry', location: 'Westridge, Bhara Lau, Askari-14 & Morgah' },
      { name: 'Amna Jewellers', location: 'Tarnol' },
      { name: 'PSO Pump', location: 'Chur Harpal' },
      { name: 'Rawal Shopping Complex', location: 'Askari-11' },
      { name: 'Dhaka Sweet', location: 'Chur' },
    ],
  },
  {
    id: 'industrial',
    label: 'Industrial',
    icon: Factory,
    clients: [
      { name: 'Fazal Steel Mill', location: 'I-9, Islamabad' },
      { name: 'National Awan Cement Factory', location: 'Dandoot, Jhelum' },
    ],
  },
  {
    id: 'residential',
    label: 'Residential & Housing',
    icon: Home,
    clients: [
      { name: 'New City Housing Society', location: 'Wah Cantt' },
      { name: 'Judicial Town', location: 'Bhara Kahu, Islamabad' },
      { name: 'Green Society', location: 'Islamabad' },
      { name: 'New Pakistan Society', location: 'Near New Airport, Islamabad' },
    ],
  },
  {
    id: 'hospitality',
    label: 'Hospitality & Venues',
    icon: Building2,
    clients: [
      { name: '6th Road Call Centre', location: 'Rawalpindi' },
      { name: 'Glaxi Marquee', location: 'Tarnol' },
      { name: 'Saifroon Marquee', location: 'Chak Shehzad' },
      { name: 'Chhatar Park', location: 'Islamabad' },
      { name: 'Simly Dam', location: 'Islamabad' },
    ],
  },
];

const Clients = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (id) => {
    setExpandedCategory((prev) => (prev === id ? null : id));
  };

  const totalClients = clientCategories.reduce((sum, cat) => sum + cat.clients.length, 0);

  return (
    <div className="bg-[#0a0b0e] min-h-screen font-outfit">
      {/* ── Hero Section ── */}
      <section className="py-12 border-b border-white/5 bg-[#11131c]">
        <div className="container text-center">
          <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-[#d32f2f] font-outfit flex items-center justify-center gap-2 mb-3">
            <span className="red-indicator" /> Trusted Partnerships
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gradient-red uppercase font-outfit">
            Our Clients
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto mt-3 font-sans leading-relaxed">
            Al-Marsoos Security Services (Pvt) Ltd proudly secures {totalClients}+ establishments across Pakistan — from hospitals and schools to industrial plants, housing societies, and commercial hubs. Our clients trust us with their safety because we deliver military-grade discipline with round-the-clock vigilance.
          </p>
        </div>
      </section>

      {/* ── Accordion Categories Section ── */}
      <section className="py-10 sm:py-16 bg-[#0a0b0e]">
        <div className="container">
          <div className="max-w-5xl mx-auto flex flex-col gap-3">
            {/* Section Sub-Header */}
            <div className="flex items-center justify-between px-1 mb-1">
              <span className="text-slate-500 text-[10px] sm:text-[11px] uppercase font-bold tracking-widest flex items-center gap-1.5">
                <Users size={12} className="text-[#d32f2f]" />
                Client Portfolio by Sector
              </span>
              <span className="text-slate-500 text-[10px] font-sans">
                Click any category to expand
              </span>
            </div>

            {clientCategories.map((category) => {
              const Icon = category.icon;
              const isExpanded = expandedCategory === category.id;

              return (
                <div
                  key={category.id}
                  className={`glass-card border rounded-lg overflow-hidden transition-all duration-300 ${
                    isExpanded
                      ? 'border-[#d32f2f]/40 shadow-[0_0_20px_rgba(211,47,47,0.12)] bg-[#11131c]/90'
                      : 'border-white/5 hover:border-white/15 bg-[#11131c]/40'
                  }`}
                >
                  {/* Accordion Header Button */}
                  <button
                    type="button"
                    onClick={() => toggleCategory(category.id)}
                    className="w-full px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between gap-3 text-left cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`p-2 rounded-md transition-colors ${
                          isExpanded
                            ? 'bg-[#d32f2f] text-white shadow-md'
                            : 'bg-white/5 text-slate-400'
                        }`}
                      >
                        <Icon size={16} />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span
                          className={`font-outfit text-xs sm:text-sm font-bold uppercase tracking-wide transition-colors truncate ${
                            isExpanded ? 'text-white' : 'text-slate-200'
                          }`}
                        >
                          {category.label}
                        </span>
                        <span className="text-[10px] text-slate-500 font-sans truncate hidden sm:block">
                          {category.clients.length} {category.clients.length === 1 ? 'client' : 'clients'} secured
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                      <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-slate-400 bg-white/5 px-2.5 py-1 rounded border border-white/5 hidden xs:inline-block">
                        {category.clients.length} {category.clients.length === 1 ? 'Client' : 'Clients'}
                      </span>
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 ${
                          isExpanded
                            ? 'bg-[#d32f2f]/20 text-[#d32f2f] rotate-180'
                            : 'bg-white/5 text-slate-400'
                        }`}
                      >
                        <ChevronDown size={14} />
                      </div>
                    </div>
                  </button>

                  {/* Smooth Accordion Slide Container — grid-rows technique for no-jerk */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 sm:px-6 pb-6 pt-3 border-t border-white/5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {category.clients.map((client, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-3 p-4 rounded-lg bg-[#0a0b0e]/70 border border-white/5 hover:border-[#d32f2f]/30 transition-all duration-200 group"
                            >
                              <div className="p-1.5 bg-[#d32f2f]/10 border border-[#d32f2f]/20 rounded-md text-[#d32f2f] shrink-0 mt-0.5 group-hover:bg-[#d32f2f]/20 transition-colors">
                                <MapPin size={14} />
                              </div>
                              <div className="flex flex-col min-w-0">
                                <span className="text-white text-xs sm:text-sm font-semibold font-outfit leading-snug">
                                  {client.name}
                                </span>
                                <span className="text-slate-500 text-[10px] sm:text-[11px] font-sans mt-0.5 truncate">
                                  {client.location}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="bg-gradient-to-r from-[#181c28] via-[#0a0b0e] to-[#181c28] border-t border-white/5 py-16">
        <div className="container flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-outfit uppercase">
              Secure Your Business Today
            </h3>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-sans text-center">
              Join our growing portfolio of satisfied clients across Pakistan. Get a customized security plan tailored to your specific needs.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-2 w-full max-w-md">
            <Link
              to="/contact?calculator=true"
              className="btn btn-primary text-xs uppercase tracking-wider rounded-sm px-6 py-3.5 shadow-lg hover:scale-105 transition-transform duration-200 flex-1 flex items-center justify-center gap-2"
            >
              <Shield size={15} />
              <span>Request Consultation</span>
            </Link>
            <a
              href={getWhatsAppUrl('923106460024', 'Hello Al-Marsoos Security, I am interested in your security services for my organization.')}
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

export default Clients;
