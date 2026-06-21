import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Intersection Observer for scroll reveal animations
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Card Mouse Spotlight hover effect tracker
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.glass-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-obsidian-void text-[#f8fafc] overflow-x-hidden">
      {/* Premium Cybernetic Mesh & Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute rounded-full blur-[135px] opacity-20 pointer-events-none mix-blend-screen w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] bg-[radial-gradient(circle,rgba(139,92,246,0.3)_0%,transparent_70%)] top-[-5%] right-[-5%] animate-[moveBlobPurple_25s_ease-in-out_infinite_alternate]"></div>
        <div className="absolute rounded-full blur-[135px] opacity-20 pointer-events-none mix-blend-screen w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] bg-[radial-gradient(circle,rgba(6,182,212,0.3)_0%,transparent_70%)] top-[35%] left-[-10%] animate-[moveBlobCyan_30s_ease-in-out_infinite_alternate]"></div>
        <div className="absolute rounded-full blur-[135px] opacity-20 pointer-events-none mix-blend-screen w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] bg-[radial-gradient(circle,rgba(236,72,153,0.3)_0%,transparent_70%)] bottom-[10%] right-[-10%] animate-[moveBlobPink_28s_ease-in-out_infinite_alternate]"></div>
      </div>
      
      <Header />
      <main className="relative z-10">
        <Hero />
        
        <div className="reveal">
          <Education />
        </div>
        
        <div className="reveal">
          <Experience />
        </div>
        
        <div className="reveal">
          <Projects />
        </div>
        
        <div className="reveal">
          <Skills />
        </div>
        
        <div className="reveal">
          <Achievements />
        </div>
        
        <div className="reveal">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
