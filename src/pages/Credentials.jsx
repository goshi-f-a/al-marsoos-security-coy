import React, { useState } from 'react';
import { ShieldCheck, FileText, CheckCircle, Award, Eye, Download, X, ExternalLink, ChevronDown, Shield } from 'lucide-react';

const Credentials = () => {
  // All panels folded by default (null)
  const [expandedTab, setExpandedTab] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);

  const docs = [
    {
      id: 'secp',
      label: 'SECP Incorporation',
      icon: FileText,
      title: 'SECP Certificate of Incorporation',
      subtitle: 'Securities & Exchange Commission of Pakistan',
      cui: '0260799',
      date: 'June 13, 2024',
      image: `${import.meta.env.BASE_URL}licenses/secp_cert.png`,
      details: [
        { label: 'Registration Law', val: 'Companies Act, 2017 (XIX of 2017)' },
        { label: 'Company Type', val: 'Private Limited Company (Limited by Shares)' },
        { label: 'Registration Authority', val: 'Company Registration Office, Faisalabad' },
        { label: 'Corporate ID Number', val: 'CUI 0260799' }
      ],
      description: 'Official corporate registration certificate certifying the legal existence of Al-Marsoos Security Services (Private) Limited under Pakistani corporate law.'
    },
    {
      id: 'punjab',
      label: 'Punjab License',
      icon: ShieldCheck,
      title: 'Punjab Home Department License',
      subtitle: 'Government of the Punjab - Home Department',
      cui: 'PSC-11-763',
      date: 'Active Security License',
      image: `${import.meta.env.BASE_URL}licenses/punjab_license.png`,
      details: [
        { label: 'License Code', val: 'PSC-11-763 (Punjab)' },
        { label: 'Regulatory Authority', val: 'Punjab Home Department, Lahore' },
        { label: 'Enabling Act', val: 'Punjab Private Security Companies (Regulation & Control) Act 2004' },
        { label: 'Operational Scope', val: 'Provision of private security guards across all districts of Punjab' }
      ],
      description: 'Provincial operational security license granted by the Punjab Government Licensing Authority to deploy armed/unarmed security guards.'
    },
    {
      id: 'sindh',
      label: 'Sindh License',
      icon: ShieldCheck,
      title: 'Sindh Home Department License',
      subtitle: 'Government of Sindh - Home Department',
      cui: 'SL-332125',
      date: 'Active Security License',
      image: `${import.meta.env.BASE_URL}licenses/sindh_license.png`,
      details: [
        { label: 'License Code', val: 'SL-332125 (Sindh)' },
        { label: 'Regulatory Authority', val: 'Sindh Home Department, Karachi' },
        { label: 'Enabling Ordinance', val: 'Sindh Private Security Agencies (Regulation & Control) Ordinance, 2000' },
        { label: 'Operational Scope', val: 'Deployment of static and dynamic security operators in Sindh Province' }
      ],
      description: 'Provincial operational security license granted by the Sindh Government to operate and manage private guard agencies in Sindh.'
    },
    {
      id: 'interior',
      label: 'Interior Ministry NOC',
      icon: Award,
      title: 'Ministry of Interior NOC',
      subtitle: 'Government of Pakistan - Ministry of Interior',
      cui: 'Ref: 4/4/2014-S.II',
      date: 'Issued: June 2024',
      image: null,
      details: [
        { label: 'NOC Reference Number', val: '4/4/2014-S.II (Ministry of Interior)' },
        { label: 'Vetting Standard', val: 'Ministry Vetting & Director Background Clearance' },
        { label: 'Operational Code', val: 'Standard Operating Procedure (SOP) 2020' },
        { label: 'Compliance Criteria', val: 'Under-60 age limit for guards, strict 8-hour shift rosters, minimum wage adherence, and formal bank-disbursed salaries.' }
      ],
      description: 'No Objection Certificate (NOC) issued by the Ministry of Interior, Islamabad, granting federal clearance for company incorporation, background checks on directors, and arms/ammunition licensing scope.'
    },
    {
      id: 'fbr',
      label: 'FBR Tax (NTN)',
      icon: CheckCircle,
      title: 'FBR Taxpayer Registration (NTN)',
      subtitle: 'Federal Board of Revenue - Taxpayer Profile',
      cui: 'NTN: E012779-8',
      date: 'Active Registered Company',
      image: null,
      details: [
        { label: 'National Tax Number', val: 'E012779-8 (FBR)' },
        { label: 'Tax Jurisdiction', val: 'Regional Tax Office (RTO) Faisalabad' },
        { label: 'Principal Activity', val: '890111 - Other Service Activities / Security Services' },
        { label: 'Active Sales Tax Status', val: 'Registered with Punjab Revenue Authority (PRA) & FBR Income Tax' }
      ],
      description: 'Official corporate taxpayer enrollment verifying active status under the Revenue Code of Pakistan, confirming full corporate tax compliance.'
    },
    {
      id: 'apsaa',
      label: 'APSAA Membership',
      icon: Award,
      title: 'APSAA Membership Certificate',
      subtitle: 'All Pakistan Security Agencies Association',
      cui: 'Member ID: 2025-AMS',
      date: 'Validity Year: 2025',
      image: null,
      details: [
        { label: 'Association Status', val: 'Active Member in Good Standing (APSAA)' },
        { label: 'Membership Scope', val: 'Pledged to maintain industry ethics, standard guard wages, and vetting' },
        { label: 'Industry Code', val: 'Together We Secure the Nation' },
        { label: 'Compliance Audit', val: 'Audited annual registration and training school validations' }
      ],
      description: 'Official national association membership affirming that Al-Marsoos operates under strict security industry ethics and guarantees optimal guard benefits.'
    }
  ];

  const toggleTab = (id) => {
    setExpandedTab((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-[#0a0b0e] min-h-screen">
      {/* Page Header */}
      <section className="py-12 border-b border-white/5 bg-[#11131c]">
        <div className="container text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gradient-red uppercase font-outfit">
            Licenses & Credentials
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mt-2 font-sans">
            Review the official government registrations, provincial licenses, and corporate compliance certificates that audit our operations.
          </p>
        </div>
      </section>

      {/* Folded Accordion Panels Section */}
      <section className="py-10 sm:py-16 bg-[#0a0b0e]">
        <div className="container">
          <div className="max-w-4xl mx-auto flex flex-col gap-3">
            
            <div className="flex items-center justify-between px-1 mb-1">
              <span className="text-slate-500 text-[10px] sm:text-[11px] uppercase font-bold tracking-widest flex items-center gap-1.5">
                <Shield size={12} className="text-[#d32f2f]" />
                Official Accreditation Documents
              </span>
              <span className="text-slate-500 text-[10px] font-sans">
                Click any panel to expand / collapse
              </span>
            </div>

            {docs.map((doc) => {
              const Icon = doc.icon;
              const isExpanded = expandedTab === doc.id;

              return (
                <div
                  id={`panel-${doc.id}`}
                  key={doc.id}
                  className={`glass-card border rounded-lg overflow-hidden transition-all duration-300 ${
                    isExpanded
                      ? 'border-[#d32f2f]/40 shadow-[0_0_20px_rgba(211,47,47,0.12)] bg-[#11131c]/90'
                      : 'border-white/5 hover:border-white/15 bg-[#11131c]/40'
                  }`}
                >
                  {/* Folded Header Button */}
                  <button
                    type="button"
                    onClick={() => toggleTab(doc.id)}
                    className="w-full px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between gap-3 text-left cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`p-2 rounded-md transition-colors ${
                          isExpanded
                            ? 'bg-[#d32f2f] text-white shadow-md'
                            : 'bg-white/5 text-slate-400 group-hover:text-white'
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
                          {doc.label}
                        </span>
                        <span className="text-[10px] text-slate-500 font-sans truncate hidden sm:block">
                          {doc.subtitle}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                      <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-slate-400 bg-white/5 px-2.5 py-1 rounded border border-white/5 hidden xs:inline-block">
                        {doc.cui}
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

                  {/* Smooth Accordion Slide Container */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-white/5 flex flex-col gap-6">
                        
                        {/* Document Sub-Header */}
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-white/5 pb-4">
                          <div>
                            <h3 className="text-base sm:text-lg font-extrabold text-white font-outfit uppercase tracking-wide">
                              {doc.title}
                            </h3>
                            <p className="text-[11px] text-[#d32f2f] font-semibold font-outfit mt-0.5">
                              {doc.subtitle}
                            </p>
                          </div>
                          <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 bg-white/5 px-2.5 py-1 rounded-sm border border-white/5 w-fit">
                            {doc.date}
                          </span>
                        </div>

                        {/* Main Split Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                          
                          {/* Description & Metadata */}
                          <div className={doc.image ? 'md:col-span-7 flex flex-col gap-4' : 'md:col-span-12 flex flex-col gap-4'}>
                            <p className="text-slate-300 text-xs font-sans leading-relaxed text-justify">
                              {doc.description}
                            </p>

                            <div className="flex flex-col gap-2.5 bg-[#0a0b0e]/70 border border-white/5 rounded-md p-4">
                              <span className="text-slate-500 text-[9px] uppercase font-bold tracking-widest mb-0.5 block">
                                Certificate Metadata & Registry
                              </span>
                              {doc.details.map((det, idx) => (
                                <div
                                  key={idx}
                                  className="flex flex-col gap-0.5 border-b border-white/5 pb-2 last:border-b-0 last:pb-0"
                                >
                                  <span className="text-slate-500 text-[10px] font-sans">{det.label}</span>
                                  <span className="text-white text-xs font-semibold font-sans">{det.val}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Certificate Image Preview */}
                          {doc.image && (
                            <div className="md:col-span-5 flex flex-col gap-2">
                              <div className="relative group rounded-md overflow-hidden bg-slate-900 border border-white/10 aspect-[3/4] flex items-center justify-center shadow-lg">
                                <img
                                  src={doc.image}
                                  alt={doc.title}
                                  className="w-full h-full object-cover"
                                />
                                {/* Hover / Tap Overlay controls */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                  <button
                                    type="button"
                                    onClick={() => setZoomedImage({ src: doc.image, title: doc.title, id: doc.id })}
                                    className="p-2.5 bg-[#d32f2f] text-white rounded-full hover:bg-[#b71c1c] transition-all hover:scale-105"
                                    title="Zoom Document"
                                  >
                                    <Eye size={16} />
                                  </button>
                                  <a
                                    href={doc.image}
                                    download={`${doc.id}_license.png`}
                                    className="p-2.5 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all hover:scale-105 border border-white/10"
                                    title="Download Document"
                                  >
                                    <Download size={16} />
                                  </a>
                                </div>
                              </div>
                              <span className="text-[10px] text-slate-500 font-sans text-center">
                                Hover to Zoom or Download
                              </span>
                            </div>
                          )}

                          {/* Verified Government Badge for Text-Only Docs */}
                          {!doc.image && (
                            <div className="md:col-span-12 border border-dashed border-white/10 rounded-lg p-6 flex flex-col items-center justify-center text-center bg-[#0a0b0e]/50 relative overflow-hidden">
                              <ShieldCheck className="text-[#d32f2f] opacity-40 mb-2" size={36} />
                              <h4 className="text-white font-bold text-xs font-outfit uppercase tracking-wider mb-1">
                                Verified Government Registration
                              </h4>
                              <p className="text-[11px] text-slate-400 font-sans max-w-md leading-relaxed mb-3">
                                This credential is confirmed and audited by federal/provincial regulators. Physical sealed original is cataloged at our Islamabad Corporate Headquarters.
                              </p>
                              <span className="text-[9px] uppercase font-bold tracking-wider text-[#d32f2f] bg-[#d32f2f]/10 border border-[#d32f2f]/30 px-3 py-1 rounded-sm">
                                Registry: {doc.cui}
                              </span>
                            </div>
                          )}

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

      {/* Fullscreen Zoom Modal */}
      {zoomedImage && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex flex-col justify-center items-center p-4 animate-fade-in">
          {/* Modal Header */}
          <div className="w-full max-w-3xl flex justify-between items-center text-white mb-3">
            <h4 className="text-sm sm:text-base font-bold font-outfit uppercase tracking-wider truncate pr-4">
              {zoomedImage.title}
            </h4>
            <button
              type="button"
              onClick={() => setZoomedImage(null)}
              className="p-1.5 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors shrink-0"
            >
              <X size={18} />
            </button>
          </div>
          {/* Large Image Frame */}
          <div className="w-full max-w-2xl aspect-[3/4] bg-slate-950 rounded-lg overflow-hidden border border-white/10 relative max-h-[80vh] flex justify-center items-center">
            <img
              src={zoomedImage.src}
              alt={zoomedImage.title}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          {/* Modal Footer */}
          <div className="mt-3 flex gap-3">
            <a
              href={zoomedImage.src}
              download={`${zoomedImage.id}_license.png`}
              className="btn btn-primary px-5 py-2 text-xs uppercase tracking-wider rounded-sm flex items-center gap-1.5"
            >
              <Download size={13} />
              <span>Download File</span>
            </a>
            <button
              type="button"
              onClick={() => window.open(zoomedImage.src, '_blank')}
              className="btn btn-secondary px-5 py-2 text-xs uppercase tracking-wider rounded-sm flex items-center gap-1.5"
            >
              <ExternalLink size={13} />
              <span>Open in New Tab</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Credentials;
