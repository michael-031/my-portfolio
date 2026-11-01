import React from 'react';
import { ArrowRight } from '@phosphor-icons/react';

export default function ProjectsHeaderSection({ onNavigate, isDark = true }) {
  return (
    <section
      id="projects"
      className="min-h-[160vh] py-16 md:py-20 px-3 sm:px-6 md:px-8 flex flex-col justify-start"
    >
      <div
        className={`flex justify-between items-end max-w-6xl mx-auto mb-8 md:mb-12 border-b pb-6 w-full ${
          isDark ? 'border-white/15' : 'border-gray-200/80'
        }`}
      >
        <div className="flex flex-col items-start">
          <span
            className={`uppercase tracking-wider text-xs font-bold font-mono mb-2 ${
              isDark ? 'text-zinc-400' : 'text-[#556b4f]'
            }`}
          >
            01 — Projects
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold ${
              isDark ? 'text-white' : 'text-[#1a1515]'
            }`}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Fresh from Michael&apos;s Desk
          </h2>
        </div>
        <a
          href="#contact-me"
          onClick={(e) => onNavigate(e, 'contact-me')}
          className={`hover:underline font-bold text-xs sm:text-sm flex items-center gap-1 mb-1 transition-all duration-300 ${
            isDark ? 'text-zinc-300 hover:text-white' : 'text-[#556b4f]'
          }`}
        >
          Let&apos;s collaborate <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
