import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 relative z-10 bg-obsidian-void">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10 text-center">
        <p className="text-base font-bold text-white mb-1.5 tracking-tight">
          Designed & Built by <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent font-extrabold">Akarshit Kumar</span>
        </p>
        <p className="text-xs text-slate-500 font-medium opacity-80">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
