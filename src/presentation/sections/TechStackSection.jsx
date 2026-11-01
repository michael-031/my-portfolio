import React from 'react';
import { motion } from 'framer-motion';

export default function TechStackSection({ techStack }) {
  const coreItems = techStack?.core || [];
  const additionalItems = techStack?.additional || [];

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
          className="flex flex-col items-start mb-10 md:mb-14 border-b border-white/10 pb-6"
        >
          <span className="text-zinc-400 uppercase tracking-widest text-xs font-semibold font-mono mb-2">
            03 — Technical Arsenal
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-display">
            Tech Stack
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mt-2.5 font-sans">
            Technologies, frameworks, and automation tools I use to build scalable full-stack
            products.
          </p>
        </motion.div>

        <div className="space-y-10">
          {/* Category 1: Frontend, Full-Stack & Automation */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">
              Frontend, Web &amp; Automation
            </h3>
            <motion.div
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.04,
                    delayChildren: 0.05,
                  },
                },
              }}
              className="tech-grid"
            >
              {coreItems.map((tech) => (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 18, scale: 0.96 },
                    show: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: { duration: 0.4, ease: 'easeOut' },
                    },
                  }}
                  key={tech.name}
                  className="tech-card"
                  title={tech.name}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img src={tech.icon} alt={tech.name} />
                  <span className="tech-name">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Category 2: Languages, Systems & Styling */}
          {additionalItems.length > 0 && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">
                Systems, Languages &amp; Styling
              </h3>
              <motion.div
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.04,
                      delayChildren: 0.1,
                    },
                  },
                }}
                className="tech-grid"
              >
                {additionalItems.map((tech) => (
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 18, scale: 0.96 },
                      show: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { duration: 0.4, ease: 'easeOut' },
                      },
                    }}
                    key={tech.name}
                    className="tech-card"
                    title={tech.name}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <img src={tech.icon} alt={tech.name} />
                    <span className="tech-name">{tech.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
