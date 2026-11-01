import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from '@phosphor-icons/react';

export default function ProjectDetailModal({
  project,
  initialSection = 0,
  onClose,
  isDark = true,
}) {
  const [activeSection, setActiveSection] = useState(initialSection);
  const [selectedPreview, setSelectedPreview] = useState(null);
  const scrollContainerRef = useRef(null);
  const sectionRefs = useRef([]);

  const content = [
    {
      id: 'description',
      title: 'Description',
      badge: 'Project Overview',
      body: (
        <p
          className={`text-base md:text-lg font-sans leading-relaxed ${
            isDark ? 'text-zinc-300' : 'text-gray-700'
          }`}
        >
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
                <h4
                  className="text-xl font-bold text-white mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {project?.title}
                </h4>
                <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                  {project?.subtitle}
                </p>
              </div>
              <div className="flex gap-1.5 flex-wrap">
                {project?.tech?.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-zinc-200"
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
                className={`flex items-start gap-3 text-sm md:text-base font-sans leading-relaxed group ${
                  isDark ? 'text-zinc-300' : 'text-gray-700'
                }`}
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-all ${
                    isDark ? 'bg-white' : 'bg-[#3d5945]'
                  }`}
                ></span>
                <span className={`font-medium ${isDark ? 'text-zinc-200' : 'text-gray-800'}`}>
                  {itemText}
                </span>
              </li>
            );
          })}
        </ul>
      ),
      visual: project?.roleImage ? (
        <div className="w-full h-full bg-[#121117] flex items-center justify-center overflow-hidden relative group">
          <img
            src={project.roleImage}
            alt={`${project.title} — ${project.roleTitle}`}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 text-left">
            <span className="text-[10px] font-mono text-zinc-300 uppercase tracking-wider">
              Role &amp; Responsibilities
            </span>
            <h4
              className="text-base font-bold text-white"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {project?.roleTitle} ({project?.period})
            </h4>
          </div>
        </div>
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[#191822] via-[#121117] to-[#0b0a0f] p-6 flex flex-col justify-between text-left text-white">
          <div>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              Role &amp; Responsibilities
            </span>
            <h4
              className="text-2xl font-bold text-white mt-2 mb-3"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {project?.roleTitle}
            </h4>
            <p className="text-xs text-zinc-200 font-mono bg-white/10 p-3 rounded-lg border border-white/15 inline-block">
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
                  className="text-xs font-mono bg-white/15 px-3 py-1 rounded-full text-white font-semibold"
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
        <p
          className={`text-base md:text-lg font-sans leading-relaxed ${
            isDark ? 'text-zinc-300' : 'text-gray-700'
          }`}
        >
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
              <h4
                className="text-xl font-bold text-white mb-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
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
    setSelectedPreview(null);
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
      setActiveSection((prev) => {
        if (prev !== 0) setSelectedPreview(null);
        return 0;
      });
      return;
    }

    if (isAtBottom) {
      const lastIdx = content.length - 1;
      setActiveSection((prev) => {
        if (prev !== lastIdx) setSelectedPreview(null);
        return lastIdx;
      });
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

    setActiveSection((prev) => {
      if (prev !== closestIndex) setSelectedPreview(null);
      return closestIndex;
    });
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.99 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-0 z-[100] overflow-hidden font-sans flex flex-col justify-between ${
          isDark ? 'bg-[#0e0d12] text-white' : 'bg-white text-[#1a1515]'
        }`}
      >
        <header
          className={`w-full px-8 py-4 flex items-center justify-between border-b backdrop-blur-md shrink-0 z-10 gap-4 ${
            isDark
              ? 'border-white/10 bg-[#121117]/90'
              : 'border-gray-200/80 bg-white/90'
          }`}
        >
          <button
            onClick={onClose}
            className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 cursor-pointer shadow-sm hover:scale-105 active:scale-95 shrink-0 ${
              isDark
                ? 'bg-white/10 text-white hover:bg-white hover:text-[#0e0d12]'
                : 'bg-[#eef3ee] text-[#3d5945] hover:bg-[#3d5945] hover:text-white'
            }`}
            aria-label="Back to Portfolio"
            title="Back to Portfolio (Esc)"
          >
            <ArrowLeft size={20} weight="bold" />
          </button>

          <div
            className={`flex items-center gap-1 sm:gap-2 p-1 rounded-full border overflow-x-auto max-w-full ${
              isDark
                ? 'bg-[#09080c] border-white/10'
                : 'bg-[#f4f7f4] border-gray-200/60'
            }`}
          >
            {content.map((sec, idx) => {
              const isSelected = activeSection === idx;
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(idx)}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? isDark
                        ? 'bg-white text-[#0e0d12] shadow-sm font-semibold scale-105'
                        : 'bg-[#3d5945] text-white shadow-sm font-semibold scale-105'
                      : isDark
                        ? 'text-zinc-400 hover:text-white hover:bg-white/10'
                        : 'text-gray-600 hover:text-[#3d5945] hover:bg-white/70'
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
              className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono transition-colors underline underline-offset-4 font-semibold shrink-0 ${
                isDark
                  ? 'text-zinc-200 hover:text-white'
                  : 'text-[#3d5945] hover:text-[#27392c]'
              }`}
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
          className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 px-6 md:px-12 py-10"
        >
          <div className="max-w-6xl w-full mx-auto">
            <h1
              className={`text-4xl md:text-6xl font-extrabold text-center mb-12 tracking-tight ${
                isDark ? 'metallic-text' : 'text-[#1a1515]'
              }`}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
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
                      className={`flex flex-col items-start text-left min-h-[260px] justify-center border-l-4 pl-6 pr-4 py-6 rounded-r-2xl cursor-pointer transition-all duration-300 ${
                        isActive
                          ? isDark
                            ? 'border-white bg-white/5 shadow-sm'
                            : 'border-[#3d5945] bg-[#3d5945]/5 shadow-sm'
                          : isDark
                            ? 'border-transparent hover:border-white/25 hover:bg-white/[0.02]'
                            : 'border-transparent hover:border-gray-300 hover:bg-gray-50/70'
                      }`}
                      title="Click to scroll to and focus this section"
                    >
                      <span
                        className={`text-xs font-mono font-bold px-3.5 py-1 rounded-full border mb-4 pointer-events-none ${
                          isDark
                            ? 'text-zinc-200 bg-white/10 border-white/15'
                            : 'text-[#3d5945] bg-[#eef3ee] border-[#d3ddd3]'
                        }`}
                      >
                        {item.badge}
                      </span>
                      <h2
                        className={`text-3xl font-bold mb-4 pointer-events-none ${
                          isDark ? 'text-white' : 'text-[#3d5945]'
                        }`}
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        {item.title}
                      </h2>
                      <div className="w-full">{item.body}</div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="lg:col-span-6 sticky top-8 flex flex-col items-center">
                <div className="relative w-full max-w-lg mx-auto aspect-[16/10] bg-[#18181b] rounded-t-xl border-4 border-zinc-800 shadow-2xl p-2 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full rounded bg-zinc-900 overflow-hidden relative">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedPreview ? selectedPreview.label : activeSection}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.04 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-full"
                      >
                        {selectedPreview ? (
                          <div className="w-full h-full bg-[#121117] flex items-center justify-center overflow-hidden relative group">
                            <img
                              src={selectedPreview.src}
                              alt={selectedPreview.label}
                              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute bottom-2 right-2 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono text-white border border-white/15">
                              {selectedPreview.label}
                            </div>
                          </div>
                        ) : (
                          content[activeSection].visual
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                <div className="w-[112%] max-w-xl h-3.5 bg-gradient-to-r from-zinc-700 via-zinc-500 to-zinc-700 rounded-b-xl shadow-md relative -mt-1 border-t border-zinc-600">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-zinc-800 rounded-b"></div>
                </div>

                {project?.images?.length > 0 && (
                  <div className="w-full max-w-lg mt-5">
                    <span
                      className={`block text-[11px] font-mono uppercase tracking-wider mb-2 text-center ${
                        isDark ? 'text-zinc-400' : 'text-gray-500'
                      }`}
                    >
                      Project Screens ({project.images.length}) — Click to Preview
                    </span>
                    <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                      {project.images.map((imgItem, idx) => {
                        const isCurrent = selectedPreview?.src === imgItem.src;
                        return (
                          <button
                            key={imgItem.label || idx}
                            type="button"
                            onClick={() => setSelectedPreview(imgItem)}
                            className={`group relative aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                              isCurrent
                                ? isDark
                                  ? 'border-white scale-105 shadow-md'
                                  : 'border-[#3d5945] scale-105 shadow-md'
                                : isDark
                                  ? 'border-white/15 opacity-70 hover:opacity-100 hover:border-white/50'
                                  : 'border-gray-300 opacity-75 hover:opacity-100 hover:border-[#3d5945]'
                            }`}
                            title={imgItem.label}
                          >
                            <img
                              src={imgItem.src}
                              alt={imgItem.label}
                              className="w-full h-full object-cover object-top"
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <footer
          className={`w-full py-4 text-center text-xs font-mono border-t shrink-0 ${
            isDark
              ? 'text-zinc-400 border-white/10 bg-[#121117]'
              : 'text-gray-500 border-gray-200 bg-[#f8faf8]'
          }`}
        >
          Press{' '}
          <kbd
            className={`px-1.5 py-0.5 rounded font-bold border ${
              isDark
                ? 'bg-white/10 text-white border-white/20'
                : 'bg-gray-200 text-gray-800 border-gray-300'
            }`}
          >
            Esc
          </kbd>{' '}
          or click top-left arrow to return
        </footer>
      </motion.div>
    </AnimatePresence>
  );
}
