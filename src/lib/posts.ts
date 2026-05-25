import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "./types";
import { getReadingTime } from "./utils";
import { getCategoryImage } from "./category-images";

const postsDirectory = path.join(process.cwd(), "src/content/posts");

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".mdx"));
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const realSlug = slug.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
    if (!fs.existsSync(fullPath)) return null;
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      slug: realSlug,
      title: data.title || "",
      description: data.description || "",
      date: data.date || new Date().toISOString(),
      lastModified: data.lastModified,
      author: data.author || "Casa Tech Brasil",
      authorBio: data.authorBio,
      category: data.category || "geral",
      tags: data.tags || [],
      // Se o frontmatter tem caminho local (/images/...) que não existe, usa imagem por categoria
      image:
        data.image && !data.image.startsWith("/images/")
          ? data.image
          : getCategoryImage(data.category || "default", 800, 450),
      imageAlt: data.imageAlt || data.title || "",
      readingTime: getReadingTime(content),
      featured: data.featured || false,
      content,
      keywords: data.keywords || [],
      relatedPosts: data.relatedPosts || [],
    };
  } catch {
    return null;
  }
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => post !== null)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
  return posts;
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter((post) => post.category === category);
}

export function getPostsByTag(tag: string): Post[] {
  return getAllPosts().filter((post) => post.tags.includes(tag));
}

export function getFeaturedPosts(limit = 3): Post[] {
  return getAllPosts()
    .filter((post) => post.featured)
    .slice(0, limit);
}

export function getRecentPosts(limit = 6): Post[] {
  return getAllPosts().slice(0, limit);
}

export function getRelatedPosts(post: Post, limit = 3): Post[] {
  const all = getAllPosts().filter((p) => p.slug !== post.slug);
  const sameCat = all.filter((p) => p.category === post.category);
  const sameTag = all.filter((p) => p.tags.some((t) => post.tags.includes(t)));
  const combined = [...new Map([...sameCat, ...sameTag].map((p) => [p.slug, p])).values()];
  return combined.slice(0, limit);
}
