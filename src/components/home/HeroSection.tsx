import Link from "next/link";
import { ArrowRight, Zap, Shield, Smartphone } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
          className="w-full h-full"
        />
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative container-site pt-20 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-500/20 border border-brand-500/30 text-brand-300 text-sm font-medium px-4 py-2 rounded-full mb-8">
            <Zap size={14} className="text-yellow-400" />
            <span>O maior portal de casa inteligente do Brasil</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Transforme sua casa em um{" "}
            <span className="bg-gradient-to-r from-brand-400 to-cyan-400 bg-clip-text text-transparent">
              lar inteligente
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Reviews honestos, comparativos completos e guias passo a passo para você automatizar sua casa com os melhores produtos do mercado.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/blog"
              className="group flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-brand-500/25"
            >
              Explorar Guias
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/melhores-produtos"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all duration-200 backdrop-blur-sm"
            >
              🏆 Melhores Produtos
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
            {[
              { value: "10+", label: "Guias Completos" },
              { value: "50+", label: "Produtos Testados" },
              { value: "100%", label: "Reviews Honestos" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-slate-300 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature chips */}
      <div className="relative container-site pb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { icon: "🤖", label: "Robôs Aspiradores" },
            { icon: "📷", label: "Câmeras Wi-Fi" },
            { icon: "🔐", label: "Fechaduras Digitais" },
            { icon: "💡", label: "Iluminação Smart" },
            { icon: "🗣️", label: "Alexa & Google" },
            { icon: "📡", label: "Sensores" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-sm px-4 py-2 rounded-full transition-colors cursor-default"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
