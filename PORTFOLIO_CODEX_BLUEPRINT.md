# Portfolio Website — Codex Project Blueprint

> **Owner:** Hasan Rohan  
> **Primary objective:** Build and deploy a clean, professional software-engineering portfolio on a custom domain in one focused development session.  
> **Primary audience:** Recruiters, hiring managers, technical interviewers, and local employers in Canada.  
> **Deployment target:** Vercel, connected to a domain registered with Porkbun.  
> **Working file:** Keep this document available to Codex throughout implementation.

---

## 1. Codex Operating Instructions

Codex must treat this document as the source of truth for the initial portfolio release.

### Working rules

1. Inspect the existing repository before changing anything.
2. Preserve useful existing code, content, assets, and Git history.
3. Do not invent employment, metrics, awards, project features, or technical experience.
4. Put editable portfolio information in centralized data files rather than hard-coding it across components.
5. Prefer simple, maintainable solutions over unnecessary abstraction.
6. Keep dependencies minimal.
7. Use semantic HTML and accessible interaction patterns.
8. Run the following checks after every substantial milestone:
   - `npm run lint`
   - `npm run build`
9. Fix all build, TypeScript, and lint errors before moving to the next milestone.
10. Do not expose secrets, API keys, tokens, or private information.
11. Do not add a database, authentication, CMS, or complex backend for the MVP.
12. Do not use large animated backgrounds, particle systems, custom cursors, auto-playing media, or excessive scroll effects.
13. Do not replace working sections merely to demonstrate a different implementation style.
14. Commit changes in logical milestones when Git access is available.
15. At completion, report:
    - files created or changed;
    - commands run;
    - test/build results;
    - environment variables, if any;
    - remaining manual steps;
    - deployment and DNS status.

### First Codex task

Before writing code, return a concise repository assessment containing:

- current framework and package manager;
- existing routes and components;
- reusable content and assets;
- conflicts between the repository and this specification;
- exact implementation sequence.

Then begin implementation without waiting unless a true blocker exists.

---

## 2. Product Definition

### Portfolio positioning

The website should position Hasan as an early-career software engineer with strength and growing depth in:

- backend engineering;
- Java and Spring Boot;
- REST APIs;
- event-driven and distributed systems;
- Kafka and PostgreSQL;
- cloud and DevOps fundamentals;
- Flutter and full-stack product development;
- software reliability, testing, and automation.

### Core message

> I build reliable backend systems and practical software products, with a focus on APIs, event-driven architecture, cloud deployment, and maintainable engineering.

This message may be refined for natural wording, but its meaning must remain accurate.

### Product goals

The first production release must:

- communicate the candidate's technical direction within several seconds;
- make the strongest projects easy to scan;
- show credible engineering decisions, not only technology logos;
- provide direct access to GitHub, LinkedIn, email, and résumé;
- work well on mobile, tablet, and desktop;
- load quickly;
- be accessible by keyboard;
- have strong metadata and link previews;
- be simple for the owner to update;
- deploy successfully to Vercel and the purchased domain.

### Non-goals for the first release

Do not build these tonight:

- blog platform;
- admin dashboard;
- user accounts;
- comments;
- database;
- custom CMS;
- AI chatbot;
- complex contact backend;
- page transition framework;
- 3D scenes;
- elaborate timeline animation;
- live GitHub activity integration;
- auto-generated skill scores;
- fake testimonials;
- fake client logos.

---

## 3. Recommended Technical Stack

### Core

| Area | Choice | Reason |
|---|---|---|
| Framework | Next.js with App Router | Strong production defaults, metadata support, routing, image/font optimization, and direct Vercel integration |
| Language | TypeScript with strict mode | Safer content modeling and component maintenance |
| UI | React Server Components by default | Less client-side JavaScript and better initial loading |
| Styling | Tailwind CSS | Fast implementation with consistent design tokens |
| Fonts | `next/font` | Optimized loading without manual external font requests |
| Icons | Lucide React | Consistent, lightweight icon set |
| Motion | Motion/Framer Motion only where justified | Subtle entrance and interaction effects |
| Deployment | Vercel | Straightforward Git deployment and custom-domain support |
| Source control | GitHub | Portfolio source, deployment integration, and recruiter visibility |
| Package manager | npm | Matches the owner's current workflow unless the repository already uses another lockfile |

### Optional production additions

Use only after the core site works:

- `@vercel/analytics`
- `@vercel/speed-insights`
- a privacy-respecting analytics solution
- a contact form implemented through a server action and transactional email provider
- automated Playwright smoke tests

### Avoid for the MVP

- a large component framework;
- Redux or another global state library;
- a headless CMS;
- a database;
- runtime GitHub API requests;
- unneeded UI packages;
- multiple animation packages;
- client-side rendering for static content.

---

## 4. Architecture

