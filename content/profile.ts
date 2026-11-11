export type TimelineEntry = {
  title: string;
  organization: string;
  period: string;
  detail: string;
  highlights?: readonly string[];
};

export const profile = {
  name: "Muhammad Saeed Liaqat",
  shortName: "Saeed Liaqat",
  role: "Software developer",
  location: "Cottbus, Germany",
  email: "saeedliaqat811@gmail.com",
  github: "https://github.com/Saeedliaqa",
  linkedin: "https://www.linkedin.com/in/muhammad-saeed-liaqat-/",
  introduction:
    "I build responsive web interfaces and the APIs behind them. I’m pursuing a master’s in Transformation Studies at BTU Cottbus–Senftenberg and looking for Werkstudent and part-time IT roles in Germany.",
  motivation: {
    origin: "In my computer science degree, I learned how to build software through courses like software engineering and AI. Human–computer interaction and economics made me ask a different question: what does it take for a tool to fit the way people actually work?",
    btu: "I chose the Sociotechnical Transformation track at BTU because I want to understand how organisations introduce new technology and help the people affected by it. Studying in Lusatia gives me a chance to see that kind of change up close, as the region moves beyond coal and develops new industries and jobs.",
    goals: "Long term, I’d like to work in transformation consulting and help teams plan changes that their developers and users can work through together.",
  },
  languages: [
    { name: "German", level: "B1 · Intermediate" },
    { name: "English", level: "C1 · IELTS Academic, 2025" },
  ],
} as const;

export const education = [
  {
    title: "M.A. in Transformation Studies",
    organization: "BTU Cottbus–Senftenberg",
    period: "Oct 2026 – Present",
    detail: "Sociotechnical Transformation track, with an interest in how organisations adopt digital technology and support the people who use it.",
  },
  {
    title: "BS in Computer Science",
    organization: "Mirpur University of Science and Technology",
    period: "Nov 2021 – Aug 2025",
    detail: "Focused on software development and artificial intelligence. For my final-year project, I worked with a teammate on Learnify, an AI quiz application recognised by the department as Best Project.",
  },
] satisfies TimelineEntry[];

export const experience = [
  {
    title: "Software Developer",
    organization: "Globaq · Remote",
    period: "15 Aug 2025 – 30 Aug 2026",
    detail: "Built and deployed the company’s responsive React website for prospective clients looking for audit, training and ISO consultancy services.",
    highlights: [
      "Prerendered public service pages so search engines could index their content.",
      "Integrated contact and WhatsApp enquiry paths, then continued improving the frontend and technical SEO after launch.",
    ],
  },
  {
    title: "Intern",
    organization: "JRAR · Mirpur, AJK",
    period: "Sep – Oct 2024",
    detail: "Worked on responsive frontend components during my internship at JRAR.",
    highlights: [
      "Built components using HTML, CSS, JavaScript and React.",
      "Helped integrate APIs, including the OpenAI API.",
    ],
  },
] satisfies TimelineEntry[];

export const volunteering = [
  {
    title: "Fundraiser",
    organization: "The Paradigm Association",
    period: "Jul 2026",
    detail: "Helped raise funds for families in AJK during a period of disruption.",
  },
  {
    title: "Technical Assistant",
    organization: "The Paradigm Association",
    period: "Sep – Dec 2023",
    detail: "Helped set up the organisation’s website and social media presence.",
  },
] satisfies TimelineEntry[];

export const skills = [
  {
    title: "Frontend",
    icon: "layout",
    tools: "React, Next.js, Tailwind CSS, HTML and CSS",
    evidence: { label: "Globaq", href: "/projects/globaq" },
  },
  {
    title: "Backend & data",
    icon: "database",
    tools: "Node.js, PostgreSQL, REST APIs, Python and FastAPI",
    evidence: { label: "Learnify", href: "/projects/learnify" },
  },
  {
    title: "Tools & deployment",
    icon: "code",
    tools: "Git, GitHub and Vercel",
    evidence: { label: "Portfolio source", href: "https://github.com/Saeedliaqa/portfolio" },
  },
] as const;

export const hobbies = [
  { name: "Football", image: "football", alt: "Outdoor football pitch and goal" },
  { name: "Swimming", image: "swimming", alt: "Indoor swimming pool" },
  { name: "Cricket", image: "cricket", alt: "Floodlit cricket pitch at night" },
  { name: "Table tennis", image: "table-tennis", alt: "Paddle on a blue table tennis table" },
  { name: "Reading", image: "reading", alt: "Books beside a laptop on a desk" },
] as const;
