import profileImg from '../../assets/profile.png';
import logoImg from '../../assets/logo1.png';
import htmlIcon from '../../assets/html.png';
import reactIcon from '../../assets/react.png';
import tsIcon from '../../assets/typescript.png';
import jsIcon from '../../assets/javascript.png';
import nextjsIcon from '../../assets/nextjs.png';
import cIcon from '../../assets/C.png';
import csharpIcon from '../../assets/Csharp.png';
import pythonIcon from '../../assets/python.png';
import arduinoIcon from '../../assets/Arduino.png';
import tailwindIcon from '../../assets/Tailwind.png';
import figmaIcon from '../../assets/figma.png';
import appscriptIcon from '../../assets/google-apps-script.png';
import lemivonImg from '../../assets/projects/Lemivon.png';
import lemivonMobileImg from '../../assets/projects/lemivon_mobile.png';
import tecnectHeroImg from '../../assets/projects/tecnect_hero.png';
import tecnectLandingImg from '../../assets/projects/tecnect_landing.png';
import tecnectLoginImg from '../../assets/projects/tecnect_login.png';
import tecnectRegisterImg from '../../assets/projects/tecnect_register.png';
import tecnectMarketplaceImg from '../../assets/projects/tecnect_marketplace.png';
import tecnectPostImg from '../../assets/projects/tecnect_post.png';
import tecnectFullpageImg from '../../assets/projects/tecnect_fullpage.png';
import tlcDashboardImg from '../../assets/projects/tlc_dashboard.png';
import tlcSuperAdminImg from '../../assets/projects/tlc_superadmin.png';
import tlcUserManagementImg from '../../assets/projects/tlc_user_management.png';
import tlcPoliciesImg from '../../assets/projects/tlc_policies.png';
import tlcAcademicSetupImg from '../../assets/projects/tlc_academic_setup.png';
import runImg from '../../assets/About Me/my_pitik.jpg';
import run1Img from '../../assets/About Me/10k_finish.jpg';
import run2Img from '../../assets/About Me/10k_with_divan.jpg';
import hikeImg from '../../assets/About Me/hike.jpg';
import hike1Img from '../../assets/About Me/hike2.jpg';

export const profileStaticData = {
  name: 'Michael Inoc',
  firstName: 'Michael',
  eyebrow: 'Michael Inoc // Full-Stack Web Developer & Automation Specialist',
  headline: {
    primary: 'Full-Stack Web Developer',
    secondary: 'Apps Script Automation',
  },
  description: {
    prefix:
      'Crafting high-performance full-stack web applications, interactive user experiences, and tailored ',
    highlight: 'Google Apps Script automations',
    suffix: ' to streamline workflows and boost productivity.',
  },
  avatar: profileImg,
  logo: logoImg,
  badges: [
    { id: 'fullstack', label: 'Full-Stack Web Developer', iconName: 'Code' },
    { id: 'automation', label: 'Apps Script Automation', iconName: 'Lightning' },
    { id: 'education', label: 'Computer Engineering', iconName: 'GraduationCap' },
  ],
  highlights: [
    {
      id: 'education',
      title: 'Education',
      subtitle: '4th-Year Student',
      detail: 'BS Computer Engineering — CIT-U',
      iconName: 'GraduationCap',
    },
    {
      id: 'expertise',
      title: 'Core Expertise',
      subtitle: 'Web & Automation',
      detail: 'Full-Stack & Apps Script',
      iconName: 'Gear',
    },
  ],
  contact: {
    email: 'inocjohnmichael@gmail.com',
    mailto: 'mailto:inoc.johnmichael@gmail.com',
    phone: '+63 917 952 3690',
    tel: 'tel:+639179523690',
    githubUsername: 'michael-031',
  },
  socials: [
    {
      id: 'github',
      label: 'GitHub',
      title: 'GitHub Profile',
      url: 'https://github.com/michael-031',
      iconName: 'GithubLogo',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      title: 'LinkedIn Profile',
      url: 'https://www.linkedin.com/in/john-michael-inoc-bb288326b/',
      iconName: 'LinkedinLogo',
    },
    {
      id: 'facebook',
      label: 'Facebook',
      title: 'Facebook Profile',
      url: 'https://www.facebook.com/michaelzz450',
      iconName: 'FacebookLogo',
    },
  ],
  aboutSlogan: 'Leveling up in every mile and every line.',
  gallery: [
    { src: runImg, alt: 'Michael sharing a candid moment with his pet' },
    { src: run1Img, alt: 'Michael crossing the finish line after a 10K run' },
    { src: run2Img, alt: 'Michael and Divan at a 10K running event' },
    { src: hikeImg, alt: 'Michael hiking with a scenic mountain backdrop' },
    { src: hike1Img, alt: 'Michael enjoying another outdoor hiking trail' },
  ],
  navigation: [
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'tech-stack', label: 'Stack' },
    { id: 'about-me', label: 'About Me' },
    { id: 'contact-me', label: 'Contact' },
  ],
};