### Rendering strategy

The portfolio is predominantly static. Use Server Components by default and add `"use client"` only for components that need browser state or interaction, such as:

- mobile navigation;
- theme toggle, if implemented;
- project filtering, if implemented;
- copy-email button;
- small motion wrappers.

### Content strategy

Store editable content in one typed source such as:

```text
src/data/portfolio.ts
```

or, if the repository uses a `content` directory:

```text
src/content/portfolio.ts
```

The data file should contain:

- personal introduction;
- social links;
- navigation;
- skills grouped by category;
- featured projects;
- additional projects;
- education;
- certifications;
- résumé URL;
- contact details.

Components must map over this data instead of repeating project markup manually.

### Suggested project structure

```text
portfolio/
├── public/
│   ├── images/
│   │   ├── projects/
│   │   ├── profile/
│   │   └── og/
│   ├── resume/
│   │   └── hasan-rohan-resume.pdf
│   ├── favicon.ico
│   └── site.webmanifest
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── not-found.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── icon.tsx
│   │   ├── opengraph-image.tsx
│   │   └── projects/
│   │       └── [slug]/
│   │           └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   ├── mobile-nav.tsx
│   │   │   └── footer.tsx
│   │   ├── sections/
│   │   │   ├── hero.tsx
│   │   │   ├── about.tsx
│   │   │   ├── featured-projects.tsx
│   │   │   ├── skills.tsx
│   │   │   ├── education.tsx
│   │   │   ├── certifications.tsx
│   │   │   └── contact.tsx
│   │   ├── projects/
│   │   │   ├── project-card.tsx
│   │   │   ├── project-grid.tsx
│   │   │   └── project-links.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── badge.tsx
│   │       ├── section-heading.tsx
│   │       └── container.tsx
│   ├── data/
│   │   └── portfolio.ts
│   ├── lib/
│   │   ├── metadata.ts
│   │   └── utils.ts
│   └── types/
│       └── portfolio.ts
├── .env.example
├── .gitignore
├── README.md
├── package.json
├── next.config.ts
├── tsconfig.json
└── PORTFOLIO_CODEX_BLUEPRINT.md
```

Use the repository's existing `app`/`src` convention when one is already established. Do not reorganize solely to match this tree.

---

## 5. Information Architecture

### MVP route plan

| Route | Purpose |
|---|---|
| `/` | Main portfolio with all important sections |
| `/projects/[slug]` | Optional case-study pages for the strongest projects |
| `/resume/hasan-rohan-resume.pdf` | Downloadable résumé asset |
| `/sitemap.xml` | Generated sitemap |
| `/robots.txt` | Generated crawler rules |

The homepage must be complete even if project detail pages are not finished during the first release.

### Homepage section order

1. Header/navigation
2. Hero
3. Selected work
4. About and current focus
5. Skills and tools
6. Education and certifications
7. Contact call-to-action
8. Footer

This order leads with evidence rather than placing a long biography before the projects.

---

## 6. Visual Design Direction

### Design principles

- clean;
- organized;
- mature;
- technical without looking like a terminal theme;
- spacious but not empty;
- visually polished without appearing over-designed;
- easy to scan;
- evidence-focused;
- consistent on every screen size.

### Suggested visual system

#### Colors

Use neutral surfaces plus one restrained accent.

Example light theme:

```css
--background: #f8fafc;
--surface: #ffffff;
--surface-muted: #f1f5f9;
--text: #0f172a;
--text-muted: #475569;
--border: #dbe3ec;
--accent: #2563eb;
--accent-hover: #1d4ed8;
```

Example dark theme, only if implemented carefully:

```css
--background: #090e18;
--surface: #101827;
--surface-muted: #172033;
--text: #edf2f7;
--text-muted: #a8b3c5;
--border: #253249;
--accent: #60a5fa;
--accent-hover: #93c5fd;
```

Codex may adjust exact values to improve contrast. Do not create multiple competing accent colors.

#### Typography

Use a professional sans-serif with strong readability. Good options through `next/font` include:

- Geist;
- Inter;
- Manrope.

Use one primary family. A monospace face may appear in tiny labels or technology chips, but not in long body copy.

#### Spacing and layout

- maximum content width: approximately `1120px` to `1200px`;
- readable text width: approximately `65ch` to `72ch`;
- consistent section spacing;
- 8px-based spacing rhythm;
- cards with moderate radius, not exaggerated pill shapes;
- borders and shadows should remain subtle;
- avoid glassmorphism as the primary style.

### Motion rules

Allowed:

- 150–250ms hover transitions;
- tiny card lift of no more than a few pixels;
- subtle opacity/translation entrance for major sections;
- underline or arrow movement on links;
- motion disabled or reduced for `prefers-reduced-motion`.

Avoid:

