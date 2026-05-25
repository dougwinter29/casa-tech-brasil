import Link from "next/link";
import Image from "next/image";
import { Star, ExternalLink, TrendingUp } from "lucide-react";
import { formatPrice, calculateDiscount } from "@/lib/utils";
import { affiliateLinks } from "@/lib/affiliate-links";
import { productImages } from "@/lib/category-images";

const featuredProducts = [
  {
    id: "roborock-s8",
    name: "Roborock S8 Pro Ultra",
    description: "Melhor robô aspirador de 2026 com base de auto-esvaziamento e esfregão sônico",
    price: 4999,
    originalPrice: 5999,
    rating: 4.9,
    reviewCount: 847,
    category: "Robô Aspirador",
    badge: "Melhor do Teste",
    image: productImages["roborock-s8"],
    affiliateUrl: affiliateLinks["roborock-s8"],
    store: "mercadolivre",
  },
  {
    id: "echo-dot-5",
    name: "Amazon Echo Dot 5ª Geração",
    description: "O hub central de toda casa inteligente com Alexa em português",
    price: 179,
    originalPrice: 299,
    rating: 4.8,
    reviewCount: 12340,
    category: "Assistente de Voz",
    badge: "Mais Vendido",
    image: productImages["echo-dot-5"],
    affiliateUrl: affiliateLinks["echo-dot-5"],
    store: "mercadolivre",
  },
  {
    id: "intelbras-fr620",
    name: "Intelbras FR 620",
    description: "Melhor fechadura digital nacional com biometria, Wi-Fi e app em português",
    price: 799,
    originalPrice: 999,
    rating: 4.7,
    reviewCount: 2156,
    category: "Fechadura Digital",
    badge: "Escolha Nacional",
    image: productImages["intelbras-fr620"],
    affiliateUrl: affiliateLinks["intelbras-fr620"],
    store: "mercadolivre",
  },
  {
    id: "tapo-c200",
    name: "TP-Link Tapo C200",
    description: "Câmera de segurança Wi-Fi Full HD com pan-tilt e visão noturna",
    price: 169,
    originalPrice: 229,
    rating: 4.6,
    reviewCount: 8921,
    category: "Câmera Wi-Fi",
    badge: "Custo-Benefício",
    image: productImages["tapo-c200"],
    affiliateUrl: affiliateLinks["tapo-c200"],
    store: "mercadolivre",
  },
];

const storeLabels: Record<string, string> = {
  mercadolivre: "Mercado Livre",
  amazon: "Amazon",
};

const storeBtnColors: Record<string, string> = {
  mercadolivre: "bg-yellow-400 hover:bg-yellow-500 text-yellow-900",
  amazon: "bg-orange-400 hover:bg-orange-500 text-white",
};

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="container-site">
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={20} className="text-brand-600" />
              <span className="text-sm font-semibold text-brand-600 uppercase tracking-wide">
                Recomendados
              </span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Melhores Produtos</h2>
          </div>
          <Link
            href="/melhores-produtos"
            className="text-sm font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1 transition-colors"
          >
            Ver todos <ExternalLink size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredProducts.map((product) => {
            const discount = product.originalPrice
              ? calculateDiscount(product.originalPrice, product.price)
              : 0;

            return (
              <div
                key={product.id}
                className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Image area */}
                <div className="relative h-44 bg-slate-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-brand-600 text-white text-xs font-bold px-2.5 py-1 rounded-full z-10">
                      {product.badge}
                    </div>
                  )}
                  {discount > 0 && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                      -{discount}%
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <p className="text-xs text-brand-600 font-semibold mb-1">{product.category}</p>
                  <h3 className="font-bold text-slate-900 mb-1 leading-tight">{product.name}</h3>
                  <p className="text-xs text-slate-600 mb-3 line-clamp-2 flex-1">{product.description}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={12}
                          className={
                            star <= Math.floor(product.rating)
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-slate-200 fill-slate-200"
                          }
                        />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500">
                      {product.rating} ({product.reviewCount.toLocaleString("pt-BR")})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-3">
                    {product.originalPrice && (
                      <p className="text-xs text-slate-500 line-through">
                        {formatPrice(product.originalPrice)}
                      </p>
                    )}
                    <p className="text-xl font-bold text-slate-900">{formatPrice(product.price)}</p>
                  </div>

                  {/* CTA */}
                  <a
                    href={product.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className={`flex items-center justify-center gap-2 text-sm font-bold px-4 py-2.5 rounded-xl transition-all duration-200 hover:scale-[1.02] ${
                      storeBtnColors[product.store] ?? "bg-brand-600 text-white hover:bg-brand-700"
                    }`}
                  >
                    Ver no {storeLabels[product.store] ?? "Loja"}
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          * Links de afiliados. Podemos ganhar comissão nas compras, sem custo adicional para você.
        </p>
      </div>
    </section>
  );
}
