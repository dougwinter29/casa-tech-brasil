import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Star, ExternalLink, TrendingUp, Award, CheckCircle, XCircle } from "lucide-react";
import { formatPrice, calculateDiscount } from "@/lib/utils";
import { affiliateLinks } from "@/lib/affiliate-links";
import { productImages } from "@/lib/category-images";

export const metadata: Metadata = {
  title: "Melhores Produtos de Casa Inteligente 2026",
  description:
    "Os melhores produtos de automação residencial testados e aprovados pela equipe Casa Tech Brasil. Robôs aspiradores, câmeras, fechaduras e muito mais.",
  alternates: { canonical: "/melhores-produtos" },
};

const products = [
  {
    rank: 1,
    category: "Robô Aspirador",
    name: "Roborock S8 Pro Ultra",
    description:
      "O melhor robô aspirador do mercado com base automática completa e sucção de 6.000 Pa. Esfregão sônico que vibra 3.000 vezes por minuto para remover manchas difíceis.",
    price: 4999,
    originalPrice: 5999,
    rating: 4.9,
    reviews: 847,
    pros: ["Base de auto-esvaziamento", "Esfregão sônico", "Mapeamento laser preciso"],
    cons: ["Preço elevado"],
    emoji: "🤖",
    badge: "🥇 Melhor do Teste",
    href: affiliateLinks["roborock"],
    store: "Mercado Livre",
    image: productImages["roborock-s8"],
  },
  {
    rank: 2,
    category: "Assistente Virtual",
    name: "Amazon Echo Dot 5ª Gen",
    description:
      "O hub central ideal para qualquer casa inteligente. Alexa em português, sensor de temperatura embutido e hub Zigbee integrado para conectar outros dispositivos.",
    price: 179,
    originalPrice: 299,
    rating: 4.8,
    reviews: 12340,
    pros: ["Melhor compatibilidade do mercado", "Hub Zigbee integrado", "Preço acessível"],
    cons: ["Qualidade de som básica"],
    emoji: "🗣️",
    badge: "🥈 Melhor Custo-Benefício",
    href: affiliateLinks["echo-dot"],
    store: "Mercado Livre",
    image: productImages["echo-dot-5"],
  },
  {
    rank: 3,
    category: "Câmera de Segurança",
    name: "Reolink Argus 4 Pro",
    description:
      "Câmera externa 4K sem fio com visão panorâmica de 180°. Detecção de pessoas com IA, visão noturna colorida e compatível com painel solar para energia infinita.",
    price: 699,
    originalPrice: 899,
    rating: 4.8,
    reviews: 2341,
    pros: ["4K com visão 180°", "Sem fio (bateria)", "Painel solar opcional"],
    cons: ["App em inglês"],
    emoji: "📷",
    badge: "🥉 Melhor Externa",
    href: affiliateLinks["reolink"],
    store: "Mercado Livre",
    image: productImages["reolink"],
  },
  {
    rank: 4,
    category: "Fechadura Digital",
    name: "Intelbras FR 620",
    description:
      "A melhor fechadura digital nacional: biometria rápida, Wi-Fi nativo, app em português e garantia nacional de 1 ano. Suporte técnico em todo o Brasil.",
    price: 799,
    originalPrice: 999,
    rating: 4.7,
    reviews: 2156,
    pros: ["Biometria + Wi-Fi + App PT-BR", "Suporte nacional", "Custo-benefício excelente"],
    cons: ["Design básico"],
    emoji: "🔐",
    badge: "🏆 Melhor Nacional",
    href: affiliateLinks["intelbras-fr620"],
    store: "Mercado Livre",
    image: productImages["intelbras-fr620"],
  },
  {
    rank: 5,
    category: "Iluminação Smart",
    name: "Govee Tira LED Wi-Fi 5m",
    description:
      "A melhor tira de LED smart por preço acessível. RGB completo com 16 milhões de cores, sincronização com música e app intuitivo. Transforma qualquer ambiente.",
    price: 149,
    originalPrice: 249,
    rating: 4.5,
    reviews: 5621,
    pros: ["RGB completo (16M cores)", "Sync com música", "Fácil instalação"],
    cons: ["Longevidade média"],
    emoji: "💡",
    badge: "⭐ Destaque",
    href: affiliateLinks["govee"],
    store: "Mercado Livre",
    image: productImages["govee"],
  },
  {
    rank: 6,
    category: "Câmera Interna",
    name: "TP-Link Tapo C200",
    description:
      "A câmera Wi-Fi mais vendida do Brasil. Full HD 1080p, pan-tilt 360°, visão noturna infravermelha e app em português. Custo-benefício imbatível.",
    price: 169,
    originalPrice: 229,
    rating: 4.6,
    reviews: 8921,
    pros: ["Pan-tilt 360°", "App em português", "Preço imbatível"],
    cons: ["Resolução 1080p apenas"],
    emoji: "🎥",
    badge: "💎 Mais Vendida BR",
    href: affiliateLinks["tapo-c200"],
    store: "Mercado Livre",
    image: productImages["tapo-c200"],
  },
];

