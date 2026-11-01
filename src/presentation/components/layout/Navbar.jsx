import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ logo, navigation = [], activeSection, onNavigate }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-100 flex justify-center h-[72px] transition-all duration-300">
      <div className="w-full max-w-[1440px] flex justify-between items-center px-3 sm:px-8 md:px-16 h-full">
        <img
          src={logo}
          alt="Michael portfolio logo"
          className="h-[32px] object-contain ml-3 cursor-pointer"
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
                className={`nav-link px-3.5 md:px-4 h-full inline-flex items-center relative font-sans text-sm transition-colors duration-200 ${
                  isActive ? 'text-[#3d5945] font-bold' : 'text-gray-600 hover:text-[#3d5945]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeSectionLine"
                    className="absolute bottom-0 left-2 right-2 h-[3px] bg-[#3d5945] rounded-full"
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
