import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from '@phosphor-icons/react';

export default function ProjectDetailModal({ project, initialSection = 0, onClose }) {
  const [activeSection, setActiveSection] = useState(initialSection);
  const scrollContainerRef = useRef(null);
  const sectionRefs = useRef([]);

  const content = [
    {
      id: 'description',
      title: 'Description',
      badge: 'Project Overview',
      body: (
        <p className="text-base md:text-lg text-zinc-300 font-sans leading-relaxed">
          {project?.description}
        </p>
      ),
      visual: (
        <div className="w-full h-full bg-[#121117] flex items-center justify-center overflow-hidden relative group">
          {project?.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#1b1a24] to-[#0d0c12] p-6 flex flex-col justify-between text-left text-white">
              <span className="text-xs font-mono text-zinc-400">{project?.category}</span>
              <div>
                <h4 className="text-xl font-bold text-white mb-2 font-display">{project?.title}</h4>
                <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                  {project?.subtitle}
                </p>
              </div>
              <div className="flex gap-1.5 flex-wrap">
                {project?.tech?.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono bg-white/10 px-2.5 py-0.5 rounded-full text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ),
    },
    {
      id: 'role',
      title: 'Role & Key Contributions',
      badge: `${project?.roleTitle || 'Contributor'} — ${project?.period || '2025'}`,
      body: (
        <ul className="space-y-4">
          {project?.contributions?.map((item, idx) => {
            const isObject = typeof item === 'object' && item !== null;
            const itemText = isObject ? item.text : item;

            return (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm md:text-base text-zinc-300 font-sans leading-relaxed group"
              >
                <span className="w-2 h-2 rounded-full bg-white mt-2.5 flex-shrink-0 group-hover:scale-125 transition-all"></span>
                <span className="font-medium text-zinc-200">{itemText}</span>
              </li>
            );
          })}
        </ul>
      ),
      visual: (
        <div className="w-full h-full bg-gradient-to-br from-[#191822] via-[#121117] to-[#0b0a0f] p-6 flex flex-col justify-between text-left text-white">
          <div>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              Role &amp; Responsibilities
            </span>
            <h4 className="text-2xl font-bold text-white mt-2 mb-3 font-display">
              {project?.roleTitle}
            </h4>
            <p className="text-xs text-zinc-200 font-mono bg-white/10 px-3 py-1.5 rounded-lg border border-white/15 inline-block">
              {project?.period}
            </p>
          </div>
          <div>
            <span className="text-[11px] font-mono text-zinc-400 block mb-2">
              Technologies Used
            </span>
            <div className="flex flex-wrap gap-2">
              {project?.tech?.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono bg-white/10 border border-white/10 px-3 py-1 rounded-full text-white font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'challenges',
      title: 'Challenges and Solution',
      badge: 'Technical Problem Solving',
      body: (
        <p className="text-base md:text-lg text-zinc-300 font-sans leading-relaxed">
          {project?.challenges}
        </p>
      ),
      visual: (
        <div className="w-full h-full bg-[#0d0c11] flex flex-col justify-between overflow-hidden relative">
          {project?.secondaryImage ? (
            <img
              src={project.secondaryImage}
              alt="Mobile / secondary preview"
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#1c1b26] to-[#0d0c11] p-6 flex flex-col justify-center items-start text-white">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                Technical Solution
              </span>
              <h4 className="text-xl font-bold text-white mb-2 font-display">
                Architecture &amp; Performance
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Engineered efficient data flow, low latency UI states, and robust modular code
                structures.
              </p>
            </div>
          )}
        </div>
      ),
    },
  ];

  const isProgrammaticScrollRef = useRef(false);

  const scrollToSection = (index) => {
    setActiveSection(index);
    isProgrammaticScrollRef.current = true;

    if (scrollContainerRef.current && sectionRefs.current[index]) {
      const container = scrollContainerRef.current;
      const targetElement = sectionRefs.current[index];
      const targetTop = targetElement.offsetTop - container.offsetTop - 24;

      container.scrollTo({
        top: Math.max(0, targetTop),
        behavior: 'smooth',
      });
    }

    setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 650);
  };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    if (initialSection > 0 && sectionRefs.current[initialSection]) {
      const timer = setTimeout(() => {
        scrollToSection(initialSection);
      }, 150);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [initialSection]);

  const handleScroll = () => {
    if (isProgrammaticScrollRef.current) return;
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const isAtBottom =
      container.scrollTop + container.clientHeight >= container.scrollHeight - 40;
    const isAtTop = container.scrollTop <= 30;

    if (isAtTop) {
      setActiveSection(0);
      return;
    }

    if (isAtBottom) {
      setActiveSection(content.length - 1);
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const focalY = containerRect.top + containerRect.height * 0.4;

    let closestIndex = 0;
    let minDistance = Infinity;

    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - focalY);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      }
    });

    setActiveSection(closestIndex);
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.99 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[100] bg-[#0e0d12] text-white overflow-hidden font-sans flex flex-col justify-between"
      >
        <header className="w-full px-6 sm:px-8 py-4 flex items-center justify-between border-b border-white/10 bg-[#121117]/90 backdrop-blur-xl shrink-0 z-10 gap-4">
          <button
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/8 text-white hover:bg-white hover:text-[#0e0d12] border border-white/12 transition-all duration-200 cursor-pointer shadow-sm hover:scale-105 active:scale-95 shrink-0"
            aria-label="Back to Portfolio"
            title="Back to Portfolio (Esc)"
          >
            <ArrowLeft size={20} weight="bold" />
          </button>

          <div className="flex items-center gap-1 sm:gap-2 bg-[#09080c] p-1 rounded-full border border-white/10 overflow-x-auto max-w-full">
            {content.map((sec, idx) => {
              const isSelected = activeSection === idx;
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(idx)}
                  className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-display font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-white text-[#0e0d12] shadow-sm font-semibold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {sec.title}
                </button>
              );
            })}
          </div>

          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-zinc-200 hover:text-white transition-colors underline underline-offset-4 font-semibold shrink-0"
            >
              {project.displayLink || project.link.replace(/^https?:\/\//, '')}
              <ArrowUpRight size={14} />
            </a>
          ) : (
            <span className="text-xs font-mono text-zinc-500 shrink-0">
              Internal Enterprise Repository
            </span>
          )}
        </header>

        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto px-6 md:px-12 py-10"
        >
          <div className="max-w-6xl w-full mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold font-display metallic-text text-center mb-12 tracking-tight">
              {project.title}
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-6 flex flex-col gap-12 py-4 pb-48">
                {content.map((item, index) => {
                  const isActive = activeSection === index;
                  return (
                    <motion.div
                      key={item.id}
                      ref={(el) => (sectionRefs.current[index] = el)}
                      onClick={() => scrollToSection(index)}
                      initial={{ opacity: 0.3 }}
                      animate={{ opacity: isActive ? 1 : 0.45 }}
                      transition={{ duration: 0.3 }}
                      className={`flex flex-col items-start text-left min-h-[260px] justify-center border-l-2 pl-6 pr-5 py-6 rounded-r-2xl cursor-pointer transition-all duration-300 ${
                        isActive
                          ? 'border-white bg-white/[0.04] shadow-lg'
                          : 'border-white/10 hover:border-white/30 hover:bg-white/[0.02]'
                      }`}
                      title="Click to scroll to and focus this section"
                    >
                      <span className="text-xs font-mono font-semibold text-zinc-200 bg-white/8 px-3.5 py-1 rounded-full border border-white/12 mb-4 pointer-events-none">
                        {item.badge}
                      </span>
                      <h2 className="text-3xl font-bold text-white mb-4 font-display pointer-events-none">
                        {item.title}
                      </h2>
                      <div className="w-full">{item.body}</div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="lg:col-span-6 sticky top-8 flex flex-col items-center">
                <div className="relative w-full max-w-lg mx-auto aspect-[16/10] bg-[#14131a] rounded-t-xl border-4 border-zinc-800 shadow-[0_25px_60px_rgba(0,0,0,0.8)] p-2 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full rounded bg-zinc-950 overflow-hidden relative">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.04 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-full"
                      >
                        {content[activeSection].visual}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                <div className="w-[112%] max-w-xl h-3.5 bg-gradient-to-r from-zinc-700 via-zinc-500 to-zinc-700 rounded-b-xl shadow-md relative -mt-1 border-t border-zinc-600">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-zinc-800 rounded-b"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="w-full py-4 text-center text-xs font-mono text-zinc-400 border-t border-white/10 bg-[#121117] shrink-0">
          Press{' '}
          <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white font-bold border border-white/15">
            Esc
          </kbd>{' '}
          or click top-left arrow to return
        </footer>
      </motion.div>
    </AnimatePresence>
  );
}
