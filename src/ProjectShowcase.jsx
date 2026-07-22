import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Atom, ArrowRight, Code, Lightning, TerminalWindow, Sparkle, Star, CheckCircle, Copy, ArrowUpRight, GithubLogo } from "@phosphor-icons/react";
import lemivon from './assets/projects/Lemivon.png';
import lemivon_mobile from './assets/projects/lemivon_mobile.png';

const initialProjects = [
  {
    id: 1,
    title: 'Lemivon UI Showcase',
    tagline: 'A modern UI showcase with responsive web and mobile layouts.',
    description: 'A comprehensive UI showcase for Lemivon featuring responsive web and handheld viewports, custom glass design system, and sleek user experience.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    category: 'Full-Stack Web',
    type: 'web',
    webImage: lemivon,
    mobileImage: lemivon_mobile,
    tags: ['#1 UI SHOWCASE', 'FULL-STACK', 'RESPONSIVE'],
    demoUrl: 'https://github.com/michael-031',
    repoUrl: 'https://github.com/michael-031/my-portfolio.git',
    upvotes: 42,
    starred: true,
  },
  {
    id: 2,
    title: 'Apps Script Automation Template',
    tagline: 'Automated Google Sheets, Drive, & Email Workflow System.',
    description: 'A reusable Google Apps Script template designed to automate data ingestion, calculations, report generation, and instant notifications.',
    tech: ['Google Apps Script', 'JavaScript', 'Google Sheets API', 'Gmail API'],
    category: 'Automation',
    type: 'code',
    filename: 'automation.gs',
    codeSnippet: `// Google Apps Script Workflow Automation
function processDailyIngest() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('DataIngest');
  const rows = sheet.getDataRange().getValues();
  
  rows.forEach((row, idx) => {
    if (idx === 0) return; // Skip headers
    const [id, email, status, amount] = row;
    
    if (status === 'PENDING') {
      sendAutomatedReport(email, id, amount);
      sheet.getRange(idx + 1, 3).setValue('COMPLETED');
    }
  });
}`,
    tags: ['AUTOMATION', 'APPS SCRIPT', 'WORKFLOW TEMPLATE'],
    demoUrl: 'https://github.com/michael-031',
    repoUrl: 'https://github.com/michael-031',
    upvotes: 29,
    starred: false,
  },
  {
    id: 3,
    title: 'Full-Stack Web App Template',
    tagline: 'Production-ready React + TypeScript + Node.js Starter Kit.',
    description: 'A high-performance web app template featuring theme toggle systems, RESTful API integrations, responsive layouts, and clean code architecture.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js'],
    category: 'Web Template',
    type: 'code',
    filename: 'AppStarter.tsx',
    codeSnippet: `// Production React + TypeScript Starter Template
import React, { useState } from 'react';
import { UseTheme } from '@/hooks/use-theme';

export default function AppStarter() {
  const { theme, toggleTheme } = UseTheme();
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <main className={\`app-shell \${theme}\`}>
      <Header onToggle={toggleTheme} />
      <HeroSection title="Full-Stack Starter" />
      <FeatureGrid items={templates} />
    </main>
  );
}`,
    tags: ['STARTER KIT', 'TYPESCRIPT', 'REACT TEMPLATE'],
    demoUrl: 'https://github.com/michael-031',
    repoUrl: 'https://github.com/michael-031',
    upvotes: 35,
    starred: false,
  }
];

