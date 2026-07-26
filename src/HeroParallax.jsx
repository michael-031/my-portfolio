import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { ArrowUpRight, CheckCircle, Copy } from "@phosphor-icons/react";

import lemivon from './assets/projects/Lemivon.png';
import lemivon_mobile from './assets/projects/lemivon_mobile.png';

export const tlcEngineProject = {
  id: "tlc-engine",
  title: "TLC Engine",
  monogram: "TLC",
  category: "Multi-Tenant Platform",
  roleTitle: "Frontend & UI/UX Contributor",
  period: "2025 – Present",
  displayLink: "github.com/michael-031/tlc-engine",
  link: "https://github.com/michael-031/tlc-engine",
  subtitle: "Multi-Tenant Platform with Role-Based Access Control (RBAC)",
  description: "TLC Engine is an enterprise multi-tenant management platform built to deliver secure, role-isolated administrative workflows, fine-grained RBAC permission controls, and unified UI/UX design across multiple organization tenants.",
  contributions: [
    "Designed intuitive UI/UX and developed core frontend features of the system.",
    "Evaluated and refined teammates' UI/UX designs to ensure consistency, usability, and quality."
  ],
  challenges: "Designing a scalable multi-tenant RBAC architecture required strict state isolation and dynamic role propagation. I implemented robust frontend permission guards, modular layout shells, and centralized state management to maintain high performance, security, and design consistency across all tenant views.",
  tech: ["TypeScript", "Next.js", "Supabase", "Node.js", "React", "Tailwind CSS"],
};

export const tecnectProject = {
  id: "tecnect",
  title: "TecnecT",
  monogram: "TCT",
  category: "Campus Web Platform",
  roleTitle: "UI/UX & Frontend Developer",
  period: "2025",
  displayLink: "github.com/michael-031/tecnect",
  link: "https://github.com/michael-031",
  subtitle: "Campus Equipment Rentals, Lost & Found, and Real-Time Messaging",
  description: "TecnecT is a comprehensive campus web application empowering students and faculty to seamlessly handle equipment rentals, manage lost-and-found item tracking, and communicate instantly through embedded real-time messaging.",
  contributions: [
    "Designed and developed the user interface for a campus web application supporting rentals, lost-and-found services, and real-time messaging.",
    "Built responsive frontend components and ensured smooth user experience across devices.",
    "Collaborated with backend developers to integrate APIs and application features."
  ],
  challenges: "Integrating real-time messaging alongside campus inventory rentals required synchronized state updates across mobile and desktop viewports. I engineered responsive components and streamlined WebSocket API integration to maintain fast data delivery and fluid user interaction.",
  tech: ["React", "Python", "FastAPI", "WebSockets", "Tailwind CSS"],
};

export const lemivonProject = {
  id: "lemivon",
  title: "Lemivon",
  monogram: "LLF",
  category: "AI Study Platform",
  roleTitle: "Frontend & Backend Contributor",
  period: "2025",
  displayLink: "study-taa.vercel.app",
  link: "https://study-taa.vercel.app",
  image: lemivon,
  subtitle: "AI-Powered Study & Automated Material Organization Platform",
  description: "Lemivon is a modern study platform that uses AI to help users organize study materials and improve learning efficiency. I was responsible for backend development and contributed to parts of the frontend, ensuring a functional and user-friendly experience.",
  contributions: [
    "Contributed to the development of an AI-powered study platform focused on automated material organization and learning efficiency.",
    "Engaged in implementing frontend components and basic backend functionalities.",
    "Worked with the team to improve performance and responsiveness of the application."
  ],
  challenges: "One challenge was maintaining performance while handling many study resources and user interactions. I optimized backend queries and improved data flow between services to keep the experience smooth and scalable.",
  tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
};