export const coreTechStackData = [
  { name: 'HTML/CSS', icon: htmlIcon, category: 'core' },
  { name: 'React', icon: reactIcon, category: 'core' },
  { name: 'TypeScript', icon: tsIcon, category: 'core' },
  { name: 'JavaScript', icon: jsIcon, category: 'core' },
  { name: 'Next.js', icon: nextjsIcon, category: 'core' },
  { name: 'Apps Script', icon: appscriptIcon, category: 'core' },
  { name: 'Figma', icon: figmaIcon, category: 'core' },
];

export const additionalTechStackData = [
  { name: 'C', icon: cIcon, category: 'additional' },
  { name: 'C#', icon: csharpIcon, category: 'additional' },
  { name: 'Python', icon: pythonIcon, category: 'additional' },
  { name: 'Arduino', icon: arduinoIcon, category: 'additional' },
  { name: 'Tailwind CSS', icon: tailwindIcon, category: 'additional' },
];

export const experienceStaticData = [
  {
    id: 'innodata-intern',
    role: 'Software Engineering Intern',
    company: 'Innodata Knowledge and Services Inc.',
    date: 'June 2026 – July 2026',
    type: 'Internship',
    location: 'Software Engineering',
    summary:
      'Engineered software components and web application features during a Software Engineering Internship at Innodata Knowledge and Services Inc.',
    highlights: [
      'Engaged in full-stack web development, API integration, and modular component architecture.',
      'Collaborated with senior software engineers to maintain clean code standards, perform code reviews, and resolve technical bugs.',
      'Applied modern software development methodologies and agile workflows in an enterprise environment.',
    ],
    documentLink: {
      url: 'https://drive.google.com/file/d/1K3qLQPEFsnMVSfjFNRZioPfLWxdcfQKN/view?usp=sharing',
      label: 'Innodata Projects, Reflections & Learning Outcomes',
    },
  },
];

export const tlcEngineProjectData = {
  id: 'tlc-engine',
  title: 'TLC Engine',
  monogram: 'TLC',
  category: 'Teaching Load & Compliance Platform',
  roleTitle: 'Full-Stack Developer & QA',
  period: '2025 – Present',
  displayLink: 'tlc-engine.vercel.app',
  link: 'https://tlc-engine.vercel.app/#features',
  image: tlcDashboardImg,
  roleImage: tlcUserManagementImg,
  secondaryImage: tlcSuperAdminImg,
  images: [
    { src: tlcDashboardImg, label: 'Admin Dashboard' },
    { src: tlcSuperAdminImg, label: 'Super Admin Tenants' },
    { src: tlcUserManagementImg, label: 'RBAC User Management' },
    { src: tlcPoliciesImg, label: 'Teaching Load Policy' },
    { src: tlcAcademicSetupImg, label: 'Academic Setup' },
  ],
  subtitle: 'Multi-Tenant Teaching Load & Compliance Platform with RBAC',
  description:
    'TLC Engine (Teaching Load & Compliance Platform) is a multi-tenant academic platform designed to modernize faculty workload management, automate teaching load calculations, enforce institutional policies, and monitor real-time compliance across departments with granular Role-Based Access Control (RBAC).',
  contributions: [
    'Engineered full-stack features across the multi-tenant architecture, including teaching load computation, institutional policy enforcement, and approval workflows.',
    'Developed responsive interfaces for Super Admins and Institutional Admins covering Academic Setup, Teaching Load Policies, and RBAC Account Management.',
    'Performed comprehensive Quality Assurance (QA) testing across tenant isolation, role permissions, overload validation rules, and end-to-end UI workflows to ensure production reliability.',
  ],
  challenges:
    'Enforcing complex academic workload policies and strict multi-tenant data isolation while maintaining accurate real-time compliance calculations required rigorous full-stack engineering and QA validation. I implemented role-isolated API and frontend permission guards, automated policy validation rules, and thorough QA test coverage across all stakeholder workflows.',
  tech: ['Next.js', 'TypeScript', 'React', 'Supabase', 'Node.js', 'Tailwind CSS'],
};

