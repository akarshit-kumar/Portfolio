import React from 'react';

const skillsData = [
  {
    category: "Languages",
    cardGlowClass: "hover:border-pink-500/35 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(236,72,153,0.25)]",
    iconGlowClass: "group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-violet-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(236,72,153,0.35)]",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
    items: ["C++", "Python", "JavaScript", "Java"]
  },
  {
    category: "Frameworks & UI",
    cardGlowClass: "hover:border-violet-500/35 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(139,92,246,0.25)]",
    iconGlowClass: "group-hover:bg-gradient-to-r group-hover:from-violet-500 group-hover:to-cyan-400 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(139,92,246,0.35)]",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>,
    items: ["React", "Next.js", "Spring Boot", "Streamlit", "PySpark"]
  },
  {
    category: "Cloud & DevOps",
    cardGlowClass: "hover:border-cyan-500/35 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(6,182,212,0.25)]",
    iconGlowClass: "group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(6,182,212,0.35)]",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>,
    items: ["AWS (EC2, S3)", "Docker", "Kubernetes (K8s)", "Databricks"]
  },
  {
    category: "Databases",
    cardGlowClass: "hover:border-blue-500/35 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(59,130,246,0.25)]",
    iconGlowClass: "group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-indigo-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path></svg>,
    items: ["PostgreSQL", "SQL"]
  },
  {
    category: "Coursework & Tools",
    cardGlowClass: "hover:border-amber-500/35 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(245,158,11,0.25)]",
    iconGlowClass: "group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-orange-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(245,158,11,0.35)]",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>,
    items: ["DSA", "DBMS", "Operating Systems", "Git", "GitLab"]
  },
  {
    category: "Leadership & Soft Skills",
    cardGlowClass: "hover:border-emerald-500/35 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(16,185,129,0.25)]",
    iconGlowClass: "group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-teal-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(16,185,129,0.35)]",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
    items: ["Communication", "Leadership", "Problem Solving"]
  },
  {
    category: "Areas of Interest",
    cardGlowClass: "hover:border-rose-500/35 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(244,63,94,0.25)]",
    iconGlowClass: "group-hover:bg-gradient-to-r group-hover:from-rose-500 group-hover:to-red-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(244,63,94,0.35)]",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>,
    items: ["Sudoku", "Chess", "Cricket", "Kabaddi"]
  }
];

const Skills = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-obsidian-void" id="skills">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10 z-10 relative">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-12 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
          Technical Skills & Interests
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillsData.map((data, idx) => (
            <div key={idx} className={`glass-card relative bg-white/[0.015] backdrop-blur-xl border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col h-full transition-all duration-300 group ${data.cardGlowClass}`}>
              
              <div className="flex items-center gap-3.5 mb-6 border-b border-white/5 pb-4">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center bg-white/[0.02] border border-white/10 text-violet-400 transition-all duration-300 ${data.iconGlowClass}`}>
                  {data.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {data.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {data.items.map((skill, index) => (
                  <span key={index} className="text-xs font-semibold text-slate-400 bg-white/[0.015] border border-white/5 py-1.5 px-3 rounded-lg hover:border-white/20 hover:text-white hover:bg-white/[0.05] hover:scale-105 transition-all duration-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
