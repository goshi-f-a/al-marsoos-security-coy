import React, { useState } from 'react';
import { UserCheck, BookOpen, Scale, Award, Send, Check } from 'lucide-react';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'guard',
    experience: '1-3',
    background: 'civilian',
    bio: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in the required fields (Name, Email, Phone).');
      return;
    }

    setIsSubmitting(true);

    // Simulate Server Submission API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: 'guard',
        experience: '1-3',
        background: 'civilian',
        bio: ''
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full font-outfit bg-[#0a0b0e] pt-24 min-h-screen">
      {/* Header */}
      <section className="py-12 border-b border-white/5 bg-[#11131c]">
        <div className="container text-center">
          <span className="badge mb-3">Join Our Elite Team</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gradient-red uppercase font-outfit">
            Careers at Al-Marsoos
          </h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2 font-sans">
            Build a career in security operations driven by military standards, rigorous training, and professional code.
          </p>
        </div>
      </section>

      {/* Recruitment Standards Grid */}
      <section className="py-16 bg-[#0a0b0e]">
        <div className="container">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">Our Recruitment Standards</h2>
            <p className="text-xs text-slate-400 font-sans mt-2">
              At Al-Marsoos Security, we enforce tough checks and standards. We protect elite clients and demand total professional integrity.
            </p>
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
      <section className="py-16 bg-[#11131c] border-t border-b border-white/5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
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
                    <div className="text-xs text-slate-400 flex flex-col gap-1.5 font-sans">
                      <p><strong>Location:</strong> {job.location}</p>
                      <p><strong>Requirements:</strong> {job.requirements}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Submission Form */}
            <div className="lg:col-span-6">
              <div className="glass-card p-8 sm:p-10 border border-white/5">
                <h3 className="text-2xl font-extrabold text-white font-outfit uppercase tracking-wider mb-6">
                  Online Recruitment Form
                </h3>

                {isSuccess ? (
                  <div className="flex flex-col items-center text-center py-12 gap-4 animate-fade-in">
                    <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center text-green-500">
                      <Check size={32} />
                    </div>
                    <h4 className="text-white font-bold text-lg font-outfit uppercase">Application Submitted!</h4>
                    <p className="text-slate-300 text-xs font-sans max-w-sm">
                      Thank you for applying to AMS. Our recruitment officer will review your application and contact you for physical and document verification tests in Islamabad.
                    </p>
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
                        placeholder="e.g. name@domain.com"
                        className="form-input"
                        required
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

                    {/* Resume Attachment Mock */}
                    <div className="form-group">
                      <label className="form-label">Attach CV / Vetting Document (Mocked)</label>
                      <div className="border border-dashed border-white/10 rounded-md p-4 text-center text-xs text-slate-500 hover:border-[#d32f2f] cursor-pointer transition-colors">
                        Drag & Drop or Click to upload PDF CV (Max 5MB)
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary w-full uppercase tracking-wider text-xs rounded-sm mt-4 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Submitting Application...</span>
                      ) : (
                        <>
                          <Send size={14} />
                          <span>Submit Application</span>
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

export default Careers;