export default function MelhoresProdutosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 py-16">
        <div className="container-site text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Award size={16} /> Testados e Aprovados pela Equipe Casa Tech Brasil
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Melhores Produtos 2026
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Comparamos e testamos dezenas de produtos para recomendar apenas os melhores.
            Atualizado em maio de 2026.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            {[
              { icon: "🔬", label: "Produtos testados in-house" },
              { icon: "📊", label: "Análise técnica detalhada" },
              { icon: "💰", label: "Melhor custo-benefício" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2 text-slate-400 text-sm">
                <span>{s.icon}</span>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12 bg-slate-50">
        <div className="container-site max-w-4xl">
          {/* Top 3 highlight bar */}
          <div className="flex gap-3 overflow-x-auto pb-2 mb-8">
            {products.slice(0, 3).map((p) => (
              <a
                key={p.rank}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex-shrink-0 flex items-center gap-3 bg-white border border-slate-100 hover:border-brand-200 hover:shadow-md rounded-2xl px-4 py-3 transition-all duration-200 group"
              >
                <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">#{p.rank} {p.category}</p>
                  <p className="text-sm font-bold text-slate-800 group-hover:text-brand-600 transition-colors leading-tight">
                    {p.name}
                  </p>
                </div>
                <TrendingUp size={14} className="text-brand-400 shrink-0 ml-1" />
              </a>
            ))}
          </div>

          {/* Product cards */}
          <div className="space-y-5">
            {products.map((product) => {
              const discount = product.originalPrice
                ? calculateDiscount(product.originalPrice, product.price)
                : 0;
              return (
                <div
                  key={product.rank}
                  className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Left: image panel */}
                    <div className="relative h-48 sm:w-44 sm:h-auto shrink-0 bg-slate-100 overflow-hidden">
                      {/* Product image */}
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 176px"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      {/* Rank badge */}
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-slate-900 text-sm font-black w-9 h-9 rounded-full flex items-center justify-center shadow-md">
                        #{product.rank}
                      </div>
                      {/* Category label */}
                      <div className="absolute bottom-3 left-3 right-3">
                        <span className="text-xs font-semibold text-white/90 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-full">
                          {product.category}
                        </span>
                      </div>
                    </div>

                    {/* Right: content */}
                    <div className="flex-1 p-5 sm:p-6 flex flex-col">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <span className="inline-block bg-brand-50 text-brand-700 text-xs font-bold px-2.5 py-1 rounded-full mb-2">
                            {product.badge}
                          </span>
                          <h2 className="text-xl font-bold text-slate-900">{product.name}</h2>
                        </div>
                        <div className="text-right shrink-0">
                          {product.originalPrice && (
                            <p className="text-xs text-slate-400 line-through">
                              {formatPrice(product.originalPrice)}
                            </p>
                          )}
                          <p className="text-2xl font-bold text-slate-900">
                            {formatPrice(product.price)}
                          </p>
                          {discount > 0 && (
                            <span className="text-xs text-red-500 font-semibold">
                              -{discount}% OFF
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="text-slate-600 text-sm mb-4 leading-relaxed flex-1">
                        {product.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-xs font-semibold text-green-600 mb-1.5 flex items-center gap-1">
                            <CheckCircle size={11} /> Pontos Positivos
                          </p>
                          <ul className="space-y-1">
                            {product.pros.map((p) => (
                              <li key={p} className="text-xs text-slate-600 flex items-start gap-1.5">
                                <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                                {p}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-red-500 mb-1.5 flex items-center gap-1">
                            <XCircle size={11} /> Limitações
                          </p>
                          <ul className="space-y-1">
                            {product.cons.map((c) => (
                              <li key={c} className="text-xs text-slate-600 flex items-start gap-1.5">
                                <span className="text-red-400 mt-0.5 shrink-0">✕</span>
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                        <div className="flex items-center gap-1.5">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star
                                key={s}
                                size={12}
                                className={
                                  s <= Math.floor(product.rating)
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-slate-200 fill-slate-200"
                                }
                              />
                            ))}
                          </div>
                          <span className="text-xs text-slate-500">
                            {product.rating} ({product.reviews.toLocaleString("pt-BR")})
                          </span>
                        </div>
                        <a
                          href={product.href}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-sm"
                        >
                          Ver no {product.store}
                          <ExternalLink size={13} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-center text-xs text-slate-400">
            * Links de afiliados. Podemos ganhar comissão nas compras sem custo adicional para
            você. Preços verificados em maio de 2026 e sujeitos a alteração.
          </p>
        </div>
      </div>
    </div>
  );
}
