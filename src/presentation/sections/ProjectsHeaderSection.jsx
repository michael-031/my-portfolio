import React from 'react';
import { ArrowRight } from '@phosphor-icons/react';

export default function ProjectsHeaderSection({ onNavigate }) {
  return (
    <section
      id="projects"
      className="min-h-[160vh] py-16 md:py-20 px-3 sm:px-6 md:px-8 flex flex-col justify-start"
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end max-w-6xl mx-auto mb-8 md:mb-12 border-b border-white/10 pb-6 w-full gap-4">
        <div className="flex flex-col items-start">
          <span className="text-zinc-400 uppercase tracking-widest text-xs font-semibold font-mono mb-2">
            01 — Featured Projects
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-display">
            Projects
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl font-sans">
            Selected systems and platforms I&apos;ve engineered, focused on clean UX, scalable
            architecture, and workflow automation.
          </p>
        </div>
        <a
          href="#contact-me"
          onClick={(e) => onNavigate(e, 'contact-me')}
          className="text-zinc-200 hover:text-white font-display font-semibold text-xs sm:text-sm inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/12 transition-all duration-300 self-start sm:self-auto"
        >
          <span>Let&apos;s collaborate</span>
          <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}