export default function ProjectShowcase() {
  const [projects, setProjects] = useState(initialProjects);
  const [upvotedState, setUpvotedState] = useState({});
  const [activeFilter, setActiveFilter] = useState('All');
  const [copiedId, setCopiedId] = useState(null);
  const [activeCardId, setActiveCardId] = useState(1);

  const categories = ['All', 'Full-Stack Web', 'Automation', 'Web Template'];

  const handleUpvote = (id) => {
    setUpvotedState(prev => {
      const isUpvoted = !prev[id];
      setProjects(curr => curr.map(p => {
        if (p.id === id) {
          return { ...p, upvotes: isUpvoted ? p.upvotes + 1 : p.upvotes - 1 };
        }
        return p;
      }));
      return { ...prev, [id]: isUpvoted };
    });
  };

  const handleCopyCode = (id, code) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white via-[#f8faf8] to-[#eef3ee] px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-gray-200 gap-4">
          <div>
            <span className="text-[#556b4f] uppercase tracking-wider text-xs font-bold font-mono mb-2 block">
              02 — Projects & Showcase
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1515] font-sans" style={{ fontFamily: "Century Gothic, sans-serif" }}>
              Fresh from Michael's Desk
            </h2>
          </div>

          <a 
            href="#contact-me" 
            className="inline-flex items-center gap-2 text-[#3d5945] font-bold text-sm hover:underline transition-all"
          >
            Let's collaborate <ArrowRight size={18} />
          </a>
        </div>

        {/* Floating Filter Pill Header (Inspired by reference UI pill nav) */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-1.5 p-1.5 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full shadow-sm max-w-full overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 whitespace-nowrap ${
                  activeFilter === cat
                    ? 'bg-[#3d5945] text-white shadow-md'
                    : 'text-gray-600 hover:text-[#3d5945] hover:bg-gray-100/70'
                }`}
              >
                {cat}
              </button>
            ))}
            <div className="h-4 w-px bg-gray-200 mx-1 hidden sm:block"></div>
            <div className="hidden sm:inline-flex items-center gap-1 px-3 py-1 bg-[#1a1515] text-white text-xs font-semibold rounded-full">
              <Star size={14} className="text-amber-400 fill-amber-400" />
              <span>42+ Stars</span>
            </div>
          </div>
        </div>

        {/* Floating Stacked Interactive Animation Stage (Main Reference Feature) */}
        <div className="mb-16 relative">
          <div className="text-center mb-6">
            <span className="text-xs font-mono font-semibold text-[#556b4f] uppercase tracking-widest">
              ✨ Interactive Showcase Deck — Click or hover to bring forward
            </span>
          </div>

          {/* Stacked Cards Container with 3D Depth */}
          <div className="relative w-full max-w-4xl mx-auto h-[440px] sm:h-[480px] flex items-center justify-center perspective-[1200px]">
            {projects.map((proj, index) => {
              const isActive = activeCardId === proj.id;
              
              // Parallax stack offsets matching reference overlapping aesthetic
              const offsets = [
                { x: -140, y: -20, rotate: -6, zIndex: 10, scale: 0.92 },
                { x: 0, y: 0, rotate: 0, zIndex: 30, scale: 1 },
                { x: 140, y: 20, rotate: 6, zIndex: 20, scale: 0.92 },
              ];
              const pos = isActive 
                ? { x: 0, y: -10, rotate: 0, zIndex: 40, scale: 1.02 }
                : offsets[index % offsets.length];

              return (
                <motion.div
                  key={proj.id}
                  onClick={() => setActiveCardId(proj.id)}
                  animate={{
                    x: pos.x,
                    y: pos.y,
                    rotate: pos.rotate,
                    scale: pos.scale,
                    zIndex: pos.zIndex,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  whileHover={{ scale: isActive ? 1.04 : 0.96, y: -12 }}
                  className={`absolute top-0 w-full max-w-[340px] sm:max-w-[420px] h-[400px] sm:h-[430px] rounded-3xl bg-white border border-gray-200/80 p-6 shadow-xl cursor-pointer flex flex-col justify-between overflow-hidden transition-shadow duration-300 ${
                    isActive ? 'shadow-2xl border-[#9BB193] ring-2 ring-[#9BB193]/30' : 'hover:shadow-2xl'
                  }`}
                >
                  {/* Top Header inside Stack Card */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 bg-[#eef3ee] text-[#3d5945] text-[10px] font-mono font-bold rounded-full border border-[#d3ddd3]">
                          {proj.category}
                        </span>
                      </div>
                      <div 
                        onClick={(e) => { e.stopPropagation(); handleUpvote(proj.id); }}
                        className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full border transition-all ${
                          upvotedState[proj.id]
                            ? 'bg-[#3d5945] text-white border-[#3d5945]'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        ▲ {proj.upvotes}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 font-sans tracking-tight mb-1">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-gray-500 font-sans line-clamp-2 mb-4">
                      {proj.tagline}
                    </p>
                  </div>

                  {/* Body Preview inside Stack Card (Devices or Code Snippet) */}
                  <div className="flex-1 my-2 overflow-hidden rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center relative">
                    {proj.type === 'web' ? (
                      <div className="w-full h-full p-2 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
                        <img 
                          src={proj.webImage} 
                          alt={proj.title}
                          className="max-h-full w-auto object-contain rounded-lg shadow-md border border-gray-200/60" 
                        />
                      </div>
                    ) : (
                      /* Code Terminal Card matching dark window snippet in reference image */
                      <div className="w-full h-full bg-[#1e1e1e] text-gray-200 p-3 font-mono text-[10.5px] leading-relaxed overflow-hidden flex flex-col">
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-800">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                            <span className="ml-2 text-[10px] text-gray-400">{proj.filename}</span>
                          </div>
                          <button
                            onClick={(e) => { e.stopPropagation(); handleCopyCode(proj.id, proj.codeSnippet); }}
                            className="text-gray-400 hover:text-white transition-colors"
                            title="Copy snippet"
                          >
                            {copiedId === proj.id ? <CheckCircle size={14} className="text-green-400" /> : <Copy size={14} />}
                          </button>
                        </div>
                        <pre className="text-gray-300 overflow-x-auto text-[10px] font-mono leading-normal">
                          <code>{proj.codeSnippet}</code>
                        </pre>
                      </div>
                    )}
                  </div>

                  {/* Footer inside Stack Card */}
                  <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {proj.tech.slice(0, 3).map(t => (
                        <span key={t} className="text-[10px] font-mono font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#3d5945] flex items-center gap-1">
                      View <ArrowRight size={14} />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
            </div>

      </div>
    </section>
  );
}