- bouncing elements;
- looping decorative animation;
- aggressive parallax;
- scroll hijacking;
- mouse-following effects;
- animated gradients behind all sections;
- excessive stagger delays.

### Theme choice

A light-first design is recommended for the first release. A dark mode may be added only when:

- both themes have tested contrast;
- the toggle is accessible;
- the implementation does not delay deployment.

---

## 7. Responsive Wireframe

### Desktop

```text
┌─────────────────────────────────────────────────────────────┐
│ Hasan Rohan       Work  About  Skills  Contact   Résumé ↗  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ Software Engineer                                           │
│ Building reliable backend systems and practical products.   │
│                                                             │
│ [View selected work]  [GitHub ↗]                            │
│                         compact profile/visual element       │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ SELECTED WORK                                               │
│ ┌──────────────────────┐  ┌──────────────────────────────┐  │
│ │ Project image        │  │ Project title                │  │
│ │ or architecture      │  │ Problem, contribution,       │  │
│ │ preview              │  │ engineering decisions       │  │
│ └──────────────────────┘  │ [Case study] [Repository]    │  │
│                           └──────────────────────────────┘  │
│                                                             │
│ Repeat for 3–4 projects with alternating or grid layout     │
├─────────────────────────────────────────────────────────────┤
│ ABOUT / CURRENT FOCUS             SKILL GROUPS              │
├─────────────────────────────────────────────────────────────┤
│ EDUCATION                         CERTIFICATIONS            │
├─────────────────────────────────────────────────────────────┤
│ CONTACT CTA: concise sentence + Email / LinkedIn / GitHub   │
├─────────────────────────────────────────────────────────────┤
│ Footer: name, location, copyright, source link              │
└─────────────────────────────────────────────────────────────┘
```

### Mobile

```text
┌───────────────────────┐
│ Hasan Rohan       ☰   │
├───────────────────────┤
│ Software Engineer     │
│ Clear value statement │
│ [Selected work]       │
│ [Résumé]              │
├───────────────────────┤
│ Selected Work         │
│ ┌───────────────────┐ │
│ │ Project preview   │ │
│ │ Title             │ │
│ │ Description       │ │
│ │ Links             │ │
│ └───────────────────┘ │
├───────────────────────┤
│ About                 │
├───────────────────────┤
│ Skills                │
├───────────────────────┤
│ Education             │
├───────────────────────┤
│ Certifications        │
├───────────────────────┤
│ Contact               │
├───────────────────────┤
│ Footer                │
└───────────────────────┘
```

---

## 8. Section Specifications

## 8.1 Header

Requirements:

- sticky or static header; sticky is acceptable if it remains unobtrusive;
- text logo: `Hasan Rohan` or `HR`;
- links to homepage sections;
- visible résumé action;
- accessible mobile menu;
- clear focus styles;
- no oversized navigation;
- no translucent header that hurts readability.

Suggested links:

- Work
- About
- Skills
- Contact
- Résumé

Use anchor links on the homepage. Ensure offset spacing works with a sticky header.

## 8.2 Hero

The hero must answer:

1. Who is this?
2. What kind of engineer is he?
3. What does he build?
4. What should the visitor click next?

Suggested content structure:

```text
Eyebrow:
Software Engineer · St. John's, Newfoundland and Labrador

Headline:
I build reliable backend systems and practical software products.

Supporting copy:
Computer Science graduate focused on Java, Spring Boot, APIs,
event-driven architecture, cloud deployment, and maintainable engineering.

Primary action:
View selected work

Secondary actions:
Résumé
GitHub
LinkedIn
```

Do not use:

- “coding the future”;
- “digital wizard”;
- generic claims such as “highly passionate and innovative” without evidence;
- an animated typing headline;
- a long autobiography.

A small status line may say:

```text
Open to software engineering, backend, cloud, QA automation, and technical analyst opportunities.
```

Only include this when accurate.

## 8.3 Selected Work

Feature 3–4 projects. Prioritize projects that demonstrate different dimensions of engineering.

Recommended initial order:

1. Event-Driven Order & Inventory Platform
2. iFixIt Ticketing App
3. API Monitoring & Incident Management Platform
4. Book Collection API or FOUR Board Game

Each card must include:

- project title;
- one-sentence product description;
- problem or purpose;
- owner's contribution;
- 3–6 important technologies;
- 1–3 technical highlights;
- status label, when relevant;
- repository link, only if public;
- live demo link, only if working;
- case-study link, when the page exists;
- meaningful image alt text.

Avoid giant technology-chip walls. The description and engineering highlights matter more.

### Proposed project content

#### Event-Driven Order & Inventory Platform

Positioning:

> A microservice-based commerce backend that coordinates order processing, inventory reservation, payment, shipping, and notifications through REST APIs and Kafka events.

Technical highlights may include:

