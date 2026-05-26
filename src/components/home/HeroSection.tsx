import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

const chips = [
  { icon: "🤖", label: "Robôs Aspiradores", href: "/categorias/robos-aspiradores" },
  { icon: "📷", label: "Câmeras Wi-Fi",      href: "/categorias/cameras-wifi" },
  { icon: "🔐", label: "Fechaduras Digitais",href: "/categorias/fechaduras-digitais" },
  { icon: "💡", label: "Iluminação Smart",   href: "/categorias/iluminacao-smart" },
  { icon: "🗣️", label: "Alexa & Google",    href: "/categorias/assistentes-virtuais" },
  { icon: "📡", label: "Sensores",           href: "/categorias/sensores" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Background dot pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
          className="w-full h-full"
        />
      </div>

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative container-site pt-20 pb-20">
        <div className="max-w-4xl mx-auto text-center">

          {/* Social proof badge */}
          <div className="inline-flex items-center gap-2 bg-brand-500/20 border border-brand-500/30 text-brand-300 text-sm font-medium px-4 py-2 rounded-full mb-8">
            <Zap size={14} className="text-yellow-400" />
            <span>+50.000 leitores mensais • Reviews 100% independentes</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Transforme sua casa em um{" "}
            <span className="bg-gradient-to-r from-sky-200 to-cyan-300 bg-clip-text text-transparent">
              lar inteligente
            </span>
          </h1>

          {/* Subtitle — benefit-led, not feature-led */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Economize horas de pesquisa. Testamos e comparamos os melhores produtos de casa
            inteligente do Brasil —{" "}
            <span className="text-white font-semibold">sem patrocínios que comprometam nossa opinião.</span>
          </p>

          {/* CTAs — produto primeiro (maior conversão) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
            <Link
              href="/melhores-produtos"
              className="group flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-brand-500/30 text-base"
            >
              🏆 Ver os Melhores Produtos
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/blog"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all duration-200 backdrop-blur-sm text-base"
            >
              Explorar Guias Gratuitos
            </Link>
          </div>

          {/* Micro-copy under CTAs */}
          <p className="text-slate-400 text-xs mb-14">
            ✓ Sem cadastro &nbsp;·&nbsp; ✓ Preços verificados hoje &nbsp;·&nbsp; ✓ Frete grátis nos melhores
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-0 max-w-sm mx-auto">
            {[
              { value: "30+",  label: "Guias Completos" },
              { value: "100+", label: "Produtos Avaliados" },
              { value: "100%", label: "Reviews Honestos" },
            ].map((stat, i) => (
              <div key={stat.label} className={`flex-1 text-center ${i < 2 ? "border-r border-white/20" : ""}`}>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clickable category chips */}
      <div className="relative container-site pb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {chips.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-2 bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/25 text-slate-300 hover:text-white text-sm px-4 py-2 rounded-full transition-all duration-200"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
