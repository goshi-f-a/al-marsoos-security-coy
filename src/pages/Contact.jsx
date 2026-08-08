import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Calculator, ShieldCheck, Send, Check, ChevronDown } from 'lucide-react';

const branches = [
  {
    id: 'islamabad',
    city: 'Islamabad (HQ)',
    name: 'Islamabad Headquarters',
    address: 'Office # 1, Gillani Plaza, Motorway Chowk, Peshawar Road, Islamabad, Pakistan.',
    phone: '0330 2051221 / 0302 5772842',
    mapUrl: 'https://maps.google.com/?q=33.633407629053465,72.93729544717415',
    x: 315,
    y: 120
  },
  {
    id: 'rawalpindi',
    city: 'Rawalpindi',
    name: 'Rawalpindi Regional Office',
    address: 'Office No. 19, Services Plaza, Mall Road, Saddar, Rawalpindi, Pakistan.',
    phone: '0330 2051221',
    mapUrl: 'https://maps.google.com/?q=Services+Plaza+Mall+Road+Saddar+Rawalpindi',
    x: 310,
    y: 135
  },
  {
    id: 'faisalabad',
    city: 'Faisalabad',
    name: 'Faisalabad Regional Office',
    address: 'Office No. 5, First Floor, Madina Market, Sugar Morre, Sheikhupura Road, Faisalabad, Pakistan.',
    phone: '0330 2051221',
    mapUrl: 'https://maps.google.com/?q=Madina+Market+Sugar+Morre+Sheikhupura+Road+Faisalabad',
    x: 290,
    y: 190
  },
  {
    id: 'muzaffarabad',
    city: 'Muzaffarabad',
    name: 'Muzaffarabad Branch (AJK)',
    address: 'Office No. 7, Near WAPDA Town, Dhana, Muzaffarabad, Azad Kashmir.',
    phone: '0330 2051221',
    mapUrl: 'https://maps.google.com/?q=WAPDA+Town+Dhana+Muzaffarabad',
    x: 335,
    y: 105
  },
  {
    id: 'haripur',
    city: 'Haripur',
    name: 'Haripur Branch (KPK)',
    address: 'Office No. 8, Second Floor, Doctor Plaza, Circular Road, Haripur, Khyber Pakhtunkhwa.',
    phone: '0330 2051221',
    mapUrl: 'https://maps.google.com/?q=Doctor+Plaza+Circular+Road+Haripur',
    x: 305,
    y: 90
  },
  {
    id: 'gujranwala',
    city: 'Gujranwala',
    name: 'Gujranwala Regional Office',
    address: 'Office No. 397-A, Model Town, Gujranwala, Punjab, Pakistan.',
    phone: '0330 2051221',
    mapUrl: 'https://maps.google.com/?q=Model+Town+Gujranwala+Punjab',
    x: 330,
    y: 160
  },
  {
    id: 'quetta',
    city: 'Quetta',
    name: 'Quetta Branch (Balochistan)',
    address: 'Chaman Plaza, Zarghun Road, Quetta, Balochistan, Pakistan.',
    phone: '0330 2051221',
    mapUrl: 'https://maps.google.com/?q=Chaman+Plaza+Zarghun+Road+Quetta',
    x: 180,
    y: 250
  },
  {
    id: 'gilgit',
    city: 'Gilgit',
    name: 'Gilgit Branch (Gilgit-Baltistan)',
    address: 'NLI Plaza, Gilgit, Gilgit-Baltistan, Pakistan.',
    phone: '0330 2051221',
    mapUrl: 'https://maps.google.com/?q=NLI+Plaza+Gilgit+Pakistan',
    x: 360,
    y: 55
  },
  {
    id: 'karachi',
    city: 'Karachi',
    name: 'Karachi Regional Office',
    address: 'Flat AB-04, 2nd Floor, DHA Phase 2, Karachi, Sindh, Pakistan.',
    phone: '0330 2051221',
    mapUrl: 'https://maps.google.com/?q=DHA+Phase+2+Karachi+Sindh',
    x: 200,
    y: 360
  }
];

