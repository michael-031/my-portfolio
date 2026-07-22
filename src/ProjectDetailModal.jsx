import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Sun, CheckCircle } from '@phosphor-icons/react';

export default function ProjectDetailModal({ project, onClose }) {
  const [activeSection, setActiveSection] = useState(0);
  const scrollContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const content = [
    {
      id: "description",
      title: "Description",
      badge: "Project Overview",
      body: (
        <p className="text-base md:text-lg text-gray-700 font-sans leading-relaxed">
          {project?.description}
        </p>
      ),
      visual: (
        <div className="w-full h-full bg-[#18181b] flex items-center justify-center overflow-hidden relative group">
          {project?.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#1b281e] to-[#0f1711] p-6 flex flex-col justify-between text-left text-white">
              <span className="text-xs font-mono text-[#9BB193]">{project?.category}</span>
              <div>
                <h4 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "Century Gothic, sans-serif" }}>
                  {project?.title}
                </h4>
                <p className="text-xs text-gray-300 font-sans leading-relaxed">{project?.subtitle}</p>
              </div>
              <div className="flex gap-1.5 flex-wrap">
                {project?.tech?.map((t) => (
                  <span key={t} className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-gray-200">
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
      id: "role",
      title: "Role & Key Contributions",
      badge: `${project?.roleTitle || 'Contributor'} — ${project?.period || '2025'}`,
      body: (
        <ul className="space-y-4">
          {project?.contributions?.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-gray-700 font-sans leading-relaxed">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3d5945] mt-2 flex-shrink-0"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ),
      visual: (
        <div className="w-full h-full bg-gradient-to-br from-[#1b2b1f] via-[#121c15] to-[#0d1610] p-6 flex flex-col justify-between text-left text-white">
          <div>
            <span className="text-xs font-mono text-[#9BB193] uppercase tracking-wider">Role & Responsibilities</span>
            <h4 className="text-2xl font-bold text-white mt-2 mb-3" style={{ fontFamily: "Century Gothic, sans-serif" }}>
              {project?.roleTitle}
            </h4>
            <p className="text-xs text-gray-300 font-mono bg-[#3d5945]/40 p-3 rounded-lg border border-[#3d5945]/60 inline-block">
              {project?.period}
            </p>
          </div>
          <div>
            <span className="text-[11px] font-mono text-gray-400 block mb-2">Technologies Used</span>
            <div className="flex flex-wrap gap-2">
              {project?.tech?.map((t) => (
                <span key={t} className="text-xs font-mono bg-white/15 px-3 py-1 rounded-full text-white font-semibold">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "challenges",
      title: "Challenges and Solution",
      badge: "Technical Problem Solving",
      body: (
        <p className="text-base md:text-lg text-gray-700 font-sans leading-relaxed">
          {project?.challenges}
        </p>
      ),
      visual: (
        <div className="w-full h-full bg-[#0c120d] flex flex-col justify-between overflow-hidden relative">
          {project?.secondaryImage ? (
            <img
              src={project.secondaryImage}
              alt="Mobile / secondary preview"
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#27392c] to-[#121a14] p-6 flex flex-col justify-center items-start text-white">
              <span className="text-xs font-mono text-[#9BB193] uppercase tracking-wider mb-2">Technical Solution</span>
              <h4 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "Century Gothic, sans-serif" }}>
                Architecture & Performance
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                Engineered efficient data flow, low latency UI states, and robust modular code structures.
              </p>
            </div>
          )}
        </div>
      ),
    },
  ];

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardLength = content.length;
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestIndex = cardsBreakpoints.reduce((prevIndex, breakpoint, index) => {
      return Math.abs(latest - breakpoint) < Math.abs(latest - cardsBreakpoints[prevIndex])
        ? index
        : prevIndex;
    }, 0);
    setActiveSection(closestIndex);
  });

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.99 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[100] bg-white text-[#1a1515] overflow-hidden font-sans flex flex-col justify-between"
      >
        {/* Top Bar */}
        <header className="w-full px-8 py-5 flex items-center justify-between border-b border-gray-200/80 bg-white/90 backdrop-blur-md shrink-0 z-10">
          <button
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#eef3ee] text-[#3d5945] hover:bg-[#3d5945] hover:text-white transition-all duration-200 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
            aria-label="Back to Portfolio"
            title="Back to Portfolio (Esc)"
          >
            <ArrowLeft size={20} weight="bold" />
          </button>

          {/* Project Link */}
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-mono text-[#3d5945] hover:text-[#27392c] transition-colors underline underline-offset-4 font-semibold"
            >
              {project.displayLink || project.link.replace(/^https?:\/\//, '')}
              <ArrowUpRight size={14} />
            </a>
          ) : (
            <span className="text-xs font-mono text-gray-500">Internal Enterprise Repository</span>
          )}
        </header>

        {/* Scrollable Sticky Container */}
        <div
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 px-6 md:px-12 py-10"
        >
          <div className="max-w-6xl w-full mx-auto">
            {/* Main Title */}
            <h1
              className="text-4xl md:text-6xl font-extrabold text-[#1a1515] text-center mb-12 tracking-tight"
              style={{ fontFamily: "Century Gothic, sans-serif" }}
            >
              {project.title}
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Scrollable Paragraph Sections */}
              <div className="lg:col-span-6 flex flex-col gap-24 py-6">
                {content.map((item, index) => {
                  const isActive = activeSection === index;
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0.3 }}
                      animate={{ opacity: isActive ? 1 : 0.35 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-start text-left min-h-[300px] justify-center border-l-4 border-transparent pl-6"
                      style={{
                        borderColor: isActive ? '#3d5945' : 'transparent',
                      }}
                    >
                      <span className="text-xs font-mono font-bold text-[#3d5945] bg-[#eef3ee] px-3.5 py-1 rounded-full border border-[#d3ddd3] mb-4">
                        {item.badge}
                      </span>
                      <h2
                        className="text-3xl font-bold text-[#3d5945] mb-4"
                        style={{ fontFamily: "Century Gothic, sans-serif" }}
                      >
                        {item.title}
                      </h2>
                      <div className="w-full">
                        {item.body}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Right Column: Sticky Laptop Preview Stage */}
              <div className="lg:col-span-6 sticky top-8 flex flex-col items-center">
                {/* Laptop Display Container */}
                <div className="relative w-full max-w-lg mx-auto aspect-[16/10] bg-[#18181b] rounded-t-xl border-4 border-gray-800 shadow-2xl p-2 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full rounded bg-gray-900 overflow-hidden relative">
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

                {/* Laptop Base Stand */}
                <div className="w-[112%] max-w-xl h-3.5 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 rounded-b-xl shadow-md relative -mt-1 border-t border-gray-400">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-b"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full py-4 text-center text-xs font-mono text-gray-500 border-t border-gray-200 bg-[#f8faf8] shrink-0">
          Press <kbd className="px-1.5 py-0.5 bg-gray-200 rounded text-gray-800 font-bold border border-gray-300">Esc</kbd> or click top-left arrow to return
        </footer>
      </motion.div>
    </AnimatePresence>
  );
}
