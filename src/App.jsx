import profile from './assets/profile.png'
import fb from './assets/facebook.png'
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'
import SplitText from "./SplitText";

function App() {
  return (
    <main>
      <section className="bg-white-800 h-[64px] flex justify-between items-center px-16 shadow-md">
        <img src={profile} alt="Hero Image" className="h-[32px] object-cover" />
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
            <p className='text-xl'>
              BS Computer Engineering Student | Future Innovator in Technology and Design
            </p>
          </div>
          <div
            id="name"
            className="justify-center gap-16 z-0 h-[8rem] w-[980px] absolute top-[31rem] left-[33rem] bg-white rounded-sm shadow-xl px-16 py-10 flex gap-8 items-center"
          >
            <a
              href="https://github.com/michael-031"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-70"
            >
              <img src={github} alt="GitHub" className="h-10 w-10" />
              <span className="text-black text-[15px]">github.com/michael-031</span>
            </a>

            <a
              href="https://www.facebook.com/michaelzz450"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-70"
            >
              <img src={fb} alt="Facebook" className="h-10 w-10" />
              <span className="text-black text-[15px]">facebook.com/michaelzz450</span>
            </a>

            <a
              href="https://www.linkedin.com/in/john-michael-inoc-bb288326b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-70"
            >
              <img src={linkedin} alt="LinkedIn" className="h-10 w-10" />
              <span className="text-black text-[15px]">linkedin.com/michael-inoc</span>
            </a>
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
    </main>
  )
}

export default App
