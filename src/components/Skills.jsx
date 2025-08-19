import React from 'react';

const sections = [
  { title: 'Languages / Frameworks', items: ['PHP', 'Laravel', 'JS', 'Node.js', 'Flutter'] },
  { title: 'Databases', items: ['MySQL', 'PostgreSQL'] },
  { title: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Miro', 'Notion', 'Trello', 'Power BI'] },
];

const Skills = () => (
  <section id="skills" className="section">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="section-heading">Skills</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {sections.map(s => (
          <div key={s.title} className="p-5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm">
            <h3 className="font-semibold mb-3 text-indigo-600 dark:text-indigo-400">{s.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {s.items.map(it => <li key={it} className="px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-200 text-xs font-medium">{it}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
