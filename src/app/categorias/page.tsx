import { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/lib/site-config";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Categorias — Casa Inteligente por Tema",
  description: "Explore produtos e guias de casa inteligente por categoria: robôs aspiradores, câmeras Wi-Fi, fechaduras digitais, iluminação smart e muito mais.",
  alternates: { canonical: "/categorias" },
};

export default function CategoriasPage() {
  const allPosts = getAllPosts();

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="container-site">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Categorias</h1>
          <p className="text-slate-500 text-lg">
            Encontre guias, reviews e comparativos organizados por tipo de produto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {categories.map((cat) => {
            const postCount = allPosts.filter((p) => p.category === cat.slug).length;
            return (
              <Link
                key={cat.slug}
                href={`/categorias/${cat.slug}`}
                className="group bg-white rounded-2xl border border-slate-100 p-6 hover:border-brand-200 hover:shadow-lg transition-all duration-200 block"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  {cat.icon}
                </div>
                <h2 className="font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-2">
                  {cat.name}
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed mb-3">{cat.description}</p>
                <p className="text-xs text-slate-400">
                  {postCount > 0 ? `${postCount} artigo${postCount > 1 ? 's' : ''}` : 'Em breve'}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
