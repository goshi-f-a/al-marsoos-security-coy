import React, { useState } from 'react';
import { ShieldCheck, FileText, CheckCircle, Award, Eye, Download, X, ExternalLink } from 'lucide-react';

const Credentials = () => {
  const [activeTab, setActiveTab] = useState('secp');
  const [isZoomed, setIsZoomed] = useState(false);

  const docs = {
    secp: {
      title: 'SECP Certificate of Incorporation',
      subtitle: 'Securities & Exchange Commission of Pakistan',
      cui: '0260799',
      date: 'June 13, 2024',
      image: '/licenses/secp_cert.png',
      details: [
        { label: 'Registration Law', val: 'Companies Act, 2017 (XIX of 2017)' },
        { label: 'Company Type', val: 'Private Limited Company (Limited by Shares)' },
        { label: 'Registration Authority', val: 'Company Registration Office, Faisalabad' },
        { label: 'Corporate ID Number', val: 'CUI 0260799' }
      ],
      description: 'Official corporate registration certificate certifying the legal existence of Al-Marsoos Security Services (Private) Limited under Pakistani corporate law.'
    },
    punjab: {
      title: 'Punjab Home Department License',
      subtitle: 'Government of the Punjab - Home Department',
      cui: 'PSC-11-763',
      date: 'Active Security License',
      image: '/licenses/punjab_license.png',
      details: [
        { label: 'License Code', val: 'PSC-11-763 (Punjab)' },
        { label: 'Regulatory Authority', val: 'Punjab Home Department, Lahore' },
        { label: 'Enabling Act', val: 'Punjab Private Security Companies (Regulation & Control) Act 2004' },
        { label: 'Operational Scope', val: 'Provision of private security guards across all districts of Punjab' }
      ],
      description: 'Provincial operational security license granted by the Punjab Government Licensing Authority to deploy armed/unarmed security guards.'
    },
    sindh: {
      title: 'Sindh Home Department License',
      subtitle: 'Government of Sindh - Home Department',
      cui: 'SL-332125',
      date: 'Active Security License',
      image: '/licenses/sindh_license.png',
      details: [
        { label: 'License Code', val: 'SL-332125 (Sindh)' },
        { label: 'Regulatory Authority', val: 'Sindh Home Department, Karachi' },
        { label: 'Enabling Ordinance', val: 'Sindh Private Security Agencies (Regulation & Control) Ordinance, 2000' },
        { label: 'Operational Scope', val: 'Deployment of static and dynamic security operators in Sindh Province' }
      ],
      description: 'Provincial operational security license granted by the Sindh Government to operate and manage private guard agencies in Sindh.'
    },
    interior: {
      title: 'Ministry of Interior NOC',
      subtitle: 'Government of Pakistan - Ministry of Interior',
      cui: 'Ref: 4/4/2014-S.II',
      date: 'Issued: June 2024',
      image: null, // Text/detail layout
      details: [
        { label: 'NOC Reference Number', val: '4/4/2014-S.II (Ministry of Interior)' },
        { label: 'Vetting Standard', val: 'Ministry Vetting & Director Background Clearance' },
        { label: 'Operational Code', val: 'Standard Operating Procedure (SOP) 2020' },
        { label: 'Compliance Criteria', val: 'Under-60 age limit for guards, strict 8-hour shift rosters, minimum wage adherence, and formal bank-disbursed salaries.' }
      ],
      description: 'No Objection Certificate (NOC) issued by the Ministry of Interior, Islamabad, granting federal clearance for company incorporation, background checks on directors, and arms/ammunition licensing scope.'
    },
    fbr: {
      title: 'FBR Taxpayer Registration (NTN)',
      subtitle: 'Federal Board of Revenue - Taxpayer Profile',
      cui: 'NTN: E012779-8',
      date: 'Active Registered Company',
      image: null, // Text/detail layout
      details: [
        { label: 'National Tax Number', val: 'E012779-8 (FBR)' },
        { label: 'Tax Jurisdiction', val: 'Regional Tax Office (RTO) Faisalabad' },
        { label: 'Principal Activity', val: '890111 - Other Service Activities / Security Services' },
        { label: 'Active Sales Tax Status', val: 'Registered with Punjab Revenue Authority (PRA) & FBR Income Tax' }
      ],
      description: 'Official corporate taxpayer enrollment verifying active status under the Revenue Code of Pakistan, confirming full corporate tax compliance.'
    },
    apsaa: {
      title: 'APSAA Membership Certificate',
      subtitle: 'All Pakistan Security Agencies Association',
      cui: 'Member ID: 2025-AMS',
      date: 'Validity Year: 2025',
      image: null, // Text/detail layout
      details: [
        { label: 'Association Status', val: 'Active Member in Good Standing (APSAA)' },
        { label: 'Membership Scope', val: 'Pledged to maintain industry ethics, standard guard wages, and vetting' },
        { label: 'Industry Code', val: 'Together We Secure the Nation' },
        { label: 'Compliance Audit', val: 'Audited annual registration and training school validations' }
      ],
      description: 'Official national association membership affirming that Al-Marsoos operates under strict security industry ethics and guarantees optimal guard benefits.'
    }
  };

  const tabs = [
    { id: 'secp', label: 'SECP Incorporation', icon: FileText },
    { id: 'punjab', label: 'Punjab License', icon: ShieldCheck },
    { id: 'sindh', label: 'Sindh License', icon: ShieldCheck },
    { id: 'interior', label: 'Interior Ministry NOC', icon: Award },
    { id: 'fbr', label: 'FBR Tax (NTN)', icon: CheckCircle },
    { id: 'apsaa', label: 'APSAA Membership', icon: Award }
  ];

  const current = docs[activeTab];

  return (
    <div className="page-wrapper-spacing bg-[#0a0b0e]">
      {/* Page Header */}
      <section className="py-12 border-b border-white/5 bg-[#11131c]">
        <div className="container text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gradient-red uppercase font-outfit">
            Licenses & Credentials
          </h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2 font-sans">
            Review the official government registrations, provincial licenses, and corporate compliance certificates that audit our operations.
          </p>
        </div>
      </section>

      {/* Main Tabbed Grid */}
      <section className="section-padding bg-[#0a0b0e]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Sidebar Sub-Menu Tabs (lg:col-span-4) */}
            <div className="lg:col-span-4 flex flex-col gap-2 w-full">
              <span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest pl-3 mb-2">Available Credentials</span>
              <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-thin">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => { setActiveTab(tab.id); setIsZoomed(false); }}
                      className={`flex items-center gap-3 px-4 py-3.5 rounded-md text-left text-xs font-bold font-outfit tracking-wide uppercase transition-all duration-300 border whitespace-nowrap lg:whitespace-normal shrink-0 ${
                        isActive
                          ? 'bg-[#d32f2f]/10 border-[#d32f2f] text-white'
                          : 'bg-[#11131c]/50 border-white/5 text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Icon size={16} className={isActive ? 'text-[#d32f2f]' : 'text-slate-500'} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Document Details & Image Viewer Container (lg:col-span-8) */}
            <div className="lg:col-span-8 flex flex-col gap-6 w-full">
              <div className="glass-card p-6 sm:p-8 border border-white/5 flex flex-col gap-6">
                
                {/* Certificate Title Header */}
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-white/5 pb-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white font-outfit uppercase tracking-wider">{current.title}</h3>
                    <p className="text-xs text-[#d32f2f] font-semibold font-outfit mt-0.5">{current.subtitle}</p>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 bg-white/5 px-3 py-1.5 rounded-sm border border-white/5 w-fit">
                    {current.date}
                  </span>
                </div>

                {/* Main content split */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Data Grid (md:col-span-7 or 12 depending on image availability) */}
                  <div className={current.image ? 'md:col-span-6 flex flex-col gap-4' : 'md:col-span-12 flex flex-col gap-4'}>
                    <p className="text-slate-300 text-xs font-sans leading-relaxed text-justify mb-2">
                      {current.description}
                    </p>

                    <div className="flex flex-col gap-3 bg-[#11131c]/50 border border-white/5 rounded-md p-4">
                      <span className="text-slate-500 text-[9px] uppercase font-bold tracking-widest mb-1 block">Certificate Metadata</span>
                      {current.details.map((det, idx) => (
                        <div key={idx} className="flex flex-col gap-0.5 border-b border-white/5 pb-2 last:border-b-0 last:pb-0">
                          <span className="text-slate-500 text-[10px] font-sans">{det.label}</span>
                          <span className="text-white text-xs font-bold font-sans">{det.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Image View (md:col-span-5) */}
                  {current.image && (
                    <div className="md:col-span-6 flex flex-col gap-3">
                      <div className="relative group rounded-md overflow-hidden bg-slate-900 border border-white/10 aspect-[3/4] flex items-center justify-center shadow-lg">
                        <img 
                          src={current.image} 
                          alt={current.title} 
                          className="w-full h-full object-cover"
                        />
                        {/* Hover Overlay controls */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                          <button
                            onClick={() => setIsZoomed(true)}
                            className="p-3 bg-[#d32f2f] text-white rounded-full hover:bg-[#b71c1c] transition-all hover:scale-105"
                            title="Zoom Document"
                          >
                            <Eye size={18} />
                          </button>
                          <a
                            href={current.image}
                            download={`${activeTab}_license.png`}
                            className="p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all hover:scale-105 border border-white/10"
                            title="Download Document"
                          >
                            <Download size={18} />
                          </a>
                        </div>
                      </div>
                      <span className="text-[10px] text-slate-500 font-sans text-center">
                        Hover image to Zoom or Download
                      </span>
                    </div>
                  )}

                  {/* Standard Text Mock Certificate for non-image documents */}
                  {!current.image && (
                    <div className="md:col-span-12 border-2 border-dashed border-white/10 rounded-lg p-8 flex flex-col items-center justify-center text-center bg-[#11131c]/20 relative overflow-hidden min-h-[250px]">
                      <div className="absolute -right-16 -bottom-16 w-48 h-48 rounded-full bg-[#d32f2f]/5 blur-3xl pointer-events-none"></div>
                      <ShieldCheck className="text-[#d32f2f] opacity-25 mb-4" size={56} />
                      <h4 className="text-white font-extrabold text-base font-outfit uppercase tracking-widest mb-2">Verified Government Registration</h4>
                      <p className="text-xs text-slate-400 font-sans max-w-md leading-relaxed mb-4">
                        This document has been officially issued and audited by federal/provincial security regulators. The scanned copy is cataloged inside our physical corporate archives at our Islamabad Headquarters.
                      </p>
                      <div className="flex gap-4">
                        <span className="text-[9px] uppercase font-bold tracking-widest text-[#d32f2f] bg-[#d32f2f]/10 border border-[#d32f2f]/30 px-3 py-1.5 rounded-sm">
                          Audit Registry: {current.cui}
                        </span>
                      </div>
                    </div>
                  )}

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Fullscreen Zoom Modal */}
      {isZoomed && current.image && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex flex-col justify-center items-center p-4 animate-fade-in">
          {/* Modal Header */}
          <div className="w-full max-w-4xl flex justify-between items-center text-white mb-4">
            <h4 className="text-lg font-bold font-outfit uppercase tracking-wider">{current.title}</h4>
            <button
              onClick={() => setIsZoomed(false)}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          {/* Large Image Frame */}
          <div className="w-full max-w-3xl aspect-[3/4] bg-slate-950 rounded-lg overflow-hidden border border-white/10 relative max-h-[85vh] flex justify-center items-center">
            <img 
              src={current.image} 
              alt={current.title} 
              className="max-w-full max-h-full object-contain"
            />
          </div>
          {/* Modal Footer */}
          <div className="mt-4 flex gap-4">
            <a
              href={current.image}
              download={`${activeTab}_license.png`}
              className="btn btn-primary px-6 py-2.5 text-xs uppercase tracking-wider rounded-sm flex items-center gap-2"
            >
              <Download size={14} />
              <span>Download File</span>
            </a>
            <button
              onClick={() => window.open(current.image, '_blank')}
              className="btn btn-secondary px-6 py-2.5 text-xs uppercase tracking-wider rounded-sm flex items-center gap-2"
            >
              <ExternalLink size={14} />
              <span>Open in New Tab</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Credentials;
