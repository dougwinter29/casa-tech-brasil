import Link from "next/link";
import { categories } from "@/lib/site-config";
import { ArrowRight } from "lucide-react";

export default function CategoriesSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container-site">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Explore por Categoria
          </h2>
          <p className="text-slate-500 mt-3 text-lg max-w-xl mx-auto">
            Encontre os melhores produtos e guias para cada área da sua casa inteligente.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categorias/${cat.slug}`}
              className="group relative bg-white rounded-2xl border border-slate-100 p-5 hover:border-brand-200 hover:shadow-lg transition-all duration-200 overflow-hidden text-center"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
              <div className="relative">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {cat.icon}
                </div>
                <h3 className="font-semibold text-slate-800 group-hover:text-brand-600 transition-colors text-sm leading-tight mb-1">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
              </div>
              <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs text-brand-600 font-medium flex items-center justify-center gap-1">
                  Explorar <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
