import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Star, ExternalLink, CheckCircle, XCircle } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { affiliateLinks } from "@/lib/affiliate-links";
import { productImages } from "@/lib/category-images";

export const metadata: Metadata = {
  title: "Reviews — Análises Honestas de Produtos Smart Home",
  description:
    "Reviews honestos e detalhados dos melhores produtos de casa inteligente. Testados e aprovados pela equipe Casa Tech Brasil.",
  alternates: { canonical: "/reviews" },
};

const reviews = [
  {
    slug: "roborock-s8-review",
    name: "Roborock S8 Pro Ultra",
    category: "Robô Aspirador",
    rating: 9.8,
    price: 4999,
    image: productImages["roborock-s8"],
    verdict:
      "O melhor robô aspirador disponível no Brasil em 2026. Sem dúvida.",
    pros: [
      "Base de auto-esvaziamento completa",
      "Esfregão sônico com levantamento automático",
      "Mapeamento laser preciso",
      "App em português razoável",
    ],
    cons: ["Preço elevado", "App poderia ser melhor em PT-BR"],
    affiliateHref: affiliateLinks["roborock-s8"],
    postHref: "/blog/melhores-robos-aspiradores-2026",
  },
  {
    slug: "intelbras-fr620-review",
    name: "Intelbras FR 620",
    category: "Fechadura Digital",
    rating: 9.2,
    price: 799,
    image: productImages["intelbras-fr620"],
    verdict:
      "Melhor fechadura digital para o mercado brasileiro. App em português e suporte nacional são diferenciais decisivos.",
    pros: [
      "Biometria + senha + RFID + Wi-Fi",
      "App completamente em português",
      "Suporte técnico nacional",
      "Preço justo",
    ],
    cons: ["Design não é o mais moderno", "Setup inicial pode ser confuso"],
    affiliateHref: affiliateLinks["intelbras-fr620"],
    postHref: "/blog/melhores-fechaduras-digitais",
  },
  {
    slug: "echo-dot-5-review",
    name: "Amazon Echo Dot 5ª Geração",
    category: "Assistente Virtual",
    rating: 9.5,
    price: 179,
    image: productImages["echo-dot-5"],
    verdict:
      "O melhor investimento em casa inteligente por menos de R$200. Ponto final.",
    pros: [
      "Melhor compatibilidade do mercado",
      "Hub Zigbee integrado",
      "Sensor de temperatura",
      "Preço imbatível",
    ],
    cons: ["Qualidade de som básica", "Dados de voz vão para Amazon"],
    affiliateHref: affiliateLinks["echo-dot-5"],
    postHref: "/blog/alexa-vale-a-pena-guia-completo",
  },
  {
    slug: "tapo-c200-review",
    name: "TP-Link Tapo C200",
    category: "Câmera Wi-Fi",
    rating: 8.8,
    price: 169,
    image: productImages["tapo-c200"],
    verdict:
      "A câmera que recomendamos para quem está começando. Faz tudo que precisa por menos de R$200.",
    pros: [
      "Pan-tilt 360°",
      "App completamente em português",
      "Preço acessível",
      "Detecção de movimento confiável",
    ],
    cons: ["Resolução 1080p apenas (sem 2K)", "Visão noturna poderia ser melhor"],
    affiliateHref: affiliateLinks["tapo-c200"],
    postHref: "/blog/melhores-cameras-wifi-casa",
  },
];

function RatingBar({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 bg-slate-100 rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-brand-500 to-brand-600 rounded-full transition-all"
          style={{ width: `${value * 10}%` }}
        />
      </div>
      <span className="text-sm font-bold text-slate-700 w-8 shrink-0">{value}</span>
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
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
              className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Left: product image + score */}
                <div className="relative sm:w-48 shrink-0">
                  {/* Product photo */}
                  <div className="relative h-44 sm:h-56 overflow-hidden bg-slate-100">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 192px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    {/* Category badge */}
                    <div className="absolute bottom-3 left-3">
                      <span className="text-xs font-semibold text-white bg-brand-600/80 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        {review.category}
                      </span>
                    </div>
                  </div>
                  {/* Score panel */}
                  <div className="bg-gradient-to-br from-slate-50 to-white px-4 py-3 flex items-center justify-between sm:flex-col sm:items-center sm:gap-1 border-t border-slate-100">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                      Nota Geral
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-brand-600">
                        {review.rating}
                      </span>
                      <span className="text-slate-400 text-sm font-medium">/10</span>
                    </div>
                    <div className="sm:w-full">
                      <RatingBar value={review.rating} />
                    </div>
                    <div className="flex sm:justify-center">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          size={11}
                          className={
                            s <= Math.round(review.rating / 2)
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-slate-200 fill-slate-200"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: content */}
                <div className="flex-1 p-5 sm:p-6 flex flex-col">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <h2 className="text-xl font-bold text-slate-900">{review.name}</h2>
                    <div className="text-right shrink-0">
                      <p className="text-xs text-slate-400">Preço atual</p>
                      <p className="text-xl font-bold text-slate-900">
                        {formatPrice(review.price)}
                      </p>
                    </div>
                  </div>

                  <blockquote className="bg-brand-50 border-l-4 border-brand-500 pl-4 py-2 rounded-r-lg mb-4 text-slate-700 font-medium italic text-sm leading-relaxed">
                    &ldquo;{review.verdict}&rdquo;
                  </blockquote>

                  <div className="grid grid-cols-2 gap-4 mb-5 flex-1">
                    <div>
                      <p className="text-xs font-bold text-green-600 mb-2 flex items-center gap-1">
                        <CheckCircle size={11} /> Pontos Positivos
                      </p>
                      <ul className="space-y-1.5">
                        {review.pros.map((p) => (
                          <li key={p} className="text-xs text-slate-600 flex items-start gap-1.5">
                            <span className="text-green-500 shrink-0 mt-0.5">✓</span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-red-500 mb-2 flex items-center gap-1">
                        <XCircle size={11} /> Limitações
                      </p>
                      <ul className="space-y-1.5">
                        {review.cons.map((c) => (
                          <li key={c} className="text-xs text-slate-600 flex items-start gap-1.5">
                            <span className="text-red-400 shrink-0 mt-0.5">✕</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-3 border-t border-slate-50">
                    <Link
                      href={review.postHref}
                      className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors"
                    >
                      Ler review completo
                    </Link>
                    <a
                      href={review.affiliateHref}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-sm"
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
