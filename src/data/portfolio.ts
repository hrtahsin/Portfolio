import { siteConfig } from "@/lib/site";
import type {
  Credential,
  Education,
  NavigationLink,
  PersonalProfile,
  Project,
  SkillGroup,
} from "@/types/portfolio";

export const navigationLinks = [
  {
    label: "Work",
    href: "/#work",
  },
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Skills",
    href: "/#skills",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
] satisfies NavigationLink[];

export const profile = {
  name: "Hasan Rohan Tahsin",
  role: "Software Engineer",
  location: "St. John's, Newfoundland and Labrador",
  email: siteConfig.email,
  hero: {
    eyebrow: "Software Engineer · St. John's, Newfoundland and Labrador",
    headline: "I build reliable backend systems and practical software products.",
    summary:
      "Computer Science graduate focused on Java, Spring Boot, APIs, event-driven architecture, cloud deployment, and maintainable engineering.",
    statusLine:
      "Open to software engineering, backend, cloud, QA automation, and technical analyst opportunities.",
  },
  about: [
    "I am a Computer Science graduate from Memorial University of Newfoundland with a minor in Business Administration. My recent work focuses on backend services, event-driven architecture, APIs, databases, and cloud-ready development.",
    "I enjoy turning broad product requirements into structured systems: defining service boundaries, modeling data, handling failure cases, and building interfaces that people can understand. I am currently strengthening my Java, Spring, distributed-systems, cloud, and automation skills through hands-on projects.",
  ],
} satisfies PersonalProfile;

