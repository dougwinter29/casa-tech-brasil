import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, Tag, ArrowLeft, ArrowRight, Share2, ExternalLink } from "lucide-react";
import { getPostBySlug, getAllPosts, getRelatedPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import PostCard from "@/components/blog/PostCard";
import NewsletterSection from "@/components/home/NewsletterSection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post não encontrado" };

  const url = `${siteConfig.url}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.lastModified || post.date,
      authors: [post.author],
      tags: post.tags,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description },
    alternates: { canonical: url },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const idx = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = idx < allPosts.length - 1 ? allPosts[idx + 1] : null;
  const nextPost = idx > 0 ? allPosts[idx - 1] : null;
  const related = getRelatedPosts(post, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.svg` },
    },
    datePublished: post.date,
    dateModified: post.lastModified || post.date,
    image: { "@type": "ImageObject", url: `${siteConfig.url}${post.image}` },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/blog/${post.slug}` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${siteConfig.url}/blog/${post.slug}` },
    ],
  };

  // Parse markdown manually for now (simple approach)
  const contentHtml = post.content
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^#### (.+)$/gm, '<h4>$1</h4>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/^\> (.+)$/gm, '<blockquote><p>$1</p></blockquote>')
    .replace(/^\- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, (m) => `<ul>${m}</ul>`)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" rel="noopener noreferrer">$1</a>')
    .replace(/^(?!<[h|u|b|l|a|s|p|c])(.+)$/gm, '<p>$1</p>')
    .replace(/\n{2,}/g, '\n')
    .replace(/\|(.+)\|\n\|[-| ]+\|\n((?:\|.+\|\n?)+)/g, (match) => {
      const lines = match.trim().split('\n');
      const header = lines[0].split('|').filter(Boolean).map(h => `<th>${h.trim()}</th>`).join('');
      const rows = lines.slice(2).map(row => {
        const cells = row.split('|').filter(Boolean).map(c => `<td>${c.trim()}</td>`).join('');
        return `<tr>${cells}</tr>`;
      }).join('');
      return `<div class="overflow-x-auto my-6"><table><thead><tr>${header}</tr></thead><tbody>${rows}</tbody></table></div>`;
    });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-800 pt-10 pb-12">
        <div className="container-site max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-slate-300 truncate max-w-xs">{post.title}</span>
          </nav>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-block bg-brand-500/20 text-brand-300 border border-brand-500/30 text-xs font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
            {post.featured && (
              <span className="inline-block bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 text-xs font-semibold px-3 py-1 rounded-full">
                ⭐ Destaque
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-3xl">
            {post.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {post.readingTime} min de leitura
            </span>
            <span className="text-slate-500">por {post.author}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-site max-w-4xl py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Article */}
          <article className="lg:col-span-3">
            {/* Affiliate disclaimer */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex gap-3">
              <span className="text-lg">ℹ️</span>
              <p className="text-sm text-amber-800">
                <strong>Transparência:</strong> {siteConfig.affiliateDisclaimer}
              </p>
            </div>

            {/* Article content */}
            <div
              className="prose prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {/* Tags */}
            <div className="mt-10 pt-8 border-t border-slate-100">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag}`}
                    className="flex items-center gap-1 bg-slate-100 hover:bg-brand-50 hover:text-brand-600 text-slate-600 text-xs font-medium px-3 py-1.5 rounded-full transition-colors"
                  >
                    <Tag size={11} /> {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Post navigation */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {prevPost && (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="flex items-start gap-3 p-4 bg-slate-50 hover:bg-brand-50 rounded-xl border border-slate-100 hover:border-brand-200 transition-all group"
                >
                  <ArrowLeft size={18} className="text-slate-400 group-hover:text-brand-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-400 mb-1">Anterior</p>
                    <p className="text-sm font-semibold text-slate-700 group-hover:text-brand-600 line-clamp-2 transition-colors">
                      {prevPost.title}
                    </p>
                  </div>
                </Link>
              )}
              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="flex items-start gap-3 p-4 bg-slate-50 hover:bg-brand-50 rounded-xl border border-slate-100 hover:border-brand-200 transition-all group text-right ml-auto col-start-2"
                >
                  <div>
                    <p className="text-xs text-slate-400 mb-1">Próximo</p>
                    <p className="text-sm font-semibold text-slate-700 group-hover:text-brand-600 line-clamp-2 transition-colors">
                      {nextPost.title}
                    </p>
                  </div>
                  <ArrowRight size={18} className="text-slate-400 group-hover:text-brand-600 flex-shrink-0 mt-0.5" />
                </Link>
              )}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* CTA Box */}
              <div className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-2xl p-5 text-white">
                <p className="text-xs font-semibold text-brand-200 mb-2">OFERTA EXCLUSIVA</p>
                <h3 className="font-bold text-lg mb-2">🏆 Melhores Produtos</h3>
                <p className="text-sm text-brand-100 mb-4">
                  Ver os produtos mais bem avaliados do momento.
                </p>
                <Link
                  href="/melhores-produtos"
                  className="flex items-center justify-center gap-2 bg-white text-brand-700 font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-brand-50 transition-colors"
                >
                  Ver Agora <ArrowRight size={14} />
                </Link>
              </div>

              {/* Related Posts */}
              {related.length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-100 p-5">
                  <h3 className="font-bold text-slate-900 mb-4">Artigos Relacionados</h3>
                  <div className="space-y-1">
                    {related.map((rp) => (
                      <PostCard key={rp.slug} post={rp} variant="compact" />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <div className="bg-slate-50 py-12">
          <div className="container-site max-w-4xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Você também pode gostar</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((rp) => (
                <PostCard key={rp.slug} post={rp} />
              ))}
            </div>
          </div>
        </div>
      )}

      <NewsletterSection />
    </>
  );
}
