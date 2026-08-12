import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, MapPin, Calculator, ShieldCheck, Send, Check, ChevronDown, ExternalLink, Navigation, CheckCircle2, Smartphone, MessageCircle } from 'lucide-react';
import { isMobileDevice, getWhatsAppUrl, getGsmSmsUrl } from '../utils/device';

const branches = [
  {
    id: 'islamabad',
    city: 'Islamabad (HQ)',
    name: 'Islamabad Headquarters',
    address: 'Office # 1, Gillani Plaza, Motorway Chowk, Peshawar Road, Islamabad, Pakistan.',
    phone: '0310 6460024',
    mapUrl: 'https://maps.app.goo.gl/qgc9Wy4KhRToyGZa9',
    x: 315,
    y: 120
  },
  {
    id: 'rawalpindi',
    city: 'Rawalpindi',
    name: 'Rawalpindi Regional Office',
    address: 'Office No. 19, Services Plaza, Mall Road, Saddar, Rawalpindi, Pakistan.',
    phone: '0310 6460024',
    mapUrl: 'https://maps.google.com/?q=Services+Plaza+Mall+Road+Saddar+Rawalpindi',
    x: 310,
    y: 135
  },
  {
    id: 'faisalabad',
    city: 'Faisalabad',
    name: 'Faisalabad Regional Office',
    address: 'Office No. 5, First Floor, Madina Market, Sugar Morre, Sheikhupura Road, Faisalabad, Pakistan.',
    phone: '0310 6460024',
    mapUrl: 'https://maps.google.com/?q=Madina+Market+Sugar+Morre+Sheikhupura+Road+Faisalabad',
    x: 290,
    y: 190
  },
  {
    id: 'muzaffarabad',
    city: 'Muzaffarabad',
    name: 'Muzaffarabad Branch (AJK)',
    address: 'Office No. 7, Near WAPDA Town, Dhana, Muzaffarabad, Azad Kashmir.',
    phone: '0310 6460024',
    mapUrl: 'https://maps.google.com/?q=WAPDA+Town+Dhana+Muzaffarabad',
    x: 335,
    y: 105
  },
  {
    id: 'haripur',
    city: 'Haripur',
    name: 'Haripur Branch (KPK)',
    address: 'Office No. 8, Second Floor, Doctor Plaza, Circular Road, Haripur, Khyber Pakhtunkhwa.',
    phone: '0310 6460024',
    mapUrl: 'https://maps.google.com/?q=Doctor+Plaza+Circular+Road+Haripur',
    x: 305,
    y: 90
  },
  {
    id: 'gujranwala',
    city: 'Gujranwala',
    name: 'Gujranwala Regional Office',
    address: 'Office No. 397-A, Model Town, Gujranwala, Punjab, Pakistan.',
    phone: '0310 6460024',
    mapUrl: 'https://maps.google.com/?q=Model+Town+Gujranwala+Punjab',
    x: 330,
    y: 160
  },
  {
    id: 'quetta',
    city: 'Quetta',
    name: 'Quetta Branch (Balochistan)',
    address: 'Chaman Plaza, Zarghun Road, Quetta, Balochistan, Pakistan.',
    phone: '0310 6460024',
    mapUrl: 'https://maps.google.com/?q=Chaman+Plaza+Zarghun+Road+Quetta',
    x: 180,
    y: 250
  },
  {
    id: 'gilgit',
    city: 'Gilgit',
    name: 'Gilgit Branch (Gilgit-Baltistan)',
    address: 'NLI Plaza, Gilgit, Gilgit-Baltistan, Pakistan.',
    phone: '0310 6460024',
    mapUrl: 'https://maps.google.com/?q=NLI+Plaza+Gilgit+Pakistan',
    x: 360,
    y: 55
  },
  {
    id: 'karachi',
    city: 'Karachi',
    name: 'Karachi Regional Office',
    address: 'Flat AB-04, 2nd Floor, DHA Phase 2, Karachi, Sindh, Pakistan.',
    phone: '0310 6460024',
    mapUrl: 'https://maps.google.com/?q=DHA+Phase+2+Karachi+Sindh',
    x: 200,
    y: 360
  }
];

