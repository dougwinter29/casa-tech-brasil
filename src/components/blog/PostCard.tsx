import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, Tag } from "lucide-react";
import { Post } from "@/lib/types";
import { formatDate } from "@/lib/utils";

interface PostCardProps {
  post: Post;
  variant?: "default" | "featured" | "compact";
}

export default function PostCard({ post, variant = "default" }: PostCardProps) {
  if (variant === "compact") {
    return (
      <Link href={`/blog/${post.slug}`} className="group flex gap-4 py-4 border-b border-slate-100 last:border-0 hover:no-underline">
        <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-slate-100">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center text-2xl">
            📱
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-brand-600 font-medium mb-1">{post.category}</p>
          <h3 className="text-sm font-semibold text-slate-800 group-hover:text-brand-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-xs text-slate-400 mt-1">{formatDate(post.date)}</p>
        </div>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link href={`/blog/${post.slug}`} className="group block rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="relative h-52 bg-gradient-to-br from-brand-50 to-brand-100 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl opacity-30">🏠</div>
          </div>
          {post.featured && (
            <div className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2.5 py-1 rounded-full">
              ⭐ Destaque
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
        <div className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-medium text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full">
              {post.category}
            </span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-2 mb-2">
            {post.title}
          </h3>
          <p className="text-sm text-slate-500 line-clamp-2 mb-4">{post.description}</p>
          <div className="flex items-center justify-between text-xs text-slate-400">
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
    <Link href={`/blog/${post.slug}`} className="group block bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden hover:-translate-y-0.5">
      <div className="relative h-44 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-20">
          🏡
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>
      <div className="p-4">
        <span className="inline-block text-xs font-medium text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full mb-3">
          {post.category}
        </span>
        <h3 className="font-bold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-2 mb-2">
          {post.title}
        </h3>
        <p className="text-sm text-slate-500 line-clamp-2 mb-3">{post.description}</p>
        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span className="flex items-center gap-1"><Clock size={11} /> {post.readingTime} min</span>
          <span className="flex items-center gap-1"><Calendar size={11} /> {formatDate(post.date)}</span>
        </div>
      </div>
    </Link>
  );
}
