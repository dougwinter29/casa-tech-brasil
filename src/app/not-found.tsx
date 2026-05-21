import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-20 bg-slate-50">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-8xl mb-6">🏠</div>
        <h1 className="text-6xl font-black text-slate-900 mb-2">404</h1>
        <h2 className="text-2xl font-bold text-slate-700 mb-4">Página não encontrada</h2>
        <p className="text-slate-500 mb-8">
          A página que você está procurando não existe ou foi movida. Que tal explorar nosso conteúdo sobre casa inteligente?
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            <Home size={16} /> Ir para Home
          </Link>
          <Link
            href="/blog"
            className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3 rounded-xl border border-slate-200 transition-colors"
          >
            <ArrowLeft size={16} /> Ver Artigos
          </Link>
        </div>
      </div>
    </div>
  );
}
