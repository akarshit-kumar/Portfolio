import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll Spy
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['home', 'education', 'experience', 'projects', 'skills', 'achievements', 'contact'];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section occupies the active reading zone (280px from top of viewport)
          if (rect.top <= 280 && rect.bottom >= 280) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Close drawer if resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-7'}`}>
      {/* Pill Container */}
      <div className={`mx-auto flex justify-between items-center transition-all duration-300 w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] max-w-[1100px] px-6 py-2 rounded-full border border-transparent ${scrolled ? 'bg-[#08071a]/45 backdrop-blur-xl border-white/10 py-3 px-8 shadow-[0_12px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(139,92,246,0.1)]' : 'bg-transparent'}`}>
        
        <a href="#home" className="text-xl font-extrabold tracking-tight text-white select-none">
          Akarshit<span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent font-black">.</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-9">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className={`relative text-[13.5px] font-semibold tracking-wide transition-all duration-200 pb-1 ${isActive ? 'text-white drop-shadow-[0_0_15px_rgba(167,139,250,0.4)]' : 'text-slate-400 hover:text-white'}`}
                  >
                    {link.name}
                    <span className={`absolute bottom-[-2px] left-0 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full transition-all duration-300 ${isActive ? 'w-full' : 'w-0 hover:w-full'}`} />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Hamburger Toggle */}
        <button 
          className={`flex md:hidden flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-full border border-white/5 hover:border-white/15 bg-transparent hover:bg-white/[0.04] cursor-pointer transition-all ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} 
          onClick={toggleMenu} 
          aria-label="Open navigation menu"
        >
          <div className="w-[18px] h-[2px] bg-white rounded-full transition-all duration-300" />
          <div className="w-[18px] h-[2px] bg-white rounded-full transition-all duration-300" />
          <div className="w-[18px] h-[2px] bg-white rounded-full transition-all duration-300" />
        </button>
      </div>

      {/* Mobile Drawer Backdrop Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer */}
      <nav 
        className={`fixed top-0 h-screen w-[290px] bg-[#040210]/98 backdrop-blur-[25px] border-l border-white/10 shadow-[20px_0_60px_rgba(0,0,0,0.8)] px-8 pt-7 pb-10 flex flex-col justify-between overflow-y-auto transition-all duration-400 ease-in-out md:hidden z-50 ${isOpen ? 'right-0' : '-right-full'}`}
      >
        <div>
          {/* Sidebar Header with Brand & Constant Close 'X' Button */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/[0.08]">
            <a 
              href="#home" 
              onClick={() => setIsOpen(false)}
              className="text-xl font-extrabold tracking-tight text-white select-none"
            >
              Akarshit<span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent font-black">.</span>
            </a>

            <button 
              onClick={() => setIsOpen(false)} 
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.04] hover:bg-white/[0.08] cursor-pointer transition-all text-violet-400 hover:text-white" 
              aria-label="Close navigation menu"
            >
              <svg className="w-5 h-5 text-violet-400 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col gap-6 w-full">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name} className="w-full">
                  <a 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className={`block text-lg font-semibold tracking-wide py-2 border-b border-white/[0.03] transition-all duration-200 ${isActive ? 'text-violet-400 font-bold' : 'text-slate-400 hover:text-white'}`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
