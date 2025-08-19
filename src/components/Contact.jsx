import React from 'react';

const Contact = () => (
  <section id="contact" className="section bg-slate-50 dark:bg-slate-800/40">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="section-heading">Contact</h2>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <p className="text-lg font-medium">Let's build something.</p>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md">Email me or reach out through LinkedIn / GitHub.</p>
          <ul className="space-y-2 text-sm">
            <li><span className="font-medium">Email:</span> <a className="text-indigo-600 dark:text-indigo-400 hover:underline" href="mailto:lukas.djen@gmail.com">lukas.djen@gmail.com</a></li>
          </ul>
          <div className="flex gap-3 pt-2">
            <a href="https://www.linkedin.com/in/william-djendrawan-007b02313/" target="_blank" rel="noreferrer" className="btn-outline">LinkedIn</a>
            <a href="https://github.com/stiki013" target="_blank" rel="noreferrer" className="btn-outline">GitHub</a>
          </div>
        </div>
        <form onSubmit={e => { e.preventDefault(); alert('Message sent (mock).'); }} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold mb-1" htmlFor="name">Name</label>
            <input id="name" required className="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1" htmlFor="email">Email</label>
            <input id="email" type="email" required className="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1" htmlFor="message">Message</label>
            <textarea id="message" rows={4} required className="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2 text-sm resize-none" />
          </div>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
