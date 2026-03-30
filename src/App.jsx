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

const techStack = [
  { name: 'HTML/CSS', icon: html },
  { name: 'React', icon: react },
  { name: 'TypeScript', icon: ts },
  { name: 'JavaScript', icon: js },
  { name: 'Next.js', icon: nextjs },
  { name: 'Figma', icon: figma },
]

function App() {
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
      description: 'UI showcase for Lemivon with dedicated web and mobile previews.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      webImage: lemivon,
      mobileImage: lemivon_mobile,
    },
    ...Array.from({ length: 5 }, (_, index) => ({
      id: index + 2,
      title: `Project ${index + 2}`,
      description: 'Add your project title, short description, tech stack, and links here.',
      tech: ['Tech 1', 'Tech 2', 'Tech 3'],
      webImage: null,
      mobileImage: null,
    })),
  ]

  return (
    <main>
      <section className="bg-white-800 h-[64px] flex justify-between items-center px-16 shadow-md">
        <img src={logo} alt="Hero Image" className="h-[32px] object-cover" />
        <div class="buttons">
          <button className="text-black px-4 h-full">About Me</button>
          <button className="text-black px-4 h-full">My Projects</button>
          <button className="text-black px-4 h-full">My Designs</button>
          <button className="text-black px-4 h-full">Contact Me</button>
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
              Let’s Build and Level Up Together
            </p>
          </div>
          <div
            id="education"
            className="flex-row justify-center gap-40 z-0 h-[10rem] w-[980px] absolute top-[31rem] left-[33rem] bg-white rounded-sm shadow-xl px-16 py-10 flex gap-8 items-center"
          >
            <div className="flex flex-col">
              <span className="text-xl">Education</span>
              <span className='mt-2'>Third Year</span>
              <span>Bachelor of Science in Computer Engineering - CITU</span>
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
              <span className="text-black text-[12px]">linkedin.com/michael-inoc</span>
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
              alt="Hero Image"
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
                My Projects
              </span>{""}
            </h1>
          </div>

          <div className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto'>
            {projectSlots.map((project) => (
              <article
                key={project.id}
                className='rounded-xl border border-[#d9d9d9] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md'
              >
                <div className='flex items-center justify-between'>
                  <h2 className='text-xl font-semibold text-[#322323]'>{project.title}</h2>
                  <span className='rounded-full bg-[#9BB193]/20 px-3 py-1 text-xs font-semibold text-[#556b4f]'>
                    {project.webImage && project.mobileImage ? 'Showcase' : 'Slot'}
                  </span>
                </div>

                <div className='mt-5'>
                  <div className='relative h-[190px] w-full'>
                    <div className='absolute left-0 top-2 w-[86%]'>
                      <div className='rounded-xl border-[3px] border-[#1d1d1d] bg-[#1d1d1d] p-1 shadow-sm'>
                        <div className='mb-1 flex items-center gap-1.5'>
                          <span className='h-2.5 w-2.5 rounded-full bg-[#ff5f57]'></span>
                          <span className='h-2.5 w-2.5 rounded-full bg-[#febc2e]'></span>
                          <span className='h-2.5 w-2.5 rounded-full bg-[#28c840]'></span>
                        </div>
                        {project.webImage ? (
                          <img
                            src={project.webImage}
                            alt={`${project.title} web UI`}
                            className='aspect-[16/10] w-full rounded-md border border-[#2e2e2e] bg-white object-cover'
                          />
                        ) : (
                          <div className='flex aspect-[16/10] items-center justify-center rounded-md border border-dashed border-[#8b8b8b] bg-[#f8f8f8] text-sm font-medium text-[#666]'>
                            Web UI Image Slot
                          </div>
                        )}
                      </div>
                    </div>

                    <div className='absolute bottom-0 right-[3%] w-[28%] max-w-[112px]'>
                      <div className='rounded-[1.6rem] border-[#111] bg-[#111] p-1 shadow-md'>
                        <div className='mx-auto mb-1 h-1.5 w-9 rounded-full bg-[#2f2f2f]'></div>
                        {project.mobileImage ? (
                          <img
                            src={project.mobileImage}
                            alt={`${project.title} mobile UI`}
                            className='aspect-[9/16] w-full rounded-[1rem] bg-white object-cover'
                          />
                        ) : (
                          <div className='flex aspect-[9/16] items-center justify-center rounded-[1rem] border border-dashed border-[#8b8b8b] bg-[#f8f8f8] px-2 text-center text-[10px] font-medium text-[#666]'>
                            Mobile UI Image Slot
                          </div>
                        )}
                        <div className='mx-auto mt-1 h-1.5 w-8 rounded-full bg-[#2f2f2f]'></div>
                      </div>
                    </div>
                  </div>
                </div>

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

      <section id='about-me'>
            <div className='flex justify-center'>
                <h1
                  className="text-4xl font-bold mt-8"
                  style={{ fontFamily: "Century Gothic, sans-serif" }}
                >
                  <span data-split-part className="text-[#322323] inline-block">
                    About Me
                  </span>{""}
              </h1>
            </div>
      </section>
    </main>
  )
}

export default App
