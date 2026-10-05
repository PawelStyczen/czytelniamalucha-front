import { defineCollection } from "astro:content";
import { glob, type Loader } from "astro/loaders";
import { z } from "astro/zod";
import { blogService } from "./services/blogService";

const blogApiLoader: Loader = {
  name: "blog-api-loader",
  async load({ store, parseData, renderMarkdown, generateDigest }) {
    const summaries = await blogService.getPosts();
    const posts = await Promise.all(
      summaries.map(async (summary) => ({
        ...summary,
        ...(await blogService.getPostById(summary.id)),
      })),
    );

    store.clear();

    for (const post of posts) {
      const data = await parseData({
        id: post.slug,
        data: post,
      });
      const rendered = await renderMarkdown(post.contentMarkdown);

      store.set({
        id: post.slug,
        data,
        body: post.contentMarkdown,
        digest: generateDigest(JSON.stringify(post)),
        rendered,
      });
    }
  },
};

const blog = defineCollection({
  loader: blogApiLoader,
  schema: z.object({
    id: z.string(),
    slug: z.string(),
    title: z.string(),
    excerpt: z.string(),
    contentMarkdown: z.string(),
    coverImage: z
      .string()
      .nullable()
      .transform((value) => value ?? "/img/blog.png"),
    tags: z.array(z.string()),
    authorName: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
  }),
});

const pages = defineCollection({
  loader: glob({
    base: "./src/content/pages",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  blog,
  pages,
};
