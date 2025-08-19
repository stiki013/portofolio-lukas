import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';
import Certifications from './Certifications';
import Contact from './Contact';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' }
];

const App = () => {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark'); else root.classList.remove('dark');
  }, [dark]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      <Header dark={dark} toggle={() => setDark(d => !d)} />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

const Header = ({ dark, toggle }) => (
  <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-700">
    <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
    
    {/* logo */}
      <span className="font-bold tracking-tight"></span>
    {/*  */}
    
      <nav className="hidden md:flex gap-6 text-sm">
        {navItems.map(i => <a key={i.id} href={`#${i.id}`} className="hover:text-indigo-600 dark:hover:text-indigo-400">{i.label}</a>)}
      </nav>
      <div className="flex items-center gap-3">
        <button onClick={toggle} aria-label="Toggle dark mode" className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">{dark ? '🌙' : '☀️'}</button>
        <button className="md:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800" onClick={() => document.getElementById('mobile-nav').classList.toggle('hidden')}>☰</button>
      </div>
    </div>
    <div id="mobile-nav" className="md:hidden hidden px-4 pb-4 flex-col gap-2 text-sm">
      {navItems.map(i => <a key={i.id} href={`#${i.id}`} className="py-1 border-b border-slate-200 dark:border-slate-700 last:border-0" onClick={() => { const el = document.getElementById('mobile-nav'); el.classList.add('hidden'); el.classList.remove('flex'); }}>{i.label}</a>)}
    </div>
  </header>
);

const Footer = () => (
  <footer className="py-10 text-center text-xs text-slate-500">
    <p>© {new Date().getFullYear()} Lukas William Djendrawan. Built with React & Tailwind.</p>
  </footer>
);

export default App;
