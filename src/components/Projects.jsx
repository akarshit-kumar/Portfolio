import React from 'react';

const projects = [
  {
    title: "Phone Price Prediction",
    date: "Feb 2023",
    description: "Built an end-to-end Machine Learning model to predict mobile phone prices. Performed intensive exploratory data analysis, handled preprocessing, estimated error bounds, and compared model accuracy to discover the optimal predictive solution.",
    tech: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
    link: "https://github.com/akarshit-kumar"
  },
  {
    title: "Transaction Analytics Dashboard",
    date: "May 2023",
    description: "Designed a premium analytics dashboard that aggregates profit percentages and visualizes transactional trends using real-time interactive bar charts. Delivers swift and intuitive UI controls for granular data filtering.",
    tech: ["Next.js", "React", "Vanilla CSS"],
    link: "https://github.com/akarshit-kumar"
  },
  {
    title: "Weather Monitoring App",
    date: "July 2023",
    description: "Developed a responsive web application that fetches and displays real-time weather statistics across global search queries. Implemented direct REST API integrations and asynchronous data updates.",
    tech: ["HTML", "Vanilla CSS", "JavaScript", "REST API"],
    link: "https://github.com/akarshit-kumar"
  }
];

const Projects = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-obsidian-void" id="projects">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10 z-10 relative">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-12 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card relative bg-white/[0.015] backdrop-blur-xl border border-white/5 rounded-2xl p-8 hover:border-violet-500/25 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(139,92,246,0.15)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group">
              
              <div className="flex justify-between items-center mb-6">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-violet-500/[0.06] border border-violet-500/15 text-violet-400 group-hover:bg-gradient-to-tr group-hover:from-violet-500 group-hover:to-cyan-400 group-hover:text-white group-hover:border-transparent group-hover:scale-[1.08] group-hover:-rotate-6 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <span className="text-xs font-bold text-slate-400 tracking-wider bg-white/[0.02] border border-white/5 py-1.5 px-3.5 rounded-full">
                  {project.date}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-bold text-slate-400 bg-white/[0.015] border border-white/5 py-1.5 px-3 rounded-lg hover:border-cyan-500 hover:text-white hover:shadow-[0_0_10px_rgba(6,182,212,0.2)] hover:bg-cyan-500/[0.04] hover:-translate-y-0.5 transition-all duration-200">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="pt-4 border-t border-white/5 mt-auto">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-white transition-colors duration-200 group/link">
                  View Code Repository
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover/link:translate-x-1.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
