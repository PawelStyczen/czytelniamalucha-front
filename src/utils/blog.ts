import { getCollection, type CollectionEntry } from "astro:content";

type BlogPost = CollectionEntry<"blog">;

export async function getBlogPosts(limit?: number): Promise<BlogPost[]> {
  const posts = await getCollection("blog");

  const sortedPosts = posts.sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
  );

  return typeof limit === "number"
    ? sortedPosts.slice(0, limit)
    : sortedPosts;
}
