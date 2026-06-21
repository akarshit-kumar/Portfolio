import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-obsidian-void" id="home">
      {/* Cyber Grid Canvas background overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

      <div className="mx-auto w-full max-w-[900px] px-6 md:px-10 z-10 relative flex flex-col items-center text-center">
        
        {/* Status Badge */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2.5 bg-emerald-500/[0.06] border border-emerald-500/15 text-emerald-400 px-5 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wide shadow-[0_4px_12px_rgba(52,211,153,0.05)]">
            <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping"></span>
            Engineer at L&T Technology Services
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-4 text-white">
          Hi, I'm <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Akarshit Kumar</span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-300 mb-6 tracking-tight">
          Full Stack Software Engineer
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed mb-10 max-w-[640px]">
          B.Tech Information Technology graduate from <strong className="text-white font-semibold">NIT Srinagar</strong>. 
          Designing and deploying robust full-stack applications with React, Spring Boot, GraphQL, and AWS. 
          Passionate about building scalable backend services, optimizing data pipelines with Databricks, and resolving complex software engineering puzzles.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <a href="#projects" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-500 text-white font-semibold text-sm rounded-xl hover:scale-[1.02] shadow-[0_4px_20px_rgba(139,92,246,0.3)] hover:shadow-[0_8px_30px_rgba(139,92,246,0.5)] transition-all duration-300">
            Explore Projects
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
          <a href="https://wa.me/917006137859" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-white/[0.02] border border-white/10 text-white font-semibold text-sm rounded-xl hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            WhatsApp
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5 pt-8 mt-12 border-t border-white/5 w-full max-w-[320px] justify-center">
          <a href="mailto:akarshit1691@gmail.com" title="Email" className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/5 bg-white/[0.01] text-slate-400 hover:text-white hover:border-white/15 hover:bg-white/[0.04] hover:scale-115 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </a>
          <a href="https://github.com/akarshit-kumar" target="_blank" rel="noopener noreferrer" title="GitHub" className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/5 bg-white/[0.01] text-slate-400 hover:text-white hover:border-white/15 hover:bg-white/[0.04] hover:scale-115 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="https://www.linkedin.com/in/akarshit-kumar-890aa5244/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/5 bg-white/[0.01] text-slate-400 hover:text-white hover:border-white/15 hover:bg-white/[0.04] hover:scale-115 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
