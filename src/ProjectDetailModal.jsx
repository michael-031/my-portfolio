import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Sun, Code, CheckCircle, GithubLogo } from '@phosphor-icons/react';

export default function ProjectDetailModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.99 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[100] bg-white text-[#1a1515] overflow-y-auto font-sans flex flex-col justify-between"
      >
        {/* Top Bar */}
        <header className="w-full px-8 py-5 flex items-center justify-between border-b border-gray-200/80 bg-white/90 backdrop-blur-md sticky top-0 z-10">
          <button
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#eef3ee] text-[#3d5945] hover:bg-[#3d5945] hover:text-white transition-all duration-200 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
            aria-label="Back to Portfolio"
            title="Back to Portfolio (Esc)"
          >
            <ArrowLeft size={20} weight="bold" />
          </button>
        </header>

        {/* Main Content Stage */}
        <main className="max-w-6xl w-full mx-auto px-6 md:px-12 py-12 flex-1 flex flex-col justify-center">
          {/* Main Title */}
          <h1
            className="text-4xl md:text-6xl font-extrabold text-[#1a1515] text-center mb-12 tracking-tight"
            style={{ fontFamily: "Century Gothic, sans-serif" }}
          >
            {project.title}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Device Mockup & Project Link */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              {/* Laptop Screen Mockup */}
              <div className="relative w-full max-w-md mx-auto aspect-[16/10] bg-[#18181b] rounded-t-xl border-4 border-gray-800 shadow-2xl p-2 flex items-center justify-center overflow-hidden group">
                <div className="w-full h-full rounded bg-gray-900 overflow-hidden relative">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-900 to-zinc-900 p-6 flex flex-col justify-between text-left text-white">
                      <span className="text-xs font-mono text-[#9BB193]">{project.category}</span>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "Century Gothic, sans-serif" }}>
                          {project.title}
                        </h4>
                        <p className="text-xs text-gray-300 font-sans leading-relaxed">{project.subtitle}</p>
                      </div>
                      <div className="flex gap-1.5 flex-wrap">
                        {project.tech?.map((t) => (
                          <span key={t} className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-gray-200">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* Laptop Base Stand */}
              <div className="w-[115%] max-w-lg h-3.5 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 rounded-b-xl shadow-md mb-8 relative -mt-1 border-t border-gray-400">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-b"></div>
              </div>

              {/* Project Link Section */}
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-xl font-bold text-[#3d5945]" style={{ fontFamily: "Century Gothic, sans-serif" }}>
                  Project Link
                </h3>
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
                  <span className="text-sm font-mono text-gray-500">Internal Enterprise Repository</span>
                )}
              </div>
            </div>

            {/* Right Column: Description, Role & Contributions, Challenges & Solution */}
            <div className="lg:col-span-7 flex flex-col gap-8 text-left">
              {/* Description Section */}
              <div>
                <h2 className="text-2xl font-bold text-[#3d5945] mb-3" style={{ fontFamily: "Century Gothic, sans-serif" }}>
                  Description
                </h2>
                <p className="text-base text-gray-700 font-sans leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Role & Key Contributions Section */}
              <div>
                <h2 className="text-2xl font-bold text-[#3d5945] mb-3 flex flex-wrap items-center justify-between gap-2" style={{ fontFamily: "Century Gothic, sans-serif" }}>
                  <span>Role</span>
                  <span className="text-xs font-mono font-bold text-[#3d5945] bg-[#eef3ee] px-3.5 py-1 rounded-full border border-[#d3ddd3]">
                    {project.roleTitle} — {project.period}
                  </span>
                </h2>
                <ul className="space-y-3">
                  {project.contributions?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 font-sans leading-relaxed">
                      <span className="w-2 h-2 rounded-full bg-[#3d5945] mt-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges and Solution Section */}
              <div>
                <h2 className="text-2xl font-bold text-[#3d5945] mb-3" style={{ fontFamily: "Century Gothic, sans-serif" }}>
                  Challenges and Solution
                </h2>
                <p className="text-base text-gray-700 font-sans leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full py-6 text-center text-xs font-mono text-gray-500 border-t border-gray-200 bg-[#f8faf8]">
          Press <kbd className="px-1.5 py-0.5 bg-gray-200 rounded text-gray-800 font-bold border border-gray-300">Esc</kbd> or click the top-left arrow to return to portfolio
        </footer>
      </motion.div>
    </AnimatePresence>
  );
}
