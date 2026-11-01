import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ logo, navigation = [], activeSection, onNavigate }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0e0d12]/80 border-b border-white/10 flex justify-center h-[72px] transition-all duration-300">
      <div className="w-full max-w-[1440px] flex justify-between items-center px-3 sm:px-8 md:px-16 h-full">
        <img
          src={logo}
          alt="Michael portfolio logo"
          className="h-[32px] object-contain ml-3 cursor-pointer brightness-125"
          onClick={(e) => onNavigate(e, 'hero')}
        />
        <nav className="flex gap-1 md:gap-2 h-full">
          {navigation.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => onNavigate(e, item.id)}
                className={`nav-link px-3.5 md:px-4 h-full inline-flex items-center relative text-sm transition-colors duration-200 ${
                  isActive ? 'text-white font-bold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeSectionLine"
                    className="absolute bottom-0 left-2 right-2 h-[3px] bg-white rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
