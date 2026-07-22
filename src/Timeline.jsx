import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Briefcase, Building, Calendar, CheckCircle } from "@phosphor-icons/react";

export default function Timeline({ data }) {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section id="experience" className="w-full font-sans py-20 bg-gradient-to-b from-white via-[#fafcf9] to-white relative z-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8" ref={containerRef}>
        {/* Section Title Header */}
        <div className="flex flex-col items-start mb-16 border-b border-gray-200/80 pb-6">
          <span className="text-[#556b4f] uppercase tracking-wider text-xs font-bold font-mono mb-2">
            02 — Experience
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1a1515] font-sans"
            style={{ fontFamily: "Century Gothic, sans-serif" }}
          >
            Work Experience
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mt-3 font-sans">
            My professional software engineering milestones, internships, and industry experience.
          </p>
        </div>

        {/* Timeline Items Track */}
        <div ref={ref} className="relative max-w-5xl mx-auto pb-12">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-start pt-6 md:pt-16 gap-6 md:gap-12"
            >
              {/* Sticky Timeline Left Date / Badge Column */}
              <div className="sticky flex flex-col md:flex-row z-40 items-start md:items-center top-36 self-start md:w-72 shrink-0">
                {/* Node Circle */}
                <div className="h-10 absolute -left-5 md:-left-5 w-10 rounded-full bg-white flex items-center justify-center border-2 border-[#3d5945] shadow-md z-10">
                  <div className="h-4 w-4 rounded-full bg-[#3d5945]" />
                </div>
                {/* Title / Date Badge */}
                <div className="pl-8 md:pl-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eef3ee] text-[#3d5945] text-xs font-mono font-bold border border-[#d3ddd3]">
                    <Calendar size={14} weight="bold" /> {item.date}
                  </span>
                  <h3
                    className="text-xl md:text-2xl font-bold text-[#1a1515] mt-2 font-sans"
                    style={{ fontFamily: "Century Gothic, sans-serif" }}
                  >
                    {item.role}
                  </h3>
                </div>
              </div>

              {/* Timeline Content Right Card Column */}
              <div className="relative pl-8 md:pl-0 pr-2 w-full">
                <div className="p-6 md:p-8 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 border-b border-gray-100 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-[#eef3ee] rounded-lg text-[#3d5945]">
                        <Building size={20} weight="bold" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#3d5945] font-sans" style={{ fontFamily: "Century Gothic, sans-serif" }}>
                          {item.company}
                        </h4>
                        <span className="text-xs text-gray-500 font-mono">{item.location || "Software Engineering"}</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono bg-[#3d5945] text-white px-3 py-1 rounded-full font-semibold">
                      {item.type || "Internship"}
                    </span>
                  </div>

                  <div className="text-sm md:text-base text-gray-700 font-sans leading-relaxed">
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Animated Scroll Bar */}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute left-0 md:left-0 top-0 overflow-hidden w-[3px] bg-gradient-to-b from-transparent via-[#d3ddd3] to-transparent"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-b from-[#3d5945] via-[#556b4f] to-[#9BB193] rounded-full shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
