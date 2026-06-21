import React from 'react';

const educationData = [
  {
    school: "National Institute Of Technology (NIT), Srinagar",
    period: "2020 - 2024",
    degree: "B.Tech in Information Technology",
    // score: "CGPA: 7.65",
    description: "Rigorous training in computer science, systems architecture, data structures, algorithms, and advanced software engineering methodologies."
  },
  {
    school: "SP Smart School, Sarore",
    period: "2020",
    degree: "JKBOSE - Senior Secondary (Class XII)",
    // score: "Percentage: 78.8%",
    description: "Focused on core sciences and mathematics, building a robust analytical and quantitative foundation."
  },
  {
    school: "S.A.L.E.G School, Bishnah",
    period: "2018",
    degree: "JKBOSE - Secondary (Class X)",
    // score: "Percentage: 73.2%",
    description: "Acquired foundational knowledge across diverse academic disciplines with excellent performance."
  }
];

const Education = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-obsidian-void" id="education">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10 z-10 relative">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-12 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {educationData.map((item, index) => (
            <div key={index} className="glass-card relative bg-white/[0.015] backdrop-blur-xl border border-white/5 rounded-2xl p-8 hover:border-cyan-500/25 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(6,182,212,0.15)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group">

              <div className="flex justify-between items-center mb-6">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-violet-500/[0.06] border border-violet-500/15 text-violet-400 group-hover:bg-gradient-to-tr group-hover:from-violet-500 group-hover:to-cyan-400 group-hover:text-white group-hover:border-transparent group-hover:scale-[1.08] group-hover:-rotate-6 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>
                </div>
                <span className="text-xs font-bold text-slate-400 tracking-wider bg-white/[0.02] border border-white/5 py-1.5 px-3.5 rounded-full">
                  {item.period}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300">
                {item.school}
              </h3>
              <h4 className="text-sm font-semibold text-cyan-400 mb-4">
                {item.degree}
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-grow">
                {item.description}
              </p>

              {item.score && (
                <div className="inline-flex items-center gap-2 bg-cyan-500/[0.05] border border-cyan-500/15 text-cyan-400 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide self-start mt-auto shadow-[0_4px_12px_rgba(6,182,212,0.05)]">
                  <span className="text-slate-400 font-medium">Result:</span>
                  <span>{item.score}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
