import React from 'react';
import { motion } from 'framer-motion';

export default function TechStackSection({ techItems = [], isDark = true }) {
  const loopedTechItems = [...techItems, ...techItems];

  return (
    <section id="tech-stack" className="py-16 md:py-24 bg-transparent my-6 md:my-12 relative z-10">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        className="max-w-6xl mx-auto px-3 sm:px-6 md:px-8"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
          }}
          className="flex flex-col items-start mb-8 md:mb-12"
        >
          <span
            className={`uppercase tracking-wider text-xs font-bold font-mono mb-2 ${
              isDark ? 'text-zinc-400' : 'text-[#556b4f]'
            }`}
          >
            03 — Expertise
          </span>
          <h2
            className={`heading-vibe text-3xl sm:text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-[#1a1515]'}`}
          >
            My{' '}
            <span className={isDark ? 'metallic-text' : 'text-[#3d5945]'}>
              stack
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
          }}
          className="tech-slider"
          aria-label="Sliding tech stack"
        >
          <div className="tech-slider-track">
            {loopedTechItems.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="tech-card"
                title={tech.name}
              >
                <img src={tech.icon} alt={tech.name} />
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