export const tecnectProjectData = {
  id: 'tecnect',
  title: 'TecnecT',
  monogram: 'TCT',
  category: 'Campus Web Platform',
  roleTitle: 'Frontend Developer',
  period: '2025',
  displayLink: 'github.com/michael-031/tecnect',
  link: 'https://github.com/michael-031',
  image: tecnectLandingImg,
  roleImage: tecnectLoginImg,
  secondaryImage: tecnectMarketplaceImg,
  images: [
    { src: tecnectLandingImg, label: 'Landing & Login UI' },
    { src: tecnectHeroImg, label: 'Campus Hero View' },
    { src: tecnectMarketplaceImg, label: 'Marketplace Grid' },
    { src: tecnectLoginImg, label: 'Welcome Login' },
    { src: tecnectRegisterImg, label: 'Create Account' },
    { src: tecnectPostImg, label: 'Post an Item' },
    { src: tecnectFullpageImg, label: 'Full Web Page' },
  ],
  subtitle: 'Campus Marketplace for Trading, Equipment Rentals, and Lost & Found',
  description:
    'TecnecT (TeknnecT) is a comprehensive campus marketplace and web application empowering students to trade items, rent campus equipment, report or find lost items, and connect with fellow students through real-time messaging.',
  contributions: [
    'Developed responsive frontend interfaces for the campus marketplace, item listings, category filters, and student messaging.',
    'Built user authentication screens (Login & Create Account flows) and the interactive "Post an Item" multi-type form (Trade, Rent, Lost, Found).',
    'Translated the TeknnecT Figma UI design into reusable React components and integrated frontend views with backend APIs.',
  ],
  challenges:
    'Building a unified frontend interface supporting multiple campus listing workflows (Trade, Rent, Lost, and Found) alongside real-time student messaging required clean state management and responsive layouts. I engineered modular React components, dynamic category filtering, and streamlined API integration to deliver a fast and intuitive user experience across devices.',
  tech: ['React', 'JavaScript', 'Tailwind CSS', 'Figma', 'WebSockets'],
};

export const lemivonProjectData = {
  id: 'lemivon',
  title: 'Lemivon',
  monogram: 'LLF',
  category: 'AI Study Platform',
  roleTitle: 'Frontend & Backend Contributor',
  period: '2025',
  displayLink: 'study-taa.vercel.app',
  link: 'https://study-taa.vercel.app',
  image: lemivonImg,
  secondaryImage: lemivonMobileImg,
  subtitle: 'AI-Powered Study & Automated Material Organization Platform',
  description:
    'Lemivon is a modern study platform that uses AI to help users organize study materials and improve learning efficiency. I was responsible for backend development and contributed to parts of the frontend, ensuring a functional and user-friendly experience.',
  contributions: [
    'Contributed to the development of an AI-powered study platform focused on automated material organization and learning efficiency.',
    'Engaged in implementing frontend components and basic backend functionalities.',
    'Worked with the team to improve performance and responsiveness of the application.',
  ],
  challenges:
    'One challenge was maintaining performance while handling many study resources and user interactions. I optimized backend queries and improved data flow between services to keep the experience smooth and scalable.',
  tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
};

export const permitTrackerProjectData = {
  id: 'permit-tracker',
  title: 'Permit Tracker & Safety Management System',
  monogram: 'PTS',
  category: 'Safety & Automation System',
  roleTitle: 'Automation & Full-Stack Developer',
  period: '2025',
  displayLink: 'github.com/michael-031/permit-tracker',
  link: 'https://github.com/michael-031/permit-tracker.git',
  subtitle: 'Google Forms/Sheets + Apps Script Webhooks + Supabase + React 19 Dashboard',
  description:
    'Permit Tracker is an enterprise workplace safety platform capturing safety data via Google Forms, automating ingestion & webhooks using Google Apps Script in Google Sheets, synchronizing records to Supabase PostgreSQL, and rendering real-time dashboards with custom PDF printing.',
  contributions: [
    'Engineered Google Apps Script triggers (onFormSubmit) and Webhooks (UrlFetchApp.fetch()) to normalize and stream Google Forms submissions directly to Supabase REST endpoints.',
    'Built real-time React 19 + TypeScript dashboard for tracking workplace permits, safety observations, JSA forms, and incident reports.',
    'Developed custom client-side PDF export engine (pdf-lib) and print templates for automated safety document generation.',
  ],
  challenges:
    'Synchronizing real-time form submissions across Google Sheets, Apps Script webhooks, and Supabase PostgreSQL while normalizing raw stringified JSON arrays required robust data pipelines. I implemented custom Apps Script triggers, TypeScript field normalizers, and client-side PDF generation engines to ensure reliable, zero-latency safety log reporting.',
  tech: ['Google Apps Script', 'React 19', 'TypeScript', 'Supabase', 'Google Sheets', 'pdf-lib'],
};

