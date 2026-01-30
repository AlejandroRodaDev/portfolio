export type ExperienceItem = {
  company: string;
  role: string;
  location?: string;
  start: string; // "YYYY-MM"
  end?: string;  // "Present" or "YYYY-MM"
  bullets: string[];
  tech?: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Abai",
    role: "Software Development Engineer / Analyst",
    location: "Zaragoza, Aragón, Spain",
    start: "2022-09",
    end: "Present",
    bullets: [
      "Technical lead for the Salud Informa project (Government of Aragón): a healthcare ecosystem including a web portal, Android/iOS apps, and multiple web services.",
      "Develop and maintain Java REST services integrated with SOAP web services and Oracle databases, prioritizing reliability, traceability, and clear error handling.",
      "Evolve the Liferay portal (Java portlets) and related internal modules (e.g., call-center inbox), ensuring stability in production environments.",
      "Mobile integrations and push notifications: Android (Google/HMS) and iOS (Swift), using Firebase for notification delivery.",
      "Contributor to Armatum, a cyber-risk assessment platform focused on analyzing and presenting security risk information to support decision-making.",
    ],
    tech: [
      "Java",
      "Liferay",
      "JBoss",
      "Oracle",
      "REST",
      "SOAP",
      "Android",
      "Swift",
      "Firebase",
    ],
  },
  {
    company: "Grupo Oesía",
    role: "Software Development Engineer",
    location: "Spain",
    start: "2020-09",
    end: "2022-09",
    bullets: [
      "Worked on the evolution of Interpública: a suite of desktop applications for public administration management.",
      "Designed and implemented new features with a focus on stability, maintainability, and long-term product quality.",
      "Delivered enterprise-grade solutions using the .NET stack with SQL Server.",
    ],
    tech: [".NET", "C#", "SQL Server"],
  },
];
