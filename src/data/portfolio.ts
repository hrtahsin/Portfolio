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
    slug: "api-monitoring-incident-management-platform",
    title: "API Monitoring & Incident Management Platform",
    shortDescription:
      "A planned reliability platform for endpoint monitoring, uptime tracking, latency history, incidents, and service-level health.",
    summary:
      "The planned system is intended to monitor public or internal API endpoints, retain status history, surface incidents, and support service-health review.",
    status: "planned",
    featured: true,
    technologies: ["Spring Boot", "REST APIs", "PostgreSQL", "Scheduled Checks", "Cloud Deployment"],
    highlights: [
      "Scope centers on scheduled endpoint checks, latency and status history, and incident timelines.",
      "Design direction emphasizes practical service-level indicators rather than decorative dashboards.",
      "Cloud deployment and alert rules are part of the roadmap, not represented as complete.",
    ],
    contribution:
      "Planning the API model, monitoring workflow, persistence shape, and reliability-focused product behavior.",
    links: [],
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
    skills: ["Spring Boot", "Spring Cloud", "REST APIs", "Kafka", "Firebase Functions"],
  },
  {
    title: "Frontend and Mobile",
    skills: ["React", "Next.js", "Flutter", "Tailwind CSS"],
  },
  {
    title: "Data and Storage",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Firestore"],
  },
  {
    title: "Cloud, DevOps, and Tooling",
    skills: ["AWS fundamentals", "Docker", "GitHub Actions", "Git", "Maven", "Vercel", "Linux fundamentals"],
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
