import React from 'react';
import { Quote, Shield, Award, CheckCircle } from 'lucide-react';
import ceoAvatar from '../assets/ceo_avatar.jpg'; // We can use the existing ceo_avatar or a styled slot

const CeoMessage = () => {
  const principles = [
    {
      title: 'Commitment',
      desc: 'Dedicated to providing continuous, unwavering security operations tailored to client needs.'
    },
    {
      title: 'Credibility',
      desc: 'Maintaining absolute professional integrity, vetted staff, and legal transparency in all provinces.'
    },
    {
      title: 'Quality Service',
      desc: 'Delivering military-level standards of discipline, supervision, and alert response systems.'
    },
    {
      title: 'Cost Effectiveness',
      desc: 'Optimizing resource allocation to deliver premium security coverage at competitive rates.'
    }
  ];

  return (
    <div className="page-wrapper-spacing bg-[#0a0b0e]">
      {/* Page Header */}
      <section className="py-12 border-b border-white/5 bg-[#11131c]">
        <div className="container text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gradient-red uppercase font-outfit">
            CEO's Message
          </h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2 font-sans">
            A message from our Chief Executive Officer on our commitment to your protection.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section-padding bg-[#0a0b0e]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* CEO Image Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm w-full">
                {/* Decorative border glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#d32f2f] to-[#b71c1c] rounded-lg blur opacity-20 group-hover:opacity-45 transition duration-500"></div>
                
                <div className="relative bg-[#11131c] border border-white/10 rounded-lg p-4 flex flex-col items-center">
                  <div className="w-full aspect-[4/5] rounded-md overflow-hidden bg-slate-800 border border-white/5 mb-6 relative">
                    {/* CEO Avatar Image */}
                    <img 
                      src={ceoAvatar} 
                      alt="Maj (Retd) Saleem Iqbal" 
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Army Service Overlay Badge */}
                    <div className="absolute bottom-3 left-3 bg-[#d32f2f] text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-sm shadow-lg flex items-center gap-1.5">
                      <Award size={12} />
                      <span>25 Yrs Army Service</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white font-outfit">Maj (Retd) Saleem Iqbal</h3>
                  <p className="text-[#d32f2f] text-xs font-semibold uppercase tracking-widest mt-1">Chief Executive Officer</p>
                  <p className="text-slate-500 text-[10px] uppercase font-sans mt-0.5">Al-Marsoos Security Services (Pvt) Ltd</p>
                </div>
              </div>
            </div>

            {/* Message Text Panel */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#d32f2f]/10 border border-[#d32f2f]/30 rounded-lg text-[#d32f2f] shrink-0 mt-1">
                  <Quote size={28} className="transform scale-x-[-1]" />
                </div>
                <div>
                  <span className="text-[#d32f2f] text-xs font-bold tracking-widest uppercase font-outfit block mb-1">Our Safety Mission</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase font-outfit">Always Alert, Always Protecting</h2>
                </div>
              </div>

              <div className="text-slate-300 text-sm font-sans leading-relaxed space-y-4 text-justify pr-2">
                <p>
                  I avail this opportunity to congratulate you on your first step for selecting Al-Marsoos Security Services to safeguard your premises. This company is managed by a group of dedicated professionals headed by the undersigned, with the singular aim of extending a helping hand to Government institutes, Private corporate organizations, and Domestic users.
                </p>
                <p>
                  The company, by the grace of Allah, has grown in size and status and is recognized on merit as one of the few effective and efficient private security companies in the country. The hallmark of our success in this business is our professional approach and absolute loyalty and faithfulness to our valued clients.
                </p>
                <p>
                  We Al-Marsoos Security Services work on four main principles: <strong>Commitment, Credibility, Quality Service, and Cost Effectiveness</strong>. This is our strength, and I can proudly say that our people have adopted these principles successfully.
                </p>
                <p>
                  We have a rich experience of several years with various types of clients. With our command and control system spread all over the country, we are well-placed to provide effective security to your outfits. Please try our service. I guarantee that it will be a satisfying and secure experience for you.
                </p>
              </div>

              {/* Signature block */}
              <div className="border-t border-white/5 pt-6 mt-2 flex flex-col items-start gap-1">
                <span className="font-outfit text-white font-bold text-base">Maj (Retd) Saleem Iqbal</span>
                <span className="text-xs text-slate-400 font-sans">CEO & Founder, Retired Pakistan Army</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Pillars Grid */}
      <section className="section-padding bg-[#11131c] border-t border-white/5">
        <div className="container">
          <div className="text-center max-w-xl mx-auto mb-16">
            <Shield className="text-[#d32f2f] mx-auto mb-3" size={32} />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">Our Four Core Pillars</h2>
            <p className="text-xs text-slate-400 font-sans mt-2">
              The fundamental principles that guide our tactical operations and corporate ethics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p, idx) => (
              <div key={idx} className="glass-card p-6 border border-white/5 flex flex-col gap-3">
                <div className="w-10 h-10 bg-[#d32f2f]/10 border border-[#d32f2f]/30 rounded-md flex items-center justify-center text-[#d32f2f]">
                  <CheckCircle size={20} />
                </div>
                <h4 className="text-white font-bold text-base font-outfit uppercase mt-2">{p.title}</h4>
                <p className="text-xs text-slate-400 font-sans leading-relaxed text-justify">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CeoMessage;
