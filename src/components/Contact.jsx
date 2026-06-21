import React from 'react';

const Contact = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-obsidian-void" id="contact">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10 z-10 relative">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-12 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
          Get In Touch
        </h2>
        
        <div className="glass-card relative bg-white/[0.015] backdrop-blur-xl border border-white/5 rounded-2xl p-8 sm:p-12 text-center max-w-[900px] mx-auto">
          <p className="text-sm font-bold text-violet-400 uppercase tracking-widest mb-3">
            Let's build something remarkable together
          </p>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-[680px] mx-auto mb-12">
            I'm currently open to new opportunities, technical collaborations, and software engineering challenges. 
            Whether you have a specific role, a project inquiry, or just want to connect, feel free to drop a message!
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            
            {/* Email Contact Card */}
            <a href="mailto:akarshit1691@gmail.com" className="flex flex-col items-center p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-violet-500/35 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(139,92,246,0.2)] hover:bg-violet-500/[0.015] hover:-translate-y-1.5 transition-all duration-300 group">
              <div className="w-11 h-11 rounded-full flex items-center justify-center bg-white/[0.02] border border-white/10 text-white mb-6 group-hover:bg-gradient-to-r group-hover:from-violet-500 group-hover:to-cyan-400 group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_0_15px_rgba(139,92,246,0.35)] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <span className="text-sm font-bold text-white mb-1.5">Email Me</span>
              <span className="text-xs text-slate-400 break-all">akarshit1691@gmail.com</span>
            </a>
            
            {/* WhatsApp Contact Card */}
            <a href="https://wa.me/917006137859" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-emerald-500/35 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(52,211,153,0.2)] hover:bg-emerald-500/[0.015] hover:-translate-y-1.5 transition-all duration-300 group">
              <div className="w-11 h-11 rounded-full flex items-center justify-center bg-white/[0.02] border border-white/10 text-white mb-6 group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-teal-600 group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_0_15px_rgba(52,211,153,0.35)] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </div>
              <span className="text-sm font-bold text-white mb-1.5">WhatsApp Chat</span>
              <span className="text-xs text-slate-400 break-all">+91 70061 37859</span>
            </a>
            
            {/* Phone Contact Card */}
            <a href="tel:+917006137859" className="flex flex-col items-center p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-cyan-500/35 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(6,182,212,0.2)] hover:bg-cyan-500/[0.015] hover:-translate-y-1.5 transition-all duration-300 group">
              <div className="w-11 h-11 rounded-full flex items-center justify-center bg-white/[0.02] border border-white/10 text-white mb-6 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-500 group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_0_15px_rgba(6,182,212,0.35)] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <span className="text-sm font-bold text-white mb-1.5">Direct Call</span>
              <span className="text-xs text-slate-400 break-all">+91 70061 37859</span>
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
