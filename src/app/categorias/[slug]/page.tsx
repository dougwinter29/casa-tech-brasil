import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostsByCategory } from "@/lib/posts";
import { categories } from "@/lib/site-config";
import PostCard from "@/components/blog/PostCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return { title: "Categoria não encontrada" };
  return {
    title: `${cat.name} — Guias e Reviews`,
    description: cat.description,
    alternates: { canonical: `/categorias/${slug}` },
  };
}

export default async function CategoriaPage({ params }: Props) {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) notFound();

  const posts = getPostsByCategory(slug);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className={`bg-gradient-to-br ${cat.color} py-16`}>
        <div className="container-site">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/categorias" className="hover:text-white transition-colors">Categorias</Link>
            <span>/</span>
            <span className="text-white">{cat.name}</span>
          </nav>
          <div className="flex items-center gap-4">
            <span className="text-5xl">{cat.icon}</span>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white">{cat.name}</h1>
              <p className="text-white/80 mt-2 text-lg">{cat.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-slate-50">
        <div className="container-site">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <span className="text-5xl mb-4 block">{cat.icon}</span>
              <h2 className="text-2xl font-bold text-slate-700 mb-3">Em breve!</h2>
              <p className="text-slate-500 mb-6">
                Estamos preparando guias completos sobre {cat.name}. Cadastre-se para ser notificado.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-brand-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-brand-700 transition-colors"
              >
                Ver Todos os Artigos
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