- Java 21 and Spring Boot services;
- API gateway and service boundaries;
- Kafka-based asynchronous workflows;
- PostgreSQL persistence;
- Docker-based local environment;
- inventory reservation and rollback concepts;
- CI/CD and AWS deployment roadmap.

Do not describe unfinished components as complete. Use clear labels such as `In development`.

#### iFixIt Ticketing App

Positioning:

> A Flutter and Firebase service-ticketing application designed around customer requests, technician workflows, real-time communication, and operational visibility.

Verified highlights:

- team leadership;
- role-based routing;
- Firebase Authentication and Firestore;
- in-app chat;
- offline drafts;
- rating and feedback;
- analytics dashboard;
- priority escalation;
- time-prediction Cloud Function.

The original repository is private. Do not create a public repository link unless the owner provides one. A case study may explain the work without exposing private source code.

#### API Monitoring & Incident Management Platform

Positioning:

> A reliability platform for monitoring public or internal API endpoints, tracking uptime and latency, generating incidents, and visualizing service-level health.

Possible highlights, only as implemented:

- scheduled endpoint checks;
- latency and status history;
- alert rules;
- incident timeline;
- service-level indicators;
- REST API;
- relational database;
- cloud deployment.

Use `Planned` or `In development` until the repository contains the claimed features.

#### Book Collection API

Positioning:

> A Spring Boot REST API for managing book records with structured validation, PostgreSQL persistence, pagination, and search.

Potential highlights:

- layered architecture;
- DTO and validation strategy;
- pageable endpoints;
- H2-to-PostgreSQL migration;
- API error handling;
- testing, if present.

#### FOUR Board Game

Positioning:

> A Java Swing strategy game featuring a 9×9 board, multiple difficulty levels, save/load support, and computer-controlled gameplay.

Use this as an additional project if it provides useful breadth.

## 8.4 About

Keep the section to two short paragraphs.

Suggested direction:

> I am a Computer Science graduate from Memorial University of Newfoundland with a minor in Business Administration. My recent work focuses on backend services, event-driven architecture, APIs, databases, and cloud-ready development.

> I enjoy turning broad product requirements into structured systems: defining service boundaries, modeling data, handling failure cases, and building interfaces that people can understand. I am currently strengthening my Java, Spring, distributed-systems, cloud, and automation skills through hands-on projects.

Do not overstate professional seniority.

## 8.5 Skills

Group skills by function rather than presenting one unstructured list.

Suggested groups:

### Languages

- Java
- Python
- JavaScript
- TypeScript
- Dart
- SQL

### Backend and APIs

- Spring Boot
- Spring Cloud
- REST APIs
- Kafka
- Firebase Functions
- FastAPI/Flask only if the owner wants them represented

### Frontend and Mobile

- React
- Next.js
- Flutter
- Tailwind CSS

### Data and Storage

- PostgreSQL
- MySQL
- MongoDB
- SQLite
- Firestore
- Redis, only at the owner's actual level

### Cloud, DevOps, and Tooling

- AWS fundamentals
- Docker
- GitHub Actions
- Git
- Maven
- Vercel
- Linux fundamentals
- Terraform and Kubernetes only as learning/in-progress when accurate

### Networking and Security

- FortiGate administration
- firewall and VPN fundamentals
- routing and switching fundamentals

Do not add percentages, progress bars, star ratings, or labels such as “expert.”

## 8.6 Education

Display:

```text
Memorial University of Newfoundland
Bachelor of Science in Computer Science
Minor in Business Administration
Completed December 2025
St. John's, Newfoundland and Labrador
```

GPA may be omitted unless the owner deliberately chooses to display it.

## 8.7 Certifications

Initial entries:

- FortiGate Administrator
- Enterprise Firewall Administration
- Network Security Support Engineer
- AWS Cloud Practitioner learning/certificate — use the exact credential title shown on the certificate
- HackerRank Software Engineer certificate — use the exact credential title

Each entry may include:

- issuer;
- date;
- credential link, when available;
- short focus statement.

Do not imply an official AWS certification if the credential is a Coursera course certificate rather than an AWS-issued certification.

## 8.8 Contact

For the MVP, use clear direct actions:

- email;
- LinkedIn;
- GitHub;
- downloadable résumé.

Suggested call-to-action:

> I am interested in software engineering, backend, cloud, QA automation, and technical analyst opportunities. Reach out by email or connect with me on LinkedIn.

Use:

- `mailto:hassanrohan025@gmail.com`
- GitHub: `https://github.com/hrtahsin`
- LinkedIn: `https://www.linkedin.com/in/hasan-rohan-tahsin-a59062206/`

A copy-email button is acceptable. It must have accessible feedback.

Do not let a contact form block deployment. A form can be a second-phase enhancement.

## 8.9 Footer

Include:

