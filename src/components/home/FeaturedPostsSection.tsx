import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PostCard from "@/components/blog/PostCard";
import { Post } from "@/lib/types";

interface Props {
  posts: Post[];
}

export default function FeaturedPostsSection({ posts }: Props) {
  if (!posts.length) return null;

  const [main, ...rest] = posts;

  return (
    <section className="py-16 bg-slate-50">
      <div className="container-site">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Guias Mais Lidos</h2>
            <p className="text-slate-500 mt-1">Pesquisa pronta: comparamos tudo para você decidir melhor</p>
          </div>
          <Link
            href="/blog"
            className="text-sm font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1 transition-colors"
          >
            Ver todos <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main featured post */}
          <div className="lg:col-span-2">
            <PostCard post={main} variant="featured" />
          </div>

          {/* Side posts */}
          <div className="flex flex-col gap-4">
            {rest.slice(0, 3).map((post) => (
              <PostCard key={post.slug} post={post} variant="compact" />
            ))}
            <Link
              href="/blog"
              className="flex items-center justify-center gap-2 bg-brand-50 hover:bg-brand-100 text-brand-600 font-semibold text-sm px-4 py-3 rounded-xl transition-colors mt-2"
            >
              Ver todos os artigos <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
