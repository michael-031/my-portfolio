import { useEffect, useState } from 'react'
import profile from './assets/profile.png'
import fb from './assets/facebook.png'
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'
import SplitText from "./SplitText";
import './App.css'
import logo from './assets/logo1.png'
import html from './assets/html.png'
import react from './assets/react.png'
import ts from './assets/typescript.png'
import js from './assets/javascript.png'
import nextjs from './assets/nextjs.png'
import c from './assets/C.png'
import csharp from './assets/Csharp.png'
import python from './assets/python.png'
import arduino from './assets/Arduino.png'
import tailwind from './assets/Tailwind.png'
import figma from './assets/figma.png'
import lemivon from './assets/projects/Lemivon.png'
import lemivon_mobile from './assets/projects/lemivon_mobile.png'
import tecknnect from './assets/projects/tecknnect/tecknnect.png'
import tlc from './assets/projects/tlc/landingPage.png'
import tlcAbout from './assets/projects/tlc/AboutSection.png'
import tlcFeature from './assets/projects/tlc/FeatureSection.png'
import tlcWhat from './assets/projects/tlc/WhatIsTLCSection.png'
import run from './assets/About Me/my_pitik.jpg'
import run1 from './assets/About Me/10k_finish.jpg'
import run2 from './assets/About Me/10k_with_divan.jpg'
import hike from './assets/About Me/hike.jpg'
import hike1 from './assets/About Me/hike2.jpg'

const techStack = [
  { name: 'HTML/CSS', icon: html },
  { name: 'React', icon: react },
  { name: 'TypeScript', icon: ts },
  { name: 'JavaScript', icon: js },
  { name: 'Next.js', icon: nextjs },
  { name: 'Figma', icon: figma },
]

