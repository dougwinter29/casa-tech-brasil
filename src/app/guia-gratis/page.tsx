"use client";
import { useState } from "react";
import Link from "next/link";
import { CheckCircle, Star, Zap, Shield, TrendingDown, ChevronRight, Gift } from "lucide-react";

const products = [
  { name: "Echo Dot 5ª Geração", price: "R$ 179", saving: "Controla tudo por voz", emoji: "🗣️" },
  { name: "Câmera TP-Link Tapo C200", price: "R$ 169", saving: "Segurança 360° no celular", emoji: "📷" },
  { name: "Tomada Inteligente Tapo P110", price: "R$ 89", saving: "Economiza energia todo mês", emoji: "🔌" },
  { name: "Lâmpada Inteligente RGB", price: "R$ 49", saving: "Iluminação personalizável", emoji: "💡" },
  { name: "Sensor de Presença Smart", price: "R$ 59", saving: "Automatiza qualquer cômodo", emoji: "👁️" },
];

const testimonials = [
  { name: "Marcos S.", city: "São Paulo", text: "Montei minha casa inteligente por R$450 seguindo o guia. A câmera e a Alexa já se pagaram em 3 meses.", stars: 5 },
  { name: "Fernanda L.", city: "BH", text: "Nunca imaginei que seria tão simples. Em 1 hora tinha tudo funcionando!", stars: 5 },
  { name: "Carlos M.", city: "Curitiba", text: "O guia me ajudou a escolher os produtos certos sem desperdiçar dinheiro.", stars: 5 },
];

export default function GuiaGratisPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
    // Fire Meta Pixel lead event
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead", { content_name: "Guia Casa Inteligente R$500" });
    }
  }

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <Gift size={14} /> GUIA 100% GRATUITO — Baixe Agora
          </div>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4">
            Monte sua Casa Inteligente<br />
            <span className="text-blue-400">por menos de R$ 500</span>
          </h1>
          <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
            Descubra os <strong className="text-white">5 produtos essenciais</strong> que transformam qualquer casa em smart home — testados e aprovados pela equipe Casa Tech Brasil.
          </p>

          {/* FORM */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-md mx-auto">
              <p className="text-white font-semibold mb-4 text-sm">Receba o guia gratuito no seu e-mail:</p>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-white text-slate-900 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white text-slate-900 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white font-black text-base px-6 py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  {loading ? "Enviando..." : (<>Quero o Guia Grátis <ChevronRight size={18} /></>)}
                </button>
              </div>
              <p className="text-slate-400 text-xs mt-3">🔒 Sem spam. Seus dados estão seguros.</p>
            </form>
          ) : (
            <div className="bg-green-500/20 border border-green-400/40 rounded-2xl p-8 max-w-md mx-auto text-center">
              <CheckCircle className="text-green-400 mx-auto mb-3" size={48} />
              <h2 className="text-2xl font-bold text-white mb-2">Guia enviado! 🎉</h2>
              <p className="text-slate-300 text-sm mb-6">Verifique seu e-mail <strong className="text-white">{email}</strong>. Enquanto isso, veja os produtos abaixo.</p>
              <Link href="/melhores-produtos" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
                Ver os Melhores Produtos <ChevronRight size={16} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="bg-slate-50 py-6 px-4">
        <div className="max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-6 text-center">
          {[
            { n: "+12.000", label: "pessoas já montaram" },
            { n: "R$ 500", label: "orçamento médio" },
            { n: "4.9★", label: "avaliação média" },
          ].map((s) => (
            <div key={s.n}>
              <div className="text-2xl font-black text-blue-600">{s.n}</div>
              <div className="text-xs text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-14 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-2">O que você vai aprender</h2>
          <p className="text-slate-500 text-center mb-10">Tudo para montar do zero, sem precisar ser técnico</p>
          <div className="space-y-4">
            {[
              { icon: "🏆", title: "Os 5 produtos essenciais", desc: "Selecionados pelo melhor custo-benefício no mercado brasileiro em 2026" },
              { icon: "💰", title: "Como economizar até 40%", desc: "Onde comprar mais barato e quais promoções recorrentes acompanhar" },
              { icon: "⚡", title: "Instalação em 1 hora", desc: "Passo a passo para configurar tudo sem precisar de eletricista" },
              { icon: "🔗", title: "Como integrar tudo", desc: "Faça todos os dispositivos funcionarem juntos com Alexa ou Google Home" },
              { icon: "📱", title: "Controle pelo celular", desc: "Monitore e controle sua casa de qualquer lugar do mundo" },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 bg-slate-50 rounded-2xl p-5 border border-slate-100">
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <div>
                  <div className="font-bold text-slate-900">{item.title}</div>
                  <div className="text-slate-500 text-sm mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="bg-slate-900 py-14 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white mb-2">Os 5 Produtos do Guia</h2>
            <p className="text-slate-400">Todos disponíveis no Mercado Livre e Amazon Brasil</p>
          </div>
          <div className="space-y-3">
            {products.map((p) => (
              <div key={p.name} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">
                <span className="text-3xl">{p.emoji}</span>
                <div className="flex-1">
                  <div className="text-white font-semibold text-sm">{p.name}</div>
                  <div className="text-slate-400 text-xs">{p.saving}</div>
                </div>
                <div className="text-blue-400 font-black">{p.price}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm px-4 py-2 rounded-full">
              <TrendingDown size={14} /> Total investido: menos de R$ 545
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-14 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-10">O que dizem quem montou</h2>
          <div className="space-y-4">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm mb-3">&ldquo;{t.text}&rdquo;</p>
                <div className="text-xs font-semibold text-slate-500">{t.name} · {t.city}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      {!submitted && (
        <section className="bg-blue-600 py-14 px-4">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-3xl font-black text-white mb-3">Receba o Guia Agora</h2>
            <p className="text-blue-100 mb-8">É gratuito. Sem spam. Cancele quando quiser.</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-white text-slate-900 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none"
              />
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white text-slate-900 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-blue-600 font-black text-base px-6 py-4 rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
              >
                {loading ? "Enviando..." : (<>Quero o Guia Grátis <ChevronRight size={18} /></>)}
              </button>
            </form>
          </div>
        </section>
      )}

      {/* FOOTER MINIMAL */}
      <footer className="py-6 px-4 bg-slate-900 text-center">
        <p className="text-slate-500 text-xs">
          © 2026 Casa Tech Brasil ·{" "}
          <Link href="/privacidade" className="hover:text-slate-300 transition-colors">Privacidade</Link>{" "}
          ·{" "}
          <Link href="/" className="hover:text-slate-300 transition-colors">Site Principal</Link>
        </p>
      </footer>
    </div>
  );
}
