import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getPostsByCategory } from "@/lib/posts";
import PostCard from "@/components/blog/PostCard";
import { categories } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Blog — Guias e Artigos sobre Casa Inteligente",
  description: "Explore nossos guias completos, reviews e artigos sobre automação residencial, gadgets inteligentes, câmeras Wi-Fi, fechaduras digitais e muito mais.",
  alternates: { canonical: "/blog" },
};

interface Props {
  searchParams: Promise<{ categoria?: string }>;
}

export default async function BlogPage({ searchParams }: Props) {
  const params = await searchParams;
  const categoriaAtiva = params.categoria;
  const allPosts = categoriaAtiva
    ? getPostsByCategory(categoriaAtiva)
    : getAllPosts();

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: `Blog — ${siteConfig.name}`,
            url: `${siteConfig.url}/blog`,
            description: "Guias e reviews sobre casa inteligente",
          }),
        }}
      />

      <div className="container-site">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            {categoriaAtiva
              ? `📂 ${categories.find((c) => c.slug === categoriaAtiva)?.name || categoriaAtiva}`
              : "Blog Casa Inteligente"}
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl">
            Guias completos, reviews honestos e comparativos detalhados para você tomar as melhores decisões.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          <Link
            href="/blog"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              !categoriaAtiva
                ? "bg-brand-600 text-white"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-brand-50 hover:text-brand-600"
            }`}
          >
            Todos
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/blog?categoria=${cat.slug}`}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                categoriaAtiva === cat.slug
                  ? "bg-brand-600 text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-brand-50 hover:text-brand-600"
              }`}
            >
              <span>{cat.icon}</span>
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Posts grid */}
        {allPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">Nenhum artigo encontrado nesta categoria.</p>
            <Link href="/blog" className="mt-4 inline-block text-brand-600 hover:underline">
              Ver todos os artigos
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