function App() {
  const aboutGallery = [
    { src: run, alt: 'Michael sharing a candid moment with his pet' },
    { src: run1, alt: 'Michael crossing the finish line after a 10K run' },
    { src: run2, alt: 'Michael and Divan at a 10K running event' },
    { src: hike, alt: 'Michael hiking with a scenic mountain backdrop' },
    { src: hike1, alt: 'Michael enjoying another outdoor hiking trail' },
  ]
  
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [loading, setLoading] = useState(true)
  const [loaderExit, setLoaderExit] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [centerId, setCenterId] = useState(1)
  
  // Theme management
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'system'
  })

  // Theme application
  useEffect(() => {
    const root = document.documentElement
    const applyTheme = () => {
      const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
      if (isDark) {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
    }
    applyTheme()
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  // System theme changes
  useEffect(() => {
    if (theme !== 'system') return
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleSystemThemeChange = () => {
      const root = document.documentElement
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (isDark) {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
    }
    mediaQuery.addEventListener('change', handleSystemThemeChange)
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Intro loading lifecycle
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaderExit(true);
      const exitTimer = setTimeout(() => {
        setLoading(false);
      }, 600);
      return () => clearTimeout(exitTimer);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Carousel controls
  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % aboutGallery.length)
    }, 3800)

    return () => window.clearInterval(timer)
  }, [aboutGallery.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + aboutGallery.length) % aboutGallery.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % aboutGallery.length)
  }

  // Active section tracker via scroll
  useEffect(() => {
    if (selectedProject) return;
    
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.15, rootMargin: '-64px 0px -40% 0px' }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, [selectedProject]);

  const handleNavClick = (sectionId) => {
    setSelectedProject(null);
    setMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 80);
  };

  const loopedTechStack = [...techStack, ...techStack]
  
  const otherTechStack = [
    { name: 'C', icon: c },
    { name: 'C#', icon: csharp },
    { name: 'Python', icon: python },
    { name: 'Arduino', icon: arduino },
    { name: 'Tailwind CSS', icon: tailwind },
  ]
  
  const initialProjectsList = [
    {
      id: 1,
      title: 'Lemivon',
      tagline: 'A modern UI showcase with responsive web and mobile layouts.',
      description: 'A UI showcase for Lemivon with dedicated web and mobile previews, designed to look stunning on both desktop and handheld viewports.',
      role: 'Frontend Developer and UI/UX Designer. Focused on responsive layout composition, custom theme variables, and modular component design.',
      challenges: 'Designing a responsive mobile mock frame that renders standard web contents without breaking viewport boundaries. Solved using CSS aspect-ratio configurations and scale transforms.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      category: 'Development',
      authorName: 'Michael Inoc',
      authorAvatar: 'M',
      webImage: lemivon,
      mobileImage: lemivon_mobile,
      tags: ['#1 UI SHOWCASE', 'FULLSTACK', 'PORTFOLIO FAVORITE'],
      demoUrl: 'https://github.com/michael-031',
      repoUrl: 'https://github.com/michael-031/my-portfolio.git',
      initialUpvotes: 42,
      screenshots: [lemivon, lemivon_mobile]
    },
    {
      id: 2,
      title: 'TechNnect',
      tagline: 'Connecting tech enthusiasts and developers.',
      description: 'TecnnecT is a web app for campus rentals, lost-and-found, and messaging. I led development, handled backend architecture, and contributed to frontend implementation to deliver a practical and reliable platform.',
      role: 'I worked on backend APIs, database design, authentication, and real-time messaging features, while also supporting key frontend integrations and overall product quality.',
      challenges: 'One challenge was coordinating multiple features with smooth performance. I optimized API responses, improved data handling, and refined system structure to keep the app responsive and maintainable.',
      tech: ['React', 'Node.js', 'Socket.io', 'Tailwind CSS'],
      category: 'Collaboration',
      authorName: 'Michael Inoc',
      authorAvatar: 'M',
      webImage: tecknnect,
      mobileImage: null,
      tags: ['#1 COLLAB PLATFORM', 'REALTIME', 'DEVELOPER TOOL'],
      demoUrl: 'https://teknnect-1c19d.web.app/',
      repoUrl: 'https://github.com/michael-031/my-portfolio.git',
      initialUpvotes: 18,
      screenshots: [tecknnect]
    },
    {
      id: 3,
      title: 'TLC',
      tagline: 'The Learning Center for interactive education.',
      description: 'TLC (The Learning Center) is an interactive educational platform designed to streamline course curriculum creation, student progress monitoring, and interactive learning.',
      role: 'Full Stack Developer. Wrote Next.js frontend, database schemas using Prisma and PostgreSQL, and integrated interactive quiz logic.',
      challenges: 'Managing real-time progress updates across course paths. Implemented database triggers and transactional operations via Prisma to ensure reliable analytics sync.',
      tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
      category: 'Education',
      authorName: 'Michael Inoc',
      authorAvatar: 'M',
      webImage: tlc,
      mobileImage: null,
      tags: ['EDTECH PLATFORM', 'E-LEARNING', 'GAMIFIED LMS'],
      demoUrl: 'https://tlc-engine.vercel.app/',
      repoUrl: 'https://github.com/michael-031/my-portfolio.git',
      initialUpvotes: 7,
      screenshots: [tlc, tlcAbout, tlcFeature, tlcWhat]
    }
  ]

  const [projects, setProjects] = useState(initialProjectsList)
  const [upvotedState, setUpvotedState] = useState({})

  const handleUpvote = (projectId) => {
    setUpvotedState(prev => {
      const isUpvoted = !prev[projectId]
      setProjects(currentProjects =>
        currentProjects.map(proj => {
          if (proj.id === projectId) {
            return {
              ...proj,
              initialUpvotes: isUpvoted ? proj.initialUpvotes + 1 : proj.initialUpvotes - 1
            }
          }
          return proj
        })
      )
      return {
        ...prev,
        [projectId]: isUpvoted
      }
    })
  }

  // 3D Deck relative calculations
  let leftId, rightId
  if (centerId === 1) {
    leftId = 2
    rightId = 3
  } else if (centerId === 2) {
    leftId = 3
    rightId = 1
  } else {
    leftId = 1
    rightId = 2
  }

  const handleDeckCardClick = (project) => {
    if (centerId === project.id) {
      setSelectedProject(project);
    } else {
      setCenterId(project.id);
    }
  };

  return (
    <main className="theme-transition">
      {/* Intro Loader */}
      {loading && (
        <div className={`intro-loader ${loaderExit ? 'exit' : ''}`}>
          <div className="halftone-bg bg-halftone mask-radial opacity-40 absolute inset-0"></div>
          <div className="intro-loader-content relative z-10 flex flex-col items-center">
            <h1 className="font-display text-4xl mb-2 lowercase tracking-wider text-center animate-pulse">
              michael inoc
            </h1>
            <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
              portfolio index — loading
            </div>
            <div className="w-[120px] h-[1px] bg-gray-200 dark:bg-gray-800 mt-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-ink animate-loader-bar"></div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar Navigation */}
      <aside className="fixed-sidebar hidden lg:flex">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Michael portfolio logo" className="sidebar-logo" />
            <span className="font-semibold text-lg font-sans">Michael Inoc</span>
          </div>
          <div className="sidebar-divider"></div>
          <nav className="nav-links">
            <a 
              href="#hero" 
              onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
              className={`nav-item ${activeSection === 'hero' && !selectedProject ? 'active' : ''}`}
            >
              hero
            </a>
            <a 
              href="#tech-stack" 
              onClick={(e) => { e.preventDefault(); handleNavClick('tech-stack'); }}
              className={`nav-item ${activeSection === 'tech-stack' && !selectedProject ? 'active' : ''}`}
            >
              01 — stack
            </a>
            <a 
              href="#projects" 
              onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}
              className={`nav-item ${(activeSection === 'projects' || selectedProject) ? 'active' : ''}`}
            >
              02 — projects
            </a>
            <a 
              href="#about-me" 
              onClick={(e) => { e.preventDefault(); handleNavClick('about-me'); }}
              className={`nav-item ${activeSection === 'about-me' && !selectedProject ? 'active' : ''}`}
            >
              03 — about
            </a>
            <a 
              href="#contact-me" 
              onClick={(e) => { e.preventDefault(); handleNavClick('contact-me'); }}
              className={`nav-item ${activeSection === 'contact-me' && !selectedProject ? 'active' : ''}`}
            >
              04 — contact
            </a>
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          <button 
            onClick={toggleTheme}
            className="nav-item border border-gray-200 dark:border-gray-800 rounded px-3 py-1.5 text-center justify-center font-mono text-[10px] tracking-wider hover:bg-gray-50 dark:hover:bg-gray-900 transition-all cursor-pointer uppercase"
          >
            {theme === 'light' ? 'DARK MODE' : 'LIGHT MODE'}
          </button>
          <div className="sidebar-divider"></div>
          <div className="flex items-center gap-2 text-[10px] text-gray-400 dark:text-gray-500 font-mono uppercase tracking-wider">
            <span className="status-dot"></span>
            <span>available for work</span>
          </div>
        </div>
      </aside>

      {/* Mobile Header Bar */}
      <header className="mobile-top-bar lg:hidden">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Michael portfolio logo" className="sidebar-logo" />
          <span className="font-semibold font-sans">Michael Inoc</span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="font-mono text-[10px] uppercase border border-gray-200 dark:border-gray-800 rounded px-2 py-0.5"
          >
            {theme === 'light' ? 'DARK' : 'LIGHT'}
          </button>
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="font-mono text-[11px] uppercase tracking-wider bg-none border-none cursor-pointer"
            aria-label="Open navigation menu"
          >
            menu
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-overlay-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <button 
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 font-mono text-[11px] uppercase tracking-wider cursor-pointer border border-gray-200 dark:border-gray-800 rounded px-2.5 py-1"
        >
          close
        </button>
        <nav className="flex flex-col items-center gap-6 text-lg">
          <a 
            href="#hero" 
            onClick={() => handleNavClick('hero')}
            className={`nav-item ${activeSection === 'hero' && !selectedProject ? 'active' : ''}`}
          >
            hero
          </a>
          <a 
            href="#tech-stack" 
            onClick={() => handleNavClick('tech-stack')}
            className={`nav-item ${activeSection === 'tech-stack' && !selectedProject ? 'active' : ''}`}
          >
            01 — stack
          </a>
          <a 
            href="#projects" 
            onClick={() => handleNavClick('projects')}
            className={`nav-item ${(activeSection === 'projects' || selectedProject) ? 'active' : ''}`}
          >
            02 — projects
          </a>
          <a 
            href="#about-me" 
            onClick={() => handleNavClick('about-me')}
            className={`nav-item ${activeSection === 'about-me' && !selectedProject ? 'active' : ''}`}
          >
            03 — about
          </a>
          <a 
            href="#contact-me" 
            onClick={() => handleNavClick('contact-me')}
            className={`nav-item ${activeSection === 'contact-me' && !selectedProject ? 'active' : ''}`}
          >
            04 — contact
          </a>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="content-wrapper">
        {selectedProject ? (
          /* PROJECT DETAILS PAGE */
          <section className="section-block min-h-[90vh] animate-fade-up">
            <div className="halftone-bg bg-halftone mask-radial opacity-40 absolute inset-0"></div>
            <div className="column-wide relative z-1">
              <button 
                onClick={() => setSelectedProject(null)}
                className="font-mono text-[10px] uppercase tracking-widest text-gray-500 hover:text-ink transition-colors mb-6 cursor-pointer border-none bg-transparent p-0"
              >
                ← back to projects
              </button>

              <h1 className="text-display mb-10 lowercase">{selectedProject.title}</h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Left column: Mockup Frame and project link */}
                <div className="flex flex-col gap-6">
                  <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-[#0d1117] p-4 flex items-center justify-center shadow-lg">
                    <div className="rounded border border-[#333] bg-[#1d1d1d] p-[3px] w-full shadow-2xl">
                      <div className="mb-1 flex items-center gap-0.5 scale-75 origin-left">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]"></span>
                        <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e]"></span>
                        <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]"></span>
                      </div>
                      <img
                        src={selectedProject.webImage}
                        alt={`${selectedProject.title} screenshot`}
                        className="w-full rounded-sm object-cover"
                        style={{ minHeight: '180px' }}
                      />
                    </div>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-gray-50 dark:bg-gray-900 text-center">
                    <span className="micro-label">Project Link</span>
                    <div className="mt-2">
                      <a 
                        href={selectedProject.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bryl-link font-sans text-sm font-semibold tracking-wide"
                      >
                        {selectedProject.demoUrl.replace(/^https?:\/\//, '')} ↗
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right column: Content Details */}
                <div className="flex flex-col gap-8">
                  <div>
                    <span className="micro-label">Description</span>
                    <p className="font-sans text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
                    <span className="micro-label">Role</span>
                    <p className="font-sans text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                      {selectedProject.role}
                    </p>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
                    <span className="micro-label">Challenges and Solution</span>
                    <p className="font-sans text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                      {selectedProject.challenges}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick UI Section */}
              {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                <div className="border-t border-gray-200 dark:border-gray-800 mt-16 pt-10">
                  <span className="micro-label mb-6 block">Quick UI Gallery</span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {selectedProject.screenshots.map((src, index) => (
                      <div key={index} className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900 group cursor-pointer">
                        <img 
                          src={src} 
                          alt="Gallery screenshot" 
                          className="w-full h-24 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                          onClick={() => window.open(src, '_blank')}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        ) : (
          /* MAIN SITE INDEX PAGES */
          <>
            {/* HERO SECTION */}
            <section id="hero" className="section-block min-h-[85vh] flex items-center justify-center overflow-hidden">
              <div className="halftone-bg bg-halftone mask-radial opacity-60 absolute inset-0"></div>
              <div className="column-narrow w-full animate-fade-up stagger-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="hero-portrait-card">
                    <div className="halftone-bg bg-halftone mask-radial opacity-50 absolute inset-0"></div>
                    <img src={profile} alt="Portrait of Michael Inoc" className="hero-portrait-img relative z-1" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h1 className="text-display">
                      hello,<br />
                      i'm michael
                    </h1>
                    <p className="font-sans text-sm text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
                      Let's build and level up together. I am a third-year Computer Engineering student at CIT-U, constructing lightweight, tactile, and highly functional web solutions.
                    </p>
                    <div className="hero-details-row">
                      <div className="flex flex-col">
                        <span className="micro-label">Education</span>
                        <span className="text-sm font-sans mt-1 font-semibold">Third-Year Student</span>
                        <span className="text-[11px] text-gray-500 dark:text-gray-400 font-sans">Computer Engineering — CIT-U</span>
                      </div>
                      <div className="social-links-grid">
                        <span className="micro-label">Connect</span>
                        <a href="https://github.com/michael-031" target="_blank" rel="noopener noreferrer" className="social-link-item">
                          <img src={github} alt="GitHub" />
                          <span>github.com/michael-031 ↗</span>
                        </a>
                        <a href="https://www.facebook.com/michaelzz450" target="_blank" rel="noopener noreferrer" className="social-link-item">
                          <img src={fb} alt="Facebook" />
                          <span>facebook.com/michaelzz450 ↗</span>
                        </a>
                        <a href="https://www.linkedin.com/in/john-michael-inoc-bb288326b/" target="_blank" rel="noopener noreferrer" className="social-link-item">
                          <img src={linkedin} alt="LinkedIn" />
                          <span>linkedin.com/in/michael-inoc ↗</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* TECH STACK SECTION */}
            <section id="tech-stack" className="section-block">
              <div className="halftone-bg bg-halftone mask-linear-b opacity-40 absolute inset-0"></div>
              <div className="column-narrow animate-fade-up stagger-2">
                <span className="text-section-header">01 — stack</span>
                <h2 className="text-2xl font-bold font-sans tracking-tight mb-2">Core Technologies</h2>
                <p className="text-gray-500 dark:text-gray-400 font-sans mb-8">
                  A carefully selected toolkit of modern libraries, styling technologies, frameworks, and tools that I leverage for active projects.
                </p>
              </div>
              
              <div className="tech-logo-loop mt-4">
                <div className="tech-logo-track">
                  {loopedTechStack.map((tech, index) => (
                    <div className="tech-logo-item" key={`${tech.name}-${index}`}>
                      <img src={tech.icon} alt={tech.name} />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="column-narrow mt-12 animate-fade-up stagger-3">
                <h3 className="micro-label mb-4 text-center">Other Technologies</h3>
                <div className="flex justify-center items-center gap-8 flex-wrap">
                  {otherTechStack.map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center gap-2 group">
                      <img 
                        src={tech.icon} 
                        alt={tech.name} 
                        className="h-8 w-8 object-contain filter grayscale opacity-75 group-hover:opacity-100 group-hover:grayscale-0 dark:invert transition-all duration-300"
                      />
                      <span className="micro-label-tertiary opacity-0 group-hover:opacity-100 transition-opacity">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* PROJECTS SECTION */}
            <section id="projects" className="section-block">
              <div className="halftone-bg bg-halftone mask-radial opacity-30 absolute inset-0"></div>
              <div className="column-wide animate-fade-up stagger-3">
                <span className="text-section-header">02 — projects</span>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold font-sans tracking-tight mb-2">Projects</h2>
                  <p className="text-gray-500 dark:text-gray-400 font-sans max-w-xl">
                    A collection of responsive layouts, real-time developer integrations, and interactive platforms. Click any card to view design details.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project) => (
                    <article 
                      key={project.id} 
                      className="builder-card cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      <div>
                        <div className="builder-card-top">
                          <div className="builder-card-icon-container">
                            {project.webImage ? (
                              <img src={react} alt="Tech icon" />
                            ) : (
                              project.title.charAt(0)
                            )}
                          </div>
                          <div
                            className={`builder-card-upvote ${upvotedState[project.id] ? "upvoted" : ""}`}
                            onClick={(e) => { e.stopPropagation(); handleUpvote(project.id); }}
                          >
                            <svg viewBox="0 0 24 24">
                              <path d="M12 4v16M12 4l-6 6M12 4l6 6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>{project.initialUpvotes}</span>
                          </div>
                        </div>

                        <h3 className="builder-card-title">{project.title}</h3>
                        <p className="builder-card-tagline">{project.tagline}</p>
                      </div>

                      <div>
                        {/* Custom responsive browser/laptop/mobile preview if webImage present */}
                        {project.webImage ? (
                          <div className="relative h-[160px] w-full mb-4 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center p-2">
                            <div className="relative w-full h-full flex items-center justify-center scale-[0.82] md:scale-[0.88]">
                              
                              {/* Tablet/Desktop (Back Left) */}
                              <div className="absolute left-[3%] top-[5%] w-[48%] aspect-[16/10] bg-[#1e1e22] rounded-[3px] border-[2px] border-[#0a0a0a] shadow-md opacity-30 transform -rotate-1 z-0 overflow-hidden">
                                <img 
                                  src={project.screenshots && project.screenshots[2] ? project.screenshots[2] : project.webImage} 
                                  alt="Tablet view" 
                                  className="w-full h-full object-cover" 
                                />
                              </div>

                              {/* Laptop (Center) */}
                              <div className="relative w-[68%] aspect-[16/10] flex flex-col items-center z-10">
                                <div className="w-full h-[95%] bg-[#1e1e22] rounded-t-[4px] border-[3px] border-[#0a0a0a] border-b-0 overflow-hidden relative">
                                  <img 
                                    src={project.webImage} 
                                    alt="Laptop view" 
                                    className="w-full h-full object-cover" 
                                  />
                                </div>
                                <div className="w-[114%] h-[5%] bg-[#d4d4d4] dark:bg-[#3a3a42] rounded-b border-t border-gray-300 dark:border-gray-700 shadow-md"></div>
                              </div>

                              {/* Mobile Phone (Front Right) */}
                              <div className="absolute right-[3%] bottom-[5%] w-[18%] aspect-[9/16] bg-[#0a0a0a] rounded-[5px] border-[2px] border-[#0a0a0a] shadow-2xl z-20 overflow-hidden">
                                <img 
                                  src={project.mobileImage ? project.mobileImage : (project.screenshots && project.screenshots[1] ? project.screenshots[1] : project.webImage)} 
                                  alt="Mobile view" 
                                  className="w-full h-full object-cover" 
                                />
                              </div>

                            </div>
                          </div>
                        ) : (
                          <div className="h-[160px] w-full mb-4 flex items-center justify-center border border-dashed border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-400 font-mono text-[9px] text-center px-4 uppercase tracking-wider">
                            interactive assets coming soon
                          </div>
                        )}

                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.tech.map((t) => (
                            <span key={t} className="project-tag">
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="builder-card-footer">
                          <span className="builder-card-category">{project.category}</span>
                          <div className="builder-card-author">
                            <span className="builder-card-avatar">{project.authorAvatar}</span>
                            <span className="builder-card-author-name">{project.authorName}</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            {/* ABOUT ME SECTION */}
            <section id="about-me" className="section-block">
              <div className="halftone-bg bg-halftone mask-linear-b opacity-40 absolute inset-0"></div>
              <div className="column-narrow w-full animate-fade-up stagger-4">
                <span className="text-section-header">03 — about</span>
                
                <div className="about-carousel" aria-label="About me photo carousel">
                  <button
                    type="button"
                    className="about-arrow"
                    onClick={goToPrevious}
                    aria-label="Show previous image"
                  >
                    &#10094;
                  </button>

                  <div className="about-carousel-stage relative">
                    {aboutGallery.map((image, index) => (
                      <img
                        key={image.alt}
                        src={image.src}
                        alt={image.alt}
                        className={`about-slide absolute inset-0 w-full h-full object-cover transition-all duration-500 ${index === currentSlide ? 'about-slide-active' : ''}`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    className="about-arrow"
                    onClick={goToNext}
                    aria-label="Show next image"
                  >
                    &#10095;
                  </button>
                </div>

                <div className="about-dots" aria-label="Carousel pagination">
                  {aboutGallery.map((image, index) => (
                    <button
                      key={`${image.alt}-dot`}
                      type="button"
                      onClick={() => goToSlide(index)}
                      className={`about-dot ${index === currentSlide ? 'about-dot-active' : ''}`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>

                <p className="about-slogan">"Leveling up in every mile and every line."</p>
              </div>
            </section>

            {/* CONTACT ME SECTION */}
            <section id="contact-me" className="section-block">
              <div className="halftone-bg bg-halftone mask-radial opacity-30 absolute inset-0"></div>
              <div className="column-narrow w-full animate-fade-up stagger-5">
                <span className="text-section-header">04 — contact</span>
                
                <div className="flex items-center justify-between gap-4 mb-8">
                  <h2 className="text-2xl font-bold font-sans tracking-tight">Let's Connect</h2>
                  <img src={logo} alt="Michael logo" className="sidebar-logo h-8" />
                </div>

                <div className="contact-me-grid">
                  <div className="contact-link-container">
                    <a
                      href="https://github.com/michael-031"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link-card"
                    >
                      <img src={github} alt="GitHub" />
                      <span>github.com/michael-031 ↗</span>
                    </a>

                    <a
                      href="https://www.facebook.com/michaelzz450"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link-card"
                    >
                      <img src={fb} alt="Facebook" />
                      <span>facebook.com/michaelzz450 ↗</span>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/john-michael-inoc-bb288326b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link-card"
                    >
                      <img src={linkedin} alt="LinkedIn" />
                      <span>linkedin.com/in/michael-inoc ↗</span>
                    </a>

                    <a href="tel:+639179523690" className="contact-link-card">
                      <div className="w-6 h-6 border border-gray-300 dark:border-gray-700 rounded-full flex items-center justify-center font-mono text-[9px] font-bold">TEL</div>
                      <span>09179523690</span>
                    </a>
                  </div>

                  <div className="contact-actions-panel">
                    <div className="contact-action-box">
                      <p className="contact-action-title">Portfolio Repository</p>
                      <a
                        href="https://github.com/michael-031/my-portfolio.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bryl-link font-mono text-[10px] uppercase tracking-wider"
                      >
                        view source repository ↗
                      </a>
                    </div>

                    <div className="contact-action-box">
                      <p className="contact-action-title">Resume</p>
                      <a
                        href="https://drive.google.com/drive/folders/1cICwQ2tPA8Ejfar6_dhrS7QN4833_SL8?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bryl-link font-mono text-[10px] uppercase tracking-wider"
                      >
                        download my resume folder ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  )
}

export default App