- Hasan Rohan;
- current year generated programmatically;
- St. John's, NL, Canada;
- GitHub and LinkedIn;
- optional “Built with Next.js and deployed on Vercel”;
- source repository link only when the portfolio repository is public.

---

## 9. Project Detail Page Template

Build project pages for at least the top two projects when time permits.

Suggested structure:

1. Project title and status
2. One-paragraph summary
3. Role and contribution
4. Problem/context
5. Solution overview
6. Architecture diagram or product screenshots
7. Important engineering decisions
8. Technical challenges
9. Outcome/current status
10. Lessons and next steps
11. Technology list
12. Repository/live links

### Case-study quality rule

A case study should show reasoning, trade-offs, and contribution. It must not be a longer version of the project card.

### Suggested architecture diagram treatment

Use a clean SVG or HTML/CSS diagram instead of a heavy diagram library. Diagrams should be readable on mobile and have text alternatives.

---

## 10. Content Types

Suggested TypeScript model:

```ts
export type ProjectStatus =
  | "completed"
  | "in-development"
  | "planned";

export interface ProjectLink {
  label: "Live Demo" | "Repository" | "Case Study";
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  summary: string;
  status: ProjectStatus;
  featured: boolean;
  technologies: string[];
  highlights: string[];
  contribution?: string;
  image?: {
    src: string;
    alt: string;
  };
  links: ProjectLink[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface Credential {
  title: string;
  issuer: string;
  date?: string;
  href?: string;
  note?: string;
}
```

Use `satisfies` where useful so malformed content fails at build time.

---

## 11. Component Rules

### Buttons and links

- One clear primary button style.
- One secondary/outline style.
- Text-link style for low-emphasis actions.
- External links should communicate that they open an external destination.
- Do not open every link in a new tab automatically; use new tabs mainly for external resources when helpful.
- Maintain visible focus outlines.

### Project cards

- Cards must be fully usable without hover.
- Hover may enhance, never reveal essential information.
- Do not make nested interactive elements invalid.
- Use one main clickable title or case-study link plus separate repository/live links.

### Images

- Use `next/image`.
- Provide width/height or `fill` with an aspect-ratio container.
- Compress screenshots.
- Prefer WebP/AVIF output where practical.
- Do not use unrelated stock photos.
- Use a clean placeholder panel until real project screenshots exist.
- Never present generated architecture art as an actual product screenshot.

### Icons

- Icons need accessible labels when they stand alone.
- Decorative icons should be hidden from assistive technology.
- Keep icon sizing consistent.

---

## 12. SEO and Metadata

Implement:

- global metadata in `app/layout.tsx`;
- per-project metadata;
- canonical URL based on the production domain;
- title template;
- description;
- Open Graph metadata;
- Twitter/X card metadata;
- generated or static Open Graph image;
- favicon and application icons;
- sitemap;
- robots rules;
- semantic heading order;
- JSON-LD for `Person` and selected `CreativeWork`/`SoftwareSourceCode` entries when accurate.

Suggested title:

```text
Hasan Rohan | Software Engineer
```

Suggested description:

```text
Portfolio of Hasan Rohan, a software engineer focused on Java, Spring Boot, APIs, event-driven systems, cloud, and practical product development.
```

Use the final custom domain in metadata after it is known.

---

## 13. Accessibility Requirements

The first release must:

- meet WCAG AA contrast for normal text;
- include a skip-to-content link;
- use semantic landmarks;
- preserve logical heading hierarchy;
- support keyboard navigation;
- have visible focus states;
- use descriptive link labels;
- provide alt text for meaningful images;
- hide decorative images appropriately;
- avoid relying only on color;
- respect `prefers-reduced-motion`;
- use properly labeled mobile-menu controls;
- avoid focus traps;
- keep tap targets comfortably sized;
- pass automated accessibility checks available in the workflow.

---

## 14. Performance Requirements

Target:

- Lighthouse Performance: 90 or higher on the deployed homepage;
- Accessibility: 95 or higher;
- Best Practices: 95 or higher;
- SEO: 95 or higher.

Implementation expectations:

- Server Components by default;
- no unnecessary hydration;
- optimized images;
- optimized fonts;
- no large video background;
- no large animation bundle;
- minimal third-party scripts;
- avoid layout shift;
- reserve image dimensions;
- pre-render portfolio pages;
- lazy-load below-the-fold media where appropriate.

Do not chase a score by removing useful content. Fix actual problems.

---

## 15. Security and Privacy

- No secrets committed to Git.
- No client-exposed private keys.
- Use `.env.local` for local secrets.
- Provide `.env.example` with names only.
- Avoid collecting visitor data for the MVP.
- Do not expose home address, phone number, immigration documents, or private repository details.
- Add security headers when they do not break deployment.
- Use `rel="noopener noreferrer"` where relevant.
- Validate and rate-limit any future contact form.
- Do not include unverified claims or private team information from the iFixIt project.

