export type IconName =
  | "globe"
  | "phone"
  | "sparkles"
  | "cloud"
  | "layers"
  | "bulb"
  | "mail"
  | "pin"
  | "clock"
  | "check"
  | "arrow-right"
  | "arrow-up-right";

export type Service = {
  id: string;
  title: string;
  icon: IconName;
  summary: string;
  description: string;
  points: string[];
  stack: string[];
};

export const services: Service[] = [
  {
    id: "web",
    title: "Web Development",
    icon: "globe",
    summary: "Fast, accessible, SEO-ready websites and web apps.",
    description:
      "From marketing sites to complex dashboards, we build modern web products with Next.js and React that load instantly, rank well and scale without rewrites.",
    points: [
      "Next.js and React applications",
      "Headless CMS and e-commerce",
      "Performance and SEO engineering",
    ],
    stack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    icon: "phone",
    summary: "Polished iOS and Android apps from a single codebase.",
    description:
      "We design and ship cross-platform mobile apps that feel native, from first prototype to App Store and Google Play release and beyond.",
    points: [
      "React Native and Flutter apps",
      "Offline-first and push notifications",
      "Store release and maintenance",
    ],
    stack: ["React Native", "Expo", "Flutter", "Firebase", "REST and GraphQL"],
  },
  {
    id: "ai",
    title: "AI and Automation",
    icon: "sparkles",
    summary: "Practical AI that removes busywork and unlocks new features.",
    description:
      "We integrate large language models, retrieval and workflow automation into your product or operations, with a focus on measurable results rather than demos.",
    points: [
      "LLM features and AI agents",
      "Retrieval-augmented search (RAG)",
      "Workflow and document automation",
    ],
    stack: ["Claude API", "Python", "Vector databases", "LangChain", "n8n"],
  },
  {
    id: "cloud",
    title: "Cloud and DevOps",
    icon: "cloud",
    summary: "Reliable infrastructure, pipelines and monitoring.",
    description:
      "We set up secure cloud environments, automated deployments and observability so your team can ship daily and sleep at night.",
    points: [
      "AWS, GCP and Vercel deployments",
      "Docker, Kubernetes and CI/CD",
      "Monitoring, logging and cost control",
    ],
    stack: ["AWS", "Docker", "Terraform", "GitHub Actions", "Vercel"],
  },
  {
    id: "design",
    title: "UI/UX Design",
    icon: "layers",
    summary: "Interfaces people understand at a glance and enjoy using.",
    description:
      "Research-led product design, prototypes and design systems that keep your brand consistent and your developers fast.",
    points: [
      "Product discovery and wireframes",
      "High-fidelity UI and prototypes",
      "Design systems and motion",
    ],
    stack: ["Figma", "Framer", "Design tokens", "Storybook"],
  },
  {
    id: "consulting",
    title: "Software Consulting",
    icon: "bulb",
    summary: "Technical direction, audits and MVP planning.",
    description:
      "Not sure what to build or how? We help founders and teams choose the right architecture, scope an MVP and avoid expensive mistakes.",
    points: [
      "Architecture and code audits",
      "MVP scoping and roadmaps",
      "Fractional CTO support",
    ],
    stack: ["System design", "Security review", "Estimation", "Team coaching"],
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  text: string;
  tags: string[];
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    text: "We learn your goals, users and constraints, then turn them into a clear scope, timeline and budget.",
    tags: ["Workshops", "Scope", "Estimate"],
  },
  {
    step: "02",
    title: "Design",
    text: "Wireframes become interactive prototypes you can click through and test before a line of production code is written.",
    tags: ["Wireframes", "Prototype", "Design system"],
  },
  {
    step: "03",
    title: "Build",
    text: "Two-week sprints with working demos, code reviews and automated tests, so you always see real progress.",
    tags: ["Sprints", "Code review", "Testing"],
  },
  {
    step: "04",
    title: "Launch",
    text: "We handle deployment, performance tuning, analytics and a calm go-live with a rollback plan ready.",
    tags: ["Deployment", "QA", "Analytics"],
  },
  {
    step: "05",
    title: "Evolve",
    text: "Post-launch support, monitoring and new features, so your product keeps improving with your business.",
    tags: ["Support", "Monitoring", "Roadmap"],
  },
];

export const stats = [
  { value: 24, suffix: "h", label: "Reply time on every enquiry" },
  { value: 6, suffix: "", label: "Core service lines under one roof" },
  { value: 100, suffix: "%", label: "Code ownership stays with you" },
  { value: 0, suffix: "", label: "Lock-in contracts, ever" },
];

export const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "React Native",
  "Python",
  "PostgreSQL",
  "AWS",
  "Docker",
  "GSAP",
  "Framer Motion",
  "Figma",
  "AI / LLMs",
];

export type ProjectCategory = "Web" | "Mobile" | "AI" | "SaaS";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  tagline: string;
  description: string;
  stack: string[];
  accent: [string, string];
  image?: string;
  concept: boolean;
};

