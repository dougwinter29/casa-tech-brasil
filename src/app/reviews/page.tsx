import { Metadata } from "next";
import Link from "next/link";
import { Star, ExternalLink } from "lucide-react";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Reviews — Análises Honestas de Produtos Smart Home",
  description: "Reviews honestos e detalhados dos melhores produtos de casa inteligente. Testados e aprovados pela equipe Casa Tech Brasil.",
  alternates: { canonical: "/reviews" },
};

const reviews = [
  {
    slug: "roborock-s8-review",
    name: "Roborock S8 Pro Ultra",
    category: "Robô Aspirador",
    rating: 9.8,
    price: 4999,
    emoji: "🤖",
    verdict: "O melhor robô aspirador disponível no Brasil em 2026. Sem dúvida.",
    pros: ["Base de auto-esvaziamento completa", "Esfregão sônico com levantamento automático", "Mapeamento laser preciso", "App em português razoável"],
    cons: ["Preço elevado", "App poderia ser melhor em PT-BR"],
    affiliateHref: "#afiliado-roborock-s8",
    postHref: "/blog/melhores-robos-aspiradores-2026",
  },
  {
    slug: "intelbras-fr620-review",
    name: "Intelbras FR 620",
    category: "Fechadura Digital",
    rating: 9.2,
    price: 799,
    emoji: "🔐",
    verdict: "Melhor fechadura digital para o mercado brasileiro. App em português e suporte nacional são diferenciais decisivos.",
    pros: ["Biometria + senha + RFID + Wi-Fi", "App completamente em português", "Suporte técnico nacional", "Preço justo"],
    cons: ["Design não é o mais moderno", "Setup inicial pode ser confuso"],
    affiliateHref: "#afiliado-intelbras-fr620",
    postHref: "/blog/melhores-fechaduras-digitais",
  },
  {
    slug: "echo-dot-5-review",
    name: "Amazon Echo Dot 5ª Geração",
    category: "Assistente Virtual",
    rating: 9.5,
    price: 179,
    emoji: "🗣️",
    verdict: "O melhor investimento em casa inteligente por menos de R$200. Ponto final.",
    pros: ["Melhor compatibilidade do mercado", "Hub Zigbee integrado", "Sensor de temperatura", "Preço imbatível"],
    cons: ["Qualidade de som básica", "Dados de voz vão para Amazon"],
    affiliateHref: "#afiliado-echo-dot-5",
    postHref: "/blog/alexa-vale-a-pena-guia-completo",
  },
  {
    slug: "tapo-c200-review",
    name: "TP-Link Tapo C200",
    category: "Câmera Wi-Fi",
    rating: 8.8,
    price: 169,
    emoji: "📷",
    verdict: "A câmera que recomendamos para quem está começando. Faz tudo que precisa por menos de R$200.",
    pros: ["Pan-tilt 360°", "App completamente em português", "Preço acessível", "Detecção de movimento confiável"],
    cons: ["Resolução 1080p apenas (sem 2K)", "Visão noturna poderia ser melhor"],
    affiliateHref: "#afiliado-tapo-c200",
    postHref: "/blog/melhores-cameras-wifi-casa",
  },
];

function RatingBar({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 bg-slate-100 rounded-full h-2.5 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-brand-500 to-brand-600 rounded-full transition-all"
          style={{ width: `${value * 10}%` }}
        />
      </div>
      <span className="text-sm font-bold text-slate-700 w-8">{value}</span>
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 py-14">
        <div className="container-site text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Reviews</h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            Análises honestas e completas. Testamos cada produto para você tomar a melhor decisão.
          </p>
        </div>
      </div>

      <div className="container-site py-12">
        <div className="space-y-8 max-w-4xl mx-auto">
          {reviews.map((review) => (
            <article
              key={review.slug}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Emoji + Rating */}
                <div className="sm:w-44 bg-gradient-to-br from-slate-50 to-slate-100 flex flex-row sm:flex-col items-center justify-center p-6 gap-3 sm:gap-3">
                  <span className="text-5xl">{review.emoji}</span>
                  <div className="text-center">
                    <div className="text-3xl font-black text-brand-600">{review.rating}</div>
                    <div className="text-xs text-slate-400 font-medium">/ 10</div>
                    <div className="flex mt-1 justify-center">
                      {[1,2,3,4,5].map(s => (
                        <Star key={s} size={10} className={s <= Math.round(review.rating / 2) ? "text-yellow-400 fill-yellow-400" : "text-slate-200 fill-slate-200"} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full">{review.category}</span>
                      <h2 className="text-2xl font-bold text-slate-900 mt-2">{review.name}</h2>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-400">Preço</p>
                      <p className="text-2xl font-bold text-slate-900">{formatPrice(review.price)}</p>
                    </div>
                  </div>

                  <blockquote className="bg-brand-50 border-l-4 border-brand-500 pl-4 py-2 rounded-r-lg mb-4 text-slate-700 font-medium italic text-sm">
                    &ldquo;{review.verdict}&rdquo;
                  </blockquote>

                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div>
                      <p className="text-xs font-bold text-green-600 uppercase mb-2">✓ Pontos Positivos</p>
                      <ul className="space-y-1">
                        {review.pros.map((p) => <li key={p} className="text-xs text-slate-600">• {p}</li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-red-500 uppercase mb-2">✗ Limitações</p>
                      <ul className="space-y-1">
                        {review.cons.map((c) => <li key={c} className="text-xs text-slate-600">• {c}</li>)}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={review.postHref}
                      className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-sm px-4 py-2.5 rounded-xl transition-colors"
                    >
                      Ler review completo
                    </Link>
                    <a
                      href={review.affiliateHref}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold text-sm px-5 py-2.5 rounded-xl transition-colors"
                    >
                      Ver Preço <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="text-center text-xs text-slate-400 mt-8">
          * Links de afiliados. Podemos ganhar comissão nas compras sem custo adicional para você.
        </p>
      </div>
    </div>
  );
}