export const permitTrackerProject = {
  id: "permit-tracker",
  title: "Permit Tracker & Safety Management System",
  monogram: "PTS",
  category: "Safety & Automation System",
  roleTitle: "Automation & Full-Stack Developer",
  period: "2025",
  displayLink: "github.com/michael-031/permit-tracker",
  link: "https://github.com/michael-031/permit-tracker.git",
  subtitle: "Google Forms/Sheets + Apps Script Webhooks + Supabase + React 19 Dashboard",
  description: "Permit Tracker is an enterprise workplace safety platform capturing safety data via Google Forms, automating ingestion & webhooks using Google Apps Script in Google Sheets, synchronizing records to Supabase PostgreSQL, and rendering real-time dashboards with custom PDF printing.",
  contributions: [
    "Engineered Google Apps Script triggers (onFormSubmit) and Webhooks (UrlFetchApp.fetch()) to normalize and stream Google Forms submissions directly to Supabase REST endpoints.",
    "Built real-time React 19 + TypeScript dashboard for tracking workplace permits, safety observations, JSA forms, and incident reports.",
    "Developed custom client-side PDF export engine (pdf-lib) and print templates for automated safety document generation."
  ],
  challenges: "Synchronizing real-time form submissions across Google Sheets, Apps Script webhooks, and Supabase PostgreSQL while normalizing raw stringified JSON arrays required robust data pipelines. I implemented custom Apps Script triggers, TypeScript field normalizers, and client-side PDF generation engines to ensure reliable, zero-latency safety log reporting.",
  tech: ["Google Apps Script", "React 19", "TypeScript", "Supabase", "Google Sheets", "pdf-lib"],
};

