import { apiRequest } from "../lib/api";

export interface LegalDocument {
  version: string;
  effectiveFrom: string;
  title: string;
  description: string;
  contentHtml: string;
  pdfUrl: string;
}

export function getCurrentTerms(): Promise<LegalDocument> {
  return apiRequest<LegalDocument>("/api/legal/terms");
}
