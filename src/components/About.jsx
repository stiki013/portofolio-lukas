import React from 'react';

const longBio = "From the very beginning, I’ve been fascinated by how ideas can be transformed into functional systems... [full narrative version you wrote earlier].";

const About = () => (
  <section id="about" className="section">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="section-heading">About</h2>
      <div className="prose prose-slate dark:prose-invert max-w-none leading-relaxed">
        <p>{longBio}</p>
      </div>
    </div>
  </section>
);

export default About;