const products = [
  // ROW 1: TLC Engine
  {
    title: "TLC Engine",
    category: "Project Name",
    projectDetails: tlcEngineProject,
    sectionIndex: 0,
    type: "mock",
    subtitle: "Multi-Tenant Platform with Role-Based Access Control (RBAC)",
    bgGradient: "from-[#1e2e24] via-slate-900 to-black",
    tech: ["TLC Engine", "Multi-Tenant", "2025 – Present"],
  },
  {
    title: "Platform Overview",
    category: "Brief Description",
    projectDetails: tlcEngineProject,
    sectionIndex: 0,
    type: "mock",
    subtitle: "Multi-tenant platform built for role-isolated administrative workflows, fine-grained RBAC permission controls, and unified UI/UX design.",
    bgGradient: "from-slate-900 via-[#27392c] to-zinc-950",
    tech: ["RBAC", "Multi-Tenant", "Enterprise"],
  },
  {
    title: "Architecture & Stack",
    category: "Tech Stack Used",
    projectDetails: tlcEngineProject,
    sectionIndex: 2,
    type: "code",
    filename: "RBACGuard.tsx",
    codeSnippet: `export function RBACGuard({ role, required, children }) {
  const { userPermissions } = useAuthContext();
  const hasAccess = checkTenantPermission(userPermissions, required);
  if (!hasAccess) return <AccessDeniedFallback />;
  return <>{children}</>;
}`,
    tech: ["React", "TypeScript", "Node.js", "RBAC"],
  },
  {
    title: "Frontend & UI/UX Contributor",
    category: "My Role",
    projectDetails: tlcEngineProject,
    sectionIndex: 1,
    type: "mock",
    subtitle: "Contributed to development, architected core frontend RBAC features, and evaluated teammate UI/UX designs for consistency & usability.",
    bgGradient: "from-emerald-950 via-slate-900 to-zinc-950",
    tech: ["Contributor", "Frontend", "UI/UX Designer"],
  },
  {
    title: "TLC System Preview",
    category: "Sample Image of the App",
    projectDetails: tlcEngineProject,
    sectionIndex: 0,
    type: "image",
    thumbnail: lemivon,
    secondaryImage: lemivon_mobile,
    tech: ["Multi-Tenant UI", "Dashboard"],
  },

  // ROW 2: TecnecT
  {
    title: "TecnecT",
    category: "Project Name",
    projectDetails: tecnectProject,
    type: "mock",
    subtitle: "Campus Equipment Rentals, Lost & Found, and Real-Time Messaging",
    bgGradient: "from-slate-950 via-[#27392c] to-[#1a1515]",
    tech: ["TecnecT", "Campus Web App", "2025"],
  },
  {
    title: "Campus Web Platform",
    category: "Brief Description",
    projectDetails: tecnectProject,
    type: "mock",
    subtitle: "Comprehensive campus web application supporting student equipment rentals, lost-and-found item tracking, and real-time messaging.",
    bgGradient: "from-zinc-950 via-slate-900 to-[#1e2e24]",
    tech: ["Campus App", "Rentals", "Messaging"],
  },
  {
    title: "Real-Time API & Stack",
    category: "Tech Stack Used",
    projectDetails: tecnectProject,
    type: "code",
    filename: "server.py",
    codeSnippet: `from fastapi import FastAPI, WebSocket

app = FastAPI(title="TecnecT Realtime API")

@app.websocket("/ws/chat/{student_id}")
async def chat_endpoint(websocket: WebSocket, student_id: str):
    await manager.connect(websocket, student_id)
    # Real-time WebSocket messaging`,
    tech: ["React", "Python", "FastAPI", "WebSockets"],
  },
  {
    title: "UI/UX & Frontend Dev",
    category: "My Role",
    projectDetails: tecnectProject,
    type: "mock",
    subtitle: "Designed & developed campus application UI, built responsive frontend components, and integrated real-time APIs.",
    bgGradient: "from-[#27392c] via-slate-900 to-black",
    tech: ["UI/UX Developer", "Frontend", "API Integration"],
  },
  {
    title: "TecnecT Campus Interface",
    category: "Sample Image of the App",
    projectDetails: tecnectProject,
    type: "image",
    thumbnail: lemivon_mobile,
    tech: ["Mobile & Web UX", "Campus App"],
  },

  // ROW 3: Lemivon
  {
    title: "Lemivon",
    category: "Project Name",
    projectDetails: lemivonProject,
    type: "mock",
    subtitle: "AI-Powered Study & Automated Material Organization Platform",
    bgGradient: "from-[#27392c] via-zinc-900 to-slate-950",
    tech: ["Lemivon", "AI Platform", "2025"],
  },
  {
    title: "AI Study Platform",
    category: "Brief Description",
    projectDetails: lemivonProject,
    type: "mock",
    subtitle: "Modern study platform utilizing AI to help users organize study materials and improve overall learning efficiency.",
    bgGradient: "from-slate-900 via-[#1e2e24] to-black",
    tech: ["AI Engine", "Material Auto-Org", "Full-Stack"],
  },
  {
    title: "Backend & Data Flow Stack",
    category: "Tech Stack Used",
    projectDetails: lemivonProject,
    type: "code",
    filename: "queryOptimizer.js",
    codeSnippet: `// Lemivon Data Flow & Query Optimization
export async function getStudyResources(userId) {
  return await MaterialModel.find({ userId })
    .lean()
    .select('title category aiSummary tags')
    .exec();
}`,
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Full-Stack Contributor",
    category: "My Role",
    projectDetails: lemivonProject,
    type: "mock",
    subtitle: "Responsible for backend development & query optimization, implemented frontend components, and enhanced application responsiveness.",
    bgGradient: "from-emerald-950 via-slate-900 to-zinc-950",
    tech: ["Backend Dev", "Frontend Contributor", "Performance"],
  },
  {
    title: "Lemivon Web Interface",
    category: "Sample Image of the App",
    projectDetails: lemivonProject,
    type: "image",
    thumbnail: lemivon,
    secondaryImage: lemivon_mobile,
    tech: ["Web Showcase", "Live App"],
  },

  // ROW 4: Permit Tracker & Safety Management System (Apps Script Automation)
  {
    title: "Permit Tracker System",
    category: "Project Name",
    projectDetails: permitTrackerProject,
    sectionIndex: 0,
    type: "mock",
    subtitle: "Safety Log Portal & Apps Script Automation System",
    bgGradient: "from-blue-950 via-slate-900 to-black",
    tech: ["Permit Tracker", "Apps Script", "2025"],
  },
  {
    title: "Apps Script & Form Sync",
    category: "Brief Description",
    projectDetails: permitTrackerProject,
    sectionIndex: 0,
    type: "mock",
    subtitle: "Captures safety logs via Google Forms, processes responses in Google Sheets with Apps Script webhooks, and syncs to Supabase.",
    bgGradient: "from-slate-900 via-indigo-950 to-zinc-950",
    tech: ["Apps Script", "Google Forms", "Supabase"],
  },
  {
    title: "Apps Script Webhook Trigger",
    category: "Tech Stack & Code",
    projectDetails: permitTrackerProject,
    sectionIndex: 2,
    type: "code",
    filename: "onFormSubmit.gs",
    codeSnippet: `// Google Apps Script Trigger & Supabase Webhook
function onFormSubmit(e) {
  const responses = e.namedValues;
  const payload = normalizePermitPayload(responses);
  
  UrlFetchApp.fetch(SUPABASE_REST_URL + '/permits', {
    method: 'POST',
    headers: { 'apikey': SUPABASE_ANON_KEY },
    contentType: 'application/json',
    payload: JSON.stringify(payload)
  });
}`,
    tech: ["Apps Script", "JavaScript", "Supabase REST"],
  },
  {
    title: "Automation & Full-Stack Dev",
    category: "My Role",
    projectDetails: permitTrackerProject,
    sectionIndex: 1,
    type: "mock",
    subtitle: "Built Google Apps Script form triggers, webhooks, Supabase PostgreSQL data sync, and client-side PDF export engine.",
    bgGradient: "from-sky-950 via-slate-900 to-zinc-950",
    tech: ["Automation Lead", "Apps Script", "React 19"],
  },
  {
    title: "Safety Dashboard Preview",
    category: "Sample Image of the App",
    projectDetails: permitTrackerProject,
    sectionIndex: 0,
    type: "image",
    thumbnail: lemivon,
    secondaryImage: lemivon_mobile,
    tech: ["Dashboard UI", "PDF Export"],
  },
];

