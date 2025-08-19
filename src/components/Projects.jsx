import React from 'react';

const projects = [
  {
    title: "Let’s Help 2Gether (2025 – Present)",
    role: "Web Developer",
    points: [
      'Built auth with Laravel Breeze',
      'Optimized SQL queries',
      'Refactored frontend with Tailwind'
    ],
    demo: 'https://letshelp2gether.com'
  },
  {
    title: 'PT. Maspion CMS (Dec 2024 – Feb 2025)',
    role: 'System Analyst Intern',
    points: [
      'Requirement gathering, DFDs, sprint planning'
    ],
    demo: 'https://cms-maspion.dbi-project.my.id'
  },
  {
    title: 'DBI CMS (Sep 2024 – Feb 2025)',
    role: 'System Analyst Intern',
    points: [
      'Elicited business requirements, diagrams, scope mgmt'
    ],
    demo: 'https://cms.dbi-project.my.id'
  }
];

const Projects = () => (
  <section id="projects" className="section bg-slate-50 dark:bg-slate-800/40">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="section-heading">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(p => (
          <div key={p.title} className="p-6 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col">
            <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
            <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-3 font-medium">{p.role}</p>
            <ul className="text-sm space-y-1 mb-4 list-disc pl-5 marker:text-indigo-500">
              {p.points.map(pt => <li key={pt}>{pt}</li>)}
            </ul>
            <a href={p.demo} target="_blank" rel="noreferrer" className="mt-auto text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline">Demo ↗</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
