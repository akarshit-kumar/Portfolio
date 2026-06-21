import React from 'react';

const experienceData = [
  {
    company: "L&T Technology Services",
    role: "Engineer (Digital Auto, Aero & Medical)",
    period: "Sept 2024 - Present",
    bullets: [
      "Developing scalable, high-performance backend services using Spring Boot, REST APIs, and GraphQL with SQL and PostgreSQL.",
      "Building and enhancing user interfaces using React and Streamlit, ensuring seamless and intuitive frontend integration.",
      "Deploying and orchestrating applications on AWS (EC2, S3) with Docker and Kubernetes, boosting system reliability and scalability.",
      "Engineering data processing pipelines with Databricks and PySpark to manage large-scale structured and unstructured datasets.",
      "Coordinating agile team sprints on Azure Boards, tracking progress, assigning tasks, and resolving technical bottlenecks.",
      "Collaborating across cross-functional teams (backend, frontend, and cloud) to troubleshoot critical issues and ensure stability."
    ],
    tech: ["React", "Spring Boot", "GraphQL", "AWS", "Kubernetes", "Databricks", "PostgreSQL"]
  },
  {
    company: "VERZEO",
    role: "Machine Learning Intern (Remote)",
    period: "Jan 2023 - Feb 2023",
    bullets: [
      "Gained comprehensive experience in Python programming, exploratory data analysis, and predictive model construction.",
      "Trained, optimized, and evaluated supervised machine learning algorithms to complete an end-to-end pricing predictive model.",
      "Assessed model errors and performance metrics to identify the optimal solution, contributing data-driven insights."
    ],
    tech: ["Python", "Machine Learning", "Scikit-Learn", "Pandas", "NumPy"]
  }
];

const Experience = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-obsidian-void" id="experience">
      <div className="mx-auto w-full max-w-[900px] px-6 md:px-10 z-10 relative">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-16 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
          Work Experience
        </h2>
        
        {/* Responsive Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Track Line */}
          <div className="absolute left-[15px] sm:left-[19px] md:left-[23px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-violet-500 via-cyan-400 to-transparent pointer-events-none"></div>
          
          <div className="flex flex-col gap-12">
            {experienceData.map((item, index) => (
              <div key={index} className="relative pl-10 sm:pl-14 md:pl-20 group">
                
                {/* Connection Node Dot */}
                <div className="absolute left-[7px] sm:left-[11px] md:left-[15px] top-[26px] w-[18px] h-[18px] flex items-center justify-center z-10">
                  <div className="w-[10px] h-[10px] bg-slate-400 border-[2px] border-obsidian-void rounded-full ring-4 ring-white/5 transition-all duration-300 group-hover:bg-violet-500 group-hover:scale-130 group-hover:ring-violet-500/20 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.6)]"></div>
                </div>
                
                {/* Timeline Card Container */}
                <div className="glass-card relative bg-white/[0.015] backdrop-blur-xl border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-violet-500/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300 cursor-default">
                  
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 border-b border-white/5 pb-4 mb-6">
                    <div>
                      <h3 className="text-xl font-extrabold text-white tracking-tight mb-1">
                        {item.company}
                      </h3>
                      <h4 className="text-sm font-semibold text-violet-400">
                        {item.role}
                      </h4>
                    </div>
                    <span className="inline-flex text-xs font-bold text-slate-400 tracking-wider bg-white/[0.02] border border-white/5 py-1.5 px-3.5 rounded-full self-start sm:self-center">
                      {item.period}
                    </span>
                  </div>
                  
                  <ul className="flex flex-col gap-3.5 mb-8">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-3.5 items-start">
                        <span className="text-cyan-400 text-xs mt-1.5 flex-shrink-0 drop-shadow-[0_0_10px_rgba(6,182,212,0.4)]">✦</span>
                        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">{bullet}</p>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2.5">
                    {item.tech.map((t, idx) => (
                      <span key={idx} className="text-xs font-bold text-slate-400 bg-white/[0.015] border border-white/5 py-1.5 px-3 rounded-lg hover:border-violet-500 hover:text-white hover:shadow-[0_0_10px_rgba(139,92,246,0.2)] hover:bg-violet-500/[0.04] hover:-translate-y-0.5 transition-all duration-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