const Contact = ({ openQuoteForm, setOpenQuoteForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [calc, setCalc] = useState({
    service: 'static_armed',
    guardCount: 1,
    duration: '12h',
    contractLength: '1m'
  });
  const [estimatedCost, setEstimatedCost] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);

  // Auto-open form and scroll to it when triggered from "Get a Quote" button
  useEffect(() => {
    if (openQuoteForm) {
      setIsFormOpen(true);
      setOpenQuoteForm(false);
      setTimeout(() => {
        const el = document.getElementById('quote-form-panel');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, [openQuoteForm]);

  // Rate Constants (in PKR per Guard per month/event)
  const RATES = {
    static_armed: { '12h': 45000, '24h': 85000 },
    static_unarmed: { '12h': 35000, '24h': 65000 },
    event_guard: { 'event': 5000 }, // per event rate
    patrol_vehicle: { '12h': 120000, '24h': 220000 }
  };

  useEffect(() => {
    let cost = 0;
    const { service, guardCount, duration, contractLength } = calc;

    if (service === 'event_guard') {
      cost = RATES.event_guard.event * guardCount;
    } else {
      const baseRate = RATES[service]?.[duration] || 45000;
      cost = baseRate * guardCount;

      // Adjust based on contract duration discounts
      if (contractLength === '6m') {
        cost = cost * 0.95; // 5% discount
      } else if (contractLength === '12m') {
        cost = cost * 0.90; // 10% discount
      }
    }
    setEstimatedCost(Math.round(cost));
  }, [calc]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCalcChange = (e) => {
    const { name, value } = e.target;
    setCalc((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields.');
      return;
    }
    setIsSubmitting(true);

    // Simulate Server Submission API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', notes: '' });
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full font-outfit bg-[#0a0b0e] page-wrapper-spacing min-h-screen">
      {/* Header */}
      <section className="py-12 border-b border-white/5 bg-[#11131c]">
        <div className="container flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gradient-red uppercase font-outfit">
            Contact &amp; Quote Calculator
          </h1>
          <p className="text-slate-400 text-sm max-w-xl mt-2 font-sans text-center">
            Calculate estimated security costs instantly and submit quote requests directly to our marketing team.
          </p>
        </div>
      </section>

      {/* Calculator & Contact Details Info */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
            
            {/* Left Side: Contact details and office location map */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="glass-card p-8 border border-white/5 flex flex-col gap-6">
                <h3 className="text-xl font-bold text-white font-outfit uppercase tracking-wider">
                  Islamabad Headquarters
                </h3>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  Our main office is situated at Motorway Chowk, Islamabad. Visit us to review deployment procedures and licensing documents.
                </p>

                <div className="flex flex-col gap-5 text-sm">
                  <div className="flex gap-4">
                    <MapPin size={22} className="text-[#d32f2f] shrink-0" />
                    <div>
                      <h5 className="text-white font-bold font-outfit text-sm">Office Location</h5>
                      <p className="text-xs text-slate-400 font-sans mt-0.5">
                        Office # 1, Gillani Plaza, Motorway Chowk, Peshawar Road, Islamabad, Pakistan.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone size={20} className="text-[#d32f2f] shrink-0" />
                    <div>
                      <h5 className="text-white font-bold font-outfit text-sm">Phone Hotlines</h5>
                      <p className="text-xs text-slate-400 font-sans mt-0.5">
                        Landline / Mobile: 0330 2051221 <br />
                        Alt Support Line: 0302 5772842
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail size={20} className="text-[#d32f2f] shrink-0" />
                    <div>
                      <h5 className="text-white font-bold font-outfit text-sm">Email Support</h5>
                      <p className="text-xs text-slate-400 font-sans mt-0.5">
                        Corporate queries: info@almarsoos.com <br />
                        Marketing GM: marketing@almarsoos.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stylized Dark SVG Map */}
              <div className="glass-card p-6 border border-white/5 flex flex-col gap-3">
                <h4 className="text-white font-bold text-sm uppercase tracking-widest text-[#d32f2f]">
                  AMS Location Representation
                </h4>
                <div className="bg-[#07080a] border border-white/5 rounded-md h-[220px] relative overflow-hidden flex items-center justify-center">
                  
                  {/* Decorative High-End Map Lines SVG */}
                  <svg width="100%" height="100%" viewBox="0 0 400 220" className="absolute inset-0 opacity-40">
                    <defs>
                      <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1e2230" />
                        <stop offset="100%" stopColor="#0a0b0e" />
                      </linearGradient>
                    </defs>
                    <rect width="400" height="220" fill="url(#mapGrad)" />
                    {/* Road Network Lines */}
                    <path d="M-20,110 L420,110" stroke="#2d3748" strokeWidth="20" />
                    <path d="M-20,110 L420,110" stroke="#1a202c" strokeWidth="2" strokeDasharray="5 5" />
                    
                    <path d="M220,-20 L220,240" stroke="#2d3748" strokeWidth="25" />
                    <path d="M220,-20 L220,240" stroke="#1a202c" strokeWidth="2" strokeDasharray="5 5" />

                    <path d="M-20,30 C150,30 200,80 220,110" fill="none" stroke="#2d3748" strokeWidth="12" />
                    <path d="M220,110 C240,140 280,190 420,190" fill="none" stroke="#2d3748" strokeWidth="12" />
                    
                    {/* Ring Road Grid */}
                    <circle cx="220" cy="110" r="45" fill="none" stroke="#2d3748" strokeWidth="15" />
                    <circle cx="220" cy="110" r="45" fill="none" stroke="#4a5568" strokeWidth="1" strokeDasharray="3 3" />
                  </svg>

                  {/* Location Pin overlay */}
                  <div className="absolute top-[92px] left-[202px] flex flex-col items-center">
                    <span className="w-5 h-5 bg-[#d32f2f] rounded-full border-2 border-white flex items-center justify-center shadow-[0_0_15px_#d32f2f] animate-pulse">
                      <ShieldCheck size={10} className="text-white" />
                    </span>
                    <span className="bg-[#11131c] text-white text-[9px] font-bold px-2 py-0.5 rounded-sm border border-white/10 mt-1 whitespace-nowrap">
                      AMS HQs (Gillani Plaza)
                    </span>
                  </div>

                  <span className="absolute bottom-3 left-3 text-[10px] text-slate-500 font-sans">
                    Motorway Chowk Cross, Islamabad
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side: Calculator and Request Quote form */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Quote Calculator Card */}
              <div className="glass-card p-8 border border-white/5 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <Calculator size={22} className="text-[#d32f2f]" />
                  <h3 className="text-xl font-bold text-white font-outfit uppercase tracking-wider">
                    Instant Security Estimator
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label className="form-label">Service Type</label>
                    <select
                      name="service"
                      value={calc.service}
                      onChange={handleCalcChange}
                      className="form-select"
                    >
                      <option value="static_armed">Static Armed Guard</option>
                      <option value="static_unarmed">Static Unarmed Guard</option>
                      <option value="patrol_vehicle">Mobile Patrol Vehicle + Supervisor</option>
                      <option value="event_guard">Event Host Guard (1 Day Event)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Guards / Assets Count</label>
                    <select
                      name="guardCount"
                      value={calc.guardCount}
                      onChange={handleCalcChange}
                      className="form-select"
                    >
                      {[1, 2, 3, 4, 5, 6, 8, 10, 15, 20].map((num) => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guard / Asset' : 'Guards / Assets'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {calc.service !== 'event_guard' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="form-group">
                      <label className="form-label">Shift Coverage (Daily)</label>
                      <select
                        name="duration"
                        value={calc.duration}
                        onChange={handleCalcChange}
                        className="form-select"
                      >
                        <option value="12h">12 Hours / Day (1 Guard Shift)</option>
                        <option value="24h">24 Hours / Day (2 Guard Shifts)</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Deployment Contract Length</label>
                      <select
                        name="contractLength"
                        value={calc.contractLength}
                        onChange={handleCalcChange}
                        className="form-select"
                      >
                        <option value="1m">1 Month (Standard Rate)</option>
                        <option value="6m">6 Months (5% Discount)</option>
                        <option value="12m">12 Months (10% Discount)</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Estimate Result Panel */}
                <div className="bg-[#07080a] border border-white/5 p-6 rounded-md flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-bold">Estimated Cost</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#d32f2f] font-outfit">
                      PKR {estimatedCost.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-slate-500 mt-1 font-sans">
                      {calc.service === 'event_guard' ? '* Estimated cost per event session' : '* Estimated monthly billing (taxes not included)'}
                    </span>
                  </div>
                  <span className="text-slate-400 text-xs text-center sm:text-right font-sans leading-relaxed max-w-[200px]">
                    Estimates are subject to site survey and security risk assessment.
                  </span>
                </div>
              </div>

              {/* Consultation request form */}
              <div id="quote-form-panel" className="glass-card border border-white/5 overflow-hidden">
                {/* Clickable Toggle Header */}
                <button
                  type="button"
                  onClick={() => setIsFormOpen((prev) => !prev)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/5 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <Send size={18} className="text-[#d32f2f]" />
                    <h3 className="text-2xl font-bold text-white font-outfit uppercase tracking-wider">
                      Submit Quote Inquiry
                    </h3>
                  </div>
                  <ChevronDown
                    size={20}
                    className="text-slate-400 transition-transform duration-300"
                    style={{ transform: isFormOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>

                {/* Collapsible Form Body */}
                {isFormOpen && (
                  <div className="px-6 pb-8 animate-fade-in">
                    {isSuccess ? (
                      <div className="flex flex-col items-center text-center py-8 gap-4 animate-fade-in">
                        <div className="w-14 h-14 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center text-green-500">
                          <Check size={28} />
                        </div>
                        <h4 className="text-white font-bold text-lg font-outfit uppercase">Inquiry Received!</h4>
                        <p className="text-slate-300 text-xs font-sans max-w-sm">
                          We have received your estimate query. Mr. Safdar Malik (General Manager Marketing) will reach out to you within 2 hours to confirm deployment terms and finalize plans.
                        </p>
                        <button
                          onClick={() => setIsSuccess(false)}
                          className="btn btn-secondary text-xs uppercase tracking-wider mt-2"
                        >
                          Submit Another Query
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleFormSubmit} className="flex flex-col">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="form-group">
                            <label className="form-label">Your Name *</label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="e.g. Tariq Mehmood"
                              className="form-input"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label">Phone Number *</label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="e.g. 03301234567"
                              className="form-input"
                              required
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="form-label">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="e.g. client@domain.com"
                            className="form-input"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label className="form-label">Deployment Specifics &amp; Special Requests</label>
                          <textarea
                            name="notes"
                            value={formData.notes}
                            onChange={handleInputChange}
                            placeholder="e.g. Gated society security at Green Valley, need 4 static guards for 12h shifts and 1 mobile supervisor..."
                            className="form-textarea"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn btn-primary w-full uppercase tracking-wider text-xs rounded-sm flex items-center justify-center gap-2 mt-2"
                        >
                          {isSubmitting ? (
                            <span>Sending Quote Request...</span>
                          ) : (
                            <>
                              <Send size={14} />
                              <span>Request Contract Draft</span>
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Network Section with Annotated Map */}
      <section className="section-padding bg-[#11131c] border-t border-white/5">
        <div className="container">
          <div className="text-center max-w-xl mx-auto mb-12">
            <MapPin className="text-[#d32f2f] mx-auto mb-3" size={32} />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase font-outfit text-center">Our Regional Network</h2>
            <p className="text-xs text-slate-400 font-sans mt-2 text-center">
              With 9 tactical branches across Pakistan, Al-Marsoos Security provides seamless protective coverage nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Interactive Annotated Map Column (lg:col-span-7) */}
            <div className="lg:col-span-7 flex justify-center w-full">
              <div className="relative w-full max-w-[550px] aspect-[4/3] bg-[#07080a] border border-white/5 rounded-lg overflow-hidden p-4 flex items-center justify-center">
                {/* SVG Map of Pakistan Outline (Styled and Annotated) */}
                <svg viewBox="0 0 500 400" className="w-full h-full text-slate-700 select-none">
                  {/* Decorative background grid lines */}
                  <g stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.03" strokeDasharray="5 5">
                    <line x1="50" y1="0" x2="50" y2="400" />
                    <line x1="150" y1="0" x2="150" y2="400" />
                    <line x1="250" y1="0" x2="250" y2="400" />
                    <line x1="350" y1="0" x2="350" y2="400" />
                    <line x1="450" y1="0" x2="450" y2="400" />
                    <line x1="0" y1="80" x2="500" y2="80" />
                    <line x1="0" y1="160" x2="500" y2="160" />
                    <line x1="0" y1="240" x2="500" y2="240" />
                    <line x1="0" y1="320" x2="500" y2="320" />
                  </g>
                  
                  {/* Simplified schematic path outline of Pakistan provinces */}
                  {/* Gilgit Baltistan */}
                  <path d="M 320,30 L 380,40 L 400,90 L 370,120 L 320,110 L 300,70 Z" fill="#1b1c24" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                  {/* Azad Kashmir */}
                  <path d="M 330,110 L 360,125 L 340,165 L 315,150 Z" fill="#2d1212" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                  {/* Khyber Pakhtunkhwa (KPK) */}
                  <path d="M 270,70 L 310,75 L 315,140 L 290,170 L 270,140 L 250,110 Z" fill="#1b1c24" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                  {/* Punjab */}
                  <path d="M 290,170 L 340,165 L 360,220 L 300,290 L 260,250 L 275,200 Z" fill="#151720" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                  {/* Balochistan */}
                  <path d="M 120,200 L 250,210 L 270,260 L 210,330 L 140,320 Z" fill="#11131c" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                  {/* Sindh */}
                  <path d="M 210,330 L 270,270 L 300,290 L 260,380 L 190,360 Z" fill="#1b1c24" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

                  {/* Province Labels */}
                  <text x="345" y="70" fill="rgba(255,255,255,0.15)" fontSize="10" fontWeight="bold" fontFamily="sans-serif">GILGIT-BALTISTAN</text>
                  <text x="250" y="90" fill="rgba(255,255,255,0.15)" fontSize="10" fontWeight="bold" fontFamily="sans-serif" transform="rotate(-30 250 90)">KPK</text>
                  <text x="310" y="220" fill="rgba(255,255,255,0.15)" fontSize="10" fontWeight="bold" fontFamily="sans-serif">PUNJAB</text>
                  <text x="160" y="260" fill="rgba(255,255,255,0.15)" fontSize="10" fontWeight="bold" fontFamily="sans-serif">BALOCHISTAN</text>
                  <text x="220" y="325" fill="rgba(255,255,255,0.15)" fontSize="10" fontWeight="bold" fontFamily="sans-serif">SINDH</text>
                  <text x="350" y="145" fill="rgba(255,255,255,0.15)" fontSize="8" fontWeight="bold" fontFamily="sans-serif">AJK</text>

                  {/* Annotated Markers with Hover Highlights */}
                  {branches.map((b) => (
                    <g 
                      key={b.id} 
                      className="cursor-pointer group/pin"
                      onClick={() => setSelectedBranch(b)}
                    >
                      {/* Outer pulse effect */}
                      <circle 
                        cx={b.x} 
                        cy={b.y} 
                        r="8" 
                        fill={selectedBranch.id === b.id ? '#d32f2f' : '#ffffff'} 
                        className={selectedBranch.id === b.id ? 'animate-pulse' : 'opacity-20 group-hover/pin:opacity-40'} 
                        style={{ transformOrigin: `${b.x}px ${b.y}px` }}
                      />
                      {/* Inner solid circle */}
                      <circle 
                        cx={b.x} 
                        cy={b.y} 
                        r="4" 
                        fill={selectedBranch.id === b.id ? '#d32f2f' : '#ffffff'} 
                        stroke="#0a0b0e" 
                        strokeWidth="1"
                        className="group-hover/pin:fill-[#d32f2f] transition-colors"
                      />
                      {/* Name label tag */}
                      <text 
                        x={b.x + 8} 
                        y={b.y + 3} 
                        fill={selectedBranch.id === b.id ? '#d32f2f' : '#cbd5e1'} 
                        fontSize="8" 
                        fontWeight="bold" 
                        fontFamily="sans-serif"
                        className="group-hover/pin:fill-[#d32f2f] transition-colors"
                      >
                        {b.city}
                      </text>
                    </g>
                  ))}
                </svg>

                <span className="absolute bottom-3 right-3 text-[9px] text-slate-500 font-sans">
                  Click markers to view details
                </span>
              </div>
            </div>

            {/* Selected Branch Details Column (lg:col-span-5) */}
            <div className="lg:col-span-5 w-full">
              <div className="glass-card p-6 border border-white/10 flex flex-col gap-6 relative min-h-[300px] justify-between">
                
                <div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#d32f2f]/10 border border-[#d32f2f]/30 flex items-center justify-center text-[#d32f2f]">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#d32f2f] uppercase font-bold tracking-widest block text-left">Active Station</span>
                      <h4 className="text-xl font-extrabold text-white font-outfit uppercase tracking-wider text-left">{selectedBranch.name}</h4>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 mt-6 text-sm border-t border-white/5 pt-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-slate-500 text-[10px] uppercase font-sans text-left">Office Address</span>
                      <p className="text-slate-300 text-xs font-sans leading-relaxed text-justify pr-2">
                        {selectedBranch.address}
                      </p>
                    </div>

                    {selectedBranch.phone && (
                      <div className="flex flex-col gap-1">
                        <span className="text-slate-500 text-[10px] uppercase font-sans text-left">Branch Contacts</span>
                        <p className="text-slate-300 text-xs font-sans font-semibold text-left">
                          {selectedBranch.phone}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="border-t border-white/5 pt-4 mt-4 flex items-center justify-between text-[10px] text-slate-500 font-sans w-full">
                  <span>Operational Vetting Status: Vetted</span>
                  <span className="text-[#d32f2f] font-bold uppercase tracking-wider">Active</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