---

## 16. Testing and Quality Gates

### Required before deployment

```bash
npm install
npm run lint
npm run build
```

Also run any existing tests.

### Recommended manual checks

- desktop at approximately 1440px;
- laptop at approximately 1024px;
- tablet at approximately 768px;
- mobile at approximately 390px;
- keyboard-only navigation;
- reduced-motion mode;
- broken link scan;
- missing image scan;
- résumé link;
- email link;
- GitHub and LinkedIn links;
- custom 404 page;
- project route generation;
- metadata preview.

### Optional automated tests

Add lightweight Playwright smoke tests after the first successful deployment:

- homepage loads;
- hero heading is visible;
- navigation links work;
- first project opens;
- résumé link is present;
- mobile menu opens and closes.

---

## 17. Git and Repository Strategy

Recommended branches:

```text
main
└── production branch deployed by Vercel
```

For a one-night MVP, a single feature branch is enough:

```text
feat/portfolio-v1
```

Suggested commits:

1. `chore: scaffold portfolio application`
2. `feat: add design system and responsive layout`
3. `feat: add portfolio content and project sections`
4. `feat: add project case study routes`
5. `feat: add metadata accessibility and performance improvements`
6. `docs: add setup and deployment instructions`

Do not commit:

- `.env.local`;
- private résumé drafts;
- raw personal documents;
- exported design files that are not used;
- build output;
- dependency folders.

The owner may add this blueprint to `.gitignore` if it should remain local. If it is committed, ensure it contains no secret or private information.

---

## 18. Implementation Milestones for Codex

## Milestone 0 — Repository audit

Tasks:

- inspect files and current framework;
- check package versions and lockfile;
- run current lint/build;
- identify reusable components and content;
- report current failures;
- define the minimum-change implementation plan.

Exit condition:

- repository state is understood;
- no accidental overwrite risk.

## Milestone 1 — Foundation

Tasks:

- scaffold or repair Next.js App Router project;
- configure TypeScript strict mode;
- configure Tailwind;
- create global design tokens;
- set up font;
- build container, buttons, badges, and section headings;
- establish page metadata;
- add lint/build scripts.

Exit condition:

- empty styled shell builds successfully.

## Milestone 2 — Layout and navigation

Tasks:

- create header, mobile menu, main layout, and footer;
- implement section anchors;
- add skip link;
- implement responsive spacing;
- verify keyboard operation.

Exit condition:

- navigation and global layout work across target widths.

## Milestone 3 — Portfolio content

Tasks:

- create typed content source;
- implement hero;
- implement selected projects;
- implement about;
- implement skills;
- implement education;
- implement certifications;
- implement contact.

Exit condition:

- complete homepage with accurate content;
- no placeholder lorem ipsum.

## Milestone 4 — Visual polish

Tasks:

- add project screenshots or clean placeholders;
- add restrained hover and entrance effects;
- support reduced motion;
- improve responsive typography;
- check consistency of spacing, borders, and radii.

Exit condition:

- polished without distracting animation.

## Milestone 5 — Case studies

Tasks:

- create dynamic project route;
- generate static params;
- implement project metadata;
- create top two case studies from verified information;
- add repository/live links only when valid.

Exit condition:

- project pages build and have no fabricated claims.

## Milestone 6 — Production readiness

Tasks:

- add sitemap and robots;
- add favicon and Open Graph image;
- add structured data;
- optimize images;
- remove console errors;
- run lint/build;
- check all links;
- update README.

Exit condition:

- production build succeeds;
- no known blocking issues.

## Milestone 7 — Vercel deployment

Tasks:

- push repository to GitHub;
- import repository into Vercel;
- confirm framework detection;
- deploy production branch;
- test the generated `vercel.app` URL;
- add the custom domain;
- configure Porkbun DNS;
- verify both apex and `www`;
- choose one canonical domain and redirect the other;
- confirm HTTPS;
- update site metadata to the final canonical URL;
- redeploy.

Exit condition:

- custom domain loads the production build over HTTPS.

---

## 19. Codex Master Prompt

Copy this prompt into Codex after placing this blueprint in the repository:

```text
You are the implementation agent for my personal software-engineering
portfolio. Read PORTFOLIO_CODEX_BLUEPRINT.md completely and treat it as
the project specification.

First inspect the repository, run the existing checks, and summarize the
current architecture, reusable code, risks, and your implementation order.
Then implement the portfolio in milestones.

The required product is clean, organized, responsive, accessible, and
professional. It should use restrained visual effects rather than flashy
animation. Use Next.js App Router, TypeScript, Tailwind CSS, Server
Components by default, centralized typed content, and a minimal dependency
set unless the existing repository provides a sound alternative.

Do not invent experience, project completion, metrics, links, or
credentials. Clearly label unfinished projects. Do not expose secrets or
private project source. Keep the homepage complete even if optional
case-study pages remain unfinished.

After each milestone, run npm run lint and npm run build, fix errors, and
summarize the result. Continue until the production build succeeds. At the
end, provide deployment instructions for GitHub, Vercel, and the Porkbun
custom domain, along with any remaining manual content or asset tasks.
```