export const projects: Project[] = [
  {
    slug: "qadri tech solution",
    title: "Qadri Tech Solution",
    category: "Web",
    tagline: "Modern, Responsive Software House Website",
    description:
      "A professional software house website showcasing IT services including web development, mobile app development, UI/UX design, and cloud solutions. Built with Next.js, TypeScript, and Tailwind CSS, featuring responsive layouts, modern UI, SEO optimization, and a user-friendly contact experience.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    accent: ["#39ff9c", "#22e5ff"],
    image: "/projects/qadri-tech-solution.png",
    concept: false,
  },
  {
    slug: "inventory-management",
    title: "Inventory Management",
    category: "SaaS",
    tagline: "Full-Stack Web Application with Advanced Data Management",
    description:
      "A full-stack web application built with Next.js, TypeScript, Tailwind CSS, and Material UI for an efficient and responsive user interface. Powered by Node.js, Express.js, PostgreSQL, and Prisma ORM, with Redux Toolkit Query for efficient API data fetching and updates. The project also incorporates Material UI Data Grid for structured data management and explores AWS infrastructure, cost management, and networking fundamentals.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Material UI",
      "Redux Toolkit Query",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "AWS",
    ],
    accent: ["#22e5ff", "#7c8cff"],
    image: "/projects/inventory-management.png",
    concept: false,
  },
  {
    slug: "ai-careerverse",
    title: "AI CareerVerse",
    category: "AI",
    tagline: "AI-powered resume analyzer and career insights",
    description:
      "An AI-powered resume analyzer that extracts candidate information, identifies and normalizes skills, generates resume summaries, and provides intelligent resume scoring through a modern full-stack platform.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "FastAPI",
      "PyMuPDF",
      "Tailwind CSS",
      "GSAP",
    ],
    accent: ["#a3ff6b", "#39ff9c"],
    image: "/projects/ai-careerverse.png",
    concept: false,
  },
  {
    slug: "fun-frame-ai",
    title: "Fun Frame AI",
    category: "Mobile",
    tagline: "Turn your photos into laugh-out-loud moments with AI",
    description:
      "An AI-powered Android application that analyzes uploaded photos and generates funny, contextually relevant comments in 20 languages using Google Gemini. Users can customize comment quantity, regenerate suggestions, and share individual comments or complete image-and-comment collections with friends.",
    stack: [
      "Kotlin",
      "Android SDK",
      "XML",
      "Google Gemini API",
      "OkHttp",
      "Gson",
      "Coroutines",
      "AdMob",
    ],
    accent: ["#a3ff6b", "#39ff9c"],
    image: "/projects/fun-frame.png",
    concept: false,
  },
  {
    slug: "ag-essential",
    title: "AG Essential",
    category: "Web",
    tagline: "A Modern Shopify Store for Toys & Stationery",
    description:
      "A fully customized Shopify e-commerce store developed using Shopify Liquid, HTML, CSS, and JavaScript. Features a vibrant, responsive storefront with custom promotional banners, product collections, category-based navigation, shopping cart, customer login, and an engaging shopping experience. Designed for toys, baby products, stationery, and kids' essentials, with Cash on Delivery and Pakistan-wide delivery support.",
    stack: ["Shopify", "Liquid", "HTML5", "CSS3", "JavaScript", "E-Commerce"],
    accent: ["#ff8a24", "#ff4da6"],
    image: "/projects/ag-essential.png",
    concept: false,
  },
  {
    slug: "admin-panel",
    title: "Admin Panel",
    category: "SaaS",
    tagline: "Admin Dashboard with Firebase Authentication",
    description:
      "A responsive Admin panel built with Vite and Firebase, featuring secure email and password authentication, user registration and login, user management with create and delete functionality, protected routes, and customizable themes. Includes Firebase integration for authentication and a structured dashboard experience with secure access control.",
    stack: ["React", "Vite", "Firebase", "JavaScript", "React Router", "CSS"],
    accent: ["#7c8cff", "#22e5ff"],
    image: "/projects/admin-panel.png",
    concept: false,
  },
];

export const projectFilters: ("All" | ProjectCategory)[] = [
  "All",
  "Web",
  "Mobile",
  "AI",
  "SaaS",
];

export const values = [
  {
    title: "Craft over speed-running",
    text: "We sweat the details users feel: performance, accessibility and motion that has a purpose.",
  },
  {
    title: "Radical clarity",
    text: "Plain-language updates, honest estimates and no surprise invoices. You always know where things stand.",
  },
  {
    title: "Ownership mindset",
    text: "We treat your product like our own. If something looks risky, we say so before it becomes expensive.",
  },
  {
    title: "Always learning",
    text: "We adopt new tools when they genuinely help, not because they are trending.",
  },
];

export const engagementModels = [
  {
    title: "Fixed scope",
    text: "A defined deliverable, timeline and price. Best for MVPs, websites and well-understood projects.",
  },
  {
    title: "Dedicated team",
    text: "A small squad that works as an extension of your company, month to month. Best for growing products.",
  },
  {
    title: "Time and materials",
    text: "Flexible hours with transparent weekly reporting. Best when requirements will evolve as you learn.",
  },
];

export const faqs = [
  {
    q: "How long does a typical project take?",
    a: "A marketing website usually takes 3 to 5 weeks. An MVP web or mobile app typically takes 8 to 14 weeks. After discovery we give you a concrete timeline for your specific scope.",
  },
  {
    q: "Do we own the source code?",
    a: "Yes. On final payment, all code, designs and assets are yours. We also hand over documentation and deployment instructions.",
  },
  {
    q: "Can you work with our existing team or codebase?",
    a: "Absolutely. We regularly join existing projects for audits, new features, performance work and migrations, and we adapt to your tools and workflow.",
  },
  {
    q: "What happens after launch?",
    a: "We offer support plans covering monitoring, bug fixes, security updates and new features, or we can hand over cleanly to your in-house team.",
  },
  {
    q: "How do you handle communication across time zones?",
    a: "We are remote-first. You get a shared channel, weekly demos and written updates, with overlapping hours agreed at kickoff.",
  },
];

export const contactServices = [
  "Web Development",
  "Mobile App",
  "AI and Automation",
  "Cloud and DevOps",
  "UI/UX Design",
  "Consulting",
  "Not sure yet",
];
export const contactBudgets = [
  "Under $2k",
  "$2k - $5k",
  "$5k - $15k",
  "$15k - $50k",
  "$50k+",
  "Not sure yet",
];
