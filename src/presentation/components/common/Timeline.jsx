import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { Building, Calendar, FileText, ArrowUpRight } from '@phosphor-icons/react';

export default function Timeline({ data, isDark = true }) {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 20%', 'end 80%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section
      id="experience"
      className="w-full font-sans py-16 md:py-20 bg-transparent relative z-10"
    >
      <div className="w-full max-w-6xl mx-auto px-3 sm:px-6 md:px-8" ref={containerRef}>
        {/* Section Title Header */}
        <div
          className={`flex flex-col items-start mb-10 md:mb-16 border-b pb-6 ${
            isDark ? 'border-white/10' : 'border-gray-200/80'
          }`}
        >
          <span
            className={`uppercase tracking-wider text-xs font-bold font-mono mb-2 ${
              isDark ? 'text-zinc-400' : 'text-[#556b4f]'
            }`}
          >
            02 — Experience
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold ${
              isDark ? 'text-white' : 'text-[#1a1515]'
            }`}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Work Experience
          </h2>
          <p
            className={`text-sm md:text-base max-w-xl mt-3 font-sans ${
              isDark ? 'text-zinc-400' : 'text-gray-600'
            }`}
          >
            My professional software engineering milestones, internships, and industry experience.
          </p>
        </div>

        {/* Timeline Items Track */}
        <div ref={ref} className="relative max-w-5xl mx-auto pb-12">
          {data.map((item, index) => (
            <div
              key={item.id || index}
              className="flex flex-col md:flex-row justify-start pt-6 md:pt-16 gap-6 md:gap-12"
            >
              {/* Sticky Timeline Left Date / Badge Column */}
              <div className="sticky flex flex-col md:flex-row z-40 items-start md:items-center top-36 self-start md:w-72 shrink-0">
                {/* Node Circle */}
                <div
                  className={`h-9 w-9 md:h-10 md:w-10 absolute -left-1.5 md:-left-5 rounded-full flex items-center justify-center border-2 shadow-md z-10 ${
                    isDark ? 'bg-[#121117] border-white/30' : 'bg-white border-[#3d5945]'
                  }`}
                >
                  <div
                    className={`h-3.5 w-3.5 md:h-4 md:w-4 rounded-full ${
                      isDark ? 'bg-white' : 'bg-[#3d5945]'
                    }`}
                  />
                </div>
                {/* Title / Date Badge */}
                <div className="pl-8 md:pl-10">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold border ${
                      isDark
                        ? 'bg-white/8 text-zinc-200 border-white/15'
                        : 'bg-[#eef3ee] text-[#3d5945] border-[#d3ddd3]'
                    }`}
                  >
                    <Calendar size={14} weight="bold" /> {item.date}
                  </span>
                  <h3
                    className={`text-lg sm:text-xl md:text-2xl font-bold mt-2 ${
                      isDark ? 'text-white' : 'text-[#1a1515]'
                    }`}
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {item.role}
                  </h3>
                </div>
              </div>

              {/* Timeline Content Right Card Column */}
              <div className="relative pl-6 md:pl-0 pr-0 md:pr-2 w-full">
                <div
                  className={`p-4 sm:p-6 md:p-8 rounded-2xl border transition-all duration-300 ${
                    isDark
                      ? 'bg-[#121117] border-white/10 shadow-xl hover:border-white/25'
                      : 'bg-white border-gray-200/90 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div
                    className={`flex flex-wrap items-center justify-between gap-3 mb-4 border-b pb-4 ${
                      isDark ? 'border-white/10' : 'border-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`p-2 rounded-lg ${
                          isDark
                            ? 'bg-white/8 border border-white/10 text-white'
                            : 'bg-[#eef3ee] text-[#3d5945]'
                        }`}
                      >
                        <Building size={20} weight="bold" />
                      </div>
                      <div>
                        <h4
                          className={`text-base sm:text-lg font-bold ${
                            isDark ? 'text-white' : 'text-[#3d5945]'
                          }`}
                          style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                          {item.company}
                        </h4>
                        <span
                          className={`text-xs font-mono ${
                            isDark ? 'text-zinc-400' : 'text-gray-500'
                          }`}
                        >
                          {item.location || 'Software Engineering'}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`text-xs font-mono px-3 py-1 rounded-full font-semibold ${
                        isDark ? 'bg-white text-[#0e0d12]' : 'bg-[#3d5945] text-white'
                      }`}
                    >
                      {item.type || 'Internship'}
                    </span>
                  </div>

                  <div
                    className={`text-sm md:text-base font-sans leading-relaxed ${
                      isDark ? 'text-zinc-300' : 'text-gray-700'
                    }`}
                  >
                    {item.content ? (
                      item.content
                    ) : (
                      <div className="space-y-3">
                        {item.summary && (
                          <p
                            className={`font-sans leading-relaxed ${
                              isDark ? 'text-zinc-300' : 'text-gray-700'
                            }`}
                          >
                            {item.summary}
                          </p>
                        )}
                        {item.highlights?.length > 0 && (
                          <ul
                            className={`space-y-2 text-sm font-sans ${
                              isDark ? 'text-zinc-400' : 'text-gray-600'
                            }`}
                          >
                            {item.highlights.map((highlight, hIdx) => (
                              <li key={hIdx} className="flex items-start gap-2">
                                <span
                                  className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                                    isDark ? 'bg-white' : 'bg-[#3d5945]'
                                  }`}
                                ></span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {item.documentLink && (
                          <div className="pt-3">
                            <a
                              href={item.documentLink.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border group shadow-sm ${
                                isDark
                                  ? 'bg-white/8 hover:bg-white text-zinc-200 hover:text-[#0e0d12] border-white/15'
                                  : 'bg-[#eef3ee] hover:bg-[#3d5945] text-[#3d5945] hover:text-white border-[#d3ddd3]/80'
                              }`}
                            >
                              <FileText size={18} weight="duotone" className="shrink-0" />
                              <span>{item.documentLink.label}</span>
                              <ArrowUpRight
                                size={16}
                                weight="bold"
                                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                              />
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Animated Scroll Bar */}
          <div
            style={{
              height: height + 'px',
            }}
            className={`absolute left-3 md:left-0 top-0 overflow-hidden w-[3px] bg-gradient-to-b from-transparent to-transparent ${
              isDark ? 'via-white/15' : 'via-[#d3ddd3]'
            }`}
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className={`absolute inset-x-0 top-0 w-[3px] bg-gradient-to-b rounded-full shadow-sm ${
                isDark
                  ? 'from-white via-zinc-300 to-zinc-600'
                  : 'from-[#3d5945] via-[#556b4f] to-[#9BB193]'
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