export const parallaxProductsData = [
  // ROW 1: TLC Engine
  {
    title: 'TLC Engine',
    category: 'Project Name',
    projectDetails: tlcEngineProjectData,
    sectionIndex: 0,
    type: 'image',
    thumbnail: tlcDashboardImg,
    subtitle: 'Multi-Tenant Teaching Load & Compliance Platform with RBAC',
    tech: ['TLC Platform', 'Multi-Tenant', '2025 – Present'],
  },
  {
    title: 'Super Admin & Tenant Analytics',
    category: 'Multi-Tenant Architecture',
    projectDetails: tlcEngineProjectData,
    sectionIndex: 0,
    type: 'image',
    thumbnail: tlcSuperAdminImg,
    tech: ['Active Tenants', 'System Health', 'Compliance'],
  },
  {
    title: 'Full-Stack Developer & QA',
    category: 'My Role',
    projectDetails: tlcEngineProjectData,
    sectionIndex: 1,
    type: 'mock',
    subtitle:
      'Engineered full-stack teaching load & RBAC features, built administrative dashboards, and conducted end-to-end Quality Assurance (QA) testing.',
    bgGradient: 'from-emerald-950 via-slate-900 to-zinc-950',
    tech: ['Full-Stack Dev', 'Quality Assurance (QA)', 'RBAC'],
  },
  {
    title: 'RBAC Account Management',
    category: 'Role-Based Access Control',
    projectDetails: tlcEngineProjectData,
    sectionIndex: 2,
    type: 'image',
    thumbnail: tlcUserManagementImg,
    tech: ['Role Permissions', 'Account Management', 'Next.js'],
  },
  {
    title: 'Teaching Load Policy & Setup',
    category: 'Sample Image of the App',
    projectDetails: tlcEngineProjectData,
    sectionIndex: 0,
    type: 'image',
    thumbnail: tlcPoliciesImg,
    secondaryImage: tlcAcademicSetupImg,
    tech: ['Policy Engine', 'Academic Setup'],
  },

  // ROW 2: TecnecT
  {
    title: 'TecnecT',
    category: 'Project Name',
    projectDetails: tecnectProjectData,
    sectionIndex: 0,
    type: 'image',
    thumbnail: tecnectHeroImg,
    subtitle: 'Campus Marketplace for Trading, Equipment Rentals, and Lost & Found',
    tech: ['TecnecT', 'Campus Web App', '2025'],
  },
  {
    title: 'Welcome & Login Interface',
    category: 'Campus Web Platform',
    projectDetails: tecnectProjectData,
    sectionIndex: 0,
    type: 'image',
    thumbnail: tecnectLandingImg,
    tech: ['Campus App', 'Authentication UI', 'React'],
  },
  {
    title: 'Frontend Developer',
    category: 'My Role',
    projectDetails: tecnectProjectData,
    sectionIndex: 1,
    type: 'mock',
    subtitle:
      'Developed responsive React frontend interfaces, authentication flows, campus marketplace listings, item posting forms, and real-time messaging views.',
    bgGradient: 'from-[#27392c] via-slate-900 to-black',
    tech: ['Frontend Developer', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Campus Marketplace Grid',
    category: 'Frontend UI',
    projectDetails: tecnectProjectData,
    sectionIndex: 2,
    type: 'image',
    thumbnail: tecnectMarketplaceImg,
    tech: ['Trade & Rent', 'Lost & Found', 'Search & Filter'],
  },
  {
    title: 'TecnecT Account & Listing UI',
    category: 'Sample Image of the App',
    projectDetails: tecnectProjectData,
    sectionIndex: 0,
    type: 'image',
    thumbnail: tecnectRegisterImg,
    secondaryImage: tecnectPostImg,
    tech: ['Create Account UI', 'Post Item Form'],
  },

  // ROW 3: Lemivon
  {
    title: 'Lemivon',
    category: 'Project Name',
    projectDetails: lemivonProjectData,
    type: 'mock',
    subtitle: 'AI-Powered Study & Automated Material Organization Platform',
    bgGradient: 'from-[#27392c] via-zinc-900 to-slate-950',
    tech: ['Lemivon', 'AI Platform', '2025'],
  },
  {
    title: 'AI Study Platform',
    category: 'Brief Description',
    projectDetails: lemivonProjectData,
    type: 'mock',
    subtitle:
      'Modern study platform utilizing AI to help users organize study materials and improve overall learning efficiency.',
    bgGradient: 'from-slate-900 via-[#1e2e24] to-black',
    tech: ['AI Engine', 'Material Auto-Org', 'Full-Stack'],
  },
  {
    title: 'Backend & Data Flow Stack',
    category: 'Tech Stack Used',
    projectDetails: lemivonProjectData,
    type: 'code',
    filename: 'queryOptimizer.js',
    codeSnippet: `// Lemivon Data Flow & Query Optimization
export async function getStudyResources(userId) {
  return await MaterialModel.find({ userId })
    .lean()
    .select('title category aiSummary tags')
    .exec();
}`,
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Full-Stack Contributor',
    category: 'My Role',
    projectDetails: lemivonProjectData,
    type: 'mock',
    subtitle:
      'Responsible for backend development & query optimization, implemented frontend components, and enhanced application responsiveness.',
    bgGradient: 'from-emerald-950 via-slate-900 to-zinc-950',
    tech: ['Backend Dev', 'Frontend Contributor', 'Performance'],
  },
  {
    title: 'Lemivon Web Interface',
    category: 'Sample Image of the App',
    projectDetails: lemivonProjectData,
    type: 'image',
    thumbnail: lemivonImg,
    secondaryImage: lemivonMobileImg,
    tech: ['Web Showcase', 'Live App'],
  },

  // ROW 4: Permit Tracker & Safety Management System (Apps Script Automation)
  {
    title: 'Permit Tracker System',
    category: 'Project Name',
    projectDetails: permitTrackerProjectData,
    sectionIndex: 0,
    type: 'mock',
    subtitle: 'Safety Log Portal & Apps Script Automation System',
    bgGradient: 'from-blue-950 via-slate-900 to-black',
    tech: ['Permit Tracker', 'Apps Script', '2025'],
  },
  {
    title: 'Apps Script & Form Sync',
    category: 'Brief Description',
    projectDetails: permitTrackerProjectData,
    sectionIndex: 0,
    type: 'mock',
    subtitle:
      'Captures safety logs via Google Forms, processes responses in Google Sheets with Apps Script webhooks, and syncs to Supabase.',
    bgGradient: 'from-slate-900 via-indigo-950 to-zinc-950',
    tech: ['Apps Script', 'Google Forms', 'Supabase'],
  },
  {
    title: 'Apps Script Webhook Trigger',
    category: 'Tech Stack & Code',
    projectDetails: permitTrackerProjectData,
    sectionIndex: 2,
    type: 'code',
    filename: 'onFormSubmit.gs',
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
    tech: ['Apps Script', 'JavaScript', 'Supabase REST'],
  },
  {
    title: 'Automation & Full-Stack Dev',
    category: 'My Role',
    projectDetails: permitTrackerProjectData,
    sectionIndex: 1,
    type: 'mock',
    subtitle:
      'Built Google Apps Script form triggers, webhooks, Supabase PostgreSQL data sync, and client-side PDF export engine.',
    bgGradient: 'from-sky-950 via-slate-900 to-zinc-950',
    tech: ['Automation Lead', 'Apps Script', 'React 19'],
  },
  {
    title: 'Safety Dashboard Preview',
    category: 'Sample Image of the App',
    projectDetails: permitTrackerProjectData,
    sectionIndex: 0,
    type: 'image',
    thumbnail: lemivonImg,
    secondaryImage: lemivonMobileImg,
    tech: ['Dashboard UI', 'PDF Export'],
  },
];

export const showcaseProjectsData = [
  {
    id: 1,
    title: 'Lemivon UI Showcase',
    tagline: 'A modern UI showcase with responsive web and mobile layouts.',
    description:
      'A comprehensive UI showcase for Lemivon featuring responsive web and handheld viewports, custom glass design system, and sleek user experience.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    category: 'Full-Stack Web',
    type: 'web',
    webImage: lemivonImg,
    mobileImage: lemivonMobileImg,
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
    description:
      'A reusable Google Apps Script template designed to automate data ingestion, calculations, report generation, and instant notifications.',
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
    description:
      'A high-performance web app template featuring theme toggle systems, RESTful API integrations, responsive layouts, and clean code architecture.',
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
  },
];
