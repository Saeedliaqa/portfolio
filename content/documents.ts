type Credential = {
  title: string;
  issuer: string;
  date: string;
  link?: { label: string; href: string };
};

export const cv = {
  href: "/documents/Muhammad-Saeed-Liaqat-CV.pdf",
  filename: "Muhammad-Saeed-Liaqat-CV.pdf",
};

export type CourseCertificate = Credential & {
  instructor?: { label: string; name: string };
  duration: string;
  note?: string;
  overview: string;
  learning: readonly string[];
  connection?: { title: string; text: string };
};

export const certificates: readonly CourseCertificate[] = [
  {
    title: "Complete Data Science, Machine Learning, DL, NLP Bootcamp",
    issuer: "Udemy",
    instructor: { label: "Instructors", name: "Krish Naik and KRISHAI Technologies" },
    date: "16 November 2025",
    duration: "99 hours",
    overview: "A broad programme covering Python, the mathematical foundations of machine learning, deep learning and natural language processing. The course connects theoretical concepts with model development, evaluation and deployment.",
    learning: [
      "Python programming and working with data.",
      "Mathematical foundations, including probability and linear algebra.",
      "Machine learning models, evaluation and hyperparameter tuning.",
      "Neural networks, optimisation and deep learning fundamentals.",
      "Natural language processing and model deployment concepts.",
    ],
    connection: {
      title: "Connection to my interests",
      text: "Relevant to my interest in AI applications and understanding the models behind intelligent software.",
    },
    link: { label: "Verify certificate", href: "https://www.udemy.com/certificate/UC-81614f5a-30eb-4296-9fd5-da2dce207abf/" },
  },
  {
    title: "The Complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    instructor: { label: "Instructor", name: "Dr. Angela Yu" },
    date: "6 August 2025",
    duration: "61.5 hours",
    overview: "A comprehensive introduction to building web applications, covering responsive interfaces, server-side development, databases and deployment.",
    learning: [
      "Responsive layouts using HTML, CSS, Flexbox and Grid.",
      "JavaScript, DOM manipulation and interactive interfaces.",
      "React components and hooks.",
      "Node.js, Express and working with APIs.",
      "SQL, PostgreSQL, authentication, Git and deployment.",
    ],
    connection: {
      title: "Connection to my work",
      text: "The technologies overlap with my frontend work on the Globaq website and my Node.js/PostgreSQL backend contribution to Learnify.",
    },
    link: { label: "Verify certificate", href: "https://www.udemy.com/certificate/UC-607855cc-ba42-4a5c-bff1-b71896fbd262/" },
  },
  {
    title: "Mastering Data Structures & Algorithms using C and C++",
    issuer: "Udemy",
    instructor: { label: "Instructor", name: "Abdul Bari" },
    date: "23 April 2025",
    duration: "58.5 hours",
    overview: "An implementation-focused course exploring how data structures and algorithms work, how to analyse their efficiency and how to implement them in C and C++.",
    learning: [
      "Time and space complexity, including asymptotic analysis.",
      "Recursion and recursive problem-solving.",
      "Arrays, linked lists, stacks and queues.",
      "Trees, graphs and hashing.",
      "Sorting algorithms and choosing suitable data structures.",
    ],
    connection: {
      title: "Connection to my interests",
      text: "Closely aligned with my interest in LeetCode and competitive programming, particularly reasoning about efficiency and selecting appropriate approaches.",
    },
    link: { label: "Verify certificate", href: "https://www.udemy.com/certificate/UC-238538f7-6826-4144-bfd4-5b0bf2cbac82/" },
  },
  {
    title: "Managing Stress and Time",
    issuer: "Arizona State University · Coursera",
    date: "1 March 2025",
    duration: "Approximately 6 hours",
    note: "Non-credit course completion",
    overview: "A practical course on managing time, recognising stress and responding to everyday pressures.",
    learning: [
      "Reviewing time use and planning tasks.",
      "Recognising stressors and managing immediate stress.",
      "Setting boundaries and building sustainable routines.",
    ],
    link: { label: "Verify certificate", href: "https://www.coursera.org/account/accomplishments/verify/PBM5TOPV7UER" },
  },
];

type Award = Credential & {
  id: string;
  kind: string;
  description: string;
  icon: "trophy" | "medal" | "code";
};

export const awards: readonly Award[] = [
  {
    id: "learnify-award",
    title: "Best Final-Year Project",
    issuer: "Department of Computer Sciences & Information Technology, MUST",
    date: "Aug 2025",
    kind: "Team award",
    description: "My teammate and I received Best Project recognition for Learnify. The app lets learners choose a topic and difficulty to generate a practice quiz. I worked on the backend, including accounts and sign-in.",
    icon: "trophy",
    link: { label: "Read the Learnify case study", href: "/projects/learnify" },
  },
  {
    id: "computing-quiz",
    title: "Byte Brain Teasers Computing Quiz",
    issuer: "MUSTCON24 · Mirpur University of Science and Technology",
    date: "29 May 2024",
    kind: "Competition winner",
    description: "I won the Byte Brain Teasers quiz at MUSTCON24, a two-day university event held on 28–29 May 2024. The quiz recognised knowledge across computing topics.",
    icon: "medal",
  },
  {
    id: "speed-programming",
    title: "SOCIT Speed Programming Competition",
    issuer: "Mirpur University of Science and Technology",
    date: "7 Feb 2023",
    kind: "Code Champion",
    description: "I earned the Code Champion title in SOCIT’s speed programming competition at MUST. The event tested how quickly participants could solve programming problems.",
    icon: "code",
  },
];
