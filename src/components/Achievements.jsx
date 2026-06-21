import React from 'react';

const responsibilities = [
  {
    role: "2nd Runner Up - Mysore Open Hack 3.0",
    organization: "L&T Technology Services",
    period: "Nov 2024",
    description: "Competed in a high-intensity 24-hour hackathon among 600+ developers and 160+ engineering teams. Engineered an end-to-end intelligent solution leveraging AI, Computer Vision, IoT data streams, and Cloud deployment models."
  },
  {
    role: "Team Coordinator - Client Project",
    organization: "L&T Technology Services",
    period: "Jan 2025 - Apr 2026",
    description: "Orchestrated cloud operations, task delegation, and timeline management on Azure Boards. Managed critical AWS instances, coordinated closely with backend/frontend squads, and successfully deployed updates to staging."
  },
  {
    role: "Management Team Lead - Rang-e-Chinar Cultural Fest",
    organization: "NIT Srinagar",
    period: "Spring 2023",
    description: "Spearheaded on-ground operations, security flow, and crowd management strategies for a large-scale regional festival of 5,000+ attendees. Directed a volunteer team of 30+ students, resolving real-time operational bottlenecks."
  }
];

const certificates = [
  {
    title: "LATEX Professional Citation",
    issuer: "IIT Bombay",
    date: "Jan 2022",
    details: "Successfully cleared the advanced examination on document preparation, mathematical typesetting, and slide presentation systems hosted by Spoken Tutorial, IIT Bombay."
  },
  {
    title: "HTML5 Certification Test",
    issuer: "Infosys Springboard",
    date: "Aug 2022",
    details: "Infosys Certified Professional designation on responsive layouts, modern semantic markup structures, accessibility compliance, and native media formats."
  }
];

const Achievements = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-obsidian-void" id="achievements">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10 z-10 relative">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-16 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
          Achievements & Leadership
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Positions of Responsibility Column */}
          <div className="flex flex-col lg:col-span-7">
            <div className="flex items-center gap-3.5 mb-8">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-violet-500/[0.06] border border-violet-500/15 text-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 className="text-xl font-extrabold text-white tracking-tight">
                Positions of Responsibility
              </h3>
            </div>
            
            <div className="flex flex-col gap-6">
              {responsibilities.map((item, index) => (
                <div key={index} className="glass-card relative bg-white/[0.015] backdrop-blur-xl border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-violet-500/25 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(139,92,246,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4 group">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 border-b border-white/5 pb-4">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300">
                        {item.role}
                      </h4>
                      <p className="text-xs font-bold text-cyan-400 tracking-wider uppercase">
                        {item.organization}
                      </p>
                    </div>
                    <span className="inline-flex text-xs font-bold text-slate-400 tracking-wider bg-white/[0.02] border border-white/5 py-1.5 px-3.5 rounded-full self-start">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Official Certifications Column */}
          <div className="flex flex-col lg:col-span-5">
            <div className="flex items-center gap-3.5 mb-8">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-violet-500/[0.06] border border-violet-500/15 text-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
              </div>
              <h3 className="text-xl font-extrabold text-white tracking-tight">
                Official Certifications
              </h3>
            </div>
            
            <div className="flex flex-col gap-6">
              {certificates.map((cert, index) => (
                <div key={index} className="glass-card relative bg-white/[0.015] backdrop-blur-xl border border-white/5 rounded-2xl p-6 hover:border-amber-500/25 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(245,158,11,0.15)] hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-amber-500/[0.06] border border-amber-500/15 text-amber-400 group-hover:bg-gradient-to-tr group-hover:from-amber-500 group-hover:to-orange-600 group-hover:text-white group-hover:border-transparent group-hover:scale-[1.08] group-hover:-rotate-6 transition-all duration-300 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <div className="flex flex-col">
                      <h4 className="text-base font-bold text-white mb-0.5 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-300 group-hover:bg-clip-text transition-all duration-300">
                        {cert.title}
                      </h4>
                      <span className="text-xs font-medium text-slate-400">
                        by {cert.issuer} • {cert.date}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {cert.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;
