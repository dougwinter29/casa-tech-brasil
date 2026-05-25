import { Metadata } from "next";
import { Suspense } from "react";
import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/blog/PostCard";
import SearchInput from "@/components/search/SearchInput";

interface Props {
  searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { q } = await searchParams;
  return {
    title: q ? `Busca: "${q}" — Casa Tech Brasil` : "Busca — Casa Tech Brasil",
    description: "Busque artigos, guias e reviews sobre automação residencial no Casa Tech Brasil.",
    robots: { index: false, follow: true },
  };
}

export default async function BuscaPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";

  const allPosts = getAllPosts();

  const results = query
    ? allPosts.filter((post) => {
        const text = [post.title, post.description, ...(post.tags ?? [])].join(" ").toLowerCase();
        return query
          .toLowerCase()
          .split(/\s+/)
          .every((term) => text.includes(term));
      })
    : allPosts;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 py-14">
        <div className="container-site">
          <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-6">
            🔍 Buscar Artigos
          </h1>
          <Suspense>
            <SearchInput />
          </Suspense>
        </div>
      </div>

      {/* Results */}
      <div className="container-site py-12">
        {query && (
          <p className="text-slate-500 mb-8 text-sm">
            {results.length > 0
              ? `${results.length} resultado${results.length !== 1 ? "s" : ""} para "${query}"`
              : `Nenhum resultado para "${query}"`}
          </p>
        )}

        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : query ? (
          <div className="text-center py-20">
            <span className="text-5xl mb-4 block">🔎</span>
            <h2 className="text-2xl font-bold text-slate-700 mb-3">
              Nenhum resultado encontrado
            </h2>
            <p className="text-slate-500 mb-6 max-w-md mx-auto">
              Tente buscar por termos diferentes, como &quot;câmera&quot;, &quot;Alexa&quot;,
              &quot;fechadura&quot; ou &quot;robô aspirador&quot;.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPosts.slice(0, 6).map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
