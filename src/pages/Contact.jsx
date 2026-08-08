import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Calculator, ShieldCheck, Send, Check } from 'lucide-react';

const Contact = () => {
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
  const [isSuccess, setIsSuccess] = useState(false);

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
    <div className="flex flex-col w-full font-outfit bg-[#0a0b0e] pt-24 min-h-screen">
      {/* Header */}
      <section className="py-12 border-b border-white/5 bg-[#11131c]">
        <div className="container text-center">
          <span className="badge mb-3">Get in Touch</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gradient-red uppercase font-outfit">
            Contact & Quote Calculator
          </h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2 font-sans">
            Calculate estimated security costs instantly and submit quote requests directly to our marketing team.
          </p>
        </div>
      </section>

      {/* Calculator & Contact Details Info */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
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
              <div className="glass-card p-8 border border-white/5">
                <h3 className="text-xl font-bold text-white font-outfit uppercase tracking-wider mb-6">
                  Submit Quote Inquiry
                </h3>

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
                      <label className="form-label">Deployment Specifics & Special Requests</label>
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

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
