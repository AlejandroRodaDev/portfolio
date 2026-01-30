export type EducationItem = {
  title: string;
  institution: string;
  start?: string;
  end?: string;
  notes?: string[];
};

export const education: EducationItem[] = [
  {
    title: "Higher Vocational Training (HNC) · Multiplatform Application Development (DAM)",
    institution: "Colegio Montessori",
    start: "2018",
    end: "2020",
    notes: [
      "Cross-platform development, secure data access, documentation, and usability/quality standards.",
    ],
  },
  {
    title: "Intermediate Vocational Training · Microcomputer Systems and Networks (SMR)",
    institution: "Colegio Montessori",
    start: "2015",
    end: "2017",
    notes: [
      "Hardware assembly and maintenance, servers, networking, operating systems, and security fundamentals.",
    ],
  },
];
