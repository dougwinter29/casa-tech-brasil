import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar } from "lucide-react";
import { Post } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { getCategoryName } from "@/lib/site-config";

interface PostCardProps {
  post: Post;
  variant?: "default" | "featured" | "compact";
}

export default function PostCard({ post, variant = "default" }: PostCardProps) {
  if (variant === "compact") {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group flex gap-4 py-4 border-b border-slate-100 last:border-0 hover:no-underline"
      >
        <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-slate-100">
          <Image
            src={post.image}
            alt={post.imageAlt || post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="80px"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-brand-600 font-semibold mb-1">{getCategoryName(post.category)}</p>
          <h3 className="text-sm font-semibold text-slate-800 group-hover:text-brand-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-xs text-slate-500 mt-1">{formatDate(post.date)}</p>
        </div>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group block rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      >
        <div className="relative h-64 bg-slate-100 overflow-hidden">
          <Image
            src={post.image}
            alt={post.imageAlt || post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 66vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          {post.featured && (
            <div className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2.5 py-1 rounded-full z-10">
              ⭐ Destaque
            </div>
          )}
          <div className="absolute bottom-4 left-4 z-10">
            <span className="text-xs font-semibold text-white bg-brand-600/80 backdrop-blur-sm px-2.5 py-1 rounded-full">
              {getCategoryName(post.category)}
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-2 mb-2">
            {post.title}
          </h3>
          <p className="text-sm text-slate-600 line-clamp-2 mb-4">{post.description}</p>
          <div className="flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-1">
              <Calendar size={12} />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={12} />
              <span>{post.readingTime} min de leitura</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden hover:-translate-y-0.5"
    >
      <div className="relative h-44 bg-slate-100 overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt || post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3">
          <span className="text-xs font-semibold text-white bg-brand-600/80 backdrop-blur-sm px-2.5 py-1 rounded-full">
            {getCategoryName(post.category)}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-2 mb-2">
          {post.title}
        </h3>
        <p className="text-sm text-slate-600 line-clamp-2 mb-3">{post.description}</p>
        <div className="flex items-center gap-3 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <Clock size={11} /> {post.readingTime} min
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={11} /> {formatDate(post.date)}
          </span>
        </div>
      </div>
    </Link>
  );
}
