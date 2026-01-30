export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  highlights: string[];
  company?: string;
  kind?: "Company" | "Personal"; // <- NEW (optional)
  links?: {
    demo?: string;
    repo?: string;
    article?: string;
    articles?: { label: string; url: string }[];
    web?: string;
    appStore?: string;
    playStore?: string;
  };
};


export const projects: Project[] = [
 {
  slug: "salud-informa",
  title: "Salud Informa (healthcare ecosystem)",
  company: "Abai · Government of Aragón",
  summary:
    "Web portal + mobile apps + backend services. Integrations, Java REST APIs, Oracle database, and SOAP web services connectivity.",
  stack: ["Java", "Liferay", "JBoss", "Oracle", "REST", "SOAP", "Android", "Swift", "Firebase"],
  highlights: [
    "Java REST backend integrated with Oracle and multiple SOAP web services.",
    "Development and evolution of Liferay portlets and related portal modules.",
    "Support for Android (Google/HMS) and iOS (Swift) apps, plus push notifications via Firebase.",
  ],
  links: {
    web: "https://www.saludinforma.es/portalsi/web/salud/inicio",
    appStore: "https://apps.apple.com/es/app/salud-informa/id1102812328",
    playStore: "https://play.google.com/store/apps/details?id=es.saludinforma.android&pcampaignid=web_share",
    articles: [
      { label: "Heraldo de Aragón", url: "https://www.heraldo.es/noticias/aragon/2024/02/01/aragon-actualiza-la-aplicacion-salud-informa-1707897.html" },
      { label: "Aragón Digital", url: "https://www.aragondigital.es/articulo/sanidad/salud-informa-estrena-carpeta-mis-datos-todo-que-incluye/20251201125106955059.html" },
    ],
  },
},
  {
    slug: "armatum",
    title: "Armatum (cyber risk assessment)",
    company: "Abai",
    summary:
      "A platform for economic, quantitative, and qualitative cyber risk assessment to support decision-making.",
    stack: [".NET", "C#", "SQL Server", "Risk Analysis"],
    highlights: [
      "Gathering, analyzing, and presenting security risk information.",
      "Designed to enable informed decisions to mitigate and manage cyber risk.",
      "Enterprise environment using the .NET + SQL Server stack.",
    ],
    links: {
      article: "https://cincodias.elpais.com/cincodias/2023/05/11/pymes/1683815054_147335.html",
    },
  },
  {
      slug: "interpublica",
  title: "Interpública (public sector digital platform)",
  company: "Grupo Oesía",
  summary:
    "Grupo Oesía’s digital platform for modernizing and digitizing public administrations in Spain—improving operational efficiency and citizen-facing services.",
  stack: [".NET", "C#", "SQL Server"],
  highlights: [
    "Contributed to the evolution of an enterprise platform used in public sector environments.",
    "Built and improved features focused on stability, maintainability, and long-term scalability.",
    "Worked in a .NET + SQL Server stack, delivering incremental improvements in a production context.",
  ],
     links: {
    web: "https://grupooesia.com/areas/interpublica/",
  },
  },
  {
  slug: "portfolio",
  title: "Portfolio (this website)",
    company: "Personal project",
  summary:
    "Minimal, Apple-inspired personal website built with Next.js and Tailwind. Focused on clarity, typography, and performance.",
  stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  highlights: [
    "Responsive layout with reusable UI components and consistent spacing/typography.",
    "Project carousel + modal details for a polished browsing experience.",
    "SEO-friendly structure and clean content modeling (projects, experience, education).",
  ],
  links: {
    demo: "https://TU-DOMINIO.com",
    repo: "https://github.com/AlejandroRodaDev/portfolio.git",
  },
}
];
