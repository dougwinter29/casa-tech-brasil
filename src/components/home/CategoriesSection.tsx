import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/site-config";
import { getCategoryImage } from "@/lib/category-images";
import { ArrowRight } from "lucide-react";

export default function CategoriesSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container-site">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Explore por Categoria
          </h2>
          <p className="text-slate-600 mt-3 text-lg max-w-xl mx-auto">
            Encontre os melhores produtos e guias para cada área da sua casa inteligente.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categorias/${cat.slug}`}
              className="group relative bg-white rounded-2xl border border-slate-100 hover:border-brand-200 hover:shadow-lg transition-all duration-200 overflow-hidden"
            >
              {/* Image area */}
              <div className="relative h-32 overflow-hidden">
                <Image
                  src={getCategoryImage(cat.slug, 400, 250)}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-60`} />
                {/* Emoji icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl drop-shadow-md group-hover:scale-110 transition-transform duration-200">
                    {cat.icon}
                  </span>
                </div>
              </div>

              {/* Text area */}
              <div className="p-4">
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors text-sm leading-tight mb-1">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
                <div className="mt-3 flex items-center gap-1 text-xs text-brand-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Explorar <ArrowRight size={12} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
