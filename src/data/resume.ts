export const profile = {
  name: "Jawid Sulthan J",
  firstName: "Jawid",
  lastName: "Sulthan J",
  role: "Full-Stack Developer",
  email: "jawidsulthan@gmail.com",
  phone: "+91 9345871489",
  phoneHref: "+919345871489",
  linkedin: "https://www.linkedin.com/in/jawid-sulthan-9518a7355/",
  linkedinLabel: "linkedin.com/in/jawid-sulthan",
  location: "Nagercoil, Kanyakumari District, Tamil Nadu – 629002, India",
  shortLocation: "Nagercoil, Tamil Nadu, India",
  summary:
    "Full-Stack Developer with 1+ year of hands-on experience building responsive and scalable web applications using React.js, Next.js, TypeScript, PostgreSQL, and Prisma ORM. Experienced in end-to-end development, REST API integration, authentication, validation, reusable UI components, and performance optimization. Strong understanding of modern web development practices, clean code, responsive design, and Git/GitHub-based collaboration.",
  availability: "Open to opportunities",
} as const;

export const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
] as const;

export const stats = [
  { value: "1+", label: "Year of hands-on experience" },
  { value: "05", label: "Full-stack projects featured" },
  { value: "2025", label: "B.E. Computer Science, Anna University" },
  { value: "03", label: "Languages spoken" },
] as const;

export const skillGroups = [
  {
    index: "01",
    accent: "#ff4d1a",
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    index: "02",
    accent: "#4f46e5",
    title: "Backend & Database",
    items: ["REST APIs", "PostgreSQL", "Prisma ORM"],
  },
  {
    index: "03",
    accent: "#0284c7",
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Vercel"],
  },
  {
    index: "04",
    accent: "#0d9488",
    title: "Development",
    items: [
      "API Integration",
      "Authentication",
      "Form Validation",
      "Responsive Web Design",
      "UI Component Development",
      "Performance Optimization",
    ],
  },
  {
    index: "05",
    accent: "#d97706",
    title: "Soft Skills",
    items: ["Problem Solving", "Communication", "Teamwork", "Time Management"],
  },
  {
    index: "06",
    accent: "#7c3aed",
    title: "Languages",
    items: ["Tamil — Native", "English — Working proficiency", "Malayalam — Basic"],
  },
] as const;

export const experience = [
  {
    period: "May 2025 — September 2026",
    role: "Web Developer",
    company: "MATT Engineering Solutions",
    location: "Tamil Nadu, India",
    points: [
      "Developed responsive and scalable web applications using React.js, Next.js, TypeScript, and Tailwind CSS.",
      "Contributed to full-stack projects including real-world e-commerce and matrimonial platforms, plus license verification, blockchain voting, and phishing detection applications.",
      "Built reusable UI components and responsive interfaces, improving usability and the overall application experience.",
      "Integrated frontend applications with backend APIs, implemented form validation, and optimized application workflows.",
      "Collaborated on debugging, testing, and deployment while managing version control with Git and GitHub.",
    ],
  },
] as const;

export const education = [
  {
    degree: "Bachelor of Engineering, Computer Science Engineering",
    school: "Anna University",
    location: "Tamil Nadu, India",
    period: "2021 — 2025",
  },
] as const;

export type Project = {
  index: string;
  accent: string;
  kind: "Company project" | "Academic project";
  /** Live deployment URL, when the project is publicly reachable. */
  href?: string;
  title: string;
  summary: string;
  stack: string[];
  points: string[];
};

export const projects: Project[] = [
  {
    index: "01",
    accent: "#ff4d1a",
    kind: "Company project",
    href: "https://orangematt.vercel.app",
    title: "Orange Surgical E-Commerce Platform",
    summary:
      "A B2B and B2C e-commerce platform for surgical and medical products with a complete admin control room.",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma ORM",
      "Razorpay",
      "Firebase",
      "Nodemailer",
      "Zod",
      "React Hook Form",
    ],
    points: [
      "Admin dashboard for products, inventory, orders, reviews, coupons, and promotional banners.",
      "Razorpay for secure online payments and Nodemailer for OTP-based password reset.",
      "B2B flows: company registration, admin approval, purchase orders, and customized pricing.",
    ],
  },
  {
    index: "02",
    accent: "#e11d48",
    kind: "Company project",
    href: "https://www.myindianpartner.com/",
    title: "Matrimony Platform",
    summary:
      "A full-stack matchmaking product — profile creation, intelligent discovery, premium unlocks, and secure chat.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Prisma ORM",
      "PostgreSQL",
      "NextAuth",
      "Cloudinary",
      "Razorpay",
      "Zustand",
      "PDFKit",
    ],
    points: [
      "Secure registration, login, account verification, and detailed matrimonial profile management.",
      "Search, advanced filters, match suggestions, likes, and mutual matching functionality.",
      "Razorpay-powered premium unlocks, plus chat, notifications, and an admin dashboard for the whole platform.",
    ],
  },
  {
    index: "03",
    accent: "#0284c7",
    kind: "Academic project",
    title: "Two-Wheeler License Verification Portal",
    summary:
      "A role-based RTO workflow that runs from document capture all the way to digital licence issuance.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "PostgreSQL", "SWR"],
    points: [
      "Document upload, live photo capture, and riding video submission for applications.",
      "Online traffic rules exam with automatic digital license generation.",
      "RTO officer dashboard to verify, approve, and manage applications.",
    ],
  },
  {
    index: "04",
    accent: "#7c3aed",
    kind: "Academic project",
    title: "Blockchain Voting System",
    summary:
      "Transparent, tamper-proof elections powered by Ethereum smart contracts and live result tracking.",
    stack: ["Next.js", "Tailwind CSS", "Solidity", "Ethereum", "Web3.js", "PostgreSQL", "Prisma ORM"],
    points: [
      "Smart contracts for secure, transparent, and tamper-proof voting.",
      "Admin and voter dashboards for election management and live results.",
      "JWT authentication and password encryption for secure user access.",
    ],
  },
  {
    index: "05",
    accent: "#0d9488",
    kind: "Academic project",
    title: "Phishing Defense System",
    summary:
      "Machine-learning phishing URL detection paired with a practical awareness and training module.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Python (Flask)", "SVM", "PostgreSQL", "Prisma ORM"],
    points: [
      "Python Flask backend integrated with an SVM model to detect phishing URLs.",
      "Awareness module with scam examples, visual guides, and interactive quizzes.",
      "PostgreSQL and Prisma powering user accounts and quiz data.",
    ],
  },
];

export const marqueeItems = [
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Prisma ORM",
  "REST APIs",
  "NextAuth",
  "Zod",
  "React Hook Form",
  "Git",
  "GitHub",
  "Vercel",
  "Solidity",
  "Web3.js",
  "Python",
] as const;
