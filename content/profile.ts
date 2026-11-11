export type TimelineEntry = {
  title: string;
  organization: string;
  period: string;
  detail: string;
};

export const profile = {
  name: "Muhammad Saeed Liaqat",
  shortName: "Saeed Liaqat",
  preferredName: "Saeed",
  role: "Software developer",
  location: "Cottbus, Germany",
  email: "saeedliaqat811@gmail.com",
  github: "https://github.com/Saeedliaqa",
  linkedin: "https://www.linkedin.com/in/muhammad-saeed-liaqat-/",
  introduction:
    "I build responsive web interfaces and the APIs behind them. I’m pursuing a master’s in Transformation Studies at BTU Cottbus–Senftenberg and looking for Werkstudent and part-time IT roles in Germany.",
  about:
    "I’m Saeed, a software developer based in Cottbus. I studied computer science at Mirpur University of Science and Technology, where I worked on Learnify with a teammate. After graduating, I built and maintained Globaq’s company website as a remote software developer.",
  studies:
    "I’m now studying Transformation Studies at BTU Cottbus–Senftenberg, with a focus on digital transformation. I’m interested in artificial intelligence and machine learning, and I’ve had a chance to work with AI APIs in both university projects and an internship.",
  personal:
    "Outside work and university, I enjoy football, swimming, reading and cricket.",
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
    detail: "Focus on digital transformation.",
  },
  {
    title: "BS in Computer Science",
    organization: "Mirpur University of Science and Technology",
    period: "Nov 2021 – Aug 2025",
    detail: "Focused on software development and artificial intelligence. Learnify was my collaborative final-year project.",
  },
] satisfies TimelineEntry[];

export const experience = [
  {
    title: "Software Developer",
    organization: "Globaq · Remote",
    period: "Sep 2025 – Oct 2026",
    detail: "Built and deployed the company’s responsive React website. Integrated enquiry channels and continued improving the frontend and technical SEO after launch.",
  },
  {
    title: "Intern",
    organization: "JRAR · Mirpur, AJK",
    period: "Sep – Oct 2024",
    detail: "Built responsive frontend components with HTML, CSS, JavaScript and React. Helped integrate APIs, including the OpenAI API.",
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
