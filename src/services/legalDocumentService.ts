import { apiRequest } from "../lib/api";

export interface LegalDocument {
  type: "terms" | "privacy-policy";
  version: string;
  effectiveFrom: string;
  title: string;
  description: string;
  contentHtml: string;
  publishedAtUtc: string;
  pdfUrl: string;
}

export function getLegalDocument(
  type: LegalDocument["type"],
): Promise<LegalDocument> {
  return apiRequest<LegalDocument>(`/api/legal/${type}`);
}

export function getCurrentTerms(): Promise<LegalDocument> {
  return getLegalDocument("terms");
}

export function getCurrentPrivacyPolicy(): Promise<LegalDocument> {
  return getLegalDocument("privacy-policy");
}

export function formatLegalEffectiveDate(value: string): string {
  return new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}
