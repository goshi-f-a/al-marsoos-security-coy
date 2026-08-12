import React, { useState } from 'react';
import { UserCheck, BookOpen, Scale, Check, Shield, Mail, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/device';

const Careers = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'guard',
    experience: '1-3',
    background: 'civilian',
    bio: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const activeJobs = [
    {
      id: 'guard',
      title: 'Security Guard (Armed / Unarmed)',
      location: 'Islamabad / Rawalpindi',
      type: 'Full-Time / Shifts',
      requirements: 'Height: 5ft 8in, Ex-Military preferred. For civilians: Clean record, physical fitness certificate.'
    },
    {
      id: 'supervisor',
      title: 'Security Supervisor',
      location: 'Islamabad HQ',
      type: 'Full-Time',
      requirements: 'Retired Junior Commissioned Officer (JCO) / NCO from Pakistan Army. Strong leadership skills.'
    },
    {
      id: 'operator',
      title: 'CCTV Control Room Operator',
      location: 'Islamabad Office',
      type: 'Full-Time',
      requirements: 'Experience in operating modern CCTV consoles, alert logging, and technical security tools.'
    }
  ];

  const buildCareerDraftMessage = (data) => {
    const posMap = {
      guard: 'Security Guard (Armed / Unarmed)',
      supervisor: 'Security Supervisor (Ex-Military)',
      operator: 'CCTV Control Room Operator'
    };
    const backgroundMap = {
      civilian: 'Civilian (No Military Background)',
      army: 'Retired from Pakistan Army',
      navy_airforce: 'Retired from Navy / Air Force',
      police: 'Retired from Police / Rangers'
    };
    const expMap = {
      none: 'No experience (Trainee)',
      '1-3': '1 to 3 Years',
      '3-5': '3 to 5 Years',
      '5+': '5+ Years'
    };

    const posName = posMap[data.position] || data.position;
    const bgName = backgroundMap[data.background] || data.background;
    const expName = expMap[data.experience] || data.experience;

    return `*AL-MARSOOS SECURITY - EMPLOYMENT APPLICATION*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 *Applicant Name:* ${data.name.trim() || '[Applicant Name]'}
📞 *Phone:* ${data.phone.trim() || '[Phone Number]'}
✉️ *Email:* ${data.email.trim() || 'Not provided'}
🎯 *Target Position:* ${posName}
⏳ *Security Experience:* ${expName}
🎖️ *Background Status:* ${bgName}

📝 *Background & Experience Summary:*
${data.bio.trim() || 'Physical fitness details & deployment background to be reviewed.'}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Sent from Al-Marsoos Recruitment Portal`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmailSubmit = () => {
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please fill in the required fields (Full Name and Contact Number).');
      return;
    }
    const posMap = {
      guard: 'Security Guard',
      supervisor: 'Security Supervisor',
      operator: 'CCTV Control Room'
    };
    const posName = posMap[formData.position] || formData.position;
    const subject = `[AMS-GUARD-EMPLOYMENT] ${formData.name.trim()} - Application for ${posName}`;
    const body = buildCareerDraftMessage(formData);
    const mailtoUrl = `mailto:almarsoos.sec@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setIsSuccess(true);
  };

  const handleWhatsAppSubmit = () => {
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please fill in the required fields (Full Name and Contact Number).');
      return;
    }
    const body = buildCareerDraftMessage(formData);
    const url = getWhatsAppUrl('923106460024', body);
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsSuccess(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEmailSubmit();
  };

  return (
    <div className="flex flex-col w-full font-outfit bg-[#0a0b0e] page-wrapper-spacing min-h-screen">
      {/* Header */}
      <section className="py-12 border-b border-white/5 bg-[#11131c]">
        <div className="container flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gradient-red uppercase font-outfit">
            Careers at Al-Marsoos
          </h1>
          <p className="text-slate-400 text-sm max-w-xl mt-2 font-sans text-center">
            Build a career in security operations driven by military standards, rigorous training, and professional code.
          </p>
        </div>
      </section>

      {/* Recruitment Standards Grid */}
      <section className="section-spacing bg-[#0a0b0e]">
        <div className="container">
          <div className="w-full flex justify-center mb-12">
            <div className="flex flex-col items-center text-center max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">Our Recruitment Standards</h2>
              <p className="text-xs text-slate-400 font-sans mt-2 text-center">
                At Al-Marsoos Security, we enforce tough checks and standards. We protect elite clients and demand total professional integrity.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 flex flex-col gap-4 items-start">
              <div className="p-3 bg-[#d32f2f]/10 border border-[#d32f2f]/30 rounded-lg text-[#d32f2f]">
                <UserCheck size={24} />
              </div>
              <h4 className="text-white font-bold text-base font-outfit uppercase">Rigorous Background Vetting</h4>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Every guard must produce police clearance records, verified CNIC biometric checks, and credible character references before hiring.
              </p>
            </div>

            <div className="glass-card p-8 flex flex-col gap-4 items-start">
              <div className="p-3 bg-[#d32f2f]/10 border border-[#d32f2f]/30 rounded-lg text-[#d32f2f]">
                <BookOpen size={24} />
              </div>
              <h4 className="text-white font-bold text-base font-outfit uppercase">AMS Training Modules</h4>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Recruits go through physical fitness drills, access control register entries, weapon training, emergency response drills, and customer service etiquettes.
              </p>
            </div>

            <div className="glass-card p-8 flex flex-col gap-4 items-start">
              <div className="p-3 bg-[#d32f2f]/10 border border-[#d32f2f]/30 rounded-lg text-[#d32f2f]">
                <Scale size={24} />
              </div>
              <h4 className="text-white font-bold text-base font-outfit uppercase">Military Drill Conduct</h4>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Managed directly by ex-military supervisors, our personnel maintain strict uniform codes, punctual shift handovers, and clean security posturing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Form & Job Listings */}
      <section className="section-spacing bg-[#11131c] border-t border-b border-white/5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Job Openings Panel */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <h3 className="text-2xl font-extrabold text-white font-outfit uppercase tracking-wider">
                Current Opportunities
              </h3>
              <p className="text-slate-400 text-sm font-sans mb-2">
                Review our active openings and apply using the form. Ex-servicemen (Army/Navy/Air Force) receive high priority for supervisor positions.
              </p>

              <div className="flex flex-col gap-6">
                {activeJobs.map((job) => (
                  <div key={job.id} className="glass-card p-6 border border-white/5 flex flex-col gap-3">
                    <div className="flex justify-between items-start gap-4">
                      <h4 className="text-white font-bold text-base font-outfit">{job.title}</h4>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#d32f2f] bg-[#d32f2f]/10 px-2.5 py-1 rounded-sm">
                        {job.type}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 flex flex-col gap-1.5 font-sans mb-1">
                      <p><strong>Location:</strong> {job.location}</p>
                      <p><strong>Requirements:</strong> {job.requirements}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, position: job.id }));
                        setIsFormOpen(true);
                        setTimeout(() => {
                          const formElement = document.getElementById('recruitment-form-container');
                          if (formElement) {
                            formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          }
                        }, 100);
                      }}
                      className="btn btn-secondary text-[10px] py-1.5 px-4 w-fit tracking-wider uppercase rounded-sm border border-[#d32f2f]/30 text-[#d32f2f] hover:bg-[#d32f2f] hover:text-white transition-all duration-300"
                    >
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Submission Form */}
            <div className="lg:col-span-6" id="recruitment-form-container">
              {isFormOpen ? (
                <div className="glass-card p-8 sm:p-10 border border-white/5 relative animate-fade-in">
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="absolute top-4 right-4 text-[10px] font-bold text-slate-500 hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    [ Close Form ]
                  </button>
                  <h3 className="text-2xl font-extrabold text-white font-outfit uppercase tracking-wider mb-2">
                    Online Recruitment Form
                  </h3>
                  <p className="text-xs text-slate-400 font-sans mb-6">
                    Applications are routed directly to <span className="text-white font-semibold">almarsoos.sec@gmail.com</span> with tag <span className="text-[#d32f2f] font-mono font-bold">[AMS-GUARD-EMPLOYMENT]</span>.
                  </p>

                {isSuccess ? (
                  <div className="flex flex-col items-center text-center py-10 gap-4 animate-fade-in">
                    <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center text-green-500">
                      <Check size={32} />
                    </div>
                    <h4 className="text-white font-bold text-lg font-outfit uppercase">Application Dispatched!</h4>
                    <p className="text-slate-300 text-xs font-sans max-w-sm">
                      Your recruitment application has been prepared. You can connect directly with our recruitment desk on Email or WhatsApp:
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm mt-2">
                      <button
                        type="button"
                        onClick={handleEmailSubmit}
                        className="flex-1 py-2.5 px-3 rounded-sm bg-[#1e293b] hover:bg-[#334155] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 border border-white/10 transition-all cursor-pointer"
                      >
                        <Mail size={14} className="text-[#d32f2f]" />
                        <span>Send via Email</span>
                      </button>
                      <a
                        href={getWhatsAppUrl('923106460024', buildCareerDraftMessage(formData))}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 px-3 rounded-sm bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md transition-all"
                      >
                        <MessageCircle size={14} />
                        <span>WhatsApp Chat</span>
                      </a>
                    </div>

                    <button
                      onClick={() => setIsSuccess(false)}
                      className="btn btn-secondary text-xs uppercase tracking-wider mt-4"
                    >
                      Apply for Another Position
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="form-group">
                        <label className="form-label">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Asim Raza"
                          className="form-input"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Contact Number *</label>
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
                        placeholder="e.g. applicant@domain.com"
                        className="form-input"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="form-group">
                        <label className="form-label">Target Position</label>
                        <select
                          name="position"
                          value={formData.position}
                          onChange={handleInputChange}
                          className="form-select"
                        >
                          <option value="guard">Security Guard</option>
                          <option value="supervisor">Security Supervisor</option>
                          <option value="operator">CCTV Control Room</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Security Experience</label>
                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="form-select"
                        >
                          <option value="none">No experience (Trainee)</option>
                          <option value="1-3">1 to 3 Years</option>
                          <option value="3-5">3 to 5 Years</option>
                          <option value="5+">5+ Years</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Background / Ex-Serviceman Status</label>
                      <select
                        name="background"
                        value={formData.background}
                        onChange={handleInputChange}
                        className="form-select"
                      >
                        <option value="civilian">Civilian (No Military Background)</option>
                        <option value="army">Retired from Pakistan Army</option>
                        <option value="navy_airforce">Retired from Navy / Air Force</option>
                        <option value="police">Retired from Police / Rangers</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Brief Background Summary / Pitch</label>
                      <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        placeholder="Detail your height, physical fitness, previous security deployments, or military regimental details..."
                        className="form-textarea"
                      />
                    </div>

                    {/* Submit Dispatch Action Buttons */}
                    <div className="flex flex-col gap-3 mt-3">
                      {/* Email Dispatch with [AMS-GUARD-EMPLOYMENT] Tag */}
                      <button
                        type="button"
                        onClick={handleEmailSubmit}
                        className="w-full py-3 px-4 rounded-sm bg-[#d32f2f] hover:bg-[#b71c1c] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                      >
                        <Mail size={15} />
                        <span>Send Application via Email (almarsoos.sec@gmail.com)</span>
                      </button>

                      {/* WhatsApp Instant Send */}
                      <button
                        type="button"
                        onClick={handleWhatsAppSubmit}
                        className="w-full py-3 px-4 rounded-sm bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(37,211,102,0.3)] hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all cursor-pointer"
                      >
                        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                        </svg>
                        <span>Send Application via WhatsApp</span>
                      </button>
                    </div>
                  </form>
                )}

              </div>
            ) : (
              <div className="glass-card p-8 sm:p-10 border border-white/5 flex flex-col items-center justify-center text-center min-h-[350px] bg-[#1a1c24]/30 w-full">
                <Shield className="text-[#d32f2f] mb-4 animate-pulse" size={40} />
                <h4 className="text-white font-bold text-lg uppercase tracking-wider font-outfit">Ready to Join Us?</h4>
                <p className="text-xs text-slate-400 font-sans max-w-xs mt-2 mb-6 leading-relaxed">
                  Click "Apply Now" on any job opportunity or click the button below to open the recruitment and vetting application form.
                </p>
                <button
                  type="button" 
                  onClick={() => setIsFormOpen(true)}
                  className="btn btn-primary text-xs uppercase tracking-wider rounded-sm px-6 cursor-pointer"
                >
                  Open Application Form
                </button>
              </div>
            )}
          </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