export const projects = [
  {
    slug: "event-driven-order-inventory-platform",
    title: "Event-Driven Order & Inventory Platform",
    shortDescription:
      "A microservice-based commerce backend for coordinating order processing, inventory reservation, payment, shipping, and notifications.",
    summary:
      "The project is focused on service boundaries, REST APIs, asynchronous Kafka workflows, PostgreSQL persistence, and a Docker-based local development environment.",
    status: "in-development",
    featured: true,
    technologies: ["Java 21", "Spring Boot", "Kafka", "PostgreSQL", "Docker", "REST APIs"],
    highlights: [
      "Models order, inventory, payment, shipping, and notification responsibilities as separate service concerns.",
      "Uses Kafka event flows to keep long-running commerce operations asynchronous.",
      "Includes inventory reservation and rollback concepts as part of the reliability design.",
    ],
    contribution:
      "Defining service boundaries, API contracts, persistence models, and failure-handling paths while building the backend incrementally.",
    image: {
      src: "/images/projects/event-driven-order-inventory-platform/architecture.png",
      alt: "Event-driven order and inventory platform architecture diagram with Kafka topics, services, and service-owned databases.",
      width: 1355,
      height: 727,
    },
    links: [
      {
        label: "Case Study",
        href: "/projects/event-driven-order-inventory-platform",
      },
    ],
    caseStudy: {
      role:
        "Backend project owner responsible for shaping the service boundaries, API contracts, persistence model, and failure-handling approach.",
      context:
        "Commerce workflows often span several responsibilities that should not be hidden inside one large service. This project explores how order intake, inventory reservation, payment, shipping, and notifications can coordinate while keeping service ownership clear.",
      solution:
        "The implementation direction uses Spring Boot services with REST APIs for synchronous boundaries and Kafka events for asynchronous workflow steps. PostgreSQL stores service-owned data, while Docker supports local development as the system grows.",
      architectureImage: {
        src: "/images/projects/event-driven-order-inventory-platform/architecture.png",
        alt: "Event-driven order and inventory platform architecture diagram showing event and request layers, Kafka topics, services, and service-owned databases.",
        width: 1355,
        height: 727,
      },
      decisions: [
        "Keep order, inventory, payment, shipping, and notification responsibilities separated so each service can evolve independently.",
        "Use Kafka events for long-running workflow steps where immediate blocking calls would make failure handling harder.",
        "Model inventory reservation and rollback explicitly instead of treating them as incidental database updates.",
      ],
      challenges: [
        "Coordinating state across asynchronous service boundaries without overstating completion.",
        "Designing failure paths that remain understandable as more services are added.",
      ],
      outcome:
        "In development. The case study documents the architecture direction and implementation focus without presenting roadmap items as finished work.",
      nextSteps: [
        "Continue implementing service endpoints and event handlers.",
        "Add integration tests around inventory reservation and rollback paths.",
        "Complete the Docker-based local environment and CI/CD deployment roadmap.",
      ],
    },
  },
  {
    slug: "ifixit-ticketing-app",
    title: "iFixIt Ticketing App",
    shortDescription:
      "A Flutter and Firebase service-ticketing application for customer requests, technician workflows, communication, and operational visibility.",
    summary:
      "The application supports role-based request handling, real-time communication, offline drafts, feedback, and operational dashboard views.",
    status: "completed",
    featured: true,
    technologies: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "Cloud Functions"],
    highlights: [
      "Led team delivery while coordinating customer, technician, and admin workflow requirements.",
      "Implemented role-based routing, in-app chat, offline drafts, rating and feedback, and priority escalation.",
      "Added analytics dashboard views and a time-prediction Cloud Function for service visibility.",
    ],
    contribution:
      "Led the team and contributed across product flow, Firebase-backed application behavior, and mobile implementation.",
    screenshots: [
      {
        src: "/images/projects/ifixit/welcome.png",
        alt: "iFixIt mobile welcome screen with sign-in call to action.",
      },
      {
        src: "/images/projects/ifixit/login.png",
        alt: "iFixIt mobile login screen with email and password fields.",
      },
      {
        src: "/images/projects/ifixit/create-account.png",
        alt: "iFixIt mobile account creation screen with profile and contact fields.",
      },
      {
        src: "/images/projects/ifixit/new-ticket.png",
        alt: "iFixIt mobile new ticket screen with issue details and attachment controls.",
      },
    ],
    screenshotLayout: "mobile",
    links: [
      {
        label: "Case Study",
        href: "/projects/ifixit-ticketing-app",
      },
    ],
    caseStudy: {
      role:
        "Team lead and Flutter/Firebase contributor across workflow design, application behavior, and mobile implementation.",
      context:
        "The app was designed around service-ticketing needs: customers submit requests, technicians manage work, and administrators need visibility into request status and operational activity.",
      solution:
        "The product uses Flutter for the mobile interface and Firebase services for authentication, Firestore-backed data, real-time communication, offline drafts, feedback, and Cloud Function-backed prediction behavior.",
      decisions: [
        "Use role-based routing so customer, technician, and admin users see workflows relevant to their responsibilities.",
        "Use Firebase Authentication and Firestore to support real-time app behavior without adding a custom backend for the project.",
        "Include offline drafts and priority escalation so ticket creation and triage remain practical under imperfect conditions.",
      ],
      challenges: [
        "Coordinating team delivery across multiple user roles and feature areas.",
        "Balancing real-time chat, offline behavior, feedback, analytics, and prediction features without losing the core ticket workflow.",
      ],
      outcome:
        "Completed application work. The original repository is private, so the portfolio presents the case study without exposing private source code.",
      nextSteps: [
        "Add approved screenshots if private project details are cleared for public use.",
        "Document more implementation details when they can be shared without exposing private source.",
      ],
    },
  },
  {
    slug: "skyward-bound-satellite-data-infographic",
    title: "Skyward Bound: Satellite Data Infographic",
    shortDescription:
      "An end-to-end data storytelling project based on approximately 63,000 satellite records.",
    summary:
      "The dataset was cleaned and processed to examine changes in satellite mass, operational orbit, and mission type across multiple decades, then presented as a single infographic poster.",
    status: "completed",
    featured: true,
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter Notebook"],
    highlights: [
      "Cleaned and processed approximately 63,000 satellite records for analysis.",
      "Extracted features to compare satellite mass, operational orbit, and mission type across decades.",
      "Combined multiple visualizations into a single infographic explaining major developments in the satellite age.",
    ],
    contribution:
      "Handled data cleaning, feature extraction, trend analysis, visualization design, and final infographic composition.",
    screenshots: [
      {
        src: "/images/projects/skyward-bound/infographic-poster.jpg",
        alt: "Skyward Bound satellite age infographic poster with charts about satellite mass, orbit counts, and satellite types over time.",
        layout: "poster",
      },
      {
        src: "/images/projects/skyward-bound/average-mass-dashboard.png",
        alt: "Interactive dashboard showing average satellite mass over time with year and mass range controls.",
        width: 749,
        height: 558,
        layout: "desktop",
      },
      {
        src: "/images/projects/skyward-bound/satellite-types-dashboard.png",
        alt: "Interactive dashboard showing satellite type evolution by decade with filter controls.",
        width: 690,
        height: 727,
        layout: "desktop",
      },
    ],
    screenshotLayout: "poster",
    links: [
      {
        label: "Case Study",
        href: "/projects/skyward-bound-satellite-data-infographic",
      },
    ],
    caseStudy: {
      role:
        "Data visualization project owner responsible for cleaning the dataset, extracting analysis features, building dashboard views, and composing the final infographic.",
      context:
        "Satellite history is difficult to understand from raw tabular records alone. This project uses approximately 63,000 satellite records to explain changes in satellite mass, operational orbit, and mission type across multiple decades.",
      solution:
        "The workflow used Python, Pandas, NumPy, Matplotlib, and Jupyter Notebook to clean the records, process trend-oriented features, build interactive dashboard views, and assemble a final infographic poster for presentation.",
      decisions: [
        "Clean and process the satellite records before charting so mass, orbit, and type comparisons are based on consistent fields.",
        "Use filterable dashboard views to explore average satellite mass over time and satellite type changes by decade.",
        "Combine exploratory dashboard outputs with a single infographic poster that communicates the main story in one visual artifact.",
      ],
      challenges: [
        "Reducing a large multi-decade dataset into readable visuals without losing important trend changes.",
        "Balancing quantitative detail with poster-level storytelling and visual hierarchy.",
        "Making dashboard screenshots and the final poster usable together in a compact case-study format.",
      ],
      outcome:
        "Completed data storytelling project with cleaned satellite records, interactive dashboard views, trend analysis, and a final infographic poster explaining major developments in the satellite age.",
      nextSteps: [
        "Publish the dashboard if a public deployment is prepared.",
        "Document the data-cleaning assumptions alongside the visual outputs.",
        "Add more views for orbit distribution and mission-category comparisons if the analysis is extended.",
      ],
    },
  },
  {
    slug: "api-monitoring-incident-management-platform",
    title: "APIWatch",
    shortDescription:
      "A production-style API monitoring and incident management platform for scheduled checks, incidents, notifications, and reliability dashboards.",
    summary:
      "APIWatch lets teams register APIs, run manual or scheduled health checks, track uptime and latency, detect failures and rate-limit events, manage incidents, and route notifications through multiple providers.",
    status: "completed",
    statusLabel: "Version 1.0 completed",
    featured: true,
    technologies: [
      "Java 21",
      "Spring Boot 3.5",
      "PostgreSQL 16",
      "Flyway",
      "React 19",
      "TypeScript",
      "Vite",
      "Recharts",
      "Docker",
      "GitHub Actions",
    ],
    highlights: [
      "Supports service registration, manual and scheduled checks, configurable intervals, timeouts, failure thresholds, expected status ranges, and optional response-body validation.",
      "Classifies health as UP, SLOW, DOWN, RATE_LIMITED, or UNKNOWN with diagnostics for HTTP status, timeout, DNS, connection, network, and security-block failures.",
      "Creates and resolves incidents automatically or manually, then routes notifications through webhook, Slack, Discord, email, PagerDuty, and Opsgenie integrations.",
      "Includes encrypted Bearer/API key/custom-header support, admin/viewer authentication, audit logs, SSRF protection, pagination, retention cleanup, Docker Compose, and CI/CD.",
    ],
    contribution:
      "Built the full-stack Version 1.0 scope across backend architecture, scheduled workers, database migrations, incident workflows, encrypted secrets, notification delivery, dashboard UX, tests, Docker, and CI/CD.",
    screenshots: [
      {
        src: "/images/projects/apiwatch/overview-admin.png",
        alt: "APIWatch administrator dashboard with service health metrics and registered APIs.",
      },
      {
        src: "/images/projects/apiwatch/service-details.png",
        alt: "APIWatch service details page with uptime, latency history, recent checks, and service actions.",
      },
      {
        src: "/images/projects/apiwatch/add-service.png",
        alt: "APIWatch add service form with endpoint, ownership, method, timeout, interval, and failure threshold fields.",
      },
      {
        src: "/images/projects/apiwatch/notification-settings.png",
        alt: "APIWatch notification settings page with provider, webhook, cooldown, escalation, and delivery audit panels.",
      },
      {
        src: "/images/projects/apiwatch/overview-viewer.png",
        alt: "APIWatch read-only viewer dashboard with service health metrics and registered APIs.",
      },
      {
        src: "/images/projects/apiwatch/login.png",
        alt: "APIWatch sign-in page for administrator or read-only viewer accounts.",
      },
    ],
    screenshotLayout: "desktop",
    links: [
      {
        label: "Case Study",
        href: "/projects/api-monitoring-incident-management-platform",
      },
    ],
    caseStudy: {
      role:
        "Full-stack project owner responsible for backend architecture, database design, scheduled monitoring, incident workflows, security controls, dashboard implementation, testing, Docker, and CI/CD.",
      context:
        "Teams should not have to manually check API health or piece together failures from scattered logs. APIWatch addresses that reliability gap by combining scheduled monitoring, historical health data, incident detection, alert routing, and an operations dashboard.",
      solution:
        "The system uses a Java 21 and Spring Boot 3.5 backend with Spring Security, WebFlux WebClient, Spring Data JPA, Flyway, PostgreSQL 16, and scheduled workers. The React 19 and TypeScript frontend presents service health, latency trends, incident activity, configuration screens, notification settings, and role-aware access.",
      architectureImage: {
        src: "/images/projects/apiwatch/architecture.png",
        alt: "APIWatch architecture diagram showing the React dashboard, Spring Boot REST API, configurable scheduler, health check runner, external services, incident detection engine, and PostgreSQL.",
        width: 784,
        height: 687,
      },
      decisions: [
        "Model monitored APIs as configurable services with expected status ranges, timeout settings, check intervals, failure thresholds, and optional response-body validation.",
        "Classify failures into operationally useful states and diagnostics, including DOWN, SLOW, RATE_LIMITED, timeout, DNS, connection, network, and security-block outcomes.",
        "Use repeated-failure thresholds to create incidents automatically while allowing both automatic and manual resolution when services recover.",
        "Deliver notifications asynchronously through an outbox with retries, cooldowns, escalation delay, and per-service open/resolve notification rules.",
        "Protect monitoring targets with SSRF controls, private-network blocking, encrypted secrets, Basic admin/viewer access, and audit logs for administrative actions.",
      ],
      challenges: [
        "Separating service registration, health-check execution, incident lifecycle handling, notification delivery, and dashboard views without collapsing the system into one large workflow.",
        "Handling real-world check outcomes such as timeouts, DNS failures, connection errors, rate limits, and security blocks in a way that remains understandable to the operator.",
        "Balancing security features such as encrypted tokens, custom headers, SSRF protection, and auditability with a usable admin interface.",
        "Keeping historical checks, incidents, notifications, and audit logs navigable through pagination and retention cleanup.",
      ],
      outcome:
        "Version 1.0 is complete as a portfolio-grade full-stack project. Core feature development is complete across monitoring, incidents, notifications, security controls, responsive dashboard UX, tests, Docker Compose, and GitHub Actions CI/CD.",
      nextSteps: [
        "Deploy the application to a cloud environment with managed database hosting.",
        "Add production domain, HTTPS, release tagging, and deployment documentation.",
        "Refresh the README around the mature notification workflow.",
        "Improve production observability and consider OAuth-based authentication for a later version.",
      ],
    },
  },
  {
    slug: "four-board-game",
    title: "FOUR Board Game",
    shortDescription:
      "A Java Swing strategy game with a 9x9 board, multiple difficulty levels, save/load support, and computer-controlled gameplay.",
    summary:
      "The project adds breadth through desktop Java UI work, game-state management, persistence, and turn-based computer gameplay.",
    status: "completed",
    featured: true,
    technologies: ["Java", "Swing", "Desktop UI", "Game State", "File Persistence"],
    highlights: [
      "Implements a 9x9 board with multiple difficulty levels and computer-controlled turns.",
      "Supports saving and loading game state for continued play.",
      "Uses desktop UI patterns to make turn state, moves, and game progress visible.",
    ],
    contribution:
      "Built the game interface and gameplay behavior while managing state transitions and persistence support.",
    screenshots: [
      {
        src: "/images/projects/four/main-menu.png",
        alt: "FOUR board game main menu with New Game, Resume Game, Help, and Exit buttons.",
      },
      {
        src: "/images/projects/four/player-settings.png",
        alt: "FOUR board game player settings screen with player names, AI difficulty, and accessibility options.",
      },
      {
        src: "/images/projects/four/game-board.png",
        alt: "FOUR board game play screen with a 9x9 board and player piece panels.",
      },
    ],
    screenshotLayout: "desktop",
    links: [],
  },
] satisfies Project[];

