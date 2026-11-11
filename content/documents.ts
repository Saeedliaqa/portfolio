type Credential = {
  title: string;
  issuer: string;
  date: string;
  note?: string;
  link?: { label: string; href: string };
};

export const cv = {
  href: "/documents/Muhammad-Saeed-Liaqat-CV.pdf",
  filename: "Muhammad-Saeed-Liaqat-CV.pdf",
};

export const certificates: readonly Credential[] = [
  {
    title: "Complete Data Science, Machine Learning, DL, NLP Bootcamp",
    issuer: "Udemy",
    date: "16 Nov 2025",
    note: "Course completion · 99 hours listed by Udemy.",
    link: { label: "Verify certificate", href: "https://www.udemy.com/certificate/UC-81614f5a-30eb-4296-9fd5-da2dce207abf/" },
  },
  {
    title: "The Complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    date: "6 Aug 2025",
    note: "Course completion · 61.5 hours listed by Udemy.",
    link: { label: "Verify certificate", href: "https://www.udemy.com/certificate/UC-607855cc-ba42-4a5c-bff1-b71896fbd262/" },
  },
  {
    title: "Mastering Data Structures & Algorithms using C and C++",
    issuer: "Udemy",
    date: "23 Apr 2025",
    note: "Course completion · 58.5 hours listed by Udemy.",
    link: { label: "Verify certificate", href: "https://www.udemy.com/certificate/UC-238538f7-6826-4144-bfd4-5b0bf2cbac82/" },
  },
  {
    title: "Managing Stress and Time",
    issuer: "Arizona State University · Coursera",
    date: "1 Mar 2025",
    note: "Non-credit course completion.",
    link: { label: "Verify certificate", href: "https://coursera.org/verify/PBM5TOPV7UER" },
  },
];

type Award = Credential & {
  id: string;
  kind: string;
  description: string;
  icon: "trophy" | "medal" | "code" | "education";
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
  {
    id: "class-rank",
    title: "12th of 56 computer science graduates",
    issuer: "Mirpur University of Science and Technology",
    date: "2021–2025 cohort",
    kind: "Academic standing",
    description: "The university ranked me 12th in my graduating class based on my cumulative performance across the four-year computer science degree.",
    icon: "education",
  },
];