export default function HeroParallaxWrapper({ children, onSelectProject }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const springConfig = { stiffness: 200, damping: 26, bounce: 0 };

  // 1. Horizontal Motion (translateX): Slides card rows horizontally during vertical scroll
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 0.32, 0.82, 1], [0, 0, 450, 450]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 0.32, 0.82, 1], [0, 0, -450, -450]),
    springConfig
  );

  // 2. 3D Tilt: 16deg behind Hero, flattens to 0deg when entering Projects section
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.15, 0.32], [16, 16, 0]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.15, 0.32], [14, 14, 0]),
    springConfig
  );

  // 3. Vertical TranslateY: Frozen at 950px (pushed DOWN below header) between 0.32 and 0.82
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.18, 0.32, 0.82, 1], [-80, 450, 1050, 950, 1950]),
    springConfig
  );

  // 4. Opacity: stays 1.0 throughout horizontal pagination, fading late as section exits
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.12, 0.25, 0.85, 1], [0.22, 0.22, 1, 1, 0.35]),
    springConfig
  );

  // 5. Dynamic Scale: 1.0 behind Hero -> freezes at 0.78 during Projects pagination so cards remain full size
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.15, 0.32, 0.82, 1], [1, 1, 0.78, 0.78, 0.78]),
    springConfig
  );

  // Repeat 4x to ensure 50% shift equals 2 full sets for seamless 360-degree endless circular carousel loop
  const firstRow = [...products.slice(0, 5), ...products.slice(0, 5), ...products.slice(0, 5), ...products.slice(0, 5)];
  const secondRow = [...products.slice(5, 10), ...products.slice(5, 10), ...products.slice(5, 10), ...products.slice(5, 10)];
  const thirdRow = [...products.slice(10, 15), ...products.slice(10, 15), ...products.slice(10, 15), ...products.slice(10, 15)];
  const fourthRow = [...products.slice(15, 20), ...products.slice(15, 20), ...products.slice(15, 20), ...products.slice(15, 20)];

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      {/* 3D Parallax Layer: background in Hero -> flattens & settles right below Fresh from Michael's Desk title */}
      <div className="absolute inset-0 z-0 pointer-events-auto overflow-hidden [perspective:1000px] [transform-style:preserve-3d]">
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
            scale,
          }}
          className="w-full pt-12"
        >
          {/* ROW 1 (Circular Loop Left - TLC Engine) */}
          <motion.div style={{ x: translateX }} className="mb-6 overflow-visible">
            <RowCarouselTrack products={firstRow} direction="left" rowId="row1" onSelectProject={onSelectProject} />
          </motion.div>

          {/* ROW 2 (Circular Loop Right - TecnecT) */}
          <motion.div style={{ x: translateXReverse }} className="mb-6 overflow-visible">
            <RowCarouselTrack products={secondRow} direction="right" rowId="row2" onSelectProject={onSelectProject} />
          </motion.div>

          {/* ROW 3 (Circular Loop Left - Lemivon) */}
          <motion.div style={{ x: translateX }} className="mb-6 overflow-visible">
            <RowCarouselTrack products={thirdRow} direction="left" rowId="row3" onSelectProject={onSelectProject} />
          </motion.div>

          {/* ROW 4 (Circular Loop Right - Permit Tracker Apps Script Automation) */}
          <motion.div style={{ x: translateXReverse }} className="overflow-visible">
            <RowCarouselTrack products={fourthRow} direction="right" rowId="row4" onSelectProject={onSelectProject} />
          </motion.div>
        </motion.div>
      </div>

      {/* Foreground Content: Hero, Projects Header */}
      <div className="relative z-10 pointer-events-none [&_a]:pointer-events-auto [&_button]:pointer-events-auto [&_input]:pointer-events-auto [&_img]:pointer-events-auto [&_.profile-frame]:pointer-events-auto [&_.education-card]:pointer-events-auto">
        {children}
      </div>
    </div>
  );
}