export const skillGroups = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "Dart", "SQL"],
  },
  {
    title: "Backend and APIs",
    skills: [
      "Spring Boot",
      "Spring Cloud",
      "Node.js",
      "REST APIs",
      "GraphQL",
      "gRPC",
      "Kafka",
      "Firebase Functions",
    ],
  },
  {
    title: "Frontend and Mobile",
    skills: ["React", "Next.js", "Flutter", "Tailwind CSS"],
  },
  {
    title: "Data, Visualization, and Storage",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "SQLite",
      "Firestore",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    title: "Cloud, DevOps, and Tooling",
    skills: ["AWS", "Docker", "GitHub Actions", "Git", "Maven", "Vercel", "Linux fundamentals", "Scripting"],
  },
  {
    title: "Networking and Security",
    skills: ["FortiGate administration", "Firewall fundamentals", "VPN fundamentals", "Routing and switching fundamentals"],
  },
] satisfies SkillGroup[];

export const education = {
  school: "Memorial University of Newfoundland",
  degree: "Bachelor of Science in Computer Science",
  minor: "Minor in Business Administration",
  completed: "Completed December 2025",
  location: "St. John's, Newfoundland and Labrador",
} satisfies Education;

export const credentials = [
  {
    title: "FortiGate Administrator",
    issuer: "Coursera",
    href: "https://www.coursera.org/account/accomplishments/verify/DXRNZSM8UUMI",
    note: "Firewall administration and network security operations.",
  },
  {
    title: "Enterprise Firewall Administration",
    issuer: "Coursera",
    href: "https://coursera.org/share/6ac7615a55e1d6a2d399e86197a96bb1",
    note: "Firewall policy, inspection, and administration fundamentals.",
  },
  {
    title: "Network Security Support Essentials",
    issuer: "Coursera",
    href: "https://coursera.org/share/9060878177f865502365bfb16a65607f",
    note: "Network troubleshooting, support workflows, and security operations fundamentals.",
  },
  {
    title: "Amazon Cloud Practitioner Essentials",
    issuer: "Coursera",
    href: "https://www.coursera.org/account/accomplishments/verify/4AN6EB1361FN",
    note: "Covers AWS Cloud fundamentals: defining the AWS Cloud, differentiating on-premises, hybrid-cloud, and all-in cloud models, describing AWS global infrastructure, and explaining cloud benefits.",
  },
  {
    title: "HackerRank Software Engineer Certificate",
    issuer: "HackerRank",
    href: "https://www.hackerrank.com/certificates/iframe/640086631cd2",
    note: "Software engineering assessment credential.",
  },
] satisfies Credential[];