---

## 20. Milestone Prompts

Use these separately when tighter control is useful.

### Prompt A — Audit and scaffold

```text
Read PORTFOLIO_CODEX_BLUEPRINT.md. Audit the repository and determine
whether to preserve, refactor, or scaffold the current implementation.
Set up the production-ready Next.js App Router foundation with TypeScript
strict mode, Tailwind, optimized fonts, metadata, and the shared UI
primitives described in the blueprint. Keep dependencies minimal. Run
lint and build, fix all errors, and report the changed files.
```

### Prompt B — Build homepage

```text
Implement the complete homepage from PORTFOLIO_CODEX_BLUEPRINT.md:
header, hero, selected work, about, skills, education, certifications,
contact, and footer. Put all editable information into a typed centralized
data file. Use only accurate provided content. Prioritize responsive
layout, scanning, semantic HTML, and keyboard accessibility. Do not add
flashy effects. Run lint and build and fix every failure.
```

### Prompt C — Project presentation

```text
Improve the project presentation according to the blueprint. Create
professional project cards and dynamic project case-study routes. Clearly
separate completed, in-development, and planned work. Do not claim a live
demo or public repository unless a valid URL exists. Use architecture
diagrams or neutral placeholders when screenshots are unavailable. Run
lint and build and fix all issues.
```

### Prompt D — Polish and accessibility

```text
Perform a UI, responsive, and accessibility pass. Check spacing,
typography, contrast, focus states, mobile navigation, semantic heading
order, reduced motion, link labels, image alternatives, and tap targets.
Add only restrained motion and hover feedback. Remove visual noise,
unnecessary client components, and avoidable dependencies. Run lint and
build and report the results.
```

### Prompt E — SEO and deployment

```text
Prepare the portfolio for production. Add canonical metadata, Open Graph
metadata, structured data, sitemap, robots rules, favicon, a custom 404,
and production documentation. Optimize images and fonts. Verify all
external links and the résumé path. Run lint and build, fix all issues,
then provide exact GitHub, Vercel, and Porkbun deployment steps. The final
custom domain will be supplied manually where a placeholder is present.
```

---

## 21. Vercel Deployment Procedure

### Option A — GitHub dashboard workflow

1. Create or choose a GitHub repository.
2. Push the production-ready project to `main`.
3. Sign in to Vercel.
4. Select **Add New → Project**.
5. Import the GitHub repository.
6. Confirm:
   - Framework Preset: Next.js
   - Root Directory: repository root unless the app is in a monorepo
   - Build Command: default `next build`
   - Install Command: default for the detected lockfile
7. Add environment variables only when the app actually needs them.
8. Deploy.
9. Test the assigned `*.vercel.app` URL.
10. In the Vercel project, open **Settings → Domains**.
11. Add:
    - `<your-domain>`
    - `www.<your-domain>`
12. Select one as the primary domain.
13. Configure the other to redirect to the primary domain.

### Option B — Vercel CLI

Install and authenticate:

```bash
npm install -g vercel
vercel login
```

Link and deploy:

```bash
vercel link
vercel
vercel --prod
```

Inspect/add domains as needed:

```bash
vercel domains ls
vercel domains add <your-domain> <vercel-project-name>
vercel domains add www.<your-domain> <vercel-project-name>
vercel domains inspect <your-domain>
```

The dashboard workflow is recommended for the first setup because it clearly shows required DNS records.

---

## 22. Porkbun DNS Configuration

Keep DNS hosted at Porkbun unless there is a specific reason to move nameservers. This reduces the chance of disrupting email or other DNS records.

### Important rule

Use the exact DNS values displayed by the Vercel Domains screen. Vercel may update the recommended target. The values below are common current examples, not a substitute for the dashboard instructions.

### Typical apex configuration

In Porkbun:

1. Open the domain.
2. Open **DNS** or **DNS Records**.
3. Remove only conflicting website records for the same host.
4. Add the record Vercel requests for the apex/root domain.

Typical example:

```text
Type: A
Host: @
Answer/Value: 76.76.21.21
TTL: Default
```

### Typical `www` configuration

```text
Type: CNAME
Host: www
Answer/Value: cname.vercel-dns-0.com
TTL: Default
```

### Verification

Return to Vercel and wait for the domain status to become valid. Then test:

```text
https://<your-domain>
https://www.<your-domain>
```

Expected result:

- both URLs resolve;
- HTTPS is active;
- one redirects to the selected canonical version;
- the production portfolio loads;
- there is no certificate warning;
- metadata uses the canonical URL.

