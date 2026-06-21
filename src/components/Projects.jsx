import React, { useState, useEffect } from 'react';

const curatedReposMetadata = {
  'payment-gateway-playground': {
    title: "Payment Gateway Sandbox",
    date: "Dec 2023",
    description: "Interactive full-stack payment sandbox for learning core system design patterns, transaction processing, and integration mechanics.",
    tech: ["React", "Express", "Stripe API", "Tailwind CSS", "Webhooks"],
    liveUrl: "https://payment-gateway-playground.vercel.app/"
  },
  'Portfolio': {
    title: "Developer Portfolio",
    date: "Present",
    description: "A high-performance modern developer portfolio with premium theme options, interactive scrolling anchors, and dynamic API bindings.",
    tech: ["React", "Vite", "Tailwind CSS", "Vercel Hosting"],
    liveUrl: "https://akarshit-kumar.vercel.app/"
  },
  'ecommerce': {
    title: "E-Commerce Platform",
    date: "Oct 2023",
    description: "Feature-rich e-commerce application featuring catalog browsing, cart operations, JWT-based user authentication, and mock checkout flows.",
    tech: ["Node.js", "React", "JavaScript", "MongoDB", "Express"]
  },
  'ML-PROJECTS': {
    title: "Machine Learning Projects",
    date: "Jun 2023",
    description: "An exploratory analysis and training sandbox implementing predictive modeling, regression tests, and error optimization logic.",
    tech: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Jupyter"]
  },
  'Web_Scraper': {
    title: "Asynchronous Web Scraper",
    date: "Apr 2023",
    description: "Python-based web crawler configured to programmatically navigate pages, parse raw elements, clean structures, and output structured CSV dataset files.",
    tech: ["Python", "BeautifulSoup", "Requests", "Data Parsing"]
  },
  'COMPUTER_NETWORK': {
    title: "Network Protocols & Sockets",
    date: "Mar 2023",
    description: "Low-level socket programming interfaces and protocol packet simulation tools demonstrating key concepts of TCP/UDP network communication layers.",
    tech: ["C", "Socket APIs", "Python", "TCP/IP Networks"]
  }
};

const fallbackProjects = Object.keys(curatedReposMetadata).map(key => ({
  name: key,
  title: curatedReposMetadata[key].title,
  date: curatedReposMetadata[key].date,
  description: curatedReposMetadata[key].description,
  tech: curatedReposMetadata[key].tech,
  link: `https://github.com/akarshit-kumar/${key}`,
  liveUrl: curatedReposMetadata[key].liveUrl || null,
  stars: 0,
  forks: 0,
  pushed_at: ""
}));

const formatTitle = (name) => {
  return name
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const SkeletonCard = () => (
  <div className="glass-card relative bg-white/[0.015] backdrop-blur-xl border border-white/5 rounded-2xl p-8 flex flex-col h-full animate-pulse">
    <div className="flex justify-between items-center mb-6">
      <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10"></div>
      <div className="w-20 h-5 bg-white/5 rounded-full"></div>
    </div>
    <div className="w-2/3 h-6 bg-white/10 rounded mb-4"></div>
    <div className="w-full h-4 bg-white/5 rounded mb-2"></div>
    <div className="w-5/6 h-4 bg-white/5 rounded mb-2"></div>
    <div className="w-4/5 h-4 bg-white/5 rounded mb-6"></div>
    <div className="flex flex-wrap gap-2 mb-8">
      <div className="w-16 h-6 bg-white/5 rounded-lg"></div>
      <div className="w-20 h-6 bg-white/5 rounded-lg"></div>
      <div className="w-14 h-6 bg-white/5 rounded-lg"></div>
    </div>
    <div className="pt-4 border-t border-white/5 mt-auto">
      <div className="w-32 h-5 bg-white/5 rounded"></div>
    </div>
  </div>
);

const Projects = () => {
  const [projectsList, setProjectsList] = useState(fallbackProjects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/akarshit-kumar/repos');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();

        // Filter out forks and process
        const filtered = data
          .filter(repo => !repo.fork)
          .map(repo => {
            const curated = curatedReposMetadata[repo.name];
            return {
              name: repo.name,
              title: curated ? curated.title : formatTitle(repo.name),
              date: curated ? curated.date : new Date(repo.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
              description: curated ? curated.description : (repo.description || 'No description available.'),
              tech: curated ? curated.tech : (repo.language ? [repo.language] : ['Software Project']),
              link: repo.html_url,
              liveUrl: curated ? curated.liveUrl : null,
              stars: repo.stargazers_count,
              forks: repo.forks_count,
              pushed_at: repo.pushed_at
            };
          });

        // Sort: curated first (in order of definition), then others by pushed_at descending
        const curatedKeys = Object.keys(curatedReposMetadata);
        const sorted = filtered.sort((a, b) => {
          const indexA = curatedKeys.indexOf(a.name);
          const indexB = curatedKeys.indexOf(b.name);

          if (indexA !== -1 && indexB !== -1) {
            return indexA - indexB;
          }
          if (indexA !== -1) return -1;
          if (indexB !== -1) return 1;

          return new Date(b.pushed_at) - new Date(a.pushed_at);
        });

        setProjectsList(sorted);
      } catch (err) {
        console.error("Error fetching projects from GitHub: ", err);
        // If fetch fails, projectsList remains initialized with fallbackProjects
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-obsidian-void" id="projects">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10 z-10 relative">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-12 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          ) : (
            projectsList.map((project, index) => (
              <div key={index} className="glass-card relative bg-white/[0.015] backdrop-blur-xl border border-white/5 rounded-2xl p-8 hover:border-violet-500/25 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(139,92,246,0.15)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group">

                <div className="flex justify-between items-start mb-6">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-violet-500/[0.06] border border-violet-500/15 text-violet-400 group-hover:bg-gradient-to-tr group-hover:from-violet-500 group-hover:to-cyan-400 group-hover:text-white group-hover:border-transparent group-hover:scale-[1.08] group-hover:-rotate-6 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-xs font-bold text-slate-400 tracking-wider bg-white/[0.02] border border-white/5 py-1.5 px-3.5 rounded-full">
                      {project.date}
                    </span>
                    {(project.stars > 0 || project.forks > 0) && (
                      <div className="flex items-center gap-2 mt-1">
                        {project.stars > 0 && (
                          <span className="flex items-center gap-1 bg-amber-500/[0.06] border border-amber-500/15 text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            {project.stars}
                          </span>
                        )}
                        {project.forks > 0 && (
                          <span className="flex items-center gap-1 bg-cyan-500/[0.06] border border-cyan-500/15 text-cyan-400 text-[10px] font-bold px-2 py-0.5 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h-3a2 2 0 0 0-2 2v7"></path></svg>
                            {project.forks}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
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

                <div className="pt-4 border-t border-white/5 mt-auto flex items-center justify-between gap-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors duration-200 group/link">
                    View Code
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover/link:translate-x-0.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </a>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-white transition-colors duration-200 group/live">
                      Live Preview
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover/live:-translate-y-0.5 group-hover/live:translate-x-0.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                    </a>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* View All CTA */}
        <div className="flex justify-center">
          <a href="https://github.com/akarshit-kumar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-violet-600/30 to-cyan-500/30 hover:from-violet-600/50 hover:to-cyan-500/50 border border-violet-500/20 hover:border-cyan-400/40 text-white font-semibold text-sm rounded-xl hover:scale-[1.02] shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 group">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-12 transition-transform duration-300"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
