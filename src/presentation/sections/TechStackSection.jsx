import React from 'react';
import { motion } from 'framer-motion';

export default function TechStackSection({ techItems = [] }) {
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
          <span className="text-zinc-400 uppercase tracking-wider text-xs font-bold font-mono mb-2">
            03 — Expertise
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            My stack
          </h2>
        </motion.div>

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
          {techItems.map((tech) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 25, scale: 0.95 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.45, ease: 'easeOut' },
                },
              }}
              key={tech.name}
              className="tech-card"
              title={tech.name}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <img src={tech.icon} alt={tech.name} />
              <span className="tech-name">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
