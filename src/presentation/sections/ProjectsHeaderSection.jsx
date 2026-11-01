import React from 'react';
import { ArrowRight } from '@phosphor-icons/react';

export default function ProjectsHeaderSection({ onNavigate }) {
  return (
    <section
      id="projects"
      className="min-h-[160vh] py-16 md:py-20 px-3 sm:px-6 md:px-8 flex flex-col justify-start"
    >
      <div className="flex justify-between items-end max-w-6xl mx-auto mb-8 md:mb-12 border-b border-white/15 pb-6 w-full">
        <div className="flex flex-col items-start">
          <span className="text-zinc-400 uppercase tracking-wider text-xs font-bold font-mono mb-2">
            01 — Projects
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Fresh from Michael&apos;s Desk
          </h2>
        </div>
        <a
          href="#contact-me"
          onClick={(e) => onNavigate(e, 'contact-me')}
          className="text-zinc-300 hover:text-white hover:underline font-bold text-xs sm:text-sm flex items-center gap-1 mb-1 transition-all duration-300"
        >
          Let&apos;s collaborate <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
