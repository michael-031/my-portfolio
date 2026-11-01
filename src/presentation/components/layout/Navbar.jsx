import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeSimple, Code } from '@phosphor-icons/react';

export default function Navbar({ logo, navigation = [], activeSection, onNavigate }) {
  return (
    <header className="sticky top-0 z-50 flex justify-center px-3 sm:px-6 pt-4 pb-2 pointer-events-none">
      <div className="w-full max-w-5xl h-[58px] rounded-full bg-[#111016]/85 backdrop-blur-xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.65)] flex justify-between items-center px-4 sm:px-6 pointer-events-auto transition-all duration-300">
        {/* Left Brand Identity */}
        <div
          onClick={(e) => onNavigate(e, 'hero')}
          className="flex items-center gap-2.5 cursor-pointer group shrink-0"
        >
          <img
            src={logo}
            alt="Michael Inoc logo"
            className="h-7 w-7 object-contain brightness-125 transition-transform duration-200 group-hover:scale-105"
          />
          <span className="font-display font-bold text-sm sm:text-base text-white tracking-tight">
            Michael Inoc
          </span>
          <span className="hidden md:inline-block h-4 w-px bg-white/15 ml-2" />
        </div>

        {/* Center Navigation Links */}
        <nav className="flex items-center gap-0.5 sm:gap-1 h-full overflow-x-auto">
          {navigation.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => onNavigate(e, item.id)}
                className={`nav-link px-2.5 sm:px-3.5 py-1.5 rounded-full inline-flex items-center relative text-xs sm:text-[13px] transition-all duration-200 whitespace-nowrap ${
                  isActive ? 'text-white font-semibold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSectionPill"
                    className="absolute inset-0 bg-white/10 border border-white/15 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Quick Action Pills */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <a
            href="#projects"
            onClick={(e) => onNavigate(e, 'projects')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-200 border border-white/12 text-xs font-display font-medium transition-all"
          >
            <Code size={14} weight="bold" />
            <span>Projects</span>
          </a>
          <a
            href="mailto:inoc.johnmichael@gmail.com"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white hover:bg-zinc-200 text-[#0e0d12] text-xs font-display font-semibold transition-all shadow-sm"
          >
            <EnvelopeSimple size={14} weight="bold" />
            <span>Send Email</span>
          </a>
        </div>
      </div>
    </header>
  );
}
