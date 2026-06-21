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
          className="flex md:hidden flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-full border border-white/5 hover:border-white/15 bg-transparent hover:bg-white/[0.04] cursor-pointer transition-all z-50" 
          onClick={toggleMenu} 
          aria-label="Toggle navigation menu"
        >
          <div className={`w-[18px] h-[2px] bg-white rounded-full transition-all duration-300 ${isOpen ? 'translate-y-2 rotate-45 bg-violet-400' : ''}`} />
          <div className={`w-[18px] h-[2px] bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <div className={`w-[18px] h-[2px] bg-white rounded-full transition-all duration-300 ${isOpen ? '-translate-y-2 -rotate-45 bg-violet-400' : ''}`} />
        </button>
      </div>

      {/* Mobile Navigation Drawer - Placed outside the centered pill but inside the header wrapper */}
      <nav className={`fixed top-0 h-screen w-[290px] bg-[#040210]/98 backdrop-blur-[25px] border-l border-white/10 shadow-[20px_0_60px_rgba(0,0,0,0.8)] px-10 pt-28 flex flex-col transition-all duration-400 ease-in-out md:hidden ${isOpen ? 'right-0' : '-right-full'}`}>
        <ul className="flex flex-col gap-8 w-full">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <li key={link.name} className="w-full">
                <a 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-semibold tracking-wide py-2 border-b border-white/[0.03] transition-all duration-200 ${isActive ? 'text-violet-400' : 'text-slate-400 hover:text-white'}`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
