import React from 'react';

const Hero = () => (
  <section id="hero" className="section pt-24 md:pt-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-12 gap-10 items-center">
      <div className="md:col-span-7 space-y-6">
        <p className="text-sm uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold">Hello, I'm</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">Lukas William Djendrawan</h1>
        <h2 className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300">Web Developer • Systems Analyst</h2>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-xl">
          I build dependable, data-driven web applications that balance backend pragmatism with frontend polish.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/assets/CV_LukasWilliam_2025.pdf" className="btn-primary" download>Download CV</a>
          <a href="https://www.linkedin.com/in/william-djendrawan-007b02313/" target="_blank" rel="noreferrer" className="btn-outline">LinkedIn</a>
          <a href="https://github.com/stiki013" target="_blank" rel="noreferrer" className="btn-outline">GitHub</a>
        </div>
      </div>
      <div className="md:col-span-5 flex justify-center md:justify-end">
        <div className="relative w-52 h-52 md:w-64 md:h-64">
          <img
            src="/assets/profile.png"
            alt="Portrait of Lukas William Djendrawan"
            className="w-full h-full object-cover rounded-full ring-4 ring-indigo-200 dark:ring-indigo-500/30 shadow-lg"
            loading="eager"
            decoding="async"
          />
          <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/10 to-transparent dark:from-indigo-400/10 pointer-events-none" />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
