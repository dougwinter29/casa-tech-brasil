import { Metadata } from "next";
import Link from "next/link";
import { Star, ExternalLink, TrendingUp, Award } from "lucide-react";
import { formatPrice, calculateDiscount } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Melhores Produtos de Casa Inteligente 2026",
  description: "Os melhores produtos de automação residencial testados e aprovados pela equipe Casa Tech Brasil. Robôs aspiradores, câmeras, fechaduras e muito mais.",
  alternates: { canonical: "/melhores-produtos" },
};

const products = [
  {
    rank: 1, category: "Robô Aspirador", name: "Roborock S8 Pro Ultra",
    description: "O melhor robô aspirador do mercado com base automática completa e sucção de 6.000 Pa.",
    price: 4999, originalPrice: 5999, rating: 4.9, reviews: 847,
    pros: ["Base de auto-esvaziamento", "Esfregão sônico", "Mapeamento laser preciso"],
    cons: ["Preço elevado"],
    emoji: "🤖", badge: "🥇 Melhor do Teste", href: "#afiliado-roborock", store: "Mercado Livre",
  },
  {
    rank: 2, category: "Assistente Virtual", name: "Amazon Echo Dot 5ª Gen",
    description: "O hub central ideal para qualquer casa inteligente. Alexa em português, sensor de temperatura e hub Zigbee integrado.",
    price: 179, originalPrice: 299, rating: 4.8, reviews: 12340,
    pros: ["Melhor compatibilidade do mercado", "Hub Zigbee integrado", "Preço acessível"],
    cons: ["Qualidade de som básica"],
    emoji: "🗣️", badge: "🥈 Melhor Custo-Benefício", href: "#afiliado-echo-dot", store: "Amazon",
  },
  {
    rank: 3, category: "Câmera de Segurança", name: "Reolink Argus 4 Pro",
    description: "Câmera externa 4K sem fio com visão panorâmica de 180°. Nenhuma outra câmera oferece tanta qualidade por esse preço.",
    price: 699, originalPrice: 899, rating: 4.8, reviews: 2341,
    pros: ["4K com visão 180°", "Sem fio (bateria)", "Painel solar opcional"],
    cons: ["App em inglês"],
    emoji: "📷", badge: "🥉 Melhor Externa", href: "#afiliado-reolink", store: "Mercado Livre",
  },
  {
    rank: 4, category: "Fechadura Digital", name: "Intelbras FR 620",
    description: "A melhor fechadura digital nacional: biometria, Wi-Fi, app em português e garantia nacional.",
    price: 799, originalPrice: 999, rating: 4.7, reviews: 2156,
    pros: ["Biometria + Wi-Fi + App PT-BR", "Suporte nacional", "Custo-benefício excelente"],
    cons: ["Design básico"],
    emoji: "🔐", badge: "🏆 Melhor Nacional", href: "#afiliado-intelbras-fr620", store: "Mercado Livre",
  },
  {
    rank: 5, category: "Iluminação Smart", name: "Govee Tira LED Wi-Fi 5m",
    description: "A melhor tira de LED smart por preço acessível. RGB completo, sincronização com música e app intuitivo.",
    price: 149, originalPrice: 249, rating: 4.5, reviews: 5621,
    pros: ["RGB completo", "Sync com música", "Fácil instalação"],
    cons: ["Longevidade média"],
    emoji: "💡", badge: "⭐ Destaque", href: "#afiliado-govee", store: "Amazon",
  },
  {
    rank: 6, category: "Câmera Interna", name: "TP-Link Tapo C200",
    description: "A câmera Wi-Fi mais vendida do Brasil. Full HD, pan-tilt 360° e app em português.",
    price: 169, originalPrice: 229, rating: 4.6, reviews: 8921,
    pros: ["Pan-tilt 360°", "App em português", "Preço imbatível"],
    cons: ["Resolução 1080p apenas"],
    emoji: "🎥", badge: "💎 Mais Vendida BR", href: "#afiliado-tapo-c200", store: "Mercado Livre",
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
            Comparamos e testamos dezenas de produtos para recomendar apenas os melhores. Atualizado em maio de 2026.
          </p>
        </div>
      </div>

      <div className="py-12 bg-slate-50">
        <div className="container-site max-w-4xl">
          <div className="space-y-5">
            {products.map((product) => {
              const discount = product.originalPrice
                ? calculateDiscount(product.originalPrice, product.price)
                : 0;
              return (
                <div
                  key={product.rank}
                  className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Rank + Emoji */}
                    <div className="sm:w-40 bg-gradient-to-br from-slate-50 to-slate-100 flex flex-row sm:flex-col items-center justify-center p-6 gap-3 sm:gap-2">
                      <span className="text-3xl font-black text-slate-200">#{product.rank}</span>
                      <span className="text-4xl">{product.emoji}</span>
                      <span className="text-xs font-bold text-slate-400 text-center">{product.category}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <span className="inline-block bg-brand-50 text-brand-700 text-xs font-bold px-2.5 py-1 rounded-full mb-2">
                            {product.badge}
                          </span>
                          <h2 className="text-xl font-bold text-slate-900">{product.name}</h2>
                        </div>
                        <div className="text-right">
                          {product.originalPrice && (
                            <p className="text-xs text-slate-400 line-through">{formatPrice(product.originalPrice)}</p>
                          )}
                          <p className="text-2xl font-bold text-slate-900">{formatPrice(product.price)}</p>
                          {discount > 0 && (
                            <span className="text-xs text-red-500 font-semibold">-{discount}%</span>
                          )}
                        </div>
                      </div>

                      <p className="text-slate-600 text-sm mb-4">{product.description}</p>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-xs font-semibold text-green-600 mb-1">✓ Pontos Positivos</p>
                          <ul className="space-y-1">
                            {product.pros.map((p) => <li key={p} className="text-xs text-slate-600">{p}</li>)}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-red-500 mb-1">✗ Limitações</p>
                          <ul className="space-y-1">
                            {product.cons.map((c) => <li key={c} className="text-xs text-slate-600">{c}</li>)}
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <div className="flex">
                            {[1,2,3,4,5].map(s => (
                              <Star key={s} size={12} className={s <= Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-slate-200 fill-slate-200"} />
                            ))}
                          </div>
                          <span className="text-xs text-slate-500">{product.rating} ({product.reviews.toLocaleString("pt-BR")} avaliações)</span>
                        </div>
                        <a
                          href={product.href}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold text-sm px-5 py-2.5 rounded-xl transition-colors"
                        >
                          Ver no {product.store} <ExternalLink size={13} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-center text-xs text-slate-400">
            * Links de afiliados. Podemos ganhar comissão nas compras sem custo adicional para você.
          </p>
        </div>
      </div>
    </div>
  );
}