const RATES = {
  static_armed: { '12h': 45000, '24h': 85000 },
  static_unarmed: { '12h': 35000, '24h': 65000 },
  event_guard: { 'event': 5000 },
  patrol_vehicle: { '12h': 120000, '24h': 220000 }
};

const Contact = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [isNotesEdited, setIsNotesEdited] = useState(false);
  const [calc, setCalc] = useState({
    service: 'static_armed',
    guardCount: 1,
    duration: '12h',
    contractLength: '1m'
  });
  const [estimatedCost, setEstimatedCost] = useState(45000);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);
  const [lastSubmittedMessage, setLastSubmittedMessage] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  const buildDraftMessage = (form, calcConfig, cost) => {
    const serviceNames = {
      static_armed: 'Static Armed Guard',
      static_unarmed: 'Static Unarmed Guard',
      patrol_vehicle: 'Mobile Patrol Vehicle + Supervisor',
      event_guard: 'Event Host Guard (1 Day Event)'
    };
    const shiftLabels = {
      '12h': '12 Hours / Day (1 Guard Shift)',
      '24h': '24 Hours / Day (2 Guard Shifts)'
    };
    const contractLabels = {
      '1m': '1 Month (Standard Rate)',
      '6m': '6 Months (5% Discount)',
      '12m': '12 Months (10% Discount)'
    };

    const sLabel = serviceNames[calcConfig.service] || calcConfig.service;
    const shiftText = calcConfig.service === 'event_guard' ? 'Single Event Session' : (shiftLabels[calcConfig.duration] || calcConfig.duration);
    const contractText = calcConfig.service === 'event_guard' ? 'Event Date Coverage' : (contractLabels[calcConfig.contractLength] || calcConfig.contractLength);
    const billingPeriod = calcConfig.service === 'event_guard' ? '/ event' : '/ month';

    return `*AL-MARSOOS SECURITY - QUOTE INQUIRY*
━━━━━━━━━━━━━━━━━━━━
👤 *Client Name:* ${form.name.trim() ? form.name.trim() : '[Your Name]'}
📞 *Phone:* ${form.phone.trim() ? form.phone.trim() : '[Your Phone]'}
✉️ *Email:* ${form.email.trim() ? form.email.trim() : 'Not provided'}

🛡️ *Service:* ${sLabel}
👥 *Guards/Assets:* ${calcConfig.guardCount} Guard(s)
⏱️ *Shift Coverage:* ${shiftText}
📅 *Contract Length:* ${contractText}
💰 *Estimated Cost:* PKR ${cost.toLocaleString()} ${billingPeriod} (negotiation possible)

📍 *Location & Special Requirements:*
[e.g. Islamabad premises, main gate & surveillance check]
━━━━━━━━━━━━━━━━━━━━
Sent from Al-Marsoos Official Website`;
  };

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  // Initialize pre-filled note on first render
  useEffect(() => {
    setFormData((prev) => {
      if (!prev.notes) {
        return { ...prev, notes: buildDraftMessage(prev, calc, 45000) };
      }
      return prev;
    });
  }, []);

  // Auto-open form and scroll to it when triggered from "Get a Quote" button (?quote=true)
  useEffect(() => {
    if (searchParams.get('quote') === 'true') {
      setIsFormOpen(true);
      setSearchParams({}, { replace: true });
      setTimeout(() => {
        const el = document.getElementById('quote-form-panel');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 150);
    }
  }, [searchParams, setSearchParams]);

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
    const finalCost = Math.round(cost);
    setEstimatedCost(finalCost);

    // Keep textarea updated in real time if user hasn't typed custom override in notes
    if (!isNotesEdited) {
      setFormData((prev) => ({
        ...prev,
        notes: buildDraftMessage(prev, calc, finalCost)
      }));
    }
  }, [calc, isNotesEdited]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'notes') {
      setIsNotesEdited(true);
      setFormData((prev) => ({ ...prev, notes: value }));
    } else {
      setFormData((prev) => {
        const nextForm = { ...prev, [name]: value };
        if (!isNotesEdited) {
          nextForm.notes = buildDraftMessage(nextForm, calc, estimatedCost);
        }
        return nextForm;
      });
    }
  };

  const handleCalcChange = (e) => {
    const { name, value } = e.target;
    setCalc((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please enter your Name and Phone Number to submit the quote.');
      return false;
    }
    return true;
  };

  const handleWhatsAppDispatch = () => {
    if (!validateForm()) return;
    const msg = formData.notes.trim() || buildDraftMessage(formData, calc, estimatedCost);
    setLastSubmittedMessage(msg);
    const url = getWhatsAppUrl('923106460024', msg);
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsSuccess(true);
  };

  const handleEmailDispatch = () => {
    if (!validateForm()) return;
    const serviceNames = {
      static_armed: 'Static Armed Guard',
      static_unarmed: 'Static Unarmed Guard',
      patrol_vehicle: 'Mobile Patrol Vehicle',
      event_guard: 'Event Host Guard'
    };
    const sLabel = serviceNames[calc.service] || calc.service;
    const subject = `[AMS-QUOTE-INQUIRY] ${formData.name.trim()} - ${sLabel} Quote Request`;
    const msg = formData.notes.trim() || buildDraftMessage(formData, calc, estimatedCost);
    setLastSubmittedMessage(msg);
    const mailtoUrl = `mailto:almarsoos.sec@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(msg)}`;
    window.location.href = mailtoUrl;
    setIsSuccess(true);
  };

  const handleGsmSmsDispatch = () => {
    if (!validateForm()) return;
    const msg = formData.notes.trim() || buildDraftMessage(formData, calc, estimatedCost);
    setLastSubmittedMessage(msg);
    const url = getGsmSmsUrl('+923106460024', msg);
    window.location.href = url;
    setIsSuccess(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleWhatsAppDispatch();
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
      <section className="py-12 sm:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* Left Side: Contact details and office location map (Left Half) */}
            <div className="md:col-span-5 flex flex-col gap-6 w-full">
              <div className="glass-card p-8 border border-white/5 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white font-outfit uppercase tracking-wider">
                    Islamabad Headquarters
                  </h3>
                  <span className="flex items-center gap-1 text-[10px] uppercase font-bold text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full">
                    <CheckCircle2 size={11} />
                    Verified On Map
                  </span>
                </div>
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
                      <a
                        href="https://maps.app.goo.gl/qgc9Wy4KhRToyGZa9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#d32f2f] hover:text-white font-semibold mt-2 transition-colors group"
                      >
                        <span>Open on Google Maps</span>
                        <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <MessageCircle size={20} className="text-[#25D366] shrink-0" />
                    <div>
                      <h5 className="text-white font-bold font-outfit text-sm">WhatsApp Messaging</h5>
                      <p className="text-xs text-slate-400 font-sans mt-0.5">
                        <a
                          href={getWhatsAppUrl('923106460024', 'Hello Al-Marsoos Security, I would like to inquire about your security services.')}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-[#25D366] font-medium transition-colors"
                        >
                          WhatsApp: 0310 6460024 (Chat Online &rarr;)
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail size={20} className="text-[#d32f2f] shrink-0" />
                    <div>
                      <h5 className="text-white font-bold font-outfit text-sm">Email Support</h5>
                      <p className="text-xs text-slate-400 font-sans mt-0.5">
                        Official Inquiries: <a href="mailto:almarsoos.sec@gmail.com" className="text-white hover:text-[#d32f2f] transition-colors">almarsoos.sec@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Interactive Google Map Card */}
              <div className="glass-card p-6 border border-white/5 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#d32f2f] animate-pulse" />
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest text-[#d32f2f]">
                      Live Google Maps Location
                    </h4>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">33.6334° N, 72.9375° E</span>
                </div>

                {/* Google Maps Responsive Frame */}
                <div className="bg-[#07080a] border border-white/10 rounded-lg overflow-hidden relative shadow-lg group">
                  <iframe
                    title="Al-Marsoos Security (Head Office) Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.2113800921634!2d72.9375086!3d33.63339450000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df978a7dcb3cd7%3A0x894cd8f9ac36206c!2sAl-Marsoos%20Security%20(Head%20Office)!5e1!3m2!1sen!2s!4v1786380531784!5m2!1sen!2s"
                    className="w-full h-[280px] border-0 filter contrast-[1.05] opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                  
                  {/* Floating Pin Label Overlay */}
                  <div className="absolute top-3 left-3 pointer-events-none bg-[#0a0b0e]/90 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 shadow-md">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck size={14} className="text-[#d32f2f]" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">
                        Al-Marsoos Security (Head Office)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1 text-xs text-slate-400 font-sans">
                  <span className="text-white font-medium">Motorway, Gillani Rd, Choke, Islamabad, 44150, Pakistan</span>
                </div>

                {/* Action Buttons Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <a
                    href="https://maps.app.goo.gl/qgc9Wy4KhRToyGZa9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary py-2.5 text-xs uppercase tracking-wider flex items-center justify-center gap-2 rounded-sm shadow-md"
                  >
                    <ExternalLink size={14} />
                    <span>Open in Google Maps</span>
                  </a>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=33.6333945,72.9375086"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary py-2.5 text-xs uppercase tracking-wider flex items-center justify-center gap-2 rounded-sm border border-white/10 hover:border-[#d32f2f]/40"
                  >
                    <Navigation size={14} className="text-[#d32f2f]" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side: Calculator and Request Quote form (Right Half) */}
            <div className="md:col-span-7 flex flex-col gap-6 w-full">
              
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
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#d32f2f] font-outfit">
                        PKR {estimatedCost.toLocaleString()}
                      </span>
                      <span className="text-xs font-semibold text-slate-400 font-outfit">
                        (negotiation possible)
                      </span>
                    </div>
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
                        <h4 className="text-white font-bold text-lg font-outfit uppercase">Inquiry Logged!</h4>
                        <p className="text-slate-300 text-xs font-sans max-w-sm">
                          Your quote inquiry has been formatted. You can connect directly with our marketing team on WhatsApp or Email:
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm mt-2">
                          <a
                            href={getWhatsAppUrl('923106460024', lastSubmittedMessage || 'Hello, I submitted a security quote inquiry.')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-2.5 px-3 rounded-sm bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md transition-all"
                          >
                            <MessageCircle size={14} />
                            <span>WhatsApp Chat</span>
                          </a>
                          <button
                            type="button"
                            onClick={handleEmailDispatch}
                            className="flex-1 py-2.5 px-3 rounded-sm bg-[#1e293b] hover:bg-[#334155] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 border border-white/10 transition-all cursor-pointer"
                          >
                            <Mail size={14} className="text-[#d32f2f]" />
                            <span>Send Email</span>
                          </button>
                        </div>

                        <button
                          onClick={() => {
                            setIsSuccess(false);
                            setIsNotesEdited(false);
                            setFormData({
                              name: '',
                              email: '',
                              phone: '',
                              notes: buildDraftMessage({ name: '', email: '', phone: '', notes: '' }, calc, estimatedCost)
                            });
                          }}
                          className="btn btn-secondary text-xs uppercase tracking-wider mt-3"
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
                              placeholder="e.g. 03106460024"
                              className="form-input"
                              required
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="form-label">Email Address (Optional)</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="e.g. client@domain.com"
                            className="form-input"
                          />
                        </div>

                        <div className="form-group">
                          <div className="flex items-center justify-between mb-1">
                            <label className="form-label mb-0">Live Quote Message Preview (Editable)</label>
                            {isNotesEdited && (
                              <button
                                type="button"
                                onClick={() => {
                                  setIsNotesEdited(false);
                                  setFormData((prev) => ({
                                    ...prev,
                                    notes: buildDraftMessage(prev, calc, estimatedCost)
                                  }));
                                }}
                                className="text-[10px] text-[#d32f2f] hover:underline cursor-pointer font-sans font-semibold"
                              >
                                ↺ Reset to Calculator Draft
                              </button>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-400 mb-2 font-sans">
                            Pre-filled with your live quote details. You can review or edit any lines below before sending:
                          </p>
                          <textarea
                            name="notes"
                            rows={11}
                            value={formData.notes}
                            onChange={handleInputChange}
                            className="form-textarea font-mono text-xs leading-relaxed"
                          />
                        </div>

                        {/* Instant Messaging Dispatch Action Buttons */}
                        <div className="flex flex-col gap-3 mt-3">
                          {/* WhatsApp Instant Send */}
                          <button
                            type="button"
                            onClick={handleWhatsAppDispatch}
                            className="w-full py-3 px-4 rounded-sm bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(37,211,102,0.3)] hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all cursor-pointer"
                          >
                            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                            </svg>
                            <span>{isMobile ? 'Send Quote via WhatsApp' : 'Dispatch Quote on WhatsApp Web'}</span>
                          </button>

                          {/* Email Dispatch with [AMS-QUOTE-INQUIRY] Tag */}
                          <button
                            type="button"
                            onClick={handleEmailDispatch}
                            className="w-full py-3 px-4 rounded-sm bg-[#11131c] hover:bg-[#181c28] border border-white/10 hover:border-[#d32f2f]/50 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                          >
                            <Mail size={15} className="text-[#d32f2f]" />
                            <span>Send via Email (almarsoos.sec@gmail.com)</span>
                          </button>

                          {/* GSM SMS Dispatch (Available for Mobile Devices) */}
                          {isMobile && (
                            <button
                              type="button"
                              onClick={handleGsmSmsDispatch}
                              className="w-full py-3 px-4 rounded-sm bg-[#1e293b] hover:bg-[#334155] border border-white/10 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                            >
                              <Smartphone size={15} className="text-[#d32f2f]" />
                              <span>Send via GSM SMS (Cellular SIM)</span>
                            </button>
                          )}
                        </div>
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

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Interactive Annotated Map Column (md:col-span-7) */}
            <div className="md:col-span-7 flex justify-center w-full">
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

            {/* Selected Branch Details Column (md:col-span-5) */}
            <div className="md:col-span-5 w-full">
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
                        <span className="text-slate-500 text-[10px] uppercase font-sans text-left">Branch WhatsApp Messaging</span>
                        <a
                          href={getWhatsAppUrl('923106460024', `Hello Al-Marsoos Security, I am inquiring about security deployments in ${selectedBranch.name}.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#25D366] hover:underline text-xs font-sans font-semibold text-left flex items-center gap-1.5"
                        >
                          <MessageCircle size={13} />
                          <span>WhatsApp: {selectedBranch.phone} (Message Station)</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                <div className="border-t border-white/5 pt-4 mt-4 flex flex-col gap-4 w-full">
                  {selectedBranch.mapUrl && (
                    <a
                      href={selectedBranch.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary py-2 text-[10px] uppercase tracking-wider text-center w-full flex items-center justify-center gap-1.5 border border-white/10 hover:border-[#d32f2f]/30 hover:text-[#d32f2f] transition-all"
                    >
                      <MapPin size={12} />
                      <span>View on Google Maps</span>
                    </a>
                  )}
                  <div className="flex items-center justify-between text-[10px] text-slate-500 font-sans w-full">
                    <span>Operational Vetting Status: Vetted</span>
                    <span className="text-[#d32f2f] font-bold uppercase tracking-wider">Active</span>
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

export default Contact;
