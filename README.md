# Michael Inoc — Portfolio (Clean Architecture)

Personal portfolio built with **React 19**, **Vite 8**, **Framer Motion**, **GSAP**, and **Tailwind CSS**, structured following **Clean Architecture** principles.

## Clean Architecture Structure

```text
src/
├── domain/                         # Enterprise / Domain Layer
│   ├── entities/                   # Core domain entities (Profile, Project, Experience, TechItem)
│   └── repositories/               # Abstract repository contracts (IPortfolioRepository, IGitHubRepository)
├── data/                           # Data / Infrastructure Layer
│   ├── datasources/                # Static data & remote API clients (portfolioStaticData, githubRemoteDataSource)
│   └── repositories/               # Concrete repository implementations (PortfolioRepository, GitHubRepository)
├── application/                    # Application / Use Case Layer
│   ├── usecases/                   # Pure business logic & use cases (getPortfolioContent, getGitHubActivity)
│   └── hooks/                      # React application hooks (usePortfolioData, useGitHubContributions, etc.)
├── presentation/                   # Presentation / UI Layer
│   ├── components/                 # Reusable UI components (common, layout, github, projects)
│   ├── sections/                   # Page sections (Hero, Projects, Experience, TechStack, About, Contact)
│   ├── pages/                      # Page containers (PortfolioPage)
│   └── styles/                     # Global & component stylesheets (index.css, App.css)
└── assets/                         # Static images & icons
```

## Quick Clone & Fast Setup

```bash
git clone --depth 1 <repo-url>
cd my-portfolio
npm run setup
npm run dev
```

## Available Scripts

- `npm run setup` — Fast offline-first deterministic dependency installation (`npm ci --prefer-offline --no-audit --no-fund`)
- `npm run dev` — Start the Vite development server
- `npm run build` — Build vendor-chunked production bundle
- `npm run preview` — Preview production build locally
- `npm run lint` — Run ESLint static analysis
- `npm run tunnel` — Expose local dev server via Cloudflare Tunnel
