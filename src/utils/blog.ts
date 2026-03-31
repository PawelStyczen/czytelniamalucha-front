import { getCollection, type CollectionEntry } from "astro:content";

type BlogPost = CollectionEntry<"blog">;

export async function getPublishedBlogPosts(limit?: number): Promise<BlogPost[]> {
  const posts = await getCollection("blog");

  const publishedPosts = posts
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  return typeof limit === "number"
    ? publishedPosts.slice(0, limit)
    : publishedPosts;
}
