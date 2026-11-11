export type ProjectMedia = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

export type Project = {
  slug: string;
  title: string;
  kind: string;
  period: string;
  summary: string;
  contribution: string;
  role: string;
  stack: readonly string[];
  media: ProjectMedia;
  overview: string;
  work: readonly string[];
  challenge: string;
  solution: string;
  outcome: string;
  links: readonly { href: string; label: string }[];
};

export const projects: readonly Project[] = [
  {
    slug: "globaq",
    title: "Globaq company website",
    kind: "Client website",
    period: "15 Aug 2025 – 30 Aug 2026",
    summary: "A public website for a Saudi quality-assurance and ISO consultancy.",
    contribution: "I built and deployed the responsive React site and integrated its contact and WhatsApp enquiry paths.",
    role: "Software Developer",
    stack: ["React", "Prerendering", "Technical SEO"],
    media: {
      src: "/images/globaq.webp",
      width: 1640,
      height: 904,
      alt: "Globaq’s What We Do page with service navigation, ISO consultancy information and a WhatsApp button",
      caption: "Globaq’s service overview, with navigation for audits, training and consultancy.",
    },
    overview:
      "Globaq needed a place for prospective clients to understand its audit, training and consultancy services and contact the right team. I worked remotely as the company’s Software Developer and took the site from frontend development through deployment.",
    work: [
      "Built responsive React layouts and navigation for the company’s service content.",
      "Integrated enquiry paths through the contact form and WhatsApp.",
      "Deployed the site and maintained technical SEO and frontend improvements after launch.",
    ],
    challenge:
      "Each service page needed to expose its own content to search engines, even though the site used a single React application for navigation.",
    solution:
      "I prerendered the public service pages so they could return HTML for indexing while React handled navigation in the browser.",
    outcome:
      "The live site exposes service-specific pages from its homepage. Follow the ISO Consultancy link in the services list to see an example.",
    links: [{ href: "https://www.globaqksa.com/", label: "Live website" }],
  },
  {
    slug: "learnify",
    title: "Learnify",
    kind: "Collaborative final-year project",
    period: "Jan – Aug 2025",
    summary: "A quiz app that generates practice questions from a topic and difficulty level.",
    contribution: "I focused on the Node.js and PostgreSQL backend, including registration, authentication and password hashing.",
    role: "Backend contributor",
    stack: ["Node.js", "PostgreSQL", "Gemini API"],
    media: {
      src: "/images/learnify.webp",
      width: 1640,
      height: 810,
      alt: "Learnify’s landing page with sign-up and login controls above an introduction to AI-generated quizzes",
      caption: "Learnify’s landing page, where learners can sign up, log in or explore the quiz demo.",
    },
    overview:
      "My teammate and I built Learnify as our computer science final-year project. A learner chooses a topic and difficulty, answers a quiz generated through the Gemini API, and can compare scores on a shared leaderboard.",
    work: [
      "Developed the project’s Node.js backend and integrated PostgreSQL for persistent storage.",
      "Implemented account registration and authentication, including password hashing.",
      "Worked on the backend of a shared project that also included a separate frontend and AI-generated quiz flow.",
    ],
    challenge:
      "Learners needed an account that would persist across quiz sessions, with passwords stored securely.",
    solution:
      "I implemented registration and sign-in in Node.js, used PostgreSQL to store account data, and hashed passwords before storing them.",
    outcome:
      "The public repository contains both the backend and frontend. Its README documents how learners sign in, generate a quiz and compare their scores on the leaderboard. Learnify received Best Project recognition as a team.",
    links: [{ href: "https://github.com/Saeedliaqa/learnify", label: "GitHub source" }],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
