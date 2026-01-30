export type CertificationItem = {
  name: string;
  issuer?: string;
  year?: string;
  url?: string; // link verificación (si existe)
};

export const certifications: CertificationItem[] = [
  // Ejemplos (rellena solo las que aportan señal real)
  // { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2025", url: "https://..." },
];
