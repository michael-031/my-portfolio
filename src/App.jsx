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
  const [centerId, setCenterId] = useState(1)

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

  return (
    <main>
      <section className="bg-white-800 h-[64px] flex justify-between items-center px-16 shadow-md">
        <img src={logo} alt="Michael portfolio logo" className="h-[32px] object-cover" />
        <div className="buttons">
          <a href="#about-me" className="text-black px-4 h-full inline-flex items-center">About Me</a>
          <a href="#projects" className="text-black px-4 h-full inline-flex items-center">My Projects</a>
          <a href="#tech-stack" className="text-black px-4 h-full inline-flex items-center">My Designs</a>
          <a href="#contact-me" className="text-black px-4 h-full inline-flex items-center">Contact Me</a>
        </div>
      </section>

      <section id="hero" className = "flex flex-wrap h-[765px] bg-white-500">
        <div
          id="name-card"
          className="z-1 h-[20rem] w-[980px] absolute top-[10rem] left-[33rem] bg-white rounded-sm shadow-xl px-16 py-10"
        ></div>
          <div id="name" className="z-1 bg-[#fffff] absolute top-[10rem] left-[35rem] px-16 flex-col h-[200px] ">
          <SplitText delay={50} duration={1}>
            <h1
              className="text-6xl font-bold mt-8"
              style={{ fontFamily: "Century Gothic, sans-serif" }}
            >
              <span data-split-part className="text-[#322323] inline-block">
                Hello, <br />
                I'm
              </span>{""}
              <span data-split-part className="inline-block text-8xl">Michael</span>
            </h1>
          </SplitText>
            <p className='text-2xl ml-1 mt-8'>
              Let's build and level up together.
            </p>
          </div>
          <div
            id="education"
            className="flex-row justify-center gap-40 z-0 h-[10rem] w-[980px] absolute top-[31rem] left-[33rem] bg-white rounded-sm shadow-xl px-16 py-10 flex gap-8 items-center"
          >
            <div className="flex flex-col ml-10">
              <span className="text-xl">Education</span>
              <span className='mt-2'>Third-Year Student</span>
              <span>Bachelor of Science in Computer Engineering - CIT-U</span>
            </div>
            <div className="flex flex-col gap-2 mr-16">
            <a
              href="https://github.com/michael-031"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-70"
            >
              <img src={github} alt="GitHub" className="h-8 w-8" />
              <span className="text-black text-[12px]">github.com/michael-031</span>
            </a>

            <a
              href="https://www.facebook.com/michaelzz450"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-70"
            >
              <img src={fb} alt="Facebook" className="h-8 w-8" />
              <span className="text-black text-[12px]">facebook.com/michaelzz450</span>
            </a>

            <a
              href="https://www.linkedin.com/in/john-michael-inoc-bb288326b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-70"
            >
              <img src={linkedin} alt="LinkedIn" className="h-8 w-8" />
              <span className="text-black text-[12px]">linkedin.com/in/michael-inoc</span>
            </a>
            </div>

            
          </div>
          <div
            id="my-profile"
            className="rounded-sm bg-[#9BB193] absolute top-[7rem] left-[0rem] px-16 flex-col h-[500px] relative shadow-md"
          >
            {/* Circular lines */}
            <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/40"></div>

            <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20"></div>

            <img
              src={profile}
              alt="Portrait of Michael Inoc"
              className="h-[500px] object-cover translate-y-30"
            />

            <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent translate-y-30"></div>
          </div>
        
      </section>

      <section className='tech-stack'>
        <div id="tech-stack" className='flex justify-center'>
          <h1
              className="text-4xl font-bold mt-8"
              style={{ fontFamily: "Century Gothic, sans-serif" }}
            >
              <span data-split-part className="text-[#322323] inline-block">
                Tech Stack
              </span>{""}
              
            </h1>
          </div>

          <div className='tech-logo-loop mt-8' aria-label="Looping tech stack logos">
            <div className='tech-logo-track'>
              {loopedTechStack.map((tech, index) => (
                <div className='tech-logo-item' key={`${tech.name}-${index}`}>
                  <img src={tech.icon} alt={tech.name} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div id='other-tech-stack' className='flex flex-col items-center mt-16'>
            <h1
              className="text-xl font-bold mb-6"
              style={{ fontFamily: "Century Gothic, sans-serif" }}
            >
              <span className="text-[#322323] inline-block">
                Other Tech Stack
              </span>
            </h1>

            <div className='flex justify-center items-center gap-6 flex-wrap'>
              {otherTechStack.map((tech) => (
                <img
                  key={tech.name}
                  src={tech.icon}
                  alt={tech.name}
                  className='h-10 w-10'
                />
              ))}
            </div>
          </div>
      </section>

      <section id="projects" className="min-h-[600px] bg-gradient-to-b from-white to-[#f7faf7] mt-16 px-8 pb-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="text-[#556b4f] uppercase tracking-wider text-sm font-bold font-sans">02 — Projects</span>
          <h1
            className="text-4xl font-bold mt-2 mb-3"
            style={{ fontFamily: "Century Gothic, sans-serif" }}
          >
            Featured Projects Showcase
          </h1>
          <p className="text-gray-500 font-sans max-w-xl">
            Explore interactive concepts and live deployments. Click any card in the stack below to focus, or browse the grid.
          </p>
        </div>

        {/* 3D Stacked Card Deck (Reference 3 style) */}
        <div className="project-deck-container" aria-label="3D stacked project deck">
          {projects.map((project) => {
            let positionClass = "card-center";
            if (project.id === leftId) positionClass = "card-left";
            if (project.id === rightId) positionClass = "card-right";
            
            return (
              <div
                key={`deck-${project.id}`}
                className={`deck-card ${positionClass}`}
                onClick={() => setCenterId(project.id)}
              >
                <div>
                  <div className="deck-card-tags">
                    <span className="deck-card-tag black-tag">{project.tags[0]}</span>
                    {project.tags.slice(1).map((t, idx) => (
                      <span key={idx} className="deck-card-tag outline-tag">{t}</span>
                    ))}
                  </div>
                  
                  <div className="deck-card-header">
                    <div className="deck-card-icon">
                      {project.webImage ? (
                        <img src={react} alt="App icon" className="w-7 h-7 object-contain" />
                      ) : (
                        <span className="text-lg font-bold text-[#556b4f]">
                          {project.title.charAt(0)}
                        </span>
                      )}
                    </div>
                    <h3 className="deck-card-title">{project.title}</h3>
                  </div>
                  
                  <p className="deck-card-description">{project.tagline}</p>
                </div>

                <div>
                  {project.id === 1 && (
                    <div className="flex gap-2 justify-center py-2 bg-slate-50 rounded-lg border border-gray-100 mb-2">
                      <span className="text-xs text-gray-500">Includes Web & Mobile Previews</span>
                    </div>
                  )}

                  <div className="deck-card-store-badges">
                    <a 
                      href={project.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="deck-store-badge flex-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                      <span>Repository</span>
                    </a>
                    <a 
                      href={project.demoUrl === "#" ? "#projects" : project.demoUrl} 
                      className="deck-store-badge flex-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Projects Grid (Reference 1 style) */}
        <div className="flex justify-between items-center max-w-6xl mx-auto mt-16 mb-6">
          <h2 className="text-2xl font-bold font-sans text-[#322323]">Fresh from Michael's Desk</h2>
          <a href="#contact-me" className="text-[#556b4f] hover:underline font-bold text-sm flex items-center gap-1">
            Let's collaborate <span className="text-lg">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {projects.map((project) => (
            <article key={project.id} className="builder-card">
              <div>
                <div className="builder-card-top">
                  <div className={`builder-card-icon-container ${project.webImage ? "" : "placeholder"}`}>
                    {project.webImage ? (
                      <img src={react} alt="Tech icon" />
                    ) : (
                      project.title.charAt(0)
                    )}
                  </div>
                  <div 
                    className={`builder-card-upvote ${upvotedState[project.id] ? "upvoted" : ""}`}
                    onClick={() => handleUpvote(project.id)}
                  >
                    <svg viewBox="0 0 24 24">
                      <path d="M12 4v16M12 4l-6 6M12 4l6 6" strokeLinecap="round" strokeLinejoin="round"/>
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
            </article>
          ))}
        </div>
      </section>

      <section id='about-me' className='about-me-section'>
        <div className='about-me-shell'>
          <h2 className='about-me-title'>About Me</h2>

          <div className='about-carousel' aria-label='About me photo carousel'>
            <button
              type='button'
              className='about-arrow about-arrow-left'
              onClick={goToPrevious}
              aria-label='Show previous image'
            >
              &#10094;
            </button>

            <div className='about-carousel-stage'>
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
              &#10095;
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

          <p className='about-slogan'>Leveling up in every mile and every lines.</p>
        </div>
      </section>

      <section id='contact-me' className='contact-me-section'>
        <div className='contact-me-shell'>
          <div className='contact-me-header'>
            <h2 className='contact-me-title'>Contact Me</h2>
            <img src={logo} alt='Michael logo' className='contact-me-logo' />
          </div>

          <div className='contact-me-grid'>
            <div className='contact-me-links'>
              <a
                href='https://github.com/michael-031'
                target='_blank'
                rel='noopener noreferrer'
                className='contact-link'
              >
                <img src={github} alt='GitHub' />
                <span>github.com/michael-031</span>
              </a>

              <a
                href='https://www.facebook.com/michaelzz450'
                target='_blank'
                rel='noopener noreferrer'
                className='contact-link'
              >
                <img src={fb} alt='Facebook' />
                <span>facebook.com/michaelzz450</span>
              </a>

              <a
                href='https://www.linkedin.com/in/john-michael-inoc-bb288326b/'
                target='_blank'
                rel='noopener noreferrer'
                className='contact-link'
              >
                <img src={linkedin} alt='LinkedIn' />
                <span>linkedin.com/in/john-michael-inoc-bb288326b</span>
              </a>

              <a href='tel:+639179523690' className='contact-link'>
                <span className='contact-icon-text'>TEL</span>
                <span>09179523690</span>
              </a>
            </div>

            <div className='contact-me-actions'>
              <p className='contact-label'>Portfolio Repository</p>
              <a
                href='https://github.com/michael-031/my-portfolio.git'
                target='_blank'
                rel='noopener noreferrer'
                className='contact-action-link'
              >
                github.com/michael-031/my-portfolio.git
              </a>

              <p className='contact-label'>Resume</p>
              <a
                href='https://drive.google.com/drive/folders/1cICwQ2tPA8Ejfar6_dhrS7QN4833_SL8?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'
                className='contact-action-link'
              >
                View my resume folder on Google Drive
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App




