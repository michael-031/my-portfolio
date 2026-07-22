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

const products = [
  // ROW 1
  {
    title: "Lemivon UI Showcase",
    category: "Full-Stack Web",
    link: "https://github.com/michael-031",
    type: "image",
    thumbnail: lemivon,
    secondaryImage: lemivon_mobile,
    tech: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Apps Script Automation Engine",
    category: "Automation",
    link: "https://github.com/michael-031",
    type: "code",
    filename: "automation.gs",
    codeSnippet: `function processDailyIngest() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('DataIngest');
  const rows = sheet.getDataRange().getValues();
  rows.forEach((row, idx) => {
    if (idx === 0) return;
    const [id, email, status, amount] = row;
    if (status === 'PENDING') {
      sendReport(email, id, amount);
      sheet.getRange(idx + 1, 3).setValue('DONE');
    }
  });
}`,
    tech: ["Apps Script", "JavaScript", "Sheets API"],
  },
  {
    title: "Full-Stack Web App Template",
    category: "Web Template",
    link: "https://github.com/michael-031",
    type: "code",
    filename: "AppStarter.tsx",
    codeSnippet: `import React, { useState } from 'react';
import { UseTheme } from '@/hooks/use-theme';

export default function AppStarter() {
  const { theme, toggleTheme } = UseTheme();
  return (
    <main className={\`app-shell \${theme}\`}>
      <Header onToggle={toggleTheme} />
      <HeroSection title="Full-Stack Starter" />
    </main>
  );
}`,
    tech: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "BatasPH.ai Legal Assistant",
    category: "AI Concept",
    link: "https://github.com/michael-031",
    type: "mock",
    subtitle: "AI-Powered Legal Assistant for Citizens",
    bgGradient: "from-emerald-950 via-slate-900 to-zinc-950",
    tech: ["Python", "Next.js", "FastAPI", "Gemini API"],
  },
  {
    title: "Gorun Offline Fitness Tracker",
    category: "Mobile Concept",
    link: "https://github.com/michael-031",
    type: "mock",
    subtitle: "Privacy-First Offline Route Logger",
    bgGradient: "from-slate-900 via-teal-950 to-slate-900",
    tech: ["React Native", "Expo", "Leaflet"],
  },

  // ROW 2
  {
    title: "Google Drive Backup Workflow",
    category: "Automation",
    link: "https://github.com/michael-031",
    type: "code",
    filename: "drive_backup.gs",
    codeSnippet: `function backupSpreadsheetsToDrive() {
  const folder = DriveApp.getFolderById("BACKUP_ID");
  const files = DriveApp.getFilesByType(MimeType.GOOGLE_SHEETS);
  while (files.hasNext()) {
    const file = files.next();
    file.makeCopy(file.getName() + "_Backup", folder);
  }
}`,
    tech: ["Apps Script", "Drive API", "Cron Trigger"],
  },
  {
    title: "SaaS Analytics Dashboard",
    category: "Web Template",
    link: "https://github.com/michael-031",
    type: "mock",
    subtitle: "Real-time Metrics & Financial Chart UI",
    bgGradient: "from-zinc-900 via-[#1e2e24] to-[#141e17]",
    tech: ["Next.js", "Recharts", "Tailwind"],
  },
  {
    title: "Lemivon Mobile Layout",
    category: "UI/UX Mobile",
    link: "https://github.com/michael-031",
    type: "image",
    thumbnail: lemivon_mobile,
    tech: ["React Native", "Figma", "Tailwind"],
  },
  {
    title: "FastAPI Microservices Template",
    category: "Backend Template",
    link: "https://github.com/michael-031",
    type: "code",
    filename: "server.py",
    codeSnippet: `from fastapi import FastAPI, Depends
from pydantic import BaseModel

app = FastAPI(title="Workflow API")

@app.post("/api/v1/sync")
async def trigger_sync(payload: dict):
    return {"status": "success", "processed": True}`,
    tech: ["Python", "FastAPI", "PostgreSQL"],
  },
  {
    title: "Modern E-Commerce Storefront",
    category: "Web Template",
    link: "https://github.com/michael-031",
    type: "mock",
    subtitle: "High-Conversion Retail Storefront UI",
    bgGradient: "from-[#27392c] via-slate-900 to-black",
    tech: ["React", "Stripe API", "Node.js"],
  },

  // ROW 3
  {
    title: "Google Sheets Data Ingestion",
    category: "Automation",
    link: "https://github.com/michael-031",
    type: "code",
    filename: "sheets_ingest.gs",
    codeSnippet: `function fetchExternalWebhookData() {
  const url = "https://api.example.com/v1/leads";
  const res = UrlFetchApp.fetch(url);
  const data = JSON.parse(res.getContentText());
  appendDataToSheet(data.leads);
}`,
    tech: ["Apps Script", "REST Webhooks", "JSON"],
  },
  {
    title: "Embedded Arduino Controller",
    category: "Hardware / C++",
    link: "https://github.com/michael-031",
    type: "mock",
    subtitle: "Real-Time Sensor Telemetry Interface",
    bgGradient: "from-slate-950 via-[#3d5945]/40 to-slate-900",
    tech: ["C++", "Arduino", "WebSockets"],
  },
  {
    title: "Anti-Slop Design System",
    category: "UI Kit",
    link: "https://github.com/michael-031",
    type: "code",
    filename: "Button.tsx",
    codeSnippet: `export const PrimaryButton = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="px-6 py-3 rounded-full bg-[#3d5945] text-[#1a1515] font-semibold shadow-md hover:bg-[#27392c] transition-all"
  >
    {children}
  </button>
);`,
    tech: ["TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Personal Portfolio Platform",
    category: "Full-Stack Web",
    link: "https://github.com/michael-031",
    type: "image",
    thumbnail: lemivon,
    tech: ["React 19", "Vite", "Tailwind CSS"],
  },
  {
    title: "Automated PDF Report Generator",
    category: "Automation",
    link: "https://github.com/michael-031",
    type: "mock",
    subtitle: "Doc & PDF Auto Generation from Sheets",
    bgGradient: "from-[#1a1515] via-[#27392c] to-[#1a1515]",
    tech: ["Apps Script", "Docs API", "Drive API"],
  },
];

export default function HeroParallaxWrapper({ children }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const springConfig = { stiffness: 200, damping: 26, bounce: 0 };

  // 1. Horizontal Motion (translateX) moves smoothly as user scrolls
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2, 1], [0, 0, 850]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 0.2, 1], [0, 0, -850]),
    springConfig
  );

  // 2. 3D Tilt: 16deg behind Hero, flattens to 0deg EARLY when Projects title enters screen (0.15 to 0.32)
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.15, 0.32], [16, 16, 0]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.15, 0.32], [14, 14, 0]),
    springConfig
  );

  // 3. Vertical TranslateY: moves cleanly to +1050px (below Fresh from Michael's Desk) when section title is in view
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2, 0.35, 1], [-80, 280, 950, 1480]),
    springConfig
  );

  // 4. Opacity: transitions to 1.0 EARLY (0.12 to 0.3), and prolongs fade out (1 to 0) gradually from 0.42 to 0.95
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.12, 0.3, 0.42, 0.95], [0.22, 0.22, 1, 1, 0]),
    springConfig
  );

  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      {/* 3D Parallax Layer: background in Hero -> flattens & settles right below Fresh from Michael's Desk title */}
      <div className="absolute inset-0 z-0 overflow-hidden [perspective:1000px] [transform-style:preserve-3d]">
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
          className="w-full pt-12"
        >
          {/* ROW 1 */}
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-12 mb-8">
            {firstRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.title}
              />
            ))}
          </motion.div>

          {/* ROW 2 */}
          <motion.div className="flex flex-row space-x-12 mb-8">
            {secondRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateXReverse}
                key={product.title}
              />
            ))}
          </motion.div>

          {/* ROW 3 */}
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-12">
            {firstRow.map((product, idx) => (
              <ProductCard
                product={thirdRow[idx] || product}
                translate={translateX}
                key={`row3-${product.title}`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Foreground Content: Hero, Projects Header */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export const ProductCard = ({
  product,
  translate,
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    if (product.codeSnippet) {
      navigator.clipboard.writeText(product.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -16,
        scale: 1.02,
      }}
      key={product.title}
      className="group/product h-80 w-[24rem] sm:w-[28rem] relative flex-shrink-0 rounded-2xl overflow-hidden shadow-xl border border-gray-200/80 bg-white/95 backdrop-blur-sm pointer-events-auto"
    >
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
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
