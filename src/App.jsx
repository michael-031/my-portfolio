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
  const projectSlots = [
    {
      id: 1,
      title: 'Lemivon',
      description: 'A UI showcase for Lemivon with dedicated web and mobile previews.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      webImage: lemivon,
      mobileImage: lemivon_mobile,
    },
    ...Array.from({ length: 0 }, (_, index) => ({
      id: index + 2,
      title: `Project ${index + 2}`,
      description: 'Project details coming soon: summary, stack, and links.',
      tech: ['Tech 1', 'Tech 2', 'Tech 3'],
      webImage: null,
      mobileImage: null,
    })),
  ]

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

      <section id="projects" className='min-h-[500px] bg-white-500 mt-16 px-8 pb-16'>
        <div className='flex justify-center'>
          <h1
              className="text-4xl font-bold mt-8"
              style={{ fontFamily: "Century Gothic, sans-serif" }}
            >
              <span data-split-part className="text-[#322323] inline-block">
                Featured Projects
              </span>{""}
            </h1>
          </div>

          <div className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto'>
            {projectSlots.map((project) => (
              <article
                key={project.id}
                className='project-card-hover rounded-xl border border-[#d9d9d9] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md'
              >
                <div className='flex items-center justify-between'>
                  <h2 className='text-xl font-semibold text-[#322323]'>{project.title}</h2>
                  <span className='rounded-full bg-[#9BB193]/20 px-3 py-1 text-xs font-semibold text-[#556b4f]'>
                    {project.webImage && project.mobileImage ? 'Featured' : 'Planned'}
                  </span>
                </div>

                <div className='mt-5'>
                  <div className='relative h-[190px] w-full'>
                    <div className='absolute left-0 top-2 w-[86%]'>
                      <div className='rounded-xl border-[1.5px] border-[#1d1d1d] bg-[#1d1d1d] p-[2.5px] shadow-sm'>
                        <div className='mb-0.5 flex items-center gap-1'>
                          <span className='h-2 w-2 rounded-full bg-[#ff5f57]'></span>
                          <span className='h-2 w-2 rounded-full bg-[#febc2e]'></span>
                          <span className='h-2 w-2 rounded-full bg-[#28c840]'></span>
                        </div>
                        {project.webImage ? (
                          <img
                            src={project.webImage}
                            alt={`${project.title} web UI`}
                            className='aspect-[16/10] w-full rounded-md border-[1.5px] border-[#2e2e2e] bg-[#dfe5ea] object-contain'
                          />
                        ) : (
                          <div className='flex aspect-[16/10] items-center justify-center rounded-md border border-dashed border-[#8b8b8b] bg-[#f8f8f8] text-sm font-medium text-[#666]'>
                            Web preview coming soon
                          </div>
                        )}
                      </div>
                    </div>

                    <div className='absolute bottom-0 right-[3%] w-[28%] max-w-[112px]'>
                      <div className='rounded-[1.6rem] border-[1.5px] border-[#111] bg-[#111] p-[2.5px] shadow-md'>
                        <div className='mx-auto mb-0.5 h-1 w-8 rounded-full bg-[#2f2f2f]'></div>
                        {project.mobileImage ? (
                          <img
                            src={project.mobileImage}
                            alt={`${project.title} mobile UI`}
                            className='aspect-[9/16] w-full rounded-[1rem] border-[1.5px] border-[#2e2e2e] bg-[#dfe5ea] object-contain'
                          />
                        ) : (
                          <div className='flex aspect-[9/16] items-center justify-center rounded-[1rem] border border-dashed border-[#8b8b8b] bg-[#f8f8f8] px-2 text-center text-[10px] font-medium text-[#666]'>
                            Mobile preview coming soon
                          </div>
                        )}
                        <div className='mx-auto mt-0.5 h-1 w-7 rounded-full bg-[#2f2f2f]'></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='device-fade-separator' aria-hidden='true'></div>

                <p className='mt-4 text-sm text-[#4a4a4a]'>
                  {project.description}
                </p>

                <div className='mt-5 flex gap-2'>
                  {project.tech.map((techItem) => (
                    <span key={`${project.id}-${techItem}`} className='rounded-md bg-[#f5f5f5] px-2 py-1 text-xs text-[#333]'>
                      {techItem}
                    </span>
                  ))}
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