const RowCarouselTrack = ({ products, direction = "left", rowId, onSelectProject }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationPlayState: isHovered ? "paused" : "running",
      }}
      className={`flex flex-row gap-12 pr-12 w-max pointer-events-auto ${direction === "left" ? "animate-circle-left" : "animate-circle-right"
        }`}
    >
      {products.map((product, idx) => (
        <ProductCard
          product={product}
          key={`${rowId}-${idx}-${product.title}`}
          onSelectProject={onSelectProject}
        />
      ))}
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
  onSelectProject,
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.codeSnippet) {
      navigator.clipboard.writeText(product.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (onSelectProject && product.projectDetails) {
      onSelectProject(product.projectDetails, product.sectionIndex ?? 0);
    }
  };

  return (
    <motion.div
      style={translate ? { x: translate } : undefined}
      whileHover={{
        y: -16,
        scale: 1.02,
      }}
      onClick={handleClick}
      key={product.title}
      className="group/product h-80 w-[calc(100vw-2.5rem)] max-w-[24rem] sm:w-[28rem] sm:max-w-none relative flex-shrink-0 rounded-2xl overflow-hidden shadow-xl border border-gray-200/80 bg-white/95 backdrop-blur-sm pointer-events-auto cursor-pointer"
    >
      <a
        href="#"
        onClick={handleClick}
        className="block h-full w-full relative"
      >
        {/* Render Image Card */}
        {product.type === "image" && (
          <div className="w-full h-full relative bg-gray-50 flex items-center justify-center">
            <img
              src={product.thumbnail}
              className="object-cover object-top h-full w-full transition-transform duration-500 group-hover/product:scale-105"
              alt={product.title}
            />
          </div>
        )}

        {/* Render Code Terminal Card */}
        {product.type === "code" && (
          <div className="w-full h-full bg-[#18181b] text-gray-200 p-4 font-mono text-[11px] flex flex-col justify-between select-none">
            <div>
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-gray-800">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                  <span className="ml-2 font-mono text-xs text-gray-400">{product.filename}</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="text-gray-400 hover:text-white transition-colors pointer-events-auto"
                  title="Copy code"
                >
                  {copied ? <CheckCircle size={15} className="text-green-400" /> : <Copy size={15} />}
                </button>
              </div>
              <pre className="text-emerald-400/90 text-[10.5px] leading-relaxed overflow-hidden">
                <code>{product.codeSnippet}</code>
              </pre>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-gray-800 text-[10px] text-gray-500">
              <span>// {product.category}</span>
              <span className="text-[#9BB193]">Michael Inoc Studio</span>
            </div>
          </div>
        )}

        {/* Render Styled Mock UI Card */}
        {product.type === "mock" && (
          <div className={`w-full h-full bg-gradient-to-br ${product.bgGradient} p-6 flex flex-col justify-between text-white relative`}>
            <div>
              <span className="inline-block px-2.5 py-1 rounded-full bg-white/10 text-xs font-mono font-semibold backdrop-blur-md mb-4 border border-white/10">
                {product.category}
              </span>
              <h3 className="text-2xl font-bold font-sans tracking-tight mb-2">
                {product.title}
              </h3>
              <p className="text-xs text-gray-300 font-sans leading-relaxed">
                {product.subtitle}
              </p>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-md flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {product.tech?.map((t) => (
                  <span key={t} className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-white/10 text-gray-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Hover Overlay with details */}
        <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-95 bg-gradient-to-t from-black via-black/80 to-transparent transition duration-300 flex flex-col justify-end p-6">
          <span className="text-xs font-mono text-[#9BB193] uppercase font-bold tracking-wider mb-1">
            {product.category}
          </span>
          <h2 className="text-xl font-bold text-white font-sans tracking-tight mb-2">
            {product.title}
          </h2>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-1">
              {product.tech?.map((t) => (
                <span key={t} className="text-[10px] font-mono bg-white/20 text-white px-2 py-0.5 rounded">
                  {t}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-white bg-[#3d5945] px-3 py-1.5 rounded-full">
              Explore <ArrowUpRight size={14} />
            </span>
          </div>
        </div>
      </a>
    </motion.div>
  );
};
