import { useEffect, useState } from 'react'
import profile from './assets/profile.png'
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
import run from './assets/About Me/my_pitik.jpg'
import run1 from './assets/About Me/10k_finish.jpg'
import run2 from './assets/About Me/10k_with_divan.jpg'
import hike from './assets/About Me/hike.jpg'
import hike1 from './assets/About Me/hike2.jpg'
import githubSvgString from './assets/github-contributions.svg?raw'
import { GithubLogo, LinkedinLogo, FacebookLogo, GraduationCap, ArrowRight, Atom, CaretLeft, CaretRight, EnvelopeSimple, Phone } from "@phosphor-icons/react";
import { motion } from "framer-motion";

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
    },
    {
      id: 2,
      title: 'BatasPH.ai',
      tagline: 'Batas ng Pilipinas, Naiintindihan ng Lahat.',
      description: 'An AI-powered legal assistant project designed to help Filipino citizens understand local laws and regulations using natural language queries.',
      tech: ['Python', 'Next.js', 'FastAPI', 'Gemini API'],
      category: 'AI',
      authorName: 'Michael Inoc',
      authorAvatar: 'M',
      webImage: null,
      mobileImage: null,
      tags: ['#1 AI APP', 'LEGAL TECH', 'UPCOMING TEMPLATE'],
      demoUrl: '#',
      repoUrl: '#',
      initialUpvotes: 18,
    },
    {
      id: 3,
      title: 'Gorun Tracker',
      tagline: 'An offline-first runs and activity tracker.',
      description: 'A privacy-focused offline fitness tracker that plots routes, monitors pacing, and logs workouts locally in indexedDB.',
      tech: ['TypeScript', 'React Native', 'Expo', 'Leaflet'],
      category: 'Health',
      authorName: 'Michael Inoc',
      authorAvatar: 'M',
      webImage: null,
      mobileImage: null,
      tags: ['FITNESS APP', 'OFFLINE FIRST', 'GEOLOCATION'],
      demoUrl: '#',
      repoUrl: '#',
      initialUpvotes: 7,
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

  return (
    <main>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-100 flex justify-center h-[72px] transition-all duration-300">
        <div className="w-full max-w-[1440px] flex justify-between items-center px-8 md:px-16 h-full">
          <img src={logo} alt="Michael portfolio logo" className="h-[32px] object-contain ml-3" />
          <nav className="flex gap-2">
            <a href="#about-me" className="nav-link px-4 h-full inline-flex items-center">About Me</a>
            <a href="#projects" className="nav-link px-4 h-full inline-flex items-center">Projects</a>
            <a href="#tech-stack" className="nav-link px-4 h-full inline-flex items-center">Stack</a>
            <a href="#contact-me" className="nav-link px-4 h-full inline-flex items-center">Contact</a>
          </nav>
        </div>
      </header>

      <section id="hero" className="min-h-[100dvh] flex items-center justify-center w-full px-4 md:px-8 py-16 lg:py-24">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Intro & Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            <span className="hero-eyebrow">
              Michael Inoc // Computer Engineering Student
            </span>
            <SplitText delay={100} duration={1}>
              <h1 className="hero-title text-5xl md:text-7xl font-bold mt-2 mb-6">
                Hello, <br />I'm <span className="text-[#3d5945]">Michael</span>
              </h1>
            </SplitText>
            <p className="hero-description text-xl md:text-2xl mb-8 font-sans font-light">
              Let's build and level up together. Crafting premium web applications, interactive interfaces, and robust systems.
            </p>
            
            <div className="flex flex-wrap items-center gap-6">
              <a href="#projects" className="hero-btn-primary group">
                View My Work
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/michael-031"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  title="GitHub Profile"
                >
                  <GithubLogo size={22} weight="bold" />
                </a>
                <a
                  href="https://www.linkedin.com/in/john-michael-inoc-bb288326b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  title="LinkedIn Profile"
                >
                  <LinkedinLogo size={22} weight="bold" />
                </a>
                <a
                  href="https://www.facebook.com/michaelzz450"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  title="Facebook Profile"
                >
                  <FacebookLogo size={22} weight="bold" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image and Context Badges */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-6 w-full max-w-md mx-auto lg:max-w-none"
          >
            {/* Profile Frame with glass/border and custom shape */}
            <div className="profile-frame aspect-[4/5] w-full relative">
              {/* Ambient Background Circles */}
              <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/30 z-10 pointer-events-none"></div>
              <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 z-10 pointer-events-none"></div>
              
              <img
                src={profile}
                alt="Portrait of Michael Inoc"
                className="w-full h-full object-cover"
              />
              {/* bottom gradient fade */}
              <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[#9BB193]/60 to-transparent pointer-events-none"></div>
            </div>

            {/* Education Context Card */}
            <div className="education-card p-6 flex items-start gap-4">
              <div className="p-3 bg-[#eef3ee] rounded-xl text-[#3d5945] flex-shrink-0">
                <GraduationCap size={28} weight="duotone" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 font-sans">Education</h4>
                <p className="text-xs text-[#556b4f] font-mono mt-0.5">Third-Year Student</p>
                <p className="text-sm text-gray-600 mt-1 font-sans">BS in Computer Engineering — CIT-U</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id='tech-stack' className='py-24 bg-white mt-12 border-t border-gray-50'>
        <div className='max-w-6xl mx-auto px-4 md:px-8'>
          <div className="flex flex-col items-start mb-12">
            <span className="text-[#556b4f] uppercase tracking-wider text-xs font-bold font-mono mb-2">01 — Expertise</span>
            <h2
              className="text-4xl font-bold text-[#1a1515] font-sans"
              style={{ fontFamily: "Century Gothic, sans-serif" }}
            >
              My stack
            </h2>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.04
                }
              }
            }}
            className='tech-grid'
          >
            {[...techStack, ...otherTechStack].map((tech) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
                }}
                key={tech.name}
                className='tech-card'
                title={tech.name}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                />
                <span className="tech-name">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="projects" className="min-h-[600px] bg-gradient-to-b from-white to-[#f7faf7] mt-16 px-8 pb-24">
        <div className="flex justify-between items-end max-w-6xl mx-auto mb-12 border-b border-gray-100 pb-6">
          <div className="flex flex-col items-start">
            <span className="text-[#556b4f] uppercase tracking-wider text-xs font-bold font-mono mb-2">02 — Projects</span>
            <h1
              className="text-4xl font-bold text-[#1a1515]"
              style={{ fontFamily: "Century Gothic, sans-serif" }}
            >
              Fresh from Michael's Desk
            </h1>
          </div>
          <a href="#contact-me" className="text-[#556b4f] hover:underline font-bold text-sm flex items-center gap-1 mb-1 transition-all duration-300">
            Let's collaborate <ArrowRight size={16} />
          </a>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
        >
          {projects.map((project) => (
            <motion.article 
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              key={project.id} 
              className="builder-card"
            >
              <div>
                <div className="builder-card-top">
                  <div className={`builder-card-icon-container ${project.webImage ? "" : "placeholder"}`}>
                    {project.webImage ? (
                      <Atom size={24} weight="duotone" className="text-[#3d5945]" />
                    ) : (
                      project.title.charAt(0)
                    )}
                  </div>
                  <div
                    className={`builder-card-upvote ${upvotedState[project.id] ? "upvoted" : ""}`}
                    onClick={() => handleUpvote(project.id)}
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
                {/* Custom browser layout preview for Lemivon if present */}
                {project.id === 1 && (
                  <div className="relative h-[160px] w-full mb-4 overflow-hidden rounded-lg bg-gray-50 border border-gray-100 p-2">
                    <div className="absolute left-1 top-1 w-[82%]">
                      <div className="rounded-lg border border-[#333] bg-[#1d1d1d] p-[2px] shadow-sm">
                        <div className="mb-0.5 flex items-center gap-0.5 scale-75 origin-left">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]"></span>
                          <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e]"></span>
                          <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]"></span>
                        </div>
                        <img
                          src={project.webImage}
                          alt={`${project.title} web UI`}
                          className="aspect-[16/10] w-full rounded-sm border border-[#2e2e2e] bg-[#dfe5ea] object-contain"
                        />
                      </div>
                    </div>

                    <div className="absolute bottom-1 right-1 w-[26%] max-w-[80px] z-10">
                      <div className="rounded-xl border border-[#333] bg-[#111] p-[2px] shadow-md">
                        <div className="mx-auto mb-0.5 h-0.5 w-4 rounded-full bg-[#2f2f2f]"></div>
                        <img
                          src={project.mobileImage}
                          alt={`${project.title} mobile UI`}
                          className="aspect-[9/16] w-full rounded-[0.5rem] border border-[#2e2e2e] bg-[#dfe5ea] object-contain"
                        />
                        <div className="mx-auto mt-0.5 h-0.5 w-3 rounded-full bg-[#2f2f2f]"></div>
                      </div>
                    </div>
                  </div>
                )}

                {project.id !== 1 && (
                  <div className="h-[160px] w-full mb-4 flex items-center justify-center border border-dashed border-gray-200 rounded-lg bg-gray-50 text-gray-400 font-sans text-xs text-center px-4">
                    Interactive previews and assets will be uploaded upon development
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
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
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section id='about-me' className='about-me-section py-24 bg-gradient-to-b from-[#f7faf7] to-[#eef3ee]'>
        <div className='about-me-shell max-w-6xl mx-auto px-4 md:px-8'>
          <div className="flex flex-col items-center mb-12 text-center">
            <span className="text-[#556b4f] uppercase tracking-wider text-xs font-bold font-mono mb-2">03 — Story</span>
            <h2 className='about-me-title text-4xl font-bold text-[#1a1515] font-sans' style={{ fontFamily: "Century Gothic, sans-serif" }}>About Me</h2>
          </div>

          <div className='about-carousel relative' aria-label='About me photo carousel'>
            <button
              type='button'
              className='about-arrow about-arrow-left'
              onClick={goToPrevious}
              aria-label='Show previous image'
            >
              <CaretLeft size={20} weight="bold" />
            </button>

            <div className='about-carousel-stage rounded-2xl overflow-hidden shadow-lg border border-[#d3ddd3]'>
              {aboutGallery.map((image, index) => (
                <img
                  key={image.alt}
                  src={image.src}
                  alt={image.alt}
                  className={`about-slide ${index === currentSlide ? 'about-slide-active' : ''}`}
                />
              ))}
            </div>

            <button
              type='button'
              className='about-arrow about-arrow-right'
              onClick={goToNext}
              aria-label='Show next image'
            >
              <CaretRight size={20} weight="bold" />
            </button>
          </div>

          <div className='about-dots' aria-label='Carousel pagination'>
            {aboutGallery.map((image, index) => (
              <button
                key={`${image.alt}-dot`}
                type='button'
                onClick={() => goToSlide(index)}
                className={`about-dot ${index === currentSlide ? 'about-dot-active' : ''}`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          <p className='about-slogan mt-8 font-sans font-medium text-lg text-center text-[#3d5945]'>Leveling up in every mile and every line.</p>
        </div>
      </section>

      <section id='contact-me' className='py-24 bg-white border-t border-gray-100'>
        <div className='max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center'>
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="text-[#556b4f] uppercase tracking-wider text-xs font-bold font-mono mb-2">04 — Contact</span>
            <h2 className='text-4xl font-bold mb-6 text-[#1a1515] font-sans' style={{ fontFamily: "Century Gothic, sans-serif" }}>
              Let's connect
            </h2>
            <p className="text-gray-600 mb-8 font-sans leading-relaxed">
              If you have an idea, want to collaborate, or just want to chat about code and computer engineering, drop me a message.
            </p>

            <div className="flex flex-col gap-4 w-full">
              <a
                href='mailto:inoc.johnmichael@gmail.com'
                className='flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-[#3d5945] transition-colors font-sans'
              >
                <EnvelopeSimple size={24} weight="duotone" className="text-[#3d5945]" />
                inocjohnmichael@gmail.com
              </a>
              <a
                href='tel:+639179523690'
                className='flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-[#3d5945] transition-colors font-sans'
              >
                <Phone size={24} weight="duotone" className="text-[#3d5945]" />
                +63 917 952 3690
              </a>
            </div>

            <div className='flex gap-6 items-center mt-10 border-t border-gray-100 pt-6 w-full'>
              <a href='https://www.linkedin.com/in/john-michael-inoc-bb288326b/' target='_blank' rel='noopener noreferrer' className='footer-link'>LinkedIn</a>
              <span className='text-gray-300'>•</span>
              <a href='https://www.facebook.com/michaelzz450' target='_blank' rel='noopener noreferrer' className='footer-link'>Facebook</a>
              <span className='text-gray-300'>•</span>
              <a href='https://github.com/michael-031' target='_blank' rel='noopener noreferrer' className='footer-link'>GitHub</a>
            </div>
          </div>

          {/* Right Column: Contributions Card */}
          <div className="lg:col-span-7 w-full">
            <div className="contributions-card p-6 md:p-8">
              <h4 className="text-sm font-semibold text-gray-900 font-sans mb-6 flex items-center gap-2">
                <Atom size={20} className="text-[#3d5945]" />
                GitHub Contributions
              </h4>
              <a
                href='https://github.com/michael-031'
                target='_blank'
                rel='noopener noreferrer'
                className='block max-w-full overflow-x-auto w-full'
                dangerouslySetInnerHTML={{ __html: githubSvgString }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App




