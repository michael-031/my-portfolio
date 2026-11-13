import React, { useRef, useState, useEffect, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';
import { ProjectCard } from './ProjectCard';
import { portfolioRepository } from '../../../data/repositories/PortfolioRepository';

export default function ProjectsHorizontalScroll({
  projects: providedProjects,
  onSelectProject,
  onNavigate,
  isDark = true,
}) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);

  const projects = useMemo(
    () => providedProjects || portfolioRepository.getProjects(),
    [providedProjects]
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const updateScrollRange = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const viewportWidth = trackRef.current.parentElement?.clientWidth || window.innerWidth;
        const paddingRight = 64;
        const distance = Math.max(0, trackWidth - viewportWidth + paddingRight);
        setScrollRange(distance);
      }
    };

    updateScrollRange();
    window.addEventListener('resize', updateScrollRange);

    let ro;
    if (typeof ResizeObserver !== 'undefined' && trackRef.current) {
      ro = new ResizeObserver(updateScrollRange);
      ro.observe(trackRef.current);
    }

    return () => {
      window.removeEventListener('resize', updateScrollRange);
      if (ro) ro.disconnect();
    };
  }, [projects]);

  const x = useTransform(scrollYProgress, [0, 0.85], [0, -scrollRange]);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative h-[320vh] w-full"
    >
      <div
        className={`sticky top-[72px] projects-fullscreen-sticky w-full flex flex-col justify-between py-6 sm:py-8 overflow-hidden select-none z-10 ${
          isDark ? 'bg-transparent' : 'bg-transparent'
        }`}
      >
        {/* Header */}
        <div className="w-full px-6 sm:px-10 lg:px-16 flex justify-between items-end border-b pb-4 shrink-0">
          <div>
            <span
              className={`uppercase tracking-wider text-xs font-bold font-mono ${
                isDark ? 'text-zinc-400' : 'text-[#556b4f]'
              }`}
            >
              01 — Projects
            </span>
            <h2
              className={`heading-vibe text-3xl sm:text-4xl md:text-5xl font-bold mt-1 ${
                isDark ? 'text-white' : 'text-[#1a1515]'
              }`}
            >
              Fresh from{' '}
              <span className={isDark ? 'metallic-text' : 'text-[#3d5945]'}>
                Michael&apos;s Desk
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className={`hidden md:inline-flex items-center gap-1.5 text-xs font-mono ${
                isDark ? 'text-zinc-400' : 'text-gray-500'
              }`}
            >
              <span>Scroll down to slide</span>
              <ArrowRight size={13} className="animate-pulse" />
            </span>
            <a
              href="#contact-me"
              onClick={(e) => onNavigate && onNavigate(e, 'contact-me')}
              className={`hover:underline font-bold text-xs sm:text-sm flex items-center gap-1 transition-all duration-300 ${
                isDark ? 'text-zinc-300 hover:text-white' : 'text-[#3d5945]'
              }`}
            >
              Let&apos;s collaborate <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* Center Track: One line sliding horizontally */}
        <div className="w-full flex-1 flex items-center overflow-hidden my-auto py-2">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex flex-row gap-8 sm:gap-10 px-6 sm:px-10 lg:px-16 w-max items-center will-change-transform"
          >
            {projects.map((project, idx) => (
              <ProjectCard
                key={project.id || project.title}
                project={project}
                index={idx}
                total={projects.length}
                onSelectProject={onSelectProject}
                isDark={isDark}
              />
            ))}
          </motion.div>
        </div>

        {/* Footer: Progress Indicator */}
        <div
          className={`w-full px-6 sm:px-10 lg:px-16 flex items-center justify-between shrink-0 pt-3 border-t text-xs font-mono ${
            isDark ? 'border-white/10 text-zinc-400' : 'border-gray-200 text-gray-500'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-wider">Scroll Progress</span>
            <div
              className={`w-32 sm:w-48 h-1.5 rounded-full overflow-hidden ${
                isDark ? 'bg-white/10' : 'bg-gray-200'
              }`}
            >
              <motion.div
                style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
                className={`h-full ${isDark ? 'bg-white' : 'bg-[#3d5945]'}`}
              />
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px]">
            <span className={`font-semibold ${isDark ? 'text-zinc-200' : 'text-gray-800'}`}>
              {projects.length} Projects Featured
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
