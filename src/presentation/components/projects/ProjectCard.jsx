import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from '@phosphor-icons/react';

export function ProjectCard({
  project,
  index,
  total,
  onSelectProject,
  isDark = true,
}) {
  const handleClick = () => {
    if (onSelectProject) {
      onSelectProject(project, 0);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      onClick={handleClick}
      className={`group relative flex-shrink-0 w-[88vw] sm:w-[74vw] md:w-[66vw] lg:w-[760px] xl:w-[860px] h-[64dvh] sm:h-[68dvh] lg:h-[82dvh] min-h-[460px] max-h-[760px] rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between cursor-pointer select-none ${
        isDark
          ? 'bg-[#121117] border-white/10 hover:border-white/30 shadow-2xl hover:shadow-[0_0_35px_rgba(255,255,255,0.06)]'
          : 'bg-white border-gray-200/90 hover:border-[#3d5945]/50 shadow-xl hover:shadow-2xl'
      }`}
    >
      {/* Top Visual Area */}
      <div className="relative w-full h-[55%] overflow-hidden bg-zinc-950 shrink-0">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-[#0d0c12] p-4 sm:p-5 font-mono text-[11px] flex flex-col justify-between text-left select-none">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                <span className="ml-2 text-zinc-400 text-[11px]">onFormSubmit.gs</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold border border-emerald-500/30">
                Apps Script + Supabase
              </span>
            </div>
            <pre className="text-zinc-300 text-[10.5px] leading-relaxed overflow-hidden my-auto">
              <code>
                {project.codeSnippet ||
                  `// Google Apps Script Trigger & Supabase Webhook
function onFormSubmit(e) {
  const responses = e.namedValues;
  const payload = normalizePermitPayload(responses);
  
  UrlFetchApp.fetch(SUPABASE_REST_URL + '/permits', {
    method: 'POST',
    headers: { 'apikey': SUPABASE_ANON_KEY },
    contentType: 'application/json',
    payload: JSON.stringify(payload)
  });
}`}
              </code>
            </pre>
            <div className="flex items-center justify-between text-[10px] text-zinc-500 border-t border-white/10 pt-2">
              <span>{project.category}</span>
              <span className="text-zinc-300 font-semibold">Automation Pipeline</span>
            </div>
          </div>
        )}

        {/* Gradient overlay on image */}
        {project.image && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />
        )}

        {/* Top Badges */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10 pointer-events-none">
          <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-semibold bg-black/70 backdrop-blur-md text-white border border-white/15">
            {project.category}
          </span>
          <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono text-zinc-300 bg-black/70 backdrop-blur-md border border-white/15">
            0{index + 1} // 0{total}
          </span>
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="p-4 sm:p-5 md:p-6 flex flex-col justify-between flex-1 text-left">
        <div>
          <div className="flex items-start justify-between gap-3 mb-1.5">
            <h3
              className={`heading-vibe text-xl sm:text-2xl md:text-3xl font-bold transition-colors ${
                isDark
                  ? 'text-white group-hover:text-emerald-300'
                  : 'text-[#1a1515] group-hover:text-[#3d5945]'
              }`}
            >
              {project.title}
            </h3>
            <span
              className={`text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md shrink-0 border ${
                isDark
                  ? 'bg-white/10 text-emerald-300 border-emerald-400/20'
                  : 'bg-[#eef3ee] text-[#3d5945] border-[#d3ddd3]'
              }`}
            >
              {project.roleTitle}
            </span>
          </div>

          <p
            className={`text-sm sm:text-base line-clamp-2 mb-3 leading-relaxed ${
              isDark ? 'text-zinc-400' : 'text-gray-600'
            }`}
          >
            {project.subtitle || project.description}
          </p>
        </div>

        <div>
          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-1.5 mb-3.5">
            {project.tech?.slice(0, 4).map((t) => (
              <span
                key={t}
                className={`text-[11px] font-mono px-2.5 py-1 rounded border ${
                  isDark
                    ? 'bg-white/5 border-white/10 text-zinc-300'
                    : 'bg-gray-100 border-gray-200 text-gray-700'
                }`}
              >
                {t}
              </span>
            ))}
            {project.tech?.length > 4 && (
              <span
                className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                  isDark ? 'text-zinc-400 bg-white/5' : 'text-gray-500 bg-gray-100'
                }`}
              >
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          {/* Action Row */}
          <div
            className={`flex items-center justify-between pt-3 border-t text-xs font-mono ${
              isDark ? 'border-white/10' : 'border-gray-200'
            }`}
          >
            <span
              className={`inline-flex items-center gap-1.5 font-semibold transition-colors ${
                isDark
                  ? 'text-zinc-200 group-hover:text-emerald-300'
                  : 'text-gray-800 group-hover:text-[#3d5945]'
              }`}
            >
              Explore Project{' '}
              <ArrowRight
                size={13}
                className="transition-transform group-hover:translate-x-1"
              />
            </span>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`inline-flex items-center gap-1 transition-colors hover:underline ${
                  isDark
                    ? 'text-zinc-400 hover:text-white'
                    : 'text-[#3d5945] hover:text-[#27392c]'
                }`}
              >
                <span>{project.displayLink || 'Live Demo'}</span>
                <ArrowUpRight size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
