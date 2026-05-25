"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useTransition } from "react";
import { Search, X } from "lucide-react";

export default function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [value, setValue] = useState(searchParams.get("q") ?? "");

  useEffect(() => {
    setValue(searchParams.get("q") ?? "");
  }, [searchParams]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = value.trim();
    startTransition(() => {
      router.push(q ? `/busca?q=${encodeURIComponent(q)}` : "/busca");
    });
  }

  function handleClear() {
    setValue("");
    startTransition(() => router.push("/busca"));
  }

  return (
    <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto">
      <div className="relative flex items-center">
        <Search
          size={20}
          className="absolute left-4 text-slate-400 pointer-events-none"
        />
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Buscar artigos, guias, reviews..."
          className="w-full pl-12 pr-24 py-4 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 text-base shadow-sm transition-all"
          autoFocus
        />
        {value && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-20 text-slate-400 hover:text-slate-600 transition-colors p-1"
            aria-label="Limpar busca"
          >
            <X size={16} />
          </button>
        )}
        <button
          type="submit"
          disabled={isPending}
          className="absolute right-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors disabled:opacity-60"
        >
          {isPending ? "..." : "Buscar"}
        </button>
      </div>
    </form>
  );
}
