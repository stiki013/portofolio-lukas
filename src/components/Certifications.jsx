import React, { useState, useCallback, useEffect } from 'react';

const certifications = [
  { title: 'Full Stack Web Development — Udemy (Jul 2023)', description: 'Completed a comprehensive curriculum covering frontend, backend, databases, and deployment practices translating theory into production-aware coding habits.', image: '/assets/certifications/Full Stack Web Development – Udemy  July 2023.png' },
  { title: 'Project Management Skills — STIKI (Oct 2023)', description: 'Learned structured planning, stakeholder analysis, and iterative execution—skills I now apply when scoping and sequencing development tasks.', image: '/assets/certifications/Project Management Skills – STIKI  October 2023.png' },
  { title: 'Automation Frontend Workflow using GulpJs — STIKI (Nov 2023)', description: 'Adopted build automation mindset—optimizing asset pipelines and reinforcing the value of repeatable tooling.', image: '/assets/certifications/Automation Frontend Workflow using GulpJs – STIKI  November 2023.png' },
  { title: 'AI Jumpstart Programme — British Embassy Jakarta (Sep 2024)', description: 'Explored applied AI concepts and responsible adoption, informing how I evaluate feasibility for data-driven features.', image: '/assets/certifications/AI Jumpstart Programme – British Embassy Jakarta  September 2024.png' },
  { title: 'Managing Diversity in Project — STIKI (Oct 2024)', description: 'Strengthened collaboration strategies and inclusion practices that improve cross-functional communication.', image: '/assets/certifications/Managing Diversity in Project – STIKI  October 2024.png' },
  { title: 'PMI Project Management Challenge — Top 10 Finalist (Jun 2025)', description: 'Competed nationally—refined rapid requirement synthesis and concise solution pitching under time constraints.', image: '/assets/certifications/pmi-project-management-challenge-2025.png' },
];

const Certifications = () => {
  const [active, setActive] = useState(null); // store cert object

  const onEsc = useCallback((e) => {
    if (e.key === 'Escape') setActive(null);
  }, []);

  useEffect(() => {
    if (active) document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, [active, onEsc]);

  return (
    <section id="certifications" className="section bg-slate-50 dark:bg-slate-800/40">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-heading">Certifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map(c => (
            <div key={c.title} className="group rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm flex flex-col">
              <button
                type="button"
                onClick={() => setActive(c)}
                className="aspect-video bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden focus:outline-none focus:ring-2 focus:ring-indigo-400 relative"
                aria-label={`Open ${c.title} certificate image`}
              >
                <img src={c.image} alt={c.title} className="certificate-img object-contain p-2 transition group-hover:scale-105" />
                <span className="absolute inset-0 ring-0 group-hover:ring-2 ring-indigo-400/40 rounded-none" />
              </button>
              <div className="p-4 flex flex-col gap-3">
                <h3 className="text-sm font-semibold leading-snug">{c.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{c.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in"
          role="dialog" aria-modal="true" aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <div className="relative w-full max-w-3xl" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setActive(null)}
              className="absolute -top-3 -right-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full w-9 h-9 shadow flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-indigo-400"
              aria-label="Close dialog"
            >×</button>
            <img
              src={active.image}
              alt={active.title}
              className="w-full max-h-[80vh] object-contain rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
            />
            <div className="mt-4 text-center">
              <h3 className="text-sm font-semibold mb-2">{active.title}</h3>
              <p className="text-xs text-slate-300 max-w-2xl mx-auto dark:text-slate-400">{active.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
