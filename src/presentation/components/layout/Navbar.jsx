import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from '@phosphor-icons/react';

export default function Navbar({
  logo,
  navigation = [],
  activeSection,
  onNavigate,
  isDark = true,
  onToggleTheme,
}) {
  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md border-b flex justify-center h-[72px] transition-all duration-300 ${
        isDark
          ? 'bg-[#0e0d12]/80 border-white/10'
          : 'bg-white/75 border-gray-100'
      }`}
    >
      <div className="w-full max-w-[1440px] flex justify-between items-center px-3 sm:px-8 md:px-16 h-full">
        <img
          src={logo}
          alt="Michael portfolio logo"
          className={`h-[32px] object-contain ml-3 cursor-pointer transition-all ${
            isDark ? 'brightness-125' : ''
          }`}
          onClick={(e) => onNavigate(e, 'hero')}
        />
        <div className="flex items-center gap-2 md:gap-4 h-full">
          <nav className="flex gap-1 md:gap-2 h-full">
            {navigation.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => onNavigate(e, item.id)}
                  className={`nav-link px-3 sm:px-3.5 md:px-4 h-full inline-flex items-center relative text-xs sm:text-sm transition-colors duration-200 ${
                    isActive
                      ? isDark
                        ? 'text-white font-bold'
                        : 'text-[#3d5945] font-bold'
                      : isDark
                        ? 'text-zinc-400 hover:text-white'
                        : 'text-gray-600 hover:text-[#3d5945]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeSectionLine"
                      className={`absolute bottom-0 left-2 right-2 h-[3px] rounded-full ${
                        isDark ? 'bg-white' : 'bg-[#3d5945]'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 cursor-pointer shrink-0 ${
              isDark
                ? 'bg-white/8 border-white/15 text-zinc-200 hover:bg-white hover:text-[#0e0d12]'
                : 'bg-[#eef3ee] border-[#d3ddd3] text-[#3d5945] hover:bg-[#3d5945] hover:text-white'
            }`}
          >
            {isDark ? <Sun size={19} weight="bold" /> : <Moon size={19} weight="bold" />}
          </button>
        </div>
      </div>
    </header>
  );
}
