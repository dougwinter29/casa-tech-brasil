import { getAllPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/site-config";
import RSS from "rss";

export async function GET() {
  const posts = getAllPosts();

  const feed = new RSS({
    title: siteConfig.name,
    description: siteConfig.description,
    feed_url: `${siteConfig.url}/feed.xml`,
    site_url: siteConfig.url,
    image_url: `${siteConfig.url}/logo.png`,
    language: "pt-BR",
    pubDate: new Date(),
    copyright: `© ${new Date().getFullYear()} ${siteConfig.name}`,
  });

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      guid: `${siteConfig.url}/blog/${post.slug}`,
      categories: [post.category, ...post.tags],
      date: new Date(post.date),
      author: post.author,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