### DNS cautions

- Do not delete MX records used for email.
- Do not change nameservers casually.
- Do not add duplicate A/CNAME records for the same host.
- A CNAME cannot normally coexist with other records at the exact same host.
- DNS propagation may not be instant.
- If Vercel requests a TXT verification record, add it exactly as shown.
- If DNSSEC causes a verification problem after a nameserver change, fix the delegation rather than disabling security without understanding the impact.

---

## 23. Domain and Canonical Strategy

Recommended:

```text
Primary: https://<your-domain>
Redirect: https://www.<your-domain> → https://<your-domain>
```

Using `www` as the primary is also valid. The important requirement is consistency.

Update these once the final domain is known:

- `metadataBase`;
- canonical URL;
- sitemap;
- robots;
- structured data;
- Open Graph URL;
- README;
- résumé contact details, if the domain appears there.

---

## 24. Launch Checklist

### Content

- [ ] Name and headline are correct.
- [ ] Location is correct.
- [ ] Email is correct.
- [ ] GitHub link works.
- [ ] LinkedIn link works.
- [ ] Résumé is the final public version.
- [ ] No private phone/address/document appears.
- [ ] Every project status is accurate.
- [ ] Private repositories are not linked.
- [ ] Credential titles match the actual certificates.
- [ ] No unfinished feature is described as complete.

### Design

- [ ] Hero is clear without scrolling.
- [ ] Projects appear before a long biography.
- [ ] Text remains readable at mobile widths.
- [ ] Buttons have clear hierarchy.
- [ ] Spacing is consistent.
- [ ] Animations are restrained.
- [ ] Reduced-motion preference works.
- [ ] No horizontal overflow.
- [ ] No low-contrast muted text.

### Engineering

- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] No console errors.
- [ ] No broken images.
- [ ] No broken links.
- [ ] No secrets in Git.
- [ ] Metadata is present.
- [ ] Sitemap and robots routes work.
- [ ] 404 page works.
- [ ] Server Components are used by default.
- [ ] Client components are justified.

### Deployment

- [ ] GitHub repository is current.
- [ ] Vercel production deployment passes.
- [ ] `vercel.app` preview works.
- [ ] Apex domain is added.
- [ ] `www` domain is added.
- [ ] Porkbun records match Vercel.
- [ ] Canonical redirect works.
- [ ] HTTPS is valid.
- [ ] Open Graph preview uses production domain.
- [ ] Mobile production site is tested.

---

## 25. Tonight's Execution Order

Follow this sequence to maximize the chance of launching tonight:

### Phase 1 — Working production shell

- repository audit;
- framework setup;
- design tokens;
- header, hero, footer;
- lint/build.

### Phase 2 — Complete portfolio content

- selected projects;
- about;
- skills;
- education;
- certifications;
- contact;
- résumé asset;
- lint/build.

### Phase 3 — Production quality

- responsive pass;
- accessibility pass;
- metadata;
- sitemap/robots;
- favicon and Open Graph image;
- lint/build.

### Phase 4 — Deploy

- GitHub push;
- Vercel import;
- test preview;
- connect Porkbun domain;
- verify HTTPS and redirects.

### Phase 5 — Optional only after launch

- project detail pages;
- analytics;
- dark mode;
- contact form;
- automated browser tests;
- additional project screenshots.

The first successful custom-domain deployment is more valuable than delaying launch for optional effects.

---

## 26. Definition of Done

Version 1 is complete when:

1. the homepage clearly presents Hasan as a software engineer;
2. at least three accurate projects are featured;
3. all essential links work;
4. the site is responsive and keyboard accessible;
5. lint and production build pass;
6. the site is deployed to Vercel;
7. the Porkbun domain resolves over HTTPS;
8. the canonical-domain redirect works;
9. there are no known fabricated claims, broken links, exposed secrets, or critical accessibility issues;
10. content can be updated from centralized typed data without editing several components.

---

## 27. Official References

- Next.js App Router documentation: https://nextjs.org/docs/app
- Next.js deployment documentation: https://nextjs.org/docs/app/getting-started/deploying
- Vercel custom-domain documentation: https://vercel.com/docs/domains/set-up-custom-domain
- Vercel domain CLI documentation: https://vercel.com/docs/cli/domains
- OpenAI code-generation and Codex guidance: https://platform.openai.com/docs/guides/code-generation
- Porkbun DNS management: https://porkbun.com/products/dns_management

---

## 28. Owner-Supplied Items Still Needed

Replace these during development:

```text
<your-domain>
<vercel-project-name>
final résumé PDF
project screenshots
public repository URLs
working live-demo URLs
exact certificate titles and credential URLs
```

Do not block the first deployment on unavailable screenshots or optional links. Use honest placeholders or omit unavailable actions.
