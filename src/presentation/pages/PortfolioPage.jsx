import React, { useEffect, useState } from 'react';

const PROJECTS = [
  {
    key: 'tlc',
    title: 'TLC Platform',
    summary: 'Streamline teaching loads, automate faculty workload policies, and ensure multi-tenant compliance.',
    stack: 'Next.js · TypeScript · Supabase',
    liveUrl: 'https://tlc-engine.vercel.app/',
    liveLabel: 'Live site ↗',
    img: '/images/tlc-mockup.jpg',
    width: 1200,
    height: 675,
    alt: 'TLC Platform mockup showcasing faculty teaching load distribution, policy rules, and RBAC compliance',
  },
  {
    key: 'tecnect',
    title: 'TeknnecT',
    summary: 'Campus marketplace for student trading, equipment rentals, and lost & found items.',
    stack: 'React · Tailwind CSS · SQLite',
    liveUrl: 'https://teknnect-1c19d.web.app/',
    liveLabel: 'Live site ↗',
    img: '/images/tecnect-mockup.jpg',
    width: 1200,
    height: 675,
    alt: 'TeknnecT campus marketplace hero view for trading, renting, and finding items on campus',
  },
  {
    key: 'lemivon',
    title: 'Lemivon',
    summary: 'AI study platform with intelligent summaries, smart flashcards, adaptive quizzes, and learning analytics.',
    stack: 'React · Node.js · Tailwind CSS',
    liveUrl: 'https://study-taa.vercel.app/',
    liveLabel: 'Live site ↗',
    img: '/images/lemivon-mockup.jpg',
    width: 1200,
    height: 675,
    alt: 'Lemivon AI study tool mockup displaying AI summarizer, smart flashcards, quiz challenges, and analytics',
  },
  {
    key: 'laag',
    title: 'Laag ta bAI',
    summary: 'Mobile-first AI travel buddy PWA for scanning Cebu heritage landmarks, cultural quests, and stories.',
    stack: 'React · PWA · Supabase · AI Vision',
    liveUrl: 'https://laag-ta-bai-frontend.vercel.app/scan',
    liveLabel: 'Live site ↗',
    img: '/images/laag-ta-bai-mockup.jpg',
    width: 1200,
    height: 675,
    alt: 'Laag ta bAI mobile-first PWA screens showing Cebu heritage discovery, camera landmark scanning, and cultural quests',
  },
];

const STACK_TOOLS = [
  { name: 'React', role: 'Component UI', icon: '/assets/icons/react.svg', w: 40, h: 36 },
  { name: 'Next.js', role: 'SSR & routing', icon: '/assets/icons/nextjs.svg', w: 40, h: 40 },
  { name: 'TypeScript', role: 'Typed code', icon: '/assets/icons/typescript.svg', w: 40, h: 40 },
  { name: 'JavaScript', role: 'ES6 & scripts', icon: '/assets/icons/javascript.svg', w: 40, h: 40 },
  { name: 'Tailwind CSS', role: 'Layout styles', icon: '/assets/icons/tailwindcss.svg', w: 40, h: 24, cls: 'ic-land' },
  { name: 'HTML', role: 'Semantics', icon: '/assets/icons/html.svg', w: 40, h: 40 },
  { name: 'Python', role: 'AI automation', icon: '/assets/icons/python.svg', w: 40, h: 40 },
  { name: 'Supabase', role: 'Postgres auth', icon: '/assets/icons/supabase.svg', w: 39, h: 40 },
  { name: 'SQLite', role: 'Embedded SQL', icon: '/assets/icons/sqlite.svg', w: 40, h: 40 },
  { name: 'Figma', role: 'Wireframes', icon: '/assets/icons/figma.svg', w: 27, h: 40, cls: 'ic-tall' },
  { name: 'Git', role: 'Version control', icon: '/assets/icons/git.svg', w: 40, h: 40 },
  { name: 'Arduino', role: 'Embedded I/O', icon: '/assets/icons/arduino.svg', w: 40, h: 27, cls: 'ic-land' },
];

const MENU_CARDS = [
  {
    href: '#projects',
    title: 'Web projects',
    desc: 'TLC Platform, TeknnecT, Lemivon, and Laag ta bAI',
    img: '/images/tlc-mockup.jpg',
    w: 1200,
    h: 675,
    alt: 'TLC Platform showcase preview',
  },
  {
    href: '#experience',
    title: 'Innodata internship',
    desc: 'Safety Log Portal & HSE KPI Dashboard',
    img: '/images/innodata-experience-mockup.jpg',
    w: 1200,
    h: 675,
    alt: 'Mockup of the Safety Log Portal and Executive HSE Safety KPI Dashboard built at Innodata',
  },
  {
    href: '#stack',
    title: 'Tools and stack',
    desc: 'Next.js, TypeScript, SQLite, Python',
    img: '/images/lemivon-mockup.jpg',
    w: 1200,
    h: 675,
    alt: 'Lemivon AI study tool preview',
  },
];

