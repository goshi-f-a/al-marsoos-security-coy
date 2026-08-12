import React from 'react';
import { User, Shield, Award, Briefcase, Star } from 'lucide-react';
import ceoAvatar from '../assets/ceo_avatar.jpg';
import shoukatAvatar from '../assets/leader_shoukat.jpg';
import yasinAvatar from '../assets/leader_yasin.jpg';
import azamAvatar from '../assets/leader_azam.jpg';
import safdarAvatar from '../assets/safdar.jpeg';

const Leadership = () => {
  const leaders = [
    {
      id: 'safdar',
      name: 'Safdar Malik',
      role: 'General Manager Marketing & Sales',
      bio: 'Broad experience of working in security agencies inland and abroad. Oversees client acquisitions, business development, and strategic partnerships globally.',
      image: safdarAvatar,
      tag: 'Executive Board',
      isTop: false
    },
    {
      id: 'saleem',
      name: 'Maj (Retd) Saleem Iqbal',
      role: 'Chief Executive Officer (CEO)',
      bio: 'Retired Army Officer with 25 years of dedicated service in the Pakistan Army. Extensive experience in military intelligence, security management, and private security enterprise operations.',
      image: ceoAvatar,
      tag: 'Command & Founder',
      isTop: true
    },
    {
      id: 'shoukat',
      name: 'Raja Muhammad Shoukat',
      role: 'Managing Director (MD)',
      bio: '13 years of extensive security management experience. Specializes in managing government cooperative societies, VIP protection details, bank security, and large-scale industrial security setups.',
      image: shoukatAvatar,
      tag: 'Operations Director',
      isTop: false
    },
    {
      id: 'yasin',
      name: 'Muhammad Yasin',
      role: 'Executive Director (ED)',
      bio: 'Leads the Human Resources, Finance, and Marketing divisions at Al-Marsoos. Focuses on corporate restructuring, financial compliance, and HR audit systems.',
      image: yasinAvatar,
      tag: 'Corporate Director',
      isTop: false
    },
    {
      id: 'azam',
      name: 'Rana Azam Hussain',
      role: 'General Manager (Operations & Training)',
      bio: '10 years of security management experience. Oversees the training school curriculum, physical drills, weapon safety, and active security deployments across all provinces.',
      image: azamAvatar,
      tag: 'Tactical Command',
      isTop: false
    }
  ];

  const renderAvatar = (leader) => {
    if (leader.image) {
      const isSafdar = leader.id === 'safdar';
      return (
        <img 
          src={leader.image} 
          alt={leader.name} 
          className="w-full h-full object-cover object-top grayscale-interactive"
          style={isSafdar ? { transform: 'scale(1.42)', transformOrigin: '50% 24%' } : {}}
        />
      );
    }
    return (
      <div className="w-full h-full bg-gradient-to-br from-[#1b1c24] to-[#0a0b0e] flex flex-col items-center justify-center text-slate-600 group-hover:text-[#d32f2f] transition-colors duration-300">
        <User size={64} className="opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mt-2">No Photo Available</span>
      </div>
    );
  };

  const topLeader = leaders.find(l => l.isTop);
  const otherLeaders = leaders.filter(l => !l.isTop);

  return (
    <div className="page-wrapper-spacing bg-[#0a0b0e]">
      {/* Page Header */}
      <section className="py-12 border-b border-white/5 bg-[#11131c]">
        <div className="container text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gradient-red uppercase font-outfit">
            Our Leadership
          </h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2 font-sans">
            Meet the elite military and corporate command driving Al-Marsoos Security Services.
          </p>
        </div>
      </section>

      {/* Main Leadership Section */}
      <section className="section-padding bg-[#0a0b0e]">
        <div className="container">
          
          {/* Top Leader (Safdar Malik) - Featured Row */}
          {topLeader && (
            <div className="flex justify-center mb-16">
              <div className="glass-card p-8 border border-white/10 max-w-3xl w-full group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#d32f2f]/30 to-[#b71c1c]/30 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                
                <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  {/* Photo Slot */}
                  <div className="md:col-span-4 aspect-[4/5] rounded-md overflow-hidden bg-slate-800 border border-white/5 relative shrink-0">
                    {renderAvatar(topLeader)}
                    <div className="absolute top-2 right-2 bg-[#d32f2f] text-white text-[8px] font-bold tracking-wider uppercase px-2 py-1 rounded-sm shadow-md flex items-center gap-1">
                      <Star size={8} />
                      <span>{topLeader.tag}</span>
                    </div>
                  </div>
                  
                  {/* Info Panel */}
                  <div className="md:col-span-8 flex flex-col gap-4">
                    <div>
                      <span className="text-[#d32f2f] text-xs font-bold uppercase tracking-widest font-outfit">Featured Officer</span>
                      <h3 className="text-2xl font-extrabold text-white font-outfit mt-1">{topLeader.name}</h3>
                      <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider font-sans mt-0.5">{topLeader.role}</p>
                    </div>
                    
                    <p className="text-slate-300 text-xs font-sans leading-relaxed text-justify">
                      {topLeader.bio}
                    </p>
                    
                    <div className="flex gap-4 border-t border-white/5 pt-4 mt-2 flex-wrap">
                      {topLeader.id === 'saleem' && (
                        <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-sans">
                          <Award size={12} className="text-[#d32f2f]" />
                          <span>Ex-Military Command</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-sans">
                        <Briefcase size={12} className="text-[#d32f2f]" />
                        <span>Corporate Relations</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-sans">
                        <Shield size={12} className="text-[#d32f2f]" />
                        <span>Vetted Clearance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid of Other 4 Leaders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {otherLeaders.map((leader) => (
              <div key={leader.id} className="glass-card p-6 border border-white/5 group relative flex flex-col gap-4 justify-between">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#d32f2f]/20 to-[#b71c1c]/20 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                
                <div className="relative flex flex-col sm:flex-row gap-6">
                  {/* Photo Slot */}
                  <div className="w-full sm:w-32 aspect-[4/5] rounded-md overflow-hidden bg-slate-800 border border-white/5 relative shrink-0">
                    {renderAvatar(leader)}
                    <div className="absolute top-2 right-2 bg-black/60 text-white text-[8px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-sm">
                      {leader.tag}
                    </div>
                  </div>
                  
                  {/* Detail Panel */}
                  <div className="flex flex-col gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-white font-outfit leading-snug">{leader.name}</h4>
                      <p className="text-[#d32f2f] text-[11px] font-bold uppercase tracking-wider mt-0.5">{leader.role}</p>
                    </div>
                    <p className="text-slate-400 text-xs font-sans leading-relaxed text-justify">
                      {leader.bio}
                    </p>
                  </div>
                </div>

                {/* Card footer details */}
                <div className="relative border-t border-white/5 pt-4 flex justify-between items-center text-[10px] text-slate-500 font-sans">
                  <div className="flex items-center gap-1.5">
                    <Shield size={12} className="text-[#d32f2f]" />
                    <span>Verified Credentials</span>
                  </div>
                  {leader.id === 'safdar' && (
                    <div className="flex items-center gap-1">
                      <Star size={12} className="text-[#d32f2f]" />
                      <span>Exec Board</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Leadership;
