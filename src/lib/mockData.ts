export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  thumbnail: string;
  screenshots: string[];
  summary: string;
  body: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
}

export const projects: Project[] = [
  {
    _id: "4",
    title: "RKB",
    slug: { current: "rkb-platform" },
    thumbnail: "/images/rkb/rkb-1.png",
    screenshots: [
      "/images/rkb/rkb-1.png",
      "/images/rkb/rkb-2.png",
      "/images/rkb/rkb-3.png",
    ],
    summary:
      "A modern web platform currently in staging, designed with scalability and usability in mind. Demonstrates structured frontend architecture and responsive design principles.",
    body: "The RKB Platform is a modern web application designed with a focus on scalability, performance, and optimal user experience.\n\nKey Highlights:\n● Clean and responsive UI\n● Component-based architecture\n● Optimized for performance and accessibility\n● Built with modern web technologies.",
    tags: ["Web/Frontend", "React", "Scalability", "UI/UX"],
    liveUrl: "https://rkb-staging.netlify.app/",
  },
  {
    _id: "1",
    title: "Transpo — Audio Technology Platform",
    slug: { current: "transpo-audio" },
    thumbnail: "/images/transpo/transpo-landing.png",
    screenshots: [
      "/images/transpo/transpo-1.jpg",
      "/images/transpo/transpo-2.png",
      // "/images/transpo/transpo-3.png",
    ],
    summary:
      "A real-time pitch transposition engine for musicians. Built as a Chrome extension that intercepts browser audio streams and applies DSP processing via the Web Audio API.",
    body: "Transpo was born from a personal frustration — practicing instruments along with recordings in the wrong key. The extension hooks into any browser tab's audio output using the Chrome tabCapture API, routes it through a custom AudioWorklet for real-time pitch shifting, and outputs the modified audio seamlessly.\n\nThe DSP pipeline uses a phase vocoder algorithm implemented in an AudioWorklet processor, ensuring low-latency processing without blocking the main thread. The architecture features a persistent offscreen document that maintains audio state across tab navigations, enabling uninterrupted playback.\n\nKey technical challenges included managing the AudioContext lifecycle across Chrome's extension service worker constraints, implementing a bypass mode that achieves zero-overhead when no transposition is active, and designing an output buffer strategy to eliminate periodic stuttering artifacts.\n\nThe frontend is built with React and features a minimal UI with a semitone wheel selector, A/B loop controls, and a playback speed slider. The extension supports saving presets per-URL, making it ideal for musicians who regularly practice with online backing tracks or sheet music.",
    tags: ["Audio Tech", "Chrome Extension", "Web Audio API", "React"],
    liveUrl: "https://transpo.studio",
    sourceUrl: "https://github.com/transpo-miy/landing-page",
  },
  // {
  //   _id: "2",
  //   title: "Enterprise Analytics — Data Intelligence Platform",
  //   slug: { current: "enterprise-analytics" },
  //   thumbnail: "/images/analytics-thumb.webp",
  //   screenshots: [
  //     "/images/analytics-1.webp",
  //     "/images/analytics-2.webp",
  //     "/images/analytics-3.webp",
  //   ],
  //   summary:
  //     "Gold-layer data models and executive dashboards for enterprise analytics. Star-schema architecture powering KPI insights across multiple business domains.",
  //   body: "During my internship at Reliance Infosystems, I designed and implemented a comprehensive analytics platform that transformed raw operational data into actionable business intelligence.\n\nThe data architecture follows a medallion pattern — bronze (raw ingestion), silver (cleaned and conformed), and gold (business-ready aggregates). I built the gold-layer models using a star schema design optimized for Power BI's DAX query engine, enabling sub-second dashboard interactions even across millions of records.\n\nThe dashboards track KPIs across revenue, operational efficiency, and customer engagement domains. Each dashboard features drill-through capabilities, dynamic date intelligence (YoY, QoQ, MTD comparisons), and role-based row-level security.\n\nI also automated the entire analytics lifecycle using GitHub Actions — data validation tests run on every model change, dashboards are version-controlled alongside their underlying queries, and deployment to the Power BI service is triggered automatically on merge to main. This CI/CD approach reduced deployment errors by 60% and established a reproducible workflow the team continues to use.\n\nPython scripts handle anomaly detection in the data pipeline, flagging statistical outliers before they propagate to executive-facing reports.",
  //   tags: ["Data Science", "Power BI", "Python", "SQL", "GitHub Actions"],
  // },
];

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "AI Systems Engineer",
    company: "TechGen Pro",
    period: "Sept 2025 – Present",
    description: [
      "Architected and deployed agentic workflows using n8n and Node.js, automating multi-step data extraction and lead processing pipelines, reducing manual overhead by 40%.",
      "Developed RAG-based search systems integrating LLMs with vector databases and custom middleware, enabling accurate querying of internal technical documentation.",
      "Engineered CI/CD pipelines using GitHub Actions to automate testing and deployment of AI-driven analytics dashboards.",
    ],
  },
  {
    id: "exp-2",
    role: "Data Analyst Intern",
    company: "Reliance Infosystems",
    period: "Jan 2025 – Jul 2025",
    description: [
      "Designed and implemented gold-layer data models and Power BI dashboards using star schema and DAX to deliver actionable KPI insights.",
      "Automated analytics workflows including testing, reporting, and deployment using GitHub Actions.",
      "Performed data validation and anomaly detection using Python and SQL, ensuring high data quality for downstream analytics.",
    ],
  },
  {
    id: "exp-3",
    role: "Software Engineer Intern",
    company: "Earna",
    period: "Sept. 2024 – Jan 2025",
    description: [
      "Automated AWS Kubernetes deployments with ArgoCD, cutting deployment time by 60% and boosting release frequency to daily.",
      "Built and maintained backend microservices with NestJS, TypeScript, and Docker; achieved 90%+ unit test coverage and reduced production bugs 40% via SonarQube.",
      "Integrated Kong API Gateway to secure and route traffic, reducing API latency by 25% and ensuring 99.9% uptime.",
    ],
  },
];

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  honors: string[];
}

export const education: Education = {
  degree: "B.Sc. Computer Science (Minor in Mathematics, With Distinction)",
  institution: "MacEwan University",
  location: "Edmonton, AB",
  period: "Graduated Jun 2025",
  gpa: "3.77 / 4.00",
  honors: ["Chancellor's Continuing Scholarship", "Dean's List (4×, 2020–2024)"],
};

export const certifications: string[] = [
  "Microsoft Azure Fundamentals (AZ-900)",
  "Microsoft Data Fundamentals (DP-900)",
];

export const skills = {
  languages: ["Python", "JavaScript (ES6)", "TypeScript", "Java", "SQL"],
  frameworks: ["Node.js", "Next.js", "Django", "React Native", ".NET Core"],
  aiData: ["RAG Systems", "Vector Databases", "Power BI", "DAX"],
  devops: ["Docker", "GitHub Actions", "AWS", "Linux"],
  networking: ["REST APIs", "OAuth2", "LLM Security"],
};
