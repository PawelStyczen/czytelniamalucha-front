export type BlogPostSummary = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string | null;
  tags: string[];
  authorName: string;
  publishedAt: string;
};

export type BlogPost = BlogPostSummary & {
  contentMarkdown: string;
  updatedAt: string;
};
