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
    date: "Nov 2025",
    link: { label: "Verify certificate", href: "https://www.udemy.com/certificate/UC-81614f5a-30eb-4296-9fd5-da2dce207abf/" },
  },
  {
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    date: "Aug 2025",
    link: { label: "Verify certificate", href: "https://www.udemy.com/certificate/UC-607855cc-ba42-4a5c-bff1-b71896fbd262/" },
  },
  {
    title: "Mastering Data Structures & Algorithms using C and C++",
    issuer: "Udemy",
    date: "Apr 2025",
    link: { label: "Verify certificate", href: "https://www.udemy.com/certificate/UC-238538f7-6826-4144-bfd4-5b0bf2cbac82/" },
  },
];

export const awards: readonly Credential[] = [
  {
    title: "Best Final-Year Project · Learnify",
    issuer: "Department of Computer Science and Information Technology, MUST",
    date: "Aug 2025",
    note: "Awarded to the Learnify team.",
    link: { label: "Read the case study", href: "/projects/learnify" },
  },
  {
    title: "Computing Quiz Champion",
    issuer: "Mirpur University of Science and Technology",
    date: "May 2024",
    note: "First place in the computing quiz at MUSTCON 24.",
  },
  {
    title: "Speed Coding Champion",
    issuer: "Mirpur University of Science and Technology",
    date: "Feb 2023",
    note: "First place in the university speed coding competition.",
  },
];
