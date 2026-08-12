import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Eye, ShieldAlert, Star, Compass, PhoneCall } from 'lucide-react';
import heroGuard from '../assets/hero_guard.jpg';
import eventSecurity from '../assets/event_security.jpg';
import residentialSecurity from '../assets/residential_security.jpg';
import commercialSecurity from '../assets/commercial_security.jpg';

const Services = () => {
  const [activeTab, setActiveTab] = useState('manned');

  const categories = [
    {
      id: 'manned',
      label: 'Manned Guarding',
      icon: <Shield size={18} />,
      title: 'Armed & Unarmed Physical Protection',
      image: heroGuard,
      description: 'Our physical guarding services form the cornerstone of Al-Marsoos Security. Trained by retired army command drills, our guards maintain rigid discipline, alert posturing, and strict access logs.',
      subServices: [
        {
          name: 'Armed Static Guards',
          desc: 'Trained in weapon handling, trigger discipline, and perimeter defense protocols. Ideal for bank branches, jewelry shops, and executive premises.'
        },
        {
          name: 'Corporate Officers & Supervisors',
          desc: 'Sharp, well-dressed security supervisors to manage gate entries, verify visitor registers, and manage reception security checks.'
        },
        {
          name: 'Personal Close Protection (VIP Escorts)',
          desc: 'Elite bodyguards with military backgrounds providing physical close-protection and secure transit services in Islamabad.'
        }
      ],
      ctaText: 'Hire Guards'
    },
    {
      id: 'surveillance',
      label: 'CCTV & Surveillance',
      icon: <Eye size={18} />,
      title: '24/7 Monitoring & Alarms Systems',
      image: commercialSecurity,
      description: 'We integrate tactical personnel with high-end surveillance setups to monitor commercial properties, cash counters, and gated perimeters round-the-clock.',
      subServices: [
        {
          name: 'CCTV Room Operators',
          desc: 'Vigilant personnel who scan feed panels, detect anomalous movements, and dispatch rapid response alerts instantly.'
        },
        {
          name: 'Intrusion Detection Alarms',
          desc: 'Smart perimeter alarm integration. Any unauthorized fence crossover triggers immediate control room sirens and security alerts.'
        },
        {
          name: 'Access Control Systems',
          desc: 'RFID badges, biometric checkpoints, and digital guest authorization to secure sensitive corporate zones.'
        }
      ],
      ctaText: 'Setup Surveillance'
    },
    {
      id: 'event',
      label: 'Wedding & Events',
      icon: <ShieldAlert size={18} />,
      title: 'Host Guards & Crowd Management',
      image: eventSecurity,
      description: 'Wedding halls, banquet receptions, and corporate galas require alert protection that is firm yet highly courteous to hosts and guests.',
      subServices: [
        {
          name: 'Wedding Banquet Guards',
          desc: 'Uniformed guards at guest entryways, parking lots, and VIP areas to prevent gatecrashers and maintain peaceful event flows.'
        },
        {
          name: 'Crowd & Parking Control',
          desc: 'Active coordination to manage VIP parking spots, direct guest traffic, and keep entries clear for emergency vehicles.'
        },
        {
          name: 'Vetting & Registry Logs',
          desc: 'Checking invitation lists, logging entry times, and ensuring that no unauthorized weapons enter the venue.'
        }
      ],
      ctaText: 'Secure My Event'
    },
    {
      id: 'residential',
      label: 'Residential & Corporate',
      icon: <Compass size={18} />,
      title: 'Housing Societies & Corporate Hubs',
      image: residentialSecurity,
      description: 'Securing massive housing societies (like Green Valley Residential Society) and multi-tenant corporate offices requires structured security barriers, guard patrols, and active command loops.',
      subServices: [
        {
          name: 'Gated Society Barriers',
          desc: 'Managing main gates, logging visitor registration details, checking incoming delivery riders, and operating barrier gates.'
        },
        {
          name: 'Mobile Patrol Vehicles',
          desc: 'Equipped supervisors who conduct random mobile patrols at night to ensure all static guards are alert and standing watch.'
        },
        {
          name: 'Rapid Response Protocol',
          desc: 'Pre-arranged quick intervention drills to respond to residents’ emergency alerts (e.g. SOS triggers, alarm trippings).'
        }
      ],
      ctaText: 'Secure Society'
    }
  ];

  const currentData = categories.find((cat) => cat.id === activeTab);

  return (
    <div className="flex flex-col w-full font-outfit bg-[#0a0b0e] page-wrapper-spacing min-h-screen">
      {/* Page Header */}
      <section className="py-12 border-b border-white/5 bg-[#11131c]">
        <div className="container text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gradient-red uppercase font-outfit">
            Professional Security Solutions
          </h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2 font-sans">
            Rigorous military vetting, modern electronics, and 24/7 command center tracking. Explore our specialized services.
          </p>
        </div>
      </section>

      {/* Main Tabs Layout */}
      <section className="py-16 flex-1">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar Tabs Selector */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <h4 className="text-slate-500 font-bold mb-2 uppercase tracking-widest text-xs">
                Service Sectors
              </h4>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`w-full p-5 rounded-lg text-left flex items-center justify-between transition-all duration-300 font-outfit ${
                    activeTab === cat.id
                      ? 'bg-[#d32f2f] text-white shadow-[0_0_20px_rgba(211,47,47,0.35)]'
                      : 'bg-[#11131c] text-slate-400 border border-white/5 hover:bg-[#181c28] hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3 font-semibold">
                    {cat.icon}
                    <span>{cat.label}</span>
                  </div>
                  <span>&rarr;</span>
                </button>
              ))}
              </div>

              {/* Sidebar Quick Call Info */}
              <div className="glass-card p-6 mt-8 border border-white/5 flex flex-col gap-4">
                <h5 className="text-white font-bold text-sm">Need a Customized Contract?</h5>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  Speak to Safdar Malik (GM Marketing) for corporate rates, deployment schedules, and security consultations in Islamabad.
                </p>
                {/* Mobile Only (< 640px): Direct Call Button */}
                <a
                  href="tel:03106460024"
                  className="sm:hidden flex items-center justify-center gap-2 p-3 bg-white/5 hover:bg-[#d32f2f] rounded-sm text-xs font-semibold text-white border border-white/5 hover:border-transparent transition-all mt-2"
                >
                  <PhoneCall size={14} />
                  <span>Call: 0310 6460024</span>
                </a>
                {/* Wide Screen (>= 640px): Request Custom Quote Button */}
                <Link
                  to="/contact?quote=true"
                  className="hidden sm:flex items-center justify-center gap-2 p-3 bg-white/5 hover:bg-[#d32f2f] rounded-sm text-xs font-semibold text-white border border-white/5 hover:border-transparent transition-all mt-2 group"
                >
                  <Shield size={14} className="text-[#d32f2f] group-hover:text-white transition-colors" />
                  <span>Request Custom Quote</span>
                </Link>
              </div>
            </div>

            {/* Main Tabs Details Panel */}
            <div className="lg:col-span-8 flex flex-col gap-8 animate-fade-in">
              <div className="glass-card overflow-hidden">
                <div className="h-[300px] w-full relative overflow-hidden">
                  <img
                    src={currentData.image}
                    alt={currentData.title}
                    className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11131c] to-transparent" />
                  <span className="absolute bottom-6 left-6 badge bg-[#d32f2f] border-transparent text-white uppercase tracking-wider font-bold">
                    {currentData.label}
                  </span>
                </div>

                <div className="p-8 sm:p-10 flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-outfit uppercase">
                      {currentData.title}
                    </h2>
                    <p className="text-slate-300 text-sm leading-relaxed font-sans">
                      {currentData.description}
                    </p>
                  </div>

                  {/* Sub-services breakdown */}
                  <div className="flex flex-col gap-4 border-t border-white/5 pt-6">
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider text-[#d32f2f] font-outfit">
                      Key Capabilities Included:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {currentData.subServices.map((sub, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/5 p-4 rounded-md flex flex-col gap-2">
                          <h5 className="text-white font-bold text-sm font-outfit flex items-center gap-2">
                            <Star size={12} className="text-[#d32f2f]" fill="#d32f2f" />
                            {sub.name}
                          </h5>
                          <p className="text-xs text-slate-400 font-sans leading-relaxed">
                            {sub.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end border-t border-white/5 pt-6 mt-2">
                    <Link
                      to="/contact?quote=true"
                      className="btn btn-primary px-8 text-xs uppercase tracking-wider rounded-sm flex items-center gap-2"
                    >
                      <Shield size={14} />
                      {currentData.ctaText} &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
