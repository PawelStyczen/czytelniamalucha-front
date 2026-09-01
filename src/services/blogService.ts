import { apiRequest } from "../lib/api";
import type { BlogPost, BlogPostSummary } from "../types/blog";

const blogEndpoint = "/api/blog";

export const blogService = {
  getPosts(): Promise<BlogPostSummary[]> {
    return apiRequest<BlogPostSummary[]>(blogEndpoint);
  },

  getPostById(id: string): Promise<BlogPost> {
    return apiRequest<BlogPost>(
      `${blogEndpoint}/${encodeURIComponent(id)}`,
    );
  },
};

export function getBlogPostHref(slug: string): string {
  return `/blog/${encodeURIComponent(slug)}/`;
}