const ChevronIcon = () => (
  <svg className="chev" viewBox="0 0 12 12" aria-hidden="true">
    <path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
    <path className="m-arrow__stem" d="M1 6h8" />
    <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
  </svg>
);

const ThemeIcon = ({ dark }) =>
  dark ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );

const PortfolioPage = () => {
  const [activeNav, setActiveNav] = useState('projects');
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      document.documentElement.dataset.tone = next;
      return next;
    });
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.tone = theme;
  }, [theme]);

  useEffect(() => {
    let active = true;
    const boot = async () => {
      try {
        if (window.__kitBooted) {
          const motionMod = await import(/* @vite-ignore */ '/assets/motion/motion.js');
          motionMod.refresh?.();
          return;
        }
        window.__kitBooted = true;
        await import(/* @vite-ignore */ '/assets/system.js');
        if (!active) return;
        await Promise.all([
          import(/* @vite-ignore */ '/assets/motion/motion.js'),
          import(/* @vite-ignore */ '/assets/layout/layout.js'),
        ]);
      } catch (err) {
        console.warn('PortfolioPage kit boot error:', err);
        document.documentElement.dataset.ready = '1';
      }
    };
    boot();

    const sections = ['projects', 'experience', 'stack', 'about', 'enquiry']
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible?.target?.id) {
          setActiveNav(visible.target.id);
        }
      },
      { threshold: 0.45 }
    );
    sections.forEach((sec) => observer.observe(sec));

    return () => {
      active = false;
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header className="nav nav--split">
        <div className="wrap nav__bar">
          <a className="skip-link" href="#top">
            Skip to content
          </a>
          <a className="nav__logo" href="#top">
            <span className="mark" data-mark="dots" aria-hidden="true"></span>
            Michael Inoc
          </a>
          <nav className="nav__links" aria-label="Main">
            <div className="nav__item">
              <a
                className={`nav__link${activeNav === 'projects' ? ' is-current' : ''}`}
                href="#projects"
              >
                Projects <ChevronIcon />
              </a>
              <div className="nav__menu">
                <div className="wrap grid">
                  {MENU_CARDS.map((card) => (
                    <a className="menu-card span-4" key={card.href} href={card.href}>
                      <div className="panel">
                        <img
                          className="frame__img"
                          src={card.img}
                          alt={card.alt}
                          width={card.w}
                          height={card.h}
                          decoding="async"
                        />
                      </div>
                      <span className="t-card">{card.title}</span>
                      <span className="t-small muted">{card.desc}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="nav__item">
              <a
                className={`nav__link${activeNav === 'experience' ? ' is-current' : ''}`}
                href="#experience"
              >
                Experience
              </a>
            </div>
            <div className="nav__item">
              <a
                className={`nav__link${activeNav === 'stack' ? ' is-current' : ''}`}
                href="#stack"
              >
                Stack
              </a>
            </div>
            <div className="nav__item">
              <a
                className={`nav__link${activeNav === 'about' ? ' is-current' : ''}`}
                href="#about"
              >
                About
              </a>
            </div>
          </nav>
          <div className="nav__actions">
            <button
              className="theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              aria-pressed={theme === 'dark'}
              title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              <ThemeIcon dark={theme === 'dark'} />
            </button>
            <a className="btn btn--primary" href="#enquiry">
              Send a message
            </a>
          </div>
          <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero hero--split" data-enter aria-labelledby="hero-h">
          <div className="hero-rays" aria-hidden="true">
            <span className="hero-rays__emitter" />
            <div className="hero-rays__cone" />
            <div className="hero-rays__streaks" />
          </div>
          <div className="wrap">
            <div className="hero-text grid hero__grid">
              <div className="hero__text span-5">
                <p className="hero__kicker">
                  <span className="dot" aria-hidden="true"></span>
                  BS Computer Engineering · CIT-U · Cebu
                </p>
                <h1 id="hero-h" className="hero-title">
                  Hello,
                  <br />
                  I&apos;m <span className="metallic-text">Michael</span>
                </h1>
                <p className="hero__role">
                  Web Developer <span className="hero__role-dot" aria-hidden="true">•</span> Web Apps, PWAs &amp; AI Automation
                </p>
                <p className="hero__lead">
                  Shipping React and Next.js web applications, progressive web apps, and Google Apps Script workflows with clean access controls.
                </p>
                <div className="btn-row">
                  <a className="btn btn--primary" href="#enquiry">
                    Send a message
                  </a>
                  <a className="btn btn--secondary" href="#projects">
                    Selected work
                  </a>
                </div>
              </div>

              <div className="hero__media span-6 start-7">
                <img
                  src="/images/profile.png"
                  alt="Michael Inoc portrait cutout"
                  width="600"
                  height="627"
                  style={{ '--ly-pos': '50% 100%' }}
                  fetchPriority="high"
                  decoding="async"
                />
                <div className="ly-float">
                  <div className="ly-float__row">
                    <span className="ly-live">Availability</span>
                    <span>Cebu · Remote</span>
                  </div>
                  <div className="ly-float__title">Open for software engineering roles</div>
                </div>
              </div>
            </div>

            <dl className="hero__facts hero-strip" aria-label="Developer summary">
              <div>
                <dt>Primary stack</dt>
                <dd>Next.js, React &amp; TypeScript</dd>
              </div>
              <div>
                <dt>Databases</dt>
                <dd>SQLite, PostgreSQL &amp; Supabase</dd>
              </div>
              <div>
                <dt>Experience</dt>
                <dd>Innodata Software Intern</dd>
              </div>
              <div>
                <dt>Base</dt>
                <dd>Cebu · Remote &amp; Hybrid</dd>
              </div>
            </dl>
          </div>
        </section>

        <section id="projects" className="section ground-surface" aria-labelledby="projects-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="projects-h">Projects across Next.js and React</h2>
              <p className="t-lead">
                Live applications covering role-based operations, marketplace directories, and safety tracking.
              </p>
            </div>

            <div className="grid peek" data-peek>
              <ul className="rows span-5">
                {PROJECTS.map((project, index) => (
                  <li
                    key={project.key}
                    data-peek-to={project.key}
                    className={index === 0 ? 'is-on' : undefined}
                  >
                    <span className="rows__name">{project.title}</span>
                    <span className="rows__value">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        {project.liveLabel}
                      </a>
                    </span>
                    <p className="rows__sub">
                      {project.summary} ({project.stack})
                    </p>
                  </li>
                ))}
              </ul>

              <div className="peek__media span-6 start-7">
                {PROJECTS.map((project, index) => (
                  <img
                    key={project.key}
                    data-peek-for={project.key}
                    src={project.img}
                    alt={project.alt}
                    width={project.width}
                    height={project.height}
                    hidden={index !== 0}
                    decoding="async"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section" aria-labelledby="exp-h">
          <div className="wrap grid">
            <div className="span-5">
              <div className="section-head">
                <h2 id="exp-h">Experience in software and delivery</h2>
                <p className="t-lead">
                  Applied engineering across internal safety platforms, KPI analytics, and operational workflows.
                </p>
              </div>
              <ul className="rows">
                <li>
                  <span className="rows__name">
                    Innodata Knowledge and Services Inc.
                    <small>Software Engineering Intern, June to July 2026: Internal HSE platforms &amp; Apps Script.</small>
                  </span>
                  <span className="rows__value">
                    <a
                      href="https://drive.google.com/file/d/1K3qLQPEFsnMVSfjFNRZioPfLWxdcfQKN/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Reflection
                    </a>
                  </span>
                </li>
                <li>
                  <span className="rows__name">
                    Safety Log Portal
                    <small>Centralized intake portal for incident reports, near-miss observations, and safety permits.</small>
                  </span>
                  <span className="rows__value">Internal Tool</span>
                </li>
                <li>
                  <span className="rows__name">
                    Executive HSE Safety KPI Dashboard &amp; Calculator
                    <small>Real-time TRIR/LTIFR calculations, leading &amp; lagging metrics, and compliance views.</small>
                  </span>
                  <span className="rows__value">Analytics · KPI</span>
                </li>
              </ul>
            </div>

            <div className="span-6 start-7">
              <div className="exp__media">
                <img
                  src="/images/innodata-experience-mockup.jpg"
                  alt="Sanitized mockup of the Executive HSE Safety KPI Dashboard and Safety Log Portal built during the Innodata internship"
                  width="1200"
                  height="675"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="stack" className="section ground-surface" aria-labelledby="stack-h">
          <div className="wrap grid">
            <div className="span-5">
              <div className="section-head">
                <h2 id="stack-h">Stack for apps and automation</h2>
                <p className="t-lead">
                  Languages, frameworks, databases, and embedded tools used across shipped web applications.
                </p>
              </div>
              <ul className="rows">
                <li>
                  <span className="rows__name">
                    Frontend interfaces
                    <small>React, Next.js, TypeScript, Tailwind CSS, semantic HTML.</small>
                  </span>
                  <span className="rows__value">Web UI</span>
                </li>
                <li>
                  <span className="rows__name">
                    Data and persistence
                    <small>Supabase, PostgreSQL, SQLite schemas, and authentication.</small>
                  </span>
                  <span className="rows__value">Backend</span>
                </li>
                <li>
                  <span className="rows__name">
                    Automation and hardware
                    <small>Google Apps Script, Python prompt tooling, Arduino circuits.</small>
                  </span>
                  <span className="rows__value">Systems</span>
                </li>
              </ul>
            </div>

            <div className="panel stack-panel span-6 start-7">
              <div className="stack-grid">
                {STACK_TOOLS.map((tool) => (
                  <div className="stack-tile" key={tool.name}>
                    <span className="ic-tile ic-tile--40">
                      <img
                        className={`ic ic-40${tool.cls ? ` ${tool.cls}` : ''}`}
                        src={tool.icon}
                        alt={tool.name}
                        width={tool.w}
                        height={tool.h}
                        decoding="async"
                      />
                    </span>
                    <div>
                      <span className="stack-tile__name">{tool.name}</span>
                      <span className="stack-tile__role">{tool.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section" aria-labelledby="about-h">
          <div className="wrap grid">
            <div className="span-5 about__copy">
              <div className="section-head">
                <p className="hero__kicker">
                  <span className="dot" aria-hidden="true"></span>
                  About Me · Outside the Editor
                </p>
                <h2 id="about-h">Outside the editor</h2>
                <p className="t-lead">
                  Fourth-year BS Computer Engineering student at CIT-U — trading the code editor on weekends for Cebu mountain trails and 10K road races.
                </p>
              </div>
              <p>
                Coursework covers computer architecture, software systems, and embedded hardware. Outside the editor, early-morning climbs up Cebu ridges like Bar Cramps and training for 10K road runs keep my focus steady for shipping full-stack web apps.
              </p>
              <ul className="rows" style={{ marginTop: 'var(--s-5)' }}>
                <li>
                  <span className="rows__name">University degree</span>
                  <span className="rows__value">BS Computer Engineering · CIT-U</span>
                </li>
                <li>
                  <span className="rows__name">Outside the editor</span>
                  <span className="rows__value">Cebu trail hikes &amp; 10K runs</span>
                </li>
                <li>
                  <span className="rows__name">Motto</span>
                  <span className="rows__value">Leveling up in every mile &amp; line</span>
                </li>
              </ul>
            </div>

            <figure className="develop span-6 start-7" data-moment="picture-develops">
              <img
                src="/images/hike.jpg"
                alt="Michael Inoc outside the editor hiking at Bar Cramps trail overlooking Cebu City"
                width="840"
                height="630"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        <section id="enquiry" className="section ground-surface" aria-labelledby="enquiry-h">
          <div className="wrap grid">
            <div className="span-5">
              <div className="section-head">
                <h2 id="enquiry-h">Project enquiry form</h2>
                <p className="t-lead">
                  Available for software engineering roles, web application builds, and workflow automation.
                </p>
              </div>
              <dl className="contact-dl">
                <div>
                  <dt>Location</dt>
                  <dd>Cebu, Philippines · Remote</dd>
                </div>
                <div>
                  <dt>Response</dt>
                  <dd>Within one business day</dd>
                </div>
                <div>
                  <dt>Profiles</dt>
                  <dd>
                    <a href="https://github.com/michael-031" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/michael-inoc/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://web.facebook.com/michaelzz450"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="span-6 start-7">
              <div className="form__panel">
                <form
                  className="form"
                  action="mailto:hello@michaelinoc.example"
                  method="post"
                  encType="text/plain"
                  data-endpoint=""
                  data-sent="Your message is ready to send. Michael replies within a day."
                  noValidate
                >
                  <div className="field">
                    <label htmlFor="f-name">Name</label>
                    <input
                      id="f-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      aria-describedby="f-name-err"
                    />
                    <p className="field__error" id="f-name-err" hidden>
                      Enter your name before sending.
                    </p>
                  </div>

                  <div className="field">
                    <label htmlFor="f-email">Email</label>
                    <input
                      id="f-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      required
                      aria-describedby="f-email-err"
                    />
                    <p className="field__error" id="f-email-err" hidden>
                      Enter an email address with an @ symbol.
                    </p>
                  </div>

                  <div className="field">
                    <label htmlFor="f-topic">Topic</label>
                    <select id="f-topic" name="topic" defaultValue="Software engineering role">
                      <option value="Software engineering role">Software engineering role</option>
                      <option value="Full-stack web application">Full-stack web application</option>
                      <option value="Apps Script or AI workflow">Apps Script or AI workflow</option>
                      <option value="General enquiry">General enquiry</option>
                    </select>
                  </div>

                  <div className="field">
                    <label htmlFor="f-message">Message</label>
                    <textarea
                      id="f-message"
                      name="message"
                      rows="3"
                      required
                      aria-describedby="f-message-err"
                    ></textarea>
                    <p className="field__error" id="f-message-err" hidden>
                      Add a brief note on your project or role.
                    </p>
                  </div>

                  <div className="btn-row">
                    <button className="btn btn--primary" type="submit">
                      Submit enquiry
                    </button>
                  </div>
                  <p className="form__status" role="status" data-form-status></p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer closing footer--dark ground-inverse" id="contact" aria-labelledby="close-h">
        <div className="wrap">
          <div className="closing__cta close--type">
            <div className="section-head">
              <h2 id="close-h">Start a project enquiry</h2>
              <p>Open for software engineering roles, web builds, and Apps Script workflows.</p>
            </div>
            <a className="btn btn--primary btn--xl btn--wide" href="#enquiry">
              Send a message
              <ArrowIcon />
            </a>
          </div>

          <div className="closing__links">
            <div className="grid">
              <div className="span-4 stack-4">
                <a className="nav__logo" href="#top">
                  <span className="mark" data-mark="dots" aria-hidden="true"></span>
                  Michael Inoc
                </a>
                <p className="footer__lede">Full-stack web developer based in Cebu, Philippines.</p>
              </div>

              <div className="span-2 footer__col">
                <h3>Projects</h3>
                <ul>
                  <li>
                    <a href="https://www.tlcengine.net/" target="_blank" rel="noopener noreferrer">
                      TLC Engine
                    </a>
                  </li>
                  <li>
                    <a href="https://tecnect.vercel.app" target="_blank" rel="noopener noreferrer">
                      TecnecT
                    </a>
                  </li>
                  <li>
                    <a href="https://lemivon.vercel.app" target="_blank" rel="noopener noreferrer">
                      Lemivon
                    </a>
                  </li>
                </ul>
              </div>

              <div className="span-2 footer__col">
                <h3>Experience</h3>
                <ul>
                  <li>
                    <a href="#experience">Innodata Internship</a>
                  </li>
                  <li>
                    <a href="#projects">Web Applications</a>
                  </li>
                </ul>
              </div>

              <div className="span-2 footer__col">
                <h3>Stack</h3>
                <ul>
                  <li>
                    <a href="#stack">Next.js &amp; React</a>
                  </li>
                  <li>
                    <a href="#stack">TypeScript &amp; SQLite</a>
                  </li>
                </ul>
              </div>

              <div className="span-2 footer__col">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#about">CIT-U Engineering</a>
                  </li>
                  <li>
                    <a href="#enquiry">Enquiry form</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer__legal">
              <span>&copy; 2026 Michael Inoc</span>
              <div className="socials">
                <a
                  href="https://github.com/michael-031"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <svg className="ic ic-svg ic-24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/michael-inoc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg className="ic ic-svg ic-24" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
                    <path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.931V95.967h36.414v16.694h.51c7.425-12.696 21.23-20.278 35.928-19.733 38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.269c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008.001 5.838-2.317 11.438-6.444 15.566a22.01 22.01 0 0 1-15.564 6.45Zm18.966 138.858H37.95V95.967h37.971v122.16ZM237.033.018H18.89C8.58-.098.125 8.161 0 18.471v219.053c.12 10.315 8.574 18.582 18.889 18.474h218.144c10.335.128 18.822-8.138 18.966-18.474V18.455c-.148-10.33-8.636-18.589-18.966-18.454" />
                  </svg>
                </a>
                <a
                  href="https://web.facebook.com/michaelzz450"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg className="ic ic-svg ic-24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103.385.045.768.11 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.8 26.8 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default PortfolioPage;
